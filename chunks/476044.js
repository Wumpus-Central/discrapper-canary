n.d(t, { Z: () => o });
var r = n(473749),
    i = n(374470);
function o(e) {
    let { targetRef: t, onShouldClose: n, topThreshold: o = 40, bottomThreshold: l = 60, enabled: a = !0 } = e;
    r.useEffect(() => {
        if (!a || (null == t ? void 0 : t.current) == null) return;
        let e = null,
            r = (r) => {
                if ((null == t ? void 0 : t.current) == null || !(0, i.kK)(r.target, HTMLElement)) return;
                let a = r.target;
                if (!a.contains(t.current)) return;
                let s = a.scrollTop;
                if (null === e) {
                    e = s;
                    return;
                }
                let c = s - e,
                    u = Math.abs(c);
                ((c < 0 && u > o) || (c > 0 && u > l)) && n();
            };
        return (
            document.addEventListener("scroll", r, {
                passive: !0,
                capture: !0,
            }),
            () => {
                document.removeEventListener("scroll", r, { capture: !0 });
            }
        );
    }, [a, t, n, o, l]);
}
