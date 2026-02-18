"use strict";
n.d(t, { A: () => O });
var r = n(311907),
    i = n(118356),
    a = n(73153),
    s = n(49463),
    o = n(9302),
    l = n(211753),
    u = n(206885),
    c = n(682763),
    d = n(327194);
let _ = new i.Vy("OverlayV3NativeModuleStore"),
    f = !1,
    h = !1,
    p = null,
    g = !1,
    E = null,
    A = null,
    I = (() => {
        async function e() {
            y(), (p = d.P.getInstance());
            try {
                await p.initialize(), (f = !0);
            } catch (e) {
                (0, c._r)(null, "module_initialization_failed", { error: e }),
                    (f = !1),
                    (0, c.mD)(o.UNSET_PID, e, { crashType: "native" });
            } finally {
                R.emitChange();
            }
        }
        return () => (null == A && (A = e()), A);
    })();
function T(e) {
    __OVERLAY__ || !u.O || (h !== e && ((h = e), e && (0, o.setOutOfProcessSupport)(!0)));
}
function y() {
    !__OVERLAY__ && u.O && ((E = null), (g = !1), _.verbose("Maybe Enable Overlay"), T(l.x.oopEnabled));
}
function S(e) {
    let { oopEnabled: t } = e;
    (E = null), T(t);
}
function v() {
    return (E = null), I(), !1;
}
function C(e) {
    let { isCrashedDisabled: t, error: n } = e;
    return !0 === t && (g = !0), null != n && (E = n instanceof Error ? n.message : String(n)), !0;
}
function b() {
    return I(), !1;
}
class N extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(s.A);
    }
    get isModuleLoading() {
        return null != A;
    }
    get isOverlayEnabled() {
        return h;
    }
    get isSupported() {
        return u.O;
    }
    get isModuleLoaded() {
        return f;
    }
    get isCrashedDisabled() {
        return g;
    }
    get errorMessage() {
        return E;
    }
    getNativeModule() {
        return p;
    }
}
let R = new N(
        a.h,
        __OVERLAY__ || !u.O
            ? {}
            : {
                  CONNECTION_OPEN: b,
                  EXPERIMENT_OVERRIDE_BUCKET: y,
                  OVERLAY_SET_ENABLED: S,
                  OVERLAY_V3_LOAD_NATIVE_MODULE: v,
                  OVERLAY_CRASHED: C,
              },
    ),
    O = R;
