n.d(t, { t: () => l });
var r = n(473749),
    i = n(611144),
    a = n(2052),
    o = n(691251),
    s = n(98528);
let l = (e) => {
    let {
            columnCounts: t,
            stickersGrid: n,
            stickersListRef: l,
            store: c,
            gridNavigatorId: u,
            setInspectedStickerPosition: d,
            onGridItemSelect: f,
        } = e,
        p = (0, a.O)(),
        _ = r.useCallback(
            (e) => {
                f(e, p);
            },
            [f, p],
        ),
        m = r.useCallback(
            (e, t) => {
                d(e, t, o.u.GRID_NAVIGATOR_EVENT);
            },
            [d],
        ),
        {
            gridDispatch: h,
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: b,
            handleGridContainerKeyDown: y,
            isUsingKeyboardNavigation: O,
        } = (0, s.VO)({
            columnCounts: t,
            gridNavigatorId: u,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: _,
            onGridNavigatorPositionChange: m,
        });
    return (
        r.useEffect(
            () =>
                c.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== o.u.GRID_NAVIGATOR_EVENT &&
                            h({
                                type: i.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n,
                            });
                    },
                ),
            [h, c],
        ),
        {
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: b,
            handleGridContainerKeyDown: y,
            isUsingKeyboardNavigation: O,
        }
    );
};
