n.d(t, { Z: () => c }), n(539854), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(999382),
    a = n(905128),
    s = n(901005),
    o = n(131085);
function c() {
    let e = (0, i.e7)([l.Z], () => l.Z.getGuild()),
        t = (0, i.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getStateForGuild(null == e ? void 0 : e.id)) ? void 0 : t.allPowerups;
        }),
        n = (0, s.i)(null == e ? void 0 : e.id, "GuildSettingsTags");
    return (0, r.useMemo)(() => {
        let r = o.QV.map((e) => ({ kind: e })),
            i = [];
        return (
            n &&
                (null == e ? void 0 : e.features) != null &&
                Object.keys(o.Ct).forEach((n) => {
                    let l = o.Ct[n],
                        a = o.AC[n],
                        s = null == t ? void 0 : t[a],
                        c = null == s ? void 0 : s.title,
                        d = l.map((e) => ({
                            kind: e,
                            packName: c,
                        }));
                    e.features.has(n) ? r.push(...d) : i.push(...d);
                }),
            {
                unlockedBadges: r,
                lockedBadges: i,
            }
        );
    }, [null == e ? void 0 : e.features, n, t]);
}
