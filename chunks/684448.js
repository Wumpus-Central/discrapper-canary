n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(3026),
    _ = n(834730),
    l = n(51183);
n(851883);
var o = n(124704);
function E(e) {
    let t,
        n,
        {
            customStatusActivity: r,
            textClassName: E,
            iconClassName: d,
            tooltipClassName: c,
            textSize: u = "xs",
            animateEmoji: I = !0,
            hideEmoji: A = !1,
            hideTooltip: T = !1,
        } = e;
    if (null == r) return null;
    let S = r?.emoji,
        N = r?.state,
        O = null != N && "" !== N,
        R = null;
    null == S || A || (R = (0, i.jsx)(l.A, { emoji: S, animate: I, className: d, hideTooltip: T || O }));
    let f = O && (null != R ? ` ${N}` : N);
    return (0, i.jsx)(_.E, {
        variant: `text-${u}/medium`,
        color: "none",
        className: a()(o.ps, E),
        children:
            ((t = null != S && !A && !O),
            (n = null != N && N.length > 30),
            T || t
                ? (0, i.jsxs)(i.Fragment, { children: [R, f] })
                : (0, i.jsxs)(s.A, {
                      delay: 150,
                      tooltipClassName: c,
                      className: a()({ [o.D7]: !n }),
                      children: [R, f],
                  })),
    });
}
