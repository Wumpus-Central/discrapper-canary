s.d(t, { T: () => o });
var l = s(353640),
    n = s(499867),
    a = s(121894),
    r = s(932607);
let i = (0, l.v)(
        (0, n.Zr)(
            (e, t) => ({
                channelShowResolvedFlags: {},
                setShowResolvedFlags: (t, s) =>
                    (0, a.r)(() => {
                        e((e) => ({ channelShowResolvedFlags: { ...e.channelShowResolvedFlags, [t]: s } }));
                    }),
                getShowResolvedFlags: (e) => t().channelShowResolvedFlags[e] ?? !0,
            }),
            { name: "report-to-mod-channel-storage", storage: (0, n.KU)(() => r.A) },
        ),
    ),
    o = (e) => {
        let t = i();
        return null == e
            ? { showResolvedFlags: !0, setShowResolvedFlags: () => {} }
            : {
                  showResolvedFlags: t.getShowResolvedFlags(e) ?? !0,
                  setShowResolvedFlags: (s) => t.setShowResolvedFlags(e, s),
              };
    };
