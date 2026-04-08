n.d(t, { A: () => D }), n(323874), n(14289), n(35956), n(321073);
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(803316),
    r = n(207133),
    a = n(155078),
    o = n(954571),
    c = n(307600),
    d = n(723702),
    u = n(837921),
    E = n(179581),
    A = n(652215),
    p = n(985018);
let m = /^(tel|sms|mailto):([^?;]+)/,
    f = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    g = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i;
function D(e, t, n, D) {
    let _ = (0, r.A)(n?.getChannelId());
    if (!d.isPlatformEmbedded || null == e || "" === e || _ || D?.shouldHideMediaOptions === !0 || !(0, l.fW)(e))
        return null;
    let I = (0, a.E)(e),
        S = (e) => {
            o.default.track(A.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: I, ...(0, E.N)() }),
                u.Ay.copy(e),
                (0, s.showToast)((0, s.createToast)(p.intl.string(p.t["L/PwZf"]), s.ToastType.SUCCESS));
        },
        h = (n, i) => {
            let s = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(A.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: I, ...(0, E.N)() }),
                (0, c.h)({ href: s, trusted: (0, c.m)(e, t), shouldConfirm: !0 }, n);
        },
        N = [],
        y = e.match(m);
    if (null != y) {
        let e = p.intl.string("mailto" === y[1] ? p.t.ZYLVKo : p.t["3zozoR"]);
        N.push(
            (0, i.jsx)(
                s.Drp,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        S(y[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === y[1] &&
                N.push(
                    (0, i.jsx)(
                        s.Drp,
                        { id: "native-send-sms", label: p.intl.string(p.t["+wbjMW"]), action: (e) => h(e, !0) },
                        "native-send-sms",
                    ),
                );
    }
    let O = (function (e) {
            try {
                let t = new URL(e);
                return "cdn.discordapp.com" === t.hostname && f.test(t.pathname);
            } catch {
                return !1;
            }
        })(e),
        L =
            !O &&
            (function (e) {
                try {
                    return g.test(new URL(e).pathname);
                } catch {
                    return !1;
                }
            })(e),
        M = O ? p.t["8xHmxo"] : L ? p.t["92CPQ+"] : p.t.WqhZss,
        v = O ? p.t.w8ldGK : L ? p.t.q5FbIB : p.t.wuRE8M;
    return [
        (0, i.jsx)(
            s.Drp,
            {
                id: "copy-native-link",
                label: p.intl.string(M),
                leadingAccessory: { type: "icon", icon: s.qYV },
                action: () => {
                    S(e);
                },
            },
            "copy-native-link",
        ),
        ...N,
        (0, i.jsx)(
            s.Drp,
            {
                id: "open-native-link",
                label: p.intl.string(v),
                leadingAccessory: { type: "icon", icon: s.WxK },
                trailingIndicator: { type: "icon", icon: s.I9m },
                action: (e) => h(e),
            },
            "open-native-link",
        ),
    ];
}
