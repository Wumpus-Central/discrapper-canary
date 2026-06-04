"use strict";
n.d(t, { Ay: () => H, _c: () => g, he: () => m }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(952818),
    l = n(652896),
    u = n(495544),
    c = n(287809),
    d = n(741394),
    _ = n(372684),
    h = n(458977),
    f = n(696016),
    p = n(652215),
    E = n(753070);
let m = "default",
    g = "Discord Clips",
    A = [],
    I = [],
    T = {},
    S = {},
    y = {},
    N = [],
    v = [],
    C = [],
    R = 0,
    O = null,
    b = null,
    D = {},
    L = null,
    w = [],
    M = null,
    P = {},
    x = new Map(),
    k = {
        clipsEnabled: !1,
        storageLocation: m,
        clipsQuality: { resolution: E.on.RESOLUTION_1080, frameRate: E.kn.FPS_30 },
        clipsLength: f.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: f.on.ALL,
        maxAutoClips: f.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
    },
    U = {
        clipsSettings: k,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function G() {
    let e;
    if (U.clipsSettings.storageLocation === m && null != a.A && null != a.A.app) {
        try {
            let t = await a.A.app.getPath("videos");
            e = (0, d.CN)(t, g);
        } catch (t) {
            f.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await a.A.app.getPath("documents"));
        }
        (U.clipsSettings.storageLocation = e), B.emitChange();
    }
}
function F(e, t, n) {
    if (!h.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== u.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = x.get(e);
        null == t && ((t = new Set()), x.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class V extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : k, newClipsCount: 0 }),
        (e) => {
            let t = { ...k, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: k.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(728555).Ay.getHardwareEncoding();
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
                        ? k.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? k.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? k.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? k.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? k.enableAutoclipping,
            },
        }),
    ];
    initialize(e) {
        null != e && (U = e), G(), this.waitFor(o.Ay);
    }
    getClips() {
        return I.map((e) => T[e] ?? null).filter((e) => null != e);
    }
    getClipIds() {
        return I;
    }
    getClipById(e) {
        return T[e];
    }
    getClipByRemoteId(e) {
        let t = y[e];
        if (null != t) return T[t];
    }
    getPendingClips() {
        return N;
    }
    getPendingClipCandidates() {
        return v;
    }
    getClipCandidates() {
        return C;
    }
    getClipCandidateById(e) {
        return S[e];
    }
    getUserAgnosticState() {
        return U;
    }
    getSettings() {
        return U.clipsSettings;
    }
    getEnableAutoclipping() {
        let e;
        return (
            U.clipsSettings.enableAutoclipping ??
            (null != (e = c.default.getCurrentUser()) && (0, i.Lt)(e.flags, p.nhx.STAFF))
        );
    }
    getLastClipsSession() {
        return b;
    }
    getClipsWarningShown(e) {
        return O === e;
    }
    getActiveAnimation() {
        return M;
    }
    getStreamClipAnimations(e) {
        return P[e] ?? A;
    }
    hasAnyClipAnimations() {
        return Object.values(P).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return U.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return U.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return U.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return R >= f.VP;
    }
    getLastClipsError() {
        return L;
    }
    isClipsEnabledForUser(e) {
        return D[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return D[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return D[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return U.hasClips;
    }
    hasTakenDecoupledClip() {
        return U.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return U.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return U.newClipIds;
    }
    isClipExporting(e) {
        return w.includes(e);
    }
    getExportingClipIds() {
        return w;
    }
    wasClipSharedInChannel(e, t) {
        let n = x.get(t);
        return n?.has(e) ?? !1;
    }
}
let B = new V(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            U = { ...U, clipsSettings: { ...U.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            if (((R = Math.max(R - 1, 0)), t.isCandidate)) {
                (v = v.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                    (C = [t, ...C]),
                    (S[t.id] = t);
                return;
            }
            (b = { applicationName: t.applicationName, ended: !1, ...b, newClipIds: [...(b?.newClipIds ?? []), t.id] }),
                (U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }),
                (N = N.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (I = I.filter((e) => e !== t.id)),
                (T[t.id] = t),
                null != t.remoteClipId && (y[t.remoteClipId] = t.id),
                (I = [t.id, ...I]),
                (U.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            v = [t, ...v];
        },
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: function (e) {
            let { clipId: t } = e;
            v = v.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (b = { applicationName: t.applicationName, ...b, ended: !0, newClipIds: [...(b?.newClipIds ?? []), t.id] }),
                (U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }),
                (C = C.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete S[t.id],
                (T[t.id] = t),
                (I = [t.id, ...I]),
                (U.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
            let { clip: t } = e;
            N = [t, ...N];
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
            let { clipId: t } = e;
            N = N.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t, streamKey: n, thumbnail: i } = e;
            if (
                ((R += 1),
                (U.hasTakenDecoupledClip = U.hasTakenDecoupledClip || t === f.Fv.DECOUPLED),
                null != n && null != i)
            ) {
                let e = Date.now();
                (M = M ?? e), (P[n] = [...(P[n] ?? []), { timestamp: e, thumbnail: i }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            R = Math.max(R - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            M === n && (M = null), null == n ? (P[t] = []) : (P[t] = P[t].filter((e) => e.timestamp !== n));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!U.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                let e = o.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            b = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((M = null), (P[t] = []), null == b || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            b = 0 === b.newClipIds.length ? null : { ...b, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == b) return !1;
            b = null;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            U.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            U.newClipIds = U.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((I = []), (C = []), e.clips))
                t.isCandidate
                    ? ((S[t.id] = t), C.push(t))
                    : ((T[t.id] = t), I.push(t.id), null != t.remoteClipId && (y[t.remoteClipId] = t.id));
            U.hasClips = I.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = T[e.id];
            (I = I.filter((t) => e.id !== t)),
                (C = C.filter((t) => {
                    let { id: n } = t;
                    return e.id !== n;
                })),
                delete S[e.id],
                delete T[e.id],
                t?.remoteClipId != null && delete y[t.remoteClipId],
                0 === I.length && (U.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (S[t.id] = t) : ((T[t.id] = t), null != t.remoteClipId && (y[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            D[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, p.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, p.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, i.Lt)(e.flags, p.Ajs.ALLOW_ANY_VIEWER_CLIPS),
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
                n = U.hardwareClassification;
            (U.hardwareClassificationVersion = f.V0),
                (U.hardwareClassification = t),
                U.hardwareClassification === _.k9.MEETS_AUTO_ENABLE &&
                    n !== _.k9.MEETS_AUTO_ENABLE &&
                    (U.clipsSettings.clipsEnabled = !0);
            let i = U.hardwareClassificationForDecoupled;
            (U.hardwareClassificationForDecoupled = t),
                U.hardwareClassificationForDecoupled === _.k9.MEETS_AUTO_ENABLE &&
                    i !== _.k9.MEETS_AUTO_ENABLE &&
                    U.clipsSettings.clipsEnabled &&
                    (U.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((L = null), !U.clipsSettings.clipsEnabled)) return !1;
            b = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            L = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case f.P4.Error:
                    L = null;
                    break;
                case f.P4.Disabled:
                case f.P4.Enabled:
                    (U.clipsEducationState.dismissedAt = Date.now()),
                        (U.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (U.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (U.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            w = t ?? [];
        },
        MESSAGE_CREATE: function (e) {
            return F(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || F(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            x.clear(), (b = null), (O = null), (D = {});
        },
    }),
    H = B;
