var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(866665),
    l = n(820081),
    o = n(646514),
    d = n(705751),
    c = n(792996),
    u = n(73638);
function _(e) {
    let {
            invertColor: t = !1,
            type: n = d.nu.BOT,
            className: r,
            verified: _,
            hideIcon: E = !1,
            useRemSizes: A = !1,
            children: f = [],
        } = e,
        h = null,
        I = c.intl.string(c.t.g76OcH),
        p = t ? u.i$ : u.GD;
    switch (n) {
        case d.nu.SYSTEM_DM:
        case d.nu.OFFICIAL:
            ((_ = !0), (I = c.intl.string(c.t["7s687k"])), (h = c.intl.string(c.t.lKQ7Wt)));
            break;
        case d.nu.SERVER:
            h = c.intl.string(c.t.PuJGuM);
            break;
        case d.nu.ORIGINAL_POSTER:
            h = c.intl.string(c.t.fyE8sH);
            break;
        case d.nu.STAFF_ONLY_DM:
            h = c.intl.string(c.t.oMx98L);
            break;
        case d.nu.NOT_STAFF_WARNING:
            ((h = c.intl.string(c.t.UWhXbK)), (p = u.Zi));
            break;
        case d.nu.BOT:
        default:
            h = c.intl.string(c.t["9RNkeF"]);
    }
    let m = n === d.nu.ORIGINAL_POSTER,
        T = null;
    _ &&
        (T = (0, i.jsx)(s.m, {
            text: I,
            align: "center",
            position: "top",
            children: (0, i.jsx)(l.CheckmarkSmallBoldIcon, { className: u.go, color: o.A.colors.WHITE }),
        }));
    let g = null;
    if (_) g = I;
    else if ("string" == typeof h)
        switch (n) {
            case d.nu.BOT:
                g = c.intl.string(c.t.qwJHjo);
                break;
            case d.nu.SERVER:
                g = c.intl.string(c.t["39trQT"]);
                break;
            default:
                g = h;
        }
    function S() {
        return (0, i.jsxs)("span", {
            role: "img",
            "aria-label": g ?? void 0,
            className: a()(r, p, A ? u.D0 : u.px, { [u.rV]: m }),
            children: [E ? null : T, f, (0, i.jsx)("span", { className: u.lc, children: h })],
        });
    }
    return n === d.nu.ORIGINAL_POSTER
        ? (0, i.jsx)(s.m, { text: c.intl.string(c.t.uN6Emt), position: "top", asContainer: !0, children: S() })
        : S();
}
((_.Types = d.nu), n.d(t, {}, { A: _ }));
