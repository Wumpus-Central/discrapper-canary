n.d(t, {
    J: () => l,
});
var r = n(64700),
    i = n(788413),
    a = n(212245),
    s = n(60587),
    o = n(887695);
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
        p = (0, a.p)(),
        _ = r.useCallback(
            (e) => {
                f(e, p);
            },
            [f, p],
        ),
        h = r.useCallback(
            (e, t) => {
                d(e, t, s.t.GRID_NAVIGATOR_EVENT);
            },
            [d],
        ),
        {
            gridDispatch: m,
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: b,
            handleGridContainerKeyDown: y,
            isUsingKeyboardNavigation: O,
        } = (0, o.Ff)({
            columnCounts: t,
            gridNavigatorId: u,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: _,
            onGridNavigatorPositionChange: h,
        });
    return (
        r.useEffect(
            () =>
                c.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== s.t.GRID_NAVIGATOR_EVENT &&
                            m({
                                type: i.n.SET_FOCUSED_POSITION,
                                x: t,
                                y: n,
                            });
                    },
                ),
            [m, c],
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
