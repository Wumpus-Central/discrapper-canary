"use strict";
n.d(t, { p: () => E });
var r = n(869795),
    i = n(132716),
    s = n(723906),
    a = n(2799),
    o = n(803082),
    l = n(260431),
    u = n(805447),
    d = n(8321),
    c = n(854499),
    _ = n(862836),
    f = n(64700);
function E(e) {
    let {
            id: t,
            selectionManager: n,
            key: E,
            ref: m,
            shouldSelectOnPressUp: g,
            shouldUseVirtualFocus: A,
            focus: I,
            isDisabled: T,
            onAction: S,
            allowsDifferentPressOrigin: y,
            linkBehavior: N = "action",
        } = e,
        O = (0, i.rd)();
    t = (0, s.Bi)(t);
    let R = (e) => {
        if ("keyboard" === e.pointerType && (0, r.N9)(e)) n.toggleSelection(E);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(E)) {
                if ("selection" === N && m.current) {
                    let t = n.getItemProps(E);
                    O.open(m.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === N || "none" === N) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(E) && !n.disallowEmptySelection
                    ? n.toggleSelection(E)
                    : n.replaceSelection(E)
                : e && e.shiftKey
                  ? n.extendSelection(E)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, a.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(E)
                    : n.replaceSelection(E);
        }
    };
    (0, f.useEffect)(() => {
        E === n.focusedKey &&
            n.isFocused &&
            (A
                ? (0, _.vX)(m.current)
                : I
                  ? I()
                  : document.activeElement !== m.current && m.current && (0, u.l)(m.current));
    }, [m, E, n.focusedKey, n.childFocusStrategy, n.isFocused, A]),
        (T = T || n.isDisabled(E));
    let v = {};
    A || T
        ? T &&
          (v.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (v = {
              tabIndex: E === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === m.current && n.setFocusedKey(E);
              },
          });
    let C = n.isLink(E) && "override" === N,
        b = S && "action" === e.UNSTABLE_itemBehavior,
        D = n.isLink(E) && "selection" !== N && "none" !== N,
        L = !T && n.canSelectItem(E) && !C && !b,
        w = (S || D) && !T,
        M = w && ("replace" === n.selectionBehavior ? !L : !L || n.isEmpty),
        P = w && L && "replace" === n.selectionBehavior,
        U = M || P,
        k = (0, f.useRef)(null),
        x = U && L,
        G = (0, f.useRef)(!1),
        V = (0, f.useRef)(!1),
        F = n.getItemProps(E),
        B = (e) => {
            if (S) {
                var t;
                S(),
                    null == (t = m.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            D && m.current && O.open(m.current, e, F.href, F.routerOptions);
        },
        H = { ref: m };
    if (
        (g
            ? ((H.onPressStart = (e) => {
                  (k.current = e.pointerType), (G.current = x), "keyboard" === e.pointerType && (!U || p()) && R(e);
              }),
              y
                  ? ((H.onPressUp = M
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && L && R(e);
                          }),
                    (H.onPress = M
                        ? B
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && L && R(e);
                          }))
                  : (H.onPress = (e) => {
                        M || (P && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || h()) && B(e)
                            : "keyboard" !== e.pointerType && L && R(e);
                    }))
            : ((H.onPressStart = (e) => {
                  (k.current = e.pointerType),
                      (G.current = x),
                      (V.current = M),
                      L && (("mouse" === e.pointerType && !M) || ("keyboard" === e.pointerType && (!w || p()))) && R(e);
              }),
              (H.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && U && h()) ||
                      ("mouse" === e.pointerType && V.current)) &&
                      (U ? B(e) : L && R(e));
              })),
        (v["data-collection"] = (0, r.EG)(n.collection)),
        (v["data-key"] = E),
        (H.preventFocusOnPress = A),
        A &&
            (H = (0, o.v)(H, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(E));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(E));
                },
            })),
        F)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            F[e] && (H[e] = (0, l.c)(H[e], F[e]));
    let { pressProps: Y, isPressed: W } = (0, d.d)(H),
        j = P
            ? (e) => {
                  "mouse" === k.current && (e.stopPropagation(), e.preventDefault(), B(e));
              }
            : void 0,
        { longPressProps: K } = (0, c.H)({
            isDisabled: !x,
            onLongPress(e) {
                "touch" === e.pointerType && (R(e), n.setSelectionBehavior("toggle"));
            },
        }),
        $ =
            "none" !== N && n.isLink(E)
                ? (e) => {
                      i.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, o.v)(
            v,
            L || M || (A && !T) ? Y : {},
            x ? K : {},
            {
                onDoubleClick: j,
                onDragStartCapture: (e) => {
                    "touch" === k.current && G.current && e.preventDefault();
                },
                onClick: $,
                id: t,
            },
            A ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: W,
        isSelected: n.isSelected(E),
        isFocused: n.isFocused && n.focusedKey === E,
        isDisabled: T,
        allowsSelection: L,
        hasAction: U,
    };
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function p() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
