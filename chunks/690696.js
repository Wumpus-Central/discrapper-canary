n.d(t, { F: () => b });
var r = n(203038),
    i = n(795074),
    a = n(284298),
    o = n(368742),
    s = n(899323),
    l = n(87624),
    c = n(506364),
    u = n(533339),
    d = n(229114),
    f = n(152259),
    _ = n(647438),
    p = n(998925),
    h = n(82927),
    m = n(578206);
let g = {
        ltr: "ArrowRight",
        rtl: "ArrowLeft",
    },
    E = {
        ltr: "ArrowLeft",
        rtl: "ArrowRight",
    };
function b(e, t, n) {
    var b, O, v, I, T, S, A, C;
    let { node: N, isVirtualized: R, shouldSelectOnPressUp: P } = e,
        { direction: w } = (0, m.j)(),
        { onAction: D, linkBehavior: x, keyboardNavigationBehavior: L } = r.Co.get(t),
        j = (0, i.mp)(),
        M = (0, _.useRef)(null),
        k = () => {
            var e;
            null === n.current ||
                ((null == M.current || N.key === M.current) &&
                    (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                (0, u.e)(n.current);
        },
        U = {},
        G = e.hasChildItems,
        B = t.selectionManager.isLink(N.key);
    if (null != N && "expandedKeys" in t) {
        let e = null == (v = (I = t.collection).getChildren) ? void 0 : v.call(I, N.key);
        (G = G || [...(null != e ? e : [])].length > 1),
            null == D && !B && "none" === t.selectionManager.selectionMode && G && (D = () => t.toggleKey(N.key));
        let n = G ? t.expandedKeys.has(N.key) : void 0,
            r = 1;
        if (N.level > 0 && (null == N ? void 0 : N.parentKey) != null) {
            let e = t.collection.getItem(N.parentKey);
            if (e) {
                let n = null == (A = (C = t.collection).getChildren) ? void 0 : A.call(C, e.key);
                r = (0, f.s)(n).index + 1;
            }
        } else
            r =
                (null != (S = null == (T = [...t.collection].filter((e) => 0 === e.level).at(-1)) ? void 0 : T.index)
                    ? S
                    : 0) + 1;
        U = {
            "aria-expanded": n,
            "aria-level": N.level + 1,
            "aria-posinset": (null == N ? void 0 : N.index) + 1,
            "aria-setsize": r,
        };
    }
    let { itemProps: Z, ...F } = (0, h.C)({
            selectionManager: t.selectionManager,
            key: N.key,
            ref: n,
            isVirtualized: R,
            shouldSelectOnPressUp: P,
            onAction:
                D || (null == (b = N.props) ? void 0 : b.onAction)
                    ? (0, a.t)(null == (O = N.props) ? void 0 : O.onAction, D ? () => D(N.key) : void 0)
                    : void 0,
            focus: k,
            linkBehavior: x,
        }),
        V = (e) => {
            if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
            let r = (0, d.QL)(n.current);
            if (
                ((r.currentNode = document.activeElement), "expandedKeys" in t && document.activeElement === n.current)
            ) {
                if (e.key === g[w] && t.selectionManager.focusedKey === N.key && G && !t.expandedKeys.has(N.key)) {
                    t.toggleKey(N.key), e.stopPropagation();
                    return;
                } else if (
                    e.key === E[w] &&
                    t.selectionManager.focusedKey === N.key &&
                    G &&
                    t.expandedKeys.has(N.key)
                ) {
                    t.toggleKey(N.key), e.stopPropagation();
                    return;
                }
            }
            switch (e.key) {
                case "ArrowLeft":
                    if ("arrow" === L) {
                        let t = "rtl" === w ? r.nextNode() : r.previousNode();
                        if (t)
                            e.preventDefault(),
                                e.stopPropagation(),
                                (0, u.e)(t),
                                (0, o.G)(t, { containingElement: (0, s.r)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), "rtl" === w))
                            (0, u.e)(n.current), (0, o.G)(n.current, { containingElement: (0, s.r)(n.current) });
                        else {
                            r.currentNode = n.current;
                            let e = y(r);
                            e && ((0, u.e)(e), (0, o.G)(e, { containingElement: (0, s.r)(n.current) }));
                        }
                    }
                    break;
                case "ArrowRight":
                    if ("arrow" === L) {
                        let t = "rtl" === w ? r.previousNode() : r.nextNode();
                        if (t)
                            e.preventDefault(),
                                e.stopPropagation(),
                                (0, u.e)(t),
                                (0, o.G)(t, { containingElement: (0, s.r)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), "ltr" === w))
                            (0, u.e)(n.current), (0, o.G)(n.current, { containingElement: (0, s.r)(n.current) });
                        else {
                            r.currentNode = n.current;
                            let e = y(r);
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
                    break;
                case "Tab":
                    if ("tab" === L) {
                        let t = (0, d.QL)(n.current, { tabbable: !0 });
                        (t.currentNode = document.activeElement),
                            (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                    }
            }
        },
        H = (e) => {
            if (((M.current = N.key), e.target !== n.current)) {
                (0, p.E)() || t.selectionManager.setFocusedKey(N.key);
                return;
            }
        },
        Y = (0, l.fU)(N.props),
        W = F.hasAction ? Y : {},
        K = (0, c.d)(Z, W, {
            role: "row",
            onKeyDownCapture: V,
            onFocus: H,
            "aria-label": N.textValue || void 0,
            "aria-selected": t.selectionManager.canSelectItem(N.key) ? t.selectionManager.isSelected(N.key) : void 0,
            "aria-disabled": t.selectionManager.isDisabled(N.key) || void 0,
            "aria-labelledby": j && N.textValue ? `${(0, r.XQ)(t, N.key)} ${j}` : void 0,
            id: (0, r.XQ)(t, N.key),
        });
    R && (K["aria-rowindex"] = N.index + 1);
    let z = {
        role: "gridcell",
        "aria-colindex": 1,
    };
    return {
        rowProps: { ...(0, c.d)(K, U) },
        gridCellProps: z,
        descriptionProps: { id: j },
        ...F,
    };
}
function y(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
