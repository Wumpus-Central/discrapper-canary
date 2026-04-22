"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(820081),
    l = n(827734),
    u = n(705751),
    d = n(985018),
    c = n(763697);
let _ = (e) => {
    let {
            invertColor: t = !1,
            type: n = u.nu.BOT,
            className: i,
            verified: _,
            hideIcon: f = !1,
            useRemSizes: E = !1,
            children: h = [],
        } = e,
        p = null,
        m = d.intl.string(d.t.g76OcH),
        g = t ? c.i$ : c.GD;
    switch (n) {
        case u.nu.SYSTEM_DM:
        case u.nu.OFFICIAL:
            (_ = !0), (m = d.intl.string(d.t["7s687k"])), (p = d.intl.string(d.t.lKQ7Wt));
            break;
        case u.nu.SERVER:
            p = d.intl.string(d.t.PuJGuM);
            break;
        case u.nu.ORIGINAL_POSTER:
            p = d.intl.string(d.t.fyE8sH);
            break;
        case u.nu.STAFF_ONLY_DM:
            p = d.intl.string(d.t.oMx98L);
            break;
        case u.nu.NOT_STAFF_WARNING:
            (p = d.intl.string(d.t.UWhXbK)), (g = c.Zi);
            break;
        case u.nu.BOT:
        default:
            p = d.intl.string(d.t["9RNkeF"]);
    }
    let A = n === u.nu.ORIGINAL_POSTER,
        I = null;
    _ &&
        (I = (0, r.jsx)(a.m, {
            text: m,
            align: "center",
            position: "top",
            children: (0, r.jsx)(o.B, { className: c.go, color: l.A.colors.WHITE }),
        }));
    let T = null;
    if (_) T = m;
    else if ("string" == typeof p)
        switch (n) {
            case u.nu.BOT:
                T = d.intl.string(d.t.qwJHjo);
                break;
            case u.nu.SERVER:
                T = d.intl.string(d.t["39trQT"]);
                break;
            default:
                T = p;
        }
    let S = () =>
        (0, r.jsxs)("span", {
            role: "img",
            "aria-label": T ?? void 0,
            className: s()(i, g, E ? c.D0 : c.px, { [c.rV]: A }),
            children: [f ? null : I, h, (0, r.jsx)("span", { className: c.lc, children: p })],
        });
    return n === u.nu.ORIGINAL_POSTER
        ? (0, r.jsx)(a.m, { text: d.intl.string(d.t.uN6Emt), position: "top", asContainer: !0, children: S() })
        : S();
};
_.Types = u.nu;
let f = _;
