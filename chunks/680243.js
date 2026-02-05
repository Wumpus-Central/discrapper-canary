"use strict";
n.d(t, { A: () => R });
var r = n(311907),
    i = n(118356),
    a = n(73153),
    s = n(49463),
    o = n(9302),
    l = n(211753),
    u = n(682763),
    c = n(327194),
    d = n(672396);
let _ = new i.Vy("OverlayV3NativeModuleStore"),
    f = !1,
    p = !1,
    h = null,
    m = !1,
    g = null,
    E = null,
    A = (() => {
        async function e() {
            T(), (h = c.P.getInstance());
            try {
                await h.initialize(), (f = !0);
            } catch (e) {
                (0, u._r)(null, "module_initialization_failed", { error: e }),
                    (f = !1),
                    (0, u.mD)(o.UNSET_PID, e, { crashType: "native" });
            } finally {
                N.emitChange();
            }
        }
        return () => (null == E && (E = e()), E);
    })();
function I(e) {
    __OVERLAY__ || !d.OX || (p !== e && ((p = e), e && (0, o.setOutOfProcessSupport)(!0)));
}
function T() {
    !__OVERLAY__ && d.OX && ((g = null), (m = !1), _.verbose("Maybe Enable Overlay"), I(l.x.oopEnabled));
}
function y(e) {
    let { oopEnabled: t } = e;
    (g = null), I(t);
}
function S() {
    return (g = null), A(), !1;
}
function v(e) {
    let { isCrashedDisabled: t, error: n } = e;
    return !0 === t && (m = !0), null != n && (g = n instanceof Error ? n.message : String(n)), !0;
}
function C() {
    return A(), !1;
}
class b extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(s.A);
    }
    get isModuleLoading() {
        return null != E;
    }
    get isOverlayEnabled() {
        return p;
    }
    get isSupported() {
        return d.OX;
    }
    get isModuleLoaded() {
        return f;
    }
    get isCrashedDisabled() {
        return m;
    }
    get errorMessage() {
        return g;
    }
    getNativeModule() {
        return h;
    }
}
let N = new b(
        a.h,
        __OVERLAY__ || !d.OX
            ? {}
            : {
                  CONNECTION_OPEN: C,
                  EXPERIMENT_OVERRIDE_BUCKET: T,
                  OVERLAY_SET_ENABLED: y,
                  OVERLAY_V3_LOAD_NATIVE_MODULE: S,
                  OVERLAY_CRASHED: v,
              },
    ),
    R = N;
