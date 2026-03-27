"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(397927),
    l = n(705751),
    u = n(985018),
    c = n(82850);
let d = (e) => {
    let {
            invertColor: t = !1,
            type: n = l.nu.BOT,
            className: i,
            verified: d,
            hideIcon: _ = !1,
            useRemSizes: f = !1,
            children: p = [],
        } = e,
        h = null,
        m = u.intl.string(u.t.g76OcH),
        E = t ? c.i$ : c.GD;
    switch (n) {
        case l.nu.SYSTEM_DM:
        case l.nu.OFFICIAL:
            (d = !0), (m = u.intl.string(u.t["7s687k"])), (h = u.intl.string(u.t.lKQ7Wt));
            break;
        case l.nu.SERVER:
            h = u.intl.string(u.t.PuJGuM);
            break;
        case l.nu.ORIGINAL_POSTER:
            h = u.intl.string(u.t.fyE8sH);
            break;
        case l.nu.STAFF_ONLY_DM:
            h = u.intl.string(u.t.oMx98L);
            break;
        case l.nu.NOT_STAFF_WARNING:
            (h = u.intl.string(u.t.UWhXbK)), (E = c.Zi);
            break;
        case l.nu.BOT:
        default:
            h = u.intl.string(u.t["9RNkeF"]);
    }
    let g = n === l.nu.ORIGINAL_POSTER,
        A = null;
    d &&
        (A = (0, r.jsx)(a.m, {
            text: m,
            align: "center",
            position: "top",
            children: (0, r.jsx)(o.BNr, { className: c.go, color: o.LU0.colors.WHITE }),
        }));
    let I = null;
    if (d) I = m;
    else if ("string" == typeof h)
        switch (n) {
            case l.nu.BOT:
                I = u.intl.string(u.t.qwJHjo);
                break;
            case l.nu.SERVER:
                I = u.intl.string(u.t["39trQT"]);
                break;
            default:
                I = h;
        }
    let T = () =>
        (0, r.jsxs)("span", {
            role: "img",
            "aria-label": I ?? void 0,
            className: s()(i, E, f ? c.D0 : c.px, { [c.rV]: g }),
            children: [_ ? null : A, p, (0, r.jsx)("span", { className: c.lc, children: h })],
        });
    return n === l.nu.ORIGINAL_POSTER
        ? (0, r.jsx)(a.m, { text: u.intl.string(u.t.uN6Emt), position: "top", asContainer: !0, children: T() })
        : T();
};
d.Types = l.nu;
let _ = d;
