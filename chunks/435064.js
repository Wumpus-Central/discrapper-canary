n.d(t, { Z: () => eu }), n(388685), n(997841);
var r,
    i = n(95015),
    a = n(442837),
    o = n(570140),
    s = n(579806),
    l = n(594190),
    c = n(569545),
    u = n(314897);
n(137058);
var d = n(924557),
    f = n(894694),
    _ = n(356659),
    p = n(981631),
    h = n(37113);
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
    v = [],
    I = [],
    T = 0,
    S = null,
    A = null,
    C = {},
    N = null,
    R = [],
    P = null,
    D = {},
    w = new Map(),
    L = {
        clipsEnabled: !1,
        storageLocation: y,
        clipsQuality: {
            resolution: h.ApplicationStreamResolutions.RESOLUTION_1080,
            frameRate: h.ApplicationStreamFPS.FPS_30,
        },
        clipsLength: _.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: _.dJ.ALL,
        maxAutoClips: _.SU,
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
    x = {
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
async function M() {
    if (x.clipsSettings.storageLocation !== y || null == s.Z || null == s.Z.remoteApp) return;
    let e = await s.Z.remoteApp.getPath("documents");
    (x.clipsSettings.storageLocation = e), ec.emitChange();
}
function k(e) {
    let { classification: t } = e,
        n = x.hardwareClassification;
    (x.hardwareClassificationVersion = _.WM),
        (x.hardwareClassification = t),
        x.hardwareClassification === f.xH.MEETS_AUTO_ENABLE &&
            n !== f.xH.MEETS_AUTO_ENABLE &&
            (x.clipsSettings.clipsEnabled = !0);
    let r = x.hardwareClassificationForDecoupled;
    (x.hardwareClassificationForDecoupled = t),
        x.hardwareClassificationForDecoupled === f.xH.MEETS_AUTO_ENABLE &&
            r !== f.xH.MEETS_AUTO_ENABLE &&
            x.clipsSettings.clipsEnabled &&
            (x.clipsSettings.decoupledClipsEnabled = !0);
}
function j(e) {
    let { clip: t } = e;
    for (let [e, n] of v.entries())
        if (n.id === t.id) {
            (v[e] = t), (v = [...v]);
            return;
        }
}
function U(e) {
    let { settings: t } = e;
    x = b(g({}, x), { clipsSettings: g({}, x.clipsSettings, t) });
}
function G(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((T += 1), (x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === _.X9.DECOUPLED), null != n && null != r)
    ) {
        var i;
        let e = Date.now();
        (P = null != P ? P : e),
            (D[n] = [
                ...(null != (i = D[n]) ? i : []),
                {
                    timestamp: e,
                    thumbnail: r,
                },
            ]);
    }
}
function B(e) {
    let { streamKey: t, timestamp: n } = e;
    P === n && (P = null), null == n ? (D[t] = []) : (D[t] = D[t].filter((e) => e.timestamp !== n));
}
function Z() {
    T = Math.max(T - 1, 0);
}
function F(e) {
    var t, n;
    let { clip: r } = e;
    (T = Math.max(T - 1, 0)),
        (A = b(
            g(
                {
                    applicationName: r.applicationName,
                    ended: !1,
                },
                A,
            ),
            {
                newClipIds: [...(null != (t = null == A ? void 0 : A.newClipIds) ? t : []), r.id],
            },
        )),
        (x = b(g({}, x), {
            newClipIds: [...(null != (n = x.newClipIds) ? n : []), r.id],
        })),
        (I = I.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (v = [r, ...v]),
        (x.hasClips = !0);
}
function V(e) {
    let { clip: t } = e;
    I = [t, ...I];
}
function H(e) {
    let { clipId: t } = e;
    I = I.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function Y(e) {
    let { channelId: t } = e;
    S = t;
}
function W(e) {
    let { channelId: t } = e;
    t !== S && (S = null);
}
function K(e) {
    let { applicationName: t } = e;
    if (((N = null), !x.clipsSettings.clipsEnabled)) return !1;
    A = {
        applicationName: t,
        newClipIds: [],
        ended: !1,
    };
}
function z(e) {
    let { errMsg: t } = e;
    N = t;
}
function q(e) {
    let { sourceName: t, pid: n } = e;
    if (!x.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = l.ZP.getGameForPID(n);
        r = null != (i = null == e ? void 0 : e.name) ? i : r;
    }
    if (null == r || "" === r) return !1;
    A = {
        applicationName: r,
        newClipIds: [],
        ended: !1,
    };
}
function X(e) {
    let { streamKey: t } = e;
    if (((P = null), (D[t] = []), null == A || (0, c.my)(t).ownerId !== u.default.getId())) return !1;
    A = 0 === A.newClipIds.length ? null : b(g({}, A), { ended: !0 });
}
function Q(e) {
    (x.hasClips = e.clips.length > 0), (v = e.clips);
}
function J(e) {
    0 ===
        (v = v.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (x.hasClips = !1);
}
function $() {
    if (null == A) return !1;
    A = null;
}
function ee() {
    x.newClipIds = [];
}
function et(e) {
    C[e.userId] = {
        clipsEnabled: (0, i.yE)(e.flags, p.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, i.yE)(e.flags, p.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, i.yE)(e.flags, p.BVn.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function en(e) {
    let { added: t } = e;
    t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function er(e) {
    let { educationType: t } = e;
    switch (t) {
        case _.D5.Error:
            N = null;
            break;
        case _.D5.Disabled:
        case _.D5.Enabled:
            (x.clipsEducationState.dismissedAt = Date.now()),
                (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (x.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
function ei(e) {
    let { clipIds: t } = e;
    R = null != t ? t : [];
}
function ea(e, t, n) {
    if (!(0, d.NS)() || n !== u.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            a = t.substring(n),
            o = JSON.parse(a);
        if (null == o.id) return !1;
        let s = w.get(e);
        return null == s && ((s = new Set()), w.set(e, s)), s.add(o.id), !0;
    } catch (e) {
        return !1;
    }
}
function eo(e) {
    var t;
    return ea(e.channelId, e.message.content, null == (t = e.message.author) ? void 0 : t.id);
}
function es(e) {
    let t = !1;
    for (let r of e.messages) {
        var n;
        t = t || ea(e.channelId, r.content, null == (n = r.author) ? void 0 : n.id);
    }
    return t;
}
class el extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (x = e), M(), this.waitFor(l.ZP);
    }
    getClips() {
        return v;
    }
    getPendingClips() {
        return I;
    }
    getUserAgnosticState() {
        return x;
    }
    getSettings() {
        return x.clipsSettings;
    }
    getLastClipsSession() {
        return A;
    }
    getClipsWarningShown(e) {
        return S === e;
    }
    getActiveAnimation() {
        return P;
    }
    getStreamClipAnimations(e) {
        var t;
        return null != (t = D[e]) ? t : O;
    }
    hasAnyClipAnimations() {
        return Object.values(D).some((e) => e.length > 0);
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
        return T >= _.Kw;
    }
    getLastClipsError() {
        return N;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null != (n = null == (t = C[e]) ? void 0 : t.clipsEnabled) && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = C[e]) ? void 0 : t.allowVoiceRecording) && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = C[e]) ? void 0 : t.allowAnyViewerClips) && n;
    }
    hasClips() {
        return x.hasClips;
    }
    hasTakenDecoupledClip() {
        return x.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return x.newClipIds;
    }
    isClipExporting(e) {
        return R.includes(e);
    }
    getExportingClipIds() {
        return R;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let o of v) {
            var n, r, i, a;
            if (
                (null != t && o.id === t) ||
                (null != e &&
                    (null == (r = o.decision) || null == (n = r.signal) ? void 0 : n.type) === f.Bs.DISTRIBUTED &&
                    (null == (a = o.decision) || null == (i = a.signal) ? void 0 : i.remoteTriggerClipId) === e)
            )
                return o;
        }
        return null;
    }
    wasClipSharedInChannel(e, t) {
        var n;
        let r = w.get(t);
        return null != (n = null == r ? void 0 : r.has(e)) && n;
    }
}
m(el, "displayName", "ClipsStore"),
    m(el, "persistKey", "ClipsStore"),
    m(el, "migrations", [
        (e) => ({
            clipsSettings: null != e ? e : L,
            newClipsCount: 0,
        }),
        (e) => {
            let t = g({}, L, e.clipsSettings);
            return b(g({}, e), { clipsSettings: t });
        },
        (e) => {
            var t;
            return b(g({}, e), { newClipIds: null != (t = e.newClipIds) ? t : [] });
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
            return b(g({}, e), { hasClips: null != (t = e.hasClips) && t });
        },
        (e) =>
            b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), { decoupledClipsEnabled: L.decoupledClipsEnabled }),
            }),
        (e) => {
            var t;
            return b(g({}, e), {
                hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null,
            });
        },
        (e) => {
            var t;
            let r = null == (t = n(131951).Z) ? void 0 : t.getHardwareEncoding();
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
                            ? L.clipsQuality
                            : e.clipsSettings.clipsQuality,
                }),
            }),
        (e) => {
            var t;
            return b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : L.remindersEnabled,
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
                    maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : L.maxAutoClips,
                    clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : L.clipSignals,
                    mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : L.mlPipelinesEnabled,
                    autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : L.autoClipPhrases,
                }),
            });
        },
        (e) =>
            b(g({}, e), {
                clipsSettings: b(g({}, e.clipsSettings), {
                    autoClipPhrases:
                        0 === e.clipsSettings.autoClipPhrases.length
                            ? L.autoClipPhrases
                            : e.clipsSettings.autoClipPhrases,
                }),
            }),
    ]);
