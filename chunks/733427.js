n.d(t, { Z: () => i });
var r = n(647438);
let i = () => {
    let e = r.useRef(!0);
    return (
        r.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        r.useCallback(() => e.current, [])
    );
};
