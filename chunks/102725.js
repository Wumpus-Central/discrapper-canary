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
            hideOnClick: _ = !0,
        } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        [m, g] = r.useState(!1),
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
    let y = null != h.current,
        O = !1 !== n && (m || d) && y && !b.current,
        v = r.useCallback(() => {
            if (b.current || (f && null == h.current)) return;
            if (f && null != h.current) {
                let e = h.current;
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
        }, [l, c, f, h]),
        I = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), g(!1), null == u || u();
        }, [u]),
        T = r.useCallback(() => {
            _ && I();
        }, [I, _]),
        S = r.useCallback(
            (e) => {
                null == h.current && (h.current = e.currentTarget), (b.current = !1), v();
            },
            [v, h],
        ),
        A = r.useCallback(
            (e) => {
                o.Z.keyboardModeEnabled && (null == h.current && (h.current = e.currentTarget), (b.current = !1), v());
            },
            [v, h],
        ),
        C = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), I();
        }, [I]),
        N = r.useMemo(
            () => ({
                onMouseEnter: S,
                onMouseLeave: C,
                onFocus: A,
                onBlur: I,
                onContextMenu: I,
                onClick: T,
            }),
            [S, C, A, I, T],
        );
    return (
        r.useEffect(() => {
            var e, t;
            if (!O) return;
            let n = null != (t = null == (e = h.current) ? void 0 : e.ownerDocument) ? t : document,
                r = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((b.current = !0), I());
                };
            return (
                n.addEventListener("keydown", r),
                () => {
                    n.removeEventListener("keydown", r);
                }
            );
        }, [O, I, h]),
        r.useEffect(() => {
            var e, t;
            if (!O) return;
            let n = null != (t = null == (e = h.current) ? void 0 : e.ownerDocument) ? t : document,
                r = () => {
                    I();
                };
            return (
                n.addEventListener("click", r),
                () => {
                    n.removeEventListener("click", r);
                }
            );
        }, [O, I, h]),
        {
            isVisible: O,
            triggerProps: N,
        }
    );
}
