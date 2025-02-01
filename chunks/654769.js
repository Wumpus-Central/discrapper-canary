let i;
n.d(t, { Z: () => F }), n(47120), n(177593), n(773603);
var o,
    a = n(392711),
    l = n.n(a),
    r = n(525654),
    c = n.n(r),
    _ = n(579806),
    d = n(933557),
    u = n(710845),
    s = n(460181),
    E = n(474873),
    I = n(135906),
    f = n(592125),
    T = n(292959),
    p = n(699516),
    S = n(246946),
    g = n(594174),
    C = n(626135),
    A = n(5192),
    b = n(358085),
    h = n(998502),
    N = n(981631);
function m(e, t, n) {
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
let L = b.isPlatformEmbedded && (0, b.isWindows)(),
    O = L && 10 > parseFloat(_.Z.os.release),
    R = !0;
if (L && !O) {
    let [e, , t] = _.Z.os.release.split('.');
    R = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let D = new u.Z('NotificationUtils'),
    U = (L && R) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version));
async function v() {
    if (void 0 === i) {
        if (null === _.Z || void 0 === _.Z ? void 0 : _.Z.features.supports('notifications'))
            try {
                i = await h.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                D.warn('Fetching native notification settings failed with error: ', e), (i = null);
            }
        else i = null;
    }
    return i;
}
async function P() {
    let e = await v();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function G(e, t) {
    var n;
    return null !== (n = (0, I.Z)(null != t ? t : E.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await P())
        try {
            await h.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: G(e, n) });
            return;
        } catch (e) {
            D.warn('Native notification sound failed with error: ', e);
        }
    (0, s.GN)(e, t, void 0, n);
}
let B = l().throttle(k, 1000, { leading: !0 });
function y() {
    h.ZP.flashFrame(!1);
}
L && (window.addEventListener('focus', y), h.ZP.on('MAIN_WINDOW_FOCUS', y));
let Z = window.Notification;
if (O) {
    let e = {};
    h.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        h.ZP.send('NOTIFICATIONS_CLEAR'),
        (o = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], h.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: i }) {
                m(this, 'id', Z._id++),
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
                    (e[this.id] = this),
                    h.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        m(o, 'permission', 'granted'),
        m(o, '_id', 0),
        (Z = o);
}
let w = {};
if (null === _.Z || void 0 === _.Z ? void 0 : _.Z.features.supports('notifications'))
    try {
        h.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete w[n];
            else {
                var i, o, a;
                let e = w[n];
                (null == e ? void 0 : null === (i = e.options) || void 0 === i ? void 0 : i.omitClickTracking) || C.default.track(N.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (a = e.options) || void 0 === a || null === (o = a.onClick) || void 0 === o || o.call(a);
            }
        }),
            h.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        D.warn('Native notification setup failed with error: ', e);
    }
async function M() {
    if (null === _.Z || void 0 === _.Z ? void 0 : _.Z.features.supports('notifications')) {
        var e;
        return (null === (e = await v()) || void 0 === e ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != Z && 'granted' === Z.permission;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? B(e, t, n) : k(e, t, n);
}
async function H(e) {
    return (S.Z.disableNotifications && null == e.overrideStreamerMode) || !(await M()) || (b.isPlatformEmbedded && !h.ZP.shouldDisplayNotifications());
}
let F = {
    hasPermission: M,
    requestPermission: function (e) {
        if (null === _.Z || void 0 === _.Z ? void 0 : _.Z.features.supports('notifications'))
            try {
                h.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
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
                D.warn('Native notification authorization failed with error: ', e);
            }
        null != Z &&
            Z.requestPermission(async () => {
                null != e && e(await M());
            });
    },
    showNotification: async function (e, t, n, i, o) {
        var a, l, r, c;
        let _;
        if (await H(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && x(o.sound, null !== (a = o.volume) && void 0 !== a ? a : 1, o.soundpack);
            return;
        }
        let u = null !== (l = null == o ? void 0 : o.tag) && void 0 !== l ? l : null,
            s = await v(),
            E = (null == s ? void 0 : s.authorizationStatus) === 'authorized',
            I = E && (null == s ? void 0 : s.sound) === !0,
            S = (e) => {
                var t;
                null === (t = o.onShown) || void 0 === t || t.call(o), o.omitViewTracking || C.default.track(N.rMx.NOTIFICATION_VIEWED, i), U && setTimeout(() => e.close(), 5000);
            };
        if ((null == o.sound || I || x(o.sound, null !== (r = o.volume) && void 0 !== r ? r : 1, o.soundpack), E)) {
            let a = {
                title: t,
                body: n
            };
            null != e && (a.icon = e), (null == o ? void 0 : o.sound) != null && (a.sound = G(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
            let l = 'string' == typeof (null == i ? void 0 : i.guild_id) ? i.guild_id : null,
                r = 'string' == typeof (null == i ? void 0 : i.channel_id) ? i.channel_id : null,
                c = 'string' == typeof (null == i ? void 0 : i.notif_user_id) ? i.notif_user_id : null;
            if (null != r) {
                a.threadIdentifier = r;
                let e = f.Z.getChannel(r);
                null != e && (a.groupName = (0, d.F6)(e, g.default, p.Z));
            }
            null != c && ((a.senderIdentifier = c), null != l && (a.senderDisplayName = A.ZP.getName(l, r, g.default.getUser(c))));
            try {
                let e = await h.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
                w[e] = {
                    options: o,
                    trackingProps: i
                };
                let t = {
                    close() {
                        try {
                            h.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                        } catch (e) {
                            D.warn('Native notification removal failed with error: ', e);
                        }
                    }
                };
                return S(t), t;
            } catch (e) {
                D.warn('Native notification failed with error: ', e);
            }
        }
        null != o.sound && E && x(o.sound, null !== (c = o.volume) && void 0 !== c ? c : 1, o.soundpack), L && T.Z.taskbarFlash && h.ZP.flashFrame(!0);
        try {
            _ = new Z(t, {
                icon: e,
                body: n,
                tag: u,
                silent: !0
            });
        } catch (e) {
            return null;
        }
        return (S(_),
        (_.onclick = () => {
            var e;
            b.isPlatformEmbedded ? h.ZP.focus() : (window.focus(), _.close()), o.omitClickTracking || C.default.track(N.rMx.NOTIFICATION_CLICKED, i), null === (e = o.onClick) || void 0 === e || e.call(o);
        }),
        R)
            ? _
            : {
                  close() {
                      var e;
                      null == _ || null === (e = _.onclose) || void 0 === e || e.call(_);
                  }
              };
    },
    disabled: H,
    playNotificationSound: k
};
