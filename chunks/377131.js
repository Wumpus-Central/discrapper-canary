"use strict";
r.d(t, { y: () => _ });
var n = r(201887),
    i = r(582128),
    o = r(356560),
    a = r(760627),
    s = r(20853),
    l = r(319435),
    u = r(867),
    c = r(654978),
    f = r(712247),
    d = r(576024);
function p(e, t) {
    let r = (0, i.useRef)(!0),
        n = (0, i.useRef)(null);
    (0, d.N)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    ),
        (0, d.N)(() => {
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
            keyboardDelegate: d,
            ref: _,
            autoFocus: S = !1,
            shouldFocusWrap: x = !1,
            disallowEmptySelection: E = !1,
            disallowSelectAll: k = !1,
            escapeKeyBehavior: C = "clearSelection",
            selectOnFocus: T = "replace" === r.selectionBehavior,
            disallowTypeAhead: M = !1,
            shouldUseVirtualFocus: P,
            allowsTabNavigation: A = !1,
            isVirtualized: I,
            scrollRef: O = _,
            linkBehavior: D = "action",
        } = e,
        { direction: R } = (0, w.Y)(),
        L = (0, o.rd)(),
        F = (0, i.useRef)({ top: 0, left: 0 });
    (0, l._)(
        O,
        "scroll",
        I
            ? void 0
            : () => {
                  var e, t, r, n;
                  F.current = {
                      top: null != (r = null == (e = O.current) ? void 0 : e.scrollTop) ? r : 0,
                      left: null != (n = null == (t = O.current) ? void 0 : t.scrollLeft) ? n : 0,
                  };
              },
    );
    let N = (0, i.useRef)(!1);
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
        let n = null != (t = null == (e = d.getFirstKey) ? void 0 : e.call(d)) ? t : null;
        if (null == n) {
            let e = (0, f.bq)();
            (0, v.vX)(_.current), (0, v.Ig)(e, null), r.collection.size > 0 && (N.current = !1);
        } else r.setFocusedKey(n), (N.current = !1);
    });
    p(() => {
        N.current && j();
    }, [r.collection, j]);
    let B = (0, c.J)(() => {
        r.collection.size > 0 && (N.current = !1);
    });
    p(() => {
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
    let K = (0, i.useRef)(S),
        $ = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (K.current) {
            var e, t, n, i;
            let o = null;
            "first" === S && (o = null != (n = null == (e = d.getFirstKey) ? void 0 : e.call(d)) ? n : null),
                "last" === S && (o = null != (i = null == (t = d.getLastKey) ? void 0 : t.call(d)) ? i : null);
            let a = r.selectedKeys;
            if (a.size) {
                for (let e of a)
                    if (r.canSelectItem(e)) {
                        o = e;
                        break;
                    }
            }
            r.setFocused(!0),
                r.setFocusedKey(o),
                null == o && !P && _.current && (0, b.l)(_.current),
                r.collection.size > 0 && ((K.current = !1), ($.current = !0));
        }
    });
    let V = (0, i.useRef)(r.focusedKey),
        U = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
        if (
            r.isFocused &&
            null != r.focusedKey &&
            (r.focusedKey !== V.current || $.current) &&
            O.current &&
            _.current
        ) {
            let e = (0, g.ME)(),
                t = (0, n.au)(_, r.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || $.current) &&
                (U.current && cancelAnimationFrame(U.current),
                (U.current = requestAnimationFrame(() => {
                    O.current &&
                        ((0, u.R)(O.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: _.current }));
                })));
        }
        !P && r.isFocused && null == r.focusedKey && null != V.current && _.current && (0, b.l)(_.current),
            (V.current = r.focusedKey),
            ($.current = !1);
    }),
        (0, i.useEffect)(
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
                var t, i, o, l, u, c, f, p, h, v, g, b, w;
                if (
                    (e.altKey && "Tab" === e.key && e.preventDefault(),
                    !(null == (t = _.current) ? void 0 : t.contains(e.target)))
                )
                    return;
                let S = (t, i) => {
                    if (null != t) {
                        if (r.isLink(t) && "selection" === D && T && !(0, n.N9)(e)) {
                            (0, y.flushSync)(() => {
                                r.setFocusedKey(t, i);
                            });
                            let o = (0, n.au)(_, t),
                                a = r.getItemProps(t);
                            o && L.open(o, e, a.href, a.routerOptions);
                            return;
                        }
                        r.setFocusedKey(t, i),
                            (r.isLink(t) && "override" === D) ||
                                (e.shiftKey && "multiple" === r.selectionMode
                                    ? r.extendSelection(t)
                                    : T && !(0, n.N9)(e) && r.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case "ArrowDown":
                        if (d.getKeyBelow) {
                            let t =
                                null != r.focusedKey
                                    ? null == (i = d.getKeyBelow)
                                        ? void 0
                                        : i.call(d, r.focusedKey)
                                    : null == (o = d.getFirstKey)
                                      ? void 0
                                      : o.call(d);
                            null == t && x && (t = null == (l = d.getFirstKey) ? void 0 : l.call(d, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowUp":
                        if (d.getKeyAbove) {
                            let t =
                                null != r.focusedKey
                                    ? null == (u = d.getKeyAbove)
                                        ? void 0
                                        : u.call(d, r.focusedKey)
                                    : null == (c = d.getLastKey)
                                      ? void 0
                                      : c.call(d);
                            null == t && x && (t = null == (f = d.getLastKey) ? void 0 : f.call(d, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowLeft":
                        if (d.getKeyLeftOf) {
                            let t =
                                null != r.focusedKey
                                    ? null == (p = d.getKeyLeftOf)
                                        ? void 0
                                        : p.call(d, r.focusedKey)
                                    : null;
                            null == t &&
                                x &&
                                (t =
                                    "rtl" === R
                                        ? null == (h = d.getFirstKey)
                                            ? void 0
                                            : h.call(d, r.focusedKey)
                                        : null == (v = d.getLastKey)
                                          ? void 0
                                          : v.call(d, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === R ? "first" : "last"));
                        }
                        break;
                    case "ArrowRight":
                        if (d.getKeyRightOf) {
                            let t =
                                null != r.focusedKey
                                    ? null == (g = d.getKeyRightOf)
                                        ? void 0
                                        : g.call(d, r.focusedKey)
                                    : null;
                            null == t &&
                                x &&
                                (t =
                                    "rtl" === R
                                        ? null == (b = d.getLastKey)
                                            ? void 0
                                            : b.call(d, r.focusedKey)
                                        : null == (w = d.getFirstKey)
                                          ? void 0
                                          : w.call(d, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === R ? "last" : "first"));
                        }
                        break;
                    case "Home":
                        if (d.getFirstKey) {
                            if (null === r.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = d.getFirstKey(r.focusedKey, (0, a.B)(e));
                            r.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === r.selectionMode
                                        ? r.extendSelection(t)
                                        : T && r.replaceSelection(t));
                        }
                        break;
                    case "End":
                        if (d.getLastKey) {
                            if (null === r.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = d.getLastKey(r.focusedKey, (0, a.B)(e));
                            r.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === r.selectionMode
                                        ? r.extendSelection(t)
                                        : T && r.replaceSelection(t));
                        }
                        break;
                    case "PageDown":
                        if (d.getKeyPageBelow && null != r.focusedKey) {
                            let t = d.getKeyPageBelow(r.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "PageUp":
                        if (d.getKeyPageAbove && null != r.focusedKey) {
                            let t = d.getKeyPageAbove(r.focusedKey);
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
                            E ||
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
                        var t, i, o, a;
                        let n = (e) => {
                                null != e && (r.setFocusedKey(e), T && !r.isSelected(e) && r.replaceSelection(e));
                            },
                            s = e.relatedTarget;
                        s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? n(null != (o = r.lastSelectedKey) ? o : null == (t = d.getLastKey) ? void 0 : t.call(d))
                            : n(
                                  null != (a = r.firstSelectedKey)
                                      ? a
                                      : null == (i = d.getFirstKey)
                                        ? void 0
                                        : i.call(d),
                              );
                    } else
                        !I &&
                            O.current &&
                            ((O.current.scrollTop = F.current.top), (O.current.scrollLeft = F.current.left));
                    if (null != r.focusedKey && O.current) {
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
                O.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: W } = (function (e) {
            let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e,
                o = (0, i.useRef)({ search: "", timeout: void 0 }).current;
            return {
                typeSelectProps: {
                    onKeyDownCapture: t.getKeyForSearch
                        ? (e) => {
                              var i;
                              let a = 1 !== (i = e.key).length && /^[A-Z]/i.test(i) ? "" : i;
                              if (
                                  a &&
                                  !e.ctrlKey &&
                                  !e.metaKey &&
                                  e.currentTarget.contains(e.target) &&
                                  (0 !== o.search.length || " " !== a)
                              ) {
                                  if (
                                      (" " === a &&
                                          o.search.trim().length > 0 &&
                                          (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                                      (o.search += a),
                                      null != t.getKeyForSearch)
                                  ) {
                                      let e = t.getKeyForSearch(o.search, r.focusedKey);
                                      null == e && (e = t.getKeyForSearch(o.search)),
                                          null != e && (r.setFocusedKey(e), n && n(e));
                                  }
                                  clearTimeout(o.timeout),
                                      (o.timeout = setTimeout(() => {
                                          o.search = "";
                                      }, 1e3));
                              }
                          }
                        : void 0,
                },
            };
        })({ keyboardDelegate: d, selectionManager: r });
    M || (z = (0, h.v)(W, z)), P || (t = null == r.focusedKey ? 0 : -1);
    let H = (0, n.j5)(r.collection);
    return { collectionProps: (0, h.v)(z, { tabIndex: t, "data-collection": H }) };
}
