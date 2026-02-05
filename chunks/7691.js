"use strict";
n.d(t, { A: () => I }), n(775443);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(58149),
    l = n(688810),
    u = n(989837),
    c = n(485878),
    d = n(602814),
    _ = n(779309),
    f = n(198016),
    p = n(60809),
    h = n(652215),
    m = n(732679);
let g = { width: 500, height: p.$V },
    E = { height: p.$V };
function A(e, t) {
    let { context: n, entrypoint: a, initHistory: c } = e,
        { analyticsLocations: d } = (0, l.Ay)(s.A.APP_LAUNCHER);
    return (
        i.useEffect(() => {
            (0, o.zV)(h.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, { source: a, location: "app_launcher" });
        }, [a]),
        i.useEffect(() => {
            let e = Date.now();
            return () => {
                (0, o.zV)(h.HAw.APP_LAUNCHER_CLOSED, {
                    reason: u.A.closeReason(),
                    time_spent: Date.now() - e,
                    source: a,
                });
            };
        }, [a]),
        (0, r.jsx)("div", {
            className: m.jP,
            ref: t,
            style: g,
            children: (0, r.jsx)("div", {
                className: m.FG,
                children: (0, r.jsx)(l.f5, {
                    value: d,
                    children: (0, r.jsx)(T, { initHistory: c, children: (0, r.jsx)(y, { context: n, entrypoint: a }) }),
                }),
            }),
        })
    );
}
let I = i.memo(i.forwardRef(A));
function T(e) {
    let { initHistory: t, children: n } = e,
        [a, s] = i.useState(t ?? [{ type: c.Wy.HOME }]),
        [o, l] = i.useState({}),
        u = a[a.length - 1],
        [d, _] = i.useState(!1),
        f = i.useCallback((e) => {
            s((t) => [...t, e]);
        }, []),
        p = i.useCallback(() => {
            let e = null;
            s((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                l((t) => (null == e ? t : { ...t, [e.type]: e }));
        }, []),
        h = i.useCallback((e) => a.findLast((t) => t.type === e) ?? o[e], [a, o]);
    return (0, r.jsx)(c.L8.Provider, {
        value: {
            history: a,
            discard: o,
            currentView: u,
            pushHistory: f,
            goBack: p,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: _,
        },
        children: n,
    });
}
function y(e) {
    let { context: t, entrypoint: n } = e,
        [s, o] = i.useState(""),
        { setScroller: l, isCloseToBottom: u } = S(s),
        { currentView: p, getMostRecentHistoryItemByType: h, setSlideReady: g } = (0, c.uM)();
    i.useEffect(() => {
        g(!1);
    }, [p?.type, g]);
    let A = i.useCallback(() => {
        g(!0);
    }, [g]);
    if (null == p) return null;
    let I = h(c.Wy.LIST),
        T = h(c.Wy.APPLICATION);
    return (0, r.jsxs)(a.tN_, {
        activeSlide: p.type,
        width: 500,
        onSlideReady: A,
        children: [
            (0, r.jsx)(a.q7S, {
                id: c.Wy.HOME,
                children: (0, r.jsx)("div", {
                    className: m.xD,
                    style: E,
                    children: (0, r.jsx)(_.A, {
                        isScrollCloseToBottom: u,
                        setScroller: l,
                        context: t,
                        entrypoint: n,
                        searchQuery: s,
                        setSearchQuery: o,
                    }),
                }),
            }),
            (0, r.jsx)(a.q7S, {
                id: c.Wy.LIST,
                children: (0, r.jsx)("div", {
                    className: m.xD,
                    style: E,
                    children:
                        null != I &&
                        (0, r.jsx)(f.A, {
                            context: t,
                            entrypoint: n,
                            title: I.title,
                            look: I.look,
                            items: I.items,
                            sectionName: I.sectionName,
                            sectionOverallPosition: I.sectionOverallPosition,
                        }),
                }),
            }),
            (0, r.jsx)(a.q7S, {
                id: c.Wy.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: m.xD,
                    style: E,
                    children:
                        null != T &&
                        (0, r.jsx)(d.A, { context: t, application: T.application, sectionName: T.sectionName }),
                }),
            }),
        ],
    });
}
function S(e) {
    let [t, n] = i.useState(null),
        [r, a] = i.useState(!1),
        s = i.useRef(0);
    return (
        i.useEffect(() => {
            t?.scrollTo(0, 0);
        }, [t, e]),
        i.useEffect(() => {
            if (null != t)
                return (
                    t.scrollTo(0, s.current),
                    t.addEventListener("scroll", e),
                    () => {
                        t.removeEventListener("scroll", e, !1);
                    }
                );
            function e() {
                null == t || ((s.current = t.scrollTop), a(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340));
            }
        }, [t]),
        { setScroller: n, isCloseToBottom: r }
    );
}
