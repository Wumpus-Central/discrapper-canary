var i,
    a = r(47120);
var s = r(411104);
var o = r(442837),
    l = r(570140),
    u = r(13245),
    c = r(615287),
    d = r(579806),
    f = r(710845),
    _ = r(353926),
    h = r(594190),
    p = r(928518),
    m = r(314897),
    g = r(626135),
    E = r(998502),
    v = r(145597),
    I = r(454991),
    T = r(32300),
    b = r(388627),
    y = r(987650),
    S = r(501787),
    A = r(981631);
function N(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = new f.Z('OverlayStoreV3'),
    R = new Set(),
    O = new Set(),
    D = {},
    L = null,
    x = !1,
    w = null,
    P = null,
    M = !1,
    k = !1,
    U = null;
function B(e) {
    var n;
    return null !== (n = D[e]) && void 0 !== n ? n : {};
}
function G(e, n) {
    D[e] = {
        ...D[e],
        ...n
    };
}
function F(e) {
    var n, r;
    if (null != D[e]) return;
    let i = h.ZP.getGameForPID(e);
    D[e] = {
        overlay_method: c.gl[c.gl.OutOfProcess],
        success: !1,
        error_description: null,
        game_name: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null,
        game_id: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : null,
        error: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0
    };
}
function Z(e) {
    if ((null == L || L.trackGame(e), F(e), !R.has(e))) R.add(e), u.Z.updateOverlayState(e, c.mM.WAITING_FOR_OVERLAY_OPEN);
}
function V(e) {
    null == L || L.untrackGame(e), R.delete(e), C.verbose('Removing tracked game '.concat(e));
}
function j() {
    for (let e of R) null == L || L.untrackGame(e);
    R.clear(), C.verbose('Cleared all tracked games');
}
function H() {
    return (0, T.NW)('overlay_store_v3', !1);
}
function Y() {
    if (!x) {
        j();
        return;
    }
    let e = new Set(
        h.ZP.getRunningGames()
            .filter((e) => {
                var n, r;
                return null !== (r = null === (n = h.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
            })
            .map((e) => e.pid)
    );
    for (let n of new Set([...R].filter((n) => !e.has(n)))) V(n);
    for (let e of R) Z(e);
}
function W(e) {
    null == L || L.setInteractionEnabled(!e);
}
function K(e) {
    let n = h.ZP.getGameForPID(e);
    u.Z.setAssociatedGame(null != P ? P : v.R2, e, n);
}
async function z(e) {
    var n, r, i;
    C.verbose('Creating OOP Host Window for pid '.concat(e));
    try {
        await (0, b.fK)();
        let i = new Date().getTime();
        G(e, { renderer_started: !0 }), d.Z.window.setBackgroundThrottling(!1), K(e), (P = e), (0, v.tB)(P);
        let a = null !== (r = await (null === d.Z || void 0 === d.Z ? void 0 : null === (n = d.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(S.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
        return u.Z.updateOverlayState(e, c.mM.OVERLAY_RENDERING), G(e, { renderer_started_after: new Date().getTime() - i }), a;
    } catch (n) {
        C.error('failed to create out of process overlay host window', n),
            G(e, {
                renderer_crash_count: 1,
                error: null !== (i = null == n ? void 0 : n.message) && void 0 !== i ? i : 'unknown error'
            });
    }
    return g.default.track(A.rMx.OVERLAY_HOOK_RESULT, B(e)), '';
}
function q() {
    var e;
    C.verbose('Destroying OOP host window'), null === d.Z || void 0 === d.Z || null === (e = d.Z.window) || void 0 === e || e.close(S.OVERLAY_V3_KEY), null != P && g.default.track(A.rMx.OVERLAY_HOOK_RESULT, B(P)), (P = null), (0, v.tB)(null != P ? P : v.R2), d.Z.window.setBackgroundThrottling(!0);
}
function Q(e) {
    C.verbose('Refreshing OOP host window for pid '.concat(e)), K(e), O.delete(null != P ? P : v.R2), (P = e), (0, v.tB)(null != P ? P : v.R2);
    let n = p.Z.getWindow(S.OVERLAY_V3_KEY),
        r = () =>
            new Promise((e) => {
                null == n ||
                    n.requestAnimationFrame(() => {
                        let n = new MessageChannel();
                        (n.port1.onmessage = () => {
                            e();
                        }),
                            n.port2.postMessage(void 0);
                    });
            }),
        i = 0,
        a = () => {
            15 === i ? (null == L || L.readyToShow(e), C.verbose('Showing overlay v3 for pid '.concat(e))) : ((i += 1), r().then(a));
        };
    a();
}
function X(e, n, r, i) {
    let a = p.Z.getWindow(S.OVERLAY_V3_KEY);
    if (null == a) return;
    let s = Math.ceil(r * a.innerWidth),
        o = Math.ceil(i * a.innerHeight),
        l = new MouseEvent(n, {
            screenX: s,
            screenY: o,
            clientX: s,
            clientY: o,
            bubbles: !0,
            view: a
        }),
        u = a.document.elementFromPoint(s, o);
    if (null == u) throw Error();
    u.dispatchEvent(l);
}
function J(e) {
    (w = e), u.Z.setFocusedPID(w);
}
function $(e) {
    (w = null), u.Z.setFocusedPID(null);
}
function ee(e) {
    u.Z.successfullyShown(e);
}
let et = (() => {
    let e = null;
    async function n() {
        if (!y.iP) throw (C.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await E.ZP.ensureModule('discord_desktop_overlay');
            let i = E.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(X), i.setHostWindowCallbacks(z, q, Q), i.setFocusCallback(J), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, $), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, ee), (L = i), (0, v.vR)(!0), Y();
        } catch (e) {
            throw (C.error('failed loading overlay module', e), (0, v.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function en(e, n) {
    if (!!y.iP) {
        if (
            ((x = e),
            I.v.update({
                enabled: e,
                global: n
            }),
            null == L)
        ) {
            et();
            return;
        }
    }
}
function er(e) {}
function ei(e) {}
function ea(e) {}
function es(e) {
    C.verbose('Updating OverlayMethod', e), e.overlayMethod === c.gl.OutOfProcess ? Z(e.pid) : V(e.pid);
}
function eo() {
    C.verbose('Maybe Enable Overlay'), H() ? en(I.v.enabled, I.v.global) : x && ((x = !1), (0, v.vR)(!1));
}
function el(e) {
    let { enabled: n, global: r } = e;
    en(n, r);
}
function eu(e) {
    let { zones: n } = e;
    if (!!x)
        null == L ||
            L.setCaptureZones(
                n.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }))
            );
}
function ec(e) {
    let { locked: n, pid: r } = e;
    if (!n && !R.has(r)) return;
    if ((n ? O.delete(r) : O.add(r), null == U || (clearTimeout(U), (U = null), !n)))
        n
            ? W(n)
            : (U = setTimeout(() => {
                  W(n), (U = null);
              }, 100));
}
function ed(e) {
    let { region: n } = e;
    W(!1);
}
function ef() {
    W(!0);
}
function e_(e) {
    let { enabled: n } = e;
    M = n;
}
function eh(e) {
    let { enabled: n } = e;
    k = n;
}
class ep extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, m.default, _.Z);
    }
    isInputLocked(e) {
        return !O.has(e);
    }
    isSupported() {
        return y.iP;
    }
    isOverlayV3Enabled() {
        return H();
    }
    isOverlayV3EnabledForPID(e) {
        return R.has(e);
    }
    get enabled() {
        return x;
    }
    get clickZoneDebugMode() {
        return M;
    }
    get renderDebugMode() {
        return k;
    }
    getFocusedPID() {
        return w;
    }
    isReady(e) {
        return R.has(e);
    }
}
N(ep, 'displayName', 'OverlayStore-v3'),
    (n.Z = new ep(l.Z, {
        CONNECTION_OPEN: eo,
        EXPERIMENT_OVERRIDE_BUCKET: eo,
        OVERLAY_SET_ENABLED: el,
        GAME_LAUNCH_SUCCESS: er,
        RUNNING_GAMES_CHANGE: ei,
        RUNNING_GAME_TOGGLE_OVERLAY: ea,
        OVERLAY_SET_CLICK_ZONES: eu,
        OVERLAY_SET_INPUT_LOCKED: ec,
        OVERLAY_ACTIVATE_REGION: ed,
        OVERLAY_DEACTIVATE_ALL_REGIONS: ef,
        OVERLAY_CLICK_ZONE_DEBUG_MODE: e_,
        OVERLAY_RENDER_DEBUG_MODE: eh,
        OVERLAY_UPDATE_OVERLAY_METHOD: es
    }));
