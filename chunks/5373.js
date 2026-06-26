e.d(r, { i: () => c });
var l,
    n = e(627968),
    s = e(64700),
    i = e(503698),
    t = e.n(i),
    u = e(460890),
    m = e(214028),
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
            animate: p = !0,
            stepNumber: v,
            stepCount: b,
        } = a,
        { i18n: x } = (0, u.G9)(),
        h = null != l ? l : null != v && null != b ? (v / (b + 1)) * 100 : 0;
    r = null != g ? { background: `linear-gradient(to right, ${g[0]}, ${g[1]})` } : { backgroundColor: o };
    let k = s.useMemo(() => {
        let a = { role: "progressbar", "aria-label": "Progress Bar" };
        if (null != v && null != b)
            (a["aria-valuenow"] = v),
                (a["aria-valuemin"] = 1),
                (a["aria-valuemax"] = b),
                (a["aria-label"] = x.STEP_INDICATOR(v, b));
        else if (null != l && "number" == typeof l) {
            let r = Math.round(l);
            (a["aria-valuenow"] = r),
                (a["aria-valuemin"] = 0),
                (a["aria-valuemax"] = 100),
                (a["aria-valuetext"] = x.PERCENT_COMPLETE(r));
        }
        return a;
    }, [v, b, l, x]);
    return (0, n.jsx)("div", {
        className: t()(e, m.progress, m[i]),
        style: { backgroundColor: c },
        ...k,
        children:
            h !== d && "number" == typeof h
                ? (0, n.jsx)("div", {
                      className: t()(m.progressBar, m[i], { [m.animating]: p }),
                      style: { transform: `translate3d(${Math.min(Math.max(0, h), 100) - 100}%, 0, 0)`, ...r },
                  })
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: t()(m.indeterminateBar1, m[i], { [m.animating]: p }),
                              style: r,
                          }),
                          (0, n.jsx)("div", {
                              className: t()(m.indeterminateBar2, m[i], { [m.animating]: p }),
                              style: r,
                          }),
                      ],
                  }),
    });
}
(c.Sizes = o), (c.INDETERMINATE = d);
