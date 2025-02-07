n.d(t, { Z: () => u }), n(757143);
var l = n(192379),
    i = n(442837),
    r = n(131951),
    a = n(65154),
    s = n(388032);
let o = /^Default/;
function u() {
    let e = (0, i.e7)([r.Z], () => r.Z.getInputDevices());
    return l.useMemo(() => {
        let t = { ...e },
            n = t[a.w5];
        return (
            null == n ||
                (t[a.w5] = {
                    ...n,
                    name: n.disabled ? s.intl.string(s.t['/QIjDA']) : n.name.replace(o, s.intl.string(s.t.bBvAEB))
                }),
            t
        );
    }, [e]);
}
