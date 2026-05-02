t.d(r, { A: () => o }), t(323874), t(14289), t(35956), t(508300);
var n = t(64700),
    u = t(636537),
    c = t(746002);
async function s(e, r) {
    let t = await u.Bo.get({ url: e, signal: r, binary: !0, rejectWithError: !0 });
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
function l(e) {
    URL.revokeObjectURL(e);
}
function a(e) {
    for (let r of e.values()) if (2 !== r) return !1;
    return !0;
}
function i(e) {
    return "id" in e ? e.id : e.src;
}
function o(e) {
    let { skuId: r, layers: t, playing: u = !0 } = e,
        o = n.useRef(0),
        [f, d] = n.useState(!1),
        [h, b] = n.useState({}),
        w = n.useRef(new AbortController()),
        [A, E] = n.useState(u),
        R = n.useRef(new Map()),
        m = n.useRef(new Map()),
        p = n.useRef(r);
    return (
        n.useEffect(() => {
            u && !A && E(!0);
        }, [u, A]),
        n.useEffect(() => {
            if (r !== p.current) {
                (p.current = r), E(u);
                let e = null != t && t.length > 0;
                for (let r of t ?? []) {
                    let t = i(r);
                    !m.current.has(t) && ((e = !1), R.current.has(t) || R.current.set(t, 0));
                }
                d(e), (o.current = 0);
            }
        }, [r, t, u]),
        n.useEffect(() => {
            if (null == r || null == t || 0 === t.length || !1 === A || 0 !== o.current) return;
            o.current = 1;
            let e = w.current;
            t.forEach(async (t) => {
                let n = i(t);
                if (m.current.has(n)) R.current.set(n, 2), a(R.current) && (d(!0), (o.current = 2));
                else
                    try {
                        let u =
                            "id" in t
                                ? (0, c.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: t.id })
                                : t.src;
                        if (null == u) return;
                        let l = await s(u, e.signal);
                        if (e.signal.aborted) return;
                        R.current.set(n, 2),
                            m.current.set(n, l.src),
                            b((e) => ({ ...e, [n]: l })),
                            a(R.current) && (d(!0), (o.current = 2));
                    } catch (e) {}
            });
        }, [r, t, A]),
        n.useEffect(() => {
            let e = m.current,
                r = w.current;
            return () => {
                Array.from(e.values()).forEach(l), r.abort();
            };
        }, []),
        { loaded: f, layerData: h }
    );
}
