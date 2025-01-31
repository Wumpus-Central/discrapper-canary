n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(846519),
    a = n(211266);
function s(e, t) {
    let [n, s] = (0, i.useState)(e),
        o = (0, a.Z)(() => new r.V7());
    return (
        (0, i.useEffect)(() => () => o.stop(), [o]),
        [
            n,
            (0, i.useCallback)(
                (n) => {
                    s(n), n !== e && o.start(t, () => s(e));
                },
                [t, e, o]
            )
        ]
    );
}
