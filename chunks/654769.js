(n.d(t, { Z: () => Q }), n(388685), n(35282), n(358797), n(539854), n(997841));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(525654),
    s = n.n(o),
    l = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(811627),
    f = n(863065),
    _ = n(691294),
    p = n(460181),
    h = n(474873),
    m = n(135906),
    g = n(378233),
    E = n(592125),
    b = n(292959),
    y = n(699516),
    O = n(246946),
    v = n(594174),
    I = n(626135),
    T = n(630388),
    S = n(5192),
    A = n(358085),
    N = n(998502),
    C = n(981631);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            }));
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = A.isPlatformEmbedded && (0, A.isWindows)(),
    x = L && 10 > parseFloat(l.Z.os.release),
    k = !0;
if (L && !x) {
    let [e, , t] = l.Z.os.release.split('.');
    k = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let M = new u.Z('NotificationUtils'),
    j = (L && k) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function U() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications'))
        try {
            return await N.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
        } catch (e) {
            M.warn('Fetching native notification settings failed with error: ', e);
        }
    return null;
}
async function G() {
    let e = await U();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function B(e, t) {
    var n;
    return null != (n = (0, m.Z)(null != t ? t : h.Z.getSoundpack())[e]) ? n : e;
}
async function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await G())
        try {
            await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: B(e, n) });
            return;
        } catch (e) {
            M.warn('Native notification sound failed with error: ', e);
        }
    (0, p.GN)(e, t, void 0, n);
}
let F = a().throttle(V, 1000, { leading: !0 });
function Z() {
    N.ZP.flashFrame(!1);
}
L && (window.addEventListener('focus', Z), N.ZP.on('MAIN_WINDOW_FOCUS', Z));
let H = window.Notification;
if (x) {
    let e = {};
    (N.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        N.ZP.send('NOTIFICATIONS_CLEAR'),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], N.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: r }) {
                (R(this, 'id', H._id++),
                    R(this, 'title', void 0),
                    R(this, 'body', void 0),
                    R(this, 'icon', void 0),
                    R(this, 'onshow', function () {}),
                    R(this, 'onclick', function () {}),
                    R(this, 'onclose', function () {}),
                    t.includes('\0') ? (M.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (M.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    N.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    }));
            }
        }),
        R(r, 'permission', 'granted'),
        R(r, '_id', 0),
        (H = r));
}
let Y = {};
if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
    try {
        (N.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n, r) => {
            if ('dismiss' === t) return void delete Y[n];
            {
                var i, a, o;
                let e = Y[n];
                (A.isPlatformEmbedded ? N.ZP.focus() : window.focus(), (null == e || null == (i = e.options) ? void 0 : i.omitClickTracking) || (I.default.track(C.rMx.NOTIFICATION_ACTION, P({ action: 'CLICK' }, e.trackingProps)), I.default.track(C.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)), null == e || null == (o = e.options) || null == (a = o.onClick) || a.call(o, r));
                return;
            }
        }),
            N.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS'));
    } catch (e) {
        M.warn('Native notification setup failed with error: ', e);
    }
    (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications_provisional')) &&
        z().then((e) => {
            e || N.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION', !0).catch(() => {});
        });
}
function W(e) {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications'))
        try {
            N.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            M.warn('Native notification authorization failed with error: ', e);
        }
    null != H &&
        H.requestPermission(async () => {
            null != e && e(await K());
        });
}
async function K() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
        let e = await U();
        return (null == e ? void 0 : e.authorizationStatus) === 'authorized' || (null == e ? void 0 : e.authorizationStatus) === 'provisional';
    }
    return null != H && 'granted' === H.permission;
}
async function z() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
        var e;
        return (null == (e = await U()) ? void 0 : e.authorizationStatus) !== 'undetermined';
    }
    return null != H && 'default' !== H.permission;
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? F(e, t, n) : V(e, t, n);
}
async function X(e, t, n, r, i) {
    var a, o, s, l, u, p, h;
    let m,
        R = await U(),
        w = (null == R ? void 0 : R.authorizationStatus) === 'authorized' || (null == R ? void 0 : R.authorizationStatus) === 'provisional',
        x = null != R ? w : await K(),
        G = w,
        V = O.Z.disableNotifications && null == i.overrideStreamerMode,
        F = !A.isPlatformEmbedded || ((0, A.isMac)() && G) || N.ZP.shouldDisplayNotifications(),
        Z = !V && x && F,
        W = D(P({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0
        }),
        z = W,
        X = W;
    if (((r.banner = await (0, f.K)()), !Z)) {
        null != i.sound && !1 !== i.playSoundIfDisabled && (q(i.sound, null != (a = i.volume) ? a : 1, i.soundpack), (r.ping = !0), i.omitViewTracking || I.default.track(C.rMx.NOTIFICATION_ACTION, P({ action: 'VIEW' }, r)));
        return;
    }
    (t.includes('\0') && (M.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (M.warn('Notification body contains null character, setting to empty string'), (n = '')));
    let Q = null != (o = null == i ? void 0 : i.tag) ? o : null,
        J = G && (null == R ? void 0 : R.sound) === !0 && (null == R ? void 0 : R.authorizationStatus) === 'authorized',
        $ = (e, t) => {
            var n;
            (null == (n = i.onShown) || n.call(i), i.omitViewTracking || (I.default.track(C.rMx.NOTIFICATION_ACTION, P({ action: 'VIEW' }, t)), I.default.track(C.rMx.NOTIFICATION_VIEWED, X)), j && setTimeout(() => e.close(), 5000));
        };
    if ((null == i.sound || J || (q(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), (r.ping = !0)), i.isUserAvatar && null != e && (e = await (0, _.D)(e)), L && b.Z.taskbarFlash && N.ZP.flashFrame(!0), G)) {
        let a = {
            title: t,
            body: n
        };
        (null != e && (a.icon = e), (null == i ? void 0 : i.sound) != null && (a.sound = B(i.sound, i.soundpack)), (null == i ? void 0 : i.tag) != null && (a.identifier = i.tag), Array.isArray(i.actions) && (a.actions = i.actions));
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
            let n = E.Z.getChannel(e);
            null != n && (a.groupName = (0, c.F6)(n, v.default, y.Z));
            let r = null == n ? void 0 : n.getGuildId();
            if (((a.senderIdentifier = t.id), (a.senderDisplayName = S.ZP.getName(r, e, t)), (a.senderAvatar = t.getAvatarURL(r, 128, !1, !1)), (a.attachments = []), o.includeStickers))
                for (let e of (0, g.cv)(i.messageRecord)) {
                    let t = (0, g.Q6)(e, { isPreview: !0 });
                    null != t &&
                        a.attachments.push({
                            url: t,
                            type: 'image/png'
                        });
                }
            if (o.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, T.yE)(null != (u = e.flags) ? u : 0, C.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, T.yE)(null != (p = e.flags) ? p : 0, C.J0y.IS_SPOILER) &&
                        (null == (l = e.content_type) ? void 0 : l.startsWith('image/')) &&
                        a.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type
                        });
        }
        try {
            let e = await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
            Y[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: z
            };
            let t = {
                close() {
                    try {
                        N.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                    } catch (e) {
                        M.warn('Native notification removal failed with error: ', e);
                    }
                }
            };
            return (
                $(t, r),
                {
                    notification: t,
                    trackingProps: r
                }
            );
        } catch (e) {
            M.warn('Native notification failed with error: ', e);
        }
    }
    null != i.sound && G && (q(i.sound, null != (h = i.volume) ? h : 1, i.soundpack), (r.ping = !0));
    let ee = {
        icon: e,
        body: n,
        tag: Q,
        silent: !0
    };
    try {
        m = new H(t, ee);
    } catch (e) {
        return;
    }
    return ($(m, r),
    (m.onclick = (e) => {
        var t;
        (A.isPlatformEmbedded ? N.ZP.focus() : (window.focus(), m.close()), i.omitClickTracking || (I.default.track(C.rMx.NOTIFICATION_ACTION, P({ action: 'CLICK' }, r)), I.default.track(C.rMx.NOTIFICATION_CLICKED, z)));
        let n = '';
        null == (t = i.onClick) || t.call(i, n);
    }),
    k)
        ? {
              notification: m,
              trackingProps: r
          }
        : {
              notification: {
                  close() {
                      var e;
                      null == m || null == (e = m.onclose) || e.call(m);
                  }
              },
              trackingProps: r
          };
}
let Q = {
    hasPermission: K,
    requestPermission: W,
    showNotification: X,
    playNotificationSound: V
};
