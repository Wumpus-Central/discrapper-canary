"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(555337),
    r = n(645619),
    a = n(128069),
    o = n(743981),
    d = n(652215);
let c = [d.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT, d.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES];
function u() {
    let e = (0, s.bG)([l.A], () => l.A.getGuild()),
        t = (0, s.bG)([r.A], () => r.A.getStateForGuild(e?.id)?.allPowerups),
        n = (0, a.RA)(e?.id, "GuildSettingsTags");
    return (0, i.useMemo)(() => {
        let i = o.hc.map((e) => ({ kind: e })),
            s = [];
        return (
            e?.features == null ||
                Object.keys(o.Tf)
                    .filter((e) => !(!n && c.includes(e)))
                    .forEach((n) => {
                        let l = o.Tf[n],
                            r = o.kO[n],
                            a = t?.[r],
                            d = a?.title,
                            c = l.map((e) => ({ kind: e, packName: d }));
                        e.features.has(n) ? i.push(...c) : s.push(...c);
                    }),
            { unlockedBadges: i, lockedBadges: s }
        );
    }, [e?.features, t, n]);
}
