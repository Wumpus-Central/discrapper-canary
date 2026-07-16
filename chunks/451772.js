"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(860923),
    d = n(335827);
let c = function (e) {
    let {
            id: t,
            occupant: n,
            x: a,
            y: c,
            assetKey: u,
            onClick: _,
            skipNewUserEducation: E = !1,
            shadowPosition: A,
        } = e,
        h = (0, o.A)(),
        I = r.useMemo(() => h?.seats[u], [h, u]),
        f = r.useMemo(() => I?.seat, [I]),
        p = r.useMemo(() => I?.shadow, [I]);
    return (0, i.jsx)(l.D, {
        "aria-label": "claim seat",
        onClick:
            null != _
                ? (e) => {
                      e.preventDefault(), e.stopPropagation(), _(t);
                  }
                : void 0,
        className: s()(d.am, { [d.Sf]: null != n }),
        style: { transform: `translate(${a}px, ${c}px)` },
        children: (0, i.jsxs)("div", {
            className: d.LU,
            children: [
                null != p &&
                    null != A &&
                    (0, i.jsx)("img", {
                        className: s()(d.Sl, d.r7),
                        style: { transform: `translate(${A.x}px, ${A.y}px)` },
                        src: I?.shadow,
                        alt: "",
                    }),
                null != f &&
                    (0, i.jsx)("img", {
                        onDragStart: (e) => e.preventDefault(),
                        className: s()(d.Sl, { [d.Sf]: null != n, [d.cb]: E }),
                        style: { animationDelay: `${5500 + 150 * t}ms` },
                        src: I?.seat,
                        alt: "",
                    }),
            ],
        }),
    });
};
