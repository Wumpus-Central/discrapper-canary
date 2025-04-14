n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(28546),
    f = n(675478),
    _ = n(208049),
    p = n(522811),
    h = n(763296),
    m = n(526617),
    g = n(268365);
function E(e) {
    let { guildId: t, channel: n, containerWidth: o, onClose: E, onSelect: b, analyticsSource: y, suppressPlaySound: v, shouldValidateSelectedSound: O, shouldShowUpsell: I = !0, gridNotice: S, inExpressionPicker: T, soundButtonOverlay: N, listPadding: A, renderHeader: C, defaultSoundsOnly: R } = e,
        P = (0, s.e7)([h.Z], () => h.Z.isFetchingSounds() || h.Z.isFetchingDefaultSounds()),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.SOUNDBOARD_POPOUT);
    i.useEffect(() => {
        _.w(), f.DZ.loadIfNecessary(), T || (0, d.ql)('');
    }, [T]);
    let { refreshEnabled: D } = (0, p.Z)({ location: 'SoundboardSoundPicker' });
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsx)(l.VqE, {
            className: a()(g.picker, {
                [g.fetching]: P,
                [g.inExpressionPicker]: T,
                [g.refresh]: D
            }),
            children: P
                ? (0, r.jsx)(l.$jN, {})
                : (0, r.jsx)(m.Z, {
                      guildId: t,
                      channel: n,
                      onClose: E,
                      onSelect: b,
                      shouldValidateSelectedSound: O,
                      containerWidth: o,
                      suppressPlaySound: v,
                      shouldShowUpsell: I,
                      gridNotice: S,
                      soundButtonOverlay: N,
                      listPadding: A,
                      renderHeader: C,
                      defaultSoundsOnly: R,
                      inExpressionPicker: T,
                      refreshEnabled: D,
                      analyticsSource: y
                  })
        })
    });
}
