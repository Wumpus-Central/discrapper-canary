n.d(t, { L: () => o });
var a = n(473749),
    r = n(442837),
    l = n(570140),
    i = n(480387),
    s = n(726745);
function o() {
    let e = (0, r.cj)([s.Z], () => ({
        isLoading: s.Z.getIsValidatingUsers(),
        multiAccountUsers: s.Z.getUsers(),
    }));
    return (
        a.useEffect(() => {
            l.Z.wait(() => {
                i.HJ();
            });
        }, []),
        e
    );
}
