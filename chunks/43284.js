n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927),
    l = n(51183),
    c = n(140547),
    u = n(886019),
    d = n(559405),
    f = n(890330),
    p = n(613125);
n(851883);
var _ = n(123511);
let h = 14;

function m(e) {
    var t;
    let {
            customStatusActivity: n,
            iconClassName: i,
            textClassName: m,
            voiceChannel: g,
            hangStatus: E,
            userId: y,
            textSize: b = "xs",
            animateEmoji: O = !0,
            hideEmoji: v = !1,
            hideTooltip: A = !1,
        } = e,
        I = (0, f.v)("ActivityStatus", g),
        { defaultStatusVariant: S } = (0, c.$j)({
            guildId: null == g ? void 0 : g.guild_id,
            location: "CustomStatusVoiceDare",
        }),
        T = null != E && I,
        C = T && null != y ? (0, u.Au)(y, E, S) : null,
        N = null == n ? void 0 : n.emoji,
        w = (0, p.Z)({
            customStatusActivity: n,
            statusOwnerId: y,
            location: "CustomStatusVoiceDare",
        }),
        R = null != (t = null != C ? C : w.statusTextOverride) ? t : null == n ? void 0 : n.state,
        P = null != R && "" !== R,
        D = null;
    T && null != y
        ? (D = (0, r.jsx)(d.A, {
              userId: y,
              size: h,
              className: a()(i, _.W9),
              hangStatusActivity: E,
          }))
        : null == N ||
          v ||
          (D = (0, r.jsx)(l.A, {
              emoji: N,
              animate: O,
              className: i,
              hideTooltip: A || P,
          }));
    let L = P ? (null != D ? " ".concat(R) : R) : null,
        x = () => {
            let e = null != N && !v && !P;
            return A || e
                ? (0, r.jsxs)(r.Fragment, {
                      children: [D, L],
                  })
                : null != w.presence
                  ? (0, r.jsx)(o.m, {
                        delay: 150,
                        children: (0, r.jsxs)("span", {
                            children: [D, L],
                        }),
                    })
                  : (0, r.jsxs)("span", {
                        children: [D, L],
                    });
        };
    return null == n && null == E
        ? null
        : (0, r.jsx)(s.Text, {
              variant: "text-".concat(b, "/medium"),
              color: "none",
              className: a()(_.ps, m),
              children: x(),
          });
}
