let i;
n.d(t, { Z: () => H }), n(47120), n(177593), n(773603);
var a,
    o = n(392711),
    r = n.n(o),
    l = n(525654),
    c = n.n(l),
    s = n(579806),
    _ = n(933557),
    d = n(710845),
    u = n(812483),
    f = n(460181),
    p = n(474873),
    g = n(135906),
    b = n(592125),
    h = n(292959),
    m = n(699516),
    C = n(246946),
    E = n(594174),
    I = n(626135),
    T = n(5192),
    R = n(358085),
    O = n(960048),
    S = n(998502),
    A = n(981631);
function v(e, t, n) {
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
let N = R.isPlatformEmbedded && (0, R.isWindows)(),
    L = N && 10 > parseFloat(s.Z.os.release),
    k = !0;
if (N && !L) {
    let [e, , t] = s.Z.os.release.split('.');
    k = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let B = new d.Z('NotificationUtils'),
    y = (N && k) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version));
async function U() {
    if (void 0 === i) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                i = await S.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                B.warn('Fetching native notification settings failed with error: ', e), (i = null);
            }
        else i = null;
    }
    return i;
}
async function D() {
    let e = await U();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function w(e, t) {
    var n;
    return null !== (n = (0, g.Z)(null != t ? t : p.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await D())
        try {
            await S.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: w(e, n) });
            return;
        } catch (e) {
            B.warn('Native notification sound failed with error: ', e);
        }
    (0, f.GN)(e, t, void 0, n);
}
let x = r().throttle(P, 1000, { leading: !0 });
function M() {
    S.ZP.flashFrame(!1);
}
N && (window.addEventListener('focus', M), S.ZP.on('MAIN_WINDOW_FOCUS', M));
let Z = window.Notification;
if (L) {
    let e = {};
    S.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        S.ZP.send('NOTIFICATIONS_CLEAR'),
        (a = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], S.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: i }) {
                v(this, 'id', Z._id++),
                    v(this, 'title', void 0),
                    v(this, 'body', void 0),
                    v(this, 'icon', void 0),
                    v(this, 'onshow', function () {}),
                    v(this, 'onclick', function () {}),
                    v(this, 'onclose', function () {}),
                    (this.title = t),
                    (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    S.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        v(a, 'permission', 'granted'),
        v(a, '_id', 0),
        (Z = a);
}
let F = {};
if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
    try {
        S.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete F[n];
            else {
                var i, a, o;
                let e = F[n];
                (null == e ? void 0 : null === (i = e.options) || void 0 === i ? void 0 : i.omitClickTracking) || I.default.track(A.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (o = e.options) || void 0 === o || null === (a = o.onClick) || void 0 === a || a.call(o);
            }
        }),
            S.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        B.warn('Native notification setup failed with error: ', e);
    }
