"use strict";
let r;
n.r(t),
    n.d(t, { OverlayPIDStatus: () => B, default: () => eX, getOverlayURL: () => eA }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(508300),
    n(323874),
    n(14289),
    n(35956),
    n(142703);
var i = n(927429),
    a = n(311907),
    s = n(499979),
    o = n(73153),
    l = n(387755),
    u = n(544420),
    c = n(391973),
    d = n(684013),
    _ = n(956793),
    f = n(77729),
    h = n(719129),
    p = n(996308),
    g = n(626584),
    E = n(49463),
    A = n(15285),
    I = n(159551),
    T = n(777334),
    y = n(211753),
    S = n(41984),
    v = n(53733),
    C = n(833551),
    b = n(515183),
    N = n(395011),
    R = n(222506),
    O = n(680243),
    D = n(761821),
    L = n(961350),
    w = n(760751),
    x = n(555528),
    P = n(954571),
    M = n(799112),
    k = n(456797),
    U = n(837921),
    G = n(9302),
    F = n(899699),
    V = n(652215);
n(644434);
var B = (function (e) {
    return (
        (e.ATTACHING = "ATTACHING"),
        (e.CONNECTING = "CONNECTING"),
        (e.CONNECTED = "CONNECTED"),
        (e.READY = "READY"),
        (e.CRASHED = "CRASHED"),
        (e.CONNECT_FAILED = "CONNECT_FAILED"),
        (e.HOOK_FAILED = "HOOK_FAILED"),
        (e.DISCONNECTING = "DISCONNECTING"),
        e
    );
})({});
let j = {},
    H = !1,
    Y = new Map(),
    W = () => Array.from(Y.values()).some((e) => "READY" === e),
    K = !1,
    $ = !1,
    z = null,
    q = new Set(),
    X = "",
    Z = new Set();
class Q {
    isDispatching = !1;
    timeout;
    requestIdleCallback;
    actionsToFlush = new Set();
    waitingActionsToFlush = new Set();
    reset() {
        this.actionsToFlush.clear(),
            this.waitingActionsToFlush.clear(),
            (this.isDispatching = !1),
            (this.timeout = null),
            null != this.timeout && clearTimeout(this.timeout),
            (this.requestIdleCallback = null),
            null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    flush = () => {
        (null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
        null != this.requestIdleCallback &&
            (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)),
        W())
            ? (this.actionsToFlush.size > 0 &&
                  (p.tN({ type: V.kGV.DISPATCH, pid: null, token: null, payloads: Array.from(this.actionsToFlush) }),
                  this.actionsToFlush.clear()),
              this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
            : this.actionsToFlush.clear();
    };
    dispatchPayloads = (e) => {
        (this.isDispatching = !0), e.forEach((e) => o.h.dispatch(e)), (this.isDispatching = !1);
    };
    queueDispatch = (e) =>
        !(!W() || ee.has(e.type)) &&
        (this.isDispatching
            ? this.waitingActionsToFlush.add(e)
            : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                  (e = {
                      ...e,
                      settings: { type: e.settings.type, proto: (0, D.aw)(e.settings.type, e.settings.proto) },
                  }),
              this.actionsToFlush.add(e),
              null == this.timeout &&
                  null == this.requestIdleCallback &&
                  (this.timeout = setTimeout(() => {
                      this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                  }, 100))),
        !1);
}
let J = new Q(),
    ee = new Set([
        "CONNECTION_OPEN",
        "CONNECTION_RESUMED",
        "CONNECTION_CLOSED",
        "WINDOW_INIT",
        "WINDOW_FULLSCREEN_CHANGE",
        "WINDOW_FOCUS",
        "WINDOW_RESIZED",
        "WINDOW_HIDDEN",
        "CHANNEL_SELECT",
        "DELAYED_CHANNEL_SELECT",
        "DELAYED_SELECT_FLUSH",
        "LOAD_MESSAGES_SUCCESS",
        "LOAD_MESSAGES_FAILURE",
        "LOAD_MESSAGES",
        "MESSAGE_START_EDIT",
        "MESSAGE_UPDATE_EDIT",
        "MESSAGE_END_EDIT",
        "APP_VIEW_SET_HOME_LINK",
        "APPLICATION_STORE_LOCATION_CHANGE",
        "LOGIN",
        "LOGIN_SUCCESS",
        "LOGIN_FAILURE",
        "LOGIN_MFA_STEP",
        "LOGIN_MFA",
        "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
        "LOGIN_ACCOUNT_DISABLED",
        "LOGIN_RESET",
        "FINGERPRINT",
        "REGISTER",
        "REGISTER_SUCCESS",
        "START_SESSION",
        "FORGOT_PASSWORD_SENT",
        "UPDATE_TOKEN",
        "SET_CONSENT_REQUIRED",
        "PASSWORDLESS_START",
        "PASSWORDLESS_FAILURE",
        "CONTEXT_MENU_OPEN",
        "CONTEXT_MENU_CLOSE",
        "MODAL_PUSH",
        "MODAL_POP",
        "MODAL_UPDATE",
        "MODAL_POP_ALL",
        "GUILD_SETTINGS_OPEN",
        "USER_SETTINGS_MODAL_OPEN",
        "NOTIFICATION_SETTINGS_MODAL_OPEN",
        "EMAIL_VERIFICATION_MODAL_OPEN",
        "QUICKSWITCHER_SHOW",
        "IFE_EXPERIMENT_SEARCH_MODAL_OPEN",
        "SHOW_KEYBOARD_SHORTCUTS",
        "DM_SETTINGS_UPSELL_SHOW",
        "USER_PROFILE_MODAL_OPEN",
        "INTERACTION_MODAL_CREATE",
        "INTERACTION_IFRAME_MODAL_CREATE",
        "GUILD_SETTINGS_CLOSE",
        "USER_SETTINGS_MODAL_CLOSE",
        "CHANNEL_SETTINGS_CLOSE",
        "NOTIFICATION_SETTINGS_MODAL_CLOSE",
        "EMAIL_VERIFICATION_MODAL_CLOSE",
        "QUICKSWITCHER_HIDE",
        "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE",
        "HIDE_KEYBOARD_SHORTCUTS",
        "USER_PROFILE_MODAL_CLOSE",
        "QUICKSWITCHER_SHOW",
        "QUICKSWITCHER_HIDE",
        "QUICKSWITCHER_SWITCH_TO",
        "QUICKSWITCHER_SEARCH",
        "QUICKSWITCHER_SELECT",
        "UPDATE_CHANNEL_DIMENSIONS",
        "UPDATE_CHANNEL_LIST_DIMENSIONS",
        "UPDATE_GUILD_LIST_DIMENSIONS",
        "TRACK",
        "CHANNEL_SETTINGS_INIT",
        "CHANNEL_SETTINGS_CLOSE",
        "GUILD_SETTINGS_INIT",
        "GUILD_SETTINGS_OPEN",
        "GUILD_SETTINGS_CLOSE",
        "TUTORIAL_INDICATOR_SHOW",
        "TUTORIAL_INDICATOR_HIDE",
        "TUTORIAL_INDICATOR_SUPPRESS_ALL",
        "USER_SETTINGS_ACCOUNT_INIT",
        "USER_SETTINGS_ACCOUNT_CLOSE",
        "NOTICE_SHOW",
        "NOTICE_DISMISS",
        "NOTICE_DISABLE",
        "SEARCH_EDITOR_STATE_CHANGE",
        "SEARCH_EDITOR_STATE_CLEAR",
        "SEARCH_MESSAGES_SUCCESS",
        "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
        "SEARCH_ENSURE_SEARCH_STATE",
        "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
        "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
        "SEARCH_SET_SHOW_BLOCKED_RESULTS",
        "LAYOUT_CREATE",
        "POPOUT_WINDOW_OPEN",
        "POPOUT_WINDOW_CLOSE",
        "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
        "TYPING_START_LOCAL",
        "TYPING_STOP_LOCAL",
        "SPOTIFY_SET_ACTIVE_DEVICE",
        "LOAD_INVITE_SUGGESTIONS",
        "INVITE_SUGGESTIONS_SEARCH",
        "IMPERSONATE_UPDATE",
        "IMPERSONATE_STOP",
        "CREATE_PENDING_REPLY",
        "CREATE_SHALLOW_PENDING_REPLY",
        "DELETE_PENDING_REPLY",
        "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
        "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
        "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
        "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
        "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
        "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
        "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
        "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
        "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
        "APPLICATION_COMMAND_UPDATE_OPTIONS",
        "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE",
        "APPLICATION_COMMAND_USED",
        "DCF_HANDLE_DC_SHOWN",
        "DCF_HANDLE_DC_DISMISSED",
        "MEDIA_ENGINE_CONNECTION_STATS",
        "RTC_CONNECTION_UPDATE_ID",
        "ACTIVE_AV_ERRORS_CHANGED",
        "BURST_REACTION_ANIMATION_ADD",
        "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
    ]),
    et = new Set(),
    en = !1,
    er = new g.A("OverlayBridgeStore"),
    ei = {};
function ea(e) {
    return ei[e] ?? {};
}
function es(e, t) {
    let n = ei[e]?.error,
        r = ei[e]?.error_description;
    (ei[e] = { ...ei[e], ...t }), null != n && (ei[e].error = n), null != r && (ei[e].error_description = r);
}
function eo(e) {
    if (null != ei[e]) return;
    let t = A.Ay.getGameOrTransformedSubgameForPID(e);
    ei[e] = {
        overlay_method: S.Ue[S.Ue.Hook],
        success: !1,
        game_name: t?.name ?? null,
        game_id: t?.id ?? null,
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
let el = "none",
    eu = (0, i.n)({
        onContention: (e, t) => er.verbose(`overlayLock contention: lastMutexCall ${el}`),
        onContentionResolved: () => er.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${el}}`;
            er.error(n);
            let r = ea((0, G.getPID)());
            es((0, G.getPID)(), { ...r, error_description: n, success: !1 }),
                P.default.track(V.HAw.OVERLAY_HOOK_RESULT, ea((0, G.getPID)()));
        },
        timeoutMs: 18e4,
    });
function ec(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        eu(() => t(...r), e);
    };
}
function ed() {
    try {
        let e = f.A?.fileManager?.uploadDiscordHookCrashes;
        if (null == e) return;
        e().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let t of (er.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                    if (null == t) continue;
                    let e = null != t.processName ? w.A.getGameByExecutable(t.processName) : null;
                    P.default.track(V.HAw.OVERLAY_HOOK_CRASHED, {
                        process_name: t?.processName,
                        game_name: e?.name ?? null,
                        game_id: e?.id ?? null,
                        minidump_exception_type: t.exceptionString ?? null,
                        minidump_exception_module_name: t.exceptionModuleName ?? null,
                        minidump_relative_crash_address: t.relativeCrashAddress ?? null,
                        minidump_exception_module_version: t.exceptionModuleVersion ?? null,
                        minidump_exception_module_code_id: t.exceptionModuleCodeId ?? null,
                    });
                }
        });
    } catch (e) {
        er.error("tryUploadDiscordHookCrashes", e), (0, T.pj)(e);
    }
}
function e_(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = Y.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? Y.delete(e) : Y.set(e, t),
        (null == t || "CRASHED" === t) && (d.A.setFocusedPID(null, null), ed()),
        Z.delete(e),
        er.info(`pid=${e} status transition ${r ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, Y));
}
async function ef(e) {
    try {
        if (U.Ay.supportsFeature(V.BYE.CREATE_HOST_ON_ATTACH))
            if (Y.size > 0) {
                el = "reconcile.getOverlayURL";
                let t = await eA();
                (el = "reconcile.createHostProcess"), e.createHostProcess(t, ey, eT);
            } else (el = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eE((0, G.getPID)());
        else if (K) {
            let t = await eA();
            e.createHostProcess(t, ey, eT);
        } else e.destroyHostProcess(), eE((0, G.getPID)());
    } catch (t) {
        er.error("reconcileHostProcess", t), (0, T.pj)(t), eE((0, G.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            er.error("reconcileHostProcess: destroyHostProcess", e), (0, T.pj)(e);
        }
    }
}
async function eh(e) {
    eu.isMutexHeld() || er.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let t = ea(e).mounting_started_at ?? new Date().getTime();
    es(e, { mounting_started_at: t });
    let n = Y.get(e);
    if (null != n) return void er.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
    await d.A.updateOverlayState(e, S.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (el = "attach.getOverlayModule");
    let r = await (0, F.R)();
    if (null == r) return void er.error(`Trying to attach to pid=${e}, but overlay module failed loaded`);
    (el = "attach.transitionOverlayPIDStatus"), e_(e, "ATTACHING"), (el = "attach.attachToProcess");
    let i = await h.GH(e);
    null == i
        ? ((el = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          e_(e, "CONNECTING", "ATTACHING"),
          (el = "attach.reconcileHostProcess"),
          await ef(r),
          r.connectProcess(e))
        : ((el = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          e_(e, "HOOK_FAILED", "ATTACHING"),
          er.warn(`Could not hook to pid=${e}, error=${i}`));
}
async function ep(e) {
    if ((eu.isMutexHeld() || er.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !Y.has(e)))
        return void er.warn(`Trying to detach from pid ${e}, which is in an unknown state`);
    e_(e, "DISCONNECTING");
    try {
        el = "detach.getOverlayModule";
        let t = await (0, F.R)();
        if (null == t) return void er.error(`Trying to detach from pid=${e}, but overlay module failed loaded`);
        e !== G.DEV_PID &&
            ((el = "detach.cancelAttachToProcess"),
            await h.c1(e),
            await (0, s.yy)(16),
            (el = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (el = "detach.transitionOverlayPIDStatus"),
            e_(e, null),
            (el = "detach.reconcileHostProcess"),
            await ef(t);
    } catch (t) {
        (0, T.pj)(t, S.Ue.Hook), er.error(`Error during overlay detachment for pid ${e}:`, t), e_(e, null);
    }
}
async function em(e) {
    if (
        (er.verbose("updateIntendedOverlayPIDs", { isConnectionOpened: $, action: e }),
        eu.isMutexHeld() || er.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !$ && null != e)
    )
        return void er.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function t(e) {
        if (!(e in j)) return;
        let t = j[e];
        delete j[e];
        try {
            await t.deconstructor(), q.delete(e);
        } catch (n) {
            (0, T.pj)(n, S.Ue.Hook), er.error(`Failed to deconstruct tracked game ${e}`, n), (j[e] = t), q.add(e);
        }
    }
    let n = !1;
    if (null == e || !K) {
        for (let r of (er.verbose("updateIntendedOverlayPIDs: Removing all.", j, e), Object.keys(j)))
            await t(Number(r)), (n = !0);
        return;
    }
    for (let r of q) {
        if (e.added?.includes(r)) {
            er.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        er.verbose(`updateIntendedOverlayPIDs: retrying failed overlay pid ${r}`), await t(r), (n = !0);
    }
    for (let t of e.added ?? []) {
        let r = C.default.getTrackedGameByPid(t);
        if (null == r) {
            er.error(`updateIntendedOverlayPIDs: Tracked game not found for pid=${t}`);
            continue;
        }
        if ((er.verbose("updateIntendedOverlayPIDs: newGame", r), r.legacyEnabled))
            switch (
                (r.pid in j ? er.error(`Unexpected. ${r.pid} is being added twice?`, j, e) : eo(r.pid), r.overlayMethod)
            ) {
                case S.Ue.Hook:
                    let i = new Date().getTime();
                    es(r.pid, { mounting_started_at: i, fullscreen_type: await (0, b.E1)(r.pid, 0) }),
                        Y.has(r.pid) || (await eh(r.pid)),
                        (j[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await ep(r.pid);
                            },
                        }),
                        (n = !0);
                    break;
                case S.Ue.OutOfProcess:
                case S.Ue.OutOfProcessLimitedInteraction:
                    er.error("updateIntendedOverlayPIDs: out of process called for hook overlay", r);
                    break;
                case S.Ue.Disabled:
                    er.verbose("updateIntendedOverlayPIDs: disabled", r);
                    break;
                default:
                    er.error(`updateIntendedOverlayPIDs: Unknown overlay method: ${r.overlayMethod}`, r);
            }
    }
    for (let r of e.removed) er.verbose("updateIntendedOverlayPIDs: removedGame", r), await t(r), (n = !0);
    n && eq.emitChange();
}
let eg = ec("updateIntendedOverlayPIDs", (e) => (er.info("updateIntendedOverlayPIDs", e), em(e))),
    eE = ec("clearPID", (e) => {
        if (null == e) return (0, G.setPID)(G.UNSET_PID);
        N.A.isOverlayV3EnabledForPID(e) || (0, G.setPID)(G.UNSET_PID);
    });
function eA() {
    return new Promise((e) => {
        eq.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eI = ec("setOverlayEnabled", async (e) => {
    if (!(0, G.supportsLegacy)()) return;
    if (K === e) return void er.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (K = e), eq.emitChange();
    let t = await (0, F.R)();
    null == t
        ? er.error("setOverlayEnabled: overlay module failed loaded")
        : (K || (await em(void 0)), Y.size > 0 && (await ef(t)));
});
function eT(e) {
    d.A.setFocusedPID(0 === e ? null : e, null);
}
function ey(e, t, n) {
    let r = A.Ay.getGameForPID(e)?.name,
        i = w.A.getGameByName(r);
    es(e, { ...{ game_name: r, game_id: null == i ? null : i.id, success: t, overlay_method: S.Ue[S.Ue.Hook], ...n } }),
        (0, c.Vz)(G.OVERLAY_LAYOUT_ID, x.A.getDefaultLayout(G.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let a = ea(e);
    P.default.track(V.HAw.OVERLAY_HOOK_RESULT, a),
        er.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, a),
        t
            ? (d.A.updateOverlayState(e, S.AR.OVERLAY_RENDERING, "onConnectComplete"), e_(e, "CONNECTED", "CONNECTING"))
            : (d.A.updateOverlayState(e, S.AR.OVERLAY_CRASHED, "onConnectComplete"),
              e_(e, "CONNECT_FAILED", "CONNECTING"));
}
function eS() {
    let e = L.default.getToken(),
        t = L.default.getId();
    null != e &&
        p.tN({
            type: V.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function ev(e) {
    return null != e && (0, M.j)(e, X);
}
function eC(e) {
    switch ((en && er.info("[app data received]", e), e.type)) {
        case V.kGV.CONNECT:
            let t = L.default.getToken();
            if (null == t) break;
            (0, c.Vz)(G.OVERLAY_LAYOUT_ID, x.A.getDefaultLayout(G.OVERLAY_LAYOUT_ID), 0),
                Promise.all([(0, v.A)(t, e.pid), a.Ay.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    p.tN({ type: V.kGV.STORAGE_SYNC, pid: i, token: a, states: r }),
                        p.tN({ type: V.kGV.DISPATCH, pid: i, token: a, payloads: [n] }),
                        e_(i, "READY"),
                        (0, G.setPID)(i),
                        d.A.overlayReady(i);
                    let s = ea(i);
                    es(i, {
                        ...s,
                        total_mount_time_ms:
                            null != s.mounting_started_at ? new Date().getTime() - s.mounting_started_at : void 0,
                    });
                });
            break;
        case V.kGV.DISPATCH:
            null != e.payloads && J.dispatchPayloads(e.payloads);
            break;
        case V.kGV.LOG_MESSAGES:
            (0, I.F)(e.payload);
    }
}
async function eb(e, t) {
    let n = await (0, F.R)();
    if (null == n) return void er.error("setInputLocked: overlay module failed loaded");
    let r = t ?? z;
    if (null != r && "DISCONNECTING" === Y.get(r))
        return void er.warn("Overlay module is no longer valid during input lock");
    try {
        null != r && r !== G.DEV_PID && n.sendCommand(r, { message: "intercept_input", intercept: !e });
    } catch (e) {
        (0, T.pj)(e, S.Ue.Hook), er.error("Error during input lock", e);
    }
}
function eN(e, t) {
    e ? setTimeout(() => eb(e, t), 200) : eb(e, t);
}
let eR = null;
function eO(e) {
    let { locked: t, pid: n } = e,
        r = Y.get(n);
    if ((q.has(n) && eg(void 0), null != r && null != j[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? Z.delete(n) : Z.add(n), et.clear(), null != eR && (clearTimeout(eR), (eR = null), t))) return;
        t
            ? eN(t, n)
            : (eR = setTimeout(() => {
                  eN(t, n), (eR = null);
              }, 100));
    }
}
function eD(e) {
    let { region: t } = e;
    et.add(t), eN(!1, z);
}
function eL() {
    et.clear(), eN(!0, z);
}
function ew(e) {
    let { port: t } = e;
    X = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "8eef5cdee154f2445d323e56712e8a049cb26f19"),
        n.append("rpc", String(t)),
        n.append("rpc_auth_token", X),
        (r = `${location.protocol}//${location.host}/overlay?${n.toString()}`);
}
function ex(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), l.A.call(t, !1, !!n);
    });
}
function eP(e) {
    let { pid: t } = e;
    z = t;
}
function eM(e) {
    let { pid: t, error: n } = e;
    if (null == j[t]) return;
    let r = n instanceof Error ? n : Error(n ?? "Unknown error");
    e_(t, "CRASHED"),
        es(t, {
            renderer_crash_count: (ea(t).renderer_crash_count ?? 0) + 1,
            error: n instanceof Error ? n.message : n,
            error_description: n instanceof Error ? n.stack : void 0,
        }),
        er.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
        (0, T.St)(r, S.Ue.Hook);
}
function ek() {
    ($ = !0), (H = !1), eW();
}
function eU() {
    ($ = !1), d.A.setFocusedPID(null, null), eg(void 0), er.verbose("OverlayBridgeStore: handleConnectionClosed");
}
function eG() {
    return !0;
}
function eF(e) {
    let { legacyEnabled: t } = e;
    return eI(t), !1;
}
function eV(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        u.A.join({ userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a }),
            null != z && d.A.setInputLocked(!0, z);
    });
}
function eB(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, k._)("click", e, r);
        (0, k.K)(i, e, r);
    }, 50);
}
function ej(e) {
    return eg({ added: [], removed: [] }), !0;
}
function eH(e) {
    return eg({ added: [], removed: [] }), !0;
}
function eY(e) {
    er.verbose("Updating OverlayMethod", {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, b.gK)(e.overlayMethod),
    }),
        e.overlayMethod === S.Ue.Hook ? eg({ added: [e.pid], removed: [] }) : eg({ added: [], removed: [e.pid] });
}
function eW() {
    E.A.hasLoadedExperiments && !H && ((H = !0), eI(y.x.legacyEnabled));
}
function eK() {
    H = !1;
}
function e$() {
    H = !1;
}
class ez extends a.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, G.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(L.default, E.A, w.A, x.A, C.default, R.A, O.A, N.A, A.Ay),
            this.syncWith([E.A], eW),
            p.Le(eC, ev),
            L.default.addChangeListener(eS),
            o.h.addInterceptor(J.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return C.default.isOverlayOOPEnabledForPid(e) ? R.A.isInputLocked(e) : !Z.has(e);
    }
    DEV_isInputLockedV3(e) {
        return R.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !Z.has(e);
    }
    isSupported() {
        return (0, G.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = N.A.getFocusedPID();
        return null != e ? (N.A.isOverlayV3EnabledForPID(e) ? O.A.isOverlayEnabled : K) : O.A.isOverlayEnabled || K;
    }
    getAnyGlobalEnabledOverlay() {
        return C.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = N.A.getFocusedPID();
        return null != e && N.A.isOverlayV3EnabledForPID(e) ? e : z;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && C.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return C.default.isOverlayOOPEnabledForPid((0, G.getPID)());
    }
    isReady(e) {
        return N.A.isOverlayV3EnabledForPID(e) ? N.A.isReady(e) : "READY" === Y.get(e);
    }
    isCrashed(e) {
        return !N.A.isOverlayV3EnabledForPID(e) && "CRASHED" === Y.get(e);
    }
    getOverlayPIDStatuses() {
        return Y;
    }
}
let eq = new ez(
        o.h,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eB }
            : {
                  LOGIN: eK,
                  LOGOUT: e$,
                  CONNECTION_OPEN: ek,
                  CONNECTION_CLOSED: eU,
                  EXPERIMENT_OVERRIDE_BUCKET: eG,
                  RUNNING_GAME_TOGGLE_OVERLAY: eH,
                  RUNNING_GAMES_CHANGE: ej,
                  OVERLAY_SET_ENABLED: eF,
                  OVERLAY_FOCUSED: eP,
                  OVERLAY_SET_INPUT_LOCKED: eO,
                  OVERLAY_ACTIVATE_REGION: eD,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eL,
                  RPC_SERVER_READY: ew,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ex,
                  OVERLAY_JOIN_GAME: eV,
                  OVERLAY_CRASHED: eM,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eY,
              },
    ),
    eX = eq;
