var n = r(829904),
    i = r(582128);
r.d(
    t,
    {},
    {
        _: function (e, t, r, o) {
            let a = (0, n.J)(r),
                s = null == r;
            (0, i.useEffect)(() => {
                if (s || !e.current) return;
                let r = e.current;
                return (
                    r.addEventListener(t, a, o),
                    () => {
                        r.removeEventListener(t, a, o);
                    }
                );
            }, [e, t, o, s]);
        },
    },
);
