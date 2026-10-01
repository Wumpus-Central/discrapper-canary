(n.d(t, { Ng: () => Y, Ay: () => Z, Id: () => x }), n(321073), n(323874), n(14289), n(35956), n(142703));
var i = n(435558),
    r = n.n(i),
    a = n(481613),
    s = n.n(a),
    l = n(731738),
    o = n(77729),
    d = n(47167),
    c = n(626584),
    u = n(741231),
    _ = n(807393);
let E = (0, n(240921).Ay)({
    kind: "user",
    name: "2025-10-desktop-communication-notifications-emoji",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function A(e) {
    let { embeddedMac: t, constructed: n, nativeFailureReason: i } = e;
    return t || !n
        ? { result: "failed", reason: i ?? "html5_constructor_error" }
        : { result: "shown", reason: i ?? "none" };
}
var h = n(400492),
    I = n(312671),
    f = n(458640),
    p = n(734057),
    T = n(803224),
    g = n(994500),
    m = n(351906),
    S = n(287809),
    N = n(174459),
    C = n(486020),
    O = n(562153),
    R = n(723702),
    L = n(19575),
    y = n(652215);
let D = R.isPlatformEmbedded && (0, R.isWindows)(),
    v = D && 10 > parseFloat(o.A.os.release),
    b = !0;
if (D && !v) {
    let [e, , t] = o.A.os.release.split(".");
    b = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let M = new c.A("NotificationUtils"),
    P = null;
function U(e, t, n) {
    let i = [`result:${e}`, `reason:${t}`];
    (null != n && i.push(`delivery:${n}`), _.A.increment({ name: l.K.DESKTOP_NOTIFICATION_DISPLAY, tags: i }));
}
let w =
    (D && b) ||
    ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
    ("Firefox" === s().name && 52 > parseFloat(s().version));
async function G() {
    if (o.A?.features.supports("notifications"))
        try {
            return await L.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            M.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function x(e) {
    return `discord://${location.host}${e}`;
}
async function k() {
    let e = await G();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function F(e, t) {
    return (0, f.A)(t ?? I.A.getSoundpack())[e] ?? e;
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await k())
        try {
            await L.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: F(e, n) });
            return;
        } catch (e) {
            M.warn("Native notification sound failed with error: ", e);
        }
    (0, h.Ak)(e, t, void 0, n, { trackNotificationFailure: !0 });
}
let V = r().throttle(B, 1e3, { leading: !0 });
function H() {
    L.Ay.flashFrame(!1);
}
D && (window.addEventListener("focus", H), L.Ay.on("MAIN_WINDOW_FOCUS", H));
let j = window.Notification;
if (v) {
    let e = {};
    (L.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        L.Ay.send("NOTIFICATIONS_CLEAR"),
        (j = class {
            static permission = "granted";
            static _id = 0;
            id = j._id++;
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
                    L.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    }));
            }
            close() {
                null != e[this.id] && (delete e[this.id], L.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        }));
}
let W = {};
if (o.A?.features.supports("notifications")) {
    try {
        (L.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("failed" === t) {
                (U("failed", "native_ipc_error", "native"), delete W[n]);
                return;
            }
            if ("dismiss" === t) return void delete W[n];
            {
                let e = W[n];
                if ((R.isPlatformEmbedded ? L.Ay.focus() : window.focus(), null != e)) {
                    (e.options?.omitClickTracking ||
                        (N.default.track(y.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        N.default.track(y.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
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
            L.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS"));
    } catch (e) {
        M.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        $().then((e) => {
            e || L.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function Y() {
    if (!R.isPlatformEmbedded) return !1;
    let e = await K();
    return L.Ay.shouldDisplayNotifications() && e;
}
async function K() {
    if (o.A?.features.supports("notifications")) {
        let e = await G();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != j && "granted" === j.permission;
}
async function $() {
    return o.A?.features.supports("notifications")
        ? (await G())?.authorizationStatus !== "undetermined"
        : null != j && "default" !== j.permission;
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? V(e, t, n) : B(e, t, n);
}
async function X(e, t, n, i, r) {
    var a, s;
    let l,
        o,
        c = await G(),
        u = c?.authorizationStatus === "authorized" || c?.authorizationStatus === "provisional",
        _ = null != c ? u : await K(),
        h = m.A.disableNotifications && null == r.overrideStreamerMode,
        I = !R.isPlatformEmbedded || ((0, R.isMac)() && u) || L.Ay.shouldDisplayNotifications(),
        f = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((i.banner = await Y()), !(!h && _ && I))) {
        (U("suppressed", h ? "streamer_mode" : _ ? "os_disabled" : "permission_denied"),
            null != r.sound &&
                !1 !== r.playSoundIfDisabled &&
                (z(r.sound, r.volume ?? 1, r.soundpack),
                (i.ping = !0),
                r.omitViewTracking || N.default.track(y.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i })));
        return;
    }
    (t.includes("\0") && (M.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (M.warn("Notification body contains null character, setting to empty string"), (n = "")));
    let v = r?.tag ?? null,
        x = u && c?.sound === !0 && c?.authorizationStatus === "authorized";
    function k(e, t) {
        (r.onShown?.(),
            r.omitViewTracking ||
                (N.default.track(y.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                N.default.track(y.HAw.NOTIFICATION_VIEWED, f)),
            w && setTimeout(() => e.close(), 5e3));
    }
    (null == r.sound || x || (z(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
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
                            ((i = (n = document.createElement("canvas")).getContext("2d")),
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
        D && T.A.taskbarFlash && L.Ay.flashFrame(!0));
    let B = null;
    if (u) {
        let a = { title: t, body: n };
        if (
            (null != e && (a.icon = e),
            r?.sound != null && (a.sound = F(r.sound, r.soundpack)),
            r?.tag != null && (a.identifier = r.tag),
            r?.fallbackDeepLink != null && (a.fallbackDeepLink = r.fallbackDeepLink),
            Array.isArray(r.actions) && (a.actions = r.actions),
            null != r.messageRecord && (0, R.isMac)())
        ) {
            let e = r.messageRecord.channel_id,
                t = r.messageRecord.author;
            a.threadIdentifier = e;
            let n = p.A.getChannel(e);
            null != n && (a.groupName = (0, d.m1)(n, S.default, g.A));
            let i = n?.getGuildId();
            ((a.senderIdentifier = t.id),
                (a.senderDisplayName = O.Ay.getName(i, e, t)),
                (a.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                null != r.emoji &&
                    E.getConfig({ location: "showNotification" }).enabled &&
                    (a.emoji = r.emoji.map((e) => ({ url: (0, C._O)({ id: e.id, animated: !1, size: 96 }), ...e }))));
        }
        try {
            let e =
                ((s = await L.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a)),
                "string" == typeof s ? { identifier: s, delivered: !0 } : s);
            if (e.delivered) {
                let t = e.identifier;
                W[t] = { options: r, trackingProps: i, clickTrackingProps: f };
                let n = {
                    close() {
                        try {
                            L.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t]);
                        } catch (e) {
                            M.warn("Native notification removal failed with error: ", e);
                        }
                    },
                };
                return (U("shown", "none", "native"), k(n, i), { notification: n, trackingProps: i });
            }
            B = "native_ipc_error";
        } catch (e) {
            ((B = "native_ipc_error"), M.warn("Native notification failed with error: ", e));
        }
    } else if (R.isPlatformEmbedded && ((0, R.isMac)() || (0, R.isWindows)())) {
        let e = await (null == P && (P = L.Ay.invoke("NOTIFICATIONS_GET_MODULE_STATUS").catch(() => null)), P);
        B =
            null == e
                ? "native_status_unknown"
                : "loaded" === e.state
                  ? "native_settings_unreadable"
                  : "native_module_unavailable";
    }
    null != r.sound && u && (z(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
    let V = { icon: e, body: n, tag: v, silent: !0 },
        H = R.isPlatformEmbedded && (0, R.isMac)();
    if (H) {
        let { result: e, reason: t } = A({ embeddedMac: H, constructed: !1, nativeFailureReason: B });
        U(e, t, "html5");
        return;
    }
    try {
        l = new j(t, V);
    } catch (n) {
        let { result: e, reason: t } = A({ embeddedMac: H, constructed: !1, nativeFailureReason: B });
        U(e, t, "html5");
        return;
    }
    let { result: $, reason: X } = A({ embeddedMac: H, constructed: !0, nativeFailureReason: B });
    return (U($, X, "html5"),
    k(l, i),
    (l.onclick = (e) => {
        (R.isPlatformEmbedded ? L.Ay.focus() : (window.focus(), l.close()),
            r.omitClickTracking ||
                (N.default.track(y.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                N.default.track(y.HAw.NOTIFICATION_CLICKED, f)),
            r.onClick?.(""));
    }),
    b)
        ? { notification: l, trackingProps: i }
        : {
              notification: {
                  close() {
                      l?.onclose?.();
                  },
              },
              trackingProps: i,
          };
}
let Z = {
    hasPermission: K,
    requestPermission: function (e) {
        if (o.A?.features.supports("notifications"))
            try {
                L.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
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
    showNotification: X,
    playNotificationSound: B,
};
