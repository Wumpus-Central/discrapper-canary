let e;
n.d(t, { Z: () => J }), n(47120), n(301563), n(177593), n(773603), n(653041), n(789020);
var o,
    a = n(392711),
    l = n.n(a),
    s = n(525654),
    c = n.n(s),
    r = n(579806),
    d = n(933557),
    u = n(710845),
    f = n(812483),
    h = n(811627),
    I = n(460181),
    v = n(474873),
    p = n(135906),
    N = n(378233),
    m = n(592125),
    g = n(292959),
    w = n(699516),
    b = n(246946),
    O = n(594174),
    T = n(626135),
    C = n(630388),
    Z = n(5192),
    _ = n(358085),
    k = n(960048),
    A = n(998502),
    y = n(981631);
function S(i, t, n) {
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
let E = _.isPlatformEmbedded && (0, _.isWindows)(),
    F = E && 10 > parseFloat(r.Z.os.release),
    P = !0;
if (E && !F) {
    let [i, , t] = r.Z.os.release.split('.');
    P = parseInt(i) > 10 || parseInt(t) >= 15063;
}
let R = new u.Z('NotificationUtils'),
    D = (E && P) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version));
async function L() {
    if (void 0 === e) {
        if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
            try {
                e = await A.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (i) {
                R.warn('Fetching native notification settings failed with error: ', i), (e = null);
            }
        else e = null;
    }
    return e;
}
async function M() {
    let i = await L();
    return (null == i ? void 0 : i.authorizationStatus) === 'authorized' && (null == i ? void 0 : i.sound) === !0;
}
function x(i, t) {
    var n;
    return null !== (n = (0, p.Z)(null != t ? t : v.Z.getSoundpack())[i]) && void 0 !== n ? n : i;
}
async function z(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await M())
        try {
            await A.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: x(i, n) });
            return;
        } catch (i) {
            R.warn('Native notification sound failed with error: ', i);
        }
    (0, I.GN)(i, t, void 0, n);
}
let W = l().throttle(z, 1000, { leading: !0 });
function U() {
    A.ZP.flashFrame(!1);
}
E && (window.addEventListener('focus', U), A.ZP.on('MAIN_WINDOW_FOCUS', U));
let G = window.Notification;
if (F) {
    let i = {};
    A.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let e = i[n];
        null != e && (e.onclick(), e.close());
    }),
        A.ZP.send('NOTIFICATIONS_CLEAR'),
        (o = class {
            static requestPermission(i) {
                i();
            }
            close() {
                null != i[this.id] && (delete i[this.id], A.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: e }) {
                S(this, 'id', G._id++),
                    S(this, 'title', void 0),
                    S(this, 'body', void 0),
                    S(this, 'icon', void 0),
                    S(this, 'onshow', function () {}),
                    S(this, 'onclick', function () {}),
                    S(this, 'onclose', function () {}),
                    t.includes('\0') ? (R.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (R.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = e),
                    setImmediate(() => this.onshow()),
                    (i[this.id] = this),
                    A.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        S(o, 'permission', 'granted'),
        S(o, '_id', 0),
        (G = o);
}
let V = {};
if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
    try {
        A.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (i, t, n) => {
            if ('dismiss' === t) delete V[n];
            else {
                var e, o, a;
                let i = V[n];
                (null == i ? void 0 : null === (e = i.options) || void 0 === e ? void 0 : e.omitClickTracking) || T.default.track(y.rMx.NOTIFICATION_CLICKED, null == i ? void 0 : i.trackingProps), null == i || null === (a = i.options) || void 0 === a || null === (o = a.onClick) || void 0 === o || o.call(a);
            }
        }),
            A.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (i) {
        R.warn('Native notification setup failed with error: ', i);
    }
async function q() {
    if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications')) {
        var i;
        return (null === (i = await L()) || void 0 === i ? void 0 : i.authorizationStatus) === 'authorized';
    }
    return null != G && 'granted' === G.permission;
}
function B(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.includes('message') ? W(i, t, n) : z(i, t, n);
}
function K() {
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized';
}
async function H(i) {
    return (b.Z.disableNotifications && null == i.overrideStreamerMode) || !(await q()) || (_.isPlatformEmbedded && !((0, _.isMac)() && K()) && !A.ZP.shouldDisplayNotifications());
}
let J = {
    hasPermission: q,
    requestPermission: function (i) {
        if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
            try {
                A.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
                    .then((t) => {
                        i(t);
                    })
                    .catch(() => {
                        i(!1);
                    })
                    .finally(() => {
                        e = void 0;
                    });
                return;
            } catch (i) {
                R.warn('Native notification authorization failed with error: ', i);
            }
        null != G &&
            G.requestPermission(async () => {
                null != i && i(await q());
            });
    },
    showNotification: async function (i, t, n, e, o) {
        var a, l, s, c, r, u, I;
        let v;
        if (await H(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && B(o.sound, null !== (a = o.volume) && void 0 !== a ? a : 1, o.soundpack);
            return;
        }
        t.includes('\0') && (R.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (R.warn('Notification body contains null character, setting to empty string'), (n = ''));
        let p = null !== (l = null == o ? void 0 : o.tag) && void 0 !== l ? l : null,
            b = await L(),
            S = K(),
            F = S && (null == b ? void 0 : b.sound) === !0,
            M = (i) => {
                var t;
                null === (t = o.onShown) || void 0 === t || t.call(o), o.omitViewTracking || T.default.track(y.rMx.NOTIFICATION_VIEWED, e), D && setTimeout(() => i.close(), 5000);
            };
        if (
            (null == o.sound || F || B(o.sound, null !== (s = o.volume) && void 0 !== s ? s : 1, o.soundpack),
            f.Z.getCurrentConfig({ location: 'showNotification' }).enabled &&
                o.isUserAvatar &&
                null != i &&
                (i = await (function (i) {
                    let t = new Image();
                    return (
                        (t.src = i),
                        (t.crossOrigin = 'anonymous'),
                        new Promise((n, e) => {
                            (t.onload = () => {
                                '' !== t.src &&
                                    n(
                                        (function (i) {
                                            let t = document.createElement('canvas'),
                                                n = t.getContext('2d'),
                                                e = Math.min(i.width, i.height);
                                            (t.width = e), (t.height = e), null != n && (n.beginPath(), n.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(i, (i.width - e) / 2, (i.height - e) / 2, e, e, 0, 0, e, e));
                                            let o = t.toDataURL();
                                            return t.remove(), o;
                                        })(t)
                                    );
                            }),
                                (t.onerror = (t) => {
                                    k.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), e(i);
                                });
                        })
                    );
                })(i)),
            S)
        ) {
            let a = {
                title: t,
                body: n
            };
            null != i && (a.icon = i), (null == o ? void 0 : o.sound) != null && (a.sound = x(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
            let l = h.Z.getCurrentConfig(
                { location: 'showNotification' },
                {
                    autoTrackExposure: !0,
                    disable: null == o.messageRecord
                }
            );
            if (null != o.messageRecord && l.enabled) {
                let i = o.messageRecord.channel_id,
                    t = o.messageRecord.author;
                a.threadIdentifier = i;
                let n = m.Z.getChannel(i);
                null != n && (a.groupName = (0, d.F6)(n, O.default, w.Z));
                let e = null == n ? void 0 : n.getGuildId();
                if (((a.senderIdentifier = t.id), (a.senderDisplayName = Z.ZP.getName(e, i, t)), (a.senderAvatar = t.getAvatarURL(e, 128, !1, !1)), (a.attachments = []), l.includeStickers))
                    for (let i of (0, N.cv)(o.messageRecord)) {
                        let t = (0, N.Q6)(i, { isPreview: !0 });
                        null != t &&
                            a.attachments.push({
                                url: t,
                                type: 'image/png'
                            });
                    }
                if (l.includeImages)
                    for (let i of o.messageRecord.attachments)
                        !(0, C.yE)(null !== (r = i.flags) && void 0 !== r ? r : 0, y.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                            !(0, C.yE)(null !== (u = i.flags) && void 0 !== u ? u : 0, y.J0y.IS_SPOILER) &&
                            (null === (c = i.content_type) || void 0 === c ? void 0 : c.startsWith('image/')) &&
                            a.attachments.push({
                                url: i.proxy_url,
                                type: i.content_type
                            });
            }
            try {
                let i = await A.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
                V[i] = {
                    options: o,
                    trackingProps: e
                };
                let t = {
                    close() {
                        try {
                            A.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [i]);
                        } catch (i) {
                            R.warn('Native notification removal failed with error: ', i);
                        }
                    }
                };
                return M(t), t;
            } catch (i) {
                R.warn('Native notification failed with error: ', i);
            }
        }
        null != o.sound && S && B(o.sound, null !== (I = o.volume) && void 0 !== I ? I : 1, o.soundpack);
        let z = {
            icon: i,
            body: n,
            tag: p,
            silent: !0
        };
        E && g.Z.taskbarFlash && A.ZP.flashFrame(!0);
        try {
            v = new G(t, z);
        } catch (i) {
            return null;
        }
        return (M(v),
        (v.onclick = () => {
            var i;
            _.isPlatformEmbedded ? A.ZP.focus() : (window.focus(), v.close()), o.omitClickTracking || T.default.track(y.rMx.NOTIFICATION_CLICKED, e), null === (i = o.onClick) || void 0 === i || i.call(o);
        }),
        P)
            ? v
            : {
                  close() {
                      var i;
                      null == v || null === (i = v.onclose) || void 0 === i || i.call(v);
                  }
              };
    },
    disabled: H,
    playNotificationSound: z
};
