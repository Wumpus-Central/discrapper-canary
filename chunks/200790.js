n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(421380),
    a = n(397927),
    o = n(688810),
    d = n(507698),
    c = n(954921),
    u = n(919395),
    _ = n(128450),
    m = n(985018),
    g = n(223772);
function A(e) {
    let { user: t, guild: n, className: s, sectionTitle: A, forcedDivider: h = !1, withTutorial: x = !1 } = e,
        { analyticsLocations: p } = (0, o.Ay)(),
        T = (0, u.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: E, errors: C } = (0, u.CP)(n?.id),
        S = x ? a.wLn : r.$n;
    return (0, i.jsx)(_.A, {
        className: s,
        forcedDivider: h,
        hasBackground: !0,
        title: A,
        errors: C,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [
                (0, i.jsx)(S, {
                    size: r.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.L)({ analyticsLocations: p, guild: n });
                    },
                    className: l()({ [g.yj]: x }),
                    children: m.intl.string(m.t.BVcYCx),
                }),
                (void 0 === E ? null != T : null != E) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.DT,
                        children: (0, i.jsx)(a.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, d.uZ)(t, n) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
                            onClick: () => {
                                (0, u.Dx)(null, n?.id);
                            },
                        }),
                    }),
            ],
        }),
    });
}
