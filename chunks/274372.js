n.d(t, {
    A: () => eu,
}),
    n(896048),
    n(938796);
var r,
    i = n(665260),
    a = n(311907),
    s = n(73153),
    o = n(77729),
    l = n(15285),
    c = n(652896),
    u = n(961350);
n(741394);
var d = n(734066),
    f = n(372684),
    p = n(696016),
    _ = n(652215),
    h = n(753070);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = "default",
    O = [],
    A = [],
    v = [],
    S = 0,
    I = null,
    T = null,
    C = {},
    N = null,
    R = [],
    w = null,
    P = {},
    D = new Map(),
    x = {
        clipsEnabled: !1,
        storageLocation: y,
        clipsQuality: {
            resolution: h.on.RESOLUTION_1080,
            frameRate: h.kn.FPS_30,
        },
        clipsLength: p.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: p.on.ALL,
        maxAutoClips: p.T2,
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
        autoClipPhrases: ["clip that", "clip it", "clip clip"],
    },
    L = {
        clipsSettings: x,
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
    if (L.clipsSettings.storageLocation !== y || null == o.A || null == o.A.remoteApp) return;
    let e = await o.A.remoteApp.getPath("documents");
    (L.clipsSettings.storageLocation = e), ec.emitChange();
}

function M(e) {
    let { classification: t } = e,
        n = L.hardwareClassification;
    (L.hardwareClassificationVersion = p.V0),
        (L.hardwareClassification = t),
        L.hardwareClassification === f.k9.MEETS_AUTO_ENABLE &&
            n !== f.k9.MEETS_AUTO_ENABLE &&
            (L.clipsSettings.clipsEnabled = !0);
    let r = L.hardwareClassificationForDecoupled;
    (L.hardwareClassificationForDecoupled = t),
        L.hardwareClassificationForDecoupled === f.k9.MEETS_AUTO_ENABLE &&
            r !== f.k9.MEETS_AUTO_ENABLE &&
            L.clipsSettings.clipsEnabled &&
            (L.clipsSettings.decoupledClipsEnabled = !0);
}

function k(e) {
    let { clip: t } = e;
    for (let [e, n] of A.entries())
        if (n.id === t.id) {
            (A[e] = t), (A = [...A]);
            return;
        }
}

function U(e) {
    let { settings: t } = e;
    L = b(g({}, L), {
        clipsSettings: g({}, L.clipsSettings, t),
    });
}

function G(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((S += 1), (L.hasTakenDecoupledClip = L.hasTakenDecoupledClip || t === p.Fv.DECOUPLED), null != n && null != r)
    ) {
        var i;
        let e = Date.now();
        (w = null != w ? w : e),
            (P[n] = [
                ...(null != (i = P[n]) ? i : []),
                {
                    timestamp: e,
                    thumbnail: r,
                },
            ]);
    }
}

function V(e) {
    let { streamKey: t, timestamp: n } = e;
    w === n && (w = null), null == n ? (P[t] = []) : (P[t] = P[t].filter((e) => e.timestamp !== n));
}

function F() {
    S = Math.max(S - 1, 0);
}

