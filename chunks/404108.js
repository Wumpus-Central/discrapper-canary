"use strict";
n.d(t, { p: () => p });
var r = n(869795),
    i = n(132716),
    a = n(723906),
    s = n(2799),
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
            ref: g,
            shouldSelectOnPressUp: E,
            shouldUseVirtualFocus: A,
            focus: I,
            isDisabled: T,
            onAction: y,
            allowsDifferentPressOrigin: S,
            linkBehavior: v = "action",
        } = e,
        C = (0, i.rd)();
    t = (0, a.Bi)(t);
    let b = (e) => {
        if ("keyboard" === e.pointerType && (0, r.N9)(e)) n.toggleSelection(p);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(p)) {
                if ("selection" === v && g.current) {
                    let t = n.getItemProps(p);
                    C.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === v || "none" === v) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(p) && !n.disallowEmptySelection
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p)
                : e && e.shiftKey
                  ? n.extendSelection(p)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, s.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p);
        }
    };
    (0, f.useEffect)(() => {
        p === n.focusedKey &&
            n.isFocused &&
            (A
                ? (0, _.vX)(g.current)
                : I
                  ? I()
                  : document.activeElement !== g.current && g.current && (0, u.l)(g.current));
    }, [g, p, n.focusedKey, n.childFocusStrategy, n.isFocused, A]),
        (T = T || n.isDisabled(p));
    let N = {};
    A || T
        ? T &&
          (N.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (N = {
              tabIndex: p === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === g.current && n.setFocusedKey(p);
              },
          });
    let R = n.isLink(p) && "override" === v,
        O = y && "action" === e.UNSTABLE_itemBehavior,
        D = n.isLink(p) && "selection" !== v && "none" !== v,
        L = !T && n.canSelectItem(p) && !R && !O,
        w = (y || D) && !T,
        x = w && ("replace" === n.selectionBehavior ? !L : !L || n.isEmpty),
        P = w && L && "replace" === n.selectionBehavior,
        M = x || P,
        k = (0, f.useRef)(null),
        U = M && L,
        G = (0, f.useRef)(!1),
        V = (0, f.useRef)(!1),
        F = n.getItemProps(p),
        B = (e) => {
            if (y) {
                var t;
                y(),
                    null == (t = g.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            D && g.current && C.open(g.current, e, F.href, F.routerOptions);
        },
        j = { ref: g };
    if (
        (E
            ? ((j.onPressStart = (e) => {
                  (k.current = e.pointerType), (G.current = U), "keyboard" === e.pointerType && (!M || m()) && b(e);
              }),
              S
                  ? ((j.onPressUp = x
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && L && b(e);
                          }),
                    (j.onPress = x
                        ? B
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && L && b(e);
                          }))
                  : (j.onPress = (e) => {
                        x || (P && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || h()) && B(e)
                            : "keyboard" !== e.pointerType && L && b(e);
                    }))
            : ((j.onPressStart = (e) => {
                  (k.current = e.pointerType),
                      (G.current = U),
                      (V.current = x),
                      L && (("mouse" === e.pointerType && !x) || ("keyboard" === e.pointerType && (!w || m()))) && b(e);
              }),
              (j.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && M && h()) ||
                      ("mouse" === e.pointerType && V.current)) &&
                      (M ? B(e) : L && b(e));
              })),
        (N["data-collection"] = (0, r.EG)(n.collection)),
        (N["data-key"] = p),
        (j.preventFocusOnPress = A),
        A &&
            (j = (0, o.v)(j, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
            })),
        F)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            F[e] && (j[e] = (0, l.c)(j[e], F[e]));
    let { pressProps: H, isPressed: Y } = (0, c.d)(j),
        W = P
            ? (e) => {
                  "mouse" === k.current && (e.stopPropagation(), e.preventDefault(), B(e));
              }
            : void 0,
        { longPressProps: K } = (0, d.H)({
            isDisabled: !U,
            onLongPress(e) {
                "touch" === e.pointerType && (b(e), n.setSelectionBehavior("toggle"));
            },
        }),
        z = (e) => {
            "touch" === k.current && G.current && e.preventDefault();
        },
        $ =
            "none" !== v && n.isLink(p)
                ? (e) => {
                      i.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, o.v)(
            N,
            L || x || (A && !T) ? H : {},
            U ? K : {},
            { onDoubleClick: W, onDragStartCapture: z, onClick: $, id: t },
            A ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: Y,
        isSelected: n.isSelected(p),
        isFocused: n.isFocused && n.focusedKey === p,
        isDisabled: T,
        allowsSelection: L,
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
