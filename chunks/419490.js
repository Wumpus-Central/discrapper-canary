(n.d(t, { _c: () => p, he: () => I, Ay: () => ee }), n(321073), n(938796));
var i = n(665260),
    r = n(855986),
    a = n(73153),
    s = n(77729),
    l = n(644727),
    o = n(46653),
    d = n(741394);
let c = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-autoclipping-default-override",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = n(696016);
let _ = { clipsEnabledSource: u.$D.UNSET, version: 0, enableAutoclipping: null };
var E = n(458977),
    A = n(110742),
    f = n(652215),
    h = n(753070);
let I = "default",
    p = "Discord Clips",
    m = {},
    g = {},
    T = [],
    S = 0,
    N = null,
    C = null,
    O = 0,
    R = new WeakMap(),
    L = new Map(),
    y = new Map(),
    D = new Map(),
    b = new Map(),
    v = new Map(),
    P = [],
    M = null,
    U = {},
    w = null,
    G = new Set(),
    x = !1,
    k = !1,
    F = new Set(),
    B = new Map(),
    V = new Map(),
    H = new Map(),
    j = [],
    W = {
        clipsEnabled: !1,
        storageLocation: I,
        clipsQuality: { resolution: h.on.RESOLUTION_1080, frameRate: h.kn.FPS_60, bitratePercent: 75 },
        clipsLength: u.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        maxAutoClips: 20,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    Y = {
        clipsSettings: W,
        hardwareClassification: null,
        hardwareClassificationVersion: 0,
        clipsDefaultSettingsState: _,
        hasAutoEnabledClipsForHardware: !1,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
function K() {
    let e = [];
    return (null != C && e.push(C), null != M && M !== C && e.push(M), e);
}
function $(e, t, n) {
    (O++,
        L.has(e.id) || L.set(e.id, (null != t ? R.get(t) : null) ?? O),
        null == t || (n(t), t.hasClips && (null == M || M.startedAt <= t.startedAt) && (M = t)));
}
function X(e) {
    return (null != e.processGame ? [e.id, e.processGame.id] : [e.id]).filter((t) => null != t || null == e.id);
}
function z(e) {
    return Math.max(0, ...X(e).map((e) => y.get(e) ?? 0));
}
function q(e, t) {
    let n = !1;
    for (let i of e)
        for (let e of t)
            null != (0, A.hL)(i, e) && (B.set(i.attachmentId, [...(B.get(i.attachmentId) ?? []), e]), (n = !0));
    return n;
}
function Q(e) {
    if (!E.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, i.Lt)(e.flags ?? 0, f.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || V.has(e.id)) return !1;
    let n = (function (e, t) {
        let n = [];
        for (let i of t) {
            let t = (0, A.Vi)(i);
            null != t && n.push({ ...t, messageId: e.id, channelId: e.channel_id, attachmentId: i.id });
        }
        return n;
    })(e, t);
    V.set(e.id, n);
    let r = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === f.SH7.DEFAULT)) return t.message_id;
        })(e),
        a = !(null == r || e.author?.id !== o.default.getId() || F.has(r)) && (F.add(r), !0),
        s = !1;
    return (
        null != r && ((s = q(V.get(r) ?? [], n)), H.set(r, [...(H.get(r) ?? []), ...n])),
        (s = q(n, H.get(e.id) ?? []) || s) || a
    );
}
class J extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : W, newClipsCount: 0 }),
        (e) => {
            let t = { ...W, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: W.decoupledClipsEnabled } }),
        (e) => e,
        (e) => e,
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [], newClipIDs: void 0 }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality:
                    "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                        ? W.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? W.remindersEnabled,
            },
        }),
        (e) => ({
            ...e,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                maxAutoClips: e.clipsSettings.maxAutoClips ?? W.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? W.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? W.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? W.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? W.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
        (e) => e,
        (e) =>
            e.clipsSettings.clipsQuality.frameRate !== h.kn.FPS_15
                ? e
                : {
                      ...e,
                      clipsSettings: {
                          ...e.clipsSettings,
                          clipsQuality: { ...e.clipsSettings.clipsQuality, frameRate: h.kn.FPS_30 },
                      },
                  },
        (e) => ({ ...e, clipsDefaultSettingsState: e.clipsDefaultSettingsState ?? _ }),
        (e) => {
            let { hardwareClassification: t } = e;
            return {
                ...e,
                hasAutoEnabledClipsForHardware:
                    t === u.k9.MEETS_AUTO_ENABLE ||
                    (t === u.k9.MEETS_MINIMUM && (e.hasClips || e.hasTakenDecoupledClip)),
            };
        },
    ];
    initialize(e) {
        (null != e && (Y = e),
            (async function () {
                let e;
                if (Y.clipsSettings.storageLocation === I && null != s.A && null != s.A.app) {
                    try {
                        let t = await s.A.app.getPath("videos");
                        e = (0, d.CN)(t, p);
                    } catch (t) {
                        (u.GU.error("Failed to resolve videos path for default storage migration", t),
                            (e = await s.A.app.getPath("documents")));
                    }
                    ((Y.clipsSettings.storageLocation = e), Z.emitChange());
                }
            })(),
            this.waitFor(l.Ay));
    }
    getClips() {
        return m;
    }
    getClipById(e) {
        return m[e];
    }
    getClipByRemoteId(e) {
        let t = g[e];
        if (null != t) return m[t];
    }
    getClipCandidates() {
        return K().flatMap((e) => e.candidates);
    }
    getPendingMontageClips() {
        return T;
    }
    getUserAgnosticState() {
        return Y;
    }
    getSettings() {
        return Y.clipsSettings;
    }
    getEnableAutoclipping() {
        return (
            Y.clipsSettings.enableAutoclipping ??
            Y.clipsDefaultSettingsState.enableAutoclipping ??
            c.getConfig({ location: "getAutoclippingDefault" }).enabled
        );
    }
    hasUserSetAutoclippingSettings() {
        return null != Y.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return M;
    }
    getActiveClipsSession() {
        return C;
    }
    devSetLastClipsSession(e) {
        ((M = e), this.emitChange());
    }
    getGameClipIds(e) {
        let t = null != e ? D.get(e.pid) : null;
        if (null == t || t.dismissed) return P;
        let n = b.get(t.game.pid);
        if (n?.revision === O) return n.clipIds;
        let i = X(t.game),
            r = Object.values(m)
                .filter((e) => i.includes(e.applicationId) && (L.get(e.id) ?? 0) > t.after)
                .map((e) => e.id);
        return (b.set(t.game.pid, { revision: O, clipIds: r }), r);
    }
    devSetGameClips(e, t) {
        a.h.dispatch({ type: "CLIPS_DEV_SET_GAME_CLIPS", game: e, clips: t });
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getHardwareClassification() {
        return Y.hardwareClassification;
    }
    getHardwareClassificationVersion() {
        return Y.hardwareClassificationVersion;
    }
    getClipsDefaultSettingsState() {
        return Y.clipsDefaultSettingsState;
    }
    hasFinishedApplyingDefaultSettings() {
        return k;
    }
    getIsAtMaxSaveClipOperations() {
        return S >= 15;
    }
    getLastClipsError() {
        return w;
    }
    isClipsEnabledForUser(e) {
        return U[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return U[e]?.allowVoiceRecording ?? !1;
    }
    hasClips() {
        return Y.hasClips;
    }
    hasTakenDecoupledClip() {
        return Y.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return Y.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return Y.newClipIds;
    }
    isClipExporting(e) {
        return G.has(e);
    }
    getExportingClipIds() {
        return G;
    }
    isAutoStashEnabled() {
        return x;
    }
    hasRepliedWithClip(e) {
        return F.has(e);
    }
    getMatchingPOVReferences(e) {
        return B.get(e) ?? j;
    }
}
let Z = new J(a.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e,
                n =
                    null != t.clipsEnabled
                        ? { ...Y.clipsDefaultSettingsState, clipsEnabledSource: u.$D.USER }
                        : Y.clipsDefaultSettingsState;
            Y = { ...Y, clipsSettings: { ...Y.clipsSettings, ...t }, clipsDefaultSettingsState: n };
        },
        CLIPS_DEV_SET_GAME_CLIPS: function (e) {
            let { game: t, clips: n } = e;
            for (let e of (D.set(t.pid, {
                ...D.get(t.pid),
                dismissed: !1,
                after: D.get(t.pid)?.after ?? z(t),
                game: t,
            }),
            b.delete(t.pid),
            n))
                L.has(e.id) || L.set(e.id, ++O);
        },
        CLIPS_DISMISS_QUICK_BAR: function (e) {
            let { pid: t } = e,
                n = D.get(t);
            if (null == n || n.dismissed) return !1;
            n.dismissed = !0;
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t, session: n } = e;
            ((S = Math.max(S - 1, 0)),
                $(t, n, (e) => e.recordSavedClip(t)),
                t.isCandidate ||
                    ((Y = { ...Y, newClipIds: [...(Y.newClipIds ?? []), t.id] }),
                    (m[t.id] = t),
                    null != t.remoteClipId && (g[t.remoteClipId] = t.id),
                    (Y.hasClips = !0)));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t, session: n } = e;
            ($(t, n, (e) => e.recordPromotedClip(t)),
                (Y = { ...Y, newClipIds: [...(Y.newClipIds ?? []), t.id] }),
                (m[t.id] = t),
                (Y.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            ((S += 1), (Y.hasTakenDecoupledClip = Y.hasTakenDecoupledClip || t === u.Fv.DECOUPLED));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            S = Math.max(S - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === u.RC.BUFFER_WARMING_UP || t === u.RC.BRIDGE_SHUTDOWN) && (S = Math.max(S - 1, 0));
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == M) return !1;
            M = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { session: t } = e;
            (C?.end(), (C = t), R.set(t, ++O));
        },
        CLIPS_SESSION_STOP: function () {
            if (null == C) return !1;
            (C.end(), (C = null));
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            Y.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            Y.newClipIds = Y.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of (O++, (m = {}), e.clips))
                t.isCandidate || ((m[t.id] = t), null != t.remoteClipId && (g[t.remoteClipId] = t.id));
            Y.hasClips = Object.keys(m).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            (O++, L.delete(e.id));
            let t = m[e.id];
            for (let t of K()) t.removeClip(e.id);
            (delete m[e.id],
                t?.remoteClipId != null && delete g[t.remoteClipId],
                (Y.hasClips = Object.keys(m).length > 0));
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            if ((O++, t.isCandidate)) return !1;
            ((m[t.id] = t), null != t.remoteClipId && (g[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            U[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            N = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== N && (N = null);
        },
        CLIPS_APPLY_DEFAULT_SETTINGS: function (e) {
            let { classification: t, decision: n } = e,
                i = Y.hardwareClassification;
            ((Y.hardwareClassificationVersion = 3), (Y.hardwareClassification = t));
            let r =
                    Y.clipsDefaultSettingsState.clipsEnabledSource === u.$D.UNSET &&
                    t === u.k9.MEETS_AUTO_ENABLE &&
                    !Y.hasAutoEnabledClipsForHardware,
                a = r && !Y.clipsSettings.clipsEnabled;
            if (
                (r &&
                    ((Y.clipsSettings = { ...Y.clipsSettings, clipsEnabled: !0 }),
                    (Y.hasAutoEnabledClipsForHardware = !0)),
                null != n)
            ) {
                let { clipsEnabled: e, defaultState: t } = (function (e) {
                    let { defaultState: t, clipsEnabled: n, decision: i, previousHardwareClassification: r } = e,
                        a = i.clipsEnabled,
                        s = u.$D.DEFAULT;
                    return (
                        t.clipsEnabledSource === u.$D.USER
                            ? ((a = n), (s = u.$D.USER))
                            : t.clipsEnabledSource === u.$D.UNSET &&
                              null != r &&
                              (n !== (r === u.k9.MEETS_AUTO_ENABLE)
                                  ? ((a = n), (s = u.$D.USER))
                                  : (a = n && i.clipsEnabled)),
                        {
                            clipsEnabled: a,
                            defaultState: {
                                clipsEnabledSource: s,
                                version: 1,
                                enableAutoclipping: i.enableAutoclipping,
                            },
                        }
                    );
                })({
                    defaultState: Y.clipsDefaultSettingsState,
                    clipsEnabled: Y.clipsSettings.clipsEnabled,
                    decision: n,
                    previousHardwareClassification: a ? u.k9.MEETS_AUTO_ENABLE : i,
                });
                Y = { ...Y, clipsSettings: { ...Y.clipsSettings, clipsEnabled: e }, clipsDefaultSettingsState: t };
            }
        },
        CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE: function () {
            if (k) return !1;
            k = !0;
        },
        CLIPS_INIT: function () {
            w = null;
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            w = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case u.P4.Error:
                    w = null;
                    break;
                case u.P4.Disabled:
                case u.P4.Enabled:
                    ((Y.clipsEducationState.dismissedAt = Date.now()),
                        (Y.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (Y.clipsEducationState.numberOfTimesDismissed += 1));
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { games: t, added: n } = e;
            b.clear();
            let i = v;
            for (let [e, n] of ((v = new Map()), D))
                if (!t.some((t) => t.pid === e)) {
                    for (let e of X(n.game)) y.set(e, ++O);
                    (v.set(e, n), D.delete(e));
                }
            for (let e of t) {
                let t = D.get(e.pid) ?? i.get(e.pid) ?? { after: z(e), game: e };
                ((t.game = e), D.set(e.pid, t));
            }
            n.length > 0 && (Y.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            G = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            T = [
                t,
                ...T.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t, session: n } = e;
            ((T = T.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (m[t.id] = t),
                $(t, n, (e) => e.recordMontageClip(t)),
                ((Y = { ...Y, newClipIds: [...(Y.newClipIds ?? []), t.id] }).hasClips = !0));
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            T = T.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            x = t;
        },
        MESSAGE_CREATE: function (e) {
            return Q(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = Q(n) || t;
            return t;
        },
        LOGOUT: function () {
            (D.clear(),
                b.clear(),
                v.clear(),
                y.clear(),
                L.clear(),
                (R = new WeakMap()),
                O++,
                F.clear(),
                B.clear(),
                V.clear(),
                H.clear(),
                (C = null),
                (M = null),
                (N = null),
                (U = {}),
                (k = !1));
        },
    }),
    ee = Z;
