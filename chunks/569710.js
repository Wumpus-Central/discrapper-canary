t.r(n),
    t.d(n, { default: () => i }),
    t(747238),
    t(896048),
    t(693327),
    t(554719),
    t(680155),
    t(323874),
    t(14289),
    t(35956);
var o = t(64700),
    a = t(492462),
    c = t(652215);
let i = () => {
    let { redirect: e } = (0, a.parse)(window.location.search);
    return (
        o.useEffect(() => {
            if (null != e && "" !== e) {
                let n = new URL("".concat(window.location.origin).concat(e)),
                    t = new URLSearchParams(n.search);
                t.set("handoff_token", "null"), (n.search = t.toString()), (window.location.href = n.toString());
            } else window.location.href = c.BVt.LOGIN;
        }, [e]),
        null
    );
};
