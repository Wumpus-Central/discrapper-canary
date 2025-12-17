n.d(t, { C: () => _ });
var r = n(422037),
    i = n(601339),
    a = n(752689),
    o = n(592840),
    s = n(158821),
    l = n(929767),
    c = n(172395),
    u = n(226098),
    d = n(443983),
    f = n(461960),
    p = n(473749);
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
            onAction: v,
            allowsDifferentPressOrigin: S,
            linkBehavior: I = "action",
        } = e,
        T = (0, i.tv)();
    t = (0, a.Me)(t);
    let C = (e) => {
        if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(_);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(_)) {
                if ("selection" === I && g.current) {
                    let t = n.getItemProps(_);
                    T.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === I || "none" === I) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(_) && !n.disallowEmptySelection
                    ? n.toggleSelection(_)
                    : n.replaceSelection(_)
                : e && e.shiftKey
                  ? n.extendSelection(_)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, o.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(_)
                    : n.replaceSelection(_);
        }
    };
    (0, p.useEffect)(() => {
        _ === n.focusedKey &&
            n.isFocused &&
            (b
                ? (0, f.q6)(g.current)
                : y
                  ? y()
                  : document.activeElement !== g.current && g.current && (0, c.e)(g.current));
    }, [g, _, n.focusedKey, n.childFocusStrategy, n.isFocused, b]),
        (O = O || n.isDisabled(_));
    let A = {};
    b || O
        ? O &&
          (A.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (A = {
              tabIndex: _ === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === g.current && n.setFocusedKey(_);
              },
          });
    let N = n.isLink(_) && "override" === I,
        P = v && "action" === e.UNSTABLE_itemBehavior,
        R = n.isLink(_) && "selection" !== I && "none" !== I,
        w = !O && n.canSelectItem(_) && !N && !P,
        D = (v || R) && !O,
        x = D && ("replace" === n.selectionBehavior ? !w : !w || n.isEmpty),
        L = D && w && "replace" === n.selectionBehavior,
        j = x || L,
        M = (0, p.useRef)(null),
        k = j && w,
        U = (0, p.useRef)(!1),
        G = (0, p.useRef)(!1),
        Z = n.getItemProps(_),
        F = (e) => {
            if (v) {
                var t;
                v(),
                    null == (t = g.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            R && g.current && T.open(g.current, e, Z.href, Z.routerOptions);
        },
        B = { ref: g };
    if (
        (E
            ? ((B.onPressStart = (e) => {
                  (M.current = e.pointerType), (U.current = k), "keyboard" === e.pointerType && (!j || h()) && C(e);
              }),
              S
                  ? ((B.onPressUp = x
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && w && C(e);
                          }),
                    (B.onPress = x
                        ? F
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && w && C(e);
                          }))
                  : (B.onPress = (e) => {
                        x || (L && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || m()) && F(e)
                            : "keyboard" !== e.pointerType && w && C(e);
                    }))
            : ((B.onPressStart = (e) => {
                  (M.current = e.pointerType),
                      (U.current = k),
                      (G.current = x),
                      w && (("mouse" === e.pointerType && !x) || ("keyboard" === e.pointerType && (!D || h()))) && C(e);
              }),
              (B.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && j && m()) ||
                      ("mouse" === e.pointerType && G.current)) &&
                      (j ? F(e) : w && C(e));
              })),
        (A["data-collection"] = (0, r.Zx)(n.collection)),
        (A["data-key"] = _),
        (B.preventFocusOnPress = b),
        b &&
            (B = (0, s.d)(B, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(_));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(_));
                },
            })),
        Z)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            Z[e] && (B[e] = (0, l.t)(B[e], Z[e]));
    let { pressProps: V, isPressed: H } = (0, u.r)(B),
        Y = L
            ? (e) => {
                  "mouse" === M.current && (e.stopPropagation(), e.preventDefault(), F(e));
              }
            : void 0,
        { longPressProps: W } = (0, d.T)({
            isDisabled: !k,
            onLongPress(e) {
                "touch" === e.pointerType && (C(e), n.setSelectionBehavior("toggle"));
            },
        }),
        K = (e) => {
            "touch" === M.current && U.current && e.preventDefault();
        },
        z =
            "none" !== I && n.isLink(_)
                ? (e) => {
                      i.nG.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, s.d)(
            A,
            w || x || (b && !O) ? V : {},
            k ? W : {},
            {
                onDoubleClick: Y,
                onDragStartCapture: K,
                onClick: z,
                id: t,
            },
            b ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: H,
        isSelected: n.isSelected(_),
        isFocused: n.isFocused && n.focusedKey === _,
        isDisabled: O,
        allowsSelection: w,
        hasAction: j,
    };
}
function m() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
