i.d(e, {
    p: () => d,
});
var n = i(627968),
    l = i(64700),
    s = i(419954),
    r = i(933297),
    u = i(843401),
    a = i(780964),
    o = i(902713),
    T = i(428961),
    A = i(639500),
    S = i(985018);

function E() {
    return (0, n.jsx)(u.A, {
        sourcePage: "voice",
    });
}
let d = (0, s.zZ)(a.X.VOICE_CATEGORY, {
    useTitle: () => S.intl.string(S.t.K3lovD),
    useNotice: function () {
        let t = (0, u.I)("voice");
        return l.useMemo(
            () =>
                t.canPrompt
                    ? {
                          type: r.W.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: E,
                      }
                    : null,
            [t.canPrompt],
        );
    },
    buildLayout: () => [o.a, T.d, A.L],
});
