e.d(n, { A: () => j }), e(323874), e(14289), e(35956), e(321073);
var i = e(627968);
e(64700);
var a = e(691540),
    l = e(857250),
    c = e(97483),
    r = e(477782),
    s = e(173936),
    o = e(93688),
    d = e(509434),
    p = e(803316),
    u = e(207133),
    h = e(885386),
    m = e(155078),
    g = e(174459),
    f = e(123917),
    v = e(723702),
    y = e(19575),
    b = e(179581),
    w = e(652215),
    C = e(375708);
let _ = /^(tel|sms|mailto):([^?;]+)/,
    k = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    E = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    N = /^\/emojis\/\d+\./;
function j(t, n, e, j) {
    let A = (0, u.A)(e?.getChannelId()),
        I = h.Q_.useSetting();
    if (
        !v.isPlatformEmbedded ||
        null == t ||
        "" === t ||
        (!I &&
            (function (t) {
                try {
                    return N.test(new URL(t).pathname);
                } catch {
                    return !1;
                }
            })(t)) ||
        A ||
        j?.shouldHideMediaOptions === !0 ||
        !(0, p.fW)(t)
    )
        return null;
    let L = (0, m.E)(t),
        x = (t) => {
            g.default.track(w.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: L, ...(0, b.N)() }),
                y.Ay.copy(t),
                (0, a.P0)((0, l.o)(C.intl.string(C.t["L/PwZf"]), c.Ck.SUCCESS));
        },
        D = (e, i) => {
            let a = !0 === i ? t.replace("tel:", "sms:") : t;
            g.default.track(w.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: L, ...(0, b.N)() }),
                (0, f.h)({ href: a, trusted: (0, f.m)(t, n), shouldConfirm: !0 }, e);
        },
        P = [],
        U = t.match(_);
    if (null != U) {
        let t = C.intl.string("mailto" === U[1] ? C.t.ZYLVKo : C.t["3zozoR"]);
        P.push(
            (0, i.jsx)(
                r.Dr,
                {
                    id: "copy-native-contact",
                    label: t,
                    action: () => {
                        x(U[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === U[1] &&
                P.push(
                    (0, i.jsx)(
                        r.Dr,
                        { id: "native-send-sms", label: C.intl.string(C.t["+wbjMW"]), action: (t) => D(t, !0) },
                        "native-send-sms",
                    ),
                );
    }
    let M = (function (t) {
            try {
                let n = new URL(t);
                return "cdn.discordapp.com" === n.hostname && k.test(n.pathname);
            } catch {
                return !1;
            }
        })(t),
        O =
            !M &&
            (function (t) {
                try {
                    return E.test(new URL(t).pathname);
                } catch {
                    return !1;
                }
            })(t),
        R = M ? C.t["8xHmxo"] : O ? C.t["92CPQ+"] : C.t.WqhZss,
        S = M ? C.t.w8ldGK : O ? C.t.q5FbIB : C.t.wuRE8M;
    return [
        (0, i.jsx)(
            r.Dr,
            {
                id: "copy-native-link",
                label: C.intl.string(R),
                leadingAccessory: { type: "icon", icon: s.q },
                action: () => {
                    x(t);
                },
            },
            "copy-native-link",
        ),
        ...P,
        (0, i.jsx)(
            r.Dr,
            {
                id: "open-native-link",
                label: C.intl.string(S),
                leadingAccessory: { type: "icon", icon: o.W },
                trailingIndicator: { type: "icon", icon: d.I },
                action: (t) => D(t),
            },
            "open-native-link",
        ),
    ];
}
