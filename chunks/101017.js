n.d(t, { Z: () => c }), n(539854), n(388685);
var r = n(647438),
    s = n(442837),
    i = n(999382),
    l = n(905128),
    a = n(131085);
function c() {
    let e = (0, s.e7)([i.Z], () => i.Z.getGuild()),
        t = (0, s.e7)([l.Z], () => {
            var t;
            return null == (t = l.Z.getStateForGuild(null == e ? void 0 : e.id)) ? void 0 : t.allPowerups;
        });
    return (0, r.useMemo)(() => {
        let n = a.QV.map((e) => ({ kind: e })),
            r = [];
        return (
            (null == e ? void 0 : e.features) == null ||
                Object.keys(a.Ct).forEach((s) => {
                    let i = a.Ct[s],
                        l = a.AC[s],
                        c = null == t ? void 0 : t[l],
                        d = null == c ? void 0 : c.title,
                        o = i.map((e) => ({
                            kind: e,
                            packName: d,
                        }));
                    e.features.has(s) ? n.push(...o) : r.push(...o);
                }),
            {
                unlockedBadges: n,
                lockedBadges: r,
            }
        );
    }, [null == e ? void 0 : e.features, t]);
}
