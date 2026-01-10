n.d(e, { F: () => c });
var i = n(442837),
    l = n(857595),
    s = n(607070),
    u = n(906732),
    r = n(829716),
    a = n(509613),
    o = n(313789),
    T = n(388032),
    S = n(143525);
let c = (0, a.qs)(o.n.DISPLAY_NAME_STYLES, {
    useTitle: () => T.intl.string(S.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: t } = (0, u.ZP)();
        return T.intl.format(S.default.L8U56h, {
            onClickOpenModal() {
                (0, r.I)({ analyticsLocations: t });
            },
        });
    },
    useValue: () => (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
    setValue: (t) => (0, l.X2)(t),
});
