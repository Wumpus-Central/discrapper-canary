"use strict";
n.d(t, { A: () => x, o: () => _ });
var l,
    i = n(627968),
    s = n(661531),
    a = n(990078),
    r = n(860430),
    o = n(519396),
    c = n(268791),
    u = n(885574),
    d = n(834730),
    h = n(695366);
n(64700);
var m = n(953727);
function p(e) {
    let { width: t = 18, height: n = 22, color: l = "currentColor", ...s } = e;
    return (0, i.jsx)("svg", {
        ...(0, m.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 18 22",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 0H13.414L18 4.586V20C18 21.103 17.103 22 16 22H2C0.897 22 0 21.103 0 20V2C0 0.898 0.897 0 2 0ZM12 1V6H17L12 1ZM11.9444 10.2778L10.6667 9H14V12.3333L12.7222 11.0556L11.1278 12.6611L10.3389 11.8722L11.9444 10.2778ZM5.27778 11.0556L4 12.3333V9H7.33333L6.05556 10.2778L7.66111 11.8722L6.87222 12.6611L5.27778 11.0556ZM6.05556 17.7222L7.33333 19H4V15.6667L5.27778 16.9444L6.87222 15.3389L7.66111 16.1278L6.05556 17.7222ZM12.7222 16.9444L14 15.6667V19H10.6667L11.9444 17.7222L10.3389 16.1278L11.1278 15.3389L12.7222 16.9444Z",
            fill: l,
        }),
    });
}
var f = n(985018),
    g = n(391262),
    _ =
        (((l = {})[(l.TOO_BIG = 0)] = "TOO_BIG"),
        (l[(l.RATE_LIMIT = 1)] = "RATE_LIMIT"),
        (l[(l.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
        (l[(l.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
        (l[(l.WRONG_TYPE = 4)] = "WRONG_TYPE"),
        (l[(l.RESIZE_ANIMATED = 5)] = "RESIZE_ANIMATED"),
        l);
let x = (e) => {
    let { error: t } = e,
        { type: n, filename: l } = t,
        {
            icon: m,
            description: _,
            color: x,
            tooltip: C,
        } = {
            0: {
                icon: r.m,
                description: f.intl.string(f.t.YbdEFK),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: f.intl.string(f.t.PanA4J),
            },
            4: {
                icon: o.u,
                description: f.intl.string(f.t["01Papm"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: f.intl.string(f.t.PanA4J),
            },
            5: {
                icon: p,
                description: f.intl.string(f.t["6WN/qk"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: f.intl.string(f.t.PanA4J),
            },
            1: {
                icon: c.$,
                description: f.intl.string(f.t["4rjikl"]),
                color: s.A.unsafe_rawColors.ORANGE_345.css,
                tooltip: f.intl.string(f.t.dq9aTi),
            },
            2: {
                icon: u.m,
                description: f.intl.string(f.t["5VmbbF"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: f.intl.string(f.t.PanA4J),
            },
            3: {
                icon: u.m,
                description: f.intl.string(f.t.rjFOZ2),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: f.intl.string(f.t.PanA4J),
            },
        }[n];
    return (0, i.jsxs)("div", {
        className: g._Z,
        children: [
            (0, i.jsx)(m, { className: g.Yg, color: s.A.unsafe_rawColors.PRIMARY_300.css }),
            (0, i.jsxs)("div", {
                className: g.XE,
                children: [
                    (0, i.jsx)(d.E, { variant: "text-md/normal", className: g.Md, children: l }),
                    (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: _ }),
                ],
            }),
            (0, i.jsx)(a.m, {
                asContainer: !0,
                position: "right",
                text: C,
                children: (0, i.jsx)(h.E, { size: "custom", width: 20, height: 20, color: x }),
            }),
        ],
    });
};
