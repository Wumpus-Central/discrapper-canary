n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(159691),
    c = n(481060),
    d = n(48210),
    u = n(345162),
    C = n(485386),
    m = n(496675),
    b = n(388032),
    f = n(180746);
let p = (e) => {
    let { guild: t, transitionState: n, onClose: i } = e,
        [p, h] = l.useState(7),
        [g, j] = l.useState(null),
        [x, v] = l.useState([]),
        O = l.useCallback(async () => {
            j(null), j(await d.Z.updateEstimate(t.id, p, x));
        }, [p, t.id, x]);
    l.useEffect(() => {
        O();
    }, [O]);
    let y = l.useCallback(() => {
            d.Z.prune(t.id, p, x), i();
        }, [t.id, p, x, i]),
        H = (0, a.Wu)([m.Z, C.Z], () => {
            let e = m.Z.getHighestRole(t);
            return o()(C.Z.getSortedRoles(t.id))
                .filter((n) => !(0, u.fI)(n) && m.Z.isRoleHigher(t, e, n))
                .map((e) => {
                    let { id: t, name: n } = e;
                    return {
                        id: t,
                        label: n,
                        value: t,
                    };
                })
                .value();
        }, [t]);
    return (0, r.jsx)(s.u_l, {
        title: "".concat(b.intl.string(b.t.zbyz7p), "\u2014").concat(null != t ? t.name : ""),
        actions: [
            {
                text: b.intl.string(b.t["ETE/oC"]),
                onClick: i,
                variant: "secondary",
            },
            {
                text: b.intl.string(b.t["2mIlKQ"]),
                onClick: y,
            },
        ],
        onClose: async () => {
            await i();
        },
        transitionState: n,
        children: (0, r.jsxs)("div", {
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
                    children: (0, r.jsx)(c.VcW, {
                        selectionMode: "multiple",
                        label: b.intl.string(b.t.buoe17),
                        maxOptionsVisible: 10,
                        value: x,
                        onSelectionChange: (e) => v(e),
                        options: H,
                    }),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
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
    });
};
