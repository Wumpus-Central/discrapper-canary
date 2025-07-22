n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(111028),
    l = n(359588),
    c = n(74340),
    u = n(19391),
    d = n(584973),
    f = n(556638),
    _ = n(843280);
function p(e) {
    let { customStatusActivity: t, textClassName: n, iconClassName: i, tooltipClassName: p, textSize: h = 'xs', animateEmoji: m = !0, hideEmoji: g = !1, hideTooltip: E = !1 } = e,
        b = (0, l.Z)({ location: 'CustomStatusActivityStatus' }),
        y = t.emoji,
        O = t.state,
        v = b ? (0, c.Z)(t) : null,
        I = null != v ? ''.concat((0, u.Z)(v), ': ') : null,
        T = null != O && '' !== O,
        S = T || null != v,
        A =
            null == y || g
                ? null
                : (0, r.jsx)(d.Z, {
                      emoji: y,
                      animate: m,
                      className: i,
                      hideTooltip: E || S
                  }),
        N = T && (null != A ? ' '.concat(O) : O),
        C = () => {
            let e = null != y && !g && !T && null == v;
            return E || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [I, A, N]
                  })
                : (0, r.jsxs)(s.Z, {
                      delay: f.X,
                      tooltipClassName: p,
                      children: [I, A, N]
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: 'text-'.concat(h, '/medium'),
        color: 'none',
        className: a()(_.truncated, n),
        children: C()
    });
}
