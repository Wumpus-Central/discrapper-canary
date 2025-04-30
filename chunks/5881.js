n.d(t, { T: () => l });
var r = n(259443),
    i = n(818083),
    o = n(231338);
let a = (0, i.B)({
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
    s = () => a.getCurrentConfig({ location: 'quests_logging' }, { autoTrackExposure: !1 }).enabled;
function l() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = s(),
        i = null == e ? void 0 : e.config.messages.questName,
        a = null != t ? '-'.concat(t) : '',
        l = null != i ? '-'.concat(i, ')') : '',
        c = 'QuestLogger'.concat(a).concat(l),
        u = new r.Yd(c);
    return {
        log: n ? u.log : o.dG,
        warn: n ? u.warn : o.dG,
        error: n ? u.error : o.dG,
        info: n ? u.info : o.dG,
        verbose: n ? u.verbose : o.dG,
        trace: n ? u.trace : o.dG
    };
}
