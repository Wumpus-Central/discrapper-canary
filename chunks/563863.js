"use strict";
n.d(t, { A: () => _, o: () => g });
var i,
    l = n(627968),
    s = n(827734),
    r = n(990078),
    a = n(860430),
    o = n(519396),
    c = n(268791),
    u = n(885574),
    d = n(834730),
    h = n(695366),
    m = n(123288),
    p = n(985018),
    f = n(391262),
    g =
        (((i = {})[(i.TOO_BIG = 0)] = "TOO_BIG"),
        (i[(i.RATE_LIMIT = 1)] = "RATE_LIMIT"),
        (i[(i.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
        (i[(i.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
        (i[(i.WRONG_TYPE = 4)] = "WRONG_TYPE"),
        (i[(i.RESIZE_ANIMATED = 5)] = "RESIZE_ANIMATED"),
        i);
let _ = (e) => {
    let { error: t } = e,
        { type: n, filename: i } = t,
        {
            icon: g,
            description: _,
            color: x,
            tooltip: A,
        } = {
            0: {
                icon: a.m,
                description: p.intl.string(p.t.YbdEFK),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            4: {
                icon: o.u,
                description: p.intl.string(p.t["01Papm"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            5: {
                icon: m.A,
                description: p.intl.string(p.t["6WN/qk"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            1: {
                icon: c.$,
                description: p.intl.string(p.t["4rjikl"]),
                color: s.A.unsafe_rawColors.ORANGE_345.css,
                tooltip: p.intl.string(p.t.dq9aTi),
            },
            2: {
                icon: u.m,
                description: p.intl.string(p.t["5VmbbF"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            3: {
                icon: u.m,
                description: p.intl.string(p.t.rjFOZ2),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
        }[n];
    return (0, l.jsxs)("div", {
        className: f._Z,
        children: [
            (0, l.jsx)(g, { className: f.Yg, color: s.A.unsafe_rawColors.PRIMARY_300.css }),
            (0, l.jsxs)("div", {
                className: f.XE,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-md/normal", className: f.Md, children: i }),
                    (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: _ }),
                ],
            }),
            (0, l.jsx)(r.m, {
                asContainer: !0,
                position: "right",
                text: A,
                children: (0, l.jsx)(h.E, { size: "custom", width: 20, height: 20, color: x }),
            }),
        ],
    });
};
