r.d(t, { A: () => R });
var l = r(477900),
    n = r(582128),
    i = r(503698),
    c = r.n(i),
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
    b = r(887129),
    x = r(741918),
    L = r(17928),
    k = r(59520),
    y = r(775602);
function C(e, t, r) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return "left" === e
        ? (function (e, t, r) {
              let l = t + r,
                  n = t + e.clientWidth - r;
              for (let t = 0; t < e.children.length; t++) {
                  let r = e.children[t],
                      i = r.offsetLeft;
                  if (r.offsetLeft + r.offsetWidth > l && i < n) return { index: t, isPartiallyHidden: i < l - 1 };
              }
              return { index: 0, isPartiallyHidden: !1 };
          })(t, r, l)
        : (function (e, t, r) {
              let l = t + r,
                  n = t + e.clientWidth - r;
              for (let t = e.children.length - 1; t >= 0; t--) {
                  let r = e.children[t],
                      i = r.offsetLeft,
                      c = r.offsetLeft + r.offsetWidth;
                  if (c > l && i < n) return { index: t, isPartiallyHidden: c > n + 1 };
              }
              return { index: Math.max(0, e.children.length - 1), isPartiallyHidden: !1 };
          })(t, r, l);
}
var M = r(602034),
    W = r(66455),
    g = r(105292),
    p = r(513226);
