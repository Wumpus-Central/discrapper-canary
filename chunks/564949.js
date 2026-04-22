"use strict";
n.d(t, { y: () => S });
var r = n(869795),
    i = n(292841),
    s = n(132716),
    a = n(2799),
    o = n(401705),
    l = n(248215),
    u = n(400606),
    d = n(827211),
    c = n(959462),
    _ = n(241827),
    f = n(862535),
    E = n(803082),
    h = n(13163),
    p = n(862836),
    m = n(340287),
    g = n(64700),
    A = n(885714),
    I = n(805447),
    T = n(853590);
function S(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: S,
            ref: y,
            autoFocus: N = !1,
            shouldFocusWrap: O = !1,
            disallowEmptySelection: R = !1,
            disallowSelectAll: v = !1,
            escapeKeyBehavior: C = "clearSelection",
            selectOnFocus: b = "replace" === n.selectionBehavior,
            disallowTypeAhead: D = !1,
            shouldUseVirtualFocus: L,
            allowsTabNavigation: w = !1,
            isVirtualized: M,
            scrollRef: P = y,
            linkBehavior: U = "action",
        } = e,
        { direction: k } = (0, T.Y)(),
        x = (0, s.rd)(),
        G = (0, g.useRef)({ top: 0, left: 0 });
    (0, l._)(
        P,
        "scroll",
        M
            ? void 0
            : () => {
                  var e, t, n, r;
                  G.current = {
                      top: null != (n = null == (e = P.current) ? void 0 : e.scrollTop) ? n : 0,
                      left: null != (r = null == (t = P.current) ? void 0 : t.scrollLeft) ? r : 0,
                  };
              },
    );
    let V = (0, g.useRef)(!1);
    (0, l._)(
        y,
        d.C,
        L
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (V.current = !0);
              }
            : void 0,
    );
    let F = (0, c.J)(() => {
        var e, t;
        let r = null != (t = null == (e = S.getFirstKey) ? void 0 : e.call(S)) ? t : null;
        if (null == r) {
            let e = (0, _.bq)();
            (0, p.vX)(y.current), (0, p.Ig)(e, null), n.collection.size > 0 && (V.current = !1);
        } else n.setFocusedKey(r), (V.current = !1);
    });
    (0, f.K)(() => {
        V.current && F();
    }, [n.collection, F]);
    let B = (0, c.J)(() => {
        n.collection.size > 0 && (V.current = !1);
    });
    (0, f.K)(() => {
        B();
    }, [n.focusedKey, B]),
        (0, l._)(
            y,
            d.m,
            L
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let H = (0, g.useRef)(N),
        Y = (0, g.useRef)(!1);
    (0, g.useEffect)(() => {
        if (H.current) {
            var e, t, r, i;
            let s = null;
            "first" === N && (s = null != (r = null == (e = S.getFirstKey) ? void 0 : e.call(S)) ? r : null),
                "last" === N && (s = null != (i = null == (t = S.getLastKey) ? void 0 : t.call(S)) ? i : null);
            let a = n.selectedKeys;
            if (a.size) {
                for (let e of a)
                    if (n.canSelectItem(e)) {
                        s = e;
                        break;
                    }
            }
            n.setFocused(!0),
                n.setFocusedKey(s),
                null == s && !L && y.current && (0, I.l)(y.current),
                n.collection.size > 0 && ((H.current = !1), (Y.current = !0));
        }
    });
    let W = (0, g.useRef)(n.focusedKey),
        j = (0, g.useRef)(null);
    (0, g.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== W.current || Y.current) &&
            P.current &&
            y.current
        ) {
            let e = (0, A.ME)(),
                t = (0, r.au)(y, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || Y.current) &&
                (j.current && cancelAnimationFrame(j.current),
                (j.current = requestAnimationFrame(() => {
                    P.current &&
                        ((0, u.R)(P.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: y.current }));
                })));
        }
        !L && n.isFocused && null == n.focusedKey && null != W.current && y.current && (0, I.l)(y.current),
            (W.current = n.focusedKey),
            (Y.current = !1);
    }),
        (0, g.useEffect)(
            () => () => {
                j.current && cancelAnimationFrame(j.current);
            },
            [],
        ),
        (0, l._)(y, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let K = {
            onKeyDown: (e) => {
                var t, i, s, l, u, d, c, _, f, E, p, g, A;
                if (
                    (e.altKey && "Tab" === e.key && e.preventDefault(),
                    !(null == (t = y.current) ? void 0 : t.contains(e.target)))
                )
                    return;
                let I = (t, i) => {
                    if (null != t) {
                        if (n.isLink(t) && "selection" === U && b && !(0, r.N9)(e)) {
                            (0, m.flushSync)(() => {
                                n.setFocusedKey(t, i);
                            });
                            let s = (0, r.au)(y, t),
                                a = n.getItemProps(t);
                            s && x.open(s, e, a.href, a.routerOptions);
                            return;
                        }
                        n.setFocusedKey(t, i),
                            (n.isLink(t) && "override" === U) ||
                                (e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : b && !(0, r.N9)(e) && n.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case "ArrowDown":
                        if (S.getKeyBelow) {
                            let t =
                                null != n.focusedKey
                                    ? null == (i = S.getKeyBelow)
                                        ? void 0
                                        : i.call(S, n.focusedKey)
                                    : null == (s = S.getFirstKey)
                                      ? void 0
                                      : s.call(S);
                            null == t && O && (t = null == (l = S.getFirstKey) ? void 0 : l.call(S, n.focusedKey)),
                                null != t && (e.preventDefault(), I(t));
                        }
                        break;
                    case "ArrowUp":
                        if (S.getKeyAbove) {
                            let t =
                                null != n.focusedKey
                                    ? null == (u = S.getKeyAbove)
                                        ? void 0
                                        : u.call(S, n.focusedKey)
                                    : null == (d = S.getLastKey)
                                      ? void 0
                                      : d.call(S);
                            null == t && O && (t = null == (c = S.getLastKey) ? void 0 : c.call(S, n.focusedKey)),
                                null != t && (e.preventDefault(), I(t));
                        }
                        break;
                    case "ArrowLeft":
                        if (S.getKeyLeftOf) {
                            let t =
                                null != n.focusedKey
                                    ? null == (_ = S.getKeyLeftOf)
                                        ? void 0
                                        : _.call(S, n.focusedKey)
                                    : null;
                            null == t &&
                                O &&
                                (t =
                                    "rtl" === k
                                        ? null == (f = S.getFirstKey)
                                            ? void 0
                                            : f.call(S, n.focusedKey)
                                        : null == (E = S.getLastKey)
                                          ? void 0
                                          : E.call(S, n.focusedKey)),
                                null != t && (e.preventDefault(), I(t, "rtl" === k ? "first" : "last"));
                        }
                        break;
                    case "ArrowRight":
                        if (S.getKeyRightOf) {
                            let t =
                                null != n.focusedKey
                                    ? null == (p = S.getKeyRightOf)
                                        ? void 0
                                        : p.call(S, n.focusedKey)
                                    : null;
                            null == t &&
                                O &&
                                (t =
                                    "rtl" === k
                                        ? null == (g = S.getLastKey)
                                            ? void 0
                                            : g.call(S, n.focusedKey)
                                        : null == (A = S.getFirstKey)
                                          ? void 0
                                          : A.call(S, n.focusedKey)),
                                null != t && (e.preventDefault(), I(t, "rtl" === k ? "last" : "first"));
                        }
                        break;
                    case "Home":
                        if (S.getFirstKey) {
                            if (null === n.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = S.getFirstKey(n.focusedKey, (0, a.B)(e));
                            n.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                        ? n.extendSelection(t)
                                        : b && n.replaceSelection(t));
                        }
                        break;
                    case "End":
                        if (S.getLastKey) {
                            if (null === n.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = S.getLastKey(n.focusedKey, (0, a.B)(e));
                            n.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                        ? n.extendSelection(t)
                                        : b && n.replaceSelection(t));
                        }
                        break;
                    case "PageDown":
                        if (S.getKeyPageBelow && null != n.focusedKey) {
                            let t = S.getKeyPageBelow(n.focusedKey);
                            null != t && (e.preventDefault(), I(t));
                        }
                        break;
                    case "PageUp":
                        if (S.getKeyPageAbove && null != n.focusedKey) {
                            let t = S.getKeyPageAbove(n.focusedKey);
                            null != t && (e.preventDefault(), I(t));
                        }
                        break;
                    case "a":
                        (0, a.B)(e) &&
                            "multiple" === n.selectionMode &&
                            !0 !== v &&
                            (e.preventDefault(), n.selectAll());
                        break;
                    case "Escape":
                        "clearSelection" !== C ||
                            R ||
                            0 === n.selectedKeys.size ||
                            (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                        break;
                    case "Tab":
                        if (!w)
                            if (e.shiftKey) y.current.focus();
                            else {
                                let e,
                                    t,
                                    n = (0, h.N$)(y.current, { tabbable: !0 });
                                do (t = n.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, o.e)(e);
                            }
                }
            },
            onFocus: (e) => {
                if (n.isFocused) {
                    e.currentTarget.contains(e.target) || n.setFocused(!1);
                    return;
                }
                if (e.currentTarget.contains(e.target)) {
                    if ((n.setFocused(!0), null == n.focusedKey)) {
                        var t, i, s, a;
                        let r = (e) => {
                                null != e && (n.setFocusedKey(e), b && !n.isSelected(e) && n.replaceSelection(e));
                            },
                            o = e.relatedTarget;
                        o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? r(null != (s = n.lastSelectedKey) ? s : null == (t = S.getLastKey) ? void 0 : t.call(S))
                            : r(
                                  null != (a = n.firstSelectedKey)
                                      ? a
                                      : null == (i = S.getFirstKey)
                                        ? void 0
                                        : i.call(S),
                              );
                    } else
                        !M &&
                            P.current &&
                            ((P.current.scrollTop = G.current.top), (P.current.scrollLeft = G.current.left));
                    if (null != n.focusedKey && P.current) {
                        let e = (0, r.au)(y, n.focusedKey);
                        e instanceof HTMLElement &&
                            (e.contains(document.activeElement) || L || (0, o.e)(e),
                            "keyboard" === (0, A.ME)() && (0, u.o)(e, { containingElement: y.current }));
                    }
                }
            },
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
            },
            onMouseDown(e) {
                P.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: $ } = (0, i.I)({ keyboardDelegate: S, selectionManager: n });
    D || (K = (0, E.v)($, K)), L || (t = null == n.focusedKey ? 0 : -1);
    let z = (0, r.j5)(n.collection);
    return { collectionProps: (0, E.v)(K, { tabIndex: t, "data-collection": z }) };
}
