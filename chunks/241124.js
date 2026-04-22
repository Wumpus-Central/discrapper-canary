a.d(t, { Gk: () => v, Sn: () => h, jY: () => m });
var n = a(627968),
    r = a(64700),
    i = a(158390),
    l = a(621466),
    o = a(954571),
    s = a(728458),
    d = a(652215);
let c = r.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
function u(e) {
    return (0, l.vq)(e, HTMLImageElement)
        ? e.complete
        : (0, l.vq)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, l.vq)(e, HTMLDivElement) || !0;
}
function p(e) {
    return (0, l.vq)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, l.vq)(e, HTMLVideoElement)
          ? (e.querySelectorAll("source")[0]?.getAttribute("src") ?? "video")
          : ((0, l.vq)(e, HTMLDivElement), e.tagName);
}
function m(e) {
    let { children: t, isPreview: a = !1, source: m, questId: h } = e,
        [v, _] = r.useState(!1),
        [g, f] = r.useState(new Set()),
        [b, x] = r.useState(!1),
        E = r.useRef(!1);
    r.useEffect(() => {
        let e = new Set();
        for (let t of g) u(t) || e.add(t);
        e.size !== g.size && f(e);
    }, [g]);
    let T = r.useCallback(
            (e) => {
                let { assetNode: t, nodeId: n, errorPrefix: r, errorMessage: i } = e;
                if (a || null == m) return;
                let c = (0, l.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                o.default.track(d.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: m,
                    quest_id: h,
                    asset_id: p(t),
                    video_network_state: c,
                }),
                    s.A.captureException(Error(`${r}: ${null != i ? `${i}, ` : ""}${p(t)}, ${n}`), {
                        tags: { source: m },
                    }),
                    _(!0);
            },
            [a, m, h],
        ),
        y = r.useCallback((e) => {
            f((t) => {
                let a = new Set(t);
                return a.delete(e), a;
            });
        }, []),
        w = r.useCallback(
            (e, t) => {
                x(!0);
                let a = (0, l.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, l.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, l.vq)(e, HTMLDivElement), "load"),
                    n = new AbortController(),
                    r = new i.A();
                function o() {
                    r.succeed(), y(e), e.removeEventListener(a, o);
                }
                function s(a) {
                    c(),
                        y(e),
                        T({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in a ? a.message : null,
                        });
                }
                function d(t) {
                    r.fails < 3 && (0, l.vq)(e, HTMLVideoElement)
                        ? r.fail(() => {
                              e.load();
                          })
                        : s(t);
                }
                if (
                    (u(e) ||
                        (f((t) => {
                            let a = new Set(t);
                            return a.add(e), a;
                        }),
                        e.addEventListener(a, o)),
                    e.addEventListener("error", s, { signal: n.signal }),
                    (0, l.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        a = t[t.length - 1];
                    a?.addEventListener("error", d, { signal: n.signal });
                }
                function c() {
                    if (
                        (r.cancel(),
                        n.abort(),
                        e.removeEventListener(a, o),
                        e.removeEventListener("error", s),
                        (0, l.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            a = t[t.length - 1];
                        a?.removeEventListener("error", d);
                    }
                }
                return c;
            },
            [T, y],
        ),
        S = r.useMemo(() => g.size > 0 || !b, [b, g]);
    r.useEffect(() => {
        S || (E.current = !0);
    }, [S]);
    let A = r.useMemo(
        () => ({ registerAsset: w, unregisterAsset: y, hasError: v, isLoading: S && !E.current }),
        [w, y, v, S],
    );
    return (0, n.jsx)(c.Provider, { value: A, children: t });
}
function h(e) {
    let { id: t, children: a } = e,
        { registerAsset: n, unregisterAsset: i } = r.useContext(c),
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                a = l.current;
            return (
                null != a && (e = n(a, t)),
                () => {
                    e?.(), null != a && i(a);
                }
            );
        }, [n, i, t]),
        a(l)
    );
}
function v() {
    let { hasError: e, isLoading: t } = r.useContext(c);
    return { hasError: e, isLoading: t };
}
