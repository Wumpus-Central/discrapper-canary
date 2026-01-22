let r;
n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => W,
        default: () => e0,
        getOverlayURL: () => ev,
    }),
    n(896048),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(801460),
    n(508300),
    n(650828),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(142703),
    n(65821),
    n(457529);
var i,
    a = n(927429),
    s = n(311907),
    o = n(499979),
    l = n(73153),
    c = n(387755),
    u = n(544420),
    d = n(391973),
    f = n(684013),
    p = n(956793),
    _ = n(77729),
    h = n(719129),
    m = n(996308),
    g = n(626584),
    E = n(49463),
    b = n(15285),
    y = n(159551),
    O = n(777334),
    A = n(211753),
    v = n(41984),
    S = n(53733),
    I = n(833551),
    T = n(515183),
    C = n(395011),
    N = n(222506),
    R = n(680243),
    w = n(761821),
    P = n(961350),
    D = n(760751),
    x = n(555528),
    L = n(954571),
    j = n(799112),
    M = n(456797),
    k = n(837921),
    U = n(9302),
    G = n(899699),
    V = n(652215);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(644434);
var W = (function (e) {
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
let K = {},
    z = !1,
    q = new Map(),
    X = () => Array.from(q.values()).some((e) => "READY" === e),
    Z = !1,
    Q = !1,
    $ = null,
    J = new Set(),
    ee = "",
    et = new Set();
class en {
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
    constructor() {
        F(this, "isDispatching", !1),
            F(this, "timeout", void 0),
            F(this, "requestIdleCallback", void 0),
            F(this, "actionsToFlush", new Set()),
            F(this, "waitingActionsToFlush", new Set()),
            F(this, "flush", () => {
                (null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
                null != this.requestIdleCallback &&
                    (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)),
                X())
                    ? (this.actionsToFlush.size > 0 &&
                          (m.tN({
                              type: V.kGV.DISPATCH,
                              pid: null,
                              token: null,
                              payloads: Array.from(this.actionsToFlush),
                          }),
                          this.actionsToFlush.clear()),
                      this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions())
                    : this.actionsToFlush.clear();
            }),
            F(this, "dispatchPayloads", (e) => {
                (this.isDispatching = !0), e.forEach((e) => l.h.dispatch(e)), (this.isDispatching = !1);
            }),
            F(
                this,
                "queueDispatch",
                (e) =>
                    !(!X() || ei.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                              (e = Y(B({}, e), {
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, w.aw)(e.settings.type, e.settings.proto),
                                  },
                              })),
                          this.actionsToFlush.add(e),
                          null == this.timeout &&
                              null == this.requestIdleCallback &&
                              (this.timeout = setTimeout(() => {
                                  this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                              }, 100))),
                    !1),
            );
    }
}
let er = new en(),
    ei = new Set([
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
    ea = new Set(),
    es = !1,
    eo = new g.A("OverlayBridgeStore"),
    el = {};
function ec(e) {
    var t;
    return null != (t = el[e]) ? t : {};
}
function eu(e, t) {
    var n, r;
    let i = null == (n = el[e]) ? void 0 : n.error,
        a = null == (r = el[e]) ? void 0 : r.error_description;
    (el[e] = B({}, el[e], t)), null != i && (el[e].error = i), null != a && (el[e].error_description = a);
}
function ed(e) {
    var t, n;
    if (null != el[e]) return;
    let r = b.Ay.getGameOrTransformedSubgameForPID(e);
    el[e] = {
        overlay_method: v.Ue[v.Ue.Hook],
        success: !1,
        game_name: null != (t = null == r ? void 0 : r.name) ? t : null,
        game_id: null != (n = null == r ? void 0 : r.id) ? n : null,
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
let ef = "none",
    ep = (0, a.n)({
        onContention: (e, t) => eo.verbose("overlayLock contention: lastMutexCall ".concat(ef)),
        onContentionResolved: () => eo.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = "overlayLock: lastMutexCall ".concat(ef, "}");
            eo.error(n);
            let r = ec((0, U.getPID)());
            eu(
                (0, U.getPID)(),
                Y(B({}, r), {
                    error_description: n,
                    success: !1,
                }),
            ),
                L.default.track(V.HAw.OVERLAY_HOOK_RESULT, ec((0, U.getPID)()));
        },
        timeoutMs: 180000,
    });
function e_(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ep(() => t(...r), e);
    };
}
function eh() {
    try {
        var e;
        let t = null === _.A || void 0 === _.A || null == (e = _.A.fileManager) ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (eo.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                    var t, n, r, i, a, s, o;
                    if (null == l) continue;
                    let e = null != l.processName ? D.A.getGameByExecutable(l.processName) : null;
                    L.default.track(V.HAw.OVERLAY_HOOK_CRASHED, {
                        process_name: null == l ? void 0 : l.processName,
                        game_name: null != (t = null == e ? void 0 : e.name) ? t : null,
                        game_id: null != (n = null == e ? void 0 : e.id) ? n : null,
                        minidump_exception_type: null != (r = l.exceptionString) ? r : null,
                        minidump_exception_module_name: null != (i = l.exceptionModuleName) ? i : null,
                        minidump_relative_crash_address: null != (a = l.relativeCrashAddress) ? a : null,
                        minidump_exception_module_version: null != (s = l.exceptionModuleVersion) ? s : null,
                        minidump_exception_module_code_id: null != (o = l.exceptionModuleCodeId) ? o : null,
                    });
                }
        });
    } catch (e) {
        eo.error("tryUploadDiscordHookCrashes", e), (0, O.pj)(e);
    }
}
function em(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = q.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? q.delete(e) : q.set(e, t),
        (null == t || "CRASHED" === t) && (f.A.setFocusedPID(null, null), eh()),
        et.delete(e),
        eo.info(
            "pid="
                .concat(e, " status transition ")
                .concat(null != r ? r : "DISCONNECTED", " -> ")
                .concat(null != t ? t : "DISCONNECTED"),
            q,
        ));
}
async function eg(e) {
    try {
        if (k.Ay.supportsFeature(V.BYE.CREATE_HOST_ON_ATTACH))
            if (q.size > 0) {
                ef = "reconcile.getOverlayURL";
                let t = await ev();
                (ef = "reconcile.createHostProcess"), e.createHostProcess(t, eT, eI);
            } else (ef = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eA((0, U.getPID)());
        else if (Z) {
            let t = await ev();
            e.createHostProcess(t, eT, eI);
        } else e.destroyHostProcess(), eA((0, U.getPID)());
    } catch (t) {
        eo.error("reconcileHostProcess", t), (0, O.pj)(t), eA((0, U.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            eo.error("reconcileHostProcess: destroyHostProcess", e), (0, O.pj)(e);
        }
    }
}
async function eE(e) {
    var t;
    ep.isMutexHeld() || eo.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let n = null != (t = ec(e).mounting_started_at) ? t : new Date().getTime();
    eu(e, { mounting_started_at: n });
    let r = q.get(e);
    if (null != r) return void eo.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
    await f.A.updateOverlayState(e, v.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (ef = "attach.getOverlayModule");
    let i = await (0, G.R)();
    if (null == i) return void eo.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
    (ef = "attach.transitionOverlayPIDStatus"), em(e, "ATTACHING"), (ef = "attach.attachToProcess");
    let a = await h.GH(e);
    null == a
        ? ((ef = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          em(e, "CONNECTING", "ATTACHING"),
          (ef = "attach.reconcileHostProcess"),
          await eg(i),
          i.connectProcess(e))
        : ((ef = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          em(e, "HOOK_FAILED", "ATTACHING"),
          eo.warn("Could not hook to pid=".concat(e, ", error=").concat(a)));
}
async function eb(e) {
    if ((ep.isMutexHeld() || eo.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !q.has(e)))
        return void eo.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
    em(e, "DISCONNECTING");
    try {
        ef = "detach.getOverlayModule";
        let t = await (0, G.R)();
        if (null == t)
            return void eo.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
        e !== U.DEV_PID &&
            ((ef = "detach.cancelAttachToProcess"),
            await h.c1(e),
            await (0, o.yy)(16),
            (ef = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (ef = "detach.transitionOverlayPIDStatus"),
            em(e, null),
            (ef = "detach.reconcileHostProcess"),
            await eg(t);
    } catch (t) {
        (0, O.pj)(t, v.Ue.Hook), eo.error("Error during overlay detachment for pid ".concat(e, ":"), t), em(e, null);
    }
}
async function ey(e) {
    var t, n;
    if (
        (eo.verbose("updateIntendedOverlayPIDs", {
            isConnectionOpened: Q,
            action: e,
        }),
        ep.isMutexHeld() || eo.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !Q && null != e)
    )
        return void eo.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function r(e) {
        if (!(e in K)) return;
        let t = K[e];
        delete K[e];
        try {
            await t.deconstructor(), J.delete(e);
        } catch (n) {
            (0, O.pj)(n, v.Ue.Hook), eo.error("Failed to deconstruct tracked game ".concat(e), n), (K[e] = t), J.add(e);
        }
    }
    let i = !1;
    if (null == e || !Z) {
        for (let t of (eo.verbose("updateIntendedOverlayPIDs: Removing all.", K, e), Object.keys(K)))
            await r(Number(t)), (i = !0);
        return;
    }
    for (let t of J) {
        if (null == (n = e.added) ? void 0 : n.includes(t)) {
            eo.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        eo.verbose("updateIntendedOverlayPIDs: retrying failed overlay pid ".concat(t)), await r(t), (i = !0);
    }
    for (let n of null != (t = e.added) ? t : []) {
        let t = I.default.getTrackedGameByPid(n);
        if (null == t) {
            eo.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(n));
            continue;
        }
        if ((eo.verbose("updateIntendedOverlayPIDs: newGame", t), t.legacyEnabled))
            switch (
                (t.pid in K ? eo.error("Unexpected. ".concat(t.pid, " is being added twice?"), K, e) : ed(t.pid),
                t.overlayMethod)
            ) {
                case v.Ue.Hook:
                    let r = new Date().getTime();
                    eu(t.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, T.E1)(t.pid, 0),
                    }),
                        q.has(t.pid) || (await eE(t.pid)),
                        (K[t.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                await eb(t.pid);
                            },
                        }),
                        (i = !0);
                    break;
                case v.Ue.OutOfProcess:
                case v.Ue.OutOfProcessLimitedInteraction:
                    eo.error("updateIntendedOverlayPIDs: out of process called for hook overlay", t);
                    break;
                case v.Ue.Disabled:
                    eo.verbose("updateIntendedOverlayPIDs: disabled", t);
                    break;
                default:
                    eo.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod), t);
            }
    }
    for (let t of e.removed) eo.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), (i = !0);
    i && eJ.emitChange();
}
let eO = e_("updateIntendedOverlayPIDs", (e) => (eo.info("updateIntendedOverlayPIDs", e), ey(e))),
    eA = e_("clearPID", (e) => {
        if (null == e) return (0, U.setPID)(U.UNSET_PID);
        C.A.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID);
    });
