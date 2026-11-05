(n.d(t, { Id: () => k, Ay: () => X, Ng: () => Y }), n(321073), n(323874), n(14289), n(35956), n(142703));
var i = n(435558),
    r = n.n(i),
    a = n(481613),
    s = n.n(a),
    l = n(731738),
    o = n(77729),
    d = n(47167),
    c = n(626584),
    u = n(362280),
    _ = n(913379);
let E = (0, n(400845).Ay)({
    kind: "user",
    name: "2025-10-desktop-communication-notifications-emoji",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var A = n(384077);
function f(e) {
    let { embeddedMac: t, constructed: n, nativeFailureReason: i } = e;
    return t || !n
        ? { result: "failed", reason: i ?? "html5_constructor_error" }
        : { result: "shown", reason: i ?? "none" };
}
var h = n(400492),
    I = n(312671),
    p = n(458640),
    m = n(734057),
    T = n(803224),
    g = n(994500),
    S = n(351906),
    N = n(287809),
    C = n(129230),
    O = n(486020),
    R = n(562153),
    L = n(723702),
    y = n(253400),
    D = n(652215);
let b = L.isPlatformEmbedded && (0, L.uF)(),
    v = b && 10 > parseFloat(o.A.os.release),
    P = !0;
if (b && !v) {
    let [e, , t] = o.A.os.release.split(".");
    P = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let M = new c.A("NotificationUtils"),
    U = null;
function w(e, t, n) {
    let i = [`result:${e}`, `reason:${t}`];
    (null != n && i.push(`delivery:${n}`), _.A.increment({ name: l.K.DESKTOP_NOTIFICATION_DISPLAY, tags: i }));
}
let G =
    v ||
    ("Chrome" === s().name && 47 > parseFloat(s().version ?? "")) ||
    ("Firefox" === s().name && 52 > parseFloat(s().version ?? ""));
async function x() {
    if (o.A?.features.supports("notifications"))
        try {
            return await y.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            M.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function k(e) {
    return `discord://${location.host}${e}`;
}
function F(e, t) {
    return (0, p.A)(t ?? I.A.getSoundpack())[e] ?? e;
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (
        await (async function () {
            let e = await x();
            return e?.authorizationStatus === "authorized" && e?.sound === !0;
        })()
    )
        try {
            await y.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: F(e, n) });
            return;
        } catch (e) {
            M.warn("Native notification sound failed with error: ", e);
        }
    (0, h.Ak)(e, t, void 0, n, { trackNotificationFailure: !0 });
}
let V = r().throttle(B, 1e3, { leading: !0 });
function H() {
    y.Ay.flashFrame(!1);
}
b && (window.addEventListener("focus", H), y.Ay.on("MAIN_WINDOW_FOCUS", H));
let j = window.Notification;
if (v) {
    let e = {};
    (y.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        y.Ay.send("NOTIFICATIONS_CLEAR"),
        (j = class t {
            static permission = "granted";
            static _id = 0;
            id = t._id++;
            title;
            body;
            icon;
            onshow = function () {};
            onclick = function () {};
            onclose = function () {};
            static requestPermission(e) {
                e();
            }
            constructor(t, { body: n, icon: i }) {
                (t.includes("\0")
                    ? (M.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (M.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    y.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    }));
            }
            close() {
                null != e[this.id] && (delete e[this.id], y.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        }));
}
let W = {};
if (o.A?.features.supports("notifications")) {
    try {
        (y.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("failed" === t) {
                (w("failed", "native_ipc_error", "native"), delete W[n]);
                return;
            }
            if ("dismiss" === t) return void delete W[n];
            {
                let e = W[n];
                if ((L.isPlatformEmbedded ? y.Ay.focus() : window.focus(), null != e)) {
                    (e.options?.omitClickTracking ||
                        (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        C.default.track(D.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        e.options?.onClick?.(i));
                    return;
                }
                if (null != r) {
                    let e = (function (e) {
                        try {
                            let t = new URL(e, location.origin);
                            if ("discord:" === t.protocol) return t.pathname;
                        } catch (e) {}
                        return null;
                    })(r);
                    null != e && (0, u.A)(e);
                }
            }
        }),
            y.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS"));
    } catch (e) {
        M.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        (async function () {
            return o.A?.features.supports("notifications")
                ? (await x())?.authorizationStatus !== "undetermined"
                : null != j && "default" !== j.permission;
        })().then((e) => {
            e || y.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function Y() {
    if (!L.isPlatformEmbedded) return !1;
    let e = await K();
    return y.Ay.shouldDisplayNotifications() && e;
}
async function K() {
    if (o.A?.features.supports("notifications")) {
        let e = await x();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != j && "granted" === j.permission;
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? V(e, t, n) : B(e, t, n);
}
let X = {
    hasPermission: K,
    requestPermission: function (e) {
        if (o.A?.features.supports("notifications"))
            try {
                y.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    });
                return;
            } catch (e) {
                M.warn("Native notification authorization failed with error: ", e);
            }
        null != j &&
            j.requestPermission(async () => {
                null != e && e(await K());
            });
    },
    showNotification: async function (e, t, n, i, r) {
        var a, s;
        let l,
            o,
            c = await x(),
            u = c?.authorizationStatus === "authorized" || c?.authorizationStatus === "provisional",
            _ = null != c ? u : await K(),
            h = S.A.disableNotifications && null == r.overrideStreamerMode,
            I = !L.isPlatformEmbedded || ((0, L.cX)() && u) || y.Ay.shouldDisplayNotifications(),
            p = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
        if (((i.banner = await Y()), !(!h && _ && I))) {
            (w("suppressed", h ? "streamer_mode" : _ ? "os_disabled" : "permission_denied"),
                null != r.sound &&
                    !1 !== r.playSoundIfDisabled &&
                    ($(r.sound, r.volume ?? 1, r.soundpack),
                    (i.ping = !0),
                    r.omitViewTracking || C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i })));
            return;
        }
        (t.includes("\0") && (M.warn("Notification title contains null character, setting to empty string"), (t = "")),
            n.includes("\0") &&
                (M.warn("Notification body contains null character, setting to empty string"), (n = "")));
        let v = r?.tag ?? null,
            k = u && c?.sound === !0 && c?.authorizationStatus === "authorized";
        function B(e, t) {
            (r.onShown?.(),
                r.omitViewTracking ||
                    (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                    C.default.track(D.HAw.NOTIFICATION_VIEWED, p)),
                G && setTimeout(() => e.close(), 5e3));
        }
        (null == r.sound || k || ($(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
            r.isUserAvatar &&
                null != e &&
                (e = await ((a = e),
                ((o = new Image()).src = a),
                (o.crossOrigin = "anonymous"),
                new Promise((e) => {
                    ((o.onload = () => {
                        var t;
                        let n, i, r, a;
                        "" !== o.src &&
                            e(
                                ((n = document.createElement("canvas")),
                                (i = (0, A.AG)() ? n.getContext("2d", { willReadFrequently: !0 }) : n.getContext("2d")),
                                (n.width = r = Math.min(o.width, o.height)),
                                (n.height = r),
                                null != i &&
                                    ((t = i).beginPath(),
                                    t.arc(r / 2, r / 2, r / 2, 0, 2 * Math.PI),
                                    t.closePath(),
                                    t.clip(),
                                    t.drawImage(o, 0, 0, r, r, 0, 0, r, r),
                                    (i = t)),
                                (a = n.toDataURL()),
                                n.remove(),
                                a),
                            );
                    }),
                        (o.onerror = () => {
                            e(o.src);
                        }));
                }))),
            b && T.A.taskbarFlash && y.Ay.flashFrame(!0));
        let V = null;
        if (u) {
            let a = { title: t, body: n };
            if (
                (null != e && (a.icon = e),
                r?.sound != null && (a.sound = F(r.sound, r.soundpack)),
                r?.tag != null && (a.identifier = r.tag),
                r?.fallbackDeepLink != null && (a.fallbackDeepLink = r.fallbackDeepLink),
                Array.isArray(r.actions) && (a.actions = r.actions),
                null != r.messageRecord && (0, L.cX)())
            ) {
                let e = r.messageRecord.channel_id,
                    t = r.messageRecord.author;
                a.threadIdentifier = e;
                let n = m.A.getChannel(e);
                null != n && (a.groupName = (0, d.m1)(n, N.default, g.A));
                let i = n?.getGuildId();
                ((a.senderIdentifier = t.id),
                    (a.senderDisplayName = R.Ay.getName(i, e, t)),
                    (a.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                    null != r.emoji &&
                        E.getConfig({ location: "showNotification" }).enabled &&
                        (a.emoji = r.emoji.map((e) => ({
                            url: (0, O._O)({ id: e.id, animated: !1, size: 96 }),
                            ...e,
                        }))));
            }
            try {
                let e =
                    ((s = await y.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a)),
                    "string" == typeof s ? { identifier: s, delivered: !0 } : s);
                if (e.delivered) {
                    let t = e.identifier;
                    W[t] = { options: r, trackingProps: i, clickTrackingProps: p };
                    let n = {
                        close() {
                            try {
                                y.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t]);
                            } catch (e) {
                                M.warn("Native notification removal failed with error: ", e);
                            }
                        },
                    };
                    return (w("shown", "none", "native"), B(n, i), { notification: n, trackingProps: i });
                }
                V = "native_ipc_error";
            } catch (e) {
                ((V = "native_ipc_error"), M.warn("Native notification failed with error: ", e));
            }
        } else if (L.isPlatformEmbedded && ((0, L.cX)() || (0, L.uF)())) {
            let e = await (null == U && (U = y.Ay.invoke("NOTIFICATIONS_GET_MODULE_STATUS").catch(() => null)), U);
            V =
                null == e
                    ? "native_status_unknown"
                    : "loaded" === e.state
                      ? "native_settings_unreadable"
                      : "native_module_unavailable";
        }
        null != r.sound && u && ($(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
        let H = { icon: e, body: n, tag: v, silent: !0 },
            X = L.isPlatformEmbedded && (0, L.cX)();
        if (X) {
            let { result: e, reason: t } = f({ embeddedMac: X, constructed: !1, nativeFailureReason: V });
            w(e, t, "html5");
            return;
        }
        try {
            l = new j(t, H);
        } catch (n) {
            let { result: e, reason: t } = f({ embeddedMac: X, constructed: !1, nativeFailureReason: V });
            w(e, t, "html5");
            return;
        }
        let { result: z, reason: q } = f({ embeddedMac: X, constructed: !0, nativeFailureReason: V });
        return (w(z, q, "html5"),
        B(l, i),
        (l.onclick = (e) => {
            (L.isPlatformEmbedded ? y.Ay.focus() : (window.focus(), l.close()),
                r.omitClickTracking ||
                    (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                    C.default.track(D.HAw.NOTIFICATION_CLICKED, p)),
                r.onClick?.(""));
        }),
        P)
            ? { notification: l, trackingProps: i }
            : {
                  notification: {
                      close() {
                          l?.onclose?.();
                      },
                  },
                  trackingProps: i,
              };
    },
    playNotificationSound: B,
};
