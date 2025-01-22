var i = r(47120);
var a = r(192379);
let o = () => {
    let [e, n] = (0, a.useState)(null);
    return (
        (0, a.useEffect)(() => {
            var e;
            if ((null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null) n(new window.EyeDropper());
        }, []),
        e
    );
};
n.Z = o;
