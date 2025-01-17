let e;
i(47120), i(177593), i(773603);
var l,
    o = i(392711),
    a = i.n(o),
    u = i(525654),
    r = i.n(u),
    s = i(579806),
    d = i(933557),
    c = i(710845),
    f = i(474873),
    g = i(135906),
    _ = i(592125),
    N = i(292959),
    E = i(699516),
    I = i(246946),
    h = i(594174),
    v = i(626135),
    T = i(5192),
    p = i(358085),
    Z = i(557177),
    S = i(998502),
    C = i(981631);
function m(t, n, i) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = i),
        t
    );
}
let A = p.isPlatformEmbedded && (0, p.isWindows)(),
    y = A && 10 > parseFloat(s.Z.os.release),
    O = !0;
if (A && !y) {
    let [t, , n] = s.Z.os.release.split('.');
    O = parseInt(t) > 10 || parseInt(n) >= 15063;
}
let P = new c.Z('NotificationUtils'),
    R = (A && O) || ('Chrome' === r().name && 47 > parseFloat(r().version)) || ('Firefox' === r().name && 52 > parseFloat(r().version));
async function w() {
    if (void 0 === e) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                e = await S.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (t) {
                P.warn('Fetching native notification settings failed with error: ', t), (e = null);
            }
        else e = null;
    }
    return e;
}
async function D() {
    let t = await w();
    return (null == t ? void 0 : t.authorizationStatus) === 'authorized' && (null == t ? void 0 : t.sound) === !0;
}
function b(t, n) {
    var i;
    return null !== (i = (0, g.Z)(null != n ? n : f.Z.getSoundpack())[t]) && void 0 !== i ? i : t;
}
async function k(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0;
    if (await D())
        try {
            await S.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: b(t, i) });
            return;
        } catch (t) {
            P.warn('Native notification sound failed with error: ', t);
        }
    (0, Z.GN)(t, n, void 0, i);
}
let F = a().throttle(k, 1000, { leading: !0 });
function U() {
    S.ZP.flashFrame(!1);
}
A && (window.addEventListener('focus', U), S.ZP.on('MAIN_WINDOW_FOCUS', U));
let L = window.Notification;
y &&
    (S.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let i = null[n];
        null != i && (i.onclick(), i.close());
    }),
    S.ZP.send('NOTIFICATIONS_CLEAR'),
    (l = class {
        static requestPermission(t) {
            t();
        }
        close() {
            null != null[this.id] && (delete null[this.id], S.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(t, { body: n, icon: i }) {
            m(this, 'id', L._id++),
                m(this, 'title', void 0),
                m(this, 'body', void 0),
                m(this, 'icon', void 0),
                m(this, 'onshow', function () {}),
                m(this, 'onclick', function () {}),
                m(this, 'onclose', function () {}),
                (this.title = t),
                (this.body = n),
                (this.icon = i),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                S.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    m(l, 'permission', 'granted'),
    m(l, '_id', 0),
    (L = l));
let G = {};
if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
    try {
        S.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (t, n, i) => {
            if ('dismiss' === n) delete G[i];
            else {
                var e, l, o;
                let t = G[i];
                !(null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.omitClickTracking) && v.default.track(C.rMx.NOTIFICATION_CLICKED, null == t ? void 0 : t.trackingProps), null == t || null === (o = t.options) || void 0 === o || null === (l = o.onClick) || void 0 === l || l.call(o);
            }
        }),
            S.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (t) {
        P.warn('Native notification setup failed with error: ', t);
    }
async function M() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
        var t;
        return (null === (t = await w()) || void 0 === t ? void 0 : t.authorizationStatus) === 'authorized';
    }
    return null != L && 'granted' === L.permission;
}
function V(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0;
    t.includes('message') ? F(t, n, i) : k(t, n, i);
}
async function W(t) {
    return (I.Z.disableNotifications && null == t.overrideStreamerMode) || !(await M()) || (p.isPlatformEmbedded && !S.ZP.shouldDisplayNotifications());
}
async function H(t, n, i, e, l) {
    var o, u, r, s;
    let c;
    if (await W(l)) {
        null != l.sound && !1 !== l.playSoundIfDisabled && V(l.sound, null !== (o = l.volume) && void 0 !== o ? o : 1, l.soundpack);
        return;
    }
    let f = null !== (u = null == l ? void 0 : l.tag) && void 0 !== u ? u : null;
    (0, p.isLinux)() && (i = a().escape(i));
    let g = await w(),
        I = (null == g ? void 0 : g.authorizationStatus) === 'authorized',
        Z = I && (null == g ? void 0 : g.sound) === !0,
        m = (t) => {
            var n;
            null === (n = l.onShown) || void 0 === n || n.call(l), !l.omitViewTracking && v.default.track(C.rMx.NOTIFICATION_VIEWED, e), R && setTimeout(() => t.close(), 5000);
        };
    if ((null != l.sound && !Z && V(l.sound, null !== (r = l.volume) && void 0 !== r ? r : 1, l.soundpack), I)) {
        let o = {
            title: n,
            body: i
        };
        null != t && (o.icon = t), (null == l ? void 0 : l.sound) != null && (o.sound = b(l.sound, l.soundpack)), (null == l ? void 0 : l.tag) != null && (o.identifier = l.tag);
        let a = 'string' == typeof (null == e ? void 0 : e.guild_id) ? e.guild_id : null,
            u = 'string' == typeof (null == e ? void 0 : e.channel_id) ? e.channel_id : null,
            r = 'string' == typeof (null == e ? void 0 : e.notif_user_id) ? e.notif_user_id : null;
        if (null != u) {
            o.threadIdentifier = u;
            let t = _.Z.getChannel(u);
            null != t && (o.groupName = (0, d.F6)(t, h.default, E.Z));
        }
        null != r && ((o.senderIdentifier = r), null != a && (o.senderDisplayName = T.ZP.getName(a, u, h.default.getUser(r))));
        try {
            let t = await S.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', o);
            G[t] = {
                options: l,
                trackingProps: e
            };
            let n = {
                close() {
                    try {
                        S.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [t]);
                    } catch (t) {
                        P.warn('Native notification removal failed with error: ', t);
                    }
                }
            };
            return m(n), n;
        } catch (t) {
            P.warn('Native notification failed with error: ', t);
        }
    }
    null != l.sound && I && V(l.sound, null !== (s = l.volume) && void 0 !== s ? s : 1, l.soundpack);
    let y = {
        icon: t,
        body: i,
        tag: f,
        silent: !0
    };
    A && N.Z.taskbarFlash && S.ZP.flashFrame(!0);
    try {
        c = new L(n, y);
    } catch (t) {
        return null;
    }
    return (m(c),
    (c.onclick = () => {
        var t;
        p.isPlatformEmbedded ? S.ZP.focus() : (window.focus(), c.close()), !l.omitClickTracking && v.default.track(C.rMx.NOTIFICATION_CLICKED, e), null === (t = l.onClick) || void 0 === t || t.call(l);
    }),
    O)
        ? c
        : {
              close() {
                  var t;
                  null == c || null === (t = c.onclose) || void 0 === t || t.call(c);
              }
          };
}
n.Z = {
    hasPermission: M,
    requestPermission: function (t) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                S.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((n) => {
                        t(n);
                    })
                    .catch(() => {
                        t(!1);
                    })
                    .finally(() => {
                        e = void 0;
                    });
                return;
            } catch (t) {
                P.warn('Native notification authorization failed with error: ', t);
            }
        null != L &&
            L.requestPermission(async () => {
                null != t && t(await M());
            });
    },
    showNotification: H,
    disabled: W,
    playNotificationSound: k
};
