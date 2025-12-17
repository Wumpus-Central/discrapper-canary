n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(668339),
    c = n(159691),
    u = n(481060),
    d = n(48210),
    C = n(345162),
    m = n(485386),
    b = n(496675),
    f = n(388032),
    p = n(180746);
let h = (e) => {
    let { guild: t, transitionState: n, onClose: i } = e,
        [h, g] = l.useState(7),
        [j, x] = l.useState(null),
        [v, y] = l.useState([]),
        O = l.useCallback(async () => {
            x(null), x(await d.Z.updateEstimate(t.id, h, v));
        }, [h, t.id, v]);
    l.useEffect(() => {
        O();
    }, [O]);
    let H = l.useCallback(() => {
            d.Z.prune(t.id, h, v), i();
        }, [t.id, h, v, i]),
        w = (0, a.Wu)([b.Z, m.Z], () => {
            let e = b.Z.getHighestRole(t);
            return o()(m.Z.getSortedRoles(t.id))
                .filter((n) => !(0, C.fI)(n) && b.Z.isRoleHigher(t, e, n))
                .map((e) => {
                    let { id: t, name: n } = e;
                    return {
                        label: n,
                        value: t,
                    };
                })
                .value();
        }, [t]);
    return (0, r.jsx)(c.u_l, {
        title: "".concat(f.intl.string(f.t.zbyz7p), "\u2014").concat(null != t ? t.name : ""),
        actions: [
            {
                text: f.intl.string(f.t["ETE/oC"]),
                onClick: i,
                variant: "secondary",
            },
            {
                text: f.intl.string(f.t["2mIlKQ"]),
                onClick: H,
            },
        ],
        onClose: async () => {
            await i();
        },
        transitionState: n,
        children: (0, r.jsxs)("div", {
            className: p.content,
            children: [
                (0, r.jsx)(u.FXm, {
                    label: f.intl.string(f.t.YccTvK),
                    value: String(h),
                    options: [
                        {
                            name: f.intl.formatToPlainString(f.t.FM1dHS, { days: 7 }),
                            value: "7",
                        },
                        {
                            name: f.intl.formatToPlainString(f.t.FM1dHS, { days: 30 }),
                            value: "30",
                        },
                    ],
                    onChange: (e) => {
                        g(Number(e));
                    },
                }),
                (0, r.jsx)(u.zJl, {
                    className: p.scroller,
                    children: (0, r.jsx)(s.d, {
                        label: f.intl.string(f.t.buoe17),
                        maxVisibleItems: 10,
                        multi: !0,
                        value: v,
                        onChange: (e) => y(e),
                        options: w,
                    }),
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    children:
                        v.length > 0
                            ? f.intl.format(f.t["5WxHHp"], {
                                  members: j,
                                  days: h,
                              })
                            : f.intl.format(f.t.f13az9, {
                                  members: j,
                                  days: h,
                              }),
                }),
            ],
        }),
    });
};
