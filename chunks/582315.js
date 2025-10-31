n.d(t, { C: () => p });
var r = n(363343),
    i = n(900197),
    a = n(677061),
    o = n(111663),
    s = n(43341),
    l = n(690936),
    c = n(495873),
    u = n(647199),
    d = n(10380),
    f = n(519878),
    _ = n(647438);
function p(e) {
    let {
            id: t,
            selectionManager: n,
            key: p,
            ref: g,
            shouldSelectOnPressUp: E,
            shouldUseVirtualFocus: b,
            focus: y,
            isDisabled: O,
            onAction: v,
            allowsDifferentPressOrigin: I,
            linkBehavior: T = "action",
        } = e,
        S = (0, i.tv)();
    t = (0, a.Me)(t);
    let A = (e) => {
        if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(p);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(p)) {
                if ("selection" === T && g.current) {
                    let t = n.getItemProps(p);
                    S.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === T || "none" === T) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(p) && !n.disallowEmptySelection
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p)
                : e && e.shiftKey
                  ? n.extendSelection(p)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, o.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p);
        }
    };
    (0, _.useEffect)(() => {
        p === n.focusedKey &&
            n.isFocused &&
            (b
                ? (0, f.q6)(g.current)
                : y
                  ? y()
                  : document.activeElement !== g.current && g.current && (0, c.e)(g.current));
    }, [g, p, n.focusedKey, n.childFocusStrategy, n.isFocused, b]),
        (O = O || n.isDisabled(p));
    let C = {};
    b || O
        ? O &&
          (C.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (C = {
              tabIndex: p === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === g.current && n.setFocusedKey(p);
              },
          });
    let N = n.isLink(p) && "override" === T,
        R = v && "action" === e.UNSTABLE_itemBehavior,
        P = n.isLink(p) && "selection" !== T && "none" !== T,
        w = !O && n.canSelectItem(p) && !N && !R,
        D = (v || P) && !O,
        x = D && ("replace" === n.selectionBehavior ? !w : !w || n.isEmpty),
        L = D && w && "replace" === n.selectionBehavior,
        M = x || L,
        j = (0, _.useRef)(null),
        k = M && w,
        U = (0, _.useRef)(!1),
        G = (0, _.useRef)(!1),
        B = n.getItemProps(p),
        Z = (e) => {
            if (v) {
                var t;
                v(),
                    null == (t = g.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            P && g.current && S.open(g.current, e, B.href, B.routerOptions);
        },
        F = { ref: g };
    if (
        (E
            ? ((F.onPressStart = (e) => {
                  (j.current = e.pointerType), (U.current = k), "keyboard" === e.pointerType && (!M || m()) && A(e);
              }),
              I
                  ? ((F.onPressUp = x
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && w && A(e);
                          }),
                    (F.onPress = x
                        ? Z
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && w && A(e);
                          }))
                  : (F.onPress = (e) => {
                        x || (L && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || h()) && Z(e)
                            : "keyboard" !== e.pointerType && w && A(e);
                    }))
            : ((F.onPressStart = (e) => {
                  (j.current = e.pointerType),
                      (U.current = k),
                      (G.current = x),
                      w && (("mouse" === e.pointerType && !x) || ("keyboard" === e.pointerType && (!D || m()))) && A(e);
              }),
              (F.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && M && h()) ||
                      ("mouse" === e.pointerType && G.current)) &&
                      (M ? Z(e) : w && A(e));
              })),
        (C["data-collection"] = (0, r.Zx)(n.collection)),
        (C["data-key"] = p),
        (F.preventFocusOnPress = b),
        b &&
            (F = (0, s.d)(F, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
            })),
        B)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            B[e] && (F[e] = (0, l.t)(F[e], B[e]));
    let { pressProps: V, isPressed: H } = (0, u.r)(F),
        Y = L
            ? (e) => {
                  "mouse" === j.current && (e.stopPropagation(), e.preventDefault(), Z(e));
              }
            : void 0,
        { longPressProps: W } = (0, d.T)({
            isDisabled: !k,
            onLongPress(e) {
                "touch" === e.pointerType && (A(e), n.setSelectionBehavior("toggle"));
            },
        }),
        K = (e) => {
            "touch" === j.current && U.current && e.preventDefault();
        },
        z =
            "none" !== T && n.isLink(p)
                ? (e) => {
                      i.nG.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, s.d)(
            C,
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
        isSelected: n.isSelected(p),
        isFocused: n.isFocused && n.focusedKey === p,
        isDisabled: O,
        allowsSelection: w,
        hasAction: M,
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
