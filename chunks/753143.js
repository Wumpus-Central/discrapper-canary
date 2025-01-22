r.d(n, {
    Z: function () {
        return d;
    },
    r: function () {
        return f;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(192379),
    s = r(134158),
    l = r(924428),
    u = r(151973);
let c = Object.freeze({
    spacerTop: 0,
    totalHeight: 0,
    items: [],
    isSidebarVisible: !1
});
function d(e) {
    let { sections: n, sectionHeight: r, rowHeight: i, footerHeight: a, sidebarHeight: d, listHeaderHeight: f, chunkSize: p = 256, paddingTop: h = 0, paddingBottom: _ = 0, getScrollerState: m, getAnchorId: g } = e,
        E = (0, l.Z)(),
        v = (0, o.useRef)(c),
        [y] = (0, o.useState)(() => new s.Z()),
        {
            dirty: b,
            chunkStart: I,
            chunkEnd: T,
            forceUpdateOnChunkChange: S
        } = (0, u.Z)({
            chunkSize: p,
            getScrollerState: m,
            forceUpdate: E
        }),
        { items: A } = v.current,
        C = null,
        { scrollTop: N } = m();
    for (let e of A) {
        if (0 === N) break;
        if ('footer' === e.type || 'header' === e.type || null == e.anchorId) continue;
        let n = 'row' === e.type ? e.row : void 0;
        if (e.offsetTop >= N) {
            C = {
                id: e.anchorId,
                section: e.section,
                row: n,
                scrollOffset: e.offsetTop - N
            };
            break;
        }
    }
    let R = (0, o.useMemo)(() => {
            let e = Math.max(0, I * p);
            return null != d && e < d;
        }, [p, I, d]),
        O = (0, o.useMemo)(
            () =>
                b > 0
                    ? v.current
                    : (y.mergeProps({
                          sectionHeight: r,
                          rowHeight: i,
                          footerHeight: a,
                          listHeaderHeight: f,
                          paddingBottom: _,
                          paddingTop: h,
                          sections: n,
                          getAnchorId: g
                      }),
                      y.compute(Math.max(0, I * p), T * p)),
            [b, I, T, r, i, a, f, _, h, n, y, p, g]
        );
    return (
        (0, o.useLayoutEffect)(() => void (v.current = O)),
        {
            ...O,
            listComputer: y,
            forceUpdateOnChunkChange: S,
            anchor: C,
            isSidebarVisible: R
        }
    );
}
function f(e) {
    let { scrollerRef: n, anchor: r, getScrollerState: i, listComputer: a, getAnchorId: s, totalHeight: l } = e;
    (0, o.useLayoutEffect)(() => {
        let { current: e } = n,
            { scrollTop: o } = i();
        if (null == r || null == r.row || null == e || null == s || 0 === o) return;
        let l = (n) => {
            if (n < 0 || n >= a.sections[r.section] || s(r.section, r.row) !== r.id) return !1;
            let [i] = a.computeScrollPosition(r.section, n),
                l = i - r.scrollOffset;
            return o !== l && (e.scrollTop = l), !0;
        };
        if (!l(r.row)) !l(r.row - 1) && l(r.row + 1);
    }, [l]);
}
