n.d(t, { N: () => h });
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
    _ = n(221721),
    p = n(587157);
function h(e, t, n) {
    let {
            isVirtualized: h,
            disallowTypeAhead: m,
            keyboardDelegate: g,
            focusMode: E,
            scrollRef: b,
            getRowText: y,
            onRowAction: O,
            onCellAction: v,
            escapeKeyBehavior: I = "clearSelection",
            shouldSelectOnPressUp: T,
        } = e,
        { selectionManager: S } = t;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let A = (0, d.X)({
            usage: "search",
            sensitivity: "base",
        }),
        { direction: C } = (0, f.j)(),
        N = t.selectionManager.disabledBehavior,
        R = (0, u.useMemo)(
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
        { collectionProps: P } = (0, p.g)({
            ref: n,
            selectionManager: S,
            keyboardDelegate: R,
            isVirtualized: h,
            scrollRef: b,
            disallowTypeAhead: m,
            escapeKeyBehavior: I,
        }),
        D = (0, s.Me)(e.id);
    i.B.set(t, {
        keyboardDelegate: R,
        actions: {
            onRowAction: O,
            onCellAction: v,
        },
        shouldSelectOnPressUp: T,
    });
    let w = (0, o.j)({
            selectionManager: S,
            hasItemActions: !!(O || v),
        }),
        x = (0, l.z)(e, { labelable: !0 }),
        L = (0, u.useCallback)(
            (e) => {
                if (S.isFocused) {
                    e.currentTarget.contains(e.target) || S.setFocused(!1);
                    return;
                }
                e.currentTarget.contains(e.target) && S.setFocused(!0);
            },
            [S],
        ),
        M = (0, u.useMemo)(
            () => ({
                onBlur: P.onBlur,
                onFocus: L,
            }),
            [L, P.onBlur],
        ),
        k = (0, _.p)(n, { isDisabled: 0 !== t.collection.size }),
        j = (0, c.d)(
            x,
            {
                role: "grid",
                id: D,
                "aria-multiselectable": "multiple" === S.selectionMode ? "true" : void 0,
            },
            t.isKeyboardNavigationDisabled ? M : P,
            (0 === t.collection.size && { tabIndex: k ? -1 : 0 }) || void 0,
            w,
        );
    return (
        h && ((j["aria-rowcount"] = t.collection.size), (j["aria-colcount"] = t.collection.columnCount)),
        (0, a.B)({ getRowText: y }, t),
        { gridProps: j }
    );
}
