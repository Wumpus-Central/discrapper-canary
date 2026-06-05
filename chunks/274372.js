"use strict";
n.d(t, { Ay: () => j, _c: () => g, he: () => m }), n(321073), n(938796);
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
    D = null,
    L = {},
    w = null,
    M = [],
    P = null,
    x = {},
    k = new Map(),
    U = {
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
        showPovClipsInGallery: !1,
    },
    G = {
        clipsSettings: U,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function F() {
    let e;
    if (G.clipsSettings.storageLocation === m && null != a.A && null != a.A.app) {
        try {
            let t = await a.A.app.getPath("videos");
            e = (0, d.CN)(t, g);
        } catch (t) {
            f.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await a.A.app.getPath("documents"));
        }
        (G.clipsSettings.storageLocation = e), H.emitChange();
    }
}
function V(e, t, n) {
    if (!h.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== u.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = k.get(e);
        null == t && ((t = new Set()), k.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class B extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : U, newClipsCount: 0 }),
        (e) => {
            let t = { ...U, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: U.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(555975).Ay.getHardwareEncoding();
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
                        ? U.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? U.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? U.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? U.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? U.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? U.showPovClipsInGallery,
            },
        }),
    ];
    initialize(e) {
        null != e && (G = e), F(), this.waitFor(o.Ay);
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
        return G;
    }
    getSettings() {
        return G.clipsSettings;
    }
    getEnableAutoclipping() {
        let e;
        return (
            G.clipsSettings.enableAutoclipping ??
            (null != (e = c.default.getCurrentUser()) && (0, i.Lt)(e.flags, p.nhx.STAFF))
        );
    }
    getLastClipsSession() {
        return b;
    }
    getCurrentClipsSessionId() {
        return D;
    }
    devSetLastClipsSession(e) {
        (b = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return O === e;
    }
    getActiveAnimation() {
        return P;
    }
    getStreamClipAnimations(e) {
        return x[e] ?? A;
    }
    hasAnyClipAnimations() {
        return Object.values(x).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return G.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return G.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return G.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return R >= f.VP;
    }
    getLastClipsError() {
        return w;
    }
    isClipsEnabledForUser(e) {
        return L[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return L[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return L[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return G.hasClips;
    }
    hasTakenDecoupledClip() {
        return G.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return G.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return G.newClipIds;
    }
    isClipExporting(e) {
        return M.includes(e);
    }
    getExportingClipIds() {
        return M;
    }
    wasClipSharedInChannel(e, t) {
        let n = k.get(t);
        return n?.has(e) ?? !1;
    }
}
let H = new B(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            G = { ...G, clipsSettings: { ...G.clipsSettings, ...t } };
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
                (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                (N = N.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (I = I.filter((e) => e !== t.id)),
                (T[t.id] = t),
                null != t.remoteClipId && (y[t.remoteClipId] = t.id),
                (I = [t.id, ...I]),
                (G.hasClips = !0);
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
                (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                (C = C.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete S[t.id],
                (T[t.id] = t),
                (I = [t.id, ...I]),
                (G.hasClips = !0);
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
                (G.hasTakenDecoupledClip = G.hasTakenDecoupledClip || t === f.Fv.DECOUPLED),
                null != n && null != i)
            ) {
                let e = Date.now();
                (P = P ?? e), (x[n] = [...(x[n] ?? []), { timestamp: e, thumbnail: i }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            R = Math.max(R - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            P === n && (P = null), null == n ? (x[t] = []) : (x[t] = x[t].filter((e) => e.timestamp !== n));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!G.clipsSettings.clipsEnabled) return !1;
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
            if (((P = null), (x[t] = []), null == b || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            b = 0 === b.newClipIds.length ? null : { ...b, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == b) return !1;
            b = null;
        },
        CLIPS_SESSION_UPDATE: function (e) {
            let { sessionId: t } = e;
            D = t;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            G.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            G.newClipIds = G.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((I = []), (C = []), e.clips))
                t.isCandidate
                    ? ((S[t.id] = t), C.push(t))
                    : ((T[t.id] = t), I.push(t.id), null != t.remoteClipId && (y[t.remoteClipId] = t.id));
            G.hasClips = I.length > 0;
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
                0 === I.length && (G.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (S[t.id] = t) : ((T[t.id] = t), null != t.remoteClipId && (y[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            L[e.userId] = {
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
                n = G.hardwareClassification;
            (G.hardwareClassificationVersion = f.V0),
                (G.hardwareClassification = t),
                G.hardwareClassification === _.k9.MEETS_AUTO_ENABLE &&
                    n !== _.k9.MEETS_AUTO_ENABLE &&
                    (G.clipsSettings.clipsEnabled = !0);
            let i = G.hardwareClassificationForDecoupled;
            (G.hardwareClassificationForDecoupled = t),
                G.hardwareClassificationForDecoupled === _.k9.MEETS_AUTO_ENABLE &&
                    i !== _.k9.MEETS_AUTO_ENABLE &&
                    G.clipsSettings.clipsEnabled &&
                    (G.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((w = null), !G.clipsSettings.clipsEnabled)) return !1;
            b = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            w = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case f.P4.Error:
                    w = null;
                    break;
                case f.P4.Disabled:
                case f.P4.Enabled:
                    (G.clipsEducationState.dismissedAt = Date.now()),
                        (G.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (G.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (G.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            M = t ?? [];
        },
        MESSAGE_CREATE: function (e) {
            return V(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || V(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            k.clear(), (b = null), (O = null), (L = {});
        },
    }),
    j = H;
