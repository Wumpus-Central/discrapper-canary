n.d(t, {
    f: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(621466),
    a = n(451988),
    s = n(775602);
let o = 0;

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
        h = null != t ? t : _,
        [m, g] = r.useState(!1),
        E = r.useRef(null),
        b = r.useRef(!1);
    r.useEffect(
        () => (
            (E.current = new a.Ep()),
            () => {
                let e = E.current;
                null != e && e.stop();
            }
        ),
        [],
    );
    let y = null != h.current,
        O = !1 !== n && (m || d) && y && !b.current,
        A = r.useCallback(() => {
            if (b.current || (f && null == h.current)) return;
            if (f && null != h.current) {
                let e = h.current;
                if ((0, i.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let e = null != l ? l : o,
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
        v = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), g(!1), null == u || u();
        }, [u]),
        S = r.useCallback(() => {
            p && v();
        }, [v, p]),
        I = r.useCallback(
            (e) => {
                null == h.current && (h.current = e.currentTarget), (b.current = !1), A();
            },
            [A, h],
        ),
        T = r.useCallback(
            (e) => {
                s.A.keyboardModeEnabled && (null == h.current && (h.current = e.currentTarget), (b.current = !1), A());
            },
            [A, h],
        ),
        C = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.stop(), v();
        }, [v]),
        N = r.useMemo(
            () => ({
                onMouseEnter: I,
                onMouseLeave: C,
                onFocus: T,
                onBlur: v,
                onContextMenu: v,
                onClick: S,
            }),
            [I, C, T, v, S],
        );
    return (
        r.useEffect(() => {
            var e, t;
            if (!O) return;
            let n = null != (e = null == (t = h.current) ? void 0 : t.ownerDocument) ? e : document,
                r = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((b.current = !0), v());
                };
            return (
                n.addEventListener("keydown", r),
                () => {
                    n.removeEventListener("keydown", r);
                }
            );
        }, [O, v, h]),
        r.useEffect(() => {
            var e, t;
            if (!O) return;
            let n = null != (e = null == (t = h.current) ? void 0 : t.ownerDocument) ? e : document,
                r = () => {
                    v();
                };
            return (
                n.addEventListener("click", r),
                () => {
                    n.removeEventListener("click", r);
                }
            );
        }, [O, v, h]),
        {
            isVisible: O,
            triggerProps: N,
        }
    );
}
