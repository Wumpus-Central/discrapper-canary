"use strict";
n.d(t, { A: () => c }), n(323874), n(14289), n(35956), n(508300);
var i = n(64700),
    r = n(636537),
    s = n(746002);
async function a(e, t) {
    let n = await r.Bo.get({ url: e, signal: t, binary: !0, rejectWithError: !0 });
    t?.throwIfAborted();
    let i = URL.createObjectURL(n.body);
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
    let { skuId: t, layers: n, playing: r = !0 } = e,
        c = i.useRef(0),
        [d, _] = i.useState(!1),
        [f, h] = i.useState({}),
        p = i.useRef(new AbortController()),
        [E, m] = i.useState(r),
        g = i.useRef(new Map()),
        A = i.useRef(new Map()),
        I = i.useRef(t);
    return (
        i.useEffect(() => {
            r && !E && m(!0);
        }, [r, E]),
        i.useEffect(() => {
            if (t !== I.current) {
                (I.current = t), m(r);
                let e = null != n && n.length > 0;
                for (let t of n ?? []) {
                    let n = u(t);
                    !A.current.has(n) && ((e = !1), g.current.has(n) || g.current.set(n, 0));
                }
                _(e), (c.current = 0);
            }
        }, [t, n, r]),
        i.useEffect(() => {
            if (null == t || null == n || 0 === n.length || !1 === E || 0 !== c.current) return;
            c.current = 1;
            let e = p.current;
            n.forEach(async (n) => {
                let i = u(n);
                if (A.current.has(i)) g.current.set(i, 2), l(g.current) && (_(!0), (c.current = 2));
                else
                    try {
                        let r =
                            "id" in n
                                ? (0, s.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id })
                                : n.src;
                        if (null == r) return;
                        let o = await a(r, e.signal);
                        if (e.signal.aborted) return;
                        g.current.set(i, 2),
                            A.current.set(i, o.src),
                            h((e) => ({ ...e, [i]: o })),
                            l(g.current) && (_(!0), (c.current = 2));
                    } catch (e) {}
            });
        }, [t, n, E]),
        i.useEffect(() => {
            let e = A.current,
                t = p.current;
            return () => {
                Array.from(e.values()).forEach(o), t.abort();
            };
        }, []),
        { loaded: d, layerData: f }
    );
}
