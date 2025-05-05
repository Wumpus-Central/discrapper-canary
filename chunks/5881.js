n.d(t, { T: () => l });
var r = n(259443),
    i = n(818083),
    a = n(231338);
let o = (0, i.B)({
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
    s = () => o.getCurrentConfig({ location: 'quests_logging' }, { autoTrackExposure: !1 }).enabled;
function l() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = s(),
        i = null == e ? void 0 : e.config.messages.questName,
        o = null != t ? '-'.concat(t) : '',
        l = null != i ? '-'.concat(i, ')') : '',
        c = 'QuestLogger'.concat(o).concat(l),
        u = new r.Yd(c);
    return {
        log: n ? u.log : a.dG,
        warn: n ? u.warn : a.dG,
        error: n ? u.error : a.dG,
        info: n ? u.info : a.dG,
        verbose: n ? u.verbose : a.dG,
        trace: n ? u.trace : a.dG
    };
}
