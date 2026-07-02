"use strict";
n.d(t, { Ay: () => B, _c: () => I, he: () => A }), n(321073), n(938796);
var i = n(284009),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(228366),
    l = n(77729),
    u = n(952818),
    d = n(652896),
    c = n(495544),
    _ = n(287809),
    h = n(741394),
    f = n(372684),
    E = n(458977),
    p = n(696016),
    m = n(652215),
    g = n(753070);
let A = "default",
    I = "Discord Clips",
    T = {},
    S = {},
    N = {},
    C = [],
    y = 0,
    v = null,
    R = null,
    O = null,
    b = {},
    L = {},
    D = null,
    P = new Set(),
    w = !1,
    M = new Map(),
    x = {
        clipsEnabled: !1,
        storageLocation: A,
        clipsQuality: { resolution: g.on.RESOLUTION_1080, frameRate: g.kn.FPS_30 },
        clipsLength: p.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: p.on.ALL,
        maxAutoClips: p.T2,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    U = {
        clipsSettings: x,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function k() {
    let e;
    if (U.clipsSettings.storageLocation === A && null != l.A && null != l.A.app) {
        try {
            let t = await l.A.app.getPath("videos");
            e = (0, h.CN)(t, I);
        } catch (t) {
            p.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await l.A.app.getPath("documents"));
        }
        (U.clipsSettings.storageLocation = e), F.emitChange();
    }
}
function G(e, t, n) {
    if (!E.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== c.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = M.get(e);
        null == t && ((t = new Set()), M.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class V extends a.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : x, newClipsCount: 0 }),
        (e) => {
            let t = { ...x, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: x.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(451409).Ay.getHardwareEncoding();
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
                        ? x.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? x.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? x.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? x.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? x.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? x.showPovClipsInGallery,
            },
        }),
    ];
    initialize(e) {
        null != e && (U = e), k(), this.waitFor(u.Ay);
    }
    getClips() {
        return T;
    }
    getClipById(e) {
        return T[e];
    }
    getClipByRemoteId(e) {
        let t = N[e];
        if (null != t) return T[t];
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
            (null != (e = _.default.getCurrentUser()) && (e.isStaff() || e.isStaffPersonal()))
        );
    }
    getLastClipsSession() {
        return R;
    }
    getCurrentClipsSession() {
        return O;
    }
    getHistoricalClipsSessionById(e) {
        return b[e];
    }
    devSetLastClipsSession(e) {
        (R = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return v === e;
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
        return y >= p.VP;
    }
    getLastClipsError() {
        return D;
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
        return P.has(e);
    }
    getExportingClipIds() {
        return P;
    }
    isAutoStashEnabled() {
        return w;
    }
    wasClipSharedInChannel(e, t) {
        let n = M.get(t);
        return n?.has(e) ?? !1;
    }
}
let F = new V(o.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            U = { ...U, clipsSettings: { ...U.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (y = Math.max(y - 1, 0)),
                t.isCandidate && ((C = [t, ...C]), (S[t.id] = t)),
                null != O &&
                    (O = {
                        ...O,
                        manualClipsSaved: O.manualClipsSaved + +("manual" === t.clipMethod),
                        candidateClipsSaved: O.candidateClipsSaved + +!!t.isCandidate,
                    }),
                t.isCandidate ||
                    ((R = {
                        applicationName: t.applicationName,
                        ended: !1,
                        ...R,
                        newClipIds: [...(R?.newClipIds ?? []), t.id],
                    }),
                    (U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }),
                    (T[t.id] = t),
                    null != t.remoteClipId && (N[t.remoteClipId] = t.id),
                    (U.hasClips = !0));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (R = { applicationName: t.applicationName, ...R, ended: !0, newClipIds: [...(R?.newClipIds ?? []), t.id] }),
                r()(
                    null != O && O.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (O = { ...O, candidateClipsPromoted: O.candidateClipsPromoted + 1 }),
                (U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }),
                (C = C.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete S[t.id],
                (T[t.id] = t),
                (U.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (y += 1), (U.hasTakenDecoupledClip = U.hasTakenDecoupledClip || t === p.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            y = Math.max(y - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === f.RC.BUFFER_WARMING_UP || t === f.RC.BRIDGE_SHUTDOWN) && (y = Math.max(y - 1, 0));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!U.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                let e = u.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            R = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (null == R || (0, d.Iy)(t).ownerId !== c.default.getId()) return !1;
            R = 0 === R.newClipIds.length ? null : { ...R, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == R) return !1;
            R = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            null != O && (b[O.id] = O),
                (O = { id: t, gameId: n, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 });
        },
        CLIPS_SESSION_STOP: function () {
            if (null == O) return !1;
            (b[O.id] = O), (O = null);
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            U.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            U.newClipIds = U.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((T = {}), (C = []), e.clips))
                t.isCandidate
                    ? ((S[t.id] = t), C.push(t))
                    : ((T[t.id] = t), null != t.remoteClipId && (N[t.remoteClipId] = t.id));
            U.hasClips = Object.keys(T).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = T[e.id];
            (C = C.filter((t) => {
                let { id: n } = t;
                return e.id !== n;
            })),
                delete S[e.id],
                delete T[e.id],
                t?.remoteClipId != null && delete N[t.remoteClipId],
                (U.hasClips = Object.keys(T).length > 0);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (S[t.id] = t) : ((T[t.id] = t), null != t.remoteClipId && (N[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            L[e.userId] = {
                clipsEnabled: (0, s.Lt)(e.flags, m.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, s.Lt)(e.flags, m.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, s.Lt)(e.flags, m.Ajs.ALLOW_ANY_VIEWER_CLIPS),
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
                n = U.hardwareClassification;
            (U.hardwareClassificationVersion = p.V0),
                (U.hardwareClassification = t),
                U.hardwareClassification === f.k9.MEETS_AUTO_ENABLE &&
                    n !== f.k9.MEETS_AUTO_ENABLE &&
                    (U.clipsSettings.clipsEnabled = !0);
            let i = U.hardwareClassificationForDecoupled;
            (U.hardwareClassificationForDecoupled = t),
                U.hardwareClassificationForDecoupled === f.k9.MEETS_AUTO_ENABLE &&
                    i !== f.k9.MEETS_AUTO_ENABLE &&
                    U.clipsSettings.clipsEnabled &&
                    (U.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((D = null), !U.clipsSettings.clipsEnabled)) return !1;
            R = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            D = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case p.P4.Error:
                    D = null;
                    break;
                case p.P4.Disabled:
                case p.P4.Enabled:
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
            P = new Set(t ?? []);
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            w = t;
        },
        MESSAGE_CREATE: function (e) {
            return G(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || G(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            M.clear(), (R = null), (v = null), (L = {});
        },
    }),
    B = F;
