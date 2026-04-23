"use strict";
r.d(t, { p: () => g });
var n = r(869795),
    a = r(132716),
    s = r(985620),
    i = r(2799),
    o = r(318473),
    l = r(260431),
    u = r(805447),
    c = r(775133),
    d = r(114099),
    f = r(297987),
    p = r(401705),
    h = r(807177),
    m = r(64700),
    _ = r(862836);
function g(e) {
    let {
            id: t,
            selectionManager: r,
            key: g,
            ref: y,
            shouldSelectOnPressUp: E,
            shouldUseVirtualFocus: S,
            focus: T,
            isDisabled: x,
            onAction: w,
            allowsDifferentPressOrigin: C,
            linkBehavior: D = "action",
        } = e,
        O = (0, a.rd)();
    t = (0, s.Bi)(t);
    let A = (e) => {
        if ("keyboard" === e.pointerType && (0, n.N9)(e)) r.toggleSelection(g);
        else {
            if ("none" === r.selectionMode) return;
            if (r.isLink(g)) {
                if ("selection" === D && y.current) {
                    let t = r.getItemProps(g);
                    O.open(y.current, e, t.href, t.routerOptions), r.setSelectedKeys(r.selectedKeys);
                    return;
                } else if ("override" === D || "none" === D) return;
            }
            "single" === r.selectionMode
                ? r.isSelected(g) && !r.disallowEmptySelection
                    ? r.toggleSelection(g)
                    : r.replaceSelection(g)
                : e && e.shiftKey
                  ? r.extendSelection(g)
                  : "toggle" === r.selectionBehavior ||
                      (e && ((0, i.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? r.toggleSelection(g)
                    : r.replaceSelection(g);
        }
    };
    (0, m.useEffect)(() => {
        g === r.focusedKey &&
            r.isFocused &&
            (S
                ? (0, _.vX)(y.current)
                : T
                  ? T()
                  : document.activeElement !== y.current && y.current && (0, u.l)(y.current));
    }, [y, g, r.focusedKey, r.childFocusStrategy, r.isFocused, S]),
        (x = x || r.isDisabled(g));
    let M = {};
    S || x
        ? x &&
          (M.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (M = {
              tabIndex: g === r.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === y.current && r.setFocusedKey(g);
              },
          });
    let R = r.isLink(g) && "override" === D,
        k = w && "action" === e.UNSTABLE_itemBehavior,
        N = r.isLink(g) && "selection" !== D && "none" !== D,
        L = !x && r.canSelectItem(g) && !R && !k,
        I = (w || N) && !x,
        P = I && ("replace" === r.selectionBehavior ? !L : !L || r.isEmpty),
        F = I && L && "replace" === r.selectionBehavior,
        B = P || F,
        Y = (0, m.useRef)(null),
        U = B && L,
        j = (0, m.useRef)(!1),
        V = (0, m.useRef)(!1),
        H = r.getItemProps(g),
        G = (e) => {
            if (w) {
                var t;
                w(),
                    null == (t = y.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            N && y.current && O.open(y.current, e, H.href, H.routerOptions);
        },
        z = { ref: y };
    if (
        (E
            ? ((z.onPressStart = (e) => {
                  (Y.current = e.pointerType), (j.current = U), "keyboard" === e.pointerType && (!B || b()) && A(e);
              }),
              C
                  ? ((z.onPressUp = P
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && L && A(e);
                          }),
                    (z.onPress = P
                        ? G
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && L && A(e);
                          }))
                  : (z.onPress = (e) => {
                        P || (F && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || v()) && G(e)
                            : "keyboard" !== e.pointerType && L && A(e);
                    }))
            : ((z.onPressStart = (e) => {
                  (Y.current = e.pointerType),
                      (j.current = U),
                      (V.current = P),
                      L && (("mouse" === e.pointerType && !P) || ("keyboard" === e.pointerType && (!I || b()))) && A(e);
              }),
              (z.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && B && v()) ||
                      ("mouse" === e.pointerType && V.current)) &&
                      (B ? G(e) : L && A(e));
              })),
        (M["data-collection"] = (0, n.EG)(r.collection)),
        (M["data-key"] = g),
        (z.preventFocusOnPress = S),
        S &&
            (z = (0, o.v)(z, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (r.setFocused(!0), r.setFocusedKey(g));
                },
                onPress(e) {
                    "touch" === e.pointerType && (r.setFocused(!0), r.setFocusedKey(g));
                },
            })),
        H)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            H[e] && (z[e] = (0, l.c)(z[e], H[e]));
    let { pressProps: W, isPressed: q } = (0, c.d)(z),
        $ = F
            ? (e) => {
                  "mouse" === Y.current && (e.stopPropagation(), e.preventDefault(), G(e));
              }
            : void 0,
        { longPressProps: K } = (function (e) {
            let {
                    isDisabled: t,
                    onLongPressStart: r,
                    onLongPressEnd: n,
                    onLongPress: a,
                    threshold: s = 500,
                    accessibilityDescription: i,
                } = e,
                l = (0, m.useRef)(void 0),
                { addGlobalListener: u, removeGlobalListener: _ } = (0, d.A)(),
                { pressProps: g } = (0, c.d)({
                    isDisabled: t,
                    onPressStart(e) {
                        if (
                            (e.continuePropagation(),
                            ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                (r && r({ ...e, type: "longpressstart" }),
                                (l.current = setTimeout(() => {
                                    e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                        (0, f.TW)(e.target).activeElement !== e.target && (0, p.e)(e.target),
                                        a && a({ ...e, type: "longpress" }),
                                        (l.current = void 0);
                                }, s)),
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
                                            _(e.target, "contextmenu", t);
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
                v = (0, h.I)(a && !t ? i : void 0);
            return { longPressProps: (0, o.v)(g, v) };
        })({
            isDisabled: !U,
            onLongPress(e) {
                "touch" === e.pointerType && (A(e), r.setSelectionBehavior("toggle"));
            },
        }),
        Q =
            "none" !== D && r.isLink(g)
                ? (e) => {
                      a.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, o.v)(
            M,
            L || P || (S && !x) ? W : {},
            U ? K : {},
            {
                onDoubleClick: $,
                onDragStartCapture: (e) => {
                    "touch" === Y.current && j.current && e.preventDefault();
                },
                onClick: Q,
                id: t,
            },
            S ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: q,
        isSelected: r.isSelected(g),
        isFocused: r.isFocused && r.focusedKey === g,
        isDisabled: x,
        allowsSelection: L,
        hasAction: B,
    };
}
function v() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function b() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
