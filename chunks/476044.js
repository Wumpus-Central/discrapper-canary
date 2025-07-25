n.d(t, { Z: () => i });
var r = n(73800),
    o = n(374470);
function i(e) {
    let { targetRef: t, onShouldClose: n, topThreshold: i = 40, bottomThreshold: s = 60, enabled: l = !0 } = e;
    r.useEffect(() => {
        if (!l || (null == t ? void 0 : t.current) == null) return;
        let e = null,
            r = (r) => {
                if ((null == t ? void 0 : t.current) == null || !(0, o.k)(r.target, HTMLElement)) return;
                let l = r.target;
                if (!l.contains(t.current)) return;
                let a = l.scrollTop;
                if (null === e) {
                    e = a;
                    return;
                }
                let c = a - e,
                    u = Math.abs(c);
                ((c < 0 && u > i) || (c > 0 && u > s)) && n();
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
    }, [l, t, n, i, s]);
}
