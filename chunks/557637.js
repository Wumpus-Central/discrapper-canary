r.d(t, { _M: () => f, y5: () => v, zT: () => g });
var l = r(627968),
    n = r(64700),
    s = r(158390),
    u = r(621466),
    a = r(174459),
    i = r(38405),
    o = r(652215);
let c = n.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function d(e) {
    return (0, u.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, u.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, u.vq)(e, HTMLDivElement) || !0;
}
function m(e) {
    return (0, u.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, u.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, u.vq)(e, HTMLDivElement), e.tagName);
}
function v(e) {
    let { children: t, isPreview: r = !1, source: v, adCreativeId: f, adCreativeType: g } = e,
        [E, L] = n.useState(!1),
        [h, A] = n.useState(new Set()),
        [p, M] = n.useState(!1),
        q = n.useRef(!1);
    n.useEffect(() => {
        let e = new Set();
        for (let t of h) d(t) || e.add(t);
        e.size !== h.size && A(e);
    }, [h]);
    let w = n.useCallback(
            (e) => {
                let { assetNode: t, nodeId: l, errorPrefix: n, errorMessage: s } = e;
                if (r || null == v) return;
                let c = (0, u.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                a.default.track(o.HAw.AD_ASSET_LOADING_FAILURE, {
                    source: v,
                    ad_creative_id: f,
                    ad_creative_type: g,
                    asset_id: m(t),
                    video_network_state: c,
                }),
                    i.A.captureException(Error(`${n}: ${null != s ? `${s}, ` : ""}${m(t)}, ${l}`), {
                        tags: { source: v },
                    }),
                    L(!0);
            },
            [r, v, f, g],
        ),
        S = n.useCallback((e) => {
            A((t) => {
                let r = new Set(t);
                return r.delete(e), r;
            });
        }, []),
        T = n.useCallback(
            (e, t) => {
                M(!0);
                let r = (0, u.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, u.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, u.vq)(e, HTMLDivElement), "load"),
                    l = new AbortController(),
                    n = new s.A();
                function a() {
                    n.succeed(), S(e), e.removeEventListener(r, a);
                }
                function i(r) {
                    c(),
                        S(e),
                        w({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in r ? r.message : null,
                        });
                }
                function o(t) {
                    n.fails < 3 && (0, u.vq)(e, HTMLVideoElement)
                        ? n.fail(() => {
                              e.load();
                          })
                        : i(t);
                }
                if (
                    (d(e) ||
                        (A((t) => {
                            let r = new Set(t);
                            return r.add(e), r;
                        }),
                        e.addEventListener(r, a)),
                    e.addEventListener("error", i, { signal: l.signal }),
                    (0, u.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        r = t[t.length - 1];
                    r?.addEventListener("error", o, { signal: l.signal });
                }
                function c() {
                    if (
                        (n.cancel(),
                        l.abort(),
                        e.removeEventListener(r, a),
                        e.removeEventListener("error", i),
                        (0, u.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            r = t[t.length - 1];
                        r?.removeEventListener("error", o);
                    }
                }
                return c;
            },
            [w, S],
        ),
        H = n.useMemo(() => h.size > 0 || !p, [p, h]);
    n.useEffect(() => {
        H || (q.current = !0);
    }, [H]);
    let b = n.useMemo(
        () => ({ registerAsset: T, unregisterAsset: S, hasError: E, isLoading: H && !q.current }),
        [T, S, E, H],
    );
    return (0, l.jsx)(c.Provider, { value: b, children: t });
}
function f(e) {
    let { id: t, children: r } = e,
        { registerAsset: l, unregisterAsset: s } = n.useContext(c),
        u = n.useRef(null);
    return (
        n.useEffect(() => {
            let e,
                r = u.current;
            return (
                null != r && (e = l(r, t)),
                () => {
                    e?.(), null != r && s(r);
                }
            );
        }, [l, s, t]),
        r(u)
    );
}
function g() {
    let { hasError: e, isLoading: t } = n.useContext(c);
    return { hasError: e, isLoading: t };
}
