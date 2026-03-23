n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(688810),
    d = n(507698),
    c = n(954921),
    u = n(84540),
    _ = n(919395),
    m = n(128450),
    g = n(985018),
    A = n(223772);
function x(e) {
    let { user: t, guild: n, className: s, sectionTitle: x, forcedDivider: h = !1, withTutorial: p = !1 } = e,
        { analyticsLocations: T } = (0, o.Ay)(),
        E = (0, _.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: S, errors: f } = (0, _.CP)(n?.id),
        C = p ? r.wLn : a.$n;
    return (0, i.jsx)(m.A, {
        className: s,
        forcedDivider: h,
        hasBackground: !0,
        title: x,
        errors: f,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [
                (0, i.jsx)(C, {
                    size: a.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.L)({ analyticsLocations: T, guild: n });
                    },
                    className: l()({ [A.yj]: p }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === S ? null != E : null != S) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A.DT,
                        children: (0, i.jsx)(r.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, d.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, u.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
