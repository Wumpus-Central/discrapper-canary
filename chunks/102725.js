n.d(t, { l: () => s }), n(388685);
var r = n(647438),
    i = n(374470),
    a = n(846519);
let o = 0;
function s(e) {
    let {
            targetElementRef: t,
            shouldShow: n = !0,
            delay: s,
            onTooltipShow: l,
            onTooltipHide: c,
            forceOpen: u = !1,
            overflowOnly: d = !1,
        } = e,
        f = 150,
        _ = r.useRef(null),
        p = null != t ? t : _,
        [h, m] = r.useState(!1),
        [g, E] = r.useState(!1),
        b = r.useRef(null),
        y = r.useRef(null),
        O = r.useRef(!1),
        v = r.useRef(!1),
        I = r.useRef(!1);
    r.useEffect(
        () => (
            (b.current = new a.V7()),
            (y.current = new a.V7()),
            () => {
                let e = b.current;
                null != e && e.stop();
                let t = y.current;
                null != t && t.stop();
            }
        ),
        [],
    );
    let T = null != p.current,
        S = !1 !== n && (h || u) && T && !I.current;
    r.useEffect(() => {
        S && E(!0);
    }, [S]);
    let A = r.useCallback(() => {
            E(!1);
        }, []),
        C = r.useCallback(() => {
            if (I.current) return;
            if (d && null != p.current) {
                let e = p.current;
                if ((0, i.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let e = null != s ? s : o,
                t = b.current;
            null != t &&
                t.start(
                    e,
                    () => {
                        m(!0), null == l || l();
                    },
                    !1,
                );
        }, [s, l, d, p]),
        N = r.useCallback(() => {
            var e, t;
            null == (e = b.current) || e.stop(), null == (t = y.current) || t.stop(), m(!1), null == c || c();
        }, [c]),
        R = r.useCallback(() => {
            let e = y.current;
            null != e &&
                e.start(
                    f,
                    () => {
                        O.current || v.current || N();
                    },
                    !1,
                );
        }, [N]),
        P = r.useCallback(
            (e) => {
                var t;
                null == p.current && (p.current = e.currentTarget),
                    (O.current = !0),
                    null == (t = y.current) || t.stop(),
                    (I.current = !1),
                    C();
            },
            [C, p],
        ),
        w = r.useCallback(
            (e) => {
                null == p.current && (p.current = e.currentTarget), (I.current = !1), C();
            },
            [C, p],
        ),
        D = r.useCallback(() => {
            (O.current = !1), v.current || R();
        }, [R]),
        x = r.useCallback(() => {
            var e;
            (v.current = !0), null == (e = y.current) || e.stop();
        }, []),
        L = r.useCallback(() => {
            (v.current = !1), O.current || R();
        }, [R]),
        j = r.useMemo(
            () => ({
                onMouseEnter: P,
                onMouseLeave: D,
                onFocus: w,
                onBlur: N,
                onContextMenu: N,
            }),
            [P, D, w, N],
        );
    return (
        r.useEffect(() => {
            var e, t;
            if (!S) return;
            let n = null != (t = null == (e = p.current) ? void 0 : e.ownerDocument) ? t : document,
                r = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((I.current = !0), N());
                };
            return (
                n.addEventListener("keydown", r),
                () => {
                    n.removeEventListener("keydown", r);
                }
            );
        }, [S, N, p]),
        {
            isVisible: S,
            isRendered: g,
            triggerProps: j,
            handleExitComplete: A,
            onTooltipMouseEnter: x,
            onTooltipMouseLeave: L,
        }
    );
}
