n.d(t, { B: () => c });
var r = n(192379),
    o = n(918701),
    s = n(988303),
    a = n(658590),
    i = n(448018),
    l = n(46140);
let c = (e, t) => {
    let n = (0, o.zK)(e, l.S7.QUEST_BAR_V2),
        c = (0, a.a)(e),
        { primaryVariant: d, progressVariant: u } = s.u.useExperiment({ location: l.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
    return r.useMemo(() => (c ? (0, i.v)(e, s.P.V2, s.P.V2) : n ? (0, i.v)(e, d, u) : (0, i.v)(e, s.P.V1, s.P.V1)), [c, d, u, e, n]);
};
