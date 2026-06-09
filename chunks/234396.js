"use strict";
n.d(t, { Ht: () => Z, as: () => X, Vc: () => Q }), n(321073);
var i = n(835245),
    r = n(71931),
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(837152),
    u = n(626584),
    c = n(587626),
    d = n(495544),
    _ = n(885576),
    h = n(763827),
    f = n(174459),
    p = n(927813),
    E = n(38405),
    m = n(70298),
    g = n(973522),
    A = n(952818),
    I = n(321034),
    T = n(789999),
    S = n(604594);
let y = (0, n(945810).mj)({
    name: "2026-02-client-heartbeat-skipped",
    kind: "user",
    defaultConfig: { logHeartbeatSkipped: !1 },
    variations: { 1: { logHeartbeatSkipped: !0 } },
});
var N = n(652215);
let v = 15 * p.A.Millis.MINUTE,
    C = p.A.Millis.SECOND,
    R = "LAST_CLIENT_HEARTBEAT_SESSION",
    O = "user",
    b = new u.A("SessionHeartbeatScheduler"),
    D = null,
    L = null,
    w = 0,
    M = 0,
    P = { state: "uninitialized" },
    x = h.A.getState(),
    k = (0, T.R)(),
    U = d.default.getToken();
function G() {
    (function () {
        if (null == D) return !1;
        switch (D.type) {
            case "timeout":
                clearTimeout(D.id);
                break;
            case "interval":
                clearInterval(D.id);
                break;
            default:
                D.type;
        }
        return (D = null), !0;
    })() && (E.A.addBreadcrumb({ category: O, message: "Stopping Analytics Heartbeat" }), (0, l.p)());
}
async function F() {
    let e,
        t,
        n,
        i,
        r,
        s,
        a,
        o = Date.now(),
        u = await Z(),
        c = Date.now();
    if (null == u)
        return void E.A.captureException(Error(`Null session when tracking session heartbeat. Waited ${c - o}ms`));
    E.A.addBreadcrumb({ category: O, message: "Tracking Heartbeat", data: { initialized: u.createdAtTimestamp } });
    let d = {
        client_heartbeat_initialization_timestamp: u.createdAtTimestamp,
        client_heartbeat_version: 27,
        ...{
            ...((e = {}),
            null != (t = I.A.getMemoryUsageElectronRenderer()) && (e.client_heartbeat_renderer_memory = t),
            null != (n = I.A.getMemoryUsageElectronRendererUsedHeapSize()) &&
                (e.client_heartbeat_renderer_memory_used_heap = n),
            null != (i = I.A.getMemoryUsageElectronProcessTypeDetails()) &&
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
            null != (s = A.Ay.getCurrentGameForAnalytics()) &&
                ((r.client_heartbeat_current_game_id = s.id),
                (r.client_heartbeat_current_game_name = s.name),
                (r.client_heartbeat_current_game_executable = (0, g.Ic)(s.exePath)),
                (r.client_heartbeat_current_game_distributor = s.distributor),
                (r.uses_client_mods = (0, m.b)())),
            r),
        },
        ...((a = _.A.getIdleSince() ?? 0),
        {
            is_idle: _.A.isIdle(),
            idle_duration_ms: Date.now() - a,
            is_afk: _.A.isAFK(),
            is_system_suspended: _.A.getSystemSuspended(),
            is_system_locked: _.A.getSystemLocked(),
        }),
    };
    f.default.track(N.HAw.CLIENT_HEARTBEAT, d), (M = performance.now()), (0, l.p)();
}
function V() {
    let e = [];
    return (
        null != U && (k && e.push("foregrounded"), x === N.S7L.RTC_CONNECTED && e.push("rtc_connected")),
        { active: e.length > 0, ver: 27, reasons: e }
    );
}
function B() {
    return V().active;
}
function H() {
    B()
        ? (function () {
              if (null != D) return;
              let e = 0 === M ? 0 : v - (performance.now() - M);
              E.A.addBreadcrumb({
                  message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                  (D = {
                      type: "timeout",
                      id: setTimeout(() => {
                          F(),
                              (D = {
                                  type: "interval",
                                  id: setInterval(() => {
                                      F();
                                  }, v),
                              });
                      }, e),
                  });
          })()
        : G(),
        c.A.getSocket()?.handleActiveStateChange(V());
}
function j(e) {
    return null == e
        ? null
        : e.version !== S.Ir
          ? (b.warn(`Throwing away client session with invalid version: ${e.version}, expected ${S.Ir}`), null)
          : e;
}
async function Y() {
    let e = await Z(!1);
    null != e && c.A.getSocket()?.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, r.C);
}
function W() {
    let e = d.default.getToken();
    U !== e && ((U = e), a.w.remove(R), (P = { state: "loaded", session: null }), G(), (M = 0)), H();
}
function K() {
    let e = h.A.getState();
    x !== e && ((x = e), H());
}
function $(e) {
    let { focused: t } = e;
    k !== t && ((k = t), H());
}
function z(e) {
    let { state: t } = e,
        n = t === N.g6G.ACTIVE;
    k !== n && ((k = n), H());
}
function q() {
    (x = h.A.getState()), (k = (0, T.R)()), W();
}
function X() {
    E.A.addBreadcrumb({ message: "Initializing SessionHeartbeatScheduler" }),
        h.A.addChangeListener(K),
        d.default.addChangeListener(W),
        o.h.subscribe("WINDOW_FOCUS", $),
        o.h.subscribe("APP_STATE_UPDATE", z),
        o.h.subscribe("CONNECTION_OPEN", Y),
        H(),
        null == L &&
            (L = {
                id: setInterval(() => {
                    !(null != U && y.getConfig({ location: "shouldLogClientHeartbeatSkipped" }).logHeartbeatSkipped) ||
                        performance.now() - M <= v ||
                        f.default.track(N.HAw.CLIENT_HEARTBEAT_SKIPPED, { client_heartbeat_version: 27 });
                }, v),
                type: "interval",
            }),
        s.Ay.initialized.then(q);
}
async function Z() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = null,
        n = "loaded" === P.state ? P.session?.uuid : null;
    try {
        t = "uninitialized" === P.state ? j(await a.w.getAfterRefresh(R)) : P.session;
    } catch (e) {
        E.A.captureException(e);
    }
    let s = Date.now();
    if (B()) {
        (null == t || (0, S.aE)(t)) &&
            ((t = { uuid: (0, i.A)(), createdAtTimestamp: s, lastUsedTimestamp: s, version: S.Ir }), (w = 0)),
            (t.lastUsedTimestamp = s);
        var o = t;
        let e = performance.now();
        if (!(e - w < C))
            try {
                a.w.set(R, o), (w = e);
            } catch (e) {
                E.A.captureException(e);
            }
    } else null != t && (0, S.aE)(t) && (t = null);
    return (
        (P = { state: "loaded", session: t }),
        null != t &&
            n !== t.uuid &&
            e &&
            c.A.getSocket()?.handleUpdateTimeSpentSessionId(t.createdAtTimestamp, t.uuid, r.C),
        t
    );
}
function Q() {
    let e = "uninitialized" === P.state ? j(a.w.get(R)) : P.session;
    return null == e || (0, S.aE)(e) ? null : e;
}
