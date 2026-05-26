r.d(t, { A: () => v }), r(321073);
var i = r(64700),
    s = r(512750),
    n = r(17928),
    a = r(488803),
    l = r(522055),
    o = r(881756),
    d = r(568065),
    c = r(800007),
    u = r(576709),
    h = r(375708);
let p =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var m = r(645619);
let _ = new Set([...Array.from(d.aH), ...Array.from(d.m_), s.FB]);
function v(e) {
    let t = (0, n.bG)([m.A], () => m.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK]),
        r = (function (e) {
            let t = (0, a.C$)(e, "useGameServerPerk"),
                r = (0, n.bG)([l.A], () => l.A.getLowestGameCostForGuild(e)),
                { gameName: s, gameName2: m } = (0, o.A)();
            return i.useMemo(
                () =>
                    t && null != r
                        ? {
                              skuId: c.W5,
                              title: h.intl.string(u.default["B3OfL/"]),
                              description: h.intl.format(u.default["+UqyGU"], { gameName: s, gameName2: m }),
                              cost: r,
                              dependencies: [],
                              type: d.o9.PERK,
                              animatedImageUrl: p,
                              staticImageUrl: p,
                          }
                        : null,
                [t, r, s, m],
            );
        })(e);
    return i.useMemo(() => {
        let e = [...(t ?? [])];
        return null != r && e.push(r), e.filter((e) => !_.has(e.skuId));
    }, [t, r]);
}
