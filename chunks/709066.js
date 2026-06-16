"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(820081),
    l = n(661531),
    u = n(705751),
    c = n(375708),
    d = n(763697);
let _ = (e) => {
    let {
            invertColor: t = !1,
            type: n = u.nu.BOT,
            className: r,
            verified: _,
            hideIcon: h = !1,
            useRemSizes: f = !1,
            children: p = [],
        } = e,
        E = null,
        m = c.intl.string(c.t.g76OcH),
        g = t ? d.i$ : d.GD;
    switch (n) {
        case u.nu.SYSTEM_DM:
        case u.nu.OFFICIAL:
            (_ = !0), (m = c.intl.string(c.t["7s687k"])), (E = c.intl.string(c.t.lKQ7Wt));
            break;
        case u.nu.SERVER:
            E = c.intl.string(c.t.PuJGuM);
            break;
        case u.nu.ORIGINAL_POSTER:
            E = c.intl.string(c.t.fyE8sH);
            break;
        case u.nu.STAFF_ONLY_DM:
            E = c.intl.string(c.t.oMx98L);
            break;
        case u.nu.NOT_STAFF_WARNING:
            (E = c.intl.string(c.t.UWhXbK)), (g = d.Zi);
            break;
        case u.nu.BOT:
        default:
            E = c.intl.string(c.t["9RNkeF"]);
    }
    let A = n === u.nu.ORIGINAL_POSTER,
        I = null;
    _ &&
        (I = (0, i.jsx)(a.m, {
            text: m,
            align: "center",
            position: "top",
            children: (0, i.jsx)(o.B, { className: d.go, color: l.A.colors.WHITE }),
        }));
    let T = null;
    if (_) T = m;
    else if ("string" == typeof E)
        switch (n) {
            case u.nu.BOT:
                T = c.intl.string(c.t.qwJHjo);
                break;
            case u.nu.SERVER:
                T = c.intl.string(c.t["39trQT"]);
                break;
            default:
                T = E;
        }
    let S = () =>
        (0, i.jsxs)("span", {
            role: "img",
            "aria-label": T ?? void 0,
            className: s()(r, g, f ? d.D0 : d.px, { [d.rV]: A }),
            children: [h ? null : I, p, (0, i.jsx)("span", { className: d.lc, children: E })],
        });
    return n === u.nu.ORIGINAL_POSTER
        ? (0, i.jsx)(a.m, { text: c.intl.string(c.t.uN6Emt), position: "top", asContainer: !0, children: S() })
        : S();
};
_.Types = u.nu;
let h = _;
