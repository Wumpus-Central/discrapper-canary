"use strict";
n.d(t, { J: () => l }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073);
var r = n(64700),
    i = n(647307),
    s = n(844222),
    a = n(460890),
    o = n(566556);
function l(e) {
    let {
            rive: t,
            artboard: n,
            artboardProperties: o,
            dataBinding: l,
            dynamicDataBinding: f,
            supportsReducedMotionNatively: p,
            allowAnimationWhileUnfocused: h,
        } = e,
        m = f ?? l,
        E = (0, i.useViewModel)(t),
        [g, A] = r.useState(() =>
            null != e.defaultViewModelInstance ? { name: e.defaultViewModelInstance } : { useDefault: !0 },
        );
    (0, i.useViewModelInstance)(E, { rive: t, ...g });
    let { theme: I, saturation: T, gradientThemeId: S } = (0, a.G9)(),
        {
            highContrastModeEnabled: y,
            reducedMotion: { enabled: v },
        } = r.useContext(s.C),
        N = r.useRef({}),
        C = u(),
        R = r.useCallback((e, t) => {
            let n = e?.[t];
            return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
        }, []),
        O = _({ ...e, theme: I, gradientThemeId: S, allowAnimationWhileUnfocused: h });
    return (
        c(e),
        r.useEffect(() => {
            if (null == t || null == t.viewModelInstance || !p) return;
            let e = t.viewModelInstance.boolean("reducedMotion");
            null != e && (e.value = v);
        }, [t, p, v]),
        r.useEffect(() => {
            let e = new AbortController();
            return (
                (async function () {
                    if (null == t || null == t.viewModelInstance || null == m) return;
                    let r = o[n ?? ""];
                    for (let n of Object.entries(m)) {
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
                                } else {
                                    let e = d({
                                            value: "currentColor" === l ? O : l,
                                            theme: I,
                                            saturation: T,
                                            highContrastModeEnabled: y,
                                        }),
                                        n = t.viewModelInstance?.color(i);
                                    null != n && n.rgba(e.r, e.g, e.b, (e.a ?? 1) * 255);
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
                                let _ = null != l && ("boolean" == typeof l ? l : 0 !== l),
                                    f = R(N.current, i);
                                _ && f !== l && t.viewModelInstance?.trigger(i)?.trigger(), (N.current[i] = l);
                                break;
                            case "string":
                                let p = t.viewModelInstance?.string(i);
                                null != p && (p.value = l);
                                break;
                            case "image":
                                if (null != l) {
                                    let n = await C(l, e.signal);
                                    if (e.signal.aborted) return;
                                    let r = t.viewModelInstance?.image(i);
                                    null != r && (r.value = n);
                                }
                                break;
                            case "artboard":
                                let h = t.viewModelInstance?.artboard(i),
                                    m = t.getBindableArtboard(l);
                                null != h && null != m && (h.value = m);
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
        }, [R, m, t, n, o, I, t?.viewModelInstance, T, y, C, O]),
        { currentColor: O }
    );
}
function u() {
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
function c(e) {
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
function d(e) {
    let { value: t, theme: n, saturation: r, highContrastModeEnabled: i } = e;
    if (null == t) return { r: 0, g: 0, b: 0, a: 0 };
    if ("resolve" in t) {
        let [e, s, a, o] = t.resolve({ theme: n, saturation: r, highContrastModeEnabled: i }).rgba();
        return { r: e, g: s, b: a, a: o };
    }
    return { r: t.r, g: t.g, b: t.b, a: t.a };
}
function _(e) {
    let {
            dataBinding: t,
            dynamicDataBinding: n,
            artboard: i,
            artboardProperties: s,
            elementRef: a,
            eventTargetRef: l,
            isFocused: u,
            theme: c,
            gradientThemeId: d,
            allowAnimationWhileUnfocused: _,
        } = e,
        f = r.useMemo(
            () =>
                null != t && null != i
                    ? Object.keys(t).some((e) => {
                          if ("color" === s[i][e]) return "currentColor" === t[e];
                      })
                    : null != n && Object.keys(n).some((e) => n[e]?.type === "color" && n[e]?.value === "currentColor"),
            [t, n, i, s],
        );
    return (0, o.u)({
        eventTargetRef: l,
        elementRef: a,
        needsCurrentColorTracking: f,
        isFocused: u ?? !1,
        theme: c,
        gradientThemeId: d,
        dataBinding: t ?? n,
        allowAnimationWhileUnfocused: _,
    });
}
