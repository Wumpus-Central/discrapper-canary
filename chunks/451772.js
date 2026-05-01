"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(860923),
    u = n(335827);
let c = (e) => {
    let {
            id: t,
            occupant: n,
            x: s,
            y: c,
            assetKey: d,
            onClick: _,
            skipNewUserEducation: f = !1,
            shadowPosition: h,
        } = e,
        p = (0, l.A)(),
        E = r.useMemo(() => p?.seats[d], [p, d]),
        m = r.useMemo(() => E?.seat, [E]),
        g = r.useMemo(() => E?.shadow, [E]);
    return (0, i.jsx)(o.D, {
        "aria-label": "claim seat",
        onClick:
            null != _
                ? (e) => {
                      e.preventDefault(), e.stopPropagation(), _(t);
                  }
                : void 0,
        className: a()(u.am, { [u.Sf]: null != n }),
        style: { transform: `translate(${s}px, ${c}px)` },
        children: (0, i.jsxs)("div", {
            className: u.LU,
            children: [
                null != g &&
                    null != h &&
                    (0, i.jsx)("img", {
                        className: a()(u.Sl, u.r7),
                        style: { transform: `translate(${h.x}px, ${h.y}px)` },
                        src: E?.shadow,
                        alt: "",
                    }),
                null != m &&
                    (0, i.jsx)("img", {
                        onDragStart: (e) => e.preventDefault(),
                        className: a()(u.Sl, { [u.Sf]: null != n, [u.cb]: f }),
                        style: { animationDelay: `${5500 + 150 * t}ms` },
                        src: E?.seat,
                        alt: "",
                    }),
            ],
        }),
    });
};
