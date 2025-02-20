t.r(e), t.d(e, { default: () => i }), t(301563), t(315314), t(309749), t(610138), t(216116), t(78328), t(815648), t(47120);
var o = t(192379),
    a = t(593473),
    c = t(981631);
let i = () => {
    let { redirect: n } = (0, a.parse)(window.location.search);
    return (
        o.useEffect(() => {
            if (null != n && '' !== n) {
                let e = new URL(''.concat(window.location.origin).concat(n)),
                    t = new URLSearchParams(e.search);
                t.set('handoff_token', 'null'), (e.search = t.toString()), (window.location.href = e.toString());
            } else window.location.href = c.Z5c.LOGIN;
        }, [n]),
        null
    );
};
