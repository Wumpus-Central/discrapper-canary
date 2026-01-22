n.d(t, { p: () => _ });
var r = n(869795),
    i = n(132716),
    a = n(723906),
    s = n(2799),
    o = n(803082),
    l = n(260431),
    c = n(805447),
    u = n(8321),
    d = n(854499),
    f = n(862836),
    p = n(64700);
function _(e) {
    let {
            id: t,
            selectionManager: n,
            key: _,
            ref: g,
            shouldSelectOnPressUp: E,
            shouldUseVirtualFocus: b,
            focus: y,
            isDisabled: O,
            onAction: A,
            allowsDifferentPressOrigin: v,
            linkBehavior: S = "action",
        } = e,
        I = (0, i.rd)();
    t = (0, a.Bi)(t);
    let T = (e) => {
        if ("keyboard" === e.pointerType && (0, r.N9)(e)) n.toggleSelection(_);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(_)) {
                if ("selection" === S && g.current) {
                    let t = n.getItemProps(_);
                    I.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === S || "none" === S) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(_) && !n.disallowEmptySelection
                    ? n.toggleSelection(_)
                    : n.replaceSelection(_)
                : e && e.shiftKey
                  ? n.extendSelection(_)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, s.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(_)
                    : n.replaceSelection(_);
        }
    };
    (0, p.useEffect)(() => {
        _ === n.focusedKey &&
            n.isFocused &&
            (b
                ? (0, f.vX)(g.current)
                : y
                  ? y()
                  : document.activeElement !== g.current && g.current && (0, c.l)(g.current));
    }, [g, _, n.focusedKey, n.childFocusStrategy, n.isFocused, b]),
        (O = O || n.isDisabled(_));
    let C = {};
    b || O
        ? O &&
          (C.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (C = {
              tabIndex: _ === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === g.current && n.setFocusedKey(_);
              },
          });
    let N = n.isLink(_) && "override" === S,
        R = A && "action" === e.UNSTABLE_itemBehavior,
        w = n.isLink(_) && "selection" !== S && "none" !== S,
        P = !O && n.canSelectItem(_) && !N && !R,
        D = (A || w) && !O,
        x = D && ("replace" === n.selectionBehavior ? !P : !P || n.isEmpty),
        L = D && P && "replace" === n.selectionBehavior,
        j = x || L,
        M = (0, p.useRef)(null),
        k = j && P,
        U = (0, p.useRef)(!1),
        G = (0, p.useRef)(!1),
        V = n.getItemProps(_),
        F = (e) => {
            if (A) {
                var t;
                A(),
                    null == (t = g.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            w && g.current && I.open(g.current, e, V.href, V.routerOptions);
        },
        B = { ref: g };
    if (
        (E
            ? ((B.onPressStart = (e) => {
                  (M.current = e.pointerType), (U.current = k), "keyboard" === e.pointerType && (!j || m()) && T(e);
              }),
              v
                  ? ((B.onPressUp = x
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && P && T(e);
                          }),
                    (B.onPress = x
                        ? F
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && P && T(e);
                          }))
                  : (B.onPress = (e) => {
                        x || (L && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || h()) && F(e)
                            : "keyboard" !== e.pointerType && P && T(e);
                    }))
            : ((B.onPressStart = (e) => {
                  (M.current = e.pointerType),
                      (U.current = k),
                      (G.current = x),
                      P && (("mouse" === e.pointerType && !x) || ("keyboard" === e.pointerType && (!D || m()))) && T(e);
              }),
              (B.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && j && h()) ||
                      ("mouse" === e.pointerType && G.current)) &&
                      (j ? F(e) : P && T(e));
              })),
        (C["data-collection"] = (0, r.EG)(n.collection)),
        (C["data-key"] = _),
        (B.preventFocusOnPress = b),
        b &&
            (B = (0, o.v)(B, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(_));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(_));
                },
            })),
        V)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            V[e] && (B[e] = (0, l.c)(B[e], V[e]));
    let { pressProps: H, isPressed: Y } = (0, u.d)(B),
        W = L
            ? (e) => {
                  "mouse" === M.current && (e.stopPropagation(), e.preventDefault(), F(e));
              }
            : void 0,
        { longPressProps: K } = (0, d.H)({
            isDisabled: !k,
            onLongPress(e) {
                "touch" === e.pointerType && (T(e), n.setSelectionBehavior("toggle"));
            },
        }),
        z = (e) => {
            "touch" === M.current && U.current && e.preventDefault();
        },
        q =
            "none" !== S && n.isLink(_)
                ? (e) => {
                      i.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, o.v)(
            C,
            P || x || (b && !O) ? H : {},
            k ? K : {},
            {
                onDoubleClick: W,
                onDragStartCapture: z,
                onClick: q,
                id: t,
            },
            b ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: Y,
        isSelected: n.isSelected(_),
        isFocused: n.isFocused && n.focusedKey === _,
        isDisabled: O,
        allowsSelection: P,
        hasAction: j,
    };
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function m() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
