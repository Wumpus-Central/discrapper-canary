n.d(t, { Z: () => c });
var r = n(192379);
let c = () => {
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
