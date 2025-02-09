n.d(t, { Z: () => l });
var i = n(192379);
let l = () => {
    let e = i.useRef(!0);
    return (
        i.useEffect(
            () => () => {
                e.current = !1;
            },
            []
        ),
        i.useCallback(() => e.current, [])
    );
};
