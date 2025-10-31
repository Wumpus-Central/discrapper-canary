n.d(t, { Z: () => e_ }), n(388685), n(997841);
var r,
    i = n(442837),
    a = n(570140),
    o = n(579806),
    s = n(594190),
    l = n(569545),
    c = n(314897),
    u = n(630388);
n(137058);
var d = n(358085),
    f = n(333291),
    _ = n(924557),
    p = n(894694),
    h = n(356659),
    m = n(981631),
    g = n(37113);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = "default",
    I = [],
    T = [],
    S = [],
    A = 0,
    C = null,
    N = null,
    R = {},
    P = null,
    w = [],
    D = null,
    x = {},
    L = new Map(),
    M = {
        clipsEnabled: !1,
        storageLocation: v,
        clipsQuality: {
            resolution: g.ApplicationStreamResolutions.RESOLUTION_1080,
            frameRate: g.ApplicationStreamFPS.FPS_30,
        },
        clipsLength: h.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: h.dJ.ALL,
        maxAutoClips: h.SU,
        clipSignals: {
            enableManualSignals: !0,
            enableDistributedSignals: !0,
            enablePhraseSignals: !0,
            enableYellingSignals: !0,
            enableGameSignals: !0,
        },
        mlPipelinesEnabled: {
            emotionClassifier: !0,
            wakeWordDetector: !1,
            yellDetector: !0,
            whisperTranscription: !0,
        },
        autoClipPhrases: ["clip", "flip that", "flip it"],
    },
    j = {
        clipsSettings: M,
        clipDecisionEngineConfig: (0, f.P_)(),
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: {
            dismissedAt: null,
            numberOfGamesLaunchedSinceDismissal: 0,
            numberOfTimesDismissed: 0,
        },
    };
