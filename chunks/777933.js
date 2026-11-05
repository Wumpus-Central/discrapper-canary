(e(323874), e(14289), e(35956), e(321073));
var i = e(477900);
e(582128);
var l = e(858899),
    a = e(477782),
    c = e(173936),
    r = e(93688),
    o = e(509434),
    s = e(803316),
    u = e(207133),
    d = e(253932),
    p = e(155078),
    h = e(129230),
    m = e(889558),
    f = e(723702),
    g = e(253400),
    v = e(179581),
    y = e(652215),
    w = e(792996);
let b = /^(tel|sms|mailto):([^?;]+)/,
    k = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    _ = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    E = /^\/emojis\/\d+\./;
e.d(
    n,
    {},
    {
        A: function (t, n, e, C) {
            let I = (0, u.A)(e?.getChannelId()),
                N = d.Q_.useSetting();
            if (
                !f.isPlatformEmbedded ||
                null == t ||
                "" === t ||
                (!N &&
                    (function (t) {
                        try {
                            return E.test(new URL(t).pathname);
                        } catch {
                            return !1;
                        }
                    })(t)) ||
                I ||
                C?.shouldHideMediaOptions === !0 ||
                !(0, s.fW)(t)
            )
                return null;
            let j = (0, p.E)(t);
            function L(t) {
                (h.default.track(y.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: j, ...(0, v.N)() }),
                    g.Ay.copy(t),
                    (0, l.P0)({ text: w.intl.string(w.t["L/PwZf"]), variant: "success" }));
            }
            function x(e, i) {
                if (null == t) return;
                let l = !0 === i ? t.replace("tel:", "sms:") : t;
                (h.default.track(y.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: j, ...(0, v.N)() }),
                    (0, m.h)({ href: l, trusted: (0, m.m)(t, n), shouldConfirm: !0 }, e));
            }
            let A = [],
                D = t.match(b);
            if (null != D) {
                let t = w.intl.string("mailto" === D[1] ? w.t.ZYLVKo : w.t["3zozoR"]);
                (A.push(
                    (0, i.jsx)(
                        a.Dr,
                        {
                            id: "copy-native-contact",
                            label: t,
                            action: function () {
                                null != D && L(D[2]);
                            },
                        },
                        "copy-native-contact",
                    ),
                ),
                    "tel" === D[1] &&
                        A.push(
                            (0, i.jsx)(
                                a.Dr,
                                { id: "native-send-sms", label: w.intl.string(w.t["+wbjMW"]), action: (t) => x(t, !0) },
                                "native-send-sms",
                            ),
                        ));
            }
            let P = (function (t) {
                    try {
                        let n = new URL(t);
                        return "cdn.discordapp.com" === n.hostname && k.test(n.pathname);
                    } catch {
                        return !1;
                    }
                })(t),
                M =
                    !P &&
                    (function (t) {
                        try {
                            return _.test(new URL(t).pathname);
                        } catch {
                            return !1;
                        }
                    })(t),
                O = P ? w.t["8xHmxo"] : M ? w.t["92CPQ+"] : w.t.WqhZss,
                R = P ? w.t.w8ldGK : M ? w.t.q5FbIB : w.t.wuRE8M;
            return [
                (0, i.jsx)(
                    a.Dr,
                    {
                        id: "copy-native-link",
                        label: w.intl.string(O),
                        leadingAccessory: { type: "icon", icon: c.LinkIcon },
                        action: function () {
                            null != t && L(t);
                        },
                    },
                    "copy-native-link",
                ),
                ...A,
                (0, i.jsx)(
                    a.Dr,
                    {
                        id: "open-native-link",
                        label: w.intl.string(R),
                        leadingAccessory: { type: "icon", icon: r.BrowserIcon },
                        trailingIndicator: { type: "icon", icon: o.LinkExternalSmallIcon },
                        action: (t) => x(t),
                    },
                    "open-native-link",
                ),
            ];
        },
    },
);
