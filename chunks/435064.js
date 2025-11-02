n.d(t, { Z: () => ed }), n(388685), n(997841);
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
    f = n(924557),
    _ = n(894694),
    p = n(356659),
    h = n(981631),
    m = n(37113);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = "default",
    v = [],
    I = [],
    T = [],
    S = 0,
    A = null,
    C = null,
    N = {},
    R = null,
    P = [],
    w = null,
    D = {},
    x = new Map(),
    L = {
        clipsEnabled: !1,
        storageLocation: O,
        clipsQuality: {
            resolution: m.ApplicationStreamResolutions.RESOLUTION_1080,
            frameRate: m.ApplicationStreamFPS.FPS_30,
        },
        clipsLength: p.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: p.dJ.ALL,
        maxAutoClips: p.SU,
        clipSignals: {
            enableDistributedSignals: !0,
            enablePhraseSignals: !0,
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
    M = {
        clipsSettings: L,
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
async function j() {
    if (M.clipsSettings.storageLocation !== O || null == o.Z || null == o.Z.remoteApp) return;
    let e = await o.Z.remoteApp.getPath("documents");
    (M.clipsSettings.storageLocation = e), eu.emitChange();
}
function k(e) {
    let { classification: t } = e,
        n = M.hardwareClassification;
    (M.hardwareClassificationVersion = p.WM),
        (M.hardwareClassification = t),
        M.hardwareClassification === _.xH.MEETS_AUTO_ENABLE &&
            n !== _.xH.MEETS_AUTO_ENABLE &&
            (M.clipsSettings.clipsEnabled = !0);
    let r = M.hardwareClassificationForDecoupled;
    (M.hardwareClassificationForDecoupled = t),
        M.hardwareClassificationForDecoupled === _.xH.MEETS_AUTO_ENABLE &&
            r !== _.xH.MEETS_AUTO_ENABLE &&
            M.clipsSettings.clipsEnabled &&
            (M.clipsSettings.decoupledClipsEnabled = !0);
}
function U(e) {
    let { clip: t } = e;
    for (let [e, n] of I.entries())
        if (n.id === t.id) {
            (I[e] = t), (I = [...I]);
            return;
        }
}
function G(e) {
    let { settings: t } = e;
    M = y(E({}, M), { clipsSettings: E({}, M.clipsSettings, t) });
}
function B(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((S += 1), (M.hasTakenDecoupledClip = M.hasTakenDecoupledClip || t === p.X9.DECOUPLED), null != n && null != r)
    ) {
        var i;
        let e = Date.now();
        (w = null != w ? w : e),
            (D[n] = [
                ...(null != (i = D[n]) ? i : []),
                {
                    timestamp: e,
                    thumbnail: r,
                },
            ]);
    }
}
function Z(e) {
    let { streamKey: t, timestamp: n } = e;
    w === n && (w = null), null == n ? (D[t] = []) : (D[t] = D[t].filter((e) => e.timestamp !== n));
}
function F() {
    S = Math.max(S - 1, 0);
}
function V(e) {
    var t, n;
    let { clip: r } = e;
    (S = Math.max(S - 1, 0)),
        (C = y(
            E(
                {
                    applicationName: r.applicationName,
                    ended: !1,
                },
                C,
            ),
            {
                newClipIds: [...(null != (t = null == C ? void 0 : C.newClipIds) ? t : []), r.id],
            },
        )),
        (M = y(E({}, M), {
            newClipIds: [...(null != (n = M.newClipIds) ? n : []), r.id],
        })),
        (T = T.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (I = [r, ...I]),
        (M.hasClips = !0);
}
function H(e) {
    let { clip: t } = e;
    T = [t, ...T];
}
function Y(e) {
    let { clipId: t } = e;
    T = T.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function W(e) {
    let { channelId: t } = e;
    A = t;
}
function K(e) {
    let { channelId: t } = e;
    t !== A && (A = null);
}
function z(e) {
    let { applicationName: t } = e;
    if (((R = null), !M.clipsSettings.clipsEnabled)) return !1;
    C = {
        applicationName: t,
        newClipIds: [],
        ended: !1,
    };
}
function q(e) {
    let { errMsg: t } = e;
    R = t;
}
function X(e) {
    let { sourceName: t, pid: n } = e;
    if (!M.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = s.ZP.getGameForPID(n);
        r = null != (i = null == e ? void 0 : e.name) ? i : r;
    }
    if (null == r || "" === r) return !1;
    C = {
        applicationName: r,
        newClipIds: [],
        ended: !1,
    };
}
function Q(e) {
    let { streamKey: t } = e;
    if (((w = null), (D[t] = []), null == C || (0, l.my)(t).ownerId !== c.default.getId())) return !1;
    C = 0 === C.newClipIds.length ? null : y(E({}, C), { ended: !0 });
}
function J(e) {
    (M.hasClips = e.clips.length > 0), (I = e.clips);
}
function $(e) {
    0 ===
        (I = I.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (M.hasClips = !1);
}
function ee() {
    if (null == C) return !1;
    C = null;
}
function et() {
    M.newClipIds = [];
}
function en(e) {
    N[e.userId] = {
        clipsEnabled: (0, u.yE)(e.flags, h.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, u.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, u.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function er(e) {
    let { added: t } = e;
    t.length > 0 && (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function ei(e) {
    let { educationType: t } = e;
    switch (t) {
        case p.D5.Error:
            R = null;
            break;
        case p.D5.Disabled:
        case p.D5.Enabled:
            (M.clipsEducationState.dismissedAt = Date.now()),
                (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (M.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
function ea(e) {
    let { clipIds: t } = e;
    P = null != t ? t : [];
}
function eo(e, t, n) {
    if (!(0, f.NS)() || n !== c.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            a = t.substring(n),
            o = JSON.parse(a);
        if (null == o.id) return !1;
        let s = x.get(e);
        return null == s && ((s = new Set()), x.set(e, s)), s.add(o.id), !0;
    } catch (e) {
        return !1;
    }
}
function es(e) {
    var t;
    return eo(e.channelId, e.message.content, null == (t = e.message.author) ? void 0 : t.id);
}
function el(e) {
    let t = !1;
    for (let r of e.messages) {
        var n;
        t = t || eo(e.channelId, r.content, null == (n = r.author) ? void 0 : n.id);
    }
    return t;
}
class ec extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (M = e), j(), this.waitFor(s.ZP);
    }
    getClips() {
        return I;
    }
    getPendingClips() {
        return T;
    }
    getUserAgnosticState() {
        return M;
    }
    getSettings() {
        return M.clipsSettings;
    }
    getLastClipsSession() {
        return C;
    }
    getClipsWarningShown(e) {
        return A === e;
    }
    getActiveAnimation() {
        return w;
    }
    getStreamClipAnimations(e) {
        var t;
        return null != (t = D[e]) ? t : v;
    }
    hasAnyClipAnimations() {
        return Object.values(D).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return M.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return M.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return M.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return S >= p.Kw;
    }
    getLastClipsError() {
        return R;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null != (n = null == (t = N[e]) ? void 0 : t.clipsEnabled) && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = N[e]) ? void 0 : t.allowVoiceRecording) && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = N[e]) ? void 0 : t.allowAnyViewerClips) && n;
    }
    isDecoupledGameClippingEnabled() {
        return (0, d.isWindows)();
    }
    hasClips() {
        return M.hasClips;
    }
    hasTakenDecoupledClip() {
        return M.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return M.newClipIds;
    }
    isClipExporting(e) {
        return P.includes(e);
    }
    getExportingClipIds() {
        return P;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let o of I) {
            var n, r, i, a;
            if (
                (null != t && o.id === t) ||
                (null != e &&
                    (null == (r = o.decision) || null == (n = r.signal) ? void 0 : n.type) === _.Bs.DISTRIBUTED &&
                    (null == (a = o.decision) || null == (i = a.signal) ? void 0 : i.remoteTriggerClipId) === e)
            )
                return o;
        }
        return null;
    }
    wasClipSharedInChannel(e, t) {
        var n;
        let r = x.get(t);
        return null != (n = null == r ? void 0 : r.has(e)) && n;
    }
}
g(ec, "displayName", "ClipsStore"),
    g(ec, "persistKey", "ClipsStore"),
    g(ec, "migrations", [
        (e) => ({
            clipsSettings: null != e ? e : L,
            newClipsCount: 0,
        }),
        (e) => {
            let t = E({}, L, e.clipsSettings);
            return y(E({}, e), { clipsSettings: t });
        },
        (e) => {
            var t;
            return y(E({}, e), { newClipIds: null != (t = e.newClipIds) ? t : [] });
        },
        (e) => {
            var t, n;
            return y(E({}, e), {
                hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
                hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0,
            });
        },
        (e) => {
            var t;
            return y(E({}, e), { hasClips: null != (t = e.hasClips) && t });
        },
        (e) =>
            y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), { decoupledClipsEnabled: L.decoupledClipsEnabled }),
            }),
        (e) => {
            var t;
            return y(E({}, e), {
                hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null,
            });
        },
        (e) => {
            var t;
            let r = null == (t = n(131951).Z) ? void 0 : t.getHardwareEncoding();
            return y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), {
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled,
                }),
            });
        },
        (e) => {
            var t;
            return y(E({}, e), {
                newClipIds: null != (t = e.newClipIds) ? t : [],
                newClipIDs: void 0,
            });
        },
        (e) =>
            y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), {
                    clipsQuality:
                        "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                            ? L.clipsQuality
                            : e.clipsSettings.clipsQuality,
                }),
            }),
        (e) => {
            var t;
            return y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), {
                    remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : L.remindersEnabled,
                }),
            });
        },
        (e) =>
            y(E({}, e), {
                hasTakenDecoupledClip: !1,
                clipsEducationState: {
                    dismissedAt: null,
                    numberOfGamesLaunchedSinceDismissal: 0,
                    numberOfTimesDismissed: 0,
                },
            }),
        (e) => {
            var t, n, r, i;
            return y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), {
                    maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : L.maxAutoClips,
                    clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : L.clipSignals,
                    mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : L.mlPipelinesEnabled,
                    autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : L.autoClipPhrases,
                }),
            });
        },
        (e) =>
            y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), {
                    autoClipPhrases:
                        0 === e.clipsSettings.autoClipPhrases.length
                            ? L.autoClipPhrases
                            : e.clipsSettings.autoClipPhrases,
                }),
            }),
    ]);
