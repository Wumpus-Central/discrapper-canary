"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(860923),
    u = n(816790);
let c = 5500,
    d = 150,
    _ = (e) => {
        let {
                id: t,
                occupant: n,
                x: a,
                y: _,
                assetKey: f,
                onClick: p,
                skipNewUserEducation: h = !1,
                shadowPosition: m,
            } = e,
            g = (0, l.A)(),
            E = i.useMemo(() => g?.seats[f], [g, f]),
            A = i.useMemo(() => E?.seat, [E]),
            I = i.useMemo(() => E?.shadow, [E]);
        return (0, r.jsx)(o.DUT, {
            "aria-label": "claim seat",
            onClick:
                null != p
                    ? (e) => {
                          e.preventDefault(), e.stopPropagation(), p(t);
                      }
                    : void 0,
            className: s()(u.am, { [u.Sf]: null != n }),
            style: { transform: `translate(${a}px, ${_}px)` },
            children: (0, r.jsxs)("div", {
                className: u.LU,
                children: [
                    null != I &&
                        null != m &&
                        (0, r.jsx)("img", {
                            className: s()(u.Sl, u.r7),
                            style: { transform: `translate(${m.x}px, ${m.y}px)` },
                            src: E?.shadow,
                            alt: "",
                        }),
                    null != A &&
                        (0, r.jsx)("img", {
                            onDragStart: (e) => e.preventDefault(),
                            className: s()(u.Sl, { [u.Sf]: null != n, [u.cb]: h }),
                            style: { animationDelay: `${c + d * t}ms` },
                            src: E?.seat,
                            alt: "",
                        }),
                ],
            }),
        });
    };