let R = function (e) {
    let t,
        r,
        i,
        R,
        E,
        S,
        j,
        A,
        w,
        N,
        F,
        H,
        I,
        P,
        z,
        {
            items: G,
            getItemKey: T,
            renderItem: O,
            gap: K = 24,
            edgeFade: $ = "xl",
            scrollStep: _ = "page",
            className: q,
            scrollerClassName: Z,
            itemClassName: B,
            actionsClassName: D,
            iconButtonSize: Q,
            "aria-label": X,
            maintainFocusOnReorder: Y = !1,
            disableFocusRingScope: J = !1,
        } = e,
        U = `${n.useId()}hscroll`,
        V = n.useRef(0),
        ee = n.useRef(null),
        et = n.useRef(null),
        er = n.useRef(null),
        el = n.useRef(null),
        en = n.useCallback((e, t, r) => {
            el.current = null;
            let l = document.activeElement,
                n = l === et.current,
                i = l === er.current;
            if ((n && (!e || !t)) || (i && (!e || !r))) {
                let l = n ? er.current : et.current;
                el.current = e && (n ? r : t) ? l : ee.current;
            }
        }, []),
        {
            containerRef: ei,
            showActions: ec,
            canScrollLeft: eu,
            canScrollRight: es,
            updateActionState: ea,
        } = (function (e, t, r) {
            let l = n.useRef(0),
                i = n.useRef(0),
                [c, u] = n.useState(!1),
                [s, a] = n.useState(!1),
                [o, d] = n.useState(!0),
                f = n.useCallback(() => {
                    let n = e.current;
                    if (null == n) return;
                    let c = i.current > l.current,
                        s = t.current > 0,
                        o = t.current < n.scrollWidth - n.clientWidth - 1;
                    (r(c, s, o), u(c), a(s), d(o));
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
                        ((i.current = r.scrollWidth), r.scrollLeft !== t.current && (r.scrollLeft = t.current), f());
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
                    function c() {
                        f();
                    }
                    return (
                        n.observe(r, { childList: !0 }),
                        r.addEventListener("scrollend", c),
                        () => {
                            (l.disconnect(), n.disconnect(), r.removeEventListener("scrollend", c));
                        }
                    );
                }, [e, t, f]),
                { containerRef: h, showActions: c, canScrollLeft: s, canScrollRight: o, updateActionState: f }
            );
        })(ee, V, en);
    n.useLayoutEffect(() => {
        (el.current?.focus({ preventScroll: !0 }), (el.current = null));
    }, [ec, eu, es]);
    let {
            onClickScrollLeft: eo,
            onClickScrollRight: ed,
            onScroll: ef,
            listNavigator: eh,
        } = ((t = (0, L.bG)([y.Ay], () => y.Ay.useReducedMotion) ? "auto" : "smooth"),
        (r = (0, L.bG)([y.Ay], () => y.Ay.keyboardModeEnabled)),
        (i = n.useRef(!1)),
        (R = n.useRef(0)),
        (E = n.useCallback(
            (e) => {
                let r = ee.current;
                return null == r || r.scrollLeft === e
                    ? Promise.resolve()
                    : ((V.current = e),
                      (i.current = !0),
                      new Promise((l) => {
                          let n = !1;
                          function c() {
                              n ||
                                  ((n = !0),
                                  clearTimeout(u),
                                  ee.current?.removeEventListener("scrollend", c),
                                  (i.current = !1),
                                  l());
                          }
                          let u = setTimeout(c, 1e3);
                          (r.addEventListener("scrollend", c, { once: !0 }),
                              r.scrollTo({ left: e, behavior: t }),
                              ea());
                      }));
            },
            [t, ea, ee, V],
        )),
        (S = n.useCallback(() => E(0), [E])),
        (j = n.useCallback(() => {
            let e = ee.current;
            return E(null == e ? 0 : Math.max(0, e.scrollWidth - e.clientWidth));
        }, [E, ee])),
        (A = n.useCallback(
            (e) => {
                i.current || ((V.current = e.target.scrollLeft), ea());
            },
            [ea, V],
        )),
        (w = n.useCallback(
            (e, t) => {
                let r = ee.current,
                    l = document.querySelector(e);
                if (null == r || null == l) return;
                let n = ++R.current,
                    i = Number(t),
                    c = r.children[i];
                if (null == c) return void l.focus({ preventScroll: !0 });
                let u = Math.max(0, r.scrollWidth - r.clientWidth),
                    s = V.current,
                    a = s + r.clientWidth,
                    o = c.offsetLeft,
                    d = o + c.offsetWidth,
                    f = o < s;
                f || d > a
                    ? E(
                          Math.max(
                              0,
                              Math.min(
                                  u,
                                  "item" === _
                                      ? f
                                          ? o - 16
                                          : d - r.clientWidth + 16
                                      : f
                                        ? d - r.clientWidth + 16
                                        : o - 16,
                              ),
                          ),
                      ).then(() => {
                          R.current === n && l.focus({ preventScroll: !0 });
                      })
                    : l.focus({ preventScroll: !0 });
            },
            [E, _, ee, V],
        )),
        (N = (0, b.Ay)({
            id: U,
            isEnabled: r,
            orientation: x.Gl.HORIZONTAL,
            defaultFocused: "0",
            scrollToStart: S,
            scrollToEnd: j,
            setFocus: w,
        })),
        (F = n.useCallback(
            (e, t, r, l) => {
                let n = e.children[t];
                if (null == n) return;
                function i(t) {
                    let l = "start" === r ? t.offsetLeft - 16 : t.offsetLeft + t.offsetWidth - e.clientWidth + 16;
                    return Math.max(0, Math.min(Math.max(0, e.scrollWidth - e.clientWidth), l));
                }
                let c = i(n);
                if (c !== e.scrollLeft) (E(c), N.setFocus(m(t)));
                else {
                    let r = Math.max(0, Math.min(e.childElementCount - 1, t + l)),
                        n = e.children[r];
                    if (null == n || r === t) return;
                    (E(i(n)), N.setFocus(m(r)));
                }
            },
            [E, N],
        )),
        (H = n.useCallback(
            (e) => {
                let t = ee.current;
                if (null == t) return;
                let r = "left" === e ? -1 : 1;
                if ("item" === _) {
                    let { index: l, isPartiallyHidden: n } = C("left", t, V.current, 16),
                        i = "left" === e && n ? l : Math.max(0, Math.min(t.childElementCount - 1, l + r));
                    F(t, i, "start", r);
                } else {
                    let { index: l, isPartiallyHidden: n } = C(e, t, V.current, 16),
                        i = n ? l : Math.max(0, Math.min(t.childElementCount - 1, l + r));
                    F(t, i, "left" === e ? "end" : "start", r);
                }
            },
            [_, F, ee, V],
        )),
        (I = n.useCallback(() => H("left"), [H])),
        (P = n.useCallback(() => H("right"), [H])),
        {
            onClickScrollLeft: (0, k.I)(I, 200, [I]),
            onClickScrollRight: (0, k.I)(P, 200, [P]),
            onScroll: A,
            listNavigator: N,
        }),
        { ref: em, ...ev } = (0, u.LT)(eh),
        eb = (0, s.A)(ee, em);
    !(function (e) {
        let {
                items: t,
                scrollerRef: r,
                expectedScrollEndRef: l,
                listNavigator: i,
                listId: c,
                containerRef: u,
                enabled: s,
            } = e,
            a = (0, W.A)(i);
        n.useLayoutEffect(() => {
            if (!s) return;
            let e = r.current,
                n = a.current,
                i = n.focusedItemId();
            if (null == e || 0 === t.length || null == i) return;
            e.scrollLeft = l.current;
            let o = m(Math.min(Number(i), t.length - 1));
            if ((n.setFocus(o), !e.contains(document.activeElement))) return;
            let d = u.current?.querySelector((0, M.Mz)((0, M.t$)(c, o)));
            d?.focus({ preventScroll: !0 });
        }, [t, c, u, r, l, a, s]);
    })({
        items: G,
        scrollerRef: ee,
        expectedScrollEndRef: V,
        listNavigator: eh,
        listId: U,
        containerRef: ei,
        enabled: Y,
    });
    let ex = n.useMemo(
            () =>
                G.map((e, t) =>
                    (0, l.jsx)(
                        u.tG,
                        {
                            id: m(t),
                            children: (r) => {
                                let { role: n, ...i } = r;
                                return (0, l.jsx)("div", {
                                    role: "listitem",
                                    className: c()(p.Aw, B),
                                    children: O(e, i, t),
                                });
                            },
                        },
                        T(e),
                    ),
                ),
            [G, T, O, B],
        ),
        eL = { "--custom-edge-fade-width": `var(--space-${$})` };
    return (0, l.jsxs)("div", {
        ref: ei,
        role: null != X ? "region" : void 0,
        "aria-label": X,
        style: eL,
        className: c()(p.kL, q),
        children: [
            ec &&
                (0, l.jsxs)("div", {
                    className: c()(p.o1, D),
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: c()(p.x6, { [p.r9]: !eu }),
                            children: (0, l.jsx)(a.K, {
                                icon: o.Z,
                                buttonRef: et,
                                size: Q,
                                variant: "overlay-secondary",
                                onClick: eo,
                                disabled: !eu,
                                "aria-label": g.intl.string(g.t.FQx1Ru),
                                "aria-hidden": !eu,
                                "aria-controls": U,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: c()(p.x6, { [p.r9]: !es }),
                            children: (0, l.jsx)(a.K, {
                                icon: d.K,
                                buttonRef: er,
                                size: Q,
                                variant: "overlay-secondary",
                                onClick: ed,
                                disabled: !es,
                                "aria-label": g.intl.string(g.t.H4hwjn),
                                "aria-hidden": !es,
                                "aria-controls": U,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(u.hD, {
                navigator: eh,
                children:
                    ((z = (0, l.jsx)(f.B, {
                        direction: "horizontal",
                        gap: K,
                        id: U,
                        "aria-label": X,
                        ref: eb,
                        className: c()(p.Y_, Z, { [p.jL]: eu, [p.w6]: es, [p.XG]: eu && es }),
                        ...ev,
                        onScroll: ef,
                        children: ex,
                    })),
                    J ? z : (0, l.jsx)(h.xp, { containerRef: ei, children: z })),
            }),
        ],
    });
};
