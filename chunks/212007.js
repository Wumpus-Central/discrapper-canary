var s = t(196765),
    l = t(537812),
    n = t(121894),
    r = t(932607);
let i = (0, s.v)(
    (0, l.Zr)(
        (e, a) => ({
            channelShowResolvedFlags: {},
            setShowResolvedFlags: (a, t) =>
                (0, n.r)(() => {
                    e((e) => ({ channelShowResolvedFlags: { ...e.channelShowResolvedFlags, [a]: t } }));
                }),
            getShowResolvedFlags: (e) => a().channelShowResolvedFlags[e] ?? !0,
        }),
        { name: "report-to-mod-channel-storage", storage: (0, l.KU)(() => r.A) },
    ),
);
t.d(
    a,
    {},
    {
        T: function (e) {
            let a = i();
            return null == e
                ? { showResolvedFlags: !0, setShowResolvedFlags: () => {} }
                : {
                      showResolvedFlags: a.getShowResolvedFlags(e) ?? !0,
                      setShowResolvedFlags: (t) => a.setShowResolvedFlags(e, t),
                  };
        },
    },
);
