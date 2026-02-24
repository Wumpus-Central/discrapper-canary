"use strict";
n.d(t, { J: () => o }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073);
var r = n(64700),
    i = n(647307),
    s = n(844222),
    a = n(460890);
function o(e) {
    let {
            rive: t,
            artboard: n,
            artboardProperties: o,
            dataBinding: c,
            dynamicDataBinding: d,
            onDataBindingChange: _,
        } = e,
        f = d ?? c,
        p = (0, i.useViewModel)(t);
    (0, i.useViewModelInstance)(p);
    let { theme: h, saturation: m } = (0, a.G9)(),
        { highContrastModeEnabled: E } = r.useContext(s.C),
        g = r.useRef(null),
        A = l(),
        I = r.useCallback((e, t) => {
            let n = e?.[t];
            return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
        }, []);
    u({ rive: t, artboard: n, artboardProperties: o, dynamicDataBinding: d, dataBinding: c, onDataBindingChange: _ }),
        r.useEffect(() => {
            let e = new AbortController();
            return (
                (async function () {
                    if (null == t || null == t.viewModelInstance || null == f) return;
                    let r = o[n ?? ""];
                    for (let n of Object.entries(f)) {
                        if (e.signal.aborted) return;
                        let i = n[0],
                            s = n[1],
                            a = null != s && "object" == typeof s && "type" in s,
                            o = a ? s.type : r[i],
                            l = a ? s.value : s;
                        switch (o) {
                            case "color":
                                if ("number" == typeof l) {
                                    let e = t.viewModelInstance?.color(i);
                                    null != e && (e.value = l);
                                } else if ("object" == typeof l) {
                                    let e = l;
                                    if ("resolve" in e) {
                                        let [n, r, s, a] = e
                                            .resolve({ theme: h, saturation: m, highContrastModeEnabled: E })
                                            .rgba();
                                        t.viewModelInstance?.color(i)?.rgba(n, r, s, 255 * a);
                                    } else t.viewModelInstance?.color(i)?.rgba(e.r, e.g, e.b, e.a ?? 255);
                                }
                                break;
                            case "number":
                                let u = t.viewModelInstance?.number(i);
                                null != u && (u.value = l);
                                break;
                            case "boolean":
                                let c = t.viewModelInstance?.boolean(i);
                                null != c && (c.value = l);
                                break;
                            case "trigger":
                                let d = null != l && ("boolean" == typeof l ? l : 0 !== l),
                                    _ = I(g.current, i);
                                d && _ !== l && t.viewModelInstance?.trigger(i)?.trigger();
                                break;
                            case "string":
                                let f = t.viewModelInstance?.string(i);
                                null != f && (f.value = l);
                                break;
                            case "image":
                                if (null != l) {
                                    let n = await A(l, e.signal);
                                    if (e.signal.aborted) return;
                                    let r = t.viewModelInstance?.image(i);
                                    null != r && (r.value = n);
                                }
                                break;
                            case "artboard":
                                let p = t.viewModelInstance?.artboard(i),
                                    T = t.getBindableArtboard(l);
                                null != p && null != T && (p.value = T);
                                break;
                            default:
                                console.warn(`Unknown property type: ${o}`);
                        }
                    }
                })().catch((e) => {
                    if ("AbortError" !== e.name) throw e;
                }),
                () => {
                    e.abort("New data binding applied - aborting previous image fetches."), (g.current = f);
                }
            );
        }, [I, f, t, n, o, h, t?.viewModelInstance, m, E, A]);
}
function l() {
    let e = r.useRef({});
    return r.useCallback(async (t, n) => {
        if ("string" != typeof t) return Promise.resolve(t);
        {
            if (null != e.current[t]) return Promise.resolve(e.current[t]);
            let r = await fetch(t, { signal: n }).catch((e) => {
                if (n?.aborted) return Promise.resolve(null);
                throw e;
            });
            if (null == r || n?.aborted) return Promise.resolve(null);
            let s = await r.arrayBuffer(),
                a = await (0, i.decodeImage)(new Uint8Array(s));
            return (e.current[t] = a), a;
        }
    }, []);
}
function u(e) {
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
}
