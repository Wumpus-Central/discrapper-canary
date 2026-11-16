(o.r(i), o(323874), o(14289), o(35956));
var t = o(582128),
    e = o(492462),
    r = o(652215);
o.d(
    i,
    {},
    {
        default: function () {
            let { redirect: n } = (0, e.qg)(window.location.search);
            return (
                t.useEffect(() => {
                    if (null != n && "" !== n) {
                        let i = new URL(n, window.location.origin);
                        if (i.origin !== window.location.origin) {
                            window.location.href = r.BVt.LOGIN;
                            return;
                        }
                        let o = new URLSearchParams(i.search);
                        (o.set("handoff_token", "null"),
                            (i.search = o.toString()),
                            (window.location.href = i.toString()));
                    } else window.location.href = r.BVt.LOGIN;
                }, [n]),
                null
            );
        },
    },
);
