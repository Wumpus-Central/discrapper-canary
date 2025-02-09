let a;
n.d(t, { Z: () => U }), n(47120), n(177593), n(773603);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(579806),
    d = n(933557),
    u = n(710845),
    h = n(460181),
    m = n(474873),
    x = n(135906),
    _ = n(592125),
    p = n(292959),
    f = n(699516),
    b = n(246946),
    g = n(594174),
    v = n(626135),
    j = n(5192),
    C = n(358085),
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
let S = C.isPlatformEmbedded && (0, C.isWindows)(),
    y = S && 10 > parseFloat(c.Z.os.release),
    k = !0;
if (S && !y) {
    let [e, , t] = c.Z.os.release.split('.');
    k = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let I = new u.Z('NotificationUtils'),
    R = (S && k) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
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
async function Z() {
    let e = await O();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function w(e, t) {
    var n;
    return null !== (n = (0, x.Z)(null != t ? t : m.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await Z())
        try {
            await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: w(e, n) });
            return;
        } catch (e) {
            I.warn('Native notification sound failed with error: ', e);
        }
    (0, h.GN)(e, t, void 0, n);
}
let L = i().throttle(A, 1000, { leading: !0 });
function P() {
    N.ZP.flashFrame(!1);
}
S && (window.addEventListener('focus', P), N.ZP.on('MAIN_WINDOW_FOCUS', P));
let D = window.Notification;
if (y) {
    let e = {};
    N.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let a = e[n];
        null != a && (a.onclick(), a.close());
    }),
        N.ZP.send('NOTIFICATIONS_CLEAR'),
        (r = class {
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
        E(r, 'permission', 'granted'),
        E(r, '_id', 0),
        (D = r);
}
let B = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        N.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete B[n];
            else {
                var a, r, l;
                let e = B[n];
                (null == e ? void 0 : null === (a = e.options) || void 0 === a ? void 0 : a.omitClickTracking) || v.default.track(T.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (l = e.options) || void 0 === l || null === (r = l.onClick) || void 0 === r || r.call(l);
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
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? L(e, t, n) : A(e, t, n);
}
async function z(e) {
    return (b.Z.disableNotifications && null == e.overrideStreamerMode) || !(await M()) || (C.isPlatformEmbedded && !N.ZP.shouldDisplayNotifications());
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
    showNotification: async function (e, t, n, a, r) {
        var l, i, o, s;
        let c;
        if (await z(r)) {
            null != r.sound && !1 !== r.playSoundIfDisabled && F(r.sound, null !== (l = r.volume) && void 0 !== l ? l : 1, r.soundpack);
            return;
        }
        let u = null !== (i = null == r ? void 0 : r.tag) && void 0 !== i ? i : null,
            h = await O(),
            m = (null == h ? void 0 : h.authorizationStatus) === 'authorized',
            x = m && (null == h ? void 0 : h.sound) === !0,
            b = (e) => {
                var t;
                null === (t = r.onShown) || void 0 === t || t.call(r), r.omitViewTracking || v.default.track(T.rMx.NOTIFICATION_VIEWED, a), R && setTimeout(() => e.close(), 5000);
            };
        if ((null == r.sound || x || F(r.sound, null !== (o = r.volume) && void 0 !== o ? o : 1, r.soundpack), m)) {
            let l = {
                title: t,
                body: n
            };
            null != e && (l.icon = e), (null == r ? void 0 : r.sound) != null && (l.sound = w(r.sound, r.soundpack)), (null == r ? void 0 : r.tag) != null && (l.identifier = r.tag);
            let i = 'string' == typeof (null == a ? void 0 : a.guild_id) ? a.guild_id : null,
                o = 'string' == typeof (null == a ? void 0 : a.channel_id) ? a.channel_id : null,
                s = 'string' == typeof (null == a ? void 0 : a.notif_user_id) ? a.notif_user_id : null;
            if (null != o) {
                l.threadIdentifier = o;
                let e = _.Z.getChannel(o);
                null != e && (l.groupName = (0, d.F6)(e, g.default, f.Z));
            }
            null != s && ((l.senderIdentifier = s), null != i && (l.senderDisplayName = j.ZP.getName(i, o, g.default.getUser(s))));
            try {
                let e = await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', l);
                B[e] = {
                    options: r,
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
                return b(t), t;
            } catch (e) {
                I.warn('Native notification failed with error: ', e);
            }
        }
        null != r.sound && m && F(r.sound, null !== (s = r.volume) && void 0 !== s ? s : 1, r.soundpack), S && p.Z.taskbarFlash && N.ZP.flashFrame(!0);
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
        return (b(c),
        (c.onclick = () => {
            var e;
            C.isPlatformEmbedded ? N.ZP.focus() : (window.focus(), c.close()), r.omitClickTracking || v.default.track(T.rMx.NOTIFICATION_CLICKED, a), null === (e = r.onClick) || void 0 === e || e.call(r);
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
    disabled: z,
    playNotificationSound: A
};
