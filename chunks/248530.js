l.d(r, { L: () => u });
var s,
    t = l(627968);
l(64700);
var a = l(503698),
    n = l.n(a),
    i = l(575087),
    o = l.n(i),
    d = l(661531),
    c = l(398355),
    m = (((s = m || {}).XSMALL = "xsmall"), (s.SMALL = "small"), (s.LARGE = "large"), s);
function u(e) {
    let {
            className: r,
            percents: l,
            size: s = "small",
            foregroundColors: a = [d.A.unsafe_rawColors.BRAND_500.css],
            backgroundColor: i = "var(--interactive-background-active)",
            animate: m = !0,
        } = e,
        u = o()(l ?? [], a)
            .map((e, r) => {
                let l,
                    [a, i] = e;
                return (
                    (l = Array.isArray(i)
                        ? { background: `linear-gradient(to right, ${i[0]}, ${i[1]})` }
                        : { backgroundColor: i }),
                    (0, t.jsx)(
                        "div",
                        {
                            className: n()(c.progressBar, c[s], { [c.animating]: m }),
                            style: {
                                transform: `translate3d(${Math.min(Math.max(0, a ?? 0), 100) - 100}%, 0, 0)`,
                                ...l,
                            },
                        },
                        r,
                    )
                );
            })
            .reverse();
    return (0, t.jsx)("div", { className: n()(r, c.progress, c[s]), style: { backgroundColor: i }, children: u });
}
u.Sizes = m;
