n.d(t, { Z: () => x });
var l = n(54381),
    i = n(473749),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    u = n(681715),
    o = n(481060),
    c = n(639777),
    d = n(838968),
    m = n(60482),
    v = n(162190),
    g = n(68015),
    f = n(501669),
    p = n(388032),
    b = n(277781);
function _(e) {
    let { guildId: t, gameInstance: n, cost: i } = e;
    return (0, l.jsx)(u.i_, {
        "aria-label": p.intl.string(f.default.TZsu1U),
        title: p.intl.string(f.default.TZsu1U),
        body: p.intl.formatToPlainString(f.default["5HQUzD"], { boostCount: i }),
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
                "aria-label": p.intl.string(f.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(), (0, g.x)(t, n);
                },
            }),
        }),
    });
}
function x(e) {
    var t, n, a, u;
    let { guildId: g, gameInstance: x, onClick: j } = e,
        E = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(g)),
        h = i.useMemo(() => {
            var e;
            return null == E || null == (e = E.entitlements) ? void 0 : e[x.entitlementId];
        }, [null == E ? void 0 : E.entitlements, x.entitlementId]),
        S = (null == h ? void 0 : h.ends_at) != null,
        y =
            null == h ||
            null == (u = h.sku) ||
            null == (a = u.tenant_metadata) ||
            null == (n = a.guild_monetization) ||
            null == (t = n.game_server)
                ? void 0
                : t.boost_price,
        O = (0, v.Z)(x.gameId, "icon"),
        I = (0, c.Z)(g);
    return null == y
        ? null
        : (0, l.jsxs)(o.P3F, {
              className: r()(b.game, { [b.disabled]: !I }),
              onClick: I ? () => j(x) : void 0,
              "aria-disabled": !I,
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
                              : (0, l.jsx)(d.P2, { text: p.intl.string(f.default.FFLkmx) }),
                      ],
                  }),
                  I &&
                      (0, l.jsx)(_, {
                          guildId: g,
                          gameInstance: x,
                          cost: y,
                      }),
              ],
          });
}
