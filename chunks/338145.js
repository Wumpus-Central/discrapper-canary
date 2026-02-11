i.d(t, { w: () => N }), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(311907),
    a = i(397927),
    u = i(827343),
    o = i(419954),
    d = i(430452),
    _ = i(975571),
    T = i(544028),
    A = i(780964),
    S = i(652215),
    E = i(985018);
let c = i(993830),
    g = i(413142),
    I = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function C() {
    let e = (0, r.bG)([T.A], () => (0, s.qB1)(T.A.theme));
    return (0, n.jsx)("img", { src: e ? c : g, width: 48, height: 32, alt: "" });
}
let N = (0, o.E2)(A.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [E.intl.string(E.t.t8Qhib), E.intl.string(E.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.bG)([d.Ay], () => d.Ay.isInputProfileCustom() && d.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = l.useCallback((e) => {
                u.A.setNoiseCancellation("KRISP" === e, I), u.A.setNoiseSuppression("STANDARD" === e, I);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: T,
            } = (0, r.cf)([d.Ay], () => ({
                noiseCancellation: d.Ay.getNoiseCancellation(),
                noiseSuppression: d.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: d.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: d.Ay.isNoiseCancellationSupported(),
            })),
            A = l.useMemo(() => {
                let e = [];
                return (
                    T && e.push({ id: "krisp", label: E.intl.string(E.t.rdoNzt), value: "KRISP" }),
                    o && e.push({ id: "standard", label: E.intl.string(E.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: E.intl.string(E.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [T, o]),
            c = T
                ? E.intl.format(E.t["1q5aTp"], { helpArticle: _.A.getArticleURL(S.MVz.NOISE_SUPPRESSION) })
                : E.intl.string(E.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsx)(a.l6P, {
                    label: E.intl.string(E.t.t8Qhib),
                    description: c,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: A,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                T && (0, n.jsx)(C, {}),
            ],
        });
    },
});
