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
    registerAsset: () => {},
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
    let { children: t, isPreview: n = !1, source: a, questId: p } = e,
        [_, m] = i.useState(!1),
        [h, g] = i.useState(new Set()),
        [E, b] = i.useState(!1),
        y = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of h) u(t) || e.add(t);
        e.size !== h.size && g(e);
    }, [h]);
    let O = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: c } = e;
                n ||
                    null == a ||
                    (o.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
                        source: a,
                        quest_id: p,
                        asset_id: f(t),
                    }),
                    s.Z.captureException(
                        Error(
                            ""
                                .concat(i, ": ")
                                .concat(null != c ? "".concat(c, ", ") : "")
                                .concat(f(t), ", ")
                                .concat(r),
                        ),
                        { tags: { source: a } },
                    ),
                    m(!0));
            },
            [n, a, p],
        ),
        v = i.useCallback((e) => {
            g((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        S = i.useCallback(
            (e, t) => {
                if ((b(!0), u(e))) return;
                g((t) => {
                    let n = new Set(t);
                    return n.add(e), n;
                });
                let n = d(e);
                function r() {
                    v(e), e.removeEventListener(n, r);
                }
                function i(n) {
                    v(e),
                        O({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        }),
                        e.removeEventListener("error", i);
                }
                e.addEventListener(n, r), e.addEventListener("error", i);
            },
            [O, v],
        ),
        I = i.useMemo(() => h.size > 0 || !E, [E, h]);
    i.useEffect(() => {
        I || (y.current = !0);
    }, [I]);
    let T = i.useMemo(
        () => ({
            registerAsset: S,
            unregisterAsset: v,
            hasError: _,
            isLoading: I && !y.current,
        }),
        [S, v, _, I],
    );
    return (0, r.jsx)(c.Provider, {
        value: T,
        children: t,
    });
}
function _(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: a } = i.useContext(c),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = o.current;
            return (
                null != e && r(e, t),
                () => {
                    null != e && a(e);
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
