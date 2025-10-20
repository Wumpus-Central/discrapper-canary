n.d(t, { Z: () => P }), n(388685);
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
    g = !1,
    E = null,
    b = !1,
    y = new Set(),
    O = (() => {
        let e = null;
        async function t() {
            E = d._.getInstance();
            try {
                await E.initialize(), (0, u.U9)(), (h = !0);
            } catch (e) {
                (0, u.Uk)(null, "module_load_failed", { error: e }),
                    (0, u.UK)(e),
                    (0, u.PV)(l.UNSET_PID, e, { crashType: "native" }),
                    (h = !1);
            } finally {
                R.emitChange();
            }
        }
        return () => (null == e && (e = t()), e);
    })();
function v(e) {
    if (!__OVERLAY__ && f.iP && ((m = e), null == E)) return void O();
}
function I() {
    !__OVERLAY__ && f.iP && (p.verbose("Maybe Enable Overlay"), v(c.v.oopEnabled), (0, l.setOutOfProcessSupport)(!0));
}
function T(e) {
    let { oopEnabled: t } = e;
    v(t);
}
function S() {
    g = !1;
}
function A() {
    return O(), !1;
}
function C(e) {
    let { pid: t, isCrashedDisabled: n } = e;
    return !0 === n && (b = !0), !!y.has(t) || !0 === b;
}
class N extends (r = i.ZP.Store) {
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
        return b;
    }
    getNativeModule() {
        return E;
    }
}
_(N, "displayName", "Overlay-v3-Native-Module-Store");
let R = new N(
        o.Z,
        __OVERLAY__ || !f.iP
            ? {}
            : {
                  LOGIN: S,
                  LOGOUT: S,
                  EXPERIMENT_OVERRIDE_BUCKET: I,
                  OVERLAY_SET_ENABLED: T,
                  OVERLAY_V3_LOAD_NATIVE_MODULE: A,
                  OVERLAY_CRASHED: C,
              },
    ),
    P = R;
