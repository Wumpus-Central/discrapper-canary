e.d(i, { Z: () => q }), e(388685), e(35282), e(358797), e(539854), e(997841);
var n,
    o = e(392711),
    a = e.n(o),
    l = e(525654),
    r = e.n(l),
    s = e(579806),
    c = e(933557),
    u = e(710845),
    d = e(811627),
    f = e(330619),
    I = e(691294),
    h = e(460181),
    m = e(474873),
    p = e(135906),
    N = e(378233),
    g = e(592125),
    v = e(292959),
    T = e(699516),
    w = e(246946),
    O = e(594174),
    A = e(626135),
    _ = e(630388),
    C = e(5192),
    Z = e(358085),
    b = e(998502),
    E = e(981631);
function y(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
let S = Z.isPlatformEmbedded && (0, Z.isWindows)(),
    P = S && 10 > parseFloat(s.Z.os.release),
    k = !0;
if (S && !P) {
    let [t, , i] = s.Z.os.release.split('.');
    k = parseInt(t) > 10 || parseInt(i) >= 15063;
}
let F = new u.Z('NotificationUtils'),
    R = (S && k) || ('Chrome' === r().name && 47 > parseFloat(r().version)) || ('Firefox' === r().name && 52 > parseFloat(r().version));
async function U() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
        try {
            return await b.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
        } catch (t) {
            F.warn('Fetching native notification settings failed with error: ', t);
        }
    return null;
}
async function D() {
    let t = await U();
    return (null == t ? void 0 : t.authorizationStatus) === 'authorized' && (null == t ? void 0 : t.sound) === !0;
}
function L(t, i) {
    var e;
    return null != (e = (0, p.Z)(null != i ? i : m.Z.getSoundpack())[t]) ? e : t;
}
async function M(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        e = arguments.length > 2 ? arguments[2] : void 0;
    if (await D())
        try {
            await b.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: L(t, e) });
            return;
        } catch (t) {
            F.warn('Native notification sound failed with error: ', t);
        }
    (0, h.GN)(t, i, void 0, e);
}
let z = a().throttle(M, 1000, { leading: !0 });
function x() {
    b.ZP.flashFrame(!1);
}
S && (window.addEventListener('focus', x), b.ZP.on('MAIN_WINDOW_FOCUS', x));
let G = window.Notification;
if (P) {
    let t = {};
    b.ZP.on('NOTIFICATION_CLICK', (i, e) => {
        let n = t[e];
        null != n && (n.onclick(), n.close());
    }),
        b.ZP.send('NOTIFICATIONS_CLEAR'),
        (n = class {
            static requestPermission(t) {
                t();
            }
            close() {
                null != t[this.id] && (delete t[this.id], b.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(i, { body: e, icon: n }) {
                y(this, 'id', G._id++),
                    y(this, 'title', void 0),
                    y(this, 'body', void 0),
                    y(this, 'icon', void 0),
                    y(this, 'onshow', function () {}),
                    y(this, 'onclick', function () {}),
                    y(this, 'onclose', function () {}),
                    i.includes('\0') ? (F.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = i),
                    e.includes('\0') ? (F.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = e),
                    (this.icon = n),
                    setImmediate(() => this.onshow()),
                    (t[this.id] = this),
                    b.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        y(n, 'permission', 'granted'),
        y(n, '_id', 0),
        (G = n);
}
let V = {};
if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
    try {
        b.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (t, i, e) => {
            if ('dismiss' === i) delete V[e];
            else {
                var n, o, a;
                let t = V[e];
                Z.isPlatformEmbedded ? b.ZP.focus() : window.focus(), (null == t || null == (n = t.options) ? void 0 : n.omitClickTracking) || A.default.track(E.rMx.NOTIFICATION_CLICKED, null == t ? void 0 : t.trackingProps), null == t || null == (a = t.options) || null == (o = a.onClick) || o.call(a);
            }
        }),
            b.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (t) {
        F.warn('Native notification setup failed with error: ', t);
    }
    (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications_provisional')) &&
        Y().then((t) => {
            t || b.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION', !0).catch(() => {});
        });
}
async function W() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
        let t = await U();
        return (null == t ? void 0 : t.authorizationStatus) === 'authorized' || (null == t ? void 0 : t.authorizationStatus) === 'provisional';
    }
    return null != G && 'granted' === G.permission;
}
async function Y() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
        var t;
        return (null == (t = await U()) ? void 0 : t.authorizationStatus) !== 'undetermined';
    }
    return null != G && 'default' !== G.permission;
}
function B(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        e = arguments.length > 2 ? arguments[2] : void 0;
    t.includes('message') ? z(t, i, e) : M(t, i, e);
}
async function H(t, i, e, n, o) {
    var a, l, r, s, u, h, m;
    let p,
        y = await U(),
        P = (null == y ? void 0 : y.authorizationStatus) === 'authorized' || (null == y ? void 0 : y.authorizationStatus) === 'provisional',
        D = null != y ? P : await W(),
        M = P && (!S || (0, f.R)({ location: 'showNotification' }).enabled),
        z = w.Z.disableNotifications && null == o.overrideStreamerMode,
        x = !Z.isPlatformEmbedded || ((0, Z.isMac)() && M) || b.ZP.shouldDisplayNotifications();
    if (!(!z && D && x)) {
        null != o.sound && !1 !== o.playSoundIfDisabled && B(o.sound, null != (a = o.volume) ? a : 1, o.soundpack);
        return;
    }
    i.includes('\0') && (F.warn('Notification title contains null character, setting to empty string'), (i = '')), e.includes('\0') && (F.warn('Notification body contains null character, setting to empty string'), (e = ''));
    let Y = null != (l = null == o ? void 0 : o.tag) ? l : null,
        H = M && (null == y ? void 0 : y.sound) === !0 && (null == y ? void 0 : y.authorizationStatus) === 'authorized',
        q = (t) => {
            var i;
            null == (i = o.onShown) || i.call(o), o.omitViewTracking || A.default.track(E.rMx.NOTIFICATION_VIEWED, n), R && setTimeout(() => t.close(), 5000);
        };
    if ((null == o.sound || H || B(o.sound, null != (r = o.volume) ? r : 1, o.soundpack), o.isUserAvatar && null != t && (t = await (0, I.D)(t)), M)) {
        let a = {
            title: i,
            body: e
        };
        null != t && (a.icon = t), (null == o ? void 0 : o.sound) != null && (a.sound = L(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
        let l = d.Z.getCurrentConfig(
            { location: 'showNotification' },
            {
                autoTrackExposure: !0,
                disable: null == o.messageRecord
            }
        );
        if (null != o.messageRecord && l.enabled) {
            let t = o.messageRecord.channel_id,
                i = o.messageRecord.author;
            a.threadIdentifier = t;
            let e = g.Z.getChannel(t);
            null != e && (a.groupName = (0, c.F6)(e, O.default, T.Z));
            let n = null == e ? void 0 : e.getGuildId();
            if (((a.senderIdentifier = i.id), (a.senderDisplayName = C.ZP.getName(n, t, i)), (a.senderAvatar = i.getAvatarURL(n, 128, !1, !1)), (a.attachments = []), l.includeStickers))
                for (let t of (0, N.cv)(o.messageRecord)) {
                    let i = (0, N.Q6)(t, { isPreview: !0 });
                    null != i &&
                        a.attachments.push({
                            url: i,
                            type: 'image/png'
                        });
                }
            if (l.includeImages)
                for (let t of o.messageRecord.attachments)
                    !(0, _.yE)(null != (u = t.flags) ? u : 0, E.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, _.yE)(null != (h = t.flags) ? h : 0, E.J0y.IS_SPOILER) &&
                        (null == (s = t.content_type) ? void 0 : s.startsWith('image/')) &&
                        a.attachments.push({
                            url: t.proxy_url,
                            type: t.content_type
                        });
        }
        try {
            let t = await b.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
            V[t] = {
                options: o,
                trackingProps: n
            };
            let i = {
                close() {
                    try {
                        b.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [t]);
                    } catch (t) {
                        F.warn('Native notification removal failed with error: ', t);
                    }
                }
            };
            return q(i), i;
        } catch (t) {
            F.warn('Native notification failed with error: ', t);
        }
    }
    null != o.sound && M && B(o.sound, null != (m = o.volume) ? m : 1, o.soundpack);
    let K = {
        icon: t,
        body: e,
        tag: Y,
        silent: !0
    };
    S && v.Z.taskbarFlash && b.ZP.flashFrame(!0);
    try {
        p = new G(i, K);
    } catch (t) {
        return null;
    }
    return (q(p),
    (p.onclick = () => {
        var t;
        Z.isPlatformEmbedded ? b.ZP.focus() : (window.focus(), p.close()), o.omitClickTracking || A.default.track(E.rMx.NOTIFICATION_CLICKED, n), null == (t = o.onClick) || t.call(o);
    }),
    k)
        ? p
        : {
              close() {
                  var t;
                  null == p || null == (t = p.onclose) || t.call(p);
              }
          };
}
let q = {
    hasPermission: W,
    requestPermission: function (t) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                b.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((i) => {
                        t(i);
                    })
                    .catch(() => {
                        t(!1);
                    });
                return;
            } catch (t) {
                F.warn('Native notification authorization failed with error: ', t);
            }
        null != G &&
            G.requestPermission(async () => {
                null != t && t(await W());
            });
    },
    showNotification: H,
    playNotificationSound: M
};
