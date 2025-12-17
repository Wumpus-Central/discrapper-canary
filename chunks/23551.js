n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(726542),
    d = n(122021),
    f = n(231757),
    p = n(626135),
    _ = n(981631),
    m = n(341603);
let h = (e) => {
    let { disabled: t = !1, type: n, className: i, innerClassName: h, onConnect: g } = e,
        E = (0, c.ZP)();
    function b(e) {
        let t = u.Z.get(e);
        (0, f.Z)({
            platformType: t.type,
            location: "Friends List",
        }),
            p.default.track(_.rMx.ACCOUNT_LINK_STEP, {
                previous_step: "desktop connections",
                current_step: "desktop oauth",
                platform_type: t.type,
            });
    }
    let y = u.Z.get((0, d.rR)(n));
    return (0, r.jsx)(o.u, {
        text: y.name,
        children: (0, r.jsx)("div", {
            className: a()(m.wrapper, i),
            children: (0, r.jsx)(l.tEY, {
                children: (0, r.jsx)("button", {
                    className: a()(m.inner, h),
                    type: "button",
                    disabled: t,
                    style: { backgroundImage: "url('".concat((0, s.wj)(E) ? y.icon.darkSVG : y.icon.lightSVG, "')") },
                    onClick: null != g ? g : () => b(n),
                    "aria-label": y.name,
                }),
            }),
        }),
    });
};
