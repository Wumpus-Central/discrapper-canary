var u = r(855986),
    n = r(46653),
    l = r(851767),
    d = r(61881);
r.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, u.bG)(
                    [n.default],
                    () => {
                        let t = n.default.getId();
                        return null != e && t === e;
                    },
                    [e],
                ),
                r = (0, u.bG)([d.A], () => d.A.getPendingWidgets()),
                i = (0, u.yK)(
                    [l.A],
                    () => {
                        if (null == e) return [];
                        let t = l.A.getUserProfile(e);
                        return t?.widgets ?? [];
                    },
                    [e],
                );
            return t && null !== r ? r : i;
        },
    },
);
