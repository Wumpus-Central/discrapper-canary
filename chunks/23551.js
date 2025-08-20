n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(726542),
    u = n(122021),
    d = n(231757),
    f = n(626135),
    _ = n(981631),
    p = n(391475);
let h = (e) => {
    let { disabled: t = !1, type: n, className: i, innerClassName: h, onConnect: m } = e,
        g = (0, l.ZP)();
    function E(e) {
        let t = c.Z.get(e);
        (0, d.Z)({
            platformType: t.type,
            location: "Friends List",
        }),
            f.default.track(_.rMx.ACCOUNT_LINK_STEP, {
                previous_step: "desktop connections",
                current_step: "desktop oauth",
                platform_type: t.type,
            });
    }
    let b = c.Z.get((0, u.rR)(n));
    return (0, r.jsx)(s.ua7, {
        text: b.name,
        children: (e) => {
            let { onMouseEnter: l, onMouseLeave: c } = e;
            return (0, r.jsx)("div", {
                className: a()(p.wrapper, i),
                children: (0, r.jsx)(s.tEY, {
                    children: (0, r.jsx)("button", {
                        onMouseEnter: l,
                        onMouseLeave: c,
                        className: a()(p.inner, h),
                        type: "button",
                        disabled: t,
                        style: {
                            backgroundImage: "url('".concat((0, o.wj)(g) ? b.icon.darkSVG : b.icon.lightSVG, "')"),
                        },
                        onClick: null != m ? m : () => E(n),
                        "aria-label": b.name,
                    }),
                }),
            });
        },
    });
};
