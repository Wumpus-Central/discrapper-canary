n.d(t, { Z: () => G }), n(415506);
var r,
    i = n(442837),
    a = n(570140),
    o = n(594190),
    s = n(626135),
    l = n(145597),
    c = n(41534),
    u = n(837268),
    d = n(371651),
    f = n(829907),
    _ = n(509140),
    p = n(987650),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = {};
function O(e) {
    var t, n;
    return null != (n = null == (t = d.default.getTrackedGameByPid(e)) ? void 0 : t.overlayMethod) ? n : null;
}
function v(e) {
    let t = O(e);
    y[e] = b(g({}, y[e]), { overlay_method: null != t ? u.gl[t] : u.gl[u.gl.OutOfProcess] });
}
function I(e) {
    var t, n;
    if (null != y[e]) return;
    let r = o.ZP.getGameOrTransformedSubgameForPID(e),
        i = O(e);
    y[e] = {
        overlay_method: null != i ? u.gl[i] : u.gl[u.gl.OutOfProcess],
        success: !1,
        game_name: null != (t = null == r ? void 0 : r.name) ? t : null,
        game_id: null != (n = null == r ? void 0 : r.id) ? n : null,
        error: null,
        error_description: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0,
    };
}
function T(e) {
    var t;
    return null != (t = y[e]) ? t : {};
}
function S(e, t) {
    var n, r;
    let i = null == (n = y[e]) ? void 0 : n.error,
        a = null == (r = y[e]) ? void 0 : r.error_description;
    (y[e] = g({}, y[e], t)), null != i && (y[e].error = i), null != a && (y[e].error_description = a);
}
function A(e) {
    v(e), s.default.track(h.rMx.OVERLAY_HOOK_RESULT, T(e));
}
function C(e, t) {
    e !== l.UNSET_PID &&
        S(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        });
}
function N(e, t) {
    e !== l.UNSET_PID &&
        S(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        });
}
function R() {
    y = {};
}
function P(e, t) {
    let n = o.ZP.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}
function w(e) {
    let { pid: t, error: n, crashType: r } = e,
        i = n instanceof Error ? n : Error(null != n ? n : "Unknown error");
    return (
        "native" === r
            ? (C(t, i), (0, c.V6)(i, u.gl.OutOfProcess, { extra: P(t, "host") }))
            : (N(t, i), (0, c.V6)(i, u.gl.OutOfProcess, { extra: P(t, "renderer") })),
        !0
    );
}
function D(e) {
    let { createWindowTriggeringPID: t } = e;
    return S(t, { mounting_started_at: new Date().getTime() }), !0;
}
function x(e) {
    var t, n;
    let { createWindowTriggeringPID: r } = e,
        i = null != (n = null == (t = T(r)) ? void 0 : t.mounting_started_at) ? n : new Date().getTime(),
        a = {
            renderer_started: !0,
            fullscreen_type: (0, f.hs)(r),
            graphics_info_after: new Date().getTime() - i,
        };
    return S(r, a), !0;
}
function L(e) {
    var t, n;
    let { createWindowTriggeringPID: r } = e,
        i = null != (n = null == (t = T(r)) ? void 0 : t.mounting_started_at) ? n : new Date().getTime();
    return S(r, { renderer_started_after: new Date().getTime() - i }), !0;
}
function M(e) {
    let { pid: t } = e;
    return I(t), !0;
}
function j(e) {
    let { lastAssociatedPID: t } = e;
    if (t !== l.UNSET_PID) return A(t), R(), !0;
}
function k(e) {
    var t, n;
    let { pid: r } = e,
        i = null != (n = null == (t = T(r)) ? void 0 : t.mounting_started_at) ? n : new Date().getTime();
    return (
        S(r, {
            total_mount_time_ms: null != i ? new Date().getTime() - i : void 0,
            success: !0,
        }),
        !0
    );
}
class U extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.default, _.Z, o.ZP);
    }
    getData(e) {
        return T(e);
    }
    getCrashExtra(e, t) {
        return P(e, t);
    }
}
m(U, "displayName", "Overlay-v3-Native-Analytics-Store");
let G = new U(
    a.Z,
    __OVERLAY__ || !p.iP
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: D,
              OVERLAY_V3_POST_CREATE_POPOUT: x,
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: L,
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: j,
              OVERLAY_SUCCESSFULLY_SHOWN: k,
              OVERLAY_CRASHED: w,
              OVERLAY_V3_NATIVE_TRACK_GAME: M,
          },
);
