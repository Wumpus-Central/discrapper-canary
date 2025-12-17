n.d(e, { F: () => E });
var i = n(442837),
    l = n(857595),
    s = n(607070),
    u = n(906732),
    r = n(272157),
    a = n(829716),
    o = n(509613),
    S = n(313789),
    T = n(388032),
    c = n(143525);
let E = (0, o.qs)(S.n.DISPLAY_NAME_STYLES, {
    useTitle: () => T.intl.string(c.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: t } = (0, u.ZP)();
        return T.intl.format(c.default.L8U56h, {
            onClickOpenModal() {
                (0, a.I)({ analyticsLocations: t });
            },
        });
    },
    useValue: () => (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
    setValue: (t) => (0, l.X2)(t),
    usePredicate: () => (0, r.i)({ location: "DisplayNameStylesSetting" }),
});
