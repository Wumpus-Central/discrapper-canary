t.d(r, { A: () => i }), t(323874), t(14289), t(35956), t(508300);
var n = t(64700),
    a = t(562465),
    u = t(746002);
async function l(e, r) {
    let t = await a.Bo.get({ url: e, signal: r, binary: !0, rejectWithError: !0 });
    r?.throwIfAborted();
    let n = URL.createObjectURL(t.body);
    try {
        let e = new Image();
        return (
            (e.src = n),
            await Promise.race([
                e.decode(),
                new Promise((e, t) => {
                    null != r &&
                        r.addEventListener(
                            "abort",
                            () => {
                                t(new DOMException("Aborted", "AbortError"));
                            },
                            { once: !0 },
                        );
                }),
            ]),
            e
        );
    } catch (e) {
        throw (URL.revokeObjectURL(n), e);
    }
}
function s(e) {
    URL.revokeObjectURL(e);
}
function c(e) {
    for (let r of e.values()) if (2 !== r) return !1;
    return !0;
}
function o(e) {
    return "id" in e ? e.id : e.src;
}
function i(e) {
    let { skuId: r, layers: t, playing: a = !0 } = e,
        i = n.useRef(0),
        [f, d] = n.useState(!1),
        [A, T] = n.useState({}),
        m = n.useRef(new AbortController()),
        [E, I] = n.useState(a),
        h = n.useRef(new Map()),
        p = n.useRef(new Map()),
        N = n.useRef(r);
    return (
        n.useEffect(() => {
            a && !E && I(!0);
        }, [a, E]),
        n.useEffect(() => {
            if (r !== N.current) {
                (N.current = r), I(a);
                let e = null != t && t.length > 0;
                for (let r of t ?? []) {
                    let t = o(r);
                    !p.current.has(t) && ((e = !1), h.current.has(t) || h.current.set(t, 0));
                }
                d(e), (i.current = 0);
            }
        }, [r, t, a]),
        n.useEffect(() => {
            if (null == r || null == t || 0 === t.length || !1 === E || 0 !== i.current) return;
            i.current = 1;
            let e = m.current;
            t.forEach(async (t) => {
                let n = o(t);
                if (p.current.has(n)) h.current.set(n, 2), c(h.current) && (d(!0), (i.current = 2));
                else
                    try {
                        let a =
                            "id" in t
                                ? (0, u.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: t.id })
                                : t.src;
                        if (null == a) return;
                        let s = await l(a, e.signal);
                        if (e.signal.aborted) return;
                        h.current.set(n, 2),
                            p.current.set(n, s.src),
                            T((e) => ({ ...e, [n]: s })),
                            c(h.current) && (d(!0), (i.current = 2));
                    } catch (e) {}
            });
        }, [r, t, E]),
        n.useEffect(() => {
            let e = p.current,
                r = m.current;
            return () => {
                Array.from(e.values()).forEach(s), r.abort();
            };
        }, []),
        { loaded: f, layerData: A }
    );
}
