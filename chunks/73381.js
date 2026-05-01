a.d(t, { A: () => u }), a(321073);
var n = a(64700),
    s = a(512750),
    i = a(17928),
    r = a(488803),
    l = a(522055),
    o = a(881756),
    d = a(568065),
    c = a(800007),
    m = a(576709),
    g = a(985018);
let p =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var v = a(645619);
let h = new Set([...Array.from(d.aH), ...Array.from(d.m_), s.FB]);
function u(e) {
    let t = (0, i.bG)([v.A], () => v.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK]),
        a = (function (e) {
            let t = (0, r.C$)(e, "useGameServerPerk"),
                a = (0, i.bG)([l.A], () => l.A.getLowestGameCostForGuild(e)),
                { gameName: s, gameName2: v } = (0, o.A)();
            return n.useMemo(
                () =>
                    t && null != a
                        ? {
                              skuId: c.W5,
                              title: g.intl.string(m.default["B3OfL/"]),
                              description: g.intl.format(m.default["+UqyGU"], { gameName: s, gameName2: v }),
                              cost: a,
                              dependencies: [],
                              type: d.o9.PERK,
                              animatedImageUrl: p,
                              staticImageUrl: p,
                          }
                        : null,
                [t, a, s, v],
            );
        })(e);
    return n.useMemo(() => {
        let e = [...(t ?? [])];
        return null != a && e.push(a), e.filter((e) => !h.has(e.skuId));
    }, [t, a]);
}
