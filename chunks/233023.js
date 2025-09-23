n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(111028),
    l = n(574176),
    c = n(833858),
    u = n(223135),
    d = n(741570),
    f = n(584973),
    _ = n(556638),
    p = n(666998);
let h = 14;
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
        I = (0, d.E)("ActivityStatus", g),
        { defaultStatusVariant: T } = l.n.useExperiment({
            guildId: null == g ? void 0 : g.guild_id,
            location: "CustomStatusActivityStatus",
        });
    if (null == t && null == E) return null;
    let S = null != E && I,
        A = S ? (0, c.O8)(E, T) : null,
        C = null == t ? void 0 : t.emoji,
        N = null != A ? A : null == t ? void 0 : t.state,
        R = null != N && "" !== N,
        P = null;
    S
        ? (P = (0, r.jsx)(u.Z, {
              size: h,
              className: a()(i, p.hangStatusIcon),
              hangStatusActivity: E,
          }))
        : null == C ||
          O ||
          (P = (0, r.jsx)(f.Z, {
              emoji: C,
              animate: y,
              className: i,
              hideTooltip: v || R,
          }));
    let w = R && (null != P ? " ".concat(N) : N),
        D = () => {
            let e = null != C && !O && !R;
            return v || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [P, w],
                  })
                : (0, r.jsxs)(s.Z, {
                      delay: _.X,
                      tooltipClassName: m,
                      children: [P, w],
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: "text-".concat(b, "/medium"),
        color: "none",
        className: a()(p.truncated, n),
        children: D(),
    });
}
