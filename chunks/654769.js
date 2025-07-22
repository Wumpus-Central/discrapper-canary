(n.d(t, { Z: () => J }), n(388685), n(35282), n(358797), n(539854), n(997841));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(525654),
    s = n.n(o),
    l = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(811627),
    _ = n(330619),
    f = n(863065),
    p = n(691294),
    h = n(460181),
    m = n(474873),
    g = n(135906),
    E = n(378233),
    b = n(592125),
    y = n(292959),
    O = n(699516),
    v = n(246946),
    I = n(594174),
    T = n(626135),
    S = n(630388),
    A = n(5192),
    N = n(358085),
    C = n(998502),
    R = n(981631);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = N.isPlatformEmbedded && (0, N.isWindows)(),
    M = x && 10 > parseFloat(l.Z.os.release),
    k = !0;
if (x && !M) {
    let [e, , t] = l.Z.os.release.split('.');
    k = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let j = new u.Z('NotificationUtils'),
    U = (x && k) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function G() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications'))
        try {
            return await C.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
        } catch (e) {
            j.warn('Fetching native notification settings failed with error: ', e);
        }
    return null;
}
async function B() {
    let e = await G();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function V(e, t) {
    var n;
    return null != (n = (0, g.Z)(null != t ? t : m.Z.getSoundpack())[e]) ? n : e;
}
async function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await B())
        try {
            await C.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: V(e, n) });
            return;
        } catch (e) {
            j.warn('Native notification sound failed with error: ', e);
        }
    (0, h.GN)(e, t, void 0, n);
}
let Z = a().throttle(F, 1000, { leading: !0 });
function H() {
    C.ZP.flashFrame(!1);
}
x && (window.addEventListener('focus', H), C.ZP.on('MAIN_WINDOW_FOCUS', H));
let Y = window.Notification;
if (M) {
    let e = {};
    (C.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        C.ZP.send('NOTIFICATIONS_CLEAR'),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], C.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: r }) {
                (P(this, 'id', Y._id++),
                    P(this, 'title', void 0),
                    P(this, 'body', void 0),
                    P(this, 'icon', void 0),
                    P(this, 'onshow', function () {}),
                    P(this, 'onclick', function () {}),
                    P(this, 'onclose', function () {}),
                    t.includes('\0') ? (j.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (j.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    C.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    }));
            }
        }),
        P(r, 'permission', 'granted'),
        P(r, '_id', 0),
        (Y = r));
}
let W = {};
if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
    try {
        (C.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n, r) => {
            if ('dismiss' === t) return void delete W[n];
            {
                var i, a, o;
                let e = W[n];
                (N.isPlatformEmbedded ? C.ZP.focus() : window.focus(), (null == e || null == (i = e.options) ? void 0 : i.omitClickTracking) || (T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: 'CLICK' }, e.trackingProps)), T.default.track(R.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)), null == e || null == (o = e.options) || null == (a = o.onClick) || a.call(o, r));
                return;
            }
        }),
            C.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS'));
    } catch (e) {
        j.warn('Native notification setup failed with error: ', e);
    }
    (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications_provisional')) &&
        q().then((e) => {
            e || C.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION', !0).catch(() => {});
        });
}
function K(e) {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications'))
        try {
            C.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            j.warn('Native notification authorization failed with error: ', e);
        }
    null != Y &&
        Y.requestPermission(async () => {
            null != e && e(await z());
        });
}
async function z() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
        let e = await G();
        return (null == e ? void 0 : e.authorizationStatus) === 'authorized' || (null == e ? void 0 : e.authorizationStatus) === 'provisional';
    }
    return null != Y && 'granted' === Y.permission;
}
async function q() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
        var e;
        return (null == (e = await G()) ? void 0 : e.authorizationStatus) !== 'undetermined';
    }
    return null != Y && 'default' !== Y.permission;
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? Z(e, t, n) : F(e, t, n);
}
async function Q(e, t, n, r, i) {
    var a, o, s, l, u, h, m;
    let g,
        P = await G(),
        D = (null == P ? void 0 : P.authorizationStatus) === 'authorized' || (null == P ? void 0 : P.authorizationStatus) === 'provisional',
        M = null != P ? D : await z(),
        B = D && (!x || (0, _.R)({ location: 'showNotification' }).enabled),
        F = v.Z.disableNotifications && null == i.overrideStreamerMode,
        Z = !N.isPlatformEmbedded || ((0, N.isMac)() && B) || C.ZP.shouldDisplayNotifications(),
        H = !F && M && Z,
        K = L(w({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0
        }),
        q = K,
        Q = K;
    if (((r.banner = await (0, f.K)()), !H)) {
        null != i.sound && !1 !== i.playSoundIfDisabled && (X(i.sound, null != (a = i.volume) ? a : 1, i.soundpack), (r.ping = !0), i.omitViewTracking || T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: 'VIEW' }, r)));
        return;
    }
    (t.includes('\0') && (j.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (j.warn('Notification body contains null character, setting to empty string'), (n = '')));
    let J = null != (o = null == i ? void 0 : i.tag) ? o : null,
        $ = B && (null == P ? void 0 : P.sound) === !0 && (null == P ? void 0 : P.authorizationStatus) === 'authorized',
        ee = (e, t) => {
            var n;
            (null == (n = i.onShown) || n.call(i), i.omitViewTracking || (T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: 'VIEW' }, t)), T.default.track(R.rMx.NOTIFICATION_VIEWED, Q)), U && setTimeout(() => e.close(), 5000));
        };
    if ((null == i.sound || $ || (X(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), (r.ping = !0)), i.isUserAvatar && null != e && (e = await (0, p.D)(e)), x && y.Z.taskbarFlash && C.ZP.flashFrame(!0), B)) {
        let a = {
            title: t,
            body: n
        };
        (null != e && (a.icon = e), (null == i ? void 0 : i.sound) != null && (a.sound = V(i.sound, i.soundpack)), (null == i ? void 0 : i.tag) != null && (a.identifier = i.tag), Array.isArray(i.actions) && (a.actions = i.actions));
        let o = d.Z.getCurrentConfig(
            { location: 'showNotification' },
            {
                autoTrackExposure: !0,
                disable: null == i.messageRecord
            }
        );
        if (null != i.messageRecord && o.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            a.threadIdentifier = e;
            let n = b.Z.getChannel(e);
            null != n && (a.groupName = (0, c.F6)(n, I.default, O.Z));
            let r = null == n ? void 0 : n.getGuildId();
            if (((a.senderIdentifier = t.id), (a.senderDisplayName = A.ZP.getName(r, e, t)), (a.senderAvatar = t.getAvatarURL(r, 128, !1, !1)), (a.attachments = []), o.includeStickers))
                for (let e of (0, E.cv)(i.messageRecord)) {
                    let t = (0, E.Q6)(e, { isPreview: !0 });
                    null != t &&
                        a.attachments.push({
                            url: t,
                            type: 'image/png'
                        });
                }
            if (o.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, S.yE)(null != (u = e.flags) ? u : 0, R.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, S.yE)(null != (h = e.flags) ? h : 0, R.J0y.IS_SPOILER) &&
                        (null == (l = e.content_type) ? void 0 : l.startsWith('image/')) &&
                        a.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type
                        });
        }
        try {
            let e = await C.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
            W[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: q
            };
            let t = {
                close() {
                    try {
                        C.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                    } catch (e) {
                        j.warn('Native notification removal failed with error: ', e);
                    }
                }
            };
            return (
                ee(t, r),
                {
                    notification: t,
                    trackingProps: r
                }
            );
        } catch (e) {
            j.warn('Native notification failed with error: ', e);
        }
    }
    null != i.sound && B && (X(i.sound, null != (m = i.volume) ? m : 1, i.soundpack), (r.ping = !0));
    let et = {
        icon: e,
        body: n,
        tag: J,
        silent: !0
    };
    try {
        g = new Y(t, et);
    } catch (e) {
        return;
    }
    return (ee(g, r),
    (g.onclick = (e) => {
        var t;
        (N.isPlatformEmbedded ? C.ZP.focus() : (window.focus(), g.close()), i.omitClickTracking || (T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: 'CLICK' }, r)), T.default.track(R.rMx.NOTIFICATION_CLICKED, q)));
        let n = '';
        null == (t = i.onClick) || t.call(i, n);
    }),
    k)
        ? {
              notification: g,
              trackingProps: r
          }
        : {
              notification: {
                  close() {
                      var e;
                      null == g || null == (e = g.onclose) || e.call(g);
                  }
              },
              trackingProps: r
          };
}
let J = {
    hasPermission: z,
    requestPermission: K,
    showNotification: Q,
    playNotificationSound: F
};
