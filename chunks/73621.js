"use strict";
n.d(t, { A: () => p, o: () => f });
var i,
    r = n(477900),
    a = n(661531),
    s = n(860430),
    l = n(519396),
    o = n(268791),
    d = n(885574),
    c = n(834730),
    u = n(866665),
    _ = n(695366);
n(582128);
var E = n(953727);
function A(e) {
    let { width: t = 18, height: n = 22, color: i = "currentColor", ...a } = e;
    return (0, r.jsx)("svg", {
        ...(0, E.A)(a),
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
var h = n(375708),
    I = n(816726),
    f =
        (((i = {})[(i.TOO_BIG = 0)] = "TOO_BIG"),
        (i[(i.RATE_LIMIT = 1)] = "RATE_LIMIT"),
        (i[(i.TOO_MANY_EMOJI = 2)] = "TOO_MANY_EMOJI"),
        (i[(i.TOO_MANY_ANIMATED_EMOJI = 3)] = "TOO_MANY_ANIMATED_EMOJI"),
        (i[(i.WRONG_TYPE = 4)] = "WRONG_TYPE"),
        (i[(i.RESIZE_ANIMATED = 5)] = "RESIZE_ANIMATED"),
        i);
let p = function (e) {
    let { error: t } = e,
        { type: n, filename: i } = t,
        {
            icon: E,
            description: f,
            color: p,
            tooltip: T,
        } = {
            0: {
                icon: s.m,
                description: h.intl.string(h.t.YbdEFK),
                color: a.A.unsafe_rawColors.RED_400.css,
                tooltip: h.intl.string(h.t.PanA4J),
            },
            4: {
                icon: l.u,
                description: h.intl.string(h.t["01Papm"]),
                color: a.A.unsafe_rawColors.RED_400.css,
                tooltip: h.intl.string(h.t.PanA4J),
            },
            5: {
                icon: A,
                description: h.intl.string(h.t["6WN/qk"]),
                color: a.A.unsafe_rawColors.RED_400.css,
                tooltip: h.intl.string(h.t.PanA4J),
            },
            1: {
                icon: o.$,
                description: h.intl.string(h.t["4rjikl"]),
                color: a.A.unsafe_rawColors.ORANGE_345.css,
                tooltip: h.intl.string(h.t.dq9aTi),
            },
            2: {
                icon: d.m,
                description: h.intl.string(h.t["5VmbbF"]),
                color: a.A.unsafe_rawColors.RED_400.css,
                tooltip: h.intl.string(h.t.PanA4J),
            },
            3: {
                icon: d.m,
                description: h.intl.string(h.t.rjFOZ2),
                color: a.A.unsafe_rawColors.RED_400.css,
                tooltip: h.intl.string(h.t.PanA4J),
            },
        }[n];
    return (0, r.jsxs)("div", {
        className: I._Z,
        children: [
            (0, r.jsx)(E, { className: I.Yg, color: a.A.unsafe_rawColors.PRIMARY_300.css }),
            (0, r.jsxs)("div", {
                className: I.XE,
                children: [
                    (0, r.jsx)(c.E, { variant: "text-md/normal", className: I.Md, children: i }),
                    (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: f }),
                ],
            }),
            (0, r.jsx)(u.m, {
                asContainer: !0,
                position: "right",
                text: T,
                children: (0, r.jsx)(_.E, { size: "custom", width: 20, height: 20, color: p }),
            }),
        ],
    });
};
