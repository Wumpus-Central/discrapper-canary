n.d(t, { Bp: () => g, Hs: () => p, eq: () => S, t_: () => N });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(52133),
    o = n(765548),
    d = n(347481),
    c = n(25578),
    u = n(763827),
    _ = n(179172),
    E = n(868162),
    A = n(731854);
let h = new Set(["DisplayPort"]);
function I(e) {
    var t;
    let n,
        i,
        r,
        a,
        s =
            ((t = e.displayName),
            (i = null != (n = E.A.inputDevices[t]) ? c.Ay.getInputDevices()[n] : void 0),
            (a = null != (r = E.A.outputDevices[t]) ? c.Ay.getOutputDevices()[r] : void 0),
            i ?? a);
    return null == s
        ? null
        : {
              device: e,
              mediaEngineDevice: s,
              certifiedDeviceMetadata: (function (e) {
                  if (!E.A.initialized) return null;
                  let t = E.A.inputDevices[e];
                  if (null != t && d.A.isCertified(t)) return d.A.getCertifiedDevice(t) ?? null;
                  let n = E.A.outputDevices[e];
                  return null != n && d.A.isCertified(n) ? (d.A.getCertifiedDevice(n) ?? null) : null;
              })(e.displayName),
          };
}
function f() {
    if (!u.A.isConnected()) return !1;
    let e = c.Ay.getInputDeviceId(),
        t = c.Ay.getOutputDeviceId();
    if (!0 === E.A.getState().neverShowModal || a().isEmpty(E.A.lastDeviceConnected)) return !1;
    let n = (0, E.x)(c.Ay.getInputDevices()[e]),
        i = (0, E.x)(c.Ay.getOutputDevices()[t]);
    if (a().some(E.A.lastDeviceConnected, (e) => h.has(e.displayName) || e.displayName === n || e.displayName === i))
        return !1;
    let r = a().some(E.A.lastDeviceConnected, (e) => {
        let t = E.A.inputDevices[e.displayName],
            n = E.A.outputDevices[e.displayName];
        return (null != t && d.A.isCertified(t)) || (null != n && d.A.isCertified(n));
    });
    return (
        ((e !== A.dx || !E.A.lastInputSystemDevice.justChanged) &&
            (t !== A.dx || !E.A.lastOutputSystemDevice.justChanged)) ||
        !!r
    );
}
function p() {
    if (!f()) return null;
    let e = a().first(Object.keys(E.A.lastDeviceConnected)),
        t = null != e && "" !== e ? E.A.lastDeviceConnected[e] : null;
    return null == t || !0 === E.A.getState().ignoredDevices[t.displayName] ? null : I(t);
}
function T(e, t) {
    return e.length === t.length && e.every((e, n) => (0, l.A)(e, t[n]));
}
function m() {
    if (!f()) return [];
    let { ignoredDevices: e } = E.A.getState();
    return Object.values(E.A.lastDeviceConnected)
        .filter((t) => !0 !== e[t.displayName])
        .map(I)
        .filter((e) => null != e);
}
function g() {
    return (0, s.bG)([E.A, c.Ay, d.A, u.A], m, void 0, T);
}
function S(e, t) {
    return null != t ? `${t.vendor.name} ${t.model.name}` : e.displayName;
}
function N(e) {
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
                        s.current || _.mk();
                    }
                );
        }, [t, l]),
        {
            handleSwitch: i.useCallback(
                (e) => {
                    null != t && ((s.current = !0), _.TO(t.displayName, e, n));
                },
                [t, n],
            ),
            handleDontSwitch: i.useCallback(() => {
                null != t && ((s.current = !0), _.mk());
            }, [t]),
            handleIgnore: i.useCallback(() => {
                null != t && ((s.current = !0), _.BG(t.displayName), a());
            }, [t, a]),
        }
    );
}
