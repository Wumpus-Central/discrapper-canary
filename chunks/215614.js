n.d(t, { c: () => d });
var r = n(588225),
    i = n(752689),
    a = n(880016),
    o = n(158821),
    s = n(558466),
    l = n(199562),
    c = n(221721),
    u = n(306290);
function d(e, t, n) {
    let {
        isVirtualized: d,
        keyboardDelegate: f,
        layoutDelegate: _,
        onAction: p,
        disallowTypeAhead: h,
        linkBehavior: m = "action",
        keyboardNavigationBehavior: g = "arrow",
        escapeKeyBehavior: E = "clearSelection",
        shouldSelectOnPressUp: b,
    } = e;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let { listProps: y } = (0, u._)({
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            ref: n,
            keyboardDelegate: f,
            layoutDelegate: _,
            isVirtualized: d,
            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: m,
            disallowTypeAhead: h,
            autoFocus: e.autoFocus,
            escapeKeyBehavior: E,
        }),
        O = (0, i.Me)(e.id);
    r.Co.set(t, {
        id: O,
        onAction: p,
        linkBehavior: m,
        keyboardNavigationBehavior: g,
        shouldSelectOnPressUp: b,
    });
    let v = (0, s.j)({
            selectionManager: t.selectionManager,
            hasItemActions: !!p,
        }),
        I = (0, c.p)(n, { isDisabled: 0 !== t.collection.size }),
        T = (0, a.z)(e, { labelable: !0 }),
        S = (0, o.d)(
            T,
            {
                role: "grid",
                id: O,
                "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
            },
            0 === t.collection.size ? { tabIndex: I ? -1 : 0 } : y,
            v,
        );
    return d && ((S["aria-rowcount"] = t.collection.size), (S["aria-colcount"] = 1)), (0, l.B)({}, t), { gridProps: S };
}
