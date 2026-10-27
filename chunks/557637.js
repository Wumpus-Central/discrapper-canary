r.d(t, { _M: () => f, y5: () => E, zT: () => m });
var n = r(477900),
    l = r(582128),
    s = r(158390),
    o = r(621466),
    i = r(174459),
    u = r(38405),
    a = r(652215);
let c = l.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function d(e) {
    return (0, o.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, o.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, o.vq)(e, HTMLDivElement) || !0;
}
function v(e) {
    return (0, o.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, o.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, o.vq)(e, HTMLDivElement), e.tagName);
}
function E(e) {
    let { children: t, isPreview: r = !1, source: E, adCreativeId: f, adCreativeType: m } = e,
        [L, g] = l.useState(!1),
        [M, q] = l.useState(new Set()),
        [A, T] = l.useState(!1),
        H = l.useRef(!1);
    l.useEffect(() => {
        let e = new Set();
        for (let t of M) d(t) || e.add(t);
        e.size !== M.size && q(e);
    }, [M]);
    let S = l.useCallback(
            (e) => {
                let { assetNode: t, nodeId: n, errorPrefix: l, errorMessage: s } = e;
                if (r || null == E) return;
                let c = (0, o.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                (i.default.track(a.HAw.AD_ASSET_LOADING_FAILURE, {
                    source: E,
                    ad_creative_id: f,
                    ad_creative_type: m,
                    asset_id: v(t),
                    video_network_state: c,
                }),
                    u.A.captureException(Error(`${l}: ${null != s ? `${s}, ` : ""}${v(t)}, ${n}`), {
                        tags: { source: E },
                    }),
                    g(!0));
            },
            [r, E, f, m],
        ),
        _ = l.useCallback((e) => {
            q((t) => {
                let r = new Set(t);
                return (r.delete(e), r);
            });
        }, []),
        p = l.useCallback(
            (e, t) => {
                T(!0);
                let r = (0, o.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, o.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, o.vq)(e, HTMLDivElement), "load"),
                    n = new AbortController(),
                    l = new s.A();
                function i() {
                    (l.succeed(), _(e), e.removeEventListener(r, i));
                }
                function u(r) {
                    (c(),
                        _(e),
                        S({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in r ? r.message : null,
                        }));
                }
                function a(t) {
                    l.fails < 3 && (0, o.vq)(e, HTMLVideoElement)
                        ? l.fail(() => {
                              e.load();
                          })
                        : u(t);
                }
                if (
                    (d(e) ||
                        (q((t) => {
                            let r = new Set(t);
                            return (r.add(e), r);
                        }),
                        e.addEventListener(r, i)),
                    e.addEventListener("error", u, { signal: n.signal }),
                    (0, o.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        r = t[t.length - 1];
                    r?.addEventListener("error", a, { signal: n.signal });
                }
                function c() {
                    if (
                        (l.cancel(),
                        n.abort(),
                        e.removeEventListener(r, i),
                        e.removeEventListener("error", u),
                        (0, o.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            r = t[t.length - 1];
                        r?.removeEventListener("error", a);
                    }
                }
                return c;
            },
            [S, _],
        ),
        h = l.useMemo(() => M.size > 0 || !A, [A, M]);
    l.useEffect(() => {
        h || (H.current = !0);
    }, [h]);
    let w = l.useMemo(
        () => ({ registerAsset: p, unregisterAsset: _, hasError: L, isLoading: h && !H.current }),
        [p, _, L, h],
    );
    return (0, n.jsx)(c.Provider, { value: w, children: t });
}
function f(e) {
    let { id: t, children: r } = e,
        { registerAsset: n, unregisterAsset: s } = l.useContext(c),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            let e,
                r = o.current;
            return (
                null != r && (e = n(r, t)),
                () => {
                    (e?.(), null != r && s(r));
                }
            );
        }, [n, s, t]),
        r(o)
    );
}
function m() {
    let { hasError: e, isLoading: t } = l.useContext(c);
    return { hasError: e, isLoading: t };
}
