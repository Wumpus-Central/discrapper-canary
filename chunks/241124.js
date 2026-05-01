n.d(t, { Gk: () => _, Sn: () => f, jY: () => v });
var r = n(627968),
    l = n(64700),
    u = n(158390),
    a = n(621466),
    s = n(954571),
    i = n(38405),
    o = n(652215);
let d = l.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function c(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, a.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, a.vq)(e, HTMLDivElement) || !0;
}
function E(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, a.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, a.vq)(e, HTMLDivElement), e.tagName);
}
function v(e) {
    let { children: t, isPreview: n = !1, source: v, questId: f } = e,
        [_, m] = l.useState(!1),
        [T, g] = l.useState(new Set()),
        [H, L] = l.useState(!1),
        p = l.useRef(!1);
    l.useEffect(() => {
        let e = new Set();
        for (let t of T) c(t) || e.add(t);
        e.size !== T.size && g(e);
    }, [T]);
    let S = l.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: l, errorMessage: u } = e;
                if (n || null == v) return;
                let d = (0, a.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                s.default.track(o.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: v,
                    quest_id: f,
                    asset_id: E(t),
                    video_network_state: d,
                }),
                    i.A.captureException(Error(`${l}: ${null != u ? `${u}, ` : ""}${E(t)}, ${r}`), {
                        tags: { source: v },
                    }),
                    m(!0);
            },
            [n, v, f],
        ),
        A = l.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        M = l.useCallback(
            (e, t) => {
                L(!0);
                let n = (0, a.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, a.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, a.vq)(e, HTMLDivElement), "load"),
                    r = new AbortController(),
                    l = new u.A();
                function s() {
                    l.succeed(), A(e), e.removeEventListener(n, s);
                }
                function i(n) {
                    d(),
                        A(e),
                        S({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function o(t) {
                    l.fails < 3 && (0, a.vq)(e, HTMLVideoElement)
                        ? l.fail(() => {
                              e.load();
                          })
                        : i(t);
                }
                if (
                    (c(e) ||
                        (g((t) => {
                            let n = new Set(t);
                            return n.add(e), n;
                        }),
                        e.addEventListener(n, s)),
                    e.addEventListener("error", i, { signal: r.signal }),
                    (0, a.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    n?.addEventListener("error", o, { signal: r.signal });
                }
                function d() {
                    if (
                        (l.cancel(),
                        r.abort(),
                        e.removeEventListener(n, s),
                        e.removeEventListener("error", i),
                        (0, a.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            n = t[t.length - 1];
                        n?.removeEventListener("error", o);
                    }
                }
                return d;
            },
            [S, A],
        ),
        C = l.useMemo(() => T.size > 0 || !H, [H, T]);
    l.useEffect(() => {
        C || (p.current = !0);
    }, [C]);
    let k = l.useMemo(
        () => ({ registerAsset: M, unregisterAsset: A, hasError: _, isLoading: C && !p.current }),
        [M, A, _, C],
    );
    return (0, r.jsx)(d.Provider, { value: k, children: t });
}
function f(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: u } = l.useContext(d),
        a = l.useRef(null);
    return (
        l.useEffect(() => {
            let e,
                n = a.current;
            return (
                null != n && (e = r(n, t)),
                () => {
                    e?.(), null != n && u(n);
                }
            );
        }, [r, u, t]),
        n(a)
    );
}
function _() {
    let { hasError: e, isLoading: t } = l.useContext(d);
    return { hasError: e, isLoading: t };
}
