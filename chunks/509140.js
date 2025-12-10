n.d(t, { Z: () => R }), n(415506);
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
function p(e, t, n) {
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
let _ = new a.Yd("OverlayV3NativeModuleStore"),
    m = !1,
    h = !1,
    g = null,
    E = !1,
    b = null,
    y = null,
    O = (() => {
        async function e() {
            S(), (g = d._.getInstance());
            try {
                await g.initialize(), (m = !0);
            } catch (e) {
                (0, u.bs)(null, "module_initialization_failed", { error: e }),
                    (m = !1),
                    (0, u.PV)(l.UNSET_PID, e, { crashType: "native" });
            } finally {
                P.emitChange();
            }
        }
        return () => (null == y && (y = e()), y);
    })();
function v(e) {
    !__OVERLAY__ && f.iP && h !== e && ((h = e), e && (0, l.setOutOfProcessSupport)(!0));
}
function S() {
    !__OVERLAY__ && f.iP && ((b = null), (E = !1), _.verbose("Maybe Enable Overlay"), v(c.v.oopEnabled));
}
function I(e) {
    let { oopEnabled: t } = e;
    (b = null), v(t);
}
function T() {
    return (b = null), O(), !1;
}
function C(e) {
    let { isCrashedDisabled: t, error: n } = e;
    return !0 === t && (E = !0), null != n && (b = n instanceof Error ? n.message : String(n)), !0;
}
function A() {
    return O(), !1;
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    get isModuleLoading() {
        return null != y;
    }
    get isOverlayEnabled() {
        return h;
    }
    get isSupported() {
        return f.iP;
    }
    get isModuleLoaded() {
        return m;
    }
    get isCrashedDisabled() {
        return E;
    }
    get errorMessage() {
        return b;
    }
    getNativeModule() {
        return g;
    }
}
p(N, "displayName", "Overlay-v3-Native-Module-Store");
let P = new N(
        o.Z,
        __OVERLAY__ || !f.iP
            ? {}
            : {
                  CONNECTION_OPEN: A,
                  EXPERIMENT_OVERRIDE_BUCKET: S,
                  OVERLAY_SET_ENABLED: I,
                  OVERLAY_V3_LOAD_NATIVE_MODULE: T,
                  OVERLAY_CRASHED: C,
              },
    ),
    R = P;
