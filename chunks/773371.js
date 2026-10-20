let i;
(n.r(t),
    n.d(t, { ACTION_DENYLIST: () => q, getOverlayURL: () => e_, default: () => eO, OverlayPIDStatus: () => x }),
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
    n(321073));
var r,
    a = n(17928),
    s = n(499979),
    l = n(73153),
    o = n(391973),
    d = n(684013),
    c = n(77729),
    u = n(719129),
    _ = n(996308),
    E = n(626584),
    A = n(736056),
    h = n(952818);
let f = [],
    I = null;
function p() {
    0 !== f.length &&
        (l.h.dispatch({ type: "OVERLAY_ADD_LOGS_BATCH", logs: f }),
        (f = []),
        null != I && (clearTimeout(I), (I = null)));
}
var T = n(777334),
    m = n(211753),
    g = n(41984),
    S = n(158390),
    N = n(296027),
    C = n(515183),
    O = n(233741),
    R = n(222506),
    L = n(950869),
    y = n(761821),
    D = n(280450),
    v = n(760751),
    b = n(32584),
    M = n(174459),
    P = n(19575),
    U = n(9302),
    w = n(899699),
    G = n(652215);
(n(672396), n(644434));
var x =
    (((r = {}).ATTACHING = "ATTACHING"),
    (r.CONNECTING = "CONNECTING"),
    (r.CONNECTED = "CONNECTED"),
    (r.READY = "READY"),
    (r.CRASHED = "CRASHED"),
    (r.CONNECT_FAILED = "CONNECT_FAILED"),
    (r.HOOK_FAILED = "HOOK_FAILED"),
    (r.DISCONNECTING = "DISCONNECTING"),
    r);
let k = {},
    F = !1,
    B = new Map();
function V() {
    return Array.from(B.values()).some((e) => "READY" === e);
}
let H = !1,
    j = !1,
    W = null,
    Y = new Set(),
    K = "",
    $ = new Set();
class z {
    isDispatching = !1;
    timeout;
    requestIdleCallback;
    actionsToFlush = new Set();
    waitingActionsToFlush = new Set();
    reset() {
        (this.actionsToFlush.clear(),
            this.waitingActionsToFlush.clear(),
            (this.isDispatching = !1),
            null != this.timeout && clearTimeout(this.timeout),
            (this.timeout = null),
            null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback),
            (this.requestIdleCallback = null));
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    flush = () => {
        (null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
        null != this.requestIdleCallback &&
            (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)),
        V())
            ? (this.actionsToFlush.size > 0 &&
                  (_.tN({ type: G.kGV.DISPATCH, pid: null, token: null, payloads: Array.from(this.actionsToFlush) }),
                  this.actionsToFlush.clear()),
              this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
            : this.actionsToFlush.clear();
    };
    dispatchPayloads = (e) => {
        ((this.isDispatching = !0), e.forEach((e) => l.h.dispatch(e)), (this.isDispatching = !1));
    };
    queueDispatch = (e) =>
        !(!V() || q.has(e.type)) &&
        (this.isDispatching
            ? this.waitingActionsToFlush.add(e)
            : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                  (e = {
                      ...e,
                      settings: { type: e.settings.type, proto: (0, y.aw)(e.settings.type, e.settings.proto) },
                  }),
              this.actionsToFlush.add(e),
              null == this.timeout &&
                  null == this.requestIdleCallback &&
                  (this.timeout = setTimeout(() => {
                      this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                  }, 100))),
        !1);
}
let X = new z(),
    q = new Set([
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
        "SEARCH_QUERY_TEXT_CHANGE",
        "SEARCH_QUERY_TEXT_CLEAR",
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
        "UPLOAD_ATTACHMENT_ADD_FILES",
        "UPLOAD_ATTACHMENT_SET_FILE",
        "UPLOAD_ATTACHMENT_SET_UPLOADS",
        "CLIPS_SESSION_START",
        "CLIPS_SESSION_STOP",
        "CLIPS_SAVE_CLIP",
        "CLIPS_PROMOTE_CLIP_CANDIDATE",
        "CLIPS_MONTAGE_RENDER_DONE",
    ]),
    Z = new Set(),
    Q = new E.A("OverlayBridgeStore"),
    J = {};
