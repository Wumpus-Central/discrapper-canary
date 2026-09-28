r.d(t, { A: () => E });
var l = r(477900),
    n = r(582128),
    i = r(503698),
    c = r.n(i),
    s = r(837381),
    a = r(612324),
    u = r(408278),
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
function M(e, t, r) {
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
var C = r(602034),
    W = r(66455),
    g = r(375708),
    p = r(513226);
let E = function (e) {
    let t,
        r,
        i,
        E,
        j,
        S,
        A,
        R,
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
            itemClassName: Z,
            iconButtonSize: B,
            "aria-label": D,
            maintainFocusOnReorder: Q = !1,
            disableFocusRingScope: X = !1,
        } = e,
        Y = `${n.useId()}hscroll`,
        J = n.useRef(0),
        U = n.useRef(null),
        {
            containerRef: V,
            showActions: ee,
            canScrollLeft: et,
            canScrollRight: er,
            updateActionState: el,
        } = (function (e, t) {
            let r = n.useRef(0),
                l = n.useRef(0),
                [i, c] = n.useState(!1),
                [s, a] = n.useState(!1),
                [u, o] = n.useState(!0),
                d = n.useCallback(() => {
                    let n = e.current;
                    null != n &&
                        (c(l.current > r.current), a(t.current > 0), o(t.current + n.clientWidth < n.scrollWidth));
                }, [e, t]),
                f = (0, v.w)((l) => {
                    let { contentRect: n } = l;
                    ((r.current = n.width), null != e.current && (t.current = e.current.scrollLeft), d());
                });
            return (
                n.useEffect(() => {
                    let r = e.current;
                    if (null == r) return;
                    let n = new ResizeObserver(() => {
                        ((l.current = r.scrollWidth), r.scrollLeft !== t.current && (r.scrollLeft = t.current), d());
                    });
                    Array.from(r.children).forEach((e) => {
                        n.observe(e);
                    });
                    let i = new MutationObserver(() => {
                        (n.disconnect(),
                            Array.from(r.children).forEach((e) => {
                                n.observe(e);
                            }));
                    });
                    function c() {
                        d();
                    }
                    return (
                        i.observe(r, { childList: !0 }),
                        r.addEventListener("scrollend", c),
                        () => {
                            (n.disconnect(), i.disconnect(), r.removeEventListener("scrollend", c));
                        }
                    );
                }, [e, t, d]),
                { containerRef: f, showActions: i, canScrollLeft: s, canScrollRight: u, updateActionState: d }
            );
        })(U, J),
        {
            onClickScrollLeft: en,
            onClickScrollRight: ei,
            onScroll: ec,
            listNavigator: es,
        } = ((t = (0, L.bG)([y.Ay], () => y.Ay.useReducedMotion) ? "auto" : "smooth"),
        (r = (0, L.bG)([y.Ay], () => y.Ay.keyboardModeEnabled)),
        (i = n.useRef(!1)),
        (E = n.useRef(0)),
        (j = n.useCallback(
            (e) => {
                let r = U.current;
                return null == r || r.scrollLeft === e
                    ? Promise.resolve()
                    : ((J.current = e),
                      (i.current = !0),
                      new Promise((l) => {
                          let n = !1;
                          function c() {
                              n ||
                                  ((n = !0),
                                  clearTimeout(s),
                                  U.current?.removeEventListener("scrollend", c),
                                  (i.current = !1),
                                  l());
                          }
                          let s = setTimeout(c, 1e3);
                          (r.addEventListener("scrollend", c, { once: !0 }),
                              r.scrollTo({ left: e, behavior: t }),
                              el());
                      }));
            },
            [t, el, U, J],
        )),
        (S = n.useCallback(() => j(0), [j])),
        (A = n.useCallback(() => {
            let e = U.current;
            return j(null == e ? 0 : Math.max(0, e.scrollWidth - e.clientWidth));
        }, [j, U])),
        (R = n.useCallback(
            (e) => {
                i.current || ((J.current = e.target.scrollLeft), el());
            },
            [el, J],
        )),
        (w = n.useCallback(
            (e, t) => {
                let r = U.current,
                    l = document.querySelector(e);
                if (null == r || null == l) return;
                let n = ++E.current,
                    i = Number(t),
                    c = r.children[i];
                if (null == c) return void l.focus({ preventScroll: !0 });
                let s = Math.max(0, r.scrollWidth - r.clientWidth),
                    a = J.current,
                    u = a + r.clientWidth,
                    o = c.offsetLeft,
                    d = o + c.offsetWidth,
                    f = o < a;
                f || d > u
                    ? j(
                          Math.max(
                              0,
                              Math.min(
                                  s,
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
                          E.current === n && l.focus({ preventScroll: !0 });
                      })
                    : l.focus({ preventScroll: !0 });
            },
            [j, _, U, J],
        )),
        (N = (0, b.Ay)({
            id: Y,
            isEnabled: r,
            orientation: x.Gl.HORIZONTAL,
            defaultFocused: "0",
            scrollToStart: S,
            scrollToEnd: A,
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
                if (c !== e.scrollLeft) (j(c), N.setFocus(m(t)));
                else {
                    let r = Math.max(0, Math.min(e.childElementCount - 1, t + l)),
                        n = e.children[r];
                    if (null == n || r === t) return;
                    (j(i(n)), N.setFocus(m(r)));
                }
            },
            [j, N],
        )),
        (H = n.useCallback(
            (e) => {
                let t = U.current;
                if (null == t) return;
                let r = "left" === e ? -1 : 1;
                if ("item" === _) {
                    let { index: l, isPartiallyHidden: n } = M("left", t, J.current, 16),
                        i = "left" === e && n ? l : Math.max(0, Math.min(t.childElementCount - 1, l + r));
                    F(t, i, "start", r);
                } else {
                    let { index: l, isPartiallyHidden: n } = M(e, t, J.current, 16),
                        i = n ? l : Math.max(0, Math.min(t.childElementCount - 1, l + r));
                    F(t, i, "left" === e ? "end" : "start", r);
                }
            },
            [_, F, U, J],
        )),
        (I = n.useCallback(() => H("left"), [H])),
        (P = n.useCallback(() => H("right"), [H])),
        {
            onClickScrollLeft: (0, k.I)(I, 200, [I]),
            onClickScrollRight: (0, k.I)(P, 200, [P]),
            onScroll: R,
            listNavigator: N,
        }),
        { ref: ea, ...eu } = (0, s.LT)(es),
        eo = (0, a.A)(U, ea);
    !(function (e) {
        let {
                items: t,
                scrollerRef: r,
                expectedScrollEndRef: l,
                listNavigator: i,
                listId: c,
                containerRef: s,
                enabled: a,
            } = e,
            u = (0, W.A)(i);
        n.useLayoutEffect(() => {
            if (!a) return;
            let e = r.current,
                n = u.current,
                i = n.focusedItemId();
            if (null == e || 0 === t.length || null == i) return;
            e.scrollLeft = l.current;
            let o = m(Math.min(Number(i), t.length - 1));
            if ((n.setFocus(o), !e.contains(document.activeElement))) return;
            let d = s.current?.querySelector((0, C.Mz)((0, C.t$)(c, o)));
            d?.focus({ preventScroll: !0 });
        }, [t, c, s, r, l, u, a]);
    })({
        items: G,
        scrollerRef: U,
        expectedScrollEndRef: J,
        listNavigator: es,
        listId: Y,
        containerRef: V,
        enabled: Q,
    });
    let ed = n.useMemo(
            () =>
                G.map((e, t) =>
                    (0, l.jsx)(
                        s.tG,
                        {
                            id: m(t),
                            children: (r) => {
                                let { role: n, ...i } = r;
                                return (0, l.jsx)("div", {
                                    role: "listitem",
                                    className: c()(p.Aw, Z),
                                    children: O(e, i, t),
                                });
                            },
                        },
                        T(e),
                    ),
                ),
            [G, T, O, Z],
        ),
        ef = { "--custom-edge-fade-width": `var(--space-${$})` };
    return (0, l.jsxs)("div", {
        ref: V,
        role: null != D ? "region" : void 0,
        "aria-label": D,
        style: ef,
        className: c()(p.kL, q),
        children: [
            ee &&
                (0, l.jsxs)("div", {
                    className: p.o1,
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: c()(p.x6, { [p.r9]: !et }),
                            children: (0, l.jsx)(u.K, {
                                icon: o.Z,
                                size: B,
                                variant: "overlay-secondary",
                                onClick: en,
                                disabled: !et,
                                "aria-label": g.intl.string(g.t.FQx1Ru),
                                "aria-hidden": !et,
                                "aria-controls": Y,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: c()(p.x6, { [p.r9]: !er }),
                            children: (0, l.jsx)(u.K, {
                                icon: d.K,
                                size: B,
                                variant: "overlay-secondary",
                                onClick: ei,
                                disabled: !er,
                                "aria-label": g.intl.string(g.t.H4hwjn),
                                "aria-hidden": !er,
                                "aria-controls": Y,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(s.hD, {
                navigator: es,
                children:
                    ((z = (0, l.jsx)(f.B, {
                        direction: "horizontal",
                        gap: K,
                        id: Y,
                        "aria-label": D,
                        ref: eo,
                        className: c()(p.Y_, { [p.jL]: et, [p.w6]: er, [p.XG]: et && er }),
                        ...eu,
                        onScroll: ec,
                        children: ed,
                    })),
                    X ? z : (0, l.jsx)(h.xp, { containerRef: V, children: z })),
            }),
        ],
    });
};
