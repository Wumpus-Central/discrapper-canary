n.d(t, { y: () => A });
var r = n(869795),
    i = n(292841),
    a = n(132716),
    s = n(2799),
    o = n(401705),
    l = n(248215),
    c = n(400606),
    u = n(827211),
    d = n(959462),
    f = n(241827),
    p = n(862535),
    _ = n(803082),
    h = n(13163),
    m = n(862836),
    g = n(340287),
    E = n(64700),
    b = n(885714),
    y = n(805447),
    O = n(853590);
function A(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: A,
            ref: v,
            autoFocus: S = !1,
            shouldFocusWrap: I = !1,
            disallowEmptySelection: T = !1,
            disallowSelectAll: C = !1,
            escapeKeyBehavior: N = "clearSelection",
            selectOnFocus: R = "replace" === n.selectionBehavior,
            disallowTypeAhead: w = !1,
            shouldUseVirtualFocus: P,
            allowsTabNavigation: D = !1,
            isVirtualized: x,
            scrollRef: L = v,
            linkBehavior: j = "action",
        } = e,
        { direction: M } = (0, O.Y)(),
        k = (0, a.rd)(),
        U = (e) => {
            var t, i, a, l, c, u, d, f, p, _, m, E, b;
            if (
                (e.altKey && "Tab" === e.key && e.preventDefault(),
                !(null == (t = v.current) ? void 0 : t.contains(e.target)))
            )
                return;
            let y = (t, i) => {
                if (null != t) {
                    if (n.isLink(t) && "selection" === j && R && !(0, r.N9)(e)) {
                        (0, g.flushSync)(() => {
                            n.setFocusedKey(t, i);
                        });
                        let a = (0, r.au)(v, t),
                            s = n.getItemProps(t);
                        a && k.open(a, e, s.href, s.routerOptions);
                        return;
                    }
                    n.setFocusedKey(t, i),
                        (n.isLink(t) && "override" === j) ||
                            (e.shiftKey && "multiple" === n.selectionMode
                                ? n.extendSelection(t)
                                : R && !(0, r.N9)(e) && n.replaceSelection(t));
                }
            };
            switch (e.key) {
                case "ArrowDown":
                    if (A.getKeyBelow) {
                        let t =
                            null != n.focusedKey
                                ? null == (i = A.getKeyBelow)
                                    ? void 0
                                    : i.call(A, n.focusedKey)
                                : null == (a = A.getFirstKey)
                                  ? void 0
                                  : a.call(A);
                        null == t && I && (t = null == (l = A.getFirstKey) ? void 0 : l.call(A, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "ArrowUp":
                    if (A.getKeyAbove) {
                        let t =
                            null != n.focusedKey
                                ? null == (c = A.getKeyAbove)
                                    ? void 0
                                    : c.call(A, n.focusedKey)
                                : null == (u = A.getLastKey)
                                  ? void 0
                                  : u.call(A);
                        null == t && I && (t = null == (d = A.getLastKey) ? void 0 : d.call(A, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "ArrowLeft":
                    if (A.getKeyLeftOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (f = A.getKeyLeftOf)
                                    ? void 0
                                    : f.call(A, n.focusedKey)
                                : null;
                        null == t &&
                            I &&
                            (t =
                                "rtl" === M
                                    ? null == (p = A.getFirstKey)
                                        ? void 0
                                        : p.call(A, n.focusedKey)
                                    : null == (_ = A.getLastKey)
                                      ? void 0
                                      : _.call(A, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t, "rtl" === M ? "first" : "last"));
                    }
                    break;
                case "ArrowRight":
                    if (A.getKeyRightOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (m = A.getKeyRightOf)
                                    ? void 0
                                    : m.call(A, n.focusedKey)
                                : null;
                        null == t &&
                            I &&
                            (t =
                                "rtl" === M
                                    ? null == (E = A.getLastKey)
                                        ? void 0
                                        : E.call(A, n.focusedKey)
                                    : null == (b = A.getFirstKey)
                                      ? void 0
                                      : b.call(A, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t, "rtl" === M ? "last" : "first"));
                    }
                    break;
                case "Home":
                    if (A.getFirstKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = A.getFirstKey(n.focusedKey, (0, s.B)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : R && n.replaceSelection(t));
                    }
                    break;
                case "End":
                    if (A.getLastKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = A.getLastKey(n.focusedKey, (0, s.B)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : R && n.replaceSelection(t));
                    }
                    break;
                case "PageDown":
                    if (A.getKeyPageBelow && null != n.focusedKey) {
                        let t = A.getKeyPageBelow(n.focusedKey);
                        null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "PageUp":
                    if (A.getKeyPageAbove && null != n.focusedKey) {
                        let t = A.getKeyPageAbove(n.focusedKey);
                        null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "a":
                    (0, s.B)(e) && "multiple" === n.selectionMode && !0 !== C && (e.preventDefault(), n.selectAll());
                    break;
                case "Escape":
                    "clearSelection" !== N ||
                        T ||
                        0 === n.selectedKeys.size ||
                        (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                    break;
                case "Tab":
                    if (!D)
                        if (e.shiftKey) v.current.focus();
                        else {
                            let e,
                                t,
                                n = (0, h.N$)(v.current, { tabbable: !0 });
                            do (t = n.lastChild()) && (e = t);
                            while (t);
                            e && !e.contains(document.activeElement) && (0, o.e)(e);
                        }
            }
        },
        G = (0, E.useRef)({
            top: 0,
            left: 0,
        });
    (0, l._)(
        L,
        "scroll",
        x
            ? void 0
            : () => {
                  var e, t, n, r;
                  G.current = {
                      top: null != (n = null == (e = L.current) ? void 0 : e.scrollTop) ? n : 0,
                      left: null != (r = null == (t = L.current) ? void 0 : t.scrollLeft) ? r : 0,
                  };
              },
    );
    let V = (e) => {
            if (n.isFocused) {
                e.currentTarget.contains(e.target) || n.setFocused(!1);
                return;
            }
            if (e.currentTarget.contains(e.target)) {
                if ((n.setFocused(!0), null == n.focusedKey)) {
                    var t, i, a, s;
                    let r = (e) => {
                            null != e && (n.setFocusedKey(e), R && !n.isSelected(e) && n.replaceSelection(e));
                        },
                        o = e.relatedTarget;
                    o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING
                        ? r(null != (a = n.lastSelectedKey) ? a : null == (t = A.getLastKey) ? void 0 : t.call(A))
                        : r(null != (s = n.firstSelectedKey) ? s : null == (i = A.getFirstKey) ? void 0 : i.call(A));
                } else
                    !x && L.current && ((L.current.scrollTop = G.current.top), (L.current.scrollLeft = G.current.left));
                if (null != n.focusedKey && L.current) {
                    let e = (0, r.au)(v, n.focusedKey);
                    e instanceof HTMLElement &&
                        (e.contains(document.activeElement) || P || (0, o.e)(e),
                        "keyboard" === (0, b.ME)() && (0, c.o)(e, { containingElement: v.current }));
                }
            }
        },
        F = (e) => {
            e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
        },
        B = (0, E.useRef)(!1);
    (0, l._)(
        v,
        u.C,
        P
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (B.current = !0);
              }
            : void 0,
    );
    let H = (0, d.J)(() => {
        var e, t;
        let r = null != (t = null == (e = A.getFirstKey) ? void 0 : e.call(A)) ? t : null;
        if (null == r) {
            let e = (0, f.bq)();
            (0, m.vX)(v.current), (0, m.Ig)(e, null), n.collection.size > 0 && (B.current = !1);
        } else n.setFocusedKey(r), (B.current = !1);
    });
    (0, p.K)(() => {
        B.current && H();
    }, [n.collection, H]);
    let Y = (0, d.J)(() => {
        n.collection.size > 0 && (B.current = !1);
    });
    (0, p.K)(() => {
        Y();
    }, [n.focusedKey, Y]),
        (0, l._)(
            v,
            u.m,
            P
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let W = (0, E.useRef)(S),
        K = (0, E.useRef)(!1);
    (0, E.useEffect)(() => {
        if (W.current) {
            var e, t, r, i;
            let a = null;
            "first" === S && (a = null != (r = null == (e = A.getFirstKey) ? void 0 : e.call(A)) ? r : null),
                "last" === S && (a = null != (i = null == (t = A.getLastKey) ? void 0 : t.call(A)) ? i : null);
            let s = n.selectedKeys;
            if (s.size) {
                for (let e of s)
                    if (n.canSelectItem(e)) {
                        a = e;
                        break;
                    }
            }
            n.setFocused(!0),
                n.setFocusedKey(a),
                null == a && !P && v.current && (0, y.l)(v.current),
                n.collection.size > 0 && ((W.current = !1), (K.current = !0));
        }
    });
    let z = (0, E.useRef)(n.focusedKey),
        q = (0, E.useRef)(null);
    (0, E.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== z.current || K.current) &&
            L.current &&
            v.current
        ) {
            let e = (0, b.ME)(),
                t = (0, r.au)(v, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || K.current) &&
                (q.current && cancelAnimationFrame(q.current),
                (q.current = requestAnimationFrame(() => {
                    L.current &&
                        ((0, c.R)(L.current, t), "virtual" !== e && (0, c.o)(t, { containingElement: v.current }));
                })));
        }
        !P && n.isFocused && null == n.focusedKey && null != z.current && v.current && (0, y.l)(v.current),
            (z.current = n.focusedKey),
            (K.current = !1);
    }),
        (0, E.useEffect)(
            () => () => {
                q.current && cancelAnimationFrame(q.current);
            },
            [],
        ),
        (0, l._)(v, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let X = {
            onKeyDown: U,
            onFocus: V,
            onBlur: F,
            onMouseDown(e) {
                L.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: Z } = (0, i.I)({
            keyboardDelegate: A,
            selectionManager: n,
        });
    w || (X = (0, _.v)(Z, X)), P || (t = null == n.focusedKey ? 0 : -1);
    let Q = (0, r.j5)(n.collection);
    return {
        collectionProps: (0, _.v)(X, {
            tabIndex: t,
            "data-collection": Q,
        }),
    };
}
