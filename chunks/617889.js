n.d(t, { B: () => c });
var r = n(647438),
    i = n(509212),
    a = n(988303),
    o = n(658590),
    s = n(448018),
    l = n(46140);
let c = (e, t) => {
    let n = (0, i.zK)(e, l.S7.QUEST_BAR_V2),
        c = (0, o.a)(e),
        { primaryVariant: u, progressVariant: d } = a.u.useExperiment(
            { location: l.dr.QUESTS_BAR },
            { autoTrackExposure: t && n },
        );
    return r.useMemo(
        () => (c ? (0, s.v)(e, a.P.V2, a.P.V2) : n ? (0, s.v)(e, u, d) : (0, s.v)(e, a.P.V1, a.P.V1)),
        [c, u, d, e, n],
    );
};
