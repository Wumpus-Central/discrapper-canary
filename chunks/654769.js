let i;
n.d(e, { Z: () => F }), n(47120), n(301563), n(177593), n(773603);
var r,
    a = n(392711),
    l = n.n(a),
    o = n(525654),
    u = n.n(o),
    s = n(579806),
    c = n(933557),
    d = n(710845),
    f = n(812483),
    N = n(460181),
    _ = n(474873),
    p = n(135906),
    E = n(592125),
    h = n(292959),
    m = n(699516),
    I = n(246946),
    g = n(594174),
    T = n(626135),
    C = n(5192),
    O = n(358085),
    A = n(960048),
    v = n(998502),
    b = n(981631);
function P(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let R = O.isPlatformEmbedded && (0, O.isWindows)(),
    S = R && 10 > parseFloat(s.Z.os.release),
    y = !0;
if (R && !S) {
    let [t, , e] = s.Z.os.release.split('.');
    y = parseInt(t) > 10 || parseInt(e) >= 15063;
}
let Z = new d.Z('NotificationUtils'),
    w = (R && y) || ('Chrome' === u().name && 47 > parseFloat(u().version)) || ('Firefox' === u().name && 52 > parseFloat(u().version));
async function k() {
    if (void 0 === i) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                i = await v.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (t) {
                Z.warn('Fetching native notification settings failed with error: ', t), (i = null);
            }
        else i = null;
    }
    return i;
}
async function G() {
    let t = await k();
    return (null == t ? void 0 : t.authorizationStatus) === 'authorized' && (null == t ? void 0 : t.sound) === !0;
}
function W(t, e) {
    var n;
    return null !== (n = (0, p.Z)(null != e ? e : _.Z.getSoundpack())[t]) && void 0 !== n ? n : t;
}
async function D(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await G())
        try {
            await v.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: W(t, n) });
            return;
        } catch (t) {
            Z.warn('Native notification sound failed with error: ', t);
        }
    (0, N.GN)(t, e, void 0, n);
}
let M = l().throttle(D, 1000, { leading: !0 });
function L() {
    v.ZP.flashFrame(!1);
}
R && (window.addEventListener('focus', L), v.ZP.on('MAIN_WINDOW_FOCUS', L));
let U = window.Notification;
if (S) {
    let t = {};
    v.ZP.on('NOTIFICATION_CLICK', (e, n) => {
        let i = t[n];
        null != i && (i.onclick(), i.close());
    }),
        v.ZP.send('NOTIFICATIONS_CLEAR'),
        (r = class {
            static requestPermission(t) {
                t();
            }
            close() {
                null != t[this.id] && (delete t[this.id], v.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(e, { body: n, icon: i }) {
                P(this, 'id', U._id++),
                    P(this, 'title', void 0),
                    P(this, 'body', void 0),
                    P(this, 'icon', void 0),
                    P(this, 'onshow', function () {}),
                    P(this, 'onclick', function () {}),
                    P(this, 'onclose', function () {}),
                    (this.title = e),
                    (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (t[this.id] = this),
                    v.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        P(r, 'permission', 'granted'),
        P(r, '_id', 0),
        (U = r);
}
let j = {};
if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
    try {
        v.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (t, e, n) => {
            if ('dismiss' === e) delete j[n];
            else {
                var i, r, a;
                let t = j[n];
                (null == t ? void 0 : null === (i = t.options) || void 0 === i ? void 0 : i.omitClickTracking) || T.default.track(b.rMx.NOTIFICATION_CLICKED, null == t ? void 0 : t.trackingProps), null == t || null === (a = t.options) || void 0 === a || null === (r = a.onClick) || void 0 === r || r.call(a);
            }
        }),
            v.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (t) {
        Z.warn('Native notification setup failed with error: ', t);
    }
async function x() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
        var t;
        return (null === (t = await k()) || void 0 === t ? void 0 : t.authorizationStatus) === 'authorized';
    }
    return null != U && 'granted' === U.permission;
}
function H(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    t.includes('message') ? M(t, e, n) : D(t, e, n);
}
async function V(t) {
    return (I.Z.disableNotifications && null == t.overrideStreamerMode) || !(await x()) || (O.isPlatformEmbedded && !v.ZP.shouldDisplayNotifications());
}
let F = {
    hasPermission: x,
    requestPermission: function (t) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                v.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((e) => {
                        t(e);
                    })
                    .catch(() => {
                        t(!1);
                    })
                    .finally(() => {
                        i = void 0;
                    });
                return;
            } catch (t) {
                Z.warn('Native notification authorization failed with error: ', t);
            }
        null != U &&
            U.requestPermission(async () => {
                null != t && t(await x());
            });
    },
    showNotification: async function (t, e, n, i, r) {
        var a, l, o, u;
        let s;
        if (await V(r)) {
            null != r.sound && !1 !== r.playSoundIfDisabled && H(r.sound, null !== (a = r.volume) && void 0 !== a ? a : 1, r.soundpack);
            return;
        }
        let d = null !== (l = null == r ? void 0 : r.tag) && void 0 !== l ? l : null,
            N = await k(),
            _ = (null == N ? void 0 : N.authorizationStatus) === 'authorized',
            p = _ && (null == N ? void 0 : N.sound) === !0,
            I = (t) => {
                var e;
                null === (e = r.onShown) || void 0 === e || e.call(r), r.omitViewTracking || T.default.track(b.rMx.NOTIFICATION_VIEWED, i), w && setTimeout(() => t.close(), 5000);
            };
        if (
            (null == r.sound || p || H(r.sound, null !== (o = r.volume) && void 0 !== o ? o : 1, r.soundpack),
            f.Z.getCurrentConfig({ location: 'showNotification' }).enabled &&
                r.isUserAvatar &&
                null != t &&
                (t = await (function (t) {
                    let e = new Image();
                    return (
                        (e.src = t),
                        (e.crossOrigin = 'anonymous'),
                        new Promise((n, i) => {
                            (e.onload = () => {
                                '' !== e.src &&
                                    n(
                                        (function (t) {
                                            let e = document.createElement('canvas'),
                                                n = e.getContext('2d'),
                                                i = Math.min(t.width, t.height);
                                            (e.width = i), (e.height = i), null != n && (n.beginPath(), n.arc(i / 2, i / 2, i / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(t, (t.width - i) / 2, (t.height - i) / 2, i, i, 0, 0, i, i));
                                            let r = e.toDataURL();
                                            return e.remove(), r;
                                        })(e)
                                    );
                            }),
                                (e.onerror = (e) => {
                                    A.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(e)), i(t);
                                });
                        })
                    );
                })(t)),
            _)
        ) {
            let a = {
                title: e,
                body: n
            };
            null != t && (a.icon = t), (null == r ? void 0 : r.sound) != null && (a.sound = W(r.sound, r.soundpack)), (null == r ? void 0 : r.tag) != null && (a.identifier = r.tag);
            let l = 'string' == typeof (null == i ? void 0 : i.guild_id) ? i.guild_id : null,
                o = 'string' == typeof (null == i ? void 0 : i.channel_id) ? i.channel_id : null,
                u = 'string' == typeof (null == i ? void 0 : i.notif_user_id) ? i.notif_user_id : null;
            if (null != o) {
                a.threadIdentifier = o;
                let t = E.Z.getChannel(o);
                null != t && (a.groupName = (0, c.F6)(t, g.default, m.Z));
            }
            null != u && ((a.senderIdentifier = u), null != l && (a.senderDisplayName = C.ZP.getName(l, o, g.default.getUser(u))));
            try {
                let t = await v.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
                j[t] = {
                    options: r,
                    trackingProps: i
                };
                let e = {
                    close() {
                        try {
                            v.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [t]);
                        } catch (t) {
                            Z.warn('Native notification removal failed with error: ', t);
                        }
                    }
                };
                return I(e), e;
            } catch (t) {
                Z.warn('Native notification failed with error: ', t);
            }
        }
        null != r.sound && _ && H(r.sound, null !== (u = r.volume) && void 0 !== u ? u : 1, r.soundpack);
        let P = {
            icon: t,
            body: n,
            tag: d,
            silent: !0
        };
        R && h.Z.taskbarFlash && v.ZP.flashFrame(!0);
        try {
            s = new U(e, P);
        } catch (t) {
            return null;
        }
        return (I(s),
        (s.onclick = () => {
            var t;
            O.isPlatformEmbedded ? v.ZP.focus() : (window.focus(), s.close()), r.omitClickTracking || T.default.track(b.rMx.NOTIFICATION_CLICKED, i), null === (t = r.onClick) || void 0 === t || t.call(r);
        }),
        y)
            ? s
            : {
                  close() {
                      var t;
                      null == s || null === (t = s.onclose) || void 0 === t || t.call(s);
                  }
              };
    },
    disabled: V,
    playNotificationSound: D
};
