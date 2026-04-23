n.d(e, { A: () => c }), n(321073);
var s = n(64700),
    l = n(17928),
    r = n(555337),
    i = n(645619),
    a = n(743981);
function c() {
    let t = (0, l.bG)([r.A], () => r.A.getGuild()),
        e = (0, l.bG)([i.A], () => i.A.getStateForGuild(t?.id)?.allPowerups);
    return (0, s.useMemo)(() => {
        let n = a.hc.map((t) => ({ kind: t })),
            s = [];
        return (
            t?.features == null ||
                Object.keys(a.Tf).forEach((l) => {
                    let r = a.Tf[l],
                        i = a.kO[l],
                        c = e?.[i],
                        d = c?.title,
                        o = r.map((t) => ({ kind: t, packName: d }));
                    t.features.has(l) ? n.push(...o) : s.push(...o);
                }),
            { unlockedBadges: n, lockedBadges: s }
        );
    }, [t?.features, e]);
}
