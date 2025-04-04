n.d(t, { Z: () => i }), n(47120);
var r = n(192379);
let i = () => {
    let [e, t] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            var e;
            (null == (e = window) ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper());
        }, []),
        e
    );
};
