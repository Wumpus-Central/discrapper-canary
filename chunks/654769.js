let a;
n(47120), n(177593), n(773603);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(579806),
    d = n(933557),
    u = n(710845),
    h = n(474873),
    m = n(135906),
    x = n(592125),
    f = n(292959),
    p = n(699516),
    b = n(246946),
    g = n(594174),
    v = n(626135),
    j = n(5192),
    _ = n(358085),
    C = n(557177),
    T = n(998502),
    N = n(981631);
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
let y = _.isPlatformEmbedded && (0, _.isWindows)(),
    I = y && 10 > parseFloat(c.Z.os.release),
    E = !0;
if (y && !I) {
    let [e, , t] = c.Z.os.release.split('.');
    E = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let Z = new u.Z('NotificationUtils'),
    w = (y && E) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function k() {
    if (void 0 === a) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                a = await T.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                Z.warn('Fetching native notification settings failed with error: ', e), (a = null);
            }
        else a = null;
    }
    return a;
}
async function O() {
    let e = await k();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function R(e, t) {
    var n;
    return null !== (n = (0, m.Z)(null != t ? t : h.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await O())
        try {
            await T.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: R(e, n) });
            return;
        } catch (e) {
            Z.warn('Native notification sound failed with error: ', e);
        }
    (0, C.GN)(e, t, void 0, n);
}
let P = i().throttle(B, 1000, { leading: !0 });
function L() {
    T.ZP.flashFrame(!1);
}
y && (window.addEventListener('focus', L), T.ZP.on('MAIN_WINDOW_FOCUS', L));
let A = window.Notification;
I &&
    (T.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    T.ZP.send('NOTIFICATIONS_CLEAR'),
    (r = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], T.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            S(this, 'id', A._id++),
                S(this, 'title', void 0),
                S(this, 'body', void 0),
                S(this, 'icon', void 0),
                S(this, 'onshow', function () {}),
                S(this, 'onclick', function () {}),
                S(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = t),
                (this.icon = n),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                T.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    S(r, 'permission', 'granted'),
    S(r, '_id', 0),
    (A = r));
let D = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        T.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete D[n];
            else {
                var a, r, l;
                let e = D[n];
                !(null == e ? void 0 : null === (a = e.options) || void 0 === a ? void 0 : a.omitClickTracking) && v.default.track(N.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (l = e.options) || void 0 === l || null === (r = l.onClick) || void 0 === r || r.call(l);
            }
        }),
            T.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        Z.warn('Native notification setup failed with error: ', e);
    }
async function F() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications')) {
        var e;
        return (null === (e = await k()) || void 0 === e ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != A && 'granted' === A.permission;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? P(e, t, n) : B(e, t, n);
}
async function H(e) {
    return (b.Z.disableNotifications && null == e.overrideStreamerMode) || !(await F()) || (_.isPlatformEmbedded && !T.ZP.shouldDisplayNotifications());
}
async function G(e, t, n, a, r) {
    var l, o, s, c;
    let u;
    if (await H(r)) {
        null != r.sound && !1 !== r.playSoundIfDisabled && M(r.sound, null !== (l = r.volume) && void 0 !== l ? l : 1, r.soundpack);
        return;
    }
    let h = null !== (o = null == r ? void 0 : r.tag) && void 0 !== o ? o : null;
    (0, _.isLinux)() && (n = i().escape(n));
    let m = await k(),
        b = (null == m ? void 0 : m.authorizationStatus) === 'authorized',
        C = b && (null == m ? void 0 : m.sound) === !0,
        S = (e) => {
            var t;
            null === (t = r.onShown) || void 0 === t || t.call(r), !r.omitViewTracking && v.default.track(N.rMx.NOTIFICATION_VIEWED, a), w && setTimeout(() => e.close(), 5000);
        };
    if ((null != r.sound && !C && M(r.sound, null !== (s = r.volume) && void 0 !== s ? s : 1, r.soundpack), b)) {
        let l = {
            title: t,
            body: n
        };
        null != e && (l.icon = e), (null == r ? void 0 : r.sound) != null && (l.sound = R(r.sound, r.soundpack)), (null == r ? void 0 : r.tag) != null && (l.identifier = r.tag);
        let i = 'string' == typeof (null == a ? void 0 : a.guild_id) ? a.guild_id : null,
            o = 'string' == typeof (null == a ? void 0 : a.channel_id) ? a.channel_id : null,
            s = 'string' == typeof (null == a ? void 0 : a.notif_user_id) ? a.notif_user_id : null;
        if (null != o) {
            l.threadIdentifier = o;
            let e = x.Z.getChannel(o);
            null != e && (l.groupName = (0, d.F6)(e, g.default, p.Z));
        }
        null != s && ((l.senderIdentifier = s), null != i && (l.senderDisplayName = j.ZP.getName(i, o, g.default.getUser(s))));
        try {
            let e = await T.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', l);
            D[e] = {
                options: r,
                trackingProps: a
            };
            let t = {
                close() {
                    try {
                        T.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                    } catch (e) {
                        Z.warn('Native notification removal failed with error: ', e);
                    }
                }
            };
            return S(t), t;
        } catch (e) {
            Z.warn('Native notification failed with error: ', e);
        }
    }
    null != r.sound && b && M(r.sound, null !== (c = r.volume) && void 0 !== c ? c : 1, r.soundpack);
    let I = {
        icon: e,
        body: n,
        tag: h,
        silent: !0
    };
    y && f.Z.taskbarFlash && T.ZP.flashFrame(!0);
    try {
        u = new A(t, I);
    } catch (e) {
        return null;
    }
    return (S(u),
    (u.onclick = () => {
        var e;
        _.isPlatformEmbedded ? T.ZP.focus() : (window.focus(), u.close()), !r.omitClickTracking && v.default.track(N.rMx.NOTIFICATION_CLICKED, a), null === (e = r.onClick) || void 0 === e || e.call(r);
    }),
    E)
        ? u
        : {
              close() {
                  var e;
                  null == u || null === (e = u.onclose) || void 0 === e || e.call(u);
              }
          };
}
t.Z = {
    hasPermission: F,
    requestPermission: function (e) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                T.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
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
                Z.warn('Native notification authorization failed with error: ', e);
            }
        null != A &&
            A.requestPermission(async () => {
                null != e && e(await F());
            });
    },
    showNotification: G,
    disabled: H,
    playNotificationSound: B
};
