n.d(t, { m: () => i }), n(388685);
var r = n(647438);
let i = (e) => {
    let [t, n] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(() => {
            let { current: t } = e;
            if (null == t) return;
            let r = () => n(!0),
                i = (e) => {
                    t.contains(e.relatedTarget) || n(!1);
                };
            return (
                t.addEventListener("focusin", r),
                t.addEventListener("focusout", i),
                t.blur(),
                () => {
                    t.removeEventListener("focusin", r), t.removeEventListener("focusout", i);
                }
            );
        }, [e]),
        t
    );
};
