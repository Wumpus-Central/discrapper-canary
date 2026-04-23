n.d(t, { w: () => g });
var i = n(311907),
    s = n(955572),
    l = n(775602),
    a = n(688810),
    r = n(259065),
    o = n(419954),
    d = n(780964),
    u = n(985018),
    c = n(864386);
let g = (0, o.zD)(d.X.DISPLAY_NAME_STYLES, {
    useTitle: () => u.intl.string(c.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, a.Ay)();
        return u.intl.format(c.default.aEax6P, {
            onClickOpenModal() {
                (0, r.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, i.bG)([l.A], () => l.A.displayNameStylesEnabled),
    setValue: (e) => (0, s.Dm)(e),
});
