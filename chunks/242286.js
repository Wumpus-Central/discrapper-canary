"use strict";
let r;
n.r(t),
    n.d(t, { OverlayPIDStatus: () => F, default: () => eq, getOverlayURL: () => eE }),
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
    p = n(719129),
    h = n(996308),
    m = n(626584),
    g = n(49463),
    E = n(15285),
    A = n(159551),
    I = n(777334),
    T = n(211753),
    y = n(41984),
    S = n(53733),
    v = n(833551),
    C = n(515183),
    b = n(395011),
    N = n(222506),
    R = n(680243),
    O = n(761821),
    D = n(961350),
    L = n(760751),
    w = n(555528),
    x = n(954571),
    P = n(799112),
    M = n(456797),
    k = n(837921),
    U = n(9302),
    G = n(899699),
    V = n(652215);
n(644434);
var F = (function (e) {
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
let B = {},
    j = !1,
    H = new Map(),
    Y = () => Array.from(H.values()).some((e) => "READY" === e),
    W = !1,
    K = !1,
    z = null,
    $ = new Set(),
    q = "",
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
        Y())
            ? (this.actionsToFlush.size > 0 &&
                  (h.tN({ type: V.kGV.DISPATCH, pid: null, token: null, payloads: Array.from(this.actionsToFlush) }),
                  this.actionsToFlush.clear()),
              this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
            : this.actionsToFlush.clear();
    };
    dispatchPayloads = (e) => {
        (this.isDispatching = !0), e.forEach((e) => o.h.dispatch(e)), (this.isDispatching = !1);
    };
    queueDispatch = (e) =>
        !(!Y() || J.has(e.type)) &&
        (this.isDispatching
            ? this.waitingActionsToFlush.add(e)
            : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                  (e = {
                      ...e,
                      settings: { type: e.settings.type, proto: (0, O.aw)(e.settings.type, e.settings.proto) },
                  }),
              this.actionsToFlush.add(e),
              null == this.timeout &&
                  null == this.requestIdleCallback &&
                  (this.timeout = setTimeout(() => {
                      this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                  }, 100))),
        !1);
}
let X = new Q(),
    J = new Set([
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
    ee = new Set(),
    et = !1,
    en = new m.A("OverlayBridgeStore"),
    er = {};
function ei(e) {
    return er[e] ?? {};
}
function ea(e, t) {
    let n = er[e]?.error,
        r = er[e]?.error_description;
    (er[e] = { ...er[e], ...t }), null != n && (er[e].error = n), null != r && (er[e].error_description = r);
}
function es(e) {
    if (null != er[e]) return;
    let t = E.Ay.getGameOrTransformedSubgameForPID(e);
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
}
let eo = "none",
    el = (0, i.n)({
        onContention: (e, t) => en.verbose(`overlayLock contention: lastMutexCall ${eo}`),
        onContentionResolved: () => en.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${eo}}`;
            en.error(n);
            let r = ei((0, U.getPID)());
            ea((0, U.getPID)(), { ...r, error_description: n, success: !1 }),
                x.default.track(V.HAw.OVERLAY_HOOK_RESULT, ei((0, U.getPID)()));
        },
        timeoutMs: 18e4,
    });
function eu(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        el(() => t(...r), e);
    };
}
function ec() {
    try {
        let e = f.A?.fileManager?.uploadDiscordHookCrashes;
        if (null == e) return;
        e().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let t of (en.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                    if (null == t) continue;
                    let e = null != t.processName ? L.A.getGameByExecutable(t.processName) : null;
                    x.default.track(V.HAw.OVERLAY_HOOK_CRASHED, {
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
        en.error("tryUploadDiscordHookCrashes", e), (0, I.pj)(e);
    }
}
function ed(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = H.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? H.delete(e) : H.set(e, t),
        (null == t || "CRASHED" === t) && (d.A.setFocusedPID(null, null), ec()),
        Z.delete(e),
        en.info(`pid=${e} status transition ${r ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, H));
}
async function e_(e) {
    try {
        if (k.Ay.supportsFeature(V.BYE.CREATE_HOST_ON_ATTACH))
            if (H.size > 0) {
                eo = "reconcile.getOverlayURL";
                let t = await eE();
                (eo = "reconcile.createHostProcess"), e.createHostProcess(t, eT, eI);
            } else (eo = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eg((0, U.getPID)());
        else if (W) {
            let t = await eE();
            e.createHostProcess(t, eT, eI);
        } else e.destroyHostProcess(), eg((0, U.getPID)());
    } catch (t) {
        en.error("reconcileHostProcess", t), (0, I.pj)(t), eg((0, U.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            en.error("reconcileHostProcess: destroyHostProcess", e), (0, I.pj)(e);
        }
    }
}
async function ef(e) {
    el.isMutexHeld() || en.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let t = ei(e).mounting_started_at ?? new Date().getTime();
    ea(e, { mounting_started_at: t });
    let n = H.get(e);
    if (null != n) return void en.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
    await d.A.updateOverlayState(e, y.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (eo = "attach.getOverlayModule");
    let r = await (0, G.R)();
    if (null == r) return void en.error(`Trying to attach to pid=${e}, but overlay module failed loaded`);
    (eo = "attach.transitionOverlayPIDStatus"), ed(e, "ATTACHING"), (eo = "attach.attachToProcess");
    let i = await p.GH(e);
    null == i
        ? ((eo = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          ed(e, "CONNECTING", "ATTACHING"),
          (eo = "attach.reconcileHostProcess"),
          await e_(r),
          r.connectProcess(e))
        : ((eo = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          ed(e, "HOOK_FAILED", "ATTACHING"),
          en.warn(`Could not hook to pid=${e}, error=${i}`));
}
async function ep(e) {
    if ((el.isMutexHeld() || en.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !H.has(e)))
        return void en.warn(`Trying to detach from pid ${e}, which is in an unknown state`);
    ed(e, "DISCONNECTING");
    try {
        eo = "detach.getOverlayModule";
        let t = await (0, G.R)();
        if (null == t) return void en.error(`Trying to detach from pid=${e}, but overlay module failed loaded`);
        e !== U.DEV_PID &&
            ((eo = "detach.cancelAttachToProcess"),
            await p.c1(e),
            await (0, s.yy)(16),
            (eo = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (eo = "detach.transitionOverlayPIDStatus"),
            ed(e, null),
            (eo = "detach.reconcileHostProcess"),
            await e_(t);
    } catch (t) {
        (0, I.pj)(t, y.Ue.Hook), en.error(`Error during overlay detachment for pid ${e}:`, t), ed(e, null);
    }
}
async function eh(e) {
    if (
        (en.verbose("updateIntendedOverlayPIDs", { isConnectionOpened: K, action: e }),
        el.isMutexHeld() || en.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !K && null != e)
    )
        return void en.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function t(e) {
        if (!(e in B)) return;
        let t = B[e];
        delete B[e];
        try {
            await t.deconstructor(), $.delete(e);
        } catch (n) {
            (0, I.pj)(n, y.Ue.Hook), en.error(`Failed to deconstruct tracked game ${e}`, n), (B[e] = t), $.add(e);
        }
    }
    let n = !1;
    if (null == e || !W) {
        for (let r of (en.verbose("updateIntendedOverlayPIDs: Removing all.", B, e), Object.keys(B)))
            await t(Number(r)), (n = !0);
        return;
    }
    for (let r of $) {
        if (e.added?.includes(r)) {
            en.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        en.verbose(`updateIntendedOverlayPIDs: retrying failed overlay pid ${r}`), await t(r), (n = !0);
    }
    for (let t of e.added ?? []) {
        let r = v.default.getTrackedGameByPid(t);
        if (null == r) {
            en.error(`updateIntendedOverlayPIDs: Tracked game not found for pid=${t}`);
            continue;
        }
        if ((en.verbose("updateIntendedOverlayPIDs: newGame", r), r.legacyEnabled))
            switch (
                (r.pid in B ? en.error(`Unexpected. ${r.pid} is being added twice?`, B, e) : es(r.pid), r.overlayMethod)
            ) {
                case y.Ue.Hook:
                    let i = new Date().getTime();
                    ea(r.pid, { mounting_started_at: i, fullscreen_type: await (0, C.E1)(r.pid, 0) }),
                        H.has(r.pid) || (await ef(r.pid)),
                        (B[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await ep(r.pid);
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
    n && e$.emitChange();
}
let em = eu("updateIntendedOverlayPIDs", (e) => (en.info("updateIntendedOverlayPIDs", e), eh(e))),
    eg = eu("clearPID", (e) => {
        if (null == e) return (0, U.setPID)(U.UNSET_PID);
        b.A.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID);
    });
function eE() {
    return new Promise((e) => {
        e$.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eA = eu("setOverlayEnabled", async (e) => {
    if (!(0, U.supportsLegacy)()) return;
    if (W === e) return void en.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (W = e), e$.emitChange();
    let t = await (0, G.R)();
    null == t
        ? en.error("setOverlayEnabled: overlay module failed loaded")
        : (W || (await eh(void 0)), H.size > 0 && (await e_(t)));
});
function eI(e) {
    d.A.setFocusedPID(0 === e ? null : e, null);
}
function eT(e, t, n) {
    let r = E.Ay.getGameForPID(e)?.name,
        i = L.A.getGameByName(r);
    ea(e, { ...{ game_name: r, game_id: null == i ? null : i.id, success: t, overlay_method: y.Ue[y.Ue.Hook], ...n } }),
        (0, c.Vz)(U.OVERLAY_LAYOUT_ID, w.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let a = ei(e);
    x.default.track(V.HAw.OVERLAY_HOOK_RESULT, a),
        en.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, a),
        t
            ? (d.A.updateOverlayState(e, y.AR.OVERLAY_RENDERING, "onConnectComplete"), ed(e, "CONNECTED", "CONNECTING"))
            : (d.A.updateOverlayState(e, y.AR.OVERLAY_CRASHED, "onConnectComplete"),
              ed(e, "CONNECT_FAILED", "CONNECTING"));
}
function ey() {
    let e = D.default.getToken(),
        t = D.default.getId();
    null != e &&
        h.tN({
            type: V.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function eS(e) {
    return null != e && (0, P.j)(e, q);
}
function ev(e) {
    switch ((et && en.info("[app data received]", e), e.type)) {
        case V.kGV.CONNECT:
            let t = D.default.getToken();
            if (null == t) break;
            (0, c.Vz)(U.OVERLAY_LAYOUT_ID, w.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0),
                Promise.all([(0, S.A)(t, e.pid), a.Ay.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    h.tN({ type: V.kGV.STORAGE_SYNC, pid: i, token: a, states: r }),
                        h.tN({ type: V.kGV.DISPATCH, pid: i, token: a, payloads: [n] }),
                        ed(i, "READY"),
                        (0, U.setPID)(i),
                        d.A.overlayReady(i);
                    let s = ei(i);
                    ea(i, {
                        ...s,
                        total_mount_time_ms:
                            null != s.mounting_started_at ? new Date().getTime() - s.mounting_started_at : void 0,
                    });
                });
            break;
        case V.kGV.DISPATCH:
            null != e.payloads && X.dispatchPayloads(e.payloads);
            break;
        case V.kGV.LOG_MESSAGES:
            (0, A.F)(e.payload);
    }
}
async function eC(e, t) {
    let n = await (0, G.R)();
    if (null == n) return void en.error("setInputLocked: overlay module failed loaded");
    let r = t ?? z;
    if (null != r && "DISCONNECTING" === H.get(r))
        return void en.warn("Overlay module is no longer valid during input lock");
    try {
        null != r && r !== U.DEV_PID && n.sendCommand(r, { message: "intercept_input", intercept: !e });
    } catch (e) {
        (0, I.pj)(e, y.Ue.Hook), en.error("Error during input lock", e);
    }
}
function eb(e, t) {
    e ? setTimeout(() => eC(e, t), 200) : eC(e, t);
}
let eN = null;
function eR(e) {
    let { locked: t, pid: n } = e,
        r = H.get(n);
    if (($.has(n) && em(void 0), null != r && null != B[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? Z.delete(n) : Z.add(n), ee.clear(), null != eN && (clearTimeout(eN), (eN = null), t))) return;
        t
            ? eb(t, n)
            : (eN = setTimeout(() => {
                  eb(t, n), (eN = null);
              }, 100));
    }
}
function eO(e) {
    let { region: t } = e;
    ee.add(t), eb(!1, z);
}
function eD() {
    ee.clear(), eb(!0, z);
}
function eL(e) {
    let { port: t } = e;
    q = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "93179522fde40f7ecc7aea17608967ce0f49de7c"),
        n.append("rpc", String(t)),
        n.append("rpc_auth_token", q),
        (r = `${location.protocol}//${location.host}/overlay?${n.toString()}`);
}
function ew(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), l.A.call(t, !1, !!n);
    });
}
function ex(e) {
    let { pid: t } = e;
    z = t;
}
function eP(e) {
    let { pid: t, error: n } = e;
    if (null == B[t]) return;
    let r = n instanceof Error ? n : Error(n ?? "Unknown error");
    ed(t, "CRASHED"),
        ea(t, {
            renderer_crash_count: (ei(t).renderer_crash_count ?? 0) + 1,
            error: n instanceof Error ? n.message : n,
            error_description: n instanceof Error ? n.stack : void 0,
        }),
        en.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
        (0, I.St)(r, y.Ue.Hook);
}
function eM() {
    (K = !0), (j = !1), eY();
}
function ek() {
    (K = !1), d.A.setFocusedPID(null, null), em(void 0), en.verbose("OverlayBridgeStore: handleConnectionClosed");
}
function eU() {
    return !0;
}
function eG(e) {
    let { legacyEnabled: t } = e;
    return eA(t), !1;
}
function eV(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        u.A.join({ userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a }),
            null != z && d.A.setInputLocked(!0, z);
    });
}
function eF(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, M._)("click", e, r);
        (0, M.K)(i, e, r);
    }, 50);
}
function eB(e) {
    return em({ added: [], removed: [] }), !0;
}
function ej(e) {
    return em({ added: [], removed: [] }), !0;
}
function eH(e) {
    en.verbose("Updating OverlayMethod", {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, C.gK)(e.overlayMethod),
    }),
        e.overlayMethod === y.Ue.Hook ? em({ added: [e.pid], removed: [] }) : em({ added: [], removed: [e.pid] });
}
function eY() {
    g.A.hasLoadedExperiments && !j && ((j = !0), eA(T.x.legacyEnabled));
}
function eW() {
    j = !1;
}
function eK() {
    j = !1;
}
class ez extends a.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, U.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(D.default, g.A, L.A, w.A, v.default, N.A, R.A, b.A, E.Ay),
            this.syncWith([g.A], eY),
            h.Le(ev, eS),
            D.default.addChangeListener(ey),
            o.h.addInterceptor(X.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return v.default.isOverlayOOPEnabledForPid(e) ? N.A.isInputLocked(e) : !Z.has(e);
    }
    DEV_isInputLockedV3(e) {
        return N.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !Z.has(e);
    }
    isSupported() {
        return (0, U.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = b.A.getFocusedPID();
        return null != e ? (b.A.isOverlayV3EnabledForPID(e) ? R.A.isOverlayEnabled : W) : R.A.isOverlayEnabled || W;
    }
    getAnyGlobalEnabledOverlay() {
        return v.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = b.A.getFocusedPID();
        return null != e && b.A.isOverlayV3EnabledForPID(e) ? e : z;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && v.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return v.default.isOverlayOOPEnabledForPid((0, U.getPID)());
    }
    isReady(e) {
        return b.A.isOverlayV3EnabledForPID(e) ? b.A.isReady(e) : "READY" === H.get(e);
    }
    isCrashed(e) {
        return !b.A.isOverlayV3EnabledForPID(e) && "CRASHED" === H.get(e);
    }
    getOverlayPIDStatuses() {
        return H;
    }
}
let e$ = new ez(
        o.h,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eF }
            : {
                  LOGIN: eW,
                  LOGOUT: eK,
                  CONNECTION_OPEN: eM,
                  CONNECTION_CLOSED: ek,
                  EXPERIMENT_OVERRIDE_BUCKET: eU,
                  RUNNING_GAME_TOGGLE_OVERLAY: ej,
                  RUNNING_GAMES_CHANGE: eB,
                  OVERLAY_SET_ENABLED: eG,
                  OVERLAY_FOCUSED: ex,
                  OVERLAY_SET_INPUT_LOCKED: eR,
                  OVERLAY_ACTIVATE_REGION: eO,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eD,
                  RPC_SERVER_READY: eL,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ew,
                  OVERLAY_JOIN_GAME: eV,
                  OVERLAY_CRASHED: eP,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eH,
              },
    ),
    eq = e$;
