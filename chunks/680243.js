n.d(t, {
    A: () => w,
}),
    n(65821);
var r,
    i = n(311907),
    a = n(118356),
    s = n(73153),
    o = n(49463),
    l = n(9302),
    c = n(211753),
    u = n(682763),
    d = n(327194),
    f = n(672396);

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
let _ = new a.Vy("OverlayV3NativeModuleStore"),
    h = !1,
    m = !1,
    g = null,
    E = !1,
    b = null,
    y = null,
    O = (() => {
        async function e() {
            v(), (g = d.P.getInstance());
            try {
                await g.initialize(), (h = !0);
            } catch (e) {
                (0, u._r)(null, "module_initialization_failed", {
                    error: e,
                }),
                    (h = !1),
                    (0, u.mD)(l.UNSET_PID, e, {
                        crashType: "native",
                    });
            } finally {
                R.emitChange();
            }
        }
        return () => (null == y && (y = e()), y);
    })();

function A(e) {
    __OVERLAY__ || !f.OX || (m !== e && ((m = e), e && (0, l.setOutOfProcessSupport)(!0)));
}

function v() {
    !__OVERLAY__ && f.OX && ((b = null), (E = !1), _.verbose("Maybe Enable Overlay"), A(c.x.oopEnabled));
}

function S(e) {
    let { oopEnabled: t } = e;
    (b = null), A(t);
}

function I() {
    return (b = null), O(), !1;
}

function T(e) {
    let { isCrashedDisabled: t, error: n } = e;
    return !0 === t && (E = !0), null != n && (b = n instanceof Error ? n.message : String(n)), !0;
}

function C() {
    return O(), !1;
}
class N extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A);
    }
    get isModuleLoading() {
        return null != y;
    }
    get isOverlayEnabled() {
        return m;
    }
    get isSupported() {
        return f.OX;
    }
    get isModuleLoaded() {
        return h;
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
let R = new N(
        s.h,
        __OVERLAY__ || !f.OX
            ? {}
            : {
                  CONNECTION_OPEN: C,
                  EXPERIMENT_OVERRIDE_BUCKET: v,
                  OVERLAY_SET_ENABLED: S,
                  OVERLAY_V3_LOAD_NATIVE_MODULE: I,
                  OVERLAY_CRASHED: T,
              },
    ),
    w = R;
