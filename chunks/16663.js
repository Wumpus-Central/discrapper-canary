n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(182592),
    r = n(950191),
    s = n(718019),
    o = n(31432),
    u = n(915614),
    d = n(946356),
    c = n(810396),
    m = n(159218),
    f = n(562153),
    p = n(996988),
    h = n(985018),
    A = n(732201);
function g(e) {
    let { user: t, previewText: n, previewEmoji: g, previewStatus: T, placeHolderText: b, transitionState: S } = e,
        _ = (0, r.Ay)(t.id),
        x =
            (null != n && "" !== n) || null != g
                ? h.intl.formatToPlainString(h.t.UpF5Qa, { emoji: g?.name ?? "", status: n })
                : `${h.intl.string(h.t.EVV6uZ)}: ${b}`;
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": x,
        children: (0, l.jsxs)(d.A, {
            user: t,
            displayProfile: _,
            themeType: p.d.POPOUT,
            className: A.ti,
            "aria-hidden": "true",
            children: [
                (0, l.jsxs)("header", {
                    children: [
                        (0, l.jsx)(u.A, { user: t, displayProfile: _, themeType: p.d.POPOUT }),
                        (0, l.jsx)("div", {
                            inert: !0,
                            children: (0, l.jsx)(s.A, {
                                user: t,
                                displayProfile: _,
                                themeType: p.d.POPOUT,
                                previewStatus: T,
                                className: A.my,
                            }),
                        }),
                        (0, l.jsx)(m.A, {
                            user: t,
                            themeType: p.d.POPOUT,
                            previewText: n,
                            previewEmoji: g,
                            placeholderText: b,
                            hasEntered: S === i.ip4.ENTERED,
                        }),
                    ],
                }),
                _?.profileEffect != null && (0, l.jsx)(a.A, { skuId: _.profileEffect.skuId }),
                (0, l.jsx)("div", {
                    className: A.QV,
                    inert: !0,
                    children: (0, l.jsx)(c.A, {
                        user: t,
                        nickname: f.Ay.getName(null, null, t),
                        pronouns: _?.pronouns,
                        tags: (0, l.jsx)(o.A, { displayProfile: _, themeType: p.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
