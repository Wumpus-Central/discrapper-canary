"use strict";
n.d(t, { Ay: () => V, _c: () => I, he: () => A }), n(321073), n(938796);
var i = n(284009),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(228366),
    l = n(77729),
    u = n(952818),
    c = n(652896),
    d = n(495544),
    _ = n(287809),
    h = n(741394),
    f = n(372684),
    p = n(458977),
    E = n(696016),
    m = n(652215),
    g = n(753070);
let A = "default",
    I = "Discord Clips",
    T = {},
    S = {},
    y = {},
    C = [],
    N = 0,
    v = null,
    R = null,
    O = null,
    b = {},
    D = {},
    L = null,
    w = new Set(),
    M = new Map(),
    P = {
        clipsEnabled: !1,
        storageLocation: A,
        clipsQuality: { resolution: g.on.RESOLUTION_1080, frameRate: g.kn.FPS_30 },
        clipsLength: E.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: E.on.ALL,
        maxAutoClips: E.T2,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    x = {
        clipsSettings: P,
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
    if (x.clipsSettings.storageLocation === A && null != l.A && null != l.A.app) {
        try {
            let t = await l.A.app.getPath("videos");
            e = (0, h.CN)(t, I);
        } catch (t) {
            E.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await l.A.app.getPath("documents"));
        }
        (x.clipsSettings.storageLocation = e), F.emitChange();
    }
}
function U(e, t, n) {
    if (!p.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== d.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = M.get(e);
        null == t && ((t = new Set()), M.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class G extends a.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : P, newClipsCount: 0 }),
        (e) => {
            let t = { ...P, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: P.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(941327).Ay.getHardwareEncoding();
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
                        ? P.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? P.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? P.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? P.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? P.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? P.showPovClipsInGallery,
            },
        }),
    ];
    initialize(e) {
        null != e && (x = e), k(), this.waitFor(u.Ay);
    }
    getClips() {
        return T;
    }
    getClipById(e) {
        return T[e];
    }
    getClipByRemoteId(e) {
        let t = y[e];
        if (null != t) return T[t];
    }
    getClipCandidates() {
        return C;
    }
    getClipCandidateById(e) {
        return S[e];
    }
    getUserAgnosticState() {
        return x;
    }
    getSettings() {
        return x.clipsSettings;
    }
    getEnableAutoclipping() {
        let e;
        return (
            x.clipsSettings.enableAutoclipping ??
            (null != (e = _.default.getCurrentUser()) && (0, s.Lt)(e.flags, m.nhx.STAFF))
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
        return x.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return x.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return x.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return N >= E.VP;
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
        return w.has(e);
    }
    getExportingClipIds() {
        return w;
    }
    wasClipSharedInChannel(e, t) {
        let n = M.get(t);
        return n?.has(e) ?? !1;
    }
}
let F = new G(o.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            x = { ...x, clipsSettings: { ...x.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (N = Math.max(N - 1, 0)),
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
                    (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                    (T[t.id] = t),
                    null != t.remoteClipId && (y[t.remoteClipId] = t.id),
                    (x.hasClips = !0));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (R = { applicationName: t.applicationName, ...R, ended: !0, newClipIds: [...(R?.newClipIds ?? []), t.id] }),
                r()(
                    null != O && O.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (O = { ...O, candidateClipsPromoted: O.candidateClipsPromoted + 1 }),
                (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                (C = C.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete S[t.id],
                (T[t.id] = t),
                (x.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (N += 1), (x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === E.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            N = Math.max(N - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            t === f.RC.BUFFER_WARMING_UP && (N = Math.max(N - 1, 0));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!x.clipsSettings.clipsEnabled) return !1;
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
            if (null == R || (0, c.Iy)(t).ownerId !== d.default.getId()) return !1;
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
            x.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            x.newClipIds = x.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((T = {}), (C = []), e.clips))
                t.isCandidate
                    ? ((S[t.id] = t), C.push(t))
                    : ((T[t.id] = t), null != t.remoteClipId && (y[t.remoteClipId] = t.id));
            x.hasClips = Object.keys(T).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = T[e.id];
            (C = C.filter((t) => {
                let { id: n } = t;
                return e.id !== n;
            })),
                delete S[e.id],
                delete T[e.id],
                t?.remoteClipId != null && delete y[t.remoteClipId],
                (x.hasClips = Object.keys(T).length > 0);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (S[t.id] = t) : ((T[t.id] = t), null != t.remoteClipId && (y[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            D[e.userId] = {
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
                n = x.hardwareClassification;
            (x.hardwareClassificationVersion = E.V0),
                (x.hardwareClassification = t),
                x.hardwareClassification === f.k9.MEETS_AUTO_ENABLE &&
                    n !== f.k9.MEETS_AUTO_ENABLE &&
                    (x.clipsSettings.clipsEnabled = !0);
            let i = x.hardwareClassificationForDecoupled;
            (x.hardwareClassificationForDecoupled = t),
                x.hardwareClassificationForDecoupled === f.k9.MEETS_AUTO_ENABLE &&
                    i !== f.k9.MEETS_AUTO_ENABLE &&
                    x.clipsSettings.clipsEnabled &&
                    (x.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((L = null), !x.clipsSettings.clipsEnabled)) return !1;
            R = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            L = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case E.P4.Error:
                    L = null;
                    break;
                case E.P4.Disabled:
                case E.P4.Enabled:
                    (x.clipsEducationState.dismissedAt = Date.now()),
                        (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (x.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            w = new Set(t ?? []);
        },
        MESSAGE_CREATE: function (e) {
            return U(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || U(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            M.clear(), (R = null), (v = null), (D = {});
        },
    }),
    V = F;
