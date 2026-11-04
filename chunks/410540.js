var l = n(350835),
    i = n(855986),
    r = n(46653),
    a = n(290863),
    s = n(685396);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, i.bG)([r.default], () => r.default.getId() === e),
                n = (0, s.K)(),
                o = (0, i.bG)([a.A], () =>
                    a.A.findActivity(e, (e) => {
                        let { type: t } = e;
                        return t === l.$.CUSTOM_STATUS;
                    }),
                );
            return t ? n : o;
        },
    },
);
