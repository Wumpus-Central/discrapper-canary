n.d(t, { Z: () => a }), n(757143);
var o = n(192379),
    r = n(442837),
    i = n(131951),
    c = n(388032);
let d = /^Default/;
function a() {
    let e = (0, r.e7)([i.Z], () => i.Z.getInputDevices());
    return o.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return (
            null == n ||
                (t.default = {
                    ...n,
                    name: n.name.replace(d, c.intl.string(c.t.bBvAEB))
                }),
            t
        );
    }, [e]);
}
