r.d(t, { A: () => p });
var l = r(477900),
    n = r(582128),
    c = r(503698),
    i = r.n(c),
    u = r(837381),
    s = r(612324),
    a = r(408278),
    o = r(548411),
    d = r(554830),
    f = r(331322),
    h = r(559106);
function m(e) {
    return String(e);
}
var v = r(770178),
    b = r(116903),
    x = r(741918),
    L = r(855986),
    M = r(59520),
    y = r(775602);
function g(e, t, r) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return "left" === e
        ? (function (e, t, r) {
              let l = t + r,
                  n = t + e.clientWidth - r;
              for (let t = 0; t < e.children.length; t++) {
                  let r = e.children[t],
                      c = r.offsetLeft;
                  if (r.offsetLeft + r.offsetWidth > l && c < n) return { index: t, isPartiallyHidden: c < l - 1 };
              }
              return { index: 0, isPartiallyHidden: !1 };
          })(t, r, l)
        : (function (e, t, r) {
              let l = t + r,
                  n = t + e.clientWidth - r;
              for (let t = e.children.length - 1; t >= 0; t--) {
                  let r = e.children[t],
                      c = r.offsetLeft,
                      i = r.offsetLeft + r.offsetWidth;
                  if (i > l && c < n) return { index: t, isPartiallyHidden: i > n + 1 };
              }
              return { index: Math.max(0, e.children.length - 1), isPartiallyHidden: !1 };
          })(t, r, l);
}
var k = r(602034),
    W = r(66455),
    C = r(792996),
    R = r(513226);
