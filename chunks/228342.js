let i;
(n.d(t, { default: () => eT }),
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
var r = n(855986),
    a = n(499979),
    s = n(73153),
    l = n(391973),
    o = n(684013),
    d = n(77729),
    c = n(719129),
    u = n(996308),
    _ = n(626584),
    E = n(343446),
    A = n(397369);
let f = [],
    h = null;
function I() {
    0 !== f.length &&
        (s.h.dispatch({ type: "OVERLAY_ADD_LOGS_BATCH", logs: f }),
        (f = []),
        null != h && (clearTimeout(h), (h = null)));
}
var p = n(777334),
    m = n(211753),
    T = n(41984),
    g = n(158390),
    S = n(861862),
    N = n(515183),
    C = n(887287),
    O = n(222506),
    R = n(244055),
    L = n(761821),
    y = n(46653),
    D = n(760751),
    b = n(83880),
    v = n(129230),
    P = n(253400),
    M = n(9302),
    U = n(899699),
    w = n(652215);
(n(672396), n(644434));
let G = {},
    x = !1,
    k = new Map();
function F() {
    return Array.from(k.values()).some((e) => "READY" === e);
}
let B = !1,
    V = !1,
    H = null,
    j = new Set(),
    W = "",
    Y = new Set(),
    K = new (class {
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
            F())
                ? (this.actionsToFlush.size > 0 &&
                      (u.tN({
                          type: w.kGV.DISPATCH,
                          pid: null,
                          token: null,
                          payloads: Array.from(this.actionsToFlush),
                      }),
                      this.actionsToFlush.clear()),
                  this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
                : this.actionsToFlush.clear();
        };
        dispatchPayloads = (e) => {
            ((this.isDispatching = !0), e.forEach((e) => s.h.dispatch(e)), (this.isDispatching = !1));
        };
        queueDispatch = (e) =>
            !(!F() || $.has(e.type)) &&
            (this.isDispatching
                ? this.waitingActionsToFlush.add(e)
                : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                      (e = {
                          ...e,
                          settings: { type: e.settings.type, proto: (0, L.aw)(e.settings.type, e.settings.proto) },
                      }),
                  this.actionsToFlush.add(e),
                  null == this.timeout &&
                      null == this.requestIdleCallback &&
                      (this.timeout = setTimeout(() => {
                          this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                      }, 100))),
            !1);
    })(),
    $ = new Set([
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
    X = new Set(),
    z = new _.A("OverlayBridgeStore"),
    q = {};
function Q(e) {
    return q[e] ?? {};
}
function Z(e, t) {
    let n = q[e]?.error,
        i = q[e]?.error_description;
    ((q[e] = { ...q[e], ...t }), null != n && (q[e].error = n), null != i && (q[e].error_description = i));
}
let J = "none",
    ee = (function (e) {
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
        onContention: (e, t) => z.verbose(`overlayLock contention: lastMutexCall ${J}`),
        onContentionResolved: () => z.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = `overlayLock: lastMutexCall ${J}}`;
            z.error(n);
            let i = Q((0, M.getPID)());
            (Z((0, M.getPID)(), { ...i, error_description: n, success: !1 }),
                v.default.track(w.HAw.OVERLAY_HOOK_RESULT, Q((0, M.getPID)())));
        },
        timeoutMs: 18e4,
    });
function et(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        ee(() => t(...i), e);
    };
}
function en(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = k.get(e);
    (null === n || i === n) &&
        i !== t &&
        (null == t ? k.delete(e) : k.set(e, t),
        (null == t || "CRASHED" === t) &&
            (o.A.setFocusedPID(null, null),
            (function () {
                try {
                    let e = d.A?.fileManager?.uploadDiscordHookCrashes;
                    if (null == e) return;
                    e().then((e) => {
                        if (Array.isArray(e) && 0 !== e.length)
                            for (let t of (z.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                                if (null == t) continue;
                                let e = null != t.processName ? D.A.getGameByExecutable(t.processName) : null;
                                v.default.track(w.HAw.OVERLAY_HOOK_CRASHED, {
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
                    (z.error("tryUploadDiscordHookCrashes", e), (0, p.pj)(e, T.Ue.Hook));
                }
            })()),
        Y.delete(e),
        z.info(`pid=${e} status transition ${i ?? "DISCONNECTED"} -> ${t ?? "DISCONNECTED"}`, k));
}
async function ei(e) {
    try {
        if (P.Ay.supportsFeature(w.BYE.CREATE_HOST_ON_ATTACH))
            if (k.size > 0) {
                J = "reconcile.getOverlayURL";
                let t = await el();
                ((J = "reconcile.createHostProcess"), e.createHostProcess(t, ec, ed));
            } else ((J = "reconcile.destroyHostProcess"), e.destroyHostProcess(), es((0, M.getPID)()));
        else if (B) {
            let t = await el();
            e.createHostProcess(t, ec, ed);
        } else (e.destroyHostProcess(), es((0, M.getPID)()));
    } catch (t) {
        (z.error("reconcileHostProcess", t), (0, p.pj)(t, T.Ue.Hook), es((0, M.getPID)()));
        try {
            e.destroyHostProcess();
        } catch (e) {
            (z.error("reconcileHostProcess: destroyHostProcess", e), (0, p.pj)(e, T.Ue.Hook));
        }
    }
}
async function er(e) {
    if (
        (z.verbose("updateIntendedOverlayPIDs", { isConnectionOpened: V, action: e }),
        ee.isMutexHeld() || z.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !V && null != e)
    )
        return void z.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function t(e) {
        if (!(e in G)) return;
        let t = G[e];
        delete G[e];
        try {
            (await t.deconstructor(), j.delete(e));
        } catch (n) {
            ((0, p.pj)(n, T.Ue.Hook), z.error(`Failed to deconstruct tracked game ${e}`, n), (G[e] = t), j.add(e));
        }
    }
    let n = !1;
    if (null == e || !B) {
        for (let i of (z.verbose("updateIntendedOverlayPIDs: Removing all.", G, e), Object.keys(G)))
            (await t(Number(i)), (n = !0));
        return;
    }
    for (let i of j) {
        if (e.added?.includes(i)) {
            z.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        (z.verbose(`updateIntendedOverlayPIDs: retrying failed overlay pid ${i}`), await t(i), (n = !0));
    }
    for (let t of e.added ?? []) {
        let i = S.default.getTrackedGameByPid(t);
        if (null == i) {
            z.error(`updateIntendedOverlayPIDs: Tracked game not found for pid=${t}`);
            continue;
        }
        if ((z.verbose("updateIntendedOverlayPIDs: newGame", i), i.legacyEnabled))
            switch (
                (i.pid in G
                    ? z.error(`Unexpected. ${i.pid} is being added twice?`, G, e)
                    : !(function (e) {
                          if (null != q[e]) return;
                          let t = A.Ay.getGameOrTransformedSubgameForPID(e);
                          q[e] = {
                              overlay_method: T.Ue[T.Ue.Hook],
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
                case T.Ue.Hook:
                    let r = new Date().getTime();
                    (Z(i.pid, { mounting_started_at: r, fullscreen_type: await (0, N.E1)(i.pid, 0) }),
                        k.has(i.pid) ||
                            (await (async function (e) {
                                ee.isMutexHeld() || z.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
                                let t = Q(e).mounting_started_at ?? new Date().getTime();
                                Z(e, { mounting_started_at: t });
                                let n = k.get(e);
                                if (null != n)
                                    return void z.warn(`Trying to attach to pid=${e}, that is already in status: ${n}`);
                                (await o.A.updateOverlayState(e, T.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"),
                                    (J = "attach.getOverlayModule"));
                                let i = await (0, U.R)();
                                if (null == i)
                                    return void z.error(
                                        `Trying to attach to pid=${e}, but overlay module failed loaded`,
                                    );
                                ((J = "attach.transitionOverlayPIDStatus"),
                                    en(e, "ATTACHING"),
                                    (J = "attach.attachToProcess"));
                                let r = await c.GH(e);
                                null == r
                                    ? ((J = "attach.transitionOverlayPIDStatus (CONNECTING)"),
                                      en(e, "CONNECTING", "ATTACHING"),
                                      (J = "attach.reconcileHostProcess"),
                                      await ei(i),
                                      i.connectProcess(e))
                                    : ((J = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
                                      en(e, "HOOK_FAILED", "ATTACHING"),
                                      z.warn(`Could not hook to pid=${e}, error=${r}`));
                            })(i.pid)),
                        (G[i.pid] = {
                            method: i.overlayMethod,
                            deconstructor: async () => {
                                await (async function (e) {
                                    if (
                                        (ee.isMutexHeld() ||
                                            z.error("_detachPIDMustBeLocked: overlayMutex is not held.", e),
                                        !k.has(e))
                                    )
                                        return void z.warn(
                                            `Trying to detach from pid ${e}, which is in an unknown state`,
                                        );
                                    en(e, "DISCONNECTING");
                                    try {
                                        J = "detach.getOverlayModule";
                                        let t = await (0, U.R)();
                                        if (null == t)
                                            return void z.error(
                                                `Trying to detach from pid=${e}, but overlay module failed loaded`,
                                            );
                                        (e !== M.DEV_PID &&
                                            ((J = "detach.cancelAttachToProcess"),
                                            await c.c1(e),
                                            await (0, a.yy)(16),
                                            (J = "detach.disconnectProcess"),
                                            await t.disconnectProcess(e)),
                                            (J = "detach.transitionOverlayPIDStatus"),
                                            en(e, null),
                                            (J = "detach.reconcileHostProcess"),
                                            await ei(t));
                                    } catch (t) {
                                        ((0, p.pj)(t, T.Ue.Hook),
                                            z.error(`Error during overlay detachment for pid ${e}:`, t),
                                            en(e, null));
                                    }
                                })(i.pid);
                            },
                        }),
                        (n = !0));
                    break;
                case T.Ue.OutOfProcess:
                case T.Ue.OutOfProcessLimitedInteraction:
                    z.error("updateIntendedOverlayPIDs: out of process called for hook overlay", i);
                    break;
                case T.Ue.Disabled:
                    z.verbose("updateIntendedOverlayPIDs: disabled", i);
                    break;
                default:
                    z.error(`updateIntendedOverlayPIDs: Unknown overlay method: ${i.overlayMethod}`, i);
            }
    }
    for (let i of e.removed) (z.verbose("updateIntendedOverlayPIDs: removedGame", i), await t(i), (n = !0));
    n && em.emitChange();
}
let ea = et("updateIntendedOverlayPIDs", (e) => (z.info("updateIntendedOverlayPIDs", e), er(e))),
    es = et("clearPID", (e) => {
        if (null == e) return (0, M.is)(-1);
        C.A.isOverlayV3EnabledForPID(e) || (0, M.is)(-1);
    });
function el() {
    return new Promise((e) => {
        em.addConditionalChangeListener(() => {
            if (null != i) return (e(i), !1);
        });
    });
}
let eo = et("setOverlayEnabled", async (e) => {
    if (!(0, M.kA)()) return;
    if (B === e) return void z.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    ((B = e), em.emitChange());
    let t = await (0, U.R)();
    null == t
        ? z.error("setOverlayEnabled: overlay module failed loaded")
        : (B || (await er(void 0)), k.size > 0 && (await ei(t)));
});
function ed(e) {
    o.A.setFocusedPID(0 === e ? null : e, null);
}
function ec(e, t, n) {
    let i = A.Ay.getGameForPID(e),
        r = null != i ? D.A.findGame(i) : null;
    (Z(e, {
        ...{ game_name: i?.name, game_id: null == r ? null : r.id, success: t, overlay_method: T.Ue[T.Ue.Hook], ...n },
    }),
        (0, l.Vz)(M.YU, b.A.getDefaultLayout(M.YU), 0, { width: n.graphics_width, height: n.graphics_height }));
    let a = Q(e);
    (v.default.track(w.HAw.OVERLAY_HOOK_RESULT, a),
        z.info(`Overlay connection to ${e} ${t ? "succeeded" : "failed"}`, a),
        t
            ? (o.A.updateOverlayState(e, T.AR.OVERLAY_RENDERING, "onConnectComplete"), en(e, "CONNECTED", "CONNECTING"))
            : (o.A.updateOverlayState(e, T.AR.OVERLAY_CRASHED, "onConnectComplete"),
              en(e, "CONNECT_FAILED", "CONNECTING")));
}
function eu() {
    let e = y.default.getToken(),
        t = y.default.getId();
    null != e &&
        u.tN({
            type: w.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [{ type: "UPDATE_TOKEN", token: e, userId: t }],
        });
}
function e_(e) {
    return (
        null != e &&
        (function (e, t) {
            let n = 0,
                i = Math.min(e.length, t.length);
            for (let r = 0; r < i; r++) n |= e.charCodeAt(r) ^ t.charCodeAt(r);
            return 0 === n && e.length === t.length;
        })(e, W)
    );
}
function eE(e) {
    switch (e.type) {
        case w.kGV.CONNECT:
            let t = y.default.getToken();
            if (null == t) break;
            ((0, l.Vz)(M.YU, b.A.getDefaultLayout(M.YU), 0),
                Promise.all([
                    (function (e, t) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new g.A();
                        return Promise.all([n.e(190889), n.e(45565)])
                            .then(n.bind(n, 33164))
                            .then((n) => {
                                let { default: r } = n;
                                return r(e, t, i);
                            });
                    })(t, e.pid),
                    r.Ay.PersistedStore.getAllStates(),
                ]).then((t) => {
                    let [n, i] = t,
                        { pid: r, token: a } = e;
                    (u.tN({ type: w.kGV.STORAGE_SYNC, pid: r, token: a, states: i }),
                        u.tN({ type: w.kGV.DISPATCH, pid: r, token: a, payloads: [n] }),
                        en(r, "READY"),
                        (0, M.is)(r),
                        o.A.overlayReady(r));
                    let s = Q(r);
                    Z(r, {
                        ...s,
                        total_mount_time_ms:
                            null != s.mounting_started_at ? new Date().getTime() - s.mounting_started_at : void 0,
                    });
                }));
            break;
        case w.kGV.DISPATCH:
            null != e.payloads && K.dispatchPayloads(e.payloads);
            break;
        case w.kGV.LOG_MESSAGES:
            var i;
            ((i = e.payload),
                f.push(i),
                f.length >= 100
                    ? I()
                    : null == h &&
                      (h = setTimeout(() => {
                          I();
                      }, 1e3)));
    }
}
async function eA(e, t) {
    let n = await (0, U.R)();
    if (null == n) return void z.error("setInputLocked: overlay module failed loaded");
    let i = t ?? H;
    if (null != i && "DISCONNECTING" === k.get(i))
        return void z.warn("Overlay module is no longer valid during input lock");
    try {
        null != i && i !== M.DEV_PID && n.sendCommand(i, { message: "intercept_input", intercept: !e });
    } catch (e) {
        ((0, p.pj)(e, T.Ue.Hook), z.error("Error during input lock", e));
    }
}
function ef(e, t) {
    e ? setTimeout(() => eA(e, t), 200) : eA(e, t);
}
let eh = null;
function eI() {
    E.A.hasLoadedExperiments && !x && ((x = !0), eo(m.x.legacyEnabled));
}
class ep extends r.Ay.Store {
    static displayName = "OverlayBridgeStore";
    initialize() {
        !(0, M.kA)() ||
            __OVERLAY__ ||
            (this.waitFor(y.default, E.A, D.A, b.A, S.default, O.A, R.A, C.A, A.Ay),
            this.syncWith([E.A], eI),
            u.Le(eE, e_),
            y.default.addChangeListener(eu),
            s.h.addInterceptor(K.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return S.default.isOverlayOOPEnabledForPid(e) ? O.A.isInputLocked(e) : !Y.has(e);
    }
    DEV_isInputLockedV3(e) {
        return O.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !Y.has(e);
    }
    isSupported() {
        return (0, M.kA)() || !1;
    }
    get enabled() {
        let e = C.A.getFocusedPID();
        return null != e ? (C.A.isOverlayV3EnabledForPID(e) ? R.A.isOverlayEnabled : B) : R.A.isOverlayEnabled || B;
    }
    getAnyGlobalEnabledOverlay() {
        return S.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = C.A.getFocusedPID();
        return null != e && C.A.isOverlayV3EnabledForPID(e) ? e : H;
    }
    getLegacyFocusedPID() {
        return H;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && S.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return S.default.isOverlayOOPEnabledForPid((0, M.getPID)());
    }
    isReady(e) {
        return C.A.isOverlayV3EnabledForPID(e) ? C.A.isReady(e) : "READY" === k.get(e);
    }
    isCrashed(e) {
        return !C.A.isOverlayV3EnabledForPID(e) && "CRASHED" === k.get(e);
    }
    getOverlayPIDStatuses() {
        return k;
    }
}
let em = new ep(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  LOGIN: function () {
                      x = !1;
                  },
                  LOGOUT: function () {
                      x = !1;
                  },
                  CONNECTION_OPEN: function () {
                      ((V = !0), (x = !1), eI());
                  },
                  CONNECTION_CLOSED: function () {
                      ((V = !1),
                          o.A.setFocusedPID(null, null),
                          ea(void 0),
                          z.verbose("OverlayBridgeStore: handleConnectionClosed"));
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: function () {
                      return !0;
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      return (ea({ added: [], removed: [] }), !0);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      return (ea({ added: [], removed: [] }), !0);
                  },
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t } = e;
                      return (eo(t), !1);
                  },
                  OVERLAY_FOCUSED: function (e) {
                      let { pid: t } = e;
                      H = t;
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      let { locked: t, pid: n } = e,
                          i = k.get(n);
                      if (
                          (j.has(n) && ea(void 0), null != i && null != G[n]) &&
                          (t || "READY" === i || "CRASHED" === i)
                      ) {
                          if ((t ? Y.delete(n) : Y.add(n), X.clear(), null != eh && (clearTimeout(eh), (eh = null), t)))
                              return;
                          t
                              ? ef(t, n)
                              : (eh = setTimeout(() => {
                                    (ef(t, n), (eh = null));
                                }, 100));
                      }
                  },
                  OVERLAY_ACTIVATE_REGION: function (e) {
                      let { region: t } = e;
                      (X.add(t), ef(!1, H));
                  },
                  OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                      (X.clear(), ef(!0, H));
                  },
                  RPC_SERVER_READY: function (e) {
                      let { port: t } = e;
                      W = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
                      let n = new URLSearchParams();
                      (n.append("build_id", "90053b7dfd29c5d3b71413d272e07076855f72d8"),
                          n.append("rpc", String(t)),
                          n.append("rpc_auth_token", W),
                          (i = `${location.protocol}//${location.host}/overlay?${n.toString()}`));
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { pid: t, error: n } = e;
                      if (null == G[t]) return;
                      let i = n instanceof Error ? n : Error(n ?? "Unknown error");
                      (en(t, "CRASHED"),
                          Z(t, {
                              renderer_crash_count: (Q(t).renderer_crash_count ?? 0) + 1,
                              error: n instanceof Error ? n.message : n,
                              error_description: n instanceof Error ? n.stack : void 0,
                          }),
                          z.verbose(`OverlayBridgeStore: handleOverlayCrashed: ${t}`),
                          (0, p.St)(i, T.Ue.Hook));
                  },
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      (z.verbose("Updating OverlayMethod", {
                          pid: e.pid,
                          overlayMethod: e.overlayMethod,
                          overlayLabel: (0, N.gK)(e.overlayMethod),
                      }),
                          e.overlayMethod === T.Ue.Hook
                              ? ea({ added: [e.pid], removed: [] })
                              : ea({ added: [], removed: [e.pid] }));
                  },
              },
    ),
    eT = em;
