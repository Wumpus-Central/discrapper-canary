"use strict";
n.d(t, { A: () => l, g: () => u });
var r = n(64700),
    i = n(715828),
    a = n(484702),
    s = n(403431);
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
            getAnchorId: m,
        } = e,
        g = (0, a.A)(),
        E = (0, r.useRef)(o),
        [A] = (0, r.useState)(() => new i.A()),
        {
            dirty: I,
            chunkStart: T,
            chunkEnd: y,
            forceUpdateOnChunkChange: S,
        } = (0, s.A)({ chunkSize: _, getScrollerState: h, forceUpdate: g }),
        { items: v } = E.current,
        C = null,
        { scrollTop: b } = h();
    for (let e of v) {
        if (0 === b) break;
        if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
        let t = "row" === e.type ? e.row : void 0;
        if (e.offsetTop >= b) {
            C = { id: e.anchorId, section: e.section, row: t, scrollOffset: e.offsetTop - b };
            break;
        }
    }
    let N = (0, r.useMemo)(() => {
            let e = Math.max(0, T * _);
            return null != c && e < c;
        }, [_, T, c]),
        R = (0, r.useMemo)(
            () =>
                I > 0
                    ? E.current
                    : (A.mergeProps({
                          sectionHeight: n,
                          rowHeight: l,
                          footerHeight: u,
                          listHeaderHeight: d,
                          paddingBottom: p,
                          paddingTop: f,
                          sections: t,
                          getAnchorId: m,
                      }),
                      A.compute(Math.max(0, T * _), y * _)),
            [I, T, y, n, l, u, d, p, f, t, A, _, m],
        );
    return (
        (0, r.useLayoutEffect)(() => void (E.current = R)),
        { ...R, listComputer: A, forceUpdateOnChunkChange: S, anchor: C, isSidebarVisible: N }
    );
}
function u(e) {
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
