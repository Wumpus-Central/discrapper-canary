n.d(t, { L: () => o });
var i = n(73800),
    r = n(442837),
    s = n(570140),
    a = n(480387),
    l = n(726745);
function o() {
    let e = (0, r.cj)([l.Z], () => ({
        isLoading: l.Z.getIsValidatingUsers(),
        multiAccountUsers: l.Z.getUsers()
    }));
    return (
        i.useEffect(() => {
            s.Z.wait(() => {
                a.HJ();
            });
        }, []),
        e
    );
}
