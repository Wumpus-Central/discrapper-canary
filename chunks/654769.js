let o;
n.d(t, { Z: () => q }), n(47120), n(301563), n(177593), n(773603);
var e,
    l = n(392711),
    a = n.n(l),
    s = n(525654),
    r = n.n(s),
    c = n(579806),
    d = n(933557),
    u = n(710845),
    f = n(812483),
    h = n(460181),
    I = n(474873),
    p = n(135906),
    v = n(592125),
    N = n(292959),
    g = n(699516),
    w = n(246946),
    m = n(594174),
    _ = n(626135),
    O = n(5192),
    T = n(358085),
    Z = n(960048),
    b = n(998502),
    A = n(981631);
function C(i, t, n) {
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
let k = T.isPlatformEmbedded && (0, T.isWindows)(),
    y = k && 10 > parseFloat(c.Z.os.release),
    F = !0;
if (k && !y) {
    let [i, , t] = c.Z.os.release.split('.');
    F = parseInt(i) > 10 || parseInt(t) >= 15063;
}
let P = new u.Z('NotificationUtils'),
    E = (k && F) || ('Chrome' === r().name && 47 > parseFloat(r().version)) || ('Firefox' === r().name && 52 > parseFloat(r().version));
async function S() {
    if (void 0 === o) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                o = await b.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (i) {
                P.warn('Fetching native notification settings failed with error: ', i), (o = null);
            }
        else o = null;
    }
    return o;
}
async function R() {
    let i = await S();
    return (null == i ? void 0 : i.authorizationStatus) === 'authorized' && (null == i ? void 0 : i.sound) === !0;
}
function D(i, t) {
    var n;
    return null !== (n = (0, p.Z)(null != t ? t : I.Z.getSoundpack())[i]) && void 0 !== n ? n : i;
}
async function M(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await R())
        try {
            await b.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: D(i, n) });
            return;
        } catch (i) {
            P.warn('Native notification sound failed with error: ', i);
        }
    (0, h.GN)(i, t, void 0, n);
}
let L = a().throttle(M, 1000, { leading: !0 });
function z() {
    b.ZP.flashFrame(!1);
}
k && (window.addEventListener('focus', z), b.ZP.on('MAIN_WINDOW_FOCUS', z));
let U = window.Notification;
if (y) {
    let i = {};
    b.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let o = i[n];
        null != o && (o.onclick(), o.close());
    }),
        b.ZP.send('NOTIFICATIONS_CLEAR'),
        (e = class {
            static requestPermission(i) {
                i();
            }
            close() {
                null != i[this.id] && (delete i[this.id], b.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: o }) {
                C(this, 'id', U._id++),
                    C(this, 'title', void 0),
                    C(this, 'body', void 0),
                    C(this, 'icon', void 0),
                    C(this, 'onshow', function () {}),
                    C(this, 'onclick', function () {}),
                    C(this, 'onclose', function () {}),
                    t.includes('\0') ? (P.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (P.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = o),
                    setImmediate(() => this.onshow()),
                    (i[this.id] = this),
                    b.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        C(e, 'permission', 'granted'),
        C(e, '_id', 0),
        (U = e);
}
let x = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        b.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (i, t, n) => {
            if ('dismiss' === t) delete x[n];
            else {
                var o, e, l;
                let i = x[n];
                (null == i ? void 0 : null === (o = i.options) || void 0 === o ? void 0 : o.omitClickTracking) || _.default.track(A.rMx.NOTIFICATION_CLICKED, null == i ? void 0 : i.trackingProps), null == i || null === (l = i.options) || void 0 === l || null === (e = l.onClick) || void 0 === e || e.call(l);
            }
        }),
            b.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (i) {
        P.warn('Native notification setup failed with error: ', i);
    }
async function G() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications')) {
        var i;
        return (null === (i = await S()) || void 0 === i ? void 0 : i.authorizationStatus) === 'authorized';
    }
    return null != U && 'granted' === U.permission;
}
function V(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.includes('message') ? L(i, t, n) : M(i, t, n);
}
async function W(i) {
    return (w.Z.disableNotifications && null == i.overrideStreamerMode) || !(await G()) || (T.isPlatformEmbedded && !b.ZP.shouldDisplayNotifications());
}
let q = {
    hasPermission: G,
    requestPermission: function (i) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                b.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((t) => {
                        i(t);
                    })
                    .catch(() => {
                        i(!1);
                    })
                    .finally(() => {
                        o = void 0;
                    });
                return;
            } catch (i) {
                P.warn('Native notification authorization failed with error: ', i);
            }
        null != U &&
            U.requestPermission(async () => {
                null != i && i(await G());
            });
    },
    showNotification: async function (i, t, n, o, e) {
        var l, a, s, r;
        let c;
        if (await W(e)) {
            null != e.sound && !1 !== e.playSoundIfDisabled && V(e.sound, null !== (l = e.volume) && void 0 !== l ? l : 1, e.soundpack);
            return;
        }
        t.includes('\0') && (P.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (P.warn('Notification body contains null character, setting to empty string'), (n = ''));
        let u = null !== (a = null == e ? void 0 : e.tag) && void 0 !== a ? a : null,
            h = await S(),
            I = (null == h ? void 0 : h.authorizationStatus) === 'authorized',
            p = I && (null == h ? void 0 : h.sound) === !0,
            w = (i) => {
                var t;
                null === (t = e.onShown) || void 0 === t || t.call(e), e.omitViewTracking || _.default.track(A.rMx.NOTIFICATION_VIEWED, o), E && setTimeout(() => i.close(), 5000);
            };
        if (
            (null == e.sound || p || V(e.sound, null !== (s = e.volume) && void 0 !== s ? s : 1, e.soundpack),
            f.Z.getCurrentConfig({ location: 'showNotification' }).enabled &&
                e.isUserAvatar &&
                null != i &&
                (i = await (function (i) {
                    let t = new Image();
                    return (
                        (t.src = i),
                        (t.crossOrigin = 'anonymous'),
                        new Promise((n, o) => {
                            (t.onload = () => {
                                '' !== t.src &&
                                    n(
                                        (function (i) {
                                            let t = document.createElement('canvas'),
                                                n = t.getContext('2d'),
                                                o = Math.min(i.width, i.height);
                                            (t.width = o), (t.height = o), null != n && (n.beginPath(), n.arc(o / 2, o / 2, o / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(i, (i.width - o) / 2, (i.height - o) / 2, o, o, 0, 0, o, o));
                                            let e = t.toDataURL();
                                            return t.remove(), e;
                                        })(t)
                                    );
                            }),
                                (t.onerror = (t) => {
                                    Z.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), o(i);
                                });
                        })
                    );
                })(i)),
            I)
        ) {
            let l = {
                title: t,
                body: n
            };
            null != i && (l.icon = i), (null == e ? void 0 : e.sound) != null && (l.sound = D(e.sound, e.soundpack)), (null == e ? void 0 : e.tag) != null && (l.identifier = e.tag);
            let a = 'string' == typeof (null == o ? void 0 : o.guild_id) ? o.guild_id : null,
                s = 'string' == typeof (null == o ? void 0 : o.channel_id) ? o.channel_id : null,
                r = 'string' == typeof (null == o ? void 0 : o.notif_user_id) ? o.notif_user_id : null;
            if (null != s) {
                l.threadIdentifier = s;
                let i = v.Z.getChannel(s);
                null != i && (l.groupName = (0, d.F6)(i, m.default, g.Z));
            }
            null != r && ((l.senderIdentifier = r), null != a && (l.senderDisplayName = O.ZP.getName(a, s, m.default.getUser(r))));
            try {
                let i = await b.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', l);
                x[i] = {
                    options: e,
                    trackingProps: o
                };
                let t = {
                    close() {
                        try {
                            b.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [i]);
                        } catch (i) {
                            P.warn('Native notification removal failed with error: ', i);
                        }
                    }
                };
                return w(t), t;
            } catch (i) {
                P.warn('Native notification failed with error: ', i);
            }
        }
        null != e.sound && I && V(e.sound, null !== (r = e.volume) && void 0 !== r ? r : 1, e.soundpack);
        let C = {
            icon: i,
            body: n,
            tag: u,
            silent: !0
        };
        k && N.Z.taskbarFlash && b.ZP.flashFrame(!0);
        try {
            c = new U(t, C);
        } catch (i) {
            return null;
        }
        return (w(c),
        (c.onclick = () => {
            var i;
            T.isPlatformEmbedded ? b.ZP.focus() : (window.focus(), c.close()), e.omitClickTracking || _.default.track(A.rMx.NOTIFICATION_CLICKED, o), null === (i = e.onClick) || void 0 === i || i.call(e);
        }),
        F)
            ? c
            : {
                  close() {
                      var i;
                      null == c || null === (i = c.onclose) || void 0 === i || i.call(c);
                  }
              };
    },
    disabled: W,
    playNotificationSound: M
};
