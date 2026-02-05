i.d(e, { w: () => A });
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(688810),
    a = i(259065),
    u = i(419954),
    o = i(780964),
    d = i(985018),
    T = i(927961);
let A = (0, u.zD)(o.X.DISPLAY_NAME_STYLES, {
    useTitle: () => d.intl.string(T.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: t } = (0, r.Ay)();
        return d.intl.format(T.default.L8U56h, {
            onClickOpenModal() {
                (0, a.L)({ analyticsLocations: t });
            },
        });
    },
    useValue: () => (0, n.bG)([s.A], () => s.A.displayNameStylesEnabled),
    setValue: (t) => (0, l.Dm)(t),
});