function ev() {
    return new Promise((e) => {
        eJ.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eS = e_("setOverlayEnabled", async (e) => {
    if (!(0, U.supportsLegacy)()) return;
    if (Z === e) return void eo.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (Z = e), eJ.emitChange();
    let t = await (0, G.R)();
    null == t
        ? eo.error("setOverlayEnabled: overlay module failed loaded")
        : (Z || (await ey(void 0)), q.size > 0 && (await eg(t)));
});
function eI(e) {
    f.A.setFocusedPID(0 === e ? null : e, null);
}
function eT(e, t, n) {
    var r;
    let i = null == (r = b.Ay.getGameForPID(e)) ? void 0 : r.name,
        a = D.A.getGameByName(i),
        s = B(
            {
                game_name: i,
                game_id: null == a ? null : a.id,
                success: t,
                overlay_method: v.Ue[v.Ue.Hook],
            },
            n,
        );
    eu(e, B({}, s)),
        (0, d.Vz)(U.OVERLAY_LAYOUT_ID, x.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let o = ec(e);
    L.default.track(V.HAw.OVERLAY_HOOK_RESULT, o),
        eo.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), o),
        t
            ? (f.A.updateOverlayState(e, v.AR.OVERLAY_RENDERING, "onConnectComplete"), em(e, "CONNECTED", "CONNECTING"))
            : (f.A.updateOverlayState(e, v.AR.OVERLAY_CRASHED, "onConnectComplete"),
              em(e, "CONNECT_FAILED", "CONNECTING"));
}
function eC() {
    let e = P.default.getToken(),
        t = P.default.getId();
    null != e &&
        m.tN({
            type: V.kGV.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: "UPDATE_TOKEN",
                    token: e,
                    userId: t,
                },
            ],
        });
}
function eN(e) {
    return null != e && (0, j.j)(e, ee);
}
function eR(e) {
    switch ((es && eo.info("[app data received]", e), e.type)) {
        case V.kGV.CONNECT:
            let t = P.default.getToken();
            if (null == t) break;
            (0, d.Vz)(U.OVERLAY_LAYOUT_ID, x.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0),
                Promise.all([(0, S.A)(t, e.pid), s.Ay.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    m.tN({
                        type: V.kGV.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r,
                    }),
                        m.tN({
                            type: V.kGV.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n],
                        }),
                        em(i, "READY"),
                        (0, U.setPID)(i),
                        f.A.overlayReady(i);
                    let s = ec(i);
                    eu(
                        i,
                        Y(B({}, s), {
                            total_mount_time_ms:
                                null != s.mounting_started_at ? new Date().getTime() - s.mounting_started_at : void 0,
                        }),
                    );
                });
            break;
        case V.kGV.DISPATCH:
            null != e.payloads && er.dispatchPayloads(e.payloads);
            break;
        case V.kGV.LOG_MESSAGES:
            (0, y.F)(e.payload);
    }
}
async function ew(e, t) {
    let n = await (0, G.R)();
    if (null == n) return void eo.error("setInputLocked: overlay module failed loaded");
    let r = null != t ? t : $;
    if (null != r && "DISCONNECTING" === q.get(r))
        return void eo.warn("Overlay module is no longer valid during input lock");
    try {
        null != r &&
            r !== U.DEV_PID &&
            n.sendCommand(r, {
                message: "intercept_input",
                intercept: !e,
            });
    } catch (e) {
        (0, O.pj)(e, v.Ue.Hook), eo.error("Error during input lock", e);
    }
}
function eP(e, t) {
    e ? setTimeout(() => ew(e, t), 200) : ew(e, t);
}
let eD = null;
function ex(e) {
    let { locked: t, pid: n } = e,
        r = q.get(n);
    if ((J.has(n) && eO(void 0), null != r && null != K[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? et.delete(n) : et.add(n), ea.clear(), null != eD && (clearTimeout(eD), (eD = null), t))) return;
        t
            ? eP(t, n)
            : (eD = setTimeout(() => {
                  eP(t, n), (eD = null);
              }, 100));
    }
}
function eL(e) {
    let { region: t } = e;
    ea.add(t), eP(!1, $);
}
function ej() {
    ea.clear(), eP(!0, $);
}
function eM(e) {
    let { port: t } = e;
    ee = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "4e1818290817afb4d92f289508416cc4e8e00823"),
        n.append("rpc", String(t)),
        n.append("rpc_auth_token", ee),
        (r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString()));
}
function ek(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        p.default.selectPrivateChannel(t), c.A.call(t, !1, !!n);
    });
}
function eU(e) {
    let { pid: t } = e;
    $ = t;
}
function eG(e) {
    var t;
    let { pid: n, error: r } = e;
    if (null == K[n]) return;
    let i = r instanceof Error ? r : Error(null != r ? r : "Unknown error");
    em(n, "CRASHED"),
        eu(n, {
            renderer_crash_count: (null != (t = ec(n).renderer_crash_count) ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0,
        }),
        eo.verbose("OverlayBridgeStore: handleOverlayCrashed: ".concat(n)),
        (0, O.St)(i, v.Ue.Hook);
}
function eV() {
    (Q = !0), (z = !1), eX();
}
function eF() {
    (Q = !1), f.A.setFocusedPID(null, null), eO(void 0), eo.verbose("OverlayBridgeStore: handleConnectionClosed");
}
function eB() {
    return !0;
}
function eH(e) {
    let { legacyEnabled: t } = e;
    return eS(t), !1;
}
function eY(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        u.A.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a,
        }),
            null != $ && f.A.setInputLocked(!0, $);
    });
}
function eW(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, M._)("click", e, r);
        (0, M.K)(i, e, r);
    }, 50);
}
function eK(e) {
    return (
        eO({
            added: [],
            removed: [],
        }),
        !0
    );
}
function ez(e) {
    return (
        eO({
            added: [],
            removed: [],
        }),
        !0
    );
}
function eq(e) {
    eo.verbose("Updating OverlayMethod", {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, T.gK)(e.overlayMethod),
    }),
        e.overlayMethod === v.Ue.Hook
            ? eO({
                  added: [e.pid],
                  removed: [],
              })
            : eO({
                  added: [],
                  removed: [e.pid],
              });
}
function eX() {
    E.A.hasLoadedExperiments && !z && ((z = !0), eS(A.x.legacyEnabled));
}
function eZ() {
    z = !1;
}
function eQ() {
    z = !1;
}
class e$ extends (i = s.Ay.Store) {
    initialize() {
        !(0, U.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(P.default, E.A, D.A, x.A, I.default, N.A, R.A, C.A, b.Ay),
            this.syncWith([E.A], eX),
            m.Le(eR, eN),
            P.default.addChangeListener(eC),
            l.h.addInterceptor(er.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return I.default.isOverlayOOPEnabledForPid(e) ? N.A.isInputLocked(e) : !et.has(e);
    }
    DEV_isInputLockedV3(e) {
        return N.A.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !et.has(e);
    }
    isSupported() {
        return (0, U.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = C.A.getFocusedPID();
        return null != e ? (C.A.isOverlayV3EnabledForPID(e) ? R.A.isOverlayEnabled : Z) : R.A.isOverlayEnabled || Z;
    }
    getAnyGlobalEnabledOverlay() {
        return I.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = C.A.getFocusedPID();
        return null != e && C.A.isOverlayV3EnabledForPID(e) ? e : $;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && I.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return I.default.isOverlayOOPEnabledForPid((0, U.getPID)());
    }
    isReady(e) {
        return C.A.isOverlayV3EnabledForPID(e) ? C.A.isReady(e) : "READY" === q.get(e);
    }
    isCrashed(e) {
        return !C.A.isOverlayV3EnabledForPID(e) && "CRASHED" === q.get(e);
    }
    getOverlayPIDStatuses() {
        return q;
    }
}
F(e$, "displayName", "OverlayBridgeStore");
let eJ = new e$(
        l.h,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eW }
            : {
                  LOGIN: eZ,
                  LOGOUT: eQ,
                  CONNECTION_OPEN: eV,
                  CONNECTION_CLOSED: eF,
                  EXPERIMENT_OVERRIDE_BUCKET: eB,
                  RUNNING_GAME_TOGGLE_OVERLAY: ez,
                  RUNNING_GAMES_CHANGE: eK,
                  OVERLAY_SET_ENABLED: eH,
                  OVERLAY_FOCUSED: eU,
                  OVERLAY_SET_INPUT_LOCKED: ex,
                  OVERLAY_ACTIVATE_REGION: eL,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: ej,
                  RPC_SERVER_READY: eM,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ek,
                  OVERLAY_JOIN_GAME: eY,
                  OVERLAY_CRASHED: eG,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eq,
              },
    ),
    e0 = eJ;
