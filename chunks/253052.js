n.d(t, { Z: () => u }), n(757143);
var r = n(192379),
    i = n(442837),
    l = n(131951),
    a = n(388032);
let o = /^Default/;
function u() {
    let e = (0, i.e7)([l.Z], () => l.Z.getOutputDevices());
    return r.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return (
            null == n ||
                (t.default = {
                    ...n,
                    name: n.name.replace(o, a.intl.string(a.t.bBvAEB))
                }),
            t
        );
    }, [e]);
}
