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
    m = n(985018),
    g = n(6022);
function A(e) {
    let { user: t, guild: n, className: s, sectionTitle: A, forcedDivider: x = !1, withTutorial: h = !1 } = e,
        { analyticsLocations: p } = (0, o.Ay)(),
        T = (0, u.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: E, errors: S } = (0, u.CP)(n?.id),
        C = h ? r.wLn : a.$n;
    return (0, i.jsx)(_.A, {
        className: s,
        forcedDivider: x,
        hasBackground: !0,
        title: A,
        errors: S,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [
                (0, i.jsx)(C, {
                    size: a.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, c.L)({ analyticsLocations: p, guild: n });
                    },
                    className: l()({ [g.yj]: h }),
                    children: m.intl.string(m.t.BVcYCx),
                }),
                (void 0 === E ? null != T : null != E) &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.DT,
                        children: (0, i.jsx)(r.Button, {
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
