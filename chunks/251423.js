n.d(t, { L: () => o });
var a = n(473749),
    l = n(442837),
    r = n(570140),
    i = n(480387),
    s = n(726745);
function o() {
    let e = (0, l.cj)([s.Z], () => ({
        isLoading: s.Z.getIsValidatingUsers(),
        multiAccountUsers: s.Z.getUsers(),
    }));
    return (
        a.useEffect(() => {
            r.Z.wait(() => {
                i.HJ();
            });
        }, []),
        e
    );
}
