"use strict";
n.d(t, { I: () => d });
var r = n(625557),
    i = n(723906),
    s = n(290424),
    a = n(803082),
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
        linkBehavior: E = "action",
        keyboardNavigationBehavior: m = "arrow",
        escapeKeyBehavior: g = "clearSelection",
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
            linkBehavior: E,
            disallowTypeAhead: h,
            autoFocus: e.autoFocus,
            escapeKeyBehavior: g,
        }),
        T = (0, i.Bi)(e.id);
    r.nV.set(t, { id: T, onAction: p, linkBehavior: E, keyboardNavigationBehavior: m, shouldSelectOnPressUp: A });
    let S = (0, o.m)({ selectionManager: t.selectionManager, hasItemActions: !!p }),
        y = (0, u.$)(n, { isDisabled: 0 !== t.collection.size }),
        N = (0, s.$)(e, { labelable: !0 }),
        v = (0, a.v)(
            N,
            {
                role: "grid",
                id: T,
                "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
            },
            0 === t.collection.size ? { tabIndex: y ? -1 : 0 } : I,
            S,
        );
    return d && ((v["aria-rowcount"] = t.collection.size), (v["aria-colcount"] = 1)), (0, l.H)({}, t), { gridProps: v };
}
