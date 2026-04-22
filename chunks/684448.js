n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(3026),
    s = n(834730),
    o = n(51183);
n(851883);
var u = n(124704);
function c(e) {
    let t,
        n,
        {
            customStatusActivity: l,
            textClassName: c,
            iconClassName: d,
            tooltipClassName: _,
            textSize: p = "xs",
            animateEmoji: h = !0,
            hideEmoji: m = !1,
            hideTooltip: A = !1,
        } = e;
    if (null == l) return null;
    let f = l?.emoji,
        g = l?.state,
        E = null != g && "" !== g,
        C = null;
    null == f || m || (C = (0, r.jsx)(o.A, { emoji: f, animate: h, className: d, hideTooltip: A || E }));
    let I = E && (null != C ? ` ${g}` : g);
    return (0, r.jsx)(s.E, {
        variant: `text-${p}/medium`,
        color: "none",
        className: i()(u.ps, c),
        children:
            ((t = null != f && !m && !E),
            (n = null != g && g.length > 30),
            A || t
                ? (0, r.jsxs)(r.Fragment, { children: [C, I] })
                : (0, r.jsxs)(a.A, {
                      delay: 150,
                      tooltipClassName: _,
                      className: i()({ [u.D7]: !n }),
                      children: [C, I],
                  })),
    });
}
