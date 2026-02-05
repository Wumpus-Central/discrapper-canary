"use strict";
n.d(t, { I: () => d });
var r = n(625557),
    i = n(723906),
    a = n(290424),
    s = n(803082),
    o = n(406985),
    l = n(227510),
    u = n(510281),
    c = n(869125);
function d(e, t, n) {
    let {
        isVirtualized: d,
        keyboardDelegate: _,
        layoutDelegate: f,
        onAction: p,
        disallowTypeAhead: h,
        linkBehavior: m = "action",
        keyboardNavigationBehavior: g = "arrow",
        escapeKeyBehavior: E = "clearSelection",
        shouldSelectOnPressUp: A,
    } = e;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let { listProps: I } = (0, c.y)({
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            ref: n,
            keyboardDelegate: _,
            layoutDelegate: f,
            isVirtualized: d,
            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: m,
            disallowTypeAhead: h,
            autoFocus: e.autoFocus,
            escapeKeyBehavior: E,
        }),
        T = (0, i.Bi)(e.id);
    r.nV.set(t, { id: T, onAction: p, linkBehavior: m, keyboardNavigationBehavior: g, shouldSelectOnPressUp: A });
    let y = (0, o.m)({ selectionManager: t.selectionManager, hasItemActions: !!p }),
        S = (0, u.$)(n, { isDisabled: 0 !== t.collection.size }),
        v = (0, a.$)(e, { labelable: !0 }),
        C = (0, s.v)(
            v,
            {
                role: "grid",
                id: T,
                "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
            },
            0 === t.collection.size ? { tabIndex: S ? -1 : 0 } : I,
            y,
        );
    return d && ((C["aria-rowcount"] = t.collection.size), (C["aria-colcount"] = 1)), (0, l.H)({}, t), { gridProps: C };
}
