"use strict";
n.d(t, { A: () => u }), n(323874), n(14289), n(35956), n(508300);
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
    return "id" in e ? e.id : e.src;
}
function u(e) {
    let { skuId: t, layers: n, playing: r = !0 } = e,
        u = i.useRef(0),
        [c, d] = i.useState(!1),
        [_, h] = i.useState({}),
        f = i.useRef(new AbortController()),
        [p, E] = i.useState(r),
        m = i.useRef(new Map()),
        g = i.useRef(new Map()),
        A = i.useRef(t);
    return (
        i.useEffect(() => {
            r && !p && E(!0);
        }, [r, p]),
        i.useEffect(() => {
            if (t !== A.current) {
                (A.current = t), E(r);
                let e = null != n && n.length > 0;
                for (let t of n ?? []) {
                    let n = l(t);
                    !g.current.has(n) && ((e = !1), m.current.has(n) || m.current.set(n, 0));
                }
                d(e), (u.current = 0);
            }
        }, [t, n, r]),
        i.useEffect(() => {
            if (null == t || null == n || 0 === n.length || !1 === p || 0 !== u.current) return;
            u.current = 1;
            let e = f.current,
                i = n.map(async (n) => {
                    let i = l(n);
                    if (g.current.has(i)) return void m.current.set(i, 2);
                    m.current.set(i, 0);
                    let r =
                        "id" in n
                            ? (0, s.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id })
                            : n.src;
                    if (null == r) return;
                    let o = await a(r, e.signal);
                    e.signal.aborted || (m.current.set(i, 2), g.current.set(i, o.src), h((e) => ({ ...e, [i]: o })));
                });
            (async () => {
                await Promise.allSettled(i),
                    (function (e) {
                        for (let t of e.values()) if (2 !== t) return !1;
                        return !0;
                    })(m.current) && (d(!0), (u.current = 2));
            })();
        }, [t, n, p]),
        i.useEffect(() => {
            let e = g.current,
                t = f.current;
            return () => {
                Array.from(e.values()).forEach(o), t.abort();
            };
        }, []),
        { loaded: c, layerData: _ }
    );
}
