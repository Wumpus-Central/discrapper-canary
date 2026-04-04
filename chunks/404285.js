n.d(t, { w: () => f }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(827343),
    d = n(419954),
    c = n(430452),
    u = n(975571),
    m = n(544028),
    g = n(780964),
    _ = n(652215),
    x = n(985018);
let A = n(993830),
    h = n(413142),
    p = { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_VOICE_AND_VIDEO };
function T() {
    let e = (0, a.bG)([m.A], () => (0, l.qB1)(m.A.theme));
    return (0, i.jsx)("img", { src: e ? A : h, width: 48, height: 32, alt: "" });
}
let f = (0, d.E2)(g.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [x.intl.string(x.t.t8Qhib), x.intl.string(x.t.hmfkCi)],
    usePredicate: function () {
        return (0, a.bG)([c.Ay], () => c.Ay.isInputProfileCustom() && c.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = s.useCallback((e) => {
                o.A.setNoiseCancellation("KRISP" === e, p), o.A.setNoiseSuppression("STANDARD" === e, p);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: d,
                isNoiseCancellationSupported: m,
            } = (0, a.cf)([c.Ay], () => ({
                noiseCancellation: c.Ay.getNoiseCancellation(),
                noiseSuppression: c.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: c.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: c.Ay.isNoiseCancellationSupported(),
            })),
            g = s.useMemo(() => {
                let e = [];
                return (
                    m && e.push({ id: "krisp", label: x.intl.string(x.t.rdoNzt), value: "KRISP" }),
                    d && e.push({ id: "standard", label: x.intl.string(x.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: x.intl.string(x.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [m, d]),
            A = m
                ? x.intl.format(x.t["1q5aTp"], { helpArticle: u.A.getArticleURL(_.MVz.NOISE_SUPPRESSION) })
                : x.intl.string(x.t.OWKjw5);
        return (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, i.jsx)(r.l6P, {
                    label: x.intl.string(x.t.t8Qhib),
                    description: A,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: g,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                m && (0, i.jsx)(T, {}),
            ],
        });
    },
});
