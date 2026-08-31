"use strict";
n.d(t, { Ht: () => er, as: () => ei, Vc: () => ea }), n(321073);
var i = n(132500),
    r = n(71931),
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(311964),
    d = n(626584),
    c = n(597643);
function u() {
    return performance.now();
}
var _ = n(280450),
    E = n(885576),
    A = n(763827),
    h = n(174459),
    I = n(927813),
    f = n(38405),
    p = n(70298),
    T = n(973522),
    m = n(952818),
    g = n(321034),
    S = n(789999),
    N = n(976860),
    C = n(569745);
function O() {
    return !__OVERLAY__ && (0, C.Q)(window.location.pathname);
}
var R = n(604594),
    L = n(4043),
    y = n(287809),
    D = n(652215);
let v = 15 * I.A.Millis.MINUTE,
    b = I.A.Millis.SECOND,
    M = "LAST_CLIENT_HEARTBEAT_SESSION",
    P = "user",
    U = new d.A("SessionHeartbeatScheduler"),
    w = null,
    G = null,
    x = 0,
    k = 0,
    F = { state: "uninitialized" },
    V = A.A.getState(),
    B = (0, S.R)(),
    H = O(),
    j = _.default.getToken();
function W() {
    (function () {
        if (null == w) return !1;
        switch (w.type) {
            case "timeout":
                clearTimeout(w.id);
                break;
            case "interval":
                clearInterval(w.id);
                break;
            default:
                w.type;
        }
        return (w = null), !0;
    })() && (f.A.addBreadcrumb({ category: P, message: "Stopping Analytics Heartbeat" }), (0, o.p)());
}
async function Y() {
    let e,
        t,
        n,
        i,
        r,
        a,
        s,
        l = Date.now(),
        d = await er(),
        c = Date.now();
    if (null == d)
        return void f.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${c - l}ms`));
    f.A.addBreadcrumb({ category: P, message: "Tracking Heartbeat", data: { initialized: d.createdAtTimestamp } });
    let _ = {
        client_heartbeat_initialization_timestamp: d.createdAtTimestamp,
        client_heartbeat_version: 31,
        ...{
            ...((e = {}),
            null != (t = g.A.getMemoryUsageElectronRenderer()) && (e.client_heartbeat_renderer_memory = t),
            null != (n = g.A.getMemoryUsageElectronRendererUsedHeapSize()) &&
                (e.client_heartbeat_renderer_memory_used_heap = n),
            null != (i = g.A.getMemoryUsageElectronProcessTypeDetails()) &&
                ((e.electron_process_memory_private = [
                    i.unknown?.wss_priv_kb ?? -1,
                    i.main?.wss_priv_kb ?? -1,
                    i.renderer?.wss_priv_kb ?? -1,
                    i.gpu?.wss_priv_kb ?? -1,
                    i.crashpad?.wss_priv_kb ?? -1,
                    i.utility?.wss_priv_kb ?? -1,
                    i.clips?.wss_priv_kb ?? -1,
                ]),
                (e.electron_process_memory_private_and_shared = [
                    i.unknown?.wss_kb ?? -1,
                    i.main?.wss_kb ?? -1,
                    i.renderer?.wss_kb ?? -1,
                    i.gpu?.wss_kb ?? -1,
                    i.crashpad?.wss_kb ?? -1,
                    i.utility?.wss_kb ?? -1,
                    i.clips?.wss_kb ?? -1,
                ])),
            e),
            ...((r = {}),
            null != (a = m.Ay.getCurrentGameForAnalytics()) &&
                ((r.client_heartbeat_current_game_id = a.id),
                (r.client_heartbeat_current_game_name = a.name),
                (r.client_heartbeat_current_game_executable = (0, T.Ic)(a.exePath)),
                (r.client_heartbeat_current_game_distributor = a.distributor),
                (r.uses_client_mods = (0, p.b)())),
            r),
        },
        ...((s = E.A.getIdleSince() ?? 0),
        {
            is_idle: E.A.isIdle(),
            idle_duration_ms: Date.now() - s,
            is_afk: E.A.isAFK(),
            is_system_suspended: E.A.getSystemSuspended(),
            is_system_locked: E.A.getSystemLocked(),
        }),
    };
    h.default.track(D.HAw.CLIENT_HEARTBEAT, _), (k = u()), (0, o.p)();
}
function K() {
    let e = [];
    return (
        null != j && H && (B && e.push("foregrounded"), V === D.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: 31, reasons: e }
    );
}
function $() {
    return K().active;
}
function z() {
    $()
        ? (function () {
              if (null != w) return;
              let e = 0 === k ? 0 : v - (u() - k);
              f.A.addBreadcrumb({
                  message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                  (w = {
                      type: "timeout",
                      id: setTimeout(() => {
                          Y(),
                              (w = {
                                  type: "interval",
                                  id: setInterval(() => {
                                      Y();
                                  }, v),
                              });
                      }, e),
                  });
          })()
        : W(),
        c.A.getSocket()?.handleActiveStateChange(K());
}
function q(e) {
    return null == e
        ? null
        : e.version !== R.Ir
          ? (U.warn(`Throwing away client session with invalid version: ${e.version}, expected ${R.Ir}`), null)
          : e;
}
async function Z() {
    let e = await er(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, r.C);
}
function X() {
    let e = _.default.getToken();
    j !== e && ((j = e), s.w.remove(M), (F = { state: "loaded", session: null }), W(), (k = 0)), z();
}
function Q() {
    let e = A.A.getState();
    V !== e && ((V = e), z());
}
function J(e) {
    let { focused: t } = e;
    B !== t && ((B = t), z());
}
function ee() {
    let e = O();
    H !== e && ((H = e), z());
}
function et(e) {
    let { state: t } = e,
        n = t === D.g6G.ACTIVE;
    B !== n && ((B = n), z());
}
function en() {
    (V = A.A.getState()), (B = (0, S.R)()), (H = O()), X();
}
function ei() {
    f.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        A.A.addChangeListener(Q),
        _.default.addChangeListener(X),
        l.h.subscribe("WINDOW_FOCUS", J),
        l.h.subscribe("APP_STATE_UPDATE", et),
        l.h.subscribe("CONNECTION_OPEN", Z),
        (0, N.JK)().listen(ee),
        z(),
        null == G &&
            (G = {
                id: setInterval(() => {
                    let e;
                    !(null != j && null != (e = y.default.getCurrentUser()) && (e.isStaff() || (0, L.r)(e.id, 0.02))) ||
                        u() - k <= v ||
                        h.default.track(D.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 31 });
                }, v),
                type: "interval",
            }),
        a.Ay.initialized.then(en);
}
async function er() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === F.state ? F.session?.uuid : null;
    try {
        t = "uninitialized" === F.state ? q(await s.w.getAfterRefresh(M)) : F.session;
    } catch (e) {
        f.A.captureException(e);
    }
    let a = Date.now();
    if ($()) {
        (null == t || (0, R.aE)(t)) &&
            ((t = { uuid: (0, i.A)(), createdAtTimestamp: a, lastUsedTimestamp: a, version: R.Ir }), (x = 0)),
            (t.lastUsedTimestamp = a);
        var l = t;
        let e = u();
        if (!(e - x < b))
            try {
                s.w.set(M, l), (x = e);
            } catch (e) {
                f.A.captureException(e);
            }
    } else null != t && (0, R.aE)(t) && (t = null);
    return (
        (F = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            c.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, r.C),
        t
    );
}
function ea() {
    let e = "uninitialized" === F.state ? q(s.w.get(M)) : F.session;
    return null == e || (0, R.aE)(e) ? null : e;
}
