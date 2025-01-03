n.d(t, {
    s: function () {
        return s;
    }
});
var i = n(192379),
    r = n(818083),
    l = n(981631);
let a = (0, r.B)({
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
                    e.hasFeature(l.oNc.HUB) &&
                    a.trackExposure({
                        guildId: e.id,
                        location: '467c32_1'
                    });
            }, [e]),
            a.useExperiment(
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
