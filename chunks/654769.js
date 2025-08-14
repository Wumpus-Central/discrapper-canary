n.d(t, {
    W: () => B,
    Z: () => ee,
}),
    n(388685),
    n(35282),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(358797),
    n(539854),
    n(997841);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(525654),
    s = n.n(a),
    l = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(336197),
    f = n(811627),
    _ = n(863065),
    p = n(691294),
    h = n(460181),
    m = n(474873),
    g = n(135906),
    E = n(378233),
    b = n(592125),
    y = n(292959),
    O = n(699516),
    v = n(246946),
    I = n(594174),
    T = n(626135),
    S = n(630388),
    A = n(5192),
    N = n(358085),
    C = n(998502),
    R = n(981631);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = N.isPlatformEmbedded && (0, N.isWindows)(),
    M = x && 10 > parseFloat(l.Z.os.release),
    k = !0;
if (x && !M) {
    let [e, , t] = l.Z.os.release.split(".");
    k = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let j = new u.Z("NotificationUtils"),
    U =
        (x && k) ||
        ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
        ("Firefox" === s().name && 52 > parseFloat(s().version));
async function G() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications"))
        try {
            return await C.ZP.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            j.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function B(e) {
    return "discord://".concat(location.host).concat(e);
}
function Z(e) {
    try {
        let t = new URL(e, location.origin);
        if ("discord:" === t.protocol) return t.pathname;
    } catch (e) {}
    return null;
}
async function F() {
    let e = await G();
    return (null == e ? void 0 : e.authorizationStatus) === "authorized" && (null == e ? void 0 : e.sound) === !0;
}
function V(e, t) {
    var n;
    return null != (n = (0, g.Z)(null != t ? t : m.Z.getSoundpack())[e]) ? n : e;
}
async function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await F())
        try {
            await C.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: V(e, n) });
            return;
        } catch (e) {
            j.warn("Native notification sound failed with error: ", e);
        }
    (0, h.GN)(e, t, void 0, n);
}
let Y = o().throttle(H, 1000, { leading: !0 });
function W() {
    C.ZP.flashFrame(!1);
}
x && (window.addEventListener("focus", W), C.ZP.on("MAIN_WINDOW_FOCUS", W));
let K = window.Notification;
if (M) {
    let e = {};
    C.ZP.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        C.ZP.send("NOTIFICATIONS_CLEAR"),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], C.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
            constructor(t, { body: n, icon: r }) {
                P(this, "id", K._id++),
                    P(this, "title", void 0),
                    P(this, "body", void 0),
                    P(this, "icon", void 0),
                    P(this, "onshow", function () {}),
                    P(this, "onclick", function () {}),
                    P(this, "onclose", function () {}),
                    t.includes("\0")
                        ? (j.warn("Notification title contains null character, setting to empty string"),
                          (this.title = ""))
                        : (this.title = t),
                    n.includes("\0")
                        ? (j.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    C.ZP.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
        }),
        P(r, "permission", "granted"),
        P(r, "_id", 0),
        (K = r);
}
let z = {};
if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications")) {
    try {
        C.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete z[n];
            {
                let e = z[n];
                if ((N.isPlatformEmbedded ? C.ZP.focus() : window.focus(), null != e)) {
                    var o, a, s;
                    (null == (o = e.options) ? void 0 : o.omitClickTracking) ||
                        (T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: "CLICK" }, e.trackingProps)),
                        T.default.track(R.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        null == (s = e.options) || null == (a = s.onClick) || a.call(s, r);
                    return;
                }
                if (null != i) {
                    let e = Z(i);
                    null != e && (0, d.Z)(e);
                }
            }
        }),
            C.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        j.warn("Native notification setup failed with error: ", e);
    }
    (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications_provisional")) &&
        Q().then((e) => {
            e || C.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
function q(e) {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications"))
        try {
            C.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            j.warn("Native notification authorization failed with error: ", e);
        }
    null != K &&
        K.requestPermission(async () => {
            null != e && e(await X());
        });
}
async function X() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications")) {
        let e = await G();
        return (
            (null == e ? void 0 : e.authorizationStatus) === "authorized" ||
            (null == e ? void 0 : e.authorizationStatus) === "provisional"
        );
    }
    return null != K && "granted" === K.permission;
}
async function Q() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications")) {
        var e;
        return (null == (e = await G()) ? void 0 : e.authorizationStatus) !== "undetermined";
    }
    return null != K && "default" !== K.permission;
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? Y(e, t, n) : H(e, t, n);
}
async function $(e, t, n, r, i) {
    var o, a, s, l, u, d, h;
    let m,
        g = await G(),
        P =
            (null == g ? void 0 : g.authorizationStatus) === "authorized" ||
            (null == g ? void 0 : g.authorizationStatus) === "provisional",
        D = null != g ? P : await X(),
        M = P,
        B = v.Z.disableNotifications && null == i.overrideStreamerMode,
        Z = !N.isPlatformEmbedded || ((0, N.isMac)() && M) || C.ZP.shouldDisplayNotifications(),
        F = !B && D && Z,
        H = L(w({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0,
        }),
        Y = H,
        W = H;
    if (((r.banner = await (0, _.K)()), !F)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (J(i.sound, null != (o = i.volume) ? o : 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: "VIEW" }, r)));
        return;
    }
    t.includes("\0") && (j.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (j.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let q = null != (a = null == i ? void 0 : i.tag) ? a : null,
        Q = M && (null == g ? void 0 : g.sound) === !0 && (null == g ? void 0 : g.authorizationStatus) === "authorized",
        $ = (e, t) => {
            var n;
            null == (n = i.onShown) || n.call(i),
                i.omitViewTracking ||
                    (T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: "VIEW" }, t)),
                    T.default.track(R.rMx.NOTIFICATION_VIEWED, W)),
                U && setTimeout(() => e.close(), 5000);
        };
    if (
        (null == i.sound || Q || (J(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, p.D)(e)),
        x && y.Z.taskbarFlash && C.ZP.flashFrame(!0),
        M)
    ) {
        let o = {
            title: t,
            body: n,
        };
        null != e && (o.icon = e),
            (null == i ? void 0 : i.sound) != null && (o.sound = V(i.sound, i.soundpack)),
            (null == i ? void 0 : i.tag) != null && (o.identifier = i.tag),
            (null == i ? void 0 : i.fallbackDeepLink) != null && (o.fallbackDeepLink = i.fallbackDeepLink),
            Array.isArray(i.actions) && (o.actions = i.actions);
        let a = f.Z.getCurrentConfig(
            { location: "showNotification" },
            {
                autoTrackExposure: !0,
                disable: null == i.messageRecord,
            },
        );
        if (null != i.messageRecord && a.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            o.threadIdentifier = e;
            let n = b.Z.getChannel(e);
            null != n && (o.groupName = (0, c.F6)(n, I.default, O.Z));
            let r = null == n ? void 0 : n.getGuildId();
            if (
                ((o.senderIdentifier = t.id),
                (o.senderDisplayName = A.ZP.getName(r, e, t)),
                (o.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                (o.attachments = []),
                a.includeStickers)
            )
                for (let e of (0, E.cv)(i.messageRecord)) {
                    let t = (0, E.Q6)(e, { isPreview: !0 });
                    null != t &&
                        o.attachments.push({
                            url: t,
                            type: "image/png",
                        });
                }
            if (a.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, S.yE)(null != (u = e.flags) ? u : 0, R.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, S.yE)(null != (d = e.flags) ? d : 0, R.J0y.IS_SPOILER) &&
                        (null == (l = e.content_type) ? void 0 : l.startsWith("image/")) &&
                        o.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type,
                        });
        }
        try {
            let e = await C.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", o);
            z[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: Y,
            };
            let t = {
                close() {
                    try {
                        C.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        j.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return (
                $(t, r),
                {
                    notification: t,
                    trackingProps: r,
                }
            );
        } catch (e) {
            j.warn("Native notification failed with error: ", e);
        }
    }
    null != i.sound && M && (J(i.sound, null != (h = i.volume) ? h : 1, i.soundpack), (r.ping = !0));
    let ee = {
        icon: e,
        body: n,
        tag: q,
        silent: !0,
    };
    try {
        m = new K(t, ee);
    } catch (e) {
        return;
    }
    return ($(m, r),
    (m.onclick = (e) => {
        var t;
        N.isPlatformEmbedded ? C.ZP.focus() : (window.focus(), m.close()),
            i.omitClickTracking ||
                (T.default.track(R.rMx.NOTIFICATION_ACTION, w({ action: "CLICK" }, r)),
                T.default.track(R.rMx.NOTIFICATION_CLICKED, Y));
        let n = "";
        null == (t = i.onClick) || t.call(i, n);
    }),
    k)
        ? {
              notification: m,
              trackingProps: r,
          }
        : {
              notification: {
                  close() {
                      var e;
                      null == m || null == (e = m.onclose) || e.call(m);
                  },
              },
              trackingProps: r,
          };
}
let ee = {
    hasPermission: X,
    requestPermission: q,
    showNotification: $,
    playNotificationSound: H,
};
