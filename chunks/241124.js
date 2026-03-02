"use strict";
n.d(t, { Gk: () => E, Sn: () => m, jY: () => h });
var r = n(627968),
    i = n(64700),
    s = n(158390),
    a = n(621466),
    o = n(954571),
    l = n(728458),
    u = n(652215);
let c = 3,
    d = i.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function _(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, a.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, a.vq)(e, HTMLDivElement) || !0;
}
function f(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? "load"
        : (0, a.vq)(e, HTMLVideoElement)
          ? "canplaythrough"
          : ((0, a.vq)(e, HTMLDivElement), "load");
}
function p(e) {
    return (0, a.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, a.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, a.vq)(e, HTMLDivElement), e.tagName);
}
function h(e) {
    let { children: t, isPreview: n = !1, source: h, questId: m } = e,
        [E, g] = i.useState(!1),
        [A, I] = i.useState(new Set()),
        [T, S] = i.useState(!1),
        y = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of A) _(t) || e.add(t);
        e.size !== A.size && I(e);
    }, [A]);
    let v = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: s } = e;
                if (n || null == h) return;
                let c = (0, a.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                o.default.track(u.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: h,
                    quest_id: m,
                    asset_id: p(t),
                    video_network_state: c,
                }),
                    l.A.captureException(Error(`${i}: ${null != s ? `${s}, ` : ""}${p(t)}, ${r}`), {
                        tags: { source: h },
                    }),
                    g(!0);
            },
            [n, h, m],
        ),
        N = i.useCallback((e) => {
            I((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        C = i.useCallback(
            (e, t) => {
                S(!0);
                let n = f(e),
                    r = new AbortController(),
                    i = new s.A();
                function o() {
                    i.succeed(), N(e), e.removeEventListener(n, o);
                }
                function l(n) {
                    d(),
                        N(e),
                        v({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function u(t) {
                    i.fails < c && (0, a.vq)(e, HTMLVideoElement)
                        ? i.fail(() => {
                              e.load();
                          })
                        : l(t);
                }
                if (
                    (_(e) ||
                        (I((t) => {
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
                function d() {
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
                return d;
            },
            [v, N],
        ),
        R = i.useMemo(() => A.size > 0 || !T, [T, A]);
    i.useEffect(() => {
        R || (y.current = !0);
    }, [R]);
    let O = i.useMemo(
        () => ({ registerAsset: C, unregisterAsset: N, hasError: E, isLoading: R && !y.current }),
        [C, N, E, R],
    );
    return (0, r.jsx)(d.Provider, { value: O, children: t });
}
function m(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: s } = i.useContext(d),
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
function E() {
    let { hasError: e, isLoading: t } = i.useContext(d);
    return { hasError: e, isLoading: t };
}
