n.d(t, { B: () => c });
var r = n(73800),
    o = n(509212),
    s = n(988303),
    a = n(658590),
    i = n(448018),
    l = n(46140);
let c = (e, t) => {
    let n = (0, o.zK)(e, l.S7.QUEST_BAR_V2),
        c = (0, a.a)(e),
        { primaryVariant: u, progressVariant: d } = s.u.useExperiment({ location: l.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
    return r.useMemo(() => (c ? (0, i.v)(e, s.P.V2, s.P.V2) : n ? (0, i.v)(e, u, d) : (0, i.v)(e, s.P.V1, s.P.V1)), [c, u, d, e, n]);
};
