t.d(n, {
    Fv: function () {
        return u;
    },
    eA: function () {
        return d;
    }
});
var i = t(192379),
    l = t(818083),
    a = t(594174),
    r = t(981631);
let o = (0, l.B)({
    kind: 'guild',
    id: '2022-03_guild_access_rate_insight_experiment',
    label: 'Guild Access Rate Insight Experiment',
    defaultConfig: { showAccessRate: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show guild access rate in insights',
            config: { showAccessRate: !0 }
        }
    ]
});
function u(e) {
    var n;
    return (
        (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) &&
        o.getCurrentConfig({
            guildId: e,
            location: '77b4b2_1'
        }).showAccessRate
    );
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        i.useEffect(() => {
            !n &&
                null != e &&
                o.trackExposure({
                    guildId: e,
                    location: '77b4b2_2'
                });
        }, [e, n]),
        o.useExperiment(
            {
                guildId: null != e ? e : r.lds,
                location: '77b4b2_3'
            },
            {
                autoTrackExposure: !1,
                disable: n || null == e
            }
        )
    );
}
