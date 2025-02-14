let a;
n.d(t, { Z: () => H }), n(47120), n(177593), n(773603);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(579806),
    d = n(933557),
    u = n(710845),
    h = n(812483),
    m = n(460181),
    x = n(474873),
    _ = n(135906),
    p = n(592125),
    f = n(292959),
    b = n(699516),
    g = n(246946),
    v = n(594174),
    j = n(626135),
    C = n(5192),
    N = n(358085),
    T = n(960048),
    E = n(998502),
    y = n(981631);
function S(e, t, n) {
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
let k = N.isPlatformEmbedded && (0, N.isWindows)(),
    R = k && 10 > parseFloat(c.Z.os.release),
    I = !0;
if (k && !R) {
    let [e, , t] = c.Z.os.release.split('.');
    I = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let O = new u.Z('NotificationUtils'),
    Z = (k && I) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function w() {
    if (void 0 === a) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                a = await E.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                O.warn('Fetching native notification settings failed with error: ', e), (a = null);
            }
        else a = null;
    }
    return a;
}
async function A() {
    let e = await w();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function L(e, t) {
    var n;
    return null !== (n = (0, _.Z)(null != t ? t : x.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await A())
        try {
            await E.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: L(e, n) });
            return;
        } catch (e) {
            O.warn('Native notification sound failed with error: ', e);
        }
    (0, m.GN)(e, t, void 0, n);
}
let D = i().throttle(P, 1000, { leading: !0 });
function B() {
    E.ZP.flashFrame(!1);
}
k && (window.addEventListener('focus', B), E.ZP.on('MAIN_WINDOW_FOCUS', B));
let M = window.Notification;
if (R) {
    let e = {};
    E.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let a = e[n];
        null != a && (a.onclick(), a.close());
    }),
        E.ZP.send('NOTIFICATIONS_CLEAR'),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], E.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: a }) {
                S(this, 'id', M._id++),
                    S(this, 'title', void 0),
                    S(this, 'body', void 0),
                    S(this, 'icon', void 0),
                    S(this, 'onshow', function () {}),
                    S(this, 'onclick', function () {}),
                    S(this, 'onclose', function () {}),
                    (this.title = t),
                    (this.body = n),
                    (this.icon = a),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    E.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        S(r, 'permission', 'granted'),
        S(r, '_id', 0),
        (M = r);
}
let F = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        E.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete F[n];
            else {
                var a, r, l;
                let e = F[n];
                (null == e ? void 0 : null === (a = e.options) || void 0 === a ? void 0 : a.omitClickTracking) || j.default.track(y.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (l = e.options) || void 0 === l || null === (r = l.onClick) || void 0 === r || r.call(l);
            }
        }),
            E.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        O.warn('Native notification setup failed with error: ', e);
    }
