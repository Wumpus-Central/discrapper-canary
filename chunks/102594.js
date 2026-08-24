"use strict";
r.d(t, { p: () => y });
var n = r(201887),
    o = r(356560),
    i = r(709157),
    a = r(760627),
    s = r(192734),
    l = r(389979),
    u = r(288371),
    c = r(404903),
    f = r(11079),
    p = r(745391),
    d = r(20853),
    h = r(113997),
    m = r(582128),
    v = r(831080);
function y(e) {
    let {
            id: t,
            selectionManager: r,
            key: y,
            ref: w,
            shouldSelectOnPressUp: _,
            shouldUseVirtualFocus: S,
            focus: x,
            isDisabled: E,
            onAction: k,
            allowsDifferentPressOrigin: C,
            linkBehavior: T = "action",
        } = e,
        M = (0, o.rd)();
    t = (0, i.Bi)(t);
    let P = (e) => {
        if ("keyboard" === e.pointerType && (0, n.N9)(e)) r.toggleSelection(y);
        else {
            if ("none" === r.selectionMode) return;
            if (r.isLink(y)) {
                if ("selection" === T && w.current) {
                    let t = r.getItemProps(y);
                    M.open(w.current, e, t.href, t.routerOptions), r.setSelectedKeys(r.selectedKeys);
                    return;
                } else if ("override" === T || "none" === T) return;
            }
            "single" === r.selectionMode
                ? r.isSelected(y) && !r.disallowEmptySelection
                    ? r.toggleSelection(y)
                    : r.replaceSelection(y)
                : e && e.shiftKey
                  ? r.extendSelection(y)
                  : "toggle" === r.selectionBehavior ||
                      (e && ((0, a.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? r.toggleSelection(y)
                    : r.replaceSelection(y);
        }
    };
    (0, m.useEffect)(() => {
        y === r.focusedKey &&
            r.isFocused &&
            (S
                ? (0, v.vX)(w.current)
                : x
                  ? x()
                  : document.activeElement !== w.current && w.current && (0, u.l)(w.current));
    }, [w, y, r.focusedKey, r.childFocusStrategy, r.isFocused, S]),
        (E = E || r.isDisabled(y));
    let A = {};
    S || E
        ? E &&
          (A.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (A = {
              tabIndex: y === r.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === w.current && r.setFocusedKey(y);
              },
          });
    let O = r.isLink(y) && "override" === T,
        I = k && "action" === e.UNSTABLE_itemBehavior,
        D = r.isLink(y) && "selection" !== T && "none" !== T,
        L = !E && r.canSelectItem(y) && !O && !I,
        R = (k || D) && !E,
        F = R && ("replace" === r.selectionBehavior ? !L : !L || r.isEmpty),
        N = R && L && "replace" === r.selectionBehavior,
        j = F || N,
        B = (0, m.useRef)(null),
        $ = j && L,
        K = (0, m.useRef)(!1),
        V = (0, m.useRef)(!1),
        U = r.getItemProps(y),
        z = (e) => {
            if (k) {
                var t;
                k(),
                    null == (t = w.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            D && w.current && M.open(w.current, e, U.href, U.routerOptions);
        },
        W = { ref: w };
    if (
        (_
            ? ((W.onPressStart = (e) => {
                  (B.current = e.pointerType), (K.current = $), "keyboard" === e.pointerType && (!j || b()) && P(e);
              }),
              C
                  ? ((W.onPressUp = F
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && L && P(e);
                          }),
                    (W.onPress = F
                        ? z
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && L && P(e);
                          }))
                  : (W.onPress = (e) => {
                        F || (N && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || g()) && z(e)
                            : "keyboard" !== e.pointerType && L && P(e);
                    }))
            : ((W.onPressStart = (e) => {
                  (B.current = e.pointerType),
                      (K.current = $),
                      (V.current = F),
                      L && (("mouse" === e.pointerType && !F) || ("keyboard" === e.pointerType && (!R || b()))) && P(e);
              }),
              (W.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && j && g()) ||
                      ("mouse" === e.pointerType && V.current)) &&
                      (j ? z(e) : L && P(e));
              })),
        (A["data-collection"] = (0, n.EG)(r.collection)),
        (A["data-key"] = y),
        (W.preventFocusOnPress = S),
        S &&
            (W = (0, s.v)(W, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (r.setFocused(!0), r.setFocusedKey(y));
                },
                onPress(e) {
                    "touch" === e.pointerType && (r.setFocused(!0), r.setFocusedKey(y));
                },
            })),
        U)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            U[e] && (W[e] = (0, l.c)(W[e], U[e]));
    let { pressProps: H, isPressed: G } = (0, c.d)(W),
        q = N
            ? (e) => {
                  "mouse" === B.current && (e.stopPropagation(), e.preventDefault(), z(e));
              }
            : void 0,
        { longPressProps: Y } = (function (e) {
            let {
                    isDisabled: t,
                    onLongPressStart: r,
                    onLongPressEnd: n,
                    onLongPress: o,
                    threshold: i = 500,
                    accessibilityDescription: a,
                } = e,
                l = (0, m.useRef)(void 0),
                { addGlobalListener: u, removeGlobalListener: v } = (0, f.A)(),
                { pressProps: y } = (0, c.d)({
                    isDisabled: t,
                    onPressStart(e) {
                        if (
                            (e.continuePropagation(),
                            ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                (r && r({ ...e, type: "longpressstart" }),
                                (l.current = setTimeout(() => {
                                    e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                        (0, p.TW)(e.target).activeElement !== e.target && (0, d.e)(e.target),
                                        o && o({ ...e, type: "longpress" }),
                                        (l.current = void 0);
                                }, i)),
                                "touch" === e.pointerType))
                        ) {
                            let t = (e) => {
                                e.preventDefault();
                            };
                            u(e.target, "contextmenu", t, { once: !0 }),
                                u(
                                    window,
                                    "pointerup",
                                    () => {
                                        setTimeout(() => {
                                            v(e.target, "contextmenu", t);
                                        }, 30);
                                    },
                                    { once: !0 },
                                );
                        }
                    },
                    onPressEnd(e) {
                        l.current && clearTimeout(l.current),
                            n &&
                                ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                n({ ...e, type: "longpressend" });
                    },
                }),
                g = (0, h.I)(o && !t ? a : void 0);
            return { longPressProps: (0, s.v)(y, g) };
        })({
            isDisabled: !$,
            onLongPress(e) {
                "touch" === e.pointerType && (P(e), r.setSelectionBehavior("toggle"));
            },
        }),
        J =
            "none" !== T && r.isLink(y)
                ? (e) => {
                      o.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, s.v)(
            A,
            L || F || (S && !E) ? H : {},
            $ ? Y : {},
            {
                onDoubleClick: q,
                onDragStartCapture: (e) => {
                    "touch" === B.current && K.current && e.preventDefault();
                },
                onClick: J,
                id: t,
            },
            S ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: G,
        isSelected: r.isSelected(y),
        isFocused: r.isFocused && r.focusedKey === y,
        isDisabled: E,
        allowsSelection: L,
        hasAction: j,
    };
}
function g() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function b() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
