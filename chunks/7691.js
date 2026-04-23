n.d(t, { A: () => C }), n(775443);
var i = n(627968),
    l = n(64700),
    a = n(430690),
    s = n(793574),
    r = n(58149),
    o = n(688810),
    c = n(989837),
    d = n(485878),
    u = n(602814),
    m = n(779309),
    p = n(198016),
    _ = n(60809),
    A = n(652215),
    h = n(900376);
let f = { width: 500, height: _.$V },
    x = { height: _.$V },
    C = l.memo(
        l.forwardRef(function (e, t) {
            let { context: n, entrypoint: a, initHistory: d } = e,
                { analyticsLocations: u } = (0, o.Ay)(s.A.APP_LAUNCHER);
            return (
                l.useEffect(() => {
                    (0, r.zV)(A.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, { source: a, location: "app_launcher" });
                }, [a]),
                l.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, r.zV)(A.HAw.APP_LAUNCHER_CLOSED, {
                            reason: c.A.closeReason(),
                            time_spent: Date.now() - e,
                            source: a,
                        });
                    };
                }, [a]),
                (0, i.jsx)("div", {
                    className: h.jP,
                    ref: t,
                    style: f,
                    children: (0, i.jsx)("div", {
                        className: h.FG,
                        children: (0, i.jsx)(o.f5, {
                            value: u,
                            children: (0, i.jsx)(g, {
                                initHistory: d,
                                children: (0, i.jsx)(N, { context: n, entrypoint: a }),
                            }),
                        }),
                    }),
                })
            );
        }),
    );
function g(e) {
    let { initHistory: t, children: n } = e,
        [a, s] = l.useState(t ?? [{ type: d.Wy.HOME }]),
        [r, o] = l.useState({}),
        c = a[a.length - 1],
        [u, m] = l.useState(!1),
        p = l.useCallback((e) => {
            s((t) => [...t, e]);
        }, []),
        _ = l.useCallback(() => {
            let e = null;
            s((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                o((t) => (null == e ? t : { ...t, [e.type]: e }));
        }, []),
        A = l.useCallback((e) => a.findLast((t) => t.type === e) ?? r[e], [a, r]);
    return (0, i.jsx)(d.L8.Provider, {
        value: {
            history: a,
            discard: r,
            currentView: c,
            pushHistory: p,
            goBack: _,
            getMostRecentHistoryItemByType: A,
            isSlideReady: u,
            setSlideReady: m,
        },
        children: n,
    });
}
function N(e) {
    let { context: t, entrypoint: n } = e,
        [s, r] = l.useState(""),
        { setScroller: o, isCloseToBottom: c } = (function (e) {
            let [t, n] = l.useState(null),
                [i, a] = l.useState(!1),
                s = l.useRef(0);
            return (
                l.useEffect(() => {
                    t?.scrollTo(0, 0);
                }, [t, e]),
                l.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, s.current),
                            t.addEventListener("scroll", e),
                            () => {
                                t.removeEventListener("scroll", e, !1);
                            }
                        );
                    function e() {
                        null == t ||
                            ((s.current = t.scrollTop), a(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340));
                    }
                }, [t]),
                { setScroller: n, isCloseToBottom: i }
            );
        })(s),
        { currentView: _, getMostRecentHistoryItemByType: A, setSlideReady: f } = (0, d.uM)();
    l.useEffect(() => {
        f(!1);
    }, [_?.type, f]);
    let C = l.useCallback(() => {
        f(!0);
    }, [f]);
    if (null == _) return null;
    let g = A(d.Wy.LIST),
        N = A(d.Wy.APPLICATION);
    return (0, i.jsxs)(a.t, {
        activeSlide: _.type,
        width: 500,
        onSlideReady: C,
        children: [
            (0, i.jsx)(a.q, {
                id: d.Wy.HOME,
                children: (0, i.jsx)("div", {
                    className: h.xD,
                    style: x,
                    children: (0, i.jsx)(m.A, {
                        isScrollCloseToBottom: c,
                        setScroller: o,
                        context: t,
                        entrypoint: n,
                        searchQuery: s,
                        setSearchQuery: r,
                    }),
                }),
            }),
            (0, i.jsx)(a.q, {
                id: d.Wy.LIST,
                children: (0, i.jsx)("div", {
                    className: h.xD,
                    style: x,
                    children:
                        null != g &&
                        (0, i.jsx)(p.A, {
                            context: t,
                            entrypoint: n,
                            title: g.title,
                            look: g.look,
                            items: g.items,
                            sectionName: g.sectionName,
                            sectionOverallPosition: g.sectionOverallPosition,
                        }),
                }),
            }),
            (0, i.jsx)(a.q, {
                id: d.Wy.APPLICATION,
                children: (0, i.jsx)("div", {
                    className: h.xD,
                    style: x,
                    children:
                        null != N &&
                        (0, i.jsx)(u.A, { context: t, application: N.application, sectionName: N.sectionName }),
                }),
            }),
        ],
    });
}
