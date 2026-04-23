l.d(t, { A: () => E });
var a = l(627968);
l(64700);
var n = l(231723),
    i = l(351966),
    r = l(950191),
    s = l(718019),
    o = l(31432),
    u = l(915614),
    d = l(946356),
    _ = l(810396),
    c = l(159218),
    A = l(562153),
    T = l(996988),
    h = l(985018),
    g = l(823788);
function E(e) {
    let { user: t, previewText: l, previewEmoji: E, previewStatus: p, placeHolderText: m, transitionState: O } = e,
        S = (0, r.Ay)(t.id),
        N =
            (null != l && "" !== l) || null != E
                ? h.intl.formatToPlainString(h.t.UpF5Qa, { emoji: E?.name ?? "", status: l })
                : `${h.intl.string(h.t.EVV6uZ)}: ${m}`;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": N,
        children: (0, a.jsxs)(d.A, {
            user: t,
            displayProfile: S,
            themeType: T.d.POPOUT,
            className: g.ti,
            "aria-hidden": "true",
            children: [
                (0, a.jsxs)("header", {
                    children: [
                        (0, a.jsx)(u.A, { user: t, displayProfile: S, themeType: T.d.POPOUT }),
                        (0, a.jsx)("div", {
                            inert: !0,
                            children: (0, a.jsx)(s.A, {
                                user: t,
                                displayProfile: S,
                                themeType: T.d.POPOUT,
                                previewStatus: p,
                                className: g.my,
                            }),
                        }),
                        (0, a.jsx)(c.A, {
                            user: t,
                            themeType: T.d.POPOUT,
                            previewText: l,
                            previewEmoji: E,
                            placeholderText: m,
                            hasEntered: O === n.ip.ENTERED,
                        }),
                    ],
                }),
                S?.profileEffect != null && (0, a.jsx)(i.A, { skuId: S.profileEffect.skuId }),
                (0, a.jsx)("div", {
                    className: g.QV,
                    inert: !0,
                    children: (0, a.jsx)(_.A, {
                        user: t,
                        nickname: A.Ay.getName(null, null, t),
                        pronouns: S?.pronouns,
                        tags: (0, a.jsx)(o.A, { displayProfile: S, themeType: T.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
