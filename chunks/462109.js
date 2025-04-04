n.d(t, { t: () => l });
var r = n(192379),
    i = n(611144),
    o = n(2052),
    a = n(691251),
    s = n(98528);
let l = (e) => {
    let { columnCounts: t, stickersGrid: n, stickersListRef: l, store: c, gridNavigatorId: u, setInspectedStickerPosition: d, onGridItemSelect: f } = e,
        _ = (0, o.O)(),
        p = r.useCallback(
            (e) => {
                f(e, _);
            },
            [f, _]
        ),
        h = r.useCallback(
            (e, t) => {
                d(e, t, a.u.GRID_NAVIGATOR_EVENT);
            },
            [d]
        ),
        {
            gridDispatch: m,
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: b,
            handleGridContainerKeyDown: y,
            isUsingKeyboardNavigation: v
        } = (0, s.VO)({
            columnCounts: t,
            gridNavigatorId: u,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: p,
            onGridNavigatorPositionChange: h
        });
    return (
        r.useEffect(
            () =>
                c.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== a.u.GRID_NAVIGATOR_EVENT &&
                            m({
                                type: i.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    }
                ),
            [m, c]
        ),
        {
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: b,
            handleGridContainerKeyDown: y,
            isUsingKeyboardNavigation: v
        }
    );
};
