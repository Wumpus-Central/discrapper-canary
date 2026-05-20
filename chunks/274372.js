"use strict";
n.d(t, { A: () => F }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(952818),
    l = n(652896),
    u = n(495544);
n(741394);
var c = n(734066),
    d = n(372684),
    _ = n(696016),
    f = n(652215),
    h = n(753070);
let p = "default",
    E = [],
    m = [],
    g = {},
    A = {},
    I = {},
    T = [],
    S = [],
    N = [],
    y = 0,
    C = null,
    v = null,
    O = {},
    R = null,
    b = [],
    D = null,
    L = {},
    w = new Map(),
    M = {
        clipsEnabled: !1,
        storageLocation: p,
        clipsQuality: { resolution: h.on.RESOLUTION_1080, frameRate: h.kn.FPS_30 },
        clipsLength: _.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: _.on.ALL,
        maxAutoClips: _.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
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
        remindersDismissedUntil: null,
    };
async function x() {
    if (P.clipsSettings.storageLocation !== p || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    (P.clipsSettings.storageLocation = e), G.emitChange();
}
function U(e, t, n) {
    if (!(0, c.J)() || n !== u.default.getId()) return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = w.get(e);
        null == t && ((t = new Set()), w.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class k extends r.Ay.DeviceSettingsStore {
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
            let t = n(761853).Ay.getHardwareEncoding();
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
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({ ...e, remindersDismissedUntil: e.remindersDismissedUntil ?? null }),
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
        return N;
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
        return v;
    }
    getClipsWarningShown(e) {
        return C === e;
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
        return y >= _.VP;
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
    canShowReminders() {
        return (
            !!P.clipsSettings.remindersEnabled &&
            (null == P.remindersDismissedUntil || Date.now() >= P.remindersDismissedUntil)
        );
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
let G = new k(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            P = { ...P, clipsSettings: { ...P.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            if (((y = Math.max(y - 1, 0)), t.isCandidate)) {
                (S = S.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                    (N = [t, ...N]),
                    (A[t.id] = t);
                return;
            }
            (v = { applicationName: t.applicationName, ended: !1, ...v, newClipIds: [...(v?.newClipIds ?? []), t.id] }),
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
            (v = { applicationName: t.applicationName, ...v, ended: !0, newClipIds: [...(v?.newClipIds ?? []), t.id] }),
                (P = { ...P, newClipIds: [...(P.newClipIds ?? []), t.id] }),
                (N = N.filter((e) => {
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
            let { clipType: t, streamKey: n, thumbnail: i } = e;
            if (
                ((y += 1),
                (P.hasTakenDecoupledClip = P.hasTakenDecoupledClip || t === _.Fv.DECOUPLED),
                null != n && null != i)
            ) {
                let e = Date.now();
                (D = D ?? e), (L[n] = [...(L[n] ?? []), { timestamp: e, thumbnail: i }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            y = Math.max(y - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            D === n && (D = null), null == n ? (L[t] = []) : (L[t] = L[t].filter((e) => e.timestamp !== n));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!P.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                let e = o.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            v = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((D = null), (L[t] = []), null == v || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            v = 0 === v.newClipIds.length ? null : { ...v, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == v) return !1;
            v = null;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            P.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            P.newClipIds = P.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((m = []), (N = []), e.clips))
                t.isCandidate
                    ? ((A[t.id] = t), N.push(t))
                    : ((g[t.id] = t), m.push(t.id), null != t.remoteClipId && (I[t.remoteClipId] = t.id));
            P.hasClips = m.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = g[e.id];
            (m = m.filter((t) => e.id !== t)),
                (N = N.filter((t) => {
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
                clipsEnabled: (0, i.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, i.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            C = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== C && (C = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = P.hardwareClassification;
            (P.hardwareClassificationVersion = _.V0),
                (P.hardwareClassification = t),
                P.hardwareClassification === d.k9.MEETS_AUTO_ENABLE &&
                    n !== d.k9.MEETS_AUTO_ENABLE &&
                    (P.clipsSettings.clipsEnabled = !0);
            let i = P.hardwareClassificationForDecoupled;
            (P.hardwareClassificationForDecoupled = t),
                P.hardwareClassificationForDecoupled === d.k9.MEETS_AUTO_ENABLE &&
                    i !== d.k9.MEETS_AUTO_ENABLE &&
                    P.clipsSettings.clipsEnabled &&
                    (P.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((R = null), !P.clipsSettings.clipsEnabled)) return !1;
            v = { applicationName: t, newClipIds: [], ended: !1 };
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
        CLIPS_SNOOZE_REMINDERS: function (e) {
            let { until: t } = e;
            P = { ...P, remindersDismissedUntil: t };
        },
        CLIPS_CLEAR_REMINDER_SNOOZE: function () {
            P = { ...P, remindersDismissedUntil: null };
        },
        MESSAGE_CREATE: function (e) {
            return U(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || U(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
    }),
    F = G;
