"use strict";
n.d(t, { A: () => l, g: () => u });
var r = n(64700),
    i = n(715828),
    s = n(484702),
    a = n(403431);
let o = Object.freeze({ spacerTop: 0, totalHeight: 0, items: [], isSidebarVisible: !1 });
function l(e) {
    let {
            sections: t,
            sectionHeight: n,
            rowHeight: l,
            footerHeight: u,
            sidebarHeight: c,
            listHeaderHeight: d,
            chunkSize: _ = 256,
            paddingTop: f = 0,
            paddingBottom: p = 0,
            getScrollerState: h,
            getAnchorId: E,
        } = e,
        m = (0, s.A)(),
        g = (0, r.useRef)(o),
        [A] = (0, r.useState)(() => new i.A()),
        {
            dirty: I,
            chunkStart: T,
            chunkEnd: S,
            forceUpdateOnChunkChange: y,
        } = (0, a.A)({ chunkSize: _, getScrollerState: h, forceUpdate: m }),
        { items: N } = g.current,
        v = null,
        { scrollTop: C } = h();
    for (let e of N) {
        if (0 === C) break;
        if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
        let t = "row" === e.type ? e.row : void 0;
        if (e.offsetTop >= C) {
            v = { id: e.anchorId, section: e.section, row: t, scrollOffset: e.offsetTop - C };
            break;
        }
    }
    let O = (0, r.useMemo)(() => {
            let e = Math.max(0, T * _);
            return null != c && e < c;
        }, [_, T, c]),
        R = (0, r.useMemo)(
            () =>
                I > 0
                    ? g.current
                    : (A.mergeProps({
                          sectionHeight: n,
                          rowHeight: l,
                          footerHeight: u,
                          listHeaderHeight: d,
                          paddingBottom: p,
                          paddingTop: f,
                          sections: t,
                          getAnchorId: E,
                      }),
                      A.compute(Math.max(0, T * _), S * _)),
            [I, T, S, n, l, u, d, p, f, t, A, _, E],
        );
    return (
        (0, r.useLayoutEffect)(() => void (g.current = R)),
        { ...R, listComputer: A, forceUpdateOnChunkChange: y, anchor: v, isSidebarVisible: O }
    );
}
function u(e) {
    let { scrollerRef: t, anchor: n, getScrollerState: i, listComputer: s, getAnchorId: a, totalHeight: o } = e;
    (0, r.useLayoutEffect)(() => {
        let { current: e } = t,
            { scrollTop: r } = i();
        if (null == n || null == n.row || null == e || null == a || 0 === r) return;
        let o = (t) => {
            if (t < 0 || t >= s.sections[n.section] || a(n.section, n.row) !== n.id) return !1;
            let [i] = s.computeScrollPosition(n.section, t),
                o = i - n.scrollOffset;
            return r !== o && (e.scrollTop = o), !0;
        };
        o(n.row) || o(n.row - 1) || o(n.row + 1);
    }, [o]);
}
