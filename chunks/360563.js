n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(342952),
    a = n(692617),
    s = n(397927),
    o = n(263063),
    l = n(913453),
    c = n(837531),
    u = n(186272),
    d = n(518477),
    f = n(778712),
    p = n(252055);
let _ = 3;
function h(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: h, mutualGuilds: m } = (0, l.A)(t),
        g = null != h && h.length > 0,
        E = null != m && m.length > 0,
        b = g && E ? "text-xs/normal" : "text-sm/normal";
    if (!g && !E) return null;
    let y = () =>
            g
                ? (0, r.jsxs)(s.DUT, {
                      className: p.uW,
                      onClick: () => (null == n ? void 0 : n(d.RP.MUTUAL_FRIENDS)),
                      children: [
                          (0, r.jsx)(i.A, {
                              maxUsers: _,
                              users: h.map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                              size: f._3.SIZE_16,
                              hideOverflowCount: !0,
                              disableUsernameTooltip: !0,
                              "aria-hidden": !0,
                          }),
                          (0, r.jsx)(s.Text, {
                              className: p.Qq,
                              variant: b,
                              color: "interactive-text-default",
                              children: (0, c.A)(h.length),
                          }),
                      ],
                  })
                : null,
        O = () =>
            g && E
                ? (0, r.jsx)("div", {
                      "aria-hidden": "true",
                      className: p.jH,
                  })
                : null,
        A = () =>
            E
                ? (0, r.jsxs)(s.DUT, {
                      className: p.uW,
                      onClick: () => (null == n ? void 0 : n(d.RP.MUTUAL_GUILDS)),
                      children: [
                          !g &&
                              (0, r.jsx)(a.A, {
                                  maxGuilds: _,
                                  guilds: m.map((e) => {
                                      let { guild: t } = e;
                                      return t;
                                  }),
                                  size: o.A.Sizes.SMOL,
                                  hideOverflowCount: !0,
                                  disableGuildNameTooltip: !0,
                              }),
                          (0, r.jsx)(s.Text, {
                              className: p.Qq,
                              variant: b,
                              color: "interactive-text-default",
                              children: (0, u.A)(m.length),
                          }),
                      ],
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: p.I0,
        children: [y(), O(), A()],
    });
}
