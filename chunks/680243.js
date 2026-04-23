"use strict";
n.d(t, { A: () => N });
var r = n(311907),
    i = n(118356),
    s = n(73153),
    a = n(49463),
    o = n(9302),
    l = n(211753),
    u = n(206885),
    c = n(682763),
    d = n(327194);
let _ = new i.Vy("OverlayV3NativeModuleStore"),
    f = !1,
    p = !1,
    h = null,
    E = !1,
    m = null,
    g = null,
    A = (() => {
        async function e() {
            T(), (h = d.P.getInstance());
            try {
                await h.initialize(), (f = !0);
            } catch (e) {
                (0, c._r)(null, "module_initialization_failed", { error: e }),
                    (f = !1),
                    (0, c.mD)(o.UNSET_PID, e, { crashType: "native" });
            } finally {
                y.emitChange();
            }
        }
        return () => (null == g && (g = e()), g);
    })();
function I(e) {
    __OVERLAY__ || !u.O || (p !== e && ((p = e), e && (0, o.setOutOfProcessSupport)(!0)));
}
function T() {
    !__OVERLAY__ && u.O && ((m = null), (E = !1), _.verbose("Maybe Enable Overlay"), I(l.x.oopEnabled));
}
class S extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(a.A);
    }
    get isModuleLoading() {
        return null != g;
    }
    get isOverlayEnabled() {
        return p;
    }
    get isSupported() {
        return u.O;
    }
    get isModuleLoaded() {
        return f;
    }
    get isCrashedDisabled() {
        return E;
    }
    get errorMessage() {
        return m;
    }
    getNativeModule() {
        return h;
    }
}
let y = new S(
        s.h,
        __OVERLAY__ || !u.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return A(), !1;
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: T,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      (m = null), I(t);
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return (m = null), A(), !1;
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return !0 === t && (E = !0), null != n && (m = n instanceof Error ? n.message : String(n)), !0;
                  },
              },
    ),
    N = y;
