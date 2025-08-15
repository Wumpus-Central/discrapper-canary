n.d(t, { Z: () => u }), n(539854), n(388685);
var r = n(647438),
    s = n(442837),
    i = n(999382),
    l = n(905128),
    a = n(901005),
    c = n(131085);
function u() {
    let e = (0, s.e7)([i.Z], () => i.Z.getGuild()),
        t = (0, s.e7)([l.Z], () => {
            var t;
            return null == (t = l.Z.getStateForGuild(null == e ? void 0 : e.id)) ? void 0 : t.allPowerups;
        }),
        n = (0, a.i)(null == e ? void 0 : e.id, "GuildSettingsTags");
    return (0, r.useMemo)(() => {
        let r = c.QV.map((e) => ({ kind: e })),
            s = [];
        return (
            n &&
                (null == e ? void 0 : e.features) != null &&
                Object.keys(c.Ct).forEach((n) => {
                    let i = c.Ct[n],
                        l = c.AC[n],
                        a = null == t ? void 0 : t[l],
                        u = null == a ? void 0 : a.title,
                        d = i.map((e) => ({
                            kind: e,
                            packName: u,
                        }));
                    e.features.has(n) ? r.push(...d) : s.push(...d);
                }),
            {
                unlockedBadges: r,
                lockedBadges: s,
            }
        );
    }, [null == e ? void 0 : e.features, n, t]);
}
