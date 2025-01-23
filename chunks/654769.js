let i;
n(47120), n(177593), n(773603);
var o,
    a = n(392711),
    r = n.n(a),
    l = n(525654),
    c = n.n(l),
    d = n(579806),
    s = n(933557),
    u = n(710845),
    f = n(474873),
    b = n(135906),
    _ = n(592125),
    g = n(292959),
    h = n(699516),
    m = n(246946),
    p = n(594174),
    C = n(626135),
    I = n(5192),
    T = n(358085),
    v = n(557177),
    w = n(998502),
    k = n(981631);
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
let N = T.isPlatformEmbedded && (0, T.isWindows)(),
    B = N && 10 > parseFloat(d.Z.os.release),
    R = !0;
if (N && !B) {
    let [e, , t] = d.Z.os.release.split('.');
    R = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let O = new u.Z('NotificationUtils'),
    A = (N && R) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version));
async function Z() {
    if (void 0 === i) {
        if (null === d.Z || void 0 === d.Z ? void 0 : d.Z.features.supports('notifications'))
            try {
                i = await w.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                O.warn('Fetching native notification settings failed with error: ', e), (i = null);
            }
        else i = null;
    }
    return i;
}
async function E() {
    let e = await Z();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function x(e, t) {
    var n;
    return null !== (n = (0, b.Z)(null != t ? t : f.Z.getSoundpack())[e]) && void 0 !== n ? n : e;
}
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await E())
        try {
            await w.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: x(e, n) });
            return;
        } catch (e) {
            O.warn('Native notification sound failed with error: ', e);
        }
    (0, v.GN)(e, t, void 0, n);
}
let M = r().throttle(y, 1000, { leading: !0 });
function P() {
    w.ZP.flashFrame(!1);
}
N && (window.addEventListener('focus', P), w.ZP.on('MAIN_WINDOW_FOCUS', P));
let L = window.Notification;
B &&
    (w.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    w.ZP.send('NOTIFICATIONS_CLEAR'),
    (o = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], w.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            S(this, 'id', L._id++),
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
                w.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    S(o, 'permission', 'granted'),
    S(o, '_id', 0),
    (L = o));
let F = {};
if (null === d.Z || void 0 === d.Z ? void 0 : d.Z.features.supports('notifications'))
    try {
        w.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete F[n];
            else {
                var i, o, a;
                let e = F[n];
                !(null == e ? void 0 : null === (i = e.options) || void 0 === i ? void 0 : i.omitClickTracking) && C.default.track(k.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (a = e.options) || void 0 === a || null === (o = a.onClick) || void 0 === o || o.call(a);
            }
        }),
            w.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        O.warn('Native notification setup failed with error: ', e);
    }
async function U() {
    if (null === d.Z || void 0 === d.Z ? void 0 : d.Z.features.supports('notifications')) {
        var e;
        return (null === (e = await Z()) || void 0 === e ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != L && 'granted' === L.permission;
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? M(e, t, n) : y(e, t, n);
}
async function W(e) {
    return (m.Z.disableNotifications && null == e.overrideStreamerMode) || !(await U()) || (T.isPlatformEmbedded && !w.ZP.shouldDisplayNotifications());
}
async function G(e, t, n, i, o) {
    var a, r, l, c;
    let d;
    if (await W(o)) {
        null != o.sound && !1 !== o.playSoundIfDisabled && D(o.sound, null !== (a = o.volume) && void 0 !== a ? a : 1, o.soundpack);
        return;
    }
    let u = null !== (r = null == o ? void 0 : o.tag) && void 0 !== r ? r : null,
        f = await Z(),
        b = (null == f ? void 0 : f.authorizationStatus) === 'authorized',
        m = b && (null == f ? void 0 : f.sound) === !0,
        v = (e) => {
            var t;
            null === (t = o.onShown) || void 0 === t || t.call(o), !o.omitViewTracking && C.default.track(k.rMx.NOTIFICATION_VIEWED, i), A && setTimeout(() => e.close(), 5000);
        };
    if ((null != o.sound && !m && D(o.sound, null !== (l = o.volume) && void 0 !== l ? l : 1, o.soundpack), b)) {
        let a = {
            title: t,
            body: n
        };
        null != e && (a.icon = e), (null == o ? void 0 : o.sound) != null && (a.sound = x(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
        let r = 'string' == typeof (null == i ? void 0 : i.guild_id) ? i.guild_id : null,
            l = 'string' == typeof (null == i ? void 0 : i.channel_id) ? i.channel_id : null,
            c = 'string' == typeof (null == i ? void 0 : i.notif_user_id) ? i.notif_user_id : null;
        if (null != l) {
            a.threadIdentifier = l;
            let e = _.Z.getChannel(l);
            null != e && (a.groupName = (0, s.F6)(e, p.default, h.Z));
        }
        null != c && ((a.senderIdentifier = c), null != r && (a.senderDisplayName = I.ZP.getName(r, l, p.default.getUser(c))));
        try {
            let e = await w.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
            F[e] = {
                options: o,
                trackingProps: i
            };
            let t = {
                close() {
                    try {
                        w.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                    } catch (e) {
                        O.warn('Native notification removal failed with error: ', e);
                    }
                }
            };
            return v(t), t;
        } catch (e) {
            O.warn('Native notification failed with error: ', e);
        }
    }
    null != o.sound && b && D(o.sound, null !== (c = o.volume) && void 0 !== c ? c : 1, o.soundpack);
    N && g.Z.taskbarFlash && w.ZP.flashFrame(!0);
    try {
        d = new L(t, {
            icon: e,
            body: n,
            tag: u,
            silent: !0
        });
    } catch (e) {
        return null;
    }
    return (v(d),
    (d.onclick = () => {
        var e;
        T.isPlatformEmbedded ? w.ZP.focus() : (window.focus(), d.close()), !o.omitClickTracking && C.default.track(k.rMx.NOTIFICATION_CLICKED, i), null === (e = o.onClick) || void 0 === e || e.call(o);
    }),
    R)
        ? d
        : {
              close() {
                  var e;
                  null == d || null === (e = d.onclose) || void 0 === e || e.call(d);
              }
          };
}
t.Z = {
    hasPermission: U,
    requestPermission: function (e) {
        if (null === d.Z || void 0 === d.Z ? void 0 : d.Z.features.supports('notifications'))
            try {
                w.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
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
                O.warn('Native notification authorization failed with error: ', e);
            }
        null != L &&
            L.requestPermission(async () => {
                null != e && e(await U());
            });
    },
    showNotification: G,
    disabled: W,
    playNotificationSound: y
};
