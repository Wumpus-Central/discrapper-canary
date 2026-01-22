n.d(t, {
    I: () => d,
});
var r = n(625557),
    i = n(723906),
    a = n(290424),
    s = n(803082),
    o = n(406985),
    l = n(227510),
    c = n(510281),
    u = n(869125);

function d(e, t, n) {
    let {
        isVirtualized: d,
        keyboardDelegate: f,
        layoutDelegate: p,
        onAction: _,
        disallowTypeAhead: h,
        linkBehavior: m = "action",
        keyboardNavigationBehavior: g = "arrow",
        escapeKeyBehavior: E = "clearSelection",
        shouldSelectOnPressUp: b,
    } = e;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let { listProps: y } = (0, u.y)({
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            ref: n,
            keyboardDelegate: f,
            layoutDelegate: p,
            isVirtualized: d,
            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: m,
            disallowTypeAhead: h,
            autoFocus: e.autoFocus,
            escapeKeyBehavior: E,
        }),
        O = (0, i.Bi)(e.id);
    r.nV.set(t, {
        id: O,
        onAction: _,
        linkBehavior: m,
        keyboardNavigationBehavior: g,
        shouldSelectOnPressUp: b,
    });
    let A = (0, o.m)({
            selectionManager: t.selectionManager,
            hasItemActions: !!_,
        }),
        v = (0, c.$)(n, {
            isDisabled: 0 !== t.collection.size,
        }),
        S = (0, a.$)(e, {
            labelable: !0,
        }),
        I = (0, s.v)(
            S,
            {
                role: "grid",
                id: O,
                "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
            },
            0 === t.collection.size
                ? {
                      tabIndex: v ? -1 : 0,
                  }
                : y,
            A,
        );
    return (
        d && ((I["aria-rowcount"] = t.collection.size), (I["aria-colcount"] = 1)),
        (0, l.H)({}, t),
        {
            gridProps: I,
        }
    );
}
