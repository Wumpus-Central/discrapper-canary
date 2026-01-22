n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(692051),
    c = n(985018),
    u = n(364584);

function d(e) {
    let { onPlay: t, className: n, inactive: a } = e,
        d = i.useRef(null),
        f = (0, r.jsx)("div", {
            className: u.P0,
            ref: d,
            children: (0, r.jsx)(o.udU, {
                size: "xs",
                color: "currentColor",
                className: u.Kk,
            }),
        });
    return (0, r.jsx)(l.Y.Consumer, {
        children: (e) =>
            a || null == t
                ? (0, r.jsx)("div", {
                      className: u.Iv,
                      children: f,
                  })
                : (0, r.jsx)(o.DUT, {
                      className: s()(n, u.Iv, {
                          [u.vu]: !e.disableInteractions,
                      }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": c.intl.string(c.t.RscU7I),
                      focusProps: {
                          ringTarget: d,
                      },
                      children: f,
                  }),
    });
}
