n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(757143);
var r = n(192379),
    i = n(442837),
    u = n(131951),
    l = n(388032);
let o = /^Default/;
function a() {
    let e = (0, i.e7)([u.Z], () => u.Z.getOutputDevices());
    return r.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return null == n
            ? t
            : ((t.default = {
                  ...n,
                  name: n.name.replace(o, l.intl.string(l.t.bBvAEB))
              }),
              t);
    }, [e]);
}
