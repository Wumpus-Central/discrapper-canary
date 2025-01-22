r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(100527),
    d = r(906732),
    f = r(28546),
    p = r(675478),
    h = r(208049),
    _ = r(522811),
    m = r(763296),
    g = r(526617),
    E = r(620492);
function v(e) {
    let { guildId: n, channel: r, containerWidth: o, onClose: v, onSelect: y, analyticsSource: b, suppressPlaySound: I, shouldValidateSelectedSound: T, shouldShowUpsell: S = !0, gridNotice: A, inExpressionPicker: C, soundButtonOverlay: N, listPadding: R, renderHeader: O, defaultSoundsOnly: D } = e,
        x = (0, l.e7)([m.Z], () => m.Z.isFetchingSounds() || m.Z.isFetchingDefaultSounds()),
        { analyticsLocations: L } = (0, d.ZP)(c.Z.SOUNDBOARD_POPOUT);
    a.useEffect(() => {
        h.w(), p.DZ.loadIfNecessary(), (0, f.ql)('');
    }, []);
    let { refreshEnabled: w } = (0, _.Z)({ location: 'SoundboardSoundPicker' });
    return (0, i.jsx)(d.Gt, {
        value: L,
        children: (0, i.jsx)(u.Dialog, {
            className: s()(E.picker, {
                [E.fetching]: x,
                [E.inExpressionPicker]: C,
                [E.refresh]: w
            }),
            children: x
                ? (0, i.jsx)(u.Spinner, {})
                : (0, i.jsx)(g.Z, {
                      guildId: n,
                      channel: r,
                      onClose: v,
                      onSelect: y,
                      shouldValidateSelectedSound: T,
                      containerWidth: o,
                      suppressPlaySound: I,
                      shouldShowUpsell: S,
                      gridNotice: A,
                      soundButtonOverlay: N,
                      listPadding: R,
                      renderHeader: O,
                      defaultSoundsOnly: D,
                      inExpressionPicker: C,
                      refreshEnabled: w,
                      analyticsSource: b
                  })
        })
    });
}
