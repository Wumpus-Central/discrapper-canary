n.d(t, { Z: () => o }), n(539854), n(388685);
var r = n(647438),
    i = n(442837),
    l = n(999382),
    a = n(905128),
    s = n(131085);
function o() {
    let e = (0, i.e7)([l.Z], () => l.Z.getGuild()),
        t = (0, i.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getStateForGuild(null == e ? void 0 : e.id)) ? void 0 : t.allPowerups;
        });
    return (0, r.useMemo)(() => {
        let n = s.QV.map((e) => ({ kind: e })),
            r = [];
        return (
            (null == e ? void 0 : e.features) == null ||
                Object.keys(s.Ct).forEach((i) => {
                    let l = s.Ct[i],
                        a = s.AC[i],
                        o = null == t ? void 0 : t[a],
                        c = null == o ? void 0 : o.title,
                        d = l.map((e) => ({
                            kind: e,
                            packName: c,
                        }));
                    e.features.has(i) ? n.push(...d) : r.push(...d);
                }),
            {
                unlockedBadges: n,
                lockedBadges: r,
            }
        );
    }, [null == e ? void 0 : e.features, t]);
}
