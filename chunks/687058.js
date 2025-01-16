n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(757143);
var r = n(192379),
    o = n(442837),
    i = n(131951),
    l = n(388032);
let a = /^Default/;
function c() {
    let e = (0, o.e7)([i.Z], () => i.Z.getInputDevices());
    return r.useMemo(() => {
        let t = { ...e },
            n = t.default;
        return null == n
            ? t
            : ((t.default = {
                  ...n,
                  name: n.name.replace(a, l.intl.string(l.t.bBvAEB))
              }),
              t);
    }, [e]);
}
