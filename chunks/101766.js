n.d(t, { A: () => r });
var l = n(582128),
    a = n(398773),
    i = n(735769);
function r(e) {
    let t = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let n = t.current;
            if (null == n || null == e) return;
            let l = i.A.getScrollTop(e);
            function r() {
                l = n?.scrollTop ?? l;
            }
            return (
                l > 0 && ((n.scrollTop = l), (l = n.scrollTop)),
                n.addEventListener("scroll", r, { passive: !0 }),
                () => {
                    (n.removeEventListener("scroll", r), (0, a.wd)(e, l));
                }
            );
        }, [e]),
        t
    );
}
