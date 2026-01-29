i.d(t, {
    w: () => C,
}),
    i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(311907),
    a = i(397927),
    u = i(827343),
    o = i(419954),
    d = i(430452),
    T = i(975571),
    c = i(544028),
    A = i(780964),
    S = i(652215),
    _ = i(985018);
let E = i(993830),
    g = i(413142),
    I = {
        page: S.liQ.USER_SETTINGS,
        section: S.JJy.SETTINGS_VOICE_AND_VIDEO,
    };

function O() {
    let e = (0, r.bG)([c.A], () => (0, s.qB1)(c.A.theme));
    return (0, n.jsx)("img", {
        src: e ? E : g,
        width: 48,
        height: 32,
        alt: "",
    });
}
let C = (0, o.E2)(A.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.t8Qhib), _.intl.string(_.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.bG)([d.A], () => d.A.isInputProfileCustom() && d.A.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = l.useCallback((e) => {
                u.A.setNoiseCancellation("KRISP" === e, I), u.A.setNoiseSuppression("STANDARD" === e, I);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: c,
            } = (0, r.cf)([d.A], () => ({
                noiseCancellation: d.A.getNoiseCancellation(),
                noiseSuppression: d.A.getNoiseSuppression(),
                isNoiseSuppressionSupported: d.A.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: d.A.isNoiseCancellationSupported(),
            })),
            A = l.useMemo(() => {
                let e = [];
                return (
                    c &&
                        e.push({
                            id: "krisp",
                            label: _.intl.string(_.t.rdoNzt),
                            value: "KRISP",
                        }),
                    o &&
                        e.push({
                            id: "standard",
                            label: _.intl.string(_.t.qXeYHw),
                            value: "STANDARD",
                        }),
                    e.push({
                        id: "disabled",
                        label: _.intl.string(_.t.wkYAlz),
                        value: "NONE",
                    }),
                    e
                );
            }, [c, o]),
            E = c
                ? _.intl.format(_.t["1q5aTp"], {
                      helpArticle: T.A.getArticleURL(S.MVz.NOISE_SUPPRESSION),
                  })
                : _.intl.string(_.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsx)(a.l6P, {
                    label: _.intl.string(_.t.t8Qhib),
                    description: E,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: A,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                c && (0, n.jsx)(O, {}),
            ],
        });
    },
});
