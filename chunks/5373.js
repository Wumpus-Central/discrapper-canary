e.d(r, { i: () => c });
var l,
    n = e(627968),
    s = e(64700),
    i = e(503698),
    t = e.n(i),
    u = e(460890),
    m = e(563852),
    o = (((l = o || {}).XXSMALL = "xxsmall"), (l.XSMALL = "xsmall"), (l.SMALL = "small"), (l.LARGE = "large"), l);
let d = "indeterminate";
function c(a) {
    let r,
        {
            className: e,
            percent: l,
            size: i = "small",
            foregroundColor: o = "var(--progressbar-indicator-background)",
            backgroundColor: c = "var(--progressbar-track-background)",
            foregroundGradientColor: g,
            animate: b = !0,
            stepNumber: p,
            stepCount: v,
        } = a,
        { i18n: h } = (0, u.G9)(),
        x = null != l ? l : null != p && null != v ? (p / (v + 1)) * 100 : 0;
    r = null != g ? { background: `linear-gradient(to right, ${g[0]}, ${g[1]})` } : { backgroundColor: o };
    let k = s.useMemo(() => {
        let a = { role: "progressbar", "aria-label": "Progress Bar" };
        return (
            null != p && null != v
                ? ((a["aria-valuenow"] = p),
                  (a["aria-valuemin"] = 1),
                  (a["aria-valuemax"] = v),
                  (a["aria-label"] = h.STEP_INDICATOR(p, v)))
                : null != l &&
                  "number" == typeof l &&
                  ((a["aria-valuenow"] = l),
                  (a["aria-valuemin"] = 0),
                  (a["aria-valuemax"] = 100),
                  (a["aria-label"] = h.PERCENT_COMPLETE(Math.round(l)))),
            a
        );
    }, [p, v, l, h]);
    return (0, n.jsx)("div", {
        className: t()(e, m.progress, m[i]),
        style: { backgroundColor: c },
        ...k,
        children:
            x !== d && "number" == typeof x
                ? (0, n.jsx)("div", {
                      className: t()(m.progressBar, m[i], { [m.animating]: b }),
                      style: { transform: `translate3d(${Math.min(Math.max(0, x), 100) - 100}%, 0, 0)`, ...r },
                  })
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: t()(m.indeterminateBar1, m[i], { [m.animating]: b }),
                              style: r,
                          }),
                          (0, n.jsx)("div", {
                              className: t()(m.indeterminateBar2, m[i], { [m.animating]: b }),
                              style: r,
                          }),
                      ],
                  }),
    });
}
(c.Sizes = o), (c.INDETERMINATE = d);
