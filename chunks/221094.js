n.d(t, { y: () => s });
var i = n(64700),
    r = n(600975),
    a = n(652215);
let l = (0, r.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
    }),
    s = (e) => (
        i.useEffect(() => {
            null != e &&
                e.features.has(a.GuildFeatures.HUB) &&
                l.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        l.useExperiment(
            { guildId: e?.id ?? a.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(a.GuildFeatures.HUB) },
        )
    );
