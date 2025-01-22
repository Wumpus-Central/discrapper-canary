var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(68405),
    d = r(985375),
    f = r(585483),
    p = r(981631),
    h = r(388032),
    _ = r(380538);
n.Z = o.memo(function (e) {
    let { width: n, height: r, src: i, url: s, format: m, className: g } = e,
        [E, v] = o.useState(!1),
        y = (0, d.hb)((0, c.iy)(s)),
        b = y ? h.intl.string(h.t['5/NS7+']) : h.intl.string(h.t.nIH0v7),
        I = y ? u.StarIcon : u.StarOutlineIcon;
    o.useEffect(() => {
        if (!E) return;
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [E]);
    let T = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            v(!0),
            y
                ? (0, c.PF)(s)
                : ((0, c.uL)({
                      url: s,
                      src: i,
                      width: n,
                      height: r,
                      format: m
                  }),
                  f.S.dispatch(p.CkL.FAVORITE_GIF));
    };
    return (0, a.jsx)(u.Tooltip, {
        text: b,
        children: (e) =>
            (0, a.jsx)(u.Clickable, {
                ...e,
                className: l()(g, _.gifFavoriteButton, {
                    [_.selected]: y,
                    [_.showPulse]: E
                }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: T,
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, a.jsx)(I, {
                    color: 'currentColor',
                    className: _.icon,
                    size: 'custom',
                    width: 20,
                    height: 20
                })
            })
    });
});
