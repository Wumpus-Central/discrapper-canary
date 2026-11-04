var s = c(582128),
    i = c(855986),
    a = c(594061),
    h = c(617617);
c.d(
    t,
    {},
    {
        k: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return (
                s.useEffect(() => {
                    e && a.bW.loadIfNecessary();
                }, [e]),
                (0, i.bG)([h.A], () => h.A.frecencyWithoutFetchingLatest)
            );
        },
    },
);
