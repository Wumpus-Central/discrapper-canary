n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(780645),
    l = n(834730),
    o = n(51183);
n(851883);
var d = n(124704);
function c(e) {
    let t,
        n,
        {
            customStatusActivity: a,
            textClassName: c,
            iconClassName: _,
            tooltipClassName: E,
            textSize: u = "xs",
            animateEmoji: A = !0,
            hideEmoji: I = !1,
            hideTooltip: T = !1,
        } = e;
    if (null == a) return null;
    let h = a?.emoji,
        S = a?.state,
        N = null != S && "" !== S,
        f = null;
    null == h || I || (f = (0, i.jsx)(o.A, { emoji: h, animate: A, className: _, hideTooltip: T || N }));
    let p = N && (null != f ? ` ${S}` : S);
    return (0, i.jsx)(l.E, {
        variant: `text-${u}/medium`,
        color: "none",
        className: r()(d.ps, c),
        children:
            ((t = null != h && !I && !N),
            (n = null != S && S.length > 30),
            T || t
                ? (0, i.jsxs)(i.Fragment, { children: [f, p] })
                : (0, i.jsxs)(s.A, {
                      delay: 150,
                      tooltipClassName: E,
                      className: r()({ [d.D7]: !n }),
                      children: [f, p],
                  })),
    });
}