let ec = new el(o.Z, {
        CLIPS_SETTINGS_UPDATE: U,
        CLIPS_SAVE_CLIP: F,
        CLIPS_SAVE_CLIP_PLACEHOLDER: V,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: H,
        CLIPS_SAVE_CLIP_START: G,
        CLIPS_SAVE_CLIP_ERROR: Z,
        CLIPS_SAVE_ANIMATION_END: B,
        STREAM_START: q,
        STREAM_STOP: X,
        CLIPS_CLEAR_CLIPS_SESSION: $,
        CLIPS_CLEAR_NEW_CLIP_IDS: ee,
        CLIPS_LOAD_DIRECTORY_SUCCESS: Q,
        CLIPS_DELETE_CLIP: J,
        CLIPS_UPDATE_METADATA: j,
        RTC_CONNECTION_FLAGS: et,
        CLIPS_SHOW_CALL_WARNING: Y,
        VOICE_CHANNEL_SELECT: W,
        CLIPS_CLASSIFY_HARDWARE: k,
        CLIPS_INIT: K,
        CLIPS_INIT_FAILURE: z,
        CLIPS_DISMISS_EDUCATION: er,
        RUNNING_GAMES_CHANGE: en,
        CLIPS_SET_EXPORTING: ei,
        MESSAGE_CREATE: eo,
        LOAD_MESSAGES_SUCCESS: es,
    }),
    eu = ec;
