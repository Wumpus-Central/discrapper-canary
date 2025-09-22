n.d(t, { c: () => d });
var r = n(203038),
    i = n(795074),
    a = n(436242),
    o = n(506364),
    s = n(676641),
    l = n(488595),
    c = n(135002),
    u = n(662147);
function d(e, t, n) {
    let {
        isVirtualized: d,
        keyboardDelegate: f,
        layoutDelegate: _,
        onAction: p,
        disallowTypeAhead: h,
        linkBehavior: m = "action",
        keyboardNavigationBehavior: g = "arrow",
    } = e;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let { listProps: E } = (0, u._)({
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
        }),
        b = (0, i.Me)(e.id);
    r.Co.set(t, {
        id: b,
        onAction: p,
        linkBehavior: m,
        keyboardNavigationBehavior: g,
    });
    let y = (0, s.j)({
            selectionManager: t.selectionManager,
            hasItemActions: !!p,
        }),
        O = (0, c.p)(n, { isDisabled: 0 !== t.collection.size }),
        v = (0, a.z)(e, { labelable: !0 }),
        I = (0, o.d)(
            v,
            {
                role: "grid",
                id: b,
                "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
            },
            0 === t.collection.size ? { tabIndex: O ? -1 : 0 } : E,
            y,
        );
    return d && ((I["aria-rowcount"] = t.collection.size), (I["aria-colcount"] = 1)), (0, l.B)({}, t), { gridProps: I };
}
