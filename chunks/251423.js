n.d(t, { L: () => o });
var a = n(647438),
    i = n(442837),
    r = n(570140),
    l = n(480387),
    s = n(726745);
function o() {
    let e = (0, i.cj)([s.Z], () => ({
        isLoading: s.Z.getIsValidatingUsers(),
        multiAccountUsers: s.Z.getUsers(),
    }));
    return (
        a.useEffect(() => {
            r.Z.wait(() => {
                l.HJ();
            });
        }, []),
        e
    );
}
