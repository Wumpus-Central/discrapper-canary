"use strict";
n.d(t, { A: () => c }), n(323874), n(14289), n(35956), n(508300);
var r = n(64700),
    i = n(746002);
async function s(e, t) {
    let n = await fetch(e, { signal: t }),
        r = await n.blob();
    t?.throwIfAborted();
    let i = URL.createObjectURL(r);
    try {
        let e = new Image();
        return (
            (e.src = i),
            await Promise.race([
                e.decode(),
                new Promise((e, n) => {
                    null != t &&
                        t.addEventListener(
                            "abort",
                            () => {
                                n(new DOMException("Aborted", "AbortError"));
                            },
                            { once: !0 },
                        );
                }),
            ]),
            e
        );
    } catch (e) {
        throw (URL.revokeObjectURL(i), e);
    }
}
function a(e) {
    URL.revokeObjectURL(e);
}
function o(e) {
    for (let t of e.values()) if (2 !== t) return !1;
    return !0;
}
function l(e) {
    return "id" in e ? e.id : e.src;
}
function u(e, t) {
    return "id" in t ? (0, i.getCollectiblesItemAssetUrl)({ skuId: e, assetFormat: "static", assetId: t.id }) : t.src;
}
function c(e) {
    let { skuId: t, layers: n, playing: i = !0 } = e,
        c = r.useRef(0),
        [d, _] = r.useState(!1),
        [f, p] = r.useState({}),
        h = r.useRef(new AbortController()),
        [m, E] = r.useState(i),
        g = r.useRef(new Map()),
        A = r.useRef(new Map()),
        I = r.useRef(t);
    return (
        r.useEffect(() => {
            i && !m && E(!0);
        }, [i, m]),
        r.useEffect(() => {
            if (t !== I.current) {
                (I.current = t), E(i);
                let e = null != n && n.length > 0;
                for (let t of n ?? []) {
                    let n = l(t);
                    !A.current.has(n) && ((e = !1), g.current.has(n) || g.current.set(n, 0));
                }
                _(e), (c.current = 0);
            }
        }, [t, n, i]),
        r.useEffect(() => {
            if (null == t || null == n || 0 === n.length || !1 === m || 0 !== c.current) return;
            c.current = 1;
            let e = h.current;
            n.forEach(async (n) => {
                let r = l(n);
                if (A.current.has(r)) g.current.set(r, 2), o(g.current) && (_(!0), (c.current = 2));
                else
                    try {
                        let i = u(t, n);
                        if (null == i) return;
                        let a = await s(i, e.signal);
                        if (e.signal.aborted) return;
                        g.current.set(r, 2),
                            A.current.set(r, a.src),
                            p((e) => ({ ...e, [r]: a })),
                            o(g.current) && (_(!0), (c.current = 2));
                    } catch (e) {}
            });
        }, [t, n, m]),
        r.useEffect(() => {
            let e = A.current,
                t = h.current;
            return () => {
                Array.from(e.values()).forEach(a), t.abort();
            };
        }, []),
        { loaded: d, layerData: f }
    );
}