async function k() {
    if (j.clipsSettings.storageLocation !== v || null == o.Z || null == o.Z.remoteApp) return;
    let e = await o.Z.remoteApp.getPath("documents");
    (j.clipsSettings.storageLocation = e), ef.emitChange();
}
function U(e) {
    let { classification: t } = e,
        n = j.hardwareClassification;
    (j.hardwareClassificationVersion = h.WM),
        (j.hardwareClassification = t),
        j.hardwareClassification === p.xH.MEETS_AUTO_ENABLE &&
            n !== p.xH.MEETS_AUTO_ENABLE &&
            (j.clipsSettings.clipsEnabled = !0);
    let r = j.hardwareClassificationForDecoupled;
    (j.hardwareClassificationForDecoupled = t),
        j.hardwareClassificationForDecoupled === p.xH.MEETS_AUTO_ENABLE &&
            r !== p.xH.MEETS_AUTO_ENABLE &&
            j.clipsSettings.clipsEnabled &&
            (j.clipsSettings.decoupledClipsEnabled = !0);
}
function G(e) {
    let { clip: t } = e;
    for (let [e, n] of T.entries())
        if (n.id === t.id) {
            (T[e] = t), (T = [...T]);
            return;
        }
}
function B(e) {
    let { settings: t } = e;
    j = O(b({}, j), { clipsSettings: b({}, j.clipsSettings, t) });
}
function Z(e) {
    j = O(b({}, j), { clipDecisionEngineConfig: e.config });
}
function F(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((A += 1), (j.hasTakenDecoupledClip = j.hasTakenDecoupledClip || t === h.X9.DECOUPLED), null != n && null != r)
    ) {
        var i;
        let e = Date.now();
        (D = null != D ? D : e),
            (x[n] = [
                ...(null != (i = x[n]) ? i : []),
                {
                    timestamp: e,
                    thumbnail: r,
                },
            ]);
    }
}
function V(e) {
    let { streamKey: t, timestamp: n } = e;
    D === n && (D = null), null == n ? (x[t] = []) : (x[t] = x[t].filter((e) => e.timestamp !== n));
}
function H() {
    A = Math.max(A - 1, 0);
}
function Y(e) {
    var t, n;
    let { clip: r } = e;
    (A = Math.max(A - 1, 0)),
        (N = O(
            b(
                {
                    applicationName: r.applicationName,
                    ended: !1,
                },
                N,
            ),
            {
                newClipIds: [...(null != (t = null == N ? void 0 : N.newClipIds) ? t : []), r.id],
            },
        )),
        (j = O(b({}, j), {
            newClipIds: [...(null != (n = j.newClipIds) ? n : []), r.id],
        })),
        (S = S.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (T = [r, ...T]),
        (j.hasClips = !0);
}
function W(e) {
    let { clip: t } = e;
    S = [t, ...S];
}
function K(e) {
    let { clipId: t } = e;
    S = S.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function z(e) {
    let { channelId: t } = e;
    C = t;
}
function q(e) {
    let { channelId: t } = e;
    t !== C && (C = null);
}
function X(e) {
    let { applicationName: t } = e;
    if (((P = null), !j.clipsSettings.clipsEnabled)) return !1;
    N = {
        applicationName: t,
        newClipIds: [],
        ended: !1,
    };
}
function Q(e) {
    let { errMsg: t } = e;
    P = t;
}
function J(e) {
    let { sourceName: t, pid: n } = e;
    if (!j.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = s.ZP.getGameForPID(n);
        r = null != (i = null == e ? void 0 : e.name) ? i : r;
    }
    if (null == r || "" === r) return !1;
    N = {
        applicationName: r,
        newClipIds: [],
        ended: !1,
    };
}
function $(e) {
    let { streamKey: t } = e;
    if (((D = null), (x[t] = []), null == N || (0, l.my)(t).ownerId !== c.default.getId())) return !1;
    N = 0 === N.newClipIds.length ? null : O(b({}, N), { ended: !0 });
}
function ee(e) {
    (j.hasClips = e.clips.length > 0), (T = e.clips);
}
function et(e) {
    0 ===
        (T = T.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (j.hasClips = !1);
}
function en() {
    if (null == N) return !1;
    N = null;
}
function er() {
    j.newClipIds = [];
}
function ei(e) {
    R[e.userId] = {
        clipsEnabled: (0, u.yE)(e.flags, m.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, u.yE)(e.flags, m.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, u.yE)(e.flags, m.BVn.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function ea(e) {
    let { added: t } = e;
    t.length > 0 && (j.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function eo(e) {
    let { educationType: t } = e;
    switch (t) {
        case h.D5.Error:
            P = null;
            break;
        case h.D5.Disabled:
        case h.D5.Enabled:
            (j.clipsEducationState.dismissedAt = Date.now()),
                (j.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (j.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
function es(e) {
    let { clipIds: t } = e;
    w = null != t ? t : [];
}
function el(e, t, n) {
    if (!(0, _.NS)() || n !== c.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            a = t.substring(n),
            o = JSON.parse(a);
        if (null == o.id) return !1;
        let s = L.get(e);
        return null == s && ((s = new Set()), L.set(e, s)), s.add(o.id), !0;
    } catch (e) {
        return !1;
    }
}
function ec(e) {
    var t;
    return el(e.channelId, e.message.content, null == (t = e.message.author) ? void 0 : t.id);
}
function eu(e) {
    let t = !1;
    for (let r of e.messages) {
        var n;
        t = t || el(e.channelId, r.content, null == (n = r.author) ? void 0 : n.id);
    }
    return t;
}
class ed extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (j = e), k(), this.waitFor(s.ZP);
    }
    getClips() {
        return T;
    }
    getPendingClips() {
        return S;
    }
    getUserAgnosticState() {
        return j;
    }
    getSettings() {
        return j.clipsSettings;
    }
    getClipDecisionEngineConfig() {
        return j.clipDecisionEngineConfig;
    }
    getLastClipsSession() {
        return N;
    }
    getClipsWarningShown(e) {
        return C === e;
    }
    getActiveAnimation() {
        return D;
    }
    getStreamClipAnimations(e) {
        var t;
        return null != (t = x[e]) ? t : I;
    }
    hasAnyClipAnimations() {
        return Object.values(x).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return j.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return j.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return j.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return A >= h.Kw;
    }
    getLastClipsError() {
        return P;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null != (n = null == (t = R[e]) ? void 0 : t.clipsEnabled) && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = R[e]) ? void 0 : t.allowVoiceRecording) && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = R[e]) ? void 0 : t.allowAnyViewerClips) && n;
    }
    isDecoupledGameClippingEnabled() {
        return (0, d.isWindows)();
    }
    hasClips() {
        return j.hasClips;
    }
    hasTakenDecoupledClip() {
        return j.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return j.newClipIds;
    }
    isClipExporting(e) {
        return w.includes(e);
    }
    getExportingClipIds() {
        return w;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let o of T) {
            var n, r, i, a;
            if (
                (null != t && o.id === t) ||
                (null != e &&
                    (null == (r = o.decision) || null == (n = r.signal) ? void 0 : n.type) === p.Bs.DISTRIBUTED &&
                    (null == (a = o.decision) || null == (i = a.signal) ? void 0 : i.remoteTriggerClipId) === e)
            )
                return o;
        }
        return null;
    }
    wasClipSharedInChannel(e, t) {
        var n;
        let r = L.get(t);
        return null != (n = null == r ? void 0 : r.has(e)) && n;
    }
}
E(ed, "displayName", "ClipsStore"),
    E(ed, "persistKey", "ClipsStore"),
    E(ed, "migrations", [
        (e) => ({
            clipsSettings: null != e ? e : M,
            newClipsCount: 0,
        }),
        (e) => {
            let t = b({}, M, e.clipsSettings);
            return O(b({}, e), { clipsSettings: t });
        },
        (e) => {
            var t;
            return O(b({}, e), { newClipIds: null != (t = e.newClipIds) ? t : [] });
        },
        (e) => {
            var t, n;
            return O(b({}, e), {
                hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
                hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0,
            });
        },
        (e) => {
            var t;
            return O(b({}, e), { hasClips: null != (t = e.hasClips) && t });
        },
        (e) =>
            O(b({}, e), {
                clipsSettings: O(b({}, e.clipsSettings), { decoupledClipsEnabled: M.decoupledClipsEnabled }),
            }),
        (e) => {
            var t;
            return O(b({}, e), {
                hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null,
            });
        },
        (e) => {
            var t;
            let r = null == (t = n(131951).Z) ? void 0 : t.getHardwareEncoding();
            return O(b({}, e), {
                clipsSettings: O(b({}, e.clipsSettings), {
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled,
                }),
            });
        },
        (e) => {
            var t;
            return O(b({}, e), {
                newClipIds: null != (t = e.newClipIds) ? t : [],
                newClipIDs: void 0,
            });
        },
        (e) =>
            O(b({}, e), {
                clipsSettings: O(b({}, e.clipsSettings), {
                    clipsQuality:
                        "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                            ? M.clipsQuality
                            : e.clipsSettings.clipsQuality,
                }),
            }),
        (e) => {
            var t;
            return O(b({}, e), {
                clipsSettings: O(b({}, e.clipsSettings), {
                    remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : M.remindersEnabled,
                }),
            });
        },
        (e) =>
            O(b({}, e), {
                hasTakenDecoupledClip: !1,
                clipsEducationState: {
                    dismissedAt: null,
                    numberOfGamesLaunchedSinceDismissal: 0,
                    numberOfTimesDismissed: 0,
                },
            }),
        (e) => {
            var t, n, r, i, a;
            return O(b({}, e), {
                clipsSettings: O(b({}, e.clipsSettings), {
                    maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : M.maxAutoClips,
                    clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : M.clipSignals,
                    mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : M.mlPipelinesEnabled,
                    autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : M.autoClipPhrases,
                }),
                clipDecisionEngineConfig: null != (a = e.clipDecisionEngineConfig) ? a : (0, f.P_)(),
            });
        },
        (e) =>
            O(b({}, e), {
                clipsSettings: O(b({}, e.clipsSettings), {
                    autoClipPhrases:
                        0 === e.clipsSettings.autoClipPhrases.length
                            ? M.autoClipPhrases
                            : e.clipsSettings.autoClipPhrases,
                }),
            }),
    ]);
let ef = new ed(a.Z, {
        CLIPS_SETTINGS_UPDATE: B,
        CLIPS_ENGINE_CONFIG_UPDATE: Z,
        CLIPS_SAVE_CLIP: Y,
        CLIPS_SAVE_CLIP_PLACEHOLDER: W,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: K,
        CLIPS_SAVE_CLIP_START: F,
        CLIPS_SAVE_CLIP_ERROR: H,
        CLIPS_SAVE_ANIMATION_END: V,
        STREAM_START: J,
        STREAM_STOP: $,
        CLIPS_CLEAR_CLIPS_SESSION: en,
        CLIPS_CLEAR_NEW_CLIP_IDS: er,
        CLIPS_LOAD_DIRECTORY_SUCCESS: ee,
        CLIPS_DELETE_CLIP: et,
        CLIPS_UPDATE_METADATA: G,
        RTC_CONNECTION_FLAGS: ei,
        CLIPS_SHOW_CALL_WARNING: z,
        VOICE_CHANNEL_SELECT: q,
        CLIPS_CLASSIFY_HARDWARE: U,
        CLIPS_INIT: X,
        CLIPS_INIT_FAILURE: Q,
        CLIPS_DISMISS_EDUCATION: eo,
        RUNNING_GAMES_CHANGE: ea,
        CLIPS_SET_EXPORTING: es,
        MESSAGE_CREATE: ec,
        LOAD_MESSAGES_SUCCESS: eu,
    }),
    e_ = ef;
