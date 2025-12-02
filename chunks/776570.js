n.d(e, { Z: () => S });
var i = n(54381),
    r = n(473749),
    l = n(509613),
    s = n(28682),
    u = n(825655),
    a = n(313789),
    o = n(665388),
    c = n(589741),
    d = n(97951),
    E = n(388032);
let S = (0, l.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => E.intl.string(E.t.K3lovD),
    useNotice: function () {
        let t = (0, u.o)("voice");
        return r.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: s.y1.STRONGLY_DISCOURAGED_CUSTOM,
                          render: () => (0, i.jsx)(u.Z, { sourcePage: "voice" }),
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.Z, c.Z, d.Z],
});
