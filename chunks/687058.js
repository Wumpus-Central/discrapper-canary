n.d(t, { Z: () => o }), n(757143);
var l = n(192379),
    i = n(442837),
    r = n(131951),
    a = n(388032);
let s = /^Default/;
function o() {
    let e = (0, i.e7)([r.Z], () => r.Z.getInputDevices());
    return l.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return (
            null == n ||
                (t.default = {
                    ...n,
                    name: n.name.replace(s, a.intl.string(a.t.bBvAEB))
                }),
            t
        );
    }, [e]);
}
