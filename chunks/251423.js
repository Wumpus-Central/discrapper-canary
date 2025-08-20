n.d(t, { L: () => l });
var r = n(647438),
    i = n(442837),
    a = n(570140),
    o = n(480387),
    s = n(726745);
function l() {
    let e = (0, i.cj)([s.Z], () => ({
        isLoading: s.Z.getIsValidatingUsers(),
        multiAccountUsers: s.Z.getUsers(),
    }));
    return (
        r.useEffect(() => {
            a.Z.wait(() => {
                o.HJ();
            });
        }, []),
        e
    );
}
