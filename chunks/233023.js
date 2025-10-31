n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(194983),
    s = n(481060),
    l = n(574176),
    c = n(833858),
    u = n(223135),
    d = n(741570),
    f = n(584973),
    _ = n(556638),
    p = n(80568);
let h = 14;
function m(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: m,
            voiceChannel: g,
            hangStatus: E,
            userId: b,
            textSize: y = "xs",
            animateEmoji: O = !0,
            hideEmoji: v = !1,
            hideTooltip: I = !1,
        } = e,
        T = (0, d.E)("ActivityStatus", g),
        { defaultStatusVariant: S } = (0, l.bN)({
            guildId: null == g ? void 0 : g.guild_id,
            location: "CustomStatusActivityStatus",
        });
    if (null == t && null == E) return null;
    let A = null != E && T,
        C = A && null != b ? (0, c.O8)(b, E, S) : null,
        N = null == t ? void 0 : t.emoji,
        R = null != C ? C : null == t ? void 0 : t.state,
        P = null != R && "" !== R,
        w = null;
    A && null != b
        ? (w = (0, r.jsx)(u.Z, {
              userId: b,
              size: h,
              className: a()(i, p.hangStatusIcon),
              hangStatusActivity: E,
          }))
        : null == N ||
          v ||
          (w = (0, r.jsx)(f.Z, {
              emoji: N,
              animate: O,
              className: i,
              hideTooltip: I || P,
          }));
    let D = P && (null != w ? " ".concat(R) : R),
        x = () => {
            let e = null != N && !v && !P;
            return I || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [w, D],
                  })
                : (0, r.jsxs)(o.Z, {
                      delay: _.X,
                      tooltipClassName: m,
                      children: [w, D],
                  });
        };
    return (0, r.jsx)(s.Text, {
        variant: "text-".concat(y, "/medium"),
        color: "none",
        className: a()(p.truncated, n),
        children: x(),
    });
}
