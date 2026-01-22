i.d(e, {
    w: () => O,
}),
    i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(311907),
    u = i(397927),
    a = i(827343),
    o = i(419954),
    T = i(430452),
    A = i(975571),
    S = i(544028),
    E = i(780964),
    d = i(130222),
    _ = i(652215),
    I = i(985018);
let g = i(993830),
    c = i(413142);

function N() {
    let t = (0, r.bG)([S.A], () => (0, s.qB1)(S.A.theme));
    return (0, n.jsx)("img", {
        src: t ? g : c,
        width: 48,
        height: 32,
        alt: "",
    });
}
let O = (0, o.E2)(E.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [I.intl.string(I.t.t8Qhib), I.intl.string(I.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.bG)([T.A], () => T.A.isInputProfileCustom() && T.A.isNoiseSuppressionSupported());
    },
    Component: function () {
        let t = l.useCallback((t) => {
                a.A.setNoiseCancellation(t === d.ls.KRISP, d.Us), a.A.setNoiseSuppression(t === d.ls.STANDARD, d.Us);
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: S,
            } = (0, r.cf)([T.A], () => ({
                noiseCancellation: T.A.getNoiseCancellation(),
                noiseSuppression: T.A.getNoiseSuppression(),
                isNoiseSuppressionSupported: T.A.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: T.A.isNoiseCancellationSupported(),
            })),
            E = i ? d.ls.STANDARD : d.ls.NONE,
            g = e ? d.ls.KRISP : E,
            c = l.useMemo(() => {
                let t = [];
                return (
                    S &&
                        t.push({
                            id: "krisp",
                            label: I.intl.string(I.t.rdoNzt),
                            value: d.ls.KRISP,
                        }),
                    o &&
                        t.push({
                            id: "standard",
                            label: I.intl.string(I.t.qXeYHw),
                            value: d.ls.STANDARD,
                        }),
                    t.push({
                        id: "disabled",
                        label: I.intl.string(I.t.wkYAlz),
                        value: d.ls.NONE,
                    }),
                    t
                );
            }, [S, o]),
            O = S
                ? I.intl.format(I.t["1q5aTp"], {
                      helpArticle: A.A.getArticleURL(_.MVz.NOISE_SUPPRESSION),
                  })
                : I.intl.string(I.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsx)(u.l6P, {
                    label: I.intl.string(I.t.t8Qhib),
                    description: O,
                    layout: "horizontal",
                    value: g,
                    onSelectionChange: t,
                    options: c,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                S && (0, n.jsx)(N, {}),
            ],
        });
    },
});
