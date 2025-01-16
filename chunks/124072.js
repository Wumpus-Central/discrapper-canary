var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(866442),
    c = r(481060),
    d = r(779699),
    f = r(208450);
let _ = (e) => {
    let { children: n, className: r, color: i, iconType: o, onMouseEnter: _, onMouseLeave: h, ...p } = e,
        [m, g] = s.useState(!1),
        E = s.useCallback(
            (e) => {
                g(!0), null == _ || _(e);
            },
            [g, _]
        ),
        v = s.useCallback(
            (e) => {
                g(!1), null == h || h(e);
            },
            [g, h]
        ),
        I = {};
    return (
        null != i &&
            (I = {
                color: (0, u.Rf)(i),
                backgroundColor: m ? (0, u.br)(i, 0.3) : (0, u.br)(i, 0.1)
            }),
        (0, a.jsx)(c.Clickable, {
            ...p,
            tag: 'span',
            className: l()(r, {
                [f.wrapper]: !0,
                interactive: p.onClick
            }),
            onMouseEnter: E,
            onMouseLeave: v,
            style: I,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != o
                    ? (0, a.jsx)(d.Z, {
                          iconType: o,
                          children: n
                      })
                    : n
        })
    );
};
n.Z = _;
