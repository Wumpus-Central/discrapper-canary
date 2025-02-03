n.d(t, {
    Z: () => l,
    r: () => u
}),
    n(411104),
    n(47120);
var i = n(192379),
    r = n(134158),
    a = n(924428),
    s = n(151973);
let o = Object.freeze({
    spacerTop: 0,
    totalHeight: 0,
    items: [],
    isSidebarVisible: !1
});
function l(e) {
    let { sections: t, sectionHeight: n, rowHeight: l, footerHeight: u, sidebarHeight: c, listHeaderHeight: d, chunkSize: f = 256, paddingTop: _ = 0, paddingBottom: p = 0, getScrollerState: h, getAnchorId: m } = e,
        g = (0, a.Z)(),
        E = (0, i.useRef)(o),
        [v] = (0, i.useState)(() => new r.Z()),
        {
            dirty: y,
            chunkStart: I,
            chunkEnd: b,
            forceUpdateOnChunkChange: T
        } = (0, s.Z)({
            chunkSize: f,
            getScrollerState: h,
            forceUpdate: g
        }),
        { items: S } = E.current,
        A = null,
        { scrollTop: N } = h();
    for (let e of S) {
        if (0 === N) break;
        if ('footer' === e.type || 'header' === e.type || null == e.anchorId) continue;
        let t = 'row' === e.type ? e.row : void 0;
        if (e.offsetTop >= N) {
            A = {
                id: e.anchorId,
                section: e.section,
                row: t,
                scrollOffset: e.offsetTop - N
            };
            break;
        }
    }
    let C = (0, i.useMemo)(() => {
            let e = Math.max(0, I * f);
            return null != c && e < c;
        }, [f, I, c]),
        R = (0, i.useMemo)(
            () =>
                y > 0
                    ? E.current
                    : (v.mergeProps({
                          sectionHeight: n,
                          rowHeight: l,
                          footerHeight: u,
                          listHeaderHeight: d,
                          paddingBottom: p,
                          paddingTop: _,
                          sections: t,
                          getAnchorId: m
                      }),
                      v.compute(Math.max(0, I * f), b * f)),
            [y, I, b, n, l, u, d, p, _, t, v, f, m]
        );
    return (
        (0, i.useLayoutEffect)(() => void (E.current = R)),
        {
            ...R,
            listComputer: v,
            forceUpdateOnChunkChange: T,
            anchor: A,
            isSidebarVisible: C
        }
    );
}
function u(e) {
    let { scrollerRef: t, anchor: n, getScrollerState: r, listComputer: a, getAnchorId: s, totalHeight: o } = e;
    (0, i.useLayoutEffect)(() => {
        let { current: e } = t,
            { scrollTop: i } = r();
        if (null == n || null == n.row || null == e || null == s || 0 === i) return;
        let o = (t) => {
            if (t < 0 || t >= a.sections[n.section] || s(n.section, n.row) !== n.id) return !1;
            let [r] = a.computeScrollPosition(n.section, t),
                o = r - n.scrollOffset;
            return i !== o && (e.scrollTop = o), !0;
        };
        !o(n.row) && (o(n.row - 1) || o(n.row + 1));
    }, [o]);
}