function ee(e) {
    return J[e] ?? {};
}
function et(e, t) {
    let n = J[e]?.error,
        i = J[e]?.error_description;
    ((J[e] = { ...J[e], ...t }), null != n && (J[e].error = n), null != i && (J[e].error_description = i));
}
let en = "none",
    ei = (function (e) {
        let t = Promise.resolve(null),
            n = [],
            i = !1,
            { onContention: r, onContentionResolved: a, onTimeout: s, timeoutMs: l } = e,
            o = function (e, o) {
                (n.length > 0 ? (r(o, n), (i = !0)) : i && (a(), (i = !1)), n.push(o));
                let d = null == l || null == s ? null : setTimeout(() => s(o, n), l);
                return new Promise((i, r) => {
                    ((t = t
                        .then(e)
                        .then(i, r)
                        .then(() => n.splice(0, 1))),
                        null != d && (t = t.then(() => clearTimeout(d))));
                });
            };
        return ((o.isMutexHeld = () => n.length > 0), (o.getLockHolders = () => n), o);
    })({
        onContention: (e, t) => Q.verbose(`overlayLock contention: lastMutexCall ${en}`),
        onContentionResolved: () => Q.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${en}}`;
            Q.error(n);
            let i = ee((0, U.getPID)());
            (et((0, U.getPID)(), { ...i, error_description: n, success: !1 }),
                M.default.track(G.HAw.OVERLAY_HOOK_RESULT, ee((0, U.getPID)())));
        },
        timeoutMs: 18e4,
    });
function er(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        ei(() => t(...i), e);
    };
}
function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = B.get(e);
    (null === n || i === n) &&
        i !== t &&
        (null == t ? B.delete(e) : B.set(e, t),
        (null == t || "CRASHED" === t) &&
            (d.A.setFocusedPID(null, null),
            (function () {
                try {
                    let e = c.A?.fileManager?.uploadDiscordHookCrashes;
                    if (null == e) return;
                    e().then((e) => {
                        if (Array.isArray(e) && 0 !== e.length)
                            for (let t of (Q.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                if (null == t) continue;
                                let e = null != t.processName ? v.A.getGameByExecutable(t.processName) : null;
                                M.default.track(G.HAw.OVERLAY_HOOK_CRASHED, {
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
                    (Q.error("tryUploadDiscordHookCrashes", e), (0, T.pj)(e));
                }
            })()),
        $.delete(e),
        Q.info(`pid=${e} status transition ${i ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, B));
}
async function es(e) {
    try {
        if (P.Ay.supportsFeature(G.BYE.CREATE_HOST_ON_ATTACH))
            if (B.size > 0) {
                en = "reconcile.getOverlayURL";
                let t = await e_();
                ((en = "reconcile.createHostProcess"), e.createHostProcess(t, eh, eA));
            } else ((en = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eu((0, U.getPID)()));
        else if (H) {
            let t = await e_();
            e.createHostProcess(t, eh, eA);
        } else (e.destroyHostProcess(), eu((0, U.getPID)()));
    } catch (t) {
        (Q.error("reconcileHostProcess", t), (0, T.pj)(t), eu((0, U.getPID)()));
        try {
            e.destroyHostProcess();
        } catch (e) {
            (Q.error("reconcileHostProcess: destroyHostProcess", e), (0, T.pj)(e));
        }
    }
}
async function el(e) {
    ei.isMutexHeld() || Q.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let t = ee(e).mounting_started_at ?? new Date().getTime();
    et(e, { mounting_started_at: t });
    let n = B.get(e);
    if (null != n) return void Q.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
    (await d.A.updateOverlayState(e, g.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (en = "attach.getOverlayModule"));
    let i = await (0, w.R)();
    if (null == i) return void Q.error(`Trying to attach to pid=${e}, but overlay module failed loaded`);
    ((en = "attach.transitionOverlayPIDStatus"), ea(e, "ATTACHING"), (en = "attach.attachToProcess"));
    let r = await u.GH(e);
    null == r
        ? ((en = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          ea(e, "CONNECTING", "ATTACHING"),
          (en = "attach.reconcileHostProcess"),
          await es(i),
          i.connectProcess(e))
        : ((en = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          ea(e, "HOOK_FAILED", "ATTACHING"),
          Q.warn(`Could not hook to pid=${e}, error=${r}`));
}
async function eo(e) {
    if ((ei.isMutexHeld() || Q.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !B.has(e)))
        return void Q.warn(`Trying to detach from pid ${e}, which is in an unknown state`);
    ea(e, "DISCONNECTING");
    try {
        en = "detach.getOverlayModule";
        let t = await (0, w.R)();
        if (null == t) return void Q.error(`Trying to detach from pid=${e}, but overlay module failed loaded`);
        (e !== U.DEV_PID &&
            ((en = "detach.cancelAttachToProcess"),
            await u.c1(e),
            await (0, s.yy)(16),
            (en = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (en = "detach.transitionOverlayPIDStatus"),
            ea(e, null),
            (en = "detach.reconcileHostProcess"),
            await es(t));
    } catch (t) {
        ((0, T.pj)(t, g.Ue.Hook), Q.error(`Error during overlay detachment for pid ${e}:`, t), ea(e, null));
    }
}
async function ed(e) {
    if (
        (Q.verbose("updateIntendedOverlayPIDs", { isConnectionOpened: j, action: e }),
        ei.isMutexHeld() || Q.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !j && null != e)
    )
        return void Q.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function t(e) {
        if (!(e in k)) return;
        let t = k[e];
        delete k[e];
        try {
            (await t.deconstructor(), Y.delete(e));
        } catch (n) {
            ((0, T.pj)(n, g.Ue.Hook), Q.error(`Failed to deconstruct tracked game ${e}`, n), (k[e] = t), Y.add(e));
        }
    }
    let n = !1;
    if (null == e || !H) {
        for (let i of (Q.verbose("updateIntendedOverlayPIDs: Removing all.", k, e), Object.keys(k)))
            (await t(Number(i)), (n = !0));
        return;
    }
    for (let i of Y) {
        if (e.added?.includes(i)) {
            Q.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        (Q.verbose(`updateIntendedOverlayPIDs: retrying failed overlay pid ${i}`), await t(i), (n = !0));
    }
    for (let t of e.added ?? []) {
        let i = N.default.getTrackedGameByPid(t);
        if (null == i) {
            Q.error(`updateIntendedOverlayPIDs: Tracked game not found for pid=${t}`);
            continue;
        }
        if ((Q.verbose("updateIntendedOverlayPIDs: newGame", i), i.legacyEnabled))
            switch (
                (i.pid in k
                    ? Q.error(`Unexpected. ${i.pid} is being added twice?`, k, e)
                    : !(function (e) {
                          if (null != J[e]) return;
                          let t = h.Ay.getGameOrTransformedSubgameForPID(e);
                          J[e] = {
                              overlay_method: g.Ue[g.Ue.Hook],
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
                case g.Ue.Hook:
                    let r = new Date().getTime();
                    (et(i.pid, { mounting_started_at: r, fullscreen_type: await (0, C.E1)(i.pid, 0) }),
                        B.has(i.pid) || (await el(i.pid)),
                        (k[i.pid] = {
                            method: i.overlayMethod,
                            deconstructor: async () => {
                                await eo(i.pid);
                            },
                        }),
                        (n = !0));
                    break;
                case g.Ue.OutOfProcess:
                case g.Ue.OutOfProcessLimitedInteraction:
                    Q.error("updateIntendedOverlayPIDs: out of process called for hook overlay", i);
                    break;
                case g.Ue.Disabled:
                    Q.verbose("updateIntendedOverlayPIDs: disabled", i);
                    break;
                default:
                    Q.error(`updateIntendedOverlayPIDs: Unknown overlay method: ${i.overlayMethod}`, i);
            }
    }
    for (let i of e.removed) (Q.verbose("updateIntendedOverlayPIDs: removedGame", i), await t(i), (n = !0));
    n && eC.emitChange();
}
let ec = er("updateIntendedOverlayPIDs", (e) => (Q.info("updateIntendedOverlayPIDs", e), ed(e))),
    eu = er("clearPID", (e) => {
        if (null == e) return (0, U.setPID)(-1);
        O.A.isOverlayV3EnabledForPID(e) || (0, U.setPID)(-1);
    });
function e_() {
    return new Promise((e) => {
        eC.addConditionalChangeListener(() => {
            if (null != i) return (e(i), !1);
        });
    });
}
let eE = er("setOverlayEnabled", async (e) => {
    if (!(0, U.supportsLegacy)()) return;
    if (H === e) return void Q.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    ((H = e), eC.emitChange());
    let t = await (0, w.R)();
    null == t
        ? Q.error("setOverlayEnabled: overlay module failed loaded")
        : (H || (await ed(void 0)), B.size > 0 && (await es(t)));
});
function eA(e) {
    d.A.setFocusedPID(0 === e ? null : e, null);
}
function eh(e, t, n) {
    let i = h.Ay.getGameForPID(e),
        r = null != i ? v.A.findGame(i) : null;
    (et(e, {
        ...{ game_name: i?.name, game_id: null == r ? null : r.id, success: t, overlay_method: g.Ue[g.Ue.Hook], ...n },
    }),
        (0, o.Vz)(U.OVERLAY_LAYOUT_ID, b.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        }));
    let a = ee(e);
    (M.default.track(G.HAw.OVERLAY_HOOK_RESULT, a),
        Q.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, a),
        t
            ? (d.A.updateOverlayState(e, g.AR.OVERLAY_RENDERING, "onConnectComplete"), ea(e, "CONNECTED", "CONNECTING"))
            : (d.A.updateOverlayState(e, g.AR.OVERLAY_CRASHED, "onConnectComplete"),
              ea(e, "CONNECT_FAILED", "CONNECTING")));
}
function ef() {
    let e = D.default.getToken(),
        t = D.default.getId();
    null != e &&
        _.tN({
            type: G.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function eI(e) {
    return (
        null != e &&
        (function (e, t) {
            let n = 0,
                i = Math.min(e.length, t.length);
            for (let r = 0; r < i; r++) n |= e.charCodeAt(r) ^ t.charCodeAt(r);
            return 0 === n && e.length === t.length;
        })(e, K)
    );
}
function ep(e) {
    switch (e.type) {
        case G.kGV.CONNECT:
            let t = D.default.getToken();
            if (null == t) break;
            ((0, o.Vz)(U.OVERLAY_LAYOUT_ID, b.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0),
                Promise.all([
                    (function (e, t) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new S.A();
                        return Promise.all([n.e("190889"), n.e("45565")])
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
                    (_.tN({ type: G.kGV.STORAGE_SYNC, pid: r, token: a, states: i }),
                        _.tN({ type: G.kGV.DISPATCH, pid: r, token: a, payloads: [n] }),
                        ea(r, "READY"),
                        (0, U.setPID)(r),
                        d.A.overlayReady(r));
                    let s = ee(r);
                    et(r, {
                        ...s,
                        total_mount_time_ms:
                            null != s.mounting_started_at ? new Date().getTime() - s.mounting_started_at : void 0,
                    });
                }));
            break;
        case G.kGV.DISPATCH:
            null != e.payloads && X.dispatchPayloads(e.payloads);
            break;
        case G.kGV.LOG_MESSAGES:
            var i;
            ((i = e.payload),
                f.push(i),
                f.length >= 100
                    ? p()
                    : null == I &&
                      (I = setTimeout(() => {
                          p();
                      }, 1e3)));
    }
}
async function eT(e, t) {
    let n = await (0, w.R)();
    if (null == n) return void Q.error("setInputLocked: overlay module failed loaded");
    let i = t ?? W;
    if (null != i && "DISCONNECTING" === B.get(i))
        return void Q.warn("Overlay module is no longer valid during input lock");
    try {
        null != i && i !== U.DEV_PID && n.sendCommand(i, { message: "intercept_input", intercept: !e });
    } catch (e) {
        ((0, T.pj)(e, g.Ue.Hook), Q.error("Error during input lock", e));
    }
}
function em(e, t) {
    e ? setTimeout(() => eT(e, t), 200) : eT(e, t);
}
let eg = null;
function eS() {
    A.A.hasLoadedExperiments && !F && ((F = !0), eE(m.x.legacyEnabled));
}
class eN extends a.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, U.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(D.default, A.A, v.A, b.A, N.default, R.A, L.A, O.A, h.Ay),
            this.syncWith([A.A], eS),
            _.Le(ep, eI),
            D.default.addChangeListener(ef),
            l.h.addInterceptor(X.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return N.default.isOverlayOOPEnabledForPid(e) ? R.A.isInputLocked(e) : !$.has(e);
    }
    DEV_isInputLockedV3(e) {
        return R.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !$.has(e);
    }
    isSupported() {
        return (0, U.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = O.A.getFocusedPID();
        return null != e ? (O.A.isOverlayV3EnabledForPID(e) ? L.A.isOverlayEnabled : H) : L.A.isOverlayEnabled || H;
    }
    getAnyGlobalEnabledOverlay() {
        return N.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = O.A.getFocusedPID();
        return null != e && O.A.isOverlayV3EnabledForPID(e) ? e : W;
    }
    getLegacyFocusedPID() {
        return W;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && N.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return N.default.isOverlayOOPEnabledForPid((0, U.getPID)());
    }
    isReady(e) {
        return O.A.isOverlayV3EnabledForPID(e) ? O.A.isReady(e) : "READY" === B.get(e);
    }
    isCrashed(e) {
        return !O.A.isOverlayV3EnabledForPID(e) && "CRASHED" === B.get(e);
    }
    getOverlayPIDStatuses() {
        return B;
    }
}
let eC = new eN(
        l.h,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: function () {
                      F = !1;
                  },
                  LOGOUT: function () {
                      F = !1;
                  },
                  CONNECTION_OPEN: function () {
                      ((j = !0), (F = !1), eS());
                  },
                  CONNECTION_CLOSED: function () {
                      ((j = !1),
                          d.A.setFocusedPID(null, null),
                          ec(void 0),
                          Q.verbose("OverlayBridgeStore: handleConnectionClosed"));
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: function () {
                      return !0;
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      return (ec({ added: [], removed: [] }), !0);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      return (ec({ added: [], removed: [] }), !0);
                  },
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t } = e;
                      return (eE(t), !1);
                  },
                  OVERLAY_FOCUSED: function (e) {
                      let { pid: t } = e;
                      W = t;
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      let { locked: t, pid: n } = e,
                          i = B.get(n);
                      if (
                          (Y.has(n) && ec(void 0), null != i && null != k[n]) &&
                          (t || "READY" === i || "CRASHED" === i)
                      ) {
                          if ((t ? $.delete(n) : $.add(n), Z.clear(), null != eg && (clearTimeout(eg), (eg = null), t)))
                              return;
                          t
                              ? em(t, n)
                              : (eg = setTimeout(() => {
                                    (em(t, n), (eg = null));
                                }, 100));
                      }
                  },
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e;
                      (Z.add(t), em(!1, W));
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      (Z.clear(), em(!0, W));
                  },
                  RPC_SERVER_READY: function (e) {
                      let { port: t } = e;
                      K = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
                      let n = new URLSearchParams();
                      (n.append("build_id", "436a08b84b4f7c22487a79d79caef9496a66164b"),
                          n.append("rpc", String(t)),
                          n.append("rpc_auth_token", K),
                          (i = `${location.protocol}//${location.host}/overlay?${n.toString()}`));
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { pid: t, error: n } = e;
                      if (null == k[t]) return;
                      let i = n instanceof Error ? n : Error(n ?? "Unknown error");
                      (ea(t, "CRASHED"),
                          et(t, {
                              renderer_crash_count: (ee(t).renderer_crash_count ?? 0) + 1,
                              error: n instanceof Error ? n.message : n,
                              error_description: n instanceof Error ? n.stack : void 0,
                          }),
                          Q.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
                          (0, T.St)(i, g.Ue.Hook));
                  },
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      (Q.verbose("Updating OverlayMethod", {
                          pid: e.pid,
                          overlayMethod: e.overlayMethod,
                          overlayLabel: (0, C.gK)(e.overlayMethod),
                      }),
                          e.overlayMethod === g.Ue.Hook
                              ? ec({ added: [e.pid], removed: [] })
                              : ec({ added: [], removed: [e.pid] }));
                  },
              },
    ),
    eO = eC;
