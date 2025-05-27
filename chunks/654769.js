n.d(t, { Z: () => z }), n(388685), n(35282), n(358797), n(539854), n(997841);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(525654),
    s = n.n(a),
    l = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(811627),
    f = n(330619),
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
    S = n(630388),
    T = n(5192),
    A = n(358085),
    N = n(998502),
    C = n(981631);
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
let R = A.isPlatformEmbedded && (0, A.isWindows)(),
    w = R && 10 > parseFloat(l.Z.os.release),
    D = !0;
if (R && !w) {
    let [e, , t] = l.Z.os.release.split('.');
    D = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let L = new u.Z('NotificationUtils'),
    x = (R && D) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function k() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications'))
        try {
            return await N.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
        } catch (e) {
            L.warn('Fetching native notification settings failed with error: ', e);
        }
    return null;
}
async function M() {
    let e = await k();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function j(e, t) {
    var n;
    return null != (n = (0, m.Z)(null != t ? t : h.Z.getSoundpack())[e]) ? n : e;
}
async function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await M())
        try {
            await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: j(e, n) });
            return;
        } catch (e) {
            L.warn('Native notification sound failed with error: ', e);
        }
    (0, p.GN)(e, t, void 0, n);
}
let G = o().throttle(U, 1000, { leading: !0 });
function B() {
    N.ZP.flashFrame(!1);
}
R && (window.addEventListener('focus', B), N.ZP.on('MAIN_WINDOW_FOCUS', B));
let F = window.Notification;
if (w) {
    let e = {};
    N.ZP.on('NOTIFICATION_CLICK', (t, n) => {
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
                P(this, 'id', F._id++),
                    P(this, 'title', void 0),
                    P(this, 'body', void 0),
                    P(this, 'icon', void 0),
                    P(this, 'onshow', function () {}),
                    P(this, 'onclick', function () {}),
                    P(this, 'onclose', function () {}),
                    t.includes('\0') ? (L.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (L.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    N.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        P(r, 'permission', 'granted'),
        P(r, '_id', 0),
        (F = r);
}
let V = {};
if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
    try {
        N.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete V[n];
            else {
                var r, i, o;
                let e = V[n];
                A.isPlatformEmbedded ? N.ZP.focus() : window.focus(), (null == e || null == (r = e.options) ? void 0 : r.omitClickTracking) || I.default.track(C.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null == (o = e.options) || null == (i = o.onClick) || i.call(o);
            }
        }),
            N.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        L.warn('Native notification setup failed with error: ', e);
    }
    (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications_provisional')) &&
        Y().then((e) => {
            e || N.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION', !0).catch(() => {});
        });
}
function Z(e) {
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
            L.warn('Native notification authorization failed with error: ', e);
        }
    null != F &&
        F.requestPermission(async () => {
            null != e && e(await H());
        });
}
async function H() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
        let e = await k();
        return (null == e ? void 0 : e.authorizationStatus) === 'authorized' || (null == e ? void 0 : e.authorizationStatus) === 'provisional';
    }
    return null != F && 'granted' === F.permission;
}
async function Y() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports('notifications')) {
        var e;
        return (null == (e = await k()) ? void 0 : e.authorizationStatus) !== 'undetermined';
    }
    return null != F && 'default' !== F.permission;
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? G(e, t, n) : U(e, t, n);
}
async function K(e, t, n, r, i) {
    var o, a, s, l, u, p, h;
    let m,
        P = await k(),
        w = (null == P ? void 0 : P.authorizationStatus) === 'authorized' || (null == P ? void 0 : P.authorizationStatus) === 'provisional',
        M = null != P ? w : await H(),
        U = w && (!R || (0, f.R)({ location: 'showNotification' }).enabled),
        G = O.Z.disableNotifications && null == i.overrideStreamerMode,
        B = !A.isPlatformEmbedded || ((0, A.isMac)() && U) || N.ZP.shouldDisplayNotifications();
    if (!(!G && M && B)) {
        null != i.sound && !1 !== i.playSoundIfDisabled && W(i.sound, null != (o = i.volume) ? o : 1, i.soundpack);
        return;
    }
    t.includes('\0') && (L.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (L.warn('Notification body contains null character, setting to empty string'), (n = ''));
    let Z = null != (a = null == i ? void 0 : i.tag) ? a : null,
        Y = U && (null == P ? void 0 : P.sound) === !0 && (null == P ? void 0 : P.authorizationStatus) === 'authorized',
        K = (e) => {
            var t;
            null == (t = i.onShown) || t.call(i), i.omitViewTracking || I.default.track(C.rMx.NOTIFICATION_VIEWED, r), x && setTimeout(() => e.close(), 5000);
        };
    if ((null == i.sound || Y || W(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), i.isUserAvatar && null != e && (e = await (0, _.D)(e)), U)) {
        let o = {
            title: t,
            body: n
        };
        null != e && (o.icon = e), (null == i ? void 0 : i.sound) != null && (o.sound = j(i.sound, i.soundpack)), (null == i ? void 0 : i.tag) != null && (o.identifier = i.tag);
        let a = d.Z.getCurrentConfig(
            { location: 'showNotification' },
            {
                autoTrackExposure: !0,
                disable: null == i.messageRecord
            }
        );
        if (null != i.messageRecord && a.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            o.threadIdentifier = e;
            let n = E.Z.getChannel(e);
            null != n && (o.groupName = (0, c.F6)(n, v.default, y.Z));
            let r = null == n ? void 0 : n.getGuildId();
            if (((o.senderIdentifier = t.id), (o.senderDisplayName = T.ZP.getName(r, e, t)), (o.senderAvatar = t.getAvatarURL(r, 128, !1, !1)), (o.attachments = []), a.includeStickers))
                for (let e of (0, g.cv)(i.messageRecord)) {
                    let t = (0, g.Q6)(e, { isPreview: !0 });
                    null != t &&
                        o.attachments.push({
                            url: t,
                            type: 'image/png'
                        });
                }
            if (a.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, S.yE)(null != (u = e.flags) ? u : 0, C.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, S.yE)(null != (p = e.flags) ? p : 0, C.J0y.IS_SPOILER) &&
                        (null == (l = e.content_type) ? void 0 : l.startsWith('image/')) &&
                        o.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type
                        });
        }
        try {
            let e = await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', o);
            V[e] = {
                options: i,
                trackingProps: r
            };
            let t = {
                close() {
                    try {
                        N.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                    } catch (e) {
                        L.warn('Native notification removal failed with error: ', e);
                    }
                }
            };
            return K(t), t;
        } catch (e) {
            L.warn('Native notification failed with error: ', e);
        }
    }
    null != i.sound && U && W(i.sound, null != (h = i.volume) ? h : 1, i.soundpack);
    let z = {
        icon: e,
        body: n,
        tag: Z,
        silent: !0
    };
    R && b.Z.taskbarFlash && N.ZP.flashFrame(!0);
    try {
        m = new F(t, z);
    } catch (e) {
        return null;
    }
    return (K(m),
    (m.onclick = () => {
        var e;
        A.isPlatformEmbedded ? N.ZP.focus() : (window.focus(), m.close()), i.omitClickTracking || I.default.track(C.rMx.NOTIFICATION_CLICKED, r), null == (e = i.onClick) || e.call(i);
    }),
    D)
        ? m
        : {
              close() {
                  var e;
                  null == m || null == (e = m.onclose) || e.call(m);
              }
          };
}
let z = {
    hasPermission: H,
    requestPermission: Z,
    showNotification: K,
    playNotificationSound: U
};
