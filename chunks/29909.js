n.d(t, { Z: () => m }), n(388685);
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
    p = n(388032),
    _ = n(796016);
let m = i.memo(function (e) {
    let { width: t, height: n, src: a, url: m, format: h, className: g } = e,
        [E, b] = i.useState(!1),
        y = (0, u.hb)((0, c.iy)(m)),
        O = y ? p.intl.string(p.t["5/NS74"]) : p.intl.string(p.t.nIH0v8),
        v = y ? l.r7p : l.vxU;
    i.useEffect(() => {
        if (!E) return;
        let e = setTimeout(() => {
            b(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [E]);
    let S = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            b(!0),
            y
                ? (0, c.PF)(m)
                : ((0, c.uL)({
                      url: m,
                      src: a,
                      width: t,
                      height: n,
                      format: h,
                  }),
                  d.S.dispatch(f.CkL.FAVORITE_GIF));
    };
    return (0, r.jsx)(s.u, {
        text: O,
        children: (0, r.jsx)(l.kL8, {
            "aria-label": O,
            className: o()(g, _.gifFavoriteButton, {
                [_.selected]: y,
                [_.showPulse]: E,
            }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: S,
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, r.jsx)(v, {
                color: "currentColor",
                className: _.icon,
                size: "custom",
                width: 20,
                height: 20,
            }),
        }),
    });
});
