r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(100527),
    d = r(906732),
    f = r(28546),
    _ = r(675478),
    h = r(208049),
    p = r(522811),
    m = r(763296),
    g = r(526617),
    E = r(620492);
function v(e) {
    let { guildId: n, channel: r, containerWidth: s, onClose: v, onSelect: I, analyticsSource: T, suppressPlaySound: b, shouldValidateSelectedSound: y, shouldShowUpsell: S = !0, gridNotice: A, inExpressionPicker: N, soundButtonOverlay: C, listPadding: R, renderHeader: O, defaultSoundsOnly: D } = e,
        L = (0, l.e7)([m.Z], () => m.Z.isFetchingSounds() || m.Z.isFetchingDefaultSounds()),
        { analyticsLocations: x } = (0, d.ZP)(c.Z.SOUNDBOARD_POPOUT);
    a.useEffect(() => {
        h.w(), _.DZ.loadIfNecessary(), (0, f.ql)('');
    }, []);
    let { refreshEnabled: w } = (0, p.Z)({ location: 'SoundboardSoundPicker' });
    return (0, i.jsx)(d.Gt, {
        value: x,
        children: (0, i.jsx)(u.Dialog, {
            className: o()(E.picker, {
                [E.fetching]: L,
                [E.inExpressionPicker]: N,
                [E.refresh]: w
            }),
            children: L
                ? (0, i.jsx)(u.Spinner, {})
                : (0, i.jsx)(g.Z, {
                      guildId: n,
                      channel: r,
                      onClose: v,
                      onSelect: I,
                      shouldValidateSelectedSound: y,
                      containerWidth: s,
                      suppressPlaySound: b,
                      shouldShowUpsell: S,
                      gridNotice: A,
                      soundButtonOverlay: C,
                      listPadding: R,
                      renderHeader: O,
                      defaultSoundsOnly: D,
                      inExpressionPicker: N,
                      refreshEnabled: w,
                      analyticsSource: T
                  })
        })
    });
}
