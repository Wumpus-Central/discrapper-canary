n.d(t, { p: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(292666),
    r = n(274372),
    o = n(399925),
    d = n(419954),
    u = n(780964),
    c = n(985018);
let g = (0, d.E2)(u.X.CLIPS_PHRASES, {
    useSearchTerms: () => [c.intl.string(c.t.JIze0o)],
    usePredicate: () => (0, l.bG)([r.A], () => r.A.getSettings().clipSignals).enablePhraseSignals,
    Component: function () {
        let e = (0, l.bG)([r.A], () => r.A.getSettings().autoClipPhrases),
            [t, n] = s.useState(""),
            d = s.useMemo(() => e.map((e) => ({ id: e, label: e })), [e]),
            u = s.useCallback((e) => {
                n(e);
            }, []),
            g = s.useCallback(
                (i) => {
                    if ("Enter" === i.key || "," === i.key) {
                        i.preventDefault();
                        let s = t.trim().toLowerCase();
                        s.length > 0 && !e.includes(s) && (o.pM([...e, s]), n(""));
                    } else if ("Backspace" === i.key && "" === t && e.length > 0) {
                        let t = e.slice(0, -1);
                        o.pM(t);
                    }
                },
                [t, e],
            ),
            m = s.useCallback(
                (t) => {
                    let n = Array.from(t)[0],
                        i = e.filter((e) => e !== n);
                    o.pM(i);
                },
                [e],
            );
        return (0, i.jsx)(a.k, {
            value: t,
            onChange: u,
            onKeyDown: g,
            placeholder: c.intl.string(c.t.zYUZpt),
            leading: d.length > 0 ? { type: "tags", items: d, onRemove: m } : void 0,
        });
    },
});
