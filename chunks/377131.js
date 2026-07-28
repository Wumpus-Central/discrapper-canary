"use strict";
n.d(t, { y: () => w });
var r = n(201887),
    i = n(582128),
    a = n(356560),
    o = n(760627),
    s = n(20853),
    l = n(319435),
    u = n(867),
    c = n(654978),
    d = n(712247),
    f = n(576024);
function p(e, t) {
    let n = (0, i.useRef)(!0),
        r = (0, i.useRef)(null);
    (0, f.N)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        [],
    ),
        (0, f.N)(() => {
            n.current ? (n.current = !1) : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(),
                (r.current = t);
        }, t);
}
var h = n(192734),
    m = n(421114),
    g = n(831080),
    v = n(333007),
    y = n(766382),
    b = n(288371),
    _ = n(59344);
function w(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: f,
            ref: w,
            autoFocus: x = !1,
            shouldFocusWrap: E = !1,
            disallowEmptySelection: S = !1,
            disallowSelectAll: k = !1,
            escapeKeyBehavior: T = "clearSelection",
            selectOnFocus: C = "replace" === n.selectionBehavior,
            disallowTypeAhead: P = !1,
            shouldUseVirtualFocus: A,
            allowsTabNavigation: M = !1,
            isVirtualized: R,
            scrollRef: I = w,
            linkBehavior: L = "action",
        } = e,
        { direction: O } = (0, _.Y)(),
        D = (0, a.rd)(),
        F = (0, i.useRef)({ top: 0, left: 0 });
    (0, l._)(
        I,
        "scroll",
        R
            ? void 0
            : () => {
                  var e, t, n, r;
                  F.current = {
                      top: null != (n = null == (e = I.current) ? void 0 : e.scrollTop) ? n : 0,
                      left: null != (r = null == (t = I.current) ? void 0 : t.scrollLeft) ? r : 0,
                  };
              },
    );
    let N = (0, i.useRef)(!1);
    (0, l._)(
        w,
        "react-aria-focus",
        A
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (N.current = !0);
              }
            : void 0,
    );
    let V = (0, c.J)(() => {
        var e, t;
        let r = null != (t = null == (e = f.getFirstKey) ? void 0 : e.call(f)) ? t : null;
        if (null == r) {
            let e = (0, d.bq)();
            (0, g.vX)(w.current), (0, g.Ig)(e, null), n.collection.size > 0 && (N.current = !1);
        } else n.setFocusedKey(r), (N.current = !1);
    });
    p(() => {
        N.current && V();
    }, [n.collection, V]);
    let j = (0, c.J)(() => {
        n.collection.size > 0 && (N.current = !1);
    });
    p(() => {
        j();
    }, [n.focusedKey, j]),
        (0, l._)(
            w,
            "react-aria-clear-focus",
            A
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let B = (0, i.useRef)(x),
        U = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (B.current) {
            var e, t, r, i;
            let a = null;
            "first" === x && (a = null != (r = null == (e = f.getFirstKey) ? void 0 : e.call(f)) ? r : null),
                "last" === x && (a = null != (i = null == (t = f.getLastKey) ? void 0 : t.call(f)) ? i : null);
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
                null == a && !A && w.current && (0, b.l)(w.current),
                n.collection.size > 0 && ((B.current = !1), (U.current = !0));
        }
    });
    let K = (0, i.useRef)(n.focusedKey),
        $ = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== K.current || U.current) &&
            I.current &&
            w.current
        ) {
            let e = (0, y.ME)(),
                t = (0, r.au)(w, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || U.current) &&
                ($.current && cancelAnimationFrame($.current),
                ($.current = requestAnimationFrame(() => {
                    I.current &&
                        ((0, u.R)(I.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: w.current }));
                })));
        }
        !A && n.isFocused && null == n.focusedKey && null != K.current && w.current && (0, b.l)(w.current),
            (K.current = n.focusedKey),
            (U.current = !1);
    }),
        (0, i.useEffect)(
            () => () => {
                $.current && cancelAnimationFrame($.current);
            },
            [],
        ),
        (0, l._)(w, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let z = {
            onKeyDown: (e) => {
                var t, i, a, l, u, c, d, p, h, g, y, b, _;
                if (
                    (e.altKey && "Tab" === e.key && e.preventDefault(),
                    !(null == (t = w.current) ? void 0 : t.contains(e.target)))
                )
                    return;
                let x = (t, i) => {
                    if (null != t) {
                        if (n.isLink(t) && "selection" === L && C && !(0, r.N9)(e)) {
                            (0, v.flushSync)(() => {
                                n.setFocusedKey(t, i);
                            });
                            let a = (0, r.au)(w, t),
                                o = n.getItemProps(t);
                            a && D.open(a, e, o.href, o.routerOptions);
                            return;
                        }
                        n.setFocusedKey(t, i),
                            (n.isLink(t) && "override" === L) ||
                                (e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : C && !(0, r.N9)(e) && n.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case "ArrowDown":
                        if (f.getKeyBelow) {
                            let t =
                                null != n.focusedKey
                                    ? null == (i = f.getKeyBelow)
                                        ? void 0
                                        : i.call(f, n.focusedKey)
                                    : null == (a = f.getFirstKey)
                                      ? void 0
                                      : a.call(f);
                            null == t && E && (t = null == (l = f.getFirstKey) ? void 0 : l.call(f, n.focusedKey)),
                                null != t && (e.preventDefault(), x(t));
                        }
                        break;
                    case "ArrowUp":
                        if (f.getKeyAbove) {
                            let t =
                                null != n.focusedKey
                                    ? null == (u = f.getKeyAbove)
                                        ? void 0
                                        : u.call(f, n.focusedKey)
                                    : null == (c = f.getLastKey)
                                      ? void 0
                                      : c.call(f);
                            null == t && E && (t = null == (d = f.getLastKey) ? void 0 : d.call(f, n.focusedKey)),
                                null != t && (e.preventDefault(), x(t));
                        }
                        break;
                    case "ArrowLeft":
                        if (f.getKeyLeftOf) {
                            let t =
                                null != n.focusedKey
                                    ? null == (p = f.getKeyLeftOf)
                                        ? void 0
                                        : p.call(f, n.focusedKey)
                                    : null;
                            null == t &&
                                E &&
                                (t =
                                    "rtl" === O
                                        ? null == (h = f.getFirstKey)
                                            ? void 0
                                            : h.call(f, n.focusedKey)
                                        : null == (g = f.getLastKey)
                                          ? void 0
                                          : g.call(f, n.focusedKey)),
                                null != t && (e.preventDefault(), x(t, "rtl" === O ? "first" : "last"));
                        }
                        break;
                    case "ArrowRight":
                        if (f.getKeyRightOf) {
                            let t =
                                null != n.focusedKey
                                    ? null == (y = f.getKeyRightOf)
                                        ? void 0
                                        : y.call(f, n.focusedKey)
                                    : null;
                            null == t &&
                                E &&
                                (t =
                                    "rtl" === O
                                        ? null == (b = f.getLastKey)
                                            ? void 0
                                            : b.call(f, n.focusedKey)
                                        : null == (_ = f.getFirstKey)
                                          ? void 0
                                          : _.call(f, n.focusedKey)),
                                null != t && (e.preventDefault(), x(t, "rtl" === O ? "last" : "first"));
                        }
                        break;
                    case "Home":
                        if (f.getFirstKey) {
                            if (null === n.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = f.getFirstKey(n.focusedKey, (0, o.B)(e));
                            n.setFocusedKey(t),
                                null != t &&
                                    ((0, o.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                        ? n.extendSelection(t)
                                        : C && n.replaceSelection(t));
                        }
                        break;
                    case "End":
                        if (f.getLastKey) {
                            if (null === n.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = f.getLastKey(n.focusedKey, (0, o.B)(e));
                            n.setFocusedKey(t),
                                null != t &&
                                    ((0, o.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                        ? n.extendSelection(t)
                                        : C && n.replaceSelection(t));
                        }
                        break;
                    case "PageDown":
                        if (f.getKeyPageBelow && null != n.focusedKey) {
                            let t = f.getKeyPageBelow(n.focusedKey);
                            null != t && (e.preventDefault(), x(t));
                        }
                        break;
                    case "PageUp":
                        if (f.getKeyPageAbove && null != n.focusedKey) {
                            let t = f.getKeyPageAbove(n.focusedKey);
                            null != t && (e.preventDefault(), x(t));
                        }
                        break;
                    case "a":
                        (0, o.B)(e) &&
                            "multiple" === n.selectionMode &&
                            !0 !== k &&
                            (e.preventDefault(), n.selectAll());
                        break;
                    case "Escape":
                        "clearSelection" !== T ||
                            S ||
                            0 === n.selectedKeys.size ||
                            (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                        break;
                    case "Tab":
                        if (!M)
                            if (e.shiftKey) w.current.focus();
                            else {
                                let e,
                                    t,
                                    n = (0, m.N$)(w.current, { tabbable: !0 });
                                do (t = n.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, s.e)(e);
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
                        var t, i, a, o;
                        let r = (e) => {
                                null != e && (n.setFocusedKey(e), C && !n.isSelected(e) && n.replaceSelection(e));
                            },
                            s = e.relatedTarget;
                        s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? r(null != (a = n.lastSelectedKey) ? a : null == (t = f.getLastKey) ? void 0 : t.call(f))
                            : r(
                                  null != (o = n.firstSelectedKey)
                                      ? o
                                      : null == (i = f.getFirstKey)
                                        ? void 0
                                        : i.call(f),
                              );
                    } else
                        !R &&
                            I.current &&
                            ((I.current.scrollTop = F.current.top), (I.current.scrollLeft = F.current.left));
                    if (null != n.focusedKey && I.current) {
                        let e = (0, r.au)(w, n.focusedKey);
                        e instanceof HTMLElement &&
                            (e.contains(document.activeElement) || A || (0, s.e)(e),
                            "keyboard" === (0, y.ME)() && (0, u.o)(e, { containingElement: w.current }));
                    }
                }
            },
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
            },
            onMouseDown(e) {
                I.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: W } = (function (e) {
            let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e,
                a = (0, i.useRef)({ search: "", timeout: void 0 }).current;
            return {
                typeSelectProps: {
                    onKeyDownCapture: t.getKeyForSearch
                        ? (e) => {
                              var i;
                              let o = 1 !== (i = e.key).length && /^[A-Z]/i.test(i) ? "" : i;
                              if (
                                  o &&
                                  !e.ctrlKey &&
                                  !e.metaKey &&
                                  e.currentTarget.contains(e.target) &&
                                  (0 !== a.search.length || " " !== o)
                              ) {
                                  if (
                                      (" " === o &&
                                          a.search.trim().length > 0 &&
                                          (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                                      (a.search += o),
                                      null != t.getKeyForSearch)
                                  ) {
                                      let e = t.getKeyForSearch(a.search, n.focusedKey);
                                      null == e && (e = t.getKeyForSearch(a.search)),
                                          null != e && (n.setFocusedKey(e), r && r(e));
                                  }
                                  clearTimeout(a.timeout),
                                      (a.timeout = setTimeout(() => {
                                          a.search = "";
                                      }, 1e3));
                              }
                          }
                        : void 0,
                },
            };
        })({ keyboardDelegate: f, selectionManager: n });
    P || (z = (0, h.v)(W, z)), A || (t = null == n.focusedKey ? 0 : -1);
    let G = (0, r.j5)(n.collection);
    return { collectionProps: (0, h.v)(z, { tabIndex: t, "data-collection": G }) };
}
