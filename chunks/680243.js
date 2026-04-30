n.d(t, { A: () => O });
var i = n(17928),
    l = n(118356),
    a = n(228366),
    r = n(736056),
    s = n(9302),
    o = n(211753),
    d = n(206885),
    u = n(682763),
    c = n(327194);
let h = new l.Vy("OverlayV3NativeModuleStore"),
    E = !1,
    A = !1,
    _ = null,
    p = !1,
    g = null,
    f = null,
    I = (() => {
        async function e() {
            T(), (_ = c.P.getInstance());
            try {
                await _.initialize(), (E = !0);
            } catch (e) {
                (0, u._r)(null, "module_initialization_failed", { error: e }),
                    (E = !1),
                    (0, u.mD)(s.UNSET_PID, e, { crashType: "native" });
            } finally {
                C.emitChange();
            }
        }
        return () => (null == f && (f = e()), f);
    })();
function S(e) {
    __OVERLAY__ || !d.O || (A !== e && ((A = e), e && (0, s.setOutOfProcessSupport)(!0)));
}
function T() {
    !__OVERLAY__ && d.O && ((g = null), (p = !1), h.verbose("Maybe Enable Overlay"), S(o.x.oopEnabled));
}
class m extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(r.A);
    }
    get isModuleLoading() {
        return null != f;
    }
    get isOverlayEnabled() {
        return A;
    }
    get isSupported() {
        return d.O;
    }
    get isModuleLoaded() {
        return E;
    }
    get isCrashedDisabled() {
        return p;
    }
    get errorMessage() {
        return g;
    }
    getNativeModule() {
        return _;
    }
}
let C = new m(
        a.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return I(), !1;
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: T,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      (g = null), S(t);
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return (g = null), I(), !1;
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return !0 === t && (p = !0), null != n && (g = n instanceof Error ? n.message : String(n)), !0;
                  },
              },
    ),
    O = C;
