t.d(n, { Z: () => x });
var l = t(951288),
    a = t(647438),
    i = t(120356),
    r = t.n(i),
    s = t(442837),
    o = t(681715),
    u = t(481060),
    c = t(639777),
    d = t(838968),
    m = t(60482),
    v = t(162190),
    g = t(68015),
    f = t(149829),
    b = t(388032),
    p = t(678873);
function j(e) {
    let { guildId: n, gameInstance: t, cost: a } = e;
    return (0, l.jsx)(o.i_, {
        "aria-label": b.intl.string(f.default.TZsu1U),
        title: b.intl.string(f.default.TZsu1U),
        body: b.intl.formatToPlainString(f.default["5HQUzD"], { boostCount: a }),
        children: (0, l.jsx)("div", {
            className: p.disableButton,
            children: (0, l.jsx)(u.Button, {
                icon: {
                    type: "icon",
                    asset: u.zkc,
                },
                text: a.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": b.intl.string(f.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(), (0, g.x)(n, t);
                },
            }),
        }),
    });
}
function x(e) {
    var n, t, i, o;
    let { guildId: g, gameInstance: x, onClick: h } = e,
        y = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(g)),
        O = a.useMemo(() => {
            var e;
            return null == y || null == (e = y.entitlements) ? void 0 : e[x.entitlementId];
        }, [null == y ? void 0 : y.entitlements, x.entitlementId]),
        P = (null == O ? void 0 : O.ends_at) != null,
        k =
            null == O ||
            null == (o = O.sku) ||
            null == (i = o.tenant_metadata) ||
            null == (t = i.guild_monetization) ||
            null == (n = t.game_server)
                ? void 0
                : n.boost_price,
        I = (0, v.Z)(x.gameId, "icon"),
        S = (0, c.Z)(g);
    return null == k
        ? null
        : (0, l.jsxs)(u.P3F, {
              className: r()(p.game, { [p.disabled]: !S }),
              onClick: S ? () => h(x) : void 0,
              "aria-disabled": !S,
              children: [
                  (0, l.jsx)("img", {
                      className: p.image,
                      alt: "",
                      src: I,
                  }),
                  (0, l.jsxs)("div", {
                      className: p.textContainer,
                      children: [
                          (0, l.jsx)(u.Heading, {
                              variant: "heading-sm/semibold",
                              children: x.name,
                          }),
                          P
                              ? (0, l.jsx)(d.rL, { dateString: O.ends_at })
                              : (0, l.jsx)(d.P2, { text: b.intl.string(f.default.FFLkmx) }),
                      ],
                  }),
                  S &&
                      (0, l.jsx)(j, {
                          guildId: g,
                          gameInstance: x,
                          cost: k,
                      }),
              ],
          });
}
