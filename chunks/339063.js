n.d(e, { Z: () => T }), n(388685), n(35282), n(781311);
var i = n(951288),
    l = n(647438),
    u = n(392711),
    r = n(442837),
    s = n(481060),
    a = n(924557),
    o = n(435064),
    c = n(39604),
    E = n(509613),
    S = n(313789),
    d = n(388032);
let T = (0, E.ON)(S.n.CLIPS_PHRASES, {
    useSearchTerms: () => [d.intl.string(d.t.JIze0o), d.intl.string(d.t.dA2fYk)],
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
            label: d.intl.string(d.t.JIze0o),
            description: d.intl.string(d.t.dA2fYk),
            layout: "vertical",
            children: (0, i.jsx)(s.oil, {
                value: e,
                onChange: E,
            }),
        });
    },
});
