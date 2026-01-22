n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(3026),
    o = n(397927),
    l = n(140547),
    c = n(886019),
    u = n(559405),
    d = n(890330),
    f = n(51183);
n(851883);
var p = n(123511);
let _ = 14;

function h(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: h,
            voiceChannel: m,
            hangStatus: g,
            userId: E,
            textSize: b = "xs",
            animateEmoji: y = !0,
            hideEmoji: O = !1,
            hideTooltip: A = !1,
        } = e,
        v = (0, d.v)("ActivityStatus", m),
        { defaultStatusVariant: S } = (0, l.$j)({
            guildId: null == m ? void 0 : m.guild_id,
            location: "CustomStatusActivityStatus",
        });
    if (null == t && null == g) return null;
    let I = null != g && v,
        T = I && null != E ? (0, c.Au)(E, g, S) : null,
        C = null == t ? void 0 : t.emoji,
        N = null != T ? T : null == t ? void 0 : t.state,
        R = null != N && "" !== N,
        w = null;
    I && null != E
        ? (w = (0, r.jsx)(u.A, {
              userId: E,
              size: _,
              className: a()(i, p.W9),
              hangStatusActivity: g,
          }))
        : null == C ||
          O ||
          (w = (0, r.jsx)(f.A, {
              emoji: C,
              animate: y,
              className: i,
              hideTooltip: A || R,
          }));
    let P = R && (null != w ? " ".concat(N) : N),
        D = () => {
            let e = null != C && !O && !R;
            return A || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [w, P],
                  })
                : (0, r.jsxs)(s.A, {
                      delay: 150,
                      tooltipClassName: h,
                      children: [w, P],
                  });
        };
    return (0, r.jsx)(o.Text, {
        variant: "text-".concat(b, "/medium"),
        color: "none",
        className: a()(p.ps, n),
        children: D(),
    });
}
