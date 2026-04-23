"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(965609),
    s = n(484702),
    a = n(403431);
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
            sectionGutter: E,
            padding: m,
            paddingVertical: g,
            paddingHorizontal: A,
            dir: I,
        } = e,
        T = (0, s.A)(),
        S = (0, r.useRef)(o),
        [y] = (0, r.useState)(() => new i.Ay()),
        N = _(),
        v = Math.min(f ?? 1 / 0, N.offsetWidth),
        C = null != f ? Math.max(0, N.offsetWidth - f) : 0,
        {
            dirty: O,
            chunkStart: R,
            chunkEnd: b,
            forceUpdateOnChunkChange: D,
        } = (0, a.A)({ chunkSize: d, getScrollerState: _, forceUpdate: T });
    return (
        (S.current = (0, r.useMemo)(
            () =>
                O > 0
                    ? S.current
                    : (y.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: v,
                          itemGutter: p,
                          removeEdgeItemGutters: h,
                          sectionGutter: E,
                          padding: m,
                          paddingVertical: g,
                          paddingHorizontal: A,
                          marginLeft: C / 2,
                          dir: I,
                      }),
                      y.computeVisibleSections(Math.max(0, R * d), b * d),
                      y.getState()),
            [O, y, t, n, l, u, c, R, b, d, p, h, E, m, g, A, v, C, I],
        )),
        { ...S.current, masonryComputer: y, forceUpdateOnChunkChange: D, forceUpdate: T }
    );
}
