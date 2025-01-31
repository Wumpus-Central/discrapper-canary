n.d(t, { B: () => c });
var s = n(192379),
    r = n(918701),
    a = n(988303),
    o = n(658590),
    i = n(448018),
    l = n(46140);
let c = (e, t) => {
    let n = (0, r.zK)(e, l.S7.QUEST_BAR_V2),
        c = (0, o.a)(e),
        { primaryVariant: d, progressVariant: u } = a.u.useExperiment({ location: l.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
    return s.useMemo(() => (c ? (0, i.v)(e, a.P.V2, a.P.V2) : n ? (0, i.v)(e, d, u) : (0, i.v)(e, a.P.V1, a.P.V1)), [c, d, u, e, n]);
};
