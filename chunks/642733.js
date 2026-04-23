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
            forceOpen: c = !1,
            overflowOnly: d = !1,
            hideOnClick: _ = !0,
        } = e,
        f = r.useRef(null),
        p = t ?? f,
        [h, E] = r.useState(!1),
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
    let A = null != p.current,
        I = !1 !== n && (h || c) && A && !g.current,
        T = r.useCallback(() => {
            if (g.current || (d && null == p.current)) return;
            if (d && null != p.current) {
                let e = p.current;
                if ((0, i.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let e = o ?? 0,
                t = m.current;
            null != t &&
                t.start(
                    e,
                    () => {
                        E(!0), l?.();
                    },
                    !1,
                );
        }, [o, l, d, p]),
        S = r.useCallback(() => {
            m.current?.stop(), E(!1), u?.();
        }, [u]),
        y = r.useCallback(() => {
            _ && S();
        }, [S, _]),
        N = r.useCallback(
            (e) => {
                null == p.current && (p.current = e.currentTarget), (g.current = !1), T();
            },
            [T, p],
        ),
        v = r.useCallback(
            (e) => {
                a.A.keyboardModeEnabled && (null == p.current && (p.current = e.currentTarget), (g.current = !1), T());
            },
            [T, p],
        ),
        C = r.useCallback(() => {
            m.current?.stop(), S();
        }, [S]),
        O = r.useMemo(
            () => ({ onMouseEnter: N, onMouseLeave: C, onFocus: v, onBlur: S, onContextMenu: S, onClick: y }),
            [N, C, v, S, y],
        );
    return (
        r.useEffect(() => {
            if (!I) return;
            let e = p.current?.ownerDocument ?? document,
                t = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((g.current = !0), S());
                };
            return (
                e.addEventListener("keydown", t),
                () => {
                    e.removeEventListener("keydown", t);
                }
            );
        }, [I, S, p]),
        r.useEffect(() => {
            if (!I) return;
            let e = p.current?.ownerDocument ?? document,
                t = () => {
                    S();
                };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [I, S, p]),
        { isVisible: I, triggerProps: O }
    );
}
