n.d(t, { Z: () => m });
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
    p = n(526617),
    _ = n(767354);
function m(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: m,
            onSelect: h,
            analyticsSource: g,
            suppressPlaySound: E,
            shouldValidateSelectedSound: b,
            shouldShowUpsell: y = !0,
            gridNotice: O,
            inExpressionPicker: v,
            soundButtonOverlay: S,
            listPadding: I,
            renderHeader: T,
            defaultSoundsOnly: C,
        } = e,
        { fetching: A, maybeFetchData: N } = (0, f.Z)(),
        P = (0, d.Z)({ location: "SoundboardSoundPicker" }),
        { analyticsLocations: R } = (0, c.ZP)(l.Z.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            N();
        }, [N]),
        i.useEffect(() => {
            v || (0, u.ql)("");
        }, [v]),
        (0, r.jsx)(c.Gt, {
            value: R,
            children: (0, r.jsx)(s.VqE, {
                className: o()(_.picker, {
                    [_.fetching]: A,
                    [_.inExpressionPicker]: v,
                }),
                children: A
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)(p.Z, {
                          guildId: t,
                          channel: n,
                          onClose: m,
                          onSelect: h,
                          shouldValidateSelectedSound: b,
                          containerWidth: a,
                          suppressPlaySound: E,
                          shouldShowUpsell: y,
                          gridNotice: O,
                          soundButtonOverlay: S,
                          listPadding: I,
                          renderHeader: T,
                          defaultSoundsOnly: C,
                          inExpressionPicker: v,
                          analyticsSource: g,
                          enablePickerUpsellPremiumBrandRefresh: P,
                      }),
            }),
        })
    );
}
