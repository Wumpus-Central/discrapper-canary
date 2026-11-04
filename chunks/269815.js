var i = n(582128),
    r = n(855986),
    a = n(803306),
    s = n(475743),
    l = n(46653);
n.d(
    t,
    {},
    {
        A: function () {
            let [e, t] = (0, r.yK)([l.default], () => [
                    l.default.isAuthenticated(),
                    null != l.default.getAnalyticsToken(),
                ]),
                n = (0, s.Ay)(e);
            i.useEffect(() => {
                n || !e || t || a.rQ({ withAnalyticsToken: !0 });
            }, [n, e, t]);
        },
    },
);
