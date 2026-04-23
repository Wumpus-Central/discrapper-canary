n.d(e, { A: () => T }), n(323874), n(14289), n(35956), n(321073);
var a = n(627968);
n(64700);
var i = n(691540),
    r = n(857250),
    l = n(97483),
    s = n(477782),
    o = n(173936),
    c = n(93688),
    d = n(509434),
    u = n(803316),
    h = n(207133),
    p = n(253932),
    g = n(155078),
    m = n(954571),
    f = n(76843),
    A = n(723702),
    v = n(19575),
    E = n(179581),
    y = n(652215),
    C = n(985018);
let _ = /^(tel|sms|mailto):([^?;]+)/,
    w = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    N = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    I = /^\/emojis\/\d+\./;
function T(t, e, n, T) {
    let x = (0, h.A)(n?.getChannelId()),
        P = p.Q_.useSetting();
    if (
        !A.isPlatformEmbedded ||
        null == t ||
        "" === t ||
        (!P &&
            (function (t) {
                try {
                    return I.test(new URL(t).pathname);
                } catch {
                    return !1;
                }
            })(t)) ||
        x ||
        T?.shouldHideMediaOptions === !0 ||
        !(0, u.fW)(t)
    )
        return null;
    let b = (0, g.E)(t),
        D = (t) => {
            m.default.track(y.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: b, ...(0, E.N)() }),
                v.Ay.copy(t),
                (0, i.P0)((0, r.o)(C.intl.string(C.t["L/PwZf"]), l.Ck.SUCCESS));
        },
        U = (n, a) => {
            let i = !0 === a ? t.replace("tel:", "sms:") : t;
            m.default.track(y.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: b, ...(0, E.N)() }),
                (0, f.h)({ href: i, trusted: (0, f.m)(t, e), shouldConfirm: !0 }, n);
        },
        O = [],
        S = t.match(_);
    if (null != S) {
        let t = C.intl.string("mailto" === S[1] ? C.t.ZYLVKo : C.t["3zozoR"]);
        O.push(
            (0, a.jsx)(
                s.Dr,
                {
                    id: "copy-native-contact",
                    label: t,
                    action: () => {
                        D(S[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === S[1] &&
                O.push(
                    (0, a.jsx)(
                        s.Dr,
                        { id: "native-send-sms", label: C.intl.string(C.t["+wbjMW"]), action: (t) => U(t, !0) },
                        "native-send-sms",
                    ),
                );
    }
    let j = (function (t) {
            try {
                let e = new URL(t);
                return "cdn.discordapp.com" === e.hostname && w.test(e.pathname);
            } catch {
                return !1;
            }
        })(t),
        M =
            !j &&
            (function (t) {
                try {
                    return N.test(new URL(t).pathname);
                } catch {
                    return !1;
                }
            })(t),
        k = j ? C.t["8xHmxo"] : M ? C.t["92CPQ+"] : C.t.WqhZss,
        L = j ? C.t.w8ldGK : M ? C.t.q5FbIB : C.t.wuRE8M;
    return [
        (0, a.jsx)(
            s.Dr,
            {
                id: "copy-native-link",
                label: C.intl.string(k),
                leadingAccessory: { type: "icon", icon: o.q },
                action: () => {
                    D(t);
                },
            },
            "copy-native-link",
        ),
        ...O,
        (0, a.jsx)(
            s.Dr,
            {
                id: "open-native-link",
                label: C.intl.string(L),
                leadingAccessory: { type: "icon", icon: c.W },
                trailingIndicator: { type: "icon", icon: d.I },
                action: (t) => U(t),
            },
            "open-native-link",
        ),
    ];
}
