n.d(t, { A: () => C });
var i = n(17928),
    r = n(118356),
    l = n(228366),
    a = n(736056),
    s = n(9302),
    o = n(211753),
    d = n(206885),
    u = n(682763),
    c = n(327194);
let h = new r.Vy("OverlayV3NativeModuleStore"),
    E = !1,
    _ = !1,
    p = null,
    A = !1,
    f = null,
    g = null,
    I = (() => {
        async function e() {
            S(), (p = c.P.getInstance());
            try {
                await p.initialize(), (E = !0);
            } catch (e) {
                (0, u._r)(null, "module_initialization_failed", { error: e }),
                    (E = !1),
                    (0, u.mD)(s.UNSET_PID, e, { crashType: "native" });
            } finally {
                O.emitChange();
            }
        }
        return () => (null == g && (g = e()), g);
    })();
function T(e) {
    __OVERLAY__ || !d.O || (_ !== e && ((_ = e), e && (0, s.setOutOfProcessSupport)(!0)));
}
function S() {
    !__OVERLAY__ && d.O && ((f = null), (A = !1), h.verbose("Maybe Enable Overlay"), T(o.x.oopEnabled));
}
class m extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(a.A);
    }
    get isModuleLoading() {
        return null != g;
    }
    get isOverlayEnabled() {
        return _;
    }
    get isSupported() {
        return d.O;
    }
    get isModuleLoaded() {
        return E;
    }
    get isCrashedDisabled() {
        return A;
    }
    get errorMessage() {
        return f;
    }
    getNativeModule() {
        return p;
    }
}
let O = new m(
        l.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return I(), !1;
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: S,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      (f = null), T(t);
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return (f = null), I(), !1;
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return !0 === t && (A = !0), null != n && (f = n instanceof Error ? n.message : String(n)), !0;
                  },
              },
    ),
    C = O;
