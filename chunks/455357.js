n.d(t, {
    Fl: () => h,
    kC: () => g,
    x8: () => m,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(261470),
    o = n(374470),
    s = n(626135),
    l = n(960048),
    c = n(981631);
let u = 3,
    d = i.createContext({
        registerAsset: () => () => {},
        unregisterAsset: () => {},
        hasError: !1,
        isLoading: !0,
    });
function f(e) {
    return (0, o.kK)(e, HTMLImageElement)
        ? e.complete
        : (0, o.kK)(e, HTMLVideoElement)
          ? e.readyState >= 2
          : !!(0, o.kK)(e, HTMLDivElement) || !0;
}
function p(e) {
    return (0, o.kK)(e, HTMLImageElement)
        ? "load"
        : (0, o.kK)(e, HTMLVideoElement)
          ? "canplaythrough"
          : ((0, o.kK)(e, HTMLDivElement), "load");
}
function _(e) {
    var t, n;
    return (0, o.kK)(e, HTMLImageElement)
        ? e.getAttribute("src")
        : (0, o.kK)(e, HTMLVideoElement)
          ? null != (n = null == (t = e.querySelectorAll("source")[0]) ? void 0 : t.getAttribute("src"))
              ? n
              : "video"
          : ((0, o.kK)(e, HTMLDivElement), e.tagName);
}
function m(e) {
    let {
            children: t,
            isPreview: n = !1,
            source: m,
            questId: h,
            listenForSourceError: g = !1,
            retrySourceLoadOnError: E = !1,
        } = e,
        [b, y] = i.useState(!1),
        [O, v] = i.useState(new Set()),
        [S, I] = i.useState(!1),
        T = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set();
        for (let t of O) f(t) || e.add(t);
        e.size !== O.size && v(e);
    }, [O]);
    let C = i.useCallback(
            (e) => {
                let { assetNode: t, nodeId: r, errorPrefix: i, errorMessage: a } = e;
                if (n || null == m) return;
                let u = (0, o.kK)(t, HTMLVideoElement) ? t.networkState : void 0;
                s.default.track(c.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: m,
                    quest_id: h,
                    asset_id: _(t),
                    video_network_state: u,
                }),
                    l.Z.captureException(
                        Error(
                            ""
                                .concat(i, ": ")
                                .concat(null != a ? "".concat(a, ", ") : "")
                                .concat(_(t), ", ")
                                .concat(r),
                        ),
                        { tags: { source: m } },
                    ),
                    y(!0);
            },
            [n, m, h],
        ),
        A = i.useCallback((e) => {
            v((t) => {
                let n = new Set(t);
                return n.delete(e), n;
            });
        }, []),
        N = i.useCallback(
            (e, t) => {
                I(!0);
                let n = p(e),
                    r = new AbortController(),
                    i = new a.Z();
                function s() {
                    i.succeed(), A(e), e.removeEventListener(n, s);
                }
                function l(n) {
                    d(),
                        A(e),
                        C({
                            assetNode: e,
                            nodeId: t,
                            errorPrefix: "Error loading asset",
                            errorMessage: "message" in n ? n.message : null,
                        });
                }
                function c(t) {
                    if (E && i.fails < u && (0, o.kK)(e, HTMLVideoElement))
                        return void i.fail(() => {
                            e.load();
                        });
                    l(t);
                }
                if (
                    (f(e) ||
                        (v((t) => {
                            let n = new Set(t);
                            return n.add(e), n;
                        }),
                        e.addEventListener(n, s)),
                    e.addEventListener("error", l, { signal: r.signal }),
                    g && (0, o.kK)(e, HTMLVideoElement))
                ) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    null == n || n.addEventListener("error", c, { signal: r.signal });
                }
                function d() {
                    if (
                        (i.cancel(),
                        r.abort(),
                        e.removeEventListener(n, s),
                        e.removeEventListener("error", l),
                        g && (0, o.kK)(e, HTMLVideoElement))
                    ) {
                        let t = e.querySelectorAll("source"),
                            n = t[t.length - 1];
                        null == n || n.removeEventListener("error", c);
                    }
                }
                return d;
            },
            [C, A, g, E],
        ),
        P = i.useMemo(() => O.size > 0 || !S, [S, O]);
    i.useEffect(() => {
        P || (T.current = !0);
    }, [P]);
    let R = i.useMemo(
        () => ({
            registerAsset: N,
            unregisterAsset: A,
            hasError: b,
            isLoading: P && !T.current,
        }),
        [N, A, b, P],
    );
    return (0, r.jsx)(d.Provider, {
        value: R,
        children: t,
    });
}
function h(e) {
    let { id: t, children: n } = e,
        { registerAsset: r, unregisterAsset: a } = i.useContext(d),
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
function g() {
    let { hasError: e, isLoading: t } = i.useContext(d);
    return {
        hasError: e,
        isLoading: t,
    };
}
