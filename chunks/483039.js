n.d(t, { Z: () => f });
var r = n(473749),
    i = n(442837),
    a = n(755458),
    o = n(60482),
    s = n(535396),
    l = n(619733),
    c = n(613275),
    u = n(388032),
    d = n(611087);
function f(e) {
    let t = (0, a.BU)(e, "useGameServerPerk"),
        n = (0, i.e7)([o.Z], () => o.Z.getLowestGameCostForGuild(e));
    return r.useMemo(
        () =>
            t && null != n
                ? {
                      skuId: l.fj,
                      title: u.intl.string(c.default["B3OfL/"]),
                      description: u.intl.string(c.default.EGkJAG),
                      cost: n,
                      dependencies: [],
                      type: s.Us.PERK,
                      animatedImageUrl: d.Z,
                      staticImageUrl: d.Z,
                  }
                : null,
        [t, n],
    );
}
