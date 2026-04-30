"use strict";
n.d(t, { A: () => W, I: () => M }), n(323874), n(14289), n(35956), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(481613),
    a = n.n(s),
    o = n(77729),
    l = n(47167),
    u = n(626584),
    c = n(741231);
let d = (0, n(240921).Ay)({
    kind: "user",
    name: "2025-10-desktop-communication-notifications-emoji",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(105613),
    f = n(400492),
    h = n(312671),
    p = n(458640),
    E = n(734057),
    m = n(803224),
    g = n(994500),
    A = n(351906),
    I = n(287809),
    T = n(174459),
    S = n(486020),
    N = n(562153),
    y = n(723702),
    C = n(19575),
    v = n(652215);
let O = y.isPlatformEmbedded && (0, y.isWindows)(),
    R = O && 10 > parseFloat(o.A.os.release),
    b = !0;
if (O && !R) {
    let [e, , t] = o.A.os.release.split(".");
    b = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let D = new u.A("NotificationUtils"),
    L =
        (O && b) ||
        ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
        ("Firefox" === a().name && 52 > parseFloat(a().version));
async function w() {
    if (o.A?.features.supports("notifications"))
        try {
            return await C.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            D.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function M(e) {
    return `discord://${location.host}${e}`;
}
async function P() {
    let e = await w();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function x(e, t) {
    return (0, p.A)(t ?? h.A.getSoundpack())[e] ?? e;
}
async function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await P())
        try {
            await C.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: x(e, n) });
            return;
        } catch (e) {
            D.warn("Native notification sound failed with error: ", e);
        }
    (0, f.Ak)(e, t, void 0, n);
}
let k = r().throttle(U, 1e3, { leading: !0 });
function G() {
    C.Ay.flashFrame(!1);
}
O && (window.addEventListener("focus", G), C.Ay.on("MAIN_WINDOW_FOCUS", G));
let F = window.Notification;
if (R) {
    let e = {};
    C.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        C.Ay.send("NOTIFICATIONS_CLEAR"),
        (F = class {
            static permission = "granted";
            static _id = 0;
            id = F._id++;
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
                    ? (D.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (D.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    C.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], C.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let V = {};
if (o.A?.features.supports("notifications")) {
    try {
        C.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("dismiss" === t) return void delete V[n];
            {
                let e = V[n];
                if ((y.isPlatformEmbedded ? C.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        T.default.track(v.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
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
                    null != e && (0, c.A)(e);
                }
            }
        }),
            C.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        D.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        H().then((e) => {
            e || C.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function B() {
    if (o.A?.features.supports("notifications")) {
        let e = await w();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != F && "granted" === F.permission;
}
async function H() {
    return o.A?.features.supports("notifications")
        ? (await w())?.authorizationStatus !== "undetermined"
        : null != F && "default" !== F.permission;
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? k(e, t, n) : U(e, t, n);
}
async function Y(e, t, n, i, r) {
    var s;
    let a,
        o,
        u = await w(),
        c = u?.authorizationStatus === "authorized" || u?.authorizationStatus === "provisional",
        f = null != u ? c : await B(),
        h = A.A.disableNotifications && null == r.overrideStreamerMode,
        p = !y.isPlatformEmbedded || ((0, y.isMac)() && c) || C.Ay.shouldDisplayNotifications(),
        R = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((i.banner = await (0, _.N)()), !(!h && f && p))) {
        null != r.sound &&
            !1 !== r.playSoundIfDisabled &&
            (j(r.sound, r.volume ?? 1, r.soundpack),
            (i.ping = !0),
            r.omitViewTracking || T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i }));
        return;
    }
    t.includes("\0") && (D.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (D.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let M = r?.tag ?? null,
        P = c && u?.sound === !0 && u?.authorizationStatus === "authorized",
        U = (e, t) => {
            r.onShown?.(),
                r.omitViewTracking ||
                    (T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                    T.default.track(v.HAw.NOTIFICATION_VIEWED, R)),
                L && setTimeout(() => e.close(), 5e3);
        };
    if (
        (null == r.sound || P || (j(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
        r.isUserAvatar &&
            null != e &&
            (e = await ((s = e),
            ((o = new Image()).src = s),
            (o.crossOrigin = "anonymous"),
            new Promise((e) => {
                (o.onload = () => {
                    var t;
                    let n, i, r, s;
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
                            (s = n.toDataURL()),
                            n.remove(),
                            s),
                        );
                }),
                    (o.onerror = () => {
                        e(o.src);
                    });
            }))),
        O && m.A.taskbarFlash && C.Ay.flashFrame(!0),
        c)
    ) {
        let s = { title: t, body: n };
        if (
            (null != e && (s.icon = e),
            r?.sound != null && (s.sound = x(r.sound, r.soundpack)),
            r?.tag != null && (s.identifier = r.tag),
            r?.fallbackDeepLink != null && (s.fallbackDeepLink = r.fallbackDeepLink),
            Array.isArray(r.actions) && (s.actions = r.actions),
            null != r.messageRecord && (0, y.isMac)())
        ) {
            let e = r.messageRecord.channel_id,
                t = r.messageRecord.author;
            s.threadIdentifier = e;
            let n = E.A.getChannel(e);
            null != n && (s.groupName = (0, l.m1)(n, I.default, g.A));
            let i = n?.getGuildId();
            (s.senderIdentifier = t.id),
                (s.senderDisplayName = N.Ay.getName(i, e, t)),
                (s.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                null != r.emoji &&
                    d.getConfig({ location: "showNotification" }).enabled &&
                    (s.emoji = r.emoji.map((e) => ({ url: (0, S._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e = await C.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s);
            V[e] = { options: r, trackingProps: i, clickTrackingProps: R };
            let t = {
                close() {
                    try {
                        C.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        D.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return U(t, i), { notification: t, trackingProps: i };
        } catch (e) {
            D.warn("Native notification failed with error: ", e);
        }
    }
    null != r.sound && c && (j(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
    let k = { icon: e, body: n, tag: M, silent: !0 };
    try {
        a = new F(t, k);
    } catch (e) {
        return;
    }
    return (U(a, i),
    (a.onclick = (e) => {
        y.isPlatformEmbedded ? C.Ay.focus() : (window.focus(), a.close()),
            r.omitClickTracking ||
                (T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                T.default.track(v.HAw.NOTIFICATION_CLICKED, R)),
            r.onClick?.("");
    }),
    b)
        ? { notification: a, trackingProps: i }
        : {
              notification: {
                  close() {
                      a?.onclose?.();
                  },
              },
              trackingProps: i,
          };
}
let W = {
    hasPermission: B,
    requestPermission: function (e) {
        if (o.A?.features.supports("notifications"))
            try {
                C.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    });
                return;
            } catch (e) {
                D.warn("Native notification authorization failed with error: ", e);
            }
        null != F &&
            F.requestPermission(async () => {
                null != e && e(await B());
            });
    },
    showNotification: Y,
    playNotificationSound: U,
};
