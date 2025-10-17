n.d(t, { L: () => s });
var a = n(647438),
    r = n(442837),
    i = n(570140),
    l = n(480387),
    o = n(726745);
function s() {
    let e = (0, r.cj)([o.Z], () => ({
        isLoading: o.Z.getIsValidatingUsers(),
        multiAccountUsers: o.Z.getUsers(),
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
