"use strict";
n.d(t, { y: () => y });
var r = n(869795),
    i = n(292841),
    a = n(132716),
    s = n(2799),
    o = n(401705),
    l = n(248215),
    u = n(400606),
    c = n(827211),
    d = n(959462),
    _ = n(241827),
    f = n(862535),
    p = n(803082),
    h = n(13163),
    m = n(862836),
    g = n(340287),
    E = n(64700),
    A = n(885714),
    I = n(805447),
    T = n(853590);
function y(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: y,
            ref: S,
            autoFocus: v = !1,
            shouldFocusWrap: C = !1,
            disallowEmptySelection: b = !1,
            disallowSelectAll: N = !1,
            escapeKeyBehavior: R = "clearSelection",
            selectOnFocus: O = "replace" === n.selectionBehavior,
            disallowTypeAhead: D = !1,
            shouldUseVirtualFocus: L,
            allowsTabNavigation: w = !1,
            isVirtualized: x,
            scrollRef: P = S,
            linkBehavior: M = "action",
        } = e,
        { direction: k } = (0, T.Y)(),
        U = (0, a.rd)(),
        G = (e) => {
            var t, i, a, l, u, c, d, _, f, p, m, E, A;
            if (
                (e.altKey && "Tab" === e.key && e.preventDefault(),
                !(null == (t = S.current) ? void 0 : t.contains(e.target)))
            )
                return;
            let I = (t, i) => {
                if (null != t) {
                    if (n.isLink(t) && "selection" === M && O && !(0, r.N9)(e)) {
                        (0, g.flushSync)(() => {
                            n.setFocusedKey(t, i);
                        });
                        let a = (0, r.au)(S, t),
                            s = n.getItemProps(t);
                        a && U.open(a, e, s.href, s.routerOptions);
                        return;
                    }
                    n.setFocusedKey(t, i),
                        (n.isLink(t) && "override" === M) ||
                            (e.shiftKey && "multiple" === n.selectionMode
                                ? n.extendSelection(t)
                                : O && !(0, r.N9)(e) && n.replaceSelection(t));
                }
            };
            switch (e.key) {
                case "ArrowDown":
                    if (y.getKeyBelow) {
                        let t =
                            null != n.focusedKey
                                ? null == (i = y.getKeyBelow)
                                    ? void 0
                                    : i.call(y, n.focusedKey)
                                : null == (a = y.getFirstKey)
                                  ? void 0
                                  : a.call(y);
                        null == t && C && (t = null == (l = y.getFirstKey) ? void 0 : l.call(y, n.focusedKey)),
                            null != t && (e.preventDefault(), I(t));
                    }
                    break;
                case "ArrowUp":
                    if (y.getKeyAbove) {
                        let t =
                            null != n.focusedKey
                                ? null == (u = y.getKeyAbove)
                                    ? void 0
                                    : u.call(y, n.focusedKey)
                                : null == (c = y.getLastKey)
                                  ? void 0
                                  : c.call(y);
                        null == t && C && (t = null == (d = y.getLastKey) ? void 0 : d.call(y, n.focusedKey)),
                            null != t && (e.preventDefault(), I(t));
                    }
                    break;
                case "ArrowLeft":
                    if (y.getKeyLeftOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (_ = y.getKeyLeftOf)
                                    ? void 0
                                    : _.call(y, n.focusedKey)
                                : null;
                        null == t &&
                            C &&
                            (t =
                                "rtl" === k
                                    ? null == (f = y.getFirstKey)
                                        ? void 0
                                        : f.call(y, n.focusedKey)
                                    : null == (p = y.getLastKey)
                                      ? void 0
                                      : p.call(y, n.focusedKey)),
                            null != t && (e.preventDefault(), I(t, "rtl" === k ? "first" : "last"));
                    }
                    break;
                case "ArrowRight":
                    if (y.getKeyRightOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (m = y.getKeyRightOf)
                                    ? void 0
                                    : m.call(y, n.focusedKey)
                                : null;
                        null == t &&
                            C &&
                            (t =
                                "rtl" === k
                                    ? null == (E = y.getLastKey)
                                        ? void 0
                                        : E.call(y, n.focusedKey)
                                    : null == (A = y.getFirstKey)
                                      ? void 0
                                      : A.call(y, n.focusedKey)),
                            null != t && (e.preventDefault(), I(t, "rtl" === k ? "last" : "first"));
                    }
                    break;
                case "Home":
                    if (y.getFirstKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = y.getFirstKey(n.focusedKey, (0, s.B)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : O && n.replaceSelection(t));
                    }
                    break;
                case "End":
                    if (y.getLastKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = y.getLastKey(n.focusedKey, (0, s.B)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : O && n.replaceSelection(t));
                    }
                    break;
                case "PageDown":
                    if (y.getKeyPageBelow && null != n.focusedKey) {
                        let t = y.getKeyPageBelow(n.focusedKey);
                        null != t && (e.preventDefault(), I(t));
                    }
                    break;
                case "PageUp":
                    if (y.getKeyPageAbove && null != n.focusedKey) {
                        let t = y.getKeyPageAbove(n.focusedKey);
                        null != t && (e.preventDefault(), I(t));
                    }
                    break;
                case "a":
                    (0, s.B)(e) && "multiple" === n.selectionMode && !0 !== N && (e.preventDefault(), n.selectAll());
                    break;
                case "Escape":
                    "clearSelection" !== R ||
                        b ||
                        0 === n.selectedKeys.size ||
                        (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                    break;
                case "Tab":
                    if (!w)
                        if (e.shiftKey) S.current.focus();
                        else {
                            let e,
                                t,
                                n = (0, h.N$)(S.current, { tabbable: !0 });
                            do (t = n.lastChild()) && (e = t);
                            while (t);
                            e && !e.contains(document.activeElement) && (0, o.e)(e);
                        }
            }
        },
        V = (0, E.useRef)({ top: 0, left: 0 });
    (0, l._)(
        P,
        "scroll",
        x
            ? void 0
            : () => {
                  var e, t, n, r;
                  V.current = {
                      top: null != (n = null == (e = P.current) ? void 0 : e.scrollTop) ? n : 0,
                      left: null != (r = null == (t = P.current) ? void 0 : t.scrollLeft) ? r : 0,
                  };
              },
    );
    let F = (e) => {
            if (n.isFocused) {
                e.currentTarget.contains(e.target) || n.setFocused(!1);
                return;
            }
            if (e.currentTarget.contains(e.target)) {
                if ((n.setFocused(!0), null == n.focusedKey)) {
                    var t, i, a, s;
                    let r = (e) => {
                            null != e && (n.setFocusedKey(e), O && !n.isSelected(e) && n.replaceSelection(e));
                        },
                        o = e.relatedTarget;
                    o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING
                        ? r(null != (a = n.lastSelectedKey) ? a : null == (t = y.getLastKey) ? void 0 : t.call(y))
                        : r(null != (s = n.firstSelectedKey) ? s : null == (i = y.getFirstKey) ? void 0 : i.call(y));
                } else
                    !x && P.current && ((P.current.scrollTop = V.current.top), (P.current.scrollLeft = V.current.left));
                if (null != n.focusedKey && P.current) {
                    let e = (0, r.au)(S, n.focusedKey);
                    e instanceof HTMLElement &&
                        (e.contains(document.activeElement) || L || (0, o.e)(e),
                        "keyboard" === (0, A.ME)() && (0, u.o)(e, { containingElement: S.current }));
                }
            }
        },
        B = (e) => {
            e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
        },
        j = (0, E.useRef)(!1);
    (0, l._)(
        S,
        c.C,
        L
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (j.current = !0);
              }
            : void 0,
    );
    let H = (0, d.J)(() => {
        var e, t;
        let r = null != (t = null == (e = y.getFirstKey) ? void 0 : e.call(y)) ? t : null;
        if (null == r) {
            let e = (0, _.bq)();
            (0, m.vX)(S.current), (0, m.Ig)(e, null), n.collection.size > 0 && (j.current = !1);
        } else n.setFocusedKey(r), (j.current = !1);
    });
    (0, f.K)(() => {
        j.current && H();
    }, [n.collection, H]);
    let Y = (0, d.J)(() => {
        n.collection.size > 0 && (j.current = !1);
    });
    (0, f.K)(() => {
        Y();
    }, [n.focusedKey, Y]),
        (0, l._)(
            S,
            c.m,
            L
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let W = (0, E.useRef)(v),
        K = (0, E.useRef)(!1);
    (0, E.useEffect)(() => {
        if (W.current) {
            var e, t, r, i;
            let a = null;
            "first" === v && (a = null != (r = null == (e = y.getFirstKey) ? void 0 : e.call(y)) ? r : null),
                "last" === v && (a = null != (i = null == (t = y.getLastKey) ? void 0 : t.call(y)) ? i : null);
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
                null == a && !L && S.current && (0, I.l)(S.current),
                n.collection.size > 0 && ((W.current = !1), (K.current = !0));
        }
    });
    let z = (0, E.useRef)(n.focusedKey),
        $ = (0, E.useRef)(null);
    (0, E.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== z.current || K.current) &&
            P.current &&
            S.current
        ) {
            let e = (0, A.ME)(),
                t = (0, r.au)(S, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || K.current) &&
                ($.current && cancelAnimationFrame($.current),
                ($.current = requestAnimationFrame(() => {
                    P.current &&
                        ((0, u.R)(P.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: S.current }));
                })));
        }
        !L && n.isFocused && null == n.focusedKey && null != z.current && S.current && (0, I.l)(S.current),
            (z.current = n.focusedKey),
            (K.current = !1);
    }),
        (0, E.useEffect)(
            () => () => {
                $.current && cancelAnimationFrame($.current);
            },
            [],
        ),
        (0, l._)(S, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let q = {
            onKeyDown: G,
            onFocus: F,
            onBlur: B,
            onMouseDown(e) {
                P.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: Z } = (0, i.I)({ keyboardDelegate: y, selectionManager: n });
    D || (q = (0, p.v)(Z, q)), L || (t = null == n.focusedKey ? 0 : -1);
    let Q = (0, r.j5)(n.collection);
    return { collectionProps: (0, p.v)(q, { tabIndex: t, "data-collection": Q }) };
}
