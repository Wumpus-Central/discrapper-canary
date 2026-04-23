"use strict";
n.d(t, { A: () => V }), n(321073), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(73153),
    a = n(77729),
    o = n(15285),
    l = n(652896),
    u = n(961350);
n(741394);
var d = n(734066),
    c = n(372684),
    _ = n(696016),
    f = n(652215),
    E = n(753070);
let h = "default",
    p = [],
    m = [],
    g = {},
    A = {},
    I = {},
    T = [],
    S = [],
    y = [],
    N = 0,
    O = null,
    R = null,
    v = {},
    C = null,
    b = [],
    D = null,
    L = {},
    w = new Map(),
    M = {
        clipsEnabled: !1,
        storageLocation: h,
        clipsQuality: { resolution: E.on.RESOLUTION_1080, frameRate: E.kn.FPS_30 },
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
async function U() {
    if (P.clipsSettings.storageLocation !== h || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    (P.clipsSettings.storageLocation = e), G.emitChange();
}
function k(e, t, n) {
    if (!(0, d.J)() || n !== u.default.getId()) return !1;
    let r = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = w.get(e);
        null == t && ((t = new Set()), w.set(e, t)), t.add(n.clip_remote_id), (r = !0);
    }
    return r;
}
class x extends i.Ay.DeviceSettingsStore {
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
        null != e && (P = e), U(), this.waitFor(o.Ay);
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
        return R;
    }
    getClipsWarningShown(e) {
        return O === e;
    }
    getActiveAnimation() {
        return D;
    }
    getStreamClipAnimations(e) {
        return L[e] ?? p;
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
        return C;
    }
    isClipsEnabledForUser(e) {
        return v[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return v[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return v[e]?.allowAnyViewerClips ?? !1;
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
let G = new x(s.h, {
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
            (R = { applicationName: t.applicationName, ended: !1, ...R, newClipIds: [...(R?.newClipIds ?? []), t.id] }),
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
            (R = { applicationName: t.applicationName, ...R, ended: !0, newClipIds: [...(R?.newClipIds ?? []), t.id] }),
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
            R = { applicationName: r, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((D = null), (L[t] = []), null == R || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            R = 0 === R.newClipIds.length ? null : { ...R, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == R) return !1;
            R = null;
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
            v[e.userId] = {
                clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            O = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== O && (O = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = P.hardwareClassification;
            (P.hardwareClassificationVersion = _.V0),
                (P.hardwareClassification = t),
                P.hardwareClassification === c.k9.MEETS_AUTO_ENABLE &&
                    n !== c.k9.MEETS_AUTO_ENABLE &&
                    (P.clipsSettings.clipsEnabled = !0);
            let r = P.hardwareClassificationForDecoupled;
            (P.hardwareClassificationForDecoupled = t),
                P.hardwareClassificationForDecoupled === c.k9.MEETS_AUTO_ENABLE &&
                    r !== c.k9.MEETS_AUTO_ENABLE &&
                    P.clipsSettings.clipsEnabled &&
                    (P.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((C = null), !P.clipsSettings.clipsEnabled)) return !1;
            R = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            C = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case _.P4.Error:
                    C = null;
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
    V = G;
