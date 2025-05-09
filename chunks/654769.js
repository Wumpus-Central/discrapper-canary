n.d(i, { Z: () => q }), n(388685), n(35282), n(358797), n(539854), n(997841);
var e,
    o = n(392711),
    a = n.n(o),
    l = n(525654),
    r = n.n(l),
    s = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(811627),
    f = n(330619),
    I = n(460181),
    h = n(474873),
    N = n(135906),
    p = n(378233),
    m = n(592125),
    v = n(292959),
    g = n(699516),
    T = n(246946),
    A = n(594174),
    O = n(626135),
    _ = n(630388),
    C = n(5192),
    w = n(358085),
    Z = n(960048),
    b = n(998502),
    E = n(981631);
function S(t, i, n) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = n),
        t
    );
}
let y = w.isPlatformEmbedded && (0, w.isWindows)(),
    k = y && 10 > parseFloat(s.Z.os.release),
    P = !0;
if (y && !k) {
    let [t, , i] = s.Z.os.release.split('.');
    P = parseInt(t) > 10 || parseInt(i) >= 15063;
}
let F = new u.Z('NotificationUtils'),
    R = (y && P) || ('Chrome' === r().name && 47 > parseFloat(r().version)) || ('Firefox' === r().name && 52 > parseFloat(r().version));
