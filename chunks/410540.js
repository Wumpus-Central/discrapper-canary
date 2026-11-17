var l = t(350835),
    i = t(855986),
    a = t(46653),
    r = t(290863),
    s = t(685396);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = (0, i.bG)([a.default], () => a.default.getId() === e),
                t = (0, s.K)(),
                o = (0, i.bG)([r.A], () =>
                    r.A.findActivity(e, (e) => {
                        let { type: n } = e;
                        return n === l.$.CUSTOM_STATUS;
                    }),
                );
            return n ? t : o;
        },
    },
);
