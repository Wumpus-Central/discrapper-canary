n.d(t, { Z: () => o });
var r = n(192379),
    a = n(358085);
function o(e) {
    let t = r.useRef(e);
    return (
        r.useEffect(() => {
            t.current = e;
        }, [e]),
        r.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                { disabled: o = !1, onSubmit: l } = t.current;
            'enter' === e.key.toLowerCase() && ('macos' === (0, a.getOS)() ? r : n) && !o && (e.preventDefault(), l());
        }, [])
    );
}
