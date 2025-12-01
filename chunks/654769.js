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
    p = n(847830),
    _ = n(811627),
    m = n(863065),
    h = n(691294),
    g = n(460181),
    E = n(474873),
    b = n(135906),
    y = n(378233),
    O = n(592125),
    v = n(292959),
    S = n(699516),
    I = n(246946),
    T = n(594174),
    A = n(626135),
    C = n(768581),
    N = n(5192),
    P = n(358085),
    R = n(998502),
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
function j(e, t) {
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
let M = P.isPlatformEmbedded && (0, P.isWindows)(),
    k = M && 10 > parseFloat(c.Z.os.release),
    U = !0;
if (M && !k) {
    let [e, , t] = c.Z.os.release.split(".");
    U = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let G = new d.Z("NotificationUtils"),
    Z =
        (M && U) ||
        ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
        ("Firefox" === s().name && 52 > parseFloat(s().version));
async function B() {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications"))
        try {
            return await R.ZP.invoke("NOTIFICATIONS_GET_SETTINGS");
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
    let e = await B();
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
            await R.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: Y(e, n) });
            return;
        } catch (e) {
            G.warn("Native notification sound failed with error: ", e);
        }
    (0, g.GN)(e, t, void 0, n);
}
let K = a().throttle(W, 1000, { leading: !0 });
function z() {
    R.ZP.flashFrame(!1);
}
M && (window.addEventListener("focus", z), R.ZP.on("MAIN_WINDOW_FOCUS", z));
let q = window.Notification;
if (k) {
    let e = {};
    R.ZP.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        R.ZP.send("NOTIFICATIONS_CLEAR"),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], R.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose());
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
                    R.ZP.send("NOTIFICATION_SHOW", {
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
let Q = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) {
    try {
        R.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete Q[n];
            {
                let e = Q[n];
                if ((P.isPlatformEmbedded ? R.ZP.focus() : window.focus(), null != e)) {
                    var a, o, s;
                    (null == (a = e.options) ? void 0 : a.omitClickTracking) ||
                        (A.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "CLICK" }, e.trackingProps)),
                        A.default.track(w.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
                    return;
                }
                if (null != i) {
                    let e = V(i);
                    null != e && (0, f.Z)(e);
                }
            }
        }),
            R.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        G.warn("Native notification setup failed with error: ", e);
    }
    (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications_provisional")) &&
        $().then((e) => {
            e || R.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
function X(e) {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications"))
        try {
            R.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
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
        let e = await B();
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
        return (null == (e = await B()) ? void 0 : e.authorizationStatus) !== "undetermined";
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
        b = await B(),
        D =
            (null == b ? void 0 : b.authorizationStatus) === "authorized" ||
            (null == b ? void 0 : b.authorizationStatus) === "provisional",
        L = null != b ? D : await J(),
        k = D,
        F = I.Z.disableNotifications && null == i.overrideStreamerMode,
        V = !P.isPlatformEmbedded || ((0, P.isMac)() && k) || R.ZP.shouldDisplayNotifications(),
        H = !F && L && V,
        W = j(x({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0,
        }),
        K = W,
        z = W;
    if (((r.banner = await (0, m.K)()), !H)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (ee(i.sound, null != (a = i.volume) ? a : 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || A.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "VIEW" }, r)));
        return;
    }
    t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let X = null != (o = null == i ? void 0 : i.tag) ? o : null,
        $ = k && (null == b ? void 0 : b.sound) === !0 && (null == b ? void 0 : b.authorizationStatus) === "authorized",
        et = (e, t) => {
            var n;
            null == (n = i.onShown) || n.call(i),
                i.omitViewTracking ||
                    (A.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "VIEW" }, t)),
                    A.default.track(w.rMx.NOTIFICATION_VIEWED, z)),
                Z && setTimeout(() => e.close(), 5000);
        };
    if (
        (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, h.D)(e)),
        M && v.Z.taskbarFlash && R.ZP.flashFrame(!0),
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
            let n = O.Z.getChannel(e);
            null != n && (a.groupName = (0, u.F6)(n, T.default, S.Z));
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
                    !(0, l.yE)(null != (d = e.flags) ? d : 0, w.J0y.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, l.yE)(null != (f = e.flags) ? f : 0, w.J0y.IS_SPOILER) &&
                        (null == (c = e.content_type) ? void 0 : c.startsWith("image/")) &&
                        a.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type,
                        });
            null != i.emoji &&
                p.Z.getConfig({ location: "showNotification" }).enabled &&
                (a.emoji = i.emoji.map((e) =>
                    x(
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
            let e = await R.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
            Q[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: K,
            };
            let t = {
                close() {
                    try {
                        R.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
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
    null != i.sound && k && (ee(i.sound, null != (g = i.volume) ? g : 1, i.soundpack), (r.ping = !0));
    let en = {
        icon: e,
        body: n,
        tag: X,
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
        P.isPlatformEmbedded ? R.ZP.focus() : (window.focus(), E.close()),
            i.omitClickTracking ||
                (A.default.track(w.rMx.NOTIFICATION_ACTION, x({ action: "CLICK" }, r)),
                A.default.track(w.rMx.NOTIFICATION_CLICKED, K));
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
    requestPermission: X,
    showNotification: et,
    playNotificationSound: W,
};
