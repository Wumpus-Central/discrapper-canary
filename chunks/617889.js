n.d(t, { B: () => c });
var r = n(73800),
    s = n(918701),
    o = n(988303),
    a = n(658590),
    i = n(448018),
    l = n(46140);
let c = (e, t) => {
    let n = (0, s.zK)(e, l.S7.QUEST_BAR_V2),
        c = (0, a.a)(e),
        { primaryVariant: d, progressVariant: u } = o.u.useExperiment({ location: l.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
    return r.useMemo(() => (c ? (0, i.v)(e, o.P.V2, o.P.V2) : n ? (0, i.v)(e, d, u) : (0, i.v)(e, o.P.V1, o.P.V1)), [c, d, u, e, n]);
};
