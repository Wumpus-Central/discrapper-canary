n.d(t, { Z: () => o });
var r = n(192379);
let o = () => {
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
