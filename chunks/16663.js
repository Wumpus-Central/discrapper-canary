l.d(t, { A: () => E });
var n = l(627968);
l(64700);
var i = l(231723),
    r = l(351966),
    a = l(950191),
    s = l(718019),
    u = l(31432),
    o = l(915614),
    d = l(946356),
    c = l(810396),
    A = l(159218),
    _ = l(562153),
    T = l(996988),
    h = l(985018),
    g = l(823788);
function E(e) {
    let { user: t, previewText: l, previewEmoji: E, previewStatus: O, placeHolderText: m, transitionState: N } = e,
        S = (0, a.Ay)(t.id),
        p =
            (null != l && "" !== l) || null != E
                ? h.intl.formatToPlainString(h.t.UpF5Qa, { emoji: E?.name ?? "", status: l })
                : `${h.intl.string(h.t.EVV6uZ)}: ${m}`;
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": p,
        children: (0, n.jsxs)(d.A, {
            user: t,
            displayProfile: S,
            themeType: T.d.POPOUT,
            className: g.ti,
            "aria-hidden": "true",
            children: [
                (0, n.jsxs)("header", {
                    children: [
                        (0, n.jsx)(o.A, { user: t, displayProfile: S, themeType: T.d.POPOUT }),
                        (0, n.jsx)("div", {
                            inert: !0,
                            children: (0, n.jsx)(s.A, {
                                user: t,
                                displayProfile: S,
                                themeType: T.d.POPOUT,
                                previewStatus: O,
                                className: g.my,
                            }),
                        }),
                        (0, n.jsx)(A.A, {
                            user: t,
                            themeType: T.d.POPOUT,
                            previewText: l,
                            previewEmoji: E,
                            placeholderText: m,
                            hasEntered: N === i.ip.ENTERED,
                        }),
                    ],
                }),
                S?.profileEffect != null && (0, n.jsx)(r.A, { skuId: S.profileEffect.skuId }),
                (0, n.jsx)("div", {
                    className: g.QV,
                    inert: !0,
                    children: (0, n.jsx)(c.A, {
                        user: t,
                        nickname: _.Ay.getName(null, null, t),
                        pronouns: S?.pronouns,
                        tags: (0, n.jsx)(u.A, { displayProfile: S, themeType: T.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
