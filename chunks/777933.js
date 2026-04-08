n.d(t, { A: () => I }), n(323874), n(14289), n(35956), n(321073);
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(803316),
    r = n(207133),
    a = n(253932),
    o = n(155078),
    c = n(954571),
    d = n(307600),
    u = n(723702),
    E = n(837921),
    A = n(179581),
    p = n(652215),
    m = n(985018);
let f = /^(tel|sms|mailto):([^?;]+)/,
    g = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    D = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    _ = /^\/emojis\/\d+\./;
function I(e, t, n, I) {
    let h = (0, r.A)(n?.getChannelId()),
        S = a.Q_.useSetting();
    if (
        !u.isPlatformEmbedded ||
        null == e ||
        "" === e ||
        (!S &&
            (function (e) {
                try {
                    return _.test(new URL(e).pathname);
                } catch {
                    return !1;
                }
            })(e)) ||
        h ||
        I?.shouldHideMediaOptions === !0 ||
        !(0, l.fW)(e)
    )
        return null;
    let N = (0, o.E)(e),
        y = (e) => {
            c.default.track(p.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: N, ...(0, A.N)() }),
                E.Ay.copy(e),
                (0, s.showToast)((0, s.createToast)(m.intl.string(m.t["L/PwZf"]), s.ToastType.SUCCESS));
        },
        L = (n, i) => {
            let s = !0 === i ? e.replace("tel:", "sms:") : e;
            c.default.track(p.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: N, ...(0, A.N)() }),
                (0, d.h)({ href: s, trusted: (0, d.m)(e, t), shouldConfirm: !0 }, n);
        },
        O = [],
        M = e.match(f);
    if (null != M) {
        let e = m.intl.string("mailto" === M[1] ? m.t.ZYLVKo : m.t["3zozoR"]);
        O.push(
            (0, i.jsx)(
                s.Drp,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        y(M[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === M[1] &&
                O.push(
                    (0, i.jsx)(
                        s.Drp,
                        { id: "native-send-sms", label: m.intl.string(m.t["+wbjMW"]), action: (e) => L(e, !0) },
                        "native-send-sms",
                    ),
                );
    }
    let v = (function (e) {
            try {
                let t = new URL(e);
                return "cdn.discordapp.com" === t.hostname && g.test(t.pathname);
            } catch {
                return !1;
            }
        })(e),
        C =
            !v &&
            (function (e) {
                try {
                    return D.test(new URL(e).pathname);
                } catch {
                    return !1;
                }
            })(e),
        T = v ? m.t["8xHmxo"] : C ? m.t["92CPQ+"] : m.t.WqhZss,
        b = v ? m.t.w8ldGK : C ? m.t.q5FbIB : m.t.wuRE8M;
    return [
        (0, i.jsx)(
            s.Drp,
            {
                id: "copy-native-link",
                label: m.intl.string(T),
                leadingAccessory: { type: "icon", icon: s.qYV },
                action: () => {
                    y(e);
                },
            },
            "copy-native-link",
        ),
        ...O,
        (0, i.jsx)(
            s.Drp,
            {
                id: "open-native-link",
                label: m.intl.string(b),
                leadingAccessory: { type: "icon", icon: s.WxK },
                trailingIndicator: { type: "icon", icon: s.I9m },
                action: (e) => L(e),
            },
            "open-native-link",
        ),
    ];
}
