let e;
n.d(t, { Z: () => H }), n(47120), n(301563), n(177593), n(773603), n(653041), n(789020);
var o,
    a = n(392711),
    l = n.n(a),
    s = n(525654),
    c = n.n(s),
    r = n(579806),
    u = n(933557),
    d = n(710845),
    f = n(811627),
    h = n(460181),
    I = n(474873),
    N = n(135906),
    m = n(378233),
    p = n(592125),
    g = n(292959),
    v = n(699516),
    w = n(246946),
    O = n(594174),
    T = n(626135),
    b = n(630388),
    Z = n(5192),
    A = n(358085),
    C = n(960048),
    _ = n(998502),
    k = n(981631);
function y(i, t, n) {
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
let E = A.isPlatformEmbedded && (0, A.isWindows)(),
    F = E && 10 > parseFloat(r.Z.os.release),
    S = !0;
if (E && !F) {
    let [i, , t] = r.Z.os.release.split('.');
    S = parseInt(i) > 10 || parseInt(t) >= 15063;
}
let P = new d.Z('NotificationUtils'),
    R = (E && S) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version));
async function D() {
    if (void 0 === e)
        if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
            try {
                e = await _.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (i) {
                P.warn('Fetching native notification settings failed with error: ', i), (e = null);
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
    return null != (n = (0, N.Z)(null != t ? t : I.Z.getSoundpack())[i]) ? n : i;
}
async function x(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await L())
        try {
            await _.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', { sound: M(i, n) });
            return;
        } catch (i) {
            P.warn('Native notification sound failed with error: ', i);
        }
    (0, h.GN)(i, t, void 0, n);
}
let z = l().throttle(x, 1000, { leading: !0 });
function W() {
    _.ZP.flashFrame(!1);
}
E && (window.addEventListener('focus', W), _.ZP.on('MAIN_WINDOW_FOCUS', W));
let U = window.Notification;
if (F) {
    let i = {};
    _.ZP.on('NOTIFICATION_CLICK', (t, n) => {
        let e = i[n];
        null != e && (e.onclick(), e.close());
    }),
        _.ZP.send('NOTIFICATIONS_CLEAR'),
        (o = class {
            static requestPermission(i) {
                i();
            }
            close() {
                null != i[this.id] && (delete i[this.id], _.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
            }
            constructor(t, { body: n, icon: e }) {
                y(this, 'id', U._id++),
                    y(this, 'title', void 0),
                    y(this, 'body', void 0),
                    y(this, 'icon', void 0),
                    y(this, 'onshow', function () {}),
                    y(this, 'onclick', function () {}),
                    y(this, 'onclose', function () {}),
                    t.includes('\0') ? (P.warn('Notification title contains null character, setting to empty string'), (this.title = '')) : (this.title = t),
                    n.includes('\0') ? (P.warn('Notification body contains null character, setting to empty string'), (this.body = '')) : (this.body = n),
                    (this.icon = e),
                    setImmediate(() => this.onshow()),
                    (i[this.id] = this),
                    _.ZP.send('NOTIFICATION_SHOW', {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon
                    });
            }
        }),
        y(o, 'permission', 'granted'),
        y(o, '_id', 0),
        (U = o);
}
let G = {};
if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
    try {
        _.ZP.on('NOTIFICATIONS_RECEIVED_RESPONSE', (i, t, n) => {
            if ('dismiss' === t) delete G[n];
            else {
                var e, o, a;
                let i = G[n];
                (null == i || null == (e = i.options) ? void 0 : e.omitClickTracking) || T.default.track(k.rMx.NOTIFICATION_CLICKED, null == i ? void 0 : i.trackingProps), null == i || null == (a = i.options) || null == (o = a.onClick) || o.call(a);
            }
        }),
            _.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (i) {
        P.warn('Native notification setup failed with error: ', i);
    }
async function V() {
    if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications')) {
        var i;
        return (null == (i = await D()) ? void 0 : i.authorizationStatus) === 'authorized';
    }
    return null != U && 'granted' === U.permission;
}
function q(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.includes('message') ? z(i, t, n) : x(i, t, n);
}
function K() {
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized';
}
async function B(i) {
    return (w.Z.disableNotifications && null == i.overrideStreamerMode) || !(await V()) || (A.isPlatformEmbedded && !((0, A.isMac)() && K()) && !_.ZP.shouldDisplayNotifications());
}
let H = {
    hasPermission: V,
    requestPermission: function (i) {
        if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
            try {
                _.ZP.invoke('NOTIFICATIONS_GET_AUTHORIZATION')
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
                P.warn('Native notification authorization failed with error: ', i);
            }
        null != U &&
            U.requestPermission(async () => {
                null != i && i(await V());
            });
    },
    showNotification: async function (i, t, n, e, o) {
        var a, l, s, c, r, d, h;
        let I;
        if (await B(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && q(o.sound, null != (a = o.volume) ? a : 1, o.soundpack);
            return;
        }
        t.includes('\0') && (P.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (P.warn('Notification body contains null character, setting to empty string'), (n = ''));
        let N = null != (l = null == o ? void 0 : o.tag) ? l : null,
            w = await D(),
            y = K(),
            F = y && (null == w ? void 0 : w.sound) === !0,
            L = (i) => {
                var t;
                null == (t = o.onShown) || t.call(o), o.omitViewTracking || T.default.track(k.rMx.NOTIFICATION_VIEWED, e), R && setTimeout(() => i.close(), 5000);
            };
        if (
            (null == o.sound || F || q(o.sound, null != (s = o.volume) ? s : 1, o.soundpack),
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
                                    C.Z.captureMessage('Failed to load notification avatar to circle crop: '.concat(t)), e(i);
                                });
                        })
                    );
                })(i)),
            y)
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
                null != n && (a.groupName = (0, u.F6)(n, O.default, v.Z));
                let e = null == n ? void 0 : n.getGuildId();
                if (((a.senderIdentifier = t.id), (a.senderDisplayName = Z.ZP.getName(e, i, t)), (a.senderAvatar = t.getAvatarURL(e, 128, !1, !1)), (a.attachments = []), l.includeStickers))
                    for (let i of (0, m.cv)(o.messageRecord)) {
                        let t = (0, m.Q6)(i, { isPreview: !0 });
                        null != t &&
                            a.attachments.push({
                                url: t,
                                type: 'image/png'
                            });
                    }
                if (l.includeImages)
                    for (let i of o.messageRecord.attachments)
                        !(0, b.yE)(null != (r = i.flags) ? r : 0, k.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                            !(0, b.yE)(null != (d = i.flags) ? d : 0, k.J0y.IS_SPOILER) &&
                            (null == (c = i.content_type) ? void 0 : c.startsWith('image/')) &&
                            a.attachments.push({
                                url: i.proxy_url,
                                type: i.content_type
                            });
            }
            try {
                let i = await _.ZP.invoke('NOTIFICATIONS_SEND_NOTIFICATION', a);
                G[i] = {
                    options: o,
                    trackingProps: e
                };
                let t = {
                    close() {
                        try {
                            _.ZP.invoke('NOTIFICATIONS_REMOVE_NOTIFICATIONS', [i]);
                        } catch (i) {
                            P.warn('Native notification removal failed with error: ', i);
                        }
                    }
                };
                return L(t), t;
            } catch (i) {
                P.warn('Native notification failed with error: ', i);
            }
        }
        null != o.sound && y && q(o.sound, null != (h = o.volume) ? h : 1, o.soundpack);
        let x = {
            icon: i,
            body: n,
            tag: N,
            silent: !0
        };
        E && g.Z.taskbarFlash && _.ZP.flashFrame(!0);
        try {
            I = new U(t, x);
        } catch (i) {
            return null;
        }
        return (L(I),
        (I.onclick = () => {
            var i;
            A.isPlatformEmbedded ? _.ZP.focus() : (window.focus(), I.close()), o.omitClickTracking || T.default.track(k.rMx.NOTIFICATION_CLICKED, e), null == (i = o.onClick) || i.call(o);
        }),
        S)
            ? I
            : {
                  close() {
                      var i;
                      null == I || null == (i = I.onclose) || i.call(I);
                  }
              };
    },
    disabled: B,
    playNotificationSound: x
};
