"use strict";
n.d(t, { D: () => c });
var i = n(64700),
    r = n(66455),
    a = n(710778),
    s = n(621466),
    l = n(451988),
    o = n(844222);
let d = i.createElement("span");
function c(e) {
    var t, n;
    let c,
        u,
        _,
        E,
        A,
        h,
        I,
        f,
        p,
        T,
        m,
        g,
        {
            children: S,
            targetElementRef: N,
            asContainer: C = !1,
            containerTag: R = "span",
            ariaHidden: O = !1,
            ...L
        } = e,
        D =
            ((c = i.useRef(null)),
            {
                triggerRef: i.useCallback(
                    (e) => {
                        (c.current = e), null != N && (0, a.cZ)(N, e);
                    },
                    [N],
                ),
                targetElementRef: c,
            }),
        y = i.useId(),
        { isVisible: v, triggerProps: b } = (function (e) {
            let {
                    targetElementRef: t,
                    shouldShow: n = !0,
                    delay: r,
                    onTooltipShow: a,
                    onTooltipHide: d,
                    forceOpen: c = !1,
                    overflowOnly: u = !1,
                    hideOnClick: _ = !0,
                } = e,
                { keyboardModeEnabled: E } = i.useContext(o.C),
                A = i.useRef(null),
                h = t ?? A,
                [I, f] = i.useState(!1),
                p = i.useRef(null),
                T = i.useRef(!1);
            i.useEffect(
                () => (
                    (p.current = new l.Ep()),
                    () => {
                        let e = p.current;
                        null != e && e.stop();
                    }
                ),
                [],
            );
            let m = null != h.current,
                g = !1 !== n && (I || c) && m && !T.current,
                S = i.useCallback(() => {
                    if (T.current || (u && null == h.current)) return;
                    if (u && null != h.current) {
                        let e = h.current;
                        if ((0, s.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
                    }
                    let e = r ?? 0,
                        t = p.current;
                    null != t &&
                        t.start(
                            e,
                            () => {
                                f(!0), a?.();
                            },
                            !1,
                        );
                }, [r, a, u, h]),
                N = i.useCallback(() => {
                    p.current?.stop(), f(!1), d?.();
                }, [d]),
                C = i.useCallback(() => {
                    _ && N();
                }, [N, _]),
                R = i.useCallback(
                    (e) => {
                        null == h.current && (h.current = e.currentTarget), (T.current = !1), S();
                    },
                    [S, h],
                ),
                O = i.useCallback(
                    (e) => {
                        E && (null == h.current && (h.current = e.currentTarget), (T.current = !1), S());
                    },
                    [E, S, h],
                ),
                L = i.useCallback(() => {
                    p.current?.stop(), N();
                }, [N]),
                D = i.useMemo(
                    () => ({ onMouseEnter: R, onMouseLeave: L, onFocus: O, onBlur: N, onContextMenu: N, onClick: C }),
                    [R, L, O, N, C],
                );
            return (
                i.useEffect(() => {
                    if (!g) return;
                    let e = h.current?.ownerDocument ?? document;
                    function t(e) {
                        ("Escape" === e.key || "Esc" === e.key) && ((T.current = !0), N());
                    }
                    return (
                        e.addEventListener("keydown", t),
                        () => {
                            e.removeEventListener("keydown", t);
                        }
                    );
                }, [g, N, h]),
                i.useEffect(() => {
                    if (!g) return;
                    let e = h.current?.ownerDocument ?? document;
                    function t() {
                        N();
                    }
                    return (
                        e.addEventListener("click", t),
                        () => {
                            e.removeEventListener("click", t);
                        }
                    );
                }, [g, N, h]),
                { isVisible: g, triggerProps: D }
            );
        })({ targetElementRef: D.targetElementRef, ...L }),
        M = O ? void 0 : y,
        P =
            ((t = i.isValidElement(S) ? S : d),
            (n = D.triggerRef),
            (u = i.useCallback(
                (e) => {
                    null == e ? n(null) : "function" == typeof e.getBoundingClientRect && n(e);
                },
                [n],
            )),
            (_ = t.props.ref),
            (E = (0, r.A)(_)),
            (A = i.useCallback(
                (e) => {
                    (0, a.cZ)(E.current, e), u(e);
                },
                [E, u],
            )),
            (h = i.useRef(_)),
            i.useEffect(() => {
                h.current = _;
            }, [_]),
            (f = (I = t.props).buttonRef),
            (p = i.useCallback(
                (e) => {
                    (0, a.cZ)(f, e), A(e);
                },
                [f, A],
            )),
            (T = I.innerRef),
            (m = i.useCallback(
                (e) => {
                    (0, a.cZ)(T, e), A(e);
                },
                [T, A],
            )),
            (g = {
                onMouseEnter: (0, a.cy)(I.onMouseEnter, b.onMouseEnter),
                onMouseLeave: (0, a.cy)(I.onMouseLeave, b.onMouseLeave),
                onFocus: (0, a.cy)(I.onFocus, b.onFocus),
                onBlur: (0, a.cy)(I.onBlur, b.onBlur),
                onContextMenu: (0, a.cy)(I.onContextMenu, b.onContextMenu),
                onClick: (0, a.cy)(I.onClick, b.onClick),
            }),
            null != M && "" !== M && (g["aria-describedby"] = (0, a.iO)(I["aria-describedby"], M)),
            "string" == typeof t.type
                ? (g.ref = A)
                : "buttonRef" in t.props
                  ? ((g.buttonRef = p), (g.ref = A))
                  : "innerRef" in t.props
                    ? ((g.innerRef = m), (g.ref = A))
                    : ((g.ref = A), (g.innerRef = A)),
            i.cloneElement(t, g)),
        U = (function (e, t, n, i, r, s, l) {
            if (!e) return null;
            let o = s
                ? n
                : {
                      ...n,
                      onFocus: (0, a.cy)(n.onFocus, (e) => {
                          let t = e.target;
                          if (null != t) {
                              let e = (0, a.iO)(t.getAttribute("aria-describedby") ?? void 0, r);
                              t.setAttribute("aria-describedby", e);
                          }
                      }),
                      onBlur: (0, a.cy)(n.onBlur, (e) => {
                          let t = e.target;
                          if (null != t) {
                              let e = t.getAttribute("aria-describedby");
                              if (null != e) {
                                  let n = e.split(" ").filter((e) => e !== r);
                                  n.length > 0
                                      ? t.setAttribute("aria-describedby", n.join(" "))
                                      : t.removeAttribute("aria-describedby");
                              }
                          }
                      }),
                  };
            return (0, a.EE)({ tag: l, children: t, triggerHandlers: o, triggerRef: i });
        })(C, S, b, D.triggerRef, y, O, R);
    return { tooltipId: y, isVisible: v, targetElementRef: D.targetElementRef, trigger: U ?? P, describedById: M };
}
