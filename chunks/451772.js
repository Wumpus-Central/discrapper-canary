"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
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
            shadowPosition: p,
        } = e,
        h = (0, l.A)(),
        E = i.useMemo(() => h?.seats[d], [h, d]),
        m = i.useMemo(() => E?.seat, [E]),
        g = i.useMemo(() => E?.shadow, [E]);
    return (0, r.jsx)(o.D, {
        "aria-label": "claim seat",
        onClick:
            null != _
                ? (e) => {
                      e.preventDefault(), e.stopPropagation(), _(t);
                  }
                : void 0,
        className: a()(u.am, { [u.Sf]: null != n }),
        style: { transform: `translate(${s}px, ${c}px)` },
        children: (0, r.jsxs)("div", {
            className: u.LU,
            children: [
                null != g &&
                    null != p &&
                    (0, r.jsx)("img", {
                        className: a()(u.Sl, u.r7),
                        style: { transform: `translate(${p.x}px, ${p.y}px)` },
                        src: E?.shadow,
                        alt: "",
                    }),
                null != m &&
                    (0, r.jsx)("img", {
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
