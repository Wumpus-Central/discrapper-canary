"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(64700),
    r = n(512750),
    s = n(17928),
    a = n(488803),
    o = n(522055),
    l = n(881756),
    u = n(568065),
    c = n(800007),
    d = n(576709),
    _ = n(375708);
let f =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var h = n(645619);
let p = new Set([...Array.from(u.aH), ...Array.from(u.m_), r.FB]);
function E(e) {
    let t = (0, s.bG)([h.A], () => h.A.getStateForGuild(e)?.powerupCatalog?.[u.o9.PERK]),
        n = (function (e) {
            let t = (0, a.C$)(e, "useGameServerPerk"),
                n = (0, s.bG)([o.A], () => o.A.getLowestGameCostForGuild(e)),
                { gameName: r, gameName2: h } = (0, l.A)();
            return i.useMemo(
                () =>
                    t && null != n
                        ? {
                              skuId: c.W5,
                              title: _.intl.string(d.default["B3OfL/"]),
                              description: _.intl.format(d.default["+UqyGU"], { gameName: r, gameName2: h }),
                              cost: n,
                              dependencies: [],
                              type: u.o9.PERK,
                              animatedImageUrl: f,
                              staticImageUrl: f,
                          }
                        : null,
                [t, n, r, h],
            );
        })(e);
    return i.useMemo(() => {
        let e = [...(t ?? [])];
        return null != n && e.push(n), e.filter((e) => !p.has(e.skuId));
    }, [t, n]);
}
