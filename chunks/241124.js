l.d(t, { Gk: () => f, Sn: () => m, jY: () => v });
var n = l(627968),
    r = l(64700),
    s = l(158390),
    u = l(621466),
    a = l(174459),
    i = l(38405),
    o = l(652215);
let d = r.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function c(e) {
    return (0, u.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, u.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, u.vq)(e, HTMLDivElement) || !0;
}
function E(e) {
    return (0, u.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, u.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, u.vq)(e, HTMLDivElement), e.tagName);
}
function v(e) {
    let { children: t, isPreview: l = !1, source: v, questId: m } = e,
        [f, _] = r.useState(!1),
        [g, p] = r.useState(new Set()),
        [T, A] = r.useState(!1),
        L = r.useRef(!1);
    r.useEffect(() => {
        let e = new Set();
        for (let t of g) c(t) || e.add(t);
        e.size !== g.size && p(e);
    }, [g]);
    let H = r.useCallback(
            (e) => {
                let { assetNode: t, nodeId: n, errorPrefix: r, errorMessage: s } = e;
                if (l || null == v) return;
                let d = (0, u.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                a.default.track(o.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: v,
                    quest_id: m,
                    asset_id: E(t),
                    video_network_state: d,
                }),
                    i.A.captureException(Error(`${r}: ${null != s ? `${s}, ` : ""}${E(t)}, ${n}`), {
                        tags: { source: v },
                    }),
                    _(!0);
            },
            [l, v, m],
        ),
        S = r.useCallback((e) => {
            p((t) => {
                let l = new Set(t);
                return l.delete(e), l;
            });
        }, []),
        M = r.useCallback(
            (e, t) => {
                A(!0);
                let l = (0, u.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, u.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, u.vq)(e, HTMLDivElement), "load"),
                    n = new AbortController(),
                    r = new s.A();
                function a() {
                    r.succeed(), S(e), e.removeEventListener(l, a);
                }
                function i(l) {
                    d(),
                        S(e),
                        H({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in l ? l.message : null,
                        });
                }
                function o(t) {
                    r.fails < 3 && (0, u.vq)(e, HTMLVideoElement)
                        ? r.fail(() => {
                              e.load();
                          })
                        : i(t);
                }
                if (
                    (c(e) ||
                        (p((t) => {
                            let l = new Set(t);
                            return l.add(e), l;
                        }),
                        e.addEventListener(l, a)),
                    e.addEventListener("error", i, { signal: n.signal }),
                    (0, u.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        l = t[t.length - 1];
                    l?.addEventListener("error", o, { signal: n.signal });
                }
                function d() {
                    if (
                        (r.cancel(),
                        n.abort(),
                        e.removeEventListener(l, a),
                        e.removeEventListener("error", i),
                        (0, u.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            l = t[t.length - 1];
                        l?.removeEventListener("error", o);
                    }
                }
                return d;
            },
            [H, S],
        ),
        h = r.useMemo(() => g.size > 0 || !T, [T, g]);
    r.useEffect(() => {
        h || (L.current = !0);
    }, [h]);
    let w = r.useMemo(
        () => ({ registerAsset: M, unregisterAsset: S, hasError: f, isLoading: h && !L.current }),
        [M, S, f, h],
    );
    return (0, n.jsx)(d.Provider, { value: w, children: t });
}
function m(e) {
    let { id: t, children: l } = e,
        { registerAsset: n, unregisterAsset: s } = r.useContext(d),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                l = u.current;
            return (
                null != l && (e = n(l, t)),
                () => {
                    e?.(), null != l && s(l);
                }
            );
        }, [n, s, t]),
        l(u)
    );
}
function f() {
    let { hasError: e, isLoading: t } = r.useContext(d);
    return { hasError: e, isLoading: t };
}
