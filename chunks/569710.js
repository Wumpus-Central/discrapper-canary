(t.r(e), t(323874), t(14289), t(35956));
var o = t(582128),
    i = t(492462),
    a = t(652215);
t.d(
    e,
    {},
    {
        default: function () {
            let { redirect: n } = (0, i.qg)(window.location.search);
            return (
                o.useEffect(() => {
                    if (null != n && "" !== n) {
                        let e = new URL(`${window.location.origin}${n}`),
                            t = new URLSearchParams(e.search);
                        (t.set("handoff_token", "null"),
                            (e.search = t.toString()),
                            (window.location.href = e.toString()));
                    } else window.location.href = a.BVt.LOGIN;
                }, [n]),
                null
            );
        },
    },
);
