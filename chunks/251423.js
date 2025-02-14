n.d(t, { L: () => o });
var i = n(192379),
    r = n(442837),
    a = n(570140),
    l = n(480387),
    s = n(726745);
function o() {
    let e = (0, r.cj)([s.Z], () => ({
        isLoading: s.Z.getIsValidatingUsers(),
        multiAccountUsers: s.Z.getUsers()
    }));
    return (
        i.useEffect(() => {
            a.Z.wait(() => {
                l.HJ();
            });
        }, []),
        e
    );
}
