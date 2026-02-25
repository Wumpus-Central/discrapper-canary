n.d(t, { A: () => g }), n(321073);
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(803316),
    r = n(207133),
    a = n(155078),
    o = n(954571),
    c = n(307600),
    d = n(723702),
    u = n(837921),
    E = n(179581),
    A = n(652215),
    m = n(985018);
let p = /^(tel|sms|mailto):([^?;]+)/;
function g(e, t, n, g) {
    let f = (0, r.A)(n?.getChannelId());
    if (!d.isPlatformEmbedded || null == e || "" === e || f || g?.shouldHideMediaOptions === !0 || !(0, s.fW)(e))
        return null;
    let D = (0, a.E)(e),
        _ = (e) => {
            o.default.track(A.HAw.CONTEXT_MENU_LINK_COPIED, { hostname: D, ...(0, E.N)() }),
                u.Ay.copy(e),
                (0, l.showToast)((0, l.createToast)(m.intl.string(m.t["L/PwZf"]), l.ToastType.SUCCESS));
        },
        I = (n, i) => {
            let l = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(A.HAw.CONTEXT_MENU_LINK_OPENED, { hostname: D, ...(0, E.N)() }),
                (0, c.h)({ href: l, trusted: (0, c.m)(e, t), shouldConfirm: !0 }, n);
        },
        S = [],
        h = e.match(p);
    if (null != h) {
        let e = m.intl.string("mailto" === h[1] ? m.t.ZYLVKo : m.t["3zozoR"]);
        S.push(
            (0, i.jsx)(
                l.Drp,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        _(h[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === h[1] &&
                S.push(
                    (0, i.jsx)(
                        l.Drp,
                        { id: "native-send-sms", label: m.intl.string(m.t["+wbjMW"]), action: (e) => I(e, !0) },
                        "native-send-sms",
                    ),
                );
    }
    return [
        (0, i.jsx)(
            l.Drp,
            {
                id: "copy-native-link",
                label: m.intl.string(m.t.WqhZss),
                leadingAccessory: { type: "icon", icon: l.qYV },
                action: () => {
                    _(e);
                },
            },
            "copy-native-link",
        ),
        ...S,
        (0, i.jsx)(
            l.Drp,
            {
                id: "open-native-link",
                label: m.intl.string(m.t.wuRE8M),
                leadingAccessory: { type: "icon", icon: l.WxK },
                trailingIndicator: { type: "icon", icon: l.I9m },
                action: (e) => I(e),
            },
            "open-native-link",
        ),
    ];
}
