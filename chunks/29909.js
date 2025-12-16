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
    _ = n(120031);
let m = i.memo(function (e) {
    let { width: t, height: n, src: a, gifSrc: m, url: h, format: g, className: E } = e,
        [b, y] = i.useState(!1),
        O = (0, u.hb)((0, c.iy)(h)),
        v = O ? p.intl.string(p.t["5/NS74"]) : p.intl.string(p.t.nIH0v8),
        S = O ? l.r7p : l.vxU;
    i.useEffect(() => {
        if (!b) return;
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [b]);
    let I = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            y(!0),
            O
                ? (0, c.PF)(h)
                : ((0, c.uL)({
                      url: h,
                      src: a,
                      gifSrc: m,
                      width: t,
                      height: n,
                      format: g,
                  }),
                  d.S.dispatch(f.CkL.FAVORITE_GIF));
    };
    return (0, r.jsx)(s.u, {
        text: v,
        children: (0, r.jsx)(l.kL8, {
            "aria-label": v,
            className: o()(E, _.gifFavoriteButton, {
                [_.selected]: O,
                [_.showPulse]: b,
            }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: I,
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, r.jsx)(S, {
                color: "currentColor",
                className: _.icon,
                size: "custom",
                width: 20,
                height: 20,
            }),
        }),
    });
});
