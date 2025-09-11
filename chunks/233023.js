n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(111028),
    l = n(223135),
    c = n(741570),
    u = n(584973),
    d = n(556638),
    f = n(666998);
let _ = 14;
function p(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: p,
            voiceChannel: h,
            hangStatus: m,
            textSize: g = "xs",
            animateEmoji: E = !0,
            hideEmoji: b = !1,
            hideTooltip: y = !1,
        } = e,
        O = (0, c.E)("ActivityStatus", h);
    if (null == t && null == m) return null;
    let v = null == t ? void 0 : t.emoji,
        I = null == t ? void 0 : t.state,
        T = null != I && "" !== I,
        S = null;
    null != m && O
        ? (S = (0, r.jsx)(l.Z, {
              size: _,
              className: a()(i, f.hangStatusIcon),
              hangStatusActivity: m,
          }))
        : null == v ||
          b ||
          (S = (0, r.jsx)(u.Z, {
              emoji: v,
              animate: E,
              className: i,
              hideTooltip: y || T,
          }));
    let A = T && (null != S ? " ".concat(I) : I),
        C = () => {
            let e = null != v && !b && !T;
            return y || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [S, A],
                  })
                : (0, r.jsxs)(s.Z, {
                      delay: d.X,
                      tooltipClassName: p,
                      children: [S, A],
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: "text-".concat(g, "/medium"),
        color: "none",
        className: a()(f.truncated, n),
        children: C(),
    });
}
