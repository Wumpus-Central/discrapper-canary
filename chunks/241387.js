i.d(e, { A: () => h });
var s = i(64700),
    n = i(965609),
    l = i(484702),
    r = i(403431);
let o = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: { boundaries: [], coordinates: {} },
});
function h(t) {
    let {
            sections: e,
            columns: i,
            getItemKey: h,
            getItemHeight: u,
            getSectionHeight: d,
            chunkSize: a = 250,
            getScrollerState: c,
            maxBufferWidth: g,
            itemGutter: m,
            removeEdgeItemGutters: p,
            sectionGutter: f,
            padding: b,
            paddingVertical: H,
            paddingHorizontal: v,
            dir: y,
        } = t,
        C = (0, l.A)(),
        G = (0, s.useRef)(o),
        [w] = (0, s.useState)(() => new n.Ay()),
        S = c(),
        M = Math.min(g ?? 1 / 0, S.offsetWidth),
        x = null != g ? Math.max(0, S.offsetWidth - g) : 0,
        {
            dirty: I,
            chunkStart: R,
            chunkEnd: P,
            forceUpdateOnChunkChange: _,
        } = (0, r.A)({ chunkSize: a, getScrollerState: c, forceUpdate: C });
    return (
        (G.current = (0, s.useMemo)(
            () =>
                I > 0
                    ? G.current
                    : (w.mergeProps({
                          sections: e,
                          columns: i,
                          getItemKey: h,
                          getItemHeight: u,
                          getSectionHeight: d,
                          bufferWidth: M,
                          itemGutter: m,
                          removeEdgeItemGutters: p,
                          sectionGutter: f,
                          padding: b,
                          paddingVertical: H,
                          paddingHorizontal: v,
                          marginLeft: x / 2,
                          dir: y,
                      }),
                      w.computeVisibleSections(Math.max(0, R * a), P * a),
                      w.getState()),
            [I, w, e, i, h, u, d, R, P, a, m, p, f, b, H, v, M, x, y],
        )),
        { ...G.current, masonryComputer: w, forceUpdateOnChunkChange: _, forceUpdate: C }
    );
}
