"use strict";
n.d(t, { eq: () => f, KP: () => I, Hs: () => h, t_: () => p });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(765548),
    o = n(347481),
    d = n(45630),
    c = n(228366);
function u(e) {
    c.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH", displayName: e });
}
var _ = n(868162),
    E = n(731854);
let A = new Set(["DisplayPort"]);
function h() {
    let e = d.Ay.getInputDeviceId(),
        t = d.Ay.getOutputDeviceId();
    if (!0 === _.A.getState().neverShowModal || a().isEmpty(_.A.lastDeviceConnected)) return null;
    let n = (0, _.x)(d.Ay.getInputDevices()[e]),
        i = (0, _.x)(d.Ay.getOutputDevices()[t]);
    if (a().some(_.A.lastDeviceConnected, (e) => A.has(e.displayName) || e.displayName === n || e.displayName === i))
        return null;
    let r = a().some(
        _.A.lastDeviceConnected,
        (e) => o.A.isCertified(_.A.inputDevices[e.displayName]) || o.A.isCertified(_.A.outputDevices[e.displayName]),
    );
    if (
        ((e === E.dx && _.A.lastInputSystemDevice.justChanged) ||
            (t === E.dx && _.A.lastOutputSystemDevice.justChanged)) &&
        !r
    )
        return null;
    let s = a().first(Object.keys(_.A.lastDeviceConnected)),
        l = null != s && "" !== s ? _.A.lastDeviceConnected[s] : null;
    if (null == l || !0 === _.A.getState().ignoredDevices[l.displayName]) return null;
    let c = null;
    return (
        _.A.initialized &&
            null != s &&
            (o.A.isCertified(_.A.inputDevices[s])
                ? (c = o.A.getCertifiedDevice(_.A.inputDevices[s]) ?? null)
                : o.A.isCertified(_.A.outputDevices[s]) && (c = o.A.getCertifiedDevice(_.A.outputDevices[s]) ?? null)),
        { device: l, certifiedDeviceMetadata: c }
    );
}
function I() {
    return (0, s.bG)([_.A, d.Ay, o.A], h);
}
function f(e, t) {
    return null != t ? `${t.vendor.name} ${t.model.name}` : e.displayName;
}
function p(e) {
    let { device: t, switchDeviceLocation: n, onMount: r, onIgnore: a } = e,
        s = i.useRef(!1),
        o = (0, l.A)(r);
    return (
        i.useEffect(() => {
            if (null != t)
                return (
                    (s.current = !1),
                    o(),
                    () => {
                        s.current || u(t.displayName);
                    }
                );
        }, [t, o]),
        {
            handleSwitch: i.useCallback(
                (e) => {
                    if (null != t) {
                        var i;
                        (s.current = !0),
                            (i = t.displayName),
                            c.h.dispatch({
                                type: "CONNECTED_DEVICE_SWITCH",
                                displayName: i,
                                connectedDevicePreference: e,
                                location: n,
                            });
                    }
                },
                [t, n],
            ),
            handleDontSwitch: i.useCallback(() => {
                null != t && ((s.current = !0), u(t.displayName));
            }, [t]),
            handleIgnore: i.useCallback(() => {
                if (null != t) {
                    var e;
                    (s.current = !0),
                        (e = t.displayName),
                        c.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e }),
                        a();
                }
            }, [t, a]),
        }
    );
}
