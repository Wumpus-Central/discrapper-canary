n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(28546),
    d = n(597276),
    f = n(895421),
    _ = n(526617),
    p = n(767354);
function h(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: h,
            onSelect: m,
            analyticsSource: g,
            suppressPlaySound: E,
            shouldValidateSelectedSound: b,
            shouldShowUpsell: y = !0,
            gridNotice: O,
            inExpressionPicker: v,
            soundButtonOverlay: I,
            listPadding: T,
            renderHeader: S,
            defaultSoundsOnly: A,
        } = e,
        { fetching: C, maybeFetchData: N } = (0, f.Z)(),
        R = (0, d.Z)({ location: "SoundboardSoundPicker" }),
        { analyticsLocations: P } = (0, c.ZP)(l.Z.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            N();
        }, [N]),
        i.useEffect(() => {
            v || (0, u.ql)("");
        }, [v]),
        (0, r.jsx)(c.Gt, {
            value: P,
            children: (0, r.jsx)(s.VqE, {
                className: o()(p.picker, {
                    [p.fetching]: C,
                    [p.inExpressionPicker]: v,
                }),
                children: C
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)(_.Z, {
                          guildId: t,
                          channel: n,
                          onClose: h,
                          onSelect: m,
                          shouldValidateSelectedSound: b,
                          containerWidth: a,
                          suppressPlaySound: E,
                          shouldShowUpsell: y,
                          gridNotice: O,
                          soundButtonOverlay: I,
                          listPadding: T,
                          renderHeader: S,
                          defaultSoundsOnly: A,
                          inExpressionPicker: v,
                          analyticsSource: g,
                          enablePickerUpsellPremiumBrandRefresh: R,
                      }),
            }),
        })
    );
}