let p = function (e) {
    let t,
        r,
        c,
        p,
        E,
        A,
        S,
        j,
        w,
        N,
        I,
        F,
        H,
        P,
        z,
        {
            items: G,
            getItemKey: T,
            renderItem: O,
            gap: $ = 24,
            edgeFade: _ = "xl",
            scrollStep: q = "page",
            className: K,
            scrollerClassName: B,
            itemClassName: D,
            actionsClassName: Q,
            iconButtonSize: X,
            "aria-label": Y,
            maintainFocusOnReorder: Z = !1,
            disableFocusRingScope: J = !1,
            initialScrollIndex: U,
        } = e,
        V = `${n.useId()}hscroll`,
        ee = n.useRef(0),
        et = n.useRef(null),
        er = n.useRef(null),
        el = n.useRef(null),
        en = n.useRef(null),
        ec = n.useCallback((e, t, r) => {
            en.current = null;
            let l = document.activeElement,
                n = l === er.current,
                c = l === el.current;
            if ((n && (!e || !t)) || (c && (!e || !r))) {
                let l = n ? el.current : er.current;
                en.current = e && (n ? r : t) ? l : et.current;
            }
        }, []),
        {
            containerRef: ei,
            showActions: eu,
            canScrollLeft: es,
            canScrollRight: ea,
            updateActionState: eo,
        } = (function (e, t, r) {
            let l = n.useRef(0),
                c = n.useRef(0),
                [i, u] = n.useState(!1),
                [s, a] = n.useState(!1),
                [o, d] = n.useState(!0),
                f = n.useCallback(() => {
                    let n = e.current;
                    if (null == n) return;
                    let i = c.current > l.current,
                        s = t.current > 0,
                        o = t.current < n.scrollWidth - n.clientWidth - 1;
                    (r(i, s, o), u(i), a(s), d(o));
                }, [e, t, r]),
                h = (0, v.w)((r) => {
                    let { contentRect: n } = r;
                    ((l.current = n.width), null != e.current && (t.current = e.current.scrollLeft), f());
                });
            return (
                n.useEffect(() => {
                    let r = e.current;
                    if (null == r) return;
                    let l = new ResizeObserver(() => {
                        ((c.current = r.scrollWidth), r.scrollLeft !== t.current && (r.scrollLeft = t.current), f());
                    });
                    Array.from(r.children).forEach((e) => {
                        l.observe(e);
                    });
                    let n = new MutationObserver(() => {
                        (l.disconnect(),
                            Array.from(r.children).forEach((e) => {
                                l.observe(e);
                            }));
                    });
                    function i() {
                        f();
                    }
                    return (
                        n.observe(r, { childList: !0 }),
                        r.addEventListener("scrollend", i),
                        () => {
                            (l.disconnect(), n.disconnect(), r.removeEventListener("scrollend", i));
                        }
                    );
                }, [e, t, f]),
                { containerRef: h, showActions: i, canScrollLeft: s, canScrollRight: o, updateActionState: f }
            );
        })(et, ee, ec);
    n.useLayoutEffect(() => {
        (en.current?.focus({ preventScroll: !0 }), (en.current = null));
    }, [eu, es, ea]);
    let {
            onClickScrollLeft: ed,
            onClickScrollRight: ef,
            onScroll: eh,
            listNavigator: em,
        } = ((t = (0, L.bG)([y.Ay], () => y.Ay.useReducedMotion) ? "auto" : "smooth"),
        (r = (0, L.bG)([y.Ay], () => y.Ay.keyboardModeEnabled)),
        (c = n.useRef(!1)),
        (p = n.useRef(0)),
        (E = n.useCallback(
            (e) => {
                let r = et.current;
                return null == r || r.scrollLeft === e
                    ? Promise.resolve()
                    : ((ee.current = e),
                      (c.current = !0),
                      new Promise((l) => {
                          let n = !1;
                          function i() {
                              n ||
                                  ((n = !0),
                                  clearTimeout(u),
                                  et.current?.removeEventListener("scrollend", i),
                                  (c.current = !1),
                                  l());
                          }
                          let u = setTimeout(i, 1e3);
                          (r.addEventListener("scrollend", i, { once: !0 }),
                              r.scrollTo({ left: e, behavior: t }),
                              eo());
                      }));
            },
            [t, eo, et, ee],
        )),
        (A = n.useCallback(() => E(0), [E])),
        (S = n.useCallback(() => {
            let e = et.current;
            return E(null == e ? 0 : Math.max(0, e.scrollWidth - e.clientWidth));
        }, [E, et])),
        (j = n.useCallback(
            (e) => {
                c.current || ((ee.current = e.target.scrollLeft), eo());
            },
            [eo, ee],
        )),
        (w = n.useCallback(
            (e, t) => {
                let r = et.current,
                    l = document.querySelector(e);
                if (null == r || null == l) return;
                let n = ++p.current,
                    c = Number(t),
                    i = r.children[c];
                if (null == i) return void l.focus({ preventScroll: !0 });
                let u = Math.max(0, r.scrollWidth - r.clientWidth),
                    s = ee.current,
                    a = s + r.clientWidth,
                    o = i.offsetLeft,
                    d = o + i.offsetWidth,
                    f = o < s;
                f || d > a
                    ? E(
                          Math.max(
                              0,
                              Math.min(
                                  u,
                                  "item" === q
                                      ? f
                                          ? o - 16
                                          : d - r.clientWidth + 16
                                      : f
                                        ? d - r.clientWidth + 16
                                        : o - 16,
                              ),
                          ),
                      ).then(() => {
                          p.current === n && l.focus({ preventScroll: !0 });
                      })
                    : l.focus({ preventScroll: !0 });
            },
            [E, q, et, ee],
        )),
        (N = (0, b.Ay)({
            id: V,
            isEnabled: r,
            orientation: x.Gl.HORIZONTAL,
            defaultFocused: "0",
            scrollToStart: A,
            scrollToEnd: S,
            setFocus: w,
        })),
        (I = n.useCallback(
            (e, t, r, l) => {
                let n = e.children[t];
                if (null == n) return;
                function c(t) {
                    let l = "start" === r ? t.offsetLeft - 16 : t.offsetLeft + t.offsetWidth - e.clientWidth + 16;
                    return Math.max(0, Math.min(Math.max(0, e.scrollWidth - e.clientWidth), l));
                }
                let i = c(n);
                if (i !== e.scrollLeft) (E(i), N.setFocus(m(t)));
                else {
                    let r = Math.max(0, Math.min(e.childElementCount - 1, t + l)),
                        n = e.children[r];
                    if (null == n || r === t) return;
                    (E(c(n)), N.setFocus(m(r)));
                }
            },
            [E, N],
        )),
        (F = n.useCallback(
            (e) => {
                let t = et.current;
                if (null == t) return;
                let r = "left" === e ? -1 : 1;
                if ("item" === q) {
                    let { index: l, isPartiallyHidden: n } = g("left", t, ee.current, 16),
                        c = "left" === e && n ? l : Math.max(0, Math.min(t.childElementCount - 1, l + r));
                    I(t, c, "start", r);
                } else {
                    let { index: l, isPartiallyHidden: n } = g(e, t, ee.current, 16),
                        c = n ? l : Math.max(0, Math.min(t.childElementCount - 1, l + r));
                    I(t, c, "left" === e ? "end" : "start", r);
                }
            },
            [q, I, et, ee],
        )),
        (H = n.useCallback(() => F("left"), [F])),
        (P = n.useCallback(() => F("right"), [F])),
        {
            onClickScrollLeft: (0, M.I)(H, 200, [H]),
            onClickScrollRight: (0, M.I)(P, 200, [P]),
            onScroll: j,
            listNavigator: N,
        }),
        ev = n.useRef(!1);
    n.useLayoutEffect(() => {
        let e = et.current;
        if (ev.current || null == U || null == e) return;
        let t = e.children[U];
        if (null == t) return;
        ev.current = !0;
        let r = Math.max(0, Math.min(Math.max(0, e.scrollWidth - e.clientWidth), t.offsetLeft - 16));
        ((ee.current = r), (e.scrollLeft = r), eo(), em.setFocus(m(U)));
    }, [U, G, eo, em]);
    let { ref: eb, ...ex } = (0, u.LT)(em),
        eL = (0, s.A)(et, eb);
    !(function (e) {
        let {
                items: t,
                scrollerRef: r,
                expectedScrollEndRef: l,
                listNavigator: c,
                listId: i,
                containerRef: u,
                enabled: s,
            } = e,
            a = (0, W.A)(c);
        n.useLayoutEffect(() => {
            if (!s) return;
            let e = r.current,
                n = a.current,
                c = n.focusedItemId();
            if (null == e || 0 === t.length || null == c) return;
            e.scrollLeft = l.current;
            let o = m(Math.min(Number(c), t.length - 1));
            if ((n.setFocus(o), !e.contains(document.activeElement))) return;
            let d = u.current?.querySelector((0, k.Mz)((0, k.t$)(i, o)));
            d?.focus({ preventScroll: !0 });
        }, [t, i, u, r, l, a, s]);
    })({
        items: G,
        scrollerRef: et,
        expectedScrollEndRef: ee,
        listNavigator: em,
        listId: V,
        containerRef: ei,
        enabled: Z,
    });
    let eM = n.useMemo(
            () =>
                G.map((e, t) =>
                    (0, l.jsx)(
                        u.tG,
                        {
                            id: m(t),
                            children: (r) => {
                                let { role: n, ...c } = r;
                                return (0, l.jsx)("div", {
                                    role: "listitem",
                                    className: i()(R.Aw, D),
                                    children: O(e, c, t),
                                });
                            },
                        },
                        T(e),
                    ),
                ),
            [G, T, O, D],
        ),
        ey = { "--custom-edge-fade-width": `var(--space-${_})` };
    return (0, l.jsxs)("div", {
        ref: ei,
        role: null != Y ? "region" : void 0,
        "aria-label": Y,
        style: ey,
        className: i()(R.kL, K),
        children: [
            eu &&
                (0, l.jsxs)("div", {
                    className: i()(R.o1, Q),
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: i()(R.x6, { [R.r9]: !es }),
                            children: (0, l.jsx)(a.K, {
                                icon: o.ArrowLargeLeftIcon,
                                buttonRef: er,
                                size: X,
                                variant: "overlay-secondary",
                                onClick: ed,
                                disabled: !es,
                                "aria-label": C.intl.string(C.t.FQx1Ru),
                                "aria-hidden": !es,
                                "aria-controls": V,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: i()(R.x6, { [R.r9]: !ea }),
                            children: (0, l.jsx)(a.K, {
                                icon: d.ArrowLargeRightIcon,
                                buttonRef: el,
                                size: X,
                                variant: "overlay-secondary",
                                onClick: ef,
                                disabled: !ea,
                                "aria-label": C.intl.string(C.t.H4hwjn),
                                "aria-hidden": !ea,
                                "aria-controls": V,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(u.hD, {
                navigator: em,
                children:
                    ((z = (0, l.jsx)(f.B, {
                        direction: "horizontal",
                        gap: $,
                        id: V,
                        "aria-label": Y,
                        ref: eL,
                        className: i()(R.Y_, B, { [R.jL]: es, [R.w6]: ea, [R.XG]: es && ea }),
                        ...ex,
                        onScroll: eh,
                        children: eM,
                    })),
                    J ? z : (0, l.jsx)(h.xp, { containerRef: ei, children: z })),
            }),
        ],
    });
};
