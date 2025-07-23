n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(111028),
    l = n(359588),
    c = n(74340),
    u = n(19391),
    d = n(223135),
    _ = n(741570),
    f = n(584973),
    p = n(556638),
    h = n(843280);
function m(e) {
    let { customStatusActivity: t, textClassName: n, iconClassName: i, tooltipClassName: m, voiceChannel: g, hangStatus: E, textSize: b = 'xs', animateEmoji: y = !0, hideEmoji: O = !1, hideTooltip: v = !1 } = e,
        I = (0, l.Z)({ location: 'CustomStatusActivityStatus' }),
        T = (0, _.E)('ActivityStatus', g);
    if (null == t && null == E) return null;
    let S = null == t ? void 0 : t.emoji,
        A = null == t ? void 0 : t.state,
        N = I ? (0, c.Z)(t) : null,
        C = null != N ? ''.concat((0, u.Z)(N), ': ') : null,
        R = null != A && '' !== A,
        P = R || null != N,
        w = null;
    null != E && T
        ? (w = (0, r.jsx)(d.Z, {
              className: a()(i, h.hangStatusIcon),
              hangStatusActivity: E
          }))
        : null == S ||
          O ||
          (w = (0, r.jsx)(f.Z, {
              emoji: S,
              animate: y,
              className: i,
              hideTooltip: v || P
          }));
    let D = R && (null != w ? ' '.concat(A) : A),
        L = () => {
            let e = null != S && !O && !R && null == N;
            return v || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [C, w, D]
                  })
                : (0, r.jsxs)(s.Z, {
                      delay: p.X,
                      tooltipClassName: m,
                      children: [C, w, D]
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: 'text-'.concat(b, '/medium'),
        color: 'none',
        className: a()(h.truncated, n),
        children: L()
    });
}
