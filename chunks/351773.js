n.d(t, { Z: () => r });
var i = n(192379);
function r(e, t) {
    let n = i.useRef(e);
    return (
        i.useEffect(() => {
            function e(e) {
                null == n.current || n.current.contains(e.target) || t();
            }
            return (
                document.addEventListener('mousedown', e),
                () => {
                    document.removeEventListener('mousedown', e);
                }
            );
        }, [n, t]),
        n
    );
}
