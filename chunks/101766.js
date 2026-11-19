var s = l(582128),
    t = l(398773),
    i = l(735769);
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
                    let s = i.A.getScrollTop(n);
                    function a() {
                        s = l?.scrollTop ?? s;
                    }
                    return (
                        s > 0 && ((l.scrollTop = s), (s = l.scrollTop)),
                        l.addEventListener("scroll", a, { passive: !0 }),
                        () => {
                            (l.removeEventListener("scroll", a), (0, t.wd)(n, s));
                        }
                    );
                }, [n]),
                e
            );
        },
    },
);
