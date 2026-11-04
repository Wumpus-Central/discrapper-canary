var s = l(582128),
    i = l(398773),
    a = l(735769);
l.d(
    e,
    {},
    {
        A: function (n) {
            let e = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    let l = e.current;
                    if (null == l || null == n) return;
                    let s = a.A.getScrollTop(n);
                    function r() {
                        s = l?.scrollTop ?? s;
                    }
                    return (
                        s > 0 && ((l.scrollTop = s), (s = l.scrollTop)),
                        l.addEventListener("scroll", r, { passive: !0 }),
                        () => {
                            (l.removeEventListener("scroll", r), (0, i.wd)(n, s));
                        }
                    );
                }, [n]),
                e
            );
        },
    },
);
