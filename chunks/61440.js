n.d(e, { F: () => S });
var i = n(442837),
    l = n(857595),
    s = n(607070),
    u = n(906732),
    r = n(272157),
    a = n(829716),
    o = n(509613),
    c = n(313789),
    T = n(388032),
    d = n(324243);
let S = (0, o.qs)(c.n.DISPLAY_NAME_STYLES, {
    useTitle: () => T.intl.string(d.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: t } = (0, u.ZP)();
        return T.intl.format(d.default.L8U56h, {
            onClickOpenModal() {
                (0, a.I)({ analyticsLocations: t });
            },
        });
    },
    useValue: () => (0, i.e7)([s.Z], () => s.Z.displayNameStylesEnabled),
    setValue: (t) => (0, l.X2)(t),
    usePredicate: () => (0, r.i)({ location: "DisplayNameStylesSetting" }),
});
