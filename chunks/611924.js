var i = n(582128),
    s = n(855986),
    r = n(343446);
n.d(
    t,
    {},
    {
        P: function (e) {
            let [t, n] = (0, s.yK)([r.A], () => [r.A.getAllUserExperimentDescriptors(), r.A.getGuildExperiments()]);
            i.useEffect(() => {
                e.trigger();
            }, [e, t, n]);
        },
    },
);
