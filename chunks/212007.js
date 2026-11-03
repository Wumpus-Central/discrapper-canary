a.d(t, { T: () => d });
var s = a(196765),
    l = a(537812),
    n = a(121894),
    r = a(932607);
let i = (0, s.v)(
    (0, l.Zr)(
        (e, t) => ({
            channelShowResolvedFlags: {},
            setShowResolvedFlags: (t, a) =>
                (0, n.r)(() => {
                    e((e) => ({ channelShowResolvedFlags: { ...e.channelShowResolvedFlags, [t]: a } }));
                }),
            getShowResolvedFlags: (e) => t().channelShowResolvedFlags[e] ?? !0,
        }),
        { name: "report-to-mod-channel-storage", storage: (0, l.KU)(() => r.A) },
    ),
);
function d(e) {
    let t = i();
    return null == e
        ? { showResolvedFlags: !0, setShowResolvedFlags: () => {} }
        : {
              showResolvedFlags: t.getShowResolvedFlags(e) ?? !0,
              setShowResolvedFlags: (a) => t.setShowResolvedFlags(e, a),
          };
}
