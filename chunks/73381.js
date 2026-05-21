r.d(t, { A: () => v }), r(321073);
var n = r(64700),
    i = r(512750),
    s = r(17928),
    o = r(488803),
    a = r(522055),
    l = r(881756),
    d = r(568065),
    c = r(800007),
    u = r(576709),
    p = r(375708);
let h =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var m = r(645619);
let _ = new Set([...Array.from(d.aH), ...Array.from(d.m_), i.FB]);
function v(e) {
    let t = (0, s.bG)([m.A], () => m.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK]),
        r = (function (e) {
            let t = (0, o.C$)(e, "useGameServerPerk"),
                r = (0, s.bG)([a.A], () => a.A.getLowestGameCostForGuild(e)),
                { gameName: i, gameName2: m } = (0, l.A)();
            return n.useMemo(
                () =>
                    t && null != r
                        ? {
                              skuId: c.W5,
                              title: p.intl.string(u.default["B3OfL/"]),
                              description: p.intl.format(u.default["+UqyGU"], { gameName: i, gameName2: m }),
                              cost: r,
                              dependencies: [],
                              type: d.o9.PERK,
                              animatedImageUrl: h,
                              staticImageUrl: h,
                          }
                        : null,
                [t, r, i, m],
            );
        })(e);
    return n.useMemo(() => {
        let e = [...(t ?? [])];
        return null != r && e.push(r), e.filter((e) => !_.has(e.skuId));
    }, [t, r]);
}
