n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(705751),
    c = n(985018),
    u = n(931228);
let d = (e) => {
    let {
            invertColor: t = !1,
            type: n = l.nu.BOT,
            className: i,
            verified: d,
            hideIcon: f = !1,
            useRemSizes: p = !1,
            children: _ = [],
        } = e,
        h = null,
        m = c.intl.string(c.t.g76OcH),
        g = t ? u.i$ : u.GD;
    switch (n) {
        case l.nu.SYSTEM_DM:
        case l.nu.OFFICIAL:
            (d = !0), (m = c.intl.string(c.t["7s687k"])), (h = c.intl.string(c.t.lKQ7Wt));
            break;
        case l.nu.SERVER:
            h = c.intl.string(c.t.PuJGuM);
            break;
        case l.nu.ORIGINAL_POSTER:
            h = c.intl.string(c.t.fyE8sH);
            break;
        case l.nu.STAFF_ONLY_DM:
            h = c.intl.string(c.t.oMx98L);
            break;
        case l.nu.NOT_STAFF_WARNING:
            (h = c.intl.string(c.t.UWhXbK)), (g = u.Zi);
            break;
        case l.nu.BOT:
        default:
            h = c.intl.string(c.t["9RNkeF"]);
    }
    let E = n === l.nu.ORIGINAL_POSTER,
        b = null;
    d &&
        (b = (0, r.jsx)(s.m, {
            text: m,
            align: "center",
            position: "top",
            children: (0, r.jsx)(o.BNr, {
                className: u.go,
                color: o.LU0.colors.WHITE,
            }),
        }));
    let y = () =>
        (0, r.jsxs)("span", {
            className: a()(i, g, p ? u.D0 : u.px, { [u.rV]: E }),
            children: [
                f ? null : b,
                _,
                (0, r.jsx)("span", {
                    className: u.lc,
                    children: h,
                }),
            ],
        });
    return n === l.nu.ORIGINAL_POSTER
        ? (0, r.jsx)(s.m, {
              text: c.intl.string(c.t.uN6Emt),
              position: "top",
              asContainer: !0,
              children: y(),
          })
        : y();
};
d.Types = l.nu;
let f = d;
