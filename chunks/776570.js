n.d(e, { Z: () => S });
var i = n(54381),
    l = n(473749),
    s = n(509613),
    r = n(970013),
    u = n(825655),
    a = n(313789),
    o = n(665388),
    c = n(589741),
    d = n(97951),
    T = n(388032);
function E() {
    return (0, i.jsx)(u.Z, { sourcePage: "voice" });
}
let S = (0, s.k4)(a.n.VOICE_CATEGORY, {
    useTitle: () => T.intl.string(T.t.K3lovD),
    useNotice: function () {
        let t = (0, u.o)("voice");
        return l.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: r.v.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: E,
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.J, c.d, d.F],
});
