n.d(t, { y: () => s });
var r = n(64700),
    i = n(600975),
    l = n(652215);
let a = (0, i.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [
            {
                id: 1,
                label: "Enables study group sidebar",
                config: { enableStudyGroup: !0 },
            },
        ],
    }),
    s = (e) => {
        var t;
        return (
            r.useEffect(() => {
                null != e &&
                    e.features.has(l.GuildFeatures.HUB) &&
                    a.trackExposure({
                        guildId: e.id,
                        location: "467c32_1",
                    });
            }, [e]),
            a.useExperiment(
                {
                    guildId: null != (t = null == e ? void 0 : e.id) ? t : l.dJq,
                    location: "467c32_2",
                },
                {
                    autoTrackExposure: !1,
                    disable: null == e || !e.features.has(l.GuildFeatures.HUB),
                },
            )
        );
    };
