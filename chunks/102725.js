n.d(t, { l: () => l }), n(388685);
var r = n(473749),
    i = n(374470),
    a = n(846519),
    o = n(607070);
let s = 0;
function l(e) {
    let {
            targetElementRef: t,
            shouldShow: n = !0,
            delay: l,
            onTooltipShow: c,
            onTooltipHide: u,
            forceOpen: d = !1,
            overflowOnly: f = !1,
            hideOnClick: p = !0,
        } = e,
        _ = r.useRef(null),
        m = null != t ? t : _,
        [h, g] = r.useState(!1),
        E = r.useRef(null),
        b = r.useRef(!1);
    r.useEffect(
        () => (
            (E.current = new a.V7()),
            () => {
                let e = E.current;
                null != e && e.stop();
            }
        ),
        [],
    );
    let y = null != m.current,
        O = !1 !== n && (h || d) && y && !b.current,
        v = r.useCallback(() => {
            if (b.current || (f && null == m.current)) return;
            if (f && null != m.current) {
                let e = m.current;
                if ((0, i.kK)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let e = null != l ? l : s,
                t = E.current;
            null != t &&
                t.start(
                    e,
                    () => {
                        g(!0), null == c || c();
                    },
                    !1,
                );
        }, [l, c, f, m]),
        S = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), g(!1), null == u || u();
        }, [u]),
        I = r.useCallback(() => {
            p && S();
        }, [S, p]),
        T = r.useCallback(
            (e) => {
                null == m.current && (m.current = e.currentTarget), (b.current = !1), v();
            },
            [v, m],
        ),
        C = r.useCallback(
            (e) => {
                o.Z.keyboardModeEnabled && (null == m.current && (m.current = e.currentTarget), (b.current = !1), v());
            },
            [v, m],
        ),
        A = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), S();
        }, [S]),
        N = r.useMemo(
            () => ({
                onMouseEnter: T,
                onMouseLeave: A,
                onFocus: C,
                onBlur: S,
                onContextMenu: S,
                onClick: I,
            }),
            [T, A, C, S, I],
        );
    return (
        r.useEffect(() => {
            var e, t;
            if (!O) return;
            let n = null != (t = null == (e = m.current) ? void 0 : e.ownerDocument) ? t : document,
                r = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((b.current = !0), S());
                };
            return (
                n.addEventListener("keydown", r),
                () => {
                    n.removeEventListener("keydown", r);
                }
            );
        }, [O, S, m]),
        r.useEffect(() => {
            var e, t;
            if (!O) return;
            let n = null != (t = null == (e = m.current) ? void 0 : e.ownerDocument) ? t : document,
                r = () => {
                    S();
                };
            return (
                n.addEventListener("click", r),
                () => {
                    n.removeEventListener("click", r);
                }
            );
        }, [O, S, m]),
        {
            isVisible: O,
            triggerProps: N,
        }
    );
}
