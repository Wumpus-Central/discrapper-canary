"use strict";
n.d(t, { f: () => l });
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
            onTooltipShow: u,
            onTooltipHide: c,
            forceOpen: d = !1,
            overflowOnly: _ = !1,
            hideOnClick: f = !0,
        } = e,
        p = r.useRef(null),
        h = t ?? p,
        [m, g] = r.useState(!1),
        E = r.useRef(null),
        A = r.useRef(!1);
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
    let I = null != h.current,
        T = !1 !== n && (m || d) && I && !A.current,
        y = r.useCallback(() => {
            if (A.current || (_ && null == h.current)) return;
            if (_ && null != h.current) {
                let e = h.current;
                if ((0, i.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return;
            }
            let e = l ?? o,
                t = E.current;
            null != t &&
                t.start(
                    e,
                    () => {
                        g(!0), u?.();
                    },
                    !1,
                );
        }, [l, u, _, h]),
        S = r.useCallback(() => {
            E.current?.stop(), g(!1), c?.();
        }, [c]),
        v = r.useCallback(() => {
            f && S();
        }, [S, f]),
        C = r.useCallback(
            (e) => {
                null == h.current && (h.current = e.currentTarget), (A.current = !1), y();
            },
            [y, h],
        ),
        b = r.useCallback(
            (e) => {
                s.A.keyboardModeEnabled && (null == h.current && (h.current = e.currentTarget), (A.current = !1), y());
            },
            [y, h],
        ),
        N = r.useCallback(() => {
            E.current?.stop(), S();
        }, [S]),
        R = r.useMemo(
            () => ({ onMouseEnter: C, onMouseLeave: N, onFocus: b, onBlur: S, onContextMenu: S, onClick: v }),
            [C, N, b, S, v],
        );
    return (
        r.useEffect(() => {
            if (!T) return;
            let e = h.current?.ownerDocument ?? document,
                t = (e) => {
                    ("Escape" === e.key || "Esc" === e.key) && ((A.current = !0), S());
                };
            return (
                e.addEventListener("keydown", t),
                () => {
                    e.removeEventListener("keydown", t);
                }
            );
        }, [T, S, h]),
        r.useEffect(() => {
            if (!T) return;
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
        }, [T, S, h]),
        { isVisible: T, triggerProps: R }
    );
}
