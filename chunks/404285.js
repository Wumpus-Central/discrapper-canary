n.d(t, { w: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(366010),
    a = n(331322),
    r = n(311907),
    o = n(691885),
    d = n(827343),
    u = n(419954),
    c = n(430452),
    g = n(975571),
    m = n(544028),
    _ = n(780964),
    A = n(652215),
    h = n(985018);
let p = n(993830),
    x = n(413142),
    E = { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO };
function T() {
    let e = (0, r.bG)([m.A], () => (0, l.q)(m.A.theme));
    return (0, i.jsx)("img", { src: e ? p : x, width: 48, height: 32, alt: "" });
}
let S = (0, u.E2)(_.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [h.intl.string(h.t.t8Qhib), h.intl.string(h.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.bG)([c.Ay], () => c.Ay.isInputProfileCustom() && c.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = s.useCallback((e) => {
                d.A.setNoiseCancellation("KRISP" === e, E), d.A.setNoiseSuppression("STANDARD" === e, E);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: l,
                isNoiseCancellationSupported: u,
            } = (0, r.cf)([c.Ay], () => ({
                noiseCancellation: c.Ay.getNoiseCancellation(),
                noiseSuppression: c.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: c.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: c.Ay.isNoiseCancellationSupported(),
            })),
            m = s.useMemo(() => {
                let e = [];
                return (
                    u && e.push({ id: "krisp", label: h.intl.string(h.t.rdoNzt), value: "KRISP" }),
                    l && e.push({ id: "standard", label: h.intl.string(h.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: h.intl.string(h.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [u, l]),
            _ = u
                ? h.intl.format(h.t["1q5aTp"], { helpArticle: g.A.getArticleURL(A.MVz.NOISE_SUPPRESSION) })
                : h.intl.string(h.t.OWKjw5);
        return (0, i.jsxs)(a.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, i.jsx)(o.l, {
                    label: h.intl.string(h.t.t8Qhib),
                    description: _,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: m,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                u && (0, i.jsx)(T, {}),
            ],
        });
    },
});
