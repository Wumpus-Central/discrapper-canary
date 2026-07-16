"use strict";
let i;
n.r(t),
    n.d(t, { OverlayPIDStatus: () => B, default: () => eD, getOverlayURL: () => eI }),
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
    n(142703),
    n(321073);
var r,
    a = n(17928),
    s = n(499979),
    l = n(228366),
    o = n(387755),
    d = n(780907),
    c = n(391973),
    u = n(684013),
    _ = n(730852),
    E = n(77729),
    A = n(719129),
    h = n(996308),
    I = n(626584),
    f = n(736056),
    p = n(952818);
let T = [],
    m = null;
function g() {
    0 !== T.length &&
        (l.h.dispatch({ type: "OVERLAY_ADD_LOGS_BATCH", logs: T }),
        (T = []),
        null != m && (clearTimeout(m), (m = null)));
}
var S = n(777334),
    N = n(211753),
    C = n(41984),
    R = n(158390),
    O = n(296027),
    L = n(515183),
    y = n(489277),
    D = n(222506),
    v = n(614455),
    b = n(761821),
    M = n(280450),
    P = n(760751),
    U = n(38502),
    w = n(174459),
    G = n(456797),
    x = n(19575),
    k = n(9302),
    F = n(899699),
    V = n(652215);
n(644434);
var B =
    (((r = {}).ATTACHING = "ATTACHING"),
    (r.CONNECTING = "CONNECTING"),
    (r.CONNECTED = "CONNECTED"),
    (r.READY = "READY"),
    (r.CRASHED = "CRASHED"),
    (r.CONNECT_FAILED = "CONNECT_FAILED"),
    (r.HOOK_FAILED = "HOOK_FAILED"),
    (r.DISCONNECTING = "DISCONNECTING"),
    r);
let H = {},
    j = !1,
    W = new Map();
