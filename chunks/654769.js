let i;
n.d(t, { Z: () => Q }), n(388685), n(35282), n(358797), n(457542), n(539854), n(997841);
var r,
    l = n(392711),
    o = n.n(l),
    a = n(525654),
    s = n.n(a),
    c = n(579806),
    u = n(933557),
    d = n(710845),
    f = n(811627),
    p = n(330619),
    g = n(460181),
    m = n(474873),
    h = n(135906),
    O = n(378233),
    v = n(592125),
    b = n(292959),
    y = n(699516),
    I = n(246946),
    P = n(594174),
    j = n(626135),
    w = n(630388),
    S = n(5192),
    Z = n(358085),
    E = n(960048),
    N = n(998502),
    x = n(981631);
function C(e, t, n) {
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
let k = Z.isPlatformEmbedded && (0, Z.isWindows)(),
    T = k && 10 > parseFloat(c.Z.os.release),
    _ = !0;
if (k && !T) {
    let [e, , t] = c.Z.os.release.split('.');
    _ = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let A = new d.Z('NotificationUtils'),
    V = (k && _) || ('Chrome' === s().name && 47 > parseFloat(s().version)) || ('Firefox' === s().name && 52 > parseFloat(s().version));
async function D() {
    if (void 0 === i)
        if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
            try {
                i = await N.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (e) {
                A.warn('Fetching native notification settings failed with error: ', e), (i = null);
            }
        else i = null;
    return i;
}
async function M() {
    let e = await D();
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (null == e ? void 0 : e.sound) === !0;
}
function F(e, t) {
    var n;
    return null != (n = (0, h.Z)(null != t ? t : m.Z.getSoundpack())[e]) ? n : e;
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await M())
        try {
            await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: F(e, n) });
            return;
        } catch (e) {
            A.warn('Native notification sound failed with error: ', e);
        }
    (0, g.GN)(e, t, void 0, n);
}
let L = o().throttle(R, 1000, { leading: !0 });
function W() {
    N.ZP.flashFrame(!1);
}
k && (window.addEventListener('focus', W), N.ZP.on('MAIN_WINDOW_FOCUS', W));
let G = window.Notification;
if (T) {
    let e = {};
    N.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        N.ZP.send('NOTIFICATIONS_CLEAR'),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], N.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: i }) {
                C(this, 'id', G._id++),
                    C(this, 'title', void 0),
                    C(this, 'body', void 0),
                    C(this, 'icon', void 0),
                    C(this, 'onshow', function () {}),
                    C(this, 'onclick', function () {}),
                    C(this, 'onclose', function () {}),
                    t.includes('\0') ? (A.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (A.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = i),
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
        C(r, 'permission', 'granted'),
        C(r, '_id', 0),
        (G = r);
}
let U = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications'))
    try {
        N.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (e, t, n) => {
            if ('dismiss' === t) delete U[n];
            else {
                var i, r, l;
                let e = U[n];
                Z.isPlatformEmbedded ? N.ZP.focus() : window.focus(), (null == e || null == (i = e.options) ? void 0 : i.omitClickTracking) || j.default.track(x.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null == (l = e.options) || null == (r = l.onClick) || r.call(l);
            }
        }),
            N.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (e) {
        A.warn('Native notification setup failed with error: ', e);
    }
async function z() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports('notifications')) {
        var e;
        return (null == (e = await D()) ? void 0 : e.authorizationStatus) === 'authorized';
    }
    return null != G && 'granted' === G.permission;
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? L(e, t, n) : R(e, t, n);
}
function K() {
    return (null == i ? void 0 : i.authorizationStatus) === 'authorized' && (!k || (0, p.R)({ location: 'shouldUseNative' }).enabled);
}
async function B(e) {
    return (I.Z.disableNotifications && null == e.overrideStreamerMode) || !(await z()) || (Z.isPlatformEmbedded && !((0, Z.isMac)() && K()) && !N.ZP.shouldDisplayNotifications());
}
let Q = {
    hasPermission: z,
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
                        i = void 0;
                    });
                return;
            } catch (e) {
                A.warn('Native notification authorization failed with error: ', e);
            }
        null != G &&
            G.requestPermission(async () => {
                null != e && e(await z());
            });
    },
    showNotification: async function (e, t, n, i, r) {
        var l, o, a, s, c, d, p;
        let g;
        if (await B(r)) {
            null != r.sound && !1 !== r.playSoundIfDisabled && Y(r.sound, null != (l = r.volume) ? l : 1, r.soundpack), null != r.onPlaySound && r.onPlaySound();
            return;
        }
        t.includes('\0') && (A.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (A.warn('Notification body contains null character, setting to empty string'), (n = ''));
        let m = null != (o = null == r ? void 0 : r.tag) ? o : null,
            h = await D(),
            I = K(),
            C = I && (null == h ? void 0 : h.sound) === !0,
            T = (e) => {
                var t;
                null == (t = r.onShown) || t.call(r), r.omitViewTracking || j.default.track(x.rMx.NOTIFICATION_VIEWED, i), V && setTimeout(() => e.close(), 5000);
            };
        if (
            (null == r.sound || C || Y(r.sound, null != (a = r.volume) ? a : 1, r.soundpack),
            r.isUserAvatar &&
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
                                            let r = t.toDataURL();
                                            return t.remove(), r;
                                        })(t)
                                    );
                            }),
                                (t.onerror = (t) => {
                                    E.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), i(e);
                                });
                        })
                    );
                })(e)),
            I)
        ) {
            let l = {
                title: t,
                body: n
            };
            null != e && (l.icon = e), (null == r ? void 0 : r.sound) != null && (l.sound = F(r.sound, r.soundpack)), (null == r ? void 0 : r.tag) != null && (l.identifier = r.tag);
            let o = f.Z.getCurrentConfig(
                { location: 'showNotification' },
                {
                    autoTrackExposure: !0,
                    disable: null == r.messageRecord
                }
            );
            if (null != r.messageRecord && o.enabled) {
                let e = r.messageRecord.channel_id,
                    t = r.messageRecord.author;
                l.threadIdentifier = e;
                let n = v.Z.getChannel(e);
                null != n && (l.groupName = (0, u.F6)(n, P.default, y.Z));
                let i = null == n ? void 0 : n.getGuildId();
                if (((l.senderIdentifier = t.id), (l.senderDisplayName = S.ZP.getName(i, e, t)), (l.senderAvatar = t.getAvatarURL(i, 128, !1, !1)), (l.attachments = []), o.includeStickers))
                    for (let e of (0, O.cv)(r.messageRecord)) {
                        let t = (0, O.Q6)(e, { isPreview: !0 });
                        null != t &&
                            l.attachments.push({
                                url: t,
                                type: 'image/png'
                            });
                    }
                if (o.includeImages)
                    for (let e of r.messageRecord.attachments)
                        !(0, w.yE)(null != (c = e.flags) ? c : 0, x.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                            !(0, w.yE)(null != (d = e.flags) ? d : 0, x.J0y.IS_SPOILER) &&
                            (null == (s = e.content_type) ? void 0 : s.startsWith('image/')) &&
                            l.attachments.push({
                                url: e.proxy_url,
                                type: e.content_type
                            });
            }
            try {
                let e = await N.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', l);
                U[e] = {
                    options: r,
                    trackingProps: i
                };
                let t = {
                    close() {
                        try {
                            N.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [e]);
                        } catch (e) {
                            A.warn('Native notification removal failed with error: ', e);
                        }
                    }
                };
                return T(t), t;
            } catch (e) {
                A.warn('Native notification failed with error: ', e);
            }
        }
        null != r.sound && I && Y(r.sound, null != (p = r.volume) ? p : 1, r.soundpack);
        let M = {
            icon: e,
            body: n,
            tag: m,
            silent: !0
        };
        k && b.Z.taskbarFlash && N.ZP.flashFrame(!0);
        try {
            g = new G(t, M);
        } catch (e) {
            return null;
        }
        return (T(g),
        (g.onclick = () => {
            var e;
            Z.isPlatformEmbedded ? N.ZP.focus() : (window.focus(), g.close()), r.omitClickTracking || j.default.track(x.rMx.NOTIFICATION_CLICKED, i), null == (e = r.onClick) || e.call(r);
        }),
        _)
            ? g
            : {
                  close() {
                      var e;
                      null == g || null == (e = g.onclose) || e.call(g);
                  }
              };
    },
    disabled: B,
    playNotificationSound: R
};
