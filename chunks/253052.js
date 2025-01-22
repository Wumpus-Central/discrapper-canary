n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(757143);
var i = n(192379),
    r = n(442837),
    l = n(131951),
    a = n(388032);
let o = /^Default/;
function s() {
    let e = (0, r.e7)([l.Z], () => l.Z.getOutputDevices());
    return i.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return null == n
            ? t
            : ((t.default = {
                  ...n,
                  name: n.name.replace(o, a.intl.string(a.t.bBvAEB))
              }),
              t);
    }, [e]);
}
