var l = t(350835),
    i = t(855986),
    r = t(46653),
    a = t(290863),
    s = t(685396);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = (0, i.bG)([r.default], () => r.default.getId() === e),
                t = (0, s.K)(),
                o = (0, i.bG)([a.A], () =>
                    a.A.findActivity(e, (e) => {
                        let { type: n } = e;
                        return n === l.$.CUSTOM_STATUS;
                    }),
                );
            return n ? t : o;
        },
    },
);
