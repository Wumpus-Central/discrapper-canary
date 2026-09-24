n.d(t, { Bp: () => g, Hs: () => f, eq: () => m, t_: () => S });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(52133),
    o = n(765548),
    d = n(347481),
    c = n(25578),
    u = n(179172),
    _ = n(868162),
    E = n(731854);
let A = new Set(["DisplayPort"]);
function h(e) {
    var t;
    let n,
        i,
        r,
        a,
        s =
            ((t = e.displayName),
            (i = null != (n = _.A.inputDevices[t]) ? c.Ay.getInputDevices()[n] : void 0),
            (a = null != (r = _.A.outputDevices[t]) ? c.Ay.getOutputDevices()[r] : void 0),
            i ?? a);
    return null == s
        ? null
        : {
              device: e,
              mediaEngineDevice: s,
              certifiedDeviceMetadata: (function (e) {
                  if (!_.A.initialized) return null;
                  let t = _.A.inputDevices[e];
                  if (null != t && d.A.isCertified(t)) return d.A.getCertifiedDevice(t) ?? null;
                  let n = _.A.outputDevices[e];
                  return null != n && d.A.isCertified(n) ? (d.A.getCertifiedDevice(n) ?? null) : null;
              })(e.displayName),
          };
}
function I() {
    let e = c.Ay.getInputDeviceId(),
        t = c.Ay.getOutputDeviceId();
    if (!0 === _.A.getState().neverShowModal || a().isEmpty(_.A.lastDeviceConnected)) return !1;
    let n = (0, _.x)(c.Ay.getInputDevices()[e]),
        i = (0, _.x)(c.Ay.getOutputDevices()[t]);
    if (a().some(_.A.lastDeviceConnected, (e) => A.has(e.displayName) || e.displayName === n || e.displayName === i))
        return !1;
    let r = a().some(_.A.lastDeviceConnected, (e) => {
        let t = _.A.inputDevices[e.displayName],
            n = _.A.outputDevices[e.displayName];
        return (null != t && d.A.isCertified(t)) || (null != n && d.A.isCertified(n));
    });
    return (
        ((e !== E.dx || !_.A.lastInputSystemDevice.justChanged) &&
            (t !== E.dx || !_.A.lastOutputSystemDevice.justChanged)) ||
        !!r
    );
}
function f() {
    if (!I()) return null;
    let e = a().first(Object.keys(_.A.lastDeviceConnected)),
        t = null != e && "" !== e ? _.A.lastDeviceConnected[e] : null;
    return null == t || !0 === _.A.getState().ignoredDevices[t.displayName] ? null : h(t);
}
function p(e, t) {
    return e.length === t.length && e.every((e, n) => (0, l.A)(e, t[n]));
}
function T() {
    if (!I()) return [];
    let { ignoredDevices: e } = _.A.getState();
    return Object.values(_.A.lastDeviceConnected)
        .filter((t) => !0 !== e[t.displayName])
        .map(h)
        .filter((e) => null != e);
}
function g() {
    return (0, s.bG)([_.A, c.Ay, d.A], T, void 0, p);
}
function m(e, t) {
    return null != t ? `${t.vendor.name} ${t.model.name}` : e.displayName;
}
function S(e) {
    let { device: t, switchDeviceLocation: n, onMount: r, onIgnore: a } = e,
        s = i.useRef(!1),
        l = (0, o.A)(r);
    return (
        i.useEffect(() => {
            if (null != t)
                return (
                    (s.current = !1),
                    l(),
                    () => {
                        s.current || u.mk();
                    }
                );
        }, [t, l]),
        {
            handleSwitch: i.useCallback(
                (e) => {
                    null != t && ((s.current = !0), u.TO(t.displayName, e, n));
                },
                [t, n],
            ),
            handleDontSwitch: i.useCallback(() => {
                null != t && ((s.current = !0), u.mk());
            }, [t]),
            handleIgnore: i.useCallback(() => {
                null != t && ((s.current = !0), u.BG(t.displayName), a());
            }, [t, a]),
        }
    );
}
