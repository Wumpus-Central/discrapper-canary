n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(68405),
    u = n(985375),
    c = n(585483),
    d = n(981631),
    f = n(388032),
    _ = n(802088);
let p = r.memo(function (e) {
    let { width: t, height: n, src: a, url: p, format: h, className: m } = e,
        [g, E] = r.useState(!1),
        v = (0, u.hb)((0, l.iy)(p)),
        y = v ? f.intl.string(f.t['5/NS7+']) : f.intl.string(f.t.nIH0v7),
        I = v ? o.r7p : o.vxU;
    r.useEffect(() => {
        if (!g) return;
        let e = setTimeout(() => {
            E(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [g]);
    let T = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            E(!0),
            v
                ? (0, l.PF)(p)
                : ((0, l.uL)({
                      url: p,
                      src: a,
                      width: t,
                      height: n,
                      format: h
                  }),
                  c.S.dispatch(d.CkL.FAVORITE_GIF));
    };
    return (0, i.jsx)(o.ua7, {
        text: y,
        children: (e) =>
            (0, i.jsx)(o.P3F, {
                ...e,
                className: s()(m, _.gifFavoriteButton, {
                    [_.selected]: v,
                    [_.showPulse]: g
                }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: T,
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, i.jsx)(I, {
                    color: 'currentColor',
                    className: _.icon,
                    size: 'custom',
                    width: 20,
                    height: 20
                })
            })
    });
});
