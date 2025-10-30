n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(48210),
    u = n(345162),
    d = n(485386),
    C = n(496675),
    m = n(388032),
    b = n(459035);
let p = (e) => {
    let { guild: t, transitionState: n, onClose: i } = e,
        [p, f] = l.useState(7),
        [h, g] = l.useState(null),
        [j, x] = l.useState([]),
        v = l.useCallback(async () => {
            g(null), g(await c.Z.updateEstimate(t.id, p, j));
        }, [p, t.id, j]);
    l.useEffect(() => {
        v();
    }, [v]);
    let y = (0, a.Wu)([C.Z, d.Z], () => {
        let e = C.Z.getHighestRole(t);
        return o()(d.Z.getSortedRoles(t.id))
            .filter((n) => !(0, u.fI)(n) && C.Z.isRoleHigher(t, e, n))
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    label: n,
                    value: t,
                };
            })
            .value();
    }, [t]);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: n,
        parentComponent: "PruneGuild",
        children: [
            (0, r.jsx)(s.xBx, {
                separator: !1,
                children: (0, r.jsxs)(s.Heading, {
                    variant: "heading-lg/semibold",
                    children: [m.intl.string(m.t.zbyz7p), "\u2014", null != t ? t.name : ""],
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.content,
                children: [
                    (0, r.jsx)(s.FXm, {
                        label: m.intl.string(m.t.YccTvK),
                        value: String(p),
                        options: [
                            {
                                name: m.intl.formatToPlainString(m.t.FM1dHS, { days: 7 }),
                                value: "7",
                            },
                            {
                                name: m.intl.formatToPlainString(m.t.FM1dHS, { days: 30 }),
                                value: "30",
                            },
                        ],
                        onChange: (e) => {
                            f(Number(e));
                        },
                    }),
                    (0, r.jsx)(s.zJl, {
                        className: b.scroller,
                        children: (0, r.jsx)(s.VcW, {
                            label: m.intl.string(m.t.buoe17),
                            maxVisibleItems: 10,
                            multi: !0,
                            value: j,
                            onChange: (e) => x(e),
                            options: y,
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        className: b.spacing,
                        children:
                            j.length > 0
                                ? m.intl.format(m.t["5WxHHp"], {
                                      members: h,
                                      days: p,
                                  })
                                : m.intl.format(m.t.f13az9, {
                                      members: h,
                                      days: p,
                                  }),
                    }),
                ],
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)(s.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: m.intl.string(m.t["2mIlKQ"]),
                            onClick: () => {
                                c.Z.prune(t.id, p, j), i();
                            },
                        }),
                        (0, r.jsx)(s.Button, {
                            variant: "secondary",
                            text: m.intl.string(m.t["ETE/oC"]),
                            onClick: i,
                        }),
                    ],
                }),
            }),
        ],
    });
};
