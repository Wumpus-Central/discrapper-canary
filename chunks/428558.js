n.d(t, { A: () => a });
var i = n(582128),
    l = n(765671),
    s = n(371794);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, a] = (function () {
            let { ref: e, width: t } = (0, l.Ay)(),
                [n, s] = i.useState();
            return (
                i.useEffect(() => {
                    null == n && null != t && s(t);
                }, [n, t]),
                [e, n]
            );
        })();
    return [
        n,
        e?.application_id != null && null != a ? (0, s.YE)(e.application_id, e, a, t ? void 0 : "webp") : void 0,
    ];
}
