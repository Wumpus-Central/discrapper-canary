i.d(e, { w: () => C }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(311907),
    a = i(397927),
    u = i(827343),
    o = i(419954),
    d = i(430452),
    T = i(975571),
    A = i(544028),
    S = i(780964),
    E = i(652215),
    g = i(985018);
let _ = i(993830),
    c = i(413142),
    I = { page: E.liQ.USER_SETTINGS, section: E.JJy.SETTINGS_VOICE_AND_VIDEO };
function N() {
    let t = (0, r.bG)([A.A], () => (0, s.qB1)(A.A.theme));
    return (0, n.jsx)("img", { src: t ? _ : c, width: 48, height: 32, alt: "" });
}
let C = (0, o.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.bG)([d.A], () => d.A.isInputProfileCustom() && d.A.isNoiseSuppressionSupported());
    },
    Component: function () {
        let t = l.useCallback((t) => {
                u.A.setNoiseCancellation("KRISP" === t, I), u.A.setNoiseSuppression("STANDARD" === t, I);
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: A,
            } = (0, r.cf)([d.A], () => ({
                noiseCancellation: d.A.getNoiseCancellation(),
                noiseSuppression: d.A.getNoiseSuppression(),
                isNoiseSuppressionSupported: d.A.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: d.A.isNoiseCancellationSupported(),
            })),
            S = l.useMemo(() => {
                let t = [];
                return (
                    A && t.push({ id: "krisp", label: g.intl.string(g.t.rdoNzt), value: "KRISP" }),
                    o && t.push({ id: "standard", label: g.intl.string(g.t.qXeYHw), value: "STANDARD" }),
                    t.push({ id: "disabled", label: g.intl.string(g.t.wkYAlz), value: "NONE" }),
                    t
                );
            }, [A, o]),
            _ = A
                ? g.intl.format(g.t["1q5aTp"], { helpArticle: T.A.getArticleURL(E.MVz.NOISE_SUPPRESSION) })
                : g.intl.string(g.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsx)(a.l6P, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: _,
                    layout: "horizontal",
                    value: e ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: t,
                    options: S,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                A && (0, n.jsx)(N, {}),
            ],
        });
    },
});
