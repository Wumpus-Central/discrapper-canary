n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(862482),
    r = n(930861),
    o = n(821609),
    d = n(688810),
    u = n(821956),
    c = n(562819),
    g = n(84540),
    m = n(919395),
    _ = n(128450),
    A = n(985018),
    h = n(408919);
function p(e) {
    let { user: t, guild: n, className: s, sectionTitle: p, forcedDivider: x = !1, withTutorial: E = !1 } = e,
        { analyticsLocations: T } = (0, d.Ay)(),
        S = (0, m.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: f, errors: b } = (0, m.CP)(n?.id),
        C = E ? r.wL : a.$n;
    return (0, i.jsx)(_.A, {
        className: s,
        forcedDivider: x,
        hasBackground: !0,
        title: p,
        errors: b,
        children: (0, i.jsxs)("div", {
            className: h.NC,
            children: [
                (0, i.jsx)(C, {
                    size: a.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.L)({ analyticsLocations: T, guild: n });
                    },
                    className: l()({ [h.yj]: E }),
                    children: A.intl.string(A.t.BVcYCx),
                }),
                (void 0 === f ? null != S : null != f) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.DT,
                        children: (0, i.jsx)(o.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, u.uZ)(t, n) ? A.intl.string(A.t.CHf9iJ) : A.intl.string(A.t.OrokWm),
                            onClick: () => {
                                (0, g.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
