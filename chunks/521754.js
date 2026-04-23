"use strict";
n.d(t, { D: () => _ });
var i = n(64700),
    r = n(66455),
    s = n(348275),
    a = n(621466),
    o = n(451988),
    l = n(775602);
let d = i.createElement("span");
function _(e) {
    var t, n;
    let _,
        u,
        c,
        E,
        h,
        m,
        f,
        g,
        p,
        A,
        I,
        T,
        {
            children: S,
            targetElementRef: N,
            asContainer: C = !1,
            containerTag: R = "span",
            ariaHidden: O = !1,
            ...y
        } = e,
        v =
            ((_ = i.useRef(null)),
            {
                triggerRef: i.useCallback(
                    (e) => {
                        (_.current = e), null != N && (0, s.cZ)(N, e);
                    },
                    [N],
                ),
                targetElementRef: _,
            }),
        D = i.useId(),
        { isVisible: L, triggerProps: b } = (function (e) {
            let {
                    targetElementRef: t,
                    shouldShow: n = !0,
                    delay: r,
                    onTooltipShow: s,
                    onTooltipHide: d,
                    forceOpen: _ = !1,
                    overflowOnly: u = !1,
                    hideOnClick: c = !0,
                } = e,
                E = i.useRef(null),
                h = t ?? E,
                [m, f] = i.useState(!1),
                g = i.useRef(null),
                p = i.useRef(!1);
            i.useEffect(
                () => (
                    (g.current = new o.Ep()),
                    () => {
                        let e = g.current;
                        null != e && e.stop();
                    }
                ),
                [],
            );
            let A = null != h.current,
                I = !1 !== n && (m || _) && A && !p.current,
                T = i.useCallback(() => {
                    if (p.current || (u && null == h.current)) return;
                    if (u && null != h.current) {
                        let e = h.current;
                        if ((0, a.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
                    }
                    let e = r ?? 0,
                        t = g.current;
                    null != t &&
                        t.start(
                            e,
                            () => {
                                f(!0), s?.();
                            },
                            !1,
                        );
                }, [r, s, u, h]),
                S = i.useCallback(() => {
                    g.current?.stop(), f(!1), d?.();
                }, [d]),
                N = i.useCallback(() => {
                    c && S();
                }, [S, c]),
                C = i.useCallback(
                    (e) => {
                        null == h.current && (h.current = e.currentTarget), (p.current = !1), T();
                    },
                    [T, h],
                ),
                R = i.useCallback(
                    (e) => {
                        l.A.keyboardModeEnabled &&
                            (null == h.current && (h.current = e.currentTarget), (p.current = !1), T());
                    },
                    [T, h],
                ),
                O = i.useCallback(() => {
                    g.current?.stop(), S();
                }, [S]),
                y = i.useMemo(
                    () => ({ onMouseEnter: C, onMouseLeave: O, onFocus: R, onBlur: S, onContextMenu: S, onClick: N }),
                    [C, O, R, S, N],
                );
            return (
                i.useEffect(() => {
                    if (!I) return;
                    let e = h.current?.ownerDocument ?? document,
                        t = (e) => {
                            ("Escape" === e.key || "Esc" === e.key) && ((p.current = !0), S());
                        };
                    return (
                        e.addEventListener("keydown", t),
                        () => {
                            e.removeEventListener("keydown", t);
                        }
                    );
                }, [I, S, h]),
                i.useEffect(() => {
                    if (!I) return;
                    let e = h.current?.ownerDocument ?? document,
                        t = () => {
                            S();
                        };
                    return (
                        e.addEventListener("click", t),
                        () => {
                            e.removeEventListener("click", t);
                        }
                    );
                }, [I, S, h]),
                { isVisible: I, triggerProps: y }
            );
        })({ targetElementRef: v.targetElementRef, ...y }),
        w = O ? void 0 : D,
        P =
            ((t = i.isValidElement(S) ? S : d),
            (n = v.triggerRef),
            (u = i.useCallback(
                (e) => {
                    null == e ? n(null) : "function" == typeof e.getBoundingClientRect && n(e);
                },
                [n],
            )),
            (c = t.props.ref),
            (E = (0, r.A)(c)),
            (h = i.useCallback(
                (e) => {
                    (0, s.cZ)(E.current, e), u(e);
                },
                [E, u],
            )),
            (m = i.useRef(c)),
            i.useEffect(() => {
                m.current = c;
            }, [c]),
            (g = (f = t.props).buttonRef),
            (p = i.useCallback(
                (e) => {
                    (0, s.cZ)(g, e), h(e);
                },
                [g, h],
            )),
            (A = f.innerRef),
            (I = i.useCallback(
                (e) => {
                    (0, s.cZ)(A, e), h(e);
                },
                [A, h],
            )),
            (T = {
                onMouseEnter: (0, s.cy)(f.onMouseEnter, b.onMouseEnter),
                onMouseLeave: (0, s.cy)(f.onMouseLeave, b.onMouseLeave),
                onFocus: (0, s.cy)(f.onFocus, b.onFocus),
                onBlur: (0, s.cy)(f.onBlur, b.onBlur),
                onContextMenu: (0, s.cy)(f.onContextMenu, b.onContextMenu),
                onClick: (0, s.cy)(f.onClick, b.onClick),
            }),
            null != w && "" !== w && (T["aria-describedby"] = (0, s.iO)(f["aria-describedby"], w)),
            "string" == typeof t.type
                ? (T.ref = h)
                : "buttonRef" in t.props
                  ? ((T.buttonRef = p), (T.ref = h))
                  : "innerRef" in t.props
                    ? ((T.innerRef = I), (T.ref = h))
                    : ((T.ref = h), (T.innerRef = h)),
            i.cloneElement(t, T)),
        k = (function (e, t, n, i, r, a, o) {
            if (!e) return null;
            let l = a
                ? n
                : {
                      ...n,
                      onFocus: (0, s.cy)(n.onFocus, (e) => {
                          let t = e.target;
                          if (null != t) {
                              let e = (0, s.iO)(t.getAttribute("aria-describedby") ?? void 0, r);
                              t.setAttribute("aria-describedby", e);
                          }
                      }),
                      onBlur: (0, s.cy)(n.onBlur, (e) => {
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
            return (0, s.EE)({ tag: o, children: t, triggerHandlers: l, triggerRef: i });
        })(C, S, b, v.triggerRef, D, O, R);
    return { tooltipId: D, isVisible: L, targetElementRef: v.targetElementRef, trigger: k ?? P, describedById: w };
}
