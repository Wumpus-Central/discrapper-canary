"use strict";
n.d(t, { A: () => m, o: () => E });
var r,
    i = n(627968),
    s = n(827734),
    a = n(990078),
    o = n(860430),
    l = n(519396),
    u = n(268791),
    c = n(885574),
    d = n(834730),
    _ = n(695366),
    f = n(123288),
    p = n(985018),
    h = n(391262),
    E =
        (((r = {})[(r.TOO_BIG = 0)] = "TOO_BIG"),
        (r[(r.RATE_LIMIT = 1)] = "RATE_LIMIT"),
        (r[(r.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
        (r[(r.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
        (r[(r.WRONG_TYPE = 4)] = "WRONG_TYPE"),
        (r[(r.RESIZE_ANIMATED = 5)] = "RESIZE_ANIMATED"),
        r);
let m = (e) => {
    let { error: t } = e,
        { type: n, filename: r } = t,
        {
            icon: E,
            description: m,
            color: g,
            tooltip: A,
        } = {
            0: {
                icon: o.m,
                description: p.intl.string(p.t.YbdEFK),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            4: {
                icon: l.u,
                description: p.intl.string(p.t["01Papm"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            5: {
                icon: f.A,
                description: p.intl.string(p.t["6WN/qk"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            1: {
                icon: u.$,
                description: p.intl.string(p.t["4rjikl"]),
                color: s.A.unsafe_rawColors.ORANGE_345.css,
                tooltip: p.intl.string(p.t.dq9aTi),
            },
            2: {
                icon: c.m,
                description: p.intl.string(p.t["5VmbbF"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
            3: {
                icon: c.m,
                description: p.intl.string(p.t.rjFOZ2),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: p.intl.string(p.t.PanA4J),
            },
        }[n];
    return (0, i.jsxs)("div", {
        className: h._Z,
        children: [
            (0, i.jsx)(E, { className: h.Yg, color: s.A.unsafe_rawColors.PRIMARY_300.css }),
            (0, i.jsxs)("div", {
                className: h.XE,
                children: [
                    (0, i.jsx)(d.E, { variant: "text-md/normal", className: h.Md, children: r }),
                    (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: m }),
                ],
            }),
            (0, i.jsx)(a.m, {
                asContainer: !0,
                position: "right",
                text: A,
                children: (0, i.jsx)(_.E, { size: "custom", width: 20, height: 20, color: g }),
            }),
        ],
    });
};
