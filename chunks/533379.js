n.d(t, { R: () => s });
var i = n(442837),
    l = n(998698),
    a = n(873387),
    r = n(424602);
function s(e) {
    let { channel: t, chatInputType: n, location: s } = e,
        o = r.T.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
        c = (0, a.g)(t),
        { activeCommand: d } = (0, i.cj)([l.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? l.Z.getActiveCommand(t.id) : null };
        });
    return o && null == d && c;
}
