n.d(t, {
    F7: () => c,
    tl: () => u,
    y3: () => l,
});
var r = n(417597),
    i = n(287809),
    a = n(842144),
    s = n(695515),
    o = n(945276);
let l = () => {
        let e = (0, o.A)();
        return (0, r.bG)([s.A, i.default], () => {
            if (!e) return i.default.getCurrentUser();
            let t = s.A.getSelectedTeenId();
            if (null !== t) return i.default.getUser(t);
        });
    },
    c = (e) =>
        (0, r.bG)([i.default], () => {
            let t = i.default.getUser(e);
            if (null != t) return t;
        }),
    u = () => {
        let e = s.A.getSelectedTeenId(),
            { hasLoadedSettings: t, isLoading: n } = (0, r.cf)([a.A], () => ({
                hasLoadedSettings: null != e && a.A.hasSettingsForUser(e),
                isLoading: a.A.isLoading,
            }));
        return null !== e && !t && !n;
    };
