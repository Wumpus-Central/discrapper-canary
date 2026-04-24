n.d(t, { A: () => r });
var i = n(64700),
    l = n(765671),
    a = n(371794);
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, r] = (function () {
            let { ref: e, width: t } = (0, l.Ay)(),
                [n, a] = i.useState();
            return (
                i.useEffect(() => {
                    null == n && null != t && a(t);
                }, [n, t]),
                [e, n]
            );
        })();
    return [
        n,
        e?.application_id != null && null != r ? (0, a.YE)(e.application_id, e, r, t ? void 0 : "webp") : void 0,
    ];
}
