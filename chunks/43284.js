"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(51183),
    u = n(140547),
    c = n(886019),
    d = n(559405),
    _ = n(890330),
    f = n(979016),
    p = n(613125);
n(851883);
var h = n(123511);
let m = 14;
function g(e) {
    let {
            customStatusActivity: t,
            iconClassName: n,
            textClassName: i,
            voiceChannel: g,
            hangStatus: E,
            userId: A,
            textSize: I = "xs",
            animateEmoji: T = !0,
            hideEmoji: y = !1,
            hideTooltip: S = !1,
        } = e,
        v = (0, _.v)("ActivityStatus", g),
        { defaultStatusVariant: C } = (0, u.$j)({ guildId: g?.guild_id, location: "CustomStatusVoiceDare" }),
        b = null != E && v,
        N = b && null != A ? (0, c.Au)(A, E, C) : null,
        R = t?.emoji,
        O = (0, p.Z)({ customStatusActivity: t, statusOwnerId: A }),
        D = O.statusTextOverride ?? N ?? t?.state,
        L = null != D && "" !== D,
        w = null;
    b && null != A
        ? (w = (0, r.jsx)(d.A, { userId: A, size: m, className: a()(n, h.W9), hangStatusActivity: E }))
        : null == R || y || (w = (0, r.jsx)(l.A, { emoji: R, animate: T, className: n, hideTooltip: S || L }));
    let x = L ? (null != w ? ` ${D}` : D) : null,
        P = () => {
            let e = null != R && !y && !L;
            return S || e
                ? (0, r.jsxs)(r.Fragment, { children: [w, x] })
                : null != O.presence
                  ? (0, r.jsx)(s.m, {
                        delay: 150,
                        __unsupportedReactNodeAsText:
                            null != A
                                ? (0, r.jsx)(f.A, { userId: A, presence: O.presence, surfaceKind: f.n.Tooltip })
                                : null,
                        children: (0, r.jsxs)("span", { children: [w, x] }),
                    })
                  : (0, r.jsxs)("span", { children: [w, x] });
        };
    return null == t && null == E
        ? null
        : (0, r.jsx)(o.Text, { variant: `text-${I}/medium`, color: "none", className: a()(h.ps, i), children: P() });
}
