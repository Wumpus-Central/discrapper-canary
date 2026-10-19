(n.d(t, { Ay: () => H, _c: () => f, he: () => h }), n(321073), n(938796));
var i = n(665260),
    r = n(17928),
    a = n(73153),
    s = n(77729),
    l = n(952818),
    o = n(280450),
    d = n(741394),
    c = n(458977),
    u = n(110742),
    _ = n(696016),
    E = n(652215),
    A = n(753070);
let h = "default",
    f = "Discord Clips",
    I = {},
    p = {},
    T = [],
    m = 0,
    g = null,
    S = null,
    N = null,
    C = {},
    O = null,
    R = new Set(),
    L = !1,
    y = new Set(),
    D = new Map(),
    v = new Map(),
    b = new Map(),
    M = [],
    P = {
        clipsEnabled: !1,
        storageLocation: h,
        clipsQuality: { resolution: A.on.RESOLUTION_1080, frameRate: A.kn.FPS_30, bitratePercent: _.Y2 },
        clipsLength: _.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        maxAutoClips: 20,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    U = {
        clipsSettings: P,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function w() {
    let e;
    if (U.clipsSettings.storageLocation === h && null != s.A && null != s.A.app) {
        try {
            let t = await s.A.app.getPath("videos");
            e = (0, d.CN)(t, f);
        } catch (t) {
            (_.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await s.A.app.getPath("documents")));
        }
        ((U.clipsSettings.storageLocation = e), V.emitChange());
    }
}
function G() {
    let e = [];
    return (null != S && e.push(S), null != N && N !== S && e.push(N), e);
}
function x(e, t) {
    null == e || (t(e), e.hasClips && (null == N || N.startedAt <= e.startedAt) && (N = e));
}
function k(e, t) {
    let n = !1;
    for (let i of e)
        for (let e of t)
            null != (0, u.hL)(i, e) && (D.set(i.attachmentId, [...(D.get(i.attachmentId) ?? []), e]), (n = !0));
    return n;
}
function F(e) {
    if (!c.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, i.Lt)(e.flags ?? 0, E.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || v.has(e.id)) return !1;
    let n = (function (e, t) {
        let n = [];
        for (let i of t) {
            let t = (0, u.Vi)(i);
            null != t && n.push({ ...t, messageId: e.id, channelId: e.channel_id, attachmentId: i.id });
        }
        return n;
    })(e, t);
    v.set(e.id, n);
    let r = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === E.SH7.DEFAULT)) return t.message_id;
        })(e),
        a = !(null == r || e.author?.id !== o.default.getId() || y.has(r)) && (y.add(r), !0),
        s = !1;
    return (
        null != r && ((s = k(v.get(r) ?? [], n)), b.set(r, [...(b.get(r) ?? []), ...n])),
        (s = k(n, b.get(e.id) ?? []) || s) || a
    );
}
class B extends r.Ay.DeviceSettingsStore {
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
        (e) => e,
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
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? P.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
        (e) =>
            !1 !== e.clipsSettings.enableAutoclipping
                ? e
                : { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: !1 } },
    ];
    initialize(e) {
        (null != e && (U = e), w(), this.waitFor(l.Ay));
    }
    getClips() {
        return I;
    }
    getClipById(e) {
        return I[e];
    }
    getClipByRemoteId(e) {
        let t = p[e];
        if (null != t) return I[t];
    }
    getClipCandidates() {
        return G().flatMap((e) => e.candidates);
    }
    getPendingMontageClips() {
        return T;
    }
    getUserAgnosticState() {
        return U;
    }
    getSettings() {
        return U.clipsSettings;
    }
    getLastClipsSession() {
        return N;
    }
    getActiveClipsSession() {
        return S;
    }
    devSetLastClipsSession(e) {
        ((N = e), this.emitChange());
    }
    getClipsWarningShown(e) {
        return g === e;
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
        return m >= _.VP;
    }
    getLastClipsError() {
        return O;
    }
    isClipsEnabledForUser(e) {
        return C[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return C[e]?.allowVoiceRecording ?? !1;
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
        return R.has(e);
    }
    getExportingClipIds() {
        return R;
    }
    isAutoStashEnabled() {
        return L;
    }
    hasRepliedWithClip(e) {
        return y.has(e);
    }
    getMatchingPOVReferences(e) {
        return D.get(e) ?? M;
    }
}
let V = new B(a.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            U = { ...U, clipsSettings: { ...U.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t, session: n } = e;
            ((m = Math.max(m - 1, 0)),
                x(n, (e) => e.recordSavedClip(t)),
                t.isCandidate ||
                    ((U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }),
                    (I[t.id] = t),
                    null != t.remoteClipId && (p[t.remoteClipId] = t.id),
                    (U.hasClips = !0)));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t, session: n } = e;
            (x(n, (e) => e.recordPromotedClip(t)),
                (U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }),
                (I[t.id] = t),
                (U.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            ((m += 1), (U.hasTakenDecoupledClip = U.hasTakenDecoupledClip || t === _.Fv.DECOUPLED));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            m = Math.max(m - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === _.RC.BUFFER_WARMING_UP || t === _.RC.BRIDGE_SHUTDOWN) && (m = Math.max(m - 1, 0));
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == N) return !1;
            N = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { session: t } = e;
            (S?.end(), (S = t));
        },
        CLIPS_SESSION_STOP: function () {
            if (null == S) return !1;
            (S.end(), (S = null));
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            U.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            U.newClipIds = U.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((I = {}), e.clips))
                t.isCandidate || ((I[t.id] = t), null != t.remoteClipId && (p[t.remoteClipId] = t.id));
            U.hasClips = Object.keys(I).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = I[e.id];
            for (let t of G()) t.removeCandidate(e.id);
            (delete I[e.id],
                t?.remoteClipId != null && delete p[t.remoteClipId],
                (U.hasClips = Object.keys(I).length > 0));
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            if (t.isCandidate) return !1;
            ((I[t.id] = t), null != t.remoteClipId && (p[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            C[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, E.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, E.Ajs.ALLOW_VOICE_RECORDING),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            g = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== g && (g = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = U.hardwareClassification;
            ((U.hardwareClassificationVersion = _.V0),
                (U.hardwareClassification = t),
                U.hardwareClassification === _.k9.MEETS_AUTO_ENABLE &&
                    n !== _.k9.MEETS_AUTO_ENABLE &&
                    (U.clipsSettings.clipsEnabled = !0),
                (U.hardwareClassificationForDecoupled = t));
        },
        CLIPS_INIT: function () {
            O = null;
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            O = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case _.P4.Error:
                    O = null;
                    break;
                case _.P4.Disabled:
                case _.P4.Enabled:
                    ((U.clipsEducationState.dismissedAt = Date.now()),
                        (U.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (U.clipsEducationState.numberOfTimesDismissed += 1));
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (U.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            R = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            T = [
                t,
                ...T.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t, session: n } = e;
            ((T = T.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (I[t.id] = t),
                x(n, (e) => e.recordMontageClip(t)),
                ((U = { ...U, newClipIds: [...(U.newClipIds ?? []), t.id] }).hasClips = !0));
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            T = T.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            L = t;
        },
        MESSAGE_CREATE: function (e) {
            return F(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = F(n) || t;
            return t;
        },
        LOGOUT: function () {
            (y.clear(), D.clear(), v.clear(), b.clear(), (S = null), (N = null), (g = null), (C = {}));
        },
    }),
    H = V;
