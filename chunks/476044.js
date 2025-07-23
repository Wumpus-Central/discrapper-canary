n.d(t, { Z: () => i });
var r = n(73800),
    o = n(374470);
function i(e) {
    let { targetRef: t, onShouldClose: n, topThreshold: i = 40, bottomThreshold: l = 60, enabled: s = !0 } = e;
    r.useEffect(() => {
        if (!s || (null == t ? void 0 : t.current) == null) return;
        let e = null,
            r = (r) => {
                if ((null == t ? void 0 : t.current) == null || !(0, o.k)(r.target, HTMLElement)) return;
                let s = r.target;
                if (!s.contains(t.current)) return;
                let a = s.scrollTop;
                if (null === e) {
                    e = a;
                    return;
                }
                let c = a - e,
                    u = Math.abs(c);
                ((c < 0 && u > i) || (c > 0 && u > l)) && n();
            };
        return (
            document.addEventListener('scroll', r, {
                passive: !0,
                capture: !0
            }),
            () => {
                document.removeEventListener('scroll', r, { capture: !0 });
            }
        );
    }, [s, t, n, i, l]);
}
