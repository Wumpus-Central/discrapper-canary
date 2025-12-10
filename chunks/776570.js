n.d(e, { Z: () => E });
var i = n(54381),
    l = n(473749),
    s = n(509613),
    u = n(970013),
    r = n(825655),
    a = n(313789),
    o = n(665388),
    c = n(589741),
    d = n(97951),
    S = n(388032);
function T() {
    return (0, i.jsx)(r.Z, { sourcePage: "voice" });
}
let E = (0, s.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => S.intl.string(S.t.K3lovD),
    useNotice: function () {
        let t = (0, r.o)("voice");
        return l.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: u.v.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: T,
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.J, c.d, d.F],
});
