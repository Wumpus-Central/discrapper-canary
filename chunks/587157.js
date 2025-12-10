n.d(t, { g: () => v });
var r = n(422037),
    i = n(846821),
    a = n(601339),
    o = n(592840),
    s = n(928276),
    l = n(447770),
    c = n(776608),
    u = n(65915),
    d = n(484948),
    f = n(297808),
    p = n(617162),
    _ = n(158821),
    m = n(605294),
    h = n(461960),
    g = n(24156),
    E = n(473749),
    b = n(981166),
    y = n(172395),
    O = n(227399);
function v(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: v,
            ref: S,
            autoFocus: I = !1,
            shouldFocusWrap: T = !1,
            disallowEmptySelection: C = !1,
            disallowSelectAll: A = !1,
            escapeKeyBehavior: N = "clearSelection",
            selectOnFocus: P = "replace" === n.selectionBehavior,
            disallowTypeAhead: R = !1,
            shouldUseVirtualFocus: D,
            allowsTabNavigation: w = !1,
            isVirtualized: x,
            scrollRef: L = S,
            linkBehavior: j = "action",
        } = e,
        { direction: M } = (0, O.j)(),
        k = (0, a.tv)(),
        U = (e) => {
            var t, i, a, l, c, u, d, f, p, _, h, E, b;
            if (
                (e.altKey && "Tab" === e.key && e.preventDefault(),
                !(null == (t = S.current) ? void 0 : t.contains(e.target)))
            )
                return;
            let y = (t, i) => {
                if (null != t) {
                    if (n.isLink(t) && "selection" === j && P && !(0, r.FJ)(e)) {
                        (0, g.flushSync)(() => {
                            n.setFocusedKey(t, i);
                        });
                        let a = (0, r.D0)(S, t),
                            o = n.getItemProps(t);
                        a && k.open(a, e, o.href, o.routerOptions);
                        return;
                    }
                    n.setFocusedKey(t, i),
                        (n.isLink(t) && "override" === j) ||
                            (e.shiftKey && "multiple" === n.selectionMode
                                ? n.extendSelection(t)
                                : P && !(0, r.FJ)(e) && n.replaceSelection(t));
                }
            };
            switch (e.key) {
                case "ArrowDown":
                    if (v.getKeyBelow) {
                        let t =
                            null != n.focusedKey
                                ? null == (i = v.getKeyBelow)
                                    ? void 0
                                    : i.call(v, n.focusedKey)
                                : null == (a = v.getFirstKey)
                                  ? void 0
                                  : a.call(v);
                        null == t && T && (t = null == (l = v.getFirstKey) ? void 0 : l.call(v, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "ArrowUp":
                    if (v.getKeyAbove) {
                        let t =
                            null != n.focusedKey
                                ? null == (c = v.getKeyAbove)
                                    ? void 0
                                    : c.call(v, n.focusedKey)
                                : null == (u = v.getLastKey)
                                  ? void 0
                                  : u.call(v);
                        null == t && T && (t = null == (d = v.getLastKey) ? void 0 : d.call(v, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "ArrowLeft":
                    if (v.getKeyLeftOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (f = v.getKeyLeftOf)
                                    ? void 0
                                    : f.call(v, n.focusedKey)
                                : null;
                        null == t &&
                            T &&
                            (t =
                                "rtl" === M
                                    ? null == (p = v.getFirstKey)
                                        ? void 0
                                        : p.call(v, n.focusedKey)
                                    : null == (_ = v.getLastKey)
                                      ? void 0
                                      : _.call(v, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t, "rtl" === M ? "first" : "last"));
                    }
                    break;
                case "ArrowRight":
                    if (v.getKeyRightOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (h = v.getKeyRightOf)
                                    ? void 0
                                    : h.call(v, n.focusedKey)
                                : null;
                        null == t &&
                            T &&
                            (t =
                                "rtl" === M
                                    ? null == (E = v.getLastKey)
                                        ? void 0
                                        : E.call(v, n.focusedKey)
                                    : null == (b = v.getFirstKey)
                                      ? void 0
                                      : b.call(v, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t, "rtl" === M ? "last" : "first"));
                    }
                    break;
                case "Home":
                    if (v.getFirstKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = v.getFirstKey(n.focusedKey, (0, o.y)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : P && n.replaceSelection(t));
                    }
                    break;
                case "End":
                    if (v.getLastKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = v.getLastKey(n.focusedKey, (0, o.y)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : P && n.replaceSelection(t));
                    }
                    break;
                case "PageDown":
                    if (v.getKeyPageBelow && null != n.focusedKey) {
                        let t = v.getKeyPageBelow(n.focusedKey);
                        null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "PageUp":
                    if (v.getKeyPageAbove && null != n.focusedKey) {
                        let t = v.getKeyPageAbove(n.focusedKey);
                        null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "a":
                    (0, o.y)(e) && "multiple" === n.selectionMode && !0 !== A && (e.preventDefault(), n.selectAll());
                    break;
                case "Escape":
                    "clearSelection" !== N ||
                        C ||
                        0 === n.selectedKeys.size ||
                        (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                    break;
                case "Tab":
                    if (!w)
                        if (e.shiftKey) S.current.focus();
                        else {
                            let e,
                                t,
                                n = (0, m.QL)(S.current, { tabbable: !0 });
                            do (t = n.lastChild()) && (e = t);
                            while (t);
                            e && !e.contains(document.activeElement) && (0, s.A)(e);
                        }
            }
        },
        G = (0, E.useRef)({
            top: 0,
            left: 0,
        });
    (0, l.z)(
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
    let Z = (e) => {
            if (n.isFocused) {
                e.currentTarget.contains(e.target) || n.setFocused(!1);
                return;
            }
            if (e.currentTarget.contains(e.target)) {
                if ((n.setFocused(!0), null == n.focusedKey)) {
                    var t, i, a, o;
                    let r = (e) => {
                            null != e && (n.setFocusedKey(e), P && !n.isSelected(e) && n.replaceSelection(e));
                        },
                        s = e.relatedTarget;
                    s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING
                        ? r(null != (a = n.lastSelectedKey) ? a : null == (t = v.getLastKey) ? void 0 : t.call(v))
                        : r(null != (o = n.firstSelectedKey) ? o : null == (i = v.getFirstKey) ? void 0 : i.call(v));
                } else
                    !x && L.current && ((L.current.scrollTop = G.current.top), (L.current.scrollLeft = G.current.left));
                if (null != n.focusedKey && L.current) {
                    let e = (0, r.D0)(S, n.focusedKey);
                    e instanceof HTMLElement &&
                        (e.contains(document.activeElement) || D || (0, s.A)(e),
                        "keyboard" === (0, b.Jz)() && (0, c.G)(e, { containingElement: S.current }));
                }
            }
        },
        B = (e) => {
            e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
        },
        F = (0, E.useRef)(!1);
    (0, l.z)(
        S,
        u.N,
        D
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (F.current = !0);
              }
            : void 0,
    );
    let V = (0, d.i)(() => {
        var e, t;
        let r = null != (t = null == (e = v.getFirstKey) ? void 0 : e.call(v)) ? t : null;
        if (null == r) {
            let e = (0, f.vY)();
            (0, h.q6)(S.current), (0, h.Jv)(e, null), n.collection.size > 0 && (F.current = !1);
        } else n.setFocusedKey(r), (F.current = !1);
    });
    (0, p.i)(() => {
        F.current && V();
    }, [n.collection, V]);
    let H = (0, d.i)(() => {
        n.collection.size > 0 && (F.current = !1);
    });
    (0, p.i)(() => {
        H();
    }, [n.focusedKey, H]),
        (0, l.z)(
            S,
            u.o,
            D
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let Y = (0, E.useRef)(I),
        W = (0, E.useRef)(!1);
    (0, E.useEffect)(() => {
        if (Y.current) {
            var e, t, r, i;
            let a = null;
            "first" === I && (a = null != (r = null == (e = v.getFirstKey) ? void 0 : e.call(v)) ? r : null),
                "last" === I && (a = null != (i = null == (t = v.getLastKey) ? void 0 : t.call(v)) ? i : null);
            let o = n.selectedKeys;
            if (o.size) {
                for (let e of o)
                    if (n.canSelectItem(e)) {
                        a = e;
                        break;
                    }
            }
            n.setFocused(!0),
                n.setFocusedKey(a),
                null == a && !D && S.current && (0, y.e)(S.current),
                n.collection.size > 0 && ((Y.current = !1), (W.current = !0));
        }
    });
    let K = (0, E.useRef)(n.focusedKey),
        z = (0, E.useRef)(null);
    (0, E.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== K.current || W.current) &&
            L.current &&
            S.current
        ) {
            let e = (0, b.Jz)(),
                t = (0, r.D0)(S, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || W.current) &&
                (z.current && cancelAnimationFrame(z.current),
                (z.current = requestAnimationFrame(() => {
                    L.current &&
                        ((0, c.z)(L.current, t), "virtual" !== e && (0, c.G)(t, { containingElement: S.current }));
                })));
        }
        !D && n.isFocused && null == n.focusedKey && null != K.current && S.current && (0, y.e)(S.current),
            (K.current = n.focusedKey),
            (W.current = !1);
    }),
        (0, E.useEffect)(
            () => () => {
                z.current && cancelAnimationFrame(z.current);
            },
            [],
        ),
        (0, l.z)(S, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let q = {
            onKeyDown: U,
            onFocus: Z,
            onBlur: B,
            onMouseDown(e) {
                L.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: Q } = (0, i.i)({
            keyboardDelegate: v,
            selectionManager: n,
        });
    R || (q = (0, _.d)(Q, q)), D || (t = null == n.focusedKey ? 0 : -1);
    let X = (0, r.Mm)(n.collection);
    return {
        collectionProps: (0, _.d)(q, {
            tabIndex: t,
            "data-collection": X,
        }),
    };
}
