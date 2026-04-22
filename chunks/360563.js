"use strict";
i.d(t, { A: () => f });
var n = i(627968);
i(64700);
var r = i(342952),
    a = i(692617),
    l = i(939249),
    s = i(834730),
    o = i(263063),
    c = i(913453),
    d = i(837531),
    u = i(186272),
    _ = i(518477),
    p = i(778712),
    h = i(403592);
function f(e) {
    let { user: t, onOpenProfile: i } = e,
        { mutualFriends: f, mutualGuilds: A } = (0, c.A)(t),
        g = null != f && f.length > 0,
        m = null != A && A.length > 0,
        E = g && m ? "text-xs/normal" : "text-sm/normal";
    return g || m
        ? (0, n.jsxs)("div", {
              className: h.I0,
              children: [
                  g
                      ? (0, n.jsxs)(l.D, {
                            className: h.uW,
                            onClick: () => i?.(_.RP.MUTUAL_FRIENDS),
                            children: [
                                (0, n.jsx)(r.A, {
                                    maxUsers: 3,
                                    users: f.map((e) => {
                                        let { user: t } = e;
                                        return t;
                                    }),
                                    size: p._3.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(s.E, {
                                    className: h.Qq,
                                    variant: E,
                                    color: "interactive-text-default",
                                    children: (0, d.A)(f.length),
                                }),
                            ],
                        })
                      : null,
                  g && m ? (0, n.jsx)("div", { "aria-hidden": "true", className: h.jH }) : null,
                  m
                      ? (0, n.jsxs)(l.D, {
                            className: h.uW,
                            onClick: () => i?.(_.RP.MUTUAL_GUILDS),
                            children: [
                                !g &&
                                    (0, n.jsx)(a.A, {
                                        maxGuilds: 3,
                                        guilds: A.map((e) => {
                                            let { guild: t } = e;
                                            return t;
                                        }),
                                        size: o.Ay.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0,
                                    }),
                                (0, n.jsx)(s.E, {
                                    className: h.Qq,
                                    variant: E,
                                    color: "interactive-text-default",
                                    children: (0, u.A)(A.length),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
