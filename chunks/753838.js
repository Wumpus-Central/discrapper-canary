n.d(t, { A: () => g }), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(990078),
    a = n(397927),
    c = n(840120),
    o = n(473145),
    d = n(652215),
    u = n(985018),
    f = n(483116);
let g = (e) => {
    let t,
        n,
        i,
        { guildFeature: g, guild: b, className: m, hideTooltip: p = !1, tooltipPosition: x = "left", onClick: h } = e,
        j = b.features.has(g),
        O = (0, c.Bl)(b.id, "GuildSettingsBoostPerks"),
        y = (0, o.Ys)(g);
    return !j && g === d.GuildFeatures.VANITY_URL && O
        ? null
        : (j
                ? (null != y && (i = u.intl.string(u.t.hUgjyP)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a._Jp, {
                              color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: f.RQ,
                          }),
                          (0, r.jsx)(a.Heading, {
                              variant: "eyebrow",
                              className: f.h_,
                              children: u.intl.string(u.t["0O+87i"]),
                          }),
                      ],
                  })))
                : (null != y && (i = u.intl.string(u.t.L2wYYj)),
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a._Jp, {
                              color: "currentColor",
                              className: f.Kk,
                          }),
                          (0, r.jsx)(a.Heading, {
                              variant: "eyebrow",
                              className: f.h_,
                              children: null != y && (0, o.Qu)(y),
                          }),
                      ],
                  }))),
            (n =
                p || null == i
                    ? (0, r.jsx)("div", {
                          className: l()(f.Jz, m),
                          children: t,
                      })
                    : (0, r.jsx)(s.m, {
                          position: x,
                          text: i,
                          children: (0, r.jsx)("div", {
                              className: l()(f.Jz, m),
                              children: t,
                          }),
                      })),
            null == h || j)
          ? n
          : (0, r.jsx)(a.DUT, {
                onClick: h,
                className: f.vk,
                children: n,
            });
};
