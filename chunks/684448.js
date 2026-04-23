"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(3026),
    o = n(834730),
    l = n(51183);
n(851883);
var u = n(124704);
function c(e) {
    let t,
        n,
        {
            customStatusActivity: i,
            textClassName: c,
            iconClassName: d,
            tooltipClassName: _,
            textSize: f = "xs",
            animateEmoji: p = !0,
            hideEmoji: h = !1,
            hideTooltip: E = !1,
        } = e;
    if (null == i) return null;
    let m = i?.emoji,
        g = i?.state,
        A = null != g && "" !== g,
        I = null;
    null == m || h || (I = (0, r.jsx)(l.A, { emoji: m, animate: p, className: d, hideTooltip: E || A }));
    let T = A && (null != I ? ` ${g}` : g);
    return (0, r.jsx)(o.E, {
        variant: `text-${f}/medium`,
        color: "none",
        className: s()(u.ps, c),
        children:
            ((t = null != m && !h && !A),
            (n = null != g && g.length > 30),
            E || t
                ? (0, r.jsxs)(r.Fragment, { children: [I, T] })
                : (0, r.jsxs)(a.A, {
                      delay: 150,
                      tooltipClassName: _,
                      className: s()({ [u.D7]: !n }),
                      children: [I, T],
                  })),
    });
}
