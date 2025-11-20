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
    l = n(95015),
    c = n(579806),
    u = n(933557),
    d = n(710845),
    f = n(336197),
    _ = n(847830),
    p = n(811627),
    h = n(863065),
    m = n(691294),
    g = n(460181),
    E = n(474873),
    b = n(135906),
    y = n(378233),
    O = n(592125),
    v = n(292959),
    I = n(699516),
    T = n(246946),
    S = n(594174),
    A = n(626135),
    C = n(768581),
    N = n(5192),
    R = n(358085),
    P = n(998502),
    D = n(981631);
function w(e, t, n) {
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
function L(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = R.isPlatformEmbedded && (0, R.isWindows)(),
    j = k && 10 > parseFloat(c.Z.os.release),
    U = !0;
if (k && !j) {
    let [e, , t] = c.Z.os.release.split(".");
    U = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let G = new d.Z("NotificationUtils"),
    B =
        (k && U) ||
        ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
        ("Firefox" === s().name && 52 > parseFloat(s().version));
async function Z() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications"))
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
    return null != (n = (0, b.Z)(null != t ? t : E.Z.getSoundpack())[e]) ? n : e;
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
    (0, g.GN)(e, t, void 0, n);
}
let K = a().throttle(W, 1000, { leading: !0 });
function z() {
    P.ZP.flashFrame(!1);
}
k && (window.addEventListener("focus", z), P.ZP.on("MAIN_WINDOW_FOCUS", z));
let q = window.Notification;
if (j) {
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
                w(this, "id", q._id++),
                    w(this, "title", void 0),
                    w(this, "body", void 0),
                    w(this, "icon", void 0),
                    w(this, "onshow", function () {}),
                    w(this, "onclick", function () {}),
                    w(this, "onclose", function () {}),
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
        w(r, "permission", "granted"),
        w(r, "_id", 0),
        (q = r);
}
let X = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) {
    try {
        P.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete X[n];
            {
                let e = X[n];
                if ((R.isPlatformEmbedded ? P.ZP.focus() : window.focus(), null != e)) {
                    var a, o, s;
                    (null == (a = e.options) ? void 0 : a.omitClickTracking) ||
                        (A.default.track(D.rMx.NOTIFICATION_ACTION, L({ action: "CLICK" }, e.trackingProps)),
                        A.default.track(D.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
                    return;
                }
                if (null != i) {
                    let e = V(i);
                    null != e && (0, f.Z)(e);
                }
            }
        }),
            P.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        G.warn("Native notification setup failed with error: ", e);
    }
    (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications_provisional")) &&
        $().then((e) => {
            e || P.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
function Q(e) {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications"))
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
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) {
        let e = await Z();
        return (
            (null == e ? void 0 : e.authorizationStatus) === "authorized" ||
            (null == e ? void 0 : e.authorizationStatus) === "provisional"
        );
    }
    return null != q && "granted" === q.permission;
}
async function $() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) {
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
    var a, o, s, c, d, f, g;
    let E,
        b = await Z(),
        w =
            (null == b ? void 0 : b.authorizationStatus) === "authorized" ||
            (null == b ? void 0 : b.authorizationStatus) === "provisional",
        x = null != b ? w : await J(),
        j = w,
        F = T.Z.disableNotifications && null == i.overrideStreamerMode,
        V = !R.isPlatformEmbedded || ((0, R.isMac)() && j) || P.ZP.shouldDisplayNotifications(),
        H = !F && x && V,
        W = M(L({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0,
        }),
        K = W,
        z = W;
    if (((r.banner = await (0, h.K)()), !H)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (ee(i.sound, null != (a = i.volume) ? a : 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || A.default.track(D.rMx.NOTIFICATION_ACTION, L({ action: "VIEW" }, r)));
        return;
    }
    t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let Q = null != (o = null == i ? void 0 : i.tag) ? o : null,
        $ = j && (null == b ? void 0 : b.sound) === !0 && (null == b ? void 0 : b.authorizationStatus) === "authorized",
        et = (e, t) => {
            var n;
            null == (n = i.onShown) || n.call(i),
                i.omitViewTracking ||
                    (A.default.track(D.rMx.NOTIFICATION_ACTION, L({ action: "VIEW" }, t)),
                    A.default.track(D.rMx.NOTIFICATION_VIEWED, z)),
                B && setTimeout(() => e.close(), 5000);
        };
    if (
        (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, m.D)(e)),
        k && v.Z.taskbarFlash && P.ZP.flashFrame(!0),
        j)
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
        let o = p.Z.getCurrentConfig(
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
            let n = O.Z.getChannel(e);
            null != n && (a.groupName = (0, u.F6)(n, S.default, I.Z));
            let r = null == n ? void 0 : n.getGuildId();
            if (
                ((a.senderIdentifier = t.id),
                (a.senderDisplayName = N.ZP.getName(r, e, t)),
                (a.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                (a.attachments = []),
                o.includeStickers)
            )
                for (let e of (0, y.cv)(i.messageRecord)) {
                    let t = (0, y.Q6)(e, { isPreview: !0 });
                    null != t &&
                        a.attachments.push({
                            url: t,
                            type: "image/png",
                        });
                }
            if (o.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, l.yE)(null != (d = e.flags) ? d : 0, D.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, l.yE)(null != (f = e.flags) ? f : 0, D.J0y.IS_SPOILER) &&
                        (null == (c = e.content_type) ? void 0 : c.startsWith("image/")) &&
                        a.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type,
                        });
            null != i.emoji &&
                _.Z.getConfig({ location: "showNotification" }).enabled &&
                (a.emoji = i.emoji.map((e) =>
                    L(
                        {
                            url: (0, C.gT)({
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
    null != i.sound && j && (ee(i.sound, null != (g = i.volume) ? g : 1, i.soundpack), (r.ping = !0));
    let en = {
        icon: e,
        body: n,
        tag: Q,
        silent: !0,
    };
    try {
        E = new q(t, en);
    } catch (e) {
        return;
    }
    return (et(E, r),
    (E.onclick = (e) => {
        var t;
        R.isPlatformEmbedded ? P.ZP.focus() : (window.focus(), E.close()),
            i.omitClickTracking ||
                (A.default.track(D.rMx.NOTIFICATION_ACTION, L({ action: "CLICK" }, r)),
                A.default.track(D.rMx.NOTIFICATION_CLICKED, K));
        let n = "";
        null == (t = i.onClick) || t.call(i, n);
    }),
    U)
        ? {
              notification: E,
              trackingProps: r,
          }
        : {
              notification: {
                  close() {
                      var e;
                      null == E || null == (e = E.onclose) || e.call(E);
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
