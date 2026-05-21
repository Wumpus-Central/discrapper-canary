l.d(t, { Gk: () => f, Sn: () => _, jY: () => v });
var n = l(627968),
    r = l(64700),
    s = l(158390),
    a = l(621466),
    u = l(174459),
    i = l(38405),
    o = l(652215);
let d = r.createContext({ registerAsset: () => () => {}, unregisterAsset: () => {}, hasError: !1, isLoading: !0 });
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
    let { children: t, isPreview: l = !1, source: v, questId: _ } = e,
        [f, m] = r.useState(!1),
        [g, p] = r.useState(new Set()),
        [T, A] = r.useState(!1),
        S = r.useRef(!1);
    r.useEffect(() => {
        let e = new Set();
        for (let t of g) c(t) || e.add(t);
        e.size !== g.size && p(e);
    }, [g]);
    let C = r.useCallback(
            (e) => {
                let { assetNode: t, nodeId: n, errorPrefix: r, errorMessage: s } = e;
                if (l || null == v) return;
                let d = (0, a.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
                u.default.track(o.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: v,
                    quest_id: _,
                    asset_id: E(t),
                    video_network_state: d,
                }),
                    i.A.captureException(Error(`${r}: ${null != s ? `${s}, ` : ""}${E(t)}, ${n}`), {
                        tags: { source: v },
                    }),
                    m(!0);
            },
            [l, v, _],
        ),
        L = r.useCallback((e) => {
            p((t) => {
                let l = new Set(t);
                return l.delete(e), l;
            });
        }, []),
        H = r.useCallback(
            (e, t) => {
                A(!0);
                let l = (0, a.vq)(e, HTMLImageElement)
                        ? "load"
                        : (0, a.vq)(e, HTMLVideoElement)
                          ? "canplaythrough"
                          : ((0, a.vq)(e, HTMLDivElement), "load"),
                    n = new AbortController(),
                    r = new s.A();
                function u() {
                    r.succeed(), L(e), e.removeEventListener(l, u);
                }
                function i(l) {
                    d(),
                        L(e),
                        C({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in l ? l.message : null,
                        });
                }
                function o(t) {
                    r.fails < 3 && (0, a.vq)(e, HTMLVideoElement)
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
                        e.addEventListener(l, u)),
                    e.addEventListener("error", i, { signal: n.signal }),
                    (0, a.vq)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        l = t[t.length - 1];
                    l?.addEventListener("error", o, { signal: n.signal });
                }
                function d() {
                    if (
                        (r.cancel(),
                        n.abort(),
                        e.removeEventListener(l, u),
                        e.removeEventListener("error", i),
                        (0, a.vq)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            l = t[t.length - 1];
                        l?.removeEventListener("error", o);
                    }
                }
                return d;
            },
            [C, L],
        ),
        h = r.useMemo(() => g.size > 0 || !T, [T, g]);
    r.useEffect(() => {
        h || (S.current = !0);
    }, [h]);
    let k = r.useMemo(
        () => ({ registerAsset: H, unregisterAsset: L, hasError: f, isLoading: h && !S.current }),
        [H, L, f, h],
    );
    return (0, n.jsx)(d.Provider, { value: k, children: t });
}
function _(e) {
    let { id: t, children: l } = e,
        { registerAsset: n, unregisterAsset: s } = r.useContext(d),
        a = r.useRef(null);
    return (
        r.useEffect(() => {
            let e,
                l = a.current;
            return (
                null != l && (e = n(l, t)),
                () => {
                    e?.(), null != l && s(l);
                }
            );
        }, [n, s, t]),
        l(a)
    );
}
function f() {
    let { hasError: e, isLoading: t } = r.useContext(d);
    return { hasError: e, isLoading: t };
}
