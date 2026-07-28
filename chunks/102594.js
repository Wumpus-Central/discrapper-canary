"use strict";
n.d(t, { p: () => v });
var r = n(201887),
    i = n(356560),
    a = n(709157),
    o = n(760627),
    s = n(192734),
    l = n(389979),
    u = n(288371),
    c = n(404903),
    d = n(11079),
    f = n(745391),
    p = n(20853),
    h = n(113997),
    m = n(582128),
    g = n(831080);
function v(e) {
    let {
            id: t,
            selectionManager: n,
            key: v,
            ref: _,
            shouldSelectOnPressUp: w,
            shouldUseVirtualFocus: x,
            focus: E,
            isDisabled: S,
            onAction: k,
            allowsDifferentPressOrigin: T,
            linkBehavior: C = "action",
        } = e,
        P = (0, i.rd)();
    t = (0, a.Bi)(t);
    let A = (e) => {
        if ("keyboard" === e.pointerType && (0, r.N9)(e)) n.toggleSelection(v);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(v)) {
                if ("selection" === C && _.current) {
                    let t = n.getItemProps(v);
                    P.open(_.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === C || "none" === C) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(v) && !n.disallowEmptySelection
                    ? n.toggleSelection(v)
                    : n.replaceSelection(v)
                : e && e.shiftKey
                  ? n.extendSelection(v)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, o.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(v)
                    : n.replaceSelection(v);
        }
    };
    (0, m.useEffect)(() => {
        v === n.focusedKey &&
            n.isFocused &&
            (x
                ? (0, g.vX)(_.current)
                : E
                  ? E()
                  : document.activeElement !== _.current && _.current && (0, u.l)(_.current));
    }, [_, v, n.focusedKey, n.childFocusStrategy, n.isFocused, x]),
        (S = S || n.isDisabled(v));
    let M = {};
    x || S
        ? S &&
          (M.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (M = {
              tabIndex: v === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === _.current && n.setFocusedKey(v);
              },
          });
    let R = n.isLink(v) && "override" === C,
        I = k && "action" === e.UNSTABLE_itemBehavior,
        L = n.isLink(v) && "selection" !== C && "none" !== C,
        O = !S && n.canSelectItem(v) && !R && !I,
        D = (k || L) && !S,
        F = D && ("replace" === n.selectionBehavior ? !O : !O || n.isEmpty),
        N = D && O && "replace" === n.selectionBehavior,
        V = F || N,
        j = (0, m.useRef)(null),
        B = V && O,
        U = (0, m.useRef)(!1),
        K = (0, m.useRef)(!1),
        $ = n.getItemProps(v),
        z = (e) => {
            if (k) {
                var t;
                k(),
                    null == (t = _.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            L && _.current && P.open(_.current, e, $.href, $.routerOptions);
        },
        W = { ref: _ };
    if (
        (w
            ? ((W.onPressStart = (e) => {
                  (j.current = e.pointerType), (U.current = B), "keyboard" === e.pointerType && (!V || b()) && A(e);
              }),
              T
                  ? ((W.onPressUp = F
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && O && A(e);
                          }),
                    (W.onPress = F
                        ? z
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && O && A(e);
                          }))
                  : (W.onPress = (e) => {
                        F || (N && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || y()) && z(e)
                            : "keyboard" !== e.pointerType && O && A(e);
                    }))
            : ((W.onPressStart = (e) => {
                  (j.current = e.pointerType),
                      (U.current = B),
                      (K.current = F),
                      O && (("mouse" === e.pointerType && !F) || ("keyboard" === e.pointerType && (!D || b()))) && A(e);
              }),
              (W.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && V && y()) ||
                      ("mouse" === e.pointerType && K.current)) &&
                      (V ? z(e) : O && A(e));
              })),
        (M["data-collection"] = (0, r.EG)(n.collection)),
        (M["data-key"] = v),
        (W.preventFocusOnPress = x),
        x &&
            (W = (0, s.v)(W, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(v));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(v));
                },
            })),
        $)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            $[e] && (W[e] = (0, l.c)(W[e], $[e]));
    let { pressProps: G, isPressed: H } = (0, c.d)(W),
        q = N
            ? (e) => {
                  "mouse" === j.current && (e.stopPropagation(), e.preventDefault(), z(e));
              }
            : void 0,
        { longPressProps: Y } = (function (e) {
            let {
                    isDisabled: t,
                    onLongPressStart: n,
                    onLongPressEnd: r,
                    onLongPress: i,
                    threshold: a = 500,
                    accessibilityDescription: o,
                } = e,
                l = (0, m.useRef)(void 0),
                { addGlobalListener: u, removeGlobalListener: g } = (0, d.A)(),
                { pressProps: v } = (0, c.d)({
                    isDisabled: t,
                    onPressStart(e) {
                        if (
                            (e.continuePropagation(),
                            ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                (n && n({ ...e, type: "longpressstart" }),
                                (l.current = setTimeout(() => {
                                    e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                        (0, f.TW)(e.target).activeElement !== e.target && (0, p.e)(e.target),
                                        i && i({ ...e, type: "longpress" }),
                                        (l.current = void 0);
                                }, a)),
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
                                            g(e.target, "contextmenu", t);
                                        }, 30);
                                    },
                                    { once: !0 },
                                );
                        }
                    },
                    onPressEnd(e) {
                        l.current && clearTimeout(l.current),
                            r &&
                                ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                r({ ...e, type: "longpressend" });
                    },
                }),
                y = (0, h.I)(i && !t ? o : void 0);
            return { longPressProps: (0, s.v)(v, y) };
        })({
            isDisabled: !B,
            onLongPress(e) {
                "touch" === e.pointerType && (A(e), n.setSelectionBehavior("toggle"));
            },
        }),
        X =
            "none" !== C && n.isLink(v)
                ? (e) => {
                      i.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, s.v)(
            M,
            O || F || (x && !S) ? G : {},
            B ? Y : {},
            {
                onDoubleClick: q,
                onDragStartCapture: (e) => {
                    "touch" === j.current && U.current && e.preventDefault();
                },
                onClick: X,
                id: t,
            },
            x ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: H,
        isSelected: n.isSelected(v),
        isFocused: n.isFocused && n.focusedKey === v,
        isDisabled: S,
        allowsSelection: O,
        hasAction: V,
    };
}
function y() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function b() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
