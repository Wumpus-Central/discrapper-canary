n.d(t, { T: () => l });
var i = n(259443),
    r = n(818083),
    a = n(231338);
let s = (0, r.B)({
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
    o = () => s.getCurrentConfig({ location: 'quests_logging' }, { autoTrackExposure: !1 }).enabled;
function l() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = o(),
        r = null == e ? void 0 : e.config.messages.questName,
        s = null != t ? '-'.concat(t) : '',
        l = null != r ? '-'.concat(r, ')') : '',
        u = 'QuestLogger'.concat(s).concat(l),
        c = new i.Yd(u);
    return {
        log: n ? c.log : a.dG,
        warn: n ? c.warn : a.dG,
        error: n ? c.error : a.dG,
        info: n ? c.info : a.dG,
        verbose: n ? c.verbose : a.dG,
        trace: n ? c.trace : a.dG
    };
}
