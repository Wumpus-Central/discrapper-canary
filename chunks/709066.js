"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(866665),
    l = n(820081),
    o = n(661531),
    d = n(705751),
    c = n(375708),
    u = n(763697);
function _(e) {
    let {
            invertColor: t = !1,
            type: n = d.nu.BOT,
            className: r,
            verified: _,
            hideIcon: E = !1,
            useRemSizes: A = !1,
            children: h = [],
        } = e,
        I = null,
        f = c.intl.string(c.t.g76OcH),
        p = t ? u.i$ : u.GD;
    switch (n) {
        case d.nu.SYSTEM_DM:
        case d.nu.OFFICIAL:
            (_ = !0), (f = c.intl.string(c.t["7s687k"])), (I = c.intl.string(c.t.lKQ7Wt));
            break;
        case d.nu.SERVER:
            I = c.intl.string(c.t.PuJGuM);
            break;
        case d.nu.ORIGINAL_POSTER:
            I = c.intl.string(c.t.fyE8sH);
            break;
        case d.nu.STAFF_ONLY_DM:
            I = c.intl.string(c.t.oMx98L);
            break;
        case d.nu.NOT_STAFF_WARNING:
            (I = c.intl.string(c.t.UWhXbK)), (p = u.Zi);
            break;
        case d.nu.BOT:
        default:
            I = c.intl.string(c.t["9RNkeF"]);
    }
    let T = n === d.nu.ORIGINAL_POSTER,
        m = null;
    _ &&
        (m = (0, i.jsx)(s.m, {
            text: f,
            align: "center",
            position: "top",
            children: (0, i.jsx)(l.B, { className: u.go, color: o.A.colors.WHITE }),
        }));
    let g = null;
    if (_) g = f;
    else if ("string" == typeof I)
        switch (n) {
            case d.nu.BOT:
                g = c.intl.string(c.t.qwJHjo);
                break;
            case d.nu.SERVER:
                g = c.intl.string(c.t["39trQT"]);
                break;
            default:
                g = I;
        }
    function S() {
        return (0, i.jsxs)("span", {
            role: "img",
            "aria-label": g ?? void 0,
            className: a()(r, p, A ? u.D0 : u.px, { [u.rV]: T }),
            children: [E ? null : m, h, (0, i.jsx)("span", { className: u.lc, children: I })],
        });
    }
    return n === d.nu.ORIGINAL_POSTER
        ? (0, i.jsx)(s.m, { text: c.intl.string(c.t.uN6Emt), position: "top", asContainer: !0, children: S() })
        : S();
}
_.Types = d.nu;
let E = _;
