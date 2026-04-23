"use strict";
n.d(t, { J: () => o }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073);
var r = n(64700),
    i = n(647307),
    s = n(844222),
    a = n(460890);
function o(e) {
    let t,
        {
            rive: n,
            artboard: o,
            artboardProperties: l,
            dataBinding: u,
            dynamicDataBinding: c,
            onDataBindingChange: d,
        } = e,
        _ = c ?? u,
        f = (0, i.useViewModel)(n);
    (0, i.useViewModelInstance)(f);
    let { theme: p, saturation: h } = (0, a.G9)(),
        { highContrastModeEnabled: E } = r.useContext(s.C),
        m = r.useRef({}),
        g =
            ((t = r.useRef({})),
            r.useCallback(async (e, n) => {
                if ("string" != typeof e) return Promise.resolve(e);
                {
                    if (null != t.current[e]) return Promise.resolve(t.current[e]);
                    let r = await fetch(e, { signal: n }).catch((e) => {
                        if (n?.aborted) return Promise.resolve(null);
                        throw e;
                    });
                    if (null == r || n?.aborted) return Promise.resolve(null);
                    let s = await r.arrayBuffer(),
                        a = await (0, i.decodeImage)(new Uint8Array(s));
                    return (t.current[e] = a), a;
                }
            }, [])),
        A = r.useCallback((e, t) => {
            let n = e?.[t];
            return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
        }, []);
    (function (e) {
        let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: s, onDataBindingChange: a } = e,
            o = null != s,
            l = r.useCallback((e) => (o ? s?.[e]?.type : i[n ?? ""][e]), [o, s, i, n]);
        r.useEffect(() => {
            if (null == t || null == a) return;
            let e = [];
            return (
                Object.entries(a).forEach((n) => {
                    let [r, i] = n,
                        s = l(r);
                    if (null == s || null == i) return;
                    let a = t.viewModelInstance?.[s]?.(r);
                    null != a && (a.on(i), e.push([i, a]));
                }),
                () => {
                    e.forEach((e) => {
                        let [t, n] = e;
                        null != n && n.off(t);
                    });
                }
            );
        }, [t, a, l]);
    })({ rive: n, artboard: o, artboardProperties: l, dynamicDataBinding: c, dataBinding: u, onDataBindingChange: d }),
        r.useEffect(() => {
            let e = new AbortController();
            return (
                (async function () {
                    if (null == n || null == n.viewModelInstance || null == _) return;
                    let t = l[o ?? ""];
                    for (let r of Object.entries(_)) {
                        if (e.signal.aborted) return;
                        let i = r[0],
                            s = r[1],
                            a = null != s && "object" == typeof s && "type" in s,
                            o = a ? s.type : t[i],
                            l = a ? s.value : s;
                        switch (o) {
                            case "color":
                                if ("number" == typeof l) {
                                    let e = n.viewModelInstance?.color(i);
                                    null != e && (e.value = l);
                                } else if ("object" == typeof l)
                                    if ("resolve" in l) {
                                        let [e, t, r, s] = l
                                            .resolve({ theme: p, saturation: h, highContrastModeEnabled: E })
                                            .rgba();
                                        n.viewModelInstance?.color(i)?.rgba(e, t, r, 255 * s);
                                    } else n.viewModelInstance?.color(i)?.rgba(l.r, l.g, l.b, (l.a ?? 1) * 255);
                                break;
                            case "number":
                                let u = n.viewModelInstance?.number(i);
                                null != u && (u.value = l);
                                break;
                            case "boolean":
                                let c = n.viewModelInstance?.boolean(i);
                                null != c && (c.value = l);
                                break;
                            case "trigger":
                                let d = null != l && ("boolean" == typeof l ? l : 0 !== l),
                                    _ = A(m.current, i);
                                d && _ !== l && n.viewModelInstance?.trigger(i)?.trigger(), (m.current[i] = l);
                                break;
                            case "string":
                                let f = n.viewModelInstance?.string(i);
                                null != f && (f.value = l);
                                break;
                            case "image":
                                if (null != l) {
                                    let t = await g(l, e.signal);
                                    if (e.signal.aborted) return;
                                    let r = n.viewModelInstance?.image(i);
                                    null != r && (r.value = t);
                                }
                                break;
                            case "artboard":
                                let I = n.viewModelInstance?.artboard(i),
                                    T = n.getBindableArtboard(l);
                                null != I && null != T && (I.value = T);
                                break;
                            default:
                                console.warn(`Unknown property type: ${o}`);
                        }
                    }
                })().catch((e) => {
                    if ("AbortError" !== e.name) throw e;
                }),
                () => {
                    e.abort("New data binding applied - aborting previous image fetches.");
                }
            );
        }, [A, _, n, o, l, p, n?.viewModelInstance, h, E, g]);
}
