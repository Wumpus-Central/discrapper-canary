n.d(t, { Z: () => g });
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
    p = n(763296),
    h = n(526617),
    m = n(268365);
function g(e) {
    let { guildId: t, channel: n, containerWidth: a, onClose: g, onSelect: E, analyticsSource: b, suppressPlaySound: y, shouldValidateSelectedSound: O, shouldShowUpsell: v = !0, gridNotice: I, inExpressionPicker: T, soundButtonOverlay: S, listPadding: A, renderHeader: N, defaultSoundsOnly: C } = e,
        R = (0, s.e7)([p.Z], () => p.Z.isFetchingSounds() || p.Z.isFetchingDefaultSounds()),
        { analyticsLocations: P } = (0, u.ZP)(c.Z.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            (_.w(), f.DZ.loadIfNecessary(), T || (0, d.ql)(''));
        }, [T]),
        (0, r.jsx)(u.Gt, {
            value: P,
            children: (0, r.jsx)(l.VqE, {
                className: o()(m.picker, {
                    [m.fetching]: R,
                    [m.inExpressionPicker]: T
                }),
                children: R
                    ? (0, r.jsx)(l.$jN, {})
                    : (0, r.jsx)(h.Z, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: E,
                          shouldValidateSelectedSound: O,
                          containerWidth: a,
                          suppressPlaySound: y,
                          shouldShowUpsell: v,
                          gridNotice: I,
                          soundButtonOverlay: S,
                          listPadding: A,
                          renderHeader: N,
                          defaultSoundsOnly: C,
                          inExpressionPicker: T,
                          analyticsSource: b
                      })
            })
        })
    );
}
