n.d(t, { Z: () => i });
var r = n(73800);
function i(e, t) {
    let n = r.useRef(e);
    return (
        r.useEffect(() => {
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
