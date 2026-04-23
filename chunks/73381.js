"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(64700),
    r = n(512750),
    s = n(17928),
    a = n(488803),
    o = n(522055),
    l = n(881756),
    d = n(568065),
    _ = n(800007),
    u = n(576709),
    c = n(985018);
let E =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var h = n(645619);
let m = new Set([...Array.from(d.aH), ...Array.from(d.m_), r.FB]);
function f(e) {
    let t = (0, s.bG)([h.A], () => h.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK]),
        n = (function (e) {
            let t = (0, a.C$)(e, "useGameServerPerk"),
                n = (0, s.bG)([o.A], () => o.A.getLowestGameCostForGuild(e)),
                { gameName: r, gameName2: h } = (0, l.A)();
            return i.useMemo(
                () =>
                    t && null != n
                        ? {
                              skuId: _.W5,
                              title: c.intl.string(u.default["B3OfL/"]),
                              description: c.intl.format(u.default["+UqyGU"], { gameName: r, gameName2: h }),
                              cost: n,
                              dependencies: [],
                              type: d.o9.PERK,
                              animatedImageUrl: E,
                              staticImageUrl: E,
                          }
                        : null,
                [t, n, r, h],
            );
        })(e);
    return i.useMemo(() => {
        let e = [...(t ?? [])];
        return null != n && e.push(n), e.filter((e) => !m.has(e.skuId));
    }, [t, n]);
}