function B(e) {
    var t, n;
    let { clip: r } = e;
    (S = Math.max(S - 1, 0)),
        (T = b(
            g(
                {
                    applicationName: r.applicationName,
                    ended: !1,
                },
                T,
            ),
            {
                newClipIds: [...(null != (t = null == T ? void 0 : T.newClipIds) ? t : []), r.id],
            },
        )),
        (L = b(g({}, L), {
            newClipIds: [...(null != (n = L.newClipIds) ? n : []), r.id],
        })),
        (v = v.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (A = [r, ...A]),
        (L.hasClips = !0);
}

function H(e) {
    let { clip: t } = e;
    v = [t, ...v];
}

function Y(e) {
    let { clipId: t } = e;
    v = v.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}

function W(e) {
    let { channelId: t } = e;
    I = t;
}

function K(e) {
    let { channelId: t } = e;
    t !== I && (I = null);
}

function z(e) {
    let { applicationName: t } = e;
    if (((N = null), !L.clipsSettings.clipsEnabled)) return !1;
    T = {
        applicationName: t,
        newClipIds: [],
        ended: !1,
    };
}

function q(e) {
    let { errMsg: t } = e;
    N = t;
}

function X(e) {
    let { sourceName: t, pid: n } = e;
    if (!L.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = l.Ay.getGameForPID(n);
        r = null != (i = null == e ? void 0 : e.name) ? i : r;
    }
    if (null == r || "" === r) return !1;
    T = {
        applicationName: r,
        newClipIds: [],
        ended: !1,
    };
}

function Z(e) {
    let { streamKey: t } = e;
    if (((w = null), (P[t] = []), null == T || (0, c.Iy)(t).ownerId !== u.default.getId())) return !1;
    T =
        0 === T.newClipIds.length
            ? null
            : b(g({}, T), {
                  ended: !0,
              });
}

function Q(e) {
    (L.hasClips = e.clips.length > 0), (A = e.clips);
}

function $(e) {
    0 ===
        (A = A.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (L.hasClips = !1);
}

function J() {
    if (null == T) return !1;
    T = null;
}

function ee() {
    L.newClipIds = [];
}

function et(e) {
    C[e.userId] = {
        clipsEnabled: (0, i.Lt)(e.flags, _.Ajs.CLIPS_ENABLED),
        allowVoiceRecording: (0, i.Lt)(e.flags, _.Ajs.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, i.Lt)(e.flags, _.Ajs.ALLOW_ANY_VIEWER_CLIPS),
    };
}

function en(e) {
    let { added: t } = e;
    t.length > 0 && (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}

function er(e) {
    let { educationType: t } = e;
    switch (t) {
        case p.P4.Error:
            N = null;
            break;
        case p.P4.Disabled:
        case p.P4.Enabled:
            (L.clipsEducationState.dismissedAt = Date.now()),
                (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (L.clipsEducationState.numberOfTimesDismissed += 1);
    }
}

function ei(e) {
    let { clipIds: t } = e;
    R = null != t ? t : [];
}

function ea(e, t, n) {
    if (!(0, d.J)() || n !== u.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            a = t.substring(n),
            s = JSON.parse(a);
        if (null == s.id) return !1;
        let o = D.get(e);
        return null == o && ((o = new Set()), D.set(e, o)), o.add(s.id), !0;
    } catch (e) {
        return !1;
    }
}

function es(e) {
    var t;
    return ea(e.channelId, e.message.content, null == (t = e.message.author) ? void 0 : t.id);
}

function eo(e) {
    let t = !1;
    for (let r of e.messages) {
        var n;
        t = t || ea(e.channelId, r.content, null == (n = r.author) ? void 0 : n.id);
    }
    return t;
}
class el extends (r = a.Ay.DeviceSettingsStore) {
    initialize(e) {
        null != e && (L = e), j(), this.waitFor(l.Ay);
    }
    getClips() {
        return A;
    }
    getPendingClips() {
        return v;
    }
    getUserAgnosticState() {
        return L;
    }
    getSettings() {
        return L.clipsSettings;
    }
    getLastClipsSession() {
        return T;
    }
    getClipsWarningShown(e) {
        return I === e;
    }
    getActiveAnimation() {
        return w;
    }
    getStreamClipAnimations(e) {
        var t;
        return null != (t = P[e]) ? t : O;
    }
    hasAnyClipAnimations() {
        return Object.values(P).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return L.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return L.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return L.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return S >= p.VP;
    }
    getLastClipsError() {
        return N;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null != (t = null == (n = C[e]) ? void 0 : n.clipsEnabled) && t;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null != (t = null == (n = C[e]) ? void 0 : n.allowVoiceRecording) && t;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null != (t = null == (n = C[e]) ? void 0 : n.allowAnyViewerClips) && t;
    }
    hasClips() {
        return L.hasClips;
    }
    hasTakenDecoupledClip() {
        return L.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return L.newClipIds;
    }
    isClipExporting(e) {
        return R.includes(e);
    }
    getExportingClipIds() {
        return R;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let s of A) {
            var n, r, i, a;
            if (
                (null != t && s.id === t) ||
                (null != e &&
                    (null == (r = s.decision) || null == (n = r.signal) ? void 0 : n.type) === f.Gy.DISTRIBUTED &&
                    (null == (a = s.decision) || null == (i = a.signal) ? void 0 : i.remoteTriggerClipId) === e)
            )
                return s;
        }
        return null;
    }
    wasClipSharedInChannel(e, t) {
        var n;
        let r = D.get(t);
        return null != (n = null == r ? void 0 : r.has(e)) && n;
    }
}
m(el, "displayName", "ClipsStore"),
    m(el, "persistKey", "ClipsStore"),
    m(el, "migrations", [
        (e) => ({
            clipsSettings: null != e ? e : x,
            newClipsCount: 0,
        }),
        (e) => {
            let t = g({}, x, e.clipsSettings);
            return b(g({}, e), {
                clipsSettings: t,
            });
        },
        (e) => {
            var t;
            return b(g({}, e), {
                newClipIds: null != (t = e.newClipIds) ? t : [],
            });
        },
        (e) => {
            var t, n;
            return b(g({}, e), {
                hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
                hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0,
            });
        },
        (e) => {
            var t;
            return b(g({}, e), {
                hasClips: null != (t = e.hasClips) && t,
            });
        },
        (e) =>
            b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    decoupledClipsEnabled: x.decoupledClipsEnabled,
                }),
            }),
        (e) => {
            var t;
            return b(g({}, e), {
                hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null,
            });
        },
        (e) => {
            var t;
            let r = null == (t = n(430452).A) ? void 0 : t.getHardwareEncoding();
            return b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled,
                }),
            });
        },
        (e) => {
            var t;
            return b(g({}, e), {
                newClipIds: null != (t = e.newClipIds) ? t : [],
                newClipIDs: void 0,
            });
        },
        (e) =>
            b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    clipsQuality:
                        "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                            ? x.clipsQuality
                            : e.clipsSettings.clipsQuality,
                }),
            }),
        (e) => {
            var t;
            return b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : x.remindersEnabled,
                }),
            });
        },
        (e) =>
            b(g({}, e), {
                hasTakenDecoupledClip: !1,
                clipsEducationState: {
                    dismissedAt: null,
                    numberOfGamesLaunchedSinceDismissal: 0,
                    numberOfTimesDismissed: 0,
                },
            }),
        (e) => {
            var t, n, r, i;
            return b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : x.maxAutoClips,
                    clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : x.clipSignals,
                    mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : x.mlPipelinesEnabled,
                    autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : x.autoClipPhrases,
                }),
            });
        },
        (e) =>
            b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    autoClipPhrases:
                        0 === e.clipsSettings.autoClipPhrases.length
                            ? x.autoClipPhrases
                            : e.clipsSettings.autoClipPhrases,
                }),
            }),
    ]);
