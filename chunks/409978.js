(n.d(t, { y: () => s }), n(321073));
var i = n(582128),
    r = n(429913);
let a = [];
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.useMemo(() => {
            if (!t) return a;
            let n = [];
            return (
                e.forEach((e) => {
                    let { applicationId: t } = e;
                    null != t && n.push(t);
                }),
                n
            );
        }, [t, e]);
    (0, r.A)(n, t);
}
