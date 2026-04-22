"use strict";
let r;
n.r(t),
    n.d(t, { OverlayPIDStatus: () => B, default: () => eb, getOverlayURL: () => ep }),
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
var i,
    s = n(927429),
    a = n(311907),
    o = n(499979),
    l = n(73153),
    u = n(387755),
    d = n(544420),
    c = n(391973),
    _ = n(684013),
    f = n(956793),
    E = n(77729),
    h = n(719129),
    p = n(996308),
    m = n(626584),
    g = n(49463),
    A = n(15285),
    I = n(159551),
    T = n(777334),
    S = n(211753),
    y = n(41984),
    N = n(53733),
    O = n(833551),
    R = n(515183),
    v = n(395011),
    C = n(222506),
    b = n(680243),
    D = n(761821),
    L = n(961350),
    w = n(760751),
    M = n(555528),
    P = n(954571),
    U = n(799112),
    k = n(456797),
    x = n(837921),
    G = n(9302),
    V = n(899699),
    F = n(652215);
n(644434);
var B =
    (((i = {}).ATTACHING = "ATTACHING"),
    (i.CONNECTING = "CONNECTING"),
    (i.CONNECTED = "CONNECTED"),
    (i.READY = "READY"),
    (i.CRASHED = "CRASHED"),
    (i.CONNECT_FAILED = "CONNECT_FAILED"),
    (i.HOOK_FAILED = "HOOK_FAILED"),
    (i.DISCONNECTING = "DISCONNECTING"),
    i);
let H = {},
    Y = !1,
    W = new Map(),
    j = () => Array.from(W.values()).some((e) => "READY" === e),
    K = !1,
    $ = !1,
    z = null,
    q = new Set(),
    X = "",
    Q = new Set();
class J {
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
        j())
            ? (this.actionsToFlush.size > 0 &&
                  (p.tN({ type: F.kGV.DISPATCH, pid: null, token: null, payloads: Array.from(this.actionsToFlush) }),
                  this.actionsToFlush.clear()),
              this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
            : this.actionsToFlush.clear();
    };
    dispatchPayloads = (e) => {
        (this.isDispatching = !0), e.forEach((e) => l.h.dispatch(e)), (this.isDispatching = !1);
    };
    queueDispatch = (e) =>
        !(!j() || ee.has(e.type)) &&
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
let Z = new J(),
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
        "USER_PROFILE_SETTINGS_INIT",
        "USER_PROFILE_SETTINGS_CLOSE",
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
    en = new m.A("OverlayBridgeStore"),
    er = {};
