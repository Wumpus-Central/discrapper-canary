"use strict";
n.d(t, { Ay: () => B, _c: () => m, he: () => T }), n(321073), n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(228366),
    o = n(77729),
    d = n(952818),
    c = n(652896),
    u = n(280450),
    _ = n(287809),
    E = n(741394),
    A = n(372684),
    h = n(458977),
    I = n(696016),
    f = n(652215),
    p = n(753070);
let T = "default",
    m = "Discord Clips",
    g = {},
    S = {},
    N = {},
    C = [],
    O = 0,
    R = null,
    L = null,
    D = null,
    y = {},
    v = {},
    b = null,
    M = new Set(),
    P = !1,
    U = new Map(),
    w = {
        clipsEnabled: !1,
        storageLocation: T,
        clipsQuality: { resolution: p.on.RESOLUTION_1080, frameRate: p.kn.FPS_30 },
        clipsLength: I.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: I.on.ALL,
        maxAutoClips: I.T2,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    G = {
        clipsSettings: w,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function x() {
    let e;
    if (G.clipsSettings.storageLocation === T && null != o.A && null != o.A.app) {
        try {
            let t = await o.A.app.getPath("videos");
            e = (0, E.CN)(t, m);
        } catch (t) {
            I.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await o.A.app.getPath("documents"));
        }
        (G.clipsSettings.storageLocation = e), V.emitChange();
    }
}
function k(e, t, n) {
    if (!h.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== u.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = U.get(e);
        null == t && ((t = new Set()), U.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class F extends s.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : w, newClipsCount: 0 }),
        (e) => {
            let t = { ...w, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: w.decoupledClipsEnabled } }),
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
                        ? w.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? w.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? w.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? w.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? w.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? w.showPovClipsInGallery,
            },
        }),
    ];
    initialize(e) {
        null != e && (G = e), x(), this.waitFor(d.Ay);
    }
    getClips() {
        return g;
    }
    getClipById(e) {
        return g[e];
    }
    getClipByRemoteId(e) {
        let t = N[e];
        if (null != t) return g[t];
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
            (null != (e = _.default.getCurrentUser()) && (e.isStaff() || e.isStaffPersonal()))
        );
    }
    hasUserSetAutoclippingSettings() {
        return null != G.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return L;
    }
    getCurrentClipsSession() {
        return D;
    }
    getHistoricalClipsSessionById(e) {
        return y[e];
    }
    devSetLastClipsSession(e) {
        (L = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return R === e;
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
        return O >= I.VP;
    }
    getLastClipsError() {
        return b;
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
        return M.has(e);
    }
    getExportingClipIds() {
        return M;
    }
    isAutoStashEnabled() {
        return P;
    }
    wasClipSharedInChannel(e, t) {
        let n = U.get(t);
        return n?.has(e) ?? !1;
    }
}
let V = new F(l.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            G = { ...G, clipsSettings: { ...G.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (O = Math.max(O - 1, 0)),
                t.isCandidate && ((C = [t, ...C]), (S[t.id] = t)),
                null != D &&
                    (D = {
                        ...D,
                        manualClipsSaved: D.manualClipsSaved + +("manual" === t.clipMethod),
                        candidateClipsSaved: D.candidateClipsSaved + +!!t.isCandidate,
                    }),
                t.isCandidate ||
                    ((L = {
                        applicationName: t.applicationName,
                        ended: !1,
                        ...L,
                        newClipIds: [...(L?.newClipIds ?? []), t.id],
                    }),
                    (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                    (g[t.id] = t),
                    null != t.remoteClipId && (N[t.remoteClipId] = t.id),
                    (G.hasClips = !0));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (L = { applicationName: t.applicationName, ...L, ended: !0, newClipIds: [...(L?.newClipIds ?? []), t.id] }),
                r()(
                    null != D && D.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (D = { ...D, candidateClipsPromoted: D.candidateClipsPromoted + 1 }),
                (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                (C = C.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete S[t.id],
                (g[t.id] = t),
                (G.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (O += 1), (G.hasTakenDecoupledClip = G.hasTakenDecoupledClip || t === I.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            O = Math.max(O - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === A.RC.BUFFER_WARMING_UP || t === A.RC.BRIDGE_SHUTDOWN) && (O = Math.max(O - 1, 0));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!G.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                let e = d.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            L = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (null == L || (0, c.Iy)(t).ownerId !== u.default.getId()) return !1;
            L = 0 === L.newClipIds.length ? null : { ...L, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == L) return !1;
            L = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            null != D && (y[D.id] = D),
                (D = { id: t, gameId: n, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 });
        },
        CLIPS_SESSION_STOP: function () {
            if (null == D) return !1;
            (y[D.id] = D), (D = null);
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            G.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            G.newClipIds = G.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((g = {}), (C = []), e.clips))
                t.isCandidate
                    ? ((S[t.id] = t), C.push(t))
                    : ((g[t.id] = t), null != t.remoteClipId && (N[t.remoteClipId] = t.id));
            G.hasClips = Object.keys(g).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = g[e.id];
            (C = C.filter((t) => {
                let { id: n } = t;
                return e.id !== n;
            })),
                delete S[e.id],
                delete g[e.id],
                t?.remoteClipId != null && delete N[t.remoteClipId],
                (G.hasClips = Object.keys(g).length > 0);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (S[t.id] = t) : ((g[t.id] = t), null != t.remoteClipId && (N[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            v[e.userId] = {
                clipsEnabled: (0, a.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, a.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, a.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            R = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== R && (R = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = G.hardwareClassification;
            (G.hardwareClassificationVersion = I.V0),
                (G.hardwareClassification = t),
                G.hardwareClassification === A.k9.MEETS_AUTO_ENABLE &&
                    n !== A.k9.MEETS_AUTO_ENABLE &&
                    (G.clipsSettings.clipsEnabled = !0);
            let i = G.hardwareClassificationForDecoupled;
            (G.hardwareClassificationForDecoupled = t),
                G.hardwareClassificationForDecoupled === A.k9.MEETS_AUTO_ENABLE &&
                    i !== A.k9.MEETS_AUTO_ENABLE &&
                    G.clipsSettings.clipsEnabled &&
                    (G.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((b = null), !G.clipsSettings.clipsEnabled)) return !1;
            L = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            b = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case I.P4.Error:
                    b = null;
                    break;
                case I.P4.Disabled:
                case I.P4.Enabled:
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
            M = new Set(t ?? []);
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            P = t;
        },
        MESSAGE_CREATE: function (e) {
            return k(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || k(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            U.clear(), (L = null), (R = null), (v = {});
        },
    }),
    B = V;
