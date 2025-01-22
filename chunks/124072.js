var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(866442),
    c = r(481060),
    d = r(779699),
    f = r(208450);
let p = (e) => {
    let { children: n, className: r, color: i, iconType: s, onMouseEnter: p, onMouseLeave: h, ..._ } = e,
        [m, g] = o.useState(!1),
        E = o.useCallback(
            (e) => {
                g(!0), null == p || p(e);
            },
            [g, p]
        ),
        v = o.useCallback(
            (e) => {
                g(!1), null == h || h(e);
            },
            [g, h]
        ),
        y = {};
    return (
        null != i &&
            (y = {
                color: (0, u.Rf)(i),
                backgroundColor: m ? (0, u.br)(i, 0.3) : (0, u.br)(i, 0.1)
            }),
        (0, a.jsx)(c.Clickable, {
            ..._,
            tag: 'span',
            className: l()(r, {
                [f.wrapper]: !0,
                interactive: _.onClick
            }),
            onMouseEnter: E,
            onMouseLeave: v,
            style: y,
            tabIndex: null != _.onClick ? 0 : -1,
            children:
                null != s
                    ? (0, a.jsx)(d.Z, {
                          iconType: s,
                          children: n
                      })
                    : n
        })
    );
};
n.Z = p;
