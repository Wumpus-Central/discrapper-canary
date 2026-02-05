"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(692051),
    u = n(985018),
    c = n(364584);
function d(e) {
    let { onPlay: t, className: n, inactive: a } = e,
        d = i.useRef(null),
        _ = (0, r.jsx)("div", {
            className: c.P0,
            ref: d,
            children: (0, r.jsx)(o.udU, { size: "xs", color: "currentColor", className: c.Kk }),
        });
    return (0, r.jsx)(l.Y.Consumer, {
        children: (e) =>
            a || null == t
                ? (0, r.jsx)("div", { className: c.Iv, children: _ })
                : (0, r.jsx)(o.DUT, {
                      className: s()(n, c.Iv, { [c.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": u.intl.string(u.t.RscU7I),
                      focusProps: { ringTarget: d },
                      children: _,
                  }),
    });
}
