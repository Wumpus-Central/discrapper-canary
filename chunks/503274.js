t.d(n, { Z: () => x });
var l = t(54381),
    i = t(473749),
    a = t(120356),
    r = t.n(a),
    s = t(442837),
    u = t(681715),
    o = t(481060),
    c = t(639777),
    d = t(838968),
    m = t(60482),
    v = t(162190),
    f = t(68015),
    g = t(265397),
    p = t(388032),
    b = t(678873);
function _(e) {
    let { guildId: n, gameInstance: t, cost: i } = e;
    return (0, l.jsx)(u.i_, {
        "aria-label": p.intl.string(g.default.TZsu1U),
        title: p.intl.string(g.default.TZsu1U),
        body: p.intl.formatToPlainString(g.default["5HQUzD"], { boostCount: i }),
        children: (0, l.jsx)("div", {
            className: b.disableButton,
            children: (0, l.jsx)(o.Button, {
                icon: {
                    type: "icon",
                    asset: o.zkc,
                },
                text: i.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": p.intl.string(g.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(), (0, f.x)(n, t);
                },
            }),
        }),
    });
}
function x(e) {
    var n, t, a, u;
    let { guildId: f, gameInstance: x, onClick: j } = e,
        E = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(f)),
        h = i.useMemo(() => {
            var e;
            return null == E || null == (e = E.entitlements) ? void 0 : e[x.entitlementId];
        }, [null == E ? void 0 : E.entitlements, x.entitlementId]),
        S = (null == h ? void 0 : h.ends_at) != null,
        y =
            null == h ||
            null == (u = h.sku) ||
            null == (a = u.tenant_metadata) ||
            null == (t = a.guild_monetization) ||
            null == (n = t.game_server)
                ? void 0
                : n.boost_price,
        O = (0, v.Z)(x.gameId, "icon"),
        k = (0, c.Z)(f);
    return null == y
        ? null
        : (0, l.jsxs)(o.P3F, {
              className: r()(b.game, { [b.disabled]: !k }),
              onClick: k ? () => j(x) : void 0,
              "aria-disabled": !k,
              children: [
                  (0, l.jsx)("img", {
                      className: b.image,
                      alt: "",
                      src: O,
                  }),
                  (0, l.jsxs)("div", {
                      className: b.textContainer,
                      children: [
                          (0, l.jsx)(o.Heading, {
                              variant: "heading-sm/semibold",
                              children: x.name,
                          }),
                          S
                              ? (0, l.jsx)(d.rL, { dateString: h.ends_at })
                              : (0, l.jsx)(d.P2, { text: p.intl.string(g.default.FFLkmx) }),
                      ],
                  }),
                  k &&
                      (0, l.jsx)(_, {
                          guildId: f,
                          gameInstance: x,
                          cost: y,
                      }),
              ],
          });
}
