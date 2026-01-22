n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(573648),
    d = n(681819),
    f = n(882997),
    p = n(954571),
    _ = n(652215),
    h = n(277816);
let m = (e) => {
    let { disabled: t = !1, type: n, className: i, innerClassName: m, onConnect: g } = e,
        E = (0, c.Ay)();
    function b(e) {
        let t = u.A.get(e);
        (0, f.A)({
            platformType: t.type,
            location: "Friends List",
        }),
            p.default.track(_.HAw.ACCOUNT_LINK_STEP, {
                previous_step: "desktop connections",
                current_step: "desktop oauth",
                platform_type: t.type,
            });
    }
    let y = u.A.get((0, d.ML)(n));
    return (0, r.jsx)(s.m, {
        text: y.name,
        children: (0, r.jsx)("div", {
            className: a()(h.iE, i),
            children: (0, r.jsx)(l.vN3, {
                children: (0, r.jsx)("button", {
                    className: a()(h.vW, m),
                    type: "button",
                    disabled: t,
                    style: { backgroundImage: "url('".concat((0, o.Mw)(E) ? y.icon.darkSVG : y.icon.lightSVG, "')") },
                    onClick: null != g ? g : () => b(n),
                    "aria-label": y.name,
                }),
            }),
        }),
    });
};
