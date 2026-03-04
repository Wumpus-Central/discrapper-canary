"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(3026),
    o = n(397927),
    l = n(140547),
    u = n(886019),
    c = n(559405),
    d = n(890330),
    _ = n(51183);
n(851883);
var f = n(123511);
let p = 14,
    h = 30;
function m(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: m,
            voiceChannel: E,
            hangStatus: g,
            userId: A,
            textSize: I = "xs",
            animateEmoji: T = !0,
            hideEmoji: S = !1,
            hideTooltip: y = !1,
        } = e,
        v = (0, d.v)("ActivityStatus", E),
        { defaultStatusVariant: N } = (0, l.$j)({ guildId: E?.guild_id, location: "CustomStatusActivityStatus" });
    if (null == t && null == g) return null;
    let C = null != g && v,
        R = C && null != A ? (0, u.Au)(A, g, N) : null,
        O = t?.emoji,
        b = R ?? t?.state,
        D = null != b && "" !== b,
        L = null;
    C && null != A
        ? (L = (0, r.jsx)(c.A, { userId: A, size: p, className: s()(i, f.W9), hangStatusActivity: g }))
        : null == O || S || (L = (0, r.jsx)(_.A, { emoji: O, animate: T, className: i, hideTooltip: y || D }));
    let w = D && (null != L ? ` ${b}` : b),
        M = () => {
            let e = null != O && !S && !D,
                t = null != b && b.length > h;
            return y || e
                ? (0, r.jsxs)(r.Fragment, { children: [L, w] })
                : (0, r.jsxs)(a.A, {
                      delay: 150,
                      tooltipClassName: m,
                      className: s()({ [f.D7]: !t }),
                      children: [L, w],
                  });
        };
    return (0, r.jsx)(o.Text, { variant: `text-${I}/medium`, color: "none", className: s()(f.ps, n), children: M() });
}
