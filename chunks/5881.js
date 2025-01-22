r.d(n, {
    T: function () {
        return u;
    }
});
var i = r(259443),
    a = r(818083),
    o = r(231338);
let s = (0, a.B)({
        id: '2024-04_quests_logging',
        kind: 'user',
        label: 'Quests Logging',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quest logging enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    l = () => s.getCurrentConfig({ location: 'quests_logging' }, { autoTrackExposure: !1 }).enabled;
function u() {
    let { quest: e, location: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = l(),
        a = null == e ? void 0 : e.config.messages.questName,
        s = null != n ? '-'.concat(n) : '',
        u = null != a ? '-'.concat(a, ')') : '',
        c = 'QuestLogger'.concat(s).concat(u),
        d = new i.Yd(c);
    return {
        log: r ? d.log : o.dG,
        warn: r ? d.warn : o.dG,
        error: r ? d.error : o.dG,
        info: r ? d.info : o.dG,
        verbose: r ? d.verbose : o.dG,
        trace: r ? d.trace : o.dG
    };
}
