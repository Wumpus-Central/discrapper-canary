n.d(e, {
    L: function () {
        return a;
    }
});
var r = n(192379),
    i = n(442837),
    l = n(570140),
    u = n(480387),
    o = n(726745);
function a() {
    let t = (0, i.cj)([o.Z], () => ({
        isLoading: o.Z.getIsValidatingUsers(),
        multiAccountUsers: o.Z.getUsers()
    }));
    return (
        r.useEffect(() => {
            l.Z.wait(() => {
                u.HJ();
            });
        }, []),
        t
    );
}
