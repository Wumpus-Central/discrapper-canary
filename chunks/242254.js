"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(782134),
    l = n(939249),
    u = n(692051),
    c = n(985018),
    d = n(83699);
function _(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        _ = i.useRef(null),
        f = (0, r.jsx)("div", {
            className: d.P0,
            ref: _,
            children: (0, r.jsx)(o.u, { size: "xs", color: "currentColor", className: d.Kk }),
        });
    return (0, r.jsx)(u.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, r.jsx)("div", { className: d.Iv, children: f })
                : (0, r.jsx)(l.D, {
                      className: a()(n, d.Iv, { [d.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": c.intl.string(c.t.RscU7I),
                      focusProps: { ringTarget: _ },
                      children: f,
                  }),
    });
}
