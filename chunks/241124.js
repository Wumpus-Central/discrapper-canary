"use strict";
n.d(t, { Gk: () => p, Sn: () => h, jY: () => f });
var i = n(627968),
    r = n(64700),
    s = n(158390),
    a = n(621466),
    o = n(174459),
    l = n(38405),
    u = n(652215);
let c = r.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function d(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, a.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, a.vq)(e, HTMLDivElement) || !0;
}
function _(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, a.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, a.vq)(e, HTMLDivElement), e.tagName);
}
function f(e) {
    let { children: t, isPreview: n = !1, source: f, questId: h } = e,
        [p, E] = r.useState(!1),
        [m, g] = r.useState(new Set()),
        [A, I] = r.useState(!1),
        T = r.useRef(!1);
    r.useEffect(() => {
        let e = new Set();
        for (let t of m) d(t) || e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let S = r.useCallback(
            (e) => {
                let { assetNode: t, nodeId: i, errorPrefix: r, errorMessage: s } = e;
                if (n || null == f) return;
                let c = (0, a.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                o.default.track(u.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: f,
                    quest_id: h,
                    asset_id: _(t),
                    video_network_state: c,
                }),
                    l.A.captureException(Error(`${r}: ${null != s ? `${s}, ` : ""}${_(t)}, ${i}`), {
                        tags: { source: f },
                    }),
                    E(!0);
            },
            [n, f, h],
        ),
        N = r.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        y = r.useCallback(
            (e, t) => {
                I(!0);
                let n = (0, a.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, a.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, a.vq)(e, HTMLDivElement), "load"),
                    i = new AbortController(),
                    r = new s.A();
                function o() {
                    r.succeed(), N(e), e.removeEventListener(n, o);
                }
                function l(n) {
                    c(),
                        N(e),
                        S({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function u(t) {
                    r.fails < 3 && (0, a.vq)(e, HTMLVideoElement)
                        ? r.fail(() => {
                              e.load();
                          })
                        : l(t);
                }
                if (
                    (d(e) ||
                        (g((t) => {
                            let n = new Set(t);
                            return n.add(e), n;
                        }),
                        e.addEventListener(n, o)),
                    e.addEventListener("error", l, { signal: i.signal }),
                    (0, a.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    n?.addEventListener("error", u, { signal: i.signal });
                }
                function c() {
                    if (
                        (r.cancel(),
                        i.abort(),
                        e.removeEventListener(n, o),
                        e.removeEventListener("error", l),
                        (0, a.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            n = t[t.length - 1];
                        n?.removeEventListener("error", u);
                    }
                }
                return c;
            },
            [S, N],
        ),
        C = r.useMemo(() => m.size > 0 || !A, [A, m]);
    r.useEffect(() => {
        C || (T.current = !0);
    }, [C]);
    let v = r.useMemo(
        () => ({ registerAsset: y, unregisterAsset: N, hasError: p, isLoading: C && !T.current }),
        [y, N, p, C],
    );
    return (0, i.jsx)(c.Provider, { value: v, children: t });
}
function h(e) {
    let { id: t, children: n } = e,
        { registerAsset: i, unregisterAsset: s } = r.useContext(c),
        a = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                n = a.current;
            return (
                null != n && (e = i(n, t)),
                () => {
                    e?.(), null != n && s(n);
                }
            );
        }, [i, s, t]),
        n(a)
    );
}
function p() {
    let { hasError: e, isLoading: t } = r.useContext(c);
    return { hasError: e, isLoading: t };
}
