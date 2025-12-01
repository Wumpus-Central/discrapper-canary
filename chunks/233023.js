n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(194983),
    s = n(481060),
    l = n(574176),
    c = n(833858),
    u = n(223135),
    d = n(741570),
    f = n(584973),
    p = n(556638),
    _ = n(80568);
let m = 14;
function h(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: h,
            voiceChannel: g,
            hangStatus: E,
            userId: b,
            textSize: y = "xs",
            animateEmoji: O = !0,
            hideEmoji: v = !1,
            hideTooltip: S = !1,
        } = e,
        I = (0, d.E)("ActivityStatus", g),
        { defaultStatusVariant: T } = (0, l.bN)({
            guildId: null == g ? void 0 : g.guild_id,
            location: "CustomStatusActivityStatus",
        });
    if (null == t && null == E) return null;
    let A = null != E && I,
        C = A && null != b ? (0, c.O8)(b, E, T) : null,
        N = null == t ? void 0 : t.emoji,
        P = null != C ? C : null == t ? void 0 : t.state,
        R = null != P && "" !== P,
        w = null;
    A && null != b
        ? (w = (0, r.jsx)(u.Z, {
              userId: b,
              size: m,
              className: a()(i, _.hangStatusIcon),
              hangStatusActivity: E,
          }))
        : null == N ||
          v ||
          (w = (0, r.jsx)(f.Z, {
              emoji: N,
              animate: O,
              className: i,
              hideTooltip: S || R,
          }));
    let D = R && (null != w ? " ".concat(P) : P),
        x = () => {
            let e = null != N && !v && !R;
            return S || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [w, D],
                  })
                : (0, r.jsxs)(o.Z, {
                      delay: p.X,
                      tooltipClassName: h,
                      children: [w, D],
                  });
        };
    return (0, r.jsx)(s.Text, {
        variant: "text-".concat(y, "/medium"),
        color: "none",
        className: a()(_.truncated, n),
        children: x(),
    });
}
