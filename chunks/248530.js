n.d(t, { L: () => m });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(575087),
    o = n.n(a),
    d = n(827734),
    c = n(398355),
    u = (((i = u || {}).XSMALL = "xsmall"), (i.SMALL = "small"), (i.LARGE = "large"), i);
function m(e) {
    let {
            className: t,
            percents: n,
            size: i = "small",
            foregroundColors: s = [d.A.unsafe_rawColors.BRAND_500.css],
            backgroundColor: a = "var(--interactive-background-active)",
            animate: u = !0,
        } = e,
        m = o()(n ?? [], s)
            .map((e, t) => {
                let n,
                    [s, a] = e;
                return (
                    (n = Array.isArray(a)
                        ? { background: `linear-gradient(to right, ${a[0]}, ${a[1]})` }
                        : { backgroundColor: a }),
                    (0, l.jsx)(
                        "div",
                        {
                            className: r()(c.progressBar, c[i], { [c.animating]: u }),
                            style: {
                                transform: `translate3d(${Math.min(Math.max(0, s ?? 0), 100) - 100}%, 0, 0)`,
                                ...n,
                            },
                        },
                        t,
                    )
                );
            })
            .reverse();
    return (0, l.jsx)("div", { className: r()(t, c.progress, c[i]), style: { backgroundColor: a }, children: m });
}
m.Sizes = u;
