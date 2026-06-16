t.d(l, { A: () => N });
var s = t(627968);
t(64700);
var i = t(342952),
    n = t(692617),
    a = t(939249),
    r = t(834730),
    c = t(548118),
    d = t(913453),
    u = t(837531),
    o = t(186272),
    x = t(518477),
    h = t(778712),
    m = t(403592);
function N(e) {
    let { user: l, onOpenProfile: t } = e,
        { mutualFriends: N, mutualGuilds: j } = (0, d.A)(l),
        v = null != N && N.length > 0,
        A = null != j && j.length > 0,
        p = v && A ? "text-xs/normal" : "text-sm/normal";
    return v || A
        ? (0, s.jsxs)("div", {
              className: m.I0,
              children: [
                  v
                      ? (0, s.jsxs)(a.D, {
                            className: m.uW,
                            onClick: () => t?.(x.RP.MUTUAL_FRIENDS),
                            children: [
                                (0, s.jsx)(i.A, {
                                    maxUsers: 3,
                                    users: N.map((e) => {
                                        let { user: l } = e;
                                        return l;
                                    }),
                                    size: h._3.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0,
                                    "aria-hidden": !0,
                                }),
                                (0, s.jsx)(r.E, {
                                    className: m.Qq,
                                    variant: p,
                                    color: "interactive-text-default",
                                    children: (0, u.A)(N.length),
                                }),
                            ],
                        })
                      : null,
                  v && A ? (0, s.jsx)("div", { "aria-hidden": "true", className: m.jH }) : null,
                  A
                      ? (0, s.jsxs)(a.D, {
                            className: m.uW,
                            onClick: () => t?.(x.RP.MUTUAL_GUILDS),
                            children: [
                                !v &&
                                    (0, s.jsx)(n.A, {
                                        maxGuilds: 3,
                                        guilds: j.map((e) => {
                                            let { guild: l } = e;
                                            return l;
                                        }),
                                        size: c.Ay.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0,
                                    }),
                                (0, s.jsx)(r.E, {
                                    className: m.Qq,
                                    variant: p,
                                    color: "interactive-text-default",
                                    children: (0, o.A)(j.length),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
