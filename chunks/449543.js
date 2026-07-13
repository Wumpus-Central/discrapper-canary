r.d(t, { A: () => A });
var l = r(627968),
    n = r(64700),
    c = r(503698),
    u = r.n(c),
    i = r(17928),
    a = r(408278),
    s = r(548411),
    o = r(554830),
    d = r(331322),
    f = r(770178),
    h = r(59520),
    b = r(775602),
    m = r(152858),
    v = r(375708),
    x = r(652046);
function E(e) {
    return `var(--space-${e})`;
}
let A = (e) => {
    let {
            children: t,
            gap: r = 24,
            edgeFade: c = "xl",
            hideActionsWhenDisabled: A = !0,
            className: p,
            iconButtonSize: y,
            scrollBehavior: L = m.Uf.PAGE,
            "aria-label": C,
            gridContainerProps: M,
            gridRowProps: k,
        } = e,
        I = n.useId(),
        g = null != M,
        w = n.useRef(0),
        W = n.useRef(0),
        j = n.useRef(0),
        R = n.useRef(!1),
        T = n.useRef(!1),
        S = n.useRef(null),
        N = n.useRef(null),
        G = (0, i.bG)([b.Ay], () => b.Ay.keyboardModeEnabled),
        D = (0, i.bG)([b.Ay], () => b.Ay.useReducedMotion),
        z = n.useMemo(
            () =>
                n.Children.map(t, (e) =>
                    n.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : n.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [U, K] = n.useState(!1),
        [Y, _] = n.useState(!1),
        [B, P] = n.useState(!0);
    function $() {
        K(W.current > w.current);
    }
    let F = n.useCallback(() => {
            let e;
            if (g || T.current) return null;
            let t = H.current;
            if (null == t || 0 === t.childElementCount) return null;
            let r = j.current,
                l = t.clientWidth,
                n = t.scrollWidth - l;
            if (r <= 0) e = 0;
            else if (r >= n) e = t.childElementCount - 1;
            else {
                let n = r + l / 2,
                    c = 0,
                    u = 1 / 0;
                for (let e = 0; e < t.children.length; e++) {
                    let r = t.children[e],
                        l = Math.abs(r.offsetLeft + r.offsetWidth / 2 - n);
                    l < u && ((u = l), (c = e));
                }
                e = c;
            }
            return (S.current = e), e;
        }, [g]),
        O = n.useCallback(() => {
            let e = H.current;
            null != e && (_(j.current > 0), P(j.current + e.clientWidth < e.scrollWidth), F());
        }, [F]),
        V = n.useCallback(() => {
            if (g) return;
            let e = H.current;
            if (null == e) return;
            let t = S.current;
            Array.from(e.children).forEach((e, r) => {
                Array.from(e.children).forEach((e) => {
                    G && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [G, g]),
        X = (0, f.w)((e) => {
            let { contentRect: t } = e;
            (w.current = t.width), null != H.current && (j.current = H.current?.scrollLeft), $(), O(), V();
        }),
        H = n.useRef(null);
    n.useEffect(() => {
        let e = H.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (W.current = e.scrollWidth), e.scrollLeft !== j.current && (e.scrollLeft = j.current), $(), O();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let r = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != N.current && N.current >= e.childElementCount && (N.current = null);
        });
        r.observe(e, { childList: !0 });
        let l = () => {
            L === m.Uf.ITEM && (j.current = e.scrollLeft), O();
        };
        return (
            e.addEventListener("scrollend", l),
            () => {
                t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", l);
            }
        );
    }, [O, L]);
    let J = n.useCallback(
            (e) => {
                let t = H.current;
                if (null == t) return;
                let r = D ? "auto" : "smooth",
                    l = Math.max(0, t.scrollWidth - t.clientWidth);
                if (g) {
                    let n = "right" === e ? t.clientWidth : -t.clientWidth,
                        c = Math.max(0, Math.min(l, j.current + n));
                    (j.current = c),
                        (R.current = !0),
                        t.addEventListener("scrollend", () => (R.current = !1), { once: !0 }),
                        t.scrollTo({ left: c, behavior: r }),
                        O();
                    return;
                }
                if (L === m.Uf.ITEM && null != t.firstElementChild) {
                    let n = S.current ?? F() ?? 0,
                        c = Math.max(0, Math.min(t.childElementCount - 1, n + ("right" === e ? 1 : -1))),
                        u = t.children[c];
                    if (null != u) {
                        let e = Math.max(0, Math.min(l, u.offsetLeft));
                        (j.current = e),
                            (R.current = !0),
                            t.addEventListener(
                                "scrollend",
                                () => {
                                    (R.current = !1), (S.current = c), (N.current = c);
                                },
                                { once: !0 },
                            ),
                            t.scrollTo({ left: e, behavior: r }),
                            O(),
                            (S.current = c),
                            (N.current = c);
                    }
                    return;
                }
                let n = "right" === e ? w.current : -w.current,
                    c = Math.max(0, Math.min(l, j.current + n));
                (j.current = c),
                    (R.current = !0),
                    t.addEventListener("scrollend", () => (R.current = !1), { once: !0 }),
                    t.scrollTo({ left: c, behavior: r }),
                    O();
                let u = F();
                null != u && (N.current = u);
            },
            [g, L, D, O, F],
        ),
        Q = n.useCallback(() => J("left"), [J]),
        Z = n.useCallback(() => J("right"), [J]),
        q = (0, h.I)(Q, 200, [Q]),
        ee = (0, h.I)(Z, 200, [Z]),
        et = n.useCallback(() => {
            let e = H.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        er = n.useCallback(() => {
            setTimeout(() => {
                if (!et()) {
                    let e = H.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        V();
                    }
                }
            }, 10);
        }, [et, V]);
    n.useEffect(() => {
        V();
    }, [G, V]);
    let el = { "--custom-edge-fade-width": E(c) };
    return (0, l.jsxs)("div", {
        ref: X,
        role: null != C ? "region" : void 0,
        "aria-label": C,
        style: el,
        className: u()(x.kL, p),
        children: [
            U &&
                (0, l.jsxs)("div", {
                    className: x.o1,
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: u()(x.x6, { [x.r9]: !Y && A }),
                            children: (0, l.jsx)(a.K, {
                                icon: s.Z,
                                size: y,
                                variant: "overlay-secondary",
                                onClick: q,
                                disabled: !Y,
                                "aria-label": v.intl.string(v.t.FQx1Ru),
                                "aria-hidden": !Y && A,
                                "aria-controls": I,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: u()(x.x6, { [x.r9]: !B && A }),
                            children: (0, l.jsx)(a.K, {
                                icon: o.K,
                                size: y,
                                variant: "overlay-secondary",
                                onClick: ee,
                                disabled: !B,
                                "aria-label": v.intl.string(v.t.H4hwjn),
                                "aria-hidden": !B && A,
                                "aria-controls": I,
                            }),
                        }),
                    ],
                }),
            g
                ? (0, l.jsx)(d.B, {
                      direction: "horizontal",
                      gap: r,
                      id: I,
                      "aria-label": C,
                      ref: H,
                      className: u()(x.Y_, { [x.jL]: Y, [x.w6]: B, [x.XG]: Y && B, [x.DY]: G }),
                      ...M,
                      tabIndex: -1,
                      onScroll: (e) => {
                          R.current || ((j.current = e.target.scrollLeft), O());
                      },
                      children: (0, l.jsx)("div", { ...k, className: x.lJ, style: { gap: E(r) }, children: t }),
                  })
                : (0, l.jsx)(d.B, {
                      direction: "horizontal",
                      gap: r,
                      id: I,
                      "aria-label": C,
                      ref: H,
                      className: u()(x.Y_, { [x.jL]: Y, [x.w6]: B, [x.XG]: Y && B, [x.DY]: G }),
                      tabIndex: 0,
                      onFocus: (e) => {
                          let t = H.current;
                          if (null != t) {
                              if (
                                  (e.preventDefault(),
                                  (null == S.current || S.current >= t.childElementCount) && F(),
                                  -1 !== t.tabIndex)
                              ) {
                                  let e = N.current,
                                      r = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                      l = t.children[r];
                                  null != l && (l.focus(), l.setAttribute("tabIndex", "0"), (S.current = r), V());
                              }
                              t.setAttribute("tabIndex", "-1");
                          }
                      },
                      onBlur: (e) => {
                          e.preventDefault(), er();
                      },
                      onKeyDown: (e) => {
                          let t = H.current;
                          if (null == t) return;
                          let r = t.children,
                              l = S.current ?? 0,
                              n = r[l];
                          null != n && n.setAttribute("tabIndex", "-1");
                          let c = ["ArrowLeft"],
                              u = ["ArrowRight"];
                          if ([...c, ...u].includes(e.key))
                              if (
                                  (e.preventDefault(),
                                  c.includes(e.key) && (l = Math.max(0, l - 1)),
                                  u.includes(e.key) && (l = Math.min(t.childElementCount - 1, l + 1)),
                                  null != (n = r[l]))
                              ) {
                                  n.setAttribute("tabIndex", "0"),
                                      t.setAttribute("tabIndex", "-1"),
                                      n.focus({ preventScroll: !0 });
                                  let e = n.offsetLeft - t.clientWidth / 2 + n.offsetWidth / 2,
                                      r = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                                  (j.current = r),
                                      r !== t.scrollLeft &&
                                          ((R.current = !0),
                                          (T.current = !0),
                                          t.addEventListener(
                                              "scrollend",
                                              () => {
                                                  (R.current = !1), (T.current = !1);
                                              },
                                              { once: !0 },
                                          ),
                                          t.scrollTo({ left: r, behavior: D ? "auto" : "smooth" })),
                                      (S.current = l),
                                      (N.current = l),
                                      V();
                              } else t.setAttribute("tabIndex", "0"), F();
                      },
                      onScroll: (e) => {
                          R.current || ((j.current = e.target.scrollLeft), O());
                      },
                      children: z,
                  }),
        ],
    });
};
