let a;
n.d(t, { Z: () => U }), n(47120), n(177593), n(773603);
var l,
    r = n(392711),
    i = n.n(r),
    o = n(525654),
    s = n.n(o),
    c = n(579806),
    d = n(933557),
    u = n(710845),
    m = n(474873),
    h = n(135906),
    x = n(592125),
    p = n(292959),
    f = n(699516),
    _ = n(246946),
    b = n(594174),
    g = n(626135),
    v = n(5192),
    j = n(358085),
    C = n(557177),
    N = n(998502),
    T = n(981631);
function E(e, t, n) {
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
let y = j.isPlatformEmbedded && (0, j.isWindows)(),
    S = y && 10 > parseFloat(c.Z.os.release),
    k = !0;
if (y && !S) {
    let [e, , t] = c.Z.os.release.split('.');
    k = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let I = new u.Z('NotificationUtils'),
    Z = (y && k) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function O() {
    if (void 0 === a) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                a = await N.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                I.warn('Fetching native notification settings failed with error: ', e), (a = null);
            }
        else a = null;
    }
    return a;
}
async function w() {
    let e = await O();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function R(e, t) {
    var n;
    return null !== (n = (0, h.Z)(null != t ? t : m.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await w())
        try {
            await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: R(e, n) });
            return;
        } catch (e) {
            I.warn('Native notification sound failed with error: ', e);
        }
    (0, C.GN)(e, t, void 0, n);
}
let A = i().throttle(P, 1000, { leading: !0 });
function L() {
    N.ZP.flashFrame(!1);
}
y && (window.addEventListener('focus', L), N.ZP.on('MAIN_WINDOW_FOCUS', L));
let D = window.Notification;
if (S) {
    let e = {};
    N.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let a = e[n];
        null != a && (a.onclick(), a.close());
    }),
        N.ZP.send('NOTIFICATIONS_CLEAR'),
        (l = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], N.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: a }) {
                E(this, 'id', D._id++),
                    E(this, 'title', void 0),
                    E(this, 'body', void 0),
                    E(this, 'icon', void 0),
                    E(this, 'onshow', function () {}),
                    E(this, 'onclick', function () {}),
                    E(this, 'onclose', function () {}),
                    (this.title = t),
                    (this.body = n),
                    (this.icon = a),
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
        E(l, 'permission', 'granted'),
        E(l, '_id', 0),
        (D = l);
}
let B = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        N.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete B[n];
            else {
                var a, l, r;
                let e = B[n];
                (null == e ? void 0 : null === (a = e.options) || void 0 === a ? void 0 : a.omitClickTracking) || g.default.track(T.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (r = e.options) || void 0 === r || null === (l = r.onClick) || void 0 === l || l.call(r);
            }
        }),
            N.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        I.warn('Native notification setup failed with error: ', e);
    }
async function M() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications')) {
        var e;
        return (null === (e = await O()) || void 0 === e ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != D && 'granted' === D.permission;
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? A(e, t, n) : P(e, t, n);
}
async function F(e) {
    return (_.Z.disableNotifications && null == e.overrideStreamerMode) || !(await M()) || (j.isPlatformEmbedded && !N.ZP.shouldDisplayNotifications());
}
let U = {
    hasPermission: M,
    requestPermission: function (e) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                N.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
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
                I.warn('Native notification authorization failed with error: ', e);
            }
        null != D &&
            D.requestPermission(async () => {
                null != e && e(await M());
            });
    },
    showNotification: async function (e, t, n, a, l) {
        var r, i, o, s;
        let c;
        if (await F(l)) {
            null != l.sound && !1 !== l.playSoundIfDisabled && z(l.sound, null !== (r = l.volume) && void 0 !== r ? r : 1, l.soundpack);
            return;
        }
        let u = null !== (i = null == l ? void 0 : l.tag) && void 0 !== i ? i : null,
            m = await O(),
            h = (null == m ? void 0 : m.authorizationStatus) === 'authorized',
            _ = h && (null == m ? void 0 : m.sound) === !0,
            C = (e) => {
                var t;
                null === (t = l.onShown) || void 0 === t || t.call(l), l.omitViewTracking || g.default.track(T.rMx.NOTIFICATION_VIEWED, a), Z && setTimeout(() => e.close(), 5000);
            };
        if ((null == l.sound || _ || z(l.sound, null !== (o = l.volume) && void 0 !== o ? o : 1, l.soundpack), h)) {
            let r = {
                title: t,
                body: n
            };
            null != e && (r.icon = e), (null == l ? void 0 : l.sound) != null && (r.sound = R(l.sound, l.soundpack)), (null == l ? void 0 : l.tag) != null && (r.identifier = l.tag);
            let i = 'string' == typeof (null == a ? void 0 : a.guild_id) ? a.guild_id : null,
                o = 'string' == typeof (null == a ? void 0 : a.channel_id) ? a.channel_id : null,
                s = 'string' == typeof (null == a ? void 0 : a.notif_user_id) ? a.notif_user_id : null;
            if (null != o) {
                r.threadIdentifier = o;
                let e = x.Z.getChannel(o);
                null != e && (r.groupName = (0, d.F6)(e, b.default, f.Z));
            }
            null != s && ((r.senderIdentifier = s), null != i && (r.senderDisplayName = v.ZP.getName(i, o, b.default.getUser(s))));
            try {
                let e = await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', r);
                B[e] = {
                    options: l,
                    trackingProps: a
                };
                let t = {
                    close() {
                        try {
                            N.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                        } catch (e) {
                            I.warn('Native notification removal failed with error: ', e);
                        }
                    }
                };
                return C(t), t;
            } catch (e) {
                I.warn('Native notification failed with error: ', e);
            }
        }
        null != l.sound && h && z(l.sound, null !== (s = l.volume) && void 0 !== s ? s : 1, l.soundpack), y && p.Z.taskbarFlash && N.ZP.flashFrame(!0);
        try {
            c = new D(t, {
                icon: e,
                body: n,
                tag: u,
                silent: !0
            });
        } catch (e) {
            return null;
        }
        return (C(c),
        (c.onclick = () => {
            var e;
            j.isPlatformEmbedded ? N.ZP.focus() : (window.focus(), c.close()), l.omitClickTracking || g.default.track(T.rMx.NOTIFICATION_CLICKED, a), null === (e = l.onClick) || void 0 === e || e.call(l);
        }),
        k)
            ? c
            : {
                  close() {
                      var e;
                      null == c || null === (e = c.onclose) || void 0 === e || e.call(c);
                  }
              };
    },
    disabled: F,
    playNotificationSound: P
};