async function G() {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications')) {
        var e;
        return (null === (e = await U()) || void 0 === e ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != Z && 'granted' === Z.permission;
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? x(e, t, n) : P(e, t, n);
}
async function W(e) {
    return (C.Z.disableNotifications && null == e.overrideStreamerMode) || !(await G()) || (R.isPlatformEmbedded && !S.ZP.shouldDisplayNotifications());
}
let H = {
    hasPermission: G,
    requestPermission: function (e) {
        if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports('notifications'))
            try {
                S.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    })
                    .finally(() => {
                        i = void 0;
                    });
                return;
            } catch (e) {
                B.warn('Native notification authorization failed with error: ', e);
            }
        null != Z &&
            Z.requestPermission(async () => {
                null != e && e(await G());
            });
    },
    showNotification: async function (e, t, n, i, a) {
        var o, r, l, c;
        let s;
        if (await W(a)) {
            null != a.sound && !1 !== a.playSoundIfDisabled && V(a.sound, null !== (o = a.volume) && void 0 !== o ? o : 1, a.soundpack);
            return;
        }
        let d = null !== (r = null == a ? void 0 : a.tag) && void 0 !== r ? r : null,
            f = await U(),
            p = (null == f ? void 0 : f.authorizationStatus) === 'authorized',
            g = p && (null == f ? void 0 : f.sound) === !0,
            C = (e) => {
                var t;
                null === (t = a.onShown) || void 0 === t || t.call(a), a.omitViewTracking || I.default.track(A.rMx.NOTIFICATION_VIEWED, i), y && setTimeout(() => e.close(), 5000);
            };
        if (
            (null == a.sound || g || V(a.sound, null !== (l = a.volume) && void 0 !== l ? l : 1, a.soundpack),
            u.Z.getCurrentConfig({ location: 'showNotification' }).enabled &&
                a.isUserAvatar &&
                null != e &&
                (e = await (function (e) {
                    let t = new Image();
                    return (
                        (t.src = e),
                        (t.crossOrigin = 'anonymous'),
                        new Promise((n, i) => {
                            (t.onload = () => {
                                '' !== t.src &&
                                    n(
                                        (function (e) {
                                            let t = document.createElement('canvas'),
                                                n = t.getContext('2d'),
                                                i = Math.min(e.width, e.height);
                                            (t.width = i), (t.height = i), null != n && (n.beginPath(), n.arc(i / 2, i / 2, i / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(e, (e.width - i) / 2, (e.height - i) / 2, i, i, 0, 0, i, i));
                                            let a = t.toDataURL();
                                            return t.remove(), a;
                                        })(t)
                                    );
                            }),
                                (t.onerror = (t) => {
                                    O.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), i(e);
                                });
                        })
                    );
                })(e)),
            p)
        ) {
            let o = {
                title: t,
                body: n
            };
            null != e && (o.icon = e), (null == a ? void 0 : a.sound) != null && (o.sound = w(a.sound, a.soundpack)), (null == a ? void 0 : a.tag) != null && (o.identifier = a.tag);
            let r = 'string' == typeof (null == i ? void 0 : i.guild_id) ? i.guild_id : null,
                l = 'string' == typeof (null == i ? void 0 : i.channel_id) ? i.channel_id : null,
                c = 'string' == typeof (null == i ? void 0 : i.notif_user_id) ? i.notif_user_id : null;
            if (null != l) {
                o.threadIdentifier = l;
                let e = b.Z.getChannel(l);
                null != e && (o.groupName = (0, _.F6)(e, E.default, m.Z));
            }
            null != c && ((o.senderIdentifier = c), null != r && (o.senderDisplayName = T.ZP.getName(r, l, E.default.getUser(c))));
            try {
                let e = await S.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', o);
                F[e] = {
                    options: a,
                    trackingProps: i
                };
                let t = {
                    close() {
                        try {
                            S.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                        } catch (e) {
                            B.warn('Native notification removal failed with error: ', e);
                        }
                    }
                };
                return C(t), t;
            } catch (e) {
                B.warn('Native notification failed with error: ', e);
            }
        }
        null != a.sound && p && V(a.sound, null !== (c = a.volume) && void 0 !== c ? c : 1, a.soundpack);
        let v = {
            icon: e,
            body: n,
            tag: d,
            silent: !0
        };
        N && h.Z.taskbarFlash && S.ZP.flashFrame(!0);
        try {
            s = new Z(t, v);
        } catch (e) {
            return null;
        }
        return (C(s),
        (s.onclick = () => {
            var e;
            R.isPlatformEmbedded ? S.ZP.focus() : (window.focus(), s.close()), a.omitClickTracking || I.default.track(A.rMx.NOTIFICATION_CLICKED, i), null === (e = a.onClick) || void 0 === e || e.call(a);
        }),
        k)
            ? s
            : {
                  close() {
                      var e;
                      null == s || null === (e = s.onclose) || void 0 === e || e.call(s);
                  }
              };
    },
    disabled: W,
    playNotificationSound: P
};
