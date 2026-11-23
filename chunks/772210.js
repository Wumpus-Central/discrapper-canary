a.d(t, { A: () => i });
var r = a(582128),
    l = a(819648);
function n(e) {
    let { urls: t, revealOutcomes: a, timedOut: r } = e;
    return r ? "timedOut" : [...a.values()].includes("errored") ? "failed" : a.size === t.length ? "ready" : "loading";
}
function i(e, t) {
    return (function (e) {
        let { uniqueUrls: t, key: a } = r.useMemo(() => {
                let t = [...new Set(e)];
                return { uniqueUrls: t, key: JSON.stringify(t) };
            }, [e]),
            [l, i] = r.useState(() => {
                let e = new Map();
                return { key: a, generation: 0, urls: t, outcomes: e, revealOutcomes: e, timedOut: !1 };
            }),
            u = l;
        if (l.key !== a) {
            let e = new Map(
                [...l.outcomes].filter((e) => {
                    let [a] = e;
                    return t.includes(a);
                }),
            );
            i((u = { key: a, generation: l.generation + 1, urls: t, outcomes: e, revealOutcomes: e, timedOut: !1 }));
        }
        let { generation: d } = u,
            o = n(u);
        r.useEffect(() => {
            if ("loading" !== o) return;
            let e = setTimeout(() => {
                i((e) => (e.generation === d && "loading" === n(e) ? { ...e, timedOut: !0 } : e));
            }, 5e3);
            return () => clearTimeout(e);
        }, [d, o]);
        let s = r.useCallback(
                (e, t) => {
                    i((a) => {
                        if (a.generation !== d || !a.urls.includes(e) || a.outcomes.get(e) === t) return a;
                        let r = new Map(a.outcomes).set(e, t);
                        return { ...a, outcomes: r, revealOutcomes: "loading" === n(a) ? r : a.revealOutcomes };
                    });
                },
                [d],
            ),
            c = r.useCallback((e) => s(e, "loaded"), [s]),
            m = r.useCallback((e) => s(e, "errored"), [s]);
        return { urls: u.urls, status: o, onLoad: c, onError: m };
    })(r.useMemo(() => (null != e ? (0, l.vF)(e, t) : []), [e, t]));
}
a(1437);
