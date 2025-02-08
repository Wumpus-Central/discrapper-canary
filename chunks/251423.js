n.d(t, { L: () => s });
var i = n(192379),
    r = n(442837),
    a = n(570140),
    l = n(480387),
    o = n(726745);
function s() {
    let e = (0, r.cj)([o.Z], () => ({
        isLoading: o.Z.getIsValidatingUsers(),
        multiAccountUsers: o.Z.getUsers()
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
