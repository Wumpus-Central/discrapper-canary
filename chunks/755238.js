n.d(t, { N: () => h });
var r = n(197986),
    i = n(952628),
    a = n(529267),
    o = n(36908),
    s = n(677061),
    l = n(735437),
    c = n(43341),
    u = n(647438),
    d = n(191905),
    f = n(594886),
    _ = n(805503),
    p = n(705696);
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
        w = (0, s.Me)(e.id);
    i.B.set(t, {
        keyboardDelegate: R,
        actions: {
            onRowAction: O,
            onCellAction: v,
        },
        shouldSelectOnPressUp: T,
    });
    let D = (0, o.j)({
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
        j = (0, _.p)(n, { isDisabled: 0 !== t.collection.size }),
        k = (0, c.d)(
            x,
            {
                role: "grid",
                id: w,
                "aria-multiselectable": "multiple" === S.selectionMode ? "true" : void 0,
            },
            t.isKeyboardNavigationDisabled ? M : P,
            (0 === t.collection.size && { tabIndex: j ? -1 : 0 }) || void 0,
            D,
        );
    return (
        h && ((k["aria-rowcount"] = t.collection.size), (k["aria-colcount"] = t.collection.columnCount)),
        (0, a.B)({ getRowText: y }, t),
        { gridProps: k }
    );
}
