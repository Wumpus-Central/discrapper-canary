"use strict";
n.d(t, { Gk: () => h, Sn: () => p, jY: () => f });
var r = n(627968),
    i = n(64700),
    s = n(158390),
    a = n(621466),
    o = n(954571),
    l = n(728458),
    u = n(652215);
let c = i.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
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
    let { children: t, isPreview: n = !1, source: f, questId: p } = e,
        [h, E] = i.useState(!1),
        [m, g] = i.useState(new Set()),
        [A, I] = i.useState(!1),
        T = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of m) d(t) || e.add(t);
        e.size !== m.size && g(e);
    }, [m]);
    let S = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: s } = e;
                if (n || null == f) return;
                let c = (0, a.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                o.default.track(u.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: f,
                    quest_id: p,
                    asset_id: _(t),
                    video_network_state: c,
                }),
                    l.A.captureException(Error(`${i}: ${null != s ? `${s}, ` : ""}${_(t)}, ${r}`), {
                        tags: { source: f },
                    }),
                    E(!0);
            },
            [n, f, p],
        ),
        y = i.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        N = i.useCallback(
            (e, t) => {
                I(!0);
                let n = (0, a.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, a.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, a.vq)(e, HTMLDivElement), "load"),
                    r = new AbortController(),
                    i = new s.A();
                function o() {
                    i.succeed(), y(e), e.removeEventListener(n, o);
                }
                function l(n) {
                    c(),
                        y(e),
                        S({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function u(t) {
                    i.fails < 3 && (0, a.vq)(e, HTMLVideoElement)
                        ? i.fail(() => {
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
                    e.addEventListener("error", l, { signal: r.signal }),
                    (0, a.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    n?.addEventListener("error", u, { signal: r.signal });
                }
                function c() {
                    if (
                        (i.cancel(),
                        r.abort(),
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
            [S, y],
        ),
        v = i.useMemo(() => m.size > 0 || !A, [A, m]);
    i.useEffect(() => {
        v || (T.current = !0);
    }, [v]);
    let C = i.useMemo(
        () => ({ registerAsset: N, unregisterAsset: y, hasError: h, isLoading: v && !T.current }),
        [N, y, h, v],
    );
    return (0, r.jsx)(c.Provider, { value: C, children: t });
}
function p(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: s } = i.useContext(c),
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                n = a.current;
            return (
                null != n && (e = r(n, t)),
                () => {
                    e?.(), null != n && s(n);
                }
            );
        }, [r, s, t]),
        n(a)
    );
}
function h() {
    let { hasError: e, isLoading: t } = i.useContext(c);
    return { hasError: e, isLoading: t };
}
