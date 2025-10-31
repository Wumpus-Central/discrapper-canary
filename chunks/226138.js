n.d(t, { F: () => E });
var r = n(464780),
    i = n(677061),
    a = n(690936),
    o = n(565963),
    s = n(470649),
    l = n(900197),
    c = n(43341),
    u = n(495873),
    d = n(750528),
    f = n(647438),
    _ = n(521707),
    p = n(582315),
    h = n(594886);
let m = {
        ltr: "ArrowRight",
        rtl: "ArrowLeft",
    },
    g = {
        ltr: "ArrowLeft",
        rtl: "ArrowRight",
    };
function E(e, t, n) {
    var E, y, O, v, I, T;
    let { node: S, isVirtualized: A } = e,
        { direction: C } = (0, h.j)(),
        { onAction: N, linkBehavior: R, keyboardNavigationBehavior: P, shouldSelectOnPressUp: w } = r.Co.get(t),
        D = (0, i.mp)(),
        x = (0, f.useRef)(null),
        L = () => {
            var e;
            null === n.current ||
                ((null == x.current || S.key === x.current) &&
                    (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                (0, u.e)(n.current);
        },
        M = {},
        j = e.hasChildItems,
        k = t.selectionManager.isLink(S.key);
    if (null != S && "expandedKeys" in t) {
        let e = null == (O = (v = t.collection).getChildren) ? void 0 : O.call(v, S.key);
        (j = j || [...(null != e ? e : [])].length > 1),
            null == N && !k && "none" === t.selectionManager.selectionMode && j && (N = () => t.toggleKey(S.key));
        let n = j ? t.expandedKeys.has(S.key) : void 0,
            r = 1;
        if (S.level > 0 && (null == S ? void 0 : S.parentKey) != null) {
            let e = t.collection.getItem(S.parentKey);
            e &&
                (r = [...(null == (I = (T = t.collection).getChildren) ? void 0 : I.call(T, e.key))].filter(
                    (e) => "item" === e.type,
                ).length);
        } else r = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
        M = {
            "aria-expanded": n,
            "aria-level": S.level + 1,
            "aria-posinset": (null == S ? void 0 : S.index) + 1,
            "aria-setsize": r,
        };
    }
    let { itemProps: U, ...G } = (0, p.C)({
            selectionManager: t.selectionManager,
            key: S.key,
            ref: n,
            isVirtualized: A,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp || w,
            onAction:
                N || (null == (E = S.props) ? void 0 : E.onAction)
                    ? (0, a.t)(null == (y = S.props) ? void 0 : y.onAction, N ? () => N(S.key) : void 0)
                    : void 0,
            focus: L,
            linkBehavior: R,
        }),
        B = (e) => {
            if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
            let r = (0, d.QL)(n.current);
            if (
                ((r.currentNode = document.activeElement), "expandedKeys" in t && document.activeElement === n.current)
            ) {
                if (e.key === m[C] && t.selectionManager.focusedKey === S.key && j && !t.expandedKeys.has(S.key)) {
                    t.toggleKey(S.key), e.stopPropagation();
                    return;
                } else if (
                    e.key === g[C] &&
                    t.selectionManager.focusedKey === S.key &&
                    j &&
                    t.expandedKeys.has(S.key)
                ) {
                    t.toggleKey(S.key), e.stopPropagation();
                    return;
                }
            }
            switch (e.key) {
                case "ArrowLeft":
                    if ("arrow" === P) {
                        let t = "rtl" === C ? r.nextNode() : r.previousNode();
                        if (t)
                            e.preventDefault(),
                                e.stopPropagation(),
                                (0, u.e)(t),
                                (0, o.G)(t, { containingElement: (0, s.r)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), "rtl" === C))
                            (0, u.e)(n.current), (0, o.G)(n.current, { containingElement: (0, s.r)(n.current) });
                        else {
                            r.currentNode = n.current;
                            let e = b(r);
                            e && ((0, u.e)(e), (0, o.G)(e, { containingElement: (0, s.r)(n.current) }));
                        }
                    }
                    break;
                case "ArrowRight":
                    if ("arrow" === P) {
                        let t = "rtl" === C ? r.previousNode() : r.nextNode();
                        if (t)
                            e.preventDefault(),
                                e.stopPropagation(),
                                (0, u.e)(t),
                                (0, o.G)(t, { containingElement: (0, s.r)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), "ltr" === C))
                            (0, u.e)(n.current), (0, o.G)(n.current, { containingElement: (0, s.r)(n.current) });
                        else {
                            r.currentNode = n.current;
                            let e = b(r);
                            e && ((0, u.e)(e), (0, o.G)(e, { containingElement: (0, s.r)(n.current) }));
                        }
                    }
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    if (!e.altKey && n.current.contains(e.target)) {
                        var i;
                        e.stopPropagation(),
                            e.preventDefault(),
                            null == (i = n.current.parentElement) ||
                                i.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                    }
            }
        },
        Z = (e) => {
            if (((x.current = S.key), e.target !== n.current)) {
                (0, _.E)() || t.selectionManager.setFocusedKey(S.key);
                return;
            }
        },
        F = (e) => {
            if (
                e.currentTarget.contains(e.target) &&
                n.current &&
                document.activeElement &&
                "Tab" === e.key &&
                "tab" === P
            ) {
                let t = (0, d.QL)(n.current, { tabbable: !0 });
                (t.currentNode = document.activeElement),
                    (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
            }
        },
        V = (0, l.fU)(S.props),
        H = G.hasAction ? V : {},
        Y = (0, c.d)(U, H, {
            role: "row",
            onKeyDownCapture: B,
            onKeyDown: F,
            onFocus: Z,
            "aria-label": S.textValue || void 0,
            "aria-selected": t.selectionManager.canSelectItem(S.key) ? t.selectionManager.isSelected(S.key) : void 0,
            "aria-disabled": t.selectionManager.isDisabled(S.key) || void 0,
            "aria-labelledby": D && S.textValue ? `${(0, r.XQ)(t, S.key)} ${D}` : void 0,
            id: (0, r.XQ)(t, S.key),
        });
    if (A) {
        let { collection: e } = t,
            n = [...e];
        Y["aria-rowindex"] = n.find((e) => "section" === e.type)
            ? [...e.getKeys()]
                  .filter((t) => {
                      var n;
                      return (null == (n = e.getItem(t)) ? void 0 : n.type) !== "section";
                  })
                  .findIndex((e) => e === S.key) + 1
            : S.index + 1;
    }
    let W = {
        role: "gridcell",
        "aria-colindex": 1,
    };
    return {
        rowProps: { ...(0, c.d)(Y, M) },
        gridCellProps: W,
        descriptionProps: { id: D },
        ...G,
    };
}
function b(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
