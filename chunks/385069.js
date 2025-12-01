n.d(t, { N: () => m });
var r = n(822433),
    i = n(17042),
    a = n(199562),
    o = n(558466),
    s = n(752689),
    l = n(880016),
    c = n(158821),
    u = n(473749),
    d = n(852058),
    f = n(227399),
    p = n(221721),
    _ = n(587157);
function m(e, t, n) {
    let {
            isVirtualized: m,
            disallowTypeAhead: h,
            keyboardDelegate: g,
            focusMode: E,
            scrollRef: b,
            getRowText: y,
            onRowAction: O,
            onCellAction: v,
            escapeKeyBehavior: S = "clearSelection",
            shouldSelectOnPressUp: I,
        } = e,
        { selectionManager: T } = t;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let A = (0, d.X)({
            usage: "search",
            sensitivity: "base",
        }),
        { direction: C } = (0, f.j)(),
        N = t.selectionManager.disabledBehavior,
        P = (0, u.useMemo)(
            () =>
                g ||
                new (0, r.i)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: N,
                    ref: n,
                    direction: C,
                    collator: A,
                    focusMode: E,
                }),
            [g, t.collection, t.disabledKeys, N, n, C, A, E],
        ),
        { collectionProps: R } = (0, _.g)({
            ref: n,
            selectionManager: T,
            keyboardDelegate: P,
            isVirtualized: m,
            scrollRef: b,
            disallowTypeAhead: h,
            escapeKeyBehavior: S,
        }),
        w = (0, s.Me)(e.id);
    i.B.set(t, {
        keyboardDelegate: P,
        actions: {
            onRowAction: O,
            onCellAction: v,
        },
        shouldSelectOnPressUp: I,
    });
    let D = (0, o.j)({
            selectionManager: T,
            hasItemActions: !!(O || v),
        }),
        x = (0, l.z)(e, { labelable: !0 }),
        L = (0, u.useCallback)(
            (e) => {
                if (T.isFocused) {
                    e.currentTarget.contains(e.target) || T.setFocused(!1);
                    return;
                }
                e.currentTarget.contains(e.target) && T.setFocused(!0);
            },
            [T],
        ),
        j = (0, u.useMemo)(
            () => ({
                onBlur: R.onBlur,
                onFocus: L,
            }),
            [L, R.onBlur],
        ),
        M = (0, p.p)(n, { isDisabled: 0 !== t.collection.size }),
        k = (0, c.d)(
            x,
            {
                role: "grid",
                id: w,
                "aria-multiselectable": "multiple" === T.selectionMode ? "true" : void 0,
            },
            t.isKeyboardNavigationDisabled ? j : R,
            (0 === t.collection.size && { tabIndex: M ? -1 : 0 }) || void 0,
            D,
        );
    return (
        m && ((k["aria-rowcount"] = t.collection.size), (k["aria-colcount"] = t.collection.columnCount)),
        (0, a.B)({ getRowText: y }, t),
        { gridProps: k }
    );
}
