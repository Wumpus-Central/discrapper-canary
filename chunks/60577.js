n.d(t, { Z: () => i }), n(388685);
var r = n(192379);
function i() {
    let [e, t] = (0, r.useState)(window.innerWidth >= 1132);
    return (
        (0, r.useEffect)(() => {
            let e = () => {
                t(window.innerWidth >= 1132);
            };
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, []),
        e
    );
}
