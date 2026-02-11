n.d(e, { A: () => A });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(182592),
    r = n(950191),
    s = n(718019),
    o = n(31432),
    u = n(915614),
    d = n(946356),
    c = n(810396),
    m = n(159218),
    f = n(562153),
    g = n(996988),
    h = n(985018),
    p = n(732201);
function A(t) {
    let { user: e, previewText: n, previewEmoji: A, previewStatus: T, placeHolderText: S, transitionState: b } = t,
        _ = (0, r.Ay)(e.id),
        x =
            (null != n && "" !== n) || null != A
                ? h.intl.formatToPlainString(h.t.UpF5Qa, { emoji: A?.name ?? "", status: n })
                : `${h.intl.string(h.t.EVV6uZ)}: ${S}`;
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": x,
        children: (0, i.jsxs)(d.A, {
            user: e,
            displayProfile: _,
            themeType: g.d.POPOUT,
            className: p.ti,
            "aria-hidden": "true",
            children: [
                (0, i.jsxs)("header", {
                    children: [
                        (0, i.jsx)(u.A, { user: e, displayProfile: _, themeType: g.d.POPOUT }),
                        (0, i.jsx)("div", {
                            inert: !0,
                            children: (0, i.jsx)(s.A, {
                                user: e,
                                displayProfile: _,
                                themeType: g.d.POPOUT,
                                previewStatus: T,
                                className: p.my,
                            }),
                        }),
                        (0, i.jsx)(m.A, {
                            user: e,
                            themeType: g.d.POPOUT,
                            previewText: n,
                            previewEmoji: A,
                            placeholderText: S,
                            hasEntered: b === l.ip4.ENTERED,
                        }),
                    ],
                }),
                _?.profileEffect != null && (0, i.jsx)(a.A, { skuId: _.profileEffect.skuId }),
                (0, i.jsx)("div", {
                    className: p.QV,
                    inert: !0,
                    children: (0, i.jsx)(c.A, {
                        user: e,
                        nickname: f.Ay.getName(null, null, e),
                        pronouns: _?.pronouns,
                        tags: (0, i.jsx)(o.A, { displayProfile: _, themeType: g.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
