n.d(e, { Z: () => d }), n(388685), n(35282), n(781311);
var i = n(54381),
    l = n(473749),
    u = n(392711),
    r = n(442837),
    s = n(481060),
    a = n(924557),
    o = n(435064),
    c = n(39604),
    E = n(509613),
    S = n(313789),
    T = n(388032);
let d = (0, E.ON)(S.n.CLIPS_PHRASES, {
    useSearchTerms: () => [T.intl.string(T.t.JIze0o), T.intl.string(T.t.dA2fYk)],
    usePredicate: () => {
        let { enableAdvancedSignals: t } = a.NV.useExperiment(
            { location: "clips_phrases_setting" },
            { autoTrackExposure: !1 },
        );
        return t;
    },
    render: () => {
        let t = (0, r.e7)([o.Z], () => o.Z.getSettings().autoClipPhrases),
            [e, n] = l.useState(t.join(", ")),
            a = l.useMemo(
                () =>
                    (0, u.debounce)((t) => {
                        let e = t
                            .split(",")
                            .map((t) => t.trim())
                            .filter((t) => t.length > 0);
                        c.a2(e);
                    }, 200),
                [],
            ),
            E = l.useCallback(
                (t) => {
                    n(t), a(t);
                },
                [a],
            );
        return (0, i.jsx)(s.gNt, {
            label: T.intl.string(T.t.JIze0o),
            description: T.intl.string(T.t.dA2fYk),
            layout: "vertical",
            children: (0, i.jsx)(s.oil, {
                value: e,
                onChange: E,
            }),
        });
    },
});
