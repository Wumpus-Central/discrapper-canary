"use strict";
n.d(t, { Gk: () => g, Sn: () => m, jY: () => h });
var r = n(627968),
    i = n(64700),
    a = n(158390),
    s = n(621466),
    o = n(954571),
    l = n(728458),
    u = n(652215);
let c = 3,
    d = i.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function _(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, s.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, s.vq)(e, HTMLDivElement) || !0;
}
function f(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? "load"
        : (0, s.vq)(e, HTMLVideoElement)
          ? "canplaythrough"
          : ((0, s.vq)(e, HTMLDivElement), "load");
}
function p(e) {
    return (0, s.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, s.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, s.vq)(e, HTMLDivElement), e.tagName);
}
function h(e) {
    let {
            children: t,
            isPreview: n = !1,
            source: h,
            questId: m,
            listenForSourceError: g = !1,
            retrySourceLoadOnError: E = !1,
        } = e,
        [A, I] = i.useState(!1),
        [T, y] = i.useState(new Set()),
        [S, v] = i.useState(!1),
        C = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of T) _(t) || e.add(t);
        e.size !== T.size && y(e);
    }, [T]);
    let b = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: a } = e;
                if (n || null == h) return;
                let c = (0, s.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                o.default.track(u.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: h,
                    quest_id: m,
                    asset_id: p(t),
                    video_network_state: c,
                }),
                    l.A.captureException(Error(`${i}: ${null != a ? `${a}, ` : ""}${p(t)}, ${r}`), {
                        tags: { source: h },
                    }),
                    I(!0);
            },
            [n, h, m],
        ),
        N = i.useCallback((e) => {
            y((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        R = i.useCallback(
            (e, t) => {
                v(!0);
                let n = f(e),
                    r = new AbortController(),
                    i = new a.A();
                function o() {
                    i.succeed(), N(e), e.removeEventListener(n, o);
                }
                function l(n) {
                    d(),
                        N(e),
                        b({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function u(t) {
                    E && i.fails < c && (0, s.vq)(e, HTMLVideoElement)
                        ? i.fail(() => {
                              e.load();
                          })
                        : l(t);
                }
                if (
                    (_(e) ||
                        (y((t) => {
                            let n = new Set(t);
                            return n.add(e), n;
                        }),
                        e.addEventListener(n, o)),
                    e.addEventListener("error", l, { signal: r.signal }),
                    g && (0, s.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    n?.addEventListener("error", u, { signal: r.signal });
                }
                function d() {
                    if (
                        (i.cancel(),
                        r.abort(),
                        e.removeEventListener(n, o),
                        e.removeEventListener("error", l),
                        g && (0, s.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            n = t[t.length - 1];
                        n?.removeEventListener("error", u);
                    }
                }
                return d;
            },
            [b, N, g, E],
        ),
        O = i.useMemo(() => T.size > 0 || !S, [S, T]);
    i.useEffect(() => {
        O || (C.current = !0);
    }, [O]);
    let D = i.useMemo(
        () => ({ registerAsset: R, unregisterAsset: N, hasError: A, isLoading: O && !C.current }),
        [R, N, A, O],
    );
    return (0, r.jsx)(d.Provider, { value: D, children: t });
}
function m(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: a } = i.useContext(d),
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                n = s.current;
            return (
                null != n && (e = r(n, t)),
                () => {
                    e?.(), null != n && a(n);
                }
            );
        }, [r, a, t]),
        n(s)
    );
}
function g() {
    let { hasError: e, isLoading: t } = i.useContext(d);
    return { hasError: e, isLoading: t };
}
