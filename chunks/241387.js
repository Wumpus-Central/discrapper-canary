"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(965609),
    a = n(484702),
    s = n(403431);
let o = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
function l(e) {
    let {
            sections: t,
            columns: n,
            getItemKey: l,
            getItemHeight: u,
            getSectionHeight: c,
            chunkSize: d = 250,
            getScrollerState: _,
            maxBufferWidth: f,
            itemGutter: p,
            removeEdgeItemGutters: h,
            sectionGutter: m,
            padding: g,
            paddingVertical: E,
            paddingHorizontal: A,
            dir: I,
        } = e,
        T = (0, a.A)(),
        y = (0, r.useRef)(o),
        [S] = (0, r.useState)(() => new i.Ay()),
        v = _(),
        C = Math.min(f ?? 1 / 0, v.offsetWidth),
        b = null != f ? Math.max(0, v.offsetWidth - f) : 0,
        {
            dirty: N,
            chunkStart: R,
            chunkEnd: O,
            forceUpdateOnChunkChange: D,
        } = (0, s.A)({ chunkSize: d, getScrollerState: _, forceUpdate: T });
    return (
        (y.current = (0, r.useMemo)(
            () =>
                N > 0
                    ? y.current
                    : (S.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: C,
                          itemGutter: p,
                          removeEdgeItemGutters: h,
                          sectionGutter: m,
                          padding: g,
                          paddingVertical: E,
                          paddingHorizontal: A,
                          marginLeft: b / 2,
                          dir: I,
                      }),
                      S.computeVisibleSections(Math.max(0, R * d), O * d),
                      S.getState()),
            [N, S, t, n, l, u, c, R, O, d, p, h, m, g, E, A, C, b, I],
        )),
        { ...y.current, masonryComputer: S, forceUpdateOnChunkChange: D, forceUpdate: T }
    );
}