async function U() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
        try {
            return await b.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
        } catch (t) {
            F.warn('Fetching native notification settings failed with error: ', t);
        }
    return null;
}
async function L() {
    let t = await U();
    return (null == t ? void 0 : t.authorizationStatus) === 'authorized' && (null == t ? void 0 : t.sound) === !0;
}
function D(t, i) {
    var n;
    return null != (n = (0, N.Z)(null != i ? i : h.Z.getSoundpack())[t]) ? n : t;
}
async function M(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await L())
        try {
            await b.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: D(t, n) });
            return;
        } catch (t) {
            F.warn('Native notification sound failed with error: ', t);
        }
    (0, I.GN)(t, i, void 0, n);
}
let z = a().throttle(M, 1000, { leading: !0 });
function x() {
    b.ZP.flashFrame(!1);
}
y && (window.addEventListener('focus', x), b.ZP.on('MAIN_WINDOW_FOCUS', x));
let G = window.Notification;
if (k) {
    let t = {};
    b.ZP.on('NOTIFICATION_CLICK', (i, n) => {
        let e = t[n];
        null != e && (e.onclick(), e.close());
    }),
        b.ZP.send('NOTIFICATIONS_CLEAR'),
        (e = class {
            static requestPermission(t) {
                t();
            }
            close() {
                null != t[this.id] && (delete t[this.id], b.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(i, { body: n, icon: e }) {
                S(this, 'id', G._id++),
                    S(this, 'title', void 0),
                    S(this, 'body', void 0),
                    S(this, 'icon', void 0),
                    S(this, 'onshow', function () {}),
                    S(this, 'onclick', function () {}),
                    S(this, 'onclose', function () {}),
                    i.includes('\0') ? (F.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = i),
                    n.includes('\0') ? (F.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = e),
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
        S(e, 'permission', 'granted'),
        S(e, '_id', 0),
        (G = e);
}
let V = {};
if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
    try {
        b.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (t, i, n) => {
            if ('dismiss' === i) delete V[n];
            else {
                var e, o, a;
                let t = V[n];
                w.isPlatformEmbedded ? b.ZP.focus() : window.focus(), (null == t || null == (e = t.options) ? void 0 : e.omitClickTracking) || O.default.track(E.rMx.NOTIFICATION_CLICKED, null == t ? void 0 : t.trackingProps), null == t || null == (a = t.options) || null == (o = a.onClick) || o.call(a);
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
        n = arguments.length > 2 ? arguments[2] : void 0;
    t.includes('message') ? z(t, i, n) : M(t, i, n);
}
async function H(t, i, n, e, o) {
    var a, l, r, s, u, I, h;
    let N,
        S = await U(),
        k = (null == S ? void 0 : S.authorizationStatus) === 'authorized' || (null == S ? void 0 : S.authorizationStatus) === 'provisional',
        L = null != S ? k : await W(),
        M = k && (!y || (0, f.R)({ location: 'showNotification' }).enabled),
        z = T.Z.disableNotifications && null == o.overrideStreamerMode,
        x = !w.isPlatformEmbedded || ((0, w.isMac)() && M) || b.ZP.shouldDisplayNotifications();
    if (!(!z && L && x)) {
        null != o.sound && !1 !== o.playSoundIfDisabled && B(o.sound, null != (a = o.volume) ? a : 1, o.soundpack);
        return;
    }
    i.includes('\0') && (F.warn('Notification title contains null character, setting to empty string'), (i = '')), n.includes('\0') && (F.warn('Notification body contains null character, setting to empty string'), (n = ''));
    let Y = null != (l = null == o ? void 0 : o.tag) ? l : null,
        H = M && (null == S ? void 0 : S.sound) === !0 && (null == S ? void 0 : S.authorizationStatus) === 'authorized',
        q = (t) => {
            var i;
            null == (i = o.onShown) || i.call(o), o.omitViewTracking || O.default.track(E.rMx.NOTIFICATION_VIEWED, e), R && setTimeout(() => t.close(), 5000);
        };
    if (
        (null == o.sound || H || B(o.sound, null != (r = o.volume) ? r : 1, o.soundpack),
        o.isUserAvatar &&
            null != t &&
            (t = await (function (t) {
                let i = new Image();
                return (
                    (i.src = t),
                    (i.crossOrigin = 'anonymous'),
                    new Promise((n, e) => {
                        (i.onload = () => {
                            '' !== i.src &&
                                n(
                                    (function (t) {
                                        let i = document.createElement('canvas'),
                                            n = i.getContext('2d'),
                                            e = Math.min(t.width, t.height);
                                        (i.width = e), (i.height = e), null != n && (n.beginPath(), n.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(t, (t.width - e) / 2, (t.height - e) / 2, e, e, 0, 0, e, e));
                                        let o = i.toDataURL();
                                        return i.remove(), o;
                                    })(i)
                                );
                        }),
                            (i.onerror = (i) => {
                                Z.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(i)), e(t);
                            });
                    })
                );
            })(t)),
        M)
    ) {
        let a = {
            title: i,
            body: n
        };
        null != t && (a.icon = t), (null == o ? void 0 : o.sound) != null && (a.sound = D(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
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
            let n = m.Z.getChannel(t);
            null != n && (a.groupName = (0, c.F6)(n, A.default, g.Z));
            let e = null == n ? void 0 : n.getGuildId();
            if (((a.senderIdentifier = i.id), (a.senderDisplayName = C.ZP.getName(e, t, i)), (a.senderAvatar = i.getAvatarURL(e, 128, !1, !1)), (a.attachments = []), l.includeStickers))
                for (let t of (0, p.cv)(o.messageRecord)) {
                    let i = (0, p.Q6)(t, { isPreview: !0 });
                    null != i &&
                        a.attachments.push({
                            url: i,
                            type: 'image/png'
                        });
                }
            if (l.includeImages)
                for (let t of o.messageRecord.attachments)
                    !(0, _.yE)(null != (u = t.flags) ? u : 0, E.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, _.yE)(null != (I = t.flags) ? I : 0, E.J0y.IS_SPOILER) &&
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
                trackingProps: e
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
    null != o.sound && M && B(o.sound, null != (h = o.volume) ? h : 1, o.soundpack);
    let K = {
        icon: t,
        body: n,
        tag: Y,
        silent: !0
    };
    y && v.Z.taskbarFlash && b.ZP.flashFrame(!0);
    try {
        N = new G(i, K);
    } catch (t) {
        return null;
    }
    return (q(N),
    (N.onclick = () => {
        var t;
        w.isPlatformEmbedded ? b.ZP.focus() : (window.focus(), N.close()), o.omitClickTracking || O.default.track(E.rMx.NOTIFICATION_CLICKED, e), null == (t = o.onClick) || t.call(o);
    }),
    P)
        ? N
        : {
              close() {
                  var t;
                  null == N || null == (t = N.onclose) || t.call(N);
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
