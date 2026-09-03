n.d(t, { A: () => Z, I: () => k }), n(321073), n(323874), n(14289), n(35956), n(142703);
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
var A = n(105613);
function h(e) {
    let { embeddedMac: t, constructed: n, nativeFailureReason: i } = e;
    return t || !n
        ? { result: "failed", reason: i ?? "html5_constructor_error" }
        : { result: "shown", reason: i ?? "none" };
}
var I = n(400492),
    f = n(312671),
    p = n(458640),
    T = n(734057),
    m = n(803224),
    g = n(994500),
    S = n(351906),
    N = n(287809),
    C = n(174459),
    O = n(486020),
    R = n(562153),
    L = n(723702),
    y = n(19575),
    D = n(652215);
let v = L.isPlatformEmbedded && (0, L.isWindows)(),
    b = v && 10 > parseFloat(o.A.os.release),
    M = !0;
if (v && !b) {
    let [e, , t] = o.A.os.release.split(".");
    M = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let P = new c.A("NotificationUtils"),
    U = null;
function w(e, t, n) {
    let i = [`result:${e}`, `reason:${t}`];
    null != n && i.push(`delivery:${n}`), _.A.increment({ name: l.K.DESKTOP_NOTIFICATION_DISPLAY, tags: i });
}
let G =
    (v && M) ||
    ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
    ("Firefox" === s().name && 52 > parseFloat(s().version));
async function x() {
    if (o.A?.features.supports("notifications"))
        try {
            return await y.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            P.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function k(e) {
    return `discord://${location.host}${e}`;
}
async function F() {
    let e = await x();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function V(e, t) {
    return (0, p.A)(t ?? f.A.getSoundpack())[e] ?? e;
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await F())
        try {
            await y.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: V(e, n) });
            return;
        } catch (e) {
            P.warn("Native notification sound failed with error: ", e);
        }
    (0, I.Ak)(e, t, void 0, n, { trackNotificationFailure: !0 });
}
let H = r().throttle(B, 1e3, { leading: !0 });
function j() {
    y.Ay.flashFrame(!1);
}
v && (window.addEventListener("focus", j), y.Ay.on("MAIN_WINDOW_FOCUS", j));
let W = window.Notification;
if (b) {
    let e = {};
    y.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        y.Ay.send("NOTIFICATIONS_CLEAR"),
        (W = class {
            static permission = "granted";
            static _id = 0;
            id = W._id++;
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
                t.includes("\0")
                    ? (P.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (P.warn("Notification body contains null character, setting to empty string"),
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
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], y.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let Y = {};
if (o.A?.features.supports("notifications")) {
    try {
        y.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("failed" === t) {
                w("failed", "native_ipc_error", "native"), delete Y[n];
                return;
            }
            if ("dismiss" === t) return void delete Y[n];
            {
                let e = Y[n];
                if ((L.isPlatformEmbedded ? y.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        C.default.track(D.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        e.options?.onClick?.(i);
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
            y.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        P.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        $().then((e) => {
            e || y.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function K() {
    if (o.A?.features.supports("notifications")) {
        let e = await x();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != W && "granted" === W.permission;
}
async function $() {
    return o.A?.features.supports("notifications")
        ? (await x())?.authorizationStatus !== "undetermined"
        : null != W && "default" !== W.permission;
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? H(e, t, n) : B(e, t, n);
}
async function q(e, t, n, i, r) {
    var a, s;
    let l,
        o,
        c = await x(),
        u = c?.authorizationStatus === "authorized" || c?.authorizationStatus === "provisional",
        _ = null != c ? u : await K(),
        I = S.A.disableNotifications && null == r.overrideStreamerMode,
        f = !L.isPlatformEmbedded || ((0, L.isMac)() && u) || y.Ay.shouldDisplayNotifications(),
        p = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((i.banner = await (0, A.N)()), !(!I && _ && f))) {
        w("suppressed", I ? "streamer_mode" : _ ? "os_disabled" : "permission_denied"),
            null != r.sound &&
                !1 !== r.playSoundIfDisabled &&
                (z(r.sound, r.volume ?? 1, r.soundpack),
                (i.ping = !0),
                r.omitViewTracking || C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i }));
        return;
    }
    t.includes("\0") && (P.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (P.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let b = r?.tag ?? null,
        k = u && c?.sound === !0 && c?.authorizationStatus === "authorized";
    function F(e, t) {
        r.onShown?.(),
            r.omitViewTracking ||
                (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                C.default.track(D.HAw.NOTIFICATION_VIEWED, p)),
            G && setTimeout(() => e.close(), 5e3);
    }
    null == r.sound || k || (z(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
        r.isUserAvatar &&
            null != e &&
            (e = await ((a = e),
            ((o = new Image()).src = a),
            (o.crossOrigin = "anonymous"),
            new Promise((e) => {
                (o.onload = () => {
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
                    });
            }))),
        v && m.A.taskbarFlash && y.Ay.flashFrame(!0);
    let B = null;
    if (u) {
        let a = { title: t, body: n };
        if (
            (null != e && (a.icon = e),
            r?.sound != null && (a.sound = V(r.sound, r.soundpack)),
            r?.tag != null && (a.identifier = r.tag),
            r?.fallbackDeepLink != null && (a.fallbackDeepLink = r.fallbackDeepLink),
            Array.isArray(r.actions) && (a.actions = r.actions),
            null != r.messageRecord && (0, L.isMac)())
        ) {
            let e = r.messageRecord.channel_id,
                t = r.messageRecord.author;
            a.threadIdentifier = e;
            let n = T.A.getChannel(e);
            null != n && (a.groupName = (0, d.m1)(n, N.default, g.A));
            let i = n?.getGuildId();
            (a.senderIdentifier = t.id),
                (a.senderDisplayName = R.Ay.getName(i, e, t)),
                (a.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                null != r.emoji &&
                    E.getConfig({ location: "showNotification" }).enabled &&
                    (a.emoji = r.emoji.map((e) => ({ url: (0, O._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e =
                ((s = await y.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a)),
                "string" == typeof s ? { identifier: s, delivered: !0 } : s);
            if (e.delivered) {
                let t = e.identifier;
                Y[t] = { options: r, trackingProps: i, clickTrackingProps: p };
                let n = {
                    close() {
                        try {
                            y.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t]);
                        } catch (e) {
                            P.warn("Native notification removal failed with error: ", e);
                        }
                    },
                };
                return w("shown", "none", "native"), F(n, i), { notification: n, trackingProps: i };
            }
            B = "native_ipc_error";
        } catch (e) {
            (B = "native_ipc_error"), P.warn("Native notification failed with error: ", e);
        }
    } else if (L.isPlatformEmbedded && ((0, L.isMac)() || (0, L.isWindows)())) {
        let e = await (null == U && (U = y.Ay.invoke("NOTIFICATIONS_GET_MODULE_STATUS").catch(() => null)), U);
        B =
            null == e
                ? "native_status_unknown"
                : "loaded" === e.state
                  ? "native_settings_unreadable"
                  : "native_module_unavailable";
    }
    null != r.sound && u && (z(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
    let H = { icon: e, body: n, tag: b, silent: !0 },
        j = L.isPlatformEmbedded && (0, L.isMac)();
    if (j) {
        let { result: e, reason: t } = h({ embeddedMac: j, constructed: !1, nativeFailureReason: B });
        w(e, t, "html5");
        return;
    }
    try {
        l = new W(t, H);
    } catch (n) {
        let { result: e, reason: t } = h({ embeddedMac: j, constructed: !1, nativeFailureReason: B });
        w(e, t, "html5");
        return;
    }
    let { result: $, reason: q } = h({ embeddedMac: j, constructed: !0, nativeFailureReason: B });
    return (w($, q, "html5"),
    F(l, i),
    (l.onclick = (e) => {
        L.isPlatformEmbedded ? y.Ay.focus() : (window.focus(), l.close()),
            r.omitClickTracking ||
                (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                C.default.track(D.HAw.NOTIFICATION_CLICKED, p)),
            r.onClick?.("");
    }),
    M)
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
                y.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    });
                return;
            } catch (e) {
                P.warn("Native notification authorization failed with error: ", e);
            }
        null != W &&
            W.requestPermission(async () => {
                null != e && e(await K());
            });
    },
    showNotification: q,
    playNotificationSound: B,
};