async function U() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications')) {
        var e;
        return (null === (e = await w()) || void 0 === e ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != M && 'granted' === M.permission;
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? D(e, t, n) : P(e, t, n);
}
async function G(e) {
    return (g.Z.disableNotifications && null == e.overrideStreamerMode) || !(await U()) || (N.isPlatformEmbedded && !E.ZP.shouldDisplayNotifications());
}
let H = {
    hasPermission: U,
    requestPermission: function (e) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                E.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    })
                    .finally(() => {
                        a = void 0;
                    });
                return;
            } catch (e) {
                O.warn('Native notification authorization failed with error: ', e);
            }
        null != M &&
            M.requestPermission(async () => {
                null != e && e(await U());
            });
    },
    showNotification: async function (e, t, n, a, r) {
        var l, i, o, s;
        let c;
        if (await G(r)) {
            null != r.sound && !1 !== r.playSoundIfDisabled && z(r.sound, null !== (l = r.volume) && void 0 !== l ? l : 1, r.soundpack);
            return;
        }
        let u = null !== (i = null == r ? void 0 : r.tag) && void 0 !== i ? i : null,
            m = await w(),
            x = (null == m ? void 0 : m.authorizationStatus) === 'authorized',
            _ = x && (null == m ? void 0 : m.sound) === !0,
            g = (e) => {
                var t;
                null === (t = r.onShown) || void 0 === t || t.call(r), r.omitViewTracking || j.default.track(y.rMx.NOTIFICATION_VIEWED, a), Z && setTimeout(() => e.close(), 5000);
            };
        if (
            (null == r.sound || _ || z(r.sound, null !== (o = r.volume) && void 0 !== o ? o : 1, r.soundpack),
            h.Z.getCurrentConfig({ location: 'showNotification' }).enabled &&
                r.isUserAvatar &&
                null != e &&
                (e = await (function (e) {
                    let t = new Image();
                    return (
                        (t.src = e),
                        (t.crossOrigin = 'anonymous'),
                        new Promise((n, a) => {
                            (t.onload = () => {
                                '' !== t.src &&
                                    n(
                                        (function (e) {
                                            let t = document.createElement('canvas'),
                                                n = t.getContext('2d'),
                                                a = Math.min(e.width, e.height);
                                            (t.width = a), (t.height = a), null != n && (n.beginPath(), n.arc(a / 2, a / 2, a / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(e, (e.width - a) / 2, (e.height - a) / 2, a, a, 0, 0, a, a));
                                            let r = t.toDataURL();
                                            return t.remove(), r;
                                        })(t)
                                    );
                            }),
                                (t.onerror = (t) => {
                                    T.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), a(e);
                                });
                        })
                    );
                })(e)),
            x)
        ) {
            let l = {
                title: t,
                body: n
            };
            null != e && (l.icon = e), (null == r ? void 0 : r.sound) != null && (l.sound = L(r.sound, r.soundpack)), (null == r ? void 0 : r.tag) != null && (l.identifier = r.tag);
            let i = 'string' == typeof (null == a ? void 0 : a.guild_id) ? a.guild_id : null,
                o = 'string' == typeof (null == a ? void 0 : a.channel_id) ? a.channel_id : null,
                s = 'string' == typeof (null == a ? void 0 : a.notif_user_id) ? a.notif_user_id : null;
            if (null != o) {
                l.threadIdentifier = o;
                let e = p.Z.getChannel(o);
                null != e && (l.groupName = (0, d.F6)(e, v.default, b.Z));
            }
            null != s && ((l.senderIdentifier = s), null != i && (l.senderDisplayName = C.ZP.getName(i, o, v.default.getUser(s))));
            try {
                let e = await E.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', l);
                F[e] = {
                    options: r,
                    trackingProps: a
                };
                let t = {
                    close() {
                        try {
                            E.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                        } catch (e) {
                            O.warn('Native notification removal failed with error: ', e);
                        }
                    }
                };
                return g(t), t;
            } catch (e) {
                O.warn('Native notification failed with error: ', e);
            }
        }
        null != r.sound && x && z(r.sound, null !== (s = r.volume) && void 0 !== s ? s : 1, r.soundpack);
        let S = {
            icon: e,
            body: n,
            tag: u,
            silent: !0
        };
        k && f.Z.taskbarFlash && E.ZP.flashFrame(!0);
        try {
            c = new M(t, S);
        } catch (e) {
            return null;
        }
        return (g(c),
        (c.onclick = () => {
            var e;
            N.isPlatformEmbedded ? E.ZP.focus() : (window.focus(), c.close()), r.omitClickTracking || j.default.track(y.rMx.NOTIFICATION_CLICKED, a), null === (e = r.onClick) || void 0 === e || e.call(r);
        }),
        I)
            ? c
            : {
                  close() {
                      var e;
                      null == c || null === (e = c.onclose) || void 0 === e || e.call(c);
                  }
              };
    },
    disabled: G,
    playNotificationSound: P
};
