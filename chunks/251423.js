n.d(t, { L: () => o });
var a = n(473749),
    r = n(442837),
    i = n(570140),
    l = n(480387),
    s = n(726745);
function o() {
    let e = (0, r.cj)([s.Z], () => ({
        isLoading: s.Z.getIsValidatingUsers(),
        multiAccountUsers: s.Z.getUsers(),
    }));
    return (
        a.useEffect(() => {
            i.Z.wait(() => {
                l.HJ();
            });
        }, []),
        e
    );
}
