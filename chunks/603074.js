n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    let { guildId: t, channel: n, containerWidth: a, onClose: E, onSelect: b, analyticsSource: y, suppressPlaySound: O, shouldValidateSelectedSound: v, shouldShowUpsell: I = !0, gridNotice: S, inExpressionPicker: T, soundButtonOverlay: A, listPadding: N, renderHeader: C, defaultSoundsOnly: R } = e,
        P = (0, s.e7)([h.Z], () => h.Z.isFetchingSounds() || h.Z.isFetchingDefaultSounds()),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.SOUNDBOARD_POPOUT);
    i.useEffect(() => {
        _.w(), f.DZ.loadIfNecessary(), T || (0, d.ql)('');
    }, [T]);
    let { refreshEnabled: D } = (0, p.Z)({ location: 'SoundboardSoundPicker' });
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsx)(l.VqE, {
            className: o()(g.picker, {
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
                      shouldValidateSelectedSound: v,
                      containerWidth: a,
                      suppressPlaySound: O,
                      shouldShowUpsell: I,
                      gridNotice: S,
                      soundButtonOverlay: A,
                      listPadding: N,
                      renderHeader: C,
                      defaultSoundsOnly: R,
                      inExpressionPicker: T,
                      refreshEnabled: D,
                      analyticsSource: y
                  })
        })
    });
}
