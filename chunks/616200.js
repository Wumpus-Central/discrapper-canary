"use strict";
n.d(t, { A: () => o }), n(323874), n(14289), n(35956), n(508300);
var r = n(64700);
async function i(e, t) {
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
function s(e) {
    URL.revokeObjectURL(e);
}
function a(e) {
    for (let t of e.values()) if (2 !== t) return !1;
    return !0;
}
let o = (e, t) => {
    let n = r.useRef(0),
        [o, l] = r.useState(!1),
        [u, c] = r.useState({}),
        d = r.useRef(new AbortController()),
        [_, f] = r.useState(t),
        p = r.useRef(new Map()),
        h = r.useRef(new Map()),
        m = r.useRef(e?.skuId);
    return (
        r.useEffect(() => {
            t && !_ && f(!0);
        }, [t, _]),
        r.useEffect(() => {
            if (e?.skuId !== m.current) {
                (m.current = e?.skuId), f(t);
                let r =
                    e?.config.effects.every((e) => {
                        let { src: t } = e;
                        return h.current.has(t);
                    }) ?? !1;
                if ((l(r), (n.current = 0), !r && null != e))
                    for (let { src: t } of e.config.effects) p.current.has(t) || p.current.set(t, 0);
            }
        }, [e, t]),
        r.useEffect(() => {
            if (null == e || 0 === e.config.effects.length || !1 === _ || 0 !== n.current) return;
            n.current = 1;
            let t = d.current;
            e.config.effects.forEach(async (e) => {
                if (h.current.has(e.src)) p.current.set(e.src, 2), a(p.current) && (l(!0), (n.current = 2));
                else
                    try {
                        let r = await i(e.src, t.signal);
                        if (t.signal.aborted) return;
                        p.current.set(e.src, 2),
                            h.current.set(e.src, r.src),
                            c((t) => ({ ...t, [e.src]: r })),
                            a(p.current) && (l(!0), (n.current = 2));
                    } catch (e) {}
            });
        }, [e, _]),
        r.useEffect(() => {
            let e = h.current,
                t = d.current;
            return () => {
                Array.from(e.values()).forEach(s), t.abort();
            };
        }, []),
        { loaded: o, layerData: u }
    );
};
