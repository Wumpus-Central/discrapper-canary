n.d(t, { s: () => a });
var r = n(192379),
    i = n(818083),
    l = n(981631);
let o = (0, i.B)({
        kind: 'guild',
        id: '2021-10_study_group',
        label: 'Student hub study group',
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables study group sidebar',
                config: { enableStudyGroup: !0 }
            }
        ]
    }),
    a = (e) => {
        var t;
        return (
            r.useEffect(() => {
                null != e &&
                    e.hasFeature(l.oNc.HUB) &&
                    o.trackExposure({
                        guildId: e.id,
                        location: '467c32_1'
                    });
            }, [e]),
            o.useExperiment(
                {
                    guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : l.lds,
                    location: '467c32_2'
                },
                {
                    autoTrackExposure: !1,
                    disable: null == e || !e.hasFeature(l.oNc.HUB)
                }
            )
        );
    };
