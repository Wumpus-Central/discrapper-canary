n.d(t, { l: () => l }), n(388685);
var r = n(647438),
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
        } = e,
        _ = r.useRef(null),
        p = null != t ? t : _,
        [h, m] = r.useState(!1),
        [g, E] = r.useState(!1),
        b = r.useRef(null);
    r.useEffect(
        () => (
            (b.current = new a.V7()),
            () => {
                var e;
                null == (e = b.current) || e.stop();
            }
        ),
        [],
    );
    let y = null != p.current,
        O = !1 !== n && (h || d) && y;
    r.useEffect(() => {
        O && E(!0);
    }, [O]);
    let v = r.useCallback(() => {
            E(!1);
        }, []),
        I = r.useCallback(() => {
            var e;
            if (f && null != p.current) {
                let e = p.current;
                if ((0, i.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let t = null != l ? l : s;
            null == (e = b.current) ||
                e.start(
                    t,
                    () => {
                        m(!0), null == c || c();
                    },
                    !1,
                );
        }, [l, c, f, p]),
        T = r.useCallback(() => {
            var e;
            null == (e = b.current) || e.stop(), m(!1), null == u || u();
        }, [u]),
        S = r.useCallback(
            (e) => {
                null == p.current && (p.current = e.currentTarget), I();
            },
            [I, p],
        ),
        A = r.useCallback(
            (e) => {
                null == p.current && (p.current = e.currentTarget), o.Z.keyboardModeEnabled && I();
            },
            [I, p],
        );
    return {
        isVisible: O,
        isRendered: g,
        triggerProps: r.useMemo(
            () => ({
                onMouseEnter: S,
                onMouseLeave: T,
                onFocus: A,
                onBlur: T,
                onContextMenu: T,
            }),
            [S, A, T],
        ),
        handleExitComplete: v,
    };
}
