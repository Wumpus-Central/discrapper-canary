n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    d = n(435371),
    u = n(397927),
    c = n(363487),
    o = n(890942),
    m = n(522055),
    g = n(225180),
    f = n(146995),
    _ = n(333354),
    v = n(985018),
    p = n(276079);
function x(e) {
    let { guildId: t, gameInstance: n, cost: i } = e;
    return (0, a.jsx)(d.un, {
        "aria-label": v.intl.string(_.default.TZsu1U),
        title: v.intl.string(_.default.TZsu1U),
        body: v.intl.formatToPlainString(_.default["5HQUzD"], { boostCount: i }),
        children: (0, a.jsx)("div", {
            className: p.vI,
            children: (0, a.jsx)(u.Button, {
                icon: { type: "icon", asset: u.x8N },
                text: i.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": v.intl.string(_.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(), (0, f.m)(t, n);
                },
            }),
        }),
    });
}
function b(e) {
    let { guildId: t, gameInstance: n, onClick: l } = e,
        d = (0, r.bG)([m.A], () => m.A.getStateForGuild(t)),
        f = i.useMemo(() => d?.entitlements?.[n.entitlementId], [d?.entitlements, n.entitlementId]),
        b = f?.ends_at != null,
        j = f?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price,
        A = (0, g.A)(n.gameId, "icon"),
        E = (0, c.A)(t);
    return null == j
        ? null
        : (0, a.jsxs)(u.DUT, {
              className: s()(p.LO, { [p.r9]: !E }),
              onClick: E ? () => l(n) : void 0,
              "aria-disabled": !E,
              children: [
                  (0, a.jsx)("img", { className: p.Sl, alt: "", src: A }),
                  (0, a.jsxs)("div", {
                      className: p.FS,
                      children: [
                          (0, a.jsx)(u.Heading, { variant: "heading-sm/semibold", children: n.name }),
                          b
                              ? (0, a.jsx)(o.P5, { dateString: f.ends_at })
                              : (0, a.jsx)(o.TG, { text: v.intl.string(_.default.FFLkmx) }),
                      ],
                  }),
                  E && (0, a.jsx)(x, { guildId: t, gameInstance: n, cost: j }),
              ],
          });
}
