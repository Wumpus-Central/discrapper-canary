n.d(t, { B: () => i });
var r = n(647438);
function i(e) {
    let t = (0, r.useRef)(null);
    return (0, r.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value), "function" == typeof e ? e(value) : e && (e.current = value);
            },
        }),
        [e],
    );
}
