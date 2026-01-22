n.d(t, {
    A: () => f,
    g: () => p,
}),
    n(65821),
    n(896048);
var r = n(64700),
    i = n(715828),
    a = n(484702),
    s = n(403431);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = Object.freeze({
    spacerTop: 0,
    totalHeight: 0,
    items: [],
    isSidebarVisible: !1,
});
function f(e) {
    let {
            sections: t,
            sectionHeight: n,
            rowHeight: o,
            footerHeight: c,
            sidebarHeight: f,
            listHeaderHeight: p,
            chunkSize: _ = 256,
            paddingTop: h = 0,
            paddingBottom: m = 0,
            getScrollerState: g,
            getAnchorId: E,
        } = e,
        b = (0, a.A)(),
        y = (0, r.useRef)(d),
        [O] = (0, r.useState)(() => new i.A()),
        {
            dirty: A,
            chunkStart: v,
            chunkEnd: S,
            forceUpdateOnChunkChange: I,
        } = (0, s.A)({
            chunkSize: _,
            getScrollerState: g,
            forceUpdate: b,
        }),
        { items: T } = y.current,
        C = null,
        { scrollTop: N } = g();
    for (let e of T) {
        if (0 === N) break;
        if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
        let t = "row" === e.type ? e.row : void 0;
        if (e.offsetTop >= N) {
            C = {
                id: e.anchorId,
                section: e.section,
                row: t,
                scrollOffset: e.offsetTop - N,
            };
            break;
        }
    }
    let R = (0, r.useMemo)(() => {
            let e = Math.max(0, v * _);
            return null != f && e < f;
        }, [_, v, f]),
        w = (0, r.useMemo)(
            () =>
                A > 0
                    ? y.current
                    : (O.mergeProps({
                          sectionHeight: n,
                          rowHeight: o,
                          footerHeight: c,
                          listHeaderHeight: p,
                          paddingBottom: m,
                          paddingTop: h,
                          sections: t,
                          getAnchorId: E,
                      }),
                      O.compute(Math.max(0, v * _), S * _)),
            [A, v, S, n, o, c, p, m, h, t, O, _, E],
        );
    return (
        (0, r.useLayoutEffect)(() => void (y.current = w)),
        u(l({}, w), {
            listComputer: O,
            forceUpdateOnChunkChange: I,
            anchor: C,
            isSidebarVisible: R,
        })
    );
}
function p(e) {
    let { scrollerRef: t, anchor: n, getScrollerState: i, listComputer: a, getAnchorId: s, totalHeight: o } = e;
    (0, r.useLayoutEffect)(() => {
        let { current: e } = t,
            { scrollTop: r } = i();
        if (null == n || null == n.row || null == e || null == s || 0 === r) return;
        let o = (t) => {
            if (t < 0 || t >= a.sections[n.section] || s(n.section, n.row) !== n.id) return !1;
            let [i] = a.computeScrollPosition(n.section, t),
                o = i - n.scrollOffset;
            return r !== o && (e.scrollTop = o), !0;
        };
        o(n.row) || o(n.row - 1) || o(n.row + 1);
    }, [o]);
}
