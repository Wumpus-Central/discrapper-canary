"use strict";
n.d(t, { J: () => l });
var r = n(64700),
    i = n(788413),
    s = n(212245),
    a = n(60587),
    o = n(887695);
let l = (e) => {
    let {
            columnCounts: t,
            stickersGrid: n,
            stickersListRef: l,
            store: u,
            gridNavigatorId: c,
            setInspectedStickerPosition: d,
            onGridItemSelect: _,
        } = e,
        f = (0, s.p)(),
        p = r.useCallback(
            (e) => {
                _(e, f);
            },
            [_, f],
        ),
        h = r.useCallback(
            (e, t) => {
                d(e, t, a.t.GRID_NAVIGATOR_EVENT);
            },
            [d],
        ),
        {
            gridDispatch: E,
            getItemProps: m,
            getRowProps: g,
            gridContainerProps: A,
            handleGridContainerKeyDown: I,
            isUsingKeyboardNavigation: T,
        } = (0, o.Ff)({
            columnCounts: t,
            gridNavigatorId: c,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: p,
            onGridNavigatorPositionChange: h,
        });
    return (
        r.useEffect(
            () =>
                u.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== a.t.GRID_NAVIGATOR_EVENT && E({ type: i.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [E, u],
        ),
        {
            getItemProps: m,
            getRowProps: g,
            gridContainerProps: A,
            handleGridContainerKeyDown: I,
            isUsingKeyboardNavigation: T,
        }
    );
};
