n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(342952),
    s = n(692617),
    a = n(939249),
    r = n(834730),
    o = n(263063),
    d = n(913453),
    c = n(837531),
    u = n(186272),
    h = n(518477),
    A = n(778712),
    x = n(403592);
function v(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: v, mutualGuilds: m } = (0, d.A)(t),
        g = null != v && v.length > 0,
        p = null != m && m.length > 0,
        f = g && p ? "text-xs/normal" : "text-sm/normal";
    return g || p
        ? (0, i.jsxs)("div", {
              className: x.I0,
              children: [
                  g
                      ? (0, i.jsxs)(a.D, {
                            className: x.uW,
                            onClick: () => n?.(h.RP.MUTUAL_FRIENDS),
                            children: [
                                (0, i.jsx)(l.A, {
                                    maxUsers: 3,
                                    users: v.map((e) => {
                                        let { user: t } = e;
                                        return t;
                                    }),
                                    size: A._3.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.E, {
                                    className: x.Qq,
                                    variant: f,
                                    color: "interactive-text-default",
                                    children: (0, c.A)(v.length),
                                }),
                            ],
                        })
                      : null,
                  g && p ? (0, i.jsx)("div", { "aria-hidden": "true", className: x.jH }) : null,
                  p
                      ? (0, i.jsxs)(a.D, {
                            className: x.uW,
                            onClick: () => n?.(h.RP.MUTUAL_GUILDS),
                            children: [
                                !g &&
                                    (0, i.jsx)(s.A, {
                                        maxGuilds: 3,
                                        guilds: m.map((e) => {
                                            let { guild: t } = e;
                                            return t;
                                        }),
                                        size: o.Ay.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0,
                                    }),
                                (0, i.jsx)(r.E, {
                                    className: x.Qq,
                                    variant: f,
                                    color: "interactive-text-default",
                                    children: (0, u.A)(m.length),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
