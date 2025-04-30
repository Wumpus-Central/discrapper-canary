n.d(t, { Z: () => l });
var r = n(192379),
    a = n(358085);
function l(e) {
    let t = r.useRef(e);
    return (
        r.useEffect(() => {
            t.current = e;
        }, [e]),
        r.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                { disabled: l = !1, onSubmit: o } = t.current;
            'enter' === e.key.toLowerCase() && ('macos' === (0, a.getOS)() ? r : n) && !l && (e.preventDefault(), o());
        }, [])
    );
}
