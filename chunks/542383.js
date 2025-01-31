n.d(t, { Z: () => r });
var a = n(192379),
    l = n(358085);
function r(e) {
    let t = a.useRef(e);
    return (
        a.useEffect(() => {
            t.current = e;
        }, [e]),
        a.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                { disabled: r = !1, onSubmit: i } = t.current;
            'enter' === e.key.toLowerCase() && ('macos' === (0, l.getOS)() ? a : n) && !r && (e.preventDefault(), i());
        }, [])
    );
}
