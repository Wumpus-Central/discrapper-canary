n.d(e, { Z: () => d });
var i = n(54381),
    l = n(473749),
    s = n(509613),
    u = n(970013),
    r = n(825655),
    a = n(313789),
    o = n(665388),
    T = n(589741),
    S = n(97951),
    c = n(388032);
function E() {
    return (0, i.jsx)(r.Z, { sourcePage: "voice" });
}
let d = (0, s.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => c.intl.string(c.t.K3lovD),
    useNotice: function () {
        let t = (0, r.o)("voice");
        return l.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: u.v.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: E,
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.J, T.d, S.F],
});
