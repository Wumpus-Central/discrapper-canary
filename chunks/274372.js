"use strict";
n.d(t, { A: () => F }), n(321073), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(73153),
    a = n(77729),
    o = n(15285),
    l = n(652896),
    u = n(961350);
n(741394);
var c = n(734066),
    d = n(372684),
    _ = n(696016),
    f = n(652215),
    p = n(753070);
let h = "default",
    E = [],
    m = [],
    g = {},
    A = {},
    I = {},
    T = [],
    S = [],
    y = [],
    N = 0,
    v = null,
    C = null,
    O = {},
    R = null,
    b = [],
    D = null,
    L = {},
    w = new Map(),
    M = {
        clipsEnabled: !1,
        storageLocation: h,
        clipsQuality: { resolution: p.on.RESOLUTION_1080, frameRate: p.kn.FPS_30 },
        clipsLength: _.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: _.on.ALL,
        maxAutoClips: _.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
        mlPipelinesEnabled: {
            emotionClassifier: !0,
            wakeWordDetector: !1,
            yellDetector: !0,
            whisperTranscription: !0,
            laughterDetector: !0,
        },
        autoClipPhrases: ["clip that", "clip it", "clip clip"],
    },
    P = {
        clipsSettings: M,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function x() {
    if (P.clipsSettings.storageLocation !== h || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    (P.clipsSettings.storageLocation = e), G.emitChange();
}
function k(e, t, n) {
    if (!(0, c.J)() || n !== u.default.getId()) return !1;
    let r = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = w.get(e);
        null == t && ((t = new Set()), w.set(e, t)), t.add(n.clip_remote_id), (r = !0);
    }
    return r;
}
class U extends i.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : M, newClipsCount: 0 }),
        (e) => {
            let t = { ...M, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: M.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(430452).Ay.getHardwareEncoding();
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    clipsEnabled: !!t && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!t && e.clipsSettings.decoupledClipsEnabled,
                },
            };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [], newClipIDs: void 0 }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality:
                    "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                        ? M.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? M.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? M.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? M.clipSignals,
                mlPipelinesEnabled: e.clipsSettings.mlPipelinesEnabled ?? M.mlPipelinesEnabled,
                autoClipPhrases: e.clipsSettings.autoClipPhrases ?? M.autoClipPhrases,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                autoClipPhrases:
                    0 === e.clipsSettings.autoClipPhrases.length ? M.autoClipPhrases : e.clipsSettings.autoClipPhrases,
            },
        }),
    ];
    initialize(e) {
        null != e && (P = e), x(), this.waitFor(o.Ay);
    }
    getClips() {
        return m.map((e) => g[e] ?? null).filter((e) => null != e);
    }
    getClipIds() {
        return m;
    }
    getClipById(e) {
        return g[e];
    }
    getClipByRemoteId(e) {
        let t = I[e];
        if (null != t) return g[t];
    }
    getPendingClips() {
        return T;
    }
    getPendingClipCandidates() {
        return S;
    }
    getClipCandidates() {
        return y;
    }
    getClipCandidateById(e) {
        return A[e];
    }
    getUserAgnosticState() {
        return P;
    }
    getSettings() {
        return P.clipsSettings;
    }
    getLastClipsSession() {
        return C;
    }
    getClipsWarningShown(e) {
        return v === e;
    }
    getActiveAnimation() {
        return D;
    }
    getStreamClipAnimations(e) {
        return L[e] ?? E;
    }
    hasAnyClipAnimations() {
        return Object.values(L).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return P.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return P.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return P.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return N >= _.VP;
    }
    getLastClipsError() {
        return R;
    }
    isClipsEnabledForUser(e) {
        return O[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return O[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return O[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return P.hasClips;
    }
    hasTakenDecoupledClip() {
        return P.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return P.newClipIds;
    }
    isClipExporting(e) {
        return b.includes(e);
    }
    getExportingClipIds() {
        return b;
    }
    wasClipSharedInChannel(e, t) {
        let n = w.get(t);
        return n?.has(e) ?? !1;
    }
}
let G = new U(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            P = { ...P, clipsSettings: { ...P.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            if (((N = Math.max(N - 1, 0)), t.isCandidate)) {
                (S = S.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                    (y = [t, ...y]),
                    (A[t.id] = t);
                return;
            }
            (C = { applicationName: t.applicationName, ended: !1, ...C, newClipIds: [...(C?.newClipIds ?? []), t.id] }),
                (P = { ...P, newClipIds: [...(P.newClipIds ?? []), t.id] }),
                (T = T.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (m = m.filter((e) => e !== t.id)),
                (g[t.id] = t),
                null != t.remoteClipId && (I[t.remoteClipId] = t.id),
                (m = [t.id, ...m]),
                (P.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            S = [t, ...S];
        },
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: function (e) {
            let { clipId: t } = e;
            S = S.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (C = { applicationName: t.applicationName, ...C, ended: !0, newClipIds: [...(C?.newClipIds ?? []), t.id] }),
                (P = { ...P, newClipIds: [...(P.newClipIds ?? []), t.id] }),
                (y = y.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete A[t.id],
                (g[t.id] = t),
                (m = [t.id, ...m]),
                (P.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
            let { clip: t } = e;
            T = [t, ...T];
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
            let { clipId: t } = e;
            T = T.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t, streamKey: n, thumbnail: r } = e;
            if (
                ((N += 1),
                (P.hasTakenDecoupledClip = P.hasTakenDecoupledClip || t === _.Fv.DECOUPLED),
                null != n && null != r)
            ) {
                let e = Date.now();
                (D = D ?? e), (L[n] = [...(L[n] ?? []), { timestamp: e, thumbnail: r }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            N = Math.max(N - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            D === n && (D = null), null == n ? (L[t] = []) : (L[t] = L[t].filter((e) => e.timestamp !== n));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!P.clipsSettings.clipsEnabled) return !1;
            let r = t;
            if (null != n) {
                let e = o.Ay.getGameForPID(n);
                r = e?.name ?? r;
            }
            if (null == r || "" === r) return !1;
            C = { applicationName: r, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((D = null), (L[t] = []), null == C || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            C = 0 === C.newClipIds.length ? null : { ...C, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == C) return !1;
            C = null;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            P.newClipIds = [];
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((m = []), (y = []), e.clips))
                t.isCandidate
                    ? ((A[t.id] = t), y.push(t))
                    : ((g[t.id] = t), m.push(t.id), null != t.remoteClipId && (I[t.remoteClipId] = t.id));
            P.hasClips = m.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = g[e.id];
            (m = m.filter((t) => e.id !== t)),
                (y = y.filter((t) => {
                    let { id: n } = t;
                    return e.id !== n;
                })),
                delete A[e.id],
                delete g[e.id],
                t?.remoteClipId != null && delete I[t.remoteClipId],
                0 === m.length && (P.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (A[t.id] = t) : ((g[t.id] = t), null != t.remoteClipId && (I[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            O[e.userId] = {
                clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            v = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== v && (v = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = P.hardwareClassification;
            (P.hardwareClassificationVersion = _.V0),
                (P.hardwareClassification = t),
                P.hardwareClassification === d.k9.MEETS_AUTO_ENABLE &&
                    n !== d.k9.MEETS_AUTO_ENABLE &&
                    (P.clipsSettings.clipsEnabled = !0);
            let r = P.hardwareClassificationForDecoupled;
            (P.hardwareClassificationForDecoupled = t),
                P.hardwareClassificationForDecoupled === d.k9.MEETS_AUTO_ENABLE &&
                    r !== d.k9.MEETS_AUTO_ENABLE &&
                    P.clipsSettings.clipsEnabled &&
                    (P.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((R = null), !P.clipsSettings.clipsEnabled)) return !1;
            C = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            R = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case _.P4.Error:
                    R = null;
                    break;
                case _.P4.Disabled:
                case _.P4.Enabled:
                    (P.clipsEducationState.dismissedAt = Date.now()),
                        (P.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (P.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (P.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            b = t ?? [];
        },
        MESSAGE_CREATE: function (e) {
            return k(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || k(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
    }),
    F = G;
