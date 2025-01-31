n.d(t, { Z: () => l }), n(47120);
var i = n(192379);
function l() {
    let [e, t] = i.useState(window.innerWidth < 1132);
    return (
        i.useEffect(() => {
            function e() {
                t(window.innerWidth < 1132);
            }
            return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [t]),
        e
    );
}
