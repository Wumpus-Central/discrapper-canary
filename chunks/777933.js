(e.d(n, { A: () => E }), e(323874), e(14289), e(35956), e(321073));
var i = e(477900);
e(582128);
var l = e(376357),
    a = e(477782),
    c = e(173936),
    o = e(93688),
    r = e(509434),
    s = e(803316),
    u = e(207133),
    d = e(885386),
    p = e(155078),
    h = e(174459),
    m = e(123917),
    f = e(723702),
    g = e(19575),
    v = e(179581),
    y = e(652215),
    b = e(660183);
let w = /^(tel|sms|mailto):([^?;]+)/,
    C = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    k = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    _ = /^\/emojis\/\d+\./;
function E(t, n, e, E) {
    let N = (0, u.A)(e?.getChannelId()),
        j = d.Q_.useSetting();
    if (
        !f.isPlatformEmbedded ||
        null == t ||
        "" === t ||
        (!j &&
            (function (t) {
                try {
                    return _.test(new URL(t).pathname);
                } catch {
                    return !1;
                }
            })(t)) ||
        N ||
        E?.shouldHideMediaOptions === !0 ||
        !(0, s.fW)(t)
    )
        return null;
    let I = (0, p.E)(t);
    function A(t) {
        (h.default.track(y.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: I, ...(0, v.N)() }),
            g.Ay.copy(t),
            (0, l.P0)((0, l.ox)(b.intl.string(b.t["L/PwZf"]), l.Ck.SUCCESS)));
    }
    function L(e, i) {
        if (null == t) return;
        let l = !0 === i ? t.replace("tel:", "sms:") : t;
        (h.default.track(y.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: I, ...(0, v.N)() }),
            (0, m.h)({ href: l, trusted: (0, m.m)(t, n), shouldConfirm: !0 }, e));
    }
    let x = [],
        D = t.match(w);
    if (null != D) {
        let t = b.intl.string("mailto" === D[1] ? b.t.ZYLVKo : b.t["3zozoR"]);
        (x.push(
            (0, i.jsx)(
                a.Dr,
                {
                    id: "copy-native-contact",
                    label: t,
                    action: function () {
                        null != D && A(D[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === D[1] &&
                x.push(
                    (0, i.jsx)(
                        a.Dr,
                        { id: "native-send-sms", label: b.intl.string(b.t["+wbjMW"]), action: (t) => L(t, !0) },
                        "native-send-sms",
                    ),
                ));
    }
    let P = (function (t) {
            try {
                let n = new URL(t);
                return "cdn.discordapp.com" === n.hostname && C.test(n.pathname);
            } catch {
                return !1;
            }
        })(t),
        U =
            !P &&
            (function (t) {
                try {
                    return k.test(new URL(t).pathname);
                } catch {
                    return !1;
                }
            })(t),
        M = P ? b.t["8xHmxo"] : U ? b.t["92CPQ+"] : b.t.WqhZss,
        O = P ? b.t.w8ldGK : U ? b.t.q5FbIB : b.t.wuRE8M;
    return [
        (0, i.jsx)(
            a.Dr,
            {
                id: "copy-native-link",
                label: b.intl.string(M),
                leadingAccessory: { type: "icon", icon: c.LinkIcon },
                action: function () {
                    null != t && A(t);
                },
            },
            "copy-native-link",
        ),
        ...x,
        (0, i.jsx)(
            a.Dr,
            {
                id: "open-native-link",
                label: b.intl.string(O),
                leadingAccessory: { type: "icon", icon: o.W },
                trailingIndicator: { type: "icon", icon: r.I },
                action: (t) => L(t),
            },
            "open-native-link",
        ),
    ];
}
