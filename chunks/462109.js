r.d(n, {
    t: function () {
        return u;
    }
});
var i = r(192379),
    a = r(611144),
    o = r(2052),
    s = r(691251),
    l = r(98528);
let u = (e) => {
    let { columnCounts: n, stickersGrid: r, stickersListRef: u, store: c, gridNavigatorId: d, setInspectedStickerPosition: f, onGridItemSelect: p } = e,
        h = (0, o.O)(),
        _ = i.useCallback(
            (e) => {
                p(e, h);
            },
            [p, h]
        ),
        m = i.useCallback(
            (e, n) => {
                f(e, n, s.u.GRID_NAVIGATOR_EVENT);
            },
            [f]
        ),
        {
            gridDispatch: g,
            getItemProps: E,
            getRowProps: v,
            gridContainerProps: y,
            handleGridContainerKeyDown: b,
            isUsingKeyboardNavigation: I
        } = (0, l.VO)({
            columnCounts: n,
            gridNavigatorId: d,
            itemGrid: r,
            itemList: u,
            onGridNavigatorItemSelect: _,
            onGridNavigatorPositionChange: m
        });
    return (
        i.useEffect(
            () =>
                c.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: n, rowIndex: r, source: i } = e;
                        i !== s.u.GRID_NAVIGATOR_EVENT &&
                            g({
                                type: a.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            });
                    }
                ),
            [g, c]
        ),
        {
            getItemProps: E,
            getRowProps: v,
            gridContainerProps: y,
            handleGridContainerKeyDown: b,
            isUsingKeyboardNavigation: I
        }
    );
};