let ec = new el(s.h, {
        CLIPS_SETTINGS_UPDATE: U,
        CLIPS_SAVE_CLIP: B,
        CLIPS_SAVE_CLIP_PLACEHOLDER: H,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Y,
        CLIPS_SAVE_CLIP_START: G,
        CLIPS_SAVE_CLIP_ERROR: F,
        CLIPS_SAVE_ANIMATION_END: V,
        STREAM_START: X,
        STREAM_STOP: Z,
        CLIPS_CLEAR_CLIPS_SESSION: J,
        CLIPS_CLEAR_NEW_CLIP_IDS: ee,
        CLIPS_LOAD_DIRECTORY_SUCCESS: Q,
        CLIPS_DELETE_CLIP: $,
        CLIPS_UPDATE_METADATA: k,
        RTC_CONNECTION_FLAGS: et,
        CLIPS_SHOW_CALL_WARNING: W,
        VOICE_CHANNEL_SELECT: K,
        CLIPS_CLASSIFY_HARDWARE: M,
        CLIPS_INIT: z,
        CLIPS_INIT_FAILURE: q,
        CLIPS_DISMISS_EDUCATION: er,
        RUNNING_GAMES_CHANGE: en,
        CLIPS_SET_EXPORTING: ei,
        MESSAGE_CREATE: es,
        LOAD_MESSAGES_SUCCESS: eo,
    }),
    eu = ec;
