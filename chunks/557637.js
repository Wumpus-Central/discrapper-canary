r.d(t, { _M: () => E, y5: () => f, zT: () => m });
var n = r(477900),
    l = r(582128),
    u = r(158390),
    s = r(621466),
    i = r(174459),
    o = r(38405),
    a = r(652215);
let c = l.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function d(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, s.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, s.vq)(e, HTMLDivElement) || !0;
}
function v(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, s.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, s.vq)(e, HTMLDivElement), e.tagName);
}
function f(e) {
    let { children: t, isPreview: r = !1, source: f, adCreativeId: E, adCreativeType: m } = e,
        [L, g] = l.useState(!1),
        [A, M] = l.useState(new Set()),
        [q, T] = l.useState(!1),
        H = l.useRef(!1);
    l.useEffect(() => {
        let e = new Set();
        for (let t of A) d(t) || e.add(t);
        e.size !== A.size && M(e);
    }, [A]);
    let S = l.useCallback(
            (e) => {
                let { assetNode: t, nodeId: n, errorPrefix: l, errorMessage: u } = e;
                if (r || null == f) return;
                let c = (0, s.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                (i.default.track(a.HAw.AD_ASSET_LOADING_FAILURE, {
                    source: f,
                    ad_creative_id: E,
                    ad_creative_type: m,
                    asset_id: v(t),
                    video_network_state: c,
                }),
                    o.A.captureException(Error(`${l}: ${null != u ? `${u}, ` : ""}${v(t)}, ${n}`), {
                        tags: { source: f },
                    }),
                    g(!0));
            },
            [r, f, E, m],
        ),
        _ = l.useCallback((e) => {
            M((t) => {
                let r = new Set(t);
                return (r.delete(e), r);
            });
        }, []),
        h = l.useCallback(
            (e, t) => {
                T(!0);
                let r = (0, s.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, s.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, s.vq)(e, HTMLDivElement), "load"),
                    n = new AbortController(),
                    l = new u.A();
                function i() {
                    (l.succeed(), _(e), e.removeEventListener(r, i));
                }
                function o(r) {
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
                    l.fails < 3 && (0, s.vq)(e, HTMLVideoElement)
                        ? l.fail(() => {
                              e.load();
                          })
                        : o(t);
                }
                if (
                    (d(e) ||
                        (M((t) => {
                            let r = new Set(t);
                            return (r.add(e), r);
                        }),
                        e.addEventListener(r, i)),
                    e.addEventListener("error", o, { signal: n.signal }),
                    (0, s.vq)(e, HTMLVideoElement))
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
                        e.removeEventListener("error", o),
                        (0, s.vq)(e, HTMLVideoElement))
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
        p = l.useMemo(() => A.size > 0 || !q, [q, A]);
    l.useEffect(() => {
        p || (H.current = !0);
    }, [p]);
    let b = l.useMemo(
        () => ({ registerAsset: h, unregisterAsset: _, hasError: L, isLoading: p && !H.current }),
        [h, _, L, p],
    );
    return (0, n.jsx)(c.Provider, { value: b, children: t });
}
function E(e) {
    let { id: t, children: r } = e,
        { registerAsset: n, unregisterAsset: u } = l.useContext(c),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            let e,
                r = s.current;
            return (
                null != r && (e = n(r, t)),
                () => {
                    (e?.(), null != r && u(r));
                }
            );
        }, [n, u, t]),
        r(s)
    );
}
function m() {
    let { hasError: e, isLoading: t } = l.useContext(c);
    return { hasError: e, isLoading: t };
}
