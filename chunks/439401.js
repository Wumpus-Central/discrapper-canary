r.d(t, { A: () => R });
var n = r(477900),
    s = r(582128),
    l = r(503698),
    i = r.n(l),
    a = r(27232),
    o = r(505930),
    u = r(866665),
    c = r(939249),
    d = r(497685),
    h = r(996566),
    m = r(594061),
    p = r(625494),
    g = r(652215),
    f = r(650583),
    I = r(375708),
    E = r(47299);
let R = s.memo(function (e) {
    let { width: t, height: r, src: l, gifSrc: R, url: _, format: y, className: S } = e,
        [v, C] = s.useState(!1),
        [A, w] = s.useState(!1),
        x = (0, h.km)((0, d.xo)(_), A),
        F = x ? I.intl.string(I.t["5/NS74"]) : I.intl.string(I.t.nIH0v8),
        T = x ? a.StarIcon : o.y;
    function N(e) {
        e.preventDefault(),
            e.stopPropagation(),
            C(!0),
            x
                ? (0, d.Tr)(_)
                : ((0, d.wg)({ url: _, src: l, gifSrc: R, width: t, height: r, format: y }),
                  p._.dispatch(g.jej.FAVORITE_GIF));
    }
    function G() {
        (0, m.cE)(), w(!0);
    }
    return (
        s.useEffect(() => {
            if (!v) return;
            let e = setTimeout(() => {
                C(!1);
            }, 500);
            return () => clearTimeout(e);
        }, [v]),
        (0, n.jsx)(u.m, {
            text: F,
            children: (0, n.jsx)(c.D, {
                "aria-label": F,
                ignoreKeyPress: !0,
                className: i()(S, E.jj, { [E.wH]: x, [E.TV]: v }),
                onMouseDown: (e) => e.preventDefault(),
                onMouseEnter: G,
                onFocus: G,
                onClick: N,
                onKeyDown: function (e) {
                    (e.key === f.dh.ENTER || e.key === f.dh.SPACE) && N(e);
                },
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, n.jsx)(T, {
                    color: "currentColor",
                    className: E.Kk,
                    size: "custom",
                    width: 20,
                    height: 20,
                }),
            }),
        })
    );
});
