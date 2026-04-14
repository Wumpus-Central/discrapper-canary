"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(3026),
    o = n(397927),
    l = n(51183);
n(851883);
var u = n(496496);
let c = 30;
function d(e) {
    let {
        customStatusActivity: t,
        textClassName: n,
        iconClassName: i,
        tooltipClassName: d,
        textSize: _ = "xs",
        animateEmoji: f = !0,
        hideEmoji: p = !1,
        hideTooltip: h = !1,
    } = e;
    if (null == t) return null;
    let m = t?.emoji,
        E = t?.state,
        g = null != E && "" !== E,
        A = null;
    null == m || p || (A = (0, r.jsx)(l.A, { emoji: m, animate: f, className: i, hideTooltip: h || g }));
    let I = g && (null != A ? ` ${E}` : E),
        T = () => {
            let e = null != m && !p && !g,
                t = null != E && E.length > c;
            return h || e
                ? (0, r.jsxs)(r.Fragment, { children: [A, I] })
                : (0, r.jsxs)(a.A, {
                      delay: 150,
                      tooltipClassName: d,
                      className: s()({ [u.D7]: !t }),
                      children: [A, I],
                  });
        };
    return (0, r.jsx)(o.Text, { variant: `text-${_}/medium`, color: "none", className: s()(u.ps, n), children: T() });
}
