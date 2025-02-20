n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(846519),
    o = n(211266);
function a(e, t) {
    let [n, a] = (0, r.useState)(e),
        s = (0, o.Z)(() => new i.V7());
    return (
        (0, r.useEffect)(() => () => s.stop(), [s]),
        [
            n,
            (0, r.useCallback)(
                (n) => {
                    a(n), n !== e && s.start(t, () => a(e));
                },
                [t, e, s]
            )
        ]
    );
}
