n.d(t, { F7: () => c, tl: () => d, y3: () => o });
var i = n(417597),
    s = n(287809),
    r = n(842144),
    a = n(695515),
    l = n(438732);
let o = () => {
        let e = (0, l.A)();
        return (0, i.bG)([a.A, s.default], () => {
            if (!0 !== e) return s.default.getCurrentUser();
            let t = a.A.getSelectedTeenId();
            if (null !== t) return s.default.getUser(t);
        });
    },
    c = (e) =>
        (0, i.bG)([s.default], () => {
            let t = s.default.getUser(e);
            if (null != t) return t;
        }),
    d = () => {
        let e = a.A.getSelectedTeenId(),
            { hasLoadedSettings: t, isLoading: n } = (0, i.cf)([r.A], () => ({
                hasLoadedSettings: null != e && r.A.hasSettingsForUser(e),
                isLoading: r.A.isLoading,
            }));
        return null !== e && !t && !n;
    };
