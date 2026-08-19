"use strict";
r.d(t, { y: () => _ });
var n = r(201887),
    o = r(582128),
    i = r(356560),
    a = r(760627),
    s = r(20853),
    l = r(319435),
    u = r(867),
    c = r(654978),
    f = r(712247),
    p = r(576024);
function d(e, t) {
    let r = (0, o.useRef)(!0),
        n = (0, o.useRef)(null);
    (0, p.N)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    ),
        (0, p.N)(() => {
            r.current ? (r.current = !1) : (!n.current || t.some((e, t) => !Object.is(e, n[t]))) && e(),
                (n.current = t);
        }, t);
}
var h = r(192734),
    m = r(421114),
    v = r(831080),
    y = r(333007),
    g = r(766382),
    b = r(288371),
    w = r(59344);
function _(e) {
    let t,
        {
            selectionManager: r,
            keyboardDelegate: p,
            ref: _,
            autoFocus: S = !1,
            shouldFocusWrap: E = !1,
            disallowEmptySelection: x = !1,
            disallowSelectAll: k = !1,
            escapeKeyBehavior: C = "clearSelection",
            selectOnFocus: T = "replace" === r.selectionBehavior,
            disallowTypeAhead: M = !1,
            shouldUseVirtualFocus: P,
            allowsTabNavigation: A = !1,
            isVirtualized: O,
            scrollRef: I = _,
            linkBehavior: D = "action",
        } = e,
        { direction: L } = (0, w.Y)(),
        R = (0, i.rd)(),
        F = (0, o.useRef)({ top: 0, left: 0 });
    (0, l._)(
        I,
        "scroll",
        O
            ? void 0
            : () => {
                  var e, t, r, n;
                  F.current = {
                      top: null != (r = null == (e = I.current) ? void 0 : e.scrollTop) ? r : 0,
                      left: null != (n = null == (t = I.current) ? void 0 : t.scrollLeft) ? n : 0,
                  };
              },
    );
    let N = (0, o.useRef)(!1);
    (0, l._)(
        _,
        "react-aria-focus",
        P
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      r.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (N.current = !0);
              }
            : void 0,
    );
    let j = (0, c.J)(() => {
        var e, t;
        let n = null != (t = null == (e = p.getFirstKey) ? void 0 : e.call(p)) ? t : null;
        if (null == n) {
            let e = (0, f.bq)();
            (0, v.vX)(_.current), (0, v.Ig)(e, null), r.collection.size > 0 && (N.current = !1);
        } else r.setFocusedKey(n), (N.current = !1);
    });
    d(() => {
        N.current && j();
    }, [r.collection, j]);
    let B = (0, c.J)(() => {
        r.collection.size > 0 && (N.current = !1);
    });
    d(() => {
        B();
    }, [r.focusedKey, B]),
        (0, l._)(
            _,
            "react-aria-clear-focus",
            P
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          r.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && r.setFocusedKey(null);
                  }
                : void 0,
        );
    let $ = (0, o.useRef)(S),
        K = (0, o.useRef)(!1);
    (0, o.useEffect)(() => {
        if ($.current) {
            var e, t, n, o;
            let i = null;
            "first" === S && (i = null != (n = null == (e = p.getFirstKey) ? void 0 : e.call(p)) ? n : null),
                "last" === S && (i = null != (o = null == (t = p.getLastKey) ? void 0 : t.call(p)) ? o : null);
            let a = r.selectedKeys;
            if (a.size) {
                for (let e of a)
                    if (r.canSelectItem(e)) {
                        i = e;
                        break;
                    }
            }
            r.setFocused(!0),
                r.setFocusedKey(i),
                null == i && !P && _.current && (0, b.l)(_.current),
                r.collection.size > 0 && (($.current = !1), (K.current = !0));
        }
    });
    let V = (0, o.useRef)(r.focusedKey),
        U = (0, o.useRef)(null);
    (0, o.useEffect)(() => {
        if (
            r.isFocused &&
            null != r.focusedKey &&
            (r.focusedKey !== V.current || K.current) &&
            I.current &&
            _.current
        ) {
            let e = (0, g.ME)(),
                t = (0, n.au)(_, r.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || K.current) &&
                (U.current && cancelAnimationFrame(U.current),
                (U.current = requestAnimationFrame(() => {
                    I.current &&
                        ((0, u.R)(I.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: _.current }));
                })));
        }
        !P && r.isFocused && null == r.focusedKey && null != V.current && _.current && (0, b.l)(_.current),
            (V.current = r.focusedKey),
            (K.current = !1);
    }),
        (0, o.useEffect)(
            () => () => {
                U.current && cancelAnimationFrame(U.current);
            },
            [],
        ),
        (0, l._)(_, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), r.setFocused(!0);
        });
    let z = {
            onKeyDown: (e) => {
                var t, o, i, l, u, c, f, d, h, v, g, b, w;
                if (
                    (e.altKey && "Tab" === e.key && e.preventDefault(),
                    !(null == (t = _.current) ? void 0 : t.contains(e.target)))
                )
                    return;
                let S = (t, o) => {
                    if (null != t) {
                        if (r.isLink(t) && "selection" === D && T && !(0, n.N9)(e)) {
                            (0, y.flushSync)(() => {
                                r.setFocusedKey(t, o);
                            });
                            let i = (0, n.au)(_, t),
                                a = r.getItemProps(t);
                            i && R.open(i, e, a.href, a.routerOptions);
                            return;
                        }
                        r.setFocusedKey(t, o),
                            (r.isLink(t) && "override" === D) ||
                                (e.shiftKey && "multiple" === r.selectionMode
                                    ? r.extendSelection(t)
                                    : T && !(0, n.N9)(e) && r.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case "ArrowDown":
                        if (p.getKeyBelow) {
                            let t =
                                null != r.focusedKey
                                    ? null == (o = p.getKeyBelow)
                                        ? void 0
                                        : o.call(p, r.focusedKey)
                                    : null == (i = p.getFirstKey)
                                      ? void 0
                                      : i.call(p);
                            null == t && E && (t = null == (l = p.getFirstKey) ? void 0 : l.call(p, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowUp":
                        if (p.getKeyAbove) {
                            let t =
                                null != r.focusedKey
                                    ? null == (u = p.getKeyAbove)
                                        ? void 0
                                        : u.call(p, r.focusedKey)
                                    : null == (c = p.getLastKey)
                                      ? void 0
                                      : c.call(p);
                            null == t && E && (t = null == (f = p.getLastKey) ? void 0 : f.call(p, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowLeft":
                        if (p.getKeyLeftOf) {
                            let t =
                                null != r.focusedKey
                                    ? null == (d = p.getKeyLeftOf)
                                        ? void 0
                                        : d.call(p, r.focusedKey)
                                    : null;
                            null == t &&
                                E &&
                                (t =
                                    "rtl" === L
                                        ? null == (h = p.getFirstKey)
                                            ? void 0
                                            : h.call(p, r.focusedKey)
                                        : null == (v = p.getLastKey)
                                          ? void 0
                                          : v.call(p, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === L ? "first" : "last"));
                        }
                        break;
                    case "ArrowRight":
                        if (p.getKeyRightOf) {
                            let t =
                                null != r.focusedKey
                                    ? null == (g = p.getKeyRightOf)
                                        ? void 0
                                        : g.call(p, r.focusedKey)
                                    : null;
                            null == t &&
                                E &&
                                (t =
                                    "rtl" === L
                                        ? null == (b = p.getLastKey)
                                            ? void 0
                                            : b.call(p, r.focusedKey)
                                        : null == (w = p.getFirstKey)
                                          ? void 0
                                          : w.call(p, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === L ? "last" : "first"));
                        }
                        break;
                    case "Home":
                        if (p.getFirstKey) {
                            if (null === r.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = p.getFirstKey(r.focusedKey, (0, a.B)(e));
                            r.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === r.selectionMode
                                        ? r.extendSelection(t)
                                        : T && r.replaceSelection(t));
                        }
                        break;
                    case "End":
                        if (p.getLastKey) {
                            if (null === r.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = p.getLastKey(r.focusedKey, (0, a.B)(e));
                            r.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === r.selectionMode
                                        ? r.extendSelection(t)
                                        : T && r.replaceSelection(t));
                        }
                        break;
                    case "PageDown":
                        if (p.getKeyPageBelow && null != r.focusedKey) {
                            let t = p.getKeyPageBelow(r.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "PageUp":
                        if (p.getKeyPageAbove && null != r.focusedKey) {
                            let t = p.getKeyPageAbove(r.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "a":
                        (0, a.B)(e) &&
                            "multiple" === r.selectionMode &&
                            !0 !== k &&
                            (e.preventDefault(), r.selectAll());
                        break;
                    case "Escape":
                        "clearSelection" !== C ||
                            x ||
                            0 === r.selectedKeys.size ||
                            (e.stopPropagation(), e.preventDefault(), r.clearSelection());
                        break;
                    case "Tab":
                        if (!A)
                            if (e.shiftKey) _.current.focus();
                            else {
                                let e,
                                    t,
                                    r = (0, m.N$)(_.current, { tabbable: !0 });
                                do (t = r.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, s.e)(e);
                            }
                }
            },
            onFocus: (e) => {
                if (r.isFocused) {
                    e.currentTarget.contains(e.target) || r.setFocused(!1);
                    return;
                }
                if (e.currentTarget.contains(e.target)) {
                    if ((r.setFocused(!0), null == r.focusedKey)) {
                        var t, o, i, a;
                        let n = (e) => {
                                null != e && (r.setFocusedKey(e), T && !r.isSelected(e) && r.replaceSelection(e));
                            },
                            s = e.relatedTarget;
                        s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? n(null != (i = r.lastSelectedKey) ? i : null == (t = p.getLastKey) ? void 0 : t.call(p))
                            : n(
                                  null != (a = r.firstSelectedKey)
                                      ? a
                                      : null == (o = p.getFirstKey)
                                        ? void 0
                                        : o.call(p),
                              );
                    } else
                        !O &&
                            I.current &&
                            ((I.current.scrollTop = F.current.top), (I.current.scrollLeft = F.current.left));
                    if (null != r.focusedKey && I.current) {
                        let e = (0, n.au)(_, r.focusedKey);
                        e instanceof HTMLElement &&
                            (e.contains(document.activeElement) || P || (0, s.e)(e),
                            "keyboard" === (0, g.ME)() && (0, u.o)(e, { containingElement: _.current }));
                    }
                }
            },
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || r.setFocused(!1);
            },
            onMouseDown(e) {
                I.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: W } = (function (e) {
            let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e,
                i = (0, o.useRef)({ search: "", timeout: void 0 }).current;
            return {
                typeSelectProps: {
                    onKeyDownCapture: t.getKeyForSearch
                        ? (e) => {
                              var o;
                              let a = 1 !== (o = e.key).length && /^[A-Z]/i.test(o) ? "" : o;
                              if (
                                  a &&
                                  !e.ctrlKey &&
                                  !e.metaKey &&
                                  e.currentTarget.contains(e.target) &&
                                  (0 !== i.search.length || " " !== a)
                              ) {
                                  if (
                                      (" " === a &&
                                          i.search.trim().length > 0 &&
                                          (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                                      (i.search += a),
                                      null != t.getKeyForSearch)
                                  ) {
                                      let e = t.getKeyForSearch(i.search, r.focusedKey);
                                      null == e && (e = t.getKeyForSearch(i.search)),
                                          null != e && (r.setFocusedKey(e), n && n(e));
                                  }
                                  clearTimeout(i.timeout),
                                      (i.timeout = setTimeout(() => {
                                          i.search = "";
                                      }, 1e3));
                              }
                          }
                        : void 0,
                },
            };
        })({ keyboardDelegate: p, selectionManager: r });
    M || (z = (0, h.v)(W, z)), P || (t = null == r.focusedKey ? 0 : -1);
    let H = (0, n.j5)(r.collection);
    return { collectionProps: (0, h.v)(z, { tabIndex: t, "data-collection": H }) };
}
