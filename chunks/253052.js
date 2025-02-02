n.d(t, { Z: () => o }), n(757143);
var i = n(192379),
    l = n(442837),
    a = n(131951),
    r = n(388032);
let s = /^Default/;
function o() {
    let e = (0, l.e7)([a.Z], () => a.Z.getOutputDevices());
    return i.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return (
            null == n ||
                (t.default = {
                    ...n,
                    name: n.name.replace(s, r.intl.string(r.t.bBvAEB))
                }),
            t
        );
    }, [e]);
}
