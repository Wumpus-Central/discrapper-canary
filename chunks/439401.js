r.d(t, { A: () => g });
var n = r(477900),
    i = r(582128),
    l = r(503698),
    o = r.n(l),
    a = r(27232),
    s = r(505930),
    u = r(866665),
    c = r(939249),
    d = r(497685),
    _ = r(996566),
    f = r(594061),
    E = r(625494),
    I = r(652215),
    h = r(650583),
    S = r(105292),
    m = r(47299);
let g = i.memo(function (e) {
    let { width: t, height: r, src: l, gifSrc: g, url: p, format: R, className: F } = e,
        [G, y] = i.useState(!1),
        [C, A] = i.useState(!1),
        T = (0, _.km)((0, d.xo)(p), C),
        w = T ? S.intl.string(S.t["5/NS74"]) : S.intl.string(S.t.nIH0v8),
        D = T ? a.StarIcon : s.y;
    function N(e) {
        (e.preventDefault(),
            e.stopPropagation(),
            y(!0),
            T
                ? (0, d.Tr)(p)
                : ((0, d.wg)({ url: p, src: l, gifSrc: g, width: t, height: r, format: R }),
                  E._.dispatch(I.jej.FAVORITE_GIF)));
    }
    function v() {
        ((0, f.cE)(), A(!0));
    }
    return (
        i.useEffect(() => {
            if (!G) return;
            let e = setTimeout(() => {
                y(!1);
            }, 500);
            return () => clearTimeout(e);
        }, [G]),
        (0, n.jsx)(u.m, {
            text: w,
            children: (0, n.jsx)(c.D, {
                "aria-label": w,
                ignoreKeyPress: !0,
                className: o()(F, m.jj, { [m.wH]: T, [m.TV]: G }),
                onMouseDown: (e) => e.preventDefault(),
                onMouseEnter: v,
                onFocus: v,
                onClick: N,
                onKeyDown: function (e) {
                    (e.key === h.dh.ENTER || e.key === h.dh.SPACE) && N(e);
                },
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, n.jsx)(D, {
                    color: "currentColor",
                    className: m.Kk,
                    size: "custom",
                    width: 20,
                    height: 20,
                }),
            }),
        })
    );
});
