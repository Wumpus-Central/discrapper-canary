var r = n(855986),
    a = n(46653),
    i = n(851767),
    d = n(61881);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, r.bG)(
                    [a.default],
                    () => {
                        let t = a.default.getId();
                        return null != e && t === e;
                    },
                    [e],
                ),
                n = (0, r.bG)([d.A], () => d.A.getPendingWidgets()),
                l = (0, r.yK)(
                    [i.A],
                    () => {
                        if (null == e) return [];
                        let t = i.A.getUserProfile(e);
                        return t?.widgets ?? [];
                    },
                    [e],
                );
            return t && null !== n ? n : l;
        },
    },
);
