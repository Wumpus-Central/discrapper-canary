(n.d(t, { Z: () => o }), n(388685), n(539854));
var r = n(73800),
    i = n(442837),
    l = n(999382),
    a = n(901005),
    s = n(131085);
function o() {
    let e = (0, i.e7)([l.Z], () => l.Z.getGuild()),
        t = (0, a.i)(null == e ? void 0 : e.id, 'GuildSettingsTags');
    return (0, r.useMemo)(() => {
        let n = [...s.QV],
            r = [];
        return (
            t &&
                (null == e ? void 0 : e.features) != null &&
                Object.keys(s.Ct).forEach((t) => {
                    let i = s.Ct[t];
                    e.features.has(t) ? n.push(...i) : r.push(...i);
                }),
            {
                unlockedBadges: n,
                lockedBadges: r
            }
        );
    }, [null == e ? void 0 : e.features, t]);
}
