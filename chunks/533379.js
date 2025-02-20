n.d(t, { R: () => a });
var r = n(442837),
    i = n(998698),
    l = n(873387),
    o = n(424602);
function a(e) {
    let { channel: t, chatInputType: n, location: a } = e,
        s = o.T.useExperiment({ location: a }, { autoTrackExposure: !0 }).enabled,
        c = (0, l.g)(t),
        { activeCommand: u } = (0, r.cj)([i.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? i.Z.getActiveCommand(t.id) : null };
        });
    return s && null == u && c;
}
