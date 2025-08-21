r.d(t, { m: () => l }), r(388685);
var n = r(647438);
let l = (e) => {
    let [t, r] = (0, n.useState)(!1);
    return (
        (0, n.useEffect)(() => {
            let { current: t } = e;
            if (null == t) return;
            let n = () => r(!0),
                l = (e) => {
                    t.contains(e.relatedTarget) || r(!1);
                };
            return (
                t.addEventListener("focusin", n),
                t.addEventListener("focusout", l),
                t.blur(),
                () => {
                    t.removeEventListener("focusin", n), t.removeEventListener("focusout", l);
                }
            );
        }, [e]),
        t
    );
};
