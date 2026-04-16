"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(692051),
    u = n(985018),
    c = n(83699);
function d(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        d = i.useRef(null),
        _ = (0, r.jsx)("div", {
            className: c.P0,
            ref: d,
            children: (0, r.jsx)(o.udU, { size: "xs", color: "currentColor", className: c.Kk }),
        });
    return (0, r.jsx)(l.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, r.jsx)("div", { className: c.Iv, children: _ })
                : (0, r.jsx)(o.DUT, {
                      className: a()(n, c.Iv, { [c.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": u.intl.string(u.t.RscU7I),
                      focusProps: { ringTarget: d },
                      children: _,
                  }),
    });
}
