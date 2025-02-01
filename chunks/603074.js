n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(28546),
    f = n(675478),
    _ = n(208049),
    p = n(522811),
    h = n(763296),
    m = n(526617),
    g = n(620492);
function E(e) {
    let { guildId: t, channel: n, containerWidth: a, onClose: E, onSelect: v, analyticsSource: y, suppressPlaySound: I, shouldValidateSelectedSound: T, shouldShowUpsell: b = !0, gridNotice: S, inExpressionPicker: A, soundButtonOverlay: N, listPadding: C, renderHeader: R, defaultSoundsOnly: O } = e,
        D = (0, o.e7)([h.Z], () => h.Z.isFetchingSounds() || h.Z.isFetchingDefaultSounds()),
        { analyticsLocations: x } = (0, c.ZP)(u.Z.SOUNDBOARD_POPOUT);
    r.useEffect(() => {
        _.w(), f.DZ.loadIfNecessary(), A || (0, d.ql)('');
    }, [A]);
    let { refreshEnabled: L } = (0, p.Z)({ location: 'SoundboardSoundPicker' });
    return (0, i.jsx)(c.Gt, {
        value: x,
        children: (0, i.jsx)(l.VqE, {
            className: s()(g.picker, {
                [g.fetching]: D,
                [g.inExpressionPicker]: A,
                [g.refresh]: L
            }),
            children: D
                ? (0, i.jsx)(l.$jN, {})
                : (0, i.jsx)(m.Z, {
                      guildId: t,
                      channel: n,
                      onClose: E,
                      onSelect: v,
                      shouldValidateSelectedSound: T,
                      containerWidth: a,
                      suppressPlaySound: I,
                      shouldShowUpsell: b,
                      gridNotice: S,
                      soundButtonOverlay: N,
                      listPadding: C,
                      renderHeader: R,
                      defaultSoundsOnly: O,
                      inExpressionPicker: A,
                      refreshEnabled: L,
                      analyticsSource: y
                  })
        })
    });
}
