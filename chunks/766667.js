i.d(e, {
    p: () => d,
}),
    i(896048),
    i(733351);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    u = i(274372),
    a = i(399925),
    o = i(419954),
    T = i(780964),
    A = i(985018);
let d = (0, o.E2)(T.X.CLIPS_PHRASES, {
    useSearchTerms: () => [A.intl.string(A.t.JIze0o)],
    usePredicate: () => (0, s.bG)([u.A], () => u.A.getSettings().clipSignals).enablePhraseSignals,
    Component: function () {
        let t = (0, s.bG)([u.A], () => u.A.getSettings().autoClipPhrases),
            [e, i] = l.useState(""),
            o = l.useMemo(
                () =>
                    t.map((t) => ({
                        id: t,
                        label: t,
                    })),
                [t],
            ),
            T = l.useCallback((t) => {
                i(t);
            }, []),
            d = l.useCallback(
                (n) => {
                    if ("Enter" === n.key || "," === n.key) {
                        n.preventDefault();
                        let l = e.trim().toLowerCase();
                        l.length > 0 && !t.includes(l) && (a.pM([...t, l]), i(""));
                    } else if ("Backspace" === n.key && "" === e && t.length > 0) {
                        let e = t.slice(0, -1);
                        a.pM(e);
                    }
                },
                [e, t],
            ),
            S = l.useCallback(
                (e) => {
                    let i = Array.from(e)[0],
                        n = t.filter((t) => t !== i);
                    a.pM(n);
                },
                [t],
            );
        return (0, n.jsx)(r.ksK, {
            value: e,
            onChange: T,
            onKeyDown: d,
            placeholder: A.intl.string(A.t.zYUZpt),
            leading:
                o.length > 0
                    ? {
                          type: "tags",
                          items: o,
                          onRemove: S,
                      }
                    : void 0,
        });
    },
});
