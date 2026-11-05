var i = n(582128),
    r = n(855986),
    s = n(343446);
n.d(
    t,
    {},
    {
        P: function (e) {
            let [t, n] = (0, r.yK)([s.A], () => [s.A.getAllUserExperimentDescriptors(), s.A.getGuildExperiments()]);
            i.useEffect(() => {
                e.trigger();
            }, [e, t, n]);
        },
    },
);
