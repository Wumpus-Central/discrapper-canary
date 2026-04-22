"use strict";
n.d(t, { f: () => o });
var r = n(64700),
    i = n(621466),
    s = n(451988),
    a = n(775602);
function o(e) {
    let {
            targetElementRef: t,
            shouldShow: n = !0,
            delay: o,
            onTooltipShow: l,
            onTooltipHide: u,
            forceOpen: d = !1,
            overflowOnly: c = !1,
            hideOnClick: _ = !0,
        } = e,
        f = r.useRef(null),
        E = t ?? f,
        [h, p] = r.useState(!1),
        m = r.useRef(null),
        g = r.useRef(!1);
    r.useEffect(
        () => (
            (m.current = new s.Ep()),
            () => {
                let e = m.current;
                null != e && e.stop();
            }
        ),
        [],
    );
    let A = null != E.current,
        I = !1 !== n && (h || d) && A && !g.current,
        T = r.useCallback(() => {
            if (g.current || (c && null == E.current)) return;
            if (c && null != E.current) {
                let e = E.current;
                if ((0, i.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let e = o ?? 0,
                t = m.current;
            null != t &&
                t.start(
                    e,
                    () => {
                        p(!0), l?.();
                    },
                    !1,
                );
        }, [o, l, c, E]),
        S = r.useCallback(() => {
            m.current?.stop(), p(!1), u?.();
        }, [u]),
        y = r.useCallback(() => {
            _ && S();
        }, [S, _]),
        N = r.useCallback(
            (e) => {
                null == E.current && (E.current = e.currentTarget), (g.current = !1), T();
            },
            [T, E],
        ),
        O = r.useCallback(
            (e) => {
                a.A.keyboardModeEnabled && (null == E.current && (E.current = e.currentTarget), (g.current = !1), T());
            },
            [T, E],
        ),
        R = r.useCallback(() => {
            m.current?.stop(), S();
        }, [S]),
        v = r.useMemo(
            () => ({ onMouseEnter: N, onMouseLeave: R, onFocus: O, onBlur: S, onContextMenu: S, onClick: y }),
            [N, R, O, S, y],
        );
    return (
        r.useEffect(() => {
            if (!I) return;
            let e = E.current?.ownerDocument ?? document,
                t = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((g.current = !0), S());
                };
            return (
                e.addEventListener("keydown", t),
                () => {
                    e.removeEventListener("keydown", t);
                }
            );
        }, [I, S, E]),
        r.useEffect(() => {
            if (!I) return;
            let e = E.current?.ownerDocument ?? document,
                t = () => {
                    S();
                };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [I, S, E]),
        { isVisible: I, triggerProps: v }
    );
}
