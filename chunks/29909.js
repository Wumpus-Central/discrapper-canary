n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(68405),
    u = n(985375),
    d = n(585483),
    f = n(981631),
    _ = n(388032),
    p = n(401944);
let h = i.memo(function (e) {
    let { width: t, height: n, src: a, url: h, format: m, className: g } = e,
        [E, b] = i.useState(!1),
        y = (0, u.hb)((0, c.iy)(h)),
        O = y ? _.intl.string(_.t["5/NS74"]) : _.intl.string(_.t.nIH0v8),
        v = y ? l.r7p : l.vxU;
    i.useEffect(() => {
        if (!E) return;
        let e = setTimeout(() => {
            b(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [E]);
    let I = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            b(!0),
            y
                ? (0, c.PF)(h)
                : ((0, c.uL)({
                      url: h,
                      src: a,
                      width: t,
                      height: n,
                      format: m,
                  }),
                  d.S.dispatch(f.CkL.FAVORITE_GIF));
    };
    return (0, r.jsx)(s.u, {
        text: O,
        children: (0, r.jsx)(l.kL8, {
            "aria-label": O,
            className: o()(g, p.gifFavoriteButton, {
                [p.selected]: y,
                [p.showPulse]: E,
            }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: I,
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, r.jsx)(v, {
                color: "currentColor",
                className: p.icon,
                size: "custom",
                width: 20,
                height: 20,
            }),
        }),
    });
});
