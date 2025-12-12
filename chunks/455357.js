n.d(t, {
    Fl: () => _,
    kC: () => m,
    x8: () => p,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(374470),
    o = n(626135),
    s = n(960048),
    l = n(981631);
let c = i.createContext({
    registerAsset: () => () => {},
    unregisterAsset: () => {},
    hasError: !1,
    isLoading: !0,
});
function u(e) {
    return (0, a.kK)(e, HTMLImageElement)
        ? e.complete
        : (0, a.kK)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, a.kK)(e, HTMLDivElement) || !0;
}
function d(e) {
    return (0, a.kK)(e, HTMLImageElement)
        ? "load"
        : (0, a.kK)(e, HTMLVideoElement)
          ? "canplaythrough"
          : ((0, a.kK)(e, HTMLDivElement), "load");
}
function f(e) {
    var t, n;
    return (0, a.kK)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, a.kK)(e, HTMLVideoElement)
          ? null != (n = null == (t = e.querySelectorAll("source")[0]) ? void 0 : t.getAttribute("src"))
              ? n
              : "video"
          : ((0, a.kK)(e, HTMLDivElement), e.tagName);
}
function p(e) {
    let { children: t, isPreview: n = !1, source: p, questId: _, listenForSourceError: m = !1 } = e,
        [h, g] = i.useState(!1),
        [E, b] = i.useState(new Set()),
        [y, O] = i.useState(!1),
        v = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of E) u(t) || e.add(t);
        e.size !== E.size && b(e);
    }, [E]);
    let S = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: c } = e;
                if (n || null == p) return;
                let u = (0, a.kK)(t, HTMLVideoElement) ? t.networkState : void 0;
                o.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: p,
                    quest_id: _,
                    asset_id: f(t),
                    video_network_state: u,
                }),
                    s.Z.captureException(
                        Error(
                            ""
                                .concat(i, ": ")
                                .concat(null != c ? "".concat(c, ", ") : "")
                                .concat(f(t), ", ")
                                .concat(r),
                        ),
                        { tags: { source: p } },
                    ),
                    g(!0);
            },
            [n, p, _],
        ),
        I = i.useCallback((e) => {
            b((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        T = i.useCallback(
            (e, t) => {
                O(!0);
                let n = d(e),
                    r = new AbortController();
                function i() {
                    I(e), e.removeEventListener(n, i);
                }
                function o(n) {
                    s(),
                        I(e),
                        S({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                if (
                    (u(e) ||
                        (b((t) => {
                            let n = new Set(t);
                            return n.add(e), n;
                        }),
                        e.addEventListener(n, i)),
                    e.addEventListener("error", o, { signal: r.signal }),
                    (0, a.kK)(e, HTMLVideoElement) && m)
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    null == n || n.addEventListener("error", o, { signal: r.signal });
                }
                function s() {
                    if (
                        (r.abort(),
                        e.removeEventListener(n, i),
                        e.removeEventListener("error", o),
                        (0, a.kK)(e, HTMLVideoElement) && m)
                    ) {
                        let t = e.querySelectorAll("source"),
                            n = t[t.length - 1];
                        null == n || n.removeEventListener("error", o);
                    }
                }
                return s;
            },
            [S, I, m],
        ),
        C = i.useMemo(() => E.size > 0 || !y, [y, E]);
    i.useEffect(() => {
        C || (v.current = !0);
    }, [C]);
    let A = i.useMemo(
        () => ({
            registerAsset: T,
            unregisterAsset: I,
            hasError: h,
            isLoading: C && !v.current,
        }),
        [T, I, h, C],
    );
    return (0, r.jsx)(c.Provider, {
        value: A,
        children: t,
    });
}
function _(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: a } = i.useContext(c),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                n = o.current;
            return (
                null != n && (e = r(n, t)),
                () => {
                    null == e || e(), null != n && a(n);
                }
            );
        }, [r, a, t]),
        n(o)
    );
}
function m() {
    let { hasError: e, isLoading: t } = i.useContext(c);
    return {
        hasError: e,
        isLoading: t,
    };
}
