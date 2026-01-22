n.d(t, {
    A: () => j,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(684013),
    o = n(9302),
    l = n(395011),
    c = n(682763),
    u = n(680243),
    d = n(672396),
    f = n(652215);

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
let _ = new Set(),
    h = null,
    m = null,
    g = null;

function E(e) {
    var t;
    if (d.ed) return !0;
    if (null == m) return !1;
    let n = null != (t = null == m ? void 0 : m.isCrashedDisabled) && t;
    return !!e || !n;
}

function b(e) {
    if (e && null != g) {
        let e = Date.now() - g;
        s.A.track(f.HAw.OVERLAY_LOCKED, {
            unlocked_duration: e,
        }),
            (g = null);
    } else e || null != g || ((g = Date.now()), s.A.track(f.HAw.OVERLAY_UNLOCKED));
}

function y(e, t) {
    b(e), e ? _.delete(t) : _.add(t), (_ = new Set(_));
}

function O(e, t) {
    return !!E(e) && (y(e, t), null == m || m.setInteractionEnabled(!e), L.emitChange(), !0);
}

function A(e, t) {
    return (
        !!E(e) &&
        (y(e, t), null == h || (clearTimeout(h), (h = null), !e)) &&
        (e
            ? O(e, t)
            : (h = setTimeout(() => {
                  O(e, t), v();
              }, 100)),
        !0)
    );
}

function v() {
    null != h && (clearTimeout(h), (h = null));
}

function S() {
    v(), _.clear(), (_ = new Set()), (g = null);
}

function I() {
    return (m = u.A.getNativeModule()), S(), !0;
}

function T() {
    return (m = null), S(), !0;
}

function C(e) {
    let { locked: t, pid: n } = e;
    return (
        (0, c.dK)(n, "setInputLocked called", {
            locked: t,
        }),
        A(t, n),
        !0
    );
}

function N(e) {
    let { region: t } = e,
        n = l.A.getFocusedPID();
    return (
        (0, c.dK)(null != n ? n : null, "activate_region", {
            region: t,
        }),
        null != n && A(!1, n),
        !0
    );
}

function R() {
    let e = l.A.getFocusedPID();
    return (0, c.dK)(null != e ? e : null, "deactivate_all_regions"), null != e && O(!0, e), !0;
}

function w() {
    return S(), !0;
}

function P(e) {
    let { lastAssociatedPID: t } = e;
    return null != t && O(!0, t), !0;
}

function D() {
    S(), null == m || m.setInteractionEnabled(!1);
}
class x extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A);
    }
    isInputLocked(e) {
        return null == e || e === o.UNSET_PID || !1 === _.has(e);
    }
}
p(x, "displayName", "Overlay-v3-Native-Input-Lock-Store");
let L = new x(
        a.h,
        __OVERLAY__ || !d.OX
            ? {
                  OVERLAY_SET_INPUT_LOCKED: C,
              }
            : {
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: I,
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: T,
                  OVERLAY_SET_INPUT_LOCKED: C,
                  OVERLAY_ACTIVATE_REGION: N,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: R,
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: D,
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: w,
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: P,
              },
    ),
    j = L;
