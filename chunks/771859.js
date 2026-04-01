"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(178090),
    l = n(602425),
    u = n(346640),
    c = n(429311),
    d = n(985018),
    _ = n(939642),
    f = n(934234),
    p = n(354298);
let h = { 0: c.default.hdakOK, 1: c.default.DVFPzC },
    m = 2500;
function E(e) {
    let { text: t, className: n } = e,
        s = (0, i.useRef)(0),
        l = (0, i.useRef)(0),
        [u, c] = (0, i.useState)("");
    return (
        (0, i.useEffect)(() => {
            let e = () => {
                let n = Date.now() - s.current,
                    r = Math.max(Math.min(n / m, 1), 0);
                c(t.substring(0, Math.floor(r * t.length))), n < m && (l.current = window.requestAnimationFrame(e));
            };
            return (
                (s.current = Date.now()),
                (l.current = window.requestAnimationFrame(e)),
                () => cancelAnimationFrame(l.current)
            );
        }, [t]),
        (0, r.jsxs)("div", {
            className: a()(_._, n),
            children: [
                (0, r.jsx)(o.A, { variant: "heading-xl/normal", className: _.g$, "aria-hidden": !0, children: t }),
                (0, r.jsx)(o.A, { variant: "heading-xl/normal", className: _.er, children: u }),
            ],
        })
    );
}
function g(e) {
    let { setScreen: t } = e,
        [n, s] = (0, i.useState)(0),
        a = (0, i.useCallback)(() => {
            0 === n ? s(1) : t(u.Q0.COMBAT_CLASS_SELECTION);
        }, [t, n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: _.Tp,
                children: [
                    (0, r.jsx)("div", { className: _.Kj }),
                    (0, r.jsxs)("div", {
                        className: _.qN,
                        children: [
                            (0, r.jsx)("div", { className: _.iM }),
                            (0, r.jsxs)("div", {
                                className: _.dL,
                                children: [
                                    (0, r.jsx)("img", { className: _.gV, src: f.A, alt: "" }),
                                    (0, r.jsxs)("div", {
                                        className: _.r3,
                                        children: [
                                            (0, r.jsx)(E, { className: _.Mu, text: d.intl.string(h[n]) }),
                                            (0, r.jsx)(l.A, {
                                                className: _.E5,
                                                text: d.intl.string(d.t.PDTjLN),
                                                onClick: a,
                                                color: "black",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: _.iM }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: _.I4 }),
                ],
            }),
            (0, r.jsx)("img", { src: p.A, alt: d.intl.string(c.default.UnXoXM), className: _.wm }),
        ],
    });
}
