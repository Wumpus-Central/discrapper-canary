n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(688810),
    d = n(507698),
    c = n(954921),
    u = n(919395),
    _ = n(128450),
    g = n(985018),
    m = n(223772);
function A(e) {
    let { user: t, guild: n, className: s, sectionTitle: A, forcedDivider: h = !1, withTutorial: p = !1 } = e,
        { analyticsLocations: x } = (0, o.Ay)(),
        E = (0, u.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: T, errors: S } = (0, u.CP)(n?.id),
        C = p ? r.wLn : a.$n;
    return (0, i.jsx)(_.A, {
        className: s,
        forcedDivider: h,
        hasBackground: !0,
        title: A,
        errors: S,
        children: (0, i.jsxs)("div", {
            className: m.NC,
            children: [
                (0, i.jsx)(C, {
                    size: a.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.L)({ analyticsLocations: x, guild: n });
                    },
                    className: l()({ [m.yj]: p }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === T ? null != E : null != T) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: m.DT,
                        children: (0, i.jsx)(r.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, d.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, u.Dx)(null, n?.id);
                            },
                        }),
                    }),
            ],
        }),
    });
}
