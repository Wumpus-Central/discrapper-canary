n.d(t, { Z: () => R }), n(388685);
var r,
    i = n(442837),
    a = n(579092),
    o = n(570140),
    s = n(353926),
    l = n(145597),
    c = n(454991),
    u = n(932404),
    d = n(242297),
    f = n(987650);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = new a.Yd("OverlayV3NativeModuleStore"),
    h = !1,
    m = !1,
    g = null,
    E = !1,
    b = new Set(),
    y = (() => {
        let e = null;
        async function t() {
            v(), (g = d._.getInstance());
            try {
                await g.initialize(), (h = !0);
            } catch (e) {
                (0, u.bs)(null, "module_initialization_failed", { error: e }),
                    (h = !1),
                    (0, u.PV)(l.UNSET_PID, e, { crashType: "native" });
            } finally {
                N.emitChange();
            }
        }
        return () => (null == e && (e = t()), e);
    })();
function O(e) {
    !__OVERLAY__ && f.iP && (m = e);
}
function v() {
    !__OVERLAY__ && f.iP && (p.verbose("Maybe Enable Overlay"), O(c.v.oopEnabled), (0, l.setOutOfProcessSupport)(!0));
}
function I(e) {
    let { oopEnabled: t } = e;
    O(t);
}
function T() {
    return y(), !1;
}
function S(e) {
    let { pid: t, isCrashedDisabled: n } = e;
    return !0 === n && (E = !0), !!b.has(t) || !0 === E;
}
function A() {
    return y(), !1;
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    get isOverlayEnabled() {
        return m;
    }
    get isSupported() {
        return f.iP;
    }
    get isModuleLoaded() {
        return h;
    }
    get isCrashedDisabled() {
        return E;
    }
    getNativeModule() {
        return g;
    }
}
_(C, "displayName", "Overlay-v3-Native-Module-Store");
let N = new C(
        o.Z,
        __OVERLAY__ || !f.iP
            ? {}
            : {
                  CONNECTION_OPEN: A,
                  EXPERIMENT_OVERRIDE_BUCKET: v,
                  OVERLAY_SET_ENABLED: I,
                  OVERLAY_V3_LOAD_NATIVE_MODULE: T,
                  OVERLAY_CRASHED: S,
              },
    ),
    R = N;
