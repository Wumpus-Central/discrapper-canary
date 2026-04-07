"use strict";
let r;
n.r(t),
    n.d(t, { OverlayPIDStatus: () => V, default: () => eq, getOverlayURL: () => eg }),
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
    s = n(311907),
    a = n(499979),
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
    E = n(49463),
    g = n(15285),
    A = n(159551),
    I = n(777334),
    T = n(211753),
    S = n(41984),
    y = n(53733),
    v = n(833551),
    N = n(515183),
    C = n(395011),
    R = n(222506),
    O = n(680243),
    b = n(761821),
    D = n(961350),
    L = n(760751),
    w = n(555528),
    M = n(954571),
    x = n(799112),
    P = n(456797),
    k = n(837921),
    U = n(9302),
    G = n(899699),
    F = n(652215);
n(644434);
var V = (function (e) {
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
    H = !1,
    j = new Map(),
    Y = () => Array.from(j.values()).some((e) => "READY" === e),
    W = !1,
    K = !1,
    $ = null,
    z = new Set(),
    q = "",
    Z = new Set();
class X {
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
                  (h.tN({ type: F.kGV.DISPATCH, pid: null, token: null, payloads: Array.from(this.actionsToFlush) }),
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
let Q = new X(),
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
    ee = new Set(),
    et = !1,
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
function ea(e) {
    if (null != er[e]) return;
    let t = g.Ay.getGameOrTransformedSubgameForPID(e);
    er[e] = {
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
let eo = "none",
    el = (0, i.n)({
        onContention: (e, t) => en.verbose(`overlayLock contention: lastMutexCall ${eo}`),
        onContentionResolved: () => en.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${eo}}`;
            en.error(n);
            let r = ei((0, U.getPID)());
            es((0, U.getPID)(), { ...r, error_description: n, success: !1 }),
                M.default.track(F.HAw.OVERLAY_HOOK_RESULT, ei((0, U.getPID)()));
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
                    M.default.track(F.HAw.OVERLAY_HOOK_CRASHED, {
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
        r = j.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? j.delete(e) : j.set(e, t),
        (null == t || "CRASHED" === t) && (d.A.setFocusedPID(null, null), ec()),
        Z.delete(e),
        en.info(`pid=${e} status transition ${r ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, j));
}
async function e_(e) {
    try {
        if (k.Ay.supportsFeature(F.BYE.CREATE_HOST_ON_ATTACH))
            if (j.size > 0) {
                eo = "reconcile.getOverlayURL";
                let t = await eg();
                (eo = "reconcile.createHostProcess"), e.createHostProcess(t, eT, eI);
            } else (eo = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eE((0, U.getPID)());
        else if (W) {
            let t = await eg();
            e.createHostProcess(t, eT, eI);
        } else e.destroyHostProcess(), eE((0, U.getPID)());
    } catch (t) {
        en.error("reconcileHostProcess", t), (0, I.pj)(t), eE((0, U.getPID)());
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
    es(e, { mounting_started_at: t });
    let n = j.get(e);
    if (null != n) return void en.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
    await d.A.updateOverlayState(e, S.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (eo = "attach.getOverlayModule");
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
    if ((el.isMutexHeld() || en.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !j.has(e)))
        return void en.warn(`Trying to detach from pid ${e}, which is in an unknown state`);
    ed(e, "DISCONNECTING");
    try {
        eo = "detach.getOverlayModule";
        let t = await (0, G.R)();
        if (null == t) return void en.error(`Trying to detach from pid=${e}, but overlay module failed loaded`);
        e !== U.DEV_PID &&
            ((eo = "detach.cancelAttachToProcess"),
            await p.c1(e),
            await (0, a.yy)(16),
            (eo = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (eo = "detach.transitionOverlayPIDStatus"),
            ed(e, null),
            (eo = "detach.reconcileHostProcess"),
            await e_(t);
    } catch (t) {
        (0, I.pj)(t, S.Ue.Hook), en.error(`Error during overlay detachment for pid ${e}:`, t), ed(e, null);
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
            await t.deconstructor(), z.delete(e);
        } catch (n) {
            (0, I.pj)(n, S.Ue.Hook), en.error(`Failed to deconstruct tracked game ${e}`, n), (B[e] = t), z.add(e);
        }
    }
    let n = !1;
    if (null == e || !W) {
        for (let r of (en.verbose("updateIntendedOverlayPIDs: Removing all.", B, e), Object.keys(B)))
            await t(Number(r)), (n = !0);
        return;
    }
    for (let r of z) {
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
                (r.pid in B ? en.error(`Unexpected. ${r.pid} is being added twice?`, B, e) : ea(r.pid), r.overlayMethod)
            ) {
                case S.Ue.Hook:
                    let i = new Date().getTime();
                    es(r.pid, { mounting_started_at: i, fullscreen_type: await (0, N.E1)(r.pid, 0) }),
                        j.has(r.pid) || (await ef(r.pid)),
                        (B[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await ep(r.pid);
                            },
                        }),
                        (n = !0);
                    break;
                case S.Ue.OutOfProcess:
                case S.Ue.OutOfProcessLimitedInteraction:
                    en.error("updateIntendedOverlayPIDs: out of process called for hook overlay", r);
                    break;
                case S.Ue.Disabled:
                    en.verbose("updateIntendedOverlayPIDs: disabled", r);
                    break;
                default:
                    en.error(`updateIntendedOverlayPIDs: Unknown overlay method: ${r.overlayMethod}`, r);
            }
    }
    for (let r of e.removed) en.verbose("updateIntendedOverlayPIDs: removedGame", r), await t(r), (n = !0);
    n && ez.emitChange();
}
let em = eu("updateIntendedOverlayPIDs", (e) => (en.info("updateIntendedOverlayPIDs", e), eh(e))),
    eE = eu("clearPID", (e) => {
        if (null == e) return (0, U.setPID)(U.UNSET_PID);
        C.A.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID);
    });
function eg() {
    return new Promise((e) => {
        ez.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eA = eu("setOverlayEnabled", async (e) => {
    if (!(0, U.supportsLegacy)()) return;
    if (W === e) return void en.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (W = e), ez.emitChange();
    let t = await (0, G.R)();
    null == t
        ? en.error("setOverlayEnabled: overlay module failed loaded")
        : (W || (await eh(void 0)), j.size > 0 && (await e_(t)));
});
function eI(e) {
    d.A.setFocusedPID(0 === e ? null : e, null);
}
function eT(e, t, n) {
    let r = g.Ay.getGameForPID(e),
        i = null != r ? L.A.findGame(r) : null;
    es(e, {
        ...{ game_name: r?.name, game_id: null == i ? null : i.id, success: t, overlay_method: S.Ue[S.Ue.Hook], ...n },
    }),
        (0, c.Vz)(U.OVERLAY_LAYOUT_ID, w.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let s = ei(e);
    M.default.track(F.HAw.OVERLAY_HOOK_RESULT, s),
        en.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, s),
        t
            ? (d.A.updateOverlayState(e, S.AR.OVERLAY_RENDERING, "onConnectComplete"), ed(e, "CONNECTED", "CONNECTING"))
            : (d.A.updateOverlayState(e, S.AR.OVERLAY_CRASHED, "onConnectComplete"),
              ed(e, "CONNECT_FAILED", "CONNECTING"));
}
function eS() {
    let e = D.default.getToken(),
        t = D.default.getId();
    null != e &&
        h.tN({
            type: F.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function ey(e) {
    return null != e && (0, x.j)(e, q);
}
function ev(e) {
    switch ((et && en.info("[app data received]", e), e.type)) {
        case F.kGV.CONNECT:
            let t = D.default.getToken();
            if (null == t) break;
            (0, c.Vz)(U.OVERLAY_LAYOUT_ID, w.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0),
                Promise.all([(0, y.A)(t, e.pid), s.Ay.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: s } = e;
                    h.tN({ type: F.kGV.STORAGE_SYNC, pid: i, token: s, states: r }),
                        h.tN({ type: F.kGV.DISPATCH, pid: i, token: s, payloads: [n] }),
                        ed(i, "READY"),
                        (0, U.setPID)(i),
                        d.A.overlayReady(i);
                    let a = ei(i);
                    es(i, {
                        ...a,
                        total_mount_time_ms:
                            null != a.mounting_started_at ? new Date().getTime() - a.mounting_started_at : void 0,
                    });
                });
            break;
        case F.kGV.DISPATCH:
            null != e.payloads && Q.dispatchPayloads(e.payloads);
            break;
        case F.kGV.LOG_MESSAGES:
            (0, A.F)(e.payload);
    }
}
async function eN(e, t) {
    let n = await (0, G.R)();
    if (null == n) return void en.error("setInputLocked: overlay module failed loaded");
    let r = t ?? $;
    if (null != r && "DISCONNECTING" === j.get(r))
        return void en.warn("Overlay module is no longer valid during input lock");
    try {
        null != r && r !== U.DEV_PID && n.sendCommand(r, { message: "intercept_input", intercept: !e });
    } catch (e) {
        (0, I.pj)(e, S.Ue.Hook), en.error("Error during input lock", e);
    }
}
function eC(e, t) {
    e ? setTimeout(() => eN(e, t), 200) : eN(e, t);
}
let eR = null;
function eO(e) {
    let { locked: t, pid: n } = e,
        r = j.get(n);
    if ((z.has(n) && em(void 0), null != r && null != B[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? Z.delete(n) : Z.add(n), ee.clear(), null != eR && (clearTimeout(eR), (eR = null), t))) return;
        t
            ? eC(t, n)
            : (eR = setTimeout(() => {
                  eC(t, n), (eR = null);
              }, 100));
    }
}
function eb(e) {
    let { region: t } = e;
    ee.add(t), eC(!1, $);
}
function eD() {
    ee.clear(), eC(!0, $);
}
function eL(e) {
    let { port: t } = e;
    q = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "76dc7e83b27daa697100d72c2d07541f88c602ea"),
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
function eM(e) {
    let { pid: t } = e;
    $ = t;
}
function ex(e) {
    let { pid: t, error: n } = e;
    if (null == B[t]) return;
    let r = n instanceof Error ? n : Error(n ?? "Unknown error");
    ed(t, "CRASHED"),
        es(t, {
            renderer_crash_count: (ei(t).renderer_crash_count ?? 0) + 1,
            error: n instanceof Error ? n.message : n,
            error_description: n instanceof Error ? n.stack : void 0,
        }),
        en.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
        (0, I.St)(r, S.Ue.Hook);
}
function eP() {
    (K = !0), (H = !1), eY();
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
function eF(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: s } = e;
    setImmediate(() => {
        u.Ay.join({ userId: t, sessionId: n, applicationId: r, channelId: i, messageId: s }),
            null != $ && d.A.setInputLocked(!0, $);
    });
}
function eV(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, P._)("click", e, r);
        (0, P.K)(i, e, r);
    }, 50);
}
function eB(e) {
    return em({ added: [], removed: [] }), !0;
}
function eH(e) {
    return em({ added: [], removed: [] }), !0;
}
function ej(e) {
    en.verbose("Updating OverlayMethod", {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, N.gK)(e.overlayMethod),
    }),
        e.overlayMethod === S.Ue.Hook ? em({ added: [e.pid], removed: [] }) : em({ added: [], removed: [e.pid] });
}
function eY() {
    E.A.hasLoadedExperiments && !H && ((H = !0), eA(T.x.legacyEnabled));
}
function eW() {
    H = !1;
}
function eK() {
    H = !1;
}
class e$ extends s.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, U.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(D.default, E.A, L.A, w.A, v.default, R.A, O.A, C.A, g.Ay),
            this.syncWith([E.A], eY),
            h.Le(ev, ey),
            D.default.addChangeListener(eS),
            o.h.addInterceptor(Q.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return v.default.isOverlayOOPEnabledForPid(e) ? R.A.isInputLocked(e) : !Z.has(e);
    }
    DEV_isInputLockedV3(e) {
        return R.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !Z.has(e);
    }
    isSupported() {
        return (0, U.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = C.A.getFocusedPID();
        return null != e ? (C.A.isOverlayV3EnabledForPID(e) ? O.A.isOverlayEnabled : W) : O.A.isOverlayEnabled || W;
    }
    getAnyGlobalEnabledOverlay() {
        return v.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = C.A.getFocusedPID();
        return null != e && C.A.isOverlayV3EnabledForPID(e) ? e : $;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && v.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return v.default.isOverlayOOPEnabledForPid((0, U.getPID)());
    }
    isReady(e) {
        return C.A.isOverlayV3EnabledForPID(e) ? C.A.isReady(e) : "READY" === j.get(e);
    }
    isCrashed(e) {
        return !C.A.isOverlayV3EnabledForPID(e) && "CRASHED" === j.get(e);
    }
    getOverlayPIDStatuses() {
        return j;
    }
}
let ez = new e$(
        o.h,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eV }
            : {
                  LOGIN: eW,
                  LOGOUT: eK,
                  CONNECTION_OPEN: eP,
                  CONNECTION_CLOSED: ek,
                  EXPERIMENT_OVERRIDE_BUCKET: eU,
                  RUNNING_GAME_TOGGLE_OVERLAY: eH,
                  RUNNING_GAMES_CHANGE: eB,
                  OVERLAY_SET_ENABLED: eG,
                  OVERLAY_FOCUSED: eM,
                  OVERLAY_SET_INPUT_LOCKED: eO,
                  OVERLAY_ACTIVATE_REGION: eb,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eD,
                  RPC_SERVER_READY: eL,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ew,
                  OVERLAY_JOIN_GAME: eF,
                  OVERLAY_CRASHED: ex,
                  OVERLAY_UPDATE_OVERLAY_METHOD: ej,
              },
    ),
    eq = ez;
