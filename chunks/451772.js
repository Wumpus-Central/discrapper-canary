"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(860923),
    u = n(335827);
let d = (e) => {
    let {
            id: t,
            occupant: n,
            x: s,
            y: d,
            assetKey: c,
            onClick: _,
            skipNewUserEducation: f = !1,
            shadowPosition: E,
        } = e,
        h = (0, l.A)(),
        p = i.useMemo(() => h?.seats[c], [h, c]),
        m = i.useMemo(() => p?.seat, [p]),
        g = i.useMemo(() => p?.shadow, [p]);
    return (0, r.jsx)(o.D, {
        "aria-label": "claim seat",
        onClick:
            null != _
                ? (e) => {
                      e.preventDefault(), e.stopPropagation(), _(t);
                  }
                : void 0,
        className: a()(u.am, { [u.Sf]: null != n }),
        style: { transform: `translate(${s}px, ${d}px)` },
        children: (0, r.jsxs)("div", {
            className: u.LU,
            children: [
                null != g &&
                    null != E &&
                    (0, r.jsx)("img", {
                        className: a()(u.Sl, u.r7),
                        style: { transform: `translate(${E.x}px, ${E.y}px)` },
                        src: p?.shadow,
                        alt: "",
                    }),
                null != m &&
                    (0, r.jsx)("img", {
                        onDragStart: (e) => e.preventDefault(),
                        className: a()(u.Sl, { [u.Sf]: null != n, [u.cb]: f }),
                        style: { animationDelay: `${5500 + 150 * t}ms` },
                        src: p?.seat,
                        alt: "",
                    }),
            ],
        }),
    });
};
