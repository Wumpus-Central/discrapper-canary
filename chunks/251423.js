n.d(t, { L: () => s });
var a = n(647438),
    r = n(442837),
    l = n(570140),
    i = n(480387),
    o = n(726745);
function s() {
    let e = (0, r.cj)([o.Z], () => ({
        isLoading: o.Z.getIsValidatingUsers(),
        multiAccountUsers: o.Z.getUsers(),
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
