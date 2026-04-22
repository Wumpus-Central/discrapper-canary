"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(782134),
    o = n(939249),
    c = n(692051),
    u = n(985018),
    d = n(233651);
function h(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        h = l.useRef(null),
        m = (0, i.jsx)("div", {
            className: d.P0,
            ref: h,
            children: (0, i.jsx)(a.u, { size: "xs", color: "currentColor", className: d.Kk }),
        });
    return (0, i.jsx)(c.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, i.jsx)("div", { className: d.Iv, children: m })
                : (0, i.jsx)(o.D, {
                      className: r()(n, d.Iv, { [d.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": u.intl.string(u.t.RscU7I),
                      focusProps: { ringTarget: h },
                      children: m,
                  }),
    });
}
