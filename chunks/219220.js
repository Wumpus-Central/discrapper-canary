"use strict";
r.d(t, { A: () => d }), r(323874), r(14289), r(35956), r(508300);
var i = r(64700),
    a = r(636537),
    n = r(746002);
async function s(e, t) {
    let r = await a.Bo.get({ url: e, signal: t, binary: !0, rejectWithError: !0 });
    t?.throwIfAborted();
    let i = URL.createObjectURL(r.body);
    try {
        let e = new Image();
        return (
            (e.src = i),
            await Promise.race([
                e.decode(),
                new Promise((e, r) => {
                    null != t &&
                        t.addEventListener(
                            "abort",
                            () => {
                                r(new DOMException("Aborted", "AbortError"));
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
function l(e) {
    URL.revokeObjectURL(e);
}
function o(e) {
    for (let t of e.values()) if (2 !== t) return !1;
    return !0;
}
function c(e) {
    return "id" in e ? e.id : e.src;
}
function d(e) {
    let { skuId: t, layers: r, playing: a = !0 } = e,
        d = i.useRef(0),
        [u, _] = i.useState(!1),
        [p, f] = i.useState({}),
        m = i.useRef(new AbortController()),
        [h, b] = i.useState(a),
        g = i.useRef(new Map()),
        v = i.useRef(new Map()),
        A = i.useRef(t);
    return (
        i.useEffect(() => {
            a && !h && b(!0);
        }, [a, h]),
        i.useEffect(() => {
            if (t !== A.current) {
                (A.current = t), b(a);
                let e = null != r && r.length > 0;
                for (let t of r ?? []) {
                    let r = c(t);
                    !v.current.has(r) && ((e = !1), g.current.has(r) || g.current.set(r, 0));
                }
                _(e), (d.current = 0);
            }
        }, [t, r, a]),
        i.useEffect(() => {
            if (null == t || null == r || 0 === r.length || !1 === h || 0 !== d.current) return;
            d.current = 1;
            let e = m.current;
            r.forEach(async (r) => {
                let i = c(r);
                if (v.current.has(i)) g.current.set(i, 2), o(g.current) && (_(!0), (d.current = 2));
                else
                    try {
                        let a =
                            "id" in r
                                ? (0, n.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: r.id })
                                : r.src;
                        if (null == a) return;
                        let l = await s(a, e.signal);
                        if (e.signal.aborted) return;
                        g.current.set(i, 2),
                            v.current.set(i, l.src),
                            f((e) => ({ ...e, [i]: l })),
                            o(g.current) && (_(!0), (d.current = 2));
                    } catch (e) {}
            });
        }, [t, r, h]),
        i.useEffect(() => {
            let e = v.current,
                t = m.current;
            return () => {
                Array.from(e.values()).forEach(l), t.abort();
            };
        }, []),
        { loaded: u, layerData: p }
    );
}
