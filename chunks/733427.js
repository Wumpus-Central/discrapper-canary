n.d(t, { Z: () => i });
var r = n(192379);
let i = () => {
    let e = r.useRef(!0);
    return (
        r.useEffect(
            () => () => {
                e.current = !1;
            },
            []
        ),
        r.useCallback(() => e.current, [])
    );
};