function Y() {
    return Array.from(W.values()).some((e) => "READY" === e);
}
let K = !1,
    $ = !1,
    z = null,
    q = new Set(),
    Z = "",
    X = new Set();
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
            null != this.timeout && clearTimeout(this.timeout),
            (this.timeout = null),
            null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback),
            (this.requestIdleCallback = null);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    flush = () => {
        (null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
        null != this.requestIdleCallback &&
            (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)),
        Y())
            ? (this.actionsToFlush.size > 0 &&
                  (h.tN({ type: V.kGV.DISPATCH, pid: null, token: null, payloads: Array.from(this.actionsToFlush) }),
                  this.actionsToFlush.clear()),
              this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
            : this.actionsToFlush.clear();
    };
    dispatchPayloads = (e) => {
        (this.isDispatching = !0), e.forEach((e) => l.h.dispatch(e)), (this.isDispatching = !1);
    };
    queueDispatch = (e) =>
        !(!Y() || ee.has(e.type)) &&
        (this.isDispatching
            ? this.waitingActionsToFlush.add(e)
            : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                  (e = {
                      ...e,
                      settings: { type: e.settings.type, proto: (0, b.aw)(e.settings.type, e.settings.proto) },
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
    en = new I.A("OverlayBridgeStore"),
    ei = {};
function er(e) {
    return ei[e] ?? {};
}
function ea(e, t) {
    let n = ei[e]?.error,
        i = ei[e]?.error_description;
    (ei[e] = { ...ei[e], ...t }), null != n && (ei[e].error = n), null != i && (ei[e].error_description = i);
}
let es = "none",
    el = (function (e) {
        let t = Promise.resolve(null),
            n = [],
            i = !1,
            { onContention: r, onContentionResolved: a, onTimeout: s, timeoutMs: l } = e,
            o = function (e, o) {
                n.length > 0 ? (r(o, n), (i = !0)) : i && (a(), (i = !1)), n.push(o);
                let d = null == l || null == s ? null : setTimeout(() => s(o, n), l);
                return new Promise((i, r) => {
                    (t = t
                        .then(e)
                        .then(i, r)
                        .then(() => n.splice(0, 1))),
                        null != d && (t = t.then(() => clearTimeout(d)));
                });
            };
        return (o.isMutexHeld = () => n.length > 0), (o.getLockHolders = () => n), o;
    })({
        onContention: (e, t) => en.verbose(`overlayLock contention: lastMutexCall ${es}`),
        onContentionResolved: () => en.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${es}}`;
            en.error(n);
            let i = er((0, k.getPID)());
            ea((0, k.getPID)(), { ...i, error_description: n, success: !1 }),
                w.default.track(V.HAw.OVERLAY_HOOK_RESULT, er((0, k.getPID)()));
        },
        timeoutMs: 18e4,
    });
function eo(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        el(() => t(...i), e);
    };
}
function ed(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = W.get(e);
    (null === n || i === n) &&
        i !== t &&
        (null == t ? W.delete(e) : W.set(e, t),
        (null == t || "CRASHED" === t) &&
            (u.A.setFocusedPID(null, null),
            (function () {
                try {
                    let e = E.A?.fileManager?.uploadDiscordHookCrashes;
                    if (null == e) return;
                    e().then((e) => {
                        if (Array.isArray(e) && 0 !== e.length)
                            for (let t of (en.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                if (null == t) continue;
                                let e = null != t.processName ? P.A.getGameByExecutable(t.processName) : null;
                                w.default.track(V.HAw.OVERLAY_HOOK_CRASHED, {
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
                    en.error("tryUploadDiscordHookCrashes", e), (0, S.pj)(e);
                }
            })()),
        X.delete(e),
        en.info(`pid=${e} status transition ${i ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, W));
}
async function ec(e) {
    try {
        if (x.Ay.supportsFeature(V.BYE.CREATE_HOST_ON_ATTACH))
            if (W.size > 0) {
                es = "reconcile.getOverlayURL";
                let t = await eI();
                (es = "reconcile.createHostProcess"), e.createHostProcess(t, eT, ep);
            } else (es = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eh((0, k.getPID)());
        else if (K) {
            let t = await eI();
            e.createHostProcess(t, eT, ep);
        } else e.destroyHostProcess(), eh((0, k.getPID)());
    } catch (t) {
        en.error("reconcileHostProcess", t), (0, S.pj)(t), eh((0, k.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            en.error("reconcileHostProcess: destroyHostProcess", e), (0, S.pj)(e);
        }
    }
}
async function eu(e) {
    el.isMutexHeld() || en.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let t = er(e).mounting_started_at ?? new Date().getTime();
    ea(e, { mounting_started_at: t });
    let n = W.get(e);
    if (null != n) return void en.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
    await u.A.updateOverlayState(e, C.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (es = "attach.getOverlayModule");
    let i = await (0, F.R)();
    if (null == i) return void en.error(`Trying to attach to pid=${e}, but overlay module failed loaded`);
    (es = "attach.transitionOverlayPIDStatus"), ed(e, "ATTACHING"), (es = "attach.attachToProcess");
    let r = await A.GH(e);
    null == r
        ? ((es = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          ed(e, "CONNECTING", "ATTACHING"),
          (es = "attach.reconcileHostProcess"),
          await ec(i),
          i.connectProcess(e))
        : ((es = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          ed(e, "HOOK_FAILED", "ATTACHING"),
          en.warn(`Could not hook to pid=${e}, error=${r}`));
}
async function e_(e) {
    if ((el.isMutexHeld() || en.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !W.has(e)))
        return void en.warn(`Trying to detach from pid ${e}, which is in an unknown state`);
    ed(e, "DISCONNECTING");
    try {
        es = "detach.getOverlayModule";
        let t = await (0, F.R)();
        if (null == t) return void en.error(`Trying to detach from pid=${e}, but overlay module failed loaded`);
        e !== k.DEV_PID &&
            ((es = "detach.cancelAttachToProcess"),
            await A.c1(e),
            await (0, s.yy)(16),
            (es = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (es = "detach.transitionOverlayPIDStatus"),
            ed(e, null),
            (es = "detach.reconcileHostProcess"),
            await ec(t);
    } catch (t) {
        (0, S.pj)(t, C.Ue.Hook), en.error(`Error during overlay detachment for pid ${e}:`, t), ed(e, null);
    }
}
async function eE(e) {
    if (
        (en.verbose("updateIntendedOverlayPIDs", { isConnectionOpened: $, action: e }),
        el.isMutexHeld() || en.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
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
            (0, S.pj)(n, C.Ue.Hook), en.error(`Failed to deconstruct tracked game ${e}`, n), (H[e] = t), q.add(e);
        }
    }
    let n = !1;
    if (null == e || !K) {
        for (let i of (en.verbose("updateIntendedOverlayPIDs: Removing all.", H, e), Object.keys(H)))
            await t(Number(i)), (n = !0);
        return;
    }
    for (let i of q) {
        if (e.added?.includes(i)) {
            en.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        en.verbose(`updateIntendedOverlayPIDs: retrying failed overlay pid ${i}`), await t(i), (n = !0);
    }
    for (let t of e.added ?? []) {
        let i = O.default.getTrackedGameByPid(t);
        if (null == i) {
            en.error(`updateIntendedOverlayPIDs: Tracked game not found for pid=${t}`);
            continue;
        }
        if ((en.verbose("updateIntendedOverlayPIDs: newGame", i), i.legacyEnabled))
            switch (
                (i.pid in H
                    ? en.error(`Unexpected. ${i.pid} is being added twice?`, H, e)
                    : !(function (e) {
                          if (null != ei[e]) return;
                          let t = p.Ay.getGameOrTransformedSubgameForPID(e);
                          ei[e] = {
                              overlay_method: C.Ue[C.Ue.Hook],
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
                      })(i.pid),
                i.overlayMethod)
            ) {
                case C.Ue.Hook:
                    let r = new Date().getTime();
                    ea(i.pid, { mounting_started_at: r, fullscreen_type: await (0, L.E1)(i.pid, 0) }),
                        W.has(i.pid) || (await eu(i.pid)),
                        (H[i.pid] = {
                            method: i.overlayMethod,
                            deconstructor: async () => {
                                await e_(i.pid);
                            },
                        }),
                        (n = !0);
                    break;
                case C.Ue.OutOfProcess:
                case C.Ue.OutOfProcessLimitedInteraction:
                    en.error("updateIntendedOverlayPIDs: out of process called for hook overlay", i);
                    break;
                case C.Ue.Disabled:
                    en.verbose("updateIntendedOverlayPIDs: disabled", i);
                    break;
                default:
                    en.error(`updateIntendedOverlayPIDs: Unknown overlay method: ${i.overlayMethod}`, i);
            }
    }
    for (let i of e.removed) en.verbose("updateIntendedOverlayPIDs: removedGame", i), await t(i), (n = !0);
    n && ey.emitChange();
}
let eA = eo("updateIntendedOverlayPIDs", (e) => (en.info("updateIntendedOverlayPIDs", e), eE(e))),
    eh = eo("clearPID", (e) => {
        if (null == e) return (0, k.setPID)(k.UNSET_PID);
        y.A.isOverlayV3EnabledForPID(e) || (0, k.setPID)(k.UNSET_PID);
    });
function eI() {
    return new Promise((e) => {
        ey.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let ef = eo("setOverlayEnabled", async (e) => {
    if (!(0, k.supportsLegacy)()) return;
    if (K === e) return void en.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (K = e), ey.emitChange();
    let t = await (0, F.R)();
    null == t
        ? en.error("setOverlayEnabled: overlay module failed loaded")
        : (K || (await eE(void 0)), W.size > 0 && (await ec(t)));
});
function ep(e) {
    u.A.setFocusedPID(0 === e ? null : e, null);
}
function eT(e, t, n) {
    let i = p.Ay.getGameForPID(e),
        r = null != i ? P.A.findGame(i) : null;
    ea(e, {
        ...{ game_name: i?.name, game_id: null == r ? null : r.id, success: t, overlay_method: C.Ue[C.Ue.Hook], ...n },
    }),
        (0, c.Vz)(k.OVERLAY_LAYOUT_ID, U.A.getDefaultLayout(k.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let a = er(e);
    w.default.track(V.HAw.OVERLAY_HOOK_RESULT, a),
        en.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, a),
        t
            ? (u.A.updateOverlayState(e, C.AR.OVERLAY_RENDERING, "onConnectComplete"), ed(e, "CONNECTED", "CONNECTING"))
            : (u.A.updateOverlayState(e, C.AR.OVERLAY_CRASHED, "onConnectComplete"),
              ed(e, "CONNECT_FAILED", "CONNECTING"));
}
function em() {
    let e = M.default.getToken(),
        t = M.default.getId();
    null != e &&
        h.tN({
            type: V.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function eg(e) {
    return (
        null != e &&
        (function (e, t) {
            let n = 0,
                i = Math.min(e.length, t.length);
            for (let r = 0; r < i; r++) n |= e.charCodeAt(r) ^ t.charCodeAt(r);
            return 0 === n && e.length === t.length;
        })(e, Z)
    );
}
function eS(e) {
    switch (e.type) {
        case V.kGV.CONNECT:
            let t = M.default.getToken();
            if (null == t) break;
            (0, c.Vz)(k.OVERLAY_LAYOUT_ID, U.A.getDefaultLayout(k.OVERLAY_LAYOUT_ID), 0),
                Promise.all([
                    (function (e, t) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new R.A();
                        return n
                            .e("67946")
                            .then(n.bind(n, 33164))
                            .then((n) => {
                                let { default: r } = n;
                                return r(e, t, i);
                            });
                    })(t, e.pid),
                    a.Ay.PersistedStore.getAllStates(),
                ]).then((t) => {
                    let [n, i] = t,
                        { pid: r, token: a } = e;
                    h.tN({ type: V.kGV.STORAGE_SYNC, pid: r, token: a, states: i }),
                        h.tN({ type: V.kGV.DISPATCH, pid: r, token: a, payloads: [n] }),
                        ed(r, "READY"),
                        (0, k.setPID)(r),
                        u.A.overlayReady(r);
                    let s = er(r);
                    ea(r, {
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
            var i;
            (i = e.payload),
                T.push(i),
                T.length >= 100
                    ? g()
                    : null == m &&
                      (m = setTimeout(() => {
                          g();
                      }, 1e3));
    }
}
async function eN(e, t) {
    let n = await (0, F.R)();
    if (null == n) return void en.error("setInputLocked: overlay module failed loaded");
    let i = t ?? z;
    if (null != i && "DISCONNECTING" === W.get(i))
        return void en.warn("Overlay module is no longer valid during input lock");
    try {
        null != i && i !== k.DEV_PID && n.sendCommand(i, { message: "intercept_input", intercept: !e });
    } catch (e) {
        (0, S.pj)(e, C.Ue.Hook), en.error("Error during input lock", e);
    }
}
function eC(e, t) {
    e ? setTimeout(() => eN(e, t), 200) : eN(e, t);
}
let eR = null;
function eO() {
    f.A.hasLoadedExperiments && !j && ((j = !0), ef(N.x.legacyEnabled));
}
class eL extends a.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, k.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(M.default, f.A, P.A, U.A, O.default, D.A, v.A, y.A, p.Ay),
            this.syncWith([f.A], eO),
            h.Le(eS, eg),
            M.default.addChangeListener(em),
            l.h.addInterceptor(J.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return O.default.isOverlayOOPEnabledForPid(e) ? D.A.isInputLocked(e) : !X.has(e);
    }
    DEV_isInputLockedV3(e) {
        return D.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !X.has(e);
    }
    isSupported() {
        return (0, k.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = y.A.getFocusedPID();
        return null != e ? (y.A.isOverlayV3EnabledForPID(e) ? v.A.isOverlayEnabled : K) : v.A.isOverlayEnabled || K;
    }
    getAnyGlobalEnabledOverlay() {
        return O.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = y.A.getFocusedPID();
        return null != e && y.A.isOverlayV3EnabledForPID(e) ? e : z;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && O.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return O.default.isOverlayOOPEnabledForPid((0, k.getPID)());
    }
    isReady(e) {
        return y.A.isOverlayV3EnabledForPID(e) ? y.A.isReady(e) : "READY" === W.get(e);
    }
    isCrashed(e) {
        return !y.A.isOverlayV3EnabledForPID(e) && "CRASHED" === W.get(e);
    }
    getOverlayPIDStatuses() {
        return W;
    }
}
let ey = new eL(
        l.h,
        __OVERLAY__
            ? {
                  OVERLAY_RELAY_CLICK_ZONE_CLICKED: function (e) {
                      let { normalizedMouseX: t, normalizedMouseY: n } = e;
                      setTimeout(() => {
                          let e = Math.ceil(t * window.innerWidth),
                              i = Math.ceil(n * window.innerHeight),
                              r = (0, G._)("click", e, i);
                          (0, G.K)(r, e, i);
                      }, 50);
                  },
              }
            : {
                  LOGIN: function () {
                      j = !1;
                  },
                  LOGOUT: function () {
                      j = !1;
                  },
                  CONNECTION_OPEN: function () {
                      ($ = !0), (j = !1), eO();
                  },
                  CONNECTION_CLOSED: function () {
                      ($ = !1),
                          u.A.setFocusedPID(null, null),
                          eA(void 0),
                          en.verbose("OverlayBridgeStore: handleConnectionClosed");
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: function () {
                      return !0;
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      return eA({ added: [], removed: [] }), !0;
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      return eA({ added: [], removed: [] }), !0;
                  },
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t } = e;
                      return ef(t), !1;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      let { pid: t } = e;
                      z = t;
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      let { locked: t, pid: n } = e,
                          i = W.get(n);
                      if (
                          (q.has(n) && eA(void 0), null != i && null != H[n]) &&
                          (t || "READY" === i || "CRASHED" === i)
                      ) {
                          if (
                              (t ? X.delete(n) : X.add(n), et.clear(), null != eR && (clearTimeout(eR), (eR = null), t))
                          )
                              return;
                          t
                              ? eC(t, n)
                              : (eR = setTimeout(() => {
                                    eC(t, n), (eR = null);
                                }, 100));
                      }
                  },
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e;
                      et.add(t), eC(!1, z);
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      et.clear(), eC(!0, z);
                  },
                  RPC_SERVER_READY: function (e) {
                      let { port: t } = e;
                      Z = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
                      let n = new URLSearchParams();
                      n.append("build_id", "e7cef2ea462b5cc6ddecfda90199f7b97ebd946f"),
                          n.append("rpc", String(t)),
                          n.append("rpc_auth_token", Z),
                          (i = `${location.protocol}//${location.host}/overlay?${n.toString()}`);
                  },
                  OVERLAY_CALL_PRIVATE_CHANNEL: function (e) {
                      let { channelId: t, ring: n } = e;
                      setImmediate(() => {
                          _.default.selectPrivateChannel(t), o.A.call(t, !1, !!n);
                      });
                  },
                  OVERLAY_JOIN_GAME: function (e) {
                      let { userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a } = e;
                      setImmediate(() => {
                          d.Ay.join({ userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a }),
                              null != z && u.A.setInputLocked(!0, z);
                      });
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { pid: t, error: n } = e;
                      if (null == H[t]) return;
                      let i = n instanceof Error ? n : Error(n ?? "Unknown error");
                      ed(t, "CRASHED"),
                          ea(t, {
                              renderer_crash_count: (er(t).renderer_crash_count ?? 0) + 1,
                              error: n instanceof Error ? n.message : n,
                              error_description: n instanceof Error ? n.stack : void 0,
                          }),
                          en.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
                          (0, S.St)(i, C.Ue.Hook);
                  },
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      en.verbose("Updating OverlayMethod", {
                          pid: e.pid,
                          overlayMethod: e.overlayMethod,
                          overlayLabel: (0, L.gK)(e.overlayMethod),
                      }),
                          e.overlayMethod === C.Ue.Hook
                              ? eA({ added: [e.pid], removed: [] })
                              : eA({ added: [], removed: [e.pid] });
                  },
              },
    ),
    eD = ey;
