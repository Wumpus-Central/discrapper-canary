n.d(t, { Z: () => o }), n(388685);
var r = n(192379),
    i = n(846519),
    a = n(211266);
function o(e, t) {
    let [n, o] = (0, r.useState)(e),
        s = (0, a.Z)(() => new i.V7());
    return (
        (0, r.useEffect)(() => () => s.stop(), [s]),
        [
            n,
            (0, r.useCallback)(
                (n) => {
                    o(n), n !== e && s.start(t, () => o(e));
                },
                [t, e, s]
            )
        ]
    );
}
