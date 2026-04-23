"use strict";
n.d(t, { p: () => p });
var r = n(869795),
    i = n(132716),
    s = n(723906),
    a = n(2799),
    o = n(803082),
    l = n(260431),
    u = n(805447),
    c = n(8321),
    d = n(854499),
    _ = n(862836),
    f = n(64700);
function p(e) {
    let {
            id: t,
            selectionManager: n,
            key: p,
            ref: m,
            shouldSelectOnPressUp: g,
            shouldUseVirtualFocus: A,
            focus: I,
            isDisabled: T,
            onAction: S,
            allowsDifferentPressOrigin: y,
            linkBehavior: N = "action",
        } = e,
        v = (0, i.rd)();
    t = (0, s.Bi)(t);
    let C = (e) => {
        if ("keyboard" === e.pointerType && (0, r.N9)(e)) n.toggleSelection(p);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(p)) {
                if ("selection" === N && m.current) {
                    let t = n.getItemProps(p);
                    v.open(m.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === N || "none" === N) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(p) && !n.disallowEmptySelection
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p)
                : e && e.shiftKey
                  ? n.extendSelection(p)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, a.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p);
        }
    };
    (0, f.useEffect)(() => {
        p === n.focusedKey &&
            n.isFocused &&
            (A
                ? (0, _.vX)(m.current)
                : I
                  ? I()
                  : document.activeElement !== m.current && m.current && (0, u.l)(m.current));
    }, [m, p, n.focusedKey, n.childFocusStrategy, n.isFocused, A]),
        (T = T || n.isDisabled(p));
    let O = {};
    A || T
        ? T &&
          (O.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (O = {
              tabIndex: p === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === m.current && n.setFocusedKey(p);
              },
          });
    let R = n.isLink(p) && "override" === N,
        b = S && "action" === e.UNSTABLE_itemBehavior,
        D = n.isLink(p) && "selection" !== N && "none" !== N,
        L = !T && n.canSelectItem(p) && !R && !b,
        w = (S || D) && !T,
        M = w && ("replace" === n.selectionBehavior ? !L : !L || n.isEmpty),
        P = w && L && "replace" === n.selectionBehavior,
        x = M || P,
        k = (0, f.useRef)(null),
        U = x && L,
        G = (0, f.useRef)(!1),
        F = (0, f.useRef)(!1),
        V = n.getItemProps(p),
        B = (e) => {
            if (S) {
                var t;
                S(),
                    null == (t = m.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            D && m.current && v.open(m.current, e, V.href, V.routerOptions);
        },
        H = { ref: m };
    if (
        (g
            ? ((H.onPressStart = (e) => {
                  (k.current = e.pointerType), (G.current = U), "keyboard" === e.pointerType && (!x || E()) && C(e);
              }),
              y
                  ? ((H.onPressUp = M
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && L && C(e);
                          }),
                    (H.onPress = M
                        ? B
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && L && C(e);
                          }))
                  : (H.onPress = (e) => {
                        M || (P && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || h()) && B(e)
                            : "keyboard" !== e.pointerType && L && C(e);
                    }))
            : ((H.onPressStart = (e) => {
                  (k.current = e.pointerType),
                      (G.current = U),
                      (F.current = M),
                      L && (("mouse" === e.pointerType && !M) || ("keyboard" === e.pointerType && (!w || E()))) && C(e);
              }),
              (H.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && x && h()) ||
                      ("mouse" === e.pointerType && F.current)) &&
                      (x ? B(e) : L && C(e));
              })),
        (O["data-collection"] = (0, r.EG)(n.collection)),
        (O["data-key"] = p),
        (H.preventFocusOnPress = A),
        A &&
            (H = (0, o.v)(H, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
            })),
        V)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            V[e] && (H[e] = (0, l.c)(H[e], V[e]));
    let { pressProps: j, isPressed: Y } = (0, c.d)(H),
        W = P
            ? (e) => {
                  "mouse" === k.current && (e.stopPropagation(), e.preventDefault(), B(e));
              }
            : void 0,
        { longPressProps: K } = (0, d.H)({
            isDisabled: !U,
            onLongPress(e) {
                "touch" === e.pointerType && (C(e), n.setSelectionBehavior("toggle"));
            },
        }),
        $ =
            "none" !== N && n.isLink(p)
                ? (e) => {
                      i.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, o.v)(
            O,
            L || M || (A && !T) ? j : {},
            U ? K : {},
            {
                onDoubleClick: W,
                onDragStartCapture: (e) => {
                    "touch" === k.current && G.current && e.preventDefault();
                },
                onClick: $,
                id: t,
            },
            A ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: Y,
        isSelected: n.isSelected(p),
        isFocused: n.isFocused && n.focusedKey === p,
        isDisabled: T,
        allowsSelection: L,
        hasAction: x,
    };
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function E() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
