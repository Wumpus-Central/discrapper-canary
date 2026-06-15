"use strict";
n.d(t, { Ay: () => j, _c: () => I, he: () => A }), n(321073), n(938796);
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
    T = [],
    S = {},
    y = {},
    N = {},
    v = [],
    C = [],
    R = [],
    O = 0,
    b = null,
    D = null,
    L = null,
    w = {},
    M = {},
    P = null,
    x = [],
    k = new Map(),
    U = {
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
    if (G.clipsSettings.storageLocation === A && null != l.A && null != l.A.app) {
        try {
            let t = await l.A.app.getPath("videos");
            e = (0, h.CN)(t, I);
        } catch (t) {
            E.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await l.A.app.getPath("documents"));
        }
        (G.clipsSettings.storageLocation = e), H.emitChange();
    }
}
function V(e, t, n) {
    if (!p.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== d.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = k.get(e);
        null == t && ((t = new Set()), k.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class B extends a.Ay.DeviceSettingsStore {
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
            let t = n(136491).Ay.getHardwareEncoding();
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
        null != e && (G = e), F(), this.waitFor(u.Ay);
    }
    getClips() {
        return T.map((e) => S[e] ?? null).filter((e) => null != e);
    }
    getClipIds() {
        return T;
    }
    getClipById(e) {
        return S[e];
    }
    getClipByRemoteId(e) {
        let t = N[e];
        if (null != t) return S[t];
    }
    getPendingClips() {
        return v;
    }
    getPendingClipCandidates() {
        return C;
    }
    getClipCandidates() {
        return R;
    }
    getClipCandidateById(e) {
        return y[e];
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
            (null != (e = _.default.getCurrentUser()) && (0, s.Lt)(e.flags, m.nhx.STAFF))
        );
    }
    getLastClipsSession() {
        return D;
    }
    getCurrentClipsSession() {
        return L;
    }
    getHistoricalClipsSessionById(e) {
        return w[e];
    }
    devSetLastClipsSession(e) {
        (D = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return b === e;
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
        return O >= E.VP;
    }
    getLastClipsError() {
        return P;
    }
    isClipsEnabledForUser(e) {
        return M[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return M[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return M[e]?.allowAnyViewerClips ?? !1;
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
        return x.includes(e);
    }
    getExportingClipIds() {
        return x;
    }
    wasClipSharedInChannel(e, t) {
        let n = k.get(t);
        return n?.has(e) ?? !1;
    }
}
let H = new B(o.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            G = { ...G, clipsSettings: { ...G.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (O = Math.max(O - 1, 0)),
                t.isCandidate &&
                    ((C = C.filter((e) => {
                        let { id: n } = e;
                        return n !== t.id;
                    })),
                    (R = [t, ...R]),
                    (y[t.id] = t)),
                null != L &&
                    (L = {
                        ...L,
                        manualClipsSaved: L.manualClipsSaved + +("manual" === t.clipMethod),
                        candidateClipsSaved: L.candidateClipsSaved + +!!t.isCandidate,
                    }),
                t.isCandidate ||
                    ((D = {
                        applicationName: t.applicationName,
                        ended: !1,
                        ...D,
                        newClipIds: [...(D?.newClipIds ?? []), t.id],
                    }),
                    (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                    (v = v.filter((e) => {
                        let { id: n } = e;
                        return n !== t.id;
                    })),
                    (T = T.filter((e) => e !== t.id)),
                    (S[t.id] = t),
                    null != t.remoteClipId && (N[t.remoteClipId] = t.id),
                    (T = [t.id, ...T]),
                    (G.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            C = [t, ...C];
        },
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: function (e) {
            let { clipId: t } = e;
            C = C.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (D = { applicationName: t.applicationName, ...D, ended: !0, newClipIds: [...(D?.newClipIds ?? []), t.id] }),
                r()(
                    null != L && L.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (L = { ...L, candidateClipsPromoted: L.candidateClipsPromoted + 1 }),
                (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                (R = R.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete y[t.id],
                (S[t.id] = t),
                (T = [t.id, ...T]),
                (G.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
            let { clip: t } = e;
            v = [t, ...v];
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
            let { clipId: t } = e;
            v = v.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (O += 1), (G.hasTakenDecoupledClip = G.hasTakenDecoupledClip || t === E.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            O = Math.max(O - 1, 0);
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!G.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                let e = u.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            D = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (null == D || (0, c.Iy)(t).ownerId !== d.default.getId()) return !1;
            D = 0 === D.newClipIds.length ? null : { ...D, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == D) return !1;
            D = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            null != L && (w[L.id] = L),
                (L = { id: t, gameId: n, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 });
        },
        CLIPS_SESSION_STOP: function () {
            if (null == L) return !1;
            (w[L.id] = L), (L = null);
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            G.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            G.newClipIds = G.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((T = []), (R = []), e.clips))
                t.isCandidate
                    ? ((y[t.id] = t), R.push(t))
                    : ((S[t.id] = t), T.push(t.id), null != t.remoteClipId && (N[t.remoteClipId] = t.id));
            G.hasClips = T.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = S[e.id];
            (T = T.filter((t) => e.id !== t)),
                (R = R.filter((t) => {
                    let { id: n } = t;
                    return e.id !== n;
                })),
                delete y[e.id],
                delete S[e.id],
                t?.remoteClipId != null && delete N[t.remoteClipId],
                0 === T.length && (G.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (y[t.id] = t) : ((S[t.id] = t), null != t.remoteClipId && (N[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            M[e.userId] = {
                clipsEnabled: (0, s.Lt)(e.flags, m.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, s.Lt)(e.flags, m.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, s.Lt)(e.flags, m.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            b = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== b && (b = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = G.hardwareClassification;
            (G.hardwareClassificationVersion = E.V0),
                (G.hardwareClassification = t),
                G.hardwareClassification === f.k9.MEETS_AUTO_ENABLE &&
                    n !== f.k9.MEETS_AUTO_ENABLE &&
                    (G.clipsSettings.clipsEnabled = !0);
            let i = G.hardwareClassificationForDecoupled;
            (G.hardwareClassificationForDecoupled = t),
                G.hardwareClassificationForDecoupled === f.k9.MEETS_AUTO_ENABLE &&
                    i !== f.k9.MEETS_AUTO_ENABLE &&
                    G.clipsSettings.clipsEnabled &&
                    (G.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((P = null), !G.clipsSettings.clipsEnabled)) return !1;
            D = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            P = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case E.P4.Error:
                    P = null;
                    break;
                case E.P4.Disabled:
                case E.P4.Enabled:
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
            x = t ?? [];
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
            k.clear(), (D = null), (b = null), (M = {});
        },
    }),
    j = H;