function ei(e) {
    return er[e] ?? {};
}
function es(e, t) {
    let n = er[e]?.error,
        r = er[e]?.error_description;
    (er[e] = { ...er[e], ...t }), null != n && (er[e].error = n), null != r && (er[e].error_description = r);
}
let ea = "none",
    eo = (0, s.n)({
        onContention: (e, t) => en.verbose(`overlayLock contention: lastMutexCall ${ea}`),
        onContentionResolved: () => en.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${ea}}`;
            en.error(n);
            let r = ei((0, G.getPID)());
            es((0, G.getPID)(), { ...r, error_description: n, success: !1 }),
                P.default.track(F.HAw.OVERLAY_HOOK_RESULT, ei((0, G.getPID)()));
        },
        timeoutMs: 18e4,
    });
function el(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        eo(() => t(...r), e);
    };
}
function eu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = W.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? W.delete(e) : W.set(e, t),
        (null == t || "CRASHED" === t) &&
            (_.A.setFocusedPID(null, null),
            (function () {
                try {
                    let e = E.A?.fileManager?.uploadDiscordHookCrashes;
                    if (null == e) return;
                    e().then((e) => {
                        if (Array.isArray(e) && 0 !== e.length)
                            for (let t of (en.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                if (null == t) continue;
                                let e = null != t.processName ? w.A.getGameByExecutable(t.processName) : null;
                                P.default.track(F.HAw.OVERLAY_HOOK_CRASHED, {
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
                    en.error("tryUploadDiscordHookCrashes", e), (0, T.pj)(e);
                }
            })()),
        Q.delete(e),
        en.info(`pid=${e} status transition ${r ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, W));
}
async function ed(e) {
    try {
        if (x.Ay.supportsFeature(F.BYE.CREATE_HOST_ON_ATTACH))
            if (W.size > 0) {
                ea = "reconcile.getOverlayURL";
                let t = await ep();
                (ea = "reconcile.createHostProcess"), e.createHostProcess(t, eA, eg);
            } else (ea = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eh((0, G.getPID)());
        else if (K) {
            let t = await ep();
            e.createHostProcess(t, eA, eg);
        } else e.destroyHostProcess(), eh((0, G.getPID)());
    } catch (t) {
        en.error("reconcileHostProcess", t), (0, T.pj)(t), eh((0, G.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            en.error("reconcileHostProcess: destroyHostProcess", e), (0, T.pj)(e);
        }
    }
}
async function ec(e) {
    eo.isMutexHeld() || en.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let t = ei(e).mounting_started_at ?? new Date().getTime();
    es(e, { mounting_started_at: t });
    let n = W.get(e);
    if (null != n) return void en.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
    await _.A.updateOverlayState(e, y.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (ea = "attach.getOverlayModule");
    let r = await (0, V.R)();
    if (null == r) return void en.error(`Trying to attach to pid=${e}, but overlay module failed loaded`);
    (ea = "attach.transitionOverlayPIDStatus"), eu(e, "ATTACHING"), (ea = "attach.attachToProcess");
    let i = await h.GH(e);
    null == i
        ? ((ea = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          eu(e, "CONNECTING", "ATTACHING"),
          (ea = "attach.reconcileHostProcess"),
          await ed(r),
          r.connectProcess(e))
        : ((ea = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          eu(e, "HOOK_FAILED", "ATTACHING"),
          en.warn(`Could not hook to pid=${e}, error=${i}`));
}
async function e_(e) {
    if ((eo.isMutexHeld() || en.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !W.has(e)))
        return void en.warn(`Trying to detach from pid ${e}, which is in an unknown state`);
    eu(e, "DISCONNECTING");
    try {
        ea = "detach.getOverlayModule";
        let t = await (0, V.R)();
        if (null == t) return void en.error(`Trying to detach from pid=${e}, but overlay module failed loaded`);
        e !== G.DEV_PID &&
            ((ea = "detach.cancelAttachToProcess"),
            await h.c1(e),
            await (0, o.yy)(16),
            (ea = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (ea = "detach.transitionOverlayPIDStatus"),
            eu(e, null),
            (ea = "detach.reconcileHostProcess"),
            await ed(t);
    } catch (t) {
        (0, T.pj)(t, y.Ue.Hook), en.error(`Error during overlay detachment for pid ${e}:`, t), eu(e, null);
    }
}
async function ef(e) {
    if (
        (en.verbose("updateIntendedOverlayPIDs", { isConnectionOpened: $, action: e }),
        eo.isMutexHeld() || en.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !$ && null != e)
    )
        return void en.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function t(e) {
        if (!(e in H)) return;
        let t = H[e];
        delete H[e];
        try {
            await t.deconstructor(), q.delete(e);
        } catch (n) {
            (0, T.pj)(n, y.Ue.Hook), en.error(`Failed to deconstruct tracked game ${e}`, n), (H[e] = t), q.add(e);
        }
    }
    let n = !1;
    if (null == e || !K) {
        for (let r of (en.verbose("updateIntendedOverlayPIDs: Removing all.", H, e), Object.keys(H)))
            await t(Number(r)), (n = !0);
        return;
    }
    for (let r of q) {
        if (e.added?.includes(r)) {
            en.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        en.verbose(`updateIntendedOverlayPIDs: retrying failed overlay pid ${r}`), await t(r), (n = !0);
    }
    for (let t of e.added ?? []) {
        let r = O.default.getTrackedGameByPid(t);
        if (null == r) {
            en.error(`updateIntendedOverlayPIDs: Tracked game not found for pid=${t}`);
            continue;
        }
        if ((en.verbose("updateIntendedOverlayPIDs: newGame", r), r.legacyEnabled))
            switch (
                (r.pid in H
                    ? en.error(`Unexpected. ${r.pid} is being added twice?`, H, e)
                    : !(function (e) {
                          if (null != er[e]) return;
                          let t = A.Ay.getGameOrTransformedSubgameForPID(e);
                          er[e] = {
                              overlay_method: y.Ue[y.Ue.Hook],
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
                      })(r.pid),
                r.overlayMethod)
            ) {
                case y.Ue.Hook:
                    let i = new Date().getTime();
                    es(r.pid, { mounting_started_at: i, fullscreen_type: await (0, R.E1)(r.pid, 0) }),
                        W.has(r.pid) || (await ec(r.pid)),
                        (H[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await e_(r.pid);
                            },
                        }),
                        (n = !0);
                    break;
                case y.Ue.OutOfProcess:
                case y.Ue.OutOfProcessLimitedInteraction:
                    en.error("updateIntendedOverlayPIDs: out of process called for hook overlay", r);
                    break;
                case y.Ue.Disabled:
                    en.verbose("updateIntendedOverlayPIDs: disabled", r);
                    break;
                default:
                    en.error(`updateIntendedOverlayPIDs: Unknown overlay method: ${r.overlayMethod}`, r);
            }
    }
    for (let r of e.removed) en.verbose("updateIntendedOverlayPIDs: removedGame", r), await t(r), (n = !0);
    n && eC.emitChange();
}
let eE = el("updateIntendedOverlayPIDs", (e) => (en.info("updateIntendedOverlayPIDs", e), ef(e))),
    eh = el("clearPID", (e) => {
        if (null == e) return (0, G.setPID)(G.UNSET_PID);
        v.A.isOverlayV3EnabledForPID(e) || (0, G.setPID)(G.UNSET_PID);
    });
function ep() {
    return new Promise((e) => {
        eC.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let em = el("setOverlayEnabled", async (e) => {
    if (!(0, G.supportsLegacy)()) return;
    if (K === e) return void en.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (K = e), eC.emitChange();
    let t = await (0, V.R)();
    null == t
        ? en.error("setOverlayEnabled: overlay module failed loaded")
        : (K || (await ef(void 0)), W.size > 0 && (await ed(t)));
});
function eg(e) {
    _.A.setFocusedPID(0 === e ? null : e, null);
}
function eA(e, t, n) {
    let r = A.Ay.getGameForPID(e),
        i = null != r ? w.A.findGame(r) : null;
    es(e, {
        ...{ game_name: r?.name, game_id: null == i ? null : i.id, success: t, overlay_method: y.Ue[y.Ue.Hook], ...n },
    }),
        (0, c.Vz)(G.OVERLAY_LAYOUT_ID, M.A.getDefaultLayout(G.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let s = ei(e);
    P.default.track(F.HAw.OVERLAY_HOOK_RESULT, s),
        en.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, s),
        t
            ? (_.A.updateOverlayState(e, y.AR.OVERLAY_RENDERING, "onConnectComplete"), eu(e, "CONNECTED", "CONNECTING"))
            : (_.A.updateOverlayState(e, y.AR.OVERLAY_CRASHED, "onConnectComplete"),
              eu(e, "CONNECT_FAILED", "CONNECTING"));
}
function eI() {
    let e = L.default.getToken(),
        t = L.default.getId();
    null != e &&
        p.tN({
            type: F.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function eT(e) {
    return null != e && (0, U.j)(e, X);
}
function eS(e) {
    switch (e.type) {
        case F.kGV.CONNECT:
            let t = L.default.getToken();
            if (null == t) break;
            (0, c.Vz)(G.OVERLAY_LAYOUT_ID, M.A.getDefaultLayout(G.OVERLAY_LAYOUT_ID), 0),
                Promise.all([(0, N.A)(t, e.pid), a.Ay.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: s } = e;
                    p.tN({ type: F.kGV.STORAGE_SYNC, pid: i, token: s, states: r }),
                        p.tN({ type: F.kGV.DISPATCH, pid: i, token: s, payloads: [n] }),
                        eu(i, "READY"),
                        (0, G.setPID)(i),
                        _.A.overlayReady(i);
                    let a = ei(i);
                    es(i, {
                        ...a,
                        total_mount_time_ms:
                            null != a.mounting_started_at ? new Date().getTime() - a.mounting_started_at : void 0,
                    });
                });
            break;
        case F.kGV.DISPATCH:
            null != e.payloads && Z.dispatchPayloads(e.payloads);
            break;
        case F.kGV.LOG_MESSAGES:
            (0, I.F)(e.payload);
    }
}
async function ey(e, t) {
    let n = await (0, V.R)();
    if (null == n) return void en.error("setInputLocked: overlay module failed loaded");
    let r = t ?? z;
    if (null != r && "DISCONNECTING" === W.get(r))
        return void en.warn("Overlay module is no longer valid during input lock");
    try {
        null != r && r !== G.DEV_PID && n.sendCommand(r, { message: "intercept_input", intercept: !e });
    } catch (e) {
        (0, T.pj)(e, y.Ue.Hook), en.error("Error during input lock", e);
    }
}
function eN(e, t) {
    e ? setTimeout(() => ey(e, t), 200) : ey(e, t);
}
let eO = null;
function eR() {
    g.A.hasLoadedExperiments && !Y && ((Y = !0), em(S.x.legacyEnabled));
}
class ev extends a.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, G.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(L.default, g.A, w.A, M.A, O.default, C.A, b.A, v.A, A.Ay),
            this.syncWith([g.A], eR),
            p.Le(eS, eT),
            L.default.addChangeListener(eI),
            l.h.addInterceptor(Z.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return O.default.isOverlayOOPEnabledForPid(e) ? C.A.isInputLocked(e) : !Q.has(e);
    }
    DEV_isInputLockedV3(e) {
        return C.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !Q.has(e);
    }
    isSupported() {
        return (0, G.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = v.A.getFocusedPID();
        return null != e ? (v.A.isOverlayV3EnabledForPID(e) ? b.A.isOverlayEnabled : K) : b.A.isOverlayEnabled || K;
    }
    getAnyGlobalEnabledOverlay() {
        return O.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = v.A.getFocusedPID();
        return null != e && v.A.isOverlayV3EnabledForPID(e) ? e : z;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && O.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return O.default.isOverlayOOPEnabledForPid((0, G.getPID)());
    }
    isReady(e) {
        return v.A.isOverlayV3EnabledForPID(e) ? v.A.isReady(e) : "READY" === W.get(e);
    }
    isCrashed(e) {
        return !v.A.isOverlayV3EnabledForPID(e) && "CRASHED" === W.get(e);
    }
    getOverlayPIDStatuses() {
        return W;
    }
}
let eC = new ev(
        l.h,
        __OVERLAY__
            ? {
                  OVERLAY_RELAY_CLICK_ZONE_CLICKED: function (e) {
                      let { normalizedMouseX: t, normalizedMouseY: n } = e;
                      setTimeout(() => {
                          let e = Math.ceil(t * window.innerWidth),
                              r = Math.ceil(n * window.innerHeight),
                              i = (0, k._)("click", e, r);
                          (0, k.K)(i, e, r);
                      }, 50);
                  },
              }
            : {
                  LOGIN: function () {
                      Y = !1;
                  },
                  LOGOUT: function () {
                      Y = !1;
                  },
                  CONNECTION_OPEN: function () {
                      ($ = !0), (Y = !1), eR();
                  },
                  CONNECTION_CLOSED: function () {
                      ($ = !1),
                          _.A.setFocusedPID(null, null),
                          eE(void 0),
                          en.verbose("OverlayBridgeStore: handleConnectionClosed");
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: function () {
                      return !0;
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      return eE({ added: [], removed: [] }), !0;
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      return eE({ added: [], removed: [] }), !0;
                  },
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t } = e;
                      return em(t), !1;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      let { pid: t } = e;
                      z = t;
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      let { locked: t, pid: n } = e,
                          r = W.get(n);
                      if (
                          (q.has(n) && eE(void 0), null != r && null != H[n]) &&
                          (t || "READY" === r || "CRASHED" === r)
                      ) {
                          if (
                              (t ? Q.delete(n) : Q.add(n), et.clear(), null != eO && (clearTimeout(eO), (eO = null), t))
                          )
                              return;
                          t
                              ? eN(t, n)
                              : (eO = setTimeout(() => {
                                    eN(t, n), (eO = null);
                                }, 100));
                      }
                  },
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e;
                      et.add(t), eN(!1, z);
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      et.clear(), eN(!0, z);
                  },
                  RPC_SERVER_READY: function (e) {
                      let { port: t } = e;
                      X = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
                      let n = new URLSearchParams();
                      n.append("build_id", "02d3782202dab7e2e9586fba1258789923f7aeb7"),
                          n.append("rpc", String(t)),
                          n.append("rpc_auth_token", X),
                          (r = `${location.protocol}//${location.host}/overlay?${n.toString()}`);
                  },
                  OVERLAY_CALL_PRIVATE_CHANNEL: function (e) {
                      let { channelId: t, ring: n } = e;
                      setImmediate(() => {
                          f.default.selectPrivateChannel(t), u.A.call(t, !1, !!n);
                      });
                  },
                  OVERLAY_JOIN_GAME: function (e) {
                      let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: s } = e;
                      setImmediate(() => {
                          d.Ay.join({ userId: t, sessionId: n, applicationId: r, channelId: i, messageId: s }),
                              null != z && _.A.setInputLocked(!0, z);
                      });
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { pid: t, error: n } = e;
                      if (null == H[t]) return;
                      let r = n instanceof Error ? n : Error(n ?? "Unknown error");
                      eu(t, "CRASHED"),
                          es(t, {
                              renderer_crash_count: (ei(t).renderer_crash_count ?? 0) + 1,
                              error: n instanceof Error ? n.message : n,
                              error_description: n instanceof Error ? n.stack : void 0,
                          }),
                          en.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
                          (0, T.St)(r, y.Ue.Hook);
                  },
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      en.verbose("Updating OverlayMethod", {
                          pid: e.pid,
                          overlayMethod: e.overlayMethod,
                          overlayLabel: (0, R.gK)(e.overlayMethod),
                      }),
                          e.overlayMethod === y.Ue.Hook
                              ? eE({ added: [e.pid], removed: [] })
                              : eE({ added: [], removed: [e.pid] });
                  },
              },
    ),
    eb = eC;
