n.d(t, { A: () => a });
var s = n(64700);
let a = () => {
    let e = s.useRef(!0);
    return (
        s.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        s.useCallback(() => e.current, [])
    );
};
