n.d(t, { V: () => x });
var i = n(349941),
    s = n(311907),
    l = n(955572),
    a = n(775602),
    r = n(47671),
    o = n(419954),
    d = n(97469),
    c = n(544028),
    u = n(253932),
    m = n(780964),
    g = n(818348),
    _ = n(985018);
let x = (0, o.zD)(m.X.DISPLAY_DARK_SIDEBAR, {
    useTitle: () => _.intl.string(_.t.EpSHAQ),
    useSearchTerms: () => [_.intl.string(_.t.Ksh3ik)],
    useValue: function () {
        let e = (0, d.qo)();
        return (0, s.bG)([c.A, a.A], () => {
            let t = c.A.theme,
                n = a.A.useForcedColors;
            return e && (0, i.qB)(t) && !n;
        });
    },
    usePredicate: function () {
        let e = null != u.eh.useSetting().customUserThemeSettings;
        return (0, s.bG)([c.A, r.A], () => {
            let t = c.A.theme,
                n = r.A.gradientPreset;
            return (0, i.qB)(t) && null == n && !e;
        });
    },
    useDisabled: function () {
        return (0, s.bG)([c.A, a.A], () => {
            let e = c.A.theme,
                t = a.A.useForcedColors;
            return e !== g.NJ.LIGHT || t;
        });
    },
    setValue: l.LO,
});
