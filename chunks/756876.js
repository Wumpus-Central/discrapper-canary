"use strict";
n.d(t, { A: () => Y, I: () => P }), n(323874), n(14289), n(35956), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(481613),
    a = n.n(s),
    o = n(77729),
    l = n(47167),
    d = n(626584),
    _ = n(22007);
let u = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-10-desktop-communication-notifications-emoji",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var c = n(105613),
    E = n(400492),
    h = n(312671),
    m = n(458640),
    f = n(734057),
    g = n(803224),
    p = n(994500),
    A = n(351906),
    I = n(287809),
    T = n(954571),
    S = n(486020),
    N = n(562153),
    C = n(723702),
    R = n(19575),
    O = n(652215);
let y = C.isPlatformEmbedded && (0, C.isWindows)(),
    v = y && 10 > parseFloat(o.A.os.release),
    D = !0;
if (y && !v) {
    let [e, , t] = o.A.os.release.split(".");
    D = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let L = new d.A("NotificationUtils"),
    b =
        (y && D) ||
        ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
        ("Firefox" === a().name && 52 > parseFloat(a().version));
async function w() {
    if (o.A?.features.supports("notifications"))
        try {
            return await R.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            L.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function P(e) {
    return `discord://${location.host}${e}`;
}
async function k() {
    let e = await w();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function M(e, t) {
    return (0, m.A)(t ?? h.A.getSoundpack())[e] ?? e;
}
async function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await k())
        try {
            await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: M(e, n) });
            return;
        } catch (e) {
            L.warn("Native notification sound failed with error: ", e);
        }
    (0, E.Ak)(e, t, void 0, n);
}
let x = r().throttle(U, 1e3, { leading: !0 });
function G() {
    R.Ay.flashFrame(!1);
}
y && (window.addEventListener("focus", G), R.Ay.on("MAIN_WINDOW_FOCUS", G));
let V = window.Notification;
if (v) {
    let e = {};
    R.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        R.Ay.send("NOTIFICATIONS_CLEAR"),
        (V = class {
            static permission = "granted";
            static _id = 0;
            id = V._id++;
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
                    ? (L.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (L.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    R.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], R.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let F = {};
if (o.A?.features.supports("notifications")) {
    try {
        R.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("dismiss" === t) return void delete F[n];
            {
                let e = F[n];
                if ((C.isPlatformEmbedded ? R.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (T.default.track(O.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        T.default.track(O.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
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
                    null != e && (0, _.A)(e);
                }
            }
        }),
            R.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        L.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        H().then((e) => {
            e || R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function B() {
    if (o.A?.features.supports("notifications")) {
        let e = await w();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != V && "granted" === V.permission;
}
async function H() {
    return o.A?.features.supports("notifications")
        ? (await w())?.authorizationStatus !== "undetermined"
        : null != V && "default" !== V.permission;
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? x(e, t, n) : U(e, t, n);
}
async function W(e, t, n, i, r) {
    var s;
    let a,
        o,
        d = await w(),
        _ = d?.authorizationStatus === "authorized" || d?.authorizationStatus === "provisional",
        E = null != d ? _ : await B(),
        h = A.A.disableNotifications && null == r.overrideStreamerMode,
        m = !C.isPlatformEmbedded || ((0, C.isMac)() && _) || R.Ay.shouldDisplayNotifications(),
        v = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((i.banner = await (0, c.N)()), !(!h && E && m))) {
        null != r.sound &&
            !1 !== r.playSoundIfDisabled &&
            (j(r.sound, r.volume ?? 1, r.soundpack),
            (i.ping = !0),
            r.omitViewTracking || T.default.track(O.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i }));
        return;
    }
    t.includes("\0") && (L.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (L.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let P = r?.tag ?? null,
        k = _ && d?.sound === !0 && d?.authorizationStatus === "authorized",
        U = (e, t) => {
            r.onShown?.(),
                r.omitViewTracking ||
                    (T.default.track(O.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                    T.default.track(O.HAw.NOTIFICATION_VIEWED, v)),
                b && setTimeout(() => e.close(), 5e3);
        };
    if (
        (null == r.sound || k || (j(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
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
        y && g.A.taskbarFlash && R.Ay.flashFrame(!0),
        _)
    ) {
        let s = { title: t, body: n };
        if (
            (null != e && (s.icon = e),
            r?.sound != null && (s.sound = M(r.sound, r.soundpack)),
            r?.tag != null && (s.identifier = r.tag),
            r?.fallbackDeepLink != null && (s.fallbackDeepLink = r.fallbackDeepLink),
            Array.isArray(r.actions) && (s.actions = r.actions),
            null != r.messageRecord && (0, C.isMac)())
        ) {
            let e = r.messageRecord.channel_id,
                t = r.messageRecord.author;
            s.threadIdentifier = e;
            let n = f.A.getChannel(e);
            null != n && (s.groupName = (0, l.m1)(n, I.default, p.A));
            let i = n?.getGuildId();
            (s.senderIdentifier = t.id),
                (s.senderDisplayName = N.Ay.getName(i, e, t)),
                (s.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                null != r.emoji &&
                    u.getConfig({ location: "showNotification" }).enabled &&
                    (s.emoji = r.emoji.map((e) => ({ url: (0, S._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e = await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s);
            F[e] = { options: r, trackingProps: i, clickTrackingProps: v };
            let t = {
                close() {
                    try {
                        R.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        L.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return U(t, i), { notification: t, trackingProps: i };
        } catch (e) {
            L.warn("Native notification failed with error: ", e);
        }
    }
    null != r.sound && _ && (j(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
    let x = { icon: e, body: n, tag: P, silent: !0 };
    try {
        a = new V(t, x);
    } catch (e) {
        return;
    }
    return (U(a, i),
    (a.onclick = (e) => {
        C.isPlatformEmbedded ? R.Ay.focus() : (window.focus(), a.close()),
            r.omitClickTracking ||
                (T.default.track(O.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                T.default.track(O.HAw.NOTIFICATION_CLICKED, v)),
            r.onClick?.("");
    }),
    D)
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
let Y = {
    hasPermission: B,
    requestPermission: function (e) {
        if (o.A?.features.supports("notifications"))
            try {
                R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    });
                return;
            } catch (e) {
                L.warn("Native notification authorization failed with error: ", e);
            }
        null != V &&
            V.requestPermission(async () => {
                null != e && e(await B());
            });
    },
    showNotification: W,
    playNotificationSound: U,
};
