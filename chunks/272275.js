r.d(t, { p: () => b });
var n = r(685485),
    i = r(494112),
    o = r(518206),
    a = r(485160),
    s = r(701769),
    l = r(503372),
    u = r(652664),
    c = r(871776),
    f = r(62998),
    d = r(845062),
    p = r(802649),
    h = r(862615),
    m = r(809297),
    v = r(23619),
    g = r(867085),
    y = r(582128);
function b(e) {
    let {
            id: t,
            selectionManager: r,
            key: b,
            ref: w,
            shouldSelectOnPressUp: _,
            shouldUseVirtualFocus: S,
            focus: E,
            isDisabled: x,
            onAction: C,
            allowsDifferentPressOrigin: k,
            linkBehavior: T = "action",
        } = e,
        M = (0, f.rd)();
    t = (0, p.Bi)(t);
    let P = (e) => {
        if ("keyboard" === e.pointerType && (0, a.N9)(e)) r.toggleSelection(b);
        else {
            if ("none" === r.selectionMode) return;
            if (r.isLink(b)) {
                if ("selection" === T && w.current) {
                    let t = r.getItemProps(b);
                    (M.open(w.current, e, t.href, t.routerOptions), r.setSelectedKeys(r.selectedKeys));
                    return;
                } else if ("override" === T || "none" === T) return;
            }
            "single" === r.selectionMode
                ? r.isSelected(b) && !r.disallowEmptySelection
                    ? r.toggleSelection(b)
                    : r.replaceSelection(b)
                : e && e.shiftKey
                  ? r.extendSelection(b)
                  : "toggle" === r.selectionBehavior ||
                      (e && ((0, s.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? r.toggleSelection(b)
                    : r.replaceSelection(b);
        }
    };
    ((0, y.useEffect)(() => {
        b === r.focusedKey &&
            r.isFocused &&
            (S ? (0, c.vX)(w.current) : E ? E() : (0, o.bq)() !== w.current && w.current && (0, i.l)(w.current));
    }, [w, b, r.focusedKey, r.childFocusStrategy, r.isFocused, S]),
        (x = x || r.isDisabled(b)));
    let A = {};
    (S || x
        ? x &&
          (A.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (A = {
              tabIndex: b === r.focusedKey ? 0 : -1,
              onFocus(e) {
                  (0, o.wt)(e) === w.current && r.setFocusedKey(b);
              },
          }),
        (0, y.useEffect)(() => {
            x && r.focusedKey === b && r.setFocusedKey(null);
        }, [r, x, b]));
    let I = r.isLink(b) && "override" === T,
        O = C && "action" === e.UNSTABLE_itemBehavior,
        R = r.isLink(b) && "selection" !== T && "none" !== T,
        L = !x && r.canSelectItem(b) && !I && !O,
        D = (C || R) && !x,
        F = D && ("replace" === r.selectionBehavior ? !L : !L || r.isEmpty),
        N = D && L && "replace" === r.selectionBehavior,
        j = F || N,
        B = (0, y.useRef)(null),
        U = j && L,
        $ = (0, y.useRef)(!1),
        V = (0, y.useRef)(!1),
        H = r.getItemProps(b),
        K = (e) => {
            (C && (C(), w.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }))),
                R && w.current && M.open(w.current, e, H.href, H.routerOptions));
        },
        z = { ref: w };
    _
        ? ((z.onPressStart = (e) => {
              ((B.current = e.pointerType),
                  ($.current = U),
                  "keyboard" !== e.pointerType || (j && " " !== e.key) || P(e));
          }),
          k
              ? ((z.onPressUp = F
                    ? void 0
                    : (e) => {
                          "mouse" === e.pointerType && L && P(e);
                      }),
                (z.onPress = F
                    ? K
                    : (e) => {
                          "keyboard" !== e.pointerType && "mouse" !== e.pointerType && L && P(e);
                      }))
              : (z.onPress = (e) => {
                    F || (N && "mouse" !== e.pointerType)
                        ? ("keyboard" !== e.pointerType || "Enter" === e.key) && K(e)
                        : "keyboard" !== e.pointerType && L && P(e);
                }))
        : ((z.onPressStart = (e) => {
              ((B.current = e.pointerType),
                  ($.current = U),
                  (V.current = F),
                  !L ||
                      (("mouse" !== e.pointerType || F) && ("keyboard" !== e.pointerType || (D && " " !== e.key))) ||
                      P(e));
          }),
          (z.onPress = (e) => {
              ("touch" === e.pointerType ||
                  "pen" === e.pointerType ||
                  "virtual" === e.pointerType ||
                  ("keyboard" === e.pointerType && j && "Enter" === e.key) ||
                  ("mouse" === e.pointerType && V.current)) &&
                  (j ? K(e) : L && P(e));
          }));
    let W = (0, a.EG)(r.collection);
    if (
        ((A["data-collection"] = W),
        (A["data-key"] = b),
        (z.preventFocusOnPress = S),
        S &&
            (z = (0, u.v)(z, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (r.setFocused(!0), r.setFocusedKey(b));
                },
                onPress(e) {
                    "touch" === e.pointerType && (r.setFocused(!0), r.setFocusedKey(b));
                },
            })),
        H)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            H[e] && (z[e] = (0, n.c)(z[e], H[e]));
    let { pressProps: G, isPressed: q } = (0, d.d)(z),
        Y = N
            ? (e) => {
                  "mouse" === B.current && (e.stopPropagation(), e.preventDefault(), K(e));
              }
            : void 0,
        { longPressProps: X } = (function (e) {
            let {
                    isDisabled: t,
                    pointerType: r,
                    onLongPressStart: n,
                    onLongPressEnd: i,
                    onLongPress: o,
                    threshold: a = 500,
                    accessibilityDescription: s,
                } = e,
                l = (0, y.useRef)(void 0),
                { addGlobalListener: c, removeAllGlobalListeners: f } = (0, g.A)(),
                p = (e) => (r ? e.pointerType === r : "mouse" === e.pointerType || "touch" === e.pointerType),
                { pressProps: b } = (0, d.d)({
                    isDisabled: t,
                    onPressStart(e) {
                        (e.continuePropagation(),
                            p(e) &&
                                (n && n({ ...e, type: "longpressstart" }),
                                (l.current = setTimeout(() => {
                                    (e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                        c(e.target, "click", (e) => e.preventDefault(), { once: !0 }),
                                        (0, m.TW)(e.target).activeElement !== e.target && (0, h.e)(e.target),
                                        o && o({ ...e, type: "longpress" }),
                                        (l.current = void 0));
                                }, a)),
                                "touch" === e.pointerType &&
                                    c(e.target, "contextmenu", (e) => e.preventDefault(), { once: !0 }),
                                c(
                                    (0, m.mD)(e.target),
                                    "pointerup",
                                    () => {
                                        setTimeout(() => {
                                            f();
                                        }, 100);
                                    },
                                    { once: !0 },
                                )));
                    },
                    onPressEnd(e) {
                        (l.current && clearTimeout(l.current), i && p(e) && i({ ...e, type: "longpressend" }));
                    },
                }),
                w = (0, v.I)(o && !t ? s : void 0);
            return { longPressProps: (0, u.v)(b, w) };
        })({
            isDisabled: !U,
            onLongPress(e) {
                "touch" === e.pointerType && (P(e), r.setSelectionBehavior("toggle"));
            },
        }),
        J =
            "none" !== T && r.isLink(b)
                ? (e) => {
                      f.Fe.isOpening || e.preventDefault();
                  }
                : void 0,
        Z = (0, u.v)(
            A,
            L || F || (S && !x) ? G : {},
            U ? X : {},
            {
                onDoubleClick: Y,
                onDragStartCapture: (e) => {
                    "touch" === B.current && $.current && e.preventDefault();
                },
                onClick: J,
                id: t,
            },
            S ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        Q = (e) => {
            let t = e;
            for (; t && t !== w.current;) {
                let e = t.getAttribute("data-collection");
                if (null != e) return e !== W;
                t = t.parentElement;
            }
            return (0, l.A)(e);
        },
        ee = Z.onPointerDown;
    Z.onPointerDown = (e) => {
        let t = (0, o.wt)(e);
        t && t !== w.current && Q(t) ? e.stopPropagation() : ee?.(e);
    };
    let et = Z.onMouseDown;
    return (
        (Z.onMouseDown = (e) => {
            let t = (0, o.wt)(e);
            t && t !== w.current && Q(t) ? e.stopPropagation() : et?.(e);
        }),
        {
            itemProps: Z,
            isPressed: q,
            isSelected: r.isSelected(b),
            isFocused: r.isFocused && r.focusedKey === b,
            isDisabled: x,
            allowsSelection: L,
            hasAction: j,
        }
    );
}
