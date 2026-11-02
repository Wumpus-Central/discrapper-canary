l.d(e, { A: () => a });
var s = l(582128),
    i = l(398773),
    t = l(735769);
function a(n) {
    let e = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            let l = e.current;
            if (null == l || null == n) return;
            let s = t.A.getScrollTop(n);
            function a() {
                s = l?.scrollTop ?? s;
            }
            return (
                s > 0 && ((l.scrollTop = s), (s = l.scrollTop)),
                l.addEventListener("scroll", a, { passive: !0 }),
                () => {
                    (l.removeEventListener("scroll", a), (0, i.wd)(n, s));
                }
            );
        }, [n]),
        e
    );
}
