(n.d(t, { _c: () => p, he: () => I, Ay: () => W }), n(321073), n(938796));
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
    T = {},
    g = [],
    S = 0,
    N = null,
    C = null,
    O = null,
    R = {},
    L = null,
    y = new Set(),
    D = !1,
    b = !1,
    v = new Set(),
    P = new Map(),
    M = new Map(),
    U = new Map(),
    w = [],
    G = {
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
    x = {
        clipsSettings: G,
        hardwareClassification: null,
        hardwareClassificationVersion: 0,
        clipsDefaultSettingsState: _,
        hasAutoEnabledClipsForHardware: !1,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
function k() {
    let e = [];
    return (null != C && e.push(C), null != O && O !== C && e.push(O), e);
}
function F(e, t) {
    null == e || (t(e), e.hasClips && (null == O || O.startedAt <= e.startedAt) && (O = e));
}
function B(e, t) {
    let n = !1;
    for (let i of e)
        for (let e of t)
            null != (0, A.hL)(i, e) && (P.set(i.attachmentId, [...(P.get(i.attachmentId) ?? []), e]), (n = !0));
    return n;
}
function V(e) {
    if (!E.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, i.Lt)(e.flags ?? 0, f.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || M.has(e.id)) return !1;
    let n = (function (e, t) {
        let n = [];
        for (let i of t) {
            let t = (0, A.Vi)(i);
            null != t && n.push({ ...t, messageId: e.id, channelId: e.channel_id, attachmentId: i.id });
        }
        return n;
    })(e, t);
    M.set(e.id, n);
    let r = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === f.SH7.DEFAULT)) return t.message_id;
        })(e),
        a = !(null == r || e.author?.id !== o.default.getId() || v.has(r)) && (v.add(r), !0),
        s = !1;
    return (
        null != r && ((s = B(M.get(r) ?? [], n)), U.set(r, [...(U.get(r) ?? []), ...n])),
        (s = B(n, U.get(e.id) ?? []) || s) || a
    );
}
class H extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : G, newClipsCount: 0 }),
        (e) => {
            let t = { ...G, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: G.decoupledClipsEnabled } }),
        (e) => e,
        (e) => e,
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [], newClipIDs: void 0 }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality:
                    "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                        ? G.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? G.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? G.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? G.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? G.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? G.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? G.clipsQuality.bitratePercent,
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
        (null != e && (x = e),
            (async function () {
                let e;
                if (x.clipsSettings.storageLocation === I && null != s.A && null != s.A.app) {
                    try {
                        let t = await s.A.app.getPath("videos");
                        e = (0, d.CN)(t, p);
                    } catch (t) {
                        (u.GU.error("Failed to resolve videos path for default storage migration", t),
                            (e = await s.A.app.getPath("documents")));
                    }
                    ((x.clipsSettings.storageLocation = e), j.emitChange());
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
        let t = T[e];
        if (null != t) return m[t];
    }
    getClipCandidates() {
        return k().flatMap((e) => e.candidates);
    }
    getPendingMontageClips() {
        return g;
    }
    getUserAgnosticState() {
        return x;
    }
    getSettings() {
        return x.clipsSettings;
    }
    getEnableAutoclipping() {
        return (
            x.clipsSettings.enableAutoclipping ??
            x.clipsDefaultSettingsState.enableAutoclipping ??
            c.getConfig({ location: "getAutoclippingDefault" }).enabled
        );
    }
    hasUserSetAutoclippingSettings() {
        return null != x.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return O;
    }
    getActiveClipsSession() {
        return C;
    }
    devSetLastClipsSession(e) {
        ((O = e), this.emitChange());
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getHardwareClassification() {
        return x.hardwareClassification;
    }
    getHardwareClassificationVersion() {
        return x.hardwareClassificationVersion;
    }
    getClipsDefaultSettingsState() {
        return x.clipsDefaultSettingsState;
    }
    hasFinishedApplyingDefaultSettings() {
        return b;
    }
    getIsAtMaxSaveClipOperations() {
        return S >= 15;
    }
    getLastClipsError() {
        return L;
    }
    isClipsEnabledForUser(e) {
        return R[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return R[e]?.allowVoiceRecording ?? !1;
    }
    hasClips() {
        return x.hasClips;
    }
    hasTakenDecoupledClip() {
        return x.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return x.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return x.newClipIds;
    }
    isClipExporting(e) {
        return y.has(e);
    }
    getExportingClipIds() {
        return y;
    }
    isAutoStashEnabled() {
        return D;
    }
    hasRepliedWithClip(e) {
        return v.has(e);
    }
    getMatchingPOVReferences(e) {
        return P.get(e) ?? w;
    }
}
let j = new H(a.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e,
                n =
                    null != t.clipsEnabled
                        ? { ...x.clipsDefaultSettingsState, clipsEnabledSource: u.$D.USER }
                        : x.clipsDefaultSettingsState;
            x = { ...x, clipsSettings: { ...x.clipsSettings, ...t }, clipsDefaultSettingsState: n };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t, session: n } = e;
            ((S = Math.max(S - 1, 0)),
                F(n, (e) => e.recordSavedClip(t)),
                t.isCandidate ||
                    ((x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                    (m[t.id] = t),
                    null != t.remoteClipId && (T[t.remoteClipId] = t.id),
                    (x.hasClips = !0)));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t, session: n } = e;
            (F(n, (e) => e.recordPromotedClip(t)),
                (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                (m[t.id] = t),
                (x.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            ((S += 1), (x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === u.Fv.DECOUPLED));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            S = Math.max(S - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === u.RC.BUFFER_WARMING_UP || t === u.RC.BRIDGE_SHUTDOWN) && (S = Math.max(S - 1, 0));
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == O) return !1;
            O = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { session: t } = e;
            (C?.end(), (C = t));
        },
        CLIPS_SESSION_STOP: function () {
            if (null == C) return !1;
            (C.end(), (C = null));
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            x.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            x.newClipIds = x.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((m = {}), e.clips))
                t.isCandidate || ((m[t.id] = t), null != t.remoteClipId && (T[t.remoteClipId] = t.id));
            x.hasClips = Object.keys(m).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = m[e.id];
            for (let t of k()) t.removeCandidate(e.id);
            (delete m[e.id],
                t?.remoteClipId != null && delete T[t.remoteClipId],
                (x.hasClips = Object.keys(m).length > 0));
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            if (t.isCandidate) return !1;
            ((m[t.id] = t), null != t.remoteClipId && (T[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            R[e.userId] = {
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
                i = x.hardwareClassification;
            ((x.hardwareClassificationVersion = 3), (x.hardwareClassification = t));
            let r =
                    x.clipsDefaultSettingsState.clipsEnabledSource === u.$D.UNSET &&
                    t === u.k9.MEETS_AUTO_ENABLE &&
                    !x.hasAutoEnabledClipsForHardware,
                a = r && !x.clipsSettings.clipsEnabled;
            if (
                (r &&
                    ((x.clipsSettings = { ...x.clipsSettings, clipsEnabled: !0 }),
                    (x.hasAutoEnabledClipsForHardware = !0)),
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
                    defaultState: x.clipsDefaultSettingsState,
                    clipsEnabled: x.clipsSettings.clipsEnabled,
                    decision: n,
                    previousHardwareClassification: a ? u.k9.MEETS_AUTO_ENABLE : i,
                });
                x = { ...x, clipsSettings: { ...x.clipsSettings, clipsEnabled: e }, clipsDefaultSettingsState: t };
            }
        },
        CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE: function () {
            if (b) return !1;
            b = !0;
        },
        CLIPS_INIT: function () {
            L = null;
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            L = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case u.P4.Error:
                    L = null;
                    break;
                case u.P4.Disabled:
                case u.P4.Enabled:
                    ((x.clipsEducationState.dismissedAt = Date.now()),
                        (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (x.clipsEducationState.numberOfTimesDismissed += 1));
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            y = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            g = [
                t,
                ...g.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t, session: n } = e;
            ((g = g.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (m[t.id] = t),
                F(n, (e) => e.recordMontageClip(t)),
                ((x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }).hasClips = !0));
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            g = g.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            D = t;
        },
        MESSAGE_CREATE: function (e) {
            return V(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = V(n) || t;
            return t;
        },
        LOGOUT: function () {
            (v.clear(), P.clear(), M.clear(), U.clear(), (C = null), (O = null), (N = null), (R = {}), (b = !1));
        },
    }),
    W = j;
