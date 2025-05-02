let e;
n.d(t, { Z: () => J }), n(388685), n(35282), n(358797), n(457542), n(539854), n(997841);
var o,
    a = n(392711),
    l = n.n(a),
    s = n(525654),
    r = n.n(s),
    c = n(579806),
    u = n(933557),
    d = n(710845),
    f = n(811627),
    h = n(330619),
    I = n(460181),
    m = n(474873),
    g = n(135906),
    N = n(378233),
    p = n(592125),
    v = n(292959),
    w = n(699516),
    b = n(246946),
    T = n(594174),
    C = n(626135),
    y = n(630388),
    O = n(5192),
    Z = n(358085),
    _ = n(960048),
    A = n(998502),
    k = n(981631);
function E(i, t, n) {
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
let F = Z.isPlatformEmbedded && (0, Z.isWindows)(),
    S = F && 10 > parseFloat(c.Z.os.release),
    P = !0;
if (F && !S) {
    let [i, , t] = c.Z.os.release.split('.');
    P = parseInt(i) > 10 || parseInt(t) >= 15063;
}
let R = new d.Z('NotificationUtils'),
    U = (F && P) || ('Chrome' === r().name && 47 > parseFloat(r().version)) || ('Firefox' === r().name && 52 > parseFloat(r().version));
async function D() {
    if (void 0 === e)
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                e = await A.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (i) {
                R.warn('Fetching native notification settings failed with error: ', i), (e = null);
            }
        else e = null;
    return e;
}
async function L() {
    let i = await D();
    return (null == i ? void 0 : i.authorizationStatus) === 'authorized' && (null == i ? void 0 : i.sound) === !0;
}
function M(i, t) {
    var n;
    return null != (n = (0, g.Z)(null != t ? t : m.Z.getSoundpack())[i]) ? n : i;
}
async function x(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await L())
        try {
            await A.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: M(i, n) });
            return;
        } catch (i) {
            R.warn('Native notification sound failed with error: ', i);
        }
    (0, I.GN)(i, t, void 0, n);
}
let W = l().throttle(x, 1000, { leading: !0 });
function z() {
    A.ZP.flashFrame(!1);
}
F && (window.addEventListener('focus', z), A.ZP.on('MAIN_WINDOW_FOCUS', z));
let G = window.Notification;
if (S) {
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
                E(this, 'id', G._id++),
                    E(this, 'title', void 0),
                    E(this, 'body', void 0),
                    E(this, 'icon', void 0),
                    E(this, 'onshow', function () {}),
                    E(this, 'onclick', function () {}),
                    E(this, 'onclose', function () {}),
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
        E(o, 'permission', 'granted'),
        E(o, '_id', 0),
        (G = o);
}
let V = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        A.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (i, t, n) => {
            if ('dismiss' === t) delete V[n];
            else {
                var e, o, a;
                let i = V[n];
                Z.isPlatformEmbedded ? A.ZP.focus() : window.focus(), (null == i || null == (e = i.options) ? void 0 : e.omitClickTracking) || C.default.track(k.rMx.NOTIFICATION_CLICKED, null == i ? void 0 : i.trackingProps), null == i || null == (a = i.options) || null == (o = a.onClick) || o.call(a);
            }
        }),
            A.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (i) {
        R.warn('Native notification setup failed with error: ', i);
    }
async function B() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications')) {
        var i;
        return (null == (i = await D()) ? void 0 : i.authorizationStatus) === 'authorized';
    }
    return null != G && 'granted' === G.permission;
}
function H(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.includes('message') ? W(i, t, n) : x(i, t, n);
}
function q() {
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (!F || (0, h.R)({ location: 'shouldUseNative' }).enabled);
}
async function K(i) {
    return (b.Z.disableNotifications && null == i.overrideStreamerMode) || !(await B()) || (Z.isPlatformEmbedded && !((0, Z.isMac)() && q()) && !A.ZP.shouldDisplayNotifications());
}
let J = {
    hasPermission: B,
    requestPermission: function (i) {
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
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
                null != i && i(await B());
            });
    },
    showNotification: async function (i, t, n, e, o) {
        var a, l, s, r, c, d, h;
        let I;
        if (await K(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && H(o.sound, null != (a = o.volume) ? a : 1, o.soundpack);
            return;
        }
        t.includes('\0') && (R.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (R.warn('Notification body contains null character, setting to empty string'), (n = ''));
        let m = null != (l = null == o ? void 0 : o.tag) ? l : null,
            g = await D(),
            b = q(),
            E = b && (null == g ? void 0 : g.sound) === !0,
            S = (i) => {
                var t;
                null == (t = o.onShown) || t.call(o), o.omitViewTracking || C.default.track(k.rMx.NOTIFICATION_VIEWED, e), U && setTimeout(() => i.close(), 5000);
            };
        if (
            (null == o.sound || E || H(o.sound, null != (s = o.volume) ? s : 1, o.soundpack),
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
                                    _.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), e(i);
                                });
                        })
                    );
                })(i)),
            b)
        ) {
            let a = {
                title: t,
                body: n
            };
            null != i && (a.icon = i), (null == o ? void 0 : o.sound) != null && (a.sound = M(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
            let l = f.Z.getCurrentConfig(
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
                let n = p.Z.getChannel(i);
                null != n && (a.groupName = (0, u.F6)(n, T.default, w.Z));
                let e = null == n ? void 0 : n.getGuildId();
                if (((a.senderIdentifier = t.id), (a.senderDisplayName = O.ZP.getName(e, i, t)), (a.senderAvatar = t.getAvatarURL(e, 128, !1, !1)), (a.attachments = []), l.includeStickers))
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
                        !(0, y.yE)(null != (c = i.flags) ? c : 0, k.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                            !(0, y.yE)(null != (d = i.flags) ? d : 0, k.J0y.IS_SPOILER) &&
                            (null == (r = i.content_type) ? void 0 : r.startsWith('image/')) &&
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
                return S(t), t;
            } catch (i) {
                R.warn('Native notification failed with error: ', i);
            }
        }
        null != o.sound && b && H(o.sound, null != (h = o.volume) ? h : 1, o.soundpack);
        let L = {
            icon: i,
            body: n,
            tag: m,
            silent: !0
        };
        F && v.Z.taskbarFlash && A.ZP.flashFrame(!0);
        try {
            I = new G(t, L);
        } catch (i) {
            return null;
        }
        return (S(I),
        (I.onclick = () => {
            var i;
            Z.isPlatformEmbedded ? A.ZP.focus() : (window.focus(), I.close()), o.omitClickTracking || C.default.track(k.rMx.NOTIFICATION_CLICKED, e), null == (i = o.onClick) || i.call(o);
        }),
        P)
            ? I
            : {
                  close() {
                      var i;
                      null == I || null == (i = I.onclose) || i.call(I);
                  }
              };
    },
    disabled: K,
    playNotificationSound: x
};
