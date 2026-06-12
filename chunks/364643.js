"use strict";
n.d(t, { p: () => m });
var i = n(869795),
    r = n(132716),
    s = n(985620),
    a = n(2799),
    o = n(318473),
    l = n(260431),
    u = n(805447),
    c = n(775133),
    d = n(114099),
    _ = n(297987),
    h = n(401705),
    f = n(807177),
    p = n(64700),
    E = n(862836);
function m(e) {
    let {
            id: t,
            selectionManager: n,
            key: m,
            ref: I,
            shouldSelectOnPressUp: T,
            shouldUseVirtualFocus: S,
            focus: y,
            isDisabled: N,
            onAction: v,
            allowsDifferentPressOrigin: C,
            linkBehavior: R = "action",
        } = e,
        O = (0, r.rd)();
    t = (0, s.Bi)(t);
    let b = (e) => {
        if ("keyboard" === e.pointerType && (0, i.N9)(e)) n.toggleSelection(m);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(m)) {
                if ("selection" === R && I.current) {
                    let t = n.getItemProps(m);
                    O.open(I.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === R || "none" === R) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(m) && !n.disallowEmptySelection
                    ? n.toggleSelection(m)
                    : n.replaceSelection(m)
                : e && e.shiftKey
                  ? n.extendSelection(m)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, a.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(m)
                    : n.replaceSelection(m);
        }
    };
    (0, p.useEffect)(() => {
        m === n.focusedKey &&
            n.isFocused &&
            (S
                ? (0, E.vX)(I.current)
                : y
                  ? y()
                  : document.activeElement !== I.current && I.current && (0, u.l)(I.current));
    }, [I, m, n.focusedKey, n.childFocusStrategy, n.isFocused, S]),
        (N = N || n.isDisabled(m));
    let D = {};
    S || N
        ? N &&
          (D.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (D = {
              tabIndex: m === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === I.current && n.setFocusedKey(m);
              },
          });
    let L = n.isLink(m) && "override" === R,
        w = v && "action" === e.UNSTABLE_itemBehavior,
        M = n.isLink(m) && "selection" !== R && "none" !== R,
        P = !N && n.canSelectItem(m) && !L && !w,
        x = (v || M) && !N,
        k = x && ("replace" === n.selectionBehavior ? !P : !P || n.isEmpty),
        U = x && P && "replace" === n.selectionBehavior,
        G = k || U,
        F = (0, p.useRef)(null),
        V = G && P,
        B = (0, p.useRef)(!1),
        H = (0, p.useRef)(!1),
        j = n.getItemProps(m),
        Y = (e) => {
            if (v) {
                var t;
                v(),
                    null == (t = I.current) ||
                        t.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }));
            }
            M && I.current && O.open(I.current, e, j.href, j.routerOptions);
        },
        W = { ref: I };
    if (
        (T
            ? ((W.onPressStart = (e) => {
                  (F.current = e.pointerType), (B.current = V), "keyboard" === e.pointerType && (!G || A()) && b(e);
              }),
              C
                  ? ((W.onPressUp = k
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && P && b(e);
                          }),
                    (W.onPress = k
                        ? Y
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && P && b(e);
                          }))
                  : (W.onPress = (e) => {
                        k || (U && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || g()) && Y(e)
                            : "keyboard" !== e.pointerType && P && b(e);
                    }))
            : ((W.onPressStart = (e) => {
                  (F.current = e.pointerType),
                      (B.current = V),
                      (H.current = k),
                      P && (("mouse" === e.pointerType && !k) || ("keyboard" === e.pointerType && (!x || A()))) && b(e);
              }),
              (W.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && G && g()) ||
                      ("mouse" === e.pointerType && H.current)) &&
                      (G ? Y(e) : P && b(e));
              })),
        (D["data-collection"] = (0, i.EG)(n.collection)),
        (D["data-key"] = m),
        (W.preventFocusOnPress = S),
        S &&
            (W = (0, o.v)(W, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(m));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(m));
                },
            })),
        j)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            j[e] && (W[e] = (0, l.c)(W[e], j[e]));
    let { pressProps: K, isPressed: $ } = (0, c.d)(W),
        z = U
            ? (e) => {
                  "mouse" === F.current && (e.stopPropagation(), e.preventDefault(), Y(e));
              }
            : void 0,
        { longPressProps: q } = (function (e) {
            let {
                    isDisabled: t,
                    onLongPressStart: n,
                    onLongPressEnd: i,
                    onLongPress: r,
                    threshold: s = 500,
                    accessibilityDescription: a,
                } = e,
                l = (0, p.useRef)(void 0),
                { addGlobalListener: u, removeGlobalListener: E } = (0, d.A)(),
                { pressProps: m } = (0, c.d)({
                    isDisabled: t,
                    onPressStart(e) {
                        if (
                            (e.continuePropagation(),
                            ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                (n && n({ ...e, type: "longpressstart" }),
                                (l.current = setTimeout(() => {
                                    e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                        (0, _.TW)(e.target).activeElement !== e.target && (0, h.e)(e.target),
                                        r && r({ ...e, type: "longpress" }),
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
                                            E(e.target, "contextmenu", t);
                                        }, 30);
                                    },
                                    { once: !0 },
                                );
                        }
                    },
                    onPressEnd(e) {
                        l.current && clearTimeout(l.current),
                            i &&
                                ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                                i({ ...e, type: "longpressend" });
                    },
                }),
                g = (0, f.I)(r && !t ? a : void 0);
            return { longPressProps: (0, o.v)(m, g) };
        })({
            isDisabled: !V,
            onLongPress(e) {
                "touch" === e.pointerType && (b(e), n.setSelectionBehavior("toggle"));
            },
        }),
        X =
            "none" !== R && n.isLink(m)
                ? (e) => {
                      r.Fe.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, o.v)(
            D,
            P || k || (S && !N) ? K : {},
            V ? q : {},
            {
                onDoubleClick: z,
                onDragStartCapture: (e) => {
                    "touch" === F.current && B.current && e.preventDefault();
                },
                onClick: X,
                id: t,
            },
            S ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: $,
        isSelected: n.isSelected(m),
        isFocused: n.isFocused && n.focusedKey === m,
        isDisabled: N,
        allowsSelection: P,
        hasAction: G,
    };
}
function g() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function A() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
