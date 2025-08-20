n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(111028),
    l = n(359588),
    c = n(74340),
    u = n(19391),
    d = n(223135),
    f = n(741570),
    _ = n(584973),
    p = n(556638),
    h = n(80568);
function m(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: m,
            voiceChannel: g,
            hangStatus: E,
            textSize: b = "xs",
            animateEmoji: y = !0,
            hideEmoji: O = !1,
            hideTooltip: v = !1,
        } = e,
        I = (0, l.Z)({ location: "CustomStatusActivityStatus" }),
        T = (0, f.E)("ActivityStatus", g);
    if (null == t && null == E) return null;
    let S = null == t ? void 0 : t.emoji,
        A = null == t ? void 0 : t.state,
        C = I ? (0, c.Z)(t) : null,
        N = null != C ? "".concat((0, u.Z)(C), ": ") : null,
        R = null != A && "" !== A,
        P = R || null != C,
        w = null;
    null != E && T
        ? (w = (0, r.jsx)(d.Z, {
              className: a()(i, h.hangStatusIcon),
              hangStatusActivity: E,
          }))
        : null == S ||
          O ||
          (w = (0, r.jsx)(_.Z, {
              emoji: S,
              animate: y,
              className: i,
              hideTooltip: v || P,
          }));
    let D = R && (null != w ? " ".concat(A) : A),
        x = () => {
            let e = null != S && !O && !R && null == C;
            return v || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [N, w, D],
                  })
                : (0, r.jsxs)(s.Z, {
                      delay: p.X,
                      tooltipClassName: m,
                      children: [N, w, D],
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: "text-".concat(b, "/medium"),
        color: "none",
        className: a()(h.truncated, n),
        children: x(),
    });
}
