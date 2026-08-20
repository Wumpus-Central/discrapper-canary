t.d(r, { L: () => m });
var l,
    s = t(477900);
t(582128);
var a = t(503698),
    n = t.n(a),
    i = t(797424),
    o = t.n(i),
    c = t(661531),
    d = t(228118),
    u = (((l = u || {}).XSMALL = "xsmall"), (l.SMALL = "small"), (l.LARGE = "large"), l);
function m(e) {
    let {
            className: r,
            percents: t,
            size: l = "small",
            foregroundColors: a = [c.A.unsafe_rawColors.BRAND_500.css],
            backgroundColor: i = "var(--interactive-background-active)",
            animate: u = !0,
        } = e,
        m = o()(t ?? [], a)
            .map((e, r) => {
                let t,
                    [a, i] = e;
                return (
                    (t = Array.isArray(i)
                        ? { background: `linear-gradient(to right, ${i[0]}, ${i[1]})` }
                        : { backgroundColor: i }),
                    (0, s.jsx)(
                        "div",
                        {
                            className: n()(d.progressBar, d[l], { [d.animating]: u }),
                            style: {
                                transform: `translate3d(${Math.min(Math.max(0, a ?? 0), 100) - 100}%, 0, 0)`,
                                ...t,
                            },
                        },
                        r,
                    )
                );
            })
            .reverse();
    return (0, s.jsx)("div", { className: n()(r, d.progress, d[l]), style: { backgroundColor: i }, children: m });
}
m.Sizes = u;
