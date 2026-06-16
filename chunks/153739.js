l.d(t, { F7: () => c, tl: () => u, y3: () => d });
var n = l(702841),
    i = l(287809),
    s = l(842144),
    a = l(695515),
    r = l(438732);
let d = () => {
        let e = (0, r.A)();
        return (0, n.bG)([a.A, i.default], () => {
            if (!0 !== e) return i.default.getCurrentUser();
            let t = a.A.getSelectedTeenId();
            if (null !== t) return i.default.getUser(t);
        });
    },
    c = (e) =>
        (0, n.bG)([i.default], () => {
            let t = i.default.getUser(e);
            if (null != t) return t;
        }),
    u = () => {
        let e = a.A.getSelectedTeenId(),
            { hasLoadedSettings: t, isLoading: l } = (0, n.cf)([s.A], () => ({
                hasLoadedSettings: null != e && s.A.hasSettingsForUser(e),
                isLoading: s.A.isLoading,
            }));
        return null !== e && !t && !l;
    };
