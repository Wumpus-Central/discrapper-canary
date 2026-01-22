n.d(t, {
    A: () => d,
    o: () => u,
}),
    n(228524);
var r = n(627968),
    i = n(827734),
    a = n(990078),
    s = n(397927),
    o = n(123288),
    l = n(985018),
    c = n(865211),
    u = (function (e) {
        return (
            (e[(e.TOO_BIG = 0)] = "TOO_BIG"),
            (e[(e.RATE_LIMIT = 1)] = "RATE_LIMIT"),
            (e[(e.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
            (e[(e.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
            (e[(e.WRONG_TYPE = 4)] = "WRONG_TYPE"),
            (e[(e.RESIZE_GIF = 5)] = "RESIZE_GIF"),
            e
        );
    })({});
let d = (e) => {
    let { error: t } = e,
        { type: n, filename: u } = t,
        {
            icon: d,
            description: f,
            color: p,
            tooltip: _,
        } = {
            0: {
                icon: s.m_x,
                description: l.intl.string(l.t.YbdEFK),
                color: i.A.unsafe_rawColors.RED_400.css,
                tooltip: l.intl.string(l.t.PanA4J),
            },
            4: {
                icon: s.uC4,
                description: l.intl.string(l.t["01Papm"]),
                color: i.A.unsafe_rawColors.RED_400.css,
                tooltip: l.intl.string(l.t.PanA4J),
            },
            5: {
                icon: o.A,
                description: l.intl.string(l.t.sp16MU),
                color: i.A.unsafe_rawColors.RED_400.css,
                tooltip: l.intl.string(l.t.PanA4J),
            },
            1: {
                icon: s.$y7,
                description: l.intl.string(l.t["4rjikl"]),
                color: i.A.unsafe_rawColors.ORANGE_345.css,
                tooltip: l.intl.string(l.t.dq9aTi),
            },
            2: {
                icon: s.mir,
                description: l.intl.string(l.t["5VmbbF"]),
                color: i.A.unsafe_rawColors.RED_400.css,
                tooltip: l.intl.string(l.t.PanA4J),
            },
            3: {
                icon: s.mir,
                description: l.intl.string(l.t.rjFOZ2),
                color: i.A.unsafe_rawColors.RED_400.css,
                tooltip: l.intl.string(l.t.PanA4J),
            },
        }[n];
    return (0, r.jsxs)("div", {
        className: c._Z,
        children: [
            (0, r.jsx)(d, {
                className: c.Yg,
                color: i.A.unsafe_rawColors.PRIMARY_300.css,
            }),
            (0, r.jsxs)("div", {
                className: c.XE,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: c.Md,
                        children: u,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: f,
                    }),
                ],
            }),
            (0, r.jsx)(a.m, {
                asContainer: !0,
                position: "right",
                text: _,
                children: (0, r.jsx)(s.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: p,
                }),
            }),
        ],
    });
};
