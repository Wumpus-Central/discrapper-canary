var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(68405),
    d = r(985375),
    f = r(585483),
    _ = r(981631),
    h = r(388032),
    p = r(380538);
n.Z = s.memo(function (e) {
    let { width: n, height: r, src: i, url: o, format: m, className: g } = e,
        [E, v] = s.useState(!1),
        I = (0, d.hb)((0, c.iy)(o)),
        T = I ? h.intl.string(h.t['5/NS7+']) : h.intl.string(h.t.nIH0v7),
        b = I ? u.StarIcon : u.StarOutlineIcon;
    s.useEffect(() => {
        if (!E) return;
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [E]);
    let y = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            v(!0),
            I
                ? (0, c.PF)(o)
                : ((0, c.uL)({
                      url: o,
                      src: i,
                      width: n,
                      height: r,
                      format: m
                  }),
                  f.S.dispatch(_.CkL.FAVORITE_GIF));
    };
    return (0, a.jsx)(u.Tooltip, {
        text: T,
        children: (e) =>
            (0, a.jsx)(u.Clickable, {
                ...e,
                className: l()(g, p.gifFavoriteButton, {
                    [p.selected]: I,
                    [p.showPulse]: E
                }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: y,
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, a.jsx)(b, {
                    color: 'currentColor',
                    className: p.icon,
                    size: 'custom',
                    width: 20,
                    height: 20
                })
            })
    });
});
