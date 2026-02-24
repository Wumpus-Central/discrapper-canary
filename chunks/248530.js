"use strict";
n.d(t, { L: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(575087),
    o = n.n(a),
    l = n(827734),
    u = n(6346),
    c = (function (e) {
        return (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.LARGE = "large"), e;
    })(c || {});
function d(e) {
    let {
            className: t,
            percents: n,
            size: i = "small",
            foregroundColors: a = [l.A.unsafe_rawColors.BRAND_500.css],
            backgroundColor: c = "var(--interactive-background-active)",
            animate: d = !0,
        } = e,
        _ = o()(n ?? [], a)
            .map((e, t) => {
                let n,
                    [a, o] = e;
                return (
                    (n = Array.isArray(o)
                        ? { background: `linear-gradient(to right, ${o[0]}, ${o[1]})` }
                        : { backgroundColor: o }),
                    (0, r.jsx)(
                        "div",
                        {
                            className: s()(u.progressBar, u[i], { [u.animating]: d }),
                            style: {
                                transform: `translate3d(${Math.min(Math.max(0, a ?? 0), 100) - 100}%, 0, 0)`,
                                ...n,
                            },
                        },
                        t,
                    )
                );
            })
            .reverse();
    return (0, r.jsx)("div", { className: s()(t, u.progress, u[i]), style: { backgroundColor: c }, children: _ });
}
d.Sizes = c;
