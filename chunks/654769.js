n.d(t, {
    W: () => F,
    Z: () => en,
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
    a = n.n(i),
    o = n(525654),
    s = n.n(o),
    l = n(579806),
    c = n(933557),
    u = n(710845),
    d = n(336197),
    f = n(847830),
    _ = n(811627),
    p = n(863065),
    h = n(691294),
    m = n(460181),
    g = n(474873),
    E = n(135906),
    b = n(378233),
    y = n(592125),
    O = n(292959),
    v = n(699516),
    I = n(246946),
    T = n(594174),
    S = n(626135),
    A = n(768581),
    C = n(630388),
    N = n(5192),
    R = n(358085),
    P = n(998502),
    w = n(981631);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = R.isPlatformEmbedded && (0, R.isWindows)(),
    k = j && 10 > parseFloat(l.Z.os.release),
    U = !0;
if (j && !k) {
    let [e, , t] = l.Z.os.release.split(".");
    U = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let G = new u.Z("NotificationUtils"),
    B =
        (j && U) ||
        ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
        ("Firefox" === s().name && 52 > parseFloat(s().version));
async function Z() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications"))
        try {
            return await P.ZP.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            G.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function F(e) {
    return "discord://".concat(location.host).concat(e);
}
function V(e) {
    try {
        let t = new URL(e, location.origin);
        if ("discord:" === t.protocol) return t.pathname;
    } catch (e) {}
    return null;
}
async function H() {
    let e = await Z();
    return (null == e ? void 0 : e.authorizationStatus) === "authorized" && (null == e ? void 0 : e.sound) === !0;
}
function Y(e, t) {
    var n;
    return null != (n = (0, E.Z)(null != t ? t : g.Z.getSoundpack())[e]) ? n : e;
}
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await H())
        try {
            await P.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: Y(e, n) });
            return;
        } catch (e) {
            G.warn("Native notification sound failed with error: ", e);
        }
    (0, m.GN)(e, t, void 0, n);
}
let K = a().throttle(W, 1000, { leading: !0 });
function z() {
    P.ZP.flashFrame(!1);
}
j && (window.addEventListener("focus", z), P.ZP.on("MAIN_WINDOW_FOCUS", z));
let q = window.Notification;
if (k) {
    let e = {};
    P.ZP.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        P.ZP.send("NOTIFICATIONS_CLEAR"),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], P.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
            constructor(t, { body: n, icon: r }) {
                D(this, "id", q._id++),
                    D(this, "title", void 0),
                    D(this, "body", void 0),
                    D(this, "icon", void 0),
                    D(this, "onshow", function () {}),
                    D(this, "onclick", function () {}),
                    D(this, "onclose", function () {}),
                    t.includes("\0")
                        ? (G.warn("Notification title contains null character, setting to empty string"),
                          (this.title = ""))
                        : (this.title = t),
                    n.includes("\0")
                        ? (G.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    P.ZP.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
        }),
        D(r, "permission", "granted"),
        D(r, "_id", 0),
        (q = r);
}
let X = {};
if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications")) {
    try {
        P.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete X[n];
            {
                let e = X[n];
                if ((R.isPlatformEmbedded ? P.ZP.focus() : window.focus(), null != e)) {
                    var a, o, s;
                    (null == (a = e.options) ? void 0 : a.omitClickTracking) ||
                        (S.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "CLICK" }, e.trackingProps)),
                        S.default.track(w.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
                    return;
                }
                if (null != i) {
                    let e = V(i);
                    null != e && (0, d.Z)(e);
                }
            }
        }),
            P.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        G.warn("Native notification setup failed with error: ", e);
    }
    (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications_provisional")) &&
        $().then((e) => {
            e || P.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
function Q(e) {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications"))
        try {
            P.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            G.warn("Native notification authorization failed with error: ", e);
        }
    null != q &&
        q.requestPermission(async () => {
            null != e && e(await J());
        });
}
async function J() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications")) {
        let e = await Z();
        return (
            (null == e ? void 0 : e.authorizationStatus) === "authorized" ||
            (null == e ? void 0 : e.authorizationStatus) === "provisional"
        );
    }
    return null != q && "granted" === q.permission;
}
async function $() {
    if (null === l.Z || void 0 === l.Z ? void 0 : l.Z.features.supports("notifications")) {
        var e;
        return (null == (e = await Z()) ? void 0 : e.authorizationStatus) !== "undetermined";
    }
    return null != q && "default" !== q.permission;
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? K(e, t, n) : W(e, t, n);
}
async function et(e, t, n, r, i) {
    var a, o, s, l, u, d, m;
    let g,
        E = await Z(),
        D =
            (null == E ? void 0 : E.authorizationStatus) === "authorized" ||
            (null == E ? void 0 : E.authorizationStatus) === "provisional",
        L = null != E ? D : await J(),
        k = D,
        F = I.Z.disableNotifications && null == i.overrideStreamerMode,
        V = !R.isPlatformEmbedded || ((0, R.isMac)() && k) || P.ZP.shouldDisplayNotifications(),
        H = !F && L && V,
        W = M(x({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0,
        }),
        K = W,
        z = W;
    if (((r.banner = await (0, p.K)()), !H)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (ee(i.sound, null != (a = i.volume) ? a : 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || S.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "VIEW" }, r)));
        return;
    }
    t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let Q = null != (o = null == i ? void 0 : i.tag) ? o : null,
        $ = k && (null == E ? void 0 : E.sound) === !0 && (null == E ? void 0 : E.authorizationStatus) === "authorized",
        et = (e, t) => {
            var n;
            null == (n = i.onShown) || n.call(i),
                i.omitViewTracking ||
                    (S.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "VIEW" }, t)),
                    S.default.track(w.rMx.NOTIFICATION_VIEWED, z)),
                B && setTimeout(() => e.close(), 5000);
        };
    if (
        (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, h.D)(e)),
        j && O.Z.taskbarFlash && P.ZP.flashFrame(!0),
        k)
    ) {
        let a = {
            title: t,
            body: n,
        };
        null != e && (a.icon = e),
            (null == i ? void 0 : i.sound) != null && (a.sound = Y(i.sound, i.soundpack)),
            (null == i ? void 0 : i.tag) != null && (a.identifier = i.tag),
            (null == i ? void 0 : i.fallbackDeepLink) != null && (a.fallbackDeepLink = i.fallbackDeepLink),
            Array.isArray(i.actions) && (a.actions = i.actions);
        let o = _.Z.getCurrentConfig(
            { location: "showNotification" },
            {
                autoTrackExposure: !0,
                disable: null == i.messageRecord,
            },
        );
        if (null != i.messageRecord && o.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            a.threadIdentifier = e;
            let n = y.Z.getChannel(e);
            null != n && (a.groupName = (0, c.F6)(n, T.default, v.Z));
            let r = null == n ? void 0 : n.getGuildId();
            if (
                ((a.senderIdentifier = t.id),
                (a.senderDisplayName = N.ZP.getName(r, e, t)),
                (a.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                (a.attachments = []),
                o.includeStickers)
            )
                for (let e of (0, b.cv)(i.messageRecord)) {
                    let t = (0, b.Q6)(e, { isPreview: !0 });
                    null != t &&
                        a.attachments.push({
                            url: t,
                            type: "image/png",
                        });
                }
            if (o.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, C.yE)(null != (u = e.flags) ? u : 0, w.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, C.yE)(null != (d = e.flags) ? d : 0, w.J0y.IS_SPOILER) &&
                        (null == (l = e.content_type) ? void 0 : l.startsWith("image/")) &&
                        a.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type,
                        });
            null != i.emoji &&
                f.Z.getConfig({ location: "showNotification" }).enabled &&
                (a.emoji = i.emoji.map((e) =>
                    x(
                        {
                            url: (0, A.gT)({
                                id: e.id,
                                animated: !1,
                                size: 96,
                            }),
                        },
                        e,
                    ),
                ));
        }
        try {
            let e = await P.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
            X[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: K,
            };
            let t = {
                close() {
                    try {
                        P.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        G.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return (
                et(t, r),
                {
                    notification: t,
                    trackingProps: r,
                }
            );
        } catch (e) {
            G.warn("Native notification failed with error: ", e);
        }
    }
    null != i.sound && k && (ee(i.sound, null != (m = i.volume) ? m : 1, i.soundpack), (r.ping = !0));
    let en = {
        icon: e,
        body: n,
        tag: Q,
        silent: !0,
    };
    try {
        g = new q(t, en);
    } catch (e) {
        return;
    }
    return (et(g, r),
    (g.onclick = (e) => {
        var t;
        R.isPlatformEmbedded ? P.ZP.focus() : (window.focus(), g.close()),
            i.omitClickTracking ||
                (S.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "CLICK" }, r)),
                S.default.track(w.rMx.NOTIFICATION_CLICKED, K));
        let n = "";
        null == (t = i.onClick) || t.call(i, n);
    }),
    U)
        ? {
              notification: g,
              trackingProps: r,
          }
        : {
              notification: {
                  close() {
                      var e;
                      null == g || null == (e = g.onclose) || e.call(g);
                  },
              },
              trackingProps: r,
          };
}
let en = {
    hasPermission: J,
    requestPermission: Q,
    showNotification: et,
    playNotificationSound: W,
};
