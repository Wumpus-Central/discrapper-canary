"use strict";
n.d(t, { A: () => p, o: () => g });
var i,
    r = n(627968),
    s = n(661531),
    a = n(990078),
    o = n(860430),
    l = n(519396),
    d = n(268791),
    _ = n(885574),
    u = n(834730),
    c = n(695366);
n(64700);
var E = n(953727);
function h(e) {
    let { width: t = 18, height: n = 22, color: i = "currentColor", ...s } = e;
    return (0, r.jsx)("svg", {
        ...(0, E.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 18 22",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 0H13.414L18 4.586V20C18 21.103 17.103 22 16 22H2C0.897 22 0 21.103 0 20V2C0 0.898 0.897 0 2 0ZM12 1V6H17L12 1ZM11.9444 10.2778L10.6667 9H14V12.3333L12.7222 11.0556L11.1278 12.6611L10.3389 11.8722L11.9444 10.2778ZM5.27778 11.0556L4 12.3333V9H7.33333L6.05556 10.2778L7.66111 11.8722L6.87222 12.6611L5.27778 11.0556ZM6.05556 17.7222L7.33333 19H4V15.6667L5.27778 16.9444L6.87222 15.3389L7.66111 16.1278L6.05556 17.7222ZM12.7222 16.9444L14 15.6667V19H10.6667L11.9444 17.7222L10.3389 16.1278L11.1278 15.3389L12.7222 16.9444Z",
            fill: i,
        }),
    });
}
var m = n(985018),
    f = n(391262),
    g =
        (((i = {})[(i.TOO_BIG = 0)] = "TOO_BIG"),
        (i[(i.RATE_LIMIT = 1)] = "RATE_LIMIT"),
        (i[(i.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
        (i[(i.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
        (i[(i.WRONG_TYPE = 4)] = "WRONG_TYPE"),
        (i[(i.RESIZE_ANIMATED = 5)] = "RESIZE_ANIMATED"),
        i);
let p = (e) => {
    let { error: t } = e,
        { type: n, filename: i } = t,
        {
            icon: E,
            description: g,
            color: p,
            tooltip: A,
        } = {
            0: {
                icon: o.m,
                description: m.intl.string(m.t.YbdEFK),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: m.intl.string(m.t.PanA4J),
            },
            4: {
                icon: l.u,
                description: m.intl.string(m.t["01Papm"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: m.intl.string(m.t.PanA4J),
            },
            5: {
                icon: h,
                description: m.intl.string(m.t["6WN/qk"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: m.intl.string(m.t.PanA4J),
            },
            1: {
                icon: d.$,
                description: m.intl.string(m.t["4rjikl"]),
                color: s.A.unsafe_rawColors.ORANGE_345.css,
                tooltip: m.intl.string(m.t.dq9aTi),
            },
            2: {
                icon: _.m,
                description: m.intl.string(m.t["5VmbbF"]),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: m.intl.string(m.t.PanA4J),
            },
            3: {
                icon: _.m,
                description: m.intl.string(m.t.rjFOZ2),
                color: s.A.unsafe_rawColors.RED_400.css,
                tooltip: m.intl.string(m.t.PanA4J),
            },
        }[n];
    return (0, r.jsxs)("div", {
        className: f._Z,
        children: [
            (0, r.jsx)(E, { className: f.Yg, color: s.A.unsafe_rawColors.PRIMARY_300.css }),
            (0, r.jsxs)("div", {
                className: f.XE,
                children: [
                    (0, r.jsx)(u.E, { variant: "text-md/normal", className: f.Md, children: i }),
                    (0, r.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: g }),
                ],
            }),
            (0, r.jsx)(a.m, {
                asContainer: !0,
                position: "right",
                text: A,
                children: (0, r.jsx)(c.E, { size: "custom", width: 20, height: 20, color: p }),
            }),
        ],
    });
};