let eu = new ec(a.Z, {
        CLIPS_SETTINGS_UPDATE: G,
        CLIPS_SAVE_CLIP: V,
        CLIPS_SAVE_CLIP_PLACEHOLDER: H,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Y,
        CLIPS_SAVE_CLIP_START: B,
        CLIPS_SAVE_CLIP_ERROR: F,
        CLIPS_SAVE_ANIMATION_END: Z,
        STREAM_START: X,
        STREAM_STOP: Q,
        CLIPS_CLEAR_CLIPS_SESSION: ee,
        CLIPS_CLEAR_NEW_CLIP_IDS: et,
        CLIPS_LOAD_DIRECTORY_SUCCESS: J,
        CLIPS_DELETE_CLIP: $,
        CLIPS_UPDATE_METADATA: U,
        RTC_CONNECTION_FLAGS: en,
        CLIPS_SHOW_CALL_WARNING: W,
        VOICE_CHANNEL_SELECT: K,
        CLIPS_CLASSIFY_HARDWARE: k,
        CLIPS_INIT: z,
        CLIPS_INIT_FAILURE: q,
        CLIPS_DISMISS_EDUCATION: ei,
        RUNNING_GAMES_CHANGE: er,
        CLIPS_SET_EXPORTING: ea,
        MESSAGE_CREATE: es,
        LOAD_MESSAGES_SUCCESS: el,
    }),
    ed = eu;
