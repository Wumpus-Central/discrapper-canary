"use strict";
n.d(t, { A: () => Z, I: () => G }), n(321073), n(323874), n(14289), n(35956), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(481613),
    a = n.n(s),
    o = n(731738),
    l = n(77729),
    u = n(47167),
    c = n(626584),
    d = n(741231),
    _ = n(807393);
let h = (0, n(240921).Ay)({
    kind: "user",
    name: "2025-10-desktop-communication-notifications-emoji",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(105613);
function p(e) {
    let { embeddedMac: t, constructed: n, nativeFailureReason: i } = e;
    return t || !n
        ? { result: "failed", reason: i ?? "html5_constructor_error" }
        : { result: "shown", reason: i ?? "none" };
}
var E = n(400492),
    m = n(312671),
    g = n(458640),
    A = n(734057),
    I = n(803224),
    T = n(994500),
    S = n(351906),
    y = n(287809),
    C = n(174459),
    N = n(486020),
    v = n(562153),
    R = n(723702),
    O = n(19575),
    b = n(652215);
let D = R.isPlatformEmbedded && (0, R.isWindows)(),
    L = D && 10 > parseFloat(l.A.os.release),
    w = !0;
if (D && !L) {
    let [e, , t] = l.A.os.release.split(".");
    w = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let M = new c.A("NotificationUtils"),
    P = null;
function x(e, t, n) {
    let i = [`result:${e}`, `reason:${t}`];
    null != n && i.push(`delivery:${n}`), _.A.increment({ name: o.K.DESKTOP_NOTIFICATION_DISPLAY, tags: i });
}
let k =
    (D && w) ||
    ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
    ("Firefox" === a().name && 52 > parseFloat(a().version));
async function U() {
    if (l.A?.features.supports("notifications"))
        try {
            return await O.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            M.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function G(e) {
    return `discord://${location.host}${e}`;
}
async function F() {
    let e = await U();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function V(e, t) {
    return (0, g.A)(t ?? m.A.getSoundpack())[e] ?? e;
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await F())
        try {
            await O.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: V(e, n) });
            return;
        } catch (e) {
            M.warn("Native notification sound failed with error: ", e);
        }
    (0, E.Ak)(e, t, void 0, n, { trackNotificationFailure: !0 });
}
let j = r().throttle(B, 1e3, { leading: !0 });
function H() {
    O.Ay.flashFrame(!1);
}
D && (window.addEventListener("focus", H), O.Ay.on("MAIN_WINDOW_FOCUS", H));
let Y = window.Notification;
if (L) {
    let e = {};
    O.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        O.Ay.send("NOTIFICATIONS_CLEAR"),
        (Y = class {
            static permission = "granted";
            static _id = 0;
            id = Y._id++;
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
                    ? (M.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (M.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    O.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], O.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let W = {};
if (l.A?.features.supports("notifications")) {
    try {
        O.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("dismiss" === t) return void delete W[n];
            {
                let e = W[n];
                if ((R.isPlatformEmbedded ? O.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (C.default.track(b.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        C.default.track(b.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
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
                    null != e && (0, d.A)(e);
                }
            }
        }),
            O.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        M.warn("Native notification setup failed with error: ", e);
    }
    l.A?.features.supports("notifications_provisional") &&
        $().then((e) => {
            e || O.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function K() {
    if (l.A?.features.supports("notifications")) {
        let e = await U();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != Y && "granted" === Y.permission;
}
async function $() {
    return l.A?.features.supports("notifications")
        ? (await U())?.authorizationStatus !== "undetermined"
        : null != Y && "default" !== Y.permission;
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? j(e, t, n) : B(e, t, n);
}
async function q(e, t, n, i, r) {
    var s, a;
    let o,
        l,
        c = await U(),
        d = c?.authorizationStatus === "authorized" || c?.authorizationStatus === "provisional",
        _ = null != c ? d : await K(),
        E = S.A.disableNotifications && null == r.overrideStreamerMode,
        m = !R.isPlatformEmbedded || ((0, R.isMac)() && d) || O.Ay.shouldDisplayNotifications(),
        g = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((i.banner = await (0, f.N)()), !(!E && _ && m))) {
        x("suppressed", E ? "streamer_mode" : _ ? "os_disabled" : "permission_denied"),
            null != r.sound &&
                !1 !== r.playSoundIfDisabled &&
                (z(r.sound, r.volume ?? 1, r.soundpack),
                (i.ping = !0),
                r.omitViewTracking || C.default.track(b.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i }));
        return;
    }
    t.includes("\0") && (M.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (M.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let L = r?.tag ?? null,
        G = d && c?.sound === !0 && c?.authorizationStatus === "authorized";
    function F(e, t) {
        r.onShown?.(),
            r.omitViewTracking ||
                (C.default.track(b.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                C.default.track(b.HAw.NOTIFICATION_VIEWED, g)),
            k && setTimeout(() => e.close(), 5e3);
    }
    null == r.sound || G || (z(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
        r.isUserAvatar &&
            null != e &&
            (e = await ((s = e),
            ((l = new Image()).src = s),
            (l.crossOrigin = "anonymous"),
            new Promise((e) => {
                (l.onload = () => {
                    var t;
                    let n, i, r, s;
                    "" !== l.src &&
                        e(
                            ((i = (n = document.createElement("canvas")).getContext("2d")),
                            (n.width = r = Math.min(l.width, l.height)),
                            (n.height = r),
                            null != i &&
                                ((t = i).beginPath(),
                                t.arc(r / 2, r / 2, r / 2, 0, 2 * Math.PI),
                                t.closePath(),
                                t.clip(),
                                t.drawImage(l, 0, 0, r, r, 0, 0, r, r),
                                (i = t)),
                            (s = n.toDataURL()),
                            n.remove(),
                            s),
                        );
                }),
                    (l.onerror = () => {
                        e(l.src);
                    });
            }))),
        D && I.A.taskbarFlash && O.Ay.flashFrame(!0);
    let B = null;
    if (d) {
        let s = { title: t, body: n };
        if (
            (null != e && (s.icon = e),
            r?.sound != null && (s.sound = V(r.sound, r.soundpack)),
            r?.tag != null && (s.identifier = r.tag),
            r?.fallbackDeepLink != null && (s.fallbackDeepLink = r.fallbackDeepLink),
            Array.isArray(r.actions) && (s.actions = r.actions),
            null != r.messageRecord && (0, R.isMac)())
        ) {
            let e = r.messageRecord.channel_id,
                t = r.messageRecord.author;
            s.threadIdentifier = e;
            let n = A.A.getChannel(e);
            null != n && (s.groupName = (0, u.m1)(n, y.default, T.A));
            let i = n?.getGuildId();
            (s.senderIdentifier = t.id),
                (s.senderDisplayName = v.Ay.getName(i, e, t)),
                (s.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                null != r.emoji &&
                    h.getConfig({ location: "showNotification" }).enabled &&
                    (s.emoji = r.emoji.map((e) => ({ url: (0, N._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e =
                ((a = await O.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s)),
                "string" == typeof a ? { identifier: a, delivered: !0 } : a);
            if (e.delivered) {
                let t = e.identifier;
                W[t] = { options: r, trackingProps: i, clickTrackingProps: g };
                let n = {
                    close() {
                        try {
                            O.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t]);
                        } catch (e) {
                            M.warn("Native notification removal failed with error: ", e);
                        }
                    },
                };
                return x("shown", "none", "native"), F(n, i), { notification: n, trackingProps: i };
            }
            B = "native_ipc_error";
        } catch (e) {
            (B = "native_ipc_error"), M.warn("Native notification failed with error: ", e);
        }
    } else if (R.isPlatformEmbedded && ((0, R.isMac)() || (0, R.isWindows)())) {
        let e = await (null == P && (P = O.Ay.invoke("NOTIFICATIONS_GET_MODULE_STATUS").catch(() => null)), P);
        B =
            null == e
                ? "native_status_unknown"
                : "loaded" === e.state
                  ? "native_settings_unreadable"
                  : "native_module_unavailable";
    }
    null != r.sound && d && (z(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
    let j = { icon: e, body: n, tag: L, silent: !0 },
        H = R.isPlatformEmbedded && (0, R.isMac)();
    if (H) {
        let { result: e, reason: t } = p({ embeddedMac: H, constructed: !1, nativeFailureReason: B });
        x(e, t, "html5");
        return;
    }
    try {
        o = new Y(t, j);
    } catch (n) {
        let { result: e, reason: t } = p({ embeddedMac: H, constructed: !1, nativeFailureReason: B });
        x(e, t, "html5");
        return;
    }
    let { result: $, reason: q } = p({ embeddedMac: H, constructed: !0, nativeFailureReason: B });
    return (x($, q, "html5"),
    F(o, i),
    (o.onclick = (e) => {
        R.isPlatformEmbedded ? O.Ay.focus() : (window.focus(), o.close()),
            r.omitClickTracking ||
                (C.default.track(b.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                C.default.track(b.HAw.NOTIFICATION_CLICKED, g)),
            r.onClick?.("");
    }),
    w)
        ? { notification: o, trackingProps: i }
        : {
              notification: {
                  close() {
                      o?.onclose?.();
                  },
              },
              trackingProps: i,
          };
}
let Z = {
    hasPermission: K,
    requestPermission: function (e) {
        if (l.A?.features.supports("notifications"))
            try {
                O.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
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
        null != Y &&
            Y.requestPermission(async () => {
                null != e && e(await K());
            });
    },
    showNotification: q,
    playNotificationSound: B,
};
