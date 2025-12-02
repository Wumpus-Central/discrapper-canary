n.d(e, { Z: () => S });
var i = n(54381),
    l = n(473749),
    s = n(509613),
    r = n(28682),
    u = n(825655),
    a = n(313789),
    o = n(665388),
    c = n(589741),
    d = n(97951),
    E = n(388032);
let S = (0, s.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => E.intl.string(E.t.K3lovD),
    useNotice: function () {
        let t = (0, u.o)("voice");
        return l.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: r.y1.STRONGLY_DISCOURAGED_CUSTOM,
                          render: () => (0, i.jsx)(u.Z, { sourcePage: "voice" }),
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.Z, c.Z, d.Z],
});
