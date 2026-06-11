"use strict";
n.d(t, { D: () => c });
var i = n(64700),
    r = n(66455),
    s = n(348275),
    a = n(621466),
    o = n(451988),
    l = n(775602);
let u = i.createElement("span");
function c(e) {
    var t, n;
    let c,
        d,
        _,
        h,
        f,
        p,
        E,
        m,
        g,
        A,
        I,
        T,
        {
            children: S,
            targetElementRef: y,
            asContainer: N = !1,
            containerTag: v = "span",
            ariaHidden: C = !1,
            ...R
        } = e,
        O =
            ((c = i.useRef(null)),
            {
                triggerRef: i.useCallback(
                    (e) => {
                        (c.current = e), null != y && (0, s.cZ)(y, e);
                    },
                    [y],
                ),
                targetElementRef: c,
            }),
        b = i.useId(),
        { isVisible: D, triggerProps: L } = (function (e) {
            let {
                    targetElementRef: t,
                    shouldShow: n = !0,
                    delay: r,
                    onTooltipShow: s,
                    onTooltipHide: u,
                    forceOpen: c = !1,
                    overflowOnly: d = !1,
                    hideOnClick: _ = !0,
                } = e,
                h = i.useRef(null),
                f = t ?? h,
                [p, E] = i.useState(!1),
                m = i.useRef(null),
                g = i.useRef(!1);
            i.useEffect(
                () => (
                    (m.current = new o.Ep()),
                    () => {
                        let e = m.current;
                        null != e && e.stop();
                    }
                ),
                [],
            );
            let A = null != f.current,
                I = !1 !== n && (p || c) && A && !g.current,
                T = i.useCallback(() => {
                    if (g.current || (d && null == f.current)) return;
                    if (d && null != f.current) {
                        let e = f.current;
                        if ((0, a.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
                    }
                    let e = r ?? 0,
                        t = m.current;
                    null != t &&
                        t.start(
                            e,
                            () => {
                                E(!0), s?.();
                            },
                            !1,
                        );
                }, [r, s, d, f]),
                S = i.useCallback(() => {
                    m.current?.stop(), E(!1), u?.();
                }, [u]),
                y = i.useCallback(() => {
                    _ && S();
                }, [S, _]),
                N = i.useCallback(
                    (e) => {
                        null == f.current && (f.current = e.currentTarget), (g.current = !1), T();
                    },
                    [T, f],
                ),
                v = i.useCallback(
                    (e) => {
                        l.Ay.keyboardModeEnabled &&
                            (null == f.current && (f.current = e.currentTarget), (g.current = !1), T());
                    },
                    [T, f],
                ),
                C = i.useCallback(() => {
                    m.current?.stop(), S();
                }, [S]),
                R = i.useMemo(
                    () => ({ onMouseEnter: N, onMouseLeave: C, onFocus: v, onBlur: S, onContextMenu: S, onClick: y }),
                    [N, C, v, S, y],
                );
            return (
                i.useEffect(() => {
                    if (!I) return;
                    let e = f.current?.ownerDocument ?? document,
                        t = (e) => {
                            ("Escape" === e.key || "Esc" === e.key) && ((g.current = !0), S());
                        };
                    return (
                        e.addEventListener("keydown", t),
                        () => {
                            e.removeEventListener("keydown", t);
                        }
                    );
                }, [I, S, f]),
                i.useEffect(() => {
                    if (!I) return;
                    let e = f.current?.ownerDocument ?? document,
                        t = () => {
                            S();
                        };
                    return (
                        e.addEventListener("click", t),
                        () => {
                            e.removeEventListener("click", t);
                        }
                    );
                }, [I, S, f]),
                { isVisible: I, triggerProps: R }
            );
        })({ targetElementRef: O.targetElementRef, ...R }),
        w = C ? void 0 : b,
        M =
            ((t = i.isValidElement(S) ? S : u),
            (n = O.triggerRef),
            (d = i.useCallback(
                (e) => {
                    null == e ? n(null) : "function" == typeof e.getBoundingClientRect && n(e);
                },
                [n],
            )),
            (_ = t.props.ref),
            (h = (0, r.A)(_)),
            (f = i.useCallback(
                (e) => {
                    (0, s.cZ)(h.current, e), d(e);
                },
                [h, d],
            )),
            (p = i.useRef(_)),
            i.useEffect(() => {
                p.current = _;
            }, [_]),
            (m = (E = t.props).buttonRef),
            (g = i.useCallback(
                (e) => {
                    (0, s.cZ)(m, e), f(e);
                },
                [m, f],
            )),
            (A = E.innerRef),
            (I = i.useCallback(
                (e) => {
                    (0, s.cZ)(A, e), f(e);
                },
                [A, f],
            )),
            (T = {
                onMouseEnter: (0, s.cy)(E.onMouseEnter, L.onMouseEnter),
                onMouseLeave: (0, s.cy)(E.onMouseLeave, L.onMouseLeave),
                onFocus: (0, s.cy)(E.onFocus, L.onFocus),
                onBlur: (0, s.cy)(E.onBlur, L.onBlur),
                onContextMenu: (0, s.cy)(E.onContextMenu, L.onContextMenu),
                onClick: (0, s.cy)(E.onClick, L.onClick),
            }),
            null != w && "" !== w && (T["aria-describedby"] = (0, s.iO)(E["aria-describedby"], w)),
            "string" == typeof t.type
                ? (T.ref = f)
                : "buttonRef" in t.props
                  ? ((T.buttonRef = g), (T.ref = f))
                  : "innerRef" in t.props
                    ? ((T.innerRef = I), (T.ref = f))
                    : ((T.ref = f), (T.innerRef = f)),
            i.cloneElement(t, T)),
        P = (function (e, t, n, i, r, a, o) {
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
        })(N, S, L, O.triggerRef, b, C, v);
    return { tooltipId: b, isVisible: D, targetElementRef: O.targetElementRef, trigger: P ?? M, describedById: w };
}
