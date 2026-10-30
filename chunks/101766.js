n.d(t, { A: () => i });
var l = n(582128),
    a = n(398773),
    r = n(735769);
function i(e) {
    let t = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let n = t.current;
            if (null == n || null == e) return;
            let l = r.A.getScrollTop(e);
            function i() {
                l = n?.scrollTop ?? l;
            }
            return (
                l > 0 && ((n.scrollTop = l), (l = n.scrollTop)),
                n.addEventListener("scroll", i, { passive: !0 }),
                () => {
                    (n.removeEventListener("scroll", i), (0, a.wd)(e, l));
                }
            );
        }, [e]),
        t
    );
}
