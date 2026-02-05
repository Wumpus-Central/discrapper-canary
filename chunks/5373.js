"use strict";
n.d(t, { i: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(460890),
    l = n(830149),
    u = (function (e) {
        return (e.XXSMALL = "xxsmall"), (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.LARGE = "large"), e;
    })(u || {});
let c = "indeterminate";
function d(e) {
    let t,
        {
            className: n,
            percent: a,
            size: u = "small",
            foregroundColor: d = "var(--progressbar-indicator-background)",
            backgroundColor: _ = "var(--progressbar-track-background)",
            foregroundGradientColor: f,
            animate: p = !0,
            stepNumber: h,
            stepCount: m,
        } = e,
        { i18n: g } = (0, o.G9)(),
        E = null != a ? a : null != h && null != m ? (h / (m + 1)) * 100 : 0;
    t = null != f ? { background: `linear-gradient(to right, ${f[0]}, ${f[1]})` } : { backgroundColor: d };
    let A = i.useMemo(() => {
        let e = { role: "progressbar", "aria-label": "Progress Bar" };
        return (
            null != h && null != m
                ? ((e["aria-valuenow"] = h),
                  (e["aria-valuemin"] = 1),
                  (e["aria-valuemax"] = m),
                  (e["aria-label"] = g.STEP_INDICATOR(h, m)))
                : null != a &&
                  "number" == typeof a &&
                  ((e["aria-valuenow"] = a),
                  (e["aria-valuemin"] = 0),
                  (e["aria-valuemax"] = 100),
                  (e["aria-label"] = g.PERCENT_COMPLETE(Math.round(a)))),
            e
        );
    }, [h, m, a, g]);
    return (0, r.jsx)("div", {
        className: s()(n, l.progress, l[u]),
        style: { backgroundColor: _ },
        ...A,
        children:
            E !== c && "number" == typeof E
                ? (0, r.jsx)("div", {
                      className: s()(l.progressBar, l[u], { [l.animating]: p }),
                      style: { transform: `translate3d(${Math.min(Math.max(0, E), 100) - 100}%, 0, 0)`, ...t },
                  })
                : (0, r.jsxs)(i.Fragment, {
                      children: [
                          (0, r.jsx)("div", {
                              className: s()(l.indeterminateBar1, l[u], { [l.animating]: p }),
                              style: t,
                          }),
                          (0, r.jsx)("div", {
                              className: s()(l.indeterminateBar2, l[u], { [l.animating]: p }),
                              style: t,
                          }),
                      ],
                  }),
    });
}
(d.Sizes = u), (d.INDETERMINATE = c);
