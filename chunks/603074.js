n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(28546),
    d = n(895421),
    f = n(526617),
    _ = n(767354);
function p(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: p,
            onSelect: h,
            analyticsSource: m,
            suppressPlaySound: g,
            shouldValidateSelectedSound: E,
            shouldShowUpsell: b = !0,
            gridNotice: y,
            inExpressionPicker: O,
            soundButtonOverlay: v,
            listPadding: I,
            renderHeader: T,
            defaultSoundsOnly: S,
        } = e,
        { fetching: A, maybeFetchData: C } = (0, d.Z)(),
        { analyticsLocations: N } = (0, c.ZP)(l.Z.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            C();
        }, [C]),
        i.useEffect(() => {
            O || (0, u.ql)("");
        }, [O]),
        (0, r.jsx)(c.Gt, {
            value: N,
            children: (0, r.jsx)(s.VqE, {
                className: o()(_.picker, {
                    [_.fetching]: A,
                    [_.inExpressionPicker]: O,
                }),
                children: A
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)(f.Z, {
                          guildId: t,
                          channel: n,
                          onClose: p,
                          onSelect: h,
                          shouldValidateSelectedSound: E,
                          containerWidth: a,
                          suppressPlaySound: g,
                          shouldShowUpsell: b,
                          gridNotice: y,
                          soundButtonOverlay: v,
                          listPadding: I,
                          renderHeader: T,
                          defaultSoundsOnly: S,
                          inExpressionPicker: O,
                          analyticsSource: m,
                      }),
            }),
        })
    );
}
