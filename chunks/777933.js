n.d(t, { A: () => L }), n(323874), n(14289), n(35956), n(321073);
var i = n(627968);
n(64700);
var s = n(691540),
    l = n(857250),
    r = n(97483),
    a = n(477782),
    c = n(173936),
    o = n(93688),
    d = n(509434),
    u = n(803316),
    E = n(207133),
    A = n(253932),
    m = n(155078),
    g = n(954571),
    p = n(307600),
    f = n(723702),
    h = n(837921),
    D = n(179581),
    _ = n(652215),
    I = n(985018);
let N = /^(tel|sms|mailto):([^?;]+)/,
    v = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    S = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    y = /^\/emojis\/\d+\./;
function L(e, t, n, L) {
    let O = (0, E.A)(n?.getChannelId()),
        M = A.Q_.useSetting();
    if (
        !f.isPlatformEmbedded ||
        null == e ||
        "" === e ||
        (!M &&
            (function (e) {
                try {
                    return y.test(new URL(e).pathname);
                } catch {
                    return !1;
                }
            })(e)) ||
        O ||
        L?.shouldHideMediaOptions === !0 ||
        !(0, u.fW)(e)
    )
        return null;
    let C = (0, m.E)(e),
        w = (e) => {
            g.default.track(_.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: C, ...(0, D.N)() }),
                h.Ay.copy(e),
                (0, s.P0)((0, l.o)(I.intl.string(I.t["L/PwZf"]), r.Ck.SUCCESS));
        },
        x = (n, i) => {
            let s = !0 === i ? e.replace("tel:", "sms:") : e;
            g.default.track(_.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: C, ...(0, D.N)() }),
                (0, p.h)({ href: s, trusted: (0, p.m)(e, t), shouldConfirm: !0 }, n);
        },
        T = [],
        R = e.match(N);
    if (null != R) {
        let e = I.intl.string("mailto" === R[1] ? I.t.ZYLVKo : I.t["3zozoR"]);
        T.push(
            (0, i.jsx)(
                a.Dr,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        w(R[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === R[1] &&
                T.push(
                    (0, i.jsx)(
                        a.Dr,
                        { id: "native-send-sms", label: I.intl.string(I.t["+wbjMW"]), action: (e) => x(e, !0) },
                        "native-send-sms",
                    ),
                );
    }
    let b = (function (e) {
            try {
                let t = new URL(e);
                return "cdn.discordapp.com" === t.hostname && v.test(t.pathname);
            } catch {
                return !1;
            }
        })(e),
        G =
            !b &&
            (function (e) {
                try {
                    return S.test(new URL(e).pathname);
                } catch {
                    return !1;
                }
            })(e),
        P = b ? I.t["8xHmxo"] : G ? I.t["92CPQ+"] : I.t.WqhZss,
        j = b ? I.t.w8ldGK : G ? I.t.q5FbIB : I.t.wuRE8M;
    return [
        (0, i.jsx)(
            a.Dr,
            {
                id: "copy-native-link",
                label: I.intl.string(P),
                leadingAccessory: { type: "icon", icon: c.q },
                action: () => {
                    w(e);
                },
            },
            "copy-native-link",
        ),
        ...T,
        (0, i.jsx)(
            a.Dr,
            {
                id: "open-native-link",
                label: I.intl.string(j),
                leadingAccessory: { type: "icon", icon: o.W },
                trailingIndicator: { type: "icon", icon: d.I },
                action: (e) => x(e),
            },
            "open-native-link",
        ),
    ];
}
