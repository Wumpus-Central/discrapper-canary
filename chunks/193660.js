i.d(e, {
    w: () => S,
});
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(688810),
    u = i(259065),
    a = i(419954),
    o = i(780964),
    T = i(985018),
    A = i(927961);
let S = (0, a.zD)(o.X.DISPLAY_NAME_STYLES, {
    useTitle: () => T.intl.string(A.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: t } = (0, r.Ay)();
        return T.intl.format(A.default.L8U56h, {
            onClickOpenModal() {
                (0, u.L)({
                    analyticsLocations: t,
                });
            },
        });
    },
    useValue: () => (0, n.bG)([s.A], () => s.A.displayNameStylesEnabled),
    setValue: (t) => (0, l.Dm)(t),
});
