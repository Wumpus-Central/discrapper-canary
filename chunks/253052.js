n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(757143);
var r = n(192379),
    i = n(442837),
    l = n(131951),
    a = n(388032);
let u = /^Default/;
function o() {
    let e = (0, i.e7)([l.Z], () => l.Z.getOutputDevices());
    return r.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return null == n
            ? t
            : ((t.default = {
                  ...n,
                  name: n.name.replace(u, a.intl.string(a.t.bBvAEB))
              }),
              t);
    }, [e]);
}
