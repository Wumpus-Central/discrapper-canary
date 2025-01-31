n.d(t, { s: () => s });
var i = n(192379),
    l = n(818083),
    r = n(981631);
let a = (0, l.B)({
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
    s = (e) => {
        var t;
        return (
            i.useEffect(() => {
                null != e &&
                    e.hasFeature(r.oNc.HUB) &&
                    a.trackExposure({
                        guildId: e.id,
                        location: '467c32_1'
                    });
            }, [e]),
            a.useExperiment(
                {
                    guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : r.lds,
                    location: '467c32_2'
                },
                {
                    autoTrackExposure: !1,
                    disable: null == e || !e.hasFeature(r.oNc.HUB)
                }
            )
        );
    };
