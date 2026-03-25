"use strict";
n.d(t, { A: () => o }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(555337),
    r = n(645619),
    a = n(743981);
function o() {
    let e = (0, s.bG)([l.A], () => l.A.getGuild()),
        t = (0, s.bG)([r.A], () => r.A.getStateForGuild(e?.id)?.allPowerups);
    return (0, i.useMemo)(() => {
        let n = a.hc.map((e) => ({ kind: e })),
            i = [];
        return (
            e?.features == null ||
                Object.keys(a.Tf).forEach((s) => {
                    let l = a.Tf[s],
                        r = a.kO[s],
                        o = t?.[r],
                        d = o?.title,
                        c = l.map((e) => ({ kind: e, packName: d }));
                    e.features.has(s) ? n.push(...c) : i.push(...c);
                }),
            { unlockedBadges: n, lockedBadges: i }
        );
    }, [e?.features, t]);
}
