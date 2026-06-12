a.d(t, { T: () => d });
var l = a(353640),
    s = a(499867),
    n = a(121894),
    r = a(932607);
let i = (0, l.v)(
        (0, s.Zr)(
            (e, t) => ({
                channelShowResolvedFlags: {},
                setShowResolvedFlags: (t, a) =>
                    (0, n.r)(() => {
                        e((e) => ({ channelShowResolvedFlags: { ...e.channelShowResolvedFlags, [t]: a } }));
                    }),
                getShowResolvedFlags: (e) => t().channelShowResolvedFlags[e] ?? !0,
            }),
            { name: "report-to-mod-channel-storage", storage: (0, s.KU)(() => r.A) },
        ),
    ),
    d = (e) => {
        let t = i();
        return null == e
            ? { showResolvedFlags: !0, setShowResolvedFlags: () => {} }
            : {
                  showResolvedFlags: t.getShowResolvedFlags(e) ?? !0,
                  setShowResolvedFlags: (a) => t.setShowResolvedFlags(e, a),
              };
    };
