"use strict";
n.d(t, { i: () => _ });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(460890),
    u = n(563852),
    d = (((r = d || {}).XXSMALL = "xxsmall"), (r.XSMALL = "xsmall"), (r.SMALL = "small"), (r.LARGE = "large"), r);
let c = "indeterminate";
function _(e) {
    let t,
        {
            className: n,
            percent: r,
            size: a = "small",
            foregroundColor: d = "var(--progressbar-indicator-background)",
            backgroundColor: _ = "var(--progressbar-track-background)",
            foregroundGradientColor: f,
            animate: E = !0,
            stepNumber: h,
            stepCount: p,
        } = e,
        { i18n: m } = (0, l.G9)(),
        g = null != r ? r : null != h && null != p ? (h / (p + 1)) * 100 : 0;
    t = null != f ? { background: `linear-gradient(to right, ${f[0]}, ${f[1]})` } : { backgroundColor: d };
    let A = s.useMemo(() => {
        let e = { role: "progressbar", "aria-label": "Progress Bar" };
        return (
            null != h && null != p
                ? ((e["aria-valuenow"] = h),
                  (e["aria-valuemin"] = 1),
                  (e["aria-valuemax"] = p),
                  (e["aria-label"] = m.STEP_INDICATOR(h, p)))
                : null != r &&
                  "number" == typeof r &&
                  ((e["aria-valuenow"] = r),
                  (e["aria-valuemin"] = 0),
                  (e["aria-valuemax"] = 100),
                  (e["aria-label"] = m.PERCENT_COMPLETE(Math.round(r)))),
            e
        );
    }, [h, p, r, m]);
    return (0, i.jsx)("div", {
        className: o()(n, u.progress, u[a]),
        style: { backgroundColor: _ },
        ...A,
        children:
            g !== c && "number" == typeof g
                ? (0, i.jsx)("div", {
                      className: o()(u.progressBar, u[a], { [u.animating]: E }),
                      style: { transform: `translate3d(${Math.min(Math.max(0, g), 100) - 100}%, 0, 0)`, ...t },
                  })
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)("div", {
                              className: o()(u.indeterminateBar1, u[a], { [u.animating]: E }),
                              style: t,
                          }),
                          (0, i.jsx)("div", {
                              className: o()(u.indeterminateBar2, u[a], { [u.animating]: E }),
                              style: t,
                          }),
                      ],
                  }),
    });
}
(_.Sizes = d), (_.INDETERMINATE = c);
