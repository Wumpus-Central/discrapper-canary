n.d(t, { Z: () => a }), n(757143);
var o = n(192379),
    r = n(442837),
    i = n(131951),
    c = n(65154),
    d = n(388032);
let l = /^Default/;
function a() {
    let e = (0, r.e7)([i.Z], () => i.Z.getInputDevices());
    return o.useMemo(() => {
        let t = { ...e },
            n = t[c.w5];
        return (
            null == n ||
                (t[c.w5] = {
                    ...n,
                    name: n.disabled ? d.intl.string(d.t['/QIjDA']) : n.name.replace(l, d.intl.string(d.t.bBvAEB))
                }),
            t
        );
    }, [e]);
}
