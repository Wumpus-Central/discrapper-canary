n.d(t, { L: () => o });
var r = n(192379),
    i = n(442837),
    s = n(570140),
    a = n(480387),
    l = n(726745);
function o() {
    let e = (0, i.cj)([l.Z], () => ({
        isLoading: l.Z.getIsValidatingUsers(),
        multiAccountUsers: l.Z.getUsers()
    }));
    return (
        r.useEffect(() => {
            s.Z.wait(() => {
                a.HJ();
            });
        }, []),
        e
    );
}
