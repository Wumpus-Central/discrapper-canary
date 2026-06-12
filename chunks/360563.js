l.d(s, { A: () => m });
var i = l(627968);
l(64700);
var t = l(342952),
    n = l(692617),
    a = l(939249),
    r = l(834730),
    o = l(548118),
    d = l(913453),
    u = l(837531),
    c = l(186272),
    h = l(518477),
    p = l(778712),
    x = l(403592);
function m(e) {
    let { user: s, onOpenProfile: l } = e,
        { mutualFriends: m, mutualGuilds: A } = (0, d.A)(s),
        v = null != m && m.length > 0,
        f = null != A && A.length > 0,
        g = v && f ? "text-xs/normal" : "text-sm/normal";
    return v || f
        ? (0, i.jsxs)("div", {
              className: x.I0,
              children: [
                  v
                      ? (0, i.jsxs)(a.D, {
                            className: x.uW,
                            onClick: () => l?.(h.RP.MUTUAL_FRIENDS),
                            children: [
                                (0, i.jsx)(t.A, {
                                    maxUsers: 3,
                                    users: m.map((e) => {
                                        let { user: s } = e;
                                        return s;
                                    }),
                                    size: p._3.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.E, {
                                    className: x.Qq,
                                    variant: g,
                                    color: "interactive-text-default",
                                    children: (0, u.A)(m.length),
                                }),
                            ],
                        })
                      : null,
                  v && f ? (0, i.jsx)("div", { "aria-hidden": "true", className: x.jH }) : null,
                  f
                      ? (0, i.jsxs)(a.D, {
                            className: x.uW,
                            onClick: () => l?.(h.RP.MUTUAL_GUILDS),
                            children: [
                                !v &&
                                    (0, i.jsx)(n.A, {
                                        maxGuilds: 3,
                                        guilds: A.map((e) => {
                                            let { guild: s } = e;
                                            return s;
                                        }),
                                        size: o.Ay.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0,
                                    }),
                                (0, i.jsx)(r.E, {
                                    className: x.Qq,
                                    variant: g,
                                    color: "interactive-text-default",
                                    children: (0, c.A)(A.length),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
