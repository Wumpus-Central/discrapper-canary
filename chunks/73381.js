r.d(t, { A: () => h }), r(321073);
var n = r(64700),
    a = r(512750),
    o = r(17928),
    i = r(488803),
    l = r(522055),
    s = r(881756),
    d = r(568065),
    c = r(800007),
    u = r(576709),
    m = r(375708);
let E =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var p = r(645619);
let _ = new Set([...Array.from(d.aH), ...Array.from(d.m_), a.FB]);
function h(e) {
    let t = (0, o.bG)([p.A], () => p.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK]),
        r = (function (e) {
            let t = (0, i.C$)(e, "useGameServerPerk"),
                r = (0, o.bG)([l.A], () => l.A.getLowestGameCostForGuild(e)),
                { gameName: a, gameName2: p } = (0, s.A)();
            return n.useMemo(
                () =>
                    t && null != r
                        ? {
                              skuId: c.W5,
                              title: m.intl.string(u.default["B3OfL/"]),
                              description: m.intl.format(u.default["+UqyGU"], { gameName: a, gameName2: p }),
                              cost: r,
                              dependencies: [],
                              type: d.o9.PERK,
                              animatedImageUrl: E,
                              staticImageUrl: E,
                          }
                        : null,
                [t, r, a, p],
            );
        })(e);
    return n.useMemo(() => {
        let e = [...(t ?? [])];
        return null != r && e.push(r), e.filter((e) => !_.has(e.skuId));
    }, [t, r]);
}
