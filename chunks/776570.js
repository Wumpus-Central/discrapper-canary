n.d(e, { Z: () => T });
var i = n(54381),
    l = n(473749),
    u = n(509613),
    r = n(28682),
    s = n(825655),
    a = n(313789),
    o = n(665388),
    c = n(589741),
    E = n(97951),
    S = n(388032);
let T = (0, u.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => S.intl.string(S.t.K3lovD),
    useNotice: function () {
        return l.useMemo(
            () => ({
                type: r.y1.STRONGLY_DISCOURAGED_CUSTOM,
                render: () => (0, i.jsx)(s.Z, { sourcePage: "voice" }),
            }),
            [],
        );
    },
    buildLayout: () => [o.Z, c.Z, E.Z],
});
