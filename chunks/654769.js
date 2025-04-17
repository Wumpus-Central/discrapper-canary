let e;
n.d(t, { Z: () => J }), n(388685), n(35282), n(358797), n(457542), n(539854), n(997841);
var o,
    a = n(392711),
    l = n.n(a),
    s = n(525654),
    c = n.n(s),
    r = n(579806),
    u = n(933557),
    d = n(710845),
    f = n(811627),
    h = n(330619),
    I = n(460181),
    N = n(474873),
    m = n(135906),
    g = n(378233),
    p = n(592125),
    v = n(292959),
    b = n(699516),
    w = n(246946),
    T = n(594174),
    C = n(626135),
    O = n(630388),
    Z = n(5192),
    _ = n(358085),
    k = n(960048),
    A = n(998502),
    E = n(981631);
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
let F = _.isPlatformEmbedded && (0, _.isWindows)(),
    P = F && 10 > parseFloat(r.Z.os.release),
    S = !0;
if (F && !P) {
    let [i, , t] = r.Z.os.release.split('.');
    S = parseInt(i) > 10 || parseInt(t) >= 15063;
}
let R = new d.Z('NotificationUtils'),
    D = (F && S) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version));
async function L() {
    if (void 0 === e)
        if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications'))
            try {
                e = await A.ZP.invoke('NOTIFICATIONS_GET_SETTINGS');
            } catch (i) {
                R.warn('Fetching native notification settings failed with error: ', i), (e = null);
            }
        else e = null;
    return e;
}
async function M() {
    let i = await L();
    return (null == i ? void 0 : i.authorizationStatus) === 'authorized' && (null == i ? void 0 : i.sound) === !0;
}
function x(i, t) {
    var n;
    return null != (n = (0, m.Z)(null != t ? t : N.Z.getSoundpack())[i]) ? n : i;
}
async function W(i) {
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
let z = l().throttle(W, 1000, { leading: !0 });
function U() {
    A.ZP.flashFrame(!1);
}
F && (window.addEventListener('focus', U), A.ZP.on('MAIN_WINDOW_FOCUS', U));
let G = window.Notification;
if (P) {
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
                y(this, 'id', G._id++),
                    y(this, 'title', void 0),
                    y(this, 'body', void 0),
                    y(this, 'icon', void 0),
                    y(this, 'onshow', function () {}),
                    y(this, 'onclick', function () {}),
                    y(this, 'onclose', function () {}),
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
        y(o, 'permission', 'granted'),
        y(o, '_id', 0),
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
                _.isPlatformEmbedded ? A.ZP.focus() : window.focus(), (null == i || null == (e = i.options) ? void 0 : e.omitClickTracking) || C.default.track(E.rMx.NOTIFICATION_CLICKED, null == i ? void 0 : i.trackingProps), null == i || null == (a = i.options) || null == (o = a.onClick) || o.call(a);
            }
        }),
            A.ZP.invoke('NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS');
    } catch (i) {
        R.warn('Native notification setup failed with error: ', i);
    }
async function q() {
    if (null === r.Z || void 0 === r.Z ? void 0 : r.Z.features.supports('notifications')) {
        var i;
        return (null == (i = await L()) ? void 0 : i.authorizationStatus) === 'authorized';
    }
    return null != G && 'granted' === G.permission;
}
function B(i) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.includes('message') ? z(i, t, n) : W(i, t, n);
}
function K() {
    return (null == e ? void 0 : e.authorizationStatus) === 'authorized' && (!F || (0, h.R)({ location: 'shouldUseNative' }).enabled);
}
async function H(i) {
    return (w.Z.disableNotifications && null == i.overrideStreamerMode) || !(await q()) || (_.isPlatformEmbedded && !((0, _.isMac)() && K()) && !A.ZP.shouldDisplayNotifications());
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
        var a, l, s, c, r, d, h;
        let I;
        if (await H(o)) {
            null != o.sound && !1 !== o.playSoundIfDisabled && B(o.sound, null != (a = o.volume) ? a : 1, o.soundpack);
            return;
        }
        t.includes('\0') && (R.warn('Notification title contains null character, setting to empty string'), (t = '')), n.includes('\0') && (R.warn('Notification body contains null character, setting to empty string'), (n = ''));
        let N = null != (l = null == o ? void 0 : o.tag) ? l : null,
            m = await L(),
            w = K(),
            y = w && (null == m ? void 0 : m.sound) === !0,
            P = (i) => {
                var t;
                null == (t = o.onShown) || t.call(o), o.omitViewTracking || C.default.track(E.rMx.NOTIFICATION_VIEWED, e), D && setTimeout(() => i.close(), 5000);
            };
        if (
            (null == o.sound || y || B(o.sound, null != (s = o.volume) ? s : 1, o.soundpack),
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
            w)
        ) {
            let a = {
                title: t,
                body: n
            };
            null != i && (a.icon = i), (null == o ? void 0 : o.sound) != null && (a.sound = x(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
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
                null != n && (a.groupName = (0, u.F6)(n, T.default, b.Z));
                let e = null == n ? void 0 : n.getGuildId();
                if (((a.senderIdentifier = t.id), (a.senderDisplayName = Z.ZP.getName(e, i, t)), (a.senderAvatar = t.getAvatarURL(e, 128, !1, !1)), (a.attachments = []), l.includeStickers))
                    for (let i of (0, g.cv)(o.messageRecord)) {
                        let t = (0, g.Q6)(i, { isPreview: !0 });
                        null != t &&
                            a.attachments.push({
                                url: t,
                                type: 'image/png'
                            });
                    }
                if (l.includeImages)
                    for (let i of o.messageRecord.attachments)
                        !(0, O.yE)(null != (r = i.flags) ? r : 0, E.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                            !(0, O.yE)(null != (d = i.flags) ? d : 0, E.J0y.IS_SPOILER) &&
                            (null == (c = i.content_type) ? void 0 : c.startsWith('image/')) &&
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
                return P(t), t;
            } catch (i) {
                R.warn('Native notification failed with error: ', i);
            }
        }
        null != o.sound && w && B(o.sound, null != (h = o.volume) ? h : 1, o.soundpack);
        let M = {
            icon: i,
            body: n,
            tag: N,
            silent: !0
        };
        F && v.Z.taskbarFlash && A.ZP.flashFrame(!0);
        try {
            I = new G(t, M);
        } catch (i) {
            return null;
        }
        return (P(I),
        (I.onclick = () => {
            var i;
            _.isPlatformEmbedded ? A.ZP.focus() : (window.focus(), I.close()), o.omitClickTracking || C.default.track(E.rMx.NOTIFICATION_CLICKED, e), null == (i = o.onClick) || i.call(o);
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
    disabled: H,
    playNotificationSound: W
};
