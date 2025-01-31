n.d(t, { L: () => s });
var i = n(192379),
    r = n(442837),
    l = n(570140),
    a = n(480387),
    o = n(726745);
function s() {
    let e = (0, r.cj)([o.Z], () => ({
        isLoading: o.Z.getIsValidatingUsers(),
        multiAccountUsers: o.Z.getUsers()
    }));
    return (
        i.useEffect(() => {
            l.Z.wait(() => {
                a.HJ();
            });
        }, []),
        e
    );
}
