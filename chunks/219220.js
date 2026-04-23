"use strict";
n.d(t, { A: () => c }), n(323874), n(14289), n(35956), n(508300);
var r = n(64700),
    i = n(562465),
    s = n(746002);
async function a(e, t) {
    let n = await i.Bo.get({ url: e, signal: t, binary: !0, rejectWithError: !0 });
    t?.throwIfAborted();
    let r = URL.createObjectURL(n.body);
    try {
        let e = new Image();
        return (
            (e.src = r),
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
        throw (URL.revokeObjectURL(r), e);
    }
}
function o(e) {
    URL.revokeObjectURL(e);
}
function l(e) {
    for (let t of e.values()) if (2 !== t) return !1;
    return !0;
}
function u(e) {
    return "id" in e ? e.id : e.src;
}
function c(e) {
    let { skuId: t, layers: n, playing: i = !0 } = e,
        c = r.useRef(0),
        [d, _] = r.useState(!1),
        [f, p] = r.useState({}),
        h = r.useRef(new AbortController()),
        [E, m] = r.useState(i),
        g = r.useRef(new Map()),
        A = r.useRef(new Map()),
        I = r.useRef(t);
    return (
        r.useEffect(() => {
            i && !E && m(!0);
        }, [i, E]),
        r.useEffect(() => {
            if (t !== I.current) {
                (I.current = t), m(i);
                let e = null != n && n.length > 0;
                for (let t of n ?? []) {
                    let n = u(t);
                    !A.current.has(n) && ((e = !1), g.current.has(n) || g.current.set(n, 0));
                }
                _(e), (c.current = 0);
            }
        }, [t, n, i]),
        r.useEffect(() => {
            if (null == t || null == n || 0 === n.length || !1 === E || 0 !== c.current) return;
            c.current = 1;
            let e = h.current;
            n.forEach(async (n) => {
                let r = u(n);
                if (A.current.has(r)) g.current.set(r, 2), l(g.current) && (_(!0), (c.current = 2));
                else
                    try {
                        let i =
                            "id" in n
                                ? (0, s.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id })
                                : n.src;
                        if (null == i) return;
                        let o = await a(i, e.signal);
                        if (e.signal.aborted) return;
                        g.current.set(r, 2),
                            A.current.set(r, o.src),
                            p((e) => ({ ...e, [r]: o })),
                            l(g.current) && (_(!0), (c.current = 2));
                    } catch (e) {}
            });
        }, [t, n, E]),
        r.useEffect(() => {
            let e = A.current,
                t = h.current;
            return () => {
                Array.from(e.values()).forEach(o), t.abort();
            };
        }, []),
        { loaded: d, layerData: f }
    );
}
