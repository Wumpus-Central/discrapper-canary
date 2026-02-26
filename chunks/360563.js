"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(342952),
    s = n(692617),
    a = n(397927),
    o = n(263063),
    l = n(913453),
    u = n(837531),
    c = n(186272),
    d = n(518477),
    _ = n(778712),
    f = n(232205);
let p = 3;
function h(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: h, mutualGuilds: m } = (0, l.A)(t),
        E = null != h && h.length > 0,
        g = null != m && m.length > 0,
        A = E && g ? "text-xs/normal" : "text-sm/normal";
    if (!E && !g) return null;
    let I = () =>
            E
                ? (0, r.jsxs)(a.DUT, {
                      className: f.uW,
                      onClick: () => n?.(d.RP.MUTUAL_FRIENDS),
                      children: [
                          (0, r.jsx)(i.A, {
                              maxUsers: p,
                              users: h.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: _._3.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0,
                              "aria-hidden": !0,
                          }),
                          (0, r.jsx)(a.Text, {
                              className: f.Qq,
                              variant: A,
                              color: "interactive-text-default",
                              children: (0, u.A)(h.length),
                          }),
                      ],
                  })
                : null,
        T = () => (E && g ? (0, r.jsx)("div", { "aria-hidden": "true", className: f.jH }) : null),
        S = () =>
            g
                ? (0, r.jsxs)(a.DUT, {
                      className: f.uW,
                      onClick: () => n?.(d.RP.MUTUAL_GUILDS),
                      children: [
                          !E &&
                              (0, r.jsx)(s.A, {
                                  maxGuilds: p,
                                  guilds: m.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: o.Ay.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0,
                              }),
                          (0, r.jsx)(a.Text, {
                              className: f.Qq,
                              variant: A,
                              color: "interactive-text-default",
                              children: (0, c.A)(m.length),
                          }),
                      ],
                  })
                : null;
    return (0, r.jsxs)("div", { className: f.I0, children: [I(), T(), S()] });
}
