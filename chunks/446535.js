n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(668339),
    c = n(481060),
    u = n(48210),
    d = n(345162),
    C = n(485386),
    m = n(496675),
    b = n(388032),
    f = n(797966);
let p = (e) => {
    let { guild: t, transitionState: n, onClose: i } = e,
        [p, h] = l.useState(7),
        [g, j] = l.useState(null),
        [x, v] = l.useState([]),
        y = l.useCallback(async () => {
            j(null), j(await u.Z.updateEstimate(t.id, p, x));
        }, [p, t.id, x]);
    l.useEffect(() => {
        y();
    }, [y]);
    let O = (0, a.Wu)([m.Z, C.Z], () => {
        let e = m.Z.getHighestRole(t);
        return o()(C.Z.getSortedRoles(t.id))
            .filter((n) => !(0, d.fI)(n) && m.Z.isRoleHigher(t, e, n))
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    label: n,
                    value: t,
                };
            })
            .value();
    }, [t]);
    return (0, r.jsxs)(c.Y0X, {
        transitionState: n,
        parentComponent: "PruneGuild",
        children: [
            (0, r.jsx)(c.xBx, {
                separator: !1,
                children: (0, r.jsxs)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: [b.intl.string(b.t.zbyz7p), "\u2014", null != t ? t.name : ""],
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.content,
                children: [
                    (0, r.jsx)(c.FXm, {
                        label: b.intl.string(b.t.YccTvK),
                        value: String(p),
                        options: [
                            {
                                name: b.intl.formatToPlainString(b.t.FM1dHS, { days: 7 }),
                                value: "7",
                            },
                            {
                                name: b.intl.formatToPlainString(b.t.FM1dHS, { days: 30 }),
                                value: "30",
                            },
                        ],
                        onChange: (e) => {
                            h(Number(e));
                        },
                    }),
                    (0, r.jsx)(c.zJl, {
                        className: f.scroller,
                        children: (0, r.jsx)(s.d, {
                            label: b.intl.string(b.t.buoe17),
                            maxVisibleItems: 10,
                            multi: !0,
                            value: x,
                            onChange: (e) => v(e),
                            options: O,
                        }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: f.spacing,
                        children:
                            x.length > 0
                                ? b.intl.format(b.t["5WxHHp"], {
                                      members: g,
                                      days: p,
                                  })
                                : b.intl.format(b.t.f13az9, {
                                      members: g,
                                      days: p,
                                  }),
                    }),
                ],
            }),
            (0, r.jsx)(c.mzw, {
                children: (0, r.jsxs)(c.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "primary",
                            text: b.intl.string(b.t["2mIlKQ"]),
                            onClick: () => {
                                u.Z.prune(t.id, p, x), i();
                            },
                        }),
                        (0, r.jsx)(c.Button, {
                            variant: "secondary",
                            text: b.intl.string(b.t["ETE/oC"]),
                            onClick: i,
                        }),
                    ],
                }),
            }),
        ],
    });
};
