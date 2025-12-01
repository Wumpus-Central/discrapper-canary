n.d(e, { Z: () => S });
var i = n(54381),
    r = n(473749),
    l = n(509613),
    u = n(28682),
    s = n(825655),
    a = n(313789),
    o = n(665388),
    c = n(589741),
    d = n(97951),
    E = n(388032);
let S = (0, l.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => E.intl.string(E.t.K3lovD),
    useNotice: function () {
        let t = (0, s.o)("voice");
        return r.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: u.y1.STRONGLY_DISCOURAGED_CUSTOM,
                          render: () => (0, i.jsx)(s.Z, { sourcePage: "voice" }),
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.Z, c.Z, d.Z],
});
