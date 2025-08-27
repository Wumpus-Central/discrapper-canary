n.d(t, { Z: () => _ });
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
    f = n(80568);
function _(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: _,
            voiceChannel: p,
            hangStatus: h,
            textSize: m = "xs",
            animateEmoji: g = !0,
            hideEmoji: E = !1,
            hideTooltip: b = !1,
        } = e,
        y = (0, c.E)("ActivityStatus", p);
    if (null == t && null == h) return null;
    let O = null == t ? void 0 : t.emoji,
        v = null == t ? void 0 : t.state,
        I = null != v && "" !== v,
        T = null;
    null != h && y
        ? (T = (0, r.jsx)(l.Z, {
              className: a()(i, f.hangStatusIcon),
              hangStatusActivity: h,
          }))
        : null == O ||
          E ||
          (T = (0, r.jsx)(u.Z, {
              emoji: O,
              animate: g,
              className: i,
              hideTooltip: b || I,
          }));
    let S = I && (null != T ? " ".concat(v) : v),
        A = () => {
            let e = null != O && !E && !I;
            return b || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [T, S],
                  })
                : (0, r.jsxs)(s.Z, {
                      delay: d.X,
                      tooltipClassName: _,
                      children: [T, S],
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: "text-".concat(m, "/medium"),
        color: "none",
        className: a()(f.truncated, n),
        children: A(),
    });
}
