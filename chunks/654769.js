n.d(t, { Z: () => K }), n(388685), n(35282), n(358797), n(539854), n(997841);
var e,
    o = n(392711),
    a = n.n(o),
    l = n(525654),
    s = n.n(l),
    r = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(811627),
    f = n(330619),
    h = n(460181),
    I = n(474873),
    m = n(135906),
    p = n(378233),
    g = n(592125),
    N = n(292959),
    v = n(699516),
    T = n(246946),
    w = n(594174),
    b = n(626135),
    Z = n(630388),
    C = n(5192),
    O = n(358085),
    _ = n(960048),
    y = n(998502),
    A = n(981631);
function k(i, t, n) {
    return (
        t in i
            ? Object.defineProperty(i, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (i[t] = n),
        i
    );
}
let E = O.isPlatformEmbedded && (0, O.isWindows)(),
    S = E && 10 > parseFloat(r.Z.os.release),
    F = !0;
if (E && !S) {
    let [i, , t] = r.Z.os.release.split('.');
    F = parseInt(i) > 10 || parseInt(t) >= 15063;
}
let P = new u.Z('NotificationUtils'),
    R = (E && F) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function U() {
    if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
        try {
            return await y.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
        } catch (i) {
            P.warn('Fetching native notification settings failed with error: ', i);
        }
    return null;
}
async function D() {
    let i = await U();
    return (null == i ? void 0 : i.authorizationStatus) === 'authorized' && (null == i ? void 0 : i.sound) === !0;
}
function z(i, t) {
    var n;
    return null != (n = (0, m.Z)(null != t ? t : I.Z.getSoundpack())[i]) ? n : i;
}
async function L(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await D())
        try {
            await y.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: z(i, n) });
            return;
        } catch (i) {
            P.warn('Native notification sound failed with error: ', i);
        }
    (0, h.GN)(i, t, void 0, n);
}
let M = a().throttle(L, 1000, { leading: !0 });
function x() {
    y.ZP.flashFrame(!1);
}
E && (window.addEventListener('focus', x), y.ZP.on('MAIN_WINDOW_FOCUS', x));
let W = window.Notification;
if (S) {
    let i = {};
    y.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let e = i[n];
        null != e && (e.onclick(), e.close());
    }),
        y.ZP.send('NOTIFICATIONS_CLEAR'),
        (e = class {
            static requestPermission(i) {
                i();
            }
            close() {
                null != i[this.id] && (delete i[this.id], y.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: e }) {
                k(this, 'id', W._id++),
                    k(this, 'title', void 0),
                    k(this, 'body', void 0),
                    k(this, 'icon', void 0),
                    k(this, 'onshow', function () {}),
                    k(this, 'onclick', function () {}),
                    k(this, 'onclose', function () {}),
                    t.includes('\0') ? (P.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (P.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = e),
                    setImmediate(() => this.onshow()),
                    (i[this.id] = this),
                    y.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        k(e, 'permission', 'granted'),
        k(e, '_id', 0),
        (W = e);
}
let G = {};
if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications')) {
    try {
        y.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (i, t, n) => {
            if ('dismiss' === t) delete G[n];
            else {
                var e, o, a;
                let i = G[n];
                O.isPlatformEmbedded ? y.ZP.focus() : window.focus(), (null == i || null == (e = i.options) ? void 0 : e.omitClickTracking) || b.default.track(A.rMx.NOTIFICATION_CLICKED, null == i ? void 0 : i.trackingProps), null == i || null == (a = i.options) || null == (o = a.onClick) || o.call(a);
            }
        }),
            y.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (i) {
        P.warn('Native notification setup failed with error: ', i);
    }
    (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications_provisional')) &&
        H().then((i) => {
            i || y.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION', !0).catch(() => {});
        });
}
async function V() {
    if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications')) {
        let i = await U();
        return (null == i ? void 0 : i.authorizationStatus) === 'authorized' || (null == i ? void 0 : i.authorizationStatus) === 'provisional';
    }
    return null != W && 'granted' === W.permission;
}
async function H() {
    if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications')) {
        var i;
        return (null == (i = await U()) ? void 0 : i.authorizationStatus) !== 'undetermined';
    }
    return null != W && 'default' !== W.permission;
}
function B(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.includes('message') ? M(i, t, n) : L(i, t, n);
}
async function q(i, t, n, e, o) {
    var a, l, s, r, u, h, I;
    let m,
        k = await U(),
        S = (null == k ? void 0 : k.authorizationStatus) === 'authorized' || (null == k ? void 0 : k.authorizationStatus) === 'provisional',
        D = null != k ? S : await V(),
        L = S && (!E || (0, f.R)({ location: 'showNotification' }).enabled),
        M = T.Z.disableNotifications && null == o.overrideStreamerMode,
        x = !O.isPlatformEmbedded || ((0, O.isMac)() && L) || y.ZP.shouldDisplayNotifications();
    if (!(!M && D && x)) {
        null != o.sound && !1 !== o.playSoundIfDisabled && B(o.sound, null != (a = o.volume) ? a : 1, o.soundpack);
        return;
    }
    t.includes('\0') && (P.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (P.warn('Notification body contains null character, setting to empty string'), (n = ''));
    let H = null != (l = null == o ? void 0 : o.tag) ? l : null,
        q = L && (null == k ? void 0 : k.sound) === !0 && (null == k ? void 0 : k.authorizationStatus) === 'authorized',
        K = (i) => {
            var t;
            null == (t = o.onShown) || t.call(o), o.omitViewTracking || b.default.track(A.rMx.NOTIFICATION_VIEWED, e), R && setTimeout(() => i.close(), 5000);
        };
    if (
        (null == o.sound || q || B(o.sound, null != (s = o.volume) ? s : 1, o.soundpack),
        o.isUserAvatar &&
            null != i &&
            (i = await (function (i) {
                let t = new Image();
                return (
                    (t.src = i),
                    (t.crossOrigin = 'anonymous'),
                    new Promise((n, e) => {
                        (t.onload = () => {
                            '' !== t.src &&
                                n(
                                    (function (i) {
                                        let t = document.createElement('canvas'),
                                            n = t.getContext('2d'),
                                            e = Math.min(i.width, i.height);
                                        (t.width = e), (t.height = e), null != n && (n.beginPath(), n.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(i, (i.width - e) / 2, (i.height - e) / 2, e, e, 0, 0, e, e));
                                        let o = t.toDataURL();
                                        return t.remove(), o;
                                    })(t)
                                );
                        }),
                            (t.onerror = (t) => {
                                _.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), e(i);
                            });
                    })
                );
            })(i)),
        L)
    ) {
        let a = {
            title: t,
            body: n
        };
        null != i && (a.icon = i), (null == o ? void 0 : o.sound) != null && (a.sound = z(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
        let l = d.Z.getCurrentConfig(
            { location: 'showNotification' },
            {
                autoTrackExposure: !0,
                disable: null == o.messageRecord
            }
        );
        if (null != o.messageRecord && l.enabled) {
            let i = o.messageRecord.channel_id,
                t = o.messageRecord.author;
            a.threadIdentifier = i;
            let n = g.Z.getChannel(i);
            null != n && (a.groupName = (0, c.F6)(n, w.default, v.Z));
            let e = null == n ? void 0 : n.getGuildId();
            if (((a.senderIdentifier = t.id), (a.senderDisplayName = C.ZP.getName(e, i, t)), (a.senderAvatar = t.getAvatarURL(e, 128, !1, !1)), (a.attachments = []), l.includeStickers))
                for (let i of (0, p.cv)(o.messageRecord)) {
                    let t = (0, p.Q6)(i, { isPreview: !0 });
                    null != t &&
                        a.attachments.push({
                            url: t,
                            type: 'image/png'
                        });
                }
            if (l.includeImages)
                for (let i of o.messageRecord.attachments)
                    !(0, Z.yE)(null != (u = i.flags) ? u : 0, A.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, Z.yE)(null != (h = i.flags) ? h : 0, A.J0y.IS_SPOILER) &&
                        (null == (r = i.content_type) ? void 0 : r.startsWith('image/')) &&
                        a.attachments.push({
                            url: i.proxy_url,
                            type: i.content_type
                        });
        }
        try {
            let i = await y.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
            G[i] = {
                options: o,
                trackingProps: e
            };
            let t = {
                close() {
                    try {
                        y.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [i]);
                    } catch (i) {
                        P.warn('Native notification removal failed with error: ', i);
                    }
                }
            };
            return K(t), t;
        } catch (i) {
            P.warn('Native notification failed with error: ', i);
        }
    }
    null != o.sound && L && B(o.sound, null != (I = o.volume) ? I : 1, o.soundpack);
    let J = {
        icon: i,
        body: n,
        tag: H,
        silent: !0
    };
    E && N.Z.taskbarFlash && y.ZP.flashFrame(!0);
    try {
        m = new W(t, J);
    } catch (i) {
        return null;
    }
    return (K(m),
    (m.onclick = () => {
        var i;
        O.isPlatformEmbedded ? y.ZP.focus() : (window.focus(), m.close()), o.omitClickTracking || b.default.track(A.rMx.NOTIFICATION_CLICKED, e), null == (i = o.onClick) || i.call(o);
    }),
    F)
        ? m
        : {
              close() {
                  var i;
                  null == m || null == (i = m.onclose) || i.call(m);
              }
          };
}
let K = {
    hasPermission: V,
    requestPermission: function (i) {
        if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
            try {
                y.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((t) => {
                        i(t);
                    })
                    .catch(() => {
                        i(!1);
                    });
                return;
            } catch (i) {
                P.warn('Native notification authorization failed with error: ', i);
            }
        null != W &&
            W.requestPermission(async () => {
                null != i && i(await V());
            });
    },
    showNotification: q,
    playNotificationSound: L
};
