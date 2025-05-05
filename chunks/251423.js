n.d(t, { L: () => o });
var i = n(73800),
    r = n(442837),
    s = n(570140),
    l = n(480387),
    a = n(726745);
function o() {
    let e = (0, r.cj)([a.Z], () => ({
        isLoading: a.Z.getIsValidatingUsers(),
        multiAccountUsers: a.Z.getUsers()
    }));
    return (
        i.useEffect(() => {
            s.Z.wait(() => {
                l.HJ();
            });
        }, []),
        e
    );
}
