n.d(t, { A: () => j });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    u = n(435371),
    o = n(397927),
    d = n(363487),
    c = n(890942),
    m = n(522055),
    v = n(225180),
    f = n(146995),
    g = n(333354),
    b = n(985018),
    p = n(276079);
function _(e) {
    let { guildId: t, gameInstance: n, cost: i } = e;
    return (0, l.jsx)(u.un, {
        "aria-label": b.intl.string(g.default.TZsu1U),
        title: b.intl.string(g.default.TZsu1U),
        body: b.intl.formatToPlainString(g.default["5HQUzD"], { boostCount: i }),
        children: (0, l.jsx)("div", {
            className: p.vI,
            children: (0, l.jsx)(o.Button, {
                icon: {
                    type: "icon",
                    asset: o.x8N,
                },
                text: i.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": b.intl.string(g.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(), (0, f.m)(t, n);
                },
            }),
        }),
    });
}
function j(e) {
    var t, n, a, u;
    let { guildId: f, gameInstance: j, onClick: x } = e,
        E = (0, s.bG)([m.A], () => m.A.getStateForGuild(f)),
        h = i.useMemo(() => {
            var e;
            return null == E || null == (e = E.entitlements) ? void 0 : e[j.entitlementId];
        }, [null == E ? void 0 : E.entitlements, j.entitlementId]),
        y = (null == h ? void 0 : h.ends_at) != null,
        A =
            null == h ||
            null == (u = h.sku) ||
            null == (a = u.tenant_metadata) ||
            null == (n = a.guild_monetization) ||
            null == (t = n.game_server)
                ? void 0
                : t.boost_price,
        S = (0, v.A)(j.gameId, "icon"),
        O = (0, d.A)(f);
    return null == A
        ? null
        : (0, l.jsxs)(o.DUT, {
              className: r()(p.LO, { [p.r9]: !O }),
              onClick: O ? () => x(j) : void 0,
              "aria-disabled": !O,
              children: [
                  (0, l.jsx)("img", {
                      className: p.Sl,
                      alt: "",
                      src: S,
                  }),
                  (0, l.jsxs)("div", {
                      className: p.FS,
                      children: [
                          (0, l.jsx)(o.Heading, {
                              variant: "heading-sm/semibold",
                              children: j.name,
                          }),
                          y
                              ? (0, l.jsx)(c.P5, { dateString: h.ends_at })
                              : (0, l.jsx)(c.TG, { text: b.intl.string(g.default.FFLkmx) }),
                      ],
                  }),
                  O &&
                      (0, l.jsx)(_, {
                          guildId: f,
                          gameInstance: j,
                          cost: A,
                      }),
              ],
          });
}
