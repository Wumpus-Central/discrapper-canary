u.d(t, { A: () => r });
var c = u(64700);
let r = function () {
    let e = c.useRef(!0);
    return (
        c.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        c.useCallback(() => e.current, [])
    );
};
