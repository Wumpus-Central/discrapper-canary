i.d(t, { V: () => E });
var n = i(349941),
    l = i(311907),
    s = i(955572),
    r = i(775602),
    a = i(47671),
    u = i(419954),
    o = i(97469),
    d = i(544028),
    _ = i(253932),
    T = i(780964),
    A = i(818348),
    S = i(985018);
let E = (0, u.zD)(T.X.DISPLAY_DARK_SIDEBAR, {
    useTitle: () => S.intl.string(S.t.EpSHAQ),
    useSearchTerms: () => [S.intl.string(S.t.Ksh3ik)],
    useValue: function () {
        let e = (0, o.qo)();
        return (0, l.bG)([d.A, r.A], () => {
            let t = d.A.theme,
                i = r.A.useForcedColors;
            return e && (0, n.qB)(t) && !i;
        });
    },
    usePredicate: function () {
        let e = null != _.eh.useSetting().customUserThemeSettings;
        return (0, l.bG)([d.A, a.A], () => {
            let t = d.A.theme,
                i = a.A.gradientPreset;
            return (0, n.qB)(t) && null == i && !e;
        });
    },
    useDisabled: function () {
        return (0, l.bG)([d.A, r.A], () => {
            let e = d.A.theme,
                t = r.A.useForcedColors;
            return e !== A.NJ.LIGHT || t;
        });
    },
    setValue: s.LO,
});
