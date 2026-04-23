n.d(t, { Gk: () => A, Sn: () => I, jY: () => u });
var i = n(627968),
    r = n(64700),
    a = n(158390),
    s = n(621466),
    _ = n(954571),
    l = n(38405),
    o = n(652215);
let E = r.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function d(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, s.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, s.vq)(e, HTMLDivElement) || !0;
}
function c(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, s.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, s.vq)(e, HTMLDivElement), e.tagName);
}
function u(e) {
    let { children: t, isPreview: n = !1, source: u, questId: I } = e,
        [A, T] = r.useState(!1),
        [S, N] = r.useState(new Set()),
        [O, R] = r.useState(!1),
        f = r.useRef(!1);
    r.useEffect(() => {
        let e = new Set();
        for (let t of S) d(t) || e.add(t);
        e.size !== S.size && N(e);
    }, [S]);
    let C = r.useCallback(
            (e) => {
                let { assetNode: t, nodeId: i, errorPrefix: r, errorMessage: a } = e;
                if (n || null == u) return;
                let E = (0, s.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                _.default.track(o.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: u,
                    quest_id: I,
                    asset_id: c(t),
                    video_network_state: E,
                }),
                    l.A.captureException(Error(`${r}: ${null != a ? `${a}, ` : ""}${c(t)}, ${i}`), {
                        tags: { source: u },
                    }),
                    T(!0);
            },
            [n, u, I],
        ),
        p = r.useCallback((e) => {
            N((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        m = r.useCallback(
            (e, t) => {
                R(!0);
                let n = (0, s.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, s.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, s.vq)(e, HTMLDivElement), "load"),
                    i = new AbortController(),
                    r = new a.A();
                function _() {
                    r.succeed(), p(e), e.removeEventListener(n, _);
                }
                function l(n) {
                    E(),
                        p(e),
                        C({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function o(t) {
                    r.fails < 3 && (0, s.vq)(e, HTMLVideoElement)
                        ? r.fail(() => {
                              e.load();
                          })
                        : l(t);
                }
                if (
                    (d(e) ||
                        (N((t) => {
                            let n = new Set(t);
                            return n.add(e), n;
                        }),
                        e.addEventListener(n, _)),
                    e.addEventListener("error", l, { signal: i.signal }),
                    (0, s.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    n?.addEventListener("error", o, { signal: i.signal });
                }
                function E() {
                    if (
                        (r.cancel(),
                        i.abort(),
                        e.removeEventListener(n, _),
                        e.removeEventListener("error", l),
                        (0, s.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            n = t[t.length - 1];
                        n?.removeEventListener("error", o);
                    }
                }
                return E;
            },
            [C, p],
        ),
        L = r.useMemo(() => S.size > 0 || !O, [O, S]);
    r.useEffect(() => {
        L || (f.current = !0);
    }, [L]);
    let D = r.useMemo(
        () => ({ registerAsset: m, unregisterAsset: p, hasError: A, isLoading: L && !f.current }),
        [m, p, A, L],
    );
    return (0, i.jsx)(E.Provider, { value: D, children: t });
}
function I(e) {
    let { id: t, children: n } = e,
        { registerAsset: i, unregisterAsset: a } = r.useContext(E),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                n = s.current;
            return (
                null != n && (e = i(n, t)),
                () => {
                    e?.(), null != n && a(n);
                }
            );
        }, [i, a, t]),
        n(s)
    );
}
function A() {
    let { hasError: e, isLoading: t } = r.useContext(E);
    return { hasError: e, isLoading: t };
}
