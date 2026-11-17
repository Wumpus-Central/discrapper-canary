var i = r(582128),
    s = r(828596);
r.d(
    e,
    {},
    {
        j: function (t) {
            let { skuIds: e } = t;
            i.useEffect(() => {
                0 !== e.length && (0, s.N4)({ skuIds: e });
            }, [e]);
        },
        x: function (t) {
            let { applicationId: e } = t;
            i.useEffect(() => {
                null != e && (0, s.l9)({ applicationId: e });
            }, [e]);
        },
    },
);
