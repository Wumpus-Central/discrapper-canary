t.r(n), t.d(n, { default: () => r }), t(323874), t(14289), t(35956);
var o = t(64700),
    i = t(492462),
    a = t(652215);
let r = function () {
    let { redirect: e } = (0, i.parse)(window.location.search);
    return (
        o.useEffect(() => {
            if (null != e && "" !== e) {
                let n = new URL(`${window.location.origin}${e}`),
                    t = new URLSearchParams(n.search);
                t.set("handoff_token", "null"), (n.search = t.toString()), (window.location.href = n.toString());
            } else window.location.href = a.BVt.LOGIN;
        }, [e]),
        null
    );
};
