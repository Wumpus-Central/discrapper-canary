t.d(n, { Z: () => b });
var l = t(951288),
    a = t(647438),
    i = t(442837),
    r = t(681715),
    s = t(481060),
    o = t(838968),
    u = t(60482),
    c = t(162190),
    d = t(68015),
    m = t(989308),
    v = t(388032),
    g = t(678873);
function f(e) {
    let { guildId: n, gameInstance: t, cost: a } = e;
    return (0, l.jsx)(r.i_, {
        "aria-label": v.intl.string(m.default.TZsu1d),
        title: v.intl.string(m.default.TZsu1d),
        body: v.intl.formatToPlainString(m.default["5HQUzM"], { boostCount: a }),
        children: (0, l.jsx)("div", {
            className: g.disableButton,
            children: (0, l.jsx)(s.Button, {
                icon: {
                    type: "icon",
                    asset: s.zkc,
                },
                text: a.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": v.intl.string(m.default.TZsu1d),
                onClick: (e) => {
                    e.stopPropagation(), (0, d.x)(n, t);
                },
            }),
        }),
    });
}
function b(e) {
    var n, t, r, d;
    let { guildId: b, gameInstance: p, onClick: j } = e,
        x = (0, i.e7)([u.Z], () => u.Z.getStateForGuild(b)),
        h = a.useMemo(() => {
            var e;
            return null == x || null == (e = x.entitlements) ? void 0 : e[p.entitlementId];
        }, [null == x ? void 0 : x.entitlements, p.entitlementId]),
        y = (null == h ? void 0 : h.ends_at) != null,
        O =
            null == h ||
            null == (d = h.sku) ||
            null == (r = d.tenant_metadata) ||
            null == (t = r.guild_monetization) ||
            null == (n = t.game_server)
                ? void 0
                : n.boost_price,
        P = (0, c.Z)(p.gameId, "icon");
    return null == O
        ? null
        : (0, l.jsxs)(s.P3F, {
              className: g.game,
              onClick: () => j(p),
              children: [
                  (0, l.jsx)("img", {
                      className: g.image,
                      alt: "",
                      src: P,
                  }),
                  (0, l.jsxs)("div", {
                      className: g.textContainer,
                      children: [
                          (0, l.jsx)(s.Heading, {
                              variant: "heading-sm/semibold",
                              children: p.name,
                          }),
                          y
                              ? (0, l.jsx)(o.rL, { dateString: h.ends_at })
                              : (0, l.jsx)(o.P2, { text: v.intl.string(m.default.FFLkm5) }),
                      ],
                  }),
                  (0, l.jsx)(f, {
                      guildId: b,
                      gameInstance: p,
                      cost: O,
                  }),
              ],
          });
}
