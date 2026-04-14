"use strict";
let r;
n.d(t, { Ay: () => uI, sV: () => u });
let i =
        Number.isFinite ||
        function (e) {
            return "number" == typeof e && isFinite(e);
        },
    s =
        Number.isSafeInteger ||
        function (e) {
            return "number" == typeof e && Math.abs(e) <= a;
        },
    a = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
    o = (function (e) {
        return (
            (e.NETWORK_ERROR = "networkError"),
            (e.MEDIA_ERROR = "mediaError"),
            (e.KEY_SYSTEM_ERROR = "keySystemError"),
            (e.MUX_ERROR = "muxError"),
            (e.OTHER_ERROR = "otherError"),
            e
        );
    })({}),
    l = (function (e) {
        return (
            (e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
            (e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
            (e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
            (e.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense"),
            (e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed"),
            (e.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed"),
            (e.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed"),
            (e.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed"),
            (e.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted"),
            (e.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError"),
            (e.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError"),
            (e.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError"),
            (e.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError"),
            (e.MANIFEST_LOAD_ERROR = "manifestLoadError"),
            (e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
            (e.MANIFEST_PARSING_ERROR = "manifestParsingError"),
            (e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError"),
            (e.LEVEL_EMPTY_ERROR = "levelEmptyError"),
            (e.LEVEL_LOAD_ERROR = "levelLoadError"),
            (e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
            (e.LEVEL_PARSING_ERROR = "levelParsingError"),
            (e.LEVEL_SWITCH_ERROR = "levelSwitchError"),
            (e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
            (e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
            (e.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
            (e.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
            (e.FRAG_LOAD_ERROR = "fragLoadError"),
            (e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
            (e.FRAG_DECRYPT_ERROR = "fragDecryptError"),
            (e.FRAG_PARSING_ERROR = "fragParsingError"),
            (e.FRAG_GAP = "fragGap"),
            (e.REMUX_ALLOC_ERROR = "remuxAllocError"),
            (e.KEY_LOAD_ERROR = "keyLoadError"),
            (e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
            (e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
            (e.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError"),
            (e.BUFFER_APPEND_ERROR = "bufferAppendError"),
            (e.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
            (e.BUFFER_STALLED_ERROR = "bufferStalledError"),
            (e.BUFFER_FULL_ERROR = "bufferFullError"),
            (e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
            (e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
            (e.ASSET_LIST_LOAD_ERROR = "assetListLoadError"),
            (e.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout"),
            (e.ASSET_LIST_PARSING_ERROR = "assetListParsingError"),
            (e.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError"),
            (e.INTERNAL_EXCEPTION = "internalException"),
            (e.INTERNAL_ABORTED = "aborted"),
            (e.ATTACH_MEDIA_ERROR = "attachMediaError"),
            (e.UNKNOWN = "unknown"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e.MEDIA_ATTACHING = "hlsMediaAttaching"),
            (e.MEDIA_ATTACHED = "hlsMediaAttached"),
            (e.MEDIA_DETACHING = "hlsMediaDetaching"),
            (e.MEDIA_DETACHED = "hlsMediaDetached"),
            (e.MEDIA_ENDED = "hlsMediaEnded"),
            (e.STALL_RESOLVED = "hlsStallResolved"),
            (e.BUFFER_RESET = "hlsBufferReset"),
            (e.BUFFER_CODECS = "hlsBufferCodecs"),
            (e.BUFFER_CREATED = "hlsBufferCreated"),
            (e.BUFFER_APPENDING = "hlsBufferAppending"),
            (e.BUFFER_APPENDED = "hlsBufferAppended"),
            (e.BUFFER_EOS = "hlsBufferEos"),
            (e.BUFFERED_TO_END = "hlsBufferedToEnd"),
            (e.BUFFER_FLUSHING = "hlsBufferFlushing"),
            (e.BUFFER_FLUSHED = "hlsBufferFlushed"),
            (e.MANIFEST_LOADING = "hlsManifestLoading"),
            (e.MANIFEST_LOADED = "hlsManifestLoaded"),
            (e.MANIFEST_PARSED = "hlsManifestParsed"),
            (e.LEVEL_SWITCHING = "hlsLevelSwitching"),
            (e.LEVEL_SWITCHED = "hlsLevelSwitched"),
            (e.LEVEL_LOADING = "hlsLevelLoading"),
            (e.LEVEL_LOADED = "hlsLevelLoaded"),
            (e.LEVEL_UPDATED = "hlsLevelUpdated"),
            (e.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
            (e.LEVELS_UPDATED = "hlsLevelsUpdated"),
            (e.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
            (e.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
            (e.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
            (e.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
            (e.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
            (e.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated"),
            (e.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
            (e.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
            (e.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
            (e.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
            (e.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
            (e.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated"),
            (e.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
            (e.CUES_PARSED = "hlsCuesParsed"),
            (e.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
            (e.INIT_PTS_FOUND = "hlsInitPtsFound"),
            (e.FRAG_LOADING = "hlsFragLoading"),
            (e.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
            (e.FRAG_LOADED = "hlsFragLoaded"),
            (e.FRAG_DECRYPTED = "hlsFragDecrypted"),
            (e.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
            (e.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
            (e.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
            (e.FRAG_PARSED = "hlsFragParsed"),
            (e.FRAG_BUFFERED = "hlsFragBuffered"),
            (e.FRAG_CHANGED = "hlsFragChanged"),
            (e.FPS_DROP = "hlsFpsDrop"),
            (e.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
            (e.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated"),
            (e.ERROR = "hlsError"),
            (e.DESTROYING = "hlsDestroying"),
            (e.KEY_LOADING = "hlsKeyLoading"),
            (e.KEY_LOADED = "hlsKeyLoaded"),
            (e.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
            (e.BACK_BUFFER_REACHED = "hlsBackBufferReached"),
            (e.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded"),
            (e.ASSET_LIST_LOADING = "hlsAssetListLoading"),
            (e.ASSET_LIST_LOADED = "hlsAssetListLoaded"),
            (e.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated"),
            (e.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary"),
            (e.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated"),
            (e.INTERSTITIAL_STARTED = "hlsInterstitialStarted"),
            (e.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted"),
            (e.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded"),
            (e.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError"),
            (e.INTERSTITIAL_ENDED = "hlsInterstitialEnded"),
            (e.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed"),
            (e.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached"),
            (e.EVENT_CUE_ENTER = "hlsEventCueEnter"),
            e
        );
    })({});
var c,
    d,
    _ = "manifest",
    f = "level",
    h = "audioTrack",
    p = "subtitleTrack",
    m = "main",
    E = "audio",
    g = "subtitle";
class A {
    constructor(e, t = 0, n = 0) {
        (this.halfLife = void 0),
            (this.alpha_ = void 0),
            (this.estimate_ = void 0),
            (this.totalWeight_ = void 0),
            (this.halfLife = e),
            (this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0),
            (this.estimate_ = t),
            (this.totalWeight_ = n);
    }
    sample(e, t) {
        let n = Math.pow(this.alpha_, e);
        (this.estimate_ = t * (1 - n) + n * this.estimate_), (this.totalWeight_ += e);
    }
    getTotalWeight() {
        return this.totalWeight_;
    }
    getEstimate() {
        if (this.alpha_) {
            let e = 1 - Math.pow(this.alpha_, this.totalWeight_);
            if (e) return this.estimate_ / e;
        }
        return this.estimate_;
    }
}
class I {
    constructor(e, t, n, r = 100) {
        (this.defaultEstimate_ = void 0),
            (this.minWeight_ = void 0),
            (this.minDelayMs_ = void 0),
            (this.slow_ = void 0),
            (this.fast_ = void 0),
            (this.defaultTTFB_ = void 0),
            (this.ttfb_ = void 0),
            (this.defaultEstimate_ = n),
            (this.minWeight_ = 0.001),
            (this.minDelayMs_ = 50),
            (this.slow_ = new A(e)),
            (this.fast_ = new A(t)),
            (this.defaultTTFB_ = r),
            (this.ttfb_ = new A(e));
    }
    update(e, t) {
        let { slow_: n, fast_: r, ttfb_: i } = this;
        n.halfLife !== e && (this.slow_ = new A(e, n.getEstimate(), n.getTotalWeight())),
            r.halfLife !== t && (this.fast_ = new A(t, r.getEstimate(), r.getTotalWeight())),
            i.halfLife !== e && (this.ttfb_ = new A(e, i.getEstimate(), i.getTotalWeight()));
    }
    sample(e, t) {
        let n = (e = Math.max(e, this.minDelayMs_)) / 1e3,
            r = (8 * t) / n;
        this.fast_.sample(n, r), this.slow_.sample(n, r);
    }
    sampleTTFB(e) {
        let t = Math.sqrt(2) * Math.exp(-Math.pow(e / 1e3, 2) / 2);
        this.ttfb_.sample(t, Math.max(e, 5));
    }
    canEstimate() {
        return this.fast_.getTotalWeight() >= this.minWeight_;
    }
    getEstimate() {
        return this.canEstimate()
            ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
            : this.defaultEstimate_;
    }
    getEstimateTTFB() {
        return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
    }
    get defaultEstimate() {
        return this.defaultEstimate_;
    }
    destroy() {}
}
function T(e, t, n) {
    return (
        (t = N(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
        e
    );
}
function S() {
    return (S = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(null, arguments);
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
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? y(Object(n), !0).forEach(function (t) {
                  T(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function C(e, t) {
    if ("object" != typeof e || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t);
        if ("object" != typeof r) return r;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}
function N(e) {
    var t = C(e, "string");
    return "symbol" == typeof t ? t : t + "";
}
class R {
    constructor(e, t) {
        (this.trace = void 0),
            (this.debug = void 0),
            (this.log = void 0),
            (this.warn = void 0),
            (this.info = void 0),
            (this.error = void 0);
        const n = `[${e}]:`;
        (this.trace = b),
            (this.debug = t.debug.bind(null, n)),
            (this.log = t.log.bind(null, n)),
            (this.warn = t.warn.bind(null, n)),
            (this.info = t.info.bind(null, n)),
            (this.error = t.error.bind(null, n));
    }
}
let b = function () {},
    O = { trace: b, debug: b, log: b, warn: b, info: b, error: b };
function D() {
    return S({}, O);
}
function L(e, t) {
    let n = self.console[e];
    return n ? n.bind(self.console, `${t ? "[" + t + "] " : ""}[${e}] >`) : b;
}
function w(e, t, n) {
    return t[e] ? t[e].bind(t) : L(e, n);
}
let M = D();
function x(e, t, n) {
    let r = D();
    if (("object" == typeof console && !0 === e) || "object" == typeof e) {
        let i = ["debug", "log", "info", "warn", "error"];
        i.forEach((t) => {
            r[t] = w(t, e, n);
        });
        try {
            r.log(`Debug logs enabled for "${t}" in hls.js version 1.6.12`);
        } catch (e) {
            return D();
        }
        i.forEach((t) => {
            M[t] = w(t, e);
        });
    } else S(M, r);
    return r;
}
let P = M;
function k(e = !0) {
    if (!("u" < typeof self))
        return ((e || !self.MediaSource) && self.ManagedMediaSource) || self.MediaSource || self.WebKitMediaSource;
}
function U(e) {
    return "u" > typeof self && e === self.ManagedMediaSource;
}
function G(e, t) {
    let n = Object.keys(e),
        r = Object.keys(t),
        i = n.length,
        s = r.length;
    return !i || !s || (i === s && !n.some((e) => -1 === r.indexOf(e)));
}
function F(e, t = !1) {
    let n, r;
    if ("u" > typeof TextDecoder) {
        let n = new TextDecoder("utf-8").decode(e);
        if (t) {
            let e = n.indexOf("\0");
            return -1 !== e ? n.substring(0, e) : n;
        }
        return n.replace(/\0/g, "");
    }
    let i = e.length,
        s = "",
        a = 0;
    for (; a < i && (0 !== (n = e[a++]) || !t); )
        if (0 !== n && 3 !== n)
            switch (n >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    s += String.fromCharCode(n);
                    break;
                case 12:
                case 13:
                    s += String.fromCharCode(((31 & n) << 6) | (63 & (r = e[a++])));
                    break;
                case 14:
                    s += String.fromCharCode(((15 & n) << 12) | ((63 & (r = e[a++])) << 6) | (63 & e[a++]));
            }
    return s;
}
function B(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
        let r = e[n].toString(16);
        r.length < 2 && (r = "0" + r), (t += r);
    }
    return t;
}
function V(e) {
    return Uint8Array.from(
        e
            .replace(/^0x/, "")
            .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
            .replace(/ +$/, "")
            .split(" "),
    ).buffer;
}
function H(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var j = { exports: {} },
    Y = (function () {
        return (
            c ||
                ((c = 1),
                !(function (e, t) {
                    !(function (t) {
                        var n =
                                /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
                            r = /^(?=([^\/?#]*))\1([^]*)$/,
                            i = /(?:\/|^)\.(?=\/)/g,
                            s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                            a = {
                                buildAbsoluteURL: function (e, t, n) {
                                    if (((n = n || {}), (e = e.trim()), !(t = t.trim()))) {
                                        if (!n.alwaysNormalize) return e;
                                        var i = a.parseURL(e);
                                        if (!i) throw Error("Error trying to parse base URL.");
                                        return (i.path = a.normalizePath(i.path)), a.buildURLFromParts(i);
                                    }
                                    var s = a.parseURL(t);
                                    if (!s) throw Error("Error trying to parse relative URL.");
                                    if (s.scheme)
                                        return n.alwaysNormalize
                                            ? ((s.path = a.normalizePath(s.path)), a.buildURLFromParts(s))
                                            : t;
                                    var o = a.parseURL(e);
                                    if (!o) throw Error("Error trying to parse base URL.");
                                    if (!o.netLoc && o.path && "/" !== o.path[0]) {
                                        var l = r.exec(o.path);
                                        (o.netLoc = l[1]), (o.path = l[2]);
                                    }
                                    o.netLoc && !o.path && (o.path = "/");
                                    var u = {
                                        scheme: o.scheme,
                                        netLoc: s.netLoc,
                                        path: null,
                                        params: s.params,
                                        query: s.query,
                                        fragment: s.fragment,
                                    };
                                    if (!s.netLoc && ((u.netLoc = o.netLoc), "/" !== s.path[0]))
                                        if (s.path) {
                                            var c = o.path,
                                                d = c.substring(0, c.lastIndexOf("/") + 1) + s.path;
                                            u.path = a.normalizePath(d);
                                        } else
                                            (u.path = o.path),
                                                !s.params && ((u.params = o.params), s.query || (u.query = o.query));
                                    return (
                                        null === u.path &&
                                            (u.path = n.alwaysNormalize ? a.normalizePath(s.path) : s.path),
                                        a.buildURLFromParts(u)
                                    );
                                },
                                parseURL: function (e) {
                                    var t = n.exec(e);
                                    return t
                                        ? {
                                              scheme: t[1] || "",
                                              netLoc: t[2] || "",
                                              path: t[3] || "",
                                              params: t[4] || "",
                                              query: t[5] || "",
                                              fragment: t[6] || "",
                                          }
                                        : null;
                                },
                                normalizePath: function (e) {
                                    for (
                                        e = e.split("").reverse().join("").replace(i, "");
                                        e.length !== (e = e.replace(s, "")).length;
                                    );
                                    return e.split("").reverse().join("");
                                },
                                buildURLFromParts: function (e) {
                                    return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
                                },
                            };
                        e.exports = a;
                    })();
                })(j)),
            j.exports
        );
    })();
class W {
    constructor() {
        (this.aborted = !1),
            (this.loaded = 0),
            (this.retry = 0),
            (this.total = 0),
            (this.chunkCount = 0),
            (this.bwEstimate = 0),
            (this.loading = { start: 0, first: 0, end: 0 }),
            (this.parsing = { start: 0, end: 0 }),
            (this.buffering = { start: 0, first: 0, end: 0 });
    }
}
var K = "audio",
    $ = "video",
    z = "audiovideo";
class q {
    constructor(e) {
        (this._byteRange = null),
            (this._url = null),
            (this._stats = null),
            (this._streams = null),
            (this.base = void 0),
            (this.relurl = void 0),
            "string" == typeof e && (e = { url: e }),
            (this.base = e),
            ee(this, "stats");
    }
    setByteRange(e, t) {
        let n,
            r = e.split("@", 2);
        (n = 1 === r.length ? (null == t ? void 0 : t.byteRangeEndOffset) || 0 : parseInt(r[1])),
            (this._byteRange = [n, parseInt(r[0]) + n]);
    }
    get baseurl() {
        return this.base.url;
    }
    get byteRange() {
        return null === this._byteRange ? [] : this._byteRange;
    }
    get byteRangeStartOffset() {
        return this.byteRange[0];
    }
    get byteRangeEndOffset() {
        return this.byteRange[1];
    }
    get elementaryStreams() {
        return null === this._streams && (this._streams = { [K]: null, [$]: null, [z]: null }), this._streams;
    }
    set elementaryStreams(e) {
        this._streams = e;
    }
    get hasStats() {
        return null !== this._stats;
    }
    get hasStreams() {
        return null !== this._streams;
    }
    get stats() {
        return null === this._stats && (this._stats = new W()), this._stats;
    }
    set stats(e) {
        this._stats = e;
    }
    get url() {
        return (
            !this._url &&
                this.baseurl &&
                this.relurl &&
                (this._url = Y.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })),
            this._url || ""
        );
    }
    set url(e) {
        this._url = e;
    }
    clearElementaryStreamInfo() {
        let { elementaryStreams: e } = this;
        (e[K] = null), (e[$] = null), (e[z] = null);
    }
}
function Z(e) {
    return "initSegment" !== e.sn;
}
class X extends q {
    constructor(e, t) {
        super(t),
            (this._decryptdata = null),
            (this._programDateTime = null),
            (this._ref = null),
            (this._bitrate = void 0),
            (this.rawProgramDateTime = null),
            (this.tagList = []),
            (this.duration = 0),
            (this.sn = 0),
            (this.levelkeys = void 0),
            (this.type = void 0),
            (this.loader = null),
            (this.keyLoader = null),
            (this.level = -1),
            (this.cc = 0),
            (this.startPTS = void 0),
            (this.endPTS = void 0),
            (this.startDTS = void 0),
            (this.endDTS = void 0),
            (this.start = 0),
            (this.playlistOffset = 0),
            (this.deltaPTS = void 0),
            (this.maxStartPTS = void 0),
            (this.minEndPTS = void 0),
            (this.data = void 0),
            (this.bitrateTest = !1),
            (this.title = null),
            (this.initSegment = null),
            (this.endList = void 0),
            (this.gap = void 0),
            (this.urlId = 0),
            (this.type = e);
    }
    get byteLength() {
        if (this.hasStats) {
            let e = this.stats.total;
            if (e) return e;
        }
        if (this.byteRange.length) {
            let e = this.byteRange[0],
                t = this.byteRange[1];
            if (i(e) && i(t)) return t - e;
        }
        return null;
    }
    get bitrate() {
        return this.byteLength ? (8 * this.byteLength) / this.duration : this._bitrate ? this._bitrate : null;
    }
    set bitrate(e) {
        this._bitrate = e;
    }
    get decryptdata() {
        let { levelkeys: e } = this;
        if (!e && !this._decryptdata) return null;
        if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
            let e = this.levelkeys.identity;
            if (e) this._decryptdata = e.getDecryptData(this.sn);
            else {
                let e = Object.keys(this.levelkeys);
                if (1 === e.length) {
                    let t = (this._decryptdata = this.levelkeys[e[0]] || null);
                    if (t) return t.getDecryptData(this.sn);
                }
            }
        }
        return this._decryptdata;
    }
    get end() {
        return this.start + this.duration;
    }
    get endProgramDateTime() {
        if (null === this.programDateTime) return null;
        let e = i(this.duration) ? this.duration : 0;
        return this.programDateTime + 1e3 * e;
    }
    get encrypted() {
        var e, t;
        if (null != (e = this._decryptdata) && e.encrypted) return !0;
        if (this.levelkeys) {
            let e = Object.keys(this.levelkeys),
                n = e.length;
            if (n > 1 || (1 === n && null != (t = this.levelkeys[e[0]]) && t.encrypted)) return !0;
        }
        return !1;
    }
    get programDateTime() {
        return (
            null === this._programDateTime &&
                this.rawProgramDateTime &&
                (this.programDateTime = Date.parse(this.rawProgramDateTime)),
            this._programDateTime
        );
    }
    set programDateTime(e) {
        if (!i(e)) {
            this._programDateTime = this.rawProgramDateTime = null;
            return;
        }
        this._programDateTime = e;
    }
    get ref() {
        return Z(this)
            ? (this._ref ||
                  (this._ref = {
                      base: this.base,
                      start: this.start,
                      duration: this.duration,
                      sn: this.sn,
                      programDateTime: this.programDateTime,
                  }),
              this._ref)
            : null;
    }
    addStart(e) {
        this.setStart(this.start + e);
    }
    setStart(e) {
        (this.start = e), this._ref && (this._ref.start = e);
    }
    setDuration(e) {
        (this.duration = e), this._ref && (this._ref.duration = e);
    }
    setKeyFormat(e) {
        if (this.levelkeys) {
            let t = this.levelkeys[e];
            t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn));
        }
    }
    abortRequests() {
        var e, t;
        null == (e = this.loader) || e.abort(), null == (t = this.keyLoader) || t.abort();
    }
    setElementaryStreamInfo(e, t, n, r, i, s = !1) {
        let { elementaryStreams: a } = this,
            o = a[e];
        if (!o) {
            a[e] = { startPTS: t, endPTS: n, startDTS: r, endDTS: i, partial: s };
            return;
        }
        (o.startPTS = Math.min(o.startPTS, t)),
            (o.endPTS = Math.max(o.endPTS, n)),
            (o.startDTS = Math.min(o.startDTS, r)),
            (o.endDTS = Math.max(o.endDTS, i));
    }
}
class Q extends q {
    constructor(e, t, n, r, i) {
        super(n),
            (this.fragOffset = 0),
            (this.duration = 0),
            (this.gap = !1),
            (this.independent = !1),
            (this.relurl = void 0),
            (this.fragment = void 0),
            (this.index = void 0),
            (this.duration = e.decimalFloatingPoint("DURATION")),
            (this.gap = e.bool("GAP")),
            (this.independent = e.bool("INDEPENDENT")),
            (this.relurl = e.enumeratedString("URI")),
            (this.fragment = t),
            (this.index = r);
        const s = e.enumeratedString("BYTERANGE");
        s && this.setByteRange(s, i), i && (this.fragOffset = i.fragOffset + i.duration);
    }
    get start() {
        return this.fragment.start + this.fragOffset;
    }
    get end() {
        return this.start + this.duration;
    }
    get loaded() {
        let { elementaryStreams: e } = this;
        return !!(e.audio || e.video || e.audiovideo);
    }
}
function J(e, t) {
    let n = Object.getPrototypeOf(e);
    if (n) {
        let e = Object.getOwnPropertyDescriptor(n, t);
        return e || J(n, t);
    }
}
function ee(e, t) {
    let n = J(e, t);
    n && ((n.enumerable = !0), Object.defineProperty(e, t, n));
}
let et = 0xffffffff,
    en = [].push,
    er = { video: 1, audio: 2, id3: 3, text: 4 };
function ei(e) {
    return String.fromCharCode.apply(null, e);
}
function es(e, t) {
    let n = (e[t] << 8) | e[t + 1];
    return n < 0 ? 65536 + n : n;
}
function ea(e, t) {
    let n = el(e, t);
    return n < 0 ? 0x100000000 + n : n;
}
function eo(e, t) {
    let n = ea(e, t);
    return (n *= 0x100000000), (n += ea(e, t + 4));
}
function el(e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
}
function eu(e) {
    let t = e.byteLength;
    for (let n = 0; n < t; ) {
        let r = ea(e, n);
        if (r > 8 && 109 === e[n + 4] && 111 === e[n + 5] && 111 === e[n + 6] && 102 === e[n + 7]) return !0;
        n = r > 1 ? n + r : t;
    }
    return !1;
}
function ec(e, t) {
    let n = [];
    if (!t.length) return n;
    let r = e.byteLength;
    for (let i = 0; i < r; ) {
        let s = ea(e, i),
            a = ei(e.subarray(i + 4, i + 8)),
            o = s > 1 ? i + s : r;
        if (a === t[0])
            if (1 === t.length) n.push(e.subarray(i + 8, o));
            else {
                let r = ec(e.subarray(i + 8, o), t.slice(1));
                r.length && en.apply(n, r);
            }
        i = o;
    }
    return n;
}
function ed(e) {
    let t = [],
        n = e[0],
        r = 8,
        i = ea(e, 8);
    r += 4;
    let s = 0,
        a = 0;
    0 === n ? ((s = ea(e, r)), (a = ea(e, r + 4)), (r += 8)) : ((s = eo(e, r)), (a = eo(e, r + 8)), (r += 16)),
        (r += 2);
    let o = e.length + a,
        l = es(e, r);
    r += 2;
    for (let n = 0; n < l; n++) {
        let n = r,
            s = ea(e, n);
        n += 4;
        let a = 0x7fffffff & s;
        if (1 == (0x80000000 & s) >>> 31) return P.warn("SIDX has hierarchical references (not supported)"), null;
        let l = ea(e, n);
        (n += 4),
            t.push({ referenceSize: a, subsegmentDuration: l, info: { duration: l / i, start: o, end: o + a - 1 } }),
            (o += a),
            (n += 4),
            (r = n);
    }
    return { earliestPresentationTime: s, timescale: i, version: n, referencesCount: l, references: t };
}
function e_(e) {
    let t = [],
        n = ec(e, ["moov", "trak"]);
    for (let e = 0; e < n.length; e++) {
        let r = n[e],
            i = ec(r, ["tkhd"])[0];
        if (i) {
            let e = i[0],
                n = ea(i, 0 === e ? 12 : 20),
                s = ec(r, ["mdia", "mdhd"])[0];
            if (s) {
                e = s[0];
                let i = ea(s, 0 === e ? 12 : 20),
                    a = ec(r, ["mdia", "hdlr"])[0];
                if (a) {
                    let e = ei(a.subarray(8, 12)),
                        s = { soun: K, vide: $ }[e],
                        o = ef(ec(r, ["mdia", "minf", "stbl", "stsd"])[0]);
                    s
                        ? ((t[n] = { timescale: i, type: s, stsd: o }), (t[s] = v({ timescale: i, id: n }, o)))
                        : (t[n] = { timescale: i, type: e, stsd: o });
                }
            }
        }
    }
    return (
        ec(e, ["moov", "mvex", "trex"]).forEach((e) => {
            let n = t[ea(e, 4)];
            n && (n.default = { duration: ea(e, 12), flags: ea(e, 20) });
        }),
        t
    );
}
function ef(e) {
    let t,
        n = e.subarray(8),
        r = n.subarray(86),
        i = ei(n.subarray(4, 8)),
        s = i,
        a = "enca" === i || "encv" === i;
    if (a) {
        let e = ec(n, [i])[0].subarray("enca" === i ? 28 : 78);
        ec(e, ["sinf"]).forEach((e) => {
            let t = ec(e, ["schm"])[0];
            if (t) {
                let n = ei(t.subarray(4, 8));
                if ("cbcs" === n || "cenc" === n) {
                    let t = ec(e, ["frma"])[0];
                    t && (s = ei(t));
                }
            }
        });
    }
    let o = s;
    switch (s) {
        case "avc1":
        case "avc2":
        case "avc3":
        case "avc4": {
            let e = ec(r, ["avcC"])[0];
            e &&
                e.length > 3 &&
                ((s += "." + eE(e[1]) + eE(e[2]) + eE(e[3])), (t = eh("avc1" === o ? "dva1" : "dvav", r)));
            break;
        }
        case "mp4a": {
            let e = ec(n, [i])[0],
                t = ec(e.subarray(28), ["esds"])[0];
            if (t && t.length > 7) {
                let e = 4;
                if (3 !== t[e++]) break;
                e = em(t, e) + 2;
                let n = t[e++];
                if ((128 & n && (e += 2), 64 & n && (e += t[e++]), 4 !== t[e++])) break;
                e = em(t, e);
                let r = t[e++];
                if (64 === r) s += "." + eE(r);
                else break;
                if (((e += 12), 5 !== t[e++])) break;
                e = em(t, e);
                let i = t[e++],
                    a = (248 & i) >> 3;
                31 === a && (a += 1 + ((7 & i) << 3) + ((224 & t[e]) >> 5)), (s += "." + a);
            }
            break;
        }
        case "hvc1":
        case "hev1": {
            let e = ec(r, ["hvcC"])[0];
            if (e && e.length > 12) {
                let t = e[1],
                    n = ["", "A", "B", "C"][t >> 6],
                    r = 31 & t,
                    i = ea(e, 2),
                    a = (32 & t) >> 5 ? "H" : "L",
                    o = e[12],
                    l = e.subarray(6, 12);
                (s += "." + n + r), (s += "." + ep(i).toString(16).toUpperCase()), (s += "." + a + o);
                let u = "";
                for (let e = l.length; e--; ) {
                    let t = l[e];
                    (t || u) && (u = "." + t.toString(16).toUpperCase() + u);
                }
                s += u;
            }
            t = eh("hev1" == o ? "dvhe" : "dvh1", r);
            break;
        }
        case "dvh1":
        case "dvhe":
        case "dvav":
        case "dva1":
        case "dav1":
            s = eh(s, r) || s;
            break;
        case "vp09": {
            let e = ec(r, ["vpcC"])[0];
            if (e && e.length > 6) {
                let t = e[4],
                    n = e[5],
                    r = (e[6] >> 4) & 15;
                s += "." + eg(t) + "." + eg(n) + "." + eg(r);
            }
            break;
        }
        case "av01": {
            let e = ec(r, ["av1C"])[0];
            if (e && e.length > 2) {
                let n = e[1] >>> 5,
                    i = 31 & e[1],
                    a = e[2] >>> 7 ? "H" : "M",
                    o = (64 & e[2]) >> 6,
                    l = (32 & e[2]) >> 5,
                    u = 2 === n && o ? (l ? 12 : 10) : o ? 10 : 8,
                    c = (16 & e[2]) >> 4,
                    d = (8 & e[2]) >> 3,
                    _ = (4 & e[2]) >> 2,
                    f = 3 & e[2],
                    h = 1,
                    p = 1,
                    m = 1,
                    E = 0;
                (s +=
                    "." +
                    n +
                    "." +
                    eg(i) +
                    a +
                    "." +
                    eg(u) +
                    "." +
                    c +
                    "." +
                    d +
                    _ +
                    f +
                    "." +
                    eg(h) +
                    "." +
                    eg(p) +
                    "." +
                    eg(m) +
                    "." +
                    E),
                    (t = eh("dav1", r));
            }
        }
    }
    return { codec: s, encrypted: a, supplemental: t };
}
function eh(e, t) {
    let n = ec(t, ["dvvC"]),
        r = n.length ? n[0] : ec(t, ["dvcC"])[0];
    if (r) {
        let t = (r[2] >> 1) & 127,
            n = ((r[2] << 5) & 32) | ((r[3] >> 3) & 31);
        return e + "." + eg(t) + "." + eg(n);
    }
}
function ep(e) {
    let t = 0;
    for (let n = 0; n < 32; n++) t |= ((e >> n) & 1) << (31 - n);
    return t >>> 0;
}
function em(e, t) {
    let n = t + 5;
    for (; 128 & e[t++] && t < n; );
    return t;
}
function eE(e) {
    return ("0" + e.toString(16).toUpperCase()).slice(-2);
}
function eg(e) {
    return (e < 10 ? "0" : "") + e;
}
function eA(e, t) {
    if (!e || !t) return;
    let n = t.keyId;
    n &&
        t.isCommonEncryption &&
        ec(e, ["moov", "trak"]).forEach((e) => {
            let t = ec(e, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8),
                r = ec(t, ["enca"]),
                i = r.length > 0;
            i || (r = ec(t, ["encv"])),
                r.forEach((e) => {
                    ec(i ? e.subarray(28) : e.subarray(78), ["sinf"]).forEach((e) => {
                        let t = eI(e);
                        if (t) {
                            let e = t.subarray(8, 24);
                            e.some((e) => 0 !== e) ||
                                (P.log(
                                    `[eme] Patching keyId in 'enc${i ? "a" : "v"}>sinf>>tenc' box: ${B(e)} -> ${B(n)}`,
                                ),
                                t.set(n, 8));
                        }
                    });
                });
        });
}
function eI(e) {
    let t = ec(e, ["schm"])[0];
    if (t) {
        let n = ei(t.subarray(4, 8));
        if ("cbcs" === n || "cenc" === n) return ec(e, ["schi", "tenc"])[0];
    }
    return null;
}
function eT(e, t, n) {
    let r = {},
        s = ec(e, ["moof", "traf"]);
    for (let e = 0; e < s.length; e++) {
        let a = s[e],
            o = ec(a, ["tfhd"])[0],
            l = ea(o, 4),
            u = t[l];
        if (!u) continue;
        r[l] || (r[l] = { start: NaN, duration: 0, sampleCount: 0, timescale: u.timescale, type: u.type });
        let c = r[l],
            d = ec(a, ["tfdt"])[0];
        if (d) {
            let e = d[0],
                t = ea(d, 4);
            1 === e &&
                (t === et
                    ? n.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time")
                    : ((t *= et + 1), (t += ea(d, 8)))),
                i(t) && (!i(c.start) || t < c.start) && (c.start = t);
        }
        let _ = u.default,
            f = ea(o, 0) | (null == _ ? void 0 : _.flags),
            h = (null == _ ? void 0 : _.duration) || 0;
        8 & f && (h = 2 & f ? ea(o, 12) : ea(o, 8));
        let p = ec(a, ["trun"]),
            m = c.start || 0,
            E = 0,
            g = h;
        for (let e = 0; e < p.length; e++) {
            let t = p[e],
                n = ea(t, 4),
                r = c.sampleCount;
            c.sampleCount += n;
            let i = 1 & t[3],
                s = 4 & t[3],
                a = 1 & t[2],
                o = 2 & t[2],
                l = 4 & t[2],
                u = 8 & t[2],
                d = 8,
                _ = n;
            for (
                i && (d += 4),
                    s &&
                        n &&
                        (1 & t[d + 1] || void 0 !== c.keyFrameIndex || (c.keyFrameIndex = r),
                        (d += 4),
                        a ? ((g = ea(t, d)), (d += 4)) : (g = h),
                        o && (d += 4),
                        u && (d += 4),
                        (m += g),
                        (E += g),
                        _--);
                _--;
            )
                a ? ((g = ea(t, d)), (d += 4)) : (g = h),
                    o && (d += 4),
                    l &&
                        (1 & t[d + 1] ||
                            void 0 !== c.keyFrameIndex ||
                            ((c.keyFrameIndex = c.sampleCount - (_ + 1)), (c.keyFrameStart = m)),
                        (d += 4)),
                    u && (d += 4),
                    (m += g),
                    (E += g);
            !E && h && (E += h * n);
        }
        c.duration += E;
    }
    if (!Object.keys(r).some((e) => r[e].duration)) {
        let t = 1 / 0,
            n = 0,
            s = ec(e, ["sidx"]);
        for (let e = 0; e < s.length; e++) {
            let r = ed(s[e]);
            if (null != r && r.references) {
                t = Math.min(t, r.earliestPresentationTime / r.timescale);
                let e = r.references.reduce((e, t) => e + t.info.duration || 0, 0);
                n = Math.max(n, e + r.earliestPresentationTime / r.timescale);
            }
        }
        n &&
            i(n) &&
            Object.keys(r).forEach((e) => {
                r[e].duration || (r[e].duration = n * r[e].timescale - r[e].start);
            });
    }
    return r;
}
function eS(e) {
    let t = { valid: null, remainder: null },
        n = ec(e, ["moof"]);
    if (n.length < 2) return (t.remainder = e), t;
    let r = n[n.length - 1];
    return (t.valid = e.slice(0, r.byteOffset - 8)), (t.remainder = e.slice(r.byteOffset - 8)), t;
}
function ey(e, t) {
    let n = new Uint8Array(e.length + t.length);
    return n.set(e), n.set(t, e.length), n;
}
function ev(e, t) {
    let n = [],
        r = t.samples,
        i = t.timescale,
        s = t.id,
        a = !1;
    return (
        ec(r, ["moof"]).map((o) => {
            let l = o.byteOffset - 8;
            ec(o, ["traf"]).map((o) => {
                let u = ec(o, ["tfdt"]).map((e) => {
                    let t = e[0],
                        n = ea(e, 4);
                    return 1 === t && ((n *= 0x100000000), (n += ea(e, 8))), n / i;
                })[0];
                return (
                    void 0 !== u && (e = u),
                    ec(o, ["tfhd"]).map((u) => {
                        let c = ea(u, 4),
                            d = 0xffffff & ea(u, 0),
                            _ = (1 & d) != 0,
                            f = (2 & d) != 0,
                            h = (8 & d) != 0,
                            p = 0,
                            m = (16 & d) != 0,
                            E = 0,
                            g = (32 & d) != 0,
                            A = 8;
                        c === s &&
                            (_ && (A += 8),
                            f && (A += 4),
                            h && ((p = ea(u, A)), (A += 4)),
                            m && ((E = ea(u, A)), (A += 4)),
                            g && (A += 4),
                            "video" === t.type && (a = eC(t.codec)),
                            ec(o, ["trun"]).map((s) => {
                                let o = s[0],
                                    u = 0xffffff & ea(s, 0),
                                    c = (1 & u) != 0,
                                    d = 0,
                                    _ = (4 & u) != 0,
                                    f = (256 & u) != 0,
                                    h = 0,
                                    m = (512 & u) != 0,
                                    g = 0,
                                    A = (1024 & u) != 0,
                                    I = (2048 & u) != 0,
                                    T = 0,
                                    S = ea(s, 4),
                                    y = 8;
                                c && ((d = ea(s, y)), (y += 4)), _ && (y += 4);
                                let v = d + l;
                                for (let l = 0; l < S; l++) {
                                    if (
                                        (f ? ((h = ea(s, y)), (y += 4)) : (h = p),
                                        m ? ((g = ea(s, y)), (y += 4)) : (g = E),
                                        A && (y += 4),
                                        I && ((T = 0 === o ? ea(s, y) : el(s, y)), (y += 4)),
                                        t.type === $)
                                    ) {
                                        let t = 0;
                                        for (; t < g; ) {
                                            let s = ea(r, v);
                                            (v += 4),
                                                eN(a, r[v]) && eR(r.subarray(v, v + s), a ? 2 : 1, e + T / i, n),
                                                (v += s),
                                                (t += s + 4);
                                        }
                                    }
                                    e += h / i;
                                }
                            }));
                    })
                );
            });
        }),
        n
    );
}
function eC(e) {
    if (!e) return !1;
    let t = e.substring(0, 4);
    return "hvc1" === t || "hev1" === t || "dvh1" === t || "dvhe" === t;
}
function eN(e, t) {
    if (!e) return 6 == (31 & t);
    {
        let e = (t >> 1) & 63;
        return 39 === e || 40 === e;
    }
}
function eR(e, t, n, r) {
    let i,
        s = eb(e);
    i = 0 + t;
    let a = 0,
        o = 0,
        l = 0;
    for (; i < s.length; ) {
        a = 0;
        do {
            if (i >= s.length) break;
            a += l = s[i++];
        } while (255 === l);
        o = 0;
        do {
            if (i >= s.length) break;
            o += l = s[i++];
        } while (255 === l);
        let e = s.length - i,
            t = i;
        if (o < e) i += o;
        else if (o > e) {
            P.error(`Malformed SEI payload. ${o} is too small, only ${e} bytes left to parse.`);
            break;
        }
        if (4 === a) {
            if (181 === s[t++]) {
                let e = es(s, t);
                if (((t += 2), 49 === e)) {
                    let e = ea(s, t);
                    if (((t += 4), 0x47413934 === e)) {
                        let e = s[t++];
                        if (3 === e) {
                            let i = s[t++],
                                o = 31 & i,
                                l = 64 & i,
                                u = l ? 2 + 3 * o : 0,
                                c = new Uint8Array(u);
                            if (l) {
                                c[0] = i;
                                for (let e = 1; e < u; e++) c[e] = s[t++];
                            }
                            r.push({ type: e, payloadType: a, pts: n, bytes: c });
                        }
                    }
                }
            }
        } else if (5 === a && o > 16) {
            let e = [];
            for (let n = 0; n < 16; n++) {
                let r = s[t++].toString(16);
                e.push(1 == r.length ? "0" + r : r), (3 === n || 5 === n || 7 === n || 9 === n) && e.push("-");
            }
            let i = o - 16,
                l = new Uint8Array(i);
            for (let e = 0; e < i; e++) l[e] = s[t++];
            r.push({ payloadType: a, pts: n, uuid: e.join(""), userData: F(l), userDataBytes: l });
        }
    }
}
function eb(e) {
    let t = e.byteLength,
        n = [],
        r = 1;
    for (; r < t - 2; ) 0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2] ? (n.push(r + 2), (r += 2)) : r++;
    if (0 === n.length) return e;
    let i = t - n.length,
        s = new Uint8Array(i),
        a = 0;
    for (r = 0; r < i; a++, r++) a === n[0] && (a++, n.shift()), (s[r] = e[a]);
    return s;
}
function eO(e) {
    let t = e[0],
        n = "",
        r = "",
        i = 0,
        a = 0,
        o = 0,
        l = 0,
        u = 0,
        c = 0;
    if (0 === t) {
        for (; "\0" !== ei(e.subarray(c, c + 1)); ) (n += ei(e.subarray(c, c + 1))), (c += 1);
        for (n += ei(e.subarray(c, c + 1)), c += 1; "\0" !== ei(e.subarray(c, c + 1)); )
            (r += ei(e.subarray(c, c + 1))), (c += 1);
        (r += ei(e.subarray(c, c + 1))),
            (c += 1),
            (i = ea(e, 12)),
            (a = ea(e, 16)),
            (l = ea(e, 20)),
            (u = ea(e, 24)),
            (c = 28);
    } else if (1 === t) {
        (c += 4), (i = ea(e, c));
        let t = ea(e, (c += 4)),
            a = ea(e, (c += 4));
        for (
            c += 4,
                s((o = 0x100000000 * t + a)) ||
                    ((o = Number.MAX_SAFE_INTEGER),
                    P.warn(
                        "Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box",
                    )),
                l = ea(e, c),
                c += 4,
                u = ea(e, c),
                c += 4;
            "\0" !== ei(e.subarray(c, c + 1));
        )
            (n += ei(e.subarray(c, c + 1))), (c += 1);
        for (n += ei(e.subarray(c, c + 1)), c += 1; "\0" !== ei(e.subarray(c, c + 1)); )
            (r += ei(e.subarray(c, c + 1))), (c += 1);
        (r += ei(e.subarray(c, c + 1))), (c += 1);
    }
    return {
        schemeIdUri: n,
        value: r,
        timeScale: i,
        presentationTime: o,
        presentationTimeDelta: a,
        eventDuration: l,
        id: u,
        payload: e.subarray(c, e.byteLength),
    };
}
function eD(e, ...t) {
    let n = t.length,
        r = 8,
        i = n;
    for (; i--; ) r += t[i].byteLength;
    let s = new Uint8Array(r);
    for (
        s[0] = (r >> 24) & 255,
            s[1] = (r >> 16) & 255,
            s[2] = (r >> 8) & 255,
            s[3] = 255 & r,
            s.set(e, 4),
            i = 0,
            r = 8;
        i < n;
        i++
    )
        s.set(t[i], r), (r += t[i].byteLength);
    return s;
}
function eL(e, t, n) {
    let r, i, s;
    if (16 !== e.byteLength) throw RangeError("Invalid system id");
    (r = 0),
        (i = new Uint8Array()),
        r > 0
            ? ((s = new Uint8Array(4)), t.length > 0 && new DataView(s.buffer).setUint32(0, t.length, !1))
            : (s = new Uint8Array());
    let a = new Uint8Array(4);
    return (
        n.byteLength > 0 && new DataView(a.buffer).setUint32(0, n.byteLength, !1),
        eD([112, 115, 115, 104], new Uint8Array([r, 0, 0, 0]), e, s, i, a, n)
    );
}
function ew(e) {
    let t = [];
    if (e instanceof ArrayBuffer) {
        let n = e.byteLength,
            r = 0;
        for (; r + 32 < n; ) {
            let n = eM(new DataView(e, r));
            t.push(n), (r += n.size);
        }
    }
    return t;
}
function eM(e) {
    let t = e.getUint32(0),
        n = e.byteOffset,
        r = e.byteLength;
    if (r < t) return { offset: n, size: r };
    if (0x70737368 !== e.getUint32(4)) return { offset: n, size: t };
    let i = e.getUint32(8) >>> 24;
    if (0 !== i && 1 !== i) return { offset: n, size: t };
    let s = e.buffer,
        a = B(new Uint8Array(s, n + 12, 16)),
        o = null,
        l = null,
        u = 0;
    if (0 === i) u = 28;
    else {
        let i = e.getUint32(28);
        if (!i || r < 32 + 16 * i) return { offset: n, size: t };
        o = [];
        for (let e = 0; e < i; e++) o.push(new Uint8Array(s, n + 32 + 16 * e, 16));
        u = 32 + 16 * i;
    }
    if (!u) return { offset: n, size: t };
    let c = e.getUint32(u);
    return t - 32 < c
        ? { offset: n, size: t }
        : { version: i, systemId: a, kids: o, data: (l = new Uint8Array(s, n + u + 4, c)), offset: n, size: t };
}
let ex = () => /\(Windows.+Firefox\//i.test(navigator.userAgent),
    eP = {
        audio: {
            a3ds: 1,
            "ac-3": 0.95,
            "ac-4": 1,
            alac: 0.9,
            alaw: 1,
            dra1: 1,
            "dts+": 1,
            "dts-": 1,
            dtsc: 1,
            dtse: 1,
            dtsh: 1,
            "ec-3": 0.9,
            enca: 1,
            fLaC: 0.9,
            flac: 0.9,
            FLAC: 0.9,
            g719: 1,
            g726: 1,
            m4ae: 1,
            mha1: 1,
            mha2: 1,
            mhm1: 1,
            mhm2: 1,
            mlpa: 1,
            mp4a: 1,
            "raw ": 1,
            Opus: 1,
            opus: 1,
            samr: 1,
            sawb: 1,
            sawp: 1,
            sevc: 1,
            sqcp: 1,
            ssmv: 1,
            twos: 1,
            ulaw: 1,
        },
        video: {
            avc1: 1,
            avc2: 1,
            avc3: 1,
            avc4: 1,
            avcp: 1,
            av01: 0.8,
            dav1: 0.8,
            drac: 1,
            dva1: 1,
            dvav: 1,
            dvh1: 0.7,
            dvhe: 0.7,
            encv: 1,
            hev1: 0.75,
            hvc1: 0.75,
            mjp2: 1,
            mp4v: 1,
            mvc1: 1,
            mvc2: 1,
            mvc3: 1,
            mvc4: 1,
            resv: 1,
            rv60: 1,
            s263: 1,
            svc1: 1,
            svc2: 1,
            "vc-1": 1,
            vp08: 1,
            vp09: 0.9,
        },
        text: { stpp: 1, wvtt: 1 },
    };
function ek(e, t) {
    let n = eP[t];
    return !!n && !!n[e.slice(0, 4)];
}
function eU(e, t, n = !0) {
    return !e.split(",").some((e) => !eG(e, t, n));
}
function eG(e, t, n = !0) {
    var r;
    let i = k(n);
    return null != (r = null == i ? void 0 : i.isTypeSupported(eF(e, t))) && r;
}
function eF(e, t) {
    return `${t}/mp4;codecs=${e}`;
}
function eB(e) {
    if (e) {
        let t = e.substring(0, 4);
        return eP.video[t];
    }
    return 2;
}
function eV(e) {
    let t = ex();
    return e.split(",").reduce((e, n) => {
        let r = t && eC(n) ? 9 : eP.video[n];
        return r ? (2 * r + e) / (e ? 3 : 2) : (eP.audio[n] + e) / (e ? 2 : 1);
    }, 0);
}
let eH = {};
function ej(e, t = !0) {
    if (eH[e]) return eH[e];
    let n = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"], "mp4a.40.34": ["mp3"] }[e];
    for (let i = 0; i < n.length; i++) {
        var r;
        if (eG(n[i], "audio", t)) return (eH[e] = n[i]), n[i];
        if ("mp3" === n[i] && null != (r = k(t)) && r.isTypeSupported("audio/mpeg")) return "";
    }
    return e;
}
let eY = /flac|opus|mp4a\.40\.34/i;
function eW(e, t = !0) {
    return e.replace(eY, (e) => ej(e.toLowerCase(), t));
}
function eK(e, t) {
    let n = [];
    if (e) {
        let t = e.split(",");
        for (let e = 0; e < t.length; e++) ek(t[e], "video") || n.push(t[e]);
    }
    return t && n.push(t), n.join(",");
}
function e$(e, t) {
    if (
        e &&
        (e.length > 4 || -1 !== ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(e)) &&
        (ez(e, "audio") || ez(e, "video"))
    )
        return e;
    if (t) {
        let n = t.split(",");
        if (n.length > 1) {
            if (e) {
                for (let t = n.length; t--; ) if (n[t].substring(0, 4) === e.substring(0, 4)) return n[t];
            }
            return n[0];
        }
    }
    return t || e;
}
function ez(e, t) {
    return ek(e, t) && eG(e, t);
}
function eq(e) {
    let t = e.split(",");
    for (let e = 0; e < t.length; e++) {
        let n = t[e].split(".");
        n.length > 2 &&
            "avc1" === n[0] &&
            (t[e] = `avc1.${parseInt(n[1]).toString(16)}${("000" + parseInt(n[2]).toString(16)).slice(-4)}`);
    }
    return t.join(",");
}
function eZ(e) {
    if (e.startsWith("av01.")) {
        let t = e.split("."),
            n = ["0", "111", "01", "01", "01", "0"];
        for (let e = t.length; e > 4 && e < 10; e++) t[e] = n[e - 4];
        return t.join(".");
    }
    return e;
}
function eX(e) {
    let t = k(e) || { isTypeSupported: () => !1 };
    return {
        mpeg: t.isTypeSupported("audio/mpeg"),
        mp3: t.isTypeSupported('audio/mp4; codecs="mp3"'),
        ac3: t.isTypeSupported('audio/mp4; codecs="ac-3"'),
    };
}
function eQ(e) {
    return e.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
let eJ = { supported: !1, smooth: !1, powerEfficient: !1 },
    e0 = {
        supported: !0,
        configurations: [],
        decodingInfoResults: [{ supported: !0, powerEfficient: !0, smooth: !0 }],
    };
function e1(e, t) {
    return { supported: !1, configurations: t, decodingInfoResults: [eJ], error: e };
}
function e2(e, t, n, r, s, a) {
    let o = e.videoCodec,
        l = e.audioCodec ? e.audioGroups : null,
        u = null == a ? void 0 : a.audioCodec,
        c = null == a ? void 0 : a.channels,
        d = c ? parseInt(c) : u ? 1 / 0 : 2,
        _ = null;
    if (null != l && l.length)
        try {
            _ =
                1 === l.length && l[0]
                    ? t.groups[l[0]].channels
                    : l.reduce(
                          (e, n) => {
                              if (n) {
                                  let r = t.groups[n];
                                  if (!r) throw Error(`Audio track group ${n} not found`);
                                  Object.keys(r.channels).forEach((t) => {
                                      e[t] = (e[t] || 0) + r.channels[t];
                                  });
                              }
                              return e;
                          },
                          { 2: 0 },
                      );
        } catch (e) {
            return !0;
        }
    return (
        (void 0 !== o &&
            (o.split(",").some((e) => eC(e)) ||
                (e.width > 1920 && e.height > 1088) ||
                (e.height > 1920 && e.width > 1088) ||
                e.frameRate > Math.max(r, 30) ||
                ("SDR" !== e.videoRange && e.videoRange !== n) ||
                e.bitrate > Math.max(s, 8e6))) ||
        (!!_ && i(d) && Object.keys(_).some((e) => parseInt(e) > d))
    );
}
function e3(e, t, n, r = {}) {
    let i = e.videoCodec;
    if ((!i && !e.audioCodec) || !n) return Promise.resolve(e0);
    let s = [],
        a = e6(e),
        o = a.length,
        l = e4(e, t, o > 0),
        u = l.length;
    for (let e = o || +u || 1; e--; ) {
        let t = { type: "media-source" };
        if ((o && (t.video = a[e % o]), u)) {
            t.audio = l[e % u];
            let n = t.audio.bitrate;
            t.video && n && (t.video.bitrate -= n);
        }
        s.push(t);
    }
    if (i) {
        let e = navigator.userAgent;
        if (i.split(",").some((e) => eC(e)) && ex())
            return Promise.resolve(
                e1(
                    Error(
                        `Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${e})`,
                    ),
                    s,
                ),
            );
    }
    return Promise.all(
        s.map((e) => {
            let t = e8(e);
            return r[t] || (r[t] = n.decodingInfo(e));
        }),
    )
        .then((e) => ({ supported: !e.some((e) => !e.supported), configurations: s, decodingInfoResults: e }))
        .catch((e) => ({ supported: !1, configurations: s, decodingInfoResults: [], error: e }));
}
function e6(e) {
    var t;
    let n = null == (t = e.videoCodec) ? void 0 : t.split(","),
        r = e7(e),
        i = e.width || 640,
        s = e.height || 480,
        a = e.frameRate || 30,
        o = e.videoRange.toLowerCase();
    return n
        ? n.map((e) => {
              let t = { contentType: eF(eZ(e), "video"), width: i, height: s, bitrate: r, framerate: a };
              return "sdr" !== o && (t.transferFunction = o), t;
          })
        : [];
}
function e4(e, t, n) {
    var r;
    let i = null == (r = e.audioCodec) ? void 0 : r.split(","),
        s = e7(e);
    return i && e.audioGroups
        ? e.audioGroups.reduce((e, r) => {
              var a;
              let o = r ? (null == (a = t.groups[r]) ? void 0 : a.tracks) : null;
              return o
                  ? o.reduce((e, t) => {
                        if (t.groupId === r) {
                            let r = parseFloat(t.channels || "");
                            i.forEach((t) => {
                                let i = { contentType: eF(t, "audio"), bitrate: n ? e5(t, s) : s };
                                r && (i.channels = "" + r), e.push(i);
                            });
                        }
                        return e;
                    }, e)
                  : e;
          }, [])
        : [];
}
function e5(e, t) {
    if (t <= 1) return 1;
    let n = 128e3;
    return "ec-3" === e ? (n = 768e3) : "ac-3" === e && (n = 64e4), Math.min(t / 2, n);
}
function e7(e) {
    return 1e3 * Math.ceil(Math.max(0.9 * e.bitrate, e.averageBitrate) / 1e3) || 1;
}
function e8(e) {
    let t = "",
        { audio: n, video: r } = e;
    if (r) {
        let e = eQ(r.contentType);
        t += `${e}_r${r.height}x${r.width}f${Math.ceil(r.framerate)}${r.transferFunction || "sd"}_${Math.ceil(r.bitrate / 1e5)}`;
    }
    if (n) {
        let e = eQ(n.contentType);
        t += `${r ? "_" : ""}${e}_c${n.channels}`;
    }
    return t;
}
let e9 = ["NONE", "TYPE-0", "TYPE-1", null];
function te(e) {
    return e9.indexOf(e) > -1;
}
let tt = ["SDR", "PQ", "HLG"];
function tn(e) {
    return !!e && tt.indexOf(e) > -1;
}
var tr = "",
    ti = "YES",
    ts = "v2";
function ta(e) {
    let { canSkipUntil: t, canSkipDateRanges: n, age: r } = e,
        i = r < t / 2;
    return t && i ? (n ? ts : ti) : tr;
}
class to {
    constructor(e, t, n) {
        (this.msn = void 0),
            (this.part = void 0),
            (this.skip = void 0),
            (this.msn = e),
            (this.part = t),
            (this.skip = n);
    }
    addDirectives(e) {
        let t = new self.URL(e);
        return (
            void 0 !== this.msn && t.searchParams.set("_HLS_msn", this.msn.toString()),
            void 0 !== this.part && t.searchParams.set("_HLS_part", this.part.toString()),
            this.skip && t.searchParams.set("_HLS_skip", this.skip),
            t.href
        );
    }
}
class tl {
    constructor(e) {
        if (
            ((this._attrs = void 0),
            (this.audioCodec = void 0),
            (this.bitrate = void 0),
            (this.codecSet = void 0),
            (this.url = void 0),
            (this.frameRate = void 0),
            (this.height = void 0),
            (this.id = void 0),
            (this.name = void 0),
            (this.supplemental = void 0),
            (this.videoCodec = void 0),
            (this.width = void 0),
            (this.details = void 0),
            (this.fragmentError = 0),
            (this.loadError = 0),
            (this.loaded = void 0),
            (this.realBitrate = 0),
            (this.supportedPromise = void 0),
            (this.supportedResult = void 0),
            (this._avgBitrate = 0),
            (this._audioGroups = void 0),
            (this._subtitleGroups = void 0),
            (this._urlId = 0),
            (this.url = [e.url]),
            (this._attrs = [e.attrs]),
            (this.bitrate = e.bitrate),
            e.details && (this.details = e.details),
            (this.id = e.id || 0),
            (this.name = e.name),
            (this.width = e.width || 0),
            (this.height = e.height || 0),
            (this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0)),
            (this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH")),
            (this.audioCodec = e.audioCodec),
            (this.videoCodec = e.videoCodec),
            (this.codecSet = [e.videoCodec, e.audioCodec]
                .filter((e) => !!e)
                .map((e) => e.substring(0, 4))
                .join(",")),
            "supplemental" in e)
        ) {
            var t;
            this.supplemental = e.supplemental;
            const n = null == (t = e.supplemental) ? void 0 : t.videoCodec;
            n && n !== e.videoCodec && (this.codecSet += `,${n.substring(0, 4)}`);
        }
        this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
    }
    get maxBitrate() {
        return Math.max(this.realBitrate, this.bitrate);
    }
    get averageBitrate() {
        return this._avgBitrate || this.realBitrate || this.bitrate;
    }
    get attrs() {
        return this._attrs[0];
    }
    get codecs() {
        return this.attrs.CODECS || "";
    }
    get pathwayId() {
        return this.attrs["PATHWAY-ID"] || ".";
    }
    get videoRange() {
        return this.attrs["VIDEO-RANGE"] || "SDR";
    }
    get score() {
        return this.attrs.optionalFloat("SCORE", 0);
    }
    get uri() {
        return this.url[0] || "";
    }
    hasAudioGroup(e) {
        return tu(this._audioGroups, e);
    }
    hasSubtitleGroup(e) {
        return tu(this._subtitleGroups, e);
    }
    get audioGroups() {
        return this._audioGroups;
    }
    get subtitleGroups() {
        return this._subtitleGroups;
    }
    addGroupId(e, t) {
        if (t) {
            if ("audio" === e) {
                let e = this._audioGroups;
                e || (e = this._audioGroups = []), -1 === e.indexOf(t) && e.push(t);
            } else if ("text" === e) {
                let e = this._subtitleGroups;
                e || (e = this._subtitleGroups = []), -1 === e.indexOf(t) && e.push(t);
            }
        }
    }
    get urlId() {
        return 0;
    }
    set urlId(e) {}
    get audioGroupIds() {
        return this.audioGroups ? [this.audioGroupId] : void 0;
    }
    get textGroupIds() {
        return this.subtitleGroups ? [this.textGroupId] : void 0;
    }
    get audioGroupId() {
        var e;
        return null == (e = this.audioGroups) ? void 0 : e[0];
    }
    get textGroupId() {
        var e;
        return null == (e = this.subtitleGroups) ? void 0 : e[0];
    }
    addFallback() {}
}
function tu(e, t) {
    return !!t && !!e && -1 !== e.indexOf(t);
}
function tc() {
    if ("function" == typeof matchMedia) {
        let e = matchMedia("(dynamic-range: high)"),
            t = matchMedia("bad query");
        if (e.media !== t.media) return !0 === e.matches;
    }
    return !1;
}
function td(e, t) {
    let n = !1,
        r = [];
    if ((e && ((n = "SDR" !== e), (r = [e])), t)) {
        let e = "SDR" !== (r = t.allowedVideoRanges || tt.slice(0)).join("") && !t.videoCodec;
        (n = void 0 !== t.preferHDR ? t.preferHDR : e && tc()) || (r = ["SDR"]);
    }
    return { preferHDR: n, allowedVideoRanges: r };
}
let t_ = (e) => {
        let t = new WeakSet();
        return (n, r) => {
            if ((e && (r = e(n, r)), "object" == typeof r && null !== r)) {
                if (t.has(r)) return;
                t.add(r);
            }
            return r;
        };
    },
    tf = (e, t) => JSON.stringify(e, t_(t));
function th(e, t, n, r, s) {
    let a = Object.keys(e),
        o = null == r ? void 0 : r.channels,
        l = null == r ? void 0 : r.audioCodec,
        u = null == s ? void 0 : s.videoCodec,
        c = o && 2 === parseInt(o),
        d = !1,
        _ = !1,
        f = 1 / 0,
        h = 1 / 0,
        p = 1 / 0,
        m = 1 / 0,
        E = 0,
        g = [],
        { preferHDR: A, allowedVideoRanges: I } = td(t, s);
    for (let t = a.length; t--; ) {
        let n = e[a[t]];
        d || (d = n.channels[2] > 0),
            (f = Math.min(f, n.minHeight)),
            (h = Math.min(h, n.minFramerate)),
            (p = Math.min(p, n.minBitrate)),
            I.filter((e) => n.videoRanges[e] > 0).length > 0 && (_ = !0);
    }
    (f = i(f) ? f : 0), (h = i(h) ? h : 0);
    let T = Math.max(1080, f),
        S = Math.max(30, h);
    (n = Math.max((p = i(p) ? p : n), n)), _ || (t = void 0);
    let y = a.length > 1;
    return {
        codecSet: a.reduce(
            (t, r) => {
                let i = e[r];
                if (r === t) return t;
                if (((g = _ ? I.filter((e) => i.videoRanges[e] > 0) : []), y)) {
                    if (i.minBitrate > n) return tp(r, `min bitrate of ${i.minBitrate} > current estimate of ${n}`), t;
                    if (!i.hasDefaultAudio) return tp(r, "no renditions with default or auto-select sound found"), t;
                    if (l && r.indexOf(l.substring(0, 4)) % 5 != 0)
                        return tp(r, `audio codec preference "${l}" not found`), t;
                    if (o && !c) {
                        if (!i.channels[o])
                            return (
                                tp(
                                    r,
                                    `no renditions with ${o} channel sound found (channels options: ${Object.keys(i.channels)})`,
                                ),
                                t
                            );
                    } else if ((!l || c) && d && 0 === i.channels["2"])
                        return tp(r, "no renditions with stereo sound found"), t;
                    if (i.minHeight > T) return tp(r, `min resolution of ${i.minHeight} > maximum of ${T}`), t;
                    if (i.minFramerate > S) return tp(r, `min framerate of ${i.minFramerate} > maximum of ${S}`), t;
                    if (!g.some((e) => i.videoRanges[e] > 0))
                        return tp(r, `no variants with VIDEO-RANGE of ${tf(g)} found`), t;
                    if (u && r.indexOf(u.substring(0, 4)) % 5 != 0)
                        return tp(r, `video codec preference "${u}" not found`), t;
                    if (i.maxScore < E) return tp(r, `max score of ${i.maxScore} < selected max of ${E}`), t;
                }
                return t && (eV(r) >= eV(t) || i.fragmentError > e[t].fragmentError)
                    ? t
                    : ((m = i.minIndex), (E = i.maxScore), r);
            },
            void 0,
        ),
        videoRanges: g,
        preferHDR: A,
        minFramerate: h,
        minBitrate: p,
        minIndex: m,
    };
}
function tp(e, t) {
    P.log(`[abr] start candidates with "${e}" ignored because ${t}`);
}
function tm(e) {
    return e.reduce(
        (e, t) => {
            let n = e.groups[t.groupId];
            n || (n = e.groups[t.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: !1, hasAutoSelect: !1 }),
                n.tracks.push(t);
            let r = t.channels || "2";
            return (
                (n.channels[r] = (n.channels[r] || 0) + 1),
                (n.hasDefault = n.hasDefault || t.default),
                (n.hasAutoSelect = n.hasAutoSelect || t.autoselect),
                n.hasDefault && (e.hasDefaultAudio = !0),
                n.hasAutoSelect && (e.hasAutoSelectAudio = !0),
                e
            );
        },
        { hasDefaultAudio: !1, hasAutoSelectAudio: !1, groups: {} },
    );
}
function tE(e, t, n, r) {
    return e.slice(n, r + 1).reduce((e, n, r) => {
        if (!n.codecSet) return e;
        let i = n.audioGroups,
            s = e[n.codecSet];
        s ||
            (e[n.codecSet] = s =
                {
                    minBitrate: 1 / 0,
                    minHeight: 1 / 0,
                    minFramerate: 1 / 0,
                    minIndex: r,
                    maxScore: 0,
                    videoRanges: { SDR: 0 },
                    channels: { 2: 0 },
                    hasDefaultAudio: !i,
                    fragmentError: 0,
                }),
            (s.minBitrate = Math.min(s.minBitrate, n.bitrate));
        let a = Math.min(n.height, n.width);
        return (
            (s.minHeight = Math.min(s.minHeight, a)),
            (s.minFramerate = Math.min(s.minFramerate, n.frameRate)),
            (s.minIndex = Math.min(s.minIndex, r)),
            (s.maxScore = Math.max(s.maxScore, n.score)),
            (s.fragmentError += n.fragmentError),
            (s.videoRanges[n.videoRange] = (s.videoRanges[n.videoRange] || 0) + 1),
            i &&
                i.forEach((e) => {
                    if (!e) return;
                    let n = t.groups[e];
                    n &&
                        ((s.hasDefaultAudio =
                            s.hasDefaultAudio || t.hasDefaultAudio
                                ? n.hasDefault
                                : n.hasAutoSelect || (!t.hasDefaultAudio && !t.hasAutoSelectAudio)),
                        Object.keys(n.channels).forEach((e) => {
                            s.channels[e] = (s.channels[e] || 0) + n.channels[e];
                        }));
                }),
            e
        );
    }, {});
}
function tg(e) {
    if (!e) return e;
    let { lang: t, assocLang: n, characteristics: r, channels: i, audioCodec: s } = e;
    return { lang: t, assocLang: n, characteristics: r, channels: i, audioCodec: s };
}
function tA(e, t, n) {
    if ("attrs" in e) {
        let n = t.indexOf(e);
        if (-1 !== n) return n;
    }
    for (let r = 0; r < t.length; r++) if (tI(e, t[r], n)) return r;
    return -1;
}
function tI(e, t, n) {
    let { groupId: r, name: i, lang: s, assocLang: a, default: o } = e,
        l = e.forced;
    return (
        (void 0 === r || t.groupId === r) &&
        (void 0 === i || t.name === i) &&
        (void 0 === s || tT(s, t.lang)) &&
        (void 0 === s || t.assocLang === a) &&
        (void 0 === o || t.default === o) &&
        (void 0 === l || t.forced === l) &&
        (!("characteristics" in e) || tS(e.characteristics || "", t.characteristics)) &&
        (void 0 === n || n(e, t))
    );
}
function tT(e, t = "--") {
    return e.length === t.length ? e === t : e.startsWith(t) || t.startsWith(e);
}
function tS(e, t = "") {
    let n = e.split(","),
        r = t.split(",");
    return n.length === r.length && !n.some((e) => -1 === r.indexOf(e));
}
function ty(e, t) {
    let { audioCodec: n, channels: r } = e;
    return (
        (void 0 === n || (t.audioCodec || "").substring(0, 4) === n.substring(0, 4)) &&
        (void 0 === r || r === (t.channels || "2"))
    );
}
function tv(e, t, n, r, i) {
    let s = t[r],
        a = t.reduce((e, t, n) => {
            let r = t.uri;
            return (e[r] || (e[r] = [])).push(n), e;
        }, {})[s.uri];
    a.length > 1 && (r = Math.max.apply(Math, a));
    let o = s.videoRange,
        l = s.frameRate,
        u = s.codecSet.substring(0, 4),
        c = tC(t, r, (t) => {
            if (t.videoRange !== o || t.frameRate !== l || t.codecSet.substring(0, 4) !== u) return !1;
            let r = t.audioGroups;
            return (
                tA(
                    e,
                    n.filter((e) => !r || -1 !== r.indexOf(e.groupId)),
                    i,
                ) > -1
            );
        });
    return c > -1
        ? c
        : tC(t, r, (t) => {
              let r = t.audioGroups;
              return (
                  tA(
                      e,
                      n.filter((e) => !r || -1 !== r.indexOf(e.groupId)),
                      i,
                  ) > -1
              );
          });
}
function tC(e, t, n) {
    for (let r = t; r > -1; r--) if (n(e[r])) return r;
    for (let r = t + 1; r < e.length; r++) if (n(e[r])) return r;
    return -1;
}
function tN(e, t) {
    var n;
    return !!e && e !== (null == (n = t.loadLevelObj) ? void 0 : n.uri);
}
class tR extends R {
    constructor(e) {
        super("abr", e.logger),
            (this.hls = void 0),
            (this.lastLevelLoadSec = 0),
            (this.lastLoadedFragLevel = -1),
            (this.firstSelection = -1),
            (this._nextAutoLevel = -1),
            (this.nextAutoLevelKey = ""),
            (this.audioTracksByGroup = null),
            (this.codecTiers = null),
            (this.timer = -1),
            (this.fragCurrent = null),
            (this.partCurrent = null),
            (this.bitrateTestDelay = 0),
            (this.rebufferNotice = -1),
            (this.supportedCache = {}),
            (this.bwEstimator = void 0),
            (this._abandonRulesCheck = (e) => {
                var t;
                let n,
                    { fragCurrent: r, partCurrent: s, hls: a } = this,
                    { autoLevelEnabled: o, media: l } = a;
                if (!r || !l) return;
                let c = performance.now(),
                    d = s ? s.stats : r.stats,
                    _ = s ? s.duration : r.duration,
                    f = c - d.loading.start,
                    h = a.minAutoLevel,
                    p = r.level,
                    m = this._nextAutoLevel;
                if (d.aborted || (d.loaded && d.loaded === d.total) || p <= h) {
                    this.clearTimer(), (this._nextAutoLevel = -1);
                    return;
                }
                if (!o) return;
                let E = m > -1 && m !== p,
                    g = !!e || E;
                if (!g && (l.paused || !l.playbackRate || !l.readyState)) return;
                let A = a.mainForwardBufferInfo;
                if (!g && null === A) return;
                let I = this.bwEstimator.getEstimateTTFB(),
                    T = Math.abs(l.playbackRate);
                if (f <= Math.max(I, (_ / (2 * T)) * 1e3)) return;
                let S = A ? A.len / T : 0,
                    y = d.loading.first ? d.loading.first - d.loading.start : -1,
                    v = d.loaded && y > -1,
                    C = this.getBwEstimate(),
                    N = a.levels,
                    R = N[p],
                    b = Math.max(d.loaded, Math.round((_ * (r.bitrate || R.averageBitrate)) / 8)),
                    O = v ? f - y : f;
                O < 1 && v && (O = Math.min(f, (8 * d.loaded) / C));
                let D = v ? (1e3 * d.loaded) / O : 0,
                    L = I / 1e3,
                    w = D ? (b - d.loaded) / D : (8 * b) / C + L;
                if (w <= S) return;
                let M = D ? 8 * D : C,
                    x =
                        (null == (t = (null == e ? void 0 : e.details) || this.hls.latestLevelDetails)
                            ? void 0
                            : t.live) === !0,
                    P = this.hls.config.abrBandWidthUpFactor,
                    k = 1 / 0;
                for (n = p - 1; n > h; n--) {
                    let e = N[n].maxBitrate,
                        t = !N[n].details || x;
                    if ((k = this.getTimeToLoadFrag(L, M, _ * e, t)) < Math.min(S, _ + L)) break;
                }
                if (k >= w || k > 10 * _) return;
                v ? this.bwEstimator.sample(f - Math.min(I, y), d.loaded) : this.bwEstimator.sampleTTFB(f);
                let U = N[n].maxBitrate;
                this.getBwEstimate() * P > U && this.resetEstimator(U);
                let G = this.findBestLevel(U, h, n, 0, S, 1, 1);
                G > -1 && (n = G),
                    this.warn(`Fragment ${r.sn}${s ? " part " + s.index : ""} of level ${p} is loading too slowly;
      Fragment duration: ${r.duration.toFixed(3)}
      Time to underbuffer: ${S.toFixed(3)} s
      Estimated load time for current fragment: ${w.toFixed(3)} s
      Estimated load time for down switch fragment: ${k.toFixed(3)} s
      TTFB estimate: ${0 | y} ms
      Current BW estimate: ${i(C) ? 0 | C : "Unknown"} bps
      New BW estimate: ${0 | this.getBwEstimate()} bps
      Switching to level ${n} @ ${0 | U} bps`),
                    (a.nextLoadLevel = a.nextAutoLevel = n),
                    this.clearTimer();
                let F = () => {
                    if ((this.clearTimer(), this.fragCurrent === r && this.hls.loadLevel === n && n > 0)) {
                        let e = this.getStarvationDelay();
                        if (
                            (this.warn(`Aborting inflight request ${n > 0 ? "and switching down" : ""}
      Fragment duration: ${r.duration.toFixed(3)} s
      Time to underbuffer: ${e.toFixed(3)} s`),
                            r.abortRequests(),
                            (this.fragCurrent = this.partCurrent = null),
                            n > h)
                        ) {
                            let t = this.findBestLevel(this.hls.levels[h].bitrate, h, n, 0, e, 1, 1);
                            -1 === t && (t = h),
                                (this.hls.nextLoadLevel = this.hls.nextAutoLevel = t),
                                this.resetEstimator(this.hls.levels[t].bitrate);
                        }
                    }
                };
                E || w > 2 * k ? F() : (this.timer = self.setInterval(F, 1e3 * k)),
                    a.trigger(u.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, part: s, stats: d });
            }),
            (this.hls = e),
            (this.bwEstimator = this.initEstimator()),
            this.registerListeners();
    }
    resetEstimator(e) {
        e && (this.log(`setting initial bwe to ${e}`), (this.hls.config.abrEwmaDefaultEstimate = e)),
            (this.firstSelection = -1),
            (this.bwEstimator = this.initEstimator());
    }
    initEstimator() {
        let e = this.hls.config;
        return new I(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.FRAG_LOADING, this.onFragLoading, this),
            e.on(u.FRAG_LOADED, this.onFragLoaded, this),
            e.on(u.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(u.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.on(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(u.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this),
            e.on(u.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.FRAG_LOADING, this.onFragLoading, this),
            e.off(u.FRAG_LOADED, this.onFragLoaded, this),
            e.off(u.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(u.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.off(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(u.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this),
            e.off(u.ERROR, this.onError, this));
    }
    destroy() {
        this.unregisterListeners(),
            this.clearTimer(),
            (this.hls = this._abandonRulesCheck = this.supportedCache = null),
            (this.fragCurrent = this.partCurrent = null);
    }
    onManifestLoading(e, t) {
        (this.lastLoadedFragLevel = -1),
            (this.firstSelection = -1),
            (this.lastLevelLoadSec = 0),
            (this.supportedCache = {}),
            (this.fragCurrent = this.partCurrent = null),
            this.onLevelsUpdated(),
            this.clearTimer();
    }
    onLevelsUpdated() {
        this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level),
            (this._nextAutoLevel = -1),
            this.onMaxAutoLevelUpdated(),
            (this.codecTiers = null),
            (this.audioTracksByGroup = null);
    }
    onMaxAutoLevelUpdated() {
        (this.firstSelection = -1), (this.nextAutoLevelKey = "");
    }
    onFragLoading(e, t) {
        let n = t.frag;
        if (!this.ignoreFragment(n)) {
            if (!n.bitrateTest) {
                var r;
                (this.fragCurrent = n), (this.partCurrent = null != (r = t.part) ? r : null);
            }
            this.clearTimer(), (this.timer = self.setInterval(this._abandonRulesCheck, 100));
        }
    }
    onLevelSwitching(e, t) {
        this.clearTimer();
    }
    onError(e, t) {
        if (!t.fatal)
            switch (t.details) {
                case l.BUFFER_ADD_CODEC_ERROR:
                case l.BUFFER_APPEND_ERROR:
                    (this.lastLoadedFragLevel = -1), (this.firstSelection = -1);
                    break;
                case l.FRAG_LOAD_TIMEOUT: {
                    let e = t.frag,
                        { fragCurrent: n, partCurrent: r } = this;
                    if (e && n && e.sn === n.sn && e.level === n.level) {
                        let t = performance.now(),
                            n = r ? r.stats : e.stats,
                            i = t - n.loading.start,
                            s = n.loading.first ? n.loading.first - n.loading.start : -1;
                        if (n.loaded && s > -1) {
                            let e = this.bwEstimator.getEstimateTTFB();
                            this.bwEstimator.sample(i - Math.min(e, s), n.loaded);
                        } else this.bwEstimator.sampleTTFB(i);
                    }
                }
            }
    }
    getTimeToLoadFrag(e, t, n, r) {
        return e + n / t + (r ? e + this.lastLevelLoadSec : 0);
    }
    onLevelLoaded(e, t) {
        let n = this.hls.config,
            { loading: r } = t.stats,
            s = r.end - r.first;
        i(s) && (this.lastLevelLoadSec = s / 1e3),
            t.details.live
                ? this.bwEstimator.update(n.abrEwmaSlowLive, n.abrEwmaFastLive)
                : this.bwEstimator.update(n.abrEwmaSlowVoD, n.abrEwmaFastVoD),
            this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
    }
    onFragLoaded(e, { frag: t, part: n }) {
        let r = n ? n.stats : t.stats;
        if ((t.type === m && this.bwEstimator.sampleTTFB(r.loading.first - r.loading.start), !this.ignoreFragment(t))) {
            if (
                (this.clearTimer(),
                t.level === this._nextAutoLevel && (this._nextAutoLevel = -1),
                (this.firstSelection = -1),
                this.hls.config.abrMaxWithRealBitrate)
            ) {
                let e = n ? n.duration : t.duration,
                    i = this.hls.levels[t.level],
                    s = (i.loaded ? i.loaded.bytes : 0) + r.loaded,
                    a = (i.loaded ? i.loaded.duration : 0) + e;
                (i.loaded = { bytes: s, duration: a }), (i.realBitrate = Math.round((8 * s) / a));
            }
            if (t.bitrateTest) {
                let e = { stats: r, frag: t, part: n, id: t.type };
                this.onFragBuffered(u.FRAG_BUFFERED, e), (t.bitrateTest = !1);
            } else this.lastLoadedFragLevel = t.level;
        }
    }
    onFragBuffered(e, t) {
        let { frag: n, part: r } = t,
            i = null != r && r.stats.loaded ? r.stats : n.stats;
        if (i.aborted || this.ignoreFragment(n)) return;
        let s =
            i.parsing.end -
            i.loading.start -
            Math.min(i.loading.first - i.loading.start, this.bwEstimator.getEstimateTTFB());
        this.bwEstimator.sample(s, i.loaded),
            (i.bwEstimate = this.getBwEstimate()),
            n.bitrateTest ? (this.bitrateTestDelay = s / 1e3) : (this.bitrateTestDelay = 0);
    }
    ignoreFragment(e) {
        return e.type !== m || "initSegment" === e.sn;
    }
    clearTimer() {
        this.timer > -1 && (self.clearInterval(this.timer), (this.timer = -1));
    }
    get firstAutoLevel() {
        let { maxAutoLevel: e, minAutoLevel: t } = this.hls,
            n = this.getBwEstimate(),
            r = this.hls.config.maxStarvationDelay,
            i = this.findBestLevel(n, t, e, 0, r, 1, 1);
        if (i > -1) return i;
        let s = this.hls.firstLevel,
            a = Math.min(Math.max(s, t), e);
        return (
            this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${a}`),
            a
        );
    }
    get forcedAutoLevel() {
        return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
    }
    get nextAutoLevel() {
        let e = this.forcedAutoLevel,
            t = this.bwEstimator.canEstimate(),
            n = this.lastLoadedFragLevel > -1;
        if (-1 !== e && (!t || !n || this.nextAutoLevelKey === this.getAutoLevelKey())) return e;
        let r = t && n ? this.getNextABRAutoLevel() : this.firstAutoLevel;
        if (-1 !== e) {
            let t = this.hls.levels;
            if (t.length > Math.max(e, r) && t[e].loadError <= t[r].loadError) return e;
        }
        return (this._nextAutoLevel = r), (this.nextAutoLevelKey = this.getAutoLevelKey()), r;
    }
    getAutoLevelKey() {
        return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
    }
    getNextABRAutoLevel() {
        let { fragCurrent: e, partCurrent: t, hls: n } = this;
        if (n.levels.length <= 1) return n.loadLevel;
        let { maxAutoLevel: r, config: i, minAutoLevel: s } = n,
            a = t ? t.duration : e ? e.duration : 0,
            o = this.getBwEstimate(),
            l = this.getStarvationDelay(),
            u = i.abrBandWidthFactor,
            c = i.abrBandWidthUpFactor;
        if (l) {
            let e = this.findBestLevel(o, s, r, l, 0, u, c);
            if (e >= 0) return (this.rebufferNotice = -1), e;
        }
        let d = a ? Math.min(a, i.maxStarvationDelay) : i.maxStarvationDelay;
        if (!l) {
            let e = this.bitrateTestDelay;
            e &&
                ((d = (a ? Math.min(a, i.maxLoadingDelay) : i.maxLoadingDelay) - e),
                this.info(
                    `bitrate test took ${Math.round(1e3 * e)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * d)} ms`,
                ),
                (u = c = 1));
        }
        let _ = this.findBestLevel(o, s, r, l, d, u, c);
        if (
            (this.rebufferNotice !== _ &&
                ((this.rebufferNotice = _),
                this.info(`${l ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${_}`)),
            _ > -1)
        )
            return _;
        let f = n.levels[s],
            h = n.loadLevelObj;
        return h && (null == f ? void 0 : f.bitrate) < h.bitrate ? s : n.loadLevel;
    }
    getStarvationDelay() {
        let e = this.hls,
            t = e.media;
        if (!t) return 1 / 0;
        let n = t && 0 !== t.playbackRate ? Math.abs(t.playbackRate) : 1,
            r = e.mainForwardBufferInfo;
        return (r ? r.len : 0) / n;
    }
    getBwEstimate() {
        return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
    }
    findBestLevel(e, t, n, r, s, a, o) {
        var l, u;
        let c,
            d = r + s,
            _ = this.lastLoadedFragLevel,
            f = -1 === _ ? this.hls.firstLevel : _,
            { fragCurrent: h, partCurrent: p } = this,
            { levels: m, allAudioTracks: E, loadLevel: g, config: A } = this.hls;
        if (1 === m.length) return 0;
        let I = m[f],
            T = !!(null != (l = this.hls.latestLevelDetails) && l.live),
            S = -1 === g || -1 === _,
            y = "SDR",
            v = (null == I ? void 0 : I.frameRate) || 0,
            { audioPreference: C, videoPreference: N } = A,
            R = this.audioTracksByGroup || (this.audioTracksByGroup = tm(E)),
            b = -1;
        if (S) {
            if (-1 !== this.firstSelection) return this.firstSelection;
            let r = th(this.codecTiers || (this.codecTiers = tE(m, R, t, n)), y, e, C, N),
                { codecSet: i, videoRanges: s, minFramerate: a, minBitrate: o, minIndex: l, preferHDR: u } = r;
            (b = l),
                (c = i),
                (y = u ? s[s.length - 1] : s[0]),
                (v = a),
                (e = Math.max(e, o)),
                this.log(`picked start tier ${tf(r)}`);
        } else (c = null == I ? void 0 : I.codecSet), (y = null == I ? void 0 : I.videoRange);
        let O = p ? p.duration : h ? h.duration : 0,
            D = this.bwEstimator.getEstimateTTFB() / 1e3,
            L = [];
        for (let l = n; l >= t; l--) {
            let t,
                h = m[l],
                E = l > f;
            if (!h) continue;
            if (A.useMediaCapabilities && !h.supportedResult && !h.supportedPromise) {
                let t = navigator.mediaCapabilities;
                "function" == typeof (null == t ? void 0 : t.decodingInfo) && e2(h, R, y, v, e, C)
                    ? ((h.supportedPromise = e3(h, R, t, this.supportedCache)),
                      h.supportedPromise
                          .then((e) => {
                              if (!this.hls) return;
                              h.supportedResult = e;
                              let t = this.hls.levels,
                                  n = t.indexOf(h);
                              e.error
                                  ? this.warn(
                                        `MediaCapabilities decodingInfo error: "${e.error}" for level ${n} ${tf(e)}`,
                                    )
                                  : e.supported
                                    ? e.decodingInfoResults.some((e) => !1 === e.smooth || !1 === e.powerEfficient) &&
                                      this.log(
                                          `MediaCapabilities decodingInfo for level ${n} not smooth or powerEfficient: ${tf(e)}`,
                                      )
                                    : (this.warn(
                                          `Unsupported MediaCapabilities decodingInfo result for level ${n} ${tf(e)}`,
                                      ),
                                      n > -1 &&
                                          t.length > 1 &&
                                          (this.log(`Removing unsupported level ${n}`),
                                          this.hls.removeLevel(n),
                                          -1 === this.hls.loadLevel && (this.hls.nextLoadLevel = 0)));
                          })
                          .catch((e) => {
                              this.warn(`Error handling MediaCapabilities decodingInfo: ${e}`);
                          }))
                    : (h.supportedResult = e0);
            }
            if (
                ((c && h.codecSet !== c) ||
                    (y && h.videoRange !== y) ||
                    (E && v > h.frameRate) ||
                    (!E && v > 0 && v < h.frameRate) ||
                    (null != (u = h.supportedResult) &&
                        null != (u = u.decodingInfoResults) &&
                        u.some((e) => !1 === e.smooth))) &&
                (!S || l !== b)
            ) {
                L.push(l);
                continue;
            }
            let I = h.details,
                N = (p ? (null == I ? void 0 : I.partTarget) : null == I ? void 0 : I.averagetargetduration) || O;
            t = E ? o * e : a * e;
            let w = O && r >= 2 * O && 0 === s ? h.averageBitrate : h.maxBitrate,
                M = this.getTimeToLoadFrag(D, t, w * N, void 0 === I);
            if (
                t >= w &&
                (l === _ || (0 === h.loadError && 0 === h.fragmentError)) &&
                (M <= D || !i(M) || (T && !this.bitrateTestDelay) || M < d)
            ) {
                let e = this.forcedAutoLevel;
                return (
                    l !== g &&
                        (-1 === e || e !== g) &&
                        (L.length &&
                            this.trace(
                                `Skipped level(s) ${L.join(",")} of ${n} max with CODECS and VIDEO-RANGE:"${m[L[0]].codecs}" ${m[L[0]].videoRange}; not compatible with "${c}" ${y}`,
                            ),
                        this.info(
                            `switch candidate:${f}->${l} adjustedbw(${Math.round(t)})-bitrate=${Math.round(t - w)} ttfb:${D.toFixed(1)} avgDuration:${N.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${M.toFixed(1)} firstSelection:${S} codecSet:${h.codecSet} videoRange:${h.videoRange} hls.loadLevel:${g}`,
                        )),
                    S && (this.firstSelection = l),
                    l
                );
            }
        }
        return -1;
    }
    set nextAutoLevel(e) {
        let t = this.deriveNextAutoLevel(e);
        this._nextAutoLevel !== t && ((this.nextAutoLevelKey = ""), (this._nextAutoLevel = t));
    }
    deriveNextAutoLevel(e) {
        let { maxAutoLevel: t, minAutoLevel: n } = this.hls;
        return Math.min(Math.max(e, n), t);
    }
}
let tb = function (e, t) {
    let n = 0,
        r = e.length - 1,
        i = null,
        s = null;
    for (; n <= r; ) {
        let a = t((s = e[(i = ((n + r) / 2) | 0)]));
        if (a > 0) n = i + 1;
        else {
            if (!(a < 0)) return s;
            r = i - 1;
        }
    }
    return null;
};
function tO(e, t, n) {
    if (
        null === t ||
        !Array.isArray(e) ||
        !e.length ||
        !i(t) ||
        t < (e[0].programDateTime || 0) ||
        t >= (e[e.length - 1].endProgramDateTime || 0)
    )
        return null;
    for (let r = 0; r < e.length; ++r) {
        let i = e[r];
        if (tM(t, n, i)) return i;
    }
    return null;
}
function tD(e, t, n = 0, r = 0, i = 0.005) {
    let s = null;
    if (e) {
        s = t[1 + e.sn - t[0].sn] || null;
        let r = e.endDTS - n;
        r > 0 && r < 15e-7 && (n += 15e-7),
            s && e.level !== s.level && s.end <= e.end && (s = t[2 + e.sn - t[0].sn] || null);
    } else 0 === n && 0 === t[0].start && (s = t[0]);
    if (s && (((!e || e.level === s.level) && 0 === tw(n, r, s)) || tL(s, e, Math.min(i, r)))) return s;
    let a = tb(t, tw.bind(null, n, r));
    return a && (a !== e || !s) ? a : s;
}
function tL(e, t, n) {
    if (t && 0 === t.start && t.level < e.level && (t.endPTS || 0) > 0) {
        let r = t.tagList.reduce((e, t) => ("INF" === t[0] && (e += parseFloat(t[1])), e), n);
        return e.start <= r;
    }
    return !1;
}
function tw(e = 0, t = 0, n) {
    if (n.start <= e && n.start + n.duration > e) return 0;
    let r = Math.min(t, n.duration + (n.deltaPTS ? n.deltaPTS : 0));
    return n.start + n.duration - r <= e ? 1 : n.start - r > e && n.start ? -1 : 0;
}
function tM(e, t, n) {
    let r = 1e3 * Math.min(t, n.duration + (n.deltaPTS ? n.deltaPTS : 0));
    return (n.endProgramDateTime || 0) - r > e;
}
function tx(e, t, n) {
    if (e && e.startCC <= t && e.endCC >= t) {
        let r,
            i = e.fragments,
            { fragmentHint: s } = e;
        return (
            s && (i = i.concat(s)),
            tb(i, (e) => (e.cc < t ? 1 : e.cc > t ? -1 : ((r = e), e.end <= n) ? 1 : e.start > n ? -1 : 0)),
            r || null
        );
    }
    return null;
}
function tP(e) {
    switch (e.details) {
        case l.FRAG_LOAD_TIMEOUT:
        case l.KEY_LOAD_TIMEOUT:
        case l.LEVEL_LOAD_TIMEOUT:
        case l.MANIFEST_LOAD_TIMEOUT:
            return !0;
    }
    return !1;
}
function tk(e) {
    return e.details.startsWith("key");
}
function tU(e) {
    return tk(e) && !!e.frag && !e.frag.decryptdata;
}
function tG(e, t) {
    let n = tP(t);
    return e.default[`${n ? "timeout" : "error"}Retry`];
}
function tF(e, t) {
    return Math.min(("linear" === e.backoff ? 1 : Math.pow(2, t)) * e.retryDelayMs, e.maxRetryDelayMs);
}
function tB(e) {
    return v(v({}, e), { errorRetry: null, timeoutRetry: null });
}
function tV(e, t, n, r) {
    if (!e) return !1;
    let i = null == r ? void 0 : r.code,
        s = t < e.maxNumRetry && (tH(i) || !!n);
    return e.shouldRetry ? e.shouldRetry(e, t, n, r, s) : s;
}
function tH(e) {
    return tj(e) || (!!e && (e < 400 || e > 499));
}
function tj(e) {
    return 0 === e && !1 === navigator.onLine;
}
var tY = 0,
    tW = 2,
    tK = 3,
    t$ = 5,
    tz = 0,
    tq = 1,
    tZ = 2,
    tX = 4;
class tQ extends R {
    constructor(e) {
        super("error-controller", e.logger),
            (this.hls = void 0),
            (this.playlistError = 0),
            (this.hls = e),
            this.registerListeners();
    }
    registerListeners() {
        let e = this.hls;
        e.on(u.ERROR, this.onError, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.LEVEL_UPDATED, this.onLevelUpdated, this);
    }
    unregisterListeners() {
        let e = this.hls;
        e &&
            (e.off(u.ERROR, this.onError, this),
            e.off(u.ERROR, this.onErrorOut, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.LEVEL_UPDATED, this.onLevelUpdated, this));
    }
    destroy() {
        this.unregisterListeners(), (this.hls = null);
    }
    startLoad(e) {}
    stopLoad() {
        this.playlistError = 0;
    }
    getVariantLevelIndex(e) {
        return (null == e ? void 0 : e.type) === m ? e.level : this.getVariantIndex();
    }
    getVariantIndex() {
        var e;
        let t = this.hls,
            n = t.currentLevel;
        return (null != (e = t.loadLevelObj) && e.details) || -1 === n ? t.loadLevel : n;
    }
    variantHasKey(e, t) {
        if (e) {
            var n;
            if (null != (n = e.details) && n.hasKey(t)) return !0;
            let r = e.audioGroups;
            if (r)
                return this.hls.allAudioTracks
                    .filter((e) => r.indexOf(e.groupId) >= 0)
                    .some((e) => {
                        var n;
                        return null == (n = e.details) ? void 0 : n.hasKey(t);
                    });
        }
        return !1;
    }
    onManifestLoading() {
        this.playlistError = 0;
    }
    onLevelUpdated() {
        this.playlistError = 0;
    }
    onError(e, t) {
        var n, r, i;
        if (t.fatal) return;
        let s = this.hls,
            a = t.context;
        switch (t.details) {
            case l.FRAG_LOAD_ERROR:
            case l.FRAG_LOAD_TIMEOUT:
            case l.KEY_LOAD_ERROR:
            case l.KEY_LOAD_TIMEOUT:
                t.errorAction = this.getFragRetryOrSwitchAction(t);
                return;
            case l.FRAG_PARSING_ERROR:
                if (null != (n = t.frag) && n.gap) {
                    t.errorAction = tJ();
                    return;
                }
            case l.FRAG_GAP:
            case l.FRAG_DECRYPT_ERROR:
                (t.errorAction = this.getFragRetryOrSwitchAction(t)), (t.errorAction.action = tW);
                return;
            case l.LEVEL_EMPTY_ERROR:
            case l.LEVEL_PARSING_ERROR:
                {
                    let e = t.parent === m ? t.level : s.loadLevel;
                    t.details === l.LEVEL_EMPTY_ERROR &&
                    null != (r = t.context) &&
                    null != (r = r.levelDetails) &&
                    r.live
                        ? (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, e))
                        : ((t.levelRetry = !1), (t.errorAction = this.getLevelSwitchAction(t, e)));
                }
                return;
            case l.LEVEL_LOAD_ERROR:
            case l.LEVEL_LOAD_TIMEOUT:
                "number" == typeof (null == a ? void 0 : a.level) &&
                    (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, a.level));
                return;
            case l.AUDIO_TRACK_LOAD_ERROR:
            case l.AUDIO_TRACK_LOAD_TIMEOUT:
            case l.SUBTITLE_LOAD_ERROR:
            case l.SUBTITLE_TRACK_LOAD_TIMEOUT:
                if (a) {
                    let e = s.loadLevelObj;
                    e &&
                        ((a.type === h && e.hasAudioGroup(a.groupId)) ||
                            (a.type === p && e.hasSubtitleGroup(a.groupId))) &&
                        ((t.errorAction = this.getPlaylistRetryOrSwitchAction(t, s.loadLevel)),
                        (t.errorAction.action = tW),
                        (t.errorAction.flags = tq));
                }
                return;
            case l.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                t.errorAction = { action: tW, flags: tZ };
                return;
            case l.KEY_SYSTEM_SESSION_UPDATE_FAILED:
            case l.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
            case l.KEY_SYSTEM_NO_SESSION:
                t.errorAction = { action: tW, flags: tX };
                return;
            case l.BUFFER_ADD_CODEC_ERROR:
            case l.REMUX_ALLOC_ERROR:
            case l.BUFFER_APPEND_ERROR:
                t.errorAction ||
                    (t.errorAction = this.getLevelSwitchAction(t, null != (i = t.level) ? i : s.loadLevel));
                return;
            case l.INTERNAL_EXCEPTION:
            case l.BUFFER_APPENDING_ERROR:
            case l.BUFFER_FULL_ERROR:
            case l.LEVEL_SWITCH_ERROR:
            case l.BUFFER_STALLED_ERROR:
            case l.BUFFER_SEEK_OVER_HOLE:
            case l.BUFFER_NUDGE_ON_STALL:
                t.errorAction = tJ();
                return;
        }
        t.type === o.KEY_SYSTEM_ERROR && ((t.levelRetry = !1), (t.errorAction = tJ()));
    }
    getPlaylistRetryOrSwitchAction(e, t) {
        let n = tG(this.hls.config.playlistLoadPolicy, e),
            r = this.playlistError++;
        if (tV(n, r, tP(e), e.response)) return { action: t$, flags: tz, retryConfig: n, retryCount: r };
        let i = this.getLevelSwitchAction(e, t);
        return n && ((i.retryConfig = n), (i.retryCount = r)), i;
    }
    getFragRetryOrSwitchAction(e) {
        let t = this.hls,
            n = this.getVariantLevelIndex(e.frag),
            r = t.levels[n],
            { fragLoadPolicy: i, keyLoadPolicy: s } = t.config,
            a = tG(tk(e) ? s : i, e),
            o = t.levels.reduce((e, t) => e + t.fragmentError, 0);
        if (r && (e.details !== l.FRAG_GAP && r.fragmentError++, !tU(e)) && tV(a, o, tP(e), e.response))
            return { action: t$, flags: tz, retryConfig: a, retryCount: o };
        let u = this.getLevelSwitchAction(e, n);
        return a && ((u.retryConfig = a), (u.retryCount = o)), u;
    }
    getLevelSwitchAction(e, t) {
        let n = this.hls;
        null == t && (t = n.loadLevel);
        let r = this.hls.levels[t];
        if (r) {
            var i, s, a, o;
            let t = e.details;
            r.loadError++, t === l.BUFFER_APPEND_ERROR && r.fragmentError++;
            let u = -1,
                { levels: c, loadLevel: d, minAutoLevel: _, maxAutoLevel: f } = n;
            n.autoLevelEnabled || n.config.preserveManualLevelOnError || (n.loadLevel = -1);
            let A = null == (i = e.frag) ? void 0 : i.type,
                I =
                    ((A === E && t === l.FRAG_PARSING_ERROR) ||
                        ("audio" === e.sourceBufferName &&
                            (t === l.BUFFER_ADD_CODEC_ERROR || t === l.BUFFER_APPEND_ERROR))) &&
                    c.some(({ audioCodec: e }) => r.audioCodec !== e),
                T =
                    "video" === e.sourceBufferName &&
                    (t === l.BUFFER_ADD_CODEC_ERROR || t === l.BUFFER_APPEND_ERROR) &&
                    c.some(({ codecSet: e, audioCodec: t }) => r.codecSet !== e && r.audioCodec === t),
                { type: S, groupId: y } = null != (s = e.context) ? s : {};
            for (let n = c.length; n--; ) {
                let i = (n + d) % c.length;
                if (i !== d && i >= _ && i <= f && 0 === c[i].loadError) {
                    let n = c[i];
                    if (t === l.FRAG_GAP && A === m && e.frag) {
                        let t = c[i].details;
                        if (t) {
                            let n = tD(e.frag, t.fragments, e.frag.start);
                            if (null != n && n.gap) continue;
                        }
                    } else if ((S === h && n.hasAudioGroup(y)) || (S === p && n.hasSubtitleGroup(y))) continue;
                    else if (
                        (A === E && null != (a = r.audioGroups) && a.some((e) => n.hasAudioGroup(e))) ||
                        (A === g && null != (o = r.subtitleGroups) && o.some((e) => n.hasSubtitleGroup(e))) ||
                        (I && r.audioCodec === n.audioCodec) ||
                        (T && r.codecSet === n.codecSet) ||
                        (!I && r.codecSet !== n.codecSet)
                    )
                        continue;
                    u = i;
                    break;
                }
            }
            if (u > -1 && n.loadLevel !== u)
                return (e.levelRetry = !0), (this.playlistError = 0), { action: tW, flags: tz, nextAutoLevel: u };
        }
        return { action: tW, flags: tq };
    }
    onErrorOut(e, t) {
        var n;
        switch (null == (n = t.errorAction) ? void 0 : n.action) {
            case tY:
                break;
            case tW:
                this.sendAlternateToPenaltyBox(t),
                    t.errorAction.resolved || t.details === l.FRAG_GAP
                        ? /MediaSource readyState: ended/.test(t.error.message) &&
                          (this.warn(
                              `MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`,
                          ),
                          this.hls.recoverMediaError())
                        : (t.fatal = !0);
        }
        if (t.fatal) return void this.hls.stopLoad();
    }
    sendAlternateToPenaltyBox(e) {
        let t = this.hls,
            n = e.errorAction;
        if (!n) return;
        let { flags: r } = n,
            i = n.nextAutoLevel;
        switch (r) {
            case tz:
                this.switchLevel(e, i);
                break;
            case tZ: {
                let r = this.getVariantLevelIndex(e.frag),
                    i = t.levels[r],
                    s = null == i ? void 0 : i.attrs["HDCP-LEVEL"];
                if (((n.hdcpLevel = s), "NONE" === s)) this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
                else if (s) {
                    (t.maxHdcpLevel = e9[e9.indexOf(s) - 1]),
                        (n.resolved = !0),
                        this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
                    break;
                }
            }
            case tX: {
                let t = e.decryptdata;
                if (t) {
                    let r = this.hls.levels,
                        i = r.length;
                    for (let n = i; n--; )
                        if (this.variantHasKey(r[n], t)) {
                            var s, a;
                            this.log(
                                `Banned key found in level ${n} (${r[n].bitrate}bps) or audio group "${null == ((s = r[n].audioGroups)) ? void 0 : s.join(",")}" (${null == ((a = e.frag)) ? void 0 : a.type} fragment) ${B(t.keyId || [])}`,
                            ),
                                r[n].fragmentError++,
                                r[n].loadError++,
                                this.log(`Removing level ${n} with key error (${e.error})`),
                                this.hls.removeLevel(n);
                        }
                    let o = e.frag;
                    if (this.hls.levels.length < i) n.resolved = !0;
                    else if (o && o.type !== m) {
                        let e = o.decryptdata;
                        e && !t.matches(e) && (n.resolved = !0);
                    }
                }
            }
        }
        n.resolved || this.switchLevel(e, i);
    }
    switchLevel(e, t) {
        if (
            void 0 !== t &&
            e.errorAction &&
            (this.warn(`switching to level ${t} after ${e.details}`),
            (this.hls.nextAutoLevel = t),
            (e.errorAction.resolved = !0),
            (this.hls.nextLoadLevel = this.hls.nextAutoLevel),
            e.details === l.BUFFER_ADD_CODEC_ERROR && e.mimeType && "audiovideo" !== e.sourceBufferName)
        ) {
            let t = eQ(e.mimeType),
                n = this.hls.levels;
            for (let r = n.length; r--; )
                n[r][`${e.sourceBufferName}Codec`] === t &&
                    (this.log(`Removing level ${r} for ${e.details} ("${t}" not supported)`), this.hls.removeLevel(r));
        }
    }
}
function tJ(e) {
    let t = { action: tY, flags: tz };
    return e && (t.resolved = !0), t;
}
var t0 = "NOT_LOADED",
    t1 = "APPENDING",
    t2 = "PARTIAL",
    t3 = "OK";
class t6 {
    constructor(e) {
        (this.activePartLists = Object.create(null)),
            (this.endListFragments = Object.create(null)),
            (this.fragments = Object.create(null)),
            (this.timeRanges = Object.create(null)),
            (this.bufferPadding = 0.2),
            (this.hls = void 0),
            (this.hasGaps = !1),
            (this.hls = e),
            this._registerListeners();
    }
    _registerListeners() {
        let { hls: e } = this;
        e &&
            (e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.BUFFER_APPENDED, this.onBufferAppended, this),
            e.on(u.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(u.FRAG_LOADED, this.onFragLoaded, this));
    }
    _unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.BUFFER_APPENDED, this.onBufferAppended, this),
            e.off(u.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(u.FRAG_LOADED, this.onFragLoaded, this));
    }
    destroy() {
        this._unregisterListeners(),
            (this.hls = this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null);
    }
    getAppendedFrag(e, t) {
        let n = this.activePartLists[t];
        if (n)
            for (let t = n.length; t--; ) {
                let r = n[t];
                if (!r) break;
                if (r.start <= e && e <= r.end && r.loaded) return r;
            }
        return this.getBufferedFrag(e, t);
    }
    getBufferedFrag(e, t) {
        return this.getFragAtPos(e, t, !0);
    }
    getFragAtPos(e, t, n) {
        let { fragments: r } = this,
            i = Object.keys(r);
        for (let s = i.length; s--; ) {
            let a = r[i[s]];
            if ((null == a ? void 0 : a.body.type) === t && (!n || a.buffered)) {
                let t = a.body;
                if (t.start <= e && e <= t.end) return t;
            }
        }
        return null;
    }
    detectEvictedFragments(e, t, n, r, i) {
        this.timeRanges && (this.timeRanges[e] = t);
        let s = (null == r ? void 0 : r.fragment.sn) || -1;
        Object.keys(this.fragments).forEach((r) => {
            let a = this.fragments[r];
            if (!a || s >= a.body.sn) return;
            if (!a.buffered && (!a.loaded || i)) {
                a.body.type === n && this.removeFragment(a.body);
                return;
            }
            let o = a.range[e];
            if (o) {
                if (0 === o.time.length) return void this.removeFragment(a.body);
                o.time.some((e) => {
                    let n = !this.isTimeBuffered(e.startPTS, e.endPTS, t);
                    return n && this.removeFragment(a.body), n;
                });
            }
        });
    }
    detectPartialFragments(e) {
        let t = this.timeRanges;
        if (!t || "initSegment" === e.frag.sn) return;
        let n = e.frag,
            r = t5(n),
            i = this.fragments[r];
        if (!i || (i.buffered && n.gap)) return;
        let s = !n.relurl;
        Object.keys(t).forEach((r) => {
            let a = n.elementaryStreams[r];
            if (!a) return;
            let o = t[r],
                l = s || !0 === a.partial;
            i.range[r] = this.getBufferedTimes(n, e.part, l, o);
        }),
            (i.loaded = null),
            Object.keys(i.range).length
                ? ((i.buffered = !0),
                  (i.body.endList = n.endList || i.body.endList) && (this.endListFragments[i.body.type] = i),
                  t4(i) || this.removeParts(n.sn - 1, n.type))
                : this.removeFragment(i.body);
    }
    removeParts(e, t) {
        let n = this.activePartLists[t];
        n && (this.activePartLists[t] = t7(n, (t) => t.fragment.sn >= e));
    }
    fragBuffered(e, t) {
        let n = t5(e),
            r = this.fragments[n];
        !r &&
            t &&
            ((r = this.fragments[n] =
                { body: e, appendedPTS: null, loaded: null, buffered: !1, range: Object.create(null) }),
            e.gap && (this.hasGaps = !0)),
            r && ((r.loaded = null), (r.buffered = !0));
    }
    getBufferedTimes(e, t, n, r) {
        let i = { time: [], partial: n },
            s = e.start,
            a = e.end,
            o = e.minEndPTS || a,
            l = e.maxStartPTS || s;
        for (let e = 0; e < r.length; e++) {
            let t = r.start(e) - this.bufferPadding,
                n = r.end(e) + this.bufferPadding;
            if (l >= t && o <= n) {
                i.time.push({ startPTS: Math.max(s, r.start(e)), endPTS: Math.min(a, r.end(e)) });
                break;
            }
            if (s < n && a > t) {
                let t = Math.max(s, r.start(e)),
                    n = Math.min(a, r.end(e));
                n > t && ((i.partial = !0), i.time.push({ startPTS: t, endPTS: n }));
            } else if (a <= t) break;
        }
        return i;
    }
    getPartialFragment(e) {
        let t,
            n,
            r,
            i = null,
            s = 0,
            { bufferPadding: a, fragments: o } = this;
        return (
            Object.keys(o).forEach((l) => {
                let u = o[l];
                u &&
                    t4(u) &&
                    ((n = u.body.start - a),
                    (r = u.body.end + a),
                    e >= n && e <= r && s <= (t = Math.min(e - n, r - e)) && ((i = u.body), (s = t)));
            }),
            i
        );
    }
    isEndListAppended(e) {
        let t = this.endListFragments[e];
        return void 0 !== t && (t.buffered || t4(t));
    }
    getState(e) {
        let t = t5(e),
            n = this.fragments[t];
        if (n)
            if (!n.buffered) return t1;
            else if (t4(n)) return t2;
            else return t3;
        return t0;
    }
    isTimeBuffered(e, t, n) {
        let r, i;
        for (let s = 0; s < n.length; s++) {
            if (((r = n.start(s) - this.bufferPadding), (i = n.end(s) + this.bufferPadding), e >= r && t <= i))
                return !0;
            if (t <= r) break;
        }
        return !1;
    }
    onManifestLoading() {
        this.removeAllFragments();
    }
    onFragLoaded(e, t) {
        if ("initSegment" === t.frag.sn || t.frag.bitrateTest) return;
        let n = t.frag,
            r = t.part ? null : t,
            i = t5(n);
        this.fragments[i] = { body: n, appendedPTS: null, loaded: r, buffered: !1, range: Object.create(null) };
    }
    onBufferAppended(e, t) {
        let { frag: n, part: r, timeRanges: i, type: s } = t;
        if ("initSegment" === n.sn) return;
        let a = n.type;
        if (r) {
            let e = this.activePartLists[a];
            e || (this.activePartLists[a] = e = []), e.push(r);
        }
        this.timeRanges = i;
        let o = i[s];
        this.detectEvictedFragments(s, o, a, r);
    }
    onFragBuffered(e, t) {
        this.detectPartialFragments(t);
    }
    hasFragment(e) {
        let t = t5(e);
        return !!this.fragments[t];
    }
    hasFragments(e) {
        let { fragments: t } = this,
            n = Object.keys(t);
        if (!e) return n.length > 0;
        for (let r = n.length; r--; ) {
            let i = t[n[r]];
            if ((null == i ? void 0 : i.body.type) === e) return !0;
        }
        return !1;
    }
    hasParts(e) {
        var t;
        return !!(null != (t = this.activePartLists[e]) && t.length);
    }
    removeFragmentsInRange(e, t, n, r, i) {
        (!r || this.hasGaps) &&
            Object.keys(this.fragments).forEach((s) => {
                let a = this.fragments[s];
                if (!a) return;
                let o = a.body;
                o.type === n &&
                    (!r || o.gap) &&
                    o.start < t &&
                    o.end > e &&
                    (a.buffered || i) &&
                    this.removeFragment(o);
            });
    }
    removeFragment(e) {
        let t = t5(e);
        e.clearElementaryStreamInfo();
        let n = this.activePartLists[e.type];
        if (n) {
            let t = e.sn;
            this.activePartLists[e.type] = t7(n, (e) => e.fragment.sn !== t);
        }
        delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
    }
    removeAllFragments() {
        var e;
        (this.fragments = Object.create(null)),
            (this.endListFragments = Object.create(null)),
            (this.activePartLists = Object.create(null)),
            (this.hasGaps = !1);
        let t = null == (e = this.hls) || null == (e = e.latestLevelDetails) ? void 0 : e.partList;
        t && t.forEach((e) => e.clearElementaryStreamInfo());
    }
}
function t4(e) {
    var t, n, r;
    return (
        e.buffered &&
        !!(
            e.body.gap ||
            (null != (t = e.range.video) && t.partial) ||
            (null != (n = e.range.audio) && n.partial) ||
            (null != (r = e.range.audiovideo) && r.partial)
        )
    );
}
function t5(e) {
    return `${e.type}_${e.level}_${e.sn}`;
}
function t7(e, t) {
    return e.filter((e) => {
        let n = t(e);
        return n || e.clearElementaryStreamInfo(), n;
    });
}
var t8 = 0,
    t9 = 1;
class ne {
    constructor(e, t, n) {
        (this.subtle = void 0),
            (this.aesIV = void 0),
            (this.aesMode = void 0),
            (this.subtle = e),
            (this.aesIV = t),
            (this.aesMode = n);
    }
    decrypt(e, t) {
        switch (this.aesMode) {
            case t8:
                return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e);
            case t9:
                return this.subtle.decrypt({ name: "AES-CTR", counter: this.aesIV, length: 64 }, t, e);
            default:
                throw Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
        }
    }
}
function nt(e) {
    let t = e.byteLength,
        n = t && new DataView(e.buffer).getUint8(t - 1);
    return n ? e.slice(0, t - n) : e;
}
class nn {
    constructor() {
        (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
            (this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)]),
            (this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)]),
            (this.sBox = new Uint32Array(256)),
            (this.invSBox = new Uint32Array(256)),
            (this.key = new Uint32Array(0)),
            (this.ksRows = 0),
            (this.keySize = 0),
            (this.keySchedule = void 0),
            (this.invKeySchedule = void 0),
            this.initTable();
    }
    uint8ArrayToUint32Array_(e) {
        let t = new DataView(e),
            n = new Uint32Array(4);
        for (let e = 0; e < 4; e++) n[e] = t.getUint32(4 * e);
        return n;
    }
    initTable() {
        let e = this.sBox,
            t = this.invSBox,
            n = this.subMix,
            r = n[0],
            i = n[1],
            s = n[2],
            a = n[3],
            o = this.invSubMix,
            l = o[0],
            u = o[1],
            c = o[2],
            d = o[3],
            _ = new Uint32Array(256),
            f = 0,
            h = 0,
            p = 0;
        for (p = 0; p < 256; p++) p < 128 ? (_[p] = p << 1) : (_[p] = (p << 1) ^ 283);
        for (p = 0; p < 256; p++) {
            let n = h ^ (h << 1) ^ (h << 2) ^ (h << 3) ^ (h << 4);
            (n = (n >>> 8) ^ (255 & n) ^ 99), (e[f] = n), (t[n] = f);
            let o = _[f],
                p = _[o],
                m = _[p],
                E = (257 * _[n]) ^ (0x1010100 * n);
            (r[f] = (E << 24) | (E >>> 8)),
                (i[f] = (E << 16) | (E >>> 16)),
                (s[f] = (E << 8) | (E >>> 24)),
                (a[f] = E),
                (E = (0x1010101 * m) ^ (65537 * p) ^ (257 * o) ^ (0x1010100 * f)),
                (l[n] = (E << 24) | (E >>> 8)),
                (u[n] = (E << 16) | (E >>> 16)),
                (c[n] = (E << 8) | (E >>> 24)),
                (d[n] = E),
                f ? ((f = o ^ _[_[_[m ^ o]]]), (h ^= _[_[h]])) : (f = h = 1);
        }
    }
    expandKey(e) {
        let t,
            n,
            r,
            i,
            s = this.uint8ArrayToUint32Array_(e),
            a = !0,
            o = 0;
        for (; o < s.length && a; ) (a = s[o] === this.key[o]), o++;
        if (a) return;
        this.key = s;
        let l = (this.keySize = s.length);
        if (4 !== l && 6 !== l && 8 !== l) throw Error("Invalid aes key size=" + l);
        let u = (this.ksRows = (l + 6 + 1) * 4),
            c = (this.keySchedule = new Uint32Array(u)),
            d = (this.invKeySchedule = new Uint32Array(u)),
            _ = this.sBox,
            f = this.rcon,
            h = this.invSubMix,
            p = h[0],
            m = h[1],
            E = h[2],
            g = h[3];
        for (t = 0; t < u; t++) {
            if (t < l) {
                r = c[t] = s[t];
                continue;
            }
            (i = r),
                t % l == 0
                    ? (i =
                          ((_[(i = (i << 8) | (i >>> 24)) >>> 24] << 24) |
                              (_[(i >>> 16) & 255] << 16) |
                              (_[(i >>> 8) & 255] << 8) |
                              _[255 & i]) ^
                          (f[(t / l) | 0] << 24))
                    : l > 6 &&
                      t % l == 4 &&
                      (i = (_[i >>> 24] << 24) | (_[(i >>> 16) & 255] << 16) | (_[(i >>> 8) & 255] << 8) | _[255 & i]),
                (c[t] = r = (c[t - l] ^ i) >>> 0);
        }
        for (n = 0; n < u; n++)
            (t = u - n),
                (i = 3 & n ? c[t] : c[t - 4]),
                n < 4 || t <= 4
                    ? (d[n] = i)
                    : (d[n] = p[_[i >>> 24]] ^ m[_[(i >>> 16) & 255]] ^ E[_[(i >>> 8) & 255]] ^ g[_[255 & i]]),
                (d[n] = d[n] >>> 0);
    }
    networkToHostOrderSwap(e) {
        return (e << 24) | ((65280 & e) << 8) | ((0xff0000 & e) >> 8) | (e >>> 24);
    }
    decrypt(e, t, n) {
        let r,
            i,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            _,
            f,
            h,
            p,
            m,
            E = this.keySize + 6,
            g = this.invKeySchedule,
            A = this.invSBox,
            I = this.invSubMix,
            T = I[0],
            S = I[1],
            y = I[2],
            v = I[3],
            C = this.uint8ArrayToUint32Array_(n),
            N = C[0],
            R = C[1],
            b = C[2],
            O = C[3],
            D = new Int32Array(e),
            L = new Int32Array(D.length),
            w = this.networkToHostOrderSwap;
        for (; t < D.length; ) {
            for (
                m = 1,
                    d = w(D[t]),
                    _ = w(D[t + 1]),
                    f = w(D[t + 2]),
                    h = w(D[t + 3]),
                    o = d ^ g[0],
                    l = h ^ g[1],
                    u = f ^ g[2],
                    c = _ ^ g[3],
                    p = 4;
                m < E;
                m++
            )
                (r = T[o >>> 24] ^ S[(l >> 16) & 255] ^ y[(u >> 8) & 255] ^ v[255 & c] ^ g[p]),
                    (i = T[l >>> 24] ^ S[(u >> 16) & 255] ^ y[(c >> 8) & 255] ^ v[255 & o] ^ g[p + 1]),
                    (s = T[u >>> 24] ^ S[(c >> 16) & 255] ^ y[(o >> 8) & 255] ^ v[255 & l] ^ g[p + 2]),
                    (a = T[c >>> 24] ^ S[(o >> 16) & 255] ^ y[(l >> 8) & 255] ^ v[255 & u] ^ g[p + 3]),
                    (o = r),
                    (l = i),
                    (u = s),
                    (c = a),
                    (p += 4);
            (r = (A[o >>> 24] << 24) ^ (A[(l >> 16) & 255] << 16) ^ (A[(u >> 8) & 255] << 8) ^ A[255 & c] ^ g[p]),
                (i =
                    (A[l >>> 24] << 24) ^
                    (A[(u >> 16) & 255] << 16) ^
                    (A[(c >> 8) & 255] << 8) ^
                    A[255 & o] ^
                    g[p + 1]),
                (s =
                    (A[u >>> 24] << 24) ^
                    (A[(c >> 16) & 255] << 16) ^
                    (A[(o >> 8) & 255] << 8) ^
                    A[255 & l] ^
                    g[p + 2]),
                (a =
                    (A[c >>> 24] << 24) ^
                    (A[(o >> 16) & 255] << 16) ^
                    (A[(l >> 8) & 255] << 8) ^
                    A[255 & u] ^
                    g[p + 3]),
                (L[t] = w(r ^ N)),
                (L[t + 1] = w(a ^ R)),
                (L[t + 2] = w(s ^ b)),
                (L[t + 3] = w(i ^ O)),
                (N = d),
                (R = _),
                (b = f),
                (O = h),
                (t += 4);
        }
        return L.buffer;
    }
}
class nr {
    constructor(e, t, n) {
        (this.subtle = void 0),
            (this.key = void 0),
            (this.aesMode = void 0),
            (this.subtle = e),
            (this.key = t),
            (this.aesMode = n);
    }
    expandKey() {
        let e = ni(this.aesMode);
        return this.subtle.importKey("raw", this.key, { name: e }, !1, ["encrypt", "decrypt"]);
    }
}
function ni(e) {
    switch (e) {
        case t8:
            return "AES-CBC";
        case t9:
            return "AES-CTR";
        default:
            throw Error(`[FastAESKey] invalid aes mode ${e}`);
    }
}
let ns = 16;
class na {
    constructor(e, { removePKCS7Padding: t = !0 } = {}) {
        if (
            ((this.logEnabled = !0),
            (this.removePKCS7Padding = void 0),
            (this.subtle = null),
            (this.softwareDecrypter = null),
            (this.key = null),
            (this.fastAesKey = null),
            (this.remainderData = null),
            (this.currentIV = null),
            (this.currentResult = null),
            (this.useSoftware = void 0),
            (this.enableSoftwareAES = void 0),
            (this.enableSoftwareAES = e.enableSoftwareAES),
            (this.removePKCS7Padding = t),
            t)
        )
            try {
                const e = self.crypto;
                e && (this.subtle = e.subtle || e.webkitSubtle);
            } catch (e) {}
        this.useSoftware = !this.subtle;
    }
    destroy() {
        (this.subtle = null),
            (this.softwareDecrypter = null),
            (this.key = null),
            (this.fastAesKey = null),
            (this.remainderData = null),
            (this.currentIV = null),
            (this.currentResult = null);
    }
    isSync() {
        return this.useSoftware;
    }
    flush() {
        let { currentResult: e, remainderData: t } = this;
        if (!e || t) return this.reset(), null;
        let n = new Uint8Array(e);
        return (this.reset(), this.removePKCS7Padding) ? nt(n) : n;
    }
    reset() {
        (this.currentResult = null),
            (this.currentIV = null),
            (this.remainderData = null),
            this.softwareDecrypter && (this.softwareDecrypter = null);
    }
    decrypt(e, t, n, r) {
        return this.useSoftware
            ? new Promise((i, s) => {
                  let a = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
                  this.softwareDecrypt(a, t, n, r);
                  let o = this.flush();
                  o ? i(o.buffer) : s(Error("[softwareDecrypt] Failed to decrypt data"));
              })
            : this.webCryptoDecrypt(new Uint8Array(e), t, n, r);
    }
    softwareDecrypt(e, t, n, r) {
        let { currentIV: i, currentResult: s, remainderData: a } = this;
        if (r !== t8 || 16 !== t.byteLength) return P.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
        this.logOnce("JS AES decrypt"), a && ((e = ey(a, e)), (this.remainderData = null));
        let o = this.getValidChunk(e);
        if (!o.length) return null;
        i && (n = i);
        let l = this.softwareDecrypter;
        l || (l = this.softwareDecrypter = new nn()), l.expandKey(t);
        let u = s;
        return ((this.currentResult = l.decrypt(o.buffer, 0, n)), (this.currentIV = o.slice(-16).buffer), u) ? u : null;
    }
    webCryptoDecrypt(e, t, n, r) {
        if (this.key !== t || !this.fastAesKey) {
            if (!this.subtle) return Promise.resolve(this.onWebCryptoError(e, t, n, r));
            (this.key = t), (this.fastAesKey = new nr(this.subtle, t, r));
        }
        return this.fastAesKey
            .expandKey()
            .then((t) =>
                this.subtle
                    ? (this.logOnce("WebCrypto AES decrypt"),
                      new ne(this.subtle, new Uint8Array(n), r).decrypt(e.buffer, t))
                    : Promise.reject(Error("web crypto not initialized")),
            )
            .catch(
                (i) => (
                    P.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`),
                    this.onWebCryptoError(e, t, n, r)
                ),
            );
    }
    onWebCryptoError(e, t, n, r) {
        let i = this.enableSoftwareAES;
        if (i) {
            (this.useSoftware = !0), (this.logEnabled = !0), this.softwareDecrypt(e, t, n, r);
            let i = this.flush();
            if (i) return i.buffer;
        }
        throw Error("WebCrypto" + (i ? " and softwareDecrypt" : "") + ": failed to decrypt data");
    }
    getValidChunk(e) {
        let t = e,
            n = e.length - (e.length % ns);
        return n !== e.length && ((t = e.slice(0, n)), (this.remainderData = e.slice(n))), t;
    }
    logOnce(e) {
        this.logEnabled && (P.log(`[decrypter]: ${e}`), (this.logEnabled = !1));
    }
}
let no = 131072;
class nl {
    constructor(e) {
        (this.config = void 0), (this.loader = null), (this.partLoadTimeout = -1), (this.config = e);
    }
    destroy() {
        this.loader && (this.loader.destroy(), (this.loader = null));
    }
    abort() {
        this.loader && this.loader.abort();
    }
    load(e, t) {
        let n = e.url;
        if (!n)
            return Promise.reject(
                new n_({
                    type: o.NETWORK_ERROR,
                    details: l.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: e,
                    error: Error(`Fragment does not have a ${n ? "part list" : "url"}`),
                    networkDetails: null,
                }),
            );
        this.abort();
        let r = this.config,
            i = r.fLoader,
            s = r.loader;
        return new Promise((a, u) => {
            if ((this.loader && this.loader.destroy(), e.gap))
                if (e.tagList.some((e) => "GAP" === e[0])) return void u(nc(e));
                else e.gap = !1;
            let c = (this.loader = i ? new i(r) : new s(r)),
                d = nu(e);
            e.loader = c;
            let _ = tB(r.fragLoadPolicy.default),
                f = {
                    loadPolicy: _,
                    timeout: _.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                    highWaterMark: "initSegment" === e.sn ? 1 / 0 : no,
                };
            e.stats = c.stats;
            let h = {
                onSuccess: (t, n, r, i) => {
                    this.resetLoader(e, c);
                    let s = t.data;
                    r.resetIV &&
                        e.decryptdata &&
                        ((e.decryptdata.iv = new Uint8Array(s.slice(0, 16))), (s = s.slice(16))),
                        a({ frag: e, part: null, payload: s, networkDetails: i });
                },
                onError: (t, r, i, s) => {
                    this.resetLoader(e, c),
                        u(
                            new n_({
                                type: o.NETWORK_ERROR,
                                details: l.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: e,
                                response: v({ url: n, data: void 0 }, t),
                                error: Error(`HTTP Error ${t.code} ${t.text}`),
                                networkDetails: i,
                                stats: s,
                            }),
                        );
                },
                onAbort: (t, n, r) => {
                    this.resetLoader(e, c),
                        u(
                            new n_({
                                type: o.NETWORK_ERROR,
                                details: l.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: e,
                                error: Error("Aborted"),
                                networkDetails: r,
                                stats: t,
                            }),
                        );
                },
                onTimeout: (t, n, r) => {
                    this.resetLoader(e, c),
                        u(
                            new n_({
                                type: o.NETWORK_ERROR,
                                details: l.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: e,
                                error: Error(`Timeout after ${f.timeout}ms`),
                                networkDetails: r,
                                stats: t,
                            }),
                        );
                },
            };
            t && (h.onProgress = (n, r, i, s) => t({ frag: e, part: null, payload: i, networkDetails: s })),
                c.load(d, f, h);
        });
    }
    loadPart(e, t, n) {
        this.abort();
        let r = this.config,
            i = r.fLoader,
            s = r.loader;
        return new Promise((a, u) => {
            if ((this.loader && this.loader.destroy(), e.gap || t.gap)) return void u(nc(e, t));
            let c = (this.loader = i ? new i(r) : new s(r)),
                d = nu(e, t);
            e.loader = c;
            let _ = tB(r.fragLoadPolicy.default),
                f = {
                    loadPolicy: _,
                    timeout: _.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                    highWaterMark: no,
                };
            (t.stats = c.stats),
                c.load(d, f, {
                    onSuccess: (r, i, s, o) => {
                        this.resetLoader(e, c), this.updateStatsFromPart(e, t);
                        let l = { frag: e, part: t, payload: r.data, networkDetails: o };
                        n(l), a(l);
                    },
                    onError: (n, r, i, s) => {
                        this.resetLoader(e, c),
                            u(
                                new n_({
                                    type: o.NETWORK_ERROR,
                                    details: l.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    response: v({ url: d.url, data: void 0 }, n),
                                    error: Error(`HTTP Error ${n.code} ${n.text}`),
                                    networkDetails: i,
                                    stats: s,
                                }),
                            );
                    },
                    onAbort: (n, r, i) => {
                        (e.stats.aborted = t.stats.aborted),
                            this.resetLoader(e, c),
                            u(
                                new n_({
                                    type: o.NETWORK_ERROR,
                                    details: l.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error("Aborted"),
                                    networkDetails: i,
                                    stats: n,
                                }),
                            );
                    },
                    onTimeout: (n, r, i) => {
                        this.resetLoader(e, c),
                            u(
                                new n_({
                                    type: o.NETWORK_ERROR,
                                    details: l.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error(`Timeout after ${f.timeout}ms`),
                                    networkDetails: i,
                                    stats: n,
                                }),
                            );
                    },
                });
        });
    }
    updateStatsFromPart(e, t) {
        let n = e.stats,
            r = t.stats,
            i = r.total;
        if (((n.loaded += r.loaded), i)) {
            let r = Math.round(e.duration / t.duration),
                s = Math.min(Math.round(n.loaded / i), r),
                a = (r - s) * Math.round(n.loaded / s);
            n.total = n.loaded + a;
        } else n.total = Math.max(n.loaded, n.total);
        let s = n.loading,
            a = r.loading;
        s.start ? (s.first += a.first - a.start) : ((s.start = a.start), (s.first = a.first)), (s.end = a.end);
    }
    resetLoader(e, t) {
        (e.loader = null),
            this.loader === t && (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
            t.destroy();
    }
}
function nu(e, t = null) {
    let n = t || e,
        r = { frag: e, part: t, responseType: "arraybuffer", url: n.url, headers: {}, rangeStart: 0, rangeEnd: 0 },
        s = n.byteRangeStartOffset,
        a = n.byteRangeEndOffset;
    if (i(s) && i(a)) {
        var o;
        let t = s,
            n = a;
        if ("initSegment" === e.sn && nd(null == (o = e.decryptdata) ? void 0 : o.method)) {
            let e = a - s;
            e % 16 && (n = a + (16 - (e % 16))), 0 !== s && ((r.resetIV = !0), (t = s - 16));
        }
        (r.rangeStart = t), (r.rangeEnd = n);
    }
    return r;
}
function nc(e, t) {
    let n = Error(`GAP ${e.gap ? "tag" : "attribute"} found`),
        r = { type: o.MEDIA_ERROR, details: l.FRAG_GAP, fatal: !1, frag: e, error: n, networkDetails: null };
    return t && (r.part = t), ((t || e).stats.aborted = !0), new n_(r);
}
function nd(e) {
    return "AES-128" === e || "AES-256" === e;
}
class n_ extends Error {
    constructor(e) {
        super(e.error.message), (this.data = void 0), (this.data = e);
    }
}
class nf extends R {
    constructor(e, t) {
        super(e, t),
            (this._boundTick = void 0),
            (this._tickTimer = null),
            (this._tickInterval = null),
            (this._tickCallCount = 0),
            (this._boundTick = this.tick.bind(this));
    }
    destroy() {
        this.onHandlerDestroying(), this.onHandlerDestroyed();
    }
    onHandlerDestroying() {
        this.clearNextTick(), this.clearInterval();
    }
    onHandlerDestroyed() {}
    hasInterval() {
        return !!this._tickInterval;
    }
    hasNextTick() {
        return !!this._tickTimer;
    }
    setInterval(e) {
        return (
            !this._tickInterval &&
            ((this._tickCallCount = 0), (this._tickInterval = self.setInterval(this._boundTick, e)), !0)
        );
    }
    clearInterval() {
        return !!this._tickInterval && (self.clearInterval(this._tickInterval), (this._tickInterval = null), !0);
    }
    clearNextTick() {
        return !!this._tickTimer && (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0);
    }
    tick() {
        this._tickCallCount++,
            1 === this._tickCallCount &&
                (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), (this._tickCallCount = 0));
    }
    tickImmediate() {
        this.clearNextTick(), (this._tickTimer = self.setTimeout(this._boundTick, 0));
    }
    doTick() {}
}
class nh {
    constructor(e, t, n, r = 0, i = -1, s = !1) {
        (this.level = void 0),
            (this.sn = void 0),
            (this.part = void 0),
            (this.id = void 0),
            (this.size = void 0),
            (this.partial = void 0),
            (this.transmuxing = np()),
            (this.buffering = { audio: np(), video: np(), audiovideo: np() }),
            (this.level = e),
            (this.sn = t),
            (this.id = n),
            (this.size = r),
            (this.part = i),
            (this.partial = s);
    }
}
function np() {
    return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
}
let nm = { length: 0, start: () => 0, end: () => 0 };
class nE {
    static isBuffered(e, t) {
        if (e) {
            let n = nE.getBuffered(e);
            for (let e = n.length; e--; ) if (t >= n.start(e) && t <= n.end(e)) return !0;
        }
        return !1;
    }
    static bufferedRanges(e) {
        if (e) {
            let t = nE.getBuffered(e);
            return nE.timeRangesToArray(t);
        }
        return [];
    }
    static timeRangesToArray(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) t.push({ start: e.start(n), end: e.end(n) });
        return t;
    }
    static bufferInfo(e, t, n) {
        if (e) {
            let r = nE.bufferedRanges(e);
            if (r.length) return nE.bufferedInfo(r, t, n);
        }
        return { len: 0, start: t, end: t, bufferedIndex: -1 };
    }
    static bufferedInfo(e, t, n) {
        let r;
        (t = Math.max(0, t)), e.length > 1 && e.sort((e, t) => e.start - t.start || t.end - e.end);
        let i = -1,
            s = [];
        if (n)
            for (let r = 0; r < e.length; r++) {
                t >= e[r].start && t <= e[r].end && (i = r);
                let a = s.length;
                if (a) {
                    let t = s[a - 1].end;
                    e[r].start - t < n ? e[r].end > t && (s[a - 1].end = e[r].end) : s.push(e[r]);
                } else s.push(e[r]);
            }
        else s = e;
        let a = 0,
            o = t,
            l = t;
        for (let e = 0; e < s.length; e++) {
            let u = s[e].start,
                c = s[e].end;
            if ((-1 === i && t >= u && t <= c && (i = e), t + n >= u && t < c)) (o = u), (a = (l = c) - t);
            else if (t + n < u) {
                r = u;
                break;
            }
        }
        return { len: a, start: o || 0, end: l || 0, nextStart: r, buffered: e, bufferedIndex: i };
    }
    static getBuffered(e) {
        try {
            return e.buffered || nm;
        } catch (e) {
            return P.log("failed to get media.buffered", e), nm;
        }
    }
}
let ng = /\{\$([a-zA-Z0-9-_]+)\}/g;
function nA(e) {
    return ng.test(e);
}
function nI(e, t) {
    if (null !== e.variableList || e.hasVariableRefs) {
        let n = e.variableList;
        return t.replace(ng, (t) => {
            let r = t.substring(2, t.length - 1),
                i = null == n ? void 0 : n[r];
            return void 0 === i
                ? (e.playlistParsingError ||
                      (e.playlistParsingError = Error(
                          `Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r}"`,
                      )),
                  t)
                : i;
        });
    }
    return t;
}
function nT(e, t, n) {
    let r,
        i,
        s = e.variableList;
    if ((s || (e.variableList = s = {}), "QUERYPARAM" in t)) {
        r = t.QUERYPARAM;
        try {
            let e = new self.URL(n).searchParams;
            if (e.has(r)) i = e.get(r);
            else throw Error(`"${r}" does not match any query parameter in URI: "${n}"`);
        } catch (t) {
            e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE QUERYPARAM: ${t.message}`));
        }
    } else (r = t.NAME), (i = t.VALUE);
    r in s
        ? e.playlistParsingError ||
          (e.playlistParsingError = Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${r}"`))
        : (s[r] = i || "");
}
function nS(e, t, n) {
    let r = t.IMPORT;
    if (n && r in n) {
        let t = e.variableList;
        t || (e.variableList = t = {}), (t[r] = n[r]);
    } else
        e.playlistParsingError ||
            (e.playlistParsingError = Error(
                `EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`,
            ));
}
let ny = /^(\d+)x(\d+)$/,
    nv = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class nC {
    constructor(e, t) {
        "string" == typeof e && (e = nC.parseAttrList(e, t)), S(this, e);
    }
    get clientAttrs() {
        return Object.keys(this).filter((e) => "X-" === e.substring(0, 2));
    }
    decimalInteger(e) {
        let t = parseInt(this[e], 10);
        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
    }
    hexadecimalInteger(e) {
        if (this[e]) {
            let t = (this[e] || "0x").slice(2),
                n = new Uint8Array((t = (1 & t.length ? "0" : "") + t).length / 2);
            for (let e = 0; e < t.length / 2; e++) n[e] = parseInt(t.slice(2 * e, 2 * e + 2), 16);
            return n;
        }
        return null;
    }
    hexadecimalIntegerAsNumber(e) {
        let t = parseInt(this[e], 16);
        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
    }
    decimalFloatingPoint(e) {
        return parseFloat(this[e]);
    }
    optionalFloat(e, t) {
        let n = this[e];
        return n ? parseFloat(n) : t;
    }
    enumeratedString(e) {
        return this[e];
    }
    enumeratedStringList(e, t) {
        let n = this[e];
        return (n ? n.split(/[ ,]+/) : []).reduce((e, t) => ((e[t.toLowerCase()] = !0), e), t);
    }
    bool(e) {
        return "YES" === this[e];
    }
    decimalResolution(e) {
        let t = ny.exec(this[e]);
        if (null !== t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };
    }
    static parseAttrList(e, t) {
        let n,
            r = {},
            i = '"';
        for (nv.lastIndex = 0; null !== (n = nv.exec(e)); ) {
            let s = n[1].trim(),
                a = n[2],
                o = 0 === a.indexOf(i) && a.lastIndexOf(i) === a.length - 1,
                l = !1;
            if (o) a = a.slice(1, -1);
            else
                switch (s) {
                    case "IV":
                    case "SCTE35-CMD":
                    case "SCTE35-IN":
                    case "SCTE35-OUT":
                        l = !0;
                }
            if (t && (o || l)) a = nI(t, a);
            else if (!l && !o)
                switch (s) {
                    case "CLOSED-CAPTIONS":
                        if ("NONE" === a) break;
                    case "ALLOWED-CPC":
                    case "CLASS":
                    case "ASSOC-LANGUAGE":
                    case "AUDIO":
                    case "BYTERANGE":
                    case "CHANNELS":
                    case "CHARACTERISTICS":
                    case "CODECS":
                    case "DATA-ID":
                    case "END-DATE":
                    case "GROUP-ID":
                    case "ID":
                    case "IMPORT":
                    case "INSTREAM-ID":
                    case "KEYFORMAT":
                    case "KEYFORMATVERSIONS":
                    case "LANGUAGE":
                    case "NAME":
                    case "PATHWAY-ID":
                    case "QUERYPARAM":
                    case "RECENTLY-REMOVED-DATERANGES":
                    case "SERVER-URI":
                    case "STABLE-RENDITION-ID":
                    case "STABLE-VARIANT-ID":
                    case "START-DATE":
                    case "SUBTITLES":
                    case "SUPPLEMENTAL-CODECS":
                    case "URI":
                    case "VALUE":
                    case "VIDEO":
                    case "X-ASSET-LIST":
                    case "X-ASSET-URI":
                        P.warn(`${e}: attribute ${s} is missing quotes`);
                }
            r[s] = a;
        }
        return r;
    }
}
let nN = "com.apple.hls.interstitial";
function nR(e) {
    return (
        "ID" !== e &&
        "CLASS" !== e &&
        "CUE" !== e &&
        "START-DATE" !== e &&
        "DURATION" !== e &&
        "END-DATE" !== e &&
        "END-ON-NEXT" !== e
    );
}
function nb(e) {
    return "SCTE35-OUT" === e || "SCTE35-IN" === e || "SCTE35-CMD" === e;
}
class nO {
    constructor(e, t, n = 0) {
        var r;
        if (
            ((this.attr = void 0),
            (this.tagAnchor = void 0),
            (this.tagOrder = void 0),
            (this._startDate = void 0),
            (this._endDate = void 0),
            (this._dateAtEnd = void 0),
            (this._cue = void 0),
            (this._badValueForSameId = void 0),
            (this.tagAnchor = (null == t ? void 0 : t.tagAnchor) || null),
            (this.tagOrder = null != (r = null == t ? void 0 : t.tagOrder) ? r : n),
            t)
        ) {
            const n = t.attr;
            for (const t in n)
                if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== n[t]) {
                    P.warn(`DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`),
                        (this._badValueForSameId = t);
                    break;
                }
            e = S(new nC({}), n, e);
        }
        if (
            ((this.attr = e),
            t
                ? ((this._startDate = t._startDate),
                  (this._cue = t._cue),
                  (this._endDate = t._endDate),
                  (this._dateAtEnd = t._dateAtEnd))
                : (this._startDate = new Date(e["START-DATE"])),
            "END-DATE" in this.attr)
        ) {
            const e = (null == t ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
            i(e.getTime()) && (this._endDate = e);
        }
    }
    get id() {
        return this.attr.ID;
    }
    get class() {
        return this.attr.CLASS;
    }
    get cue() {
        let e = this._cue;
        return void 0 === e
            ? (this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
                  pre: !1,
                  post: !1,
                  once: !1,
              }))
            : e;
    }
    get startTime() {
        let { tagAnchor: e } = this;
        return null === e || null === e.programDateTime
            ? (P.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN)
            : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3;
    }
    get startDate() {
        return this._startDate;
    }
    get endDate() {
        let e = this._endDate || this._dateAtEnd;
        if (e) return e;
        let t = this.duration;
        return null !== t ? (this._dateAtEnd = new Date(this._startDate.getTime() + 1e3 * t)) : null;
    }
    get duration() {
        if ("DURATION" in this.attr) {
            let e = this.attr.decimalFloatingPoint("DURATION");
            if (i(e)) return e;
        } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
        return null;
    }
    get plannedDuration() {
        return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
    }
    get endOnNext() {
        return this.attr.bool("END-ON-NEXT");
    }
    get isInterstitial() {
        return this.class === nN;
    }
    get isValid() {
        return (
            !!this.id &&
            !this._badValueForSameId &&
            i(this.startDate.getTime()) &&
            (null === this.duration || this.duration >= 0) &&
            (!this.endOnNext || !!this.class) &&
            (!this.attr.CUE || (!this.cue.pre && !this.cue.post) || this.cue.pre !== this.cue.post) &&
            (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr)
        );
    }
}
let nD = 10;
class nL {
    constructor(e) {
        (this.PTSKnown = !1),
            (this.alignedSliding = !1),
            (this.averagetargetduration = void 0),
            (this.endCC = 0),
            (this.endSN = 0),
            (this.fragments = void 0),
            (this.fragmentHint = void 0),
            (this.partList = null),
            (this.dateRanges = void 0),
            (this.dateRangeTagCount = 0),
            (this.live = !0),
            (this.requestScheduled = -1),
            (this.ageHeader = 0),
            (this.advancedDateTime = void 0),
            (this.updated = !0),
            (this.advanced = !0),
            (this.misses = 0),
            (this.startCC = 0),
            (this.startSN = 0),
            (this.startTimeOffset = null),
            (this.targetduration = 0),
            (this.totalduration = 0),
            (this.type = null),
            (this.url = void 0),
            (this.m3u8 = ""),
            (this.version = null),
            (this.canBlockReload = !1),
            (this.canSkipUntil = 0),
            (this.canSkipDateRanges = !1),
            (this.skippedSegments = 0),
            (this.recentlyRemovedDateranges = void 0),
            (this.partHoldBack = 0),
            (this.holdBack = 0),
            (this.partTarget = 0),
            (this.preloadHint = void 0),
            (this.renditionReports = void 0),
            (this.tuneInGoal = 0),
            (this.deltaUpdateFailed = void 0),
            (this.driftStartTime = 0),
            (this.driftEndTime = 0),
            (this.driftStart = 0),
            (this.driftEnd = 0),
            (this.encryptedFragments = void 0),
            (this.playlistParsingError = null),
            (this.variableList = null),
            (this.hasVariableRefs = !1),
            (this.appliedTimelineOffset = void 0),
            (this.fragments = []),
            (this.encryptedFragments = []),
            (this.dateRanges = {}),
            (this.url = e);
    }
    reloaded(e) {
        if (!e) {
            (this.advanced = !0), (this.updated = !0);
            return;
        }
        let t = this.lastPartSn - e.lastPartSn,
            n = this.lastPartIndex - e.lastPartIndex;
        (this.updated = this.endSN !== e.endSN || !!n || !!t || !this.live),
            (this.advanced = this.endSN > e.endSN || t > 0 || (0 === t && n > 0)),
            this.updated || this.advanced ? (this.misses = Math.floor(0.6 * e.misses)) : (this.misses = e.misses + 1);
    }
    hasKey(e) {
        return this.encryptedFragments.some((t) => {
            let n = t.decryptdata;
            return n || (t.setKeyFormat(e.keyFormat), (n = t.decryptdata)), !!n && e.matches(n);
        });
    }
    get hasProgramDateTime() {
        return !!this.fragments.length && i(this.fragments[this.fragments.length - 1].programDateTime);
    }
    get levelTargetDuration() {
        return this.averagetargetduration || this.targetduration || nD;
    }
    get drift() {
        let e = this.driftEndTime - this.driftStartTime;
        return e > 0 ? (1e3 * (this.driftEnd - this.driftStart)) / e : 1;
    }
    get edge() {
        return this.partEnd || this.fragmentEnd;
    }
    get partEnd() {
        var e;
        return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
    }
    get fragmentEnd() {
        return this.fragments.length ? this.fragments[this.fragments.length - 1].end : 0;
    }
    get fragmentStart() {
        return this.fragments.length ? this.fragments[0].start : 0;
    }
    get age() {
        return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
    }
    get lastPartIndex() {
        var e;
        return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].index : -1;
    }
    get maxPartIndex() {
        let e = this.partList;
        if (e) {
            let t = this.lastPartIndex;
            if (-1 !== t) {
                for (let n = e.length; n--; ) if (e[n].index > t) return e[n].index;
                return t;
            }
        }
        return 0;
    }
    get lastPartSn() {
        var e;
        return null != (e = this.partList) && e.length
            ? this.partList[this.partList.length - 1].fragment.sn
            : this.endSN;
    }
    get expired() {
        if (this.live && this.age && this.misses < 3) {
            let e = this.partEnd - this.fragmentStart;
            return this.age > Math.max(e, this.totalduration) + this.levelTargetDuration;
        }
        return !1;
    }
}
function nw(e, t) {
    return e.length === t.length && !e.some((e, n) => e !== t[n]);
}
function nM(e, t) {
    return (!e && !t) || (!!e && !!t && nw(e, t));
}
function nx(e) {
    return "AES-128" === e || "AES-256" === e || "AES-256-CTR" === e;
}
function nP(e) {
    switch (e) {
        case "AES-128":
        case "AES-256":
            return t8;
        case "AES-256-CTR":
            return t9;
        default:
            throw Error(`invalid full segment method ${e}`);
    }
}
function nk(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
function nU(e) {
    return Uint8Array.from(unescape(encodeURIComponent(e)), (e) => e.charCodeAt(0));
}
function nG(e) {
    let t = nU(e).subarray(0, 16),
        n = new Uint8Array(16);
    return n.set(t, 16 - t.length), n;
}
function nF(e) {
    let t = function (e, t, n) {
        let r = e[t];
        (e[t] = e[n]), (e[n] = r);
    };
    t(e, 0, 3), t(e, 1, 2), t(e, 4, 5), t(e, 6, 7);
}
function nB(e) {
    let t = e.split(":"),
        n = null;
    if ("data" === t[0] && 2 === t.length) {
        let e = t[1].split(";"),
            r = e[e.length - 1].split(",");
        if (2 === r.length) {
            let t = "base64" === r[0],
                i = r[1];
            t ? (e.splice(-1, 1), (n = nk(i))) : (n = nG(i));
        }
    }
    return n;
}
let nV = "u" > typeof self ? self : void 0;
var nH = "org.w3.clearkey",
    nj = "com.apple.fps",
    nY = "com.microsoft.playready",
    nW = "com.widevine.alpha",
    nK = "org.w3.clearkey",
    n$ = "com.apple.streamingkeydelivery",
    nz = "com.microsoft.playready",
    nq = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
function nZ(e) {
    switch (e) {
        case n$:
            return nj;
        case nz:
            return nY;
        case nq:
            return nW;
        case nK:
            return nH;
    }
}
function nX(e) {
    switch (e) {
        case nj:
            return n$;
        case nY:
            return nz;
        case nW:
            return nq;
        case nH:
            return nK;
    }
}
function nQ(e) {
    let { drmSystems: t, widevineLicenseUrl: n } = e,
        r = t ? [nj, nW, nY, nH].filter((e) => !!t[e]) : [];
    return !r[nW] && n && r.push(nW), r;
}
let nJ = (function (e) {
    return null != nV && null != (e = nV.navigator) && e.requestMediaKeySystemAccess
        ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
        : null;
})();
function n0(e, t, n, r) {
    let i;
    switch (e) {
        case nj:
            i = ["cenc", "sinf"];
            break;
        case nW:
        case nY:
            i = ["cenc"];
            break;
        case nH:
            i = ["cenc", "keyids"];
            break;
        default:
            throw Error(`Unknown key-system: ${e}`);
    }
    return n1(i, t, n, r);
}
function n1(e, t, n, r) {
    return [
        {
            initDataTypes: e,
            persistentState: r.persistentState || "optional",
            distinctiveIdentifier: r.distinctiveIdentifier || "optional",
            sessionTypes: r.sessionTypes || [r.sessionType || "temporary"],
            audioCapabilities: t.map((e) => ({
                contentType: `audio/mp4; codecs=${e}`,
                robustness: r.audioRobustness || "",
                encryptionScheme: r.audioEncryptionScheme || null,
            })),
            videoCapabilities: n.map((e) => ({
                contentType: `video/mp4; codecs=${e}`,
                robustness: r.videoRobustness || "",
                encryptionScheme: r.videoEncryptionScheme || null,
            })),
        },
    ];
}
function n2(e) {
    var t;
    return (
        !!e &&
        ("persistent-license" === e.sessionType ||
            !!(null != (t = e.sessionTypes) && t.some((e) => "persistent-license" === e)))
    );
}
function n3(e) {
    let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
        n = String.fromCharCode.apply(null, Array.from(t)),
        r = n.substring(n.indexOf("<"), n.length),
        i = new DOMParser().parseFromString(r, "text/xml").getElementsByTagName("KID")[0];
    if (i) {
        let e = i.childNodes[0] ? i.childNodes[0].nodeValue : i.getAttribute("VALUE");
        if (e) {
            let t = nk(e).subarray(0, 16);
            return nF(t), t;
        }
    }
    return null;
}
let n6 = {};
class n4 {
    static clearKeyUriToKeyIdMap() {
        n6 = {};
    }
    static setKeyIdForUri(e, t) {
        n6[e] = t;
    }
    constructor(e, t, n, r = [1], i = null, s) {
        (this.uri = void 0),
            (this.method = void 0),
            (this.keyFormat = void 0),
            (this.keyFormatVersions = void 0),
            (this.encrypted = void 0),
            (this.isCommonEncryption = void 0),
            (this.iv = null),
            (this.key = null),
            (this.keyId = null),
            (this.pssh = null),
            (this.method = e),
            (this.uri = t),
            (this.keyFormat = n),
            (this.keyFormatVersions = r),
            (this.iv = i),
            (this.encrypted = !!e && "NONE" !== e),
            (this.isCommonEncryption = this.encrypted && !nx(e)),
            null != s && s.startsWith("0x") && (this.keyId = new Uint8Array(V(s)));
    }
    matches(e) {
        return (
            e.uri === this.uri &&
            e.method === this.method &&
            e.encrypted === this.encrypted &&
            e.keyFormat === this.keyFormat &&
            nw(e.keyFormatVersions, this.keyFormatVersions) &&
            nM(e.iv, this.iv) &&
            nM(e.keyId, this.keyId)
        );
    }
    isSupported() {
        if (this.method) {
            if (nx(this.method) || "NONE" === this.method) return !0;
            if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
            switch (this.keyFormat) {
                case n$:
                case nq:
                case nz:
                case nK:
                    return -1 !== ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
            }
        }
        return !1;
    }
    getDecryptData(e) {
        if (!this.encrypted || !this.uri) return null;
        if (nx(this.method)) {
            let t = this.iv;
            return (
                t ||
                    ("number" != typeof e &&
                        (P.warn(
                            `missing IV for initialization segment with method="${this.method}" - compliance issue`,
                        ),
                        (e = 0)),
                    (t = n5(e))),
                new n4(this.method, this.uri, "identity", this.keyFormatVersions, t)
            );
        }
        if (this.pssh && this.keyId) return this;
        let t = nB(this.uri);
        if (t)
            switch (this.keyFormat) {
                case nq:
                    if (((this.pssh = t), !this.keyId)) {
                        let e = ew(t.buffer);
                        if (e.length) {
                            var n;
                            let t = e[0];
                            this.keyId = null != (n = t.kids) && n.length ? t.kids[0] : null;
                        }
                    }
                    if (!this.keyId) {
                        let e = t.length - 22;
                        this.keyId = t.subarray(e, e + 16);
                    }
                    break;
                case nz: {
                    let e = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                    (this.pssh = eL(e, null, t)), (this.keyId = n3(t));
                    break;
                }
                default: {
                    let e = t.subarray(0, 16);
                    if (16 !== e.length) {
                        let t = new Uint8Array(16);
                        t.set(e, 16 - e.length), (e = t);
                    }
                    this.keyId = e;
                }
            }
        if (!this.keyId || 16 !== this.keyId.byteLength) {
            let e = n6[this.uri];
            if (!e) {
                let t = Object.keys(n6).length % Number.MAX_SAFE_INTEGER;
                new DataView((e = new Uint8Array(16)).buffer, 12, 4).setUint32(0, t), n4.setKeyIdForUri(this.uri, e);
            }
            this.keyId = e;
        }
        return this;
    }
}
function n5(e) {
    let t = new Uint8Array(16);
    for (let n = 12; n < 16; n++) t[n] = (e >> (8 * (15 - n))) & 255;
    return t;
}
let n7 =
        /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
    n8 = /#EXT-X-MEDIA:(.*)/g,
    n9 = /^#EXT(?:INF|-X-TARGETDURATION):/m,
    re = RegExp(
        [/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"),
        "g",
    ),
    rt = new RegExp(
        [
            /#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/
                .source,
            /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,
            /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,
            /(#)([^:]*):(.*)/.source,
            /(#)(.*)(?:.*)\r?\n?/.source,
        ].join("|"),
    );
class rn {
    static findGroup(e, t) {
        for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (r.id === t) return r;
        }
    }
    static resolve(e, t) {
        return Y.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });
    }
    static isMediaPlaylist(e) {
        return n9.test(e);
    }
    static parseMasterPlaylist(e, t) {
        let n,
            r = {
                contentSteering: null,
                levels: [],
                playlistParsingError: null,
                sessionData: null,
                sessionKeys: null,
                startTimeOffset: null,
                variableList: null,
                hasVariableRefs: nA(e),
            },
            i = [];
        if (((n7.lastIndex = 0), !e.startsWith("#EXTM3U")))
            return (r.playlistParsingError = Error("no EXTM3U delimiter")), r;
        for (; null != (n = n7.exec(e)); )
            if (n[1]) {
                var s;
                let e = new nC(n[1], r),
                    a = nI(r, n[2]),
                    o = {
                        attrs: e,
                        bitrate: e.decimalInteger("BANDWIDTH") || e.decimalInteger("AVERAGE-BANDWIDTH"),
                        name: e.NAME,
                        url: rn.resolve(a, t),
                    },
                    l = e.decimalResolution("RESOLUTION");
                l && ((o.width = l.width), (o.height = l.height)), ro(e.CODECS, o);
                let u = e["SUPPLEMENTAL-CODECS"];
                u && ((o.supplemental = {}), ro(u, o.supplemental)),
                    (null != (s = o.unknownCodecs) && s.length) || i.push(o),
                    r.levels.push(o);
            } else if (n[3]) {
                let e = n[3],
                    i = n[4];
                switch (e) {
                    case "SESSION-DATA": {
                        let e = new nC(i, r),
                            t = e["DATA-ID"];
                        t && (null === r.sessionData && (r.sessionData = {}), (r.sessionData[t] = e));
                        break;
                    }
                    case "SESSION-KEY": {
                        let e = rs(i, t, r);
                        e.encrypted && e.isSupported()
                            ? (null === r.sessionKeys && (r.sessionKeys = []), r.sessionKeys.push(e))
                            : P.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${i}"`);
                        break;
                    }
                    case "DEFINE":
                        {
                            let e = new nC(i, r);
                            nT(r, e, t);
                        }
                        break;
                    case "CONTENT-STEERING": {
                        let e = new nC(i, r);
                        r.contentSteering = { uri: rn.resolve(e["SERVER-URI"], t), pathwayId: e["PATHWAY-ID"] || "." };
                        break;
                    }
                    case "START":
                        r.startTimeOffset = ra(i);
                }
            }
        let a = i.length > 0 && i.length < r.levels.length;
        return (
            (r.levels = a ? i : r.levels),
            0 === r.levels.length && (r.playlistParsingError = Error("no levels found in manifest")),
            r
        );
    }
    static parseMasterPlaylistMedia(e, t, n) {
        let r,
            i = {},
            s = n.levels,
            a = {
                AUDIO: s.map((e) => ({ id: e.attrs.AUDIO, audioCodec: e.audioCodec })),
                SUBTITLES: s.map((e) => ({ id: e.attrs.SUBTITLES, textCodec: e.textCodec })),
                "CLOSED-CAPTIONS": [],
            },
            o = 0;
        for (n8.lastIndex = 0; null !== (r = n8.exec(e)); ) {
            let e = new nC(r[1], n),
                s = e.TYPE;
            if (s) {
                let n = a[s],
                    r = i[s] || [];
                i[s] = r;
                let l = e.LANGUAGE,
                    u = e["ASSOC-LANGUAGE"],
                    c = e.CHANNELS,
                    d = e.CHARACTERISTICS,
                    _ = e["INSTREAM-ID"],
                    f = {
                        attrs: e,
                        bitrate: 0,
                        id: o++,
                        groupId: e["GROUP-ID"] || "",
                        name: e.NAME || l || "",
                        type: s,
                        default: e.bool("DEFAULT"),
                        autoselect: e.bool("AUTOSELECT"),
                        forced: e.bool("FORCED"),
                        lang: l,
                        url: e.URI ? rn.resolve(e.URI, t) : "",
                    };
                if (
                    (u && (f.assocLang = u),
                    c && (f.channels = c),
                    d && (f.characteristics = d),
                    _ && (f.instreamId = _),
                    null != n && n.length)
                ) {
                    let e = rn.findGroup(n, f.groupId) || n[0];
                    rl(f, e, "audioCodec"), rl(f, e, "textCodec");
                }
                r.push(f);
            }
        }
        return i;
    }
    static parseLevelPlaylist(e, t, n, r, s, a) {
        var o;
        let l,
            u,
            c,
            d,
            _ = { url: t },
            f = new nL(t),
            h = f.fragments,
            p = [],
            m = null,
            E = 0,
            g = 0,
            A = 0,
            I = 0,
            T = 0,
            y = null,
            v = new X(r, _),
            C = -1,
            N = !1,
            R = null;
        if (
            ((re.lastIndex = 0),
            (f.m3u8 = e),
            (f.hasVariableRefs = nA(e)),
            (null == (o = re.exec(e)) ? void 0 : o[0]) !== "#EXTM3U")
        )
            return (f.playlistParsingError = Error("Missing format identifier #EXTM3U")), f;
        for (; null !== (l = re.exec(e)); ) {
            N &&
                ((N = !1),
                ((v = new X(r, _)).playlistOffset = A),
                v.setStart(A),
                (v.sn = E),
                (v.cc = I),
                T && (v.bitrate = T),
                (v.level = n),
                m &&
                    ((v.initSegment = m),
                    m.rawProgramDateTime &&
                        ((v.rawProgramDateTime = m.rawProgramDateTime), (m.rawProgramDateTime = null)),
                    R && (v.setByteRange(R), (R = null))));
            let e = l[1];
            if (e) {
                v.duration = parseFloat(e);
                let t = (" " + l[2]).slice(1);
                (v.title = t || null), v.tagList.push(t ? ["INF", e, t] : ["INF", e]);
            } else if (l[3]) {
                if (i(v.duration)) {
                    (v.playlistOffset = A),
                        v.setStart(A),
                        c && r_(v, c, f),
                        (v.sn = E),
                        (v.level = n),
                        (v.cc = I),
                        h.push(v);
                    let e = (" " + l[3]).slice(1);
                    (v.relurl = nI(f, e)), rc(v, y, p), (y = v), (A += v.duration), E++, (g = 0), (N = !0);
                }
            } else {
                if (!(l = l[0].match(rt))) {
                    P.warn("No matches on slow regex match for level playlist!");
                    continue;
                }
                for (u = 1; u < l.length && void 0 === l[u]; u++);
                let e = (" " + l[u]).slice(1),
                    s = (" " + l[u + 1]).slice(1),
                    o = l[u + 2] ? (" " + l[u + 2]).slice(1) : null;
                switch (e) {
                    case "BYTERANGE":
                        y ? v.setByteRange(s, y) : v.setByteRange(s);
                        break;
                    case "PROGRAM-DATE-TIME":
                        (v.rawProgramDateTime = s),
                            v.tagList.push(["PROGRAM-DATE-TIME", s]),
                            -1 === C && (C = h.length);
                        break;
                    case "PLAYLIST-TYPE":
                        f.type && rf(f, e, l), (f.type = s.toUpperCase());
                        break;
                    case "MEDIA-SEQUENCE":
                        0 !== f.startSN ? rf(f, e, l) : h.length > 0 && rh(f, e, l), (E = f.startSN = parseInt(s));
                        break;
                    case "SKIP": {
                        f.skippedSegments && rf(f, e, l);
                        let t = new nC(s, f),
                            n = t.decimalInteger("SKIPPED-SEGMENTS");
                        if (i(n)) {
                            f.skippedSegments += n;
                            for (let e = n; e--; ) h.push(null);
                            E += n;
                        }
                        let r = t.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                        r &&
                            (f.recentlyRemovedDateranges = (f.recentlyRemovedDateranges || []).concat(r.split("	")));
                        break;
                    }
                    case "TARGETDURATION":
                        0 !== f.targetduration && rf(f, e, l), (f.targetduration = Math.max(parseInt(s), 1));
                        break;
                    case "VERSION":
                        null !== f.version && rf(f, e, l), (f.version = parseInt(s));
                        break;
                    case "INDEPENDENT-SEGMENTS":
                        break;
                    case "ENDLIST":
                        f.live || rf(f, e, l), (f.live = !1);
                        break;
                    case "#":
                        (s || o) && v.tagList.push(o ? [s, o] : [s]);
                        break;
                    case "DISCONTINUITY":
                        I++, v.tagList.push(["DIS"]);
                        break;
                    case "GAP":
                        (v.gap = !0), v.tagList.push([e]);
                        break;
                    case "BITRATE":
                        v.tagList.push([e, s]), i((T = 1e3 * parseInt(s))) ? (v.bitrate = T) : (T = 0);
                        break;
                    case "DATERANGE": {
                        let e = new nC(s, f),
                            t = new nO(e, f.dateRanges[e.ID], f.dateRangeTagCount);
                        f.dateRangeTagCount++,
                            t.isValid || f.skippedSegments
                                ? (f.dateRanges[t.id] = t)
                                : P.warn(`Ignoring invalid DATERANGE tag: "${s}"`),
                            v.tagList.push(["EXT-X-DATERANGE", s]);
                        break;
                    }
                    case "DEFINE":
                        {
                            let e = new nC(s, f);
                            "IMPORT" in e ? nS(f, e, a) : nT(f, e, t);
                        }
                        break;
                    case "DISCONTINUITY-SEQUENCE":
                        0 !== f.startCC ? rf(f, e, l) : h.length > 0 && rh(f, e, l), (f.startCC = I = parseInt(s));
                        break;
                    case "KEY": {
                        let e = rs(s, t, f);
                        if (e.isSupported()) {
                            if ("NONE" === e.method) {
                                c = void 0;
                                break;
                            }
                            c || (c = {});
                            let t = c[e.keyFormat];
                            (null != t && t.matches(e)) || (t && (c = S({}, c)), (c[e.keyFormat] = e));
                        } else P.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${s}"`);
                        break;
                    }
                    case "START":
                        f.startTimeOffset = ra(s);
                        break;
                    case "MAP": {
                        let e = new nC(s, f);
                        if (v.duration) {
                            let t = new X(r, _);
                            rd(t, e, n, c),
                                (m = t),
                                (v.initSegment = m),
                                m.rawProgramDateTime &&
                                    !v.rawProgramDateTime &&
                                    (v.rawProgramDateTime = m.rawProgramDateTime);
                        } else {
                            let t = v.byteRangeEndOffset;
                            if (t) {
                                let e = v.byteRangeStartOffset;
                                R = `${t - e}@${e}`;
                            } else R = null;
                            rd(v, e, n, c), (m = v), (N = !0);
                        }
                        m.cc = I;
                        break;
                    }
                    case "SERVER-CONTROL":
                        d && rf(f, e, l),
                            (f.canBlockReload = (d = new nC(s)).bool("CAN-BLOCK-RELOAD")),
                            (f.canSkipUntil = d.optionalFloat("CAN-SKIP-UNTIL", 0)),
                            (f.canSkipDateRanges = f.canSkipUntil > 0 && d.bool("CAN-SKIP-DATERANGES")),
                            (f.partHoldBack = d.optionalFloat("PART-HOLD-BACK", 0)),
                            (f.holdBack = d.optionalFloat("HOLD-BACK", 0));
                        break;
                    case "PART-INF":
                        f.partTarget && rf(f, e, l), (f.partTarget = new nC(s).decimalFloatingPoint("PART-TARGET"));
                        break;
                    case "PART": {
                        let e = f.partList;
                        e || (e = f.partList = []);
                        let t = g > 0 ? e[e.length - 1] : void 0,
                            n = g++,
                            r = new Q(new nC(s, f), v, _, n, t);
                        e.push(r), (v.duration += r.duration);
                        break;
                    }
                    case "PRELOAD-HINT": {
                        let e = new nC(s, f);
                        f.preloadHint = e;
                        break;
                    }
                    case "RENDITION-REPORT": {
                        let e = new nC(s, f);
                        (f.renditionReports = f.renditionReports || []), f.renditionReports.push(e);
                        break;
                    }
                    default:
                        P.warn(`line parsed but not handled: ${l}`);
                }
            }
        }
        y && !y.relurl
            ? (h.pop(), (A -= y.duration), f.partList && (f.fragmentHint = y))
            : f.partList && (rc(v, y, p), (v.cc = I), (f.fragmentHint = v), c && r_(v, c, f)),
            f.targetduration || (f.playlistParsingError = Error("Missing Target Duration"));
        let b = h.length,
            O = h[0],
            D = h[b - 1];
        if ((A += f.skippedSegments * f.targetduration) > 0 && b && D) {
            f.averagetargetduration = A / b;
            let e = D.sn;
            (f.endSN = "initSegment" !== e ? e : 0), f.live || (D.endList = !0), C > 0 && (ru(h, C), O && p.unshift(O));
        }
        return (
            f.fragmentHint && (A += f.fragmentHint.duration),
            (f.totalduration = A),
            p.length && f.dateRangeTagCount && O && rr(p, f),
            (f.endCC = I),
            f
        );
    }
}
function rr(e, t) {
    let n = e.length;
    if (!n)
        if (!t.hasProgramDateTime) return;
        else {
            let r = t.fragments[t.fragments.length - 1];
            e.push(r), n++;
        }
    let r = e[n - 1],
        i = t.live ? 1 / 0 : t.totalduration,
        s = Object.keys(t.dateRanges);
    for (let o = s.length; o--; ) {
        let l = t.dateRanges[s[o]],
            u = l.startDate.getTime();
        l.tagAnchor = r.ref;
        for (let r = n; r--; ) {
            var a;
            if ((null == (a = e[r]) ? void 0 : a.sn) < t.startSN) break;
            let n = ri(t, u, e, r, i);
            if (-1 !== n) {
                l.tagAnchor = t.fragments[n].ref;
                break;
            }
        }
    }
}
function ri(e, t, n, r, i) {
    let s = n[r];
    if (s) {
        let o = s.programDateTime;
        if (t >= o || 0 === r) {
            var a;
            if (t <= o + 1e3 * (((null == (a = n[r + 1]) ? void 0 : a.start) || i) - s.start)) {
                let i = n[r].sn - e.startSN;
                if (i < 0) return -1;
                let s = e.fragments;
                if (s.length > n.length) {
                    let a = (n[r + 1] || s[s.length - 1]).sn - e.startSN;
                    for (let e = a; e > i; e--) {
                        let n = s[e].programDateTime;
                        if (t >= n && t < n + 1e3 * s[e].duration) return e;
                    }
                }
                return i;
            }
        }
    }
    return -1;
}
function rs(e, t, n) {
    var r, i;
    let s = new nC(e, n),
        a = null != (r = s.METHOD) ? r : "",
        o = s.URI,
        l = s.hexadecimalInteger("IV"),
        u = s.KEYFORMATVERSIONS,
        c = null != (i = s.KEYFORMAT) ? i : "identity";
    return (
        o && s.IV && !l && P.error(`Invalid IV: ${s.IV}`),
        new n4(a, o ? rn.resolve(o, t) : "", c, (u || "1").split("/").map(Number).filter(Number.isFinite), l, s.KEYID)
    );
}
function ra(e) {
    let t = new nC(e).decimalFloatingPoint("TIME-OFFSET");
    return i(t) ? t : null;
}
function ro(e, t) {
    let n = (e || "").split(/[ ,]+/).filter((e) => e);
    ["video", "audio", "text"].forEach((e) => {
        let r = n.filter((t) => ek(t, e));
        r.length &&
            ((t[`${e}Codec`] = r.map((e) => e.split("/")[0]).join(",")), (n = n.filter((e) => -1 === r.indexOf(e))));
    }),
        (t.unknownCodecs = n);
}
function rl(e, t, n) {
    let r = t[n];
    r && (e[n] = r);
}
function ru(e, t) {
    let n = e[t];
    for (let r = t; r--; ) {
        let t = e[r];
        if (!t) return;
        (t.programDateTime = n.programDateTime - 1e3 * t.duration), (n = t);
    }
}
function rc(e, t, n) {
    e.rawProgramDateTime ? n.push(e) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime);
}
function rd(e, t, n, r) {
    (e.relurl = t.URI),
        t.BYTERANGE && e.setByteRange(t.BYTERANGE),
        (e.level = n),
        (e.sn = "initSegment"),
        r && (e.levelkeys = r),
        (e.initSegment = null);
}
function r_(e, t, n) {
    e.levelkeys = t;
    let { encryptedFragments: r } = n;
    (!r.length || r[r.length - 1].levelkeys !== t) && Object.keys(t).some((e) => t[e].isCommonEncryption) && r.push(e);
}
function rf(e, t, n) {
    e.playlistParsingError = Error(`#EXT-X-${t} must not appear more than once (${n[0]})`);
}
function rh(e, t, n) {
    e.playlistParsingError = Error(`#EXT-X-${t} must appear before the first Media Segment (${n[0]})`);
}
function rp(e, t) {
    let n = t.startPTS;
    if (i(n)) {
        let r,
            i = 0;
        t.sn > e.sn ? ((i = n - e.start), (r = e)) : ((i = e.start - n), (r = t)), r.duration !== i && r.setDuration(i);
    } else
        t.sn > e.sn
            ? e.cc === t.cc && e.minEndPTS
                ? t.setStart(e.start + (e.minEndPTS - e.start))
                : t.setStart(e.start + e.duration)
            : t.setStart(Math.max(e.start - t.duration, 0));
}
function rm(e, t, n, r, s, a, o) {
    let l;
    r - n <= 0 && (o.warn("Fragment should have a positive duration", t), (r = n + t.duration), (a = s + t.duration));
    let u = n,
        c = r,
        d = t.startPTS,
        _ = t.endPTS;
    if (i(d)) {
        let l = Math.abs(d - n);
        e && l > e.totalduration
            ? o.warn(`media timestamps and playlist times differ by ${l}s for level ${t.level} ${e.url}`)
            : i(t.deltaPTS)
              ? (t.deltaPTS = Math.max(l, t.deltaPTS))
              : (t.deltaPTS = l),
            (u = Math.max(n, d)),
            (n = Math.min(n, d)),
            (s = void 0 !== t.startDTS ? Math.min(s, t.startDTS) : s),
            (c = Math.min(r, _)),
            (r = Math.max(r, _)),
            (a = void 0 !== t.endDTS ? Math.max(a, t.endDTS) : a);
    }
    let f = n - t.start;
    0 !== t.start && t.setStart(n),
        t.setDuration(r - t.start),
        (t.startPTS = n),
        (t.maxStartPTS = u),
        (t.startDTS = s),
        (t.endPTS = r),
        (t.minEndPTS = c),
        (t.endDTS = a);
    let h = t.sn;
    if (!e || h < e.startSN || h > e.endSN) return 0;
    let p = h - e.startSN,
        m = e.fragments;
    for (m[p] = t, l = p; l > 0; l--) rp(m[l], m[l - 1]);
    for (l = p; l < m.length - 1; l++) rp(m[l], m[l + 1]);
    return e.fragmentHint && rp(m[m.length - 1], e.fragmentHint), (e.PTSKnown = e.alignedSliding = !0), f;
}
function rE(e, t, n) {
    let r;
    if (e === t) return;
    let s = null,
        a = e.fragments;
    for (let e = a.length - 1; e >= 0; e--) {
        let t = a[e].initSegment;
        if (t) {
            s = t;
            break;
        }
    }
    e.fragmentHint && delete e.fragmentHint.endPTS,
        rI(e, t, (e, n, a, o) => {
            if ((!t.startCC || t.skippedSegments) && n.cc !== e.cc) {
                let r = e.cc - n.cc;
                for (let e = a; e < o.length; e++) o[e].cc += r;
                t.endCC = o[o.length - 1].cc;
            }
            i(e.startPTS) &&
                i(e.endPTS) &&
                (n.setStart((n.startPTS = e.startPTS)),
                (n.startDTS = e.startDTS),
                (n.maxStartPTS = e.maxStartPTS),
                (n.endPTS = e.endPTS),
                (n.endDTS = e.endDTS),
                (n.minEndPTS = e.minEndPTS),
                n.setDuration(e.endPTS - e.startPTS),
                n.duration && (r = n),
                (t.PTSKnown = t.alignedSliding = !0)),
                e.hasStreams && (n.elementaryStreams = e.elementaryStreams),
                (n.loader = e.loader),
                e.hasStats && (n.stats = e.stats),
                e.initSegment && ((n.initSegment = e.initSegment), (s = e.initSegment));
        });
    let o = t.fragments,
        l = t.fragmentHint ? o.concat(t.fragmentHint) : o;
    if (
        (s &&
            l.forEach((e) => {
                var t;
                e &&
                    (!e.initSegment || e.initSegment.relurl === (null == (t = s) ? void 0 : t.relurl)) &&
                    (e.initSegment = s);
            }),
        t.skippedSegments)
    ) {
        if (((t.deltaUpdateFailed = o.some((e) => !e)), t.deltaUpdateFailed)) {
            n.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
            for (let e = t.skippedSegments; e--; ) o.shift();
            t.startSN = o[0].sn;
        } else {
            t.canSkipDateRanges && (t.dateRanges = rg(e.dateRanges, t, n));
            let r = e.fragments.filter((e) => e.rawProgramDateTime);
            if (e.hasProgramDateTime && !t.hasProgramDateTime)
                for (let e = 1; e < l.length; e++) null === l[e].programDateTime && rc(l[e], l[e - 1], r);
            rr(r, t);
        }
        t.endCC = o[o.length - 1].cc;
    }
    if (!t.startCC) {
        var u;
        let n = rC(e, t.startSN - 1);
        t.startCC = null != (u = null == n ? void 0 : n.cc) ? u : o[0].cc;
    }
    rA(e.partList, t.partList, (e, t) => {
        (t.elementaryStreams = e.elementaryStreams), (t.stats = e.stats);
    }),
        r ? rm(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS, n) : rS(e, t),
        o.length && (t.totalduration = t.edge - o[0].start),
        (t.driftStartTime = e.driftStartTime),
        (t.driftStart = e.driftStart);
    let c = t.advancedDateTime;
    if (t.advanced && c) {
        let e = t.edge;
        t.driftStart || ((t.driftStartTime = c), (t.driftStart = e)), (t.driftEndTime = c), (t.driftEnd = e);
    } else (t.driftEndTime = e.driftEndTime), (t.driftEnd = e.driftEnd), (t.advancedDateTime = e.advancedDateTime);
    -1 === t.requestScheduled && (t.requestScheduled = e.requestScheduled);
}
function rg(e, t, n) {
    let { dateRanges: r, recentlyRemovedDateranges: i } = t,
        s = S({}, e);
    i &&
        i.forEach((e) => {
            delete s[e];
        });
    let a = Object.keys(s).length;
    return a
        ? (Object.keys(r).forEach((e) => {
              let t = s[e],
                  i = new nO(r[e].attr, t);
              i.isValid
                  ? ((s[e] = i), t || (i.tagOrder += a))
                  : n.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${tf(r[e].attr)}"`);
          }),
          s)
        : r;
}
function rA(e, t, n) {
    if (e && t) {
        let r = 0;
        for (let i = 0, s = e.length; i <= s; i++) {
            let s = e[i],
                a = t[i + r];
            s && a && s.index === a.index && s.fragment.sn === a.fragment.sn ? n(s, a) : r--;
        }
    }
}
function rI(e, t, n) {
    let r = t.skippedSegments,
        i = Math.max(e.startSN, t.startSN) - t.startSN,
        s = +!!e.fragmentHint + (r ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN,
        a = t.startSN - e.startSN,
        o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
        l = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
    for (let u = i; u <= s; u++) {
        let i = l[a + u],
            s = o[u];
        if ((r && !s && i && (s = t.fragments[u] = i), i && s)) {
            n(i, s, u, o);
            let r = i.relurl,
                a = s.relurl;
            if (r && rO(r, a)) {
                t.playlistParsingError = rT(`media sequence mismatch ${s.sn}:`, e, t, i, s);
                return;
            }
            if (i.cc !== s.cc) {
                t.playlistParsingError = rT(`discontinuity sequence mismatch (${i.cc}!=${s.cc})`, e, t, i, s);
                return;
            }
        }
    }
}
function rT(e, t, n, r, i) {
    return Error(`${e} ${i.url}
Playlist starting @${t.startSN}
${t.m3u8}

Playlist starting @${n.startSN}
${n.m3u8}`);
}
function rS(e, t, n = !0) {
    let r = t.startSN + t.skippedSegments - e.startSN,
        i = e.fragments,
        s = r >= 0,
        a = 0;
    if (s && r < i.length) a = i[r].start;
    else if (s && t.startSN === e.endSN + 1) a = e.fragmentEnd;
    else if (s && n) a = e.fragmentStart + r * t.levelTargetDuration;
    else {
        if (t.skippedSegments || 0 !== t.fragmentStart) return;
        a = e.fragmentStart;
    }
    ry(t, a);
}
function ry(e, t) {
    if (t) {
        let n = e.fragments;
        for (let r = e.skippedSegments; r < n.length; r++) n[r].addStart(t);
        e.fragmentHint && e.fragmentHint.addStart(t);
    }
}
function rv(e, t = 1 / 0) {
    let n = 1e3 * e.targetduration;
    if (e.updated) {
        let r = e.fragments,
            i = 4;
        if (r.length && n * i > t) {
            let e = 1e3 * r[r.length - 1].duration;
            e < n && (n = e);
        }
    } else n /= 2;
    return Math.round(n);
}
function rC(e, t, n) {
    if (!e) return null;
    let r = e.fragments[t - e.startSN];
    return r || ((r = e.fragmentHint) && r.sn === t) ? r : t < e.startSN && n && n.sn === t ? n : null;
}
function rN(e, t, n) {
    return e ? rR(e.partList, t, n) : null;
}
function rR(e, t, n) {
    if (e)
        for (let r = e.length; r--; ) {
            let i = e[r];
            if (i.index === n && i.fragment.sn === t) return i;
        }
    return null;
}
function rb(e) {
    e.forEach((e, t) => {
        var n;
        null == (n = e.details) ||
            n.fragments.forEach((e) => {
                (e.level = t), e.initSegment && (e.initSegment.level = t);
            });
    });
}
function rO(e, t) {
    return e !== t && !!t && rD(e) !== rD(t);
}
function rD(e) {
    return e.replace(/\?[^?]*$/, "");
}
function rL(e, t) {
    for (let r = 0, i = e.length; r < i; r++) {
        var n;
        if ((null == (n = e[r]) ? void 0 : n.cc) === t) return e[r];
    }
    return null;
}
function rw(e, t) {
    return !!e && !!(t.startCC < e.endCC) && !!(t.endCC > e.startCC);
}
function rM(e, t) {
    let n = e.start + t;
    (e.startPTS = n), e.setStart(n), (e.endPTS = n + e.duration);
}
function rx(e, t) {
    let n = t.fragments;
    for (let t = 0, r = n.length; t < r; t++) rM(n[t], e);
    t.fragmentHint && rM(t.fragmentHint, e), (t.alignedSliding = !0);
}
function rP(e, t) {
    e && (rk(t, e), t.alignedSliding || rU(t, e), t.alignedSliding || t.skippedSegments || rS(e, t, !1));
}
function rk(e, t) {
    if (!rw(t, e)) return;
    let n = Math.min(t.endCC, e.endCC),
        r = rL(t.fragments, n),
        i = rL(e.fragments, n);
    r && i && (P.log(`Aligning playlist at start of dicontinuity sequence ${n}`), rx(r.start - i.start, e));
}
function rU(e, t) {
    let n, r;
    if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
    let i = e.fragments,
        s = t.fragments;
    if (!i.length || !s.length) return;
    let a = Math.min(t.endCC, e.endCC);
    t.startCC < a && e.startCC < a && ((n = rL(s, a)), (r = rL(i, a))),
        (n && r) || (r = rL(i, (n = s[Math.floor(s.length / 2)]).cc) || i[Math.floor(i.length / 2)]);
    let o = n.programDateTime,
        l = r.programDateTime;
    o && l && rx((l - o) / 1e3 - (r.start - n.start), e);
}
function rG(e, t, n) {
    rF(e, t, n), e.addEventListener(t, n);
}
function rF(e, t, n) {
    e.removeEventListener(t, n);
}
let rB = function (e) {
        let t = "",
            n = e.length;
        for (let r = 0; r < n; r++) t += `[${e.start(r).toFixed(3)}-${e.end(r).toFixed(3)}]`;
        return t;
    },
    rV = "STOPPED",
    rH = "IDLE",
    rj = "KEY_LOADING",
    rY = "FRAG_LOADING",
    rW = "FRAG_LOADING_WAITING_RETRY",
    rK = "WAITING_TRACK",
    r$ = "PARSING",
    rz = "PARSED",
    rq = "ENDED",
    rZ = "ERROR",
    rX = "WAITING_INIT_PTS",
    rQ = "WAITING_LEVEL";
class rJ extends nf {
    constructor(e, t, n, r, s) {
        super(r, e.logger),
            (this.hls = void 0),
            (this.fragPrevious = null),
            (this.fragCurrent = null),
            (this.fragmentTracker = void 0),
            (this.transmuxer = null),
            (this._state = rV),
            (this.playlistType = void 0),
            (this.media = null),
            (this.mediaBuffer = null),
            (this.config = void 0),
            (this.bitrateTest = !1),
            (this.lastCurrentTime = 0),
            (this.nextLoadPosition = 0),
            (this.startPosition = 0),
            (this.startTimeOffset = null),
            (this.retryDate = 0),
            (this.levels = null),
            (this.fragmentLoader = void 0),
            (this.keyLoader = void 0),
            (this.levelLastLoaded = null),
            (this.startFragRequested = !1),
            (this.decrypter = void 0),
            (this.initPTS = []),
            (this.buffering = !0),
            (this.loadingParts = !1),
            (this.loopSn = void 0),
            (this.onMediaSeeking = () => {
                let { config: e, fragCurrent: t, media: n, mediaBuffer: r, state: s } = this,
                    a = n ? n.currentTime : 0,
                    o = nE.bufferInfo(r || n, a, e.maxBufferHole),
                    l = !o.len;
                if (
                    (this.log(
                        `Media seeking to ${i(a) ? a.toFixed(3) : a}, state: ${s}, ${l ? "out of" : "in"} buffer`,
                    ),
                    this.state === rq)
                )
                    this.resetLoadingState();
                else if (t) {
                    let n = e.maxFragLookUpTolerance,
                        r = t.start - n,
                        i = t.start + t.duration + n;
                    if (l || i < o.start || r > o.end) {
                        let e = a > i;
                        (a < r || e) &&
                            (e &&
                                t.loader &&
                                (this.log(`Cancelling fragment load for seek (sn: ${t.sn})`),
                                t.abortRequests(),
                                this.resetLoadingState()),
                            (this.fragPrevious = null));
                    }
                }
                if (
                    n &&
                    (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0),
                    a > this.lastCurrentTime && (this.lastCurrentTime = a),
                    !this.loadingParts)
                ) {
                    let e = Math.max(o.end, a),
                        t = this.shouldLoadParts(this.getLevelDetails(), e);
                    t &&
                        (this.log(`LL-Part loading ON after seeking to ${a.toFixed(2)} with buffer @${e.toFixed(2)}`),
                        (this.loadingParts = t));
                }
                !this.hls.hasEnoughToStart &&
                    (this.log(
                        `Setting ${l ? "startPosition" : "nextLoadPosition"} to ${a} for seek without enough to start`,
                    ),
                    (this.nextLoadPosition = a),
                    l && (this.startPosition = a)),
                    l && this.state === rH && this.tickImmediate();
            }),
            (this.onMediaEnded = () => {
                this.log("setting startPosition to 0 because media ended"),
                    (this.startPosition = this.lastCurrentTime = 0);
            }),
            (this.playlistType = s),
            (this.hls = e),
            (this.fragmentLoader = new nl(e.config)),
            (this.keyLoader = n),
            (this.fragmentTracker = t),
            (this.config = e.config),
            (this.decrypter = new na(e.config));
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(u.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(u.ERROR, this.onError, this);
    }
    doTick() {
        this.onTickEnd();
    }
    onTickEnd() {}
    startLoad(e) {}
    stopLoad() {
        if (this.state === rV) return;
        this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
        let e = this.fragCurrent;
        null != e && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
            this.resetTransmuxer(),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.clearInterval(),
            this.clearNextTick(),
            (this.state = rV);
    }
    get startPositionValue() {
        let { nextLoadPosition: e, startPosition: t } = this;
        return -1 === t && e ? e : t;
    }
    get bufferingEnabled() {
        return this.buffering;
    }
    pauseBuffering() {
        this.buffering = !1;
    }
    resumeBuffering() {
        this.buffering = !0;
    }
    get inFlightFrag() {
        return { frag: this.fragCurrent, state: this.state };
    }
    _streamEnded(e, t) {
        if (t.live || !this.media) return !1;
        let n = e.end || 0,
            r = this.config.timelineOffset || 0;
        if (n <= r) return !1;
        let i = e.buffered;
        this.config.maxBufferHole && i && i.length > 1 && (e = nE.bufferedInfo(i, e.start, 0));
        let s = e.nextStart;
        if ((s && s > r && s < t.edge) || this.media.currentTime < e.start) return !1;
        let a = t.partList;
        if (null != a && a.length) {
            let e = a[a.length - 1];
            return nE.isBuffered(this.media, e.start + e.duration / 2);
        }
        let o = t.fragments[t.fragments.length - 1].type;
        return this.fragmentTracker.isEndListAppended(o);
    }
    getLevelDetails() {
        if (this.levels && null !== this.levelLastLoaded) return this.levelLastLoaded.details;
    }
    get timelineOffset() {
        let e = this.config.timelineOffset;
        if (e) {
            var t;
            return (null == (t = this.getLevelDetails()) ? void 0 : t.appliedTimelineOffset) || e;
        }
        return 0;
    }
    onMediaAttached(e, t) {
        let n = (this.media = this.mediaBuffer = t.media);
        rG(n, "seeking", this.onMediaSeeking), rG(n, "ended", this.onMediaEnded);
        let r = this.config;
        this.levels && r.autoStartLoad && this.state === rV && this.startLoad(r.startPosition);
    }
    onMediaDetaching(e, t) {
        let n = !!t.transferMedia,
            r = this.media;
        if (null !== r) {
            if (
                (r.ended &&
                    (this.log("MSE detaching and video ended, reset startPosition"),
                    (this.startPosition = this.lastCurrentTime = 0)),
                rF(r, "seeking", this.onMediaSeeking),
                rF(r, "ended", this.onMediaEnded),
                this.keyLoader && !n && this.keyLoader.detach(),
                (this.media = this.mediaBuffer = null),
                (this.loopSn = void 0),
                n)
            ) {
                this.resetLoadingState(), this.resetTransmuxer();
                return;
            }
            (this.loadingParts = !1), this.fragmentTracker.removeAllFragments(), this.stopLoad();
        }
    }
    onManifestLoading() {
        (this.initPTS = []),
            (this.levels = this.levelLastLoaded = this.fragCurrent = null),
            (this.lastCurrentTime = this.startPosition = 0),
            (this.startFragRequested = !1);
    }
    onError(e, t) {}
    onManifestLoaded(e, t) {
        this.startTimeOffset = t.startTimeOffset;
    }
    onHandlerDestroying() {
        this.stopLoad(),
            this.transmuxer && (this.transmuxer.destroy(), (this.transmuxer = null)),
            super.onHandlerDestroying(),
            (this.hls = this.onMediaSeeking = this.onMediaEnded = null);
    }
    onHandlerDestroyed() {
        (this.state = rV),
            this.fragmentLoader && this.fragmentLoader.destroy(),
            this.keyLoader && this.keyLoader.destroy(),
            this.decrypter && this.decrypter.destroy(),
            (this.hls =
                this.log =
                this.warn =
                this.decrypter =
                this.keyLoader =
                this.fragmentLoader =
                this.fragmentTracker =
                    null),
            super.onHandlerDestroyed();
    }
    loadFragment(e, t, n) {
        (this.startFragRequested = !0), this._loadFragForPlayback(e, t, n);
    }
    _loadFragForPlayback(e, t, n) {
        let r = (e) => {
            let t = e.frag;
            if (this.fragContextChanged(t)) {
                this.warn(
                    `${t.type} sn: ${t.sn}${e.part ? " part: " + e.part.index : ""} of ${this.fragInfo(t, !1, e.part)}) was dropped during download.`,
                ),
                    this.fragmentTracker.removeFragment(t);
                return;
            }
            t.stats.chunkCount++, this._handleFragmentLoadProgress(e);
        };
        this._doFragLoad(e, t, n, r)
            .then((e) => {
                if (!e) return;
                let t = this.state,
                    n = e.frag;
                if (this.fragContextChanged(n)) {
                    (t !== rY && (this.fragCurrent || t !== r$)) ||
                        (this.fragmentTracker.removeFragment(n), (this.state = rH));
                    return;
                }
                "payload" in e &&
                    (this.log(`Loaded ${n.type} sn: ${n.sn} of ${this.playlistLabel()} ${n.level}`),
                    this.hls.trigger(u.FRAG_LOADED, e)),
                    this._handleFragmentLoadComplete(e);
            })
            .catch((t) => {
                this.state !== rV &&
                    this.state !== rZ &&
                    (this.warn(`Frag error: ${(null == t ? void 0 : t.message) || t}`), this.resetFragmentLoading(e));
            });
    }
    clearTrackerIfNeeded(e) {
        var t;
        let { fragmentTracker: n } = this;
        if (n.getState(e) === t1) {
            let t = e.type,
                r = this.getFwdBufferInfo(this.mediaBuffer, t),
                i = Math.max(e.duration, r ? r.len : this.config.maxBufferLength),
                s = this.backtrackFragment;
            (1 == (s ? e.sn - s.sn : 0) || this.reduceMaxBufferLength(i, e.duration)) && n.removeFragment(e);
        } else
            (null == (t = this.mediaBuffer) ? void 0 : t.buffered.length) === 0
                ? n.removeAllFragments()
                : n.hasParts(e.type) &&
                  (n.detectPartialFragments({ frag: e, part: null, stats: e.stats, id: e.type }),
                  n.getState(e) === t2 && n.removeFragment(e));
    }
    checkLiveUpdate(e) {
        if (e.updated && !e.live) {
            let t = e.fragments[e.fragments.length - 1];
            this.fragmentTracker.detectPartialFragments({ frag: t, part: null, stats: t.stats, id: t.type });
        }
        e.fragments[0] || (e.deltaUpdateFailed = !0);
    }
    waitForLive(e) {
        let t = e.details;
        return (null == t ? void 0 : t.live) && "EVENT" !== t.type && (this.levelLastLoaded !== e || t.expired);
    }
    flushMainBuffer(e, t, n = null) {
        if (!(e - t)) return;
        let r = { startOffset: e, endOffset: t, type: n };
        this.hls.trigger(u.BUFFER_FLUSHING, r);
    }
    _loadInitSegment(e, t) {
        this._doFragLoad(e, t)
            .then((e) => {
                let t = null == e ? void 0 : e.frag;
                if (!t || this.fragContextChanged(t) || !this.levels) throw Error("init load aborted");
                return e;
            })
            .then((e) => {
                let { hls: t } = this,
                    { frag: n, payload: r } = e,
                    i = n.decryptdata;
                if (r && r.byteLength > 0 && null != i && i.key && i.iv && nx(i.method)) {
                    let s = self.performance.now();
                    return this.decrypter
                        .decrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer, nP(i.method))
                        .catch((e) => {
                            throw (
                                (t.trigger(u.ERROR, {
                                    type: o.MEDIA_ERROR,
                                    details: l.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: e,
                                    reason: e.message,
                                    frag: n,
                                }),
                                e)
                            );
                        })
                        .then((r) => {
                            let i = self.performance.now();
                            return (
                                t.trigger(u.FRAG_DECRYPTED, { frag: n, payload: r, stats: { tstart: s, tdecrypt: i } }),
                                (e.payload = r),
                                this.completeInitSegmentLoad(e)
                            );
                        });
                }
                return this.completeInitSegmentLoad(e);
            })
            .catch((t) => {
                this.state !== rV && this.state !== rZ && (this.warn(t), this.resetFragmentLoading(e));
            });
    }
    completeInitSegmentLoad(e) {
        let { levels: t } = this;
        if (!t) throw Error("init load aborted, missing levels");
        let n = e.frag.stats;
        this.state !== rV && (this.state = rH),
            (e.frag.data = new Uint8Array(e.payload)),
            (n.parsing.start = n.buffering.start = self.performance.now()),
            (n.parsing.end = n.buffering.end = self.performance.now()),
            this.tick();
    }
    unhandledEncryptionError(e, t) {
        var n, r;
        let i = e.tracks;
        if (
            i &&
            !t.encrypted &&
            ((null != (n = i.audio) && n.encrypted) || (null != (r = i.video) && r.encrypted)) &&
            (!this.config.emeEnabled || !this.keyLoader.emeController)
        ) {
            let e = this.media,
                n = Error(
                    `Encrypted track with no key in ${this.fragInfo(t)} (media ${e ? "attached mediaKeys: " + e.mediaKeys : "detached"})`,
                );
            return (
                this.warn(n.message),
                !!e &&
                    !e.mediaKeys &&
                    (this.hls.trigger(u.ERROR, {
                        type: o.KEY_SYSTEM_ERROR,
                        details: l.KEY_SYSTEM_NO_KEYS,
                        fatal: !1,
                        error: n,
                        frag: t,
                    }),
                    this.resetTransmuxer(),
                    !0)
            );
        }
        return !1;
    }
    fragContextChanged(e) {
        let { fragCurrent: t } = this;
        return !e || !t || e.sn !== t.sn || e.level !== t.level;
    }
    fragBufferedComplete(e, t) {
        let n = this.mediaBuffer ? this.mediaBuffer : this.media;
        if (
            (this.log(
                `Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${n ? rB(nE.getBuffered(n)) : "(detached)"})`,
            ),
            Z(e))
        ) {
            var r;
            if (e.type !== g) {
                let t = e.elementaryStreams;
                if (!Object.keys(t).some((e) => !!t[e])) {
                    this.state = rH;
                    return;
                }
            }
            let t = null == (r = this.levels) ? void 0 : r[e.level];
            null != t &&
                t.fragmentError &&
                (this.log(`Resetting level fragment error count of ${t.fragmentError} on frag buffered`),
                (t.fragmentError = 0));
        }
        this.state = rH;
    }
    _handleFragmentLoadComplete(e) {
        let { transmuxer: t } = this;
        if (!t) return;
        let { frag: n, part: r, partsLoaded: i } = e,
            s = !i || 0 === i.length || i.some((e) => !e),
            a = new nh(n.level, n.sn, n.stats.chunkCount + 1, 0, r ? r.index : -1, !s);
        t.flush(a);
    }
    _handleFragmentLoadProgress(e) {}
    _doFragLoad(e, t, n = null, r) {
        var s, a;
        let o;
        this.fragCurrent = e;
        let l = t.details;
        if (!this.levels || !l) throw Error(`frag load aborted, missing level${l ? "" : " detail"}s`);
        let c = null;
        if (e.encrypted && !(null != (s = e.decryptdata) && s.key)) {
            if (
                (this.log(`Loading key for ${e.sn} of [${l.startSN}-${l.endSN}], ${this.playlistLabel()} ${e.level}`),
                (this.state = rj),
                (this.fragCurrent = e),
                (c = this.keyLoader.load(e).then((e) => {
                    if (!this.fragContextChanged(e.frag))
                        return this.hls.trigger(u.KEY_LOADED, e), this.state === rj && (this.state = rH), e;
                })),
                this.hls.trigger(u.KEY_LOADING, { frag: e }),
                null === this.fragCurrent)
            )
                return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
        } else
            !e.encrypted &&
                (c = this.keyLoader.loadClear(e, l.encryptedFragments, this.startFragRequested)) &&
                this.log("[eme] blocking frag load until media-keys acquired");
        let d = this.fragPrevious;
        if (Z(e) && (!d || e.sn !== d.sn)) {
            let n = this.shouldLoadParts(t.details, e.end);
            n !== this.loadingParts &&
                (this.log(`LL-Part loading ${n ? "ON" : "OFF"} loading sn ${null == d ? void 0 : d.sn}->${e.sn}`),
                (this.loadingParts = n));
        }
        if (((n = Math.max(e.start, n || 0)), this.loadingParts && Z(e))) {
            let i = l.partList;
            if (i && r) {
                n > l.fragmentEnd && l.fragmentHint && (e = l.fragmentHint);
                let s = this.getNextPart(i, e, n);
                if (s > -1) {
                    let a,
                        o = i[s];
                    return ((e = this.fragCurrent = o.fragment),
                    this.log(
                        `Loading ${e.type} sn: ${e.sn} part: ${o.index} (${s}/${i.length - 1}) of ${this.fragInfo(e, !1, o)}) cc: ${e.cc} [${l.startSN}-${l.endSN}], target: ${parseFloat(n.toFixed(3))}`,
                    ),
                    (this.nextLoadPosition = o.start + o.duration),
                    (this.state = rY),
                    (a = c
                        ? c
                              .then((n) =>
                                  !n || this.fragContextChanged(n.frag) ? null : this.doFragPartsLoad(e, o, t, r),
                              )
                              .catch((e) => this.handleFragLoadError(e))
                        : this.doFragPartsLoad(e, o, t, r).catch((e) => this.handleFragLoadError(e))),
                    this.hls.trigger(u.FRAG_LOADING, { frag: e, part: o, targetBufferTime: n }),
                    null === this.fragCurrent)
                        ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING parts"))
                        : a;
                }
                if (!e.url || this.loadedEndOfParts(i, n)) return Promise.resolve(null);
            }
        }
        if (Z(e) && this.loadingParts)
            this.log(
                `LL-Part loading OFF after next part miss @${n.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${null == ((a = l.partList)) ? void 0 : a.filter((e) => e.loaded).map((e) => `[${e.start}-${e.end}]`)}`,
            ),
                (this.loadingParts = !1);
        else if (!e.url) return Promise.resolve(null);
        this.log(
            `Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + l.startSN + "-" + l.endSN + "]"}, target: ${parseFloat(n.toFixed(3))}`,
        ),
            i(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
            (this.state = rY);
        let _ = this.config.progressive;
        return ((o =
            _ && c
                ? c
                      .then((t) => (!t || this.fragContextChanged(t.frag) ? null : this.fragmentLoader.load(e, r)))
                      .catch((e) => this.handleFragLoadError(e))
                : Promise.all([this.fragmentLoader.load(e, _ ? r : void 0), c])
                      .then(([e]) => (!_ && r && r(e), e))
                      .catch((e) => this.handleFragLoadError(e))),
        this.hls.trigger(u.FRAG_LOADING, { frag: e, targetBufferTime: n }),
        null === this.fragCurrent)
            ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING"))
            : o;
    }
    doFragPartsLoad(e, t, n, r) {
        return new Promise((i, s) => {
            var a;
            let o = [],
                l = null == (a = n.details) ? void 0 : a.partList,
                c = (t) => {
                    this.fragmentLoader
                        .loadPart(e, t, r)
                        .then((r) => {
                            o[t.index] = r;
                            let s = r.part;
                            this.hls.trigger(u.FRAG_LOADED, r);
                            let a = rN(n.details, e.sn, t.index + 1) || rR(l, e.sn, t.index + 1);
                            if (!a) return i({ frag: e, part: s, partsLoaded: o });
                            c(a);
                        })
                        .catch(s);
                };
            c(t);
        });
    }
    handleFragLoadError(e) {
        if ("data" in e) {
            let t = e.data;
            t.frag && t.details === l.INTERNAL_ABORTED
                ? this.handleFragLoadAborted(t.frag, t.part)
                : t.frag && t.type === o.KEY_SYSTEM_ERROR
                  ? (t.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag))
                  : this.hls.trigger(u.ERROR, t);
        } else
            this.hls.trigger(u.ERROR, {
                type: o.OTHER_ERROR,
                details: l.INTERNAL_EXCEPTION,
                err: e,
                error: e,
                fatal: !0,
            });
        return null;
    }
    _handleTransmuxerFlush(e) {
        let t = this.getCurrentContext(e);
        if (!t || this.state !== r$) {
            this.fragCurrent || this.state === rV || this.state === rZ || (this.state = rH);
            return;
        }
        let { frag: n, part: r, level: i } = t,
            s = self.performance.now();
        (n.stats.parsing.end = s), r && (r.stats.parsing.end = s);
        let a = this.getLevelDetails(),
            o = (a && n.sn > a.endSN) || this.shouldLoadParts(a, n.end);
        o !== this.loadingParts &&
            (this.log(`LL-Part loading ${o ? "ON" : "OFF"} after parsing segment ending @${n.end.toFixed(2)}`),
            (this.loadingParts = o)),
            this.updateLevelTiming(n, r, i, e.partial);
    }
    shouldLoadParts(e, t) {
        if (this.config.lowLatencyMode) {
            if (!e) return this.loadingParts;
            if (e.partList) {
                var n, r;
                let i = e.partList[0];
                if (i.fragment.type === g) return !1;
                if (
                    t >= i.end + ((null == (n = e.fragmentHint) ? void 0 : n.duration) || 0) &&
                    (this.hls.hasEnoughToStart
                        ? (null == (r = this.media) ? void 0 : r.currentTime) || this.lastCurrentTime
                        : this.getLoadPosition()) >
                        i.start - i.fragment.duration
                )
                    return !0;
            }
        }
        return !1;
    }
    getCurrentContext(e) {
        let { levels: t, fragCurrent: n } = this,
            { level: r, sn: i, part: s } = e;
        if (!(null != t && t[r]))
            return (
                this.warn(
                    `Levels object was unset while buffering fragment ${i} of ${this.playlistLabel()} ${r}. The current chunk will not be buffered.`,
                ),
                null
            );
        let a = t[r],
            o = a.details,
            l = s > -1 ? rN(o, i, s) : null,
            u = l ? l.fragment : rC(o, i, n);
        return u ? (n && n !== u && (u.stats = n.stats), { frag: u, part: l, level: a }) : null;
    }
    bufferFragmentData(e, t, n, r, i) {
        if (this.state !== r$) return;
        let { data1: s, data2: a } = e,
            o = s;
        if ((a && (o = ey(s, a)), !o.length)) return;
        let l = this.initPTS[t.cc],
            c = l ? -l.baseTime / l.timescale : void 0,
            d = { type: e.type, frag: t, part: n, chunkMeta: r, offset: c, parent: t.type, data: o };
        if ((this.hls.trigger(u.BUFFER_APPENDING, d), e.dropped && e.independent && !n)) {
            if (i) return;
            this.flushBufferGap(t);
        }
    }
    flushBufferGap(e) {
        let t = this.media;
        if (!t) return;
        if (!nE.isBuffered(t, t.currentTime)) return void this.flushMainBuffer(0, e.start);
        let n = t.currentTime,
            r = nE.bufferInfo(t, n, 0),
            i = e.duration,
            s = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * i),
            a = Math.max(Math.min(e.start - s, r.end - s), n + s);
        e.start - a > s && this.flushMainBuffer(a, e.start);
    }
    getFwdBufferInfo(e, t) {
        var n;
        let r = this.getLoadPosition();
        if (!i(r)) return null;
        let s = this.lastCurrentTime > r || (null != (n = this.media) && n.paused) ? 0 : this.config.maxBufferHole;
        return this.getFwdBufferInfoAtPos(e, r, t, s);
    }
    getFwdBufferInfoAtPos(e, t, n, r) {
        let i = nE.bufferInfo(e, t, r);
        if (0 === i.len && void 0 !== i.nextStart) {
            let s = this.fragmentTracker.getBufferedFrag(t, n);
            if (s && (i.nextStart <= s.end || s.gap)) {
                let n = Math.max(Math.min(i.nextStart, s.end) - t, r);
                return nE.bufferInfo(e, t, n);
            }
        }
        return i;
    }
    getMaxBufferLength(e) {
        let t,
            { config: n } = this;
        return Math.min(
            (t = e ? Math.max((8 * n.maxBufferSize) / e, n.maxBufferLength) : n.maxBufferLength),
            n.maxMaxBufferLength,
        );
    }
    reduceMaxBufferLength(e, t) {
        let n = this.config,
            r = Math.max(Math.min(e - t, n.maxBufferLength), t),
            i = Math.max(e - 3 * t, n.maxMaxBufferLength / 2, r);
        return i >= r && ((n.maxMaxBufferLength = i), this.warn(`Reduce max buffer length to ${i}s`), !0);
    }
    getAppendedFrag(e, t = m) {
        let n = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null;
        return n && "fragment" in n ? n.fragment : n;
    }
    getNextFragment(e, t) {
        let n = t.fragments,
            r = n.length;
        if (!r) return null;
        let { config: i } = this,
            s = n[0].start,
            a = i.lowLatencyMode && !!t.partList,
            o = null;
        if (t.live) {
            let n = i.initialLiveManifestSize;
            if (r < n) return this.warn(`Not enough fragments to start playback (have: ${r}, need: ${n})`), null;
            if ((!t.PTSKnown && !this.startFragRequested && -1 === this.startPosition) || e < s) {
                var l;
                a &&
                    !this.loadingParts &&
                    (this.log("LL-Part loading ON for initial live fragment"), (this.loadingParts = !0)),
                    (o = this.getInitialLiveFragment(t));
                let n = this.hls.startPosition,
                    r = this.hls.liveSyncPosition,
                    i = o ? (-1 !== n && n >= s ? n : r) || o.start : e;
                this.log(
                    `Setting startPosition to ${i} to match start frag at live edge. mainStart: ${n} liveSyncPosition: ${r} frag.start: ${null == ((l = o)) ? void 0 : l.start}`,
                ),
                    (this.startPosition = this.nextLoadPosition = i);
            }
        } else e <= s && (o = n[0]);
        if (!o) {
            let n = this.loadingParts ? t.partEnd : t.fragmentEnd;
            o = this.getFragmentAtPosition(e, n, t);
        }
        let u = this.filterReplacedPrimary(o, t);
        if (!u && o) {
            let e = o.sn - t.startSN;
            u = this.filterReplacedPrimary(n[e + 1] || null, t);
        }
        return this.mapToInitFragWhenRequired(u);
    }
    isLoopLoading(e, t) {
        let n = this.fragmentTracker.getState(e);
        return (n === t3 || (n === t2 && !!e.gap)) && this.nextLoadPosition > t;
    }
    getNextFragmentLoopLoading(e, t, n, r, i) {
        let s = null;
        if (e.gap && (s = this.getNextFragment(this.nextLoadPosition, t)) && !s.gap && n.nextStart) {
            let e = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, n.nextStart, r, 0);
            if (null !== e && n.len + e.len >= i) {
                let e = s.sn;
                return (
                    this.loopSn !== e &&
                        (this.log(`buffer full after gaps in "${r}" playlist starting at sn: ${e}`), (this.loopSn = e)),
                    null
                );
            }
        }
        return (this.loopSn = void 0), s;
    }
    get primaryPrefetch() {
        if (r0(this.config)) {
            var e;
            if (null == (e = this.hls.interstitialsManager) || null == (e = e.playingItem) ? void 0 : e.event)
                return !0;
        }
        return !1;
    }
    filterReplacedPrimary(e, t) {
        if (!e) return e;
        if (r0(this.config) && e.type !== g) {
            let n = this.hls.interstitialsManager,
                r = null == n ? void 0 : n.bufferingItem;
            if (r) {
                let n = r.event;
                if (n) {
                    if (n.appendInPlace || Math.abs(e.start - r.start) > 1 || 0 === r.start) return null;
                } else if (
                    (e.end <= r.start && (null == t ? void 0 : t.live) === !1) ||
                    (e.start > r.end && r.nextEvent && (r.nextEvent.appendInPlace || e.start - r.end > 1))
                )
                    return null;
            }
            let i = null == n ? void 0 : n.playerQueue;
            if (i)
                for (let t = i.length; t--; ) {
                    let n = i[t].interstitial;
                    if (n.appendInPlace && e.start >= n.startTime && e.end <= n.resumeTime) return null;
                }
        }
        return e;
    }
    mapToInitFragWhenRequired(e) {
        return null == e || !e.initSegment || e.initSegment.data || this.bitrateTest ? e : e.initSegment;
    }
    getNextPart(e, t, n) {
        let r = -1,
            i = !1,
            s = !0;
        for (let a = 0, o = e.length; a < o; a++) {
            let o = e[a];
            if (((s = s && !o.independent), r > -1 && n < o.start)) break;
            let l = o.loaded;
            l
                ? (r = -1)
                : (i || ((o.independent || s) && o.fragment === t)) &&
                  (o.fragment !== t && this.warn(`Need buffer at ${n} but next unloaded part starts at ${o.start}`),
                  (r = a)),
                (i = l);
        }
        return r;
    }
    loadedEndOfParts(e, t) {
        let n;
        for (let r = e.length; r-- && (n = e[r]).loaded; ) if (t > n.start) return !0;
        return !1;
    }
    getInitialLiveFragment(e) {
        let t = e.fragments,
            n = this.fragPrevious,
            r = null;
        if (n) {
            if (
                (e.hasProgramDateTime &&
                    (this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),
                    (r = tO(t, n.endProgramDateTime, this.config.maxFragLookUpTolerance))),
                !r)
            ) {
                let i = n.sn + 1;
                if (i >= e.startSN && i <= e.endSN) {
                    let s = t[i - e.startSN];
                    n.cc === s.cc &&
                        ((r = s), this.log(`Live playlist, switching playlist, load frag with next SN: ${r.sn}`));
                }
                !r &&
                    (r = tx(e, n.cc, n.end)) &&
                    this.log(`Live playlist, switching playlist, load frag with same CC: ${r.sn}`);
            }
        } else {
            let t = this.hls.liveSyncPosition;
            null !== t && (r = this.getFragmentAtPosition(t, this.bitrateTest ? e.fragmentEnd : e.edge, e));
        }
        return r;
    }
    getFragmentAtPosition(e, t, n) {
        let r,
            { config: i } = this,
            { fragPrevious: s } = this,
            { fragments: a, endSN: o } = n,
            { fragmentHint: l } = n,
            { maxFragLookUpTolerance: u } = i,
            c = n.partList,
            d = !!(this.loadingParts && null != c && c.length && l);
        if (
            (d && !this.bitrateTest && c[c.length - 1].fragment.sn === l.sn && ((a = a.concat(l)), (o = l.sn)), e < t)
        ) {
            var _;
            let n =
                e < this.lastCurrentTime ||
                e > t - u ||
                (null != (_ = this.media) && _.paused) ||
                !this.startFragRequested
                    ? 0
                    : u;
            r = tD(s, a, e, n);
        } else r = a[a.length - 1];
        if (r) {
            let e = r.sn - n.startSN,
                t = this.fragmentTracker.getState(r);
            if (
                ((t === t3 || (t === t2 && r.gap)) && (s = r),
                s && r.sn === s.sn && (!d || c[0].fragment.sn > r.sn || !n.live) && r.level === s.level)
            ) {
                let t = a[e + 1];
                r = r.sn < o && this.fragmentTracker.getState(t) !== t3 ? t : null;
            }
        }
        return r;
    }
    alignPlaylists(e, t, n) {
        let r = e.fragments.length;
        if (!r) return this.warn("No fragments in live playlist"), 0;
        let s = e.fragmentStart,
            a = !t,
            o = e.alignedSliding && i(s);
        if (a || (!o && !s)) {
            rP(n, e);
            let i = e.fragmentStart;
            return (
                this.log(
                    `Live playlist sliding: ${i.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${r}`,
                ),
                i
            );
        }
        return s;
    }
    waitForCdnTuneIn(e) {
        let t = 3;
        return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * t);
    }
    setStartPosition(e, t) {
        let n = this.startPosition;
        n < t && (n = -1);
        let r = this.timelineOffset;
        if (-1 === n) {
            let s = null !== this.startTimeOffset,
                a = s ? this.startTimeOffset : e.startTimeOffset;
            null !== a && i(a)
                ? ((n = t + a),
                  a < 0 && (n += e.edge),
                  (n = Math.min(Math.max(t, n), t + e.totalduration)),
                  this.log(
                      `Setting startPosition to ${n} for start time offset ${a} found in ${s ? "multivariant" : "media"} playlist`,
                  ),
                  (this.startPosition = n))
                : e.live
                  ? ((n = this.hls.liveSyncPosition || t),
                    this.log(`Setting startPosition to -1 to start at live edge ${n}`),
                    (this.startPosition = -1))
                  : (this.log("setting startPosition to 0 by default"), (this.startPosition = n = 0)),
                (this.lastCurrentTime = n + r);
        }
        this.nextLoadPosition = n + r;
    }
    getLoadPosition() {
        var e;
        let { media: t } = this,
            n = 0;
        return (
            null != (e = this.hls) && e.hasEnoughToStart && t
                ? (n = t.currentTime)
                : this.nextLoadPosition >= 0 && (n = this.nextLoadPosition),
            n
        );
    }
    handleFragLoadAborted(e, t) {
        this.transmuxer &&
            e.type === this.playlistType &&
            Z(e) &&
            e.stats.aborted &&
            (this.log(
                `Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`,
            ),
            this.resetFragmentLoading(e));
    }
    resetFragmentLoading(e) {
        (this.fragCurrent && (this.fragContextChanged(e) || this.state === rW)) || (this.state = rH);
    }
    onFragmentOrKeyLoadError(e, t) {
        var n, r, i;
        if (t.chunkMeta && !t.frag) {
            let e = this.getCurrentContext(t.chunkMeta);
            e && (t.frag = e.frag);
        }
        let s = t.frag;
        if (!s || s.type !== e || !this.levels) return;
        if (this.fragContextChanged(s))
            return void this.warn(
                `Frag load error must match current frag to retry ${s.url} > ${null == ((r = this.fragCurrent)) ? void 0 : r.url}`,
            );
        let a = t.details === l.FRAG_GAP;
        a && this.fragmentTracker.fragBuffered(s, !0);
        let o = t.errorAction;
        if (!o) {
            this.state = rZ;
            return;
        }
        let { action: u, flags: c, retryCount: d = 0, retryConfig: _ } = o,
            f = !!_,
            h = f && u === t$,
            p = f && !o.resolved && c === tq,
            m = null == (n = this.hls.latestLevelDetails) ? void 0 : n.live;
        if (!h && p && Z(s) && !s.endList && m && !tU(t))
            this.resetFragmentErrors(e), this.treatAsGap(s), (o.resolved = !0);
        else if ((h || p) && d < _.maxNumRetry) {
            let n = tj(null == (i = t.response) ? void 0 : i.code),
                r = tF(_, d);
            if (
                (this.resetStartWhenNotLoaded(),
                (this.retryDate = self.performance.now() + r),
                (this.state = rW),
                (o.resolved = !0),
                n)
            ) {
                this.log("Waiting for connection (offline)"), (this.retryDate = 1 / 0), (t.reason = "offline");
                return;
            }
            this.warn(
                `Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${d + 1}/${_.maxNumRetry} in ${r}ms`,
            );
        } else if (_) {
            if ((this.resetFragmentErrors(e), !(d < _.maxNumRetry)))
                return void this.warn(`${t.details} reached or exceeded max retry (${d})`);
            a || u === tK || (o.resolved = !0);
        } else u === tW ? (this.state = rQ) : (this.state = rZ);
        this.tickImmediate();
    }
    checkRetryDate() {
        let e = self.performance.now(),
            t = this.retryDate,
            n = t === 1 / 0;
        (!t || e >= t || (n && !tj(0))) &&
            (n && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), (this.state = rH));
    }
    reduceLengthAndFlushBuffer(e) {
        if (this.state === r$ || this.state === rz) {
            let t = e.frag,
                n = e.parent,
                r = this.getFwdBufferInfo(this.mediaBuffer, n),
                i = r && r.len > 0.5;
            i && this.reduceMaxBufferLength(r.len, (null == t ? void 0 : t.duration) || 10);
            let s = !i;
            return (
                s &&
                    this.warn(
                        `Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${n} buffer`,
                    ),
                t && (this.fragmentTracker.removeFragment(t), (this.nextLoadPosition = t.start)),
                this.resetLoadingState(),
                s
            );
        }
        return !1;
    }
    resetFragmentErrors(e) {
        e === E && (this.fragCurrent = null),
            this.hls.hasEnoughToStart || (this.startFragRequested = !1),
            this.state !== rV && (this.state = rH);
    }
    afterBufferFlushed(e, t, n) {
        if (!e) return;
        let r = nE.getBuffered(e);
        this.fragmentTracker.detectEvictedFragments(t, r, n), this.state === rq && this.resetLoadingState();
    }
    resetLoadingState() {
        this.log("Reset loading state"),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.state !== rV && (this.state = rH);
    }
    resetStartWhenNotLoaded() {
        if (!this.hls.hasEnoughToStart) {
            this.startFragRequested = !1;
            let e = this.levelLastLoaded,
                t = e ? e.details : null;
            null != t && t.live
                ? (this.log("resetting startPosition for live start"),
                  (this.startPosition = -1),
                  this.setStartPosition(t, t.fragmentStart),
                  this.resetLoadingState())
                : (this.nextLoadPosition = this.startPosition);
        }
    }
    resetWhenMissingContext(e) {
        this.log(
            `Loading context changed while buffering sn ${e.sn} of ${this.playlistLabel()} ${-1 === e.level ? "<removed>" : e.level}. This chunk will not be buffered.`,
        ),
            this.removeUnbufferedFrags(),
            this.resetStartWhenNotLoaded(),
            this.resetLoadingState();
    }
    removeUnbufferedFrags(e = 0) {
        this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
    }
    updateLevelTiming(e, t, n, r) {
        let i = n.details;
        if (!i) return void this.warn("level.details undefined");
        if (
            !Object.keys(e.elementaryStreams).reduce((t, s) => {
                let a = e.elementaryStreams[s];
                if (a) {
                    let o = a.endPTS - a.startPTS;
                    if (o <= 0)
                        return this.warn(`Could not parse fragment ${e.sn} ${s} duration reliably (${o})`), t || !1;
                    let l = r ? 0 : rm(i, e, a.startPTS, a.endPTS, a.startDTS, a.endDTS, this);
                    return (
                        this.hls.trigger(u.LEVEL_PTS_UPDATED, {
                            details: i,
                            level: n,
                            drift: l,
                            type: s,
                            frag: e,
                            start: a.startPTS,
                            end: a.endPTS,
                        }),
                        !0
                    );
                }
                return t;
            }, !1)
        ) {
            var s;
            if (
                (0 === n.fragmentError && this.treatAsGap(e, n),
                (null == (s = this.transmuxer) ? void 0 : s.error) === null)
            ) {
                let t = Error(
                    `Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`,
                );
                if (
                    (this.warn(t.message),
                    this.hls.trigger(u.ERROR, {
                        type: o.MEDIA_ERROR,
                        details: l.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: t,
                        frag: e,
                        reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${n.url}"`,
                    }),
                    !this.hls)
                )
                    return;
                this.resetTransmuxer();
            }
        }
        (this.state = rz),
            this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`),
            this.hls.trigger(u.FRAG_PARSED, { frag: e, part: t });
    }
    playlistLabel() {
        return this.playlistType === m ? "level" : "track";
    }
    fragInfo(e, t = !0, n) {
        var r, i;
        return `${this.playlistLabel()} ${e.level} (${n ? "part" : "frag"}:[${(null != (r = t && !n ? e.startPTS : (n || e).start) ? r : NaN).toFixed(3)}-${(null != (i = t && !n ? e.endPTS : (n || e).end) ? i : NaN).toFixed(3)}]${n && "main" === e.type ? "INDEPENDENT=" + (n.independent ? "YES" : "NO") : ""}`;
    }
    treatAsGap(e, t) {
        t && t.fragmentError++,
            (e.gap = !0),
            this.fragmentTracker.removeFragment(e),
            this.fragmentTracker.fragBuffered(e, !0);
    }
    resetTransmuxer() {
        var e;
        null == (e = this.transmuxer) || e.reset();
    }
    recoverWorkerError(e) {
        "demuxerWorker" === e.event &&
            (this.fragmentTracker.removeAllFragments(),
            this.transmuxer && (this.transmuxer.destroy(), (this.transmuxer = null)),
            this.resetStartWhenNotLoaded(),
            this.resetLoadingState());
    }
    set state(e) {
        let t = this._state;
        t !== e && ((this._state = e), this.log(`${t}->${e}`));
    }
    get state() {
        return this._state;
    }
}
function r0(e) {
    return !!e.interstitialsController && !1 !== e.enableInterstitialPlayback;
}
class r1 {
    constructor() {
        (this.chunks = []), (this.dataLength = 0);
    }
    push(e) {
        this.chunks.push(e), (this.dataLength += e.length);
    }
    flush() {
        let e,
            { chunks: t, dataLength: n } = this;
        return t.length ? ((e = 1 === t.length ? t[0] : r2(t, n)), this.reset(), e) : new Uint8Array(0);
    }
    reset() {
        (this.chunks.length = 0), (this.dataLength = 0);
    }
}
function r2(e, t) {
    let n = new Uint8Array(t),
        r = 0;
    for (let t = 0; t < e.length; t++) {
        let i = e[t];
        n.set(i, r), (r += i.length);
    }
    return n;
}
var r3 = { exports: {} },
    r6 = H(
        (function () {
            return (
                d ||
                    ((d = 1),
                    !(function (e) {
                        var t = Object.prototype.hasOwnProperty,
                            n = "~";
                        function r() {}
                        function i(e, t, n) {
                            (this.fn = e), (this.context = t), (this.once = n || !1);
                        }
                        function s(e, t, r, s, a) {
                            if ("function" != typeof r) throw TypeError("The listener must be a function");
                            var o = new i(r, s || e, a),
                                l = n ? n + t : t;
                            return (
                                e._events[l]
                                    ? e._events[l].fn
                                        ? (e._events[l] = [e._events[l], o])
                                        : e._events[l].push(o)
                                    : ((e._events[l] = o), e._eventsCount++),
                                e
                            );
                        }
                        function a(e, t) {
                            0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
                        }
                        function o() {
                            (this._events = new r()), (this._eventsCount = 0);
                        }
                        Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
                            (o.prototype.eventNames = function () {
                                var e,
                                    r,
                                    i = [];
                                if (0 === this._eventsCount) return i;
                                for (r in (e = this._events)) t.call(e, r) && i.push(n ? r.slice(1) : r);
                                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
                            }),
                            (o.prototype.listeners = function (e) {
                                var t = n ? n + e : e,
                                    r = this._events[t];
                                if (!r) return [];
                                if (r.fn) return [r.fn];
                                for (var i = 0, s = r.length, a = Array(s); i < s; i++) a[i] = r[i].fn;
                                return a;
                            }),
                            (o.prototype.listenerCount = function (e) {
                                var t = n ? n + e : e,
                                    r = this._events[t];
                                return r ? (r.fn ? 1 : r.length) : 0;
                            }),
                            (o.prototype.emit = function (e, t, r, i, s, a) {
                                var o = n ? n + e : e;
                                if (!this._events[o]) return !1;
                                var l,
                                    u,
                                    c = this._events[o],
                                    d = arguments.length;
                                if (c.fn) {
                                    switch ((c.once && this.removeListener(e, c.fn, void 0, !0), d)) {
                                        case 1:
                                            return c.fn.call(c.context), !0;
                                        case 2:
                                            return c.fn.call(c.context, t), !0;
                                        case 3:
                                            return c.fn.call(c.context, t, r), !0;
                                        case 4:
                                            return c.fn.call(c.context, t, r, i), !0;
                                        case 5:
                                            return c.fn.call(c.context, t, r, i, s), !0;
                                        case 6:
                                            return c.fn.call(c.context, t, r, i, s, a), !0;
                                    }
                                    for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                                    c.fn.apply(c.context, l);
                                } else {
                                    var _,
                                        f = c.length;
                                    for (u = 0; u < f; u++)
                                        switch ((c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d)) {
                                            case 1:
                                                c[u].fn.call(c[u].context);
                                                break;
                                            case 2:
                                                c[u].fn.call(c[u].context, t);
                                                break;
                                            case 3:
                                                c[u].fn.call(c[u].context, t, r);
                                                break;
                                            case 4:
                                                c[u].fn.call(c[u].context, t, r, i);
                                                break;
                                            default:
                                                if (!l)
                                                    for (_ = 1, l = Array(d - 1); _ < d; _++) l[_ - 1] = arguments[_];
                                                c[u].fn.apply(c[u].context, l);
                                        }
                                }
                                return !0;
                            }),
                            (o.prototype.on = function (e, t, n) {
                                return s(this, e, t, n, !1);
                            }),
                            (o.prototype.once = function (e, t, n) {
                                return s(this, e, t, n, !0);
                            }),
                            (o.prototype.removeListener = function (e, t, r, i) {
                                var s = n ? n + e : e;
                                if (!this._events[s]) return this;
                                if (!t) return a(this, s), this;
                                var o = this._events[s];
                                if (o.fn) o.fn !== t || (i && !o.once) || (r && o.context !== r) || a(this, s);
                                else {
                                    for (var l = 0, u = [], c = o.length; l < c; l++)
                                        (o[l].fn !== t || (i && !o[l].once) || (r && o[l].context !== r)) &&
                                            u.push(o[l]);
                                    u.length ? (this._events[s] = 1 === u.length ? u[0] : u) : a(this, s);
                                }
                                return this;
                            }),
                            (o.prototype.removeAllListeners = function (e) {
                                var t;
                                return (
                                    e
                                        ? ((t = n ? n + e : e), this._events[t] && a(this, t))
                                        : ((this._events = new r()), (this._eventsCount = 0)),
                                    this
                                );
                            }),
                            (o.prototype.off = o.prototype.removeListener),
                            (o.prototype.addListener = o.prototype.on),
                            (o.prefixed = n),
                            (o.EventEmitter = o),
                            (e.exports = o);
                    })(r3)),
                r3.exports
            );
        })(),
    );
let r4 = "1.6.12",
    r5 = {};
function r7() {
    return "function" == typeof __HLS_WORKER_BUNDLE__;
}
function r8() {
    let e = r5[r4];
    if (e) return e.clientCount++, e;
    let t = new self.Blob(
            [
                `var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`,
            ],
            { type: "text/javascript" },
        ),
        n = self.URL.createObjectURL(t),
        r = { worker: new self.Worker(n), objectURL: n, clientCount: 1 };
    return (r5[r4] = r), r;
}
function r9(e) {
    let t = r5[e];
    if (t) return t.clientCount++, t;
    let n = new self.URL(e, self.location.href).href,
        r = { worker: new self.Worker(n), scriptURL: n, clientCount: 1 };
    return (r5[e] = r), r;
}
function ie(e) {
    let t = r5[e || r4];
    if (t && 1 == t.clientCount--) {
        let { worker: n, objectURL: r } = t;
        delete r5[e || r4], r && self.URL.revokeObjectURL(r), n.terminate();
    }
}
function it(e, t) {
    return (
        (t + 10 <= e.length &&
            51 === e[t] &&
            68 === e[t + 1] &&
            73 === e[t + 2] &&
            e[t + 3] < 255 &&
            e[t + 4] < 255 &&
            e[t + 6] < 128 &&
            e[t + 7] < 128 &&
            e[t + 8] < 128 &&
            e[t + 9] < 128) ||
        !1
    );
}
function ir(e, t) {
    return (
        (t + 10 <= e.length &&
            73 === e[t] &&
            68 === e[t + 1] &&
            51 === e[t + 2] &&
            e[t + 3] < 255 &&
            e[t + 4] < 255 &&
            e[t + 6] < 128 &&
            e[t + 7] < 128 &&
            e[t + 8] < 128 &&
            e[t + 9] < 128) ||
        !1
    );
}
function ii(e, t) {
    let n = 0;
    return ((127 & e[t]) << 21) | ((127 & e[t + 1]) << 14) | ((127 & e[t + 2]) << 7) | (127 & e[t + 3]);
}
function is(e, t) {
    let n = t,
        r = 0;
    for (; ir(e, t); ) (r += 10), (r += ii(e, t + 6)), it(e, t + 10) && (r += 10), (t += r);
    if (r > 0) return e.subarray(n, n + r);
}
function ia(e, t, n, r) {
    let i = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
        s = t[n + 2],
        a = (s >> 2) & 15;
    if (a > 12) {
        let t = Error(`invalid ADTS sampling index:${a}`);
        e.emit(u.ERROR, u.ERROR, {
            type: o.MEDIA_ERROR,
            details: l.FRAG_PARSING_ERROR,
            fatal: !0,
            error: t,
            reason: t.message,
        });
        return;
    }
    let c = ((s >> 6) & 3) + 1,
        d = ((t[n + 3] >> 6) & 3) | ((1 & s) << 2),
        _ = "mp4a.40." + c,
        f = i[a],
        h = a;
    (5 === c || 29 === c) && (h -= 3);
    let p = [(c << 3) | ((14 & h) >> 1), ((1 & h) << 7) | (d << 3)];
    return (
        P.log(
            `manifest codec:${r}, parsed codec:${_}, channels:${d}, rate:${f} (ADTS object type:${c} sampling index:${a})`,
        ),
        { config: p, samplerate: f, channelCount: d, codec: _, parsedCodec: _, manifestCodec: r }
    );
}
function io(e, t) {
    return 255 === e[t] && (246 & e[t + 1]) == 240;
}
function il(e, t) {
    return 1 & e[t + 1] ? 7 : 9;
}
function iu(e, t) {
    return ((3 & e[t + 3]) << 11) | (e[t + 4] << 3) | ((224 & e[t + 5]) >>> 5);
}
function ic(e, t) {
    return t + 5 < e.length;
}
function id(e, t) {
    return t + 1 < e.length && io(e, t);
}
function i_(e, t) {
    return ic(e, t) && io(e, t) && iu(e, t) <= e.length - t;
}
function ih(e, t) {
    if (id(e, t)) {
        let n = il(e, t);
        if (t + n >= e.length) return !1;
        let r = iu(e, t);
        if (r <= n) return !1;
        let i = t + r;
        return i === e.length || id(e, i);
    }
    return !1;
}
function ip(e, t, n, r, i) {
    if (!e.samplerate) {
        let s = ia(t, n, r, i);
        s && S(e, s);
    }
}
function im(e) {
    return 9216e4 / e;
}
function iE(e, t) {
    let n = il(e, t);
    if (t + n <= e.length) {
        let r = iu(e, t) - n;
        if (r > 0) return { headerLength: n, frameLength: r };
    }
}
function ig(e, t, n, r, i) {
    let s,
        a = r + i * im(e.samplerate),
        o = iE(t, n);
    if (o) {
        let { frameLength: r, headerLength: i } = o,
            l = i + r,
            u = Math.max(0, n + l - t.length);
        u ? (s = new Uint8Array(l - i)).set(t.subarray(n + i, t.length), 0) : (s = t.subarray(n + i, n + l));
        let c = { unit: s, pts: a };
        return u || e.samples.push(c), { sample: c, length: l, missing: u };
    }
    let l = t.length - n;
    return (
        (s = new Uint8Array(l)).set(t.subarray(n, t.length), 0), { sample: { unit: s, pts: a }, length: l, missing: -1 }
    );
}
function iA(e, t) {
    return ir(e, t) && ii(e, t + 6) + 10 <= e.length - t;
}
function iI(e) {
    return e instanceof ArrayBuffer
        ? e
        : 0 == e.byteOffset && e.byteLength == e.buffer.byteLength
          ? e.buffer
          : new Uint8Array(e).buffer;
}
function iT(e, t = 0, n = 1 / 0) {
    return iS(e, t, n, Uint8Array);
}
function iS(e, t, n, r) {
    let i = iy(e),
        s = 1;
    "BYTES_PER_ELEMENT" in r && (s = r.BYTES_PER_ELEMENT);
    let a = iv(e) ? e.byteOffset : 0,
        o = (a + e.byteLength) / s,
        l = Math.floor(Math.max(0, Math.min((a + t) / s, o))),
        u = Math.floor(Math.min(l + Math.max(n, 0), o));
    return new r(i, l, u - l);
}
function iy(e) {
    return e instanceof ArrayBuffer ? e : e.buffer;
}
function iv(e) {
    return e && e.buffer instanceof ArrayBuffer && void 0 !== e.byteLength && void 0 !== e.byteOffset;
}
function iC(e) {
    let t,
        n = { key: e.type, description: "", data: "", mimeType: null, pictureType: null },
        r = 3;
    if (e.size < 2) return;
    if (e.data[0] !== r) return void console.log("Ignore frame with unrecognized character encoding");
    let i = e.data.subarray(1).indexOf(0);
    if (-1 === i) return;
    let s = F(iT(e.data, 1, i)),
        a = e.data[2 + i],
        o = e.data.subarray(3 + i).indexOf(0);
    if (-1 === o) return;
    let l = F(iT(e.data, 3 + i, o));
    return (
        (t = "--\x3e" === s ? F(iT(e.data, 4 + i + o)) : iI(e.data.subarray(4 + i + o))),
        (n.mimeType = s),
        (n.pictureType = a),
        (n.description = l),
        (n.data = t),
        n
    );
}
function iN(e) {
    if (e.size < 2) return;
    let t = F(e.data, !0),
        n = new Uint8Array(e.data.subarray(t.length + 1));
    return { key: e.type, info: t, data: n.buffer };
}
function iR(e) {
    if (e.size < 2) return;
    if ("TXXX" === e.type) {
        let t = 1,
            n = F(e.data.subarray(t), !0);
        t += n.length + 1;
        let r = F(e.data.subarray(t));
        return { key: e.type, info: n, data: r };
    }
    let t = F(e.data.subarray(1));
    return { key: e.type, info: "", data: t };
}
function ib(e) {
    if ("WXXX" === e.type) {
        if (e.size < 2) return;
        let t = 1,
            n = F(e.data.subarray(t), !0);
        t += n.length + 1;
        let r = F(e.data.subarray(t));
        return { key: e.type, info: n, data: r };
    }
    let t = F(e.data);
    return { key: e.type, info: "", data: t };
}
function iO(e) {
    return "PRIV" === e.type ? iN(e) : "W" === e.type[0] ? ib(e) : "APIC" === e.type ? iC(e) : iR(e);
}
function iD(e) {
    let t = String.fromCharCode(e[0], e[1], e[2], e[3]),
        n = ii(e, 4),
        r = 10;
    return { type: t, size: n, data: e.subarray(r, r + n) };
}
let iL = 10,
    iw = 10;
function iM(e) {
    let t = 0,
        n = [];
    for (; ir(e, t); ) {
        let r = ii(e, t + 6);
        (e[t + 5] >> 6) & 1 && (t += iL);
        let i = (t += iL) + r;
        for (; t + iw < i; ) {
            let r = iD(e.subarray(t)),
                i = iO(r);
            i && n.push(i), (t += r.size + iL);
        }
        it(e, t) && (t += iL);
    }
    return n;
}
function ix(e) {
    return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info;
}
function iP(e) {
    if (8 === e.data.byteLength) {
        let t = new Uint8Array(e.data),
            n = 1 & t[3],
            r = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
        return (r /= 45), n && (r += 47721858.84), Math.round(r);
    }
}
function ik(e) {
    let t = iM(e);
    for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (ix(n)) return iP(n);
    }
}
let iU = (function (e) {
    return (
        (e.audioId3 = "org.id3"),
        (e.dateRange = "com.apple.quicktime.HLS"),
        (e.emsg = "https://aomedia.org/emsg/ID3"),
        (e.misbklv = "urn:misb:KLV:bin:1910.1"),
        e
    );
})({});
function iG(e = "", t = 9e4) {
    return { type: e, id: -1, pid: -1, inputTimeScale: t, sequenceNumber: -1, samples: [], dropped: 0 };
}
class iF {
    constructor() {
        (this._audioTrack = void 0),
            (this._id3Track = void 0),
            (this.frameIndex = 0),
            (this.cachedData = null),
            (this.basePTS = null),
            (this.initPTS = null),
            (this.lastPTS = null);
    }
    resetInitSegment(e, t, n, r) {
        this._id3Track = {
            type: "id3",
            id: 3,
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: 0,
            samples: [],
            dropped: 0,
        };
    }
    resetTimeStamp(e) {
        (this.initPTS = e), this.resetContiguity();
    }
    resetContiguity() {
        (this.basePTS = null), (this.lastPTS = null), (this.frameIndex = 0);
    }
    canParse(e, t) {
        return !1;
    }
    appendFrame(e, t, n) {}
    demux(e, t) {
        let n;
        this.cachedData && ((e = ey(this.cachedData, e)), (this.cachedData = null));
        let r = is(e, 0),
            s = r ? r.length : 0,
            a = this._audioTrack,
            o = this._id3Track,
            l = r ? ik(r) : void 0,
            u = e.length;
        for (
            (null === this.basePTS || (0 === this.frameIndex && i(l))) &&
                ((this.basePTS = iB(l, t, this.initPTS)), (this.lastPTS = this.basePTS)),
                null === this.lastPTS && (this.lastPTS = this.basePTS),
                r &&
                    r.length > 0 &&
                    o.samples.push({
                        pts: this.lastPTS,
                        dts: this.lastPTS,
                        data: r,
                        type: iU.audioId3,
                        duration: 1 / 0,
                    });
            s < u;
        ) {
            if (this.canParse(e, s)) {
                let t = this.appendFrame(a, e, s);
                t ? (this.frameIndex++, (this.lastPTS = t.sample.pts), (s += t.length), (n = s)) : (s = u);
            } else
                iA(e, s)
                    ? ((r = is(e, s)),
                      o.samples.push({
                          pts: this.lastPTS,
                          dts: this.lastPTS,
                          data: r,
                          type: iU.audioId3,
                          duration: 1 / 0,
                      }),
                      (s += r.length),
                      (n = s))
                    : s++;
            if (s === u && n !== u) {
                let t = e.slice(n);
                this.cachedData ? (this.cachedData = ey(this.cachedData, t)) : (this.cachedData = t);
            }
        }
        return { audioTrack: a, videoTrack: iG(), id3Track: o, textTrack: iG() };
    }
    demuxSampleAes(e, t, n) {
        return Promise.reject(Error(`[${this}] This demuxer does not support Sample-AES decryption`));
    }
    flush(e) {
        let t = this.cachedData;
        return (
            t && ((this.cachedData = null), this.demux(t, 0)),
            { audioTrack: this._audioTrack, videoTrack: iG(), id3Track: this._id3Track, textTrack: iG() }
        );
    }
    destroy() {
        (this.cachedData = null), (this._audioTrack = this._id3Track = void 0);
    }
}
let iB = (e, t, n) => (i(e) ? 90 * e : 9e4 * t + (n ? (9e4 * n.baseTime) / n.timescale : 0)),
    iV = null,
    iH = [
        32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192,
        224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112,
        128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
    ],
    ij = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
    iY = [
        [0, 72, 144, 12],
        [0, 0, 0, 0],
        [0, 72, 144, 12],
        [0, 144, 144, 12],
    ],
    iW = [0, 1, 1, 4];
function iK(e, t, n, r, i) {
    if (n + 24 > t.length) return;
    let s = i$(t, n);
    if (s && n + s.frameLength <= t.length) {
        let a = r + i * ((9e4 * s.samplesPerFrame) / s.sampleRate),
            o = { unit: t.subarray(n, n + s.frameLength), pts: a, dts: a };
        return (
            (e.config = []),
            (e.channelCount = s.channelCount),
            (e.samplerate = s.sampleRate),
            e.samples.push(o),
            { sample: o, length: s.frameLength, missing: 0 }
        );
    }
}
function i$(e, t) {
    let n = (e[t + 1] >> 3) & 3,
        r = (e[t + 1] >> 1) & 3,
        i = (e[t + 2] >> 4) & 15,
        s = (e[t + 2] >> 2) & 3;
    if (1 !== n && 0 !== i && 15 !== i && 3 !== s) {
        let a = (e[t + 2] >> 1) & 1,
            o = e[t + 3] >> 6,
            l = 1e3 * iH[14 * (3 === n ? 3 - r : 3 === r ? 3 : 4) + i - 1],
            u = ij[3 * (3 === n ? 0 : 2 === n ? 1 : 2) + s],
            c = 3 === o ? 1 : 2,
            d = iY[n][r],
            _ = iW[r],
            f = 8 * d * _,
            h = Math.floor((d * l) / u + a) * _;
        if (null === iV) {
            let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            iV = e ? parseInt(e[1]) : 0;
        }
        return (
            iV && iV <= 87 && 2 === r && l >= 224e3 && 0 === o && (e[t + 3] = 128 | e[t + 3]),
            { sampleRate: u, channelCount: c, frameLength: h, samplesPerFrame: f }
        );
    }
}
function iz(e, t) {
    return 255 === e[t] && (224 & e[t + 1]) == 224 && (6 & e[t + 1]) != 0;
}
function iq(e, t) {
    return t + 1 < e.length && iz(e, t);
}
function iZ(e, t) {
    let n = 4;
    return iz(e, t) && n <= e.length - t;
}
function iX(e, t) {
    if (t + 1 < e.length && iz(e, t)) {
        let n = 4,
            r = i$(e, t),
            i = n;
        null != r && r.frameLength && (i = r.frameLength);
        let s = t + i;
        return s === e.length || iq(e, s);
    }
    return !1;
}
class iQ extends iF {
    constructor(e, t) {
        super(), (this.observer = void 0), (this.config = void 0), (this.observer = e), (this.config = t);
    }
    resetInitSegment(e, t, n, r) {
        super.resetInitSegment(e, t, n, r),
            (this._audioTrack = {
                container: "audio/adts",
                type: "audio",
                id: 2,
                pid: -1,
                sequenceNumber: 0,
                segmentCodec: "aac",
                samples: [],
                manifestCodec: t,
                duration: r,
                inputTimeScale: 9e4,
                dropped: 0,
            });
    }
    static probe(e, t) {
        if (!e) return !1;
        let n = is(e, 0),
            r = (null == n ? void 0 : n.length) || 0;
        if (iX(e, r)) return !1;
        for (let n = e.length; r < n; r++) if (ih(e, r)) return t.log("ADTS sync word found !"), !0;
        return !1;
    }
    canParse(e, t) {
        return i_(e, t);
    }
    appendFrame(e, t, n) {
        ip(e, this.observer, t, n, e.manifestCodec);
        let r = ig(e, t, n, this.basePTS, this.frameIndex);
        if (r && 0 === r.missing) return r;
    }
}
let iJ = (e, t) => {
    let n = 0,
        r = 5;
    t += 5;
    let i = new Uint32Array(1),
        s = new Uint32Array(1),
        a = new Uint8Array(1);
    for (; r > 0; ) {
        a[0] = e[t];
        let o = Math.min(r, 8),
            l = 8 - o;
        (s[0] = (0xff000000 >>> (24 + l)) << l),
            (i[0] = (a[0] & s[0]) >> l),
            (n = n ? (n << o) | i[0] : i[0]),
            (t += 1),
            (r -= o);
    }
    return n;
};
class i0 extends iF {
    constructor(e) {
        super(), (this.observer = void 0), (this.observer = e);
    }
    resetInitSegment(e, t, n, r) {
        super.resetInitSegment(e, t, n, r),
            (this._audioTrack = {
                container: "audio/ac-3",
                type: "audio",
                id: 2,
                pid: -1,
                sequenceNumber: 0,
                segmentCodec: "ac3",
                samples: [],
                manifestCodec: t,
                duration: r,
                inputTimeScale: 9e4,
                dropped: 0,
            });
    }
    canParse(e, t) {
        return t + 64 < e.length;
    }
    appendFrame(e, t, n) {
        let r = i1(e, t, n, this.basePTS, this.frameIndex);
        if (-1 !== r) return { sample: e.samples[e.samples.length - 1], length: r, missing: 0 };
    }
    static probe(e) {
        if (!e) return !1;
        let t = is(e, 0);
        if (!t) return !1;
        let n = t.length;
        return !!(11 === e[n] && 119 === e[n + 1] && void 0 !== ik(t) && 16 > iJ(e, n));
    }
}
function i1(e, t, n, r, i) {
    if (n + 8 > t.length || 11 !== t[n] || 119 !== t[n + 1]) return -1;
    let s = t[n + 4] >> 6;
    if (s >= 3) return -1;
    let a = [48e3, 44100, 32e3][s],
        o = 63 & t[n + 4],
        l =
            2 *
            [
                64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122,
                168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243,
                336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418,
                576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835,
                1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253,
                1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920,
            ][3 * o + s];
    if (n + l > t.length) return -1;
    let u = t[n + 6] >> 5,
        c = 0;
    2 === u ? (c += 2) : (1 & u && 1 !== u && (c += 2), 4 & u && (c += 2));
    let d = (((t[n + 6] << 8) | t[n + 7]) >> (12 - c)) & 1,
        _ = [2, 1, 2, 3, 3, 4, 4, 5][u] + d,
        f = t[n + 5] >> 3,
        h = 7 & t[n + 5],
        p = new Uint8Array([
            (s << 6) | (f << 1) | (h >> 2),
            ((3 & h) << 6) | (u << 3) | (d << 2) | (o >> 4),
            (o << 4) & 224,
        ]),
        m = r + (1536 / a) * 9e4 * i,
        E = t.subarray(n, n + l);
    return (e.config = p), (e.channelCount = _), (e.samplerate = a), e.samples.push({ unit: E, pts: m }), l;
}
class i2 extends iF {
    resetInitSegment(e, t, n, r) {
        super.resetInitSegment(e, t, n, r),
            (this._audioTrack = {
                container: "audio/mpeg",
                type: "audio",
                id: 2,
                pid: -1,
                sequenceNumber: 0,
                segmentCodec: "mp3",
                samples: [],
                manifestCodec: t,
                duration: r,
                inputTimeScale: 9e4,
                dropped: 0,
            });
    }
    static probe(e) {
        if (!e) return !1;
        let t = is(e, 0),
            n = (null == t ? void 0 : t.length) || 0;
        if (t && 11 === e[n] && 119 === e[n + 1] && void 0 !== ik(t) && 16 >= iJ(e, n)) return !1;
        for (let t = e.length; n < t; n++) if (iX(e, n)) return P.log("MPEG Audio sync word found !"), !0;
        return !1;
    }
    canParse(e, t) {
        return iZ(e, t);
    }
    appendFrame(e, t, n) {
        if (null !== this.basePTS) return iK(e, t, n, this.basePTS, this.frameIndex);
    }
}
let i3 = /\/emsg[-/]ID3/i;
class i6 {
    constructor(e, t) {
        (this.remainderData = null),
            (this.timeOffset = 0),
            (this.config = void 0),
            (this.videoTrack = void 0),
            (this.audioTrack = void 0),
            (this.id3Track = void 0),
            (this.txtTrack = void 0),
            (this.config = t);
    }
    resetTimeStamp() {}
    resetInitSegment(e, t, n, r) {
        let i = (this.videoTrack = iG("video", 1)),
            s = (this.audioTrack = iG("audio", 1)),
            a = (this.txtTrack = iG("text", 1));
        if (((this.id3Track = iG("id3", 1)), (this.timeOffset = 0), !(null != e && e.byteLength))) return;
        let o = e_(e);
        if (o.video) {
            let { id: e, timescale: t, codec: n, supplemental: r } = o.video;
            (i.id = e), (i.timescale = a.timescale = t), (i.codec = n), (i.supplemental = r);
        }
        if (o.audio) {
            let { id: e, timescale: t, codec: n } = o.audio;
            (s.id = e), (s.timescale = t), (s.codec = n);
        }
        (a.id = er.text), (i.sampleDuration = 0), (i.duration = s.duration = r);
    }
    resetContiguity() {
        this.remainderData = null;
    }
    static probe(e) {
        return eu(e);
    }
    demux(e, t) {
        this.timeOffset = t;
        let n = e,
            r = this.videoTrack,
            i = this.txtTrack;
        if (this.config.progressive) {
            this.remainderData && (n = ey(this.remainderData, e));
            let t = eS(n);
            (this.remainderData = t.remainder), (r.samples = t.valid || new Uint8Array());
        } else r.samples = n;
        let s = this.extractID3Track(r, t);
        return (
            (i.samples = ev(t, r)),
            { videoTrack: r, audioTrack: this.audioTrack, id3Track: s, textTrack: this.txtTrack }
        );
    }
    flush() {
        let e = this.timeOffset,
            t = this.videoTrack,
            n = this.txtTrack;
        (t.samples = this.remainderData || new Uint8Array()), (this.remainderData = null);
        let r = this.extractID3Track(t, this.timeOffset);
        return (n.samples = ev(e, t)), { videoTrack: t, audioTrack: iG(), id3Track: r, textTrack: iG() };
    }
    extractID3Track(e, t) {
        let n = this.id3Track;
        if (e.samples.length) {
            let r = ec(e.samples, ["emsg"]);
            r &&
                r.forEach((e) => {
                    let r = eO(e);
                    if (i3.test(r.schemeIdUri)) {
                        let e = i4(r, t),
                            i = 0xffffffff === r.eventDuration ? 1 / 0 : r.eventDuration / r.timeScale;
                        i <= 0.001 && (i = 1 / 0);
                        let s = r.payload;
                        n.samples.push({ data: s, len: s.byteLength, dts: e, pts: e, type: iU.emsg, duration: i });
                    } else if (
                        this.config.enableEmsgKLVMetadata &&
                        r.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")
                    ) {
                        let e = i4(r, t);
                        n.samples.push({
                            data: r.payload,
                            len: r.payload.byteLength,
                            dts: e,
                            pts: e,
                            type: iU.misbklv,
                            duration: 1 / 0,
                        });
                    }
                });
        }
        return n;
    }
    demuxSampleAes(e, t, n) {
        return Promise.reject(Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
    }
    destroy() {
        (this.config = null),
            (this.remainderData = null),
            (this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0);
    }
}
function i4(e, t) {
    return i(e.presentationTime) ? e.presentationTime / e.timeScale : t + e.presentationTimeDelta / e.timeScale;
}
class i5 {
    constructor(e, t, n) {
        (this.keyData = void 0),
            (this.decrypter = void 0),
            (this.keyData = n),
            (this.decrypter = new na(t, { removePKCS7Padding: !1 }));
    }
    decryptBuffer(e) {
        return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, t8);
    }
    decryptAacSample(e, t, n) {
        let r = e[t].unit;
        if (r.length <= 16) return;
        let i = r.subarray(16, r.length - (r.length % 16)),
            s = i.buffer.slice(i.byteOffset, i.byteOffset + i.length);
        this.decryptBuffer(s)
            .then((i) => {
                let s = new Uint8Array(i);
                r.set(s, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, n);
            })
            .catch(n);
    }
    decryptAacSamples(e, t, n) {
        for (; ; t++) {
            if (t >= e.length) return void n();
            if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, n), !this.decrypter.isSync())) return;
        }
    }
    getAvcEncryptedData(e) {
        let t = new Int8Array(16 * Math.floor((e.length - 48) / 160) + 16),
            n = 0;
        for (let r = 32; r < e.length - 16; r += 160, n += 16) t.set(e.subarray(r, r + 16), n);
        return t;
    }
    getAvcDecryptedUnit(e, t) {
        let n = new Uint8Array(t),
            r = 0;
        for (let t = 32; t < e.length - 16; t += 160, r += 16) e.set(n.subarray(r, r + 16), t);
        return e;
    }
    decryptAvcSample(e, t, n, r, i) {
        let s = eb(i.data),
            a = this.getAvcEncryptedData(s);
        this.decryptBuffer(a.buffer)
            .then((a) => {
                (i.data = this.getAvcDecryptedUnit(s, a)),
                    this.decrypter.isSync() || this.decryptAvcSamples(e, t, n + 1, r);
            })
            .catch(r);
    }
    decryptAvcSamples(e, t, n, r) {
        if (e instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
        for (; ; t++, n = 0) {
            if (t >= e.length) return void r();
            let i = e[t].units;
            for (; !(n >= i.length); n++) {
                let s = i[n];
                if (
                    !(s.data.length <= 48) &&
                    (1 === s.type || 5 === s.type) &&
                    (this.decryptAvcSample(e, t, n, r, s), !this.decrypter.isSync())
                )
                    return;
            }
        }
    }
}
class i7 {
    constructor() {
        this.VideoSample = null;
    }
    createVideoSample(e, t, n) {
        return { key: e, frame: !1, pts: t, dts: n, units: [], length: 0 };
    }
    getLastNalUnit(e) {
        var t;
        let n,
            r = this.VideoSample;
        if (((r && 0 !== r.units.length) || (r = e[e.length - 1]), null != (t = r) && t.units)) {
            let e = r.units;
            n = e[e.length - 1];
        }
        return n;
    }
    pushAccessUnit(e, t) {
        if (e.units.length && e.frame) {
            if (void 0 === e.pts) {
                let n = t.samples,
                    r = n.length;
                if (!r) return void t.dropped++;
                {
                    let t = n[r - 1];
                    (e.pts = t.pts), (e.dts = t.dts);
                }
            }
            t.samples.push(e);
        }
    }
    parseNALu(e, t, n) {
        let r,
            i,
            s,
            a = t.byteLength,
            o = e.naluState || 0,
            l = o,
            u = [],
            c = 0,
            d = -1,
            _ = 0;
        for (-1 === o && ((d = 0), (_ = this.getNALuType(t, 0)), (o = 0), (c = 1)); c < a; ) {
            if (((r = t[c++]), !o)) {
                o = +!r;
                continue;
            }
            if (1 === o) {
                o = 2 * !r;
                continue;
            }
            if (r)
                if (1 === r) {
                    if (((i = c - o - 1), d >= 0)) {
                        let e = { data: t.subarray(d, i), type: _ };
                        u.push(e);
                    } else {
                        let n = this.getLastNalUnit(e.samples);
                        n &&
                            (l && c <= 4 - l && n.state && (n.data = n.data.subarray(0, n.data.byteLength - l)),
                            i > 0 && ((n.data = ey(n.data, t.subarray(0, i))), (n.state = 0)));
                    }
                    c < a ? ((s = this.getNALuType(t, c)), (d = c), (_ = s), (o = 0)) : (o = -1);
                } else o = 0;
            else o = 3;
        }
        if (d >= 0 && o >= 0) {
            let e = { data: t.subarray(d, a), type: _, state: o };
            u.push(e);
        }
        if (0 === u.length) {
            let n = this.getLastNalUnit(e.samples);
            n && (n.data = ey(n.data, t));
        }
        return (e.naluState = o), u;
    }
}
class i8 {
    constructor(e) {
        (this.data = void 0),
            (this.bytesAvailable = void 0),
            (this.word = void 0),
            (this.bitsAvailable = void 0),
            (this.data = e),
            (this.bytesAvailable = e.byteLength),
            (this.word = 0),
            (this.bitsAvailable = 0);
    }
    loadWord() {
        let e = this.data,
            t = this.bytesAvailable,
            n = e.byteLength - t,
            r = new Uint8Array(4),
            i = Math.min(4, t);
        if (0 === i) throw Error("no bytes available");
        r.set(e.subarray(n, n + i)),
            (this.word = new DataView(r.buffer).getUint32(0)),
            (this.bitsAvailable = 8 * i),
            (this.bytesAvailable -= i);
    }
    skipBits(e) {
        let t;
        (e = Math.min(e, 8 * this.bytesAvailable + this.bitsAvailable)),
            this.bitsAvailable > e ||
                ((e -= this.bitsAvailable), (t = e >> 3), (e -= t << 3), (this.bytesAvailable -= t), this.loadWord()),
            (this.word <<= e),
            (this.bitsAvailable -= e);
    }
    readBits(e) {
        let t = Math.min(this.bitsAvailable, e),
            n = this.word >>> (32 - t);
        if (
            (e > 32 && P.error("Cannot read more than 32 bits at a time"),
            (this.bitsAvailable -= t),
            this.bitsAvailable > 0)
        )
            this.word <<= t;
        else if (this.bytesAvailable > 0) this.loadWord();
        else throw Error("no bits available");
        return (t = e - t) > 0 && this.bitsAvailable ? (n << t) | this.readBits(t) : n;
    }
    skipLZ() {
        let e;
        for (e = 0; e < this.bitsAvailable; ++e)
            if ((this.word & (0x80000000 >>> e)) != 0) return (this.word <<= e), (this.bitsAvailable -= e), e;
        return this.loadWord(), e + this.skipLZ();
    }
    skipUEG() {
        this.skipBits(1 + this.skipLZ());
    }
    skipEG() {
        this.skipBits(1 + this.skipLZ());
    }
    readUEG() {
        let e = this.skipLZ();
        return this.readBits(e + 1) - 1;
    }
    readEG() {
        let e = this.readUEG();
        return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
    }
    readBoolean() {
        return 1 === this.readBits(1);
    }
    readUByte() {
        return this.readBits(8);
    }
    readUShort() {
        return this.readBits(16);
    }
    readUInt() {
        return this.readBits(32);
    }
}
class i9 extends i7 {
    parsePES(e, t, n, r) {
        let i,
            s = this.parseNALu(e, n.data, r),
            a = this.VideoSample,
            o = !1;
        (n.data = null),
            a &&
                s.length &&
                !e.audFound &&
                (this.pushAccessUnit(a, e), (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts))),
            s.forEach((r) => {
                var s, l, u, c, d;
                switch (r.type) {
                    case 1: {
                        let t = !1;
                        i = !0;
                        let s = r.data;
                        if (o && s.length > 4) {
                            let e = this.readSliceType(s);
                            (2 === e || 4 === e || 7 === e || 9 === e) && (t = !0);
                        }
                        t &&
                            null != (u = a) &&
                            u.frame &&
                            !a.key &&
                            (this.pushAccessUnit(a, e), (a = this.VideoSample = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.frame = !0),
                            (a.key = t);
                        break;
                    }
                    case 5:
                        (i = !0),
                            null != (s = a) &&
                                s.frame &&
                                !a.key &&
                                (this.pushAccessUnit(a, e), (a = this.VideoSample = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0),
                            (a.frame = !0);
                        break;
                    case 6:
                        (i = !0), eR(r.data, 1, n.pts, t.samples);
                        break;
                    case 7: {
                        (i = !0), (o = !0);
                        let t = r.data,
                            n = this.readSPS(t);
                        if (
                            !e.sps ||
                            e.width !== n.width ||
                            e.height !== n.height ||
                            (null == (c = e.pixelRatio) ? void 0 : c[0]) !== n.pixelRatio[0] ||
                            (null == (d = e.pixelRatio) ? void 0 : d[1]) !== n.pixelRatio[1]
                        ) {
                            (e.width = n.width), (e.height = n.height), (e.pixelRatio = n.pixelRatio), (e.sps = [t]);
                            let r = t.subarray(1, 4),
                                i = "avc1.";
                            for (let e = 0; e < 3; e++) {
                                let t = r[e].toString(16);
                                t.length < 2 && (t = "0" + t), (i += t);
                            }
                            e.codec = i;
                        }
                        break;
                    }
                    case 8:
                        (i = !0), (e.pps = [r.data]);
                        break;
                    case 9:
                        (i = !0),
                            (e.audFound = !0),
                            null != (l = a) && l.frame && (this.pushAccessUnit(a, e), (a = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts));
                        break;
                    case 12:
                        i = !0;
                        break;
                    default:
                        i = !1;
                }
                a && i && a.units.push(r);
            }),
            r && a && (this.pushAccessUnit(a, e), (this.VideoSample = null));
    }
    getNALuType(e, t) {
        return 31 & e[t];
    }
    readSliceType(e) {
        let t = new i8(e);
        return t.readUByte(), t.readUEG(), t.readUEG();
    }
    skipScalingList(e, t) {
        let n = 8,
            r = 8;
        for (let i = 0; i < e; i++) 0 !== r && (r = (n + t.readEG() + 256) % 256), (n = 0 === r ? n : r);
    }
    readSPS(e) {
        let t,
            n,
            r,
            i = new i8(e),
            s = 0,
            a = 0,
            o = 0,
            l = 0,
            u = i.readUByte.bind(i),
            c = i.readBits.bind(i),
            d = i.readUEG.bind(i),
            _ = i.readBoolean.bind(i),
            f = i.skipBits.bind(i),
            h = i.skipEG.bind(i),
            p = i.skipUEG.bind(i),
            m = this.skipScalingList.bind(this);
        u();
        let E = u();
        if (
            (c(5),
            f(3),
            u(),
            p(),
            100 === E ||
                110 === E ||
                122 === E ||
                244 === E ||
                44 === E ||
                83 === E ||
                86 === E ||
                118 === E ||
                128 === E)
        ) {
            let e = d();
            if ((3 === e && f(1), p(), p(), f(1), _()))
                for (r = 0, n = 3 !== e ? 8 : 12; r < n; r++) _() && m(r < 6 ? 16 : 64, i);
        }
        p();
        let g = d();
        if (0 === g) d();
        else if (1 === g) for (f(1), h(), h(), t = d(), r = 0; r < t; r++) h();
        p(), f(1);
        let A = d(),
            I = d(),
            T = c(1);
        0 === T && f(1), f(1), _() && ((s = d()), (a = d()), (o = d()), (l = d()));
        let S = [1, 1];
        if (_() && _())
            switch (u()) {
                case 1:
                    S = [1, 1];
                    break;
                case 2:
                    S = [12, 11];
                    break;
                case 3:
                    S = [10, 11];
                    break;
                case 4:
                    S = [16, 11];
                    break;
                case 5:
                    S = [40, 33];
                    break;
                case 6:
                    S = [24, 11];
                    break;
                case 7:
                    S = [20, 11];
                    break;
                case 8:
                    S = [32, 11];
                    break;
                case 9:
                    S = [80, 33];
                    break;
                case 10:
                    S = [18, 11];
                    break;
                case 11:
                    S = [15, 11];
                    break;
                case 12:
                    S = [64, 33];
                    break;
                case 13:
                    S = [160, 99];
                    break;
                case 14:
                    S = [4, 3];
                    break;
                case 15:
                    S = [3, 2];
                    break;
                case 16:
                    S = [2, 1];
                    break;
                case 255:
                    S = [(u() << 8) | u(), (u() << 8) | u()];
            }
        return {
            width: Math.ceil((A + 1) * 16 - 2 * s - 2 * a),
            height: (2 - T) * (I + 1) * 16 - (T ? 2 : 4) * (o + l),
            pixelRatio: S,
        };
    }
}
class se extends i7 {
    constructor(...e) {
        super(...e), (this.initVPS = null);
    }
    parsePES(e, t, n, r) {
        let i,
            s = this.parseNALu(e, n.data, r),
            a = this.VideoSample,
            o = !1;
        (n.data = null),
            a &&
                s.length &&
                !e.audFound &&
                (this.pushAccessUnit(a, e), (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts))),
            s.forEach((r) => {
                var s, l, u;
                switch (r.type) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        a || (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts)),
                            (a.frame = !0),
                            (i = !0);
                        break;
                    case 16:
                    case 17:
                    case 18:
                    case 21:
                        (i = !0),
                            o &&
                                null != (u = a) &&
                                u.frame &&
                                !a.key &&
                                (this.pushAccessUnit(a, e), (a = this.VideoSample = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0),
                            (a.frame = !0);
                        break;
                    case 19:
                    case 20:
                        (i = !0),
                            null != (s = a) &&
                                s.frame &&
                                !a.key &&
                                (this.pushAccessUnit(a, e), (a = this.VideoSample = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0),
                            (a.frame = !0);
                        break;
                    case 39:
                        (i = !0), eR(r.data, 2, n.pts, t.samples);
                        break;
                    case 32:
                        (i = !0),
                            e.vps ||
                                ("object" != typeof e.params && (e.params = {}),
                                (e.params = S(e.params, this.readVPS(r.data))),
                                (this.initVPS = r.data)),
                            (e.vps = [r.data]);
                        break;
                    case 33:
                        if (
                            ((i = !0),
                            (o = !0),
                            void 0 === e.vps ||
                                e.vps[0] === this.initVPS ||
                                void 0 === e.sps ||
                                this.matchSPS(e.sps[0], r.data) ||
                                ((this.initVPS = e.vps[0]), (e.sps = e.pps = void 0)),
                            !e.sps)
                        ) {
                            let t = this.readSPS(r.data);
                            for (let n in ((e.width = t.width),
                            (e.height = t.height),
                            (e.pixelRatio = t.pixelRatio),
                            (e.codec = t.codecString),
                            (e.sps = []),
                            "object" != typeof e.params && (e.params = {}),
                            t.params))
                                e.params[n] = t.params[n];
                        }
                        this.pushParameterSet(e.sps, r.data, e.vps),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0);
                        break;
                    case 34:
                        if (((i = !0), "object" == typeof e.params)) {
                            if (!e.pps) {
                                e.pps = [];
                                let t = this.readPPS(r.data);
                                for (let n in t) e.params[n] = t[n];
                            }
                            this.pushParameterSet(e.pps, r.data, e.vps);
                        }
                        break;
                    case 35:
                        (i = !0),
                            (e.audFound = !0),
                            null != (l = a) && l.frame && (this.pushAccessUnit(a, e), (a = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts));
                        break;
                    default:
                        i = !1;
                }
                a && i && a.units.push(r);
            }),
            r && a && (this.pushAccessUnit(a, e), (this.VideoSample = null));
    }
    pushParameterSet(e, t, n) {
        ((!n || n[0] !== this.initVPS) && (n || e.length)) || e.push(t);
    }
    getNALuType(e, t) {
        return (126 & e[t]) >>> 1;
    }
    ebsp2rbsp(e) {
        let t = new Uint8Array(e.byteLength),
            n = 0;
        for (let r = 0; r < e.byteLength; r++)
            (!(r >= 2) || 3 !== e[r] || 0 !== e[r - 1] || 0 !== e[r - 2]) && ((t[n] = e[r]), n++);
        return new Uint8Array(t.buffer, 0, n);
    }
    pushAccessUnit(e, t) {
        super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
    }
    readVPS(e) {
        let t = new i8(e);
        return (
            t.readUByte(),
            t.readUByte(),
            t.readBits(4),
            t.skipBits(2),
            t.readBits(6),
            { numTemporalLayers: t.readBits(3) + 1, temporalIdNested: t.readBoolean() }
        );
    }
    readSPS(e) {
        let t = new i8(this.ebsp2rbsp(e));
        t.readUByte(), t.readUByte(), t.readBits(4);
        let n = t.readBits(3);
        t.readBoolean();
        let r = t.readBits(2),
            i = t.readBoolean(),
            s = t.readBits(5),
            a = t.readUByte(),
            o = t.readUByte(),
            l = t.readUByte(),
            u = t.readUByte(),
            c = t.readUByte(),
            d = t.readUByte(),
            _ = t.readUByte(),
            f = t.readUByte(),
            h = t.readUByte(),
            p = t.readUByte(),
            m = t.readUByte(),
            E = [],
            g = [];
        for (let e = 0; e < n; e++) E.push(t.readBoolean()), g.push(t.readBoolean());
        if (n > 0) for (let e = n; e < 8; e++) t.readBits(2);
        for (let e = 0; e < n; e++)
            E[e] &&
                (t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte(),
                t.readUByte()),
                g[e] && t.readUByte();
        t.readUEG();
        let A = t.readUEG();
        3 == A && t.skipBits(1);
        let I = t.readUEG(),
            T = t.readUEG(),
            S = t.readBoolean(),
            y = 0,
            v = 0,
            C = 0,
            N = 0;
        S && ((y += t.readUEG()), (v += t.readUEG()), (C += t.readUEG()), (N += t.readUEG()));
        let R = t.readUEG(),
            b = t.readUEG(),
            O = t.readUEG(),
            D = t.readBoolean();
        for (let e = D ? 0 : n; e <= n; e++) t.skipUEG(), t.skipUEG(), t.skipUEG();
        if (
            (t.skipUEG(),
            t.skipUEG(),
            t.skipUEG(),
            t.skipUEG(),
            t.skipUEG(),
            t.skipUEG(),
            t.readBoolean() && t.readBoolean())
        )
            for (let e = 0; e < 4; e++)
                for (let n = 0; n < (3 === e ? 2 : 6); n++)
                    if (t.readBoolean()) {
                        let n = Math.min(64, 1 << (4 + (e << 1)));
                        e > 1 && t.readEG();
                        for (let e = 0; e < n; e++) t.readEG();
                    } else t.readUEG();
        t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
        let L = t.readUEG(),
            w = 0;
        for (let e = 0; e < L; e++) {
            let n = !1;
            if ((0 !== e && (n = t.readBoolean()), n)) {
                e === L && t.readUEG(), t.readBoolean(), t.readUEG();
                let n = 0;
                for (let e = 0; e <= w; e++) {
                    let e = t.readBoolean(),
                        r = !1;
                    e || (r = t.readBoolean()), (e || r) && n++;
                }
                w = n;
            } else {
                let e = t.readUEG(),
                    n = t.readUEG();
                w = e + n;
                for (let n = 0; n < e; n++) t.readUEG(), t.readBoolean();
                for (let e = 0; e < n; e++) t.readUEG(), t.readBoolean();
            }
        }
        if (t.readBoolean()) {
            let e = t.readUEG();
            for (let n = 0; n < e; n++) {
                for (let e = 0; e < O + 4; e++) t.readBits(1);
                t.readBits(1);
            }
        }
        let M = 0,
            x = 1,
            P = 1,
            k = !0,
            U = 1,
            G = 0;
        t.readBoolean(), t.readBoolean();
        let F = !1;
        if (t.readBoolean()) {
            if (t.readBoolean()) {
                let e = t.readUByte(),
                    n = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                    r = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                e > 0 && e < 16
                    ? ((x = n[e - 1]), (P = r[e - 1]))
                    : 255 === e && ((x = t.readBits(16)), (P = t.readBits(16)));
            }
            if (
                (t.readBoolean() && t.readBoolean(),
                t.readBoolean() &&
                    (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())),
                t.readBoolean() && (t.readUEG(), t.readUEG()),
                t.readBoolean(),
                t.readBoolean(),
                t.readBoolean(),
                (F = t.readBoolean()) && (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()),
                t.readBoolean() &&
                    ((U = t.readBits(32)), (G = t.readBits(32)), t.readBoolean() && t.readUEG(), t.readBoolean()))
            ) {
                let e = t.readBoolean(),
                    r = t.readBoolean(),
                    i = !1;
                (e || r) &&
                    ((i = t.readBoolean()) && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)),
                    t.readBits(4),
                    t.readBits(4),
                    i && t.readBits(4),
                    t.readBits(5),
                    t.readBits(5),
                    t.readBits(5));
                for (let s = 0; s <= n; s++) {
                    let n = (k = t.readBoolean()) || t.readBoolean(),
                        s = !1;
                    n ? t.readEG() : (s = t.readBoolean());
                    let a = s ? 1 : t.readUEG() + 1;
                    if (e)
                        for (let e = 0; e < a; e++)
                            t.readUEG(), t.readUEG(), i && (t.readUEG(), t.readUEG()), t.skipBits(1);
                    if (r)
                        for (let e = 0; e < a; e++)
                            t.readUEG(), t.readUEG(), i && (t.readUEG(), t.readUEG()), t.skipBits(1);
                }
            }
            t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), (M = t.readUEG()));
        }
        let B = I,
            V = T;
        if (S) {
            let e = 1,
                t = 1;
            1 === A ? (e = t = 2) : 2 == A && (e = 2), (B = I - e * v - e * y), (V = T - t * N - t * C);
        }
        let H = r ? ["A", "B", "C"][r] : "",
            j = (a << 24) | (o << 16) | (l << 8) | u,
            Y = 0;
        for (let e = 0; e < 32; e++) Y = (Y | (((j >> e) & 1) << (31 - e))) >>> 0;
        let W = Y.toString(16);
        1 === s && "2" === W && (W = "6");
        let K = i ? "H" : "L";
        return {
            codecString: `hvc1.${H}${s}.${W}.${K}${m}.B0`,
            params: {
                general_tier_flag: i,
                general_profile_idc: s,
                general_profile_space: r,
                general_profile_compatibility_flags: [a, o, l, u],
                general_constraint_indicator_flags: [c, d, _, f, h, p],
                general_level_idc: m,
                bit_depth: R + 8,
                bit_depth_luma_minus8: R,
                bit_depth_chroma_minus8: b,
                min_spatial_segmentation_idc: M,
                chroma_format_idc: A,
                frame_rate: { fixed: k, fps: G / U },
            },
            width: B,
            height: V,
            pixelRatio: [x, P],
        };
    }
    readPPS(e) {
        let t = new i8(this.ebsp2rbsp(e));
        t.readUByte(),
            t.readUByte(),
            t.skipUEG(),
            t.skipUEG(),
            t.skipBits(2),
            t.skipBits(3),
            t.skipBits(2),
            t.skipUEG(),
            t.skipUEG(),
            t.skipEG(),
            t.skipBits(2),
            t.readBoolean() && t.skipUEG(),
            t.skipEG(),
            t.skipEG(),
            t.skipBits(4);
        let n = t.readBoolean(),
            r = t.readBoolean(),
            i = 1;
        return r && n ? (i = 0) : r ? (i = 3) : n && (i = 2), { parallelismType: i };
    }
    matchSPS(e, t) {
        return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
    }
}
let st = 188;
class sn {
    constructor(e, t, n, r) {
        (this.logger = void 0),
            (this.observer = void 0),
            (this.config = void 0),
            (this.typeSupported = void 0),
            (this.sampleAes = null),
            (this.pmtParsed = !1),
            (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this._pmtId = -1),
            (this._videoTrack = void 0),
            (this._audioTrack = void 0),
            (this._id3Track = void 0),
            (this._txtTrack = void 0),
            (this.aacOverFlow = null),
            (this.remainderData = null),
            (this.videoParser = void 0),
            (this.observer = e),
            (this.config = t),
            (this.typeSupported = n),
            (this.logger = r),
            (this.videoParser = null);
    }
    static probe(e, t) {
        let n = sn.syncOffset(e);
        return n > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${n}`), -1 !== n;
    }
    static syncOffset(e) {
        let t = e.length,
            n = Math.min(5 * st, t - st) + 1,
            r = 0;
        for (; r < n; ) {
            let i = !1,
                s = -1,
                a = 0;
            for (let o = r; o < t; o += st)
                if (71 === e[o] && (t - o === st || 71 === e[o + st])) {
                    if (
                        (a++,
                        -1 === s && 0 !== (s = o) && (n = Math.min(s + 99 * st, e.length - st) + 1),
                        i || (i = 0 === sr(e, o)),
                        i && a > 1 && ((0 === s && a > 2) || o + st > n))
                    )
                        return s;
                } else if (a) return -1;
                else break;
            r++;
        }
        return -1;
    }
    static createTrack(e, t) {
        return {
            container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
            type: e,
            id: er[e],
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: 0,
            samples: [],
            dropped: 0,
            duration: "audio" === e ? t : void 0,
        };
    }
    resetInitSegment(e, t, n, r) {
        (this.pmtParsed = !1),
            (this._pmtId = -1),
            (this._videoTrack = sn.createTrack("video")),
            (this._videoTrack.duration = r),
            (this._audioTrack = sn.createTrack("audio", r)),
            (this._id3Track = sn.createTrack("id3")),
            (this._txtTrack = sn.createTrack("text")),
            (this._audioTrack.segmentCodec = "aac"),
            (this.videoParser = null),
            (this.aacOverFlow = null),
            (this.remainderData = null),
            (this.audioCodec = t),
            (this.videoCodec = n);
    }
    resetTimeStamp() {}
    resetContiguity() {
        let { _audioTrack: e, _videoTrack: t, _id3Track: n } = this;
        e && (e.pesData = null),
            t && (t.pesData = null),
            n && (n.pesData = null),
            (this.aacOverFlow = null),
            (this.remainderData = null);
    }
    demux(e, t, n = !1, r = !1) {
        let i;
        n || (this.sampleAes = null);
        let s = this._videoTrack,
            a = this._audioTrack,
            o = this._id3Track,
            l = this._txtTrack,
            u = s.pid,
            c = s.pesData,
            d = a.pid,
            _ = o.pid,
            f = a.pesData,
            h = o.pesData,
            p = null,
            m = this.pmtParsed,
            E = this._pmtId,
            g = e.length;
        if (
            (this.remainderData && ((g = (e = ey(this.remainderData, e)).length), (this.remainderData = null)),
            g < st && !r)
        )
            return (this.remainderData = e), { audioTrack: a, videoTrack: s, id3Track: o, textTrack: l };
        let A = Math.max(0, sn.syncOffset(e));
        (g -= (g - A) % st) < e.byteLength &&
            !r &&
            (this.remainderData = new Uint8Array(e.buffer, g, e.buffer.byteLength - g));
        let I = 0;
        for (let t = A; t < g; t += st)
            if (71 === e[t]) {
                let r,
                    g = !!(64 & e[t + 1]),
                    I = sr(e, t);
                if ((48 & e[t + 3]) >> 4 > 1) {
                    if ((r = t + 5 + e[t + 4]) === t + st) continue;
                } else r = t + 4;
                switch (I) {
                    case u:
                        g &&
                            (c &&
                                (i = sl(c, this.logger)) &&
                                (this.readyVideoParser(s.segmentCodec),
                                null !== this.videoParser && this.videoParser.parsePES(s, l, i, !1)),
                            (c = { data: [], size: 0 })),
                            c && (c.data.push(e.subarray(r, t + st)), (c.size += t + st - r));
                        break;
                    case d:
                        if (g) {
                            if (f && (i = sl(f, this.logger)))
                                switch (a.segmentCodec) {
                                    case "aac":
                                        this.parseAACPES(a, i);
                                        break;
                                    case "mp3":
                                        this.parseMPEGPES(a, i);
                                        break;
                                    case "ac3":
                                        this.parseAC3PES(a, i);
                                }
                            f = { data: [], size: 0 };
                        }
                        f && (f.data.push(e.subarray(r, t + st)), (f.size += t + st - r));
                        break;
                    case _:
                        g && (h && (i = sl(h, this.logger)) && this.parseID3PES(o, i), (h = { data: [], size: 0 })),
                            h && (h.data.push(e.subarray(r, t + st)), (h.size += t + st - r));
                        break;
                    case 0:
                        g && (r += e[r] + 1), (E = this._pmtId = si(e, r));
                        break;
                    case E: {
                        g && (r += e[r] + 1);
                        let i = ss(e, r, this.typeSupported, n, this.observer, this.logger);
                        (u = i.videoPid) > 0 && ((s.pid = u), (s.segmentCodec = i.segmentVideoCodec)),
                            (d = i.audioPid) > 0 && ((a.pid = d), (a.segmentCodec = i.segmentAudioCodec)),
                            (_ = i.id3Pid) > 0 && (o.pid = _),
                            null === p ||
                                m ||
                                (this.logger.warn(
                                    `MPEG-TS PMT found at ${t} after unknown PID '${p}'. Backtracking to sync byte @${A} to parse all TS packets.`,
                                ),
                                (p = null),
                                (t = A - 188)),
                            (m = this.pmtParsed = !0);
                        break;
                    }
                    case 17:
                    case 8191:
                        break;
                    default:
                        p = I;
                }
            } else I++;
        I > 0 && sa(this.observer, Error(`Found ${I} TS packet/s that do not start with 0x47`), void 0, this.logger),
            (s.pesData = c),
            (a.pesData = f),
            (o.pesData = h);
        let T = { audioTrack: a, videoTrack: s, id3Track: o, textTrack: l };
        return r && this.extractRemainingSamples(T), T;
    }
    flush() {
        let e,
            { remainderData: t } = this;
        return ((this.remainderData = null),
        (e = t
            ? this.demux(t, -1, !1, !0)
            : {
                  videoTrack: this._videoTrack,
                  audioTrack: this._audioTrack,
                  id3Track: this._id3Track,
                  textTrack: this._txtTrack,
              }),
        this.extractRemainingSamples(e),
        this.sampleAes)
            ? this.decrypt(e, this.sampleAes)
            : e;
    }
    extractRemainingSamples(e) {
        let t,
            { audioTrack: n, videoTrack: r, id3Track: i, textTrack: s } = e,
            a = r.pesData,
            o = n.pesData,
            l = i.pesData;
        if (
            (a && (t = sl(a, this.logger))
                ? (this.readyVideoParser(r.segmentCodec),
                  null !== this.videoParser && (this.videoParser.parsePES(r, s, t, !0), (r.pesData = null)))
                : (r.pesData = a),
            o && (t = sl(o, this.logger)))
        ) {
            switch (n.segmentCodec) {
                case "aac":
                    this.parseAACPES(n, t);
                    break;
                case "mp3":
                    this.parseMPEGPES(n, t);
                    break;
                case "ac3":
                    this.parseAC3PES(n, t);
            }
            n.pesData = null;
        } else
            null != o && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"),
                (n.pesData = o);
        l && (t = sl(l, this.logger)) ? (this.parseID3PES(i, t), (i.pesData = null)) : (i.pesData = l);
    }
    demuxSampleAes(e, t, n) {
        let r = this.demux(e, n, !0, !this.config.progressive),
            i = (this.sampleAes = new i5(this.observer, this.config, t));
        return this.decrypt(r, i);
    }
    readyVideoParser(e) {
        null === this.videoParser &&
            ("avc" === e ? (this.videoParser = new i9()) : "hevc" === e && (this.videoParser = new se()));
    }
    decrypt(e, t) {
        return new Promise((n) => {
            let { audioTrack: r, videoTrack: i } = e;
            r.samples && "aac" === r.segmentCodec
                ? t.decryptAacSamples(r.samples, 0, () => {
                      i.samples
                          ? t.decryptAvcSamples(i.samples, 0, 0, () => {
                                n(e);
                            })
                          : n(e);
                  })
                : i.samples &&
                  t.decryptAvcSamples(i.samples, 0, 0, () => {
                      n(e);
                  });
        });
    }
    destroy() {
        this.observer && this.observer.removeAllListeners(),
            (this.config = this.logger = this.observer = null),
            (this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null),
            (this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0);
    }
    parseAACPES(e, t) {
        let n,
            r,
            i,
            s,
            a = 0,
            o = this.aacOverFlow,
            l = t.data;
        if (o) {
            this.aacOverFlow = null;
            let t = o.missing,
                n = o.sample.unit.byteLength;
            if (-1 === t) l = ey(o.sample.unit, l);
            else {
                let r = n - t;
                o.sample.unit.set(l.subarray(0, t), r), e.samples.push(o.sample), (a = o.missing);
            }
        }
        for (n = a, r = l.length; n < r - 1 && !id(l, n); n++);
        if (n !== a) {
            let e,
                t = n < r - 1;
            if (
                ((e = t ? `AAC PES did not start with ADTS header,offset:${n}` : "No ADTS header found in AAC PES"),
                sa(this.observer, Error(e), t, this.logger),
                !t)
            )
                return;
        }
        if ((ip(e, this.observer, l, n, this.audioCodec), void 0 !== t.pts)) i = t.pts;
        else {
            if (!o) return void this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
            let t = im(e.samplerate);
            i = o.sample.pts + t;
        }
        let u = 0;
        for (; n < r; ) {
            if (((s = ig(e, l, n, i, u)), (n += s.length), s.missing)) {
                this.aacOverFlow = s;
                break;
            }
            for (u++; n < r - 1 && !id(l, n); n++);
        }
    }
    parseMPEGPES(e, t) {
        let n = t.data,
            r = n.length,
            i = 0,
            s = 0,
            a = t.pts;
        if (void 0 === a) return void this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
        for (; s < r; )
            if (iq(n, s)) {
                let t = iK(e, n, s, a, i);
                if (t) (s += t.length), i++;
                else break;
            } else s++;
    }
    parseAC3PES(e, t) {
        {
            let n,
                r = t.data,
                i = t.pts;
            if (void 0 === i) return void this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
            let s = r.length,
                a = 0,
                o = 0;
            for (; o < s && (n = i1(e, r, o, i, a++)) > 0; ) o += n;
        }
    }
    parseID3PES(e, t) {
        if (void 0 === t.pts) return void this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
        let n = S({}, t, { type: this._videoTrack ? iU.emsg : iU.audioId3, duration: 1 / 0 });
        e.samples.push(n);
    }
}
function sr(e, t) {
    return ((31 & e[t + 1]) << 8) + e[t + 2];
}
function si(e, t) {
    return ((31 & e[t + 10]) << 8) | e[t + 11];
}
function ss(e, t, n, r, i, s) {
    let a = { audioPid: -1, videoPid: -1, id3Pid: -1, segmentVideoCodec: "avc", segmentAudioCodec: "aac" },
        o = ((15 & e[t + 1]) << 8) | e[t + 2],
        l = t + 3 + o - 4,
        u = ((15 & e[t + 10]) << 8) | e[t + 11];
    for (t += 12 + u; t < l; ) {
        let o = sr(e, t),
            l = ((15 & e[t + 3]) << 8) | e[t + 4];
        switch (e[t]) {
            case 207:
                if (!r) {
                    so("ADTS AAC", s);
                    break;
                }
            case 15:
                -1 === a.audioPid && (a.audioPid = o);
                break;
            case 21:
                -1 === a.id3Pid && (a.id3Pid = o);
                break;
            case 219:
                if (!r) {
                    so("H.264", s);
                    break;
                }
            case 27:
                -1 === a.videoPid && (a.videoPid = o);
                break;
            case 3:
            case 4:
                n.mpeg || n.mp3
                    ? -1 === a.audioPid && ((a.audioPid = o), (a.segmentAudioCodec = "mp3"))
                    : s.log("MPEG audio found, not supported in this browser");
                break;
            case 193:
                if (!r) {
                    so("AC-3", s);
                    break;
                }
            case 129:
                n.ac3
                    ? -1 === a.audioPid && ((a.audioPid = o), (a.segmentAudioCodec = "ac3"))
                    : s.log("AC-3 audio found, not supported in this browser");
                break;
            case 6:
                if (-1 === a.audioPid && l > 0) {
                    let r = t + 5,
                        i = l;
                    for (; i > 2; ) {
                        106 === e[r] &&
                            (!0 !== n.ac3
                                ? s.log("AC-3 audio found, not supported in this browser for now")
                                : ((a.audioPid = o), (a.segmentAudioCodec = "ac3")));
                        let t = e[r + 1] + 2;
                        (r += t), (i -= t);
                    }
                }
                break;
            case 194:
            case 135:
                return sa(i, Error("Unsupported EC-3 in M2TS found"), void 0, s), a;
            case 36:
                -1 === a.videoPid && ((a.videoPid = o), (a.segmentVideoCodec = "hevc"), s.log("HEVC in M2TS found"));
        }
        t += l + 5;
    }
    return a;
}
function sa(e, t, n, r) {
    r.warn(`parsing error: ${t.message}`),
        e.emit(u.ERROR, u.ERROR, {
            type: o.MEDIA_ERROR,
            details: l.FRAG_PARSING_ERROR,
            fatal: !1,
            levelRetry: n,
            error: t,
            reason: t.message,
        });
}
function so(e, t) {
    t.log(`${e} with AES-128-CBC encryption found in unencrypted stream`);
}
function sl(e, t) {
    let n,
        r,
        i,
        s,
        a,
        o = 0,
        l = e.data;
    if (!e || 0 === e.size) return null;
    for (; l[0].length < 19 && l.length > 1; ) (l[0] = ey(l[0], l[1])), l.splice(1, 1);
    if (1 === ((n = l[0])[0] << 16) + (n[1] << 8) + n[2]) {
        if ((r = (n[4] << 8) + n[5]) && r > e.size - 6) return null;
        let u = n[7];
        192 & u &&
            ((s =
                (14 & n[9]) * 0x20000000 +
                (255 & n[10]) * 4194304 +
                (254 & n[11]) * 16384 +
                (255 & n[12]) * 128 +
                (254 & n[13]) / 2),
            64 & u
                ? s -
                      (a =
                          (14 & n[14]) * 0x20000000 +
                          (255 & n[15]) * 4194304 +
                          (254 & n[16]) * 16384 +
                          (255 & n[17]) * 128 +
                          (254 & n[18]) / 2) >
                      54e5 && (t.warn(`${Math.round((s - a) / 9e4)}s delta between PTS and DTS, align them`), (s = a))
                : (a = s));
        let c = (i = n[8]) + 9;
        if (e.size <= c) return null;
        e.size -= c;
        let d = new Uint8Array(e.size);
        for (let e = 0, t = l.length; e < t; e++) {
            let t = (n = l[e]).byteLength;
            if (c)
                if (c > t) {
                    c -= t;
                    continue;
                } else (n = n.subarray(c)), (t -= c), (c = 0);
            d.set(n, o), (o += t);
        }
        return r && (r -= i + 3), { data: d, pts: s, dts: a, len: r };
    }
    return null;
}
class su {
    static getSilentFrame(e, t) {
        if ("mp4a.40.2" === e) {
            if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
            if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
            if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
            else if (4 === t)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
            else if (5 === t)
                return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56,
                ]);
            else if (6 === t)
                return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8,
                    224,
                ]);
        } else {
            if (1 === t)
                return new Uint8Array([
                    1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
            if (2 === t)
                return new Uint8Array([
                    1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
            if (3 === t)
                return new Uint8Array([
                    1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
        }
    }
}
let sc = 0xffffffff;
class sd {
    static init() {
        let e;
        for (e in ((sd.types = {
            avc1: [],
            avcC: [],
            hvc1: [],
            hvcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            ".mp3": [],
            dac3: [],
            "ac-3": [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
            smhd: [],
        }),
        sd.types))
            sd.types.hasOwnProperty(e) &&
                (sd.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
        sd.HDLR_TYPES = {
            video: new Uint8Array([
                0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111,
                72, 97, 110, 100, 108, 101, 114, 0,
            ]),
            audio: new Uint8Array([
                0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100,
                72, 97, 110, 100, 108, 101, 114, 0,
            ]),
        };
        let t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]);
        (sd.STTS = sd.STSC = sd.STCO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (sd.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (sd.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
            (sd.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (sd.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
        let n = new Uint8Array([105, 115, 111, 109]),
            r = new Uint8Array([97, 118, 99, 49]),
            i = new Uint8Array([0, 0, 0, 1]);
        (sd.FTYP = sd.box(sd.types.ftyp, n, i, n, r)), (sd.DINF = sd.box(sd.types.dinf, sd.box(sd.types.dref, t)));
    }
    static box(e, ...t) {
        let n = 8,
            r = t.length,
            i = r;
        for (; r--; ) n += t[r].byteLength;
        let s = new Uint8Array(n);
        for (
            s[0] = (n >> 24) & 255,
                s[1] = (n >> 16) & 255,
                s[2] = (n >> 8) & 255,
                s[3] = 255 & n,
                s.set(e, 4),
                r = 0,
                n = 8;
            r < i;
            r++
        )
            s.set(t[r], n), (n += t[r].byteLength);
        return s;
    }
    static hdlr(e) {
        return sd.box(sd.types.hdlr, sd.HDLR_TYPES[e]);
    }
    static mdat(e) {
        return sd.box(sd.types.mdat, e);
    }
    static mdhd(e, t) {
        let n = Math.floor((t *= e) / (sc + 1)),
            r = Math.floor(t % (sc + 1));
        return sd.box(
            sd.types.mdhd,
            new Uint8Array([
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3,
                (e >> 24) & 255,
                (e >> 16) & 255,
                (e >> 8) & 255,
                255 & e,
                n >> 24,
                (n >> 16) & 255,
                (n >> 8) & 255,
                255 & n,
                r >> 24,
                (r >> 16) & 255,
                (r >> 8) & 255,
                255 & r,
                85,
                196,
                0,
                0,
            ]),
        );
    }
    static mdia(e) {
        return sd.box(sd.types.mdia, sd.mdhd(e.timescale || 0, e.duration || 0), sd.hdlr(e.type), sd.minf(e));
    }
    static mfhd(e) {
        return sd.box(sd.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e]));
    }
    static minf(e) {
        return "audio" === e.type
            ? sd.box(sd.types.minf, sd.box(sd.types.smhd, sd.SMHD), sd.DINF, sd.stbl(e))
            : sd.box(sd.types.minf, sd.box(sd.types.vmhd, sd.VMHD), sd.DINF, sd.stbl(e));
    }
    static moof(e, t, n) {
        return sd.box(sd.types.moof, sd.mfhd(e), sd.traf(n, t));
    }
    static moov(e) {
        let t = e.length,
            n = [];
        for (; t--; ) n[t] = sd.trak(e[t]);
        return sd.box.apply(
            null,
            [sd.types.moov, sd.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(n).concat(sd.mvex(e)),
        );
    }
    static mvex(e) {
        let t = e.length,
            n = [];
        for (; t--; ) n[t] = sd.trex(e[t]);
        return sd.box.apply(null, [sd.types.mvex, ...n]);
    }
    static mvhd(e, t) {
        let n = Math.floor((t *= e) / (sc + 1)),
            r = Math.floor(t % (sc + 1)),
            i = new Uint8Array([
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3,
                (e >> 24) & 255,
                (e >> 16) & 255,
                (e >> 8) & 255,
                255 & e,
                n >> 24,
                (n >> 16) & 255,
                (n >> 8) & 255,
                255 & n,
                r >> 24,
                (r >> 16) & 255,
                (r >> 8) & 255,
                255 & r,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                64,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                255,
                255,
                255,
                255,
            ]);
        return sd.box(sd.types.mvhd, i);
    }
    static sdtp(e) {
        let t,
            n,
            r = e.samples || [],
            i = new Uint8Array(4 + r.length);
        for (t = 0; t < r.length; t++)
            (n = r[t].flags), (i[t + 4] = (n.dependsOn << 4) | (n.isDependedOn << 2) | n.hasRedundancy);
        return sd.box(sd.types.sdtp, i);
    }
    static stbl(e) {
        return sd.box(
            sd.types.stbl,
            sd.stsd(e),
            sd.box(sd.types.stts, sd.STTS),
            sd.box(sd.types.stsc, sd.STSC),
            sd.box(sd.types.stsz, sd.STSZ),
            sd.box(sd.types.stco, sd.STCO),
        );
    }
    static avc1(e) {
        let t,
            n,
            r,
            i = [],
            s = [];
        for (t = 0; t < e.sps.length; t++)
            (r = (n = e.sps[t]).byteLength),
                i.push((r >>> 8) & 255),
                i.push(255 & r),
                (i = i.concat(Array.prototype.slice.call(n)));
        for (t = 0; t < e.pps.length; t++)
            (r = (n = e.pps[t]).byteLength),
                s.push((r >>> 8) & 255),
                s.push(255 & r),
                (s = s.concat(Array.prototype.slice.call(n)));
        let a = sd.box(
                sd.types.avcC,
                new Uint8Array(
                    [1, i[3], i[4], i[5], 255, 224 | e.sps.length].concat(i).concat([e.pps.length]).concat(s),
                ),
            ),
            o = e.width,
            l = e.height,
            u = e.pixelRatio[0],
            c = e.pixelRatio[1];
        return sd.box(
            sd.types.avc1,
            new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                (o >> 8) & 255,
                255 & o,
                (l >> 8) & 255,
                255 & l,
                0,
                72,
                0,
                0,
                0,
                72,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                18,
                100,
                97,
                105,
                108,
                121,
                109,
                111,
                116,
                105,
                111,
                110,
                47,
                104,
                108,
                115,
                46,
                106,
                115,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                24,
                17,
                17,
            ]),
            a,
            sd.box(sd.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
            sd.box(
                sd.types.pasp,
                new Uint8Array([
                    u >> 24,
                    (u >> 16) & 255,
                    (u >> 8) & 255,
                    255 & u,
                    c >> 24,
                    (c >> 16) & 255,
                    (c >> 8) & 255,
                    255 & c,
                ]),
            ),
        );
    }
    static esds(e) {
        return new Uint8Array([
            0,
            0,
            0,
            0,
            3,
            25,
            0,
            1,
            0,
            4,
            17,
            64,
            21,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            2,
            ...e.config,
            6,
            1,
            2,
        ]);
    }
    static audioStsd(e) {
        let t = e.samplerate || 0;
        return new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            e.channelCount || 0,
            0,
            16,
            0,
            0,
            0,
            0,
            (t >> 8) & 255,
            255 & t,
            0,
            0,
        ]);
    }
    static mp4a(e) {
        return sd.box(sd.types.mp4a, sd.audioStsd(e), sd.box(sd.types.esds, sd.esds(e)));
    }
    static mp3(e) {
        return sd.box(sd.types[".mp3"], sd.audioStsd(e));
    }
    static ac3(e) {
        return sd.box(sd.types["ac-3"], sd.audioStsd(e), sd.box(sd.types.dac3, e.config));
    }
    static stsd(e) {
        let { segmentCodec: t } = e;
        if ("audio" === e.type) {
            if ("aac" === t) return sd.box(sd.types.stsd, sd.STSD, sd.mp4a(e));
            if ("ac3" === t && e.config) return sd.box(sd.types.stsd, sd.STSD, sd.ac3(e));
            if ("mp3" === t && "mp3" === e.codec) return sd.box(sd.types.stsd, sd.STSD, sd.mp3(e));
        } else if (e.pps && e.sps) {
            if ("avc" === t) return sd.box(sd.types.stsd, sd.STSD, sd.avc1(e));
            if ("hevc" === t && e.vps) return sd.box(sd.types.stsd, sd.STSD, sd.hvc1(e));
        } else throw Error("video track missing pps or sps");
        throw Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
    }
    static tkhd(e) {
        let t = e.id,
            n = (e.duration || 0) * (e.timescale || 0),
            r = e.width || 0,
            i = e.height || 0,
            s = Math.floor(n / (sc + 1)),
            a = Math.floor(n % (sc + 1));
        return sd.box(
            sd.types.tkhd,
            new Uint8Array([
                1,
                0,
                0,
                7,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3,
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                255 & t,
                0,
                0,
                0,
                0,
                s >> 24,
                (s >> 16) & 255,
                (s >> 8) & 255,
                255 & s,
                a >> 24,
                (a >> 16) & 255,
                (a >> 8) & 255,
                255 & a,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                64,
                0,
                0,
                0,
                (r >> 8) & 255,
                255 & r,
                0,
                0,
                (i >> 8) & 255,
                255 & i,
                0,
                0,
            ]),
        );
    }
    static traf(e, t) {
        let n = sd.sdtp(e),
            r = e.id,
            i = Math.floor(t / (sc + 1)),
            s = Math.floor(t % (sc + 1));
        return sd.box(
            sd.types.traf,
            sd.box(sd.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, (r >> 16) & 255, (r >> 8) & 255, 255 & r])),
            sd.box(
                sd.types.tfdt,
                new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    i >> 24,
                    (i >> 16) & 255,
                    (i >> 8) & 255,
                    255 & i,
                    s >> 24,
                    (s >> 16) & 255,
                    (s >> 8) & 255,
                    255 & s,
                ]),
            ),
            sd.trun(e, n.length + 16 + 20 + 8 + 16 + 8 + 8),
            n,
        );
    }
    static trak(e) {
        return (e.duration = e.duration || 0xffffffff), sd.box(sd.types.trak, sd.tkhd(e), sd.mdia(e));
    }
    static trex(e) {
        let t = e.id;
        return sd.box(
            sd.types.trex,
            new Uint8Array([
                0,
                0,
                0,
                0,
                t >> 24,
                (t >> 16) & 255,
                (t >> 8) & 255,
                255 & t,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                1,
            ]),
        );
    }
    static trun(e, t) {
        let n,
            r,
            i,
            s,
            a,
            o,
            l = e.samples || [],
            u = l.length,
            c = 12 + 16 * u,
            d = new Uint8Array(c);
        for (
            t += 8 + c,
                d.set(
                    [
                        +("video" === e.type),
                        0,
                        15,
                        1,
                        (u >>> 24) & 255,
                        (u >>> 16) & 255,
                        (u >>> 8) & 255,
                        255 & u,
                        (t >>> 24) & 255,
                        (t >>> 16) & 255,
                        (t >>> 8) & 255,
                        255 & t,
                    ],
                    0,
                ),
                n = 0;
            n < u;
            n++
        )
            (i = (r = l[n]).duration),
                (s = r.size),
                (a = r.flags),
                (o = r.cts),
                d.set(
                    [
                        (i >>> 24) & 255,
                        (i >>> 16) & 255,
                        (i >>> 8) & 255,
                        255 & i,
                        (s >>> 24) & 255,
                        (s >>> 16) & 255,
                        (s >>> 8) & 255,
                        255 & s,
                        (a.isLeading << 2) | a.dependsOn,
                        (a.isDependedOn << 6) | (a.hasRedundancy << 4) | (a.paddingValue << 1) | a.isNonSync,
                        61440 & a.degradPrio,
                        15 & a.degradPrio,
                        (o >>> 24) & 255,
                        (o >>> 16) & 255,
                        (o >>> 8) & 255,
                        255 & o,
                    ],
                    12 + 16 * n,
                );
        return sd.box(sd.types.trun, d);
    }
    static initSegment(e) {
        sd.types || sd.init();
        let t = sd.moov(e);
        return ey(sd.FTYP, t);
    }
    static hvc1(e) {
        let t = e.params,
            n = [e.vps, e.sps, e.pps],
            r = 4,
            i = new Uint8Array([
                1,
                (t.general_profile_space << 6) | (32 * !!t.general_tier_flag) | t.general_profile_idc,
                t.general_profile_compatibility_flags[0],
                t.general_profile_compatibility_flags[1],
                t.general_profile_compatibility_flags[2],
                t.general_profile_compatibility_flags[3],
                t.general_constraint_indicator_flags[0],
                t.general_constraint_indicator_flags[1],
                t.general_constraint_indicator_flags[2],
                t.general_constraint_indicator_flags[3],
                t.general_constraint_indicator_flags[4],
                t.general_constraint_indicator_flags[5],
                t.general_level_idc,
                240 | (t.min_spatial_segmentation_idc >> 8),
                255 & t.min_spatial_segmentation_idc,
                252 | t.parallelismType,
                252 | t.chroma_format_idc,
                248 | t.bit_depth_luma_minus8,
                248 | t.bit_depth_chroma_minus8,
                0,
                parseInt(t.frame_rate.fps),
                (r - 1) | (t.temporal_id_nested << 2) | (t.num_temporal_layers << 3) | (64 * !!t.frame_rate.fixed),
                n.length,
            ]),
            s = i.length;
        for (let e = 0; e < n.length; e += 1) {
            s += 3;
            for (let t = 0; t < n[e].length; t += 1) s += 2 + n[e][t].length;
        }
        let a = new Uint8Array(s);
        a.set(i, 0), (s = i.length);
        let o = n.length - 1;
        for (let e = 0; e < n.length; e += 1) {
            a.set(new Uint8Array([(32 + e) | (128 * (e === o)), 0, n[e].length]), s), (s += 3);
            for (let t = 0; t < n[e].length; t += 1)
                a.set(new Uint8Array([n[e][t].length >> 8, 255 & n[e][t].length]), s),
                    (s += 2),
                    a.set(n[e][t], s),
                    (s += n[e][t].length);
        }
        let l = sd.box(sd.types.hvcC, a),
            u = e.width,
            c = e.height,
            d = e.pixelRatio[0],
            _ = e.pixelRatio[1];
        return sd.box(
            sd.types.hvc1,
            new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                (u >> 8) & 255,
                255 & u,
                (c >> 8) & 255,
                255 & c,
                0,
                72,
                0,
                0,
                0,
                72,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                18,
                100,
                97,
                105,
                108,
                121,
                109,
                111,
                116,
                105,
                111,
                110,
                47,
                104,
                108,
                115,
                46,
                106,
                115,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                24,
                17,
                17,
            ]),
            l,
            sd.box(sd.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
            sd.box(
                sd.types.pasp,
                new Uint8Array([
                    d >> 24,
                    (d >> 16) & 255,
                    (d >> 8) & 255,
                    255 & d,
                    _ >> 24,
                    (_ >> 16) & 255,
                    (_ >> 8) & 255,
                    255 & _,
                ]),
            ),
        );
    }
}
(sd.types = void 0),
    (sd.HDLR_TYPES = void 0),
    (sd.STTS = void 0),
    (sd.STSC = void 0),
    (sd.STCO = void 0),
    (sd.STSZ = void 0),
    (sd.VMHD = void 0),
    (sd.SMHD = void 0),
    (sd.STSD = void 0),
    (sd.FTYP = void 0),
    (sd.DINF = void 0);
let s_ = 9e4;
function sf(e, t, n = 1, r = !1) {
    let i = e * t * n;
    return r ? Math.round(i) : i;
}
function sh(e, t, n = 1, r = !1) {
    return sf(e, t, 1 / n, r);
}
function sp(e, t = !1) {
    return sf(e, 1e3, 1 / s_, t);
}
function sm(e, t = 1) {
    return sf(e, s_, 1 / t);
}
let sE = 1e4,
    sg = 1024,
    sA = 1152,
    sI = 1536,
    sT = null,
    sS = null;
function sy(e, t, n, r) {
    return {
        duration: t,
        size: n,
        cts: r,
        flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: e ? 2 : 1, isNonSync: +!e },
    };
}
class sv extends R {
    constructor(e, t, n, r) {
        if (
            (super("mp4-remuxer", r),
            (this.observer = void 0),
            (this.config = void 0),
            (this.typeSupported = void 0),
            (this.ISGenerated = !1),
            (this._initPTS = null),
            (this._initDTS = null),
            (this.nextVideoTs = null),
            (this.nextAudioTs = null),
            (this.videoSampleDuration = null),
            (this.isAudioContiguous = !1),
            (this.isVideoContiguous = !1),
            (this.videoTrackConfig = void 0),
            (this.observer = e),
            (this.config = t),
            (this.typeSupported = n),
            (this.ISGenerated = !1),
            null === sT)
        ) {
            const e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            sT = e ? parseInt(e[1]) : 0;
        }
        if (null === sS) {
            const e = navigator.userAgent.match(/Safari\/(\d+)/i);
            sS = e ? parseInt(e[1]) : 0;
        }
    }
    destroy() {
        this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
    }
    resetTimeStamp(e) {
        this.log("initPTS & initDTS reset"), (this._initPTS = this._initDTS = e);
    }
    resetNextTimestamp() {
        this.log("reset next timestamp"), (this.isVideoContiguous = !1), (this.isAudioContiguous = !1);
    }
    resetInitSegment() {
        this.log("ISGenerated flag reset"), (this.ISGenerated = !1), (this.videoTrackConfig = void 0);
    }
    getVideoStartPts(e) {
        let t = !1,
            n = e[0].pts,
            r = e.reduce((e, r) => {
                let i = r.pts,
                    s = i - e;
                return (s < -0x100000000 && ((t = !0), (s = (i = sC(i, n)) - e)), s > 0) ? e : i;
            }, n);
        return t && this.debug("PTS rollover detected"), r;
    }
    remux(e, t, n, r, i, s, a, o) {
        let l,
            u,
            c,
            d,
            _,
            f,
            h = i,
            p = i,
            m = e.pid > -1,
            g = t.pid > -1,
            A = t.samples.length,
            I = e.samples.length > 0,
            T = (a && A > 0) || A > 1;
        if (((!m || I) && (!g || T)) || this.ISGenerated || a) {
            let n;
            if (this.ISGenerated) {
                var S, y, v, C;
                let e = this.videoTrackConfig;
                ((e &&
                    (t.width !== e.width ||
                        t.height !== e.height ||
                        (null == (S = t.pixelRatio) ? void 0 : S[0]) !== (null == (y = e.pixelRatio) ? void 0 : y[0]) ||
                        (null == (v = t.pixelRatio) ? void 0 : v[1]) !==
                            (null == (C = e.pixelRatio) ? void 0 : C[1]))) ||
                    (!e && T) ||
                    (null === this.nextAudioTs && I)) &&
                    this.resetInitSegment();
            }
            this.ISGenerated || (c = this.generateIS(e, t, i, s));
            let r = this.isVideoContiguous,
                a = -1;
            if (T && ((a = sN(t.samples)), !r && this.config.forceKeyFrameOnDiscontinuity))
                if (((f = !0), a > 0)) {
                    this.warn(`Dropped ${a} out of ${A} video samples due to a missing keyframe`);
                    let e = this.getVideoStartPts(t.samples);
                    (t.samples = t.samples.slice(a)),
                        (t.dropped += a),
                        (p += (t.samples[0].pts - e) / t.inputTimeScale),
                        (n = p);
                } else -1 === a && (this.warn(`No keyframe found out of ${A} video samples`), (f = !1));
            if (this.ISGenerated) {
                if (I && T) {
                    let n = this.getVideoStartPts(t.samples),
                        r = (sC(e.samples[0].pts, n) - n) / t.inputTimeScale;
                    (h += Math.max(0, r)), (p += Math.max(0, -r));
                }
                if (I) {
                    if (
                        (e.samplerate ||
                            (this.warn("regenerate InitSegment as audio detected"), (c = this.generateIS(e, t, i, s))),
                        (u = this.remuxAudio(e, h, this.isAudioContiguous, s, g || T || o === E ? p : void 0)),
                        T)
                    ) {
                        let n = u ? u.endPTS - u.startPTS : 0;
                        t.inputTimeScale ||
                            (this.warn("regenerate InitSegment as video detected"), (c = this.generateIS(e, t, i, s))),
                            (l = this.remuxVideo(t, p, r, n));
                    }
                } else T && (l = this.remuxVideo(t, p, r, 0));
                l && ((l.firstKeyFrame = a), (l.independent = -1 !== a), (l.firstKeyFramePTS = n));
            }
        }
        return (
            this.ISGenerated &&
                this._initPTS &&
                this._initDTS &&
                (n.samples.length && (_ = sR(n, i, this._initPTS, this._initDTS)),
                r.samples.length && (d = sb(r, i, this._initPTS))),
            { audio: u, video: l, initSegment: c, independent: f, text: d, id3: _ }
        );
    }
    generateIS(e, t, n, r) {
        let i,
            s,
            a,
            o = e.samples,
            l = t.samples,
            u = this.typeSupported,
            c = {},
            d = this._initPTS,
            _ = !d || r,
            f = "audio/mp4",
            h = -1;
        if ((_ && (i = s = 1 / 0), e.config && o.length)) {
            switch (((e.timescale = e.samplerate), e.segmentCodec)) {
                case "mp3":
                    u.mpeg ? ((f = "audio/mpeg"), (e.codec = "")) : u.mp3 && (e.codec = "mp3");
                    break;
                case "ac3":
                    e.codec = "ac-3";
            }
            (c.audio = {
                id: "audio",
                container: f,
                codec: e.codec,
                initSegment: "mp3" === e.segmentCodec && u.mpeg ? new Uint8Array(0) : sd.initSegment([e]),
                metadata: { channelCount: e.channelCount },
            }),
                _ &&
                    ((h = e.id),
                    (a = e.inputTimeScale),
                    d && a === d.timescale ? (_ = !1) : (i = s = o[0].pts - Math.round(a * n)));
        }
        if (t.sps && t.pps && l.length) {
            if (
                ((t.timescale = t.inputTimeScale),
                (c.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: t.codec,
                    initSegment: sd.initSegment([t]),
                    metadata: { width: t.width, height: t.height },
                }),
                _)
            )
                if (((h = t.id), (a = t.inputTimeScale), d && a === d.timescale)) _ = !1;
                else {
                    let e = this.getVideoStartPts(l),
                        t = Math.round(a * n);
                    (s = Math.min(s, sC(l[0].dts, e) - t)), (i = Math.min(i, e - t));
                }
            this.videoTrackConfig = { width: t.width, height: t.height, pixelRatio: t.pixelRatio };
        }
        if (Object.keys(c).length)
            return (
                (this.ISGenerated = !0),
                _
                    ? (d &&
                          this.warn(
                              `Timestamps at playlist time: ${r ? "" : "~"}${n} ${i / a} != initPTS: ${d.baseTime / d.timescale} (${d.baseTime}/${d.timescale}) trackId: ${d.trackId}`,
                          ),
                      this.log(`Found initPTS at playlist time: ${n} offset: ${i / a} (${i}/${a}) trackId: ${h}`),
                      (this._initPTS = { baseTime: i, timescale: a, trackId: h }),
                      (this._initDTS = { baseTime: s, timescale: a, trackId: h }))
                    : (i = a = void 0),
                { tracks: c, initPTS: i, timescale: a, trackId: h }
            );
    }
    remuxVideo(e, t, n, r) {
        let i,
            s,
            a,
            c = e.inputTimeScale,
            d = e.samples,
            _ = [],
            f = d.length,
            h = this._initPTS,
            p = (h.baseTime * c) / h.timescale,
            m = this.nextVideoTs,
            E = 8,
            g = this.videoSampleDuration,
            A = 1 / 0,
            I = -1 / 0,
            T = !1;
        if (!n || null === m) {
            let e = p + t * c,
                r = d[0].pts - sC(d[0].dts, d[0].pts);
            sT && null !== m && 15e3 > Math.abs(e - r - (m + p)) ? (n = !0) : (m = e - r - p);
        }
        let y = m + p;
        for (let e = 0; e < f; e++) {
            let t = d[e];
            (t.pts = sC(t.pts, y)), (t.dts = sC(t.dts, y)), t.dts < d[e > 0 ? e - 1 : e].dts && (T = !0);
        }
        T &&
            d.sort(function (e, t) {
                let n = e.dts - t.dts,
                    r = e.pts - t.pts;
                return n || r;
            }),
            (i = d[0].dts);
        let v = (s = d[d.length - 1].dts) - i,
            C = v ? Math.round(v / (f - 1)) : g || e.inputTimeScale / 30;
        if (n) {
            let n = i - y,
                r = n > C,
                s = n < -1;
            if (
                (r || s) &&
                (r
                    ? this.warn(
                          `${(e.segmentCodec || "").toUpperCase()}: ${sp(n, !0)} ms (${n}dts) hole between fragments detected at ${t.toFixed(3)}`,
                      )
                    : this.warn(
                          `${(e.segmentCodec || "").toUpperCase()}: ${sp(-n, !0)} ms (${n}dts) overlapping between fragments detected at ${t.toFixed(3)}`,
                      ),
                !s || y >= d[0].pts || sT)
            ) {
                i = y;
                let e = d[0].pts - n;
                if (r) (d[0].dts = i), (d[0].pts = e);
                else {
                    let t = !0;
                    for (let r = 0; r < d.length && (!(d[r].dts > e) || !t); r++) {
                        let e = d[r].pts;
                        if (((d[r].dts -= n), (d[r].pts -= n), r < d.length - 1)) {
                            let n = d[r + 1].pts;
                            t = n <= d[r].pts == n <= e;
                        }
                    }
                }
                this.log(`Video: Initial PTS/DTS adjusted: ${sp(e, !0)}/${sp(i, !0)}, delta: ${sp(n, !0)} ms`);
            }
        }
        let N = 0,
            R = 0,
            b = (i = Math.max(0, i));
        for (let e = 0; e < f; e++) {
            let t = d[e],
                n = t.units,
                r = n.length,
                i = 0;
            for (let e = 0; e < r; e++) i += n[e].data.length;
            (R += i),
                (N += r),
                (t.length = i),
                t.dts < b ? ((t.dts = b), (b += (C / 4) | 0 || 1)) : (b = t.dts),
                (A = Math.min(t.pts, A)),
                (I = Math.max(t.pts, I));
        }
        s = d[f - 1].dts;
        let O = R + 4 * N + 8;
        try {
            a = new Uint8Array(O);
        } catch (e) {
            this.observer.emit(u.ERROR, u.ERROR, {
                type: o.MUX_ERROR,
                details: l.REMUX_ALLOC_ERROR,
                fatal: !1,
                error: e,
                bytes: O,
                reason: `fail allocating video mdat ${O}`,
            });
            return;
        }
        let D = new DataView(a.buffer);
        D.setUint32(0, O), a.set(sd.types.mdat, 4);
        let L = !1,
            w = 1 / 0,
            M = 1 / 0,
            x = -1 / 0,
            P = -1 / 0;
        for (let e = 0; e < f; e++) {
            let t,
                n = d[e],
                i = n.units,
                s = 0;
            for (let e = 0, t = i.length; e < t; e++) {
                let t = i[e],
                    n = t.data,
                    r = t.data.byteLength;
                D.setUint32(E, r), (E += 4), a.set(n, E), (E += r), (s += 4 + r);
            }
            if (e < f - 1) (g = d[e + 1].dts - n.dts), (t = d[e + 1].pts - n.pts);
            else {
                let i = this.config,
                    s = e > 0 ? n.dts - d[e - 1].dts : C;
                if (((t = e > 0 ? n.pts - d[e - 1].pts : C), i.stretchShortVideoTrack && null !== this.nextAudioTs)) {
                    let e = Math.floor(i.maxBufferHole * c),
                        t = (r ? A + r * c : this.nextAudioTs + p) - n.pts;
                    t > e
                        ? ((g = t - s) < 0 ? (g = s) : (L = !0),
                          this.log(
                              `It is approximately ${t / 90} ms to the next segment; using duration ${g / 90} ms for the last video frame.`,
                          ))
                        : (g = s);
                } else g = s;
            }
            let o = Math.round(n.pts - n.dts);
            (w = Math.min(w, g)),
                (x = Math.max(x, g)),
                (M = Math.min(M, t)),
                (P = Math.max(P, t)),
                _.push(sy(n.key, g, s, o));
        }
        if (_.length) {
            if (sT) {
                if (sT < 70) {
                    let e = _[0].flags;
                    (e.dependsOn = 2), (e.isNonSync = 0);
                }
            } else if (sS && P - M < x - w && C / x < 0.025 && 0 === _[0].cts) {
                this.warn(
                    "Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.",
                );
                let e = i;
                for (let t = 0, n = _.length; t < n; t++) {
                    let r = e + _[t].duration,
                        i = e + _[t].cts;
                    if (t < n - 1) {
                        let e = r + _[t + 1].cts;
                        _[t].duration = e - i;
                    } else _[t].duration = t ? _[t - 1].duration : C;
                    (_[t].cts = 0), (e = r);
                }
            }
        }
        let k = s + (g = L || !g ? C : g);
        (this.nextVideoTs = m = k - p), (this.videoSampleDuration = g), (this.isVideoContiguous = !0);
        let U = {
            data1: sd.moof(e.sequenceNumber++, i, S(e, { samples: _ })),
            data2: a,
            startPTS: (A - p) / c,
            endPTS: (I + g - p) / c,
            startDTS: (i - p) / c,
            endDTS: m / c,
            type: "video",
            hasAudio: !1,
            hasVideo: !0,
            nb: _.length,
            dropped: e.dropped,
        };
        return (e.samples = []), (e.dropped = 0), U;
    }
    getSamplesPerFrame(e) {
        switch (e.segmentCodec) {
            case "mp3":
                return sA;
            case "ac3":
                return sI;
            default:
                return sg;
        }
    }
    remuxAudio(e, t, n, r, i) {
        let s,
            a = e.inputTimeScale,
            c = e.samplerate ? e.samplerate : a,
            d = a / c,
            _ = this.getSamplesPerFrame(e),
            f = _ * d,
            h = this._initPTS,
            p = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
            m = [],
            E = void 0 !== i,
            g = e.samples,
            A = 8 * !p,
            I = this.nextAudioTs || -1,
            T = (h.baseTime * a) / h.timescale,
            y = T + t * a;
        if (
            ((this.isAudioContiguous = n =
                n ||
                (g.length &&
                    I > 0 &&
                    ((r && 9e3 > Math.abs(y - (I + T))) || Math.abs(sC(g[0].pts, y) - (I + T)) < 20 * f))),
            g.forEach(function (e) {
                e.pts = sC(e.pts, y);
            }),
            !n || I < 0)
        ) {
            if (!(g = g.filter((e) => e.pts >= 0)).length) return;
            I = 0 === i ? 0 : r && !E ? Math.max(0, y - T) : g[0].pts - T;
        }
        if ("aac" === e.segmentCodec) {
            let t = this.config.maxAudioFramesDrift;
            for (let n = 0, r = I + T; n < g.length; n++) {
                let i = g[n],
                    s = i.pts,
                    o = s - r,
                    l = Math.abs((1e3 * o) / a);
                if (o <= -t * f && E)
                    0 === n &&
                        (this.warn(
                            `Audio frame @ ${(s / a).toFixed(3)}s overlaps marker by ${Math.round((1e3 * o) / a)} ms.`,
                        ),
                        (this.nextAudioTs = I = s - T),
                        (r = s));
                else if (o >= t * f && l < sE && E) {
                    let t = Math.round(o / f);
                    for (r = s - t * f; r < 0 && t && f; ) t--, (r += f);
                    0 === n && (this.nextAudioTs = I = r - T),
                        this.warn(
                            `Injecting ${t} audio frames @ ${((r - T) / a).toFixed(3)}s due to ${Math.round((1e3 * o) / a)} ms gap.`,
                        );
                    for (let s = 0; s < t; s++) {
                        let t = su.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
                        t ||
                            (this.log(
                                "Unable to get silent frame for given audio codec; duplicating last frame instead.",
                            ),
                            (t = i.unit.subarray())),
                            g.splice(n, 0, { unit: t, pts: r }),
                            (r += f),
                            n++;
                    }
                }
                (i.pts = r), (r += f);
            }
        }
        let v = null,
            C = null,
            N = 0,
            R = g.length;
        for (; R--; ) N += g[R].unit.byteLength;
        for (let t = 0, r = g.length; t < r; t++) {
            let r = g[t],
                i = r.unit,
                a = r.pts;
            if (null !== C) m[t - 1].duration = Math.round((a - C) / d);
            else {
                if ((n && "aac" === e.segmentCodec && (a = I + T), (v = a), !(N > 0))) return;
                N += A;
                try {
                    s = new Uint8Array(N);
                } catch (e) {
                    this.observer.emit(u.ERROR, u.ERROR, {
                        type: o.MUX_ERROR,
                        details: l.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        error: e,
                        bytes: N,
                        reason: `fail allocating audio mdat ${N}`,
                    });
                    return;
                }
                p || (new DataView(s.buffer).setUint32(0, N), s.set(sd.types.mdat, 4));
            }
            s.set(i, A);
            let c = i.byteLength;
            (A += c), m.push(sy(!0, _, c, 0)), (C = a);
        }
        let b = m.length;
        if (!b) return;
        let O = m[m.length - 1];
        (I = C - T), (this.nextAudioTs = I + d * O.duration);
        let D = p ? new Uint8Array(0) : sd.moof(e.sequenceNumber++, v / d, S({}, e, { samples: m }));
        e.samples = [];
        let L = (v - T) / a,
            w = I / a,
            M = {
                data1: D,
                data2: s,
                startPTS: L,
                endPTS: w,
                startDTS: L,
                endDTS: w,
                type: "audio",
                hasAudio: !0,
                hasVideo: !1,
                nb: b,
            };
        return (this.isAudioContiguous = !0), M;
    }
}
function sC(e, t) {
    let n;
    if (null === t) return e;
    for (n = t < e ? -0x200000000 : 0x200000000; Math.abs(e - t) > 0x100000000; ) e += n;
    return e;
}
function sN(e) {
    for (let t = 0; t < e.length; t++) if (e[t].key) return t;
    return -1;
}
function sR(e, t, n, r) {
    let i = e.samples.length;
    if (!i) return;
    let s = e.inputTimeScale;
    for (let a = 0; a < i; a++) {
        let i = e.samples[a];
        (i.pts = sC(i.pts - (n.baseTime * s) / n.timescale, t * s) / s),
            (i.dts = sC(i.dts - (r.baseTime * s) / r.timescale, t * s) / s);
    }
    let a = e.samples;
    return (e.samples = []), { samples: a };
}
function sb(e, t, n) {
    let r = e.samples.length;
    if (!r) return;
    let i = e.inputTimeScale;
    for (let s = 0; s < r; s++) {
        let r = e.samples[s];
        r.pts = sC(r.pts - (n.baseTime * i) / n.timescale, t * i) / i;
    }
    e.samples.sort((e, t) => e.pts - t.pts);
    let s = e.samples;
    return (e.samples = []), { samples: s };
}
class sO extends R {
    constructor(e, t, n, r) {
        super("passthrough-remuxer", r),
            (this.emitInitSegment = !1),
            (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initData = void 0),
            (this.initPTS = null),
            (this.initTracks = void 0),
            (this.lastEndTime = null),
            (this.isVideoContiguous = !1);
    }
    destroy() {}
    resetTimeStamp(e) {
        this.lastEndTime = null;
        let t = this.initPTS;
        (t && e && t.baseTime === e.baseTime && t.timescale === e.timescale) || (this.initPTS = e);
    }
    resetNextTimestamp() {
        (this.isVideoContiguous = !1), (this.lastEndTime = null);
    }
    resetInitSegment(e, t, n, r) {
        (this.audioCodec = t), (this.videoCodec = n), this.generateInitSegment(e, r), (this.emitInitSegment = !0);
    }
    generateInitSegment(e, t) {
        let { audioCodec: n, videoCodec: r } = this;
        if (!(null != e && e.byteLength)) {
            (this.initTracks = void 0), (this.initData = void 0);
            return;
        }
        let { audio: i, video: s } = (this.initData = e_(e));
        if (t) eA(e, t);
        else {
            let e = i || s;
            null != e && e.encrypted && this.warn(`Init segment with encrypted track with has no key ("${e.codec}")!`);
        }
        i && (n = sw(i, K, this)), s && (r = sw(s, $, this));
        let a = {};
        i && s
            ? (a.audiovideo = {
                  container: "video/mp4",
                  codec: n + "," + r,
                  supplemental: s.supplemental,
                  encrypted: s.encrypted,
                  initSegment: e,
                  id: "main",
              })
            : i
              ? (a.audio = { container: "audio/mp4", codec: n, encrypted: i.encrypted, initSegment: e, id: "audio" })
              : s
                ? (a.video = {
                      container: "video/mp4",
                      codec: r,
                      supplemental: s.supplemental,
                      encrypted: s.encrypted,
                      initSegment: e,
                      id: "main",
                  })
                : this.warn("initSegment does not contain moov or trak boxes."),
            (this.initTracks = a);
    }
    remux(e, t, n, r, s, a) {
        var o, l;
        let { initPTS: u, lastEndTime: c } = this,
            d = { audio: void 0, video: void 0, text: r, id3: n, initSegment: void 0 };
        i(c) || (c = this.lastEndTime = s || 0);
        let _ = t.samples;
        if (!_.length) return d;
        let f = { initPTS: void 0, timescale: void 0, trackId: void 0 },
            h = this.initData;
        if (
            ((null != (o = h) && o.length) || (this.generateInitSegment(_), (h = this.initData)),
            !(null != (l = h) && l.length))
        )
            return this.warn("Failed to generate initSegment."), d;
        this.emitInitSegment && ((f.tracks = this.initTracks), (this.emitInitSegment = !1));
        let p = eT(_, h, this),
            m = h.audio ? p[h.audio.id] : null,
            E = h.video ? p[h.video.id] : null,
            g = sD(E, 1 / 0),
            A = sD(m, 1 / 0),
            I = sD(E, 0, !0),
            T = sD(m, 0, !0),
            S = s,
            y = 0,
            v = m && (!E || (!u && A < g) || (u && u.trackId === h.audio.id)),
            C = v ? m : E;
        if (C) {
            let e = C.timescale,
                t = C.start - s * e,
                n = v ? h.audio.id : h.video.id;
            (S = C.start / e),
                (y = v ? T - A : I - g),
                (a || !u) &&
                    (sL(u, S, s, y) || e !== u.timescale) &&
                    (u &&
                        this.warn(
                            `Timestamps at playlist time: ${a ? "" : "~"}${s} ${t / e} != initPTS: ${u.baseTime / u.timescale} (${u.baseTime}/${u.timescale}) trackId: ${u.trackId}`,
                        ),
                    this.log(`Found initPTS at playlist time: ${s} offset: ${S - s} (${t}/${e}) trackId: ${n}`),
                    (u = null),
                    (f.initPTS = t),
                    (f.timescale = e),
                    (f.trackId = n));
        } else this.warn(`No audio or video samples found for initPTS at playlist time: ${s}`);
        u
            ? ((f.initPTS = u.baseTime), (f.timescale = u.timescale), (f.trackId = u.trackId))
            : ((f.timescale && void 0 !== f.trackId && void 0 !== f.initPTS) ||
                  (this.warn("Could not set initPTS"), (f.initPTS = S), (f.timescale = 1), (f.trackId = -1)),
              (this.initPTS = u = { baseTime: f.initPTS, timescale: f.timescale, trackId: f.trackId }));
        let N = S - u.baseTime / u.timescale,
            R = N + y;
        y > 0
            ? (this.lastEndTime = R)
            : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
        let b = !!h.audio,
            O = !!h.video,
            D = "";
        b && (D += "audio"), O && (D += "video");
        let L = {
            data1: _,
            startPTS: N,
            startDTS: N,
            endPTS: R,
            endDTS: R,
            type: D,
            hasAudio: b,
            hasVideo: O,
            nb: 1,
            dropped: 0,
            encrypted: (!!h.audio && h.audio.encrypted) || (!!h.video && h.video.encrypted),
        };
        (d.audio = b && !O ? L : void 0), (d.video = O ? L : void 0);
        let w = null == E ? void 0 : E.sampleCount;
        if (w) {
            let e = E.keyFrameIndex,
                t = -1 !== e;
            (L.nb = w),
                (L.dropped = 0 === e || this.isVideoContiguous ? 0 : t ? e : w),
                (L.independent = t),
                (L.firstKeyFrame = e),
                t && E.keyFrameStart && (L.firstKeyFramePTS = (E.keyFrameStart - u.baseTime) / u.timescale),
                this.isVideoContiguous || (d.independent = t),
                this.isVideoContiguous || (this.isVideoContiguous = t),
                L.dropped &&
                    this.warn(
                        `fmp4 does not start with IDR: firstIDR ${e}/${w} dropped: ${L.dropped} start: ${L.firstKeyFramePTS || "NA"}`,
                    );
        }
        return (d.initSegment = f), (d.id3 = sR(n, s, u, u)), r.samples.length && (d.text = sb(r, s, u)), d;
    }
}
function sD(e, t, n = !1) {
    return (null == e ? void 0 : e.start) !== void 0 ? (e.start + (n ? e.duration : 0)) / e.timescale : t;
}
function sL(e, t, n, r) {
    if (null === e) return !0;
    let i = Math.max(r, 1);
    return Math.abs(t - e.baseTime / e.timescale - n) > i;
}
function sw(e, t, n) {
    let r = e.codec;
    return r && r.length > 4
        ? r
        : t === K
          ? "ec-3" === r || "ac-3" === r || "alac" === r
              ? r
              : "fLaC" === r || "Opus" === r
                ? eW(r, !1)
                : (n.warn(`Unhandled audio codec "${r}" in mp4 MAP`), r || "mp4a")
          : (n.warn(`Unhandled video codec "${r}" in mp4 MAP`), r || "avc1");
}
try {
    r = self.performance.now.bind(self.performance);
} catch (e) {
    r = Date.now;
}
let sM = [
    { demux: i6, remux: sO },
    { demux: sn, remux: sv },
    { demux: iQ, remux: sv },
    { demux: i2, remux: sv },
];
sM.splice(2, 0, { demux: i0, remux: sv });
class sx {
    constructor(e, t, n, r, i, s) {
        (this.asyncResult = !1),
            (this.logger = void 0),
            (this.observer = void 0),
            (this.typeSupported = void 0),
            (this.config = void 0),
            (this.id = void 0),
            (this.demuxer = void 0),
            (this.remuxer = void 0),
            (this.decrypter = void 0),
            (this.probe = void 0),
            (this.decryptionPromise = null),
            (this.transmuxConfig = void 0),
            (this.currentTransmuxState = void 0),
            (this.observer = e),
            (this.typeSupported = t),
            (this.config = n),
            (this.id = i),
            (this.logger = s);
    }
    configure(e) {
        (this.transmuxConfig = e), this.decrypter && this.decrypter.reset();
    }
    push(e, t, n, i) {
        let s = n.transmuxing;
        s.executeStart = r();
        let a = new Uint8Array(e),
            { currentTransmuxState: c, transmuxConfig: d } = this;
        i && (this.currentTransmuxState = i);
        let {
                contiguous: _,
                discontinuity: f,
                trackSwitch: h,
                accurateTimeOffset: p,
                timeOffset: m,
                initSegmentChange: E,
            } = i || c,
            { audioCodec: g, videoCodec: A, defaultInitPts: I, duration: T, initSegmentData: S } = d,
            y = sP(a, t);
        if (y && nx(y.method)) {
            let e = this.getDecrypter(),
                t = nP(y.method);
            if (!e.isSync())
                return (
                    (this.asyncResult = !0),
                    (this.decryptionPromise = e.webCryptoDecrypt(a, y.key.buffer, y.iv.buffer, t).then((e) => {
                        let t = this.push(e, null, n);
                        return (this.decryptionPromise = null), t;
                    })),
                    this.decryptionPromise
                );
            {
                let i = e.softwareDecrypt(a, y.key.buffer, y.iv.buffer, t);
                if (n.part > -1) {
                    let t = e.flush();
                    i = t ? t.buffer : t;
                }
                if (!i) return (s.executeEnd = r()), sk(n);
                a = new Uint8Array(i);
            }
        }
        let v = this.needsProbing(f, h);
        if (v) {
            let e = this.configureTransmuxer(a);
            if (e)
                return (
                    this.logger.warn(`[transmuxer] ${e.message}`),
                    this.observer.emit(u.ERROR, u.ERROR, {
                        type: o.MEDIA_ERROR,
                        details: l.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: e,
                        reason: e.message,
                    }),
                    (s.executeEnd = r()),
                    sk(n)
                );
        }
        (f || h || E || v) && this.resetInitSegment(S, g, A, T, t),
            (f || E || v) && this.resetInitialTimestamp(I),
            _ || this.resetContiguity();
        let C = this.transmux(a, y, m, p, n);
        this.asyncResult = sU(C);
        let N = this.currentTransmuxState;
        return (N.contiguous = !0), (N.discontinuity = !1), (N.trackSwitch = !1), (s.executeEnd = r()), C;
    }
    flush(e) {
        let t = e.transmuxing;
        t.executeStart = r();
        let { decrypter: n, currentTransmuxState: i, decryptionPromise: s } = this;
        if (s) return (this.asyncResult = !0), s.then(() => this.flush(e));
        let a = [],
            { timeOffset: o } = i;
        if (n) {
            let t = n.flush();
            t && a.push(this.push(t.buffer, null, e));
        }
        let { demuxer: l, remuxer: u } = this;
        if (!l || !u) {
            t.executeEnd = r();
            let n = [sk(e)];
            return this.asyncResult ? Promise.resolve(n) : n;
        }
        let c = l.flush(o);
        return sU(c)
            ? ((this.asyncResult = !0), c.then((t) => (this.flushRemux(a, t, e), a)))
            : (this.flushRemux(a, c, e), this.asyncResult)
              ? Promise.resolve(a)
              : a;
    }
    flushRemux(e, t, n) {
        let { audioTrack: i, videoTrack: s, id3Track: a, textTrack: o } = t,
            { accurateTimeOffset: l, timeOffset: u } = this.currentTransmuxState;
        this.logger.log(
            `[transmuxer.ts]: Flushed ${this.id} sn: ${n.sn}${n.part > -1 ? " part: " + n.part : ""} of ${this.id === m ? "level" : "track"} ${n.level}`,
        );
        let c = this.remuxer.remux(i, s, a, o, u, l, !0, this.id);
        e.push({ remuxResult: c, chunkMeta: n }), (n.transmuxing.executeEnd = r());
    }
    resetInitialTimestamp(e) {
        let { demuxer: t, remuxer: n } = this;
        t && n && (t.resetTimeStamp(e), n.resetTimeStamp(e));
    }
    resetContiguity() {
        let { demuxer: e, remuxer: t } = this;
        e && t && (e.resetContiguity(), t.resetNextTimestamp());
    }
    resetInitSegment(e, t, n, r, i) {
        let { demuxer: s, remuxer: a } = this;
        s && a && (s.resetInitSegment(e, t, n, r), a.resetInitSegment(e, t, n, i));
    }
    destroy() {
        this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
            this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
    }
    transmux(e, t, n, r, i) {
        let s;
        return t && "SAMPLE-AES" === t.method
            ? this.transmuxSampleAes(e, t, n, r, i)
            : this.transmuxUnencrypted(e, n, r, i);
    }
    transmuxUnencrypted(e, t, n, r) {
        let {
            audioTrack: i,
            videoTrack: s,
            id3Track: a,
            textTrack: o,
        } = this.demuxer.demux(e, t, !1, !this.config.progressive);
        return { remuxResult: this.remuxer.remux(i, s, a, o, t, n, !1, this.id), chunkMeta: r };
    }
    transmuxSampleAes(e, t, n, r, i) {
        return this.demuxer
            .demuxSampleAes(e, t, n)
            .then((e) => ({
                remuxResult: this.remuxer.remux(e.audioTrack, e.videoTrack, e.id3Track, e.textTrack, n, r, !1, this.id),
                chunkMeta: i,
            }));
    }
    configureTransmuxer(e) {
        let t,
            { config: n, observer: r, typeSupported: i } = this;
        for (let n = 0, r = sM.length; n < r; n++) {
            var s;
            if (null != (s = sM[n].demux) && s.probe(e, this.logger)) {
                t = sM[n];
                break;
            }
        }
        if (!t) return Error("Failed to find demuxer by probing fragment data");
        let a = this.demuxer,
            o = this.remuxer,
            l = t.remux,
            u = t.demux;
        (o && o instanceof l) || (this.remuxer = new l(r, n, i, this.logger)),
            (a && a instanceof u) || ((this.demuxer = new u(r, n, i, this.logger)), (this.probe = u.probe));
    }
    needsProbing(e, t) {
        return !this.demuxer || !this.remuxer || e || t;
    }
    getDecrypter() {
        let e = this.decrypter;
        return e || (e = this.decrypter = new na(this.config)), e;
    }
}
function sP(e, t) {
    let n = null;
    return e.byteLength > 0 && (null == t ? void 0 : t.key) != null && null !== t.iv && null != t.method && (n = t), n;
}
let sk = (e) => ({ remuxResult: {}, chunkMeta: e });
function sU(e) {
    return "then" in e && e.then instanceof Function;
}
class sG {
    constructor(e, t, n, r, i) {
        (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initSegmentData = void 0),
            (this.duration = void 0),
            (this.defaultInitPts = void 0),
            (this.audioCodec = e),
            (this.videoCodec = t),
            (this.initSegmentData = n),
            (this.duration = r),
            (this.defaultInitPts = i || null);
    }
}
class sF {
    constructor(e, t, n, r, i, s) {
        (this.discontinuity = void 0),
            (this.contiguous = void 0),
            (this.accurateTimeOffset = void 0),
            (this.trackSwitch = void 0),
            (this.timeOffset = void 0),
            (this.initSegmentChange = void 0),
            (this.discontinuity = e),
            (this.contiguous = t),
            (this.accurateTimeOffset = n),
            (this.trackSwitch = r),
            (this.timeOffset = i),
            (this.initSegmentChange = s);
    }
}
let sB = 0;
class sV {
    constructor(e, t, n, r) {
        (this.error = null),
            (this.hls = void 0),
            (this.id = void 0),
            (this.instanceNo = sB++),
            (this.observer = void 0),
            (this.frag = null),
            (this.part = null),
            (this.useWorker = void 0),
            (this.workerContext = null),
            (this.transmuxer = null),
            (this.onTransmuxComplete = void 0),
            (this.onFlush = void 0),
            (this.onWorkerMessage = (e) => {
                let t = e.data,
                    n = this.hls;
                if (n && null != t && t.event && t.instanceNo === this.instanceNo)
                    switch (t.event) {
                        case "init": {
                            var r;
                            let e = null == (r = this.workerContext) ? void 0 : r.objectURL;
                            e && self.URL.revokeObjectURL(e);
                            break;
                        }
                        case "transmuxComplete":
                            this.handleTransmuxComplete(t.data);
                            break;
                        case "flush":
                            this.onFlush(t.data);
                            break;
                        case "workerLog":
                            n.logger[t.data.logType] && n.logger[t.data.logType](t.data.message);
                            break;
                        default:
                            (t.data = t.data || {}),
                                (t.data.frag = this.frag),
                                (t.data.part = this.part),
                                (t.data.id = this.id),
                                n.trigger(t.event, t.data);
                    }
            }),
            (this.onWorkerError = (e) => {
                if (!this.hls) return;
                let t = Error(`${e.message}  (${e.filename}:${e.lineno})`);
                (this.hls.config.enableWorker = !1),
                    this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`),
                    this.hls.trigger(u.ERROR, {
                        type: o.OTHER_ERROR,
                        details: l.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: "demuxerWorker",
                        error: t,
                    });
            });
        const i = e.config;
        (this.hls = e),
            (this.id = t),
            (this.useWorker = !!i.enableWorker),
            (this.onTransmuxComplete = n),
            (this.onFlush = r);
        const s = (e, t) => {
            ((t = t || {}).frag = this.frag || void 0),
                e === u.ERROR && ((t.parent = this.id), (t.part = this.part), (this.error = t.error)),
                this.hls.trigger(e, t);
        };
        (this.observer = new r6()), this.observer.on(u.FRAG_DECRYPTED, s), this.observer.on(u.ERROR, s);
        const a = eX(i.preferManagedMediaSource);
        if (this.useWorker && "u" > typeof Worker) {
            const n = this.hls.logger;
            if (i.workerPath || r7()) {
                try {
                    i.workerPath
                        ? (n.log(`loading Web Worker ${i.workerPath} for "${t}"`),
                          (this.workerContext = r9(i.workerPath)))
                        : (n.log(`injecting Web Worker for "${t}"`), (this.workerContext = r8()));
                    const { worker: e } = this.workerContext;
                    e.addEventListener("message", this.onWorkerMessage),
                        e.addEventListener("error", this.onWorkerError),
                        e.postMessage({
                            instanceNo: this.instanceNo,
                            cmd: "init",
                            typeSupported: a,
                            id: t,
                            config: tf(i),
                        });
                } catch (r) {
                    n.warn(`Error setting up "${t}" Web Worker, fallback to inline`, r),
                        this.terminateWorker(),
                        (this.error = null),
                        (this.transmuxer = new sx(this.observer, a, i, "", t, e.logger));
                }
                return;
            }
        }
        this.transmuxer = new sx(this.observer, a, i, "", t, e.logger);
    }
    reset() {
        if (((this.frag = null), (this.part = null), this.workerContext)) {
            let e = this.instanceNo;
            this.instanceNo = sB++;
            let t = this.hls.config,
                n = eX(t.preferManagedMediaSource);
            this.workerContext.worker.postMessage({
                instanceNo: this.instanceNo,
                cmd: "reset",
                resetNo: e,
                typeSupported: n,
                id: this.id,
                config: tf(t),
            });
        }
    }
    terminateWorker() {
        if (this.workerContext) {
            let { worker: e } = this.workerContext;
            (this.workerContext = null),
                e.removeEventListener("message", this.onWorkerMessage),
                e.removeEventListener("error", this.onWorkerError),
                ie(this.hls.config.workerPath);
        }
    }
    destroy() {
        if (this.workerContext) this.terminateWorker(), (this.onWorkerMessage = this.onWorkerError = null);
        else {
            let e = this.transmuxer;
            e && (e.destroy(), (this.transmuxer = null));
        }
        let e = this.observer;
        e && e.removeAllListeners(), (this.frag = null), (this.part = null), (this.observer = null), (this.hls = null);
    }
    push(e, t, n, r, i, s, a, o, l, u) {
        var c, d;
        l.transmuxing.start = self.performance.now();
        let { instanceNo: _, transmuxer: f } = this,
            h = s ? s.start : i.start,
            p = i.decryptdata,
            E = this.frag,
            g = !(E && i.cc === E.cc),
            A = !(E && l.level === E.level),
            I = E ? l.sn - E.sn : -1,
            T = this.part ? l.part - this.part.index : -1,
            S = 0 === I && l.id > 1 && l.id === (null == E ? void 0 : E.stats.chunkCount),
            y = !A && (1 === I || (0 === I && (1 === T || (S && T <= 0)))),
            v = self.performance.now();
        (A || I || 0 === i.stats.parsing.start) && (i.stats.parsing.start = v),
            s && (T || !y) && (s.stats.parsing.start = v);
        let C = !(
                E && (null == (c = i.initSegment) ? void 0 : c.url) === (null == (d = E.initSegment) ? void 0 : d.url)
            ),
            N = new sF(g, y, o, A, h, C);
        if (!y || g || C) {
            this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${i.type} sn: ${l.sn}${l.part > -1 ? " part: " + l.part : ""} ${this.id === m ? "level" : "track"}: ${l.level} id: ${l.id}
        discontinuity: ${g}
        trackSwitch: ${A}
        contiguous: ${y}
        accurateTimeOffset: ${o}
        timeOffset: ${h}
        initSegmentChange: ${C}`);
            let e = new sG(n, r, t, a, u);
            this.configureTransmuxer(e);
        }
        if (((this.frag = i), (this.part = s), this.workerContext))
            this.workerContext.worker.postMessage(
                { instanceNo: _, cmd: "demux", data: e, decryptdata: p, chunkMeta: l, state: N },
                e instanceof ArrayBuffer ? [e] : [],
            );
        else if (f) {
            let t = f.push(e, p, l, N);
            sU(t)
                ? t
                      .then((e) => {
                          this.handleTransmuxComplete(e);
                      })
                      .catch((e) => {
                          this.transmuxerError(e, l, "transmuxer-interface push error");
                      })
                : this.handleTransmuxComplete(t);
        }
    }
    flush(e) {
        e.transmuxing.start = self.performance.now();
        let { instanceNo: t, transmuxer: n } = this;
        if (this.workerContext) this.workerContext.worker.postMessage({ instanceNo: t, cmd: "flush", chunkMeta: e });
        else if (n) {
            let t = n.flush(e);
            sU(t)
                ? t
                      .then((t) => {
                          this.handleFlushResult(t, e);
                      })
                      .catch((t) => {
                          this.transmuxerError(t, e, "transmuxer-interface flush error");
                      })
                : this.handleFlushResult(t, e);
        }
    }
    transmuxerError(e, t, n) {
        this.hls &&
            ((this.error = e),
            this.hls.trigger(u.ERROR, {
                type: o.MEDIA_ERROR,
                details: l.FRAG_PARSING_ERROR,
                chunkMeta: t,
                frag: this.frag || void 0,
                part: this.part || void 0,
                fatal: !1,
                error: e,
                err: e,
                reason: n,
            }));
    }
    handleFlushResult(e, t) {
        e.forEach((e) => {
            this.handleTransmuxComplete(e);
        }),
            this.onFlush(t);
    }
    configureTransmuxer(e) {
        let { instanceNo: t, transmuxer: n } = this;
        this.workerContext
            ? this.workerContext.worker.postMessage({ instanceNo: t, cmd: "configure", config: e })
            : n && n.configure(e);
    }
    handleTransmuxComplete(e) {
        (e.chunkMeta.transmuxing.end = self.performance.now()), this.onTransmuxComplete(e);
    }
}
let sH = 100;
class sj extends rJ {
    constructor(e, t, n) {
        super(e, t, n, "audio-stream-controller", E),
            (this.mainAnchor = null),
            (this.mainFragLoading = null),
            (this.audioOnly = !1),
            (this.bufferedTrack = null),
            (this.switchingTrack = null),
            (this.trackId = -1),
            (this.waitingData = null),
            (this.mainDetails = null),
            (this.flushing = !1),
            (this.bufferFlushed = !1),
            (this.cachedTrackLoadedData = null),
            this.registerListeners();
    }
    onHandlerDestroying() {
        this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem();
    }
    resetItem() {
        this.mainDetails =
            this.mainAnchor =
            this.mainFragLoading =
            this.bufferedTrack =
            this.switchingTrack =
            this.waitingData =
            this.cachedTrackLoadedData =
                null;
    }
    registerListeners() {
        super.registerListeners();
        let { hls: e } = this;
        e.on(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(u.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
            e.on(u.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.on(u.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.on(u.BUFFER_RESET, this.onBufferReset, this),
            e.on(u.BUFFER_CREATED, this.onBufferCreated, this),
            e.on(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(u.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.on(u.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.on(u.FRAG_LOADING, this.onFragLoading, this),
            e.on(u.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e &&
            (super.unregisterListeners(),
            e.off(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(u.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
            e.off(u.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.off(u.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.off(u.BUFFER_RESET, this.onBufferReset, this),
            e.off(u.BUFFER_CREATED, this.onBufferCreated, this),
            e.off(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(u.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.off(u.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.off(u.FRAG_LOADING, this.onFragLoading, this),
            e.off(u.FRAG_BUFFERED, this.onFragBuffered, this));
    }
    onInitPtsFound(e, { frag: t, id: n, initPTS: r, timescale: i, trackId: s }) {
        if (n === m) {
            let e = t.cc,
                n = this.fragCurrent;
            if (
                ((this.initPTS[e] = { baseTime: r, timescale: i, trackId: s }),
                this.log(`InitPTS for cc: ${e} found from main: ${r / i} (${r}/${i}) trackId: ${s}`),
                (this.mainAnchor = t),
                this.state === rX)
            ) {
                let n = this.waitingData;
                ((n || this.loadingParts) && (!n || n.frag.cc === e)) ||
                    this.syncWithAnchor(t, null == n ? void 0 : n.frag);
            } else
                !this.hls.hasEnoughToStart && n && n.cc !== e
                    ? (n.abortRequests(), this.syncWithAnchor(t, n))
                    : this.state === rH && this.tick();
        }
    }
    getLoadPosition() {
        return !this.startFragRequested && this.nextLoadPosition >= 0 ? this.nextLoadPosition : super.getLoadPosition();
    }
    syncWithAnchor(e, t) {
        var n;
        let r = (null == (n = this.mainFragLoading) ? void 0 : n.frag) || null;
        if (t && (null == r ? void 0 : r.cc) === t.cc) return;
        let i = (r || e).cc,
            s = tx(this.getLevelDetails(), i, this.getLoadPosition());
        s &&
            (this.log(`Syncing with main frag at ${s.start} cc ${s.cc}`),
            (this.startFragRequested = !1),
            (this.nextLoadPosition = s.start),
            this.resetLoadingState(),
            this.state === rH && this.doTickIdle());
    }
    startLoad(e, t) {
        if (!this.levels) {
            (this.startPosition = e), (this.state = rV);
            return;
        }
        let n = this.lastCurrentTime;
        this.stopLoad(),
            this.setInterval(sH),
            n > 0 && -1 === e
                ? (this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`), (e = n), (this.state = rH))
                : (this.state = rK),
            (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
            (this.startPosition = t ? -1 : e),
            this.tick();
    }
    doTick() {
        switch (this.state) {
            case rH:
                this.doTickIdle();
                break;
            case rK: {
                let { levels: e, trackId: t } = this,
                    n = null == e ? void 0 : e[t],
                    r = null == n ? void 0 : n.details;
                if (r && !this.waitForLive(n)) {
                    if (this.waitForCdnTuneIn(r)) break;
                    this.state = rX;
                }
                break;
            }
            case rW:
                this.checkRetryDate();
                break;
            case rX: {
                let e = this.waitingData;
                if (e) {
                    let { frag: t, part: n, cache: r, complete: i } = e,
                        s = this.mainAnchor;
                    if (void 0 !== this.initPTS[t.cc]) {
                        (this.waitingData = null), (this.state = rY);
                        let e = { frag: t, part: n, payload: r.flush().buffer, networkDetails: null };
                        this._handleFragmentLoadProgress(e), i && super._handleFragmentLoadComplete(e);
                    } else s && s.cc !== e.frag.cc && this.syncWithAnchor(s, e.frag);
                } else this.state = rH;
            }
        }
        this.onTickEnd();
    }
    resetLoadingState() {
        let e = this.waitingData;
        e && (this.fragmentTracker.removeFragment(e.frag), (this.waitingData = null)), super.resetLoadingState();
    }
    onTickEnd() {
        let { media: e } = this;
        null != e && e.readyState && (this.lastCurrentTime = e.currentTime);
    }
    doTickIdle() {
        var e;
        let { hls: t, levels: n, media: r, trackId: i } = this,
            s = t.config;
        if (
            !this.buffering ||
            (!r && !this.primaryPrefetch && (this.startFragRequested || !s.startFragPrefetch)) ||
            !(null != n && n[i])
        )
            return;
        let a = n[i],
            o = a.details;
        if (!o || this.waitForLive(a) || this.waitForCdnTuneIn(o)) {
            (this.state = rK), (this.startFragRequested = !1);
            return;
        }
        let l = this.mediaBuffer ? this.mediaBuffer : this.media;
        this.bufferFlushed && l && ((this.bufferFlushed = !1), this.afterBufferFlushed(l, K, E));
        let c = this.getFwdBufferInfo(l, E);
        if (null === c) return;
        if (!this.switchingTrack && this._streamEnded(c, o)) {
            t.trigger(u.BUFFER_EOS, { type: "audio" }), (this.state = rq);
            return;
        }
        let d = c.len,
            _ = t.maxBufferLength,
            f = o.fragments,
            h = f[0].start,
            p = this.getLoadPosition(),
            g = this.flushing ? p : c.end;
        if (this.switchingTrack && r) {
            let e = p;
            o.PTSKnown &&
                e < h &&
                (c.end > h || c.nextStart) &&
                (this.log("Alt audio track ahead of main track, seek to start of alt audio track"),
                (r.currentTime = h + 0.05));
        }
        if (d >= _ && !this.switchingTrack && g < f[f.length - 1].start) return;
        let A = this.getNextFragment(g, o);
        if ((A && this.isLoopLoading(A, g) && (A = this.getNextFragmentLoopLoading(A, o, c, m, _)), !A)) {
            this.bufferFlushed = !0;
            return;
        }
        let I = (null == (e = this.mainFragLoading) ? void 0 : e.frag) || null;
        if (
            !this.audioOnly &&
            this.startFragRequested &&
            I &&
            Z(A) &&
            !A.endList &&
            (!o.live || (!this.loadingParts && g < this.hls.liveSyncPosition)) &&
            (this.fragmentTracker.getState(I) === t3 && (this.mainFragLoading = I = null), I && Z(I))
        ) {
            if (A.start > I.end) {
                let e = this.fragmentTracker.getFragAtPos(g, m);
                e && e.end > I.end && ((I = e), (this.mainFragLoading = { frag: e, targetBufferTime: null }));
            }
            if (A.start > I.end) return;
        }
        this.loadFragment(A, a, g);
    }
    onMediaDetaching(e, t) {
        (this.bufferFlushed = this.flushing = !1), super.onMediaDetaching(e, t);
    }
    onAudioTracksUpdated(e, { audioTracks: t }) {
        this.resetTransmuxer(), (this.levels = t.map((e) => new tl(e)));
    }
    onAudioTrackSwitching(e, t) {
        let n = !!t.url;
        this.trackId = t.id;
        let { fragCurrent: r } = this;
        r && (r.abortRequests(), this.removeUnbufferedFrags(r.start)),
            this.resetLoadingState(),
            n
                ? ((this.switchingTrack = t),
                  this.flushAudioIfNeeded(t),
                  this.state !== rV && (this.setInterval(sH), (this.state = rH), this.tick()))
                : (this.resetTransmuxer(),
                  (this.switchingTrack = null),
                  (this.bufferedTrack = t),
                  this.clearInterval());
    }
    onManifestLoading() {
        super.onManifestLoading(),
            (this.bufferFlushed = this.flushing = this.audioOnly = !1),
            this.resetItem(),
            (this.trackId = -1);
    }
    onLevelLoaded(e, t) {
        this.mainDetails = t.details;
        let n = this.cachedTrackLoadedData;
        n && ((this.cachedTrackLoadedData = null), this.onAudioTrackLoaded(u.AUDIO_TRACK_LOADED, n));
    }
    onAudioTrackLoaded(e, t) {
        var n, r;
        let { levels: i } = this,
            { details: s, id: a, groupId: o, track: l } = t;
        if (!i) return void this.warn(`Audio tracks reset while loading track ${a} "${l.name}" of "${o}"`);
        let c = this.mainDetails;
        if (!c || s.endCC > c.endCC || c.expired) {
            (this.cachedTrackLoadedData = t), this.state !== rV && (this.state = rK);
            return;
        }
        (this.cachedTrackLoadedData = null),
            this.log(
                `Audio track ${a} "${l.name}" of "${o}" loaded [${s.startSN},${s.endSN}]${s.lastPartSn ? `[part-${s.lastPartSn}-${s.lastPartIndex}]` : ""},duration:${s.totalduration}`,
            );
        let d = i[a],
            _ = 0;
        if (s.live || (null != (n = d.details) && n.live)) {
            if ((this.checkLiveUpdate(s), s.deltaUpdateFailed)) return;
            d.details &&
                (_ = this.alignPlaylists(s, d.details, null == (r = this.levelLastLoaded) ? void 0 : r.details)),
                s.alignedSliding || (rk(s, c), s.alignedSliding || rU(s, c), (_ = s.fragmentStart));
        }
        (d.details = s),
            (this.levelLastLoaded = d),
            this.startFragRequested || this.setStartPosition(c, _),
            this.hls.trigger(u.AUDIO_TRACK_UPDATED, { details: s, id: a, groupId: t.groupId }),
            this.state !== rK || this.waitForCdnTuneIn(s) || (this.state = rH),
            this.tick();
    }
    _handleFragmentLoadProgress(e) {
        var t;
        let n = e.frag,
            { part: r, payload: i } = e,
            { config: s, trackId: a, levels: o } = this;
        if (!o)
            return void this.warn(
                `Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`,
            );
        let l = o[a];
        if (!l) return void this.warn("Audio track is undefined on fragment load progress");
        let u = l.details;
        if (!u) {
            this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(n.start);
            return;
        }
        let c = s.defaultAudioCodec || l.audioCodec || "mp4a.40.2",
            d = this.transmuxer;
        d ||
            (d = this.transmuxer =
                new sV(this.hls, E, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
        let _ = this.initPTS[n.cc],
            f = null == (t = n.initSegment) ? void 0 : t.data;
        if (void 0 !== _) {
            let e = !1,
                t = r ? r.index : -1,
                s = -1 !== t,
                a = new nh(n.level, n.sn, n.stats.chunkCount, i.byteLength, t, s);
            d.push(i, f, c, "", n, r, u.totalduration, e, a, _);
        } else {
            this.log(
                `Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${u.startSN} ,${u.endSN}],track ${a}`,
            );
            let { cache: e } = (this.waitingData = this.waitingData || {
                frag: n,
                part: r,
                cache: new r1(),
                complete: !1,
            });
            e.push(new Uint8Array(i)), this.state !== rV && (this.state = rX);
        }
    }
    _handleFragmentLoadComplete(e) {
        if (this.waitingData) {
            this.waitingData.complete = !0;
            return;
        }
        super._handleFragmentLoadComplete(e);
    }
    onBufferReset() {
        this.mediaBuffer = null;
    }
    onBufferCreated(e, t) {
        this.bufferFlushed = this.flushing = !1;
        let n = t.tracks.audio;
        n && (this.mediaBuffer = n.buffer || null);
    }
    onFragLoading(e, t) {
        !this.audioOnly &&
            t.frag.type === m &&
            Z(t.frag) &&
            ((this.mainFragLoading = t), this.state === rH && this.tick());
    }
    onFragBuffered(e, t) {
        let { frag: n, part: r } = t;
        if (n.type !== E) {
            this.audioOnly ||
                n.type !== m ||
                n.elementaryStreams.video ||
                n.elementaryStreams.audiovideo ||
                ((this.audioOnly = !0), (this.mainFragLoading = null));
            return;
        }
        if (this.fragContextChanged(n))
            return void this.warn(
                `Fragment ${n.sn}${r ? " p: " + r.index : ""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`,
            );
        if (Z(n)) {
            this.fragPrevious = n;
            let e = this.switchingTrack;
            e &&
                ((this.bufferedTrack = e),
                (this.switchingTrack = null),
                this.hls.trigger(u.AUDIO_TRACK_SWITCHED, v({}, e)));
        }
        this.fragBufferedComplete(n, r), this.media && this.tick();
    }
    onError(e, t) {
        var n;
        if (t.fatal) {
            this.state = rZ;
            return;
        }
        switch (t.details) {
            case l.FRAG_GAP:
            case l.FRAG_PARSING_ERROR:
            case l.FRAG_DECRYPT_ERROR:
            case l.FRAG_LOAD_ERROR:
            case l.FRAG_LOAD_TIMEOUT:
            case l.KEY_LOAD_ERROR:
            case l.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(E, t);
                break;
            case l.AUDIO_TRACK_LOAD_ERROR:
            case l.AUDIO_TRACK_LOAD_TIMEOUT:
            case l.LEVEL_PARSING_ERROR:
                t.levelRetry ||
                    this.state !== rK ||
                    (null == (n = t.context) ? void 0 : n.type) !== h ||
                    (this.state = rH);
                break;
            case l.BUFFER_ADD_CODEC_ERROR:
            case l.BUFFER_APPEND_ERROR:
                if ("audio" !== t.parent) return;
                this.reduceLengthAndFlushBuffer(t) || this.resetLoadingState();
                break;
            case l.BUFFER_FULL_ERROR:
                if ("audio" !== t.parent) return;
                this.reduceLengthAndFlushBuffer(t) &&
                    ((this.bufferedTrack = null), super.flushMainBuffer(0, 1 / 0, "audio"));
                break;
            case l.INTERNAL_EXCEPTION:
                this.recoverWorkerError(t);
        }
    }
    onBufferFlushing(e, { type: t }) {
        t !== $ && (this.flushing = !0);
    }
    onBufferFlushed(e, { type: t }) {
        if (t !== $) {
            (this.flushing = !1), (this.bufferFlushed = !0), this.state === rq && (this.state = rH);
            let e = this.mediaBuffer || this.media;
            e && (this.afterBufferFlushed(e, t, E), this.tick());
        }
    }
    _handleTransmuxComplete(e) {
        var t;
        let n = "audio",
            { hls: r } = this,
            { remuxResult: i, chunkMeta: s } = e,
            a = this.getCurrentContext(s);
        if (!a) return void this.resetWhenMissingContext(s);
        let { frag: o, part: l, level: c } = a,
            { details: d } = c,
            { audio: _, text: f, id3: h, initSegment: p } = i;
        if (this.fragContextChanged(o) || !d) return void this.fragmentTracker.removeFragment(o);
        if (
            ((this.state = r$),
            this.switchingTrack && _ && this.completeAudioSwitch(this.switchingTrack),
            null != p && p.tracks)
        ) {
            let e = o.initSegment || o;
            if (this.unhandledEncryptionError(p, o)) return;
            this._bufferInitSegment(c, p.tracks, e, s),
                r.trigger(u.FRAG_PARSING_INIT_SEGMENT, { frag: e, id: n, tracks: p.tracks });
        }
        if (_) {
            let { startPTS: e, endPTS: t, startDTS: n, endDTS: r } = _;
            l && (l.elementaryStreams[K] = { startPTS: e, endPTS: t, startDTS: n, endDTS: r }),
                o.setElementaryStreamInfo(K, e, t, n, r),
                this.bufferFragmentData(_, o, l, s);
        }
        if (null != h && null != (t = h.samples) && t.length) {
            let e = S({ id: n, frag: o, details: d }, h);
            r.trigger(u.FRAG_PARSING_METADATA, e);
        }
        if (f) {
            let e = S({ id: n, frag: o, details: d }, f);
            r.trigger(u.FRAG_PARSING_USERDATA, e);
        }
    }
    _bufferInitSegment(e, t, n, r) {
        if (this.state !== r$ || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio)) return;
        let i = t.audio;
        i.id = E;
        let s = e.audioCodec;
        this.log(`Init audio buffer, container:${i.container}, codecs[level/parsed]=[${s}/${i.codec}]`),
            s && 1 === s.split(",").length && (i.levelCodec = s),
            this.hls.trigger(u.BUFFER_CODECS, t);
        let a = i.initSegment;
        if (null != a && a.byteLength) {
            let e = { type: "audio", frag: n, part: null, chunkMeta: r, parent: n.type, data: a };
            this.hls.trigger(u.BUFFER_APPENDING, e);
        }
        this.tickImmediate();
    }
    loadFragment(e, t, n) {
        let r = this.fragmentTracker.getState(e);
        if (this.switchingTrack || r === t0 || r === t2) {
            var i;
            if (Z(e))
                if (null != (i = t.details) && i.live && !this.initPTS[e.cc]) {
                    this.log(
                        `Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`,
                    ),
                        (this.state = rX);
                    let n = this.mainDetails;
                    n && n.fragmentStart !== t.details.fragmentStart && rU(t.details, n);
                } else super.loadFragment(e, t, n);
            else this._loadInitSegment(e, t);
        } else this.clearTrackerIfNeeded(e);
    }
    flushAudioIfNeeded(e) {
        if (this.media && this.bufferedTrack) {
            let { name: t, lang: n, assocLang: r, characteristics: i, audioCodec: s, channels: a } = this.bufferedTrack;
            tI({ name: t, lang: n, assocLang: r, characteristics: i, audioCodec: s, channels: a }, e, ty) ||
                (tN(e.url, this.hls)
                    ? (this.log("Switching audio track : flushing all audio"),
                      super.flushMainBuffer(0, 1 / 0, "audio"),
                      (this.bufferedTrack = null))
                    : (this.bufferedTrack = e));
        }
    }
    completeAudioSwitch(e) {
        let { hls: t } = this;
        this.flushAudioIfNeeded(e),
            (this.bufferedTrack = e),
            (this.switchingTrack = null),
            t.trigger(u.AUDIO_TRACK_SWITCHED, v({}, e));
    }
}
class sY extends R {
    constructor(e, t) {
        super(t, e.logger), (this.hls = void 0), (this.canLoad = !1), (this.timer = -1), (this.hls = e);
    }
    destroy() {
        this.clearTimer(), (this.hls = this.log = this.warn = null);
    }
    clearTimer() {
        -1 !== this.timer && (self.clearTimeout(this.timer), (this.timer = -1));
    }
    startLoad() {
        (this.canLoad = !0), this.loadPlaylist();
    }
    stopLoad() {
        (this.canLoad = !1), this.clearTimer();
    }
    switchParams(e, t, n) {
        let r = null == t ? void 0 : t.renditionReports;
        if (r) {
            let i = -1;
            for (let n = 0; n < r.length; n++) {
                let s,
                    a = r[n];
                try {
                    s = new self.URL(a.URI, t.url).href;
                } catch (e) {
                    this.warn(`Could not construct new URL for Rendition Report: ${e}`), (s = a.URI || "");
                }
                if (s === e) {
                    i = n;
                    break;
                }
                s === e.substring(0, s.length) && (i = n);
            }
            if (-1 !== i) {
                let e = r[i],
                    s = parseInt(e["LAST-MSN"]) || t.lastPartSn,
                    a = parseInt(e["LAST-PART"]) || t.lastPartIndex;
                if (this.hls.config.lowLatencyMode) {
                    let e = Math.min(t.age - t.partTarget, t.targetduration);
                    a >= 0 && e > t.partTarget && (a += 1);
                }
                return new to(s, a >= 0 ? a : void 0, n && ta(n));
            }
        }
    }
    loadPlaylist(e) {
        this.clearTimer();
    }
    loadingPlaylist(e, t) {
        this.clearTimer();
    }
    shouldLoadPlaylist(e) {
        return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
    }
    getUrlWithDirectives(e, t) {
        if (t)
            try {
                return t.addDirectives(e);
            } catch (e) {
                this.warn(`Could not construct new URL with HLS Delivery Directives: ${e}`);
            }
        return e;
    }
    playlistLoaded(e, t, n) {
        let { details: r, stats: i } = t,
            s = self.performance.now(),
            a = i.loading.first ? Math.max(0, s - i.loading.first) : 0;
        r.advancedDateTime = Date.now() - a;
        let c = this.hls.config.timelineOffset;
        if (c !== r.appliedTimelineOffset) {
            let e = Math.max(c || 0, 0);
            (r.appliedTimelineOffset = e),
                r.fragments.forEach((t) => {
                    t.setStart(t.playlistOffset + e);
                });
        }
        if (r.live || (null != n && n.live)) {
            let c,
                _,
                f,
                h = "levelInfo" in t ? t.levelInfo : t.track;
            if ((r.reloaded(n), n && r.fragments.length > 0)) {
                rE(n, r, this);
                let e = r.playlistParsingError;
                if (e) {
                    this.warn(e);
                    let n = this.hls;
                    if (!n.config.ignorePlaylistParsingErrors) {
                        var d;
                        let { networkDetails: s } = t;
                        n.trigger(u.ERROR, {
                            type: o.NETWORK_ERROR,
                            details: l.LEVEL_PARSING_ERROR,
                            fatal: !1,
                            url: r.url,
                            error: e,
                            reason: e.message,
                            level: t.level || void 0,
                            parent: null == (d = r.fragments[0]) ? void 0 : d.type,
                            networkDetails: s,
                            stats: i,
                        });
                        return;
                    }
                    r.playlistParsingError = null;
                }
            }
            -1 === r.requestScheduled && (r.requestScheduled = i.loading.start);
            let p = this.hls.mainForwardBufferInfo,
                m = p ? p.end - p.len : 0,
                E = (r.edge - m) * 1e3,
                g = rv(r, E);
            if (
                (r.requestScheduled + g < s ? (r.requestScheduled = s) : (r.requestScheduled += g),
                this.log(
                    `live playlist ${e} ${r.advanced ? "REFRESHED " + r.lastPartSn + "-" + r.lastPartIndex : r.updated ? "UPDATED" : "MISSED"}`,
                ),
                !this.canLoad || !r.live)
            )
                return;
            if (r.canBlockReload && r.endSN && r.advanced) {
                let e = this.hls.config.lowLatencyMode,
                    i = r.lastPartSn,
                    a = r.endSN,
                    o = r.lastPartIndex,
                    l = i === a;
                -1 !== o
                    ? l
                        ? ((_ = a + 1), (f = e ? 0 : o))
                        : ((_ = i), (f = e ? o + 1 : r.maxPartIndex))
                    : (_ = a + 1);
                let u = r.age,
                    d = u + r.ageHeader,
                    p = Math.min(d - r.partTarget, 1.5 * r.targetduration);
                if (p > 0) {
                    if (d > 3 * r.targetduration)
                        this.log(`Playlist last advanced ${u.toFixed(2)}s ago. Omitting segment and part directives.`),
                            (_ = void 0),
                            (f = void 0);
                    else if (null != n && n.tuneInGoal && d - r.partTarget > n.tuneInGoal)
                        this.warn(
                            `CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${p} with playlist age: ${r.age}`,
                        ),
                            (p = 0);
                    else {
                        let e = Math.floor(p / r.targetduration);
                        (_ += e),
                            void 0 !== f && (f += Math.round((p % r.targetduration) / r.partTarget)),
                            this.log(
                                `CDN Tune-in age: ${r.ageHeader}s last advanced ${u.toFixed(2)}s goal: ${p} skip sn ${e} to part ${f}`,
                            );
                    }
                    r.tuneInGoal = p;
                }
                if (((c = this.getDeliveryDirectives(r, t.deliveryDirectives, _, f)), e || !l)) {
                    (r.requestScheduled = s), this.loadingPlaylist(h, c);
                    return;
                }
            } else
                (r.canBlockReload || r.canSkipUntil) && (c = this.getDeliveryDirectives(r, t.deliveryDirectives, _, f));
            c &&
                void 0 !== _ &&
                r.canBlockReload &&
                (r.requestScheduled = i.loading.first + Math.max(g - 2 * a, g / 2)),
                this.scheduleLoading(h, c, r);
        } else this.clearTimer();
    }
    scheduleLoading(e, t, n) {
        let r = n || e.details;
        if (!r) return void this.loadingPlaylist(e, t);
        let i = self.performance.now(),
            s = r.requestScheduled;
        if (i >= s) return void this.loadingPlaylist(e, t);
        let a = s - i;
        this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(a)} ms`),
            this.clearTimer(),
            (this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), a));
    }
    getDeliveryDirectives(e, t, n, r) {
        let i = ta(e);
        return null != t && t.skip && e.deltaUpdateFailed && ((n = t.msn), (r = t.part), (i = tr)), new to(n, r, i);
    }
    checkRetry(e) {
        let t = e.details,
            n = tP(e),
            r = e.errorAction,
            { action: i, retryCount: s = 0, retryConfig: a } = r || {},
            o = !!r && !!a && (i === t$ || (!r.resolved && i === tW));
        if (o) {
            var l;
            if (s >= a.maxNumRetry) return !1;
            if (n && null != (l = e.context) && l.deliveryDirectives)
                this.warn(
                    `Retrying playlist loading ${s + 1}/${a.maxNumRetry} after "${t}" without delivery-directives`,
                ),
                    this.loadPlaylist();
            else {
                let e = tF(a, s);
                this.clearTimer(),
                    (this.timer = self.setTimeout(() => this.loadPlaylist(), e)),
                    this.warn(`Retrying playlist loading ${s + 1}/${a.maxNumRetry} after "${t}" in ${e}ms`);
            }
            (e.levelRetry = !0), (r.resolved = !0);
        }
        return o;
    }
}
function sW(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!sK(e[n].attrs, t[n].attrs)) return !1;
    return !0;
}
function sK(e, t, n) {
    let r = e["STABLE-RENDITION-ID"];
    return r && !n
        ? r === t["STABLE-RENDITION-ID"]
        : !(n || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some(
              (n) => e[n] !== t[n],
          );
}
function s$(e, t) {
    return (
        t.label.toLowerCase() === e.name.toLowerCase() &&
        (!t.language || t.language.toLowerCase() === (e.lang || "").toLowerCase())
    );
}
class sz extends sY {
    constructor(e) {
        super(e, "audio-track-controller"),
            (this.tracks = []),
            (this.groupIds = null),
            (this.tracksInGroup = []),
            (this.trackId = -1),
            (this.currentTrack = null),
            (this.selectDefaultTrack = !0),
            this.registerListeners();
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(u.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.on(u.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.on(u.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(u.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.off(u.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
            e.off(u.ERROR, this.onError, this);
    }
    destroy() {
        this.unregisterListeners(),
            (this.tracks.length = 0),
            (this.tracksInGroup.length = 0),
            (this.currentTrack = null),
            super.destroy();
    }
    onManifestLoading() {
        (this.tracks = []),
            (this.tracksInGroup = []),
            (this.groupIds = null),
            (this.currentTrack = null),
            (this.trackId = -1),
            (this.selectDefaultTrack = !0);
    }
    onManifestParsed(e, t) {
        this.tracks = t.audioTracks || [];
    }
    onAudioTrackLoaded(e, t) {
        let { id: n, groupId: r, details: i } = t,
            s = this.tracksInGroup[n];
        if (!s || s.groupId !== r)
            return void this.warn(
                `Audio track with id:${n} and group:${r} not found in active group ${null == s ? void 0 : s.groupId}`,
            );
        let a = s.details;
        (s.details = t.details),
            this.log(`Audio track ${n} "${s.name}" lang:${s.lang} group:${r} loaded [${i.startSN}-${i.endSN}]`),
            n === this.trackId && this.playlistLoaded(n, t, a);
    }
    onLevelLoading(e, t) {
        this.switchLevel(t.level);
    }
    onLevelSwitching(e, t) {
        this.switchLevel(t.level);
    }
    switchLevel(e) {
        let t = this.hls.levels[e];
        if (!t) return;
        let n = t.audioGroups || null,
            r = this.groupIds,
            i = this.currentTrack;
        if (
            !n ||
            (null == r ? void 0 : r.length) !== (null == n ? void 0 : n.length) ||
            (null != n && n.some((e) => (null == r ? void 0 : r.indexOf(e)) === -1))
        ) {
            (this.groupIds = n), (this.trackId = -1), (this.currentTrack = null);
            let e = this.tracks.filter((e) => !n || -1 !== n.indexOf(e.groupId));
            if (e.length)
                this.selectDefaultTrack && !e.some((e) => e.default) && (this.selectDefaultTrack = !1),
                    e.forEach((e, t) => {
                        e.id = t;
                    });
            else if (!i && !this.tracksInGroup.length) return;
            this.tracksInGroup = e;
            let t = this.hls.config.audioPreference;
            if (!i && t) {
                let n = tA(t, e, ty);
                if (n > -1) i = e[n];
                else {
                    let e = tA(t, this.tracks);
                    i = this.tracks[e];
                }
            }
            let r = this.findTrackId(i);
            -1 === r && i && (r = this.findTrackId(null));
            let a = { audioTracks: e };
            this.log(
                `Updating audio tracks, ${e.length} track(s) found in group(s): ${null == n ? void 0 : n.join(",")}`,
            ),
                this.hls.trigger(u.AUDIO_TRACKS_UPDATED, a);
            let c = this.trackId;
            if (-1 !== r && -1 === c) this.setAudioTrack(r);
            else if (e.length && -1 === c) {
                var s;
                let t = Error(
                    `No audio track selected for current audio group-ID(s): ${null == ((s = this.groupIds)) ? void 0 : s.join(",")} track count: ${e.length}`,
                );
                this.warn(t.message),
                    this.hls.trigger(u.ERROR, {
                        type: o.MEDIA_ERROR,
                        details: l.AUDIO_TRACK_LOAD_ERROR,
                        fatal: !0,
                        error: t,
                    });
            }
        }
    }
    onError(e, t) {
        !t.fatal &&
            t.context &&
            (t.context.type !== h ||
                t.context.id !== this.trackId ||
                (this.groupIds && -1 === this.groupIds.indexOf(t.context.groupId)) ||
                this.checkRetry(t));
    }
    get allAudioTracks() {
        return this.tracks;
    }
    get audioTracks() {
        return this.tracksInGroup;
    }
    get audioTrack() {
        return this.trackId;
    }
    set audioTrack(e) {
        (this.selectDefaultTrack = !1), this.setAudioTrack(e);
    }
    setAudioOption(e) {
        let t = this.hls;
        if (((t.config.audioPreference = e), e)) {
            let n = this.allAudioTracks;
            if (((this.selectDefaultTrack = !1), n.length)) {
                let r = this.currentTrack;
                if (r && tI(e, r, ty)) return r;
                let i = tA(e, this.tracksInGroup, ty);
                if (i > -1) {
                    let e = this.tracksInGroup[i];
                    return this.setAudioTrack(i), e;
                }
                if (r) {
                    let r = t.loadLevel;
                    -1 === r && (r = t.firstAutoLevel);
                    let i = tv(e, t.levels, n, r, ty);
                    if (-1 === i) return null;
                    t.nextLoadLevel = i;
                }
                if (e.channels || e.audioCodec) {
                    let t = tA(e, n);
                    if (t > -1) return n[t];
                }
            }
        }
        return null;
    }
    setAudioTrack(e) {
        let t = this.tracksInGroup;
        if (e < 0 || e >= t.length) return void this.warn(`Invalid audio track id: ${e}`);
        this.selectDefaultTrack = !1;
        let n = this.currentTrack,
            r = t[e],
            i = r.details && !r.details.live;
        if (
            (e === this.trackId && r === n && i) ||
            (this.log(
                `Switching to audio-track ${e} "${r.name}" lang:${r.lang} group:${r.groupId} channels:${r.channels}`,
            ),
            (this.trackId = e),
            (this.currentTrack = r),
            this.hls.trigger(u.AUDIO_TRACK_SWITCHING, v({}, r)),
            i)
        )
            return;
        let s = this.switchParams(r.url, null == n ? void 0 : n.details, r.details);
        this.loadPlaylist(s);
    }
    findTrackId(e) {
        let t = this.tracksInGroup;
        for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if ((!this.selectDefaultTrack || r.default) && (!e || tI(e, r, ty))) return n;
        }
        if (e) {
            let { name: n, lang: r, assocLang: i, characteristics: s, audioCodec: a, channels: o } = e;
            for (let e = 0; e < t.length; e++)
                if (tI({ name: n, lang: r, assocLang: i, characteristics: s, audioCodec: a, channels: o }, t[e], ty))
                    return e;
            for (let n = 0; n < t.length; n++) {
                let r = t[n];
                if (sK(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return n;
            }
            for (let n = 0; n < t.length; n++) {
                let r = t[n];
                if (sK(e.attrs, r.attrs, ["LANGUAGE"])) return n;
            }
        }
        return -1;
    }
    loadPlaylist(e) {
        super.loadPlaylist();
        let t = this.currentTrack;
        this.shouldLoadPlaylist(t) && tN(t.url, this.hls) && this.scheduleLoading(t, e);
    }
    loadingPlaylist(e, t) {
        super.loadingPlaylist(e, t);
        let n = e.id,
            r = e.groupId,
            i = this.getUrlWithDirectives(e.url, t),
            s = e.details,
            a = null == s ? void 0 : s.age;
        this.log(
            `Loading audio-track ${n} "${e.name}" lang:${e.lang} group:${r}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${a && s.live ? " age " + a.toFixed(1) + (s.type ? " " + s.type : "") : ""} ${i}`,
        ),
            this.hls.trigger(u.AUDIO_TRACK_LOADING, {
                url: i,
                id: n,
                groupId: r,
                deliveryDirectives: t || null,
                track: e,
            });
    }
}
class sq {
    constructor(e) {
        (this.tracks = void 0), (this.queues = { video: [], audio: [], audiovideo: [] }), (this.tracks = e);
    }
    destroy() {
        this.tracks = this.queues = null;
    }
    append(e, t, n) {
        if (null === this.queues || null === this.tracks) return;
        let r = this.queues[t];
        r.push(e), 1 !== r.length || n || this.executeNext(t);
    }
    appendBlocker(e) {
        return new Promise((t) => {
            let n = { label: "async-blocker", execute: t, onStart: () => {}, onComplete: () => {}, onError: () => {} };
            this.append(n, e);
        });
    }
    prependBlocker(e) {
        return new Promise((t) => {
            if (this.queues) {
                let n = {
                    label: "async-blocker-prepend",
                    execute: t,
                    onStart: () => {},
                    onComplete: () => {},
                    onError: () => {},
                };
                this.queues[e].unshift(n);
            }
        });
    }
    removeBlockers() {
        null !== this.queues &&
            [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach((e) => {
                var t;
                let n = null == (t = e[0]) ? void 0 : t.label;
                ("async-blocker" === n || "async-blocker-prepend" === n) && (e[0].execute(), e.splice(0, 1));
            });
    }
    unblockAudio(e) {
        null === this.queues || (this.queues.audio[0] === e && this.shiftAndExecuteNext("audio"));
    }
    executeNext(e) {
        if (null === this.queues || null === this.tracks) return;
        let t = this.queues[e];
        if (t.length) {
            let r = t[0];
            try {
                r.execute();
            } catch (i) {
                var n;
                if ((r.onError(i), null === this.queues || null === this.tracks)) return;
                let t = null == (n = this.tracks[e]) ? void 0 : n.buffer;
                (null != t && t.updating) || this.shiftAndExecuteNext(e);
            }
        }
    }
    shiftAndExecuteNext(e) {
        null !== this.queues && (this.queues[e].shift(), this.executeNext(e));
    }
    current(e) {
        var t;
        return (null == (t = this.queues) ? void 0 : t[e][0]) || null;
    }
    toString() {
        let { queues: e, tracks: t } = this;
        return null === e || null === t
            ? "<destroyed>"
            : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
    }
    list(e) {
        var t, n;
        return (null != (t = this.queues) && t[e]) || (null != (n = this.tracks) && n[e])
            ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}`
            : "";
    }
    listSbInfo(e) {
        var t;
        let n = null == (t = this.tracks) ? void 0 : t[e],
            r = null == n ? void 0 : n.buffer;
        return r
            ? `SourceBuffer${r.updating ? " updating" : ""}${n.ended ? " ended" : ""}${n.ending ? " ending" : ""}`
            : "none";
    }
    listOps(e) {
        var t;
        return (null == (t = this.queues) ? void 0 : t[e].map((e) => e.label).join(", ")) || "";
    }
}
let sZ = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,
    sX = "HlsJsTrackRemovedError";
class sQ extends Error {
    constructor(e) {
        super(e), (this.name = sX);
    }
}
class sJ extends R {
    constructor(e, t) {
        super("buffer-controller", e.logger),
            (this.hls = void 0),
            (this.fragmentTracker = void 0),
            (this.details = null),
            (this._objectUrl = null),
            (this.operationQueue = null),
            (this.bufferCodecEventsTotal = 0),
            (this.media = null),
            (this.mediaSource = null),
            (this.lastMpegAudioChunk = null),
            (this.blockedAudioAppend = null),
            (this.lastVideoAppendEnd = 0),
            (this.appendSource = void 0),
            (this.transferData = void 0),
            (this.overrides = void 0),
            (this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }),
            (this.tracks = {}),
            (this.sourceBuffers = [
                [null, null],
                [null, null],
            ]),
            (this._onEndStreaming = (e) => {
                var t;
                this.hls &&
                    (null == (t = this.mediaSource) ? void 0 : t.readyState) === "open" &&
                    this.hls.pauseBuffering();
            }),
            (this._onStartStreaming = (e) => {
                this.hls && this.hls.resumeBuffering();
            }),
            (this._onMediaSourceOpen = (e) => {
                let { media: t, mediaSource: n } = this;
                e && this.log("Media source opened"),
                    t &&
                        n &&
                        (n.removeEventListener("sourceopen", this._onMediaSourceOpen),
                        t.removeEventListener("emptied", this._onMediaEmptied),
                        this.updateDuration(),
                        this.hls.trigger(u.MEDIA_ATTACHED, { media: t, mediaSource: n }),
                        null !== this.mediaSource && this.checkPendingTracks());
            }),
            (this._onMediaSourceClose = () => {
                this.log("Media source closed");
            }),
            (this._onMediaSourceEnded = () => {
                this.log("Media source ended");
            }),
            (this._onMediaEmptied = () => {
                let { mediaSrc: e, _objectUrl: t } = this;
                e !== t && this.error(`Media element src was set while attaching MediaSource (${t} > ${e})`);
            }),
            (this.hls = e),
            (this.fragmentTracker = t),
            (this.appendSource = U(k(e.config.preferManagedMediaSource))),
            this.initTracks(),
            this.registerListeners();
    }
    hasSourceTypes() {
        return Object.keys(this.tracks).length > 0;
    }
    destroy() {
        this.unregisterListeners(),
            (this.details = null),
            (this.lastMpegAudioChunk = this.blockedAudioAppend = null),
            (this.transferData = this.overrides = void 0),
            this.operationQueue && (this.operationQueue.destroy(), (this.operationQueue = null)),
            (this.hls = this.fragmentTracker = null),
            (this._onMediaSourceOpen = this._onMediaSourceClose = null),
            (this._onMediaSourceEnded = null),
            (this._onStartStreaming = this._onEndStreaming = null);
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(u.BUFFER_RESET, this.onBufferReset, this),
            e.on(u.BUFFER_APPENDING, this.onBufferAppending, this),
            e.on(u.BUFFER_CODECS, this.onBufferCodecs, this),
            e.on(u.BUFFER_EOS, this.onBufferEos, this),
            e.on(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(u.FRAG_PARSED, this.onFragParsed, this),
            e.on(u.FRAG_CHANGED, this.onFragChanged, this),
            e.on(u.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(u.BUFFER_RESET, this.onBufferReset, this),
            e.off(u.BUFFER_APPENDING, this.onBufferAppending, this),
            e.off(u.BUFFER_CODECS, this.onBufferCodecs, this),
            e.off(u.BUFFER_EOS, this.onBufferEos, this),
            e.off(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(u.FRAG_PARSED, this.onFragParsed, this),
            e.off(u.FRAG_CHANGED, this.onFragChanged, this),
            e.off(u.ERROR, this.onError, this);
    }
    transferMedia() {
        let { media: e, mediaSource: t } = this;
        if (!e) return null;
        let n = {};
        if (this.operationQueue) {
            let e = this.isUpdating();
            e || this.operationQueue.removeBlockers();
            let t = this.isQueued();
            (e || t) &&
                this.warn(
                    `Transfering MediaSource with${t ? " operations in queue" : ""}${e ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`,
                ),
                this.operationQueue.destroy();
        }
        let r = this.transferData;
        return (
            !this.sourceBufferCount && r && r.mediaSource === t
                ? S(n, r.tracks)
                : this.sourceBuffers.forEach((e) => {
                      let [t] = e;
                      t && ((n[t] = S({}, this.tracks[t])), this.removeBuffer(t)), (e[0] = e[1] = null);
                  }),
            { media: e, mediaSource: t, tracks: n }
        );
    }
    initTracks() {
        let e = {};
        (this.sourceBuffers = [
            [null, null],
            [null, null],
        ]),
            (this.tracks = e),
            this.resetQueue(),
            this.resetAppendErrors(),
            (this.lastMpegAudioChunk = this.blockedAudioAppend = null),
            (this.lastVideoAppendEnd = 0);
    }
    onManifestLoading() {
        (this.bufferCodecEventsTotal = 0), (this.details = null);
    }
    onManifestParsed(e, t) {
        var n;
        let r = 2;
        ((!t.audio || t.video) && t.altAudio) || (r = 1),
            (this.bufferCodecEventsTotal = r),
            this.log(`${r} bufferCodec event(s) expected.`),
            null != (n = this.transferData) && n.mediaSource && this.sourceBufferCount && r && this.bufferCreated();
    }
    onMediaAttaching(e, t) {
        let n = (this.media = t.media);
        this.transferData = this.overrides = void 0;
        let r = k(this.appendSource);
        if (r) {
            let e = !!t.mediaSource;
            (e || t.overrides) && ((this.transferData = t), (this.overrides = t.overrides));
            let i = (this.mediaSource = t.mediaSource || new r());
            if ((this.assignMediaSource(i), e)) (this._objectUrl = n.src), this.attachTransferred();
            else {
                let e = (this._objectUrl = self.URL.createObjectURL(i));
                if (this.appendSource)
                    try {
                        n.removeAttribute("src");
                        let t = self.ManagedMediaSource;
                        (n.disableRemotePlayback = n.disableRemotePlayback || (t && i instanceof t)),
                            s0(n),
                            s1(n, e),
                            n.load();
                    } catch (t) {
                        n.src = e;
                    }
                else n.src = e;
            }
            n.addEventListener("emptied", this._onMediaEmptied);
        }
    }
    assignMediaSource(e) {
        var t, n;
        this.log(
            `${(null == (t = this.transferData) ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${null == ((n = e.constructor)) ? void 0 : n.name}`,
        ),
            e.addEventListener("sourceopen", this._onMediaSourceOpen),
            e.addEventListener("sourceended", this._onMediaSourceEnded),
            e.addEventListener("sourceclose", this._onMediaSourceClose),
            this.appendSource &&
                (e.addEventListener("startstreaming", this._onStartStreaming),
                e.addEventListener("endstreaming", this._onEndStreaming));
    }
    attachTransferred() {
        let e = this.media,
            t = this.transferData;
        if (!t || !e) return;
        let n = this.tracks,
            r = t.tracks,
            i = r ? Object.keys(r) : null,
            s = i ? i.length : 0,
            a = () => {
                Promise.resolve().then(() => {
                    this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
                });
            };
        if (r && i && s) {
            if (!this.tracksReady) {
                (this.hls.config.startFragPrefetch = !0),
                    this.log("attachTransferred: waiting for SourceBuffer track info");
                return;
            }
            if (
                (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${tf(n, (e, t) => ("initSegment" === e ? void 0 : t))};
transfer tracks: ${tf(r, (e, t) => ("initSegment" === e ? void 0 : t))}}`),
                !G(r, n))
            ) {
                (t.mediaSource = null), (t.tracks = void 0);
                let i = e.currentTime,
                    s = this.details,
                    a = Math.max(i, (null == s ? void 0 : s.fragments[0].start) || 0);
                return a - i > 1
                    ? void this.log(
                          `attachTransferred: waiting for playback to reach new tracks start time ${i} -> ${a}`,
                      )
                    : (this.warn(
                          `attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(r)}"->"${Object.keys(n)}") start time: ${a} currentTime: ${i}`,
                      ),
                      this.onMediaDetaching(u.MEDIA_DETACHING, {}),
                      this.onMediaAttaching(u.MEDIA_ATTACHING, t),
                      void (e.currentTime = a));
            }
            (this.transferData = void 0),
                i.forEach((e) => {
                    let t = e,
                        n = r[t];
                    if (n) {
                        let e = n.buffer;
                        if (e) {
                            let r = this.fragmentTracker,
                                i = n.id;
                            if (r.hasFragments(i) || r.hasParts(i)) {
                                let n = nE.getBuffered(e);
                                r.detectEvictedFragments(t, n, i, null, !0);
                            }
                            let s = s2(t),
                                a = [t, e];
                            (this.sourceBuffers[s] = a),
                                e.updating && this.operationQueue && this.operationQueue.prependBlocker(t),
                                this.trackSourceBuffer(t, n);
                        }
                    }
                }),
                a(),
                this.bufferCreated();
        } else this.log("attachTransferred: MediaSource w/o SourceBuffers"), a();
    }
    get mediaSourceOpenOrEnded() {
        var e;
        let t = null == (e = this.mediaSource) ? void 0 : e.readyState;
        return "open" === t || "ended" === t;
    }
    onMediaDetaching(e, t) {
        let n = !!t.transferMedia;
        this.transferData = this.overrides = void 0;
        let { media: r, mediaSource: i, _objectUrl: s } = this;
        if (i) {
            if ((this.log(`media source ${n ? "transferring" : "detaching"}`), n))
                this.sourceBuffers.forEach(([e]) => {
                    e && this.removeBuffer(e);
                }),
                    this.resetQueue();
            else {
                if (this.mediaSourceOpenOrEnded) {
                    let e = "open" === i.readyState;
                    try {
                        let t = i.sourceBuffers;
                        for (let n = t.length; n--; ) e && t[n].abort(), i.removeSourceBuffer(t[n]);
                        e && i.endOfStream();
                    } catch (e) {
                        this.warn(`onMediaDetaching: ${e.message} while calling endOfStream`);
                    }
                }
                this.sourceBufferCount && this.onBufferReset();
            }
            i.removeEventListener("sourceopen", this._onMediaSourceOpen),
                i.removeEventListener("sourceended", this._onMediaSourceEnded),
                i.removeEventListener("sourceclose", this._onMediaSourceClose),
                this.appendSource &&
                    (i.removeEventListener("startstreaming", this._onStartStreaming),
                    i.removeEventListener("endstreaming", this._onEndStreaming)),
                (this.mediaSource = null),
                (this._objectUrl = null);
        }
        r &&
            (r.removeEventListener("emptied", this._onMediaEmptied),
            n ||
                (s && self.URL.revokeObjectURL(s),
                this.mediaSrc === s
                    ? (r.removeAttribute("src"), this.appendSource && s0(r), r.load())
                    : this.warn("media|source.src was changed by a third party - skip cleanup")),
            (this.media = null)),
            this.hls.trigger(u.MEDIA_DETACHED, t);
    }
    onBufferReset() {
        this.sourceBuffers.forEach(([e]) => {
            e && this.resetBuffer(e);
        }),
            this.initTracks();
    }
    resetBuffer(e) {
        var t, n;
        let r = null == (t = this.tracks[e]) ? void 0 : t.buffer;
        if ((this.removeBuffer(e), r))
            try {
                null != (n = this.mediaSource) && n.sourceBuffers.length && this.mediaSource.removeSourceBuffer(r);
            } catch (t) {
                this.warn(`onBufferReset ${e}`, t);
            }
        delete this.tracks[e];
    }
    removeBuffer(e) {
        this.removeBufferListeners(e), (this.sourceBuffers[s2(e)] = [null, null]);
        let t = this.tracks[e];
        t && (t.buffer = void 0);
    }
    resetQueue() {
        this.operationQueue && this.operationQueue.destroy(), (this.operationQueue = new sq(this.tracks));
    }
    onBufferCodecs(e, t) {
        var n;
        let r = this.tracks,
            i = Object.keys(t);
        this.log(`BUFFER_CODECS: "${i}" (current SB count ${this.sourceBufferCount})`);
        let s = ("audiovideo" in t && (r.audio || r.video)) || (r.audiovideo && ("audio" in t || "video" in t)),
            a = !s && this.sourceBufferCount && this.media && i.some((e) => !r[e]);
        s || a
            ? this.warn(`Unsupported transition between "${Object.keys(r)}" and "${i}" SourceBuffers`)
            : (i.forEach((e) => {
                  var n, i;
                  let { id: s, codec: a, levelCodec: o, container: l, metadata: u, supplemental: c } = t[e],
                      d = r[e],
                      _ = null == (n = this.transferData) || null == (n = n.tracks) ? void 0 : n[e],
                      f = null != _ && _.buffer ? _ : d,
                      h = (null == f ? void 0 : f.pendingCodec) || (null == f ? void 0 : f.codec),
                      p = null == f ? void 0 : f.levelCodec;
                  d ||
                      (d = r[e] =
                          {
                              buffer: void 0,
                              listeners: [],
                              codec: a,
                              supplemental: c,
                              container: l,
                              levelCodec: o,
                              metadata: u,
                              id: s,
                          });
                  let m = e$(h, p),
                      E = null == m ? void 0 : m.replace(sZ, "$1"),
                      g = e$(a, o),
                      A = null == (i = g) ? void 0 : i.replace(sZ, "$1");
                  g &&
                      m &&
                      E !== A &&
                      ("audio" === e.slice(0, 5) && (g = eW(g, this.appendSource)),
                      this.log(`switching codec ${h} to ${g}`),
                      g !== (d.pendingCodec || d.codec) && (d.pendingCodec = g),
                      (d.container = l),
                      this.appendChangeType(e, l, g));
              }),
              (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks),
              !this.sourceBufferCount &&
                  (!(this.bufferCodecEventsTotal > 1) ||
                      this.tracks.video ||
                      t.video ||
                      (null == (n = t.audio) ? void 0 : n.id) !== "main" ||
                      (this.log("Main audio-only"), (this.bufferCodecEventsTotal = 1)),
                  this.mediaSourceOpenOrEnded && this.checkPendingTracks()));
    }
    get sourceBufferTracks() {
        return Object.keys(this.tracks).reduce((e, t) => {
            let n = this.tracks[t];
            return (e[t] = { id: n.id, container: n.container, codec: n.codec, levelCodec: n.levelCodec }), e;
        }, {});
    }
    appendChangeType(e, t, n) {
        let r = `${t};codecs=${n}`,
            i = {
                label: `change-type=${r}`,
                execute: () => {
                    let i = this.tracks[e];
                    if (i) {
                        let s = i.buffer;
                        null != s &&
                            s.changeType &&
                            (this.log(`changing ${e} sourceBuffer type to ${r}`),
                            s.changeType(r),
                            (i.codec = n),
                            (i.container = t));
                    }
                    this.shiftAndExecuteNext(e);
                },
                onStart: () => {},
                onComplete: () => {},
                onError: (t) => {
                    this.warn(`Failed to change ${e} SourceBuffer type`, t);
                },
            };
        this.append(i, e, this.isPending(this.tracks[e]));
    }
    blockAudio(e) {
        var t;
        let n = e.start,
            r = n + 0.05 * e.duration;
        if ((null == (t = this.fragmentTracker.getAppendedFrag(n, m)) ? void 0 : t.gap) === !0) return;
        let i = {
            label: "block-audio",
            execute: () => {
                var e;
                let t = this.tracks.video;
                (this.lastVideoAppendEnd > r ||
                    (null != t && t.buffer && nE.isBuffered(t.buffer, r)) ||
                    (null == (e = this.fragmentTracker.getAppendedFrag(r, m)) ? void 0 : e.gap) === !0) &&
                    ((this.blockedAudioAppend = null), this.shiftAndExecuteNext("audio"));
            },
            onStart: () => {},
            onComplete: () => {},
            onError: (e) => {
                this.warn("Error executing block-audio operation", e);
            },
        };
        (this.blockedAudioAppend = { op: i, frag: e }), this.append(i, "audio", !0);
    }
    unblockAudio() {
        let { blockedAudioAppend: e, operationQueue: t } = this;
        e && t && ((this.blockedAudioAppend = null), t.unblockAudio(e.op));
    }
    onBufferAppending(e, t) {
        let { tracks: n } = this,
            { data: r, type: s, parent: a, frag: c, part: d, chunkMeta: _, offset: f } = t,
            h = _.buffering[s],
            { sn: p, cc: E } = c,
            g = self.performance.now();
        h.start = g;
        let A = c.stats.buffering,
            I = d ? d.stats.buffering : null;
        0 === A.start && (A.start = g), I && 0 === I.start && (I.start = g);
        let T = n.audio,
            S = !1;
        "audio" === s &&
            (null == T ? void 0 : T.container) === "audio/mpeg" &&
            ((S = !this.lastMpegAudioChunk || 1 === _.id || this.lastMpegAudioChunk.sn !== _.sn),
            (this.lastMpegAudioChunk = _));
        let y = n.video,
            v = null == y ? void 0 : y.buffer;
        if (v && "initSegment" !== p) {
            let e = d || c,
                t = this.blockedAudioAppend;
            if ("audio" !== s || "main" === a || this.blockedAudioAppend || y.ending || y.ended) {
                if ("video" === s) {
                    let n = e.end;
                    if (t) {
                        let e = t.frag.start;
                        (n > e || n < this.lastVideoAppendEnd || nE.isBuffered(v, e)) && this.unblockAudio();
                    }
                    this.lastVideoAppendEnd = n;
                }
            } else {
                let t = e.start + 0.05 * e.duration,
                    n = v.buffered,
                    r = this.currentOp("video");
                ((n.length || r) && (r || nE.isBuffered(v, t) || !(this.lastVideoAppendEnd < t))) || this.blockAudio(e);
            }
        }
        let C = (d || c).start,
            N = {
                label: `append-${s}`,
                execute: () => {
                    var e;
                    h.executeStart = self.performance.now();
                    let t = null == (e = this.tracks[s]) ? void 0 : e.buffer;
                    t &&
                        (S
                            ? this.updateTimestampOffset(t, C, 0.1, s, p, E)
                            : void 0 !== f && i(f) && this.updateTimestampOffset(t, f, 1e-6, s, p, E)),
                        this.appendExecutor(r, s);
                },
                onStart: () => {},
                onComplete: () => {
                    let e = self.performance.now();
                    (h.executeEnd = h.end = e), 0 === A.first && (A.first = e), I && 0 === I.first && (I.first = e);
                    let t = {};
                    this.sourceBuffers.forEach(([e, n]) => {
                        e && (t[e] = nE.getBuffered(n));
                    }),
                        (this.appendErrors[s] = 0),
                        "audio" === s || "video" === s
                            ? (this.appendErrors.audiovideo = 0)
                            : ((this.appendErrors.audio = 0), (this.appendErrors.video = 0)),
                        this.hls.trigger(u.BUFFER_APPENDED, {
                            type: s,
                            frag: c,
                            part: d,
                            chunkMeta: _,
                            parent: c.type,
                            timeRanges: t,
                        });
                },
                onError: (e) => {
                    var t;
                    let n = {
                            type: o.MEDIA_ERROR,
                            parent: c.type,
                            details: l.BUFFER_APPEND_ERROR,
                            sourceBufferName: s,
                            frag: c,
                            part: d,
                            chunkMeta: _,
                            error: e,
                            err: e,
                            fatal: !1,
                        },
                        r = null == (t = this.media) ? void 0 : t.error;
                    if (e.code === DOMException.QUOTA_EXCEEDED_ERR || "QuotaExceededError" == e.name || "quota" in e)
                        n.details = l.BUFFER_FULL_ERROR;
                    else if (e.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !r)
                        n.errorAction = tJ(!0);
                    else if (e.name === sX && 0 === this.sourceBufferCount) n.errorAction = tJ(!0);
                    else {
                        let e = ++this.appendErrors[s];
                        this.warn(
                            `Failed ${e}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${s}" sourceBuffer (${r || "no media error"})`,
                        ),
                            (e >= this.hls.config.appendErrorMaxRetry || r) && (n.fatal = !0);
                    }
                    this.hls.trigger(u.ERROR, n);
                },
            };
        this.log(
            `queuing "${s}" append sn: ${p}${d ? " p: " + d.index : ""} of ${c.type === m ? "level" : "track"} ${c.level} cc: ${E}`,
        ),
            this.append(N, s, this.isPending(this.tracks[s]));
    }
    getFlushOp(e, t, n) {
        return (
            this.log(`queuing "${e}" remove ${t}-${n}`),
            {
                label: "remove",
                execute: () => {
                    this.removeExecutor(e, t, n);
                },
                onStart: () => {},
                onComplete: () => {
                    this.hls.trigger(u.BUFFER_FLUSHED, { type: e });
                },
                onError: (r) => {
                    this.warn(`Failed to remove ${t}-${n} from "${e}" SourceBuffer`, r);
                },
            }
        );
    }
    onBufferFlushing(e, t) {
        let { type: n, startOffset: r, endOffset: i } = t;
        n
            ? this.append(this.getFlushOp(n, r, i), n)
            : this.sourceBuffers.forEach(([e]) => {
                  e && this.append(this.getFlushOp(e, r, i), e);
              });
    }
    onFragParsed(e, t) {
        let { frag: n, part: r } = t,
            i = [],
            s = r ? r.elementaryStreams : n.elementaryStreams;
        s[z] ? i.push("audiovideo") : (s[K] && i.push("audio"), s[$] && i.push("video"));
        let a = () => {
            let e = self.performance.now();
            (n.stats.buffering.end = e), r && (r.stats.buffering.end = e);
            let t = r ? r.stats : n.stats;
            this.hls.trigger(u.FRAG_BUFFERED, { frag: n, part: r, stats: t, id: n.type });
        };
        0 === i.length &&
            this.warn(
                `Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`,
            ),
            this.blockBuffers(a, i).catch((e) => {
                this.warn(`Fragment buffered callback ${e}`), this.stepOperationQueue(this.sourceBufferTypes);
            });
    }
    onFragChanged(e, t) {
        this.trimBuffers();
    }
    get bufferedToEnd() {
        return (
            this.sourceBufferCount > 0 &&
            !this.sourceBuffers.some(([e]) => {
                if (e) {
                    let t = this.tracks[e];
                    if (t) return !t.ended || t.ending;
                }
                return !1;
            })
        );
    }
    onBufferEos(e, t) {
        var n;
        this.sourceBuffers.forEach(([e]) => {
            if (e) {
                let n = this.tracks[e];
                (!t.type || t.type === e) &&
                    ((n.ending = !0), n.ended || ((n.ended = !0), this.log(`${e} buffer reached EOS`)));
            }
        });
        let r = (null == (n = this.overrides) ? void 0 : n.endOfStream) !== !1;
        this.sourceBufferCount > 0 &&
        !this.sourceBuffers.some(([e]) => {
            var t;
            return e && !(null != (t = this.tracks[e]) && t.ended);
        })
            ? r
                ? (this.log("Queueing EOS"),
                  this.blockUntilOpen(() => {
                      this.tracksEnded();
                      let { mediaSource: e } = this;
                      if (!e || "open" !== e.readyState) {
                          e &&
                              this.log(
                                  `Could not call mediaSource.endOfStream(). mediaSource.readyState: ${e.readyState}`,
                              );
                          return;
                      }
                      this.log("Calling mediaSource.endOfStream()"),
                          e.endOfStream(),
                          this.hls.trigger(u.BUFFERED_TO_END, void 0);
                  }))
                : (this.tracksEnded(), this.hls.trigger(u.BUFFERED_TO_END, void 0))
            : "video" === t.type && this.unblockAudio();
    }
    tracksEnded() {
        this.sourceBuffers.forEach(([e]) => {
            if (null !== e) {
                let t = this.tracks[e];
                t && (t.ending = !1);
            }
        });
    }
    onLevelUpdated(e, { details: t }) {
        t.fragments.length && ((this.details = t), this.updateDuration());
    }
    updateDuration() {
        this.blockUntilOpen(() => {
            let e = this.getDurationAndRange();
            e && this.updateMediaSource(e);
        });
    }
    onError(e, t) {
        if (t.details === l.BUFFER_APPEND_ERROR && t.frag) {
            var n;
            let e = null == (n = t.errorAction) ? void 0 : n.nextAutoLevel;
            i(e) && e !== t.frag.level && this.resetAppendErrors();
        }
    }
    resetAppendErrors() {
        this.appendErrors = { audio: 0, video: 0, audiovideo: 0 };
    }
    trimBuffers() {
        let { hls: e, details: t, media: n } = this;
        if (!n || null === t || !this.sourceBufferCount) return;
        let r = e.config,
            s = n.currentTime,
            a = t.levelTargetDuration,
            o = t.live && null !== r.liveBackBufferLength ? r.liveBackBufferLength : r.backBufferLength;
        if (i(o) && o >= 0) {
            let e = Math.max(o, a),
                t = Math.floor(s / a) * a - e;
            this.flushBackBuffer(s, a, t);
        }
        let l = r.frontBufferFlushThreshold;
        if (i(l) && l > 0) {
            let e = Math.max(Math.max(r.maxBufferLength, l), a),
                t = Math.floor(s / a) * a + e;
            this.flushFrontBuffer(s, a, t);
        }
    }
    flushBackBuffer(e, t, n) {
        this.sourceBuffers.forEach(([e, t]) => {
            if (t) {
                let i = nE.getBuffered(t);
                if (i.length > 0 && n > i.start(0)) {
                    var r;
                    this.hls.trigger(u.BACK_BUFFER_REACHED, { bufferEnd: n });
                    let t = this.tracks[e];
                    if (null != (r = this.details) && r.live)
                        this.hls.trigger(u.LIVE_BACK_BUFFER_REACHED, { bufferEnd: n });
                    else if (null != t && t.ended)
                        return void this.log(`Cannot flush ${e} back buffer while SourceBuffer is in ended state`);
                    this.hls.trigger(u.BUFFER_FLUSHING, { startOffset: 0, endOffset: n, type: e });
                }
            }
        });
    }
    flushFrontBuffer(e, t, n) {
        this.sourceBuffers.forEach(([t, r]) => {
            if (r) {
                let i = nE.getBuffered(r),
                    s = i.length;
                if (s < 2) return;
                let a = i.start(s - 1),
                    o = i.end(s - 1);
                n > a ||
                    (e >= a && e <= o) ||
                    this.hls.trigger(u.BUFFER_FLUSHING, { startOffset: a, endOffset: 1 / 0, type: t });
            }
        });
    }
    getDurationAndRange() {
        var e;
        let { details: t, mediaSource: n } = this;
        if (!t || !this.media || (null == n ? void 0 : n.readyState) !== "open") return null;
        let r = t.edge;
        if (t.live && this.hls.config.liveDurationInfinity) {
            if (t.fragments.length && n.setLiveSeekableRange) {
                let e = Math.max(0, t.fragmentStart),
                    n = Math.max(e, r);
                return { duration: 1 / 0, start: e, end: n };
            }
            return { duration: 1 / 0 };
        }
        let s = null == (e = this.overrides) ? void 0 : e.duration;
        if (s) return i(s) ? { duration: s } : null;
        let a = this.media.duration;
        return (r > (i(n.duration) ? n.duration : 0) && r > a) || !i(a) ? { duration: r } : null;
    }
    updateMediaSource({ duration: e, start: t, end: n }) {
        let r = this.mediaSource;
        this.media &&
            r &&
            "open" === r.readyState &&
            (r.duration !== e &&
                (i(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), (r.duration = e)),
            void 0 !== t &&
                void 0 !== n &&
                (this.log(`MediaSource duration is set to ${r.duration}. Setting seekable range to ${t}-${n}.`),
                r.setLiveSeekableRange(t, n)));
    }
    get tracksReady() {
        let e = this.pendingTrackCount;
        return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
    }
    checkPendingTracks() {
        let { bufferCodecEventsTotal: e, pendingTrackCount: t, tracks: n } = this;
        if ((this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${tf(n)}`), this.tracksReady)) {
            var r;
            let e = null == (r = this.transferData) ? void 0 : r.tracks;
            e && Object.keys(e).length ? this.attachTransferred() : this.createSourceBuffers();
        }
    }
    bufferCreated() {
        if (this.sourceBufferCount) {
            let e = {};
            this.sourceBuffers.forEach(([t, n]) => {
                if (t) {
                    let r = this.tracks[t];
                    e[t] = {
                        buffer: n,
                        container: r.container,
                        codec: r.codec,
                        supplemental: r.supplemental,
                        levelCodec: r.levelCodec,
                        id: r.id,
                        metadata: r.metadata,
                    };
                }
            }),
                this.hls.trigger(u.BUFFER_CREATED, { tracks: e }),
                this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`),
                this.sourceBuffers.forEach(([e]) => {
                    this.executeNext(e);
                });
        } else {
            let e = Error("could not create source buffer for media codec(s)");
            this.hls.trigger(u.ERROR, {
                type: o.MEDIA_ERROR,
                details: l.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                fatal: !0,
                error: e,
                reason: e.message,
            });
        }
    }
    createSourceBuffers() {
        let { tracks: e, sourceBuffers: t, mediaSource: n } = this;
        if (!n) throw Error("createSourceBuffers called when mediaSource was null");
        for (let i in e) {
            let s = i,
                a = e[s];
            if (this.isPending(a)) {
                let e = this.getTrackCodec(a, s),
                    i = `${a.container};codecs=${e}`;
                (a.codec = e), this.log(`creating sourceBuffer(${i})${this.currentOp(s) ? " Queued" : ""} ${tf(a)}`);
                try {
                    let e = n.addSourceBuffer(i),
                        r = s2(s),
                        o = [s, e];
                    (t[r] = o), (a.buffer = e);
                } catch (e) {
                    var r;
                    this.error(`error while trying to add sourceBuffer: ${e.message}`),
                        this.shiftAndExecuteNext(s),
                        null == (r = this.operationQueue) || r.removeBlockers(),
                        delete this.tracks[s],
                        this.hls.trigger(u.ERROR, {
                            type: o.MEDIA_ERROR,
                            details: l.BUFFER_ADD_CODEC_ERROR,
                            fatal: !1,
                            error: e,
                            sourceBufferName: s,
                            mimeType: i,
                            parent: a.id,
                        });
                    return;
                }
                this.trackSourceBuffer(s, a);
            }
        }
        this.bufferCreated();
    }
    getTrackCodec(e, t) {
        let n = e.supplemental,
            r = e.codec;
        n && ("video" === t || "audiovideo" === t) && eU(n, "video") && (r = eK(r, n));
        let i = e$(r, e.levelCodec);
        return i ? ("audio" === t.slice(0, 5) ? eW(i, this.appendSource) : i) : "";
    }
    trackSourceBuffer(e, t) {
        let n = t.buffer;
        if (!n) return;
        let r = this.getTrackCodec(t, e);
        (this.tracks[e] = {
            buffer: n,
            codec: r,
            container: t.container,
            levelCodec: t.levelCodec,
            supplemental: t.supplemental,
            metadata: t.metadata,
            id: t.id,
            listeners: [],
        }),
            this.removeBufferListeners(e),
            this.addBufferListener(e, "updatestart", this.onSBUpdateStart),
            this.addBufferListener(e, "updateend", this.onSBUpdateEnd),
            this.addBufferListener(e, "error", this.onSBUpdateError),
            this.appendSource &&
                this.addBufferListener(e, "bufferedchange", (e, t) => {
                    let n = t.removedRanges;
                    null != n && n.length && this.hls.trigger(u.BUFFER_FLUSHED, { type: e });
                });
    }
    get mediaSrc() {
        var e, t;
        let n =
            (null == (e = this.media) || null == (t = e.querySelector) ? void 0 : t.call(e, "source")) || this.media;
        return null == n ? void 0 : n.src;
    }
    onSBUpdateStart(e) {
        let t = this.currentOp(e);
        t && t.onStart();
    }
    onSBUpdateEnd(e) {
        var t;
        if ((null == (t = this.mediaSource) ? void 0 : t.readyState) === "closed") return void this.resetBuffer(e);
        let n = this.currentOp(e);
        n && (n.onComplete(), this.shiftAndExecuteNext(e));
    }
    onSBUpdateError(e, t) {
        var n;
        let r = Error(
            `${e} SourceBuffer error. MediaSource readyState: ${null == ((n = this.mediaSource)) ? void 0 : n.readyState}`,
        );
        this.error(`${r}`, t),
            this.hls.trigger(u.ERROR, {
                type: o.MEDIA_ERROR,
                details: l.BUFFER_APPENDING_ERROR,
                sourceBufferName: e,
                error: r,
                fatal: !1,
            });
        let i = this.currentOp(e);
        i && i.onError(r);
    }
    updateTimestampOffset(e, t, n, r, i, s) {
        Math.abs(t - e.timestampOffset) >= n &&
            (this.log(`Updating ${r} SourceBuffer timestampOffset to ${t} (sn: ${i} cc: ${s})`),
            (e.timestampOffset = t));
    }
    removeExecutor(e, t, n) {
        let { media: r, mediaSource: s } = this,
            a = this.tracks[e],
            o = null == a ? void 0 : a.buffer;
        if (!r || !s || !o) {
            this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),
                this.shiftAndExecuteNext(e);
            return;
        }
        let l = i(r.duration) ? r.duration : 1 / 0,
            u = i(s.duration) ? s.duration : 1 / 0,
            c = Math.max(0, t),
            d = Math.min(n, l, u);
        d > c && (!a.ending || a.ended)
            ? ((a.ended = !1), this.log(`Removing [${c},${d}] from the ${e} SourceBuffer`), o.remove(c, d))
            : this.shiftAndExecuteNext(e);
    }
    appendExecutor(e, t) {
        let n = this.tracks[t],
            r = null == n ? void 0 : n.buffer;
        if (!r) throw new sQ(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
        (n.ending = !1), (n.ended = !1), r.appendBuffer(e);
    }
    blockUntilOpen(e) {
        if (this.isUpdating() || this.isQueued())
            this.blockBuffers(e).catch((e) => {
                this.warn(`SourceBuffer blocked callback ${e}`), this.stepOperationQueue(this.sourceBufferTypes);
            });
        else
            try {
                e();
            } catch (e) {
                this.warn(`Callback run without blocking ${this.operationQueue} ${e}`);
            }
    }
    isUpdating() {
        return this.sourceBuffers.some(([e, t]) => e && t.updating);
    }
    isQueued() {
        return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e));
    }
    isPending(e) {
        return !!e && !e.buffer;
    }
    blockBuffers(e, t = this.sourceBufferTypes) {
        if (!t.length)
            return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
        let { operationQueue: n } = this,
            r = t.map((e) => this.appendBlocker(e));
        return (
            t.length > 1 && this.blockedAudioAppend && this.unblockAudio(),
            Promise.all(r).then((t) => {
                n === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes));
            })
        );
    }
    stepOperationQueue(e) {
        e.forEach((e) => {
            var t;
            let n = null == (t = this.tracks[e]) ? void 0 : t.buffer;
            n && !n.updating && this.shiftAndExecuteNext(e);
        });
    }
    append(e, t, n) {
        this.operationQueue && this.operationQueue.append(e, t, n);
    }
    appendBlocker(e) {
        if (this.operationQueue) return this.operationQueue.appendBlocker(e);
    }
    currentOp(e) {
        return this.operationQueue ? this.operationQueue.current(e) : null;
    }
    executeNext(e) {
        e && this.operationQueue && this.operationQueue.executeNext(e);
    }
    shiftAndExecuteNext(e) {
        this.operationQueue && this.operationQueue.shiftAndExecuteNext(e);
    }
    get pendingTrackCount() {
        return Object.keys(this.tracks).reduce((e, t) => e + +!!this.isPending(this.tracks[t]), 0);
    }
    get sourceBufferCount() {
        return this.sourceBuffers.reduce((e, [t]) => e + +!!t, 0);
    }
    get sourceBufferTypes() {
        return this.sourceBuffers.map(([e]) => e).filter((e) => !!e);
    }
    addBufferListener(e, t, n) {
        let r = this.tracks[e];
        if (!r) return;
        let i = r.buffer;
        if (!i) return;
        let s = n.bind(this, e);
        r.listeners.push({ event: t, listener: s }), i.addEventListener(t, s);
    }
    removeBufferListeners(e) {
        let t = this.tracks[e];
        if (!t) return;
        let n = t.buffer;
        n &&
            (t.listeners.forEach((e) => {
                n.removeEventListener(e.event, e.listener);
            }),
            (t.listeners.length = 0));
    }
}
function s0(e) {
    let t = e.querySelectorAll("source");
    [].slice.call(t).forEach((t) => {
        e.removeChild(t);
    });
}
function s1(e, t) {
    let n = self.document.createElement("source");
    (n.type = "video/mp4"), (n.src = t), e.appendChild(n);
}
function s2(e) {
    return +("audio" === e);
}
class s3 {
    constructor(e) {
        (this.hls = void 0),
            (this.autoLevelCapping = void 0),
            (this.firstLevel = void 0),
            (this.media = void 0),
            (this.restrictedLevels = void 0),
            (this.timer = void 0),
            (this.clientRect = void 0),
            (this.streamController = void 0),
            (this.hls = e),
            (this.autoLevelCapping = 1 / 0),
            (this.firstLevel = -1),
            (this.media = null),
            (this.restrictedLevels = []),
            (this.timer = void 0),
            (this.clientRect = null),
            this.registerListeners();
    }
    setStreamController(e) {
        this.streamController = e;
    }
    destroy() {
        this.hls && this.unregisterListener(),
            this.timer && this.stopCapping(),
            (this.media = null),
            (this.clientRect = null),
            (this.hls = this.streamController = null);
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
            e.on(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(u.BUFFER_CODECS, this.onBufferCodecs, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    unregisterListener() {
        let { hls: e } = this;
        e.off(u.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
            e.off(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(u.BUFFER_CODECS, this.onBufferCodecs, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    onFpsDropLevelCapping(e, t) {
        let n = this.hls.levels[t.droppedLevel];
        this.isLevelAllowed(n) && this.restrictedLevels.push({ bitrate: n.bitrate, height: n.height, width: n.width });
    }
    onMediaAttaching(e, t) {
        (this.media = t.media instanceof HTMLVideoElement ? t.media : null),
            (this.clientRect = null),
            this.timer && this.hls.levels.length && this.detectPlayerSize();
    }
    onManifestParsed(e, t) {
        let n = this.hls;
        (this.restrictedLevels = []),
            (this.firstLevel = t.firstLevel),
            n.config.capLevelToPlayerSize && t.video && this.startCapping();
    }
    onLevelsUpdated(e, t) {
        this.timer && i(this.autoLevelCapping) && this.detectPlayerSize();
    }
    onBufferCodecs(e, t) {
        this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
    }
    onMediaDetaching() {
        this.stopCapping(), (this.media = null);
    }
    detectPlayerSize() {
        if (this.media) {
            if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
                this.clientRect = null;
                return;
            }
            let e = this.hls.levels;
            if (e.length) {
                let t = this.hls,
                    n = this.getMaxLevel(e.length - 1);
                n !== this.autoLevelCapping &&
                    t.logger.log(
                        `Setting autoLevelCapping to ${n}: ${e[n].height}p@${e[n].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`,
                    ),
                    (t.autoLevelCapping = n),
                    t.autoLevelEnabled &&
                        t.autoLevelCapping > this.autoLevelCapping &&
                        this.streamController &&
                        this.streamController.nextLevelSwitch(),
                    (this.autoLevelCapping = t.autoLevelCapping);
            }
        }
    }
    getMaxLevel(e) {
        let t = this.hls.levels;
        if (!t.length) return -1;
        let n = t.filter((t, n) => this.isLevelAllowed(t) && n <= e);
        return (this.clientRect = null), s3.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight);
    }
    startCapping() {
        this.timer ||
            ((this.autoLevelCapping = 1 / 0),
            self.clearInterval(this.timer),
            (this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3)),
            this.detectPlayerSize());
    }
    stopCapping() {
        (this.restrictedLevels = []),
            (this.firstLevel = -1),
            (this.autoLevelCapping = 1 / 0),
            this.timer && (self.clearInterval(this.timer), (this.timer = void 0));
    }
    getDimensions() {
        if (this.clientRect) return this.clientRect;
        let e = this.media,
            t = { width: 0, height: 0 };
        if (e) {
            let n = e.getBoundingClientRect();
            (t.width = n.width),
                (t.height = n.height),
                t.width ||
                    t.height ||
                    ((t.width = n.right - n.left || e.width || 0), (t.height = n.bottom - n.top || e.height || 0));
        }
        return (this.clientRect = t), t;
    }
    get mediaWidth() {
        return this.getDimensions().width * this.contentScaleFactor;
    }
    get mediaHeight() {
        return this.getDimensions().height * this.contentScaleFactor;
    }
    get contentScaleFactor() {
        let e = 1;
        if (!this.hls.config.ignoreDevicePixelRatio)
            try {
                e = self.devicePixelRatio;
            } catch (e) {}
        return Math.min(e, this.hls.config.maxDevicePixelRatio);
    }
    isLevelAllowed(e) {
        return !this.restrictedLevels.some(
            (t) => e.bitrate === t.bitrate && e.width === t.width && e.height === t.height,
        );
    }
    static getMaxLevelByMediaSize(e, t, n) {
        if (!(null != e && e.length)) return -1;
        let r = (e, t) => !t || e.width !== t.width || e.height !== t.height,
            i = e.length - 1,
            s = Math.max(t, n);
        for (let t = 0; t < e.length; t += 1) {
            let n = e[t];
            if ((n.width >= s || n.height >= s) && r(n, e[t + 1])) {
                i = t;
                break;
            }
        }
        return i;
    }
}
let s6 = "m",
    s4 = "a",
    s5 = "v",
    s7 = "av",
    s8 = "i",
    s9 = "tt",
    ae = "h";
class at {
    constructor(e, t) {
        Array.isArray(e) && (e = e.map((e) => (e instanceof at ? e : new at(e)))), (this.value = e), (this.params = t);
    }
}
let an = "Dict";
function ar(e) {
    return Array.isArray(e)
        ? JSON.stringify(e)
        : e instanceof Map
          ? "Map{}"
          : e instanceof Set
            ? "Set{}"
            : "object" == typeof e
              ? JSON.stringify(e)
              : String(e);
}
function ai(e, t, n, r) {
    return Error(`failed to ${e} "${ar(t)}" as ${n}`, { cause: r });
}
function as(e, t, n) {
    return ai("serialize", e, t, n);
}
class aa {
    constructor(e) {
        this.description = e;
    }
}
let ao = "Bare Item",
    al = "Boolean";
function au(e) {
    if ("boolean" != typeof e) throw as(e, al);
    return e ? "?1" : "?0";
}
function ac(e) {
    return btoa(String.fromCharCode(...e));
}
let ad = "Byte Sequence";
function a_(e) {
    if (!1 === ArrayBuffer.isView(e)) throw as(e, ad);
    return `:${ac(e)}:`;
}
let af = "Integer";
function ah(e) {
    return e < -0x38d7ea4c67fff || 0x38d7ea4c67fff < e;
}
function ap(e) {
    if (ah(e)) throw as(e, af);
    return e.toString();
}
function am(e) {
    return `@${ap(e.getTime() / 1e3)}`;
}
function aE(e, t) {
    if (e < 0) return -aE(-e, t);
    let n = Math.pow(10, t);
    if (!(Math.abs(((e * n) % 1) - 0.5) < Number.EPSILON)) return Math.round(e * n) / n;
    {
        let t = Math.floor(e * n);
        return (t % 2 == 0 ? t : t + 1) / n;
    }
}
let ag = "Decimal";
function aA(e) {
    let t = aE(e, 3);
    if (Math.floor(Math.abs(t)).toString().length > 12) throw as(e, ag);
    let n = t.toString();
    return n.includes(".") ? n : `${n}.0`;
}
let aI = "String",
    aT = /[\x00-\x1f\x7f]+/;
function aS(e) {
    if (aT.test(e)) throw as(e, aI);
    return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function ay(e) {
    return e.description || e.toString().slice(7, -1);
}
let av = "Token";
function aC(e) {
    let t = ay(e);
    if (!1 === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t)) throw as(t, av);
    return t;
}
function aN(e) {
    switch (typeof e) {
        case "number":
            if (!i(e)) throw as(e, ao);
            if (Number.isInteger(e)) return ap(e);
            return aA(e);
        case "string":
            return aS(e);
        case "symbol":
            return aC(e);
        case "boolean":
            return au(e);
        case "object":
            if (e instanceof Date) return am(e);
            if (e instanceof Uint8Array) return a_(e);
            if (e instanceof aa) return aC(e);
        default:
            throw as(e, ao);
    }
}
let aR = "Key";
function ab(e) {
    if (!1 === /^[a-z*][a-z0-9\-_.*]*$/.test(e)) throw as(e, aR);
    return e;
}
function aO(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map(([e, t]) => (!0 === t ? `;${ab(e)}` : `;${ab(e)}=${aN(t)}`))
              .join("");
}
function aD(e) {
    return e instanceof at ? `${aN(e.value)}${aO(e.params)}` : aN(e);
}
function aL(e) {
    return `(${e.value.map(aD).join(" ")})${aO(e.params)}`;
}
function aw(e, t = { whitespace: !0 }) {
    if ("object" != typeof e || null == e) throw as(e, an);
    let n = e instanceof Map ? e.entries() : Object.entries(e),
        r = (null == t ? void 0 : t.whitespace) ? " " : "";
    return Array.from(n)
        .map(([e, t]) => {
            t instanceof at == !1 && (t = new at(t));
            let n = ab(e);
            return (
                !0 === t.value
                    ? (n += aO(t.params))
                    : ((n += "="), Array.isArray(t.value) ? (n += aL(t)) : (n += aD(t))),
                n
            );
        })
        .join(`,${r}`);
}
function aM(e, t) {
    return aw(e, t);
}
let ax = "CMCD-Object",
    aP = "CMCD-Request",
    ak = "CMCD-Session",
    aU = "CMCD-Status",
    aG = {
        br: ax,
        ab: ax,
        d: ax,
        ot: ax,
        tb: ax,
        tpb: ax,
        lb: ax,
        tab: ax,
        lab: ax,
        url: ax,
        pb: aP,
        bl: aP,
        tbl: aP,
        dl: aP,
        ltc: aP,
        mtp: aP,
        nor: aP,
        nrr: aP,
        rc: aP,
        sn: aP,
        sta: aP,
        su: aP,
        ttfb: aP,
        ttfbb: aP,
        ttlb: aP,
        cmsdd: aP,
        cmsds: aP,
        smrt: aP,
        df: aP,
        cs: aP,
        ts: aP,
        cid: ak,
        pr: ak,
        sf: ak,
        sid: ak,
        st: ak,
        v: ak,
        msd: ak,
        bs: aU,
        bsd: aU,
        cdn: aU,
        rtp: aU,
        bg: aU,
        pt: aU,
        ec: aU,
        e: aU,
    },
    aF = aP;
function aB(e) {
    return Object.keys(e).reduce((t, n) => {
        var r;
        return null == (r = e[n]) || r.forEach((e) => (t[e] = n)), t;
    }, {});
}
function aV(e, t) {
    let n = {};
    if (!e) return n;
    let r = Object.keys(e),
        i = t ? aB(t) : {};
    return r.reduce((t, n) => {
        var r;
        let s = aG[n] || i[n] || aF;
        return ((null != (r = t[s]) ? r : (t[s] = {}))[n] = e[n]), t;
    }, n);
}
function aH(e) {
    return ["ot", "sf", "st", "e", "sta"].includes(e);
}
function aj(e) {
    return "number" == typeof e ? i(e) : null != e && "" !== e && !1 !== e;
}
let aY = "event";
function aW(e, t) {
    let n = new URL(e),
        r = new URL(t);
    if (n.origin !== r.origin) return e;
    let i = n.pathname.split("/").slice(1),
        s = r.pathname.split("/").slice(1, -1);
    for (; i[0] === s[0]; ) i.shift(), s.shift();
    for (; s.length; ) s.shift(), i.unshift("..");
    return i.join("/") + n.search + n.hash;
}
let aK = (e) => Math.round(e),
    a$ = (e, t) =>
        Array.isArray(e)
            ? e.map((e) => a$(e, t))
            : e instanceof at && "string" == typeof e.value
              ? new at(a$(e.value, t), e.params)
              : (t.baseUrl && (e = aW(e, t.baseUrl)), 1 === t.version ? encodeURIComponent(e) : e),
    az = (e) => 100 * aK(e / 100),
    aq = {
        br: aK,
        d: aK,
        bl: az,
        dl: az,
        mtp: az,
        nor: (e, t) => {
            let n = e;
            return (
                t.version >= 2 &&
                    (e instanceof at && "string" == typeof e.value
                        ? (n = new at([e]))
                        : "string" == typeof e && (n = [e])),
                a$(n, t)
            );
        },
        rtp: az,
        tb: aK,
    },
    aZ = "request",
    aX = "response",
    aQ = [
        "ab",
        "bg",
        "bl",
        "br",
        "bs",
        "bsd",
        "cdn",
        "cid",
        "cs",
        "df",
        "ec",
        "lab",
        "lb",
        "ltc",
        "msd",
        "mtp",
        "pb",
        "pr",
        "pt",
        "sf",
        "sid",
        "sn",
        "st",
        "sta",
        "tab",
        "tb",
        "tbl",
        "tpb",
        "ts",
        "v",
    ],
    aJ = ["e"],
    a0 = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function a1(e) {
    return a0.test(e);
}
let a2 = ["d", "dl", "nor", "ot", "rtp", "su"],
    a3 = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"],
    a6 = [
        "bl",
        "br",
        "bs",
        "cid",
        "d",
        "dl",
        "mtp",
        "nor",
        "nrr",
        "ot",
        "pr",
        "rtp",
        "sf",
        "sid",
        "st",
        "su",
        "tb",
        "v",
    ];
function a4(e) {
    return a6.includes(e) || a1(e);
}
let a5 = {
    [aX]: function (e) {
        return aQ.includes(e) || a2.includes(e) || a3.includes(e) || a1(e);
    },
    [aY]: function (e) {
        return aQ.includes(e) || aJ.includes(e) || a1(e);
    },
    [aZ]: function (e) {
        return aQ.includes(e) || a2.includes(e) || a1(e);
    },
};
function a7(e, t = {}) {
    let n = {};
    if (null == e || "object" != typeof e) return n;
    let r = t.version || e.v || 1,
        s = t.reportingMode || aZ,
        a = 1 === r ? a4 : a5[s],
        o = Object.keys(e).filter(a),
        l = t.filter;
    "function" == typeof l && (o = o.filter(l));
    let u = s === aX || s === aY;
    u && !o.includes("ts") && o.push("ts"), r > 1 && !o.includes("v") && o.push("v");
    let c = S({}, aq, t.formatters),
        d = { version: r, reportingMode: s, baseUrl: t.baseUrl };
    return (
        o.sort().forEach((t) => {
            let s = e[t],
                a = c[t];
            if (("function" == typeof a && (s = a(s, d)), "v" === t))
                if (1 === r) return;
                else s = r;
            ("pr" == t && 1 === s) ||
                (u && "ts" === t && !i(s) && (s = Date.now()),
                aj(s) && (aH(t) && "string" == typeof s && (s = new aa(s)), (n[t] = s)));
        }),
        n
    );
}
function a8(e, t = {}) {
    let n = {};
    return e
        ? Object.entries(aV(a7(e, t), null == t ? void 0 : t.customHeaderMap)).reduce((e, [t, n]) => {
              let r = aM(n, { whitespace: !1 });
              return r && (e[t] = r), e;
          }, n)
        : n;
}
function a9(e, t, n) {
    return S(e, a8(t, n));
}
let oe = "CMCD";
function ot(e, t = {}) {
    return e ? aM(a7(e, t), { whitespace: !1 }) : "";
}
function on(e, t = {}) {
    return e ? encodeURIComponent(ot(e, t)) : "";
}
function or(e, t = {}) {
    if (!e) return "";
    let n = on(e, t);
    return `${oe}=${n}`;
}
let oi = /CMCD=[^&#]+/;
function os(e, t, n) {
    let r = or(t, n);
    if (!r) return e;
    if (oi.test(e)) return e.replace(oi, r);
    let i = e.includes("?") ? "&" : "?";
    return `${e}${i}${r}`;
}
class oa {
    constructor(e) {
        (this.hls = void 0),
            (this.config = void 0),
            (this.media = void 0),
            (this.sid = void 0),
            (this.cid = void 0),
            (this.useHeaders = !1),
            (this.includeKeys = void 0),
            (this.initialized = !1),
            (this.starved = !1),
            (this.buffering = !0),
            (this.audioBuffer = void 0),
            (this.videoBuffer = void 0),
            (this.onWaiting = () => {
                this.initialized && (this.starved = !0), (this.buffering = !0);
            }),
            (this.onPlaying = () => {
                this.initialized || (this.initialized = !0), (this.buffering = !1);
            }),
            (this.applyPlaylistData = (e) => {
                try {
                    this.apply(e, { ot: s6, su: !this.initialized });
                } catch (e) {
                    this.hls.logger.warn("Could not generate manifest CMCD data.", e);
                }
            }),
            (this.applyFragmentData = (e) => {
                try {
                    let { frag: t, part: n } = e,
                        r = this.hls.levels[t.level],
                        i = this.getObjectType(t),
                        s = { d: 1e3 * (n || t).duration, ot: i };
                    (i === s5 || i === s4 || i == s7) &&
                        ((s.br = r.bitrate / 1e3),
                        (s.tb = this.getTopBandwidth(i) / 1e3),
                        (s.bl = this.getBufferLength(i)));
                    let a = n ? this.getNextPart(n) : this.getNextFrag(t);
                    null != a && a.url && a.url !== t.url && (s.nor = a.url), this.apply(e, s);
                } catch (e) {
                    this.hls.logger.warn("Could not generate segment CMCD data.", e);
                }
            }),
            (this.hls = e);
        const t = (this.config = e.config),
            { cmcd: n } = t;
        null != n &&
            ((t.pLoader = this.createPlaylistLoader()),
            (t.fLoader = this.createFragmentLoader()),
            (this.sid = n.sessionId || e.sessionId),
            (this.cid = n.contentId),
            (this.useHeaders = !0 === n.useHeaders),
            (this.includeKeys = n.includeKeys),
            this.registerListeners());
    }
    registerListeners() {
        let e = this.hls;
        e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHED, this.onMediaDetached, this),
            e.on(u.BUFFER_CREATED, this.onBufferCreated, this);
    }
    unregisterListeners() {
        let e = this.hls;
        e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHED, this.onMediaDetached, this),
            e.off(u.BUFFER_CREATED, this.onBufferCreated, this);
    }
    destroy() {
        this.unregisterListeners(),
            this.onMediaDetached(),
            (this.hls = this.config = this.audioBuffer = this.videoBuffer = null),
            (this.onWaiting = this.onPlaying = this.media = null);
    }
    onMediaAttached(e, t) {
        (this.media = t.media),
            this.media.addEventListener("waiting", this.onWaiting),
            this.media.addEventListener("playing", this.onPlaying);
    }
    onMediaDetached() {
        this.media &&
            (this.media.removeEventListener("waiting", this.onWaiting),
            this.media.removeEventListener("playing", this.onPlaying),
            (this.media = null));
    }
    onBufferCreated(e, t) {
        var n, r;
        (this.audioBuffer = null == (n = t.tracks.audio) ? void 0 : n.buffer),
            (this.videoBuffer = null == (r = t.tracks.video) ? void 0 : r.buffer);
    }
    createData() {
        var e;
        return {
            v: 1,
            sf: ae,
            sid: this.sid,
            cid: this.cid,
            pr: null == (e = this.media) ? void 0 : e.playbackRate,
            mtp: this.hls.bandwidthEstimate / 1e3,
        };
    }
    apply(e, t = {}) {
        S(t, this.createData());
        let n = t.ot === s8 || t.ot === s5 || t.ot === s7;
        this.starved && n && ((t.bs = !0), (t.su = !0), (this.starved = !1)), null == t.su && (t.su = this.buffering);
        let { includeKeys: r } = this;
        r && (t = Object.keys(t).reduce((e, n) => (r.includes(n) && (e[n] = t[n]), e), {}));
        let i = { baseUrl: e.url };
        this.useHeaders ? (e.headers || (e.headers = {}), a9(e.headers, t, i)) : (e.url = os(e.url, t, i));
    }
    getNextFrag(e) {
        var t;
        let n = null == (t = this.hls.levels[e.level]) ? void 0 : t.details;
        if (n) {
            let t = e.sn - n.startSN;
            return n.fragments[t + 1];
        }
    }
    getNextPart(e) {
        var t;
        let { index: n, fragment: r } = e,
            i = null == (t = this.hls.levels[r.level]) || null == (t = t.details) ? void 0 : t.partList;
        if (i) {
            let { sn: e } = r;
            for (let t = i.length - 1; t >= 0; t--) {
                let r = i[t];
                if (r.index === n && r.fragment.sn === e) return i[t + 1];
            }
        }
    }
    getObjectType(e) {
        let { type: t } = e;
        return "subtitle" === t
            ? s9
            : "initSegment" === e.sn
              ? s8
              : "audio" === t
                ? s4
                : "main" === t
                  ? this.hls.audioTracks.length
                      ? s5
                      : s7
                  : void 0;
    }
    getTopBandwidth(e) {
        let t,
            n = 0,
            r = this.hls;
        if (e === s4) t = r.audioTracks;
        else {
            let e = r.maxAutoLevel,
                n = e > -1 ? e + 1 : r.levels.length;
            t = r.levels.slice(0, n);
        }
        return (
            t.forEach((e) => {
                e.bitrate > n && (n = e.bitrate);
            }),
            n > 0 ? n : NaN
        );
    }
    getBufferLength(e) {
        let t = this.media,
            n = e === s4 ? this.audioBuffer : this.videoBuffer;
        return n && t ? 1e3 * nE.bufferInfo(n, t.currentTime, this.config.maxBufferHole).len : NaN;
    }
    createPlaylistLoader() {
        let { pLoader: e } = this.config,
            t = this.applyPlaylistData,
            n = e || this.config.loader;
        return class {
            constructor(e) {
                (this.loader = void 0), (this.loader = new n(e));
            }
            get stats() {
                return this.loader.stats;
            }
            get context() {
                return this.loader.context;
            }
            destroy() {
                this.loader.destroy();
            }
            abort() {
                this.loader.abort();
            }
            load(e, n, r) {
                t(e), this.loader.load(e, n, r);
            }
        };
    }
    createFragmentLoader() {
        let { fLoader: e } = this.config,
            t = this.applyFragmentData,
            n = e || this.config.loader;
        return class {
            constructor(e) {
                (this.loader = void 0), (this.loader = new n(e));
            }
            get stats() {
                return this.loader.stats;
            }
            get context() {
                return this.loader.context;
            }
            destroy() {
                this.loader.destroy();
            }
            abort() {
                this.loader.abort();
            }
            load(e, n, r) {
                t(e), this.loader.load(e, n, r);
            }
        };
    }
}
let oo = 3e5;
class ol extends R {
    constructor(e) {
        super("content-steering", e.logger),
            (this.hls = void 0),
            (this.loader = null),
            (this.uri = null),
            (this.pathwayId = "."),
            (this._pathwayPriority = null),
            (this.timeToLoad = 300),
            (this.reloadTimer = -1),
            (this.updated = 0),
            (this.started = !1),
            (this.enabled = !0),
            (this.levels = null),
            (this.audioTracks = null),
            (this.subtitleTracks = null),
            (this.penalizedPathways = {}),
            (this.hls = e),
            this.registerListeners();
    }
    registerListeners() {
        let e = this.hls;
        e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(u.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let e = this.hls;
        e &&
            (e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(u.ERROR, this.onError, this));
    }
    pathways() {
        return (this.levels || []).reduce((e, t) => (-1 === e.indexOf(t.pathwayId) && e.push(t.pathwayId), e), []);
    }
    get pathwayPriority() {
        return this._pathwayPriority;
    }
    set pathwayPriority(e) {
        this.updatePathwayPriority(e);
    }
    startLoad() {
        if (((this.started = !0), this.clearTimeout(), this.enabled && this.uri)) {
            if (this.updated) {
                let e = 1e3 * this.timeToLoad - (performance.now() - this.updated);
                if (e > 0) return void this.scheduleRefresh(this.uri, e);
            }
            this.loadSteeringManifest(this.uri);
        }
    }
    stopLoad() {
        (this.started = !1), this.loader && (this.loader.destroy(), (this.loader = null)), this.clearTimeout();
    }
    clearTimeout() {
        -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), (this.reloadTimer = -1));
    }
    destroy() {
        this.unregisterListeners(),
            this.stopLoad(),
            (this.hls = null),
            (this.levels = this.audioTracks = this.subtitleTracks = null);
    }
    removeLevel(e) {
        let t = this.levels;
        t && (this.levels = t.filter((t) => t !== e));
    }
    onManifestLoading() {
        this.stopLoad(),
            (this.enabled = !0),
            (this.timeToLoad = 300),
            (this.updated = 0),
            (this.uri = null),
            (this.pathwayId = "."),
            (this.levels = this.audioTracks = this.subtitleTracks = null);
    }
    onManifestLoaded(e, t) {
        let { contentSteering: n } = t;
        null !== n && ((this.pathwayId = n.pathwayId), (this.uri = n.uri), this.started && this.startLoad());
    }
    onManifestParsed(e, t) {
        (this.audioTracks = t.audioTracks), (this.subtitleTracks = t.subtitleTracks);
    }
    onError(e, t) {
        let { errorAction: n } = t;
        if ((null == n ? void 0 : n.action) === tW && n.flags === tq) {
            let e = this.levels,
                r = this._pathwayPriority,
                i = this.pathwayId;
            if (t.context) {
                let { groupId: n, pathwayId: r, type: s } = t.context;
                n && e ? (i = this.getPathwayForGroupId(n, s, i)) : r && (i = r);
            }
            i in this.penalizedPathways || (this.penalizedPathways[i] = performance.now()),
                !r && e && (r = this.pathways()),
                r && r.length > 1 && (this.updatePathwayPriority(r), (n.resolved = this.pathwayId !== i)),
                t.details !== l.BUFFER_APPEND_ERROR || t.fatal
                    ? n.resolved ||
                      this.warn(
                          `Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${i} levels: ${e ? e.length : e} priorities: ${tf(r)} penalized: ${tf(this.penalizedPathways)}`,
                      )
                    : (n.resolved = !0);
        }
    }
    filterParsedLevels(e) {
        this.levels = e;
        let t = this.getLevelsForPathway(this.pathwayId);
        if (0 === t.length) {
            let n = e[0].pathwayId;
            this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${n}"`),
                (t = this.getLevelsForPathway(n)),
                (this.pathwayId = n);
        }
        return (
            t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t
        );
    }
    getLevelsForPathway(e) {
        return null === this.levels ? [] : this.levels.filter((t) => e === t.pathwayId);
    }
    updatePathwayPriority(e) {
        let t;
        this._pathwayPriority = e;
        let n = this.penalizedPathways,
            r = performance.now();
        Object.keys(n).forEach((e) => {
            r - n[e] > oo && delete n[e];
        });
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (i in n) continue;
            if (i === this.pathwayId) return;
            let s = this.hls.nextLoadLevel,
                a = this.hls.levels[s];
            if ((t = this.getLevelsForPathway(i)).length > 0) {
                this.log(`Setting Pathway to "${i}"`),
                    (this.pathwayId = i),
                    rb(t),
                    this.hls.trigger(u.LEVELS_UPDATED, { levels: t });
                let e = this.hls.levels[s];
                a &&
                    e &&
                    this.levels &&
                    (e.attrs["STABLE-VARIANT-ID"] !== a.attrs["STABLE-VARIANT-ID"] &&
                        e.bitrate !== a.bitrate &&
                        this.log(`Unstable Pathways change from bitrate ${a.bitrate} to ${e.bitrate}`),
                    (this.hls.nextLoadLevel = s));
                break;
            }
        }
    }
    getPathwayForGroupId(e, t, n) {
        let r = this.getLevelsForPathway(n).concat(this.levels || []);
        for (let n = 0; n < r.length; n++)
            if ((t === h && r[n].hasAudioGroup(e)) || (t === p && r[n].hasSubtitleGroup(e))) return r[n].pathwayId;
        return n;
    }
    clonePathways(e) {
        let t = this.levels;
        if (!t) return;
        let n = {},
            r = {};
        e.forEach((e) => {
            let { ID: i, "BASE-ID": s, "URI-REPLACEMENT": a } = e;
            if (t.some((e) => e.pathwayId === i)) return;
            let o = this.getLevelsForPathway(s).map((e) => {
                let t = new nC(e.attrs);
                t["PATHWAY-ID"] = i;
                let s = t.AUDIO && `${t.AUDIO}_clone_${i}`,
                    o = t.SUBTITLES && `${t.SUBTITLES}_clone_${i}`;
                s && ((n[t.AUDIO] = s), (t.AUDIO = s)), o && ((r[t.SUBTITLES] = o), (t.SUBTITLES = o));
                let l = oc(e.uri, t["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", a),
                    u = new tl({
                        attrs: t,
                        audioCodec: e.audioCodec,
                        bitrate: e.bitrate,
                        height: e.height,
                        name: e.name,
                        url: l,
                        videoCodec: e.videoCodec,
                        width: e.width,
                    });
                if (e.audioGroups)
                    for (let t = 1; t < e.audioGroups.length; t++)
                        u.addGroupId("audio", `${e.audioGroups[t]}_clone_${i}`);
                if (e.subtitleGroups)
                    for (let t = 1; t < e.subtitleGroups.length; t++)
                        u.addGroupId("text", `${e.subtitleGroups[t]}_clone_${i}`);
                return u;
            });
            t.push(...o), ou(this.audioTracks, n, a, i), ou(this.subtitleTracks, r, a, i);
        });
    }
    loadSteeringManifest(e) {
        let t,
            n = this.hls.config,
            r = n.loader;
        this.loader && this.loader.destroy(), (this.loader = new r(n));
        try {
            t = new self.URL(e);
        } catch (t) {
            (this.enabled = !1), this.log(`Failed to parse Steering Manifest URI: ${e}`);
            return;
        }
        if ("data:" !== t.protocol) {
            let e = 0 | (this.hls.bandwidthEstimate || n.abrEwmaDefaultEstimate);
            t.searchParams.set("_HLS_pathway", this.pathwayId), t.searchParams.set("_HLS_throughput", "" + e);
        }
        let i = { responseType: "json", url: t.href },
            s = n.steeringManifestLoadPolicy.default,
            a = s.errorRetry || s.timeoutRetry || {},
            o = {
                loadPolicy: s,
                timeout: s.maxLoadTimeMs,
                maxRetry: a.maxNumRetry || 0,
                retryDelay: a.retryDelayMs || 0,
                maxRetryDelay: a.maxRetryDelayMs || 0,
            },
            l = {
                onSuccess: (e, n, r, i) => {
                    this.log(`Loaded steering manifest: "${t}"`);
                    let s = e.data;
                    if ((null == s ? void 0 : s.VERSION) !== 1)
                        return void this.log(`Steering VERSION ${s.VERSION} not supported!`);
                    (this.updated = performance.now()), (this.timeToLoad = s.TTL);
                    let { "RELOAD-URI": a, "PATHWAY-CLONES": o, "PATHWAY-PRIORITY": l } = s;
                    if (a)
                        try {
                            this.uri = new self.URL(a, t).href;
                        } catch (e) {
                            (this.enabled = !1), this.log(`Failed to parse Steering Manifest RELOAD-URI: ${a}`);
                            return;
                        }
                    this.scheduleRefresh(this.uri || r.url), o && this.clonePathways(o);
                    let c = { steeringManifest: s, url: t.toString() };
                    this.hls.trigger(u.STEERING_MANIFEST_LOADED, c), l && this.updatePathwayPriority(l);
                },
                onError: (e, t, n, r) => {
                    if (
                        (this.log(`Error loading steering manifest: ${e.code} ${e.text} (${t.url})`),
                        this.stopLoad(),
                        410 === e.code)
                    ) {
                        (this.enabled = !1), this.log(`Steering manifest ${t.url} no longer available`);
                        return;
                    }
                    let i = 1e3 * this.timeToLoad;
                    if (429 === e.code) {
                        let e = this.loader;
                        if ("function" == typeof (null == e ? void 0 : e.getResponseHeader)) {
                            let t = e.getResponseHeader("Retry-After");
                            t && (i = 1e3 * parseFloat(t));
                        }
                        this.log(`Steering manifest ${t.url} rate limited`);
                        return;
                    }
                    this.scheduleRefresh(this.uri || t.url, i);
                },
                onTimeout: (e, t, n) => {
                    this.log(`Timeout loading steering manifest (${t.url})`), this.scheduleRefresh(this.uri || t.url);
                },
            };
        this.log(`Requesting steering manifest: ${t}`), this.loader.load(i, o, l);
    }
    scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
        this.clearTimeout(),
            (this.reloadTimer = self.setTimeout(() => {
                var t;
                let n = null == (t = this.hls) ? void 0 : t.media;
                n && !n.ended ? this.loadSteeringManifest(e) : this.scheduleRefresh(e, 1e3 * this.timeToLoad);
            }, t));
    }
}
function ou(e, t, n, r) {
    e &&
        Object.keys(t).forEach((i) => {
            let s = e
                .filter((e) => e.groupId === i)
                .map((e) => {
                    let s = S({}, e);
                    return (
                        (s.details = void 0),
                        (s.attrs = new nC(s.attrs)),
                        (s.url = s.attrs.URI = oc(e.url, e.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", n)),
                        (s.groupId = s.attrs["GROUP-ID"] = t[i]),
                        (s.attrs["PATHWAY-ID"] = r),
                        s
                    );
                });
            e.push(...s);
        });
}
function oc(e, t, n, r) {
    let i,
        { HOST: s, PARAMS: a, [n]: o } = r;
    t && (i = null == o ? void 0 : o[t]) && (e = i);
    let l = new self.URL(e);
    return (
        s && !i && (l.host = s),
        a &&
            Object.keys(a)
                .sort()
                .forEach((e) => {
                    e && l.searchParams.set(e, a[e]);
                }),
        l.href
    );
}
class od extends R {
    constructor(e) {
        super("eme", e.logger),
            (this.hls = void 0),
            (this.config = void 0),
            (this.media = null),
            (this.keyFormatPromise = null),
            (this.keySystemAccessPromises = {}),
            (this._requestLicenseFailureCount = 0),
            (this.mediaKeySessions = []),
            (this.keyIdToKeySessionPromise = {}),
            (this.mediaKeys = null),
            (this.setMediaKeysQueue = od.CDMCleanupPromise ? [od.CDMCleanupPromise] : []),
            (this.bannedKeyIds = {}),
            (this.onMediaEncrypted = (e) => {
                let { initDataType: t, initData: n } = e,
                    r = `"${e.type}" event: init data type: "${t}"`;
                if ((this.debug(r), null !== n)) {
                    if (!this.keyFormatPromise) {
                        let e = Object.keys(this.keySystemAccessPromises);
                        e.length || (e = nQ(this.config));
                        let t = e.map(nX).filter((e) => !!e);
                        this.keyFormatPromise = this.getKeyFormatPromise(t);
                    }
                    this.keyFormatPromise
                        .then((i) => {
                            let s,
                                a = nZ(i);
                            if ("sinf" !== t || a !== nj)
                                return void this.log(
                                    `Ignoring "${e.type}" event with init data type: "${t}" for selected key-system ${a}`,
                                );
                            try {
                                let e = ei(new Uint8Array(n)),
                                    t = nk(JSON.parse(e).sinf),
                                    r = eI(t);
                                if (!r) throw Error("'schm' box missing or not cbcs/cenc with schi > tenc");
                                s = new Uint8Array(r.subarray(8, 24));
                            } catch (e) {
                                this.warn(`${r} Failed to parse sinf: ${e}`);
                                return;
                            }
                            let o = B(s),
                                { keyIdToKeySessionPromise: l, mediaKeySessions: u } = this,
                                c = l[o];
                            for (let e = 0; e < u.length; e++) {
                                let r = u[e],
                                    i = r.decryptdata;
                                if (!i.keyId) continue;
                                let a = B(i.keyId);
                                if (nw(s, i.keyId) || -1 !== i.uri.replace(/-/g, "").indexOf(o)) {
                                    if (!(c = l[a])) continue;
                                    if (i.pssh) break;
                                    delete l[a],
                                        (i.pssh = new Uint8Array(n)),
                                        (i.keyId = s),
                                        (c = l[o] =
                                            c.then(() =>
                                                this.generateRequestWithPreferredKeySession(
                                                    r,
                                                    t,
                                                    n,
                                                    "encrypted-event-key-match",
                                                ),
                                            )).catch((e) => this.handleError(e));
                                    break;
                                }
                            }
                            c ||
                                this.handleError(
                                    Error(`Key ID ${o} not encountered in playlist. Key-system sessions ${u.length}.`),
                                );
                        })
                        .catch((e) => this.handleError(e));
                }
            }),
            (this.onWaitingForKey = (e) => {
                this.log(`"${e.type}" event`);
            }),
            (this.hls = e),
            (this.config = e.config),
            this.registerListeners();
    }
    destroy() {
        this.onDestroying(), this.onMediaDetached();
        let e = this.config;
        (e.requestMediaKeySystemAccessFunc = null),
            (e.licenseXhrSetup = e.licenseResponseCallback = void 0),
            (e.drmSystems = e.drmSystemOptions = {}),
            (this.hls = this.config = this.keyIdToKeySessionPromise = null),
            (this.onMediaEncrypted = this.onWaitingForKey = null);
    }
    registerListeners() {
        this.hls.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.on(u.MEDIA_DETACHED, this.onMediaDetached, this),
            this.hls.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.on(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            this.hls.on(u.DESTROYING, this.onDestroying, this);
    }
    unregisterListeners() {
        this.hls.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.off(u.MEDIA_DETACHED, this.onMediaDetached, this),
            this.hls.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.off(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            this.hls.off(u.DESTROYING, this.onDestroying, this);
    }
    getLicenseServerUrl(e) {
        let { drmSystems: t, widevineLicenseUrl: n } = this.config,
            r = null == t ? void 0 : t[e];
        return r ? r.licenseUrl : e === nW && n ? n : void 0;
    }
    getLicenseServerUrlOrThrow(e) {
        let t = this.getLicenseServerUrl(e);
        if (void 0 === t) throw Error(`no license server URL configured for key-system "${e}"`);
        return t;
    }
    getServerCertificateUrl(e) {
        let { drmSystems: t } = this.config,
            n = null == t ? void 0 : t[e];
        if (n) return n.serverCertificateUrl;
        this.log(`No Server Certificate in config.drmSystems["${e}"]`);
    }
    attemptKeySystemAccess(e) {
        let t = this.hls.levels,
            n = (e, t, n) => !!e && n.indexOf(e) === t,
            r = t.map((e) => e.audioCodec).filter(n),
            i = t.map((e) => e.videoCodec).filter(n);
        return (
            r.length + i.length === 0 && i.push("avc1.42e01e"),
            new Promise((t, n) => {
                let s = (e) => {
                    let a = e.shift();
                    this.getMediaKeysPromise(a, r, i)
                        .then((e) => t({ keySystem: a, mediaKeys: e }))
                        .catch((t) => {
                            e.length
                                ? s(e)
                                : t instanceof oh
                                  ? n(t)
                                  : n(
                                        new oh(
                                            {
                                                type: o.KEY_SYSTEM_ERROR,
                                                details: l.KEY_SYSTEM_NO_ACCESS,
                                                error: t,
                                                fatal: !0,
                                            },
                                            t.message,
                                        ),
                                    );
                        });
                };
                s(e);
            })
        );
    }
    requestMediaKeySystemAccess(e, t) {
        let { requestMediaKeySystemAccessFunc: n } = this.config;
        if ("function" != typeof n) {
            let e = `Configured requestMediaKeySystemAccess is not a function ${n}`;
            return (
                null === nJ &&
                    "http:" === self.location.protocol &&
                    (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),
                Promise.reject(Error(e))
            );
        }
        return n(e, t);
    }
    getMediaKeysPromise(e, t, n) {
        var r;
        let i = n0(e, t, n, this.config.drmSystemOptions || {}),
            s = this.keySystemAccessPromises[e],
            a = null == (r = s) ? void 0 : r.keySystemAccess;
        if (!a) {
            this.log(`Requesting encrypted media "${e}" key-system access with config: ${tf(i)}`),
                (a = this.requestMediaKeySystemAccess(e, i));
            let t = (s = this.keySystemAccessPromises[e] = { keySystemAccess: a });
            return (
                a.catch((t) => {
                    this.log(`Failed to obtain access to key-system "${e}": ${t}`);
                }),
                a.then((n) => {
                    this.log(`Access for key-system "${n.keySystem}" obtained`);
                    let r = this.fetchServerCertificate(e);
                    this.log(`Create media-keys for "${e}"`);
                    let i = (t.mediaKeys = n
                        .createMediaKeys()
                        .then(
                            (n) => (
                                this.log(`Media-keys created for "${e}"`),
                                (t.hasMediaKeys = !0),
                                r.then((t) => (t ? this.setMediaKeysServerCertificate(n, e, t) : n))
                            ),
                        ));
                    return (
                        i.catch((t) => {
                            this.error(`Failed to create media-keys for "${e}"}: ${t}`);
                        }),
                        i
                    );
                })
            );
        }
        return a.then(() => s.mediaKeys);
    }
    createMediaKeySessionContext({ decryptdata: e, keySystem: t, mediaKeys: n }) {
        this.log(`Creating key-system session "${t}" keyId: ${B(e.keyId || [])} keyUri: ${e.uri}`);
        let r = n.createSession(),
            i = { decryptdata: e, keySystem: t, mediaKeys: n, mediaKeysSession: r, keyStatus: "status-pending" };
        return this.mediaKeySessions.push(i), i;
    }
    renewKeySession(e) {
        let t = e.decryptdata;
        if (t.pssh) {
            let n = this.createMediaKeySessionContext(e),
                r = o_(t),
                i = "cenc";
            this.keyIdToKeySessionPromise[r] = this.generateRequestWithPreferredKeySession(
                n,
                i,
                t.pssh.buffer,
                "expired",
            );
        } else this.warn("Could not renew expired session. Missing pssh initData.");
        this.removeSession(e);
    }
    updateKeySession(e, t) {
        let n = e.mediaKeysSession;
        return (
            this.log(`Updating key-session "${n.sessionId}" for keyId ${B(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`),
            n.update(t)
        );
    }
    getSelectedKeySystemFormats() {
        return Object.keys(this.keySystemAccessPromises)
            .map((e) => ({ keySystem: e, hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys }))
            .filter(({ hasMediaKeys: e }) => !!e)
            .map(({ keySystem: e }) => nX(e))
            .filter((e) => !!e);
    }
    getKeySystemAccess(e) {
        return this.getKeySystemSelectionPromise(e).then(({ keySystem: e, mediaKeys: t }) =>
            this.attemptSetMediaKeys(e, t),
        );
    }
    selectKeySystem(e) {
        return new Promise((t, n) => {
            this.getKeySystemSelectionPromise(e)
                .then(({ keySystem: e }) => {
                    let r = nX(e);
                    r ? t(r) : n(Error(`Unable to find format for key-system "${e}"`));
                })
                .catch(n);
        });
    }
    selectKeySystemFormat(e) {
        let t = Object.keys(e.levelkeys || {});
        return (
            this.keyFormatPromise ||
                (this.log(
                    `Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`,
                ),
                (this.keyFormatPromise = this.getKeyFormatPromise(t))),
            this.keyFormatPromise
        );
    }
    getKeyFormatPromise(e) {
        let t = nQ(this.config),
            n = e.map(nZ).filter((e) => !!e && -1 !== t.indexOf(e));
        return this.selectKeySystem(n);
    }
    getKeyStatus(e) {
        let { mediaKeySessions: t } = this;
        for (let n = 0; n < t.length; n++) {
            let r = of(e, t[n]);
            if (r) return r;
        }
    }
    loadKey(e) {
        let t = e.keyInfo.decryptdata,
            n = o_(t),
            r = this.bannedKeyIds[n];
        if (r || "internal-error" === this.getKeyStatus(t)) {
            let n = op(r || "internal-error", t);
            return this.handleError(n, e.frag), Promise.reject(n);
        }
        let i = `(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
        this.log(`Starting session for key ${i}`);
        let s = this.keyIdToKeySessionPromise[n];
        if (!s) {
            let r = this.getKeySystemForKeyPromise(t)
                .then(
                    ({ keySystem: n, mediaKeys: r }) => (
                        this.throwIfDestroyed(),
                        this.log(
                            `Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`,
                        ),
                        this.attemptSetMediaKeys(n, r).then(
                            () => (
                                this.throwIfDestroyed(),
                                this.createMediaKeySessionContext({ keySystem: n, mediaKeys: r, decryptdata: t })
                            ),
                        )
                    ),
                )
                .then((e) => {
                    let n = "cenc",
                        r = t.pssh ? t.pssh.buffer : null;
                    return this.generateRequestWithPreferredKeySession(e, n, r, "playlist-key");
                });
            return r.catch((t) => this.handleError(t, e.frag)), (this.keyIdToKeySessionPromise[n] = r), r;
        }
        return (
            s.catch((n) => {
                if (n instanceof oh) {
                    let r = v({}, n.data);
                    "internal-error" === this.getKeyStatus(t) && (r.decryptdata = t);
                    let i = new oh(r, n.message);
                    this.handleError(i, e.frag);
                }
            }),
            s
        );
    }
    throwIfDestroyed(e = "Invalid state") {
        if (!this.hls) throw Error("invalid state");
    }
    handleError(e, t) {
        if (this.hls)
            if (e instanceof oh) {
                t && (e.data.frag = t);
                let n = e.data.decryptdata;
                this.error(`${e.message}${n ? ` (${B(n.keyId || [])})` : ""}`), this.hls.trigger(u.ERROR, e.data);
            } else
                this.error(e.message),
                    this.hls.trigger(u.ERROR, {
                        type: o.KEY_SYSTEM_ERROR,
                        details: l.KEY_SYSTEM_NO_KEYS,
                        error: e,
                        fatal: !0,
                    });
    }
    getKeySystemForKeyPromise(e) {
        let t = o_(e),
            n = this.keyIdToKeySessionPromise[t];
        if (!n) {
            let t = nZ(e.keyFormat),
                n = t ? [t] : nQ(this.config);
            return this.attemptKeySystemAccess(n);
        }
        return n;
    }
    getKeySystemSelectionPromise(e) {
        if ((e.length || (e = nQ(this.config)), 0 === e.length))
            throw new oh(
                { type: o.KEY_SYSTEM_ERROR, details: l.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: !0 },
                `Missing key-system license configuration options ${tf({ drmSystems: this.config.drmSystems })}`,
            );
        return this.attemptKeySystemAccess(e);
    }
    attemptSetMediaKeys(e, t) {
        if (this.mediaKeys === t) return Promise.resolve();
        let n = this.setMediaKeysQueue.slice();
        this.log(`Setting media-keys for "${e}"`);
        let r = Promise.all(n).then(() => {
            if (!this.media)
                throw ((this.mediaKeys = null), Error("Attempted to set mediaKeys without media element attached"));
            return this.media.setMediaKeys(t);
        });
        return (
            (this.mediaKeys = t),
            this.setMediaKeysQueue.push(r),
            r.then(() => {
                this.log(`Media-keys set for "${e}"`),
                    n.push(r),
                    (this.setMediaKeysQueue = this.setMediaKeysQueue.filter((e) => -1 === n.indexOf(e)));
            })
        );
    }
    generateRequestWithPreferredKeySession(e, t, n, r) {
        var i;
        let s = null == (i = this.config.drmSystems) || null == (i = i[e.keySystem]) ? void 0 : i.generateRequest;
        if (s)
            try {
                let r = s.call(this.hls, t, n, e);
                if (!r) throw Error("Invalid response from configured generateRequest filter");
                (t = r.initDataType),
                    (n = r.initData ? r.initData : null),
                    (e.decryptdata.pssh = n ? new Uint8Array(n) : null);
            } catch (e) {
                if ((this.warn(e.message), this.hls && this.hls.config.debug)) throw e;
            }
        if (null === n) return this.log(`Skipping key-session request for "${r}" (no initData)`), Promise.resolve(e);
        let a = o_(e.decryptdata),
            u = e.decryptdata.uri;
        this.log(
            `Generating key-session request for "${r}" keyId: ${a} URI: ${u} (init data type: ${t} length: ${n.byteLength})`,
        );
        let c = new r6(),
            d = (e._onmessage = (t) => {
                let n = e.mediaKeysSession;
                if (!n) return void c.emit("error", Error("invalid state"));
                let { messageType: r, message: i } = t;
                this.log(`"${r}" message event for session "${n.sessionId}" message size: ${i.byteLength}`),
                    "license-request" === r || "license-renewal" === r
                        ? this.renewLicense(e, i).catch((e) => {
                              c.eventNames().length ? c.emit("error", e) : this.handleError(e);
                          })
                        : "license-release" === r
                          ? e.keySystem === nj &&
                            this.updateKeySession(e, nU("acknowledged"))
                                .then(() => this.removeSession(e))
                                .catch((e) => this.handleError(e))
                          : this.warn(`unhandled media key message type "${r}"`);
            }),
            _ = (e, t) => {
                let n;
                (t.keyStatus = e),
                    e.startsWith("usable")
                        ? c.emit("resolved")
                        : "internal-error" === e || "output-restricted" === e || "output-downscaled" === e
                          ? (n = op(e, t.decryptdata))
                          : "expired" === e
                            ? (n = Error(`key expired (keyId: ${a})`))
                            : "released" === e
                              ? (n = Error("key released"))
                              : "status-pending" === e || this.warn(`unhandled key status change "${e}" (keyId: ${a})`),
                    n && (c.eventNames().length ? c.emit("error", n) : this.handleError(n));
            },
            f = (e._onkeystatuseschange = (t) => {
                if (!e.mediaKeysSession) return void c.emit("error", Error("invalid state"));
                let n = this.getKeyStatuses(e);
                if (!Object.keys(n).some((e) => "status-pending" !== n[e])) return;
                if ("expired" === n[a]) {
                    this.log(`Expired key ${tf(n)} in key-session "${e.mediaKeysSession.sessionId}"`),
                        this.renewKeySession(e);
                    return;
                }
                let r = n[a];
                if (r) _(r, e);
                else {
                    var i;
                    let t = 0;
                    e.keyStatusTimeouts || (e.keyStatusTimeouts = {}),
                        (i = e.keyStatusTimeouts)[a] ||
                            (i[a] = self.setTimeout(() => {
                                if (!e.mediaKeysSession || !this.mediaKeys) return;
                                let n = this.getKeyStatus(e.decryptdata);
                                if (n && "status-pending" !== n)
                                    return (
                                        this.log(
                                            `No status for keyId ${a} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${n} from other session.`,
                                        ),
                                        _(n, e)
                                    );
                                this.log(
                                    `key status for ${a} in key-session "${e.mediaKeysSession.sessionId}" timed out after ${t}ms`,
                                ),
                                    _((r = "internal-error"), e);
                            }, t)),
                        this.log(`No status for keyId ${a} (${tf(n)}).`);
                }
            });
        rG(e.mediaKeysSession, "message", d), rG(e.mediaKeysSession, "keystatuseschange", f);
        let h = new Promise((e, t) => {
            c.on("error", t), c.on("resolved", e);
        });
        return e.mediaKeysSession
            .generateRequest(t, n)
            .then(() => {
                this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${a} URI: ${u}`);
            })
            .catch((t) => {
                throw new oh(
                    {
                        type: o.KEY_SYSTEM_ERROR,
                        details: l.KEY_SYSTEM_NO_SESSION,
                        error: t,
                        decryptdata: e.decryptdata,
                        fatal: !1,
                    },
                    `Error generating key-session request: ${t}`,
                );
            })
            .then(() => h)
            .catch(
                (t) => (
                    c.removeAllListeners(),
                    this.removeSession(e).then(() => {
                        throw t;
                    })
                ),
            )
            .then(() => (c.removeAllListeners(), e));
    }
    getKeyStatuses(e) {
        let t = {};
        return (
            e.mediaKeysSession.keyStatuses.forEach((n, r) => {
                if ("string" == typeof r && "object" == typeof n) {
                    let e = r;
                    (r = n), (n = e);
                }
                let i = "buffer" in r ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : new Uint8Array(r);
                e.keySystem === nY && 16 === i.length && nF(i);
                let s = B(i);
                "internal-error" === n && (this.bannedKeyIds[s] = n),
                    this.log(
                        `key status change "${n}" for keyStatuses keyId: ${s} key-session "${e.mediaKeysSession.sessionId}"`,
                    ),
                    (t[s] = n);
            }),
            t
        );
    }
    fetchServerCertificate(e) {
        let t = this.config,
            n = new t.loader(t),
            r = this.getServerCertificateUrl(e);
        return r
            ? (this.log(`Fetching server certificate for "${e}"`),
              new Promise((i, s) => {
                  let a = { responseType: "arraybuffer", url: r },
                      u = t.certLoadPolicy.default,
                      c = { loadPolicy: u, timeout: u.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 },
                      d = {
                          onSuccess: (e, t, n, r) => {
                              i(e.data);
                          },
                          onError: (t, n, i, u) => {
                              s(
                                  new oh(
                                      {
                                          type: o.KEY_SYSTEM_ERROR,
                                          details: l.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                          fatal: !0,
                                          networkDetails: i,
                                          response: v({ url: a.url, data: void 0 }, t),
                                      },
                                      `"${e}" certificate request failed (${r}). Status: ${t.code} (${t.text})`,
                                  ),
                              );
                          },
                          onTimeout: (t, n, i) => {
                              s(
                                  new oh(
                                      {
                                          type: o.KEY_SYSTEM_ERROR,
                                          details: l.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                          fatal: !0,
                                          networkDetails: i,
                                          response: { url: a.url, data: void 0 },
                                      },
                                      `"${e}" certificate request timed out (${r})`,
                                  ),
                              );
                          },
                          onAbort: (e, t, n) => {
                              s(Error("aborted"));
                          },
                      };
                  n.load(a, c, d);
              }))
            : Promise.resolve();
    }
    setMediaKeysServerCertificate(e, t, n) {
        return new Promise((r, i) => {
            e.setServerCertificate(n)
                .then((i) => {
                    this.log(
                        `setServerCertificate ${i ? "success" : "not supported by CDM"} (${n.byteLength}) on "${t}"`,
                    ),
                        r(e);
                })
                .catch((e) => {
                    i(
                        new oh(
                            {
                                type: o.KEY_SYSTEM_ERROR,
                                details: l.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                                error: e,
                                fatal: !0,
                            },
                            e.message,
                        ),
                    );
                });
        });
    }
    renewLicense(e, t) {
        return this.requestLicense(e, new Uint8Array(t)).then((t) =>
            this.updateKeySession(e, new Uint8Array(t)).catch((t) => {
                throw new oh(
                    {
                        type: o.KEY_SYSTEM_ERROR,
                        details: l.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                        decryptdata: e.decryptdata,
                        error: t,
                        fatal: !1,
                    },
                    t.message,
                );
            }),
        );
    }
    unpackPlayReadyKeyMessage(e, t) {
        let n = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
        if (!n.includes("PlayReadyKeyMessage")) return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
        let r = new DOMParser().parseFromString(n, "application/xml"),
            i = r.querySelectorAll("HttpHeader");
        if (i.length > 0) {
            let t;
            for (let n = 0, r = i.length; n < r; n++) {
                var s, a;
                let r = null == (s = (t = i[n]).querySelector("name")) ? void 0 : s.textContent,
                    o = null == (a = t.querySelector("value")) ? void 0 : a.textContent;
                r && o && e.setRequestHeader(r, o);
            }
        }
        let o = r.querySelector("Challenge"),
            l = null == o ? void 0 : o.textContent;
        if (!l) throw Error("Cannot find <Challenge> in key message");
        return nU(atob(l));
    }
    setupLicenseXHR(e, t, n, r) {
        let i = this.config.licenseXhrSetup;
        return i
            ? Promise.resolve()
                  .then(() => {
                      if (!n.decryptdata) throw Error("Key removed");
                      return i.call(this.hls, e, t, n, r);
                  })
                  .catch((s) => {
                      if (!n.decryptdata) throw s;
                      return e.open("POST", t, !0), i.call(this.hls, e, t, n, r);
                  })
                  .then((n) => (e.readyState || e.open("POST", t, !0), { xhr: e, licenseChallenge: n || r }))
            : (e.open("POST", t, !0), Promise.resolve({ xhr: e, licenseChallenge: r }));
    }
    requestLicense(e, t) {
        let n = this.config.keyLoadPolicy.default;
        return new Promise((r, i) => {
            let s = this.getLicenseServerUrlOrThrow(e.keySystem);
            this.log(`Sending license request to URL: ${s}`);
            let a = new XMLHttpRequest();
            (a.responseType = "arraybuffer"),
                (a.onreadystatechange = () => {
                    if (!this.hls || !e.mediaKeysSession) return i(Error("invalid state"));
                    if (4 === a.readyState)
                        if (200 === a.status) {
                            this._requestLicenseFailureCount = 0;
                            let t = a.response;
                            this.log(`License received ${t instanceof ArrayBuffer ? t.byteLength : t}`);
                            let n = this.config.licenseResponseCallback;
                            if (n)
                                try {
                                    t = n.call(this.hls, a, s, e);
                                } catch (e) {
                                    this.error(e);
                                }
                            r(t);
                        } else {
                            let u = n.errorRetry,
                                c = u ? u.maxNumRetry : 0;
                            if (
                                (this._requestLicenseFailureCount++,
                                this._requestLicenseFailureCount > c || (a.status >= 400 && a.status < 500))
                            )
                                i(
                                    new oh(
                                        {
                                            type: o.KEY_SYSTEM_ERROR,
                                            details: l.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            decryptdata: e.decryptdata,
                                            fatal: !0,
                                            networkDetails: a,
                                            response: { url: s, data: void 0, code: a.status, text: a.statusText },
                                        },
                                        `License Request XHR failed (${s}). Status: ${a.status} (${a.statusText})`,
                                    ),
                                );
                            else {
                                let n = c - this._requestLicenseFailureCount + 1;
                                this.warn(`Retrying license request, ${n} attempts left`),
                                    this.requestLicense(e, t).then(r, i);
                            }
                        }
                }),
                e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(),
                (e.licenseXhr = a),
                this.setupLicenseXHR(a, s, e, t)
                    .then(({ xhr: t, licenseChallenge: n }) => {
                        e.keySystem == nY && (n = this.unpackPlayReadyKeyMessage(t, n)), t.send(n);
                    })
                    .catch(i);
        });
    }
    onDestroying() {
        this.unregisterListeners(), this._clear();
    }
    onMediaAttached(e, t) {
        if (!this.config.emeEnabled) return;
        let n = t.media;
        (this.media = n), rG(n, "encrypted", this.onMediaEncrypted), rG(n, "waitingforkey", this.onWaitingForKey);
    }
    onMediaDetached() {
        let e = this.media;
        e &&
            (rF(e, "encrypted", this.onMediaEncrypted),
            rF(e, "waitingforkey", this.onWaitingForKey),
            (this.media = null),
            (this.mediaKeys = null));
    }
    _clear() {
        var e;
        if (
            ((this._requestLicenseFailureCount = 0),
            (this.keyIdToKeySessionPromise = {}),
            (this.bannedKeyIds = {}),
            !this.mediaKeys && !this.mediaKeySessions.length)
        )
            return;
        let t = this.media,
            n = this.mediaKeySessions.slice();
        (this.mediaKeySessions = []), (this.mediaKeys = null), n4.clearKeyUriToKeyIdMap();
        let r = n.length;
        od.CDMCleanupPromise = Promise.all(
            n
                .map((e) => this.removeSession(e))
                .concat(
                    (null == t || null == (e = t.setMediaKeys(null))
                        ? void 0
                        : e.catch((e) => {
                              this.log(`Could not clear media keys: ${e}`),
                                  this.hls &&
                                      this.hls.trigger(u.ERROR, {
                                          type: o.OTHER_ERROR,
                                          details: l.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
                                          fatal: !1,
                                          error: Error(`Could not clear media keys: ${e}`),
                                      });
                          })) || Promise.resolve(),
                ),
        )
            .catch((e) => {
                this.log(`Could not close sessions and clear media keys: ${e}`),
                    this.hls &&
                        this.hls.trigger(u.ERROR, {
                            type: o.OTHER_ERROR,
                            details: l.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
                            fatal: !1,
                            error: Error(`Could not close sessions and clear media keys: ${e}`),
                        });
            })
            .then(() => {
                r && this.log("finished closing key sessions and clearing media keys");
            });
    }
    onManifestLoading() {
        (this.keyFormatPromise = null), (this.bannedKeyIds = {});
    }
    onManifestLoaded(e, { sessionKeys: t }) {
        if (t && this.config.emeEnabled && !this.keyFormatPromise) {
            let e = t.reduce((e, t) => (-1 === e.indexOf(t.keyFormat) && e.push(t.keyFormat), e), []);
            this.log(`Selecting key-system from session-keys ${e.join(", ")}`),
                (this.keyFormatPromise = this.getKeyFormatPromise(e));
        }
    }
    removeSession(e) {
        let { mediaKeysSession: t, licenseXhr: n, decryptdata: r } = e;
        if (t) {
            this.log(
                `Remove licenses and keys and close session "${t.sessionId}" keyId: ${B((null == r ? void 0 : r.keyId) || [])}`,
            ),
                e._onmessage && (t.removeEventListener("message", e._onmessage), (e._onmessage = void 0)),
                e._onkeystatuseschange &&
                    (t.removeEventListener("keystatuseschange", e._onkeystatuseschange),
                    (e._onkeystatuseschange = void 0)),
                n && n.readyState !== XMLHttpRequest.DONE && n.abort(),
                (e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0);
            let i = this.mediaKeySessions.indexOf(e);
            i > -1 && this.mediaKeySessions.splice(i, 1);
            let { keyStatusTimeouts: s } = e;
            s && Object.keys(s).forEach((e) => self.clearTimeout(s[e]));
            let { drmSystemOptions: a } = this.config;
            return (
                n2(a)
                    ? new Promise((e, n) => {
                          self.setTimeout(() => n(Error("MediaKeySession.remove() timeout")), 8e3),
                              t.remove().then(e).catch(n);
                      })
                    : Promise.resolve()
            )
                .catch((e) => {
                    this.log(`Could not remove session: ${e}`),
                        this.hls &&
                            this.hls.trigger(u.ERROR, {
                                type: o.OTHER_ERROR,
                                details: l.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
                                fatal: !1,
                                error: Error(`Could not remove session: ${e}`),
                            });
                })
                .then(() => t.close())
                .catch((e) => {
                    this.log(`Could not close session: ${e}`),
                        this.hls &&
                            this.hls.trigger(u.ERROR, {
                                type: o.OTHER_ERROR,
                                details: l.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
                                fatal: !1,
                                error: Error(`Could not close session: ${e}`),
                            });
                });
        }
        return Promise.resolve();
    }
}
function o_(e) {
    if (!e) throw Error("Could not read keyId of undefined decryptdata");
    if (null === e.keyId) throw Error("keyId is null");
    return B(e.keyId);
}
function of(e, t) {
    return e.keyId && t.mediaKeysSession.keyStatuses.has(e.keyId)
        ? t.mediaKeysSession.keyStatuses.get(e.keyId)
        : e.matches(t.decryptdata)
          ? t.keyStatus
          : void 0;
}
od.CDMCleanupPromise = void 0;
class oh extends Error {
    constructor(e, t) {
        super(t), (this.data = void 0), e.error || (e.error = Error(t)), (this.data = e), (e.err = e.error);
    }
}
function op(e, t) {
    let n = "output-restricted" === e,
        r = n ? l.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : l.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
    return new oh(
        { type: o.KEY_SYSTEM_ERROR, details: r, fatal: !1, decryptdata: t },
        n ? "HDCP level output restricted" : `key status changed to "${e}"`,
    );
}
class om {
    constructor(e) {
        (this.hls = void 0),
            (this.isVideoPlaybackQualityAvailable = !1),
            (this.timer = void 0),
            (this.media = null),
            (this.lastTime = void 0),
            (this.lastDroppedFrames = 0),
            (this.lastDecodedFrames = 0),
            (this.streamController = void 0),
            (this.hls = e),
            this.registerListeners();
    }
    setStreamController(e) {
        this.streamController = e;
    }
    registerListeners() {
        this.hls.on(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            this.hls.on(u.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    unregisterListeners() {
        this.hls.off(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            this.hls.off(u.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    destroy() {
        this.timer && clearInterval(this.timer),
            this.unregisterListeners(),
            (this.isVideoPlaybackQualityAvailable = !1),
            (this.media = null);
    }
    onMediaAttaching(e, t) {
        let n = this.hls.config;
        if (n.capLevelOnFPSDrop) {
            let e = t.media instanceof self.HTMLVideoElement ? t.media : null;
            (this.media = e),
                e && "function" == typeof e.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                self.clearInterval(this.timer),
                (this.timer = self.setInterval(this.checkFPSInterval.bind(this), n.fpsDroppedMonitoringPeriod));
        }
    }
    onMediaDetaching() {
        this.media = null;
    }
    checkFPS(e, t, n) {
        let r = performance.now();
        if (t) {
            if (this.lastTime) {
                let e = r - this.lastTime,
                    i = n - this.lastDroppedFrames,
                    s = t - this.lastDecodedFrames,
                    a = (1e3 * i) / e,
                    o = this.hls;
                if (
                    (o.trigger(u.FPS_DROP, { currentDropped: i, currentDecoded: s, totalDroppedFrames: n }),
                    a > 0 && i > o.config.fpsDroppedMonitoringThreshold * s)
                ) {
                    let e = o.currentLevel;
                    o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e),
                        e > 0 &&
                            (-1 === o.autoLevelCapping || o.autoLevelCapping >= e) &&
                            ((e -= 1),
                            o.trigger(u.FPS_DROP_LEVEL_CAPPING, { level: e, droppedLevel: o.currentLevel }),
                            (o.autoLevelCapping = e),
                            this.streamController.nextLevelSwitch());
                }
            }
            (this.lastTime = r), (this.lastDroppedFrames = n), (this.lastDecodedFrames = t);
        }
    }
    checkFPSInterval() {
        let e = this.media;
        if (e)
            if (this.isVideoPlaybackQualityAvailable) {
                let t = e.getVideoPlaybackQuality();
                this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
            } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
    }
}
function oE(e, t) {
    let n;
    try {
        n = new Event("addtrack");
    } catch (e) {
        (n = document.createEvent("Event")).initEvent("addtrack", !1, !1);
    }
    (n.track = e), t.dispatchEvent(n);
}
function og(e, t) {
    let n = e.mode;
    if (("disabled" === n && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)))
        try {
            if ((e.addCue(t), !e.cues.getCueById(t.id))) throw Error(`addCue is failed for: ${t}`);
        } catch (n) {
            P.debug(`[texttrack-utils]: ${n}`);
            try {
                let n = new self.TextTrackCue(t.startTime, t.endTime, t.text);
                (n.id = t.id), e.addCue(n);
            } catch (e) {
                P.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e}`);
            }
        }
    "disabled" === n && (e.mode = n);
}
function oA(e, t) {
    let n = e.mode;
    if (("disabled" === n && (e.mode = "hidden"), e.cues))
        for (let n = e.cues.length; n--; ) t && e.cues[n].removeEventListener("enter", t), e.removeCue(e.cues[n]);
    "disabled" === n && (e.mode = n);
}
function oI(e, t, n, r) {
    let i = e.mode;
    if (("disabled" === i && (e.mode = "hidden"), e.cues && e.cues.length > 0)) {
        let i = oS(e.cues, t, n);
        for (let t = 0; t < i.length; t++) (!r || r(i[t])) && e.removeCue(i[t]);
    }
    "disabled" === i && (e.mode = i);
}
function oT(e, t) {
    let n;
    if (t <= e[0].startTime) return 0;
    let r = e.length - 1;
    if (t > e[r].endTime) return -1;
    let i = 0,
        s = r;
    for (; i <= s; )
        if (t < e[(n = Math.floor((s + i) / 2))].startTime) s = n - 1;
        else {
            if (!(t > e[n].startTime) || !(i < r)) return n;
            i = n + 1;
        }
    return e[i].startTime - t < t - e[s].startTime ? i : s;
}
function oS(e, t, n) {
    let r = [],
        i = oT(e, t);
    if (i > -1)
        for (let s = i, a = e.length; s < a; s++) {
            let i = e[s];
            if (i.startTime >= t && i.endTime <= n) r.push(i);
            else if (i.startTime > n) break;
        }
    return r;
}
function oy(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        ("subtitles" === r.kind || "captions" === r.kind) && r.label && t.push(e[n]);
    }
    return t;
}
class ov extends sY {
    constructor(e) {
        super(e, "subtitle-track-controller"),
            (this.media = null),
            (this.tracks = []),
            (this.groupIds = null),
            (this.tracksInGroup = []),
            (this.trackId = -1),
            (this.currentTrack = null),
            (this.selectDefaultTrack = !0),
            (this.queuedDefaultTrack = -1),
            (this.useTextTrackPolling = !1),
            (this.subtitlePollingInterval = -1),
            (this._subtitleDisplay = !0),
            (this.asyncPollTrackChange = () => this.pollTrackChange(0)),
            (this.onTextTracksChanged = () => {
                if (
                    (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval),
                    !this.media || !this.hls.config.renderTextTracksNatively)
                )
                    return;
                let e = null,
                    t = oy(this.media.textTracks);
                for (let n = 0; n < t.length; n++)
                    if ("hidden" === t[n].mode) e = t[n];
                    else if ("showing" === t[n].mode) {
                        e = t[n];
                        break;
                    }
                let n = this.findTrackForTextTrack(e);
                this.subtitleTrack !== n && this.setSubtitleTrack(n);
            }),
            this.registerListeners();
    }
    destroy() {
        this.unregisterListeners(),
            (this.tracks.length = 0),
            (this.tracksInGroup.length = 0),
            (this.currentTrack = null),
            (this.onTextTracksChanged = this.asyncPollTrackChange = null),
            super.destroy();
    }
    get subtitleDisplay() {
        return this._subtitleDisplay;
    }
    set subtitleDisplay(e) {
        (this._subtitleDisplay = e), this.trackId > -1 && this.toggleTrackModes();
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(u.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.on(u.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.on(u.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(u.LEVEL_SWITCHING, this.onLevelSwitching, this),
            e.off(u.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.off(u.ERROR, this.onError, this);
    }
    onMediaAttached(e, t) {
        (this.media = t.media),
            this.media &&
                (this.queuedDefaultTrack > -1 &&
                    ((this.subtitleTrack = this.queuedDefaultTrack), (this.queuedDefaultTrack = -1)),
                (this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks)),
                this.useTextTrackPolling
                    ? this.pollTrackChange(500)
                    : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
    }
    pollTrackChange(e) {
        self.clearInterval(this.subtitlePollingInterval),
            (this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e));
    }
    onMediaDetaching(e, t) {
        let n = this.media;
        if (!n) return;
        let r = !!t.transferMedia;
        self.clearInterval(this.subtitlePollingInterval),
            this.useTextTrackPolling || n.textTracks.removeEventListener("change", this.asyncPollTrackChange),
            this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
            (this.subtitleTrack = -1),
            (this.media = null),
            r ||
                oy(n.textTracks).forEach((e) => {
                    oA(e);
                });
    }
    onManifestLoading() {
        (this.tracks = []),
            (this.groupIds = null),
            (this.tracksInGroup = []),
            (this.trackId = -1),
            (this.currentTrack = null),
            (this.selectDefaultTrack = !0);
    }
    onManifestParsed(e, t) {
        this.tracks = t.subtitleTracks;
    }
    onSubtitleTrackLoaded(e, t) {
        let { id: n, groupId: r, details: i } = t,
            s = this.tracksInGroup[n];
        if (!s || s.groupId !== r)
            return void this.warn(
                `Subtitle track with id:${n} and group:${r} not found in active group ${null == s ? void 0 : s.groupId}`,
            );
        let a = s.details;
        (s.details = t.details),
            this.log(`Subtitle track ${n} "${s.name}" lang:${s.lang} group:${r} loaded [${i.startSN}-${i.endSN}]`),
            n === this.trackId && this.playlistLoaded(n, t, a);
    }
    onLevelLoading(e, t) {
        this.switchLevel(t.level);
    }
    onLevelSwitching(e, t) {
        this.switchLevel(t.level);
    }
    switchLevel(e) {
        let t = this.hls.levels[e];
        if (!t) return;
        let n = t.subtitleGroups || null,
            r = this.groupIds,
            i = this.currentTrack;
        if (
            !n ||
            (null == r ? void 0 : r.length) !== (null == n ? void 0 : n.length) ||
            (null != n && n.some((e) => (null == r ? void 0 : r.indexOf(e)) === -1))
        ) {
            (this.groupIds = n), (this.trackId = -1), (this.currentTrack = null);
            let e = this.tracks.filter((e) => !n || -1 !== n.indexOf(e.groupId));
            if (e.length)
                this.selectDefaultTrack && !e.some((e) => e.default) && (this.selectDefaultTrack = !1),
                    e.forEach((e, t) => {
                        e.id = t;
                    });
            else if (!i && !this.tracksInGroup.length) return;
            this.tracksInGroup = e;
            let t = this.hls.config.subtitlePreference;
            if (!i && t) {
                this.selectDefaultTrack = !1;
                let n = tA(t, e);
                if (n > -1) i = e[n];
                else {
                    let e = tA(t, this.tracks);
                    i = this.tracks[e];
                }
            }
            let r = this.findTrackId(i);
            -1 === r && i && (r = this.findTrackId(null));
            let s = { subtitleTracks: e };
            this.log(
                `Updating subtitle tracks, ${e.length} track(s) found in "${null == n ? void 0 : n.join(",")}" group-id`,
            ),
                this.hls.trigger(u.SUBTITLE_TRACKS_UPDATED, s),
                -1 !== r && -1 === this.trackId && this.setSubtitleTrack(r);
        }
    }
    findTrackId(e) {
        let t = this.tracksInGroup,
            n = this.selectDefaultTrack;
        for (let r = 0; r < t.length; r++) {
            let i = t[r];
            if ((!n || i.default) && (n || e) && (!e || tI(i, e))) return r;
        }
        if (e) {
            for (let n = 0; n < t.length; n++) {
                let r = t[n];
                if (sK(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return n;
            }
            for (let n = 0; n < t.length; n++) {
                let r = t[n];
                if (sK(e.attrs, r.attrs, ["LANGUAGE"])) return n;
            }
        }
        return -1;
    }
    findTrackForTextTrack(e) {
        if (e) {
            let t = this.tracksInGroup;
            for (let n = 0; n < t.length; n++) if (s$(t[n], e)) return n;
        }
        return -1;
    }
    onError(e, t) {
        !t.fatal &&
            t.context &&
            (t.context.type !== p ||
                t.context.id !== this.trackId ||
                (this.groupIds && -1 === this.groupIds.indexOf(t.context.groupId)) ||
                this.checkRetry(t));
    }
    get allSubtitleTracks() {
        return this.tracks;
    }
    get subtitleTracks() {
        return this.tracksInGroup;
    }
    get subtitleTrack() {
        return this.trackId;
    }
    set subtitleTrack(e) {
        (this.selectDefaultTrack = !1), this.setSubtitleTrack(e);
    }
    setSubtitleOption(e) {
        if (((this.hls.config.subtitlePreference = e), e)) {
            if (-1 === e.id) return this.setSubtitleTrack(-1), null;
            let t = this.allSubtitleTracks;
            if (((this.selectDefaultTrack = !1), t.length)) {
                let n = this.currentTrack;
                if (n && tI(e, n)) return n;
                let r = tA(e, this.tracksInGroup);
                if (r > -1) {
                    let e = this.tracksInGroup[r];
                    return this.setSubtitleTrack(r), e;
                }
                {
                    if (n) return null;
                    let r = tA(e, t);
                    if (r > -1) return t[r];
                }
            }
        }
        return null;
    }
    loadPlaylist(e) {
        super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e);
    }
    loadingPlaylist(e, t) {
        super.loadingPlaylist(e, t);
        let n = e.id,
            r = e.groupId,
            i = this.getUrlWithDirectives(e.url, t),
            s = e.details,
            a = null == s ? void 0 : s.age;
        this.log(
            `Loading subtitle ${n} "${e.name}" lang:${e.lang} group:${r}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${a && s.live ? " age " + a.toFixed(1) + (s.type ? " " + s.type : "") : ""} ${i}`,
        ),
            this.hls.trigger(u.SUBTITLE_TRACK_LOADING, {
                url: i,
                id: n,
                groupId: r,
                deliveryDirectives: t || null,
                track: e,
            });
    }
    toggleTrackModes() {
        let e,
            { media: t } = this;
        if (!t) return;
        let n = oy(t.textTracks),
            r = this.currentTrack;
        if (
            (r &&
                ((e = n.filter((e) => s$(r, e))[0]) ||
                    this.warn(`Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`)),
            [].slice.call(n).forEach((t) => {
                "disabled" !== t.mode && t !== e && (t.mode = "disabled");
            }),
            e)
        ) {
            let t = this.subtitleDisplay ? "showing" : "hidden";
            e.mode !== t && (e.mode = t);
        }
    }
    setSubtitleTrack(e) {
        let t = this.tracksInGroup;
        if (!this.media) {
            this.queuedDefaultTrack = e;
            return;
        }
        if (e < -1 || e >= t.length || !i(e)) return void this.warn(`Invalid subtitle track id: ${e}`);
        this.selectDefaultTrack = !1;
        let n = this.currentTrack,
            r = t[e] || null;
        if (((this.trackId = e), (this.currentTrack = r), this.toggleTrackModes(), !r))
            return void this.hls.trigger(u.SUBTITLE_TRACK_SWITCH, { id: e });
        let s = !!r.details && !r.details.live;
        if (e === this.trackId && r === n && s) return;
        this.log(`Switching to subtitle-track ${e}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : ""));
        let { id: a, groupId: o = "", name: l, type: c, url: d } = r;
        this.hls.trigger(u.SUBTITLE_TRACK_SWITCH, { id: a, groupId: o, name: l, type: c, url: d });
        let _ = this.switchParams(r.url, null == n ? void 0 : n.details, r.details);
        this.loadPlaylist(_);
    }
}
function oC() {
    try {
        return crypto.randomUUID();
    } catch (e) {
        try {
            let e = URL.createObjectURL(new Blob()),
                t = e.toString();
            return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
        } catch (t) {
            let e = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
                let n = ((e + 16 * Math.random()) % 16) | 0;
                return (e = Math.floor(e / 16)), ("x" == t ? n : (3 & n) | 8).toString(16);
            });
        }
    }
}
function oN(e) {
    let t = 5381,
        n = e.length;
    for (; n; ) t = (33 * t) ^ e.charCodeAt(--n);
    return (t >>> 0).toString();
}
let oR = 0.025,
    ob = (function (e) {
        return (e[(e.Point = 0)] = "Point"), (e[(e.Range = 1)] = "Range"), e;
    })({});
function oO(e, t, n) {
    return `${e.identifier}-${n + 1}-${oN(t)}`;
}
class oD {
    constructor(e, t) {
        (this.base = void 0),
            (this._duration = null),
            (this._timelineStart = null),
            (this.appendInPlaceDisabled = void 0),
            (this.appendInPlaceStarted = void 0),
            (this.dateRange = void 0),
            (this.hasPlayed = !1),
            (this.cumulativeDuration = 0),
            (this.resumeOffset = NaN),
            (this.playoutLimit = NaN),
            (this.restrictions = { skip: !1, jump: !1 }),
            (this.snapOptions = { out: !1, in: !1 }),
            (this.assetList = []),
            (this.assetListLoader = void 0),
            (this.assetListResponse = null),
            (this.resumeAnchor = void 0),
            (this.error = void 0),
            (this.resetOnResume = void 0),
            (this.base = t),
            (this.dateRange = e),
            this.setDateRange(e);
    }
    setDateRange(e) {
        (this.dateRange = e),
            (this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset)),
            (this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit)),
            (this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions)),
            (this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions));
    }
    reset() {
        var e;
        (this.appendInPlaceStarted = !1),
            null == (e = this.assetListLoader) || e.destroy(),
            (this.assetListLoader = void 0),
            this.supplementsPrimary ||
                ((this.assetListResponse = null), (this.assetList = []), (this._duration = null));
    }
    isAssetPastPlayoutLimit(e) {
        var t;
        if (e > 0 && e >= this.assetList.length) return !0;
        let n = this.playoutLimit;
        return (
            !(e <= 0 || isNaN(n)) && (0 === n || ((null == (t = this.assetList[e]) ? void 0 : t.startOffset) || 0) > n)
        );
    }
    findAssetIndex(e) {
        return this.assetList.indexOf(e);
    }
    get identifier() {
        return this.dateRange.id;
    }
    get startDate() {
        return this.dateRange.startDate;
    }
    get startTime() {
        let e = this.dateRange.startTime;
        if (this.snapOptions.out) {
            let t = this.dateRange.tagAnchor;
            if (t) return oL(e, t);
        }
        return e;
    }
    get startOffset() {
        return this.cue.pre ? 0 : this.startTime;
    }
    get startIsAligned() {
        if (0 === this.startTime || this.snapOptions.out) return !0;
        let e = this.dateRange.tagAnchor;
        if (e) {
            let t = this.dateRange.startTime,
                n = oL(t, e);
            return t - n < 0.1;
        }
        return !1;
    }
    get resumptionOffset() {
        let e = this.resumeOffset,
            t = i(e) ? e : this.duration;
        return this.cumulativeDuration + t;
    }
    get resumeTime() {
        let e = this.startOffset + this.resumptionOffset;
        if (this.snapOptions.in) {
            let t = this.resumeAnchor;
            if (t) return oL(e, t);
        }
        return e;
    }
    get appendInPlace() {
        return (
            !!this.appendInPlaceStarted ||
            (!this.appendInPlaceDisabled &&
                !!(
                    !this.cue.once &&
                    !this.cue.pre &&
                    this.startIsAligned &&
                    ((isNaN(this.playoutLimit) && isNaN(this.resumeOffset)) ||
                        (this.resumeOffset && this.duration && Math.abs(this.resumeOffset - this.duration) < oR))
                ))
        );
    }
    set appendInPlace(e) {
        if (this.appendInPlaceStarted) {
            this.resetOnResume = !e;
            return;
        }
        this.appendInPlaceDisabled = !e;
    }
    get timelineStart() {
        return null !== this._timelineStart ? this._timelineStart : this.startTime;
    }
    set timelineStart(e) {
        this._timelineStart = e;
    }
    get duration() {
        let e,
            t = this.playoutLimit;
        return (
            (e =
                null !== this._duration
                    ? this._duration
                    : this.dateRange.duration
                      ? this.dateRange.duration
                      : this.dateRange.plannedDuration || 0),
            !isNaN(t) && t < e && (e = t),
            e
        );
    }
    set duration(e) {
        this._duration = e;
    }
    get cue() {
        return this.dateRange.cue;
    }
    get timelineOccupancy() {
        return "RANGE" === this.dateRange.attr["X-TIMELINE-OCCUPIES"] ? ob.Range : ob.Point;
    }
    get supplementsPrimary() {
        return "PRIMARY" === this.dateRange.attr["X-TIMELINE-STYLE"];
    }
    get contentMayVary() {
        return "NO" !== this.dateRange.attr["X-CONTENT-MAY-VARY"];
    }
    get assetUrl() {
        return this.dateRange.attr["X-ASSET-URI"];
    }
    get assetListUrl() {
        return this.dateRange.attr["X-ASSET-LIST"];
    }
    get baseUrl() {
        return this.base.url;
    }
    get assetListLoaded() {
        return this.assetList.length > 0 || null !== this.assetListResponse;
    }
    toString() {
        return ox(this);
    }
}
function oL(e, t) {
    return e - t.start < t.duration / 2 && !(Math.abs(e - (t.start + t.duration)) < oR)
        ? t.start
        : t.start + t.duration;
}
function ow(e, t, n) {
    let r = new self.URL(e, n);
    return "data:" !== r.protocol && r.searchParams.set("_HLS_primary_id", t), r;
}
function oM(e, t) {
    for (; null != (n = e.assetList[++t]) && n.error; ) var n;
    return t;
}
function ox(e) {
    return `["${e.identifier}" ${e.cue.pre ? "<pre>" : e.cue.post ? "<post>" : ""}${e.timelineStart.toFixed(2)}-${e.resumeTime.toFixed(2)}]`;
}
function oP(e) {
    let t = e.timelineStart,
        n = e.duration || 0;
    return `["${e.identifier}" ${t.toFixed(2)}-${(t + n).toFixed(2)}]`;
}
class ok {
    constructor(e, t, n, r) {
        (this.hls = void 0),
            (this.interstitial = void 0),
            (this.assetItem = void 0),
            (this.tracks = null),
            (this.hasDetails = !1),
            (this.mediaAttached = null),
            (this._currentTime = void 0),
            (this._bufferedEosTime = void 0),
            (this.checkPlayout = () => {
                this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(u.PLAYOUT_LIMIT_REACHED, {});
            });
        const i = (this.hls = new e(t));
        (this.interstitial = n), (this.assetItem = r);
        const s = () => {
            this.hasDetails = !0;
        };
        i.once(u.LEVEL_LOADED, s),
            i.once(u.AUDIO_TRACK_LOADED, s),
            i.once(u.SUBTITLE_TRACK_LOADED, s),
            i.on(u.MEDIA_ATTACHING, (e, { media: t }) => {
                this.removeMediaListeners(),
                    (this.mediaAttached = t),
                    this.interstitial.playoutLimit &&
                        (t.addEventListener("timeupdate", this.checkPlayout),
                        this.appendInPlace &&
                            i.on(u.BUFFER_APPENDED, () => {
                                let e = this.bufferedEnd;
                                this.reachedPlayout(e) &&
                                    ((this._bufferedEosTime = e), i.trigger(u.BUFFERED_TO_END, void 0));
                            }));
            });
    }
    get appendInPlace() {
        return this.interstitial.appendInPlace;
    }
    loadSource() {
        let e = this.hls;
        if (e)
            if (e.url) e.levels.length && !e.started && e.startLoad(-1, !0);
            else {
                let t = this.assetItem.uri;
                try {
                    t = ow(t, e.config.primarySessionId || "").href;
                } catch (e) {}
                e.loadSource(t);
            }
    }
    bufferedInPlaceToEnd(e) {
        var t;
        if (!this.appendInPlace) return !1;
        if (null != (t = this.hls) && t.bufferedToEnd) return !0;
        if (!e) return !1;
        let n = Math.min(this._bufferedEosTime || 1 / 0, this.duration),
            r = this.timelineOffset,
            i = nE.bufferInfo(e, r, 0);
        return this.getAssetTime(i.end) >= n - 0.02;
    }
    reachedPlayout(e) {
        let t = this.interstitial.playoutLimit;
        return this.startOffset + e >= t;
    }
    get destroyed() {
        var e;
        return !(null != (e = this.hls) && e.userConfig);
    }
    get assetId() {
        return this.assetItem.identifier;
    }
    get interstitialId() {
        return this.assetItem.parentIdentifier;
    }
    get media() {
        var e;
        return (null == (e = this.hls) ? void 0 : e.media) || null;
    }
    get bufferedEnd() {
        let e = this.media || this.mediaAttached;
        if (!e) return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
        let t = nE.bufferInfo(e, e.currentTime, 0.001);
        return this.getAssetTime(t.end);
    }
    get currentTime() {
        let e = this.media || this.mediaAttached;
        return e ? this.getAssetTime(e.currentTime) : this._currentTime || 0;
    }
    get duration() {
        let e = this.assetItem.duration;
        if (!e) return 0;
        let t = this.interstitial.playoutLimit;
        if (t) {
            let n = t - this.startOffset;
            if (n > 0 && n < e) return n;
        }
        return e;
    }
    get remaining() {
        let e = this.duration;
        return e ? Math.max(0, e - this.currentTime) : 0;
    }
    get startOffset() {
        return this.assetItem.startOffset;
    }
    get timelineOffset() {
        var e;
        return (null == (e = this.hls) ? void 0 : e.config.timelineOffset) || 0;
    }
    set timelineOffset(e) {
        let t = this.timelineOffset;
        if (e !== t && Math.abs(e - t) > 1 / 9e4 && this.hls) {
            if (this.hasDetails) throw Error("Cannot set timelineOffset after playlists are loaded");
            this.hls.config.timelineOffset = e;
        }
    }
    getAssetTime(e) {
        return Math.min(Math.max(0, e - this.timelineOffset), this.duration);
    }
    removeMediaListeners() {
        let e = this.mediaAttached;
        e &&
            ((this._currentTime = e.currentTime),
            this.bufferSnapShot(),
            e.removeEventListener("timeupdate", this.checkPlayout));
    }
    bufferSnapShot() {
        if (this.mediaAttached) {
            var e;
            null != (e = this.hls) && e.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
        }
    }
    destroy() {
        this.removeMediaListeners(),
            this.hls && this.hls.destroy(),
            (this.hls = null),
            (this.tracks = this.mediaAttached = this.checkPlayout = null);
    }
    attachMedia(e) {
        var t;
        this.loadSource(), null == (t = this.hls) || t.attachMedia(e);
    }
    detachMedia() {
        var e;
        this.removeMediaListeners(), (this.mediaAttached = null), null == (e = this.hls) || e.detachMedia();
    }
    resumeBuffering() {
        var e;
        null == (e = this.hls) || e.resumeBuffering();
    }
    pauseBuffering() {
        var e;
        null == (e = this.hls) || e.pauseBuffering();
    }
    transferMedia() {
        var e;
        return this.bufferSnapShot(), (null == (e = this.hls) ? void 0 : e.transferMedia()) || null;
    }
    resetDetails() {
        let e = this.hls;
        if (e && this.hasDetails) {
            e.stopLoad();
            let t = (e) => delete e.details;
            e.levels.forEach(t), e.allAudioTracks.forEach(t), e.allSubtitleTracks.forEach(t), (this.hasDetails = !1);
        }
    }
    on(e, t, n) {
        var r;
        null == (r = this.hls) || r.on(e, t);
    }
    once(e, t, n) {
        var r;
        null == (r = this.hls) || r.once(e, t);
    }
    off(e, t, n) {
        var r;
        null == (r = this.hls) || r.off(e, t);
    }
    toString() {
        var e;
        return `HlsAssetPlayer: ${oP(this.assetItem)} ${null == ((e = this.hls)) ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
    }
}
let oU = 0.033;
class oG extends R {
    constructor(e, t) {
        super("interstitials-sched", t),
            (this.onScheduleUpdate = void 0),
            (this.eventMap = {}),
            (this.events = null),
            (this.items = null),
            (this.durations = { primary: 0, playout: 0, integrated: 0 }),
            (this.onScheduleUpdate = e);
    }
    destroy() {
        this.reset(), (this.onScheduleUpdate = null);
    }
    reset() {
        (this.eventMap = {}),
            this.setDurations(0, 0, 0),
            this.events && this.events.forEach((e) => e.reset()),
            (this.events = this.items = null);
    }
    resetErrorsInRange(e, t) {
        return this.events
            ? this.events.reduce((n, r) => (e <= r.startOffset && t > r.startOffset ? (delete r.error, n + 1) : n), 0)
            : 0;
    }
    get duration() {
        let e = this.items;
        return e ? e[e.length - 1].end : 0;
    }
    get length() {
        return this.items ? this.items.length : 0;
    }
    getEvent(e) {
        return (e && this.eventMap[e]) || null;
    }
    hasEvent(e) {
        return e in this.eventMap;
    }
    findItemIndex(e, t) {
        if (e.event) return this.findEventIndex(e.event.identifier);
        let n = -1;
        e.nextEvent
            ? (n = this.findEventIndex(e.nextEvent.identifier) - 1)
            : e.previousEvent && (n = this.findEventIndex(e.previousEvent.identifier) + 1);
        let r = this.items;
        if (r)
            for (
                r[n] || (void 0 === t && (t = e.start), (n = this.findItemIndexAtTime(t)));
                n >= 0 && null != (i = r[n]) && i.event;
            ) {
                var i;
                n--;
            }
        return n;
    }
    findItemIndexAtTime(e, t) {
        let n = this.items;
        if (n)
            for (let r = 0; r < n.length; r++) {
                let i = n[r];
                if ((t && "primary" !== t && (i = i[t]), e === i.start || (e > i.start && e < i.end))) return r;
            }
        return -1;
    }
    findJumpRestrictedIndex(e, t) {
        let n = this.items;
        if (n)
            for (let r = e; r <= t && n[r]; r++) {
                let e = n[r].event;
                if (null != e && e.restrictions.jump && !e.appendInPlace) return r;
            }
        return -1;
    }
    findEventIndex(e) {
        let t = this.items;
        if (t)
            for (let r = t.length; r--; ) {
                var n;
                if ((null == (n = t[r].event) ? void 0 : n.identifier) === e) return r;
            }
        return -1;
    }
    findAssetIndex(e, t) {
        let n = e.assetList,
            r = n.length;
        if (r > 1)
            for (let e = 0; e < r; e++) {
                let i = n[e];
                if (!i.error) {
                    let n = i.timelineStart;
                    if (t === n || (t > n && (t < n + (i.duration || 0) || e === r - 1))) return e;
                }
            }
        return 0;
    }
    get assetIdAtEnd() {
        var e;
        let t = null == (e = this.items) || null == (e = e[this.length - 1]) ? void 0 : e.event;
        if (t) {
            let e = t.assetList,
                n = e[e.length - 1];
            if (n) return n.identifier;
        }
        return null;
    }
    parseInterstitialDateRanges(e, t) {
        let n = e.main.details,
            { dateRanges: r } = n,
            i = this.events,
            s = this.parseDateRanges(r, { url: n.url }, t),
            a = Object.keys(r),
            o = i ? i.filter((e) => !a.includes(e.identifier)) : [];
        s.length &&
            s.sort((e, t) => {
                let n = e.cue.pre,
                    r = e.cue.post,
                    i = t.cue.pre,
                    s = t.cue.post;
                if (n && !i) return -1;
                if ((i && !n) || (r && !s)) return 1;
                if (s && !r) return -1;
                if (!n && !i && !r && !s) {
                    let n = e.startTime,
                        r = t.startTime;
                    if (n !== r) return n - r;
                }
                return e.dateRange.tagOrder - t.dateRange.tagOrder;
            }),
            (this.events = s),
            o.forEach((e) => {
                this.removeEvent(e);
            }),
            this.updateSchedule(e, o);
    }
    updateSchedule(e, t = [], n = !1) {
        let r = this.events || [];
        if (r.length || t.length || this.length < 2) {
            let i = this.items,
                s = this.parseSchedule(r, e);
            (n ||
                t.length ||
                (null == i ? void 0 : i.length) !== s.length ||
                s.some(
                    (e, t) =>
                        Math.abs(e.playout.start - i[t].playout.start) > 0.005 ||
                        Math.abs(e.playout.end - i[t].playout.end) > 0.005,
                )) &&
                ((this.items = s), this.onScheduleUpdate(t, i));
        }
    }
    parseDateRanges(e, t, n) {
        let r = [],
            i = Object.keys(e);
        for (let s = 0; s < i.length; s++) {
            let a = i[s],
                o = e[a];
            if (o.isInterstitial) {
                let e = this.eventMap[a];
                e ? e.setDateRange(o) : ((e = new oD(o, t)), (this.eventMap[a] = e), !1 === n && (e.appendInPlace = n)),
                    r.push(e);
            }
        }
        return r;
    }
    parseSchedule(e, t) {
        let n = [],
            r = t.main.details,
            i = r.live ? 1 / 0 : r.edge,
            s = 0;
        if ((e = e.filter((e) => !e.error && !(e.cue.once && e.hasPlayed))).length) {
            this.resolveOffsets(e, t);
            let r = 0,
                o = 0;
            if (
                (e.forEach((t, a) => {
                    let l = t.cue.pre,
                        u = t.cue.post,
                        c = e[a - 1] || null,
                        d = t.appendInPlace,
                        _ = u ? i : t.startOffset,
                        f = t.duration,
                        h = t.timelineOccupancy === ob.Range ? f : 0,
                        p = t.resumptionOffset,
                        m = (null == c ? void 0 : c.startTime) === _,
                        E = _ + t.cumulativeDuration,
                        g = d ? E + f : _ + p;
                    if (l || (!u && _ <= 0)) {
                        let e = o;
                        (o += h), (t.timelineStart = E);
                        let r = s;
                        (s += f),
                            n.push({
                                event: t,
                                start: E,
                                end: g,
                                playout: { start: r, end: s },
                                integrated: { start: e, end: o },
                            });
                    } else {
                        if (!(_ <= i)) return;
                        if (!m) {
                            let i = _ - r;
                            if (i > oU) {
                                let l = r,
                                    u = o;
                                o += i;
                                let c = s;
                                s += i;
                                let d = {
                                    previousEvent: e[a - 1] || null,
                                    nextEvent: t,
                                    start: l,
                                    end: l + i,
                                    playout: { start: c, end: s },
                                    integrated: { start: u, end: o },
                                };
                                n.push(d);
                            } else i > 0 && c && ((c.cumulativeDuration += i), (n[n.length - 1].end = _));
                        }
                        u && (g = E), (t.timelineStart = E);
                        let l = o;
                        o += h;
                        let d = s;
                        (s += f),
                            n.push({
                                event: t,
                                start: E,
                                end: g,
                                playout: { start: d, end: s },
                                integrated: { start: l, end: o },
                            });
                    }
                    let A = t.resumeTime;
                    r = u || A > i ? i : A;
                }),
                r < i)
            ) {
                var a;
                let e = r,
                    t = o,
                    l = i - r;
                o += l;
                let u = s;
                (s += l),
                    n.push({
                        previousEvent: (null == (a = n[n.length - 1]) ? void 0 : a.event) || null,
                        nextEvent: null,
                        start: r,
                        end: e + l,
                        playout: { start: u, end: s },
                        integrated: { start: t, end: o },
                    });
            }
            this.setDurations(i, s, o);
        } else {
            let e = 0;
            n.push({
                previousEvent: null,
                nextEvent: null,
                start: e,
                end: i,
                playout: { start: e, end: i },
                integrated: { start: e, end: i },
            }),
                this.setDurations(i, i, i);
        }
        return n;
    }
    setDurations(e, t, n) {
        this.durations = { primary: e, playout: t, integrated: n };
    }
    resolveOffsets(e, t) {
        let n = t.main.details,
            r = n.live ? 1 / 0 : n.edge,
            s = 0,
            a = -1;
        e.forEach((o, l) => {
            let u = o.cue.pre,
                c = o.cue.post,
                d = u ? 0 : c ? r : o.startTime;
            this.updateAssetDurations(o),
                a === d ? (o.cumulativeDuration = s) : ((s = 0), (a = d)),
                !c &&
                    o.snapOptions.in &&
                    (o.resumeAnchor = tD(null, n.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0),
                o.appendInPlace &&
                    !o.appendInPlaceStarted &&
                    (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)),
                !o.appendInPlace &&
                    l + 1 < e.length &&
                    e[l + 1].startTime - e[l].resumeTime < oU &&
                    ((e[l + 1].appendInPlace = !1),
                    e[l + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`));
            let _ = i(o.resumeOffset) ? o.resumeOffset : o.duration;
            s += _;
        });
    }
    primaryCanResumeInPlaceAt(e, t) {
        let n = e.resumeTime,
            r = e.startTime + e.resumptionOffset;
        return Math.abs(n - r) > oR
            ? (this.log(`"${e.identifier}" resumption ${n} not aligned with estimated timeline end ${r}`), !1)
            : !Object.keys(t).some((r) => {
                  let i = t[r].details,
                      s = i.edge;
                  if (n >= s) return this.log(`"${e.identifier}" resumption ${n} past ${r} playlist end ${s}`), !1;
                  let a = tD(null, i.fragments, n);
                  if (!a)
                      return (
                          this.log(
                              `"${e.identifier}" resumption ${n} does not align with any fragments in ${r} playlist (${i.fragStart}-${i.fragmentEnd})`,
                          ),
                          !0
                      );
                  let o = 0.175 * ("audio" === r);
                  return (
                      !(Math.abs(a.start - n) < oR + o || Math.abs(a.end - n) < oR + o) &&
                      (this.log(
                          `"${e.identifier}" resumption ${n} not aligned with ${r} fragment bounds (${a.start}-${a.end} sn: ${a.sn} cc: ${a.cc})`,
                      ),
                      !0)
                  );
              });
    }
    updateAssetDurations(e) {
        if (!e.assetListLoaded) return;
        let t = e.timelineStart,
            n = 0,
            r = !1,
            i = !1;
        for (let s = 0; s < e.assetList.length; s++) {
            let a = e.assetList[s],
                o = t + n;
            (a.startOffset = n),
                (a.timelineStart = o),
                r || (r = null === a.duration),
                i || (i = !!a.error),
                (n += a.error ? 0 : a.duration || 0);
        }
        r && !i ? (e.duration = Math.max(n, e.duration)) : (e.duration = n);
    }
    removeEvent(e) {
        e.reset(), delete this.eventMap[e.identifier];
    }
}
function oF(e) {
    return `[${e.event ? '"' + e.event.identifier + '"' : "primary"}: ${e.start.toFixed(2)}-${e.end.toFixed(2)}]`;
}
class oB {
    constructor(e) {
        (this.hls = void 0), (this.hls = e);
    }
    destroy() {
        this.hls = null;
    }
    loadAssetList(e, t) {
        let n,
            r = e.assetListUrl;
        try {
            n = ow(r, this.hls.sessionId, e.baseUrl);
        } catch (n) {
            let t = this.assignAssetListError(e, l.ASSET_LIST_LOAD_ERROR, n, r);
            this.hls.trigger(u.ERROR, t);
            return;
        }
        t && "data:" !== n.protocol && n.searchParams.set("_HLS_start_offset", "" + t);
        let i = this.hls.config,
            s = new i.loader(i),
            a = { responseType: "json", url: n.href },
            o = i.interstitialAssetListLoadPolicy.default,
            c = { loadPolicy: o, timeout: o.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 },
            d = {
                onSuccess: (t, n, r, i) => {
                    let s = t.data;
                    if (!Array.isArray(null == s ? void 0 : s.ASSETS)) {
                        let t = this.assignAssetListError(
                            e,
                            l.ASSET_LIST_PARSING_ERROR,
                            Error("Invalid interstitial asset list"),
                            r.url,
                            n,
                            i,
                        );
                        this.hls.trigger(u.ERROR, t);
                        return;
                    }
                    (e.assetListResponse = s),
                        this.hls.trigger(u.ASSET_LIST_LOADED, { event: e, assetListResponse: s, networkDetails: i });
                },
                onError: (t, n, r, i) => {
                    let s = this.assignAssetListError(
                        e,
                        l.ASSET_LIST_LOAD_ERROR,
                        Error(`Error loading X-ASSET-LIST: HTTP status ${t.code} ${t.text} (${n.url})`),
                        n.url,
                        i,
                        r,
                    );
                    this.hls.trigger(u.ERROR, s);
                },
                onTimeout: (t, n, r) => {
                    let i = this.assignAssetListError(
                        e,
                        l.ASSET_LIST_LOAD_TIMEOUT,
                        Error(`Timeout loading X-ASSET-LIST (${n.url})`),
                        n.url,
                        t,
                        r,
                    );
                    this.hls.trigger(u.ERROR, i);
                },
            };
        return s.load(a, c, d), this.hls.trigger(u.ASSET_LIST_LOADING, { event: e }), s;
    }
    assignAssetListError(e, t, n, r, i, s) {
        return (
            (e.error = n),
            {
                type: o.NETWORK_ERROR,
                details: t,
                fatal: !1,
                interstitial: e,
                url: r,
                error: n,
                networkDetails: s,
                stats: i,
            }
        );
    }
}
function oV(e) {
    null == e || e.play().catch(() => {});
}
function oH(e, t) {
    return `[${e}] Advancing timeline position to ${t}`;
}
class oj extends R {
    constructor(e, t) {
        super("interstitials", e.logger),
            (this.HlsPlayerClass = void 0),
            (this.hls = void 0),
            (this.assetListLoader = void 0),
            (this.mediaSelection = null),
            (this.altSelection = null),
            (this.media = null),
            (this.detachedData = null),
            (this.requiredTracks = null),
            (this.manager = null),
            (this.playerQueue = []),
            (this.bufferedPos = -1),
            (this.timelinePos = -1),
            (this.schedule = void 0),
            (this.playingItem = null),
            (this.bufferingItem = null),
            (this.waitingItem = null),
            (this.endedItem = null),
            (this.playingAsset = null),
            (this.endedAsset = null),
            (this.bufferingAsset = null),
            (this.shouldPlay = !1),
            (this.onPlay = () => {
                this.shouldPlay = !0;
            }),
            (this.onPause = () => {
                this.shouldPlay = !1;
            }),
            (this.onSeeking = () => {
                var e, t;
                let n = this.currentTime;
                if (void 0 === n || this.playbackDisabled || !this.schedule) return;
                let r = n - this.timelinePos;
                if (Math.abs(r) < 1 / 7056e5) return;
                let i = r <= -0.01;
                (this.timelinePos = n), (this.bufferedPos = n);
                let s = this.playingItem;
                if (!s) return void this.checkBuffer();
                if (
                    (i && this.schedule.resetErrorsInRange(n, n - r) && this.updateSchedule(!0),
                    this.checkBuffer(),
                    (i && n < s.start) || n >= s.end)
                ) {
                    let t = this.findItemIndex(s),
                        r = this.schedule.findItemIndexAtTime(n);
                    if (
                        (-1 === r &&
                            ((r = t + (i ? -1 : 1)),
                            this.log(
                                `seeked ${i ? "back " : ""}to position not covered by schedule ${n} (resolving from ${t} to ${r})`,
                            )),
                        !this.isInterstitial(s) && null != (e = this.media) && e.paused && (this.shouldPlay = !1),
                        !i && r > t)
                    ) {
                        let e = this.schedule.findJumpRestrictedIndex(t + 1, r);
                        if (e > t) return void this.setSchedulePosition(e);
                    }
                    this.setSchedulePosition(r);
                    return;
                }
                let a = this.playingAsset;
                if (!a) {
                    if (this.playingLastItem && this.isInterstitial(s)) {
                        let e = s.event.assetList[0];
                        e &&
                            ((this.endedItem = this.playingItem),
                            (this.playingItem = null),
                            this.setScheduleToAssetAtTime(n, e));
                    }
                    return;
                }
                let o = a.timelineStart,
                    l = a.duration || 0;
                ((i && n < o) || n >= o + l) &&
                    (null != (t = s.event) &&
                        t.appendInPlace &&
                        (this.clearInterstitial(s.event, s), this.flushFrontBuffer(n)),
                    this.setScheduleToAssetAtTime(n, a));
            }),
            (this.onTimeupdate = () => {
                let e = this.currentTime;
                if (void 0 === e || this.playbackDisabled || !(e > this.timelinePos)) return;
                (this.timelinePos = e), e > this.bufferedPos && this.checkBuffer();
                let t = this.playingItem;
                if (!t || this.playingLastItem) return;
                if (e >= t.end) {
                    this.timelinePos = t.end;
                    let e = this.findItemIndex(t);
                    this.setSchedulePosition(e + 1);
                }
                let n = this.playingAsset;
                !n || (e >= n.timelineStart + (n.duration || 0) && this.setScheduleToAssetAtTime(e, n));
            }),
            (this.onScheduleUpdate = (e, t) => {
                let n = this.schedule;
                if (!n) return;
                let r = this.playingItem,
                    i = n.events || [],
                    s = n.items || [],
                    a = n.durations,
                    o = e.map((e) => e.identifier),
                    l = !!(i.length || o.length);
                (l || t) &&
                    this.log(`INTERSTITIALS_UPDATED (${i.length}): ${i}
Schedule: ${s.map((e) => oF(e))} pos: ${this.timelinePos}`),
                    o.length && this.log(`Removed events ${o}`);
                let c = null,
                    d = null;
                r &&
                    ((c = this.updateItem(r, this.timelinePos)),
                    this.itemsMatch(r, c) ? (this.playingItem = c) : (this.waitingItem = this.endedItem = null)),
                    (this.waitingItem = this.updateItem(this.waitingItem)),
                    (this.endedItem = this.updateItem(this.endedItem));
                let _ = this.bufferingItem;
                if (
                    (_ &&
                        ((d = this.updateItem(_, this.bufferedPos)),
                        this.itemsMatch(_, d)
                            ? (this.bufferingItem = d)
                            : _.event &&
                              ((this.bufferingItem = this.playingItem), this.clearInterstitial(_.event, null))),
                    e.forEach((e) => {
                        e.assetList.forEach((e) => {
                            this.clearAssetPlayer(e.identifier, null);
                        });
                    }),
                    this.playerQueue.forEach((e) => {
                        if (e.interstitial.appendInPlace) {
                            let t = e.assetItem.timelineStart,
                                n = e.timelineOffset - t;
                            if (n)
                                try {
                                    e.timelineOffset = t;
                                } catch (r) {
                                    Math.abs(n) > oR && this.warn(`${r} ("${e.assetId}" ${e.timelineOffset}->${t})`);
                                }
                        }
                    }),
                    l || t)
                ) {
                    if (
                        (this.hls.trigger(u.INTERSTITIALS_UPDATED, {
                            events: i.slice(0),
                            schedule: s.slice(0),
                            durations: a,
                            removedIds: o,
                        }),
                        this.isInterstitial(r) && o.includes(r.event.identifier))
                    ) {
                        this.warn(`Interstitial "${r.event.identifier}" removed while playing`),
                            this.primaryFallback(r.event);
                        return;
                    }
                    r && this.trimInPlace(c, r), _ && d !== c && this.trimInPlace(d, _), this.checkBuffer();
                }
            }),
            (this.hls = e),
            (this.HlsPlayerClass = t),
            (this.assetListLoader = new oB(e)),
            (this.schedule = new oG(this.onScheduleUpdate, e.logger)),
            this.registerListeners();
    }
    registerListeners() {
        let e = this.hls;
        e &&
            (e.on(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(u.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.on(u.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this),
            e.on(u.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
            e.on(u.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this),
            e.on(u.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this),
            e.on(u.ASSET_LIST_LOADED, this.onAssetListLoaded, this),
            e.on(u.BUFFER_APPENDED, this.onBufferAppended, this),
            e.on(u.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.on(u.BUFFERED_TO_END, this.onBufferedToEnd, this),
            e.on(u.MEDIA_ENDED, this.onMediaEnded, this),
            e.on(u.ERROR, this.onError, this),
            e.on(u.DESTROYING, this.onDestroying, this));
    }
    unregisterListeners() {
        let e = this.hls;
        e &&
            (e.off(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(u.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.off(u.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this),
            e.off(u.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
            e.off(u.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this),
            e.off(u.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this),
            e.off(u.ASSET_LIST_LOADED, this.onAssetListLoaded, this),
            e.off(u.BUFFER_CODECS, this.onBufferCodecs, this),
            e.off(u.BUFFER_APPENDED, this.onBufferAppended, this),
            e.off(u.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.off(u.BUFFERED_TO_END, this.onBufferedToEnd, this),
            e.off(u.MEDIA_ENDED, this.onMediaEnded, this),
            e.off(u.ERROR, this.onError, this),
            e.off(u.DESTROYING, this.onDestroying, this));
    }
    startLoad() {
        this.resumeBuffering();
    }
    stopLoad() {
        this.pauseBuffering();
    }
    resumeBuffering() {
        var e;
        null == (e = this.getBufferingPlayer()) || e.resumeBuffering();
    }
    pauseBuffering() {
        var e;
        null == (e = this.getBufferingPlayer()) || e.pauseBuffering();
    }
    destroy() {
        this.unregisterListeners(),
            this.stopLoad(),
            this.assetListLoader && this.assetListLoader.destroy(),
            this.emptyPlayerQueue(),
            this.clearScheduleState(),
            this.schedule && this.schedule.destroy(),
            (this.media =
                this.detachedData =
                this.mediaSelection =
                this.requiredTracks =
                this.altSelection =
                this.schedule =
                this.manager =
                    null),
            (this.hls = this.HlsPlayerClass = this.log = null),
            (this.assetListLoader = null),
            (this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null),
            (this.onScheduleUpdate = null);
    }
    onDestroying() {
        let e = this.primaryMedia || this.media;
        e && this.removeMediaListeners(e);
    }
    removeMediaListeners(e) {
        rF(e, "play", this.onPlay),
            rF(e, "pause", this.onPause),
            rF(e, "seeking", this.onSeeking),
            rF(e, "timeupdate", this.onTimeupdate);
    }
    onMediaAttaching(e, t) {
        let n = (this.media = t.media);
        rG(n, "seeking", this.onSeeking),
            rG(n, "timeupdate", this.onTimeupdate),
            rG(n, "play", this.onPlay),
            rG(n, "pause", this.onPause);
    }
    onMediaAttached(e, t) {
        let n = this.effectivePlayingItem,
            r = this.detachedData;
        if (((this.detachedData = null), null === n)) this.checkStart();
        else if (!r) {
            this.clearScheduleState();
            let e = this.findItemIndex(n);
            this.setSchedulePosition(e);
        }
    }
    clearScheduleState() {
        this.log("clear schedule state"),
            (this.playingItem =
                this.bufferingItem =
                this.waitingItem =
                this.endedItem =
                this.playingAsset =
                this.endedAsset =
                this.bufferingAsset =
                    null);
    }
    onMediaDetaching(e, t) {
        let n = !!t.transferMedia,
            r = this.media;
        if (((this.media = null), !n && (r && this.removeMediaListeners(r), this.detachedData))) {
            let e = this.getBufferingPlayer();
            e &&
                (this.log(`Removing schedule state for detachedData and ${e}`),
                (this.playingAsset =
                    this.endedAsset =
                    this.bufferingAsset =
                    this.bufferingItem =
                    this.waitingItem =
                    this.detachedData =
                        null),
                e.detachMedia()),
                (this.shouldPlay = !1);
        }
    }
    get interstitialsManager() {
        if (!this.hls) return null;
        if (this.manager) return this.manager;
        let e = this,
            t = () => e.bufferingItem || e.waitingItem,
            n = (t) => (t ? e.getAssetPlayer(t.identifier) : t),
            r = (t, r, i, a, o) => {
                if (t) {
                    let l = t[r].start,
                        u = t.event;
                    if (u) {
                        if ("playout" === r || u.timelineOccupancy !== ob.Point) {
                            let e = n(i);
                            (null == e ? void 0 : e.interstitial) === u && (l += e.assetItem.startOffset + e[o]);
                        }
                    } else l += ("bufferedPos" === a ? s() : e[a]) - t.start;
                    return l;
                }
                return 0;
            },
            i = (t, n) => {
                var r, i;
                if (0 !== t && "primary" !== n && null != (r = e.schedule) && r.length) {
                    let r = e.schedule.findItemIndexAtTime(t),
                        s = null == (i = e.schedule.items) ? void 0 : i[r];
                    if (s) return t + (s[n].start - s.start);
                }
                return t;
            },
            s = () => {
                let t = e.bufferedPos;
                return t === Number.MAX_VALUE ? a("primary") : Math.max(t, 0);
            },
            a = (t) => {
                var n, r;
                return null != (n = e.primaryDetails) && n.live
                    ? e.primaryDetails.edge
                    : (null == (r = e.schedule) ? void 0 : r.durations[t]) || 0;
            },
            o = (t, i) => {
                var s, a;
                let o = e.effectivePlayingItem;
                if ((null != o && null != (s = o.event) && s.restrictions.skip) || !e.schedule) return;
                e.log(`seek to ${t} "${i}"`);
                let l = e.effectivePlayingItem,
                    u = e.schedule.findItemIndexAtTime(t, i),
                    c = null == (a = e.schedule.items) ? void 0 : a[u],
                    d = e.getBufferingPlayer(),
                    _ = null == d ? void 0 : d.interstitial,
                    f = null == _ ? void 0 : _.appendInPlace,
                    h = l && e.itemsMatch(l, c);
                if (l && (f || h)) {
                    let s = n(e.playingAsset),
                        a = (null == s ? void 0 : s.media) || e.primaryMedia;
                    if (a) {
                        let n = "primary" === i ? a.currentTime : r(l, i, e.playingAsset, "timelinePos", "currentTime"),
                            o = t - n,
                            u = (f ? n : a.currentTime) + o;
                        if (u >= 0 && (!s || f || u <= s.duration)) {
                            a.currentTime = u;
                            return;
                        }
                    }
                }
                if (c) {
                    let n = t;
                    if ("primary" !== i) {
                        let e = t - c[i].start;
                        n = c.start + e;
                    }
                    let r = !e.isInterstitial(c);
                    if ((!e.isInterstitial(l) || l.event.appendInPlace) && (r || c.event.appendInPlace)) {
                        let t = e.media || (f ? (null == d ? void 0 : d.media) : null);
                        t && (t.currentTime = n);
                    } else if (l) {
                        let s = e.findItemIndex(l);
                        if (u > s) {
                            let t = e.schedule.findJumpRestrictedIndex(s + 1, u);
                            if (t > s) return void e.setSchedulePosition(t);
                        }
                        let a = 0;
                        if (r) (e.timelinePos = n), e.checkBuffer();
                        else {
                            let e = c.event.assetList,
                                n = t - (c[i] || c).start;
                            for (let t = e.length; t--; ) {
                                let r = e[t];
                                if (r.duration && n >= r.startOffset && n < r.startOffset + r.duration) {
                                    a = t;
                                    break;
                                }
                            }
                        }
                        e.setSchedulePosition(u, a);
                    }
                }
            },
            l = () => {
                let n = e.effectivePlayingItem;
                if (e.isInterstitial(n)) return n;
                let r = t();
                return e.isInterstitial(r) ? r : null;
            },
            u = {
                get bufferedEnd() {
                    let n = t(),
                        i = e.bufferingItem;
                    if (i && i === n) {
                        var c;
                        return (
                            r(i, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - i.playout.start ||
                            (null == (c = e.bufferingAsset) ? void 0 : c.startOffset) ||
                            0
                        );
                    }
                    return 0;
                },
                get currentTime() {
                    let t = l(),
                        n = e.effectivePlayingItem;
                    if (n && n === t)
                        return r(n, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") - n.playout.start;
                    return 0;
                },
                set currentTime(time) {
                    let t = l(),
                        n = e.effectivePlayingItem;
                    n && n === t && o(time + n.playout.start, "playout");
                },
                get duration() {
                    let e = l();
                    if (e) return e.playout.end - e.playout.start;
                    return 0;
                },
                get assetPlayers() {
                    var d;
                    let t = null == (d = l()) ? void 0 : d.event.assetList;
                    if (t) return t.map((t) => e.getAssetPlayer(t.identifier));
                    return [];
                },
                get playingIndex() {
                    var _;
                    let t = null == (_ = l()) ? void 0 : _.event;
                    if (t && e.effectivePlayingAsset) return t.findAssetIndex(e.effectivePlayingAsset);
                    return -1;
                },
                get scheduleItem() {
                    return l();
                },
            };
        return (this.manager = {
            get events() {
                var f;
                return (null == (f = e.schedule) || null == (f = f.events) ? void 0 : f.slice(0)) || [];
            },
            get schedule() {
                var h;
                return (null == (h = e.schedule) || null == (h = h.items) ? void 0 : h.slice(0)) || [];
            },
            get interstitialPlayer() {
                if (l()) return u;
                return null;
            },
            get playerQueue() {
                return e.playerQueue.slice(0);
            },
            get bufferingAsset() {
                return e.bufferingAsset;
            },
            get bufferingItem() {
                return t();
            },
            get bufferingIndex() {
                let n = t();
                return e.findItemIndex(n);
            },
            get playingAsset() {
                return e.effectivePlayingAsset;
            },
            get playingItem() {
                return e.effectivePlayingItem;
            },
            get playingIndex() {
                let t = e.effectivePlayingItem;
                return e.findItemIndex(t);
            },
            primary: {
                get bufferedEnd() {
                    return s();
                },
                get currentTime() {
                    let t = e.timelinePos;
                    return t > 0 ? t : 0;
                },
                set currentTime(time) {
                    o(time, "primary");
                },
                get duration() {
                    return a("primary");
                },
                get seekableStart() {
                    var p;
                    return (null == (p = e.primaryDetails) ? void 0 : p.fragmentStart) || 0;
                },
            },
            integrated: {
                get bufferedEnd() {
                    return r(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd");
                },
                get currentTime() {
                    return r(
                        e.effectivePlayingItem,
                        "integrated",
                        e.effectivePlayingAsset,
                        "timelinePos",
                        "currentTime",
                    );
                },
                set currentTime(time) {
                    o(time, "integrated");
                },
                get duration() {
                    return a("integrated");
                },
                get seekableStart() {
                    var m;
                    return i((null == (m = e.primaryDetails) ? void 0 : m.fragmentStart) || 0, "integrated");
                },
            },
            skip: () => {
                let t = e.effectivePlayingItem,
                    n = null == t ? void 0 : t.event;
                if (n && !n.restrictions.skip) {
                    let r = e.findItemIndex(t);
                    n.appendInPlace
                        ? o(t.playout.start + t.event.duration + 0.001, "playout")
                        : e.advanceAfterAssetEnded(n, r, 1 / 0);
                }
            },
        });
    }
    get effectivePlayingItem() {
        return this.waitingItem || this.playingItem || this.endedItem;
    }
    get effectivePlayingAsset() {
        return this.playingAsset || this.endedAsset;
    }
    get playingLastItem() {
        var e;
        let t = this.playingItem,
            n = null == (e = this.schedule) ? void 0 : e.items;
        return !!this.playbackStarted && !!t && !!n && this.findItemIndex(t) === n.length - 1;
    }
    get playbackStarted() {
        return null !== this.effectivePlayingItem;
    }
    get currentTime() {
        var e, t;
        if (null === this.mediaSelection) return;
        let n = this.waitingItem || this.playingItem;
        if (this.isInterstitial(n) && !n.event.appendInPlace) return;
        let r = this.media;
        !r && null != (e = this.bufferingItem) && null != (e = e.event) && e.appendInPlace && (r = this.primaryMedia);
        let s = null == (t = r) ? void 0 : t.currentTime;
        if (void 0 !== s && i(s)) return s;
    }
    get primaryMedia() {
        var e;
        return this.media || (null == (e = this.detachedData) ? void 0 : e.media) || null;
    }
    isInterstitial(e) {
        return !!(null != e && e.event);
    }
    retreiveMediaSource(e, t) {
        let n = this.getAssetPlayer(e);
        n && this.transferMediaFromPlayer(n, t);
    }
    transferMediaFromPlayer(e, t) {
        let n = e.interstitial.appendInPlace,
            r = e.media;
        if (n && r === this.primaryMedia) {
            if (((this.bufferingAsset = null), (!t || (this.isInterstitial(t) && !t.event.appendInPlace)) && t && r)) {
                this.detachedData = { media: r };
                return;
            }
            let n = e.transferMedia();
            this.log(`transfer MediaSource from ${e} ${tf(n)}`), (this.detachedData = n);
        } else t && r && (this.shouldPlay || (this.shouldPlay = !r.paused));
    }
    transferMediaTo(e, t) {
        var n, r;
        let i;
        if (e.media === t) return;
        let s = null,
            a = this.hls,
            o = e !== a,
            l = o && e.interstitial.appendInPlace,
            u = null == (n = this.detachedData) ? void 0 : n.mediaSource;
        if (a.media) l && ((s = a.transferMedia()), (this.detachedData = s)), (i = "Primary");
        else if (u) {
            let e = this.getBufferingPlayer();
            e ? ((s = e.transferMedia()), (i = `${e}`)) : (i = "detached MediaSource");
        } else i = "detached media";
        if (!s) {
            if (u) (s = this.detachedData), this.log(`using detachedData: MediaSource ${tf(s)}`);
            else if (!this.detachedData || a.media === t) {
                let e = this.playerQueue;
                e.length > 1 &&
                    e.forEach((e) => {
                        if (o && e.interstitial.appendInPlace !== l) {
                            let t = e.interstitial;
                            this.clearInterstitial(e.interstitial, null),
                                (t.appendInPlace = !1),
                                t.appendInPlace && this.warn(`Could not change append strategy for queued assets ${t}`);
                        }
                    }),
                    this.hls.detachMedia(),
                    (this.detachedData = { media: t });
            }
        }
        let c = s && "mediaSource" in s && (null == (r = s.mediaSource) ? void 0 : r.readyState) !== "closed",
            d = c && s ? s : t;
        this.log(
            `${c ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${i} (media.currentTime: ${t.currentTime})`,
        );
        let _ = this.schedule;
        if (d === s && _) {
            let t = o && e.assetId === _.assetIdAtEnd;
            d.overrides = { duration: _.duration, endOfStream: !o || t, cueRemoval: !o };
        }
        e.attachMedia(d);
    }
    onInterstitialCueEnter() {
        this.onTimeupdate();
    }
    checkStart() {
        let e = this.schedule,
            t = null == e ? void 0 : e.events;
        if (!t || this.playbackDisabled || !this.media) return;
        -1 === this.bufferedPos && (this.bufferedPos = 0);
        let n = this.timelinePos,
            r = this.effectivePlayingItem;
        if (-1 === n) {
            let n = this.hls.startPosition;
            if ((this.log(oH("checkStart", n)), (this.timelinePos = n), t.length && t[0].cue.pre)) {
                let n = e.findEventIndex(t[0].identifier);
                this.setSchedulePosition(n);
            } else if (n >= 0 || !this.primaryLive) {
                let t = (this.timelinePos = n > 0 ? n : 0),
                    r = e.findItemIndexAtTime(t);
                this.setSchedulePosition(r);
            }
        } else if (r && !this.playingItem) {
            let t = e.findItemIndex(r);
            this.setSchedulePosition(t);
        }
    }
    advanceAssetBuffering(e, t) {
        let n = e.event,
            r = n.findAssetIndex(t),
            i = oM(n, r);
        if (n.isAssetPastPlayoutLimit(i)) {
            if (this.schedule) {
                var s;
                let t = null == (s = this.schedule.items) ? void 0 : s[this.findItemIndex(e) + 1];
                t && this.bufferedToItem(t);
            }
        } else this.bufferedToEvent(e, i);
    }
    advanceAfterAssetEnded(e, t, n) {
        let r = oM(e, n);
        if (e.isAssetPastPlayoutLimit(r)) {
            if (this.schedule) {
                let n = this.schedule.items;
                if (n) {
                    let r = t + 1;
                    if (r >= n.length) return void this.setSchedulePosition(-1);
                    let i = e.resumeTime;
                    this.timelinePos < i &&
                        (this.log(oH("advanceAfterAssetEnded", i)),
                        (this.timelinePos = i),
                        e.appendInPlace && this.advanceInPlace(i),
                        this.checkBuffer(this.bufferedPos < i)),
                        this.setSchedulePosition(r);
                }
            }
        } else {
            if (e.appendInPlace) {
                let t = e.assetList[r];
                t && this.advanceInPlace(t.timelineStart);
            }
            this.setSchedulePosition(t, r);
        }
    }
    setScheduleToAssetAtTime(e, t) {
        let n = this.schedule;
        if (!n) return;
        let r = t.parentIdentifier,
            i = n.getEvent(r);
        if (i) {
            let t = n.findEventIndex(r),
                s = n.findAssetIndex(i, e);
            this.advanceAfterAssetEnded(i, t, s - 1);
        }
    }
    setSchedulePosition(e, t) {
        var n, r, i;
        let s = null == (n = this.schedule) ? void 0 : n.items;
        if (!s || this.playbackDisabled) return;
        let a = e >= 0 ? s[e] : null;
        this.log(`setSchedulePosition ${e}, ${t} (${a ? oF(a) : a}) pos: ${this.timelinePos}`);
        let o = this.waitingItem || this.playingItem,
            l = this.playingLastItem;
        if (this.isInterstitial(o)) {
            let n = o.event,
                c = this.playingAsset,
                d = null == c ? void 0 : c.identifier,
                _ = d ? this.getAssetPlayer(d) : null;
            if (_ && d && (!this.eventItemsMatch(o, a) || (void 0 !== t && d !== n.assetList[t].identifier))) {
                let t = n.findAssetIndex(c);
                if (
                    (this.log(`INTERSTITIAL_ASSET_ENDED ${t + 1}/${n.assetList.length} ${oP(c)}`),
                    (this.endedAsset = c),
                    (this.playingAsset = null),
                    this.hls.trigger(u.INTERSTITIAL_ASSET_ENDED, {
                        asset: c,
                        assetListIndex: t,
                        event: n,
                        schedule: s.slice(0),
                        scheduleIndex: e,
                        player: _,
                    }),
                    o !== this.playingItem)
                ) {
                    this.itemsMatch(o, this.playingItem) &&
                        !this.playingAsset &&
                        this.advanceAfterAssetEnded(n, this.findItemIndex(this.playingItem), t);
                    return;
                }
                this.retreiveMediaSource(d, a),
                    _.media && !(null != (r = this.detachedData) && r.mediaSource) && _.detachMedia();
            }
            if (
                !this.eventItemsMatch(o, a) &&
                ((this.endedItem = o),
                (this.playingItem = null),
                this.log(`INTERSTITIAL_ENDED ${n} ${oF(o)}`),
                (n.hasPlayed = !0),
                this.hls.trigger(u.INTERSTITIAL_ENDED, { event: n, schedule: s.slice(0), scheduleIndex: e }),
                n.cue.once)
            ) {
                this.updateSchedule();
                let e = null == (i = this.schedule) ? void 0 : i.items;
                if (a && e) {
                    let n = this.findItemIndex(a);
                    this.advanceSchedule(n, e, t, o, l);
                }
                return;
            }
        }
        this.advanceSchedule(e, s, t, o, l);
    }
    advanceSchedule(e, t, n, r, i) {
        let s = this.schedule;
        if (!s) return;
        let a = t[e] || null,
            o = this.primaryMedia,
            l = this.playerQueue;
        if (
            (l.length &&
                l.forEach((t) => {
                    let n = t.interstitial,
                        r = s.findEventIndex(n.identifier);
                    (r < e || r > e + 1) && this.clearInterstitial(n, a);
                }),
            this.isInterstitial(a))
        ) {
            this.timelinePos = Math.min(Math.max(this.timelinePos, a.start), a.end);
            let i = a.event;
            if (void 0 === n) {
                n = s.findAssetIndex(i, this.timelinePos);
                let t = oM(i, n - 1);
                if (i.isAssetPastPlayoutLimit(t) || (i.appendInPlace && this.timelinePos === a.end))
                    return void this.advanceAfterAssetEnded(i, e, n);
                n = t;
            }
            let l = this.waitingItem;
            this.assetsBuffered(a, o) || this.setBufferingItem(a);
            let c = this.preloadAssets(i, n);
            if (
                (this.eventItemsMatch(a, l || r) ||
                    ((this.waitingItem = a),
                    this.log(`INTERSTITIAL_STARTED ${oF(a)} ${i.appendInPlace ? "append in place" : ""}`),
                    this.hls.trigger(u.INTERSTITIAL_STARTED, { event: i, schedule: t.slice(0), scheduleIndex: e })),
                !i.assetListLoaded)
            )
                return void this.log(`Waiting for ASSET-LIST to complete loading ${i}`);
            if ((i.assetListLoader && (i.assetListLoader.destroy(), (i.assetListLoader = void 0)), !o))
                return void this.log(`Waiting for attachMedia to start Interstitial ${i}`);
            (this.waitingItem = this.endedItem = null), (this.playingItem = a);
            let d = i.assetList[n];
            if (!d) return void this.advanceAfterAssetEnded(i, e, n || 0);
            if ((c || (c = this.getAssetPlayer(d.identifier)), null === c || c.destroyed)) {
                let e = i.assetList.length;
                this.warn(`asset ${n + 1}/${e} player destroyed ${i}`),
                    (c = this.createAssetPlayer(i, d, n)).loadSource();
            }
            if (!this.eventItemsMatch(a, this.bufferingItem) && i.appendInPlace && this.isAssetBuffered(d)) return;
            this.startAssetPlayer(c, n, t, e, o), this.shouldPlay && oV(c.media);
        } else
            a
                ? (this.resumePrimary(a, e, r), this.shouldPlay && oV(this.hls.media))
                : i &&
                  this.isInterstitial(r) &&
                  ((this.endedItem = null),
                  (this.playingItem = r),
                  r.event.appendInPlace || this.attachPrimary(s.durations.primary, null));
    }
    get playbackDisabled() {
        return !1 === this.hls.config.enableInterstitialPlayback;
    }
    get primaryDetails() {
        var e;
        return null == (e = this.mediaSelection) ? void 0 : e.main.details;
    }
    get primaryLive() {
        var e;
        return !!(null != (e = this.primaryDetails) && e.live);
    }
    resumePrimary(e, t, n) {
        var r, i;
        if (
            ((this.playingItem = e),
            (this.playingAsset = this.endedAsset = null),
            (this.waitingItem = this.endedItem = null),
            this.bufferedToItem(e),
            this.log(`resuming ${oF(e)}`),
            !(null != (r = this.detachedData) && r.mediaSource))
        ) {
            let n = this.timelinePos;
            (n < e.start || n >= e.end) &&
                ((n = this.getPrimaryResumption(e, t)), this.log(oH("resumePrimary", n)), (this.timelinePos = n)),
                this.attachPrimary(n, e);
        }
        if (!n) return;
        let s = null == (i = this.schedule) ? void 0 : i.items;
        s &&
            (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${oF(e)}`),
            this.hls.trigger(u.INTERSTITIALS_PRIMARY_RESUMED, { schedule: s.slice(0), scheduleIndex: t }),
            this.checkBuffer());
    }
    getPrimaryResumption(e, t) {
        let n = e.start;
        if (this.primaryLive) {
            let e = this.primaryDetails;
            if (0 === t) return this.hls.startPosition;
            if (e && (n < e.fragmentStart || n > e.edge)) return this.hls.liveSyncPosition || -1;
        }
        return n;
    }
    isAssetBuffered(e) {
        let t = this.getAssetPlayer(e.identifier);
        return null != t && t.hls
            ? t.hls.bufferedToEnd
            : nE.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0);
    }
    attachPrimary(e, t, n) {
        t ? this.setBufferingItem(t) : (this.bufferingItem = this.playingItem), (this.bufferingAsset = null);
        let r = this.primaryMedia;
        if (!r) return;
        let i = this.hls;
        i.media ? this.checkBuffer() : (this.transferMediaTo(i, r), n && this.startLoadingPrimaryAt(e, n)),
            n || (this.log(oH("attachPrimary", e)), (this.timelinePos = e), this.startLoadingPrimaryAt(e, n));
    }
    startLoadingPrimaryAt(e, t) {
        var n;
        let r = this.hls;
        !r.loadingEnabled ||
        !r.media ||
        Math.abs(((null == (n = r.mainForwardBufferInfo) ? void 0 : n.start) || r.media.currentTime) - e) > 0.5
            ? r.startLoad(e, t)
            : r.bufferingEnabled || r.resumeBuffering();
    }
    onManifestLoading() {
        var e;
        this.stopLoad(),
            null == (e = this.schedule) || e.reset(),
            this.emptyPlayerQueue(),
            this.clearScheduleState(),
            (this.shouldPlay = !1),
            (this.bufferedPos = this.timelinePos = -1),
            (this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null),
            this.hls.off(u.BUFFER_CODECS, this.onBufferCodecs, this),
            this.hls.on(u.BUFFER_CODECS, this.onBufferCodecs, this);
    }
    onLevelUpdated(e, t) {
        if (-1 === t.level || !this.schedule) return;
        let n = this.hls.levels[t.level];
        if (!n.details) return;
        let r = v(v({}, this.mediaSelection || this.altSelection), {}, { main: n });
        (this.mediaSelection = r),
            this.schedule.parseInterstitialDateRanges(r, this.hls.config.interstitialAppendInPlace),
            !this.effectivePlayingItem && this.schedule.items && this.checkStart();
    }
    onAudioTrackUpdated(e, t) {
        let n = this.hls.audioTracks[t.id],
            r = this.mediaSelection;
        if (!r) {
            this.altSelection = v(v({}, this.altSelection), {}, { audio: n });
            return;
        }
        let i = v(v({}, r), {}, { audio: n });
        this.mediaSelection = i;
    }
    onSubtitleTrackUpdated(e, t) {
        let n = this.hls.subtitleTracks[t.id],
            r = this.mediaSelection;
        if (!r) {
            this.altSelection = v(v({}, this.altSelection), {}, { subtitles: n });
            return;
        }
        let i = v(v({}, r), {}, { subtitles: n });
        this.mediaSelection = i;
    }
    onAudioTrackSwitching(e, t) {
        let n = tg(t);
        this.playerQueue.forEach(({ hls: e }) => e && (e.setAudioOption(t) || e.setAudioOption(n)));
    }
    onSubtitleTrackSwitch(e, t) {
        let n = tg(t);
        this.playerQueue.forEach(
            ({ hls: e }) => e && (e.setSubtitleOption(t) || (-1 !== t.id && e.setSubtitleOption(n))),
        );
    }
    onBufferCodecs(e, t) {
        let n = t.tracks;
        n && (this.requiredTracks = n);
    }
    onBufferAppended(e, t) {
        this.checkBuffer();
    }
    onBufferFlushed(e, t) {
        let n = this.playingItem;
        if (n && !this.itemsMatch(n, this.bufferingItem) && !this.isInterstitial(n)) {
            let e = this.timelinePos;
            (this.bufferedPos = e), this.checkBuffer();
        }
    }
    onBufferedToEnd(e) {
        if (!this.schedule) return;
        let t = this.schedule.events;
        if (this.bufferedPos < Number.MAX_VALUE && t) {
            for (let e = 0; e < t.length; e++) {
                let r = t[e];
                if (r.cue.post) {
                    var n;
                    let e = this.schedule.findEventIndex(r.identifier),
                        t = null == (n = this.schedule.items) ? void 0 : n[e];
                    this.isInterstitial(t) && this.eventItemsMatch(t, this.bufferingItem) && this.bufferedToItem(t, 0);
                    break;
                }
            }
            this.bufferedPos = Number.MAX_VALUE;
        }
    }
    onMediaEnded(e) {
        let t = this.playingItem;
        if (!this.playingLastItem && t) {
            let e = this.findItemIndex(t);
            this.setSchedulePosition(e + 1);
        } else this.shouldPlay = !1;
    }
    updateItem(e, t) {
        var n;
        let r = null == (n = this.schedule) ? void 0 : n.items;
        return (e && r && r[this.findItemIndex(e, t)]) || null;
    }
    trimInPlace(e, t) {
        if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > 0.25) {
            e.event.assetList.forEach((t, n) => {
                e.event.isAssetPastPlayoutLimit(n) && this.clearAssetPlayer(t.identifier, null);
            });
            let n = e.end + 0.25,
                r = nE.bufferInfo(this.primaryMedia, n, 0);
            if (r.end > n || (r.nextStart || 0) > n) {
                this.log(`trim buffered interstitial ${oF(e)} (was ${oF(t)})`);
                let r = !0;
                this.attachPrimary(n, null, r), this.flushFrontBuffer(n);
            }
        }
    }
    itemsMatch(e, t) {
        return (
            !!t &&
            (e === t ||
                (e.event && t.event && this.eventItemsMatch(e, t)) ||
                (!e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t)))
        );
    }
    eventItemsMatch(e, t) {
        var n;
        return !!t && (e === t || e.event.identifier === (null == (n = t.event) ? void 0 : n.identifier));
    }
    findItemIndex(e, t) {
        return e && this.schedule ? this.schedule.findItemIndex(e, t) : -1;
    }
    updateSchedule(e = !1) {
        var t;
        let n = this.mediaSelection;
        n && (null == (t = this.schedule) || t.updateSchedule(n, [], e));
    }
    checkBuffer(e) {
        var t;
        let n = null == (t = this.schedule) ? void 0 : t.items;
        if (!n) return;
        let r = nE.bufferInfo(this.primaryMedia, this.timelinePos, 0);
        e && (this.bufferedPos = this.timelinePos), e || (e = r.len < 1), this.updateBufferedPos(r.end, n, e);
    }
    updateBufferedPos(e, t, n) {
        let r = this.schedule,
            i = this.bufferingItem;
        if (this.bufferedPos > e || !r) return;
        if (1 === t.length && this.itemsMatch(t[0], i)) {
            this.bufferedPos = e;
            return;
        }
        let s = this.playingItem,
            a = this.findItemIndex(s),
            o = r.findItemIndexAtTime(e);
        if (this.bufferedPos < e) {
            var l;
            let n = this.findItemIndex(i),
                r = Math.min(n + 1, t.length - 1),
                s = t[r];
            if (
                (((-1 === o && i && e >= i.end) || (null != (l = s.event) && l.appendInPlace && e + 0.01 >= s.start)) &&
                    (o = r),
                this.isInterstitial(i))
            ) {
                let e = i.event;
                if ((r - a > 1 && !1 === e.appendInPlace) || (0 === e.assetList.length && e.assetListLoader)) return;
            }
            if (((this.bufferedPos = e), o > n && o > a)) this.bufferedToItem(s);
            else {
                let t = this.primaryDetails;
                this.primaryLive &&
                    t &&
                    e > t.edge - t.targetduration &&
                    s.start < t.edge + this.hls.config.interstitialLiveLookAhead &&
                    this.isInterstitial(s) &&
                    this.preloadAssets(s.event, 0);
            }
        } else
            n &&
                s &&
                !this.itemsMatch(s, i) &&
                (o === a ? this.bufferedToItem(s) : o === a + 1 && this.bufferedToItem(t[o]));
    }
    assetsBuffered(e, t) {
        return (
            0 !== e.event.assetList.length &&
            !e.event.assetList.some((e) => {
                let n = this.getAssetPlayer(e.identifier);
                return !(null != n && n.bufferedInPlaceToEnd(t));
            })
        );
    }
    setBufferingItem(e) {
        let t = this.bufferingItem,
            n = this.schedule;
        if (!this.itemsMatch(e, t) && n) {
            let { items: r, events: i } = n;
            if (!r || !i) return t;
            let s = this.isInterstitial(e),
                a = this.getBufferingPlayer();
            (this.bufferingItem = e), (this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos)));
            let o = a ? a.remaining : t ? t.end - this.timelinePos : 0;
            if (
                (this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${oF(e)}` + (t ? ` (${o.toFixed(2)} remaining)` : "")),
                !this.playbackDisabled)
            )
                if (s) {
                    let t = n.findAssetIndex(e.event, this.bufferedPos);
                    e.event.assetList.forEach((e, n) => {
                        let r = this.getAssetPlayer(e.identifier);
                        r && (n === t && r.loadSource(), r.resumeBuffering());
                    });
                } else this.hls.resumeBuffering(), this.playerQueue.forEach((e) => e.pauseBuffering());
            this.hls.trigger(u.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
                events: i.slice(0),
                schedule: r.slice(0),
                bufferingIndex: this.findItemIndex(e),
                playingIndex: this.findItemIndex(this.playingItem),
            });
        } else this.bufferingItem !== e && (this.bufferingItem = e);
        return t;
    }
    bufferedToItem(e, t = 0) {
        let n = this.setBufferingItem(e);
        if (!this.playbackDisabled) {
            if (this.isInterstitial(e)) this.bufferedToEvent(e, t);
            else if (null !== n) {
                this.bufferingAsset = null;
                let t = this.detachedData;
                if (t)
                    if (t.mediaSource) {
                        let t = !0;
                        this.attachPrimary(e.start, e, t);
                    } else this.preloadPrimary(e);
                else this.preloadPrimary(e);
            }
        }
    }
    preloadPrimary(e) {
        let t = this.findItemIndex(e),
            n = this.getPrimaryResumption(e, t);
        this.startLoadingPrimaryAt(n);
    }
    bufferedToEvent(e, t) {
        let n = e.event,
            r = 0 === n.assetList.length && !n.assetListLoader,
            i = n.cue.once;
        if (r || !i) {
            let e = this.preloadAssets(n, t);
            if (null != e && e.interstitial.appendInPlace) {
                let t = this.primaryMedia;
                t && this.bufferAssetPlayer(e, t);
            }
        }
    }
    preloadAssets(e, t) {
        let n = e.assetUrl,
            r = e.assetList.length,
            i = 0 === r && !e.assetListLoader,
            s = e.cue.once;
        if (i) {
            let i,
                s = e.timelineStart;
            if (e.appendInPlace) {
                var a;
                let t = this.playingItem;
                this.isInterstitial(t) ||
                    (null == t || null == (a = t.nextEvent) ? void 0 : a.identifier) !== e.identifier ||
                    this.flushFrontBuffer(s + 0.25);
            }
            let o = 0;
            if (
                (!this.playingItem &&
                    this.primaryLive &&
                    -1 === (o = this.hls.startPosition) &&
                    (o = this.hls.liveSyncPosition || 0),
                o && !(e.cue.pre || e.cue.post))
            ) {
                let e = o - s;
                e > 0 && (i = Math.round(1e3 * e) / 1e3);
            }
            if (
                (this.log(
                    `Load interstitial asset ${t + 1}/${n ? 1 : r} ${e}${i ? ` live-start: ${o} start-offset: ${i}` : ""}`,
                ),
                n)
            )
                return this.createAsset(e, 0, 0, s, e.duration, n);
            let l = this.assetListLoader.loadAssetList(e, i);
            l && (e.assetListLoader = l);
        } else if (!s && r) {
            for (let n = t; n < r; n++) {
                let t = e.assetList[n],
                    r = this.getAssetPlayerQueueIndex(t.identifier);
                (-1 === r || this.playerQueue[r].destroyed) && !t.error && this.createAssetPlayer(e, t, n);
            }
            let n = e.assetList[t];
            if (n) {
                let e = this.getAssetPlayer(n.identifier);
                return e && e.loadSource(), e;
            }
        }
        return null;
    }
    flushFrontBuffer(e) {
        let t = this.requiredTracks;
        t &&
            (this.log(`Removing front buffer starting at ${e}`),
            Object.keys(t).forEach((t) => {
                this.hls.trigger(u.BUFFER_FLUSHING, { startOffset: e, endOffset: 1 / 0, type: t });
            }));
    }
    getAssetPlayerQueueIndex(e) {
        let t = this.playerQueue;
        for (let n = 0; n < t.length; n++) if (e === t[n].assetId) return n;
        return -1;
    }
    getAssetPlayer(e) {
        let t = this.getAssetPlayerQueueIndex(e);
        return this.playerQueue[t] || null;
    }
    getBufferingPlayer() {
        let { playerQueue: e, primaryMedia: t } = this;
        if (t) {
            for (let n = 0; n < e.length; n++) if (e[n].media === t) return e[n];
        }
        return null;
    }
    createAsset(e, t, n, r, i, s) {
        let a = {
            parentIdentifier: e.identifier,
            identifier: oO(e, s, t),
            duration: i,
            startOffset: n,
            timelineStart: r,
            uri: s,
        };
        return this.createAssetPlayer(e, a, t);
    }
    createAssetPlayer(e, t, n) {
        let r = this.hls,
            i = r.userConfig,
            s = i.videoPreference,
            a = r.loadLevelObj || r.levels[r.currentLevel];
        (s || a) &&
            ((s = S({}, s)),
            a.videoCodec && (s.videoCodec = a.videoCodec),
            a.videoRange && (s.allowedVideoRanges = [a.videoRange]));
        let c = r.audioTracks[r.audioTrack],
            d = r.subtitleTracks[r.subtitleTrack],
            _ = 0;
        if (this.primaryLive || e.appendInPlace) {
            let e = this.timelinePos - t.timelineStart;
            if (e > 1) {
                let n = t.duration;
                n && e < n && (_ = e);
            }
        }
        let f = t.identifier,
            h = v(
                v({}, i),
                {},
                {
                    maxMaxBufferLength: Math.min(180, r.config.maxMaxBufferLength),
                    autoStartLoad: !0,
                    startFragPrefetch: !0,
                    primarySessionId: r.sessionId,
                    assetPlayerId: f,
                    abrEwmaDefaultEstimate: r.bandwidthEstimate,
                    interstitialsController: void 0,
                    startPosition: _,
                    liveDurationInfinity: !1,
                    testBandwidth: !1,
                    videoPreference: s,
                    audioPreference: c || i.audioPreference,
                    subtitlePreference: d || i.subtitlePreference,
                },
            );
        e.appendInPlace && ((e.appendInPlaceStarted = !0), t.timelineStart && (h.timelineOffset = t.timelineStart));
        let p = h.cmcd;
        null != p && p.sessionId && p.contentId && (h.cmcd = S({}, p, { contentId: oN(t.uri) })),
            this.getAssetPlayer(f) && this.warn(`Duplicate date range identifier ${e} and asset ${f}`);
        let m = new ok(this.HlsPlayerClass, h, e, t);
        this.playerQueue.push(m), (e.assetList[n] = t);
        let E = !0,
            g = (r) => {
                if (r.live) {
                    var i;
                    let t = Error(`Interstitials MUST be VOD assets ${e}`),
                        r = { fatal: !0, type: o.OTHER_ERROR, details: l.INTERSTITIAL_ASSET_ITEM_ERROR, error: t },
                        s = (null == (i = this.schedule) ? void 0 : i.findEventIndex(e.identifier)) || -1;
                    this.handleAssetItemError(r, e, s, n, t.message);
                    return;
                }
                let s = r.edge - r.fragmentStart,
                    a = t.duration;
                (E || null === a || s > a) &&
                    ((E = !1),
                    this.log(`Interstitial asset "${f}" duration change ${a} > ${s}`),
                    (t.duration = s),
                    this.updateSchedule());
            };
        m.on(u.LEVEL_UPDATED, (e, { details: t }) => g(t)),
            m.on(u.LEVEL_PTS_UPDATED, (e, { details: t }) => g(t)),
            m.on(u.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
        let A = (e, t) => {
            let n = this.getAssetPlayer(f);
            if (n && t.tracks) {
                n.off(u.BUFFER_CODECS, A), (n.tracks = t.tracks);
                let e = this.primaryMedia;
                this.bufferingAsset === n.assetItem && e && !n.media && this.bufferAssetPlayer(n, e);
            }
        };
        m.on(u.BUFFER_CODECS, A);
        let I = () => {
            var n;
            let r = this.getAssetPlayer(f);
            if ((this.log(`buffered to end of asset ${r}`), !r || !this.schedule)) return;
            let i = this.schedule.findEventIndex(e.identifier),
                s = null == (n = this.schedule.items) ? void 0 : n[i];
            this.isInterstitial(s) && this.advanceAssetBuffering(s, t);
        };
        m.on(u.BUFFERED_TO_END, I);
        let T = (t) => () => {
            if (!this.getAssetPlayer(f) || !this.schedule) return;
            this.shouldPlay = !0;
            let n = this.schedule.findEventIndex(e.identifier);
            this.advanceAfterAssetEnded(e, n, t);
        };
        return (
            m.once(u.MEDIA_ENDED, T(n)),
            m.once(u.PLAYOUT_LIMIT_REACHED, T(1 / 0)),
            m.on(u.ERROR, (t, r) => {
                if (!this.schedule) return;
                let i = this.getAssetPlayer(f);
                r.details === l.BUFFER_STALLED_ERROR
                    ? null != i && i.appendInPlace
                        ? this.handleInPlaceStall(e)
                        : (this.onTimeupdate(), this.checkBuffer(!0))
                    : this.handleAssetItemError(
                          r,
                          e,
                          this.schedule.findEventIndex(e.identifier),
                          n,
                          `Asset player error ${r.error} ${e}`,
                      );
            }),
            m.on(u.DESTROYING, () => {
                if (!this.getAssetPlayer(f) || !this.schedule) return;
                let t = Error(`Asset player destroyed unexpectedly ${f}`),
                    r = { fatal: !0, type: o.OTHER_ERROR, details: l.INTERSTITIAL_ASSET_ITEM_ERROR, error: t };
                this.handleAssetItemError(r, e, this.schedule.findEventIndex(e.identifier), n, t.message);
            }),
            this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${oP(t)}`),
            this.hls.trigger(u.INTERSTITIAL_ASSET_PLAYER_CREATED, { asset: t, assetListIndex: n, event: e, player: m }),
            m
        );
    }
    clearInterstitial(e, t) {
        e.assetList.forEach((e) => {
            this.clearAssetPlayer(e.identifier, t);
        }),
            e.reset();
    }
    resetAssetPlayer(e) {
        let t = this.getAssetPlayerQueueIndex(e);
        if (-1 !== t) {
            this.log(`reset asset player "${e}" after error`);
            let n = this.playerQueue[t];
            this.transferMediaFromPlayer(n, null), n.resetDetails();
        }
    }
    clearAssetPlayer(e, t) {
        let n = this.getAssetPlayerQueueIndex(e);
        if (-1 !== n) {
            let e = this.playerQueue[n];
            this.log(`clear ${e} toSegment: ${t ? oF(t) : t}`),
                this.transferMediaFromPlayer(e, t),
                this.playerQueue.splice(n, 1),
                e.destroy();
        }
    }
    emptyPlayerQueue() {
        let e;
        for (; (e = this.playerQueue.pop()); ) e.destroy();
        this.playerQueue = [];
    }
    startAssetPlayer(e, t, n, r, i) {
        let { interstitial: s, assetItem: a, assetId: o } = e,
            l = s.assetList.length,
            c = this.playingAsset;
        (this.endedAsset = null),
            (this.playingAsset = a),
            (c && c.identifier === o) ||
                (c && (this.clearAssetPlayer(c.identifier, n[r]), delete c.error),
                this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${l} ${oP(a)}`),
                this.hls.trigger(u.INTERSTITIAL_ASSET_STARTED, {
                    asset: a,
                    assetListIndex: t,
                    event: s,
                    schedule: n.slice(0),
                    scheduleIndex: r,
                    player: e,
                })),
            this.bufferAssetPlayer(e, i);
    }
    bufferAssetPlayer(e, t) {
        var n, r;
        if (!this.schedule) return;
        let { interstitial: i, assetItem: s } = e,
            a = this.schedule.findEventIndex(i.identifier),
            u = null == (n = this.schedule.items) ? void 0 : n[a];
        if (!u) return;
        e.loadSource(), this.setBufferingItem(u), (this.bufferingAsset = s);
        let c = this.getBufferingPlayer();
        if (c === e) return;
        let d = i.appendInPlace;
        if (d && (null == c ? void 0 : c.interstitial.appendInPlace) === !1) return;
        let _ =
            (null == c ? void 0 : c.tracks) ||
            (null == (r = this.detachedData) ? void 0 : r.tracks) ||
            this.requiredTracks;
        if (d && s !== this.playingAsset) {
            if (!e.tracks) return void this.log(`Waiting for track info before buffering ${e}`);
            if (_ && !G(_, e.tracks)) {
                let t = Error(
                        `Asset ${oP(s)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(_)}')`,
                    ),
                    n = { fatal: !0, type: o.OTHER_ERROR, details: l.INTERSTITIAL_ASSET_ITEM_ERROR, error: t },
                    r = i.findAssetIndex(s);
                this.handleAssetItemError(n, i, a, r, t.message);
                return;
            }
        }
        this.transferMediaTo(e, t);
    }
    handleInPlaceStall(e) {
        let t = this.schedule,
            n = this.primaryMedia;
        if (!t || !n) return;
        let r = n.currentTime,
            i = t.findAssetIndex(e, r),
            s = e.assetList[i];
        if (s) {
            let a = this.getAssetPlayer(s.identifier);
            if (a) {
                let o = a.currentTime || r - s.timelineStart,
                    l = a.duration - o;
                if (
                    (this.warn(`Stalled at ${o} of ${o + l} in ${a} ${e} (media.currentTime: ${r})`),
                    o && (l / n.playbackRate < 0.5 || a.bufferedInPlaceToEnd(n)) && a.hls)
                ) {
                    let n = t.findEventIndex(e.identifier);
                    this.advanceAfterAssetEnded(e, n, i);
                }
            }
        }
    }
    advanceInPlace(e) {
        let t = this.primaryMedia;
        t && t.currentTime < e && (t.currentTime = e);
    }
    handleAssetItemError(e, t, n, r, i) {
        if (e.details === l.BUFFER_STALLED_ERROR) return;
        let s = t.assetList[r] || null;
        if ((this.warn(`INTERSTITIAL_ASSET_ERROR ${s ? oP(s) : s} ${e.error}`), !this.schedule)) return;
        let a = (null == s ? void 0 : s.identifier) || "",
            o = this.getAssetPlayerQueueIndex(a),
            c = this.playerQueue[o] || null,
            d = this.schedule.items,
            _ = S({}, e, {
                fatal: !1,
                errorAction: tJ(!0),
                asset: s,
                assetListIndex: r,
                event: t,
                schedule: d,
                scheduleIndex: n,
                player: c,
            });
        if ((this.hls.trigger(u.INTERSTITIAL_ASSET_ERROR, _), !e.fatal)) return;
        let f = this.playingAsset,
            h = this.bufferingAsset,
            p = Error(i);
        if ((s && (this.clearAssetPlayer(a, null), (s.error = p)), t.assetList.some((e) => !e.error)))
            for (let e = r; e < t.assetList.length; e++) this.resetAssetPlayer(t.assetList[e].identifier);
        else t.error = p;
        this.updateSchedule(!0),
            t.error
                ? this.primaryFallback(t)
                : f && f.identifier === a
                  ? this.advanceAfterAssetEnded(t, n, r)
                  : h &&
                    h.identifier === a &&
                    this.isInterstitial(this.bufferingItem) &&
                    this.advanceAssetBuffering(this.bufferingItem, h);
    }
    primaryFallback(e) {
        let t = e.timelineStart,
            n = this.effectivePlayingItem;
        if (n) {
            this.log(
                `Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${oF(n)} error: ${e.error}`,
            );
            let r = this.timelinePos;
            -1 === r && (r = this.hls.startPosition);
            let i = this.updateItem(n, r);
            if (
                (this.itemsMatch(n, i) && this.clearInterstitial(e, null),
                e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t)),
                !this.schedule)
            )
                return;
            let s = this.schedule.findItemIndexAtTime(r);
            this.setSchedulePosition(s);
        } else this.checkStart();
    }
    onAssetListLoaded(e, t) {
        var n, r, i;
        let s = t.event,
            a = s.identifier,
            o = t.assetListResponse.ASSETS;
        if (!(null != (n = this.schedule) && n.hasEvent(a))) return;
        let l = s.timelineStart,
            u = s.duration,
            c = 0;
        o.forEach((e, t) => {
            let n = parseFloat(e.DURATION);
            this.createAsset(s, t, c, l + c, n, e.URI), (c += n);
        }),
            (s.duration = c),
            this.log(`Loaded asset-list with duration: ${c} (was: ${u}) ${s}`);
        let d = this.waitingItem,
            _ = (null == d ? void 0 : d.event.identifier) === a;
        this.updateSchedule();
        let f = null == (r = this.bufferingItem) ? void 0 : r.event;
        if (_) {
            let e = this.schedule.findEventIndex(a),
                t = null == (i = this.schedule.items) ? void 0 : i[e];
            if (t) {
                if (
                    !this.playingItem &&
                    this.timelinePos > t.end &&
                    this.schedule.findItemIndexAtTime(this.timelinePos) !== e
                ) {
                    (s.error = Error(`Interstitial no longer within playback range ${this.timelinePos} ${s}`)),
                        this.updateSchedule(!0),
                        this.primaryFallback(s);
                    return;
                }
                this.setBufferingItem(t);
            }
            this.setSchedulePosition(e);
        } else if ((null == f ? void 0 : f.identifier) === a) {
            let e = s.assetList[0];
            if (e) {
                let t = this.getAssetPlayer(e.identifier);
                if (f.appendInPlace) {
                    let e = this.primaryMedia;
                    t && e && this.bufferAssetPlayer(t, e);
                } else t && t.loadSource();
            }
        }
    }
    onError(e, t) {
        if (this.schedule)
            switch (t.details) {
                case l.ASSET_LIST_PARSING_ERROR:
                case l.ASSET_LIST_LOAD_ERROR:
                case l.ASSET_LIST_LOAD_TIMEOUT: {
                    let e = t.interstitial;
                    e && (this.updateSchedule(!0), this.primaryFallback(e));
                    break;
                }
                case l.BUFFER_STALLED_ERROR: {
                    let e = this.endedItem || this.waitingItem || this.playingItem;
                    if (this.isInterstitial(e) && e.event.appendInPlace) return void this.handleInPlaceStall(e.event);
                    this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`),
                        this.onTimeupdate(),
                        this.checkBuffer(!0);
                }
            }
    }
}
let oY = 500;
class oW extends rJ {
    constructor(e, t, n) {
        super(e, t, n, "subtitle-stream-controller", g),
            (this.currentTrackId = -1),
            (this.tracksBuffered = []),
            (this.mainDetails = null),
            this.registerListeners();
    }
    onHandlerDestroying() {
        this.unregisterListeners(), super.onHandlerDestroying(), (this.mainDetails = null);
    }
    registerListeners() {
        super.registerListeners();
        let { hls: e } = this;
        e.on(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(u.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
            e.on(u.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
            e.on(u.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.on(u.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
            e.on(u.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    unregisterListeners() {
        super.unregisterListeners();
        let { hls: e } = this;
        e.off(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(u.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
            e.off(u.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
            e.off(u.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
            e.off(u.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
            e.off(u.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    startLoad(e, t) {
        this.stopLoad(),
            (this.state = rH),
            this.setInterval(oY),
            (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
            (this.startPosition = t ? -1 : e),
            this.tick();
    }
    onManifestLoading() {
        super.onManifestLoading(), (this.mainDetails = null);
    }
    onMediaDetaching(e, t) {
        (this.tracksBuffered = []), super.onMediaDetaching(e, t);
    }
    onLevelLoaded(e, t) {
        this.mainDetails = t.details;
    }
    onSubtitleFragProcessed(e, t) {
        let n,
            { frag: r, success: i } = t;
        if ((this.fragContextChanged(r) || (Z(r) && (this.fragPrevious = r), (this.state = rH)), !i)) return;
        let s = this.tracksBuffered[this.currentTrackId];
        if (!s) return;
        let a = r.start;
        for (let e = 0; e < s.length; e++)
            if (a >= s[e].start && a <= s[e].end) {
                n = s[e];
                break;
            }
        let o = r.start + r.duration;
        n ? (n.end = o) : ((n = { start: a, end: o }), s.push(n)),
            this.fragmentTracker.fragBuffered(r),
            this.fragBufferedComplete(r, null),
            this.media && this.tick();
    }
    onBufferFlushing(e, t) {
        let { startOffset: n, endOffset: r } = t;
        if (0 === n && r !== 1 / 0) {
            let e = r - 1;
            if (e <= 0) return;
            (t.endOffsetSubtitles = Math.max(0, e)),
                this.tracksBuffered.forEach((t) => {
                    for (let n = 0; n < t.length; ) {
                        if (t[n].end <= e) {
                            t.shift();
                            continue;
                        }
                        if (t[n].start < e) t[n].start = e;
                        else break;
                        n++;
                    }
                }),
                this.fragmentTracker.removeFragmentsInRange(n, e, g);
        }
    }
    onError(e, t) {
        let n = t.frag;
        (null == n ? void 0 : n.type) === g &&
            (t.details === l.FRAG_GAP && this.fragmentTracker.fragBuffered(n, !0),
            this.fragCurrent && this.fragCurrent.abortRequests(),
            this.state !== rV && (this.state = rH));
    }
    onSubtitleTracksUpdated(e, { subtitleTracks: t }) {
        if (this.levels && sW(this.levels, t)) {
            this.levels = t.map((e) => new tl(e));
            return;
        }
        (this.tracksBuffered = []),
            (this.levels = t.map((e) => {
                let t = new tl(e);
                return (this.tracksBuffered[t.id] = []), t;
            })),
            this.fragmentTracker.removeFragmentsInRange(0, 1 / 0, g),
            (this.fragPrevious = null),
            (this.mediaBuffer = null);
    }
    onSubtitleTrackSwitch(e, t) {
        var n;
        if (((this.currentTrackId = t.id), !(null != (n = this.levels) && n.length) || -1 === this.currentTrackId))
            return void this.clearInterval();
        let r = this.levels[this.currentTrackId];
        null != r && r.details ? (this.mediaBuffer = this.mediaBufferTimeRanges) : (this.mediaBuffer = null),
            r && this.state !== rV && this.setInterval(oY);
    }
    onSubtitleTrackLoaded(e, t) {
        var n, r;
        let { currentTrackId: i, levels: s } = this,
            { details: a, id: o } = t;
        if (!s) return void this.warn(`Subtitle tracks were reset while loading level ${o}`);
        let l = s[o];
        if (o >= s.length || !l) return;
        this.log(
            `Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`,
        ),
            (this.mediaBuffer = this.mediaBufferTimeRanges);
        let c = 0;
        if (a.live || (null != (n = l.details) && n.live)) {
            if (a.deltaUpdateFailed) return;
            let e = this.mainDetails;
            if (!e) {
                this.startFragRequested = !1;
                return;
            }
            let t = e.fragments[0];
            l.details
                ? 0 ===
                      (c = this.alignPlaylists(
                          a,
                          l.details,
                          null == (r = this.levelLastLoaded) ? void 0 : r.details,
                      )) &&
                  t &&
                  ry(a, (c = t.start))
                : a.hasProgramDateTime && e.hasProgramDateTime
                  ? (rU(a, e), (c = a.fragmentStart))
                  : t && ry(a, (c = t.start)),
                e && !this.startFragRequested && this.setStartPosition(e, c);
        }
        (l.details = a),
            (this.levelLastLoaded = l),
            o === i &&
                (this.hls.trigger(u.SUBTITLE_TRACK_UPDATED, { details: a, id: o, groupId: t.groupId }),
                this.tick(),
                a.live &&
                    !this.fragCurrent &&
                    this.media &&
                    this.state === rH &&
                    (tD(null, a.fragments, this.media.currentTime, 0) ||
                        (this.warn("Subtitle playlist not aligned with playback"), (l.details = void 0))));
    }
    _handleFragmentLoadComplete(e) {
        let { frag: t, payload: n } = e,
            r = t.decryptdata,
            i = this.hls;
        if (!this.fragContextChanged(t) && n && n.byteLength > 0 && null != r && r.key && r.iv && nx(r.method)) {
            let e = performance.now();
            this.decrypter
                .decrypt(new Uint8Array(n), r.key.buffer, r.iv.buffer, nP(r.method))
                .catch((e) => {
                    throw (
                        (i.trigger(u.ERROR, {
                            type: o.MEDIA_ERROR,
                            details: l.FRAG_DECRYPT_ERROR,
                            fatal: !1,
                            error: e,
                            reason: e.message,
                            frag: t,
                        }),
                        e)
                    );
                })
                .then((n) => {
                    let r = performance.now();
                    i.trigger(u.FRAG_DECRYPTED, { frag: t, payload: n, stats: { tstart: e, tdecrypt: r } });
                })
                .catch((e) => {
                    this.warn(`${e.name}: ${e.message}`), (this.state = rH);
                });
        }
    }
    doTick() {
        if (!this.media) {
            this.state = rH;
            return;
        }
        if (this.state === rH) {
            let { currentTrackId: e, levels: t } = this,
                n = null == t ? void 0 : t[e];
            if (!n || !t.length || !n.details || this.waitForLive(n)) return;
            let { config: r } = this,
                i = this.getLoadPosition(),
                { end: s, len: a } = nE.bufferedInfo(
                    this.tracksBuffered[this.currentTrackId] || [],
                    i,
                    r.maxBufferHole,
                ),
                o = n.details;
            if (a > this.hls.maxBufferLength + o.levelTargetDuration) return;
            let l = o.fragments,
                u = l.length,
                c = o.edge,
                d = null,
                _ = this.fragPrevious;
            if (s < c) {
                let e = r.maxFragLookUpTolerance,
                    t = s > c - e ? 0 : e;
                (d = tD(_, l, Math.max(l[0].start, s), t)) || !_ || !(_.start < l[0].start) || (d = l[0]);
            } else d = l[u - 1];
            if (!(d = this.filterReplacedPrimary(d, n.details))) return;
            let f = l[d.sn - o.startSN - 1];
            if (
                (f && f.cc === d.cc && this.fragmentTracker.getState(f) === t0 && (d = f),
                this.fragmentTracker.getState(d) === t0)
            ) {
                let e = this.mapToInitFragWhenRequired(d);
                e && this.loadFragment(e, n, s);
            }
        }
    }
    loadFragment(e, t, n) {
        Z(e) ? super.loadFragment(e, t, n) : this._loadInitSegment(e, t);
    }
    get mediaBufferTimeRanges() {
        return new oK(this.tracksBuffered[this.currentTrackId] || []);
    }
}
class oK {
    constructor(e) {
        this.buffered = void 0;
        const t = (t, n, r) => {
            if ((n >>>= 0) > r - 1)
                throw new DOMException(
                    `Failed to execute '${t}' on 'TimeRanges': The index provided (${n}) is greater than the maximum bound (${r})`,
                );
            return e[n][t];
        };
        this.buffered = {
            get length() {
                return e.length;
            },
            end: (n) => t("end", n, e.length),
            start: (n) => t("start", n, e.length),
        };
    }
}
let o$ = {
        42: 225,
        92: 233,
        94: 237,
        95: 243,
        96: 250,
        123: 231,
        124: 247,
        125: 209,
        126: 241,
        127: 9608,
        128: 174,
        129: 176,
        130: 189,
        131: 191,
        132: 8482,
        133: 162,
        134: 163,
        135: 9834,
        136: 224,
        137: 32,
        138: 232,
        139: 226,
        140: 234,
        141: 238,
        142: 244,
        143: 251,
        144: 193,
        145: 201,
        146: 211,
        147: 218,
        148: 220,
        149: 252,
        150: 8216,
        151: 161,
        152: 42,
        153: 8217,
        154: 9473,
        155: 169,
        156: 8480,
        157: 8226,
        158: 8220,
        159: 8221,
        160: 192,
        161: 194,
        162: 199,
        163: 200,
        164: 202,
        165: 203,
        166: 235,
        167: 206,
        168: 207,
        169: 239,
        170: 212,
        171: 217,
        172: 249,
        173: 219,
        174: 171,
        175: 187,
        176: 195,
        177: 227,
        178: 205,
        179: 204,
        180: 236,
        181: 210,
        182: 242,
        183: 213,
        184: 245,
        185: 123,
        186: 125,
        187: 92,
        188: 94,
        189: 95,
        190: 124,
        191: 8764,
        192: 196,
        193: 228,
        194: 214,
        195: 246,
        196: 223,
        197: 165,
        198: 164,
        199: 9475,
        200: 197,
        201: 229,
        202: 216,
        203: 248,
        204: 9487,
        205: 9491,
        206: 9495,
        207: 9499,
    },
    oz = (e) => String.fromCharCode(o$[e] || e),
    oq = 15,
    oZ = 100,
    oX = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
    oQ = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
    oJ = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
    o0 = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
    o1 = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class o2 {
    constructor() {
        (this.time = null), (this.verboseLevel = 0);
    }
    log(e, t) {
        if (this.verboseLevel >= e) {
            let n = "function" == typeof t ? t() : t;
            P.log(`${this.time} [${e}] ${n}`);
        }
    }
}
let o3 = function (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push(e[n].toString(16));
    return t;
};
class o6 {
    constructor() {
        (this.foreground = "white"),
            (this.underline = !1),
            (this.italics = !1),
            (this.background = "black"),
            (this.flash = !1);
    }
    reset() {
        (this.foreground = "white"),
            (this.underline = !1),
            (this.italics = !1),
            (this.background = "black"),
            (this.flash = !1);
    }
    setStyles(e) {
        let t = ["foreground", "underline", "italics", "background", "flash"];
        for (let n = 0; n < t.length; n++) {
            let r = t[n];
            e.hasOwnProperty(r) && (this[r] = e[r]);
        }
    }
    isDefault() {
        return (
            "white" === this.foreground &&
            !this.underline &&
            !this.italics &&
            "black" === this.background &&
            !this.flash
        );
    }
    equals(e) {
        return (
            this.foreground === e.foreground &&
            this.underline === e.underline &&
            this.italics === e.italics &&
            this.background === e.background &&
            this.flash === e.flash
        );
    }
    copy(e) {
        (this.foreground = e.foreground),
            (this.underline = e.underline),
            (this.italics = e.italics),
            (this.background = e.background),
            (this.flash = e.flash);
    }
    toString() {
        return (
            "color=" +
            this.foreground +
            ", underline=" +
            this.underline +
            ", italics=" +
            this.italics +
            ", background=" +
            this.background +
            ", flash=" +
            this.flash
        );
    }
}
class o4 {
    constructor() {
        (this.uchar = " "), (this.penState = new o6());
    }
    reset() {
        (this.uchar = " "), this.penState.reset();
    }
    setChar(e, t) {
        (this.uchar = e), this.penState.copy(t);
    }
    setPenState(e) {
        this.penState.copy(e);
    }
    equals(e) {
        return this.uchar === e.uchar && this.penState.equals(e.penState);
    }
    copy(e) {
        (this.uchar = e.uchar), this.penState.copy(e.penState);
    }
    isEmpty() {
        return " " === this.uchar && this.penState.isDefault();
    }
}
class o5 {
    constructor(e) {
        (this.chars = []),
            (this.pos = 0),
            (this.currPenState = new o6()),
            (this.cueStartTime = null),
            (this.logger = void 0);
        for (let e = 0; e < oZ; e++) this.chars.push(new o4());
        this.logger = e;
    }
    equals(e) {
        for (let t = 0; t < oZ; t++) if (!this.chars[t].equals(e.chars[t])) return !1;
        return !0;
    }
    copy(e) {
        for (let t = 0; t < oZ; t++) this.chars[t].copy(e.chars[t]);
    }
    isEmpty() {
        let e = !0;
        for (let t = 0; t < oZ; t++)
            if (!this.chars[t].isEmpty()) {
                e = !1;
                break;
            }
        return e;
    }
    setCursor(e) {
        this.pos !== e && (this.pos = e),
            this.pos < 0
                ? (this.logger.log(3, "Negative cursor position " + this.pos), (this.pos = 0))
                : this.pos > oZ && (this.logger.log(3, "Too large cursor position " + this.pos), (this.pos = oZ));
    }
    moveCursor(e) {
        let t = this.pos + e;
        if (e > 1) for (let e = this.pos + 1; e < t + 1; e++) this.chars[e].setPenState(this.currPenState);
        this.setCursor(t);
    }
    backSpace() {
        this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
    }
    insertChar(e) {
        e >= 144 && this.backSpace();
        let t = oz(e);
        this.pos >= oZ
            ? this.logger.log(
                  0,
                  () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!",
              )
            : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1));
    }
    clearFromPos(e) {
        let t;
        for (t = e; t < oZ; t++) this.chars[t].reset();
    }
    clear() {
        this.clearFromPos(0), (this.pos = 0), this.currPenState.reset();
    }
    clearToEndOfRow() {
        this.clearFromPos(this.pos);
    }
    getTextString() {
        let e = [],
            t = !0;
        for (let n = 0; n < oZ; n++) {
            let r = this.chars[n].uchar;
            " " !== r && (t = !1), e.push(r);
        }
        return t ? "" : e.join("");
    }
    setPenStyles(e) {
        this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
    }
}
class o7 {
    constructor(e) {
        (this.rows = []),
            (this.currRow = oq - 1),
            (this.nrRollUpRows = null),
            (this.lastOutputScreen = null),
            (this.logger = void 0);
        for (let t = 0; t < oq; t++) this.rows.push(new o5(e));
        this.logger = e;
    }
    reset() {
        for (let e = 0; e < oq; e++) this.rows[e].clear();
        this.currRow = oq - 1;
    }
    equals(e) {
        let t = !0;
        for (let n = 0; n < oq; n++)
            if (!this.rows[n].equals(e.rows[n])) {
                t = !1;
                break;
            }
        return t;
    }
    copy(e) {
        for (let t = 0; t < oq; t++) this.rows[t].copy(e.rows[t]);
    }
    isEmpty() {
        let e = !0;
        for (let t = 0; t < oq; t++)
            if (!this.rows[t].isEmpty()) {
                e = !1;
                break;
            }
        return e;
    }
    backSpace() {
        this.rows[this.currRow].backSpace();
    }
    clearToEndOfRow() {
        this.rows[this.currRow].clearToEndOfRow();
    }
    insertChar(e) {
        this.rows[this.currRow].insertChar(e);
    }
    setPen(e) {
        this.rows[this.currRow].setPenStyles(e);
    }
    moveCursor(e) {
        this.rows[this.currRow].moveCursor(e);
    }
    setCursor(e) {
        this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
    }
    setPAC(e) {
        this.logger.log(2, () => "pacData = " + tf(e));
        let t = e.row - 1;
        if (
            (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
            this.nrRollUpRows && this.currRow !== t)
        ) {
            for (let e = 0; e < oq; e++) this.rows[e].clear();
            let e = this.currRow + 1 - this.nrRollUpRows,
                n = this.lastOutputScreen;
            if (n) {
                let r = n.rows[e].cueStartTime,
                    i = this.logger.time;
                if (null !== r && null !== i && r < i)
                    for (let r = 0; r < this.nrRollUpRows; r++)
                        this.rows[t - this.nrRollUpRows + r + 1].copy(n.rows[e + r]);
            }
        }
        this.currRow = t;
        let n = this.rows[this.currRow];
        if (null !== e.indent) {
            let t = Math.max(e.indent - 1, 0);
            n.setCursor(e.indent), (e.color = n.chars[t].penState.foreground);
        }
        let r = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };
        this.setPen(r);
    }
    setBkgData(e) {
        this.logger.log(2, () => "bkgData = " + tf(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
    }
    setRollUpRows(e) {
        this.nrRollUpRows = e;
    }
    rollUp() {
        if (null === this.nrRollUpRows) return void this.logger.log(3, "roll_up but nrRollUpRows not set yet");
        this.logger.log(1, () => this.getDisplayText());
        let e = this.currRow + 1 - this.nrRollUpRows,
            t = this.rows.splice(e, 1)[0];
        t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
    }
    getDisplayText(e) {
        e = e || !1;
        let t = [],
            n = "",
            r = -1;
        for (let n = 0; n < oq; n++) {
            let i = this.rows[n].getTextString();
            i && ((r = n + 1), e ? t.push("Row " + r + ": '" + i + "'") : t.push(i.trim()));
        }
        return t.length > 0 && (n = e ? "[" + t.join(" | ") + "]" : t.join("\n")), n;
    }
    getTextAndFormat() {
        return this.rows;
    }
}
class o8 {
    constructor(e, t, n) {
        (this.chNr = void 0),
            (this.outputFilter = void 0),
            (this.mode = void 0),
            (this.verbose = void 0),
            (this.displayedMemory = void 0),
            (this.nonDisplayedMemory = void 0),
            (this.lastOutputScreen = void 0),
            (this.currRollUpRow = void 0),
            (this.writeScreen = void 0),
            (this.cueStartTime = void 0),
            (this.logger = void 0),
            (this.chNr = e),
            (this.outputFilter = t),
            (this.mode = null),
            (this.verbose = 0),
            (this.displayedMemory = new o7(n)),
            (this.nonDisplayedMemory = new o7(n)),
            (this.lastOutputScreen = new o7(n)),
            (this.currRollUpRow = this.displayedMemory.rows[oq - 1]),
            (this.writeScreen = this.displayedMemory),
            (this.mode = null),
            (this.cueStartTime = null),
            (this.logger = n);
    }
    reset() {
        (this.mode = null),
            this.displayedMemory.reset(),
            this.nonDisplayedMemory.reset(),
            this.lastOutputScreen.reset(),
            this.outputFilter.reset(),
            (this.currRollUpRow = this.displayedMemory.rows[oq - 1]),
            (this.writeScreen = this.displayedMemory),
            (this.mode = null),
            (this.cueStartTime = null);
    }
    getHandler() {
        return this.outputFilter;
    }
    setHandler(e) {
        this.outputFilter = e;
    }
    setPAC(e) {
        this.writeScreen.setPAC(e);
    }
    setBkgData(e) {
        this.writeScreen.setBkgData(e);
    }
    setMode(e) {
        e !== this.mode &&
            ((this.mode = e),
            this.logger.log(2, () => "MODE=" + e),
            "MODE_POP-ON" === this.mode
                ? (this.writeScreen = this.nonDisplayedMemory)
                : ((this.writeScreen = this.displayedMemory), this.writeScreen.reset()),
            "MODE_ROLL-UP" !== this.mode &&
                ((this.displayedMemory.nrRollUpRows = null), (this.nonDisplayedMemory.nrRollUpRows = null)),
            (this.mode = e));
    }
    insertChars(e) {
        for (let t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
        let t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
        this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)),
            ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) &&
                (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)),
                this.outputDataUpdate());
    }
    ccRCL() {
        this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
    }
    ccBS() {
        this.logger.log(2, "BS - BackSpace"),
            "MODE_TEXT" !== this.mode &&
                (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
    }
    ccAOF() {}
    ccAON() {}
    ccDER() {
        this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
    }
    ccRU(e) {
        this.logger.log(2, "RU(" + e + ") - Roll Up"),
            (this.writeScreen = this.displayedMemory),
            this.setMode("MODE_ROLL-UP"),
            this.writeScreen.setRollUpRows(e);
    }
    ccFON() {
        this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({ flash: !0 });
    }
    ccRDC() {
        this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
    }
    ccTR() {
        this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
    }
    ccRTD() {
        this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
    }
    ccEDM() {
        this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
    }
    ccCR() {
        this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
    }
    ccENM() {
        this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
    }
    ccEOC() {
        if ((this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode)) {
            let e = this.displayedMemory;
            (this.displayedMemory = this.nonDisplayedMemory),
                (this.nonDisplayedMemory = e),
                (this.writeScreen = this.nonDisplayedMemory),
                this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
        }
        this.outputDataUpdate(!0);
    }
    ccTO(e) {
        this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
    }
    ccMIDROW(e) {
        let t = { flash: !1 };
        (t.underline = e % 2 == 1),
            (t.italics = e >= 46),
            t.italics
                ? (t.foreground = "white")
                : (t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][
                      Math.floor(e / 2) - 16
                  ]),
            this.logger.log(2, "MIDROW: " + tf(t)),
            this.writeScreen.setPen(t);
    }
    outputDataUpdate(e = !1) {
        let t = this.logger.time;
        null !== t &&
            this.outputFilter &&
            (null !== this.cueStartTime || this.displayedMemory.isEmpty()
                ? this.displayedMemory.equals(this.lastOutputScreen) ||
                  (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen),
                  e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                  (this.cueStartTime = this.displayedMemory.isEmpty() ? null : t))
                : (this.cueStartTime = t),
            this.lastOutputScreen.copy(this.displayedMemory));
    }
    cueSplitAtTime(e) {
        this.outputFilter &&
            !this.displayedMemory.isEmpty() &&
            (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory),
            (this.cueStartTime = e));
    }
}
class o9 {
    constructor(e, t, n) {
        (this.channels = void 0), (this.currentChannel = 0), (this.cmdHistory = ln()), (this.logger = void 0);
        const r = (this.logger = new o2());
        this.channels = [null, new o8(e, t, r), new o8(e + 1, n, r)];
    }
    getHandler(e) {
        return this.channels[e].getHandler();
    }
    setHandler(e, t) {
        this.channels[e].setHandler(t);
    }
    addData(e, t) {
        this.logger.time = e;
        for (let e = 0; e < t.length; e += 2) {
            let n = 127 & t[e],
                r = 127 & t[e + 1],
                i = !1,
                s = null;
            if (0 === n && 0 === r) continue;
            this.logger.log(3, () => "[" + o3([t[e], t[e + 1]]) + "] -> (" + o3([n, r]) + ")");
            let a = this.cmdHistory;
            if (n >= 16 && n <= 31) {
                if (lt(n, r, a)) {
                    le(null, null, a), this.logger.log(3, () => "Repeated command (" + o3([n, r]) + ") is dropped");
                    continue;
                }
                le(n, r, this.cmdHistory),
                    (i = this.parseCmd(n, r)) || (i = this.parseMidrow(n, r)),
                    i || (i = this.parsePAC(n, r)),
                    i || (i = this.parseBackgroundAttributes(n, r));
            } else le(null, null, a);
            if (!i && (s = this.parseChars(n, r))) {
                let e = this.currentChannel;
                e && e > 0 ? this.channels[e].insertChars(s) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
            }
            i ||
                s ||
                this.logger.log(
                    2,
                    () => "Couldn't parse cleaned data " + o3([n, r]) + " orig: " + o3([t[e], t[e + 1]]),
                );
        }
    }
    parseCmd(e, t) {
        let n = (20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47,
            r = (23 === e || 31 === e) && t >= 33 && t <= 35;
        if (!(n || r)) return !1;
        let i = 20 === e || 21 === e || 23 === e ? 1 : 2,
            s = this.channels[i];
        return (
            20 === e || 21 === e || 28 === e || 29 === e
                ? 32 === t
                    ? s.ccRCL()
                    : 33 === t
                      ? s.ccBS()
                      : 34 === t
                        ? s.ccAOF()
                        : 35 === t
                          ? s.ccAON()
                          : 36 === t
                            ? s.ccDER()
                            : 37 === t
                              ? s.ccRU(2)
                              : 38 === t
                                ? s.ccRU(3)
                                : 39 === t
                                  ? s.ccRU(4)
                                  : 40 === t
                                    ? s.ccFON()
                                    : 41 === t
                                      ? s.ccRDC()
                                      : 42 === t
                                        ? s.ccTR()
                                        : 43 === t
                                          ? s.ccRTD()
                                          : 44 === t
                                            ? s.ccEDM()
                                            : 45 === t
                                              ? s.ccCR()
                                              : 46 === t
                                                ? s.ccENM()
                                                : 47 === t && s.ccEOC()
                : s.ccTO(t - 32),
            (this.currentChannel = i),
            !0
        );
    }
    parseMidrow(e, t) {
        let n = 0;
        if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
            if ((n = 17 === e ? 1 : 2) !== this.currentChannel)
                return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
            let r = this.channels[n];
            return !!r && (r.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + o3([e, t]) + ")"), !0);
        }
        return !1;
    }
    parsePAC(e, t) {
        let n,
            r = ((e >= 17 && e <= 23) || (e >= 25 && e <= 31)) && t >= 64 && t <= 127,
            i = (16 === e || 24 === e) && t >= 64 && t <= 95;
        if (!(r || i)) return !1;
        let s = e <= 23 ? 1 : 2;
        n = t >= 64 && t <= 95 ? (1 === s ? oX[e] : oJ[e]) : 1 === s ? oQ[e] : o0[e];
        let a = this.channels[s];
        return !!a && (a.setPAC(this.interpretPAC(n, t)), (this.currentChannel = s), !0);
    }
    interpretPAC(e, t) {
        let n,
            r = { color: null, italics: !1, indent: null, underline: !1, row: e };
        return (
            (r.underline = (1 & (n = t > 95 ? t - 96 : t - 64)) == 1),
            n <= 13
                ? (r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(n / 2)])
                : n <= 15
                  ? ((r.italics = !0), (r.color = "white"))
                  : (r.indent = 4 * Math.floor((n - 16) / 2)),
            r
        );
    }
    parseChars(e, t) {
        let n,
            r = null,
            i = null;
        if ((e >= 25 ? ((n = 2), (i = e - 8)) : ((n = 1), (i = e)), i >= 17 && i <= 19)) {
            let e;
            (e = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144),
                this.logger.log(2, () => "Special char '" + oz(e) + "' in channel " + n),
                (r = [e]);
        } else e >= 32 && e <= 127 && (r = 0 === t ? [e] : [e, t]);
        return r && this.logger.log(3, () => "Char codes =  " + o3(r).join(",")), r;
    }
    parseBackgroundAttributes(e, t) {
        let n = (16 === e || 24 === e) && t >= 32 && t <= 47,
            r = (23 === e || 31 === e) && t >= 45 && t <= 47;
        if (!(n || r)) return !1;
        let i = {};
        16 === e || 24 === e
            ? ((i.background = o1[Math.floor((t - 32) / 2)]), t % 2 == 1 && (i.background = i.background + "_semi"))
            : 45 === t
              ? (i.background = "transparent")
              : ((i.foreground = "black"), 47 === t && (i.underline = !0));
        let s = e <= 23 ? 1 : 2;
        return this.channels[s].setBkgData(i), !0;
    }
    reset() {
        for (let e = 0; e < Object.keys(this.channels).length; e++) {
            let t = this.channels[e];
            t && t.reset();
        }
        le(null, null, this.cmdHistory);
    }
    cueSplitAtTime(e) {
        for (let t = 0; t < this.channels.length; t++) {
            let n = this.channels[t];
            n && n.cueSplitAtTime(e);
        }
    }
}
function le(e, t, n) {
    (n.a = e), (n.b = t);
}
function lt(e, t, n) {
    return n.a === e && n.b === t;
}
function ln() {
    return { a: null, b: null };
}
var lr = (function () {
    if (null != nV && nV.VTTCue) return self.VTTCue;
    let e = ["", "lr", "rl"],
        t = ["start", "middle", "end", "left", "right"];
    function n(e, t) {
        if ("string" != typeof t || !Array.isArray(e)) return !1;
        let n = t.toLowerCase();
        return !!~e.indexOf(n) && n;
    }
    function r(t) {
        return n(e, t);
    }
    function i(e) {
        return n(t, e);
    }
    function s(e) {
        let t = 1;
        for (; t < arguments.length; t++) {
            let n = arguments[t];
            for (let t in n) e[t] = n[t];
        }
        return e;
    }
    function a(e, t, n) {
        let a = this,
            o = { enumerable: !0 };
        a.hasBeenReset = !1;
        let l = "",
            u = !1,
            c = e,
            d = t,
            _ = n,
            f = null,
            h = "",
            p = !0,
            m = "auto",
            E = "start",
            g = 50,
            A = "middle",
            I = 50,
            T = "middle";
        Object.defineProperty(
            a,
            "id",
            s({}, o, {
                get: function () {
                    return l;
                },
                set: function (e) {
                    l = "" + e;
                },
            }),
        ),
            Object.defineProperty(
                a,
                "pauseOnExit",
                s({}, o, {
                    get: function () {
                        return u;
                    },
                    set: function (e) {
                        u = !!e;
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "startTime",
                s({}, o, {
                    get: function () {
                        return c;
                    },
                    set: function (e) {
                        if ("number" != typeof e) throw TypeError("Start time must be set to a number.");
                        (c = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "endTime",
                s({}, o, {
                    get: function () {
                        return d;
                    },
                    set: function (e) {
                        if ("number" != typeof e) throw TypeError("End time must be set to a number.");
                        (d = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "text",
                s({}, o, {
                    get: function () {
                        return _;
                    },
                    set: function (e) {
                        (_ = "" + e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "region",
                s({}, o, {
                    get: function () {
                        return f;
                    },
                    set: function (e) {
                        (f = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "vertical",
                s({}, o, {
                    get: function () {
                        return h;
                    },
                    set: function (e) {
                        let t = r(e);
                        if (!1 === t) throw SyntaxError("An invalid or illegal string was specified.");
                        (h = t), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "snapToLines",
                s({}, o, {
                    get: function () {
                        return p;
                    },
                    set: function (e) {
                        (p = !!e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "line",
                s({}, o, {
                    get: function () {
                        return m;
                    },
                    set: function (e) {
                        if ("number" != typeof e && "auto" !== e)
                            throw SyntaxError("An invalid number or illegal string was specified.");
                        (m = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "lineAlign",
                s({}, o, {
                    get: function () {
                        return E;
                    },
                    set: function (e) {
                        let t = i(e);
                        if (!t) throw SyntaxError("An invalid or illegal string was specified.");
                        (E = t), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "position",
                s({}, o, {
                    get: function () {
                        return g;
                    },
                    set: function (e) {
                        if (e < 0 || e > 100) throw Error("Position must be between 0 and 100.");
                        (g = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "positionAlign",
                s({}, o, {
                    get: function () {
                        return A;
                    },
                    set: function (e) {
                        let t = i(e);
                        if (!t) throw SyntaxError("An invalid or illegal string was specified.");
                        (A = t), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "size",
                s({}, o, {
                    get: function () {
                        return I;
                    },
                    set: function (e) {
                        if (e < 0 || e > 100) throw Error("Size must be between 0 and 100.");
                        (I = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                a,
                "align",
                s({}, o, {
                    get: function () {
                        return T;
                    },
                    set: function (e) {
                        let t = i(e);
                        if (!t) throw SyntaxError("An invalid or illegal string was specified.");
                        (T = t), (this.hasBeenReset = !0);
                    },
                }),
            ),
            (a.displayState = void 0);
    }
    return (
        (a.prototype.getCueAsHTML = function () {
            return self.WebVTT.convertCueToDOMTree(self, this.text);
        }),
        a
    );
})();
class li {
    decode(e, t) {
        if (!e) return "";
        if ("string" != typeof e) throw Error("Error - expected string data.");
        return decodeURIComponent(encodeURIComponent(e));
    }
}
function ls(e) {
    function t(e, t, n, r) {
        return (0 | e) * 3600 + (0 | t) * 60 + (0 | n) + parseFloat(r || 0);
    }
    let n = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
    return n ? (parseFloat(n[2]) > 59 ? t(n[2], n[3], 0, n[4]) : t(n[1], n[2], n[3], n[4])) : null;
}
class la {
    constructor() {
        this.values = Object.create(null);
    }
    set(e, t) {
        this.get(e) || "" === t || (this.values[e] = t);
    }
    get(e, t, n) {
        return n ? (this.has(e) ? this.values[e] : t[n]) : this.has(e) ? this.values[e] : t;
    }
    has(e) {
        return e in this.values;
    }
    alt(e, t, n) {
        for (let r = 0; r < n.length; ++r)
            if (t === n[r]) {
                this.set(e, t);
                break;
            }
    }
    integer(e, t) {
        /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
    }
    percent(e, t) {
        if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
            let n = parseFloat(t);
            if (n >= 0 && n <= 100) return this.set(e, n), !0;
        }
        return !1;
    }
}
function lo(e, t, n, r) {
    let i = r ? e.split(r) : [e];
    for (let e in i) {
        if ("string" != typeof i[e]) continue;
        let r = i[e].split(n);
        if (2 === r.length) t(r[0], r[1]);
    }
}
let ll = new lr(0, 0, ""),
    lu = "middle" === ll.align ? "middle" : "center";
function lc(e, t, n) {
    let r = e;
    function i() {
        let t = ls(e);
        if (null === t) throw Error("Malformed timestamp: " + r);
        return (e = e.replace(/^[^\sa-zA-Z-]+/, "")), t;
    }
    function s(e, t) {
        let r = new la();
        lo(
            e,
            function (e, t) {
                let i;
                switch (e) {
                    case "region":
                        for (let i = n.length - 1; i >= 0; i--)
                            if (n[i].id === t) {
                                r.set(e, n[i].region);
                                break;
                            }
                        break;
                    case "vertical":
                        r.alt(e, t, ["rl", "lr"]);
                        break;
                    case "line":
                        (i = t.split(",")),
                            r.integer(e, i[0]),
                            r.percent(e, i[0]) && r.set("snapToLines", !1),
                            r.alt(e, i[0], ["auto"]),
                            2 === i.length && r.alt("lineAlign", i[1], ["start", lu, "end"]);
                        break;
                    case "position":
                        (i = t.split(",")),
                            r.percent(e, i[0]),
                            2 === i.length &&
                                r.alt("positionAlign", i[1], ["start", lu, "end", "line-left", "line-right", "auto"]);
                        break;
                    case "size":
                        r.percent(e, t);
                        break;
                    case "align":
                        r.alt(e, t, ["start", lu, "end", "left", "right"]);
                }
            },
            /:/,
            /\s/,
        ),
            (t.region = r.get("region", null)),
            (t.vertical = r.get("vertical", ""));
        let i = r.get("line", "auto");
        "auto" === i && -1 === ll.line && (i = -1),
            (t.line = i),
            (t.lineAlign = r.get("lineAlign", "start")),
            (t.snapToLines = r.get("snapToLines", !0)),
            (t.size = r.get("size", 100)),
            (t.align = r.get("align", lu));
        let s = r.get("position", "auto");
        "auto" === s &&
            50 === ll.position &&
            (s = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
            (t.position = s);
    }
    function a() {
        e = e.replace(/^\s+/, "");
    }
    if ((a(), (t.startTime = i()), a(), "--\x3e" !== e.slice(0, 3)))
        throw Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
    (e = e.slice(3)), a(), (t.endTime = i()), a(), s(e, t);
}
function ld(e) {
    return e.replace(/<br(?: \/)?>/gi, "\n");
}
class l_ {
    constructor() {
        (this.state = "INITIAL"),
            (this.buffer = ""),
            (this.decoder = new li()),
            (this.regionList = []),
            (this.cue = null),
            (this.oncue = void 0),
            (this.onparsingerror = void 0),
            (this.onflush = void 0);
    }
    parse(e) {
        let t = this;
        function n() {
            let e = t.buffer,
                n = 0;
            for (e = ld(e); n < e.length && "\r" !== e[n] && "\n" !== e[n]; ) ++n;
            let r = e.slice(0, n);
            return "\r" === e[n] && ++n, "\n" === e[n] && ++n, (t.buffer = e.slice(n)), r;
        }
        function r(e) {
            lo(e, function (e, t) {}, /:/);
        }
        e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
        try {
            let e = "";
            if ("INITIAL" === t.state) {
                if (!/\r\n|\n/.test(t.buffer)) return this;
                let r = (e = n()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (!(null != r && r[0])) throw Error("Malformed WebVTT signature.");
                t.state = "HEADER";
            }
            let i = !1;
            for (; t.buffer && /\r\n|\n/.test(t.buffer); )
                switch ((i ? (i = !1) : (e = n()), t.state)) {
                    case "HEADER":
                        /:/.test(e) ? r(e) : e || (t.state = "ID");
                        continue;
                    case "NOTE":
                        e || (t.state = "ID");
                        continue;
                    case "ID":
                        if (/^NOTE($|[ \t])/.test(e)) {
                            t.state = "NOTE";
                            break;
                        }
                        if (!e) continue;
                        if (((t.cue = new lr(0, 0, "")), (t.state = "CUE"), -1 === e.indexOf("--\x3e"))) {
                            t.cue.id = e;
                            continue;
                        }
                    case "CUE":
                        if (!t.cue) {
                            t.state = "BADCUE";
                            continue;
                        }
                        try {
                            lc(e, t.cue, t.regionList);
                        } catch (e) {
                            (t.cue = null), (t.state = "BADCUE");
                            continue;
                        }
                        t.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        {
                            let n = -1 !== e.indexOf("--\x3e");
                            if (!e || (n && (i = !0))) {
                                t.oncue && t.cue && t.oncue(t.cue), (t.cue = null), (t.state = "ID");
                                continue;
                            }
                            if (null === t.cue) continue;
                            t.cue.text && (t.cue.text += "\n"), (t.cue.text += e);
                        }
                        continue;
                    case "BADCUE":
                        e || (t.state = "ID");
                }
        } catch (e) {
            "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
                (t.cue = null),
                (t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE");
        }
        return this;
    }
    flush() {
        let e = this;
        try {
            if (
                ((e.cue || "HEADER" === e.state) && ((e.buffer += "\n\n"), e.parse()),
                "INITIAL" === e.state || "BADWEBVTT" === e.state)
            )
                throw Error("Malformed WebVTT signature.");
        } catch (t) {
            e.onparsingerror && e.onparsingerror(t);
        }
        return e.onflush && e.onflush(), this;
    }
}
let lf = /\r\n|\n\r|\n|\r/g,
    lh = function (e, t, n = 0) {
        return e.slice(n, n + t.length) === t;
    },
    lp = function (e) {
        let t = parseInt(e.slice(-3)),
            n = parseInt(e.slice(-6, -4)),
            r = parseInt(e.slice(-9, -7)),
            s = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
        if (!i(t) || !i(n) || !i(r) || !i(s)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
        return (t += 1e3 * n), (t += 6e4 * r), (t += 36e5 * s);
    };
function lm(e, t, n) {
    return oN(e.toString()) + oN(t.toString()) + oN(n);
}
let lE = function (e, t, n) {
    let r = e[t],
        i = e[r.prevCC];
    if (!i || (!i.new && r.new)) {
        (e.ccOffset = e.presentationOffset = r.start), (r.new = !1);
        return;
    }
    for (; null != (s = i) && s.new; ) {
        var s;
        (e.ccOffset += r.start - i.start), (r.new = !1), (i = e[(r = i).prevCC]);
    }
    e.presentationOffset = n;
};
function lg(e, t, n, r, i, s, a) {
    let o,
        l = new l_(),
        u = F(new Uint8Array(e)).trim().replace(lf, "\n").split("\n"),
        c = [],
        d = t ? sm(t.baseTime, t.timescale) : 0,
        _ = "00:00.000",
        f = 0,
        h = 0,
        p = !0;
    (l.oncue = function (e) {
        let s = n[r],
            a = n.ccOffset,
            l = (f - d) / 9e4;
        if ((null != s && s.new && (void 0 !== h ? (a = n.ccOffset = s.start) : lE(n, r, l)), l)) {
            if (!t) {
                o = Error("Missing initPTS for VTT MPEGTS");
                return;
            }
            a = l - n.presentationOffset;
        }
        let u = e.endTime - e.startTime,
            _ = sC((e.startTime + a - h) * 9e4, 9e4 * i) / 9e4;
        (e.startTime = Math.max(_, 0)), (e.endTime = Math.max(_ + u, 0));
        let p = e.text.trim();
        (e.text = decodeURIComponent(encodeURIComponent(p))),
            e.id || (e.id = lm(e.startTime, e.endTime, p)),
            e.endTime > 0 && c.push(e);
    }),
        (l.onparsingerror = function (e) {
            o = e;
        }),
        (l.onflush = function () {
            o ? a(o) : s(c);
        }),
        u.forEach((e) => {
            if (p)
                if (lh(e, "X-TIMESTAMP-MAP=")) {
                    (p = !1),
                        e
                            .slice(16)
                            .split(",")
                            .forEach((e) => {
                                lh(e, "LOCAL:") ? (_ = e.slice(6)) : lh(e, "MPEGTS:") && (f = parseInt(e.slice(7)));
                            });
                    try {
                        h = lp(_) / 1e3;
                    } catch (e) {
                        o = e;
                    }
                    return;
                } else "" === e && (p = !1);
            l.parse(e + "\n");
        }),
        l.flush();
}
let lA = "stpp.ttml.im1t",
    lI = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
    lT = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
    lS = { left: "start", center: "center", right: "end", start: "start", end: "end" };
function ly(e, t, n, r) {
    let i = ec(new Uint8Array(e), ["mdat"]);
    if (0 === i.length) return void r(Error("Could not parse IMSC1 mdat"));
    let s = i.map((e) => F(e)),
        a = sh(t.baseTime, 1, t.timescale);
    try {
        s.forEach((e) => n(lv(e, a)));
    } catch (e) {
        r(e);
    }
}
function lv(e, t) {
    let n = new DOMParser().parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
    if (!n) throw Error("Invalid ttml");
    let r = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 },
        i = Object.keys(r).reduce((e, t) => ((e[t] = n.getAttribute(`ttp:${t}`) || r[t]), e), {}),
        s = "preserve" !== n.getAttribute("xml:space"),
        a = lN(lC(n, "styling", "style")),
        o = lN(lC(n, "layout", "region")),
        l = lC(n, "body", "[begin]");
    return [].map
        .call(l, (e) => {
            let n = lR(e, s);
            if (!n || !e.hasAttribute("begin")) return null;
            let r = lL(e.getAttribute("begin"), i),
                l = lL(e.getAttribute("dur"), i),
                u = lL(e.getAttribute("end"), i);
            if (null === r) throw lD(e);
            if (null === u) {
                if (null === l) throw lD(e);
                u = r + l;
            }
            let c = new lr(r - t, u - t, n);
            c.id = lm(c.startTime, c.endTime, c.text);
            let d = lb(o[e.getAttribute("region")], a[e.getAttribute("style")], a),
                { textAlign: _ } = d;
            if (_) {
                let e = lS[_];
                e && (c.lineAlign = e), (c.align = _);
            }
            return S(c, d), c;
        })
        .filter((e) => null !== e);
}
function lC(e, t, n) {
    let r = e.getElementsByTagName(t)[0];
    return r ? [].slice.call(r.querySelectorAll(n)) : [];
}
function lN(e) {
    return e.reduce((e, t) => {
        let n = t.getAttribute("xml:id");
        return n && (e[n] = t), e;
    }, {});
}
function lR(e, t) {
    return [].slice.call(e.childNodes).reduce((e, n, r) => {
        var i;
        return "br" === n.nodeName && r
            ? e + "\n"
            : null != (i = n.childNodes) && i.length
              ? lR(n, t)
              : t
                ? e + n.textContent.trim().replace(/\s+/g, " ")
                : e + n.textContent;
    }, "");
}
function lb(e, t, n) {
    let r = "http://www.w3.org/ns/ttml#styling",
        i = null,
        s = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"],
        a = null != e && e.hasAttribute("style") ? e.getAttribute("style") : null;
    return (
        a && n.hasOwnProperty(a) && (i = n[a]),
        s.reduce((n, s) => {
            let a = lO(t, r, s) || lO(e, r, s) || lO(i, r, s);
            return a && (n[s] = a), n;
        }, {})
    );
}
function lO(e, t, n) {
    return e && e.hasAttributeNS(t, n) ? e.getAttributeNS(t, n) : null;
}
function lD(e) {
    return Error(`Could not parse ttml timestamp ${e}`);
}
function lL(e, t) {
    if (!e) return null;
    let n = ls(e);
    return null === n && (lI.test(e) ? (n = lw(e, t)) : lT.test(e) && (n = lM(e, t))), n;
}
function lw(e, t) {
    let n = lI.exec(e),
        r = (0 | n[4]) + (0 | n[5]) / t.subFrameRate;
    return (0 | n[1]) * 3600 + (0 | n[2]) * 60 + (0 | n[3]) + r / t.frameRate;
}
function lM(e, t) {
    let n = lT.exec(e),
        r = Number(n[1]);
    switch (n[2]) {
        case "h":
            return 3600 * r;
        case "m":
            return 60 * r;
        case "ms":
            return 1e3 * r;
        case "f":
            return r / t.frameRate;
        case "t":
            return r / t.tickRate;
    }
    return r;
}
class lx {
    constructor(e, t) {
        (this.timelineController = void 0),
            (this.cueRanges = []),
            (this.trackName = void 0),
            (this.startTime = null),
            (this.endTime = null),
            (this.screen = null),
            (this.timelineController = e),
            (this.trackName = t);
    }
    dispatchCue() {
        null !== this.startTime &&
            (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges),
            (this.startTime = null));
    }
    newCue(e, t, n) {
        (null === this.startTime || this.startTime > e) && (this.startTime = e),
            (this.endTime = t),
            (this.screen = n),
            this.timelineController.createCaptionsTrack(this.trackName);
    }
    reset() {
        (this.cueRanges = []), (this.startTime = null);
    }
}
class lP {
    constructor(e) {
        (this.hls = void 0),
            (this.media = null),
            (this.config = void 0),
            (this.enabled = !0),
            (this.Cues = void 0),
            (this.textTracks = []),
            (this.tracks = []),
            (this.initPTS = []),
            (this.unparsedVttFrags = []),
            (this.captionsTracks = {}),
            (this.nonNativeCaptionsTracks = {}),
            (this.cea608Parser1 = void 0),
            (this.cea608Parser2 = void 0),
            (this.lastCc = -1),
            (this.lastSn = -1),
            (this.lastPartIndex = -1),
            (this.prevCC = -1),
            (this.vttCCs = lF()),
            (this.captionsProperties = void 0),
            (this.hls = e),
            (this.config = e.config),
            (this.Cues = e.config.cueHandler),
            (this.captionsProperties = {
                textTrack1: {
                    label: this.config.captionsTextTrack1Label,
                    languageCode: this.config.captionsTextTrack1LanguageCode,
                },
                textTrack2: {
                    label: this.config.captionsTextTrack2Label,
                    languageCode: this.config.captionsTextTrack2LanguageCode,
                },
                textTrack3: {
                    label: this.config.captionsTextTrack3Label,
                    languageCode: this.config.captionsTextTrack3LanguageCode,
                },
                textTrack4: {
                    label: this.config.captionsTextTrack4Label,
                    languageCode: this.config.captionsTextTrack4LanguageCode,
                },
            }),
            e.on(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(u.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
            e.on(u.FRAG_LOADING, this.onFragLoading, this),
            e.on(u.FRAG_LOADED, this.onFragLoaded, this),
            e.on(u.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
            e.on(u.FRAG_DECRYPTED, this.onFragDecrypted, this),
            e.on(u.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.on(u.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
            e.on(u.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    destroy() {
        let { hls: e } = this;
        e.off(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(u.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
            e.off(u.FRAG_LOADING, this.onFragLoading, this),
            e.off(u.FRAG_LOADED, this.onFragLoaded, this),
            e.off(u.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
            e.off(u.FRAG_DECRYPTED, this.onFragDecrypted, this),
            e.off(u.INIT_PTS_FOUND, this.onInitPtsFound, this),
            e.off(u.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
            e.off(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            (this.hls = this.config = this.media = null),
            (this.cea608Parser1 = this.cea608Parser2 = void 0);
    }
    initCea608Parsers() {
        let e = new lx(this, "textTrack1"),
            t = new lx(this, "textTrack2"),
            n = new lx(this, "textTrack3"),
            r = new lx(this, "textTrack4");
        (this.cea608Parser1 = new o9(1, e, t)), (this.cea608Parser2 = new o9(3, n, r));
    }
    addCues(e, t, n, r, i) {
        let s = !1;
        for (let e = i.length; e--; ) {
            let r = i[e],
                a = lG(r[0], r[1], t, n);
            if (a >= 0 && ((r[0] = Math.min(r[0], t)), (r[1] = Math.max(r[1], n)), (s = !0), a / (n - t) > 0.5)) return;
        }
        if ((s || i.push([t, n]), this.config.renderTextTracksNatively)) {
            let i = this.captionsTracks[e];
            this.Cues.newCue(i, t, n, r);
        } else {
            let i = this.Cues.newCue(null, t, n, r);
            this.hls.trigger(u.CUES_PARSED, { type: "captions", cues: i, track: e });
        }
    }
    onInitPtsFound(e, { frag: t, id: n, initPTS: r, timescale: i, trackId: s }) {
        let { unparsedVttFrags: a } = this;
        n === m && (this.initPTS[t.cc] = { baseTime: r, timescale: i, trackId: s }),
            a.length &&
                ((this.unparsedVttFrags = []),
                a.forEach((e) => {
                    this.initPTS[e.frag.cc]
                        ? this.onFragLoaded(u.FRAG_LOADED, e)
                        : this.hls.trigger(u.SUBTITLE_FRAG_PROCESSED, {
                              success: !1,
                              frag: e.frag,
                              error: Error("Subtitle discontinuity domain does not match main"),
                          });
                }));
    }
    getExistingTrack(e, t) {
        let { media: n } = this;
        if (n)
            for (let r = 0; r < n.textTracks.length; r++) {
                let i = n.textTracks[r];
                if (lU(i, { name: e, lang: t, characteristics: "transcribes-spoken-dialog,describes-music-and-sound" }))
                    return i;
            }
        return null;
    }
    createCaptionsTrack(e) {
        this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
    }
    createNativeTrack(e) {
        if (this.captionsTracks[e]) return;
        let { captionsProperties: t, captionsTracks: n, media: r } = this,
            { label: i, languageCode: s } = t[e],
            a = this.getExistingTrack(i, s);
        if (a) (n[e] = a), oA(n[e]), oE(n[e], r);
        else {
            let t = this.createTextTrack("captions", i, s);
            t && ((t[e] = !0), (n[e] = t));
        }
    }
    createNonNativeTrack(e) {
        if (this.nonNativeCaptionsTracks[e]) return;
        let t = this.captionsProperties[e];
        if (!t) return;
        let n = {
            _id: e,
            label: t.label,
            kind: "captions",
            default: !!t.media && !!t.media.default,
            closedCaptions: t.media,
        };
        (this.nonNativeCaptionsTracks[e] = n), this.hls.trigger(u.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [n] });
    }
    createTextTrack(e, t, n) {
        let r = this.media;
        if (r) return r.addTextTrack(e, t, n);
    }
    onMediaAttaching(e, t) {
        (this.media = t.media), t.mediaSource || this._cleanTracks();
    }
    onMediaDetaching(e, t) {
        let n = !!t.transferMedia;
        if (((this.media = null), n)) return;
        let { captionsTracks: r } = this;
        Object.keys(r).forEach((e) => {
            oA(r[e]), delete r[e];
        }),
            (this.nonNativeCaptionsTracks = {});
    }
    onManifestLoading() {
        (this.lastCc = -1),
            (this.lastSn = -1),
            (this.lastPartIndex = -1),
            (this.prevCC = -1),
            (this.vttCCs = lF()),
            this._cleanTracks(),
            (this.tracks = []),
            (this.captionsTracks = {}),
            (this.nonNativeCaptionsTracks = {}),
            (this.textTracks = []),
            (this.unparsedVttFrags = []),
            (this.initPTS = []),
            this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
    }
    _cleanTracks() {
        let { media: e } = this;
        if (!e) return;
        let t = e.textTracks;
        if (t) for (let e = 0; e < t.length; e++) oA(t[e]);
    }
    onSubtitleTracksUpdated(e, t) {
        let n = t.subtitleTracks || [],
            r = n.some((e) => e.textCodec === lA);
        if (this.config.enableWebVTT || (r && this.config.enableIMSC1)) {
            if (sW(this.tracks, n)) {
                this.tracks = n;
                return;
            }
            if (((this.textTracks = []), (this.tracks = n), this.config.renderTextTracksNatively)) {
                let e = this.media,
                    t = e ? oy(e.textTracks) : null;
                if (
                    (this.tracks.forEach((e, n) => {
                        let r;
                        if (t) {
                            let n = null;
                            for (let r = 0; r < t.length; r++)
                                if (t[r] && lU(t[r], e)) {
                                    (n = t[r]), (t[r] = null);
                                    break;
                                }
                            n && (r = n);
                        }
                        if (r) oA(r);
                        else {
                            let t = lk(e);
                            (r = this.createTextTrack(t, e.name, e.lang)) && (r.mode = "disabled");
                        }
                        r && this.textTracks.push(r);
                    }),
                    null != t && t.length)
                ) {
                    let e = t.filter((e) => null !== e).map((e) => e.label);
                    e.length &&
                        this.hls.logger.warn(
                            `Media element contains unused subtitle tracks: ${e.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`,
                        );
                }
            } else if (this.tracks.length) {
                let e = this.tracks.map((e) => ({
                    label: e.name,
                    kind: e.type.toLowerCase(),
                    default: e.default,
                    subtitleTrack: e,
                }));
                this.hls.trigger(u.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: e });
            }
        }
    }
    onManifestLoaded(e, t) {
        this.config.enableCEA708Captions &&
            t.captions &&
            t.captions.forEach((e) => {
                let t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
                if (!t) return;
                let n = `textTrack${t[1]}`,
                    r = this.captionsProperties[n];
                r && ((r.label = e.name), e.lang && (r.languageCode = e.lang), (r.media = e));
            });
    }
    closedCaptionsForLevel(e) {
        let t = this.hls.levels[e.level];
        return null == t ? void 0 : t.attrs["CLOSED-CAPTIONS"];
    }
    onFragLoading(e, t) {
        if (this.enabled && t.frag.type === m) {
            var n, r;
            let { cea608Parser1: e, cea608Parser2: i, lastSn: s } = this,
                { cc: a, sn: o } = t.frag,
                l = null != (n = null == (r = t.part) ? void 0 : r.index) ? n : -1;
            e &&
                i &&
                (o !== s + 1 || (o === s && l !== this.lastPartIndex + 1) || a !== this.lastCc) &&
                (e.reset(), i.reset()),
                (this.lastCc = a),
                (this.lastSn = o),
                (this.lastPartIndex = l);
        }
    }
    onFragLoaded(e, t) {
        let { frag: n, payload: r } = t;
        if (n.type === g)
            if (r.byteLength) {
                let e = n.decryptdata,
                    i = "stats" in t;
                if (null == e || !e.encrypted || i) {
                    let e = this.tracks[n.level],
                        i = this.vttCCs;
                    i[n.cc] || ((i[n.cc] = { start: n.start, prevCC: this.prevCC, new: !0 }), (this.prevCC = n.cc)),
                        e && e.textCodec === lA ? this._parseIMSC1(n, r) : this._parseVTTs(t);
                }
            } else
                this.hls.trigger(u.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: n,
                    error: Error("Empty subtitle payload"),
                });
    }
    _parseIMSC1(e, t) {
        let n = this.hls;
        ly(
            t,
            this.initPTS[e.cc],
            (t) => {
                this._appendCues(t, e.level), n.trigger(u.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
            },
            (t) => {
                n.logger.log(`Failed to parse IMSC1: ${t}`),
                    n.trigger(u.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e, error: t });
            },
        );
    }
    _parseVTTs(e) {
        var t;
        let { frag: n, payload: r } = e,
            { initPTS: i, unparsedVttFrags: s } = this,
            a = i.length - 1;
        if (!i[n.cc] && -1 === a) return void s.push(e);
        let o = this.hls;
        lg(
            null != (t = n.initSegment) && t.data ? ey(n.initSegment.data, new Uint8Array(r)).buffer : r,
            this.initPTS[n.cc],
            this.vttCCs,
            n.cc,
            n.start,
            (e) => {
                this._appendCues(e, n.level), o.trigger(u.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: n });
            },
            (t) => {
                let i = "Missing initPTS for VTT MPEGTS" === t.message;
                i ? s.push(e) : this._fallbackToIMSC1(n, r),
                    o.logger.log(`Failed to parse VTT cue: ${t}`),
                    (i && a > n.cc) || o.trigger(u.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: n, error: t });
            },
        );
    }
    _fallbackToIMSC1(e, t) {
        let n = this.tracks[e.level];
        n.textCodec ||
            ly(
                t,
                this.initPTS[e.cc],
                () => {
                    (n.textCodec = lA), this._parseIMSC1(e, t);
                },
                () => {
                    n.textCodec = "wvtt";
                },
            );
    }
    _appendCues(e, t) {
        let n = this.hls;
        if (this.config.renderTextTracksNatively) {
            let n = this.textTracks[t];
            if (!n || "disabled" === n.mode) return;
            e.forEach((e) => og(n, e));
        } else {
            let r = this.tracks[t];
            if (!r) return;
            let i = r.default ? "default" : "subtitles" + t;
            n.trigger(u.CUES_PARSED, { type: "subtitles", cues: e, track: i });
        }
    }
    onFragDecrypted(e, t) {
        let { frag: n } = t;
        n.type === g && this.onFragLoaded(u.FRAG_LOADED, t);
    }
    onSubtitleTracksCleared() {
        (this.tracks = []), (this.captionsTracks = {});
    }
    onFragParsingUserdata(e, t) {
        if (!this.enabled || !this.config.enableCEA708Captions) return;
        let { frag: n, samples: r } = t;
        if (n.type !== m || "NONE" !== this.closedCaptionsForLevel(n))
            for (let e = 0; e < r.length; e++) {
                let t = r[e].bytes;
                if (t) {
                    this.cea608Parser1 || this.initCea608Parsers();
                    let n = this.extractCea608Data(t);
                    this.cea608Parser1.addData(r[e].pts, n[0]), this.cea608Parser2.addData(r[e].pts, n[1]);
                }
            }
    }
    onBufferFlushing(e, { startOffset: t, endOffset: n, endOffsetSubtitles: r, type: i }) {
        let { media: s } = this;
        if (s && !(s.currentTime < n)) {
            if (!i || "video" === i) {
                let { captionsTracks: e } = this;
                Object.keys(e).forEach((r) => oI(e[r], t, n));
            }
            if (this.config.renderTextTracksNatively && 0 === t && void 0 !== r) {
                let { textTracks: e } = this;
                Object.keys(e).forEach((n) => oI(e[n], t, r));
            }
        }
    }
    extractCea608Data(e) {
        let t = [[], []],
            n = 31 & e[0],
            r = 2;
        for (let i = 0; i < n; i++) {
            let n = e[r++],
                i = 127 & e[r++],
                s = 127 & e[r++];
            if ((0 !== i || 0 !== s) && (4 & n) != 0) {
                let e = 3 & n;
                (0 === e || 1 === e) && (t[e].push(i), t[e].push(s));
            }
        }
        return t;
    }
}
function lk(e) {
    return e.characteristics &&
        /transcribes-spoken-dialog/gi.test(e.characteristics) &&
        /describes-music-and-sound/gi.test(e.characteristics)
        ? "captions"
        : "subtitles";
}
function lU(e, t) {
    return !!e && e.kind === lk(t) && s$(t, e);
}
function lG(e, t, n, r) {
    return Math.min(t, r) - Math.max(e, n);
}
function lF() {
    return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !0 } };
}
let lB = /\s/,
    lV = {
        newCue(e, t, n, r) {
            let i,
                s,
                a,
                o,
                l,
                u = [],
                c = self.VTTCue || self.TextTrackCue;
            for (let _ = 0; _ < r.rows.length; _++)
                if (((i = r.rows[_]), (a = !0), (o = 0), (l = ""), !i.isEmpty())) {
                    var d;
                    for (let e = 0; e < i.chars.length; e++)
                        lB.test(i.chars[e].uchar) && a ? o++ : ((l += i.chars[e].uchar), (a = !1));
                    (i.cueStartTime = t), t === n && (n += 1e-4), o >= 16 ? o-- : o++;
                    let r = ld(l.trim()),
                        f = lm(t, n, r);
                    (null != e && null != (d = e.cues) && d.getCueById(f)) ||
                        (((s = new c(t, n, r)).id = f),
                        (s.line = _ + 1),
                        (s.align = "left"),
                        (s.position = 10 + Math.min(80, 10 * Math.floor((8 * o) / 32))),
                        u.push(s));
                }
            return (
                e &&
                    u.length &&
                    (u.sort((e, t) =>
                        "auto" === e.line || "auto" === t.line
                            ? 0
                            : e.line > 8 && t.line > 8
                              ? t.line - e.line
                              : e.line - t.line,
                    ),
                    u.forEach((t) => og(e, t))),
                u
            );
        },
    };
function lH() {
    if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
        try {
            return new self.ReadableStream({}), !0;
        } catch (e) {}
    return !1;
}
let lj = /(\d+)-(\d+)\/(\d+)/;
class lY {
    constructor(e) {
        (this.fetchSetup = void 0),
            (this.requestTimeout = void 0),
            (this.request = null),
            (this.response = null),
            (this.controller = void 0),
            (this.context = null),
            (this.config = null),
            (this.callbacks = null),
            (this.stats = void 0),
            (this.loader = null),
            (this.fetchSetup = e.fetchSetup || lz),
            (this.controller = new self.AbortController()),
            (this.stats = new W());
    }
    destroy() {
        (this.loader = this.callbacks = this.context = this.config = this.request = null),
            this.abortInternal(),
            (this.response = null),
            (this.fetchSetup = this.controller = this.stats = null);
    }
    abortInternal() {
        this.controller && !this.stats.loading.end && ((this.stats.aborted = !0), this.controller.abort());
    }
    abort() {
        var e;
        this.abortInternal(),
            null != (e = this.callbacks) &&
                e.onAbort &&
                this.callbacks.onAbort(this.stats, this.context, this.response);
    }
    load(e, t, n) {
        let r = this.stats;
        if (r.loading.start) throw Error("Loader can only be used once.");
        r.loading.start = self.performance.now();
        let s = lW(e, this.controller.signal),
            a = "arraybuffer" === e.responseType,
            o = a ? "byteLength" : "length",
            { maxTimeToFirstByteMs: l, maxLoadTimeMs: u } = t.loadPolicy;
        (this.context = e),
            (this.config = t),
            (this.callbacks = n),
            (this.request = this.fetchSetup(e, s)),
            self.clearTimeout(this.requestTimeout),
            (t.timeout = l && i(l) ? l : u),
            (this.requestTimeout = self.setTimeout(() => {
                this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(r, e, this.response));
            }, t.timeout)),
            (sU(this.request) ? this.request.then(self.fetch) : self.fetch(this.request))
                .then((n) => {
                    var s;
                    this.response = this.loader = n;
                    let o = Math.max(self.performance.now(), r.loading.start);
                    if (
                        (self.clearTimeout(this.requestTimeout),
                        (t.timeout = u),
                        (this.requestTimeout = self.setTimeout(
                            () => {
                                this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(r, e, this.response));
                            },
                            u - (o - r.loading.start),
                        )),
                        !n.ok)
                    ) {
                        let { status: e, statusText: t } = n;
                        throw new lq(t || "fetch, bad network response", e, n);
                    }
                    (r.loading.first = o), (r.total = l$(n.headers) || r.total);
                    let l = null == (s = this.callbacks) ? void 0 : s.onProgress;
                    return l && i(t.highWaterMark)
                        ? this.loadProgressively(n, r, e, t.highWaterMark, l)
                        : a
                          ? n.arrayBuffer()
                          : "json" === e.responseType
                            ? n.json()
                            : n.text();
                })
                .then((n) => {
                    var s, a;
                    let l = this.response;
                    if (!l) throw Error("loader destroyed");
                    self.clearTimeout(this.requestTimeout),
                        (r.loading.end = Math.max(self.performance.now(), r.loading.first));
                    let u = n[o];
                    u && (r.loaded = r.total = u);
                    let c = { url: l.url, data: n, code: l.status },
                        d = null == (s = this.callbacks) ? void 0 : s.onProgress;
                    d && !i(t.highWaterMark) && d(r, e, n, l), null == (a = this.callbacks) || a.onSuccess(c, r, e, l);
                })
                .catch((t) => {
                    var n;
                    if ((self.clearTimeout(this.requestTimeout), r.aborted)) return;
                    let i = (t && t.code) || 0,
                        s = t ? t.message : null;
                    null == (n = this.callbacks) || n.onError({ code: i, text: s }, e, t ? t.details : null, r);
                });
    }
    getCacheAge() {
        let e = null;
        if (this.response) {
            let t = this.response.headers.get("age");
            e = t ? parseFloat(t) : null;
        }
        return e;
    }
    getResponseHeader(e) {
        return this.response ? this.response.headers.get(e) : null;
    }
    loadProgressively(e, t, n, r = 0, i) {
        let s = new r1(),
            a = e.body.getReader(),
            o = () =>
                a
                    .read()
                    .then((a) => {
                        if (a.done)
                            return s.dataLength && i(t, n, s.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
                        let l = a.value,
                            u = l.length;
                        return (
                            (t.loaded += u),
                            u < r || s.dataLength
                                ? (s.push(l), s.dataLength >= r && i(t, n, s.flush().buffer, e))
                                : i(t, n, l.buffer, e),
                            o()
                        );
                    })
                    .catch(() => Promise.reject());
        return o();
    }
}
function lW(e, t) {
    let n = {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        signal: t,
        headers: new self.Headers(S({}, e.headers)),
    };
    return e.rangeEnd && n.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1)), n;
}
function lK(e) {
    let t = lj.exec(e);
    if (t) return parseInt(t[2]) - parseInt(t[1]) + 1;
}
function l$(e) {
    let t = e.get("Content-Range");
    if (t) {
        let e = lK(t);
        if (i(e)) return e;
    }
    let n = e.get("Content-Length");
    if (n) return parseInt(n);
}
function lz(e, t) {
    return new self.Request(e.url, t);
}
class lq extends Error {
    constructor(e, t, n) {
        super(e), (this.code = void 0), (this.details = void 0), (this.code = t), (this.details = n);
    }
}
let lZ = /^age:\s*[\d.]+\s*$/im;
class lX {
    constructor(e) {
        (this.xhrSetup = void 0),
            (this.requestTimeout = void 0),
            (this.retryTimeout = void 0),
            (this.retryDelay = void 0),
            (this.config = null),
            (this.callbacks = null),
            (this.context = null),
            (this.loader = null),
            (this.stats = void 0),
            (this.xhrSetup = (e && e.xhrSetup) || null),
            (this.stats = new W()),
            (this.retryDelay = 0);
    }
    destroy() {
        (this.callbacks = null),
            this.abortInternal(),
            (this.loader = null),
            (this.config = null),
            (this.context = null),
            (this.xhrSetup = null);
    }
    abortInternal() {
        let e = this.loader;
        self.clearTimeout(this.requestTimeout),
            self.clearTimeout(this.retryTimeout),
            e &&
                ((e.onreadystatechange = null),
                (e.onprogress = null),
                4 !== e.readyState && ((this.stats.aborted = !0), e.abort()));
    }
    abort() {
        var e;
        this.abortInternal(),
            null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
    }
    load(e, t, n) {
        if (this.stats.loading.start) throw Error("Loader can only be used once.");
        (this.stats.loading.start = self.performance.now()),
            (this.context = e),
            (this.config = t),
            (this.callbacks = n),
            this.loadInternal();
    }
    loadInternal() {
        let { config: e, context: t } = this;
        if (!e || !t) return;
        let n = (this.loader = new self.XMLHttpRequest()),
            r = this.stats;
        (r.loading.first = 0), (r.loaded = 0), (r.aborted = !1);
        let i = this.xhrSetup;
        i
            ? Promise.resolve()
                  .then(() => {
                      if (this.loader === n && !this.stats.aborted) return i(n, t.url);
                  })
                  .catch((e) => {
                      if (this.loader === n && !this.stats.aborted) return n.open("GET", t.url, !0), i(n, t.url);
                  })
                  .then(() => {
                      this.loader !== n || this.stats.aborted || this.openAndSendXhr(n, t, e);
                  })
                  .catch((e) => {
                      var i;
                      null == (i = this.callbacks) || i.onError({ code: n.status, text: e.message }, t, n, r);
                  })
            : this.openAndSendXhr(n, t, e);
    }
    openAndSendXhr(e, t, n) {
        e.readyState || e.open("GET", t.url, !0);
        let r = t.headers,
            { maxTimeToFirstByteMs: s, maxLoadTimeMs: a } = n.loadPolicy;
        if (r) for (let t in r) e.setRequestHeader(t, r[t]);
        t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
            (e.onreadystatechange = this.readystatechange.bind(this)),
            (e.onprogress = this.loadprogress.bind(this)),
            (e.responseType = t.responseType),
            self.clearTimeout(this.requestTimeout),
            (n.timeout = s && i(s) ? s : a),
            (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.timeout)),
            e.send();
    }
    readystatechange() {
        let { context: e, loader: t, stats: n } = this;
        if (!e || !t) return;
        let r = t.readyState,
            i = this.config;
        if (
            !n.aborted &&
            r >= 2 &&
            (0 === n.loading.first &&
                ((n.loading.first = Math.max(self.performance.now(), n.loading.start)),
                i.timeout !== i.loadPolicy.maxLoadTimeMs &&
                    (self.clearTimeout(this.requestTimeout),
                    (i.timeout = i.loadPolicy.maxLoadTimeMs),
                    (this.requestTimeout = self.setTimeout(
                        this.loadtimeout.bind(this),
                        i.loadPolicy.maxLoadTimeMs - (n.loading.first - n.loading.start),
                    )))),
            4 === r)
        ) {
            var s, a, o;
            self.clearTimeout(this.requestTimeout), (t.onreadystatechange = null), (t.onprogress = null);
            let r = t.status,
                l = "text" === t.responseType ? t.responseText : null;
            if (r >= 200 && r < 300) {
                let i = null != l ? l : t.response;
                if (null != i) {
                    (n.loading.end = Math.max(self.performance.now(), n.loading.first)),
                        (n.loaded = n.total = "arraybuffer" === t.responseType ? i.byteLength : i.length),
                        (n.bwEstimate = (8e3 * n.total) / (n.loading.end - n.loading.first));
                    let o = null == (s = this.callbacks) ? void 0 : s.onProgress;
                    o && o(n, e, i, t);
                    let l = { url: t.responseURL, data: i, code: r };
                    null == (a = this.callbacks) || a.onSuccess(l, n, e, t);
                    return;
                }
            }
            let u = i.loadPolicy.errorRetry;
            tV(u, n.retry, !1, { url: e.url, data: void 0, code: r })
                ? this.retry(u)
                : (P.error(`${r} while loading ${e.url}`),
                  null == (o = this.callbacks) || o.onError({ code: r, text: t.statusText }, e, t, n));
        }
    }
    loadtimeout() {
        if (!this.config) return;
        let e = this.config.loadPolicy.timeoutRetry;
        if (tV(e, this.stats.retry, !0)) this.retry(e);
        else {
            var t;
            P.warn(`timeout while loading ${null == ((t = this.context)) ? void 0 : t.url}`);
            let e = this.callbacks;
            e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader));
        }
    }
    retry(e) {
        let { context: t, stats: n } = this;
        (this.retryDelay = tF(e, n.retry)),
            n.retry++,
            P.warn(
                `${status ? "HTTP Status " + status : "Timeout"} while loading ${null == t ? void 0 : t.url}, retrying ${n.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`,
            ),
            this.abortInternal(),
            (this.loader = null),
            self.clearTimeout(this.retryTimeout),
            (this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay));
    }
    loadprogress(e) {
        let t = this.stats;
        (t.loaded = e.loaded), e.lengthComputable && (t.total = e.total);
    }
    getCacheAge() {
        let e = null;
        if (this.loader && lZ.test(this.loader.getAllResponseHeaders())) {
            let t = this.loader.getResponseHeader("age");
            e = t ? parseFloat(t) : null;
        }
        return e;
    }
    getResponseHeader(e) {
        return this.loader && RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders())
            ? this.loader.getResponseHeader(e)
            : null;
    }
}
let lQ = v(
    v(
        {
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            ignoreDevicePixelRatio: !1,
            maxDevicePixelRatio: 1 / 0,
            preferManagedMediaSource: !0,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            backBufferLength: 1 / 0,
            frontBufferFlushThreshold: 1 / 0,
            startOnSegmentBoundary: !1,
            maxBufferSize: 6e7,
            maxFragLookUpTolerance: 0.25,
            maxBufferHole: 0.1,
            detectStallWithCurrentTimeMs: 1250,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: 0.1,
            nudgeMaxRetry: 3,
            nudgeOnVideoHole: !0,
            liveSyncMode: "edge",
            liveSyncDurationCount: 3,
            liveSyncOnStallIncrease: 1,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            maxLiveSyncPlaybackRate: 1,
            liveDurationInfinity: !1,
            liveBackBufferLength: null,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            workerPath: null,
            enableSoftwareAES: !0,
            startLevel: void 0,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: 0.2,
            appendErrorMaxRetry: 3,
            ignorePlaylistParsingErrors: !1,
            loader: lX,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: tR,
            bufferController: sJ,
            capLevelController: s3,
            errorController: tQ,
            fpsController: om,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrEwmaDefaultEstimateMax: 5e6,
            abrBandWidthFactor: 0.95,
            abrBandWidthUpFactor: 0.7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            drmSystems: {},
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: nJ,
            requireKeySystemAccessOnStart: !1,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0,
            cmcd: void 0,
            enableDateRangeMetadataCues: !0,
            enableEmsgMetadataCues: !0,
            enableEmsgKLVMetadata: !1,
            enableID3MetadataCues: !0,
            enableInterstitialPlayback: !0,
            interstitialAppendInPlace: !0,
            interstitialLiveLookAhead: 10,
            useMediaCapabilities: !0,
            preserveManualLevelOnError: !1,
            certLoadPolicy: {
                default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: null, errorRetry: null },
            },
            keyLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 8e3,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" },
                    errorRetry: { maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" },
                },
            },
            manifestLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1 / 0,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 },
                    errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 },
                },
            },
            playlistLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 },
                    errorRetry: { maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 },
                },
            },
            fragLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 12e4,
                    timeoutRetry: { maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0 },
                    errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 },
                },
            },
            steeringManifestLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 },
                    errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 },
                },
            },
            interstitialAssetListLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 3e4,
                    timeoutRetry: { maxNumRetry: 0, retryDelayMs: 0, maxRetryDelayMs: 0 },
                    errorRetry: { maxNumRetry: 0, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 },
                },
            },
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3,
        },
        lJ(),
    ),
    {},
    {
        subtitleStreamController: oW,
        subtitleTrackController: ov,
        timelineController: lP,
        audioStreamController: sj,
        audioTrackController: sz,
        emeController: od,
        cmcdController: oa,
        contentSteeringController: ol,
        interstitialsController: oj,
    },
);
function lJ() {
    return {
        cueHandler: lV,
        enableWebVTT: !0,
        enableIMSC1: !0,
        enableCEA708Captions: !0,
        captionsTextTrack1Label: "English",
        captionsTextTrack1LanguageCode: "en",
        captionsTextTrack2Label: "Spanish",
        captionsTextTrack2LanguageCode: "es",
        captionsTextTrack3Label: "Unknown CC",
        captionsTextTrack3LanguageCode: "",
        captionsTextTrack4Label: "Unknown CC",
        captionsTextTrack4LanguageCode: "",
        renderTextTracksNatively: !0,
    };
}
function l0(e, t, n) {
    if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration))
        throw Error(
            "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration",
        );
    if (
        void 0 !== t.liveMaxLatencyDurationCount &&
        (void 0 === t.liveSyncDurationCount || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)
    )
        throw Error(
            'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"',
        );
    if (
        void 0 !== t.liveMaxLatencyDuration &&
        (void 0 === t.liveSyncDuration || t.liveMaxLatencyDuration <= t.liveSyncDuration)
    )
        throw Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
    let r = l1(e),
        i = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
    return (
        ["manifest", "level", "frag"].forEach((e) => {
            let s = `${"level" === e ? "playlist" : e}LoadPolicy`,
                a = void 0 === t[s],
                o = [];
            i.forEach((n) => {
                let i = `${e}Loading${n}`,
                    l = t[i];
                if (void 0 !== l && a) {
                    o.push(i);
                    let e = r[s].default;
                    switch (((t[s] = { default: e }), n)) {
                        case "TimeOut":
                            (e.maxLoadTimeMs = l), (e.maxTimeToFirstByteMs = l);
                            break;
                        case "MaxRetry":
                            (e.errorRetry.maxNumRetry = l), (e.timeoutRetry.maxNumRetry = l);
                            break;
                        case "RetryDelay":
                            (e.errorRetry.retryDelayMs = l), (e.timeoutRetry.retryDelayMs = l);
                            break;
                        case "MaxRetryTimeout":
                            (e.errorRetry.maxRetryDelayMs = l), (e.timeoutRetry.maxRetryDelayMs = l);
                    }
                }
            }),
                o.length &&
                    n.warn(`hls.js config: "${o.join('", "')}" setting(s) are deprecated, use "${s}": ${tf(t[s])}`);
        }),
        v(v({}, r), t)
    );
}
function l1(e) {
    return e && "object" == typeof e
        ? Array.isArray(e)
            ? e.map(l1)
            : Object.keys(e).reduce((t, n) => ((t[n] = l1(e[n])), t), {})
        : e;
}
function l2(e, t) {
    let n = e.loader;
    n !== lY && n !== lX
        ? (t.log("[config]: Custom loader detected, cannot enable progressive streaming"), (e.progressive = !1))
        : lH() &&
          ((e.loader = lY),
          (e.progressive = !0),
          (e.enableSoftwareAES = !0),
          t.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
let l3 = 2,
    l6 = 0.1,
    l4 = 0.05,
    l5 = 100;
class l7 extends nf {
    constructor(e, t) {
        super("gap-controller", e.logger),
            (this.hls = void 0),
            (this.fragmentTracker = void 0),
            (this.media = null),
            (this.mediaSource = void 0),
            (this.nudgeRetry = 0),
            (this.stallReported = !1),
            (this.stalled = null),
            (this.moved = !1),
            (this.seeking = !1),
            (this.buffered = {}),
            (this.lastCurrentTime = 0),
            (this.ended = 0),
            (this.waiting = 0),
            (this.onMediaPlaying = () => {
                (this.ended = 0), (this.waiting = 0);
            }),
            (this.onMediaWaiting = () => {
                var e;
                (null != (e = this.media) && e.seeking) || ((this.waiting = self.performance.now()), this.tick());
            }),
            (this.onMediaEnded = () => {
                if (this.hls) {
                    var e;
                    (this.ended = (null == (e = this.media) ? void 0 : e.currentTime) || 1),
                        this.hls.trigger(u.MEDIA_ENDED, { stalled: !1 });
                }
            }),
            (this.hls = e),
            (this.fragmentTracker = t),
            this.registerListeners();
    }
    registerListeners() {
        let { hls: e } = this;
        e &&
            (e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.BUFFER_APPENDED, this.onBufferAppended, this));
    }
    unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.BUFFER_APPENDED, this.onBufferAppended, this));
    }
    destroy() {
        super.destroy(),
            this.unregisterListeners(),
            (this.media = this.hls = this.fragmentTracker = null),
            (this.mediaSource = void 0);
    }
    onMediaAttached(e, t) {
        this.setInterval(l5), (this.mediaSource = t.mediaSource);
        let n = (this.media = t.media);
        rG(n, "playing", this.onMediaPlaying), rG(n, "waiting", this.onMediaWaiting), rG(n, "ended", this.onMediaEnded);
    }
    onMediaDetaching(e, t) {
        this.clearInterval();
        let { media: n } = this;
        n &&
            (rF(n, "playing", this.onMediaPlaying),
            rF(n, "waiting", this.onMediaWaiting),
            rF(n, "ended", this.onMediaEnded),
            (this.media = null)),
            (this.mediaSource = void 0);
    }
    onBufferAppended(e, t) {
        this.buffered = t.timeRanges;
    }
    get hasBuffered() {
        return Object.keys(this.buffered).length > 0;
    }
    tick() {
        var e;
        if (!(null != (e = this.media) && e.readyState) || !this.hasBuffered) return;
        let t = this.media.currentTime;
        this.poll(t, this.lastCurrentTime), (this.lastCurrentTime = t);
    }
    poll(e, t) {
        var n, r, i;
        let s = null == (n = this.hls) ? void 0 : n.config;
        if (!s) return;
        let a = this.media;
        if (!a) return;
        let { seeking: o } = a,
            l = this.seeking && !o,
            c = !this.seeking && o,
            d = (a.paused && !o) || a.ended || 0 === a.playbackRate;
        if (((this.seeking = o), e !== t)) {
            t && (this.ended = 0),
                (this.moved = !0),
                !o && ((this.nudgeRetry = 0), s.nudgeOnVideoHole && !d && e > t && this.nudgeOnVideoHole(e, t)),
                0 === this.waiting && this.stallResolved(e);
            return;
        }
        if (c || l) {
            l && this.stallResolved(e);
            return;
        }
        if (d) {
            (this.nudgeRetry = 0),
                this.stallResolved(e),
                !this.ended &&
                    a.ended &&
                    this.hls &&
                    ((this.ended = e || 1), this.hls.trigger(u.MEDIA_ENDED, { stalled: !1 }));
            return;
        }
        if (!nE.getBuffered(a).length) {
            this.nudgeRetry = 0;
            return;
        }
        let _ = nE.bufferInfo(a, e, 0),
            f = _.nextStart || 0,
            h = this.fragmentTracker;
        if (o && h && this.hls) {
            let t = l8(this.hls.inFlightFragments, e),
                n = _.len > l3,
                r = !f || t || (f - e > l3 && !h.getPartialFragment(e));
            if (n || r) return;
            this.moved = !1;
        }
        let p = null == (r = this.hls) ? void 0 : r.latestLevelDetails;
        if (!this.moved && null !== this.stalled && h) {
            if (!(_.len > 0) && !f) return;
            let t = Math.max(f, _.start || 0) - e,
                n = null != p && p.live ? 2 * p.targetduration : l3,
                r = ue(e, h);
            if (t > 0 && (t <= n || r)) {
                a.paused || this._trySkipBufferHole(r);
                return;
            }
        }
        let m = s.detectStallWithCurrentTimeMs,
            E = self.performance.now(),
            g = this.waiting,
            A = this.stalled;
        if (null === A)
            if (g > 0 && E - g < m) A = this.stalled = g;
            else {
                this.stalled = E;
                return;
            }
        let I = E - A;
        if (!o && (I >= m || g) && this.hls) {
            if (
                (null == (i = this.mediaSource) ? void 0 : i.readyState) === "ended" &&
                !(null != p && p.live) &&
                1 > Math.abs(e - ((null == p ? void 0 : p.edge) || 0))
            ) {
                if (this.ended) return;
                (this.ended = e || 1), this.hls.trigger(u.MEDIA_ENDED, { stalled: !0 });
                return;
            }
            if ((this._reportStall(_), !this.media || !this.hls)) return;
        }
        let T = nE.bufferInfo(a, e, s.maxBufferHole);
        this._tryFixBufferStall(T, I, e);
    }
    stallResolved(e) {
        let t = this.stalled;
        if (t && this.hls && ((this.stalled = null), this.stallReported)) {
            let n = self.performance.now() - t;
            this.log(`playback not stuck anymore @${e}, after ${Math.round(n)}ms`),
                (this.stallReported = !1),
                (this.waiting = 0),
                this.hls.trigger(u.STALL_RESOLVED, {});
        }
    }
    nudgeOnVideoHole(e, t) {
        var n;
        let r = this.buffered.video;
        if (
            this.hls &&
            this.media &&
            this.fragmentTracker &&
            null != (n = this.buffered.audio) &&
            n.length &&
            r &&
            r.length > 1 &&
            e > r.end(0)
        ) {
            let n = nE.bufferedInfo(nE.timeRangesToArray(this.buffered.audio), e, 0);
            if (n.len > 1 && t >= n.start) {
                let n = nE.timeRangesToArray(r),
                    i = nE.bufferedInfo(n, t, 0).bufferedIndex;
                if (i > -1 && i < n.length - 1) {
                    let t = nE.bufferedInfo(n, e, 0).bufferedIndex,
                        r = n[i].end,
                        s = n[i + 1].start;
                    if ((-1 === t || t > i) && s - r < 1 && e - r < 2) {
                        let n = Error(
                            `nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${r} -> ${s} buffered index: ${t}`,
                        );
                        this.warn(n.message), (this.media.currentTime += 1e-6);
                        let i = ue(e, this.fragmentTracker);
                        i && "fragment" in i ? (i = i.fragment) : i || (i = void 0);
                        let a = nE.bufferInfo(this.media, e, 0);
                        this.hls.trigger(u.ERROR, {
                            type: o.MEDIA_ERROR,
                            details: l.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: n,
                            reason: n.message,
                            frag: i,
                            buffer: a.len,
                            bufferInfo: a,
                        });
                    }
                }
            }
        }
    }
    _tryFixBufferStall(e, t, n) {
        var r, i;
        let { fragmentTracker: s, media: a } = this,
            o = null == (r = this.hls) ? void 0 : r.config;
        if (!a || !s || !o) return;
        let l = null == (i = this.hls) ? void 0 : i.latestLevelDetails,
            u = ue(n, s);
        if ((u || (null != l && l.live && n < l.fragmentStart)) && (this._trySkipBufferHole(u) || !this.media)) return;
        let c = e.buffered,
            d = this.adjacentTraversal(e, n);
        ((c && c.length > 1 && e.len > o.maxBufferHole) || (e.nextStart && (e.nextStart - n < o.maxBufferHole || d))) &&
            (t > 1e3 * o.highBufferWatchdogPeriod || this.waiting) &&
            (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
    }
    adjacentTraversal(e, t) {
        let n = this.fragmentTracker,
            r = e.nextStart;
        if (n && r) {
            let e = n.getFragAtPos(t, m),
                i = n.getFragAtPos(r, m);
            if (e && i) return i.sn - e.sn < 2;
        }
        return !1;
    }
    _reportStall(e) {
        let { hls: t, media: n, stallReported: r, stalled: i } = this;
        if (!r && null !== i && n && t) {
            this.stallReported = !0;
            let r = Error(`Playback stalling at @${n.currentTime} due to low buffer (${tf(e)})`);
            this.warn(r.message),
                t.trigger(u.ERROR, {
                    type: o.MEDIA_ERROR,
                    details: l.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    error: r,
                    buffer: e.len,
                    bufferInfo: e,
                    stalled: { start: i },
                });
        }
    }
    _trySkipBufferHole(e) {
        var t, n;
        let { fragmentTracker: r, media: i } = this,
            s = null == (t = this.hls) ? void 0 : t.config;
        if (!i || !r || !s) return 0;
        let a = i.currentTime,
            c = nE.bufferInfo(i, a, 0),
            d = a < c.start ? c.start : c.nextStart;
        if (d && this.hls) {
            let t = c.len <= s.maxBufferHole,
                _ = c.len > 0 && c.len < 1 && i.readyState < 3,
                f = d - a;
            if (f > 0 && (t || _)) {
                if (f > s.maxBufferHole) {
                    let t = !1;
                    if (0 === a) {
                        let e = r.getAppendedFrag(0, m);
                        e && d < e.end && (t = !0);
                    }
                    if (!t && e) {
                        if (!(null != (n = this.hls.loadLevelObj) && n.details) || l8(this.hls.inFlightFragments, d))
                            return 0;
                        let t = !1,
                            i = e.end;
                        for (; i < d; ) {
                            let e = ue(i, r);
                            if (e) i += e.duration;
                            else {
                                t = !0;
                                break;
                            }
                        }
                        if (t) return 0;
                    }
                }
                let t = Math.max(d + l4, a + l6);
                if (
                    (this.warn(`skipping hole, adjusting currentTime from ${a} to ${t}`),
                    (this.moved = !0),
                    (i.currentTime = t),
                    !(null != e && e.gap))
                ) {
                    let n = Error(`fragment loaded with buffer holes, seeking from ${a} to ${t}`),
                        r = {
                            type: o.MEDIA_ERROR,
                            details: l.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: n,
                            reason: n.message,
                            buffer: c.len,
                            bufferInfo: c,
                        };
                    e && ("fragment" in e ? (r.part = e) : (r.frag = e)), this.hls.trigger(u.ERROR, r);
                }
                return t;
            }
        }
        return 0;
    }
    _tryNudgeBuffer(e) {
        let { hls: t, media: n, nudgeRetry: r } = this,
            i = null == t ? void 0 : t.config;
        if (!n || !i) return 0;
        let s = n.currentTime;
        if ((this.nudgeRetry++, r < i.nudgeMaxRetry)) {
            let a = s + (r + 1) * i.nudgeOffset,
                c = Error(`Nudging 'currentTime' from ${s} to ${a}`);
            this.warn(c.message),
                (n.currentTime = a),
                t.trigger(u.ERROR, {
                    type: o.MEDIA_ERROR,
                    details: l.BUFFER_NUDGE_ON_STALL,
                    error: c,
                    fatal: !1,
                    buffer: e.len,
                    bufferInfo: e,
                });
        } else {
            let n = Error(`Playhead still not moving while enough data buffered @${s} after ${i.nudgeMaxRetry} nudges`);
            this.error(n.message),
                t.trigger(u.ERROR, {
                    type: o.MEDIA_ERROR,
                    details: l.BUFFER_STALLED_ERROR,
                    error: n,
                    fatal: !0,
                    buffer: e.len,
                    bufferInfo: e,
                });
        }
    }
}
function l8(e, t) {
    let n = l9(e.main);
    if (n && n.start <= t) return n;
    let r = l9(e.audio);
    return r && r.start <= t ? r : null;
}
function l9(e) {
    if (!e) return null;
    switch (e.state) {
        case rH:
        case rV:
        case rq:
        case rZ:
            return null;
    }
    return e.frag;
}
function ue(e, t) {
    return t.getAppendedFrag(e, m) || t.getPartialFragment(e);
}
let ut = 0.25;
function un() {
    if ("u" > typeof self) return self.VTTCue || self.TextTrackCue;
}
function ur(e, t, n, r, i) {
    let s = new e(t, n, "");
    try {
        (s.value = r), i && (s.type = i);
    } catch (a) {
        s = new e(t, n, tf(i ? v({ type: i }, r) : r));
    }
    return s;
}
let ui = (() => {
    let e = un();
    try {
        e && new e(0, 1 / 0, "");
    } catch (e) {
        return Number.MAX_VALUE;
    }
    return 1 / 0;
})();
class us {
    constructor(e) {
        (this.hls = void 0),
            (this.id3Track = null),
            (this.media = null),
            (this.dateRangeCuesAppended = {}),
            (this.removeCues = !0),
            (this.assetCue = void 0),
            (this.onEventCueEnter = () => {
                this.hls && this.hls.trigger(u.EVENT_CUE_ENTER, {});
            }),
            (this.hls = e),
            this._registerListeners();
    }
    destroy() {
        this._unregisterListeners(),
            (this.id3Track = null),
            (this.media = null),
            (this.dateRangeCuesAppended = {}),
            (this.hls = this.onEventCueEnter = null);
    }
    _registerListeners() {
        let { hls: e } = this;
        e &&
            (e.on(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
            e.on(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(u.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
    }
    _unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(u.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
            e.off(u.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(u.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
    }
    onMediaAttaching(e, t) {
        var n;
        (this.media = t.media), (null == (n = t.overrides) ? void 0 : n.cueRemoval) === !1 && (this.removeCues = !1);
    }
    onMediaAttached() {
        var e;
        let t = null == (e = this.hls) ? void 0 : e.latestLevelDetails;
        t && this.updateDateRangeCues(t);
    }
    onMediaDetaching(e, t) {
        (this.media = null),
            t.transferMedia ||
                (this.id3Track && (this.removeCues && oA(this.id3Track, this.onEventCueEnter), (this.id3Track = null)),
                (this.dateRangeCuesAppended = {}));
    }
    onManifestLoading() {
        this.dateRangeCuesAppended = {};
    }
    createTrack(e) {
        let t = this.getID3Track(e.textTracks);
        return (t.mode = "hidden"), t;
    }
    getID3Track(e) {
        if (this.media) {
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if ("metadata" === n.kind && "id3" === n.label) return oE(n, this.media), n;
            }
            return this.media.addTextTrack("metadata", "id3");
        }
    }
    onFragParsingMetadata(e, t) {
        if (!this.media || !this.hls) return;
        let { enableEmsgMetadataCues: n, enableID3MetadataCues: r } = this.hls.config;
        if (!n && !r) return;
        let { samples: i } = t;
        this.id3Track || (this.id3Track = this.createTrack(this.media));
        let s = un();
        if (s)
            for (let e = 0; e < i.length; e++) {
                let t = i[e].type;
                if ((t === iU.emsg && !n) || !r) continue;
                let a = iM(i[e].data),
                    o = i[e].pts,
                    l = o + i[e].duration;
                l > ui && (l = ui), l - o <= 0 && (l = o + ut);
                for (let e = 0; e < a.length; e++) {
                    let n = a[e];
                    if (!ix(n)) {
                        this.updateId3CueEnds(o, t);
                        let e = ur(s, o, l, n, t);
                        e && this.id3Track.addCue(e);
                    }
                }
            }
    }
    updateId3CueEnds(e, t) {
        var n;
        let r = null == (n = this.id3Track) ? void 0 : n.cues;
        if (r)
            for (let n = r.length; n--; ) {
                let i = r[n];
                i.type === t && i.startTime < e && i.endTime === ui && (i.endTime = e);
            }
    }
    onBufferFlushing(e, { startOffset: t, endOffset: n, type: r }) {
        let { id3Track: i, hls: s } = this;
        if (!s) return;
        let {
            config: { enableEmsgMetadataCues: a, enableID3MetadataCues: o },
        } = s;
        if (i && (a || o)) {
            let e;
            oI(
                i,
                t,
                n,
                (e =
                    "audio" === r
                        ? (e) => e.type === iU.audioId3 && o
                        : "video" === r
                          ? (e) => e.type === iU.emsg && a
                          : (e) => (e.type === iU.audioId3 && o) || (e.type === iU.emsg && a)),
            );
        }
    }
    onLevelUpdated(e, { details: t }) {
        this.updateDateRangeCues(t, !0);
    }
    onLevelPtsUpdated(e, t) {
        Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
    }
    updateDateRangeCues(e, t) {
        if (!this.hls || !this.media) return;
        let {
            assetPlayerId: n,
            timelineOffset: r,
            enableDateRangeMetadataCues: s,
            interstitialsController: a,
        } = this.hls.config;
        if (!s) return;
        let o = un();
        if (n && r && !a) {
            let { fragmentStart: t, fragmentEnd: r } = e,
                i = this.assetCue;
            i
                ? ((i.startTime = t), (i.endTime = r))
                : o &&
                  (i = this.assetCue =
                      ur(o, t, r, { assetPlayerId: this.hls.config.assetPlayerId }, "hlsjs.interstitial.asset")) &&
                  ((i.id = n),
                  this.id3Track || (this.id3Track = this.createTrack(this.media)),
                  this.id3Track.addCue(i),
                  i.addEventListener("enter", this.onEventCueEnter));
        }
        if (!e.hasProgramDateTime) return;
        let { id3Track: l } = this,
            { dateRanges: u } = e,
            c = Object.keys(u),
            d = this.dateRangeCuesAppended;
        if (l && t) {
            var _, f;
            if (null != (_ = l.cues) && _.length) {
                let e = Object.keys(d).filter((e) => !c.includes(e));
                for (let t = e.length; t--; ) {
                    let n = e[t],
                        r = null == (f = d[n]) ? void 0 : f.cues;
                    delete d[n],
                        r &&
                            Object.keys(r).forEach((e) => {
                                let t = r[e];
                                if (t) {
                                    t.removeEventListener("enter", this.onEventCueEnter);
                                    try {
                                        l.removeCue(t);
                                    } catch (e) {}
                                }
                            });
                }
            } else d = this.dateRangeCuesAppended = {};
        }
        let h = e.fragments[e.fragments.length - 1];
        if (0 !== c.length && i(null == h ? void 0 : h.programDateTime)) {
            this.id3Track || (this.id3Track = this.createTrack(this.media));
            for (let e = 0; e < c.length; e++) {
                let t = c[e],
                    n = u[t],
                    r = n.startTime,
                    i = d[t],
                    s = (null == i ? void 0 : i.cues) || {},
                    l = (null == i ? void 0 : i.durationKnown) || !1,
                    _ = ui,
                    { duration: f, endDate: h } = n;
                if (h && null !== f) (_ = r + f), (l = !0);
                else if (n.endOnNext && !l) {
                    let e = c.reduce((e, t) => {
                        if (t !== n.id) {
                            let r = u[t];
                            if (r.class === n.class && r.startDate > n.startDate && (!e || n.startDate < e.startDate))
                                return r;
                        }
                        return e;
                    }, null);
                    e && ((_ = e.startTime), (l = !0));
                }
                let p = Object.keys(n.attr);
                for (let e = 0; e < p.length; e++) {
                    let u = p[e];
                    if (!nR(u)) continue;
                    let c = s[u];
                    if (c)
                        l && !(null != i && i.durationKnown)
                            ? (c.endTime = _)
                            : Math.abs(c.startTime - r) > 0.01 && ((c.startTime = r), (c.endTime = _));
                    else if (o) {
                        let e = n.attr[u];
                        nb(u) && (e = V(e));
                        let i = ur(o, r, _, { key: u, data: e }, iU.dateRange);
                        i &&
                            ((i.id = t),
                            this.id3Track.addCue(i),
                            (s[u] = i),
                            a &&
                                ("X-ASSET-LIST" === u || "X-ASSET-URL" === u) &&
                                i.addEventListener("enter", this.onEventCueEnter));
                    }
                }
                d[t] = { cues: s, dateRange: n, durationKnown: l };
            }
        }
    }
}
class ua {
    constructor(e) {
        (this.hls = void 0),
            (this.config = void 0),
            (this.media = null),
            (this.currentTime = 0),
            (this.stallCount = 0),
            (this._latency = null),
            (this._targetLatencyUpdated = !1),
            (this.onTimeupdate = () => {
                let { media: e } = this,
                    t = this.levelDetails;
                if (!e || !t) return;
                this.currentTime = e.currentTime;
                let n = this.computeLatency();
                if (null === n) return;
                this._latency = n;
                let { lowLatencyMode: r, maxLiveSyncPlaybackRate: i } = this.config;
                if (!r || 1 === i || !t.live) return;
                let s = this.targetLatency;
                if (null === s) return;
                let a = n - s;
                if (a < Math.min(this.maxLatency, s + t.targetduration) && a > 0.05 && this.forwardBufferLength > 1) {
                    let t = Math.min(
                        Math.min(2, Math.max(1, i)),
                        Math.max(1, Math.round((2 / (1 + Math.exp(-0.75 * a - this.edgeStalled))) * 20) / 20),
                    );
                    this.changeMediaPlaybackRate(e, t);
                } else 1 !== e.playbackRate && 0 !== e.playbackRate && this.changeMediaPlaybackRate(e, 1);
            }),
            (this.hls = e),
            (this.config = e.config),
            this.registerListeners();
    }
    get levelDetails() {
        var e;
        return (null == (e = this.hls) ? void 0 : e.latestLevelDetails) || null;
    }
    get latency() {
        return this._latency || 0;
    }
    get maxLatency() {
        let { config: e } = this;
        if (void 0 !== e.liveMaxLatencyDuration) return e.liveMaxLatencyDuration;
        let t = this.levelDetails;
        return t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
    }
    get targetLatency() {
        let e = this.levelDetails;
        if (null === e || null === this.hls) return null;
        let { holdBack: t, partHoldBack: n, targetduration: r } = e,
            { liveSyncDuration: i, liveSyncDurationCount: s, lowLatencyMode: a } = this.config,
            o = this.hls.userConfig,
            l = (a && n) || t;
        (this._targetLatencyUpdated || o.liveSyncDuration || o.liveSyncDurationCount || 0 === l) &&
            (l = void 0 !== i ? i : s * r);
        let u = r;
        return l + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, u);
    }
    set targetLatency(e) {
        (this.stallCount = 0), (this.config.liveSyncDuration = e), (this._targetLatencyUpdated = !0);
    }
    get liveSyncPosition() {
        let e = this.estimateLiveEdge(),
            t = this.targetLatency;
        if (null === e || null === t) return null;
        let n = this.levelDetails;
        if (null === n) return null;
        let r = n.edge,
            i = e - t - this.edgeStalled;
        return Math.min(
            Math.max(r - n.totalduration, i),
            r - ((this.config.lowLatencyMode && n.partTarget) || n.targetduration),
        );
    }
    get drift() {
        let e = this.levelDetails;
        return null === e ? 1 : e.drift;
    }
    get edgeStalled() {
        let e = this.levelDetails;
        if (null === e) return 0;
        let t = 3 * ((this.config.lowLatencyMode && e.partTarget) || e.targetduration);
        return Math.max(e.age - t, 0);
    }
    get forwardBufferLength() {
        let { media: e } = this,
            t = this.levelDetails;
        if (!e || !t) return 0;
        let n = e.buffered.length;
        return (n ? e.buffered.end(n - 1) : t.edge) - this.currentTime;
    }
    destroy() {
        this.unregisterListeners(), this.onMediaDetaching(), (this.hls = null);
    }
    registerListeners() {
        let { hls: e } = this;
        e &&
            (e.on(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(u.ERROR, this.onError, this));
    }
    unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(u.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(u.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(u.ERROR, this.onError, this));
    }
    onMediaAttached(e, t) {
        (this.media = t.media), this.media.addEventListener("timeupdate", this.onTimeupdate);
    }
    onMediaDetaching() {
        this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), (this.media = null));
    }
    onManifestLoading() {
        (this._latency = null), (this.stallCount = 0);
    }
    onLevelUpdated(e, { details: t }) {
        t.advanced && this.onTimeupdate(),
            !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
    }
    onError(e, t) {
        var n;
        t.details === l.BUFFER_STALLED_ERROR &&
            (this.stallCount++,
            this.hls &&
                null != (n = this.levelDetails) &&
                n.live &&
                this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
    }
    changeMediaPlaybackRate(e, t) {
        var n, r;
        e.playbackRate !== t &&
            (null == (n = this.hls) ||
                n.logger.debug(
                    `[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${null == ((r = this.targetLatency)) ? void 0 : r.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`,
                ),
            (e.playbackRate = t));
    }
    estimateLiveEdge() {
        let e = this.levelDetails;
        return null === e ? null : e.edge + e.age;
    }
    computeLatency() {
        let e = this.estimateLiveEdge();
        return null === e ? null : e - this.currentTime;
    }
}
class uo extends sY {
    constructor(e, t) {
        super(e, "level-controller"),
            (this._levels = []),
            (this._firstLevel = -1),
            (this._maxAutoLevel = -1),
            (this._startLevel = void 0),
            (this.currentLevel = null),
            (this.currentLevelIndex = -1),
            (this.manualLevelIndex = -1),
            (this.steering = void 0),
            (this.onParsedComplete = void 0),
            (this.steering = t),
            this._registerListeners();
    }
    _registerListeners() {
        let { hls: e } = this;
        e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(u.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(u.ERROR, this.onError, this);
    }
    _unregisterListeners() {
        let { hls: e } = this;
        e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(u.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(u.ERROR, this.onError, this);
    }
    destroy() {
        this._unregisterListeners(), (this.steering = null), this.resetLevels(), super.destroy();
    }
    stopLoad() {
        this._levels.forEach((e) => {
            (e.loadError = 0), (e.fragmentError = 0);
        }),
            super.stopLoad();
    }
    resetLevels() {
        (this._startLevel = void 0),
            (this.manualLevelIndex = -1),
            (this.currentLevelIndex = -1),
            (this.currentLevel = null),
            (this._levels = []),
            (this._maxAutoLevel = -1);
    }
    onManifestLoading(e, t) {
        this.resetLevels();
    }
    onManifestLoaded(e, t) {
        let n = this.hls.config.preferManagedMediaSource,
            r = [],
            i = {},
            s = {},
            a = !1,
            o = !1,
            l = !1;
        t.levels.forEach((e) => {
            let t = e.attrs,
                { audioCodec: u, videoCodec: c } = e;
            u && (e.audioCodec = u = eW(u, n) || void 0), c && (c = e.videoCodec = eq(c));
            let { width: d, height: _, unknownCodecs: f } = e,
                h = (null == f ? void 0 : f.length) || 0;
            if (
                (a || (a = !!(d && _)),
                o || (o = !!c),
                l || (l = !!u),
                h || (u && !this.isAudioSupported(u)) || (c && !this.isVideoSupported(c)))
            )
                return void this.log(`Some or all CODECS not supported "${t.CODECS}"`);
            let { CODECS: p, "FRAME-RATE": m, "HDCP-LEVEL": E, "PATHWAY-ID": g, RESOLUTION: A, "VIDEO-RANGE": I } = t,
                T = `${g || "."}-`,
                S = `${T}${e.bitrate}-${A}-${m}-${p}-${I}-${E}`;
            if (i[S])
                if (i[S].uri === e.url || e.attrs["PATHWAY-ID"])
                    i[S].addGroupId("audio", t.AUDIO), i[S].addGroupId("text", t.SUBTITLES);
                else {
                    let t = (s[S] += 1);
                    e.attrs["PATHWAY-ID"] = Array(t + 1).join(".");
                    let n = this.createLevel(e);
                    (i[S] = n), r.push(n);
                }
            else {
                let t = this.createLevel(e);
                (i[S] = t), (s[S] = 1), r.push(t);
            }
        }),
            this.filterAndSortMediaOptions(r, t, a, o, l);
    }
    createLevel(e) {
        let t = new tl(e),
            n = e.supplemental;
        if (null != n && n.videoCodec && !this.isVideoSupported(n.videoCodec)) {
            let e = Error(`SUPPLEMENTAL-CODECS not supported "${n.videoCodec}"`);
            this.log(e.message), (t.supportedResult = e1(e, []));
        }
        return t;
    }
    isAudioSupported(e) {
        return eU(e, "audio", this.hls.config.preferManagedMediaSource);
    }
    isVideoSupported(e) {
        return eU(e, "video", this.hls.config.preferManagedMediaSource);
    }
    filterAndSortMediaOptions(e, t, n, r, i) {
        var s, a;
        let c = [],
            d = [],
            _ = e,
            f = (null == (s = t.stats) ? void 0 : s.parsing) || {};
        if (
            ((n || r) &&
                i &&
                (_ = _.filter(({ videoCodec: e, videoRange: t, width: n, height: r }) => (!!e || !!(n && r)) && tn(t))),
            0 === _.length)
        ) {
            Promise.resolve().then(() => {
                if (this.hls) {
                    let e = "no level with compatible codecs found in manifest",
                        n = e;
                    t.levels.length &&
                        ((n = `one or more CODECS in variant not supported: ${tf(t.levels.map((e) => e.attrs.CODECS).filter((e, t, n) => n.indexOf(e) === t))}`),
                        this.warn(n),
                        (e += ` (${n})`));
                    let r = Error(e);
                    this.hls.trigger(u.ERROR, {
                        type: o.MEDIA_ERROR,
                        details: l.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: t.url,
                        error: r,
                        reason: n,
                    });
                }
            }),
                (f.end = performance.now());
            return;
        }
        t.audioTracks && ul((c = t.audioTracks.filter((e) => !e.audioCodec || this.isAudioSupported(e.audioCodec)))),
            t.subtitles && ul((d = t.subtitles));
        let h = _.slice(0);
        _.sort((e, t) => {
            if (e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"])
                return (e.attrs["HDCP-LEVEL"] || "") > (t.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
            if (n && e.height !== t.height) return e.height - t.height;
            if (e.frameRate !== t.frameRate) return e.frameRate - t.frameRate;
            if (e.videoRange !== t.videoRange) return tt.indexOf(e.videoRange) - tt.indexOf(t.videoRange);
            if (e.videoCodec !== t.videoCodec) {
                let n = eB(e.videoCodec),
                    r = eB(t.videoCodec);
                if (n !== r) return r - n;
            }
            if (e.uri === t.uri && e.codecSet !== t.codecSet) {
                let n = eV(e.codecSet),
                    r = eV(t.codecSet);
                if (n !== r) return r - n;
            }
            return e.averageBitrate !== t.averageBitrate ? e.averageBitrate - t.averageBitrate : 0;
        });
        let p = h[0];
        if (this.steering && (_ = this.steering.filterParsedLevels(_)).length !== h.length) {
            for (let e = 0; e < h.length; e++)
                if (h[e].pathwayId === _[0].pathwayId) {
                    p = h[e];
                    break;
                }
        }
        this._levels = _;
        for (let e = 0; e < _.length; e++)
            if (_[e] === p) {
                this._firstLevel = e;
                let t = p.bitrate,
                    n = this.hls.bandwidthEstimate;
                if (
                    (this.log(`manifest loaded, ${_.length} level(s) found, first bitrate: ${t}`),
                    (null == (a = this.hls.userConfig) ? void 0 : a.abrEwmaDefaultEstimate) === void 0)
                ) {
                    let e = Math.min(t, this.hls.config.abrEwmaDefaultEstimateMax);
                    e > n && n === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = e);
                }
                break;
            }
        let m = i && !r,
            E = this.hls.config,
            g = !!(E.audioStreamController && E.audioTrackController),
            A = {
                levels: _,
                audioTracks: c,
                subtitleTracks: d,
                sessionData: t.sessionData,
                sessionKeys: t.sessionKeys,
                firstLevel: this._firstLevel,
                stats: t.stats,
                audio: i,
                video: r,
                altAudio: g && !m && c.some((e) => !!e.url),
            };
        (f.end = performance.now()), this.hls.trigger(u.MANIFEST_PARSED, A);
    }
    get levels() {
        return 0 === this._levels.length ? null : this._levels;
    }
    get loadLevelObj() {
        return this.currentLevel;
    }
    get level() {
        return this.currentLevelIndex;
    }
    set level(e) {
        let t = this._levels;
        if (0 === t.length) return;
        if (e < 0 || e >= t.length) {
            let n = Error("invalid level idx"),
                r = e < 0;
            if (
                (this.hls.trigger(u.ERROR, {
                    type: o.OTHER_ERROR,
                    details: l.LEVEL_SWITCH_ERROR,
                    level: e,
                    fatal: r,
                    error: n,
                    reason: n.message,
                }),
                r)
            )
                return;
            e = Math.min(e, t.length - 1);
        }
        let n = this.currentLevelIndex,
            r = this.currentLevel,
            i = r ? r.attrs["PATHWAY-ID"] : void 0,
            s = t[e],
            a = s.attrs["PATHWAY-ID"];
        if (((this.currentLevelIndex = e), (this.currentLevel = s), n === e && r && i === a)) return;
        this.log(
            `Switching to level ${e} (${s.height ? s.height + "p " : ""}${s.videoRange ? s.videoRange + " " : ""}${s.codecSet ? s.codecSet + " " : ""}@${s.bitrate})${a ? " with Pathway " + a : ""} from level ${n}${i ? " with Pathway " + i : ""}`,
        );
        let c = {
            level: e,
            attrs: s.attrs,
            details: s.details,
            bitrate: s.bitrate,
            averageBitrate: s.averageBitrate,
            maxBitrate: s.maxBitrate,
            realBitrate: s.realBitrate,
            width: s.width,
            height: s.height,
            codecSet: s.codecSet,
            audioCodec: s.audioCodec,
            videoCodec: s.videoCodec,
            audioGroups: s.audioGroups,
            subtitleGroups: s.subtitleGroups,
            loaded: s.loaded,
            loadError: s.loadError,
            fragmentError: s.fragmentError,
            name: s.name,
            id: s.id,
            uri: s.uri,
            url: s.url,
            urlId: 0,
            audioGroupIds: s.audioGroupIds,
            textGroupIds: s.textGroupIds,
        };
        this.hls.trigger(u.LEVEL_SWITCHING, c);
        let d = s.details;
        if (!d || d.live) {
            let e = this.switchParams(s.uri, null == r ? void 0 : r.details, d);
            this.loadPlaylist(e);
        }
    }
    get manualLevel() {
        return this.manualLevelIndex;
    }
    set manualLevel(e) {
        (this.manualLevelIndex = e),
            void 0 === this._startLevel && (this._startLevel = e),
            -1 !== e && (this.level = e);
    }
    get firstLevel() {
        return this._firstLevel;
    }
    set firstLevel(e) {
        this._firstLevel = e;
    }
    get startLevel() {
        if (void 0 === this._startLevel) {
            let e = this.hls.config.startLevel;
            return void 0 !== e ? e : this.hls.firstAutoLevel;
        }
        return this._startLevel;
    }
    set startLevel(e) {
        this._startLevel = e;
    }
    get pathways() {
        return this.steering ? this.steering.pathways() : [];
    }
    get pathwayPriority() {
        return this.steering ? this.steering.pathwayPriority : null;
    }
    set pathwayPriority(e) {
        if (this.steering) {
            let t = this.steering.pathways(),
                n = e.filter((e) => -1 !== t.indexOf(e));
            if (e.length < 1)
                return void this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
            this.steering.pathwayPriority = n;
        }
    }
    onError(e, t) {
        !t.fatal && t.context && t.context.type === f && t.context.level === this.level && this.checkRetry(t);
    }
    onFragBuffered(e, { frag: t }) {
        if (void 0 !== t && t.type === m) {
            let e = t.elementaryStreams;
            if (!Object.keys(e).some((t) => !!e[t])) return;
            let n = this._levels[t.level];
            null != n &&
                n.loadError &&
                (this.log(`Resetting level error count of ${n.loadError} on frag buffered`), (n.loadError = 0));
        }
    }
    onLevelLoaded(e, t) {
        var n, r;
        let { level: i, details: s } = t,
            a = t.levelInfo;
        if (!a) {
            this.warn(`Invalid level index ${i}`),
                null != (r = t.deliveryDirectives) && r.skip && (s.deltaUpdateFailed = !0);
            return;
        }
        if (a === this.currentLevel || t.withoutMultiVariant) {
            0 === a.fragmentError && (a.loadError = 0);
            let e = a.details;
            e === t.details && e.advanced && (e = void 0), this.playlistLoaded(i, t, e);
        } else null != (n = t.deliveryDirectives) && n.skip && (s.deltaUpdateFailed = !0);
    }
    loadPlaylist(e) {
        super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
    }
    loadingPlaylist(e, t) {
        super.loadingPlaylist(e, t);
        let n = this.getUrlWithDirectives(e.uri, t),
            r = this.currentLevelIndex,
            i = e.attrs["PATHWAY-ID"],
            s = e.details,
            a = null == s ? void 0 : s.age;
        this.log(
            `Loading level index ${r}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${i ? " Pathway " + i : ""}${a && s.live ? " age " + a.toFixed(1) + (s.type ? " " + s.type : "") : ""} ${n}`,
        ),
            this.hls.trigger(u.LEVEL_LOADING, {
                url: n,
                level: r,
                levelInfo: e,
                pathwayId: e.attrs["PATHWAY-ID"],
                id: 0,
                deliveryDirectives: t || null,
            });
    }
    get nextLoadLevel() {
        return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
    }
    set nextLoadLevel(e) {
        (this.level = e), -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e);
    }
    removeLevel(e) {
        var t;
        if (1 === this._levels.length) return;
        let n = this._levels.filter(
            (t, n) =>
                n !== e ||
                (this.steering && this.steering.removeLevel(t),
                t === this.currentLevel &&
                    ((this.currentLevel = null),
                    (this.currentLevelIndex = -1),
                    t.details && t.details.fragments.forEach((e) => (e.level = -1))),
                !1),
        );
        rb(n),
            (this._levels = n),
            this.currentLevelIndex > -1 &&
                null != (t = this.currentLevel) &&
                t.details &&
                (this.currentLevelIndex = this.currentLevel.details.fragments[0].level),
            this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
        let r = n.length - 1;
        (this._firstLevel = Math.min(this._firstLevel, r)),
            this._startLevel && (this._startLevel = Math.min(this._startLevel, r)),
            this.hls.trigger(u.LEVELS_UPDATED, { levels: n });
    }
    onLevelsUpdated(e, { levels: t }) {
        this._levels = t;
    }
    checkMaxAutoUpdated() {
        let { autoLevelCapping: e, maxAutoLevel: t, maxHdcpLevel: n } = this.hls;
        this._maxAutoLevel !== t &&
            ((this._maxAutoLevel = t),
            this.hls.trigger(u.MAX_AUTO_LEVEL_UPDATED, {
                autoLevelCapping: e,
                levels: this.levels,
                maxAutoLevel: t,
                minAutoLevel: this.hls.minAutoLevel,
                maxHdcpLevel: n,
            }));
    }
}
function ul(e) {
    let t = {};
    e.forEach((e) => {
        let n = e.groupId || "";
        (e.id = t[n] = t[n] || 0), t[n]++;
    });
}
function uu() {
    return self.SourceBuffer || self.WebKitSourceBuffer;
}
function uc() {
    if (!k()) return !1;
    let e = uu();
    return (
        !e || (e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove)
    );
}
function ud() {
    if (!uc()) return !1;
    let e = k();
    return (
        "function" == typeof (null == e ? void 0 : e.isTypeSupported) &&
        (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((t) => e.isTypeSupported(eF(t, "video"))) ||
            ["mp4a.40.2", "fLaC"].some((t) => e.isTypeSupported(eF(t, "audio"))))
    );
}
function u_() {
    var e;
    let t = uu();
    return "function" == typeof (null == t || null == (e = t.prototype) ? void 0 : e.changeType);
}
let uf = 100;
class uh extends rJ {
    constructor(e, t, n) {
        super(e, t, n, "stream-controller", m),
            (this.audioCodecSwap = !1),
            (this.level = -1),
            (this._forceStartLoad = !1),
            (this._hasEnoughToStart = !1),
            (this.altAudio = 0),
            (this.audioOnly = !1),
            (this.fragPlaying = null),
            (this.fragLastKbps = 0),
            (this.couldBacktrack = !1),
            (this.backtrackFragment = null),
            (this.audioCodecSwitch = !1),
            (this.videoBuffer = null),
            (this.onMediaPlaying = () => {
                this.tick();
            }),
            (this.onMediaSeeked = () => {
                let e = this.media,
                    t = e ? e.currentTime : null;
                if (null === t || !i(t) || (this.log(`Media seeked to ${t.toFixed(3)}`), !this.getBufferedFrag(t)))
                    return;
                let n = this.getFwdBufferInfoAtPos(e, t, m, 0);
                null === n || 0 === n.len
                    ? this.warn(`Main forward buffer length at ${t} on "seeked" event ${n ? n.len : "empty"})`)
                    : this.tick();
            }),
            this.registerListeners();
    }
    registerListeners() {
        super.registerListeners();
        let { hls: e } = this;
        e.on(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(u.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
            e.on(u.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.on(u.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
            e.on(u.BUFFER_CREATED, this.onBufferCreated, this),
            e.on(u.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.on(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(u.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    unregisterListeners() {
        super.unregisterListeners();
        let { hls: e } = this;
        e.off(u.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(u.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(u.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
            e.off(u.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.off(u.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
            e.off(u.BUFFER_CREATED, this.onBufferCreated, this),
            e.off(u.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.off(u.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(u.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    onHandlerDestroying() {
        (this.onMediaPlaying = this.onMediaSeeked = null), this.unregisterListeners(), super.onHandlerDestroying();
    }
    startLoad(e, t) {
        if (this.levels) {
            let { lastCurrentTime: n, hls: r } = this;
            if ((this.stopLoad(), this.setInterval(uf), (this.level = -1), !this.startFragRequested)) {
                let e = r.startLevel;
                -1 === e &&
                    (r.config.testBandwidth && this.levels.length > 1
                        ? ((e = 0), (this.bitrateTest = !0))
                        : (e = r.firstAutoLevel)),
                    (r.nextLoadLevel = e),
                    (this.level = r.loadLevel),
                    (this._hasEnoughToStart = !!t);
            }
            n > 0 &&
                -1 === e &&
                !t &&
                (this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`), (e = n)),
                (this.state = rH),
                (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
                (this.startPosition = t ? -1 : e),
                this.tick();
        } else (this._forceStartLoad = !0), (this.state = rV);
    }
    stopLoad() {
        (this._forceStartLoad = !1), super.stopLoad();
    }
    doTick() {
        switch (this.state) {
            case rQ: {
                let { levels: e, level: t } = this,
                    n = null == e ? void 0 : e[t],
                    r = null == n ? void 0 : n.details;
                if (!r || (r.live && (this.levelLastLoaded !== n || this.waitForLive(n))))
                    this.hls.nextLoadLevel !== this.level && (this.state = rH);
                else {
                    if (this.waitForCdnTuneIn(r)) break;
                    this.state = rH;
                }
                break;
            }
            case rW:
                this.checkRetryDate();
        }
        this.state === rH && this.doTickIdle(), this.onTickEnd();
    }
    onTickEnd() {
        var e;
        super.onTickEnd(),
            null != (e = this.media) &&
                e.readyState &&
                !1 === this.media.seeking &&
                (this.lastCurrentTime = this.media.currentTime),
            this.checkFragmentChanged();
    }
    doTickIdle() {
        let { hls: e, levelLastLoaded: t, levels: n, media: r } = this;
        if (
            null === t ||
            (!r && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch)) ||
            (this.altAudio && this.audioOnly)
        )
            return;
        let i = this.buffering ? e.nextLoadLevel : e.loadLevel;
        if (!(null != n && n[i])) return;
        let s = n[i],
            a = this.getMainFwdBufferInfo();
        if (null === a) return;
        let o = this.getLevelDetails();
        if (o && this._streamEnded(a, o)) {
            let e = {};
            2 === this.altAudio && (e.type = "video"), this.hls.trigger(u.BUFFER_EOS, e), (this.state = rq);
            return;
        }
        if (!this.buffering) return;
        e.loadLevel !== i && -1 === e.manualLevel && this.log(`Adapting to level ${i} from level ${this.level}`),
            (this.level = e.nextLoadLevel = i);
        let l = s.details;
        if (!l || this.state === rQ || this.waitForLive(s)) {
            (this.level = i), (this.state = rQ), (this.startFragRequested = !1);
            return;
        }
        let c = a.len,
            d = this.getMaxBufferLength(s.maxBitrate);
        if (c >= d) return;
        this.backtrackFragment && this.backtrackFragment.start > a.end && (this.backtrackFragment = null);
        let _ = this.backtrackFragment ? this.backtrackFragment.start : a.end,
            f = this.getNextFragment(_, l);
        if (this.couldBacktrack && !this.fragPrevious && f && Z(f) && this.fragmentTracker.getState(f) !== t3) {
            var h;
            let e = (null != (h = this.backtrackFragment) ? h : f).sn - l.startSN,
                t = l.fragments[e - 1];
            t && f.cc === t.cc && ((f = t), this.fragmentTracker.removeFragment(t));
        } else this.backtrackFragment && a.len && (this.backtrackFragment = null);
        if (f && this.isLoopLoading(f, _)) {
            if (!f.gap) {
                let e = this.audioOnly && !this.altAudio ? K : $,
                    t = (e === $ ? this.videoBuffer : this.mediaBuffer) || this.media;
                t && this.afterBufferFlushed(t, e, m);
            }
            f = this.getNextFragmentLoopLoading(f, l, a, m, d);
        }
        f &&
            (!f.initSegment || f.initSegment.data || this.bitrateTest || (f = f.initSegment),
            this.loadFragment(f, s, _));
    }
    loadFragment(e, t, n) {
        let r = this.fragmentTracker.getState(e);
        r === t0 || r === t2
            ? Z(e)
                ? this.bitrateTest
                    ? (this.log(
                          `Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`,
                      ),
                      this._loadBitrateTestFrag(e, t))
                    : super.loadFragment(e, t, n)
                : this._loadInitSegment(e, t)
            : this.clearTrackerIfNeeded(e);
    }
    getBufferedFrag(e) {
        return this.fragmentTracker.getBufferedFrag(e, m);
    }
    followingBufferedFrag(e) {
        return e ? this.getBufferedFrag(e.end + 0.5) : null;
    }
    immediateLevelSwitch() {
        this.abortCurrentFrag(), this.flushMainBuffer(0, 1 / 0);
    }
    nextLevelSwitch() {
        let { levels: e, media: t } = this;
        if (null != t && t.readyState) {
            let n,
                r = this.getAppendedFrag(t.currentTime);
            r && r.start > 1 && this.flushMainBuffer(0, r.start - 1);
            let i = this.getLevelDetails();
            if (null != i && i.live) {
                let e = this.getMainFwdBufferInfo();
                if (!e || e.len < 2 * i.targetduration) return;
            }
            if (!t.paused && e) {
                let t = e[this.hls.nextLoadLevel],
                    r = this.fragLastKbps;
                n = r && this.fragCurrent ? (this.fragCurrent.duration * t.maxBitrate) / (1e3 * r) + 1 : 0;
            } else n = 0;
            let s = this.getBufferedFrag(t.currentTime + n);
            if (s) {
                let e = this.followingBufferedFrag(s);
                if (e) {
                    this.abortCurrentFrag();
                    let t = e.maxStartPTS ? e.maxStartPTS : e.start,
                        n = e.duration,
                        r = Math.max(
                            s.end,
                            t +
                                Math.min(
                                    Math.max(
                                        n - this.config.maxFragLookUpTolerance,
                                        n * (this.couldBacktrack ? 0.5 : 0.125),
                                    ),
                                    n * (this.couldBacktrack ? 0.75 : 0.25),
                                ),
                        );
                    this.flushMainBuffer(r, 1 / 0);
                }
            }
        }
    }
    abortCurrentFrag() {
        let e = this.fragCurrent;
        switch (
            ((this.fragCurrent = null),
            (this.backtrackFragment = null),
            e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
            this.state)
        ) {
            case rj:
            case rY:
            case rW:
            case r$:
            case rz:
                this.state = rH;
        }
        this.nextLoadPosition = this.getLoadPosition();
    }
    flushMainBuffer(e, t) {
        super.flushMainBuffer(e, t, 2 === this.altAudio ? "video" : null);
    }
    onMediaAttached(e, t) {
        super.onMediaAttached(e, t);
        let n = t.media;
        rG(n, "playing", this.onMediaPlaying), rG(n, "seeked", this.onMediaSeeked);
    }
    onMediaDetaching(e, t) {
        let { media: n } = this;
        n && (rF(n, "playing", this.onMediaPlaying), rF(n, "seeked", this.onMediaSeeked)),
            (this.videoBuffer = null),
            (this.fragPlaying = null),
            super.onMediaDetaching(e, t),
            t.transferMedia || (this._hasEnoughToStart = !1);
    }
    onManifestLoading() {
        super.onManifestLoading(),
            this.log("Trigger BUFFER_RESET"),
            this.hls.trigger(u.BUFFER_RESET, void 0),
            (this.couldBacktrack = !1),
            (this.fragLastKbps = 0),
            (this.fragPlaying = this.backtrackFragment = null),
            (this.altAudio = 0),
            (this.audioOnly = !1);
    }
    onManifestParsed(e, t) {
        let n = !1,
            r = !1;
        for (let e = 0; e < t.levels.length; e++) {
            let i = t.levels[e].audioCodec;
            i && ((n = n || -1 !== i.indexOf("mp4a.40.2")), (r = r || -1 !== i.indexOf("mp4a.40.5")));
        }
        (this.audioCodecSwitch = n && r && !u_()),
            this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
            (this.levels = t.levels),
            (this.startFragRequested = !1);
    }
    onLevelLoading(e, t) {
        let { levels: n } = this;
        if (!n || this.state !== rH) return;
        let r = t.levelInfo;
        (!r.details ||
            (r.details.live && (this.levelLastLoaded !== r || r.details.expired)) ||
            this.waitForCdnTuneIn(r.details)) &&
            (this.state = rQ);
    }
    onLevelLoaded(e, t) {
        var n, r;
        let { levels: i, startFragRequested: s } = this,
            a = t.level,
            o = t.details,
            l = o.totalduration;
        if (!i) return void this.warn(`Levels were reset while loading level ${a}`);
        this.log(
            `Level ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${l}`,
        );
        let c = t.levelInfo,
            d = this.fragCurrent;
        d && (this.state === rY || this.state === rW) && d.level !== t.level && d.loader && this.abortCurrentFrag();
        let _ = 0;
        if (o.live || (null != (n = c.details) && n.live)) {
            if ((this.checkLiveUpdate(o), o.deltaUpdateFailed)) return;
            _ = this.alignPlaylists(o, c.details, null == (r = this.levelLastLoaded) ? void 0 : r.details);
        }
        if (
            ((c.details = o),
            (this.levelLastLoaded = c),
            s || this.setStartPosition(o, _),
            this.hls.trigger(u.LEVEL_UPDATED, { details: o, level: a }),
            this.state === rQ)
        ) {
            if (this.waitForCdnTuneIn(o)) return;
            this.state = rH;
        }
        s && o.live && this.synchronizeToLiveEdge(o), this.tick();
    }
    synchronizeToLiveEdge(e) {
        let { config: t, media: n } = this;
        if (!n) return;
        let r = this.hls.liveSyncPosition,
            i = this.getLoadPosition(),
            s = e.fragmentStart,
            a = e.edge,
            o = i >= s - t.maxFragLookUpTolerance && i <= a;
        if (null !== r && n.duration > r && (i < r || !o)) {
            let s =
                void 0 !== t.liveMaxLatencyDuration
                    ? t.liveMaxLatencyDuration
                    : t.liveMaxLatencyDurationCount * e.targetduration;
            if (
                ((!o && n.readyState < 4) || i < a - s) &&
                (this._hasEnoughToStart || (this.nextLoadPosition = r), n.readyState)
            )
                if (
                    (this.warn(
                        `Playback: ${i.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${r.toFixed(3)}`,
                    ),
                    "buffered" === this.config.liveSyncMode)
                ) {
                    var l;
                    let e = nE.bufferInfo(n, r, 0);
                    if (!(null != (l = e.buffered) && l.length) || e.start <= i) {
                        n.currentTime = r;
                        return;
                    }
                    let { nextStart: t } = nE.bufferedInfo(e.buffered, i, 0);
                    t && (n.currentTime = t);
                } else n.currentTime = r;
        }
    }
    _handleFragmentLoadProgress(e) {
        var t;
        let n = e.frag,
            { part: r, payload: i } = e,
            { levels: s } = this;
        if (!s)
            return void this.warn(
                `Levels were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`,
            );
        let a = s[n.level];
        if (!a) return void this.warn(`Level ${n.level} not found on progress`);
        let o = a.details;
        if (!o) {
            this.warn(`Dropping fragment ${n.sn} of level ${n.level} after level details were reset`),
                this.fragmentTracker.removeFragment(n);
            return;
        }
        let l = a.videoCodec,
            u = o.PTSKnown || !o.live,
            c = null == (t = n.initSegment) ? void 0 : t.data,
            d = this._getAudioCodec(a),
            _ = (this.transmuxer =
                this.transmuxer ||
                new sV(this.hls, m, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this))),
            f = r ? r.index : -1,
            h = -1 !== f,
            p = new nh(n.level, n.sn, n.stats.chunkCount, i.byteLength, f, h),
            E = this.initPTS[n.cc];
        _.push(i, c, d, l, n, r, o.totalduration, u, p, E);
    }
    onAudioTrackSwitching(e, t) {
        let n = this.hls,
            r = 2 === this.altAudio;
        if (tN(t.url, n)) this.altAudio = 1;
        else {
            if (this.mediaBuffer !== this.media) {
                this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),
                    (this.mediaBuffer = this.media);
                let e = this.fragCurrent;
                e &&
                    (this.log("Switching to main audio track, cancel main fragment load"),
                    e.abortRequests(),
                    this.fragmentTracker.removeFragment(e)),
                    this.resetTransmuxer(),
                    this.resetLoadingState();
            } else this.audioOnly && this.resetTransmuxer();
            if (r) {
                this.fragmentTracker.removeAllFragments(),
                    n.once(u.BUFFER_FLUSHED, () => {
                        this.hls && this.hls.trigger(u.AUDIO_TRACK_SWITCHED, t);
                    }),
                    n.trigger(u.BUFFER_FLUSHING, { startOffset: 0, endOffset: 1 / 0, type: null });
                return;
            }
            n.trigger(u.AUDIO_TRACK_SWITCHED, t);
        }
    }
    onAudioTrackSwitched(e, t) {
        let n = tN(t.url, this.hls);
        if (n) {
            let e = this.videoBuffer;
            e &&
                this.mediaBuffer !== e &&
                (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),
                (this.mediaBuffer = e));
        }
        (this.altAudio = 2 * !!n), this.tick();
    }
    onBufferCreated(e, t) {
        let n,
            r,
            i = t.tracks,
            s = !1;
        for (let e in i) {
            let t = i[e];
            if ("main" === t.id) {
                if (((r = e), (n = t), "video" === e)) {
                    let t = i[e];
                    t && (this.videoBuffer = t.buffer);
                }
            } else s = !0;
        }
        s && n
            ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`),
              (this.mediaBuffer = n.buffer))
            : (this.mediaBuffer = this.media);
    }
    onFragBuffered(e, t) {
        let { frag: n, part: r } = t,
            i = n.type === m;
        if (i) {
            if (this.fragContextChanged(n)) {
                this.warn(
                    `Fragment ${n.sn}${r ? " p: " + r.index : ""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}`,
                ),
                    this.state === rz && (this.state = rH);
                return;
            }
            let e = r ? r.stats : n.stats;
            (this.fragLastKbps = Math.round((8 * e.total) / (e.buffering.end - e.loading.first))),
                Z(n) && (this.fragPrevious = n),
                this.fragBufferedComplete(n, r);
        }
        let s = this.media;
        s &&
            (!this._hasEnoughToStart &&
                nE.getBuffered(s).length &&
                ((this._hasEnoughToStart = !0), this.seekToStartPos()),
            i && this.tick());
    }
    get hasEnoughToStart() {
        return this._hasEnoughToStart;
    }
    onError(e, t) {
        var n;
        if (t.fatal) {
            this.state = rZ;
            return;
        }
        switch (t.details) {
            case l.FRAG_GAP:
            case l.FRAG_PARSING_ERROR:
            case l.FRAG_DECRYPT_ERROR:
            case l.FRAG_LOAD_ERROR:
            case l.FRAG_LOAD_TIMEOUT:
            case l.KEY_LOAD_ERROR:
            case l.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(m, t);
                break;
            case l.LEVEL_LOAD_ERROR:
            case l.LEVEL_LOAD_TIMEOUT:
            case l.LEVEL_PARSING_ERROR:
                t.levelRetry ||
                    this.state !== rQ ||
                    (null == (n = t.context) ? void 0 : n.type) !== f ||
                    (this.state = rH);
                break;
            case l.BUFFER_ADD_CODEC_ERROR:
            case l.BUFFER_APPEND_ERROR:
                if ("main" !== t.parent) return;
                this.reduceLengthAndFlushBuffer(t) && this.resetLoadingState();
                break;
            case l.BUFFER_FULL_ERROR:
                if ("main" !== t.parent) return;
                this.reduceLengthAndFlushBuffer(t) &&
                    (!this.config.interstitialsController && this.config.assetPlayerId
                        ? (this._hasEnoughToStart = !0)
                        : this.flushMainBuffer(0, 1 / 0));
                break;
            case l.INTERNAL_EXCEPTION:
                this.recoverWorkerError(t);
        }
    }
    onFragLoadEmergencyAborted() {
        (this.state = rH),
            this._hasEnoughToStart || ((this.startFragRequested = !1), (this.nextLoadPosition = this.lastCurrentTime)),
            this.tickImmediate();
    }
    onBufferFlushed(e, { type: t }) {
        if (t !== K || !this.altAudio) {
            let e = (t === $ ? this.videoBuffer : this.mediaBuffer) || this.media;
            e && (this.afterBufferFlushed(e, t, m), this.tick());
        }
    }
    onLevelsUpdated(e, t) {
        this.level > -1 &&
            this.fragCurrent &&
            ((this.level = this.fragCurrent.level),
            -1 === this.level && this.resetWhenMissingContext(this.fragCurrent)),
            (this.levels = t.levels);
    }
    swapAudioCodec() {
        this.audioCodecSwap = !this.audioCodecSwap;
    }
    seekToStartPos() {
        let { media: e } = this;
        if (!e) return;
        let t = e.currentTime,
            n = this.startPosition;
        if (n >= 0 && t < n) {
            if (e.seeking) return void this.log(`could not seek to ${n}, already seeking at ${t}`);
            let r = this.timelineOffset;
            r && n && (n += r);
            let i = this.getLevelDetails(),
                s = nE.getBuffered(e),
                a = s.length ? s.start(0) : 0,
                o = a - n,
                l = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
            (this.config.startOnSegmentBoundary ||
                (o > 0 && (o < l || (this.loadingParts && o < 2 * ((null == i ? void 0 : i.partTarget) || 0))))) &&
                (this.log(`adjusting start position by ${o} to match buffer start`),
                (n += o),
                (this.startPosition = n)),
                t < n &&
                    (this.log(`seek to target start position ${n} from current time ${t} buffer start ${a}`),
                    (e.currentTime = n));
        }
    }
    _getAudioCodec(e) {
        let t = this.config.defaultAudioCodec || e.audioCodec;
        return (
            this.audioCodecSwap &&
                t &&
                (this.log("Swapping audio codec"), (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
            t
        );
    }
    _loadBitrateTestFrag(e, t) {
        (e.bitrateTest = !0),
            this._doFragLoad(e, t)
                .then((e) => {
                    let { hls: n } = this,
                        r = null == e ? void 0 : e.frag;
                    if (!r || this.fragContextChanged(r)) return;
                    (t.fragmentError = 0), (this.state = rH), (this.startFragRequested = !1), (this.bitrateTest = !1);
                    let i = r.stats;
                    (i.parsing.start = i.parsing.end = i.buffering.start = i.buffering.end = self.performance.now()),
                        n.trigger(u.FRAG_LOADED, e),
                        (r.bitrateTest = !1);
                })
                .catch((t) => {
                    this.state !== rV && this.state !== rZ && (this.warn(t), this.resetFragmentLoading(e));
                });
    }
    _handleTransmuxComplete(e) {
        let t = this.playlistType,
            { hls: n } = this,
            { remuxResult: r, chunkMeta: s } = e,
            a = this.getCurrentContext(s);
        if (!a) return void this.resetWhenMissingContext(s);
        let { frag: o, part: l, level: c } = a,
            { video: d, text: _, id3: f, initSegment: h } = r,
            { details: p } = c,
            m = this.altAudio ? void 0 : r.audio;
        if (this.fragContextChanged(o)) return void this.fragmentTracker.removeFragment(o);
        if (((this.state = r$), h)) {
            let e = h.tracks;
            if (e) {
                let r = o.initSegment || o;
                if (this.unhandledEncryptionError(h, o)) return;
                this._bufferInitSegment(c, e, r, s),
                    n.trigger(u.FRAG_PARSING_INIT_SEGMENT, { frag: r, id: t, tracks: e });
            }
            let r = h.initPTS,
                a = h.timescale,
                l = this.initPTS[o.cc];
            if (i(r) && (!l || l.baseTime !== r || l.timescale !== a)) {
                let e = h.trackId;
                (this.initPTS[o.cc] = { baseTime: r, timescale: a, trackId: e }),
                    n.trigger(u.INIT_PTS_FOUND, { frag: o, id: t, initPTS: r, timescale: a, trackId: e });
            }
        }
        if (d && p) {
            m && "audiovideo" === d.type && this.logMuxedErr(o);
            let e = p.fragments[o.sn - 1 - p.startSN],
                t = o.sn === p.startSN,
                n = !e || o.cc > e.cc;
            if (!1 !== r.independent) {
                let { startPTS: e, endPTS: r, startDTS: i, endDTS: a } = d;
                if (l) l.elementaryStreams[d.type] = { startPTS: e, endPTS: r, startDTS: i, endDTS: a };
                else if (
                    (d.firstKeyFrame && d.independent && 1 === s.id && !n && (this.couldBacktrack = !0),
                    d.dropped && d.independent)
                ) {
                    let i = this.getMainFwdBufferInfo(),
                        s = (i ? i.end : this.getLoadPosition()) + this.config.maxBufferHole,
                        l = d.firstKeyFramePTS ? d.firstKeyFramePTS : e;
                    if (!t && s < l - this.config.maxBufferHole && !n) return void this.backtrack(o);
                    n && (o.gap = !0), o.setElementaryStreamInfo(d.type, o.start, r, o.start, a, !0);
                } else t && e - (p.appliedTimelineOffset || 0) > l3 && (o.gap = !0);
                o.setElementaryStreamInfo(d.type, e, r, i, a),
                    this.backtrackFragment && (this.backtrackFragment = o),
                    this.bufferFragmentData(d, o, l, s, t || n);
            } else {
                if (!t && !n) return void this.backtrack(o);
                o.gap = !0;
            }
        }
        if (m) {
            let { startPTS: e, endPTS: t, startDTS: n, endDTS: r } = m;
            l && (l.elementaryStreams[K] = { startPTS: e, endPTS: t, startDTS: n, endDTS: r }),
                o.setElementaryStreamInfo(K, e, t, n, r),
                this.bufferFragmentData(m, o, l, s);
        }
        if (p && null != f && f.samples.length) {
            let e = { id: t, frag: o, details: p, samples: f.samples };
            n.trigger(u.FRAG_PARSING_METADATA, e);
        }
        if (p && _) {
            let e = { id: t, frag: o, details: p, samples: _.samples };
            n.trigger(u.FRAG_PARSING_USERDATA, e);
        }
    }
    logMuxedErr(e) {
        this.warn(`${Z(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
    }
    _bufferInitSegment(e, t, n, r) {
        if (this.state !== r$) return;
        (this.audioOnly = !!t.audio && !t.video),
            this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(n));
        let { audio: i, video: s, audiovideo: a } = t;
        if (i) {
            let n = e.audioCodec,
                r = e$(i.codec, n);
            "mp4a" === r && (r = "mp4a.40.5");
            let s = navigator.userAgent.toLowerCase();
            if (this.audioCodecSwitch) {
                r && (r = -1 !== r.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
                let e = i.metadata;
                e &&
                    "channelCount" in e &&
                    1 !== (e.channelCount || 1) &&
                    -1 === s.indexOf("firefox") &&
                    (r = "mp4a.40.5");
            }
            r &&
                -1 !== r.indexOf("mp4a.40.5") &&
                -1 !== s.indexOf("android") &&
                "audio/mpeg" !== i.container &&
                ((r = "mp4a.40.2"), this.log(`Android: force audio codec to ${r}`)),
                n && n !== r && this.log(`Swapping manifest audio codec "${n}" for "${r}"`),
                (i.levelCodec = r),
                (i.id = m),
                this.log(
                    `Init audio buffer, container:${i.container}, codecs[selected/level/parsed]=[${r || ""}/${n || ""}/${i.codec}]`,
                ),
                delete t.audiovideo;
        }
        if (s) {
            (s.levelCodec = e.videoCodec), (s.id = m);
            let n = s.codec;
            if ((null == n ? void 0 : n.length) === 4)
                switch (n) {
                    case "hvc1":
                    case "hev1":
                        s.codec = "hvc1.1.6.L120.90";
                        break;
                    case "av01":
                        s.codec = "av01.0.04M.08";
                        break;
                    case "avc1":
                        s.codec = "avc1.42e01e";
                }
            this.log(
                `Init video buffer, container:${s.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${n}]${s.codec !== n ? " parsed-corrected=" + s.codec : ""}${s.supplemental ? " supplemental=" + s.supplemental : ""}`,
            ),
                delete t.audiovideo;
        }
        a &&
            (this.log(
                `Init audiovideo buffer, container:${a.container}, codecs[level/parsed]=[${e.codecs}/${a.codec}]`,
            ),
            delete t.video,
            delete t.audio);
        let o = Object.keys(t);
        if (o.length) {
            if ((this.hls.trigger(u.BUFFER_CODECS, t), !this.hls)) return;
            o.forEach((e) => {
                let i = t[e].initSegment;
                null != i &&
                    i.byteLength &&
                    this.hls.trigger(u.BUFFER_APPENDING, {
                        type: e,
                        data: i,
                        frag: n,
                        part: null,
                        chunkMeta: r,
                        parent: n.type,
                    });
            });
        }
        this.tickImmediate();
    }
    getMainFwdBufferInfo() {
        let e = this.mediaBuffer && 2 === this.altAudio ? this.mediaBuffer : this.media;
        return this.getFwdBufferInfo(e, m);
    }
    get maxBufferLength() {
        let { levels: e, level: t } = this,
            n = null == e ? void 0 : e[t];
        return n ? this.getMaxBufferLength(n.maxBitrate) : this.config.maxBufferLength;
    }
    backtrack(e) {
        (this.couldBacktrack = !0),
            (this.backtrackFragment = e),
            this.resetTransmuxer(),
            this.flushBufferGap(e),
            this.fragmentTracker.removeFragment(e),
            (this.fragPrevious = null),
            (this.nextLoadPosition = e.start),
            (this.state = rH);
    }
    checkFragmentChanged() {
        let e = this.media,
            t = null;
        if (e && e.readyState > 1 && !1 === e.seeking) {
            let n = e.currentTime;
            if (
                (nE.isBuffered(e, n)
                    ? (t = this.getAppendedFrag(n))
                    : nE.isBuffered(e, n + 0.1) && (t = this.getAppendedFrag(n + 0.1)),
                t)
            ) {
                this.backtrackFragment = null;
                let e = this.fragPlaying,
                    n = t.level;
                (!e || t.sn !== e.sn || e.level !== n) &&
                    ((this.fragPlaying = t),
                    this.hls.trigger(u.FRAG_CHANGED, { frag: t }),
                    (e && e.level === n) || this.hls.trigger(u.LEVEL_SWITCHED, { level: n }));
            }
        }
    }
    get nextLevel() {
        let e = this.nextBufferedFrag;
        return e ? e.level : -1;
    }
    get currentFrag() {
        var e;
        if (this.fragPlaying) return this.fragPlaying;
        let t = (null == (e = this.media) ? void 0 : e.currentTime) || this.lastCurrentTime;
        return i(t) ? this.getAppendedFrag(t) : null;
    }
    get currentProgramDateTime() {
        var e;
        let t = (null == (e = this.media) ? void 0 : e.currentTime) || this.lastCurrentTime;
        if (i(t)) {
            let e = this.getLevelDetails(),
                n = this.currentFrag || (e ? tD(null, e.fragments, t) : null);
            if (n) {
                let e = n.programDateTime;
                if (null !== e) return new Date(e + (t - n.start) * 1e3);
            }
        }
        return null;
    }
    get currentLevel() {
        let e = this.currentFrag;
        return e ? e.level : -1;
    }
    get nextBufferedFrag() {
        let e = this.currentFrag;
        return e ? this.followingBufferedFrag(e) : null;
    }
    get forceStartLoad() {
        return this._forceStartLoad;
    }
}
class up extends R {
    constructor(e, t) {
        super("key-loader", t),
            (this.config = void 0),
            (this.keyIdToKeyInfo = {}),
            (this.emeController = null),
            (this.config = e);
    }
    abort(e) {
        for (let n in this.keyIdToKeyInfo) {
            let r = this.keyIdToKeyInfo[n].loader;
            if (r) {
                var t;
                if (e && e !== (null == (t = r.context) ? void 0 : t.frag.type)) return;
                r.abort();
            }
        }
    }
    detach() {
        for (let e in this.keyIdToKeyInfo) {
            let t = this.keyIdToKeyInfo[e];
            (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyIdToKeyInfo[e];
        }
    }
    destroy() {
        for (let e in (this.detach(), this.keyIdToKeyInfo)) {
            let t = this.keyIdToKeyInfo[e].loader;
            t && t.destroy();
        }
        this.keyIdToKeyInfo = {};
    }
    createKeyLoadError(e, t = l.KEY_LOAD_ERROR, n, r, i) {
        return new n_({
            type: o.NETWORK_ERROR,
            details: t,
            fatal: !1,
            frag: e,
            response: i,
            error: n,
            networkDetails: r,
        });
    }
    loadClear(e, t, n) {
        if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
            if (t.length)
                for (let r = 0, i = t.length; r < i; r++) {
                    let s = t[r];
                    if ((e.cc <= s.cc && (!Z(e) || !Z(s) || e.sn < s.sn)) || (!n && r == i - 1))
                        return this.emeController.selectKeySystemFormat(s).then((e) => {
                            if (!this.emeController) return;
                            s.setKeyFormat(e);
                            let t = nZ(e);
                            if (t) return this.emeController.getKeySystemAccess([t]);
                        });
                }
            if (this.config.requireKeySystemAccessOnStart) {
                let e = nQ(this.config);
                if (e.length) return this.emeController.getKeySystemAccess(e);
            }
        }
        return null;
    }
    load(e) {
        return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled
            ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t))
            : this.loadInternal(e);
    }
    loadInternal(e, t) {
        var n, r;
        t && e.setKeyFormat(t);
        let i = e.decryptdata;
        if (!i) {
            let n = Error(
                t
                    ? `Expected frag.decryptdata to be defined after setting format ${t}`
                    : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`,
            );
            return Promise.reject(this.createKeyLoadError(e, l.KEY_LOAD_ERROR, n));
        }
        let s = i.uri;
        if (!s) return Promise.reject(this.createKeyLoadError(e, l.KEY_LOAD_ERROR, Error(`Invalid key URI: "${s}"`)));
        let a = um(i),
            o = this.keyIdToKeyInfo[a];
        if (null != (n = o) && n.decryptdata.key)
            return (i.key = o.decryptdata.key), Promise.resolve({ frag: e, keyInfo: o });
        if (this.emeController && null != (r = o) && r.keyLoadPromise)
            switch (this.emeController.getKeyStatus(o.decryptdata)) {
                case "usable":
                case "usable-in-future":
                    return o.keyLoadPromise.then((t) => {
                        let { keyInfo: n } = t;
                        return (i.key = n.decryptdata.key), { frag: e, keyInfo: n };
                    });
            }
        switch (
            (this.log(
                `${this.keyIdToKeyInfo[a] ? "Rel" : "L"}oading${i.keyId ? " keyId: " + B(i.keyId) : ""} URI: ${i.uri} from ${e.type} ${e.level}`,
            ),
            (o = this.keyIdToKeyInfo[a] =
                { decryptdata: i, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }),
            i.method)
        ) {
            case "SAMPLE-AES":
            case "SAMPLE-AES-CENC":
            case "SAMPLE-AES-CTR":
                if ("identity" === i.keyFormat) return this.loadKeyHTTP(o, e);
                return this.loadKeyEME(o, e);
            case "AES-128":
            case "AES-256":
            case "AES-256-CTR":
                return this.loadKeyHTTP(o, e);
            default:
                return Promise.reject(
                    this.createKeyLoadError(
                        e,
                        l.KEY_LOAD_ERROR,
                        Error(`Key supplied with unsupported METHOD: "${i.method}"`),
                    ),
                );
        }
    }
    loadKeyEME(e, t) {
        let n = { frag: t, keyInfo: e };
        return this.emeController && this.config.emeEnabled
            ? (e.keyLoadPromise = this.emeController.loadKey(n).then((t) => ((e.mediaKeySessionContext = t), n))).catch(
                  (n) => {
                      throw ((e.keyLoadPromise = null), "data" in n && (n.data.frag = t), n);
                  },
              )
            : Promise.resolve(n);
    }
    loadKeyHTTP(e, t) {
        let n = this.config,
            r = new n.loader(n);
        return (
            (t.keyLoader = e.loader = r),
            (e.keyLoadPromise = new Promise((i, s) => {
                let a = { keyInfo: e, frag: t, responseType: "arraybuffer", url: e.decryptdata.uri },
                    o = n.keyLoadPolicy.default,
                    u = { loadPolicy: o, timeout: o.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 },
                    c = {
                        onSuccess: (e, t, n, r) => {
                            let { frag: a, keyInfo: o } = n,
                                u = um(o.decryptdata);
                            if (!a.decryptdata || o !== this.keyIdToKeyInfo[u])
                                return s(
                                    this.createKeyLoadError(
                                        a,
                                        l.KEY_LOAD_ERROR,
                                        Error("after key load, decryptdata unset or changed"),
                                        r,
                                    ),
                                );
                            (o.decryptdata.key = a.decryptdata.key = new Uint8Array(e.data)),
                                (a.keyLoader = null),
                                (o.loader = null),
                                i({ frag: a, keyInfo: o });
                        },
                        onError: (e, n, r, i) => {
                            this.resetLoader(n),
                                s(
                                    this.createKeyLoadError(
                                        t,
                                        l.KEY_LOAD_ERROR,
                                        Error(`HTTP Error ${e.code} loading key ${e.text}`),
                                        r,
                                        v({ url: a.url, data: void 0 }, e),
                                    ),
                                );
                        },
                        onTimeout: (e, n, r) => {
                            this.resetLoader(n),
                                s(this.createKeyLoadError(t, l.KEY_LOAD_TIMEOUT, Error("key loading timed out"), r));
                        },
                        onAbort: (e, n, r) => {
                            this.resetLoader(n),
                                s(this.createKeyLoadError(t, l.INTERNAL_ABORTED, Error("key loading aborted"), r));
                        },
                    };
                r.load(a, u, c);
            }))
        );
    }
    resetLoader(e) {
        let { frag: t, keyInfo: n, url: r } = e,
            i = n.loader;
        t.keyLoader === i && ((t.keyLoader = null), (n.loader = null));
        let s = um(n.decryptdata) || r;
        delete this.keyIdToKeyInfo[s], i && i.destroy();
    }
}
function um(e) {
    if (e.keyFormat !== n$) {
        let t = e.keyId;
        if (t) return B(t);
    }
    return e.uri;
}
function uE(e) {
    let { type: t } = e;
    switch (t) {
        case h:
            return E;
        case p:
            return g;
        default:
            return m;
    }
}
function ug(e, t) {
    let n = e.url;
    return (void 0 === n || 0 === n.indexOf("data:")) && (n = t.url), n;
}
class uA {
    constructor(e) {
        (this.hls = void 0),
            (this.loaders = Object.create(null)),
            (this.variableList = null),
            (this.onManifestLoaded = this.checkAutostartLoad),
            (this.hls = e),
            this.registerListeners();
    }
    startLoad(e) {}
    stopLoad() {
        this.destroyInternalLoaders();
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(u.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
            e.on(u.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this),
            e.on(u.LEVELS_UPDATED, this.onLevelsUpdated, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(u.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(u.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(u.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
            e.off(u.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this),
            e.off(u.LEVELS_UPDATED, this.onLevelsUpdated, this);
    }
    createInternalLoader(e) {
        let t = this.hls.config,
            n = t.pLoader,
            r = t.loader,
            i = new (n || r)(t);
        return (this.loaders[e.type] = i), i;
    }
    getInternalLoader(e) {
        return this.loaders[e.type];
    }
    resetInternalLoader(e) {
        this.loaders[e] && delete this.loaders[e];
    }
    destroyInternalLoaders() {
        for (let e in this.loaders) {
            let t = this.loaders[e];
            t && t.destroy(), this.resetInternalLoader(e);
        }
    }
    destroy() {
        (this.variableList = null), this.unregisterListeners(), this.destroyInternalLoaders();
    }
    onManifestLoading(e, t) {
        let { url: n } = t;
        (this.variableList = null),
            this.load({
                id: null,
                level: 0,
                responseType: "text",
                type: _,
                url: n,
                deliveryDirectives: null,
                levelOrTrack: null,
            });
    }
    onLevelLoading(e, t) {
        let { id: n, level: r, pathwayId: i, url: s, deliveryDirectives: a, levelInfo: o } = t;
        this.load({
            id: n,
            level: r,
            pathwayId: i,
            responseType: "text",
            type: f,
            url: s,
            deliveryDirectives: a,
            levelOrTrack: o,
        });
    }
    onAudioTrackLoading(e, t) {
        let { id: n, groupId: r, url: i, deliveryDirectives: s, track: a } = t;
        this.load({
            id: n,
            groupId: r,
            level: null,
            responseType: "text",
            type: h,
            url: i,
            deliveryDirectives: s,
            levelOrTrack: a,
        });
    }
    onSubtitleTrackLoading(e, t) {
        let { id: n, groupId: r, url: i, deliveryDirectives: s, track: a } = t;
        this.load({
            id: n,
            groupId: r,
            level: null,
            responseType: "text",
            type: p,
            url: i,
            deliveryDirectives: s,
            levelOrTrack: a,
        });
    }
    onLevelsUpdated(e, t) {
        let n = this.loaders[f];
        if (n) {
            let e = n.context;
            e && !t.levels.some((t) => t === e.levelOrTrack) && (n.abort(), delete this.loaders[f]);
        }
    }
    load(e) {
        var t;
        let n,
            r = this.hls.config,
            s = this.getInternalLoader(e);
        if (s) {
            let t = this.hls.logger,
                n = s.context;
            if (
                n &&
                n.levelOrTrack === e.levelOrTrack &&
                (n.url === e.url || (n.deliveryDirectives && !e.deliveryDirectives))
            )
                return void (n.url === e.url
                    ? t.log(`[playlist-loader]: ignore ${e.url} ongoing request`)
                    : t.log(`[playlist-loader]: ignore ${e.url} in favor of ${n.url}`));
            t.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), s.abort();
        }
        if (
            ((n =
                e.type === _
                    ? r.manifestLoadPolicy.default
                    : S({}, r.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null })),
            (s = this.createInternalLoader(e)),
            i(null == (t = e.deliveryDirectives) ? void 0 : t.part))
        ) {
            let t;
            if (
                (e.type === f && null !== e.level
                    ? (t = this.hls.levels[e.level].details)
                    : e.type === h && null !== e.id
                      ? (t = this.hls.audioTracks[e.id].details)
                      : e.type === p && null !== e.id && (t = this.hls.subtitleTracks[e.id].details),
                t)
            ) {
                let e = t.partTarget,
                    r = t.targetduration;
                if (e && r) {
                    let t = 1e3 * Math.max(3 * e, 0.8 * r);
                    n = S({}, n, {
                        maxTimeToFirstByteMs: Math.min(t, n.maxTimeToFirstByteMs),
                        maxLoadTimeMs: Math.min(t, n.maxTimeToFirstByteMs),
                    });
                }
            }
        }
        let a = n.errorRetry || n.timeoutRetry || {},
            o = {
                loadPolicy: n,
                timeout: n.maxLoadTimeMs,
                maxRetry: a.maxNumRetry || 0,
                retryDelay: a.retryDelayMs || 0,
                maxRetryDelay: a.maxRetryDelayMs || 0,
            },
            l = {
                onSuccess: (e, t, n, r) => {
                    let i = this.getInternalLoader(n);
                    this.resetInternalLoader(n.type);
                    let s = e.data;
                    (t.parsing.start = performance.now()),
                        rn.isMediaPlaylist(s) || n.type !== _
                            ? this.handleTrackOrLevelPlaylist(e, t, n, r || null, i)
                            : this.handleMasterPlaylist(e, t, n, r);
                },
                onError: (e, t, n, r) => {
                    this.handleNetworkError(t, n, !1, e, r);
                },
                onTimeout: (e, t, n) => {
                    this.handleNetworkError(t, n, !0, void 0, e);
                },
            };
        s.load(e, o, l);
    }
    checkAutostartLoad() {
        if (!this.hls) return;
        let {
            config: { autoStartLoad: e, startPosition: t },
            forceStartLoad: n,
        } = this.hls;
        (e || n) &&
            (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`),
            this.hls.startLoad(t));
    }
    handleMasterPlaylist(e, t, n, r) {
        let i = this.hls,
            s = e.data,
            a = ug(e, n),
            o = rn.parseMasterPlaylist(s, a);
        if (o.playlistParsingError) {
            (t.parsing.end = performance.now()), this.handleManifestParsingError(e, n, o.playlistParsingError, r, t);
            return;
        }
        let { contentSteering: l, levels: c, sessionData: d, sessionKeys: _, startTimeOffset: f, variableList: h } = o;
        (this.variableList = h),
            c.forEach((e) => {
                let { unknownCodecs: t } = e;
                if (t) {
                    let { preferManagedMediaSource: n } = this.hls.config,
                        { audioCodec: r, videoCodec: i } = e;
                    for (let s = t.length; s--; ) {
                        let a = t[s];
                        eU(a, "audio", n)
                            ? ((e.audioCodec = r = r ? `${r},${a}` : a),
                              (eP.audio[r.substring(0, 4)] = 2),
                              t.splice(s, 1))
                            : eU(a, "video", n) &&
                              ((e.videoCodec = i = i ? `${i},${a}` : a),
                              (eP.video[i.substring(0, 4)] = 2),
                              t.splice(s, 1));
                    }
                }
            });
        let { AUDIO: p = [], SUBTITLES: m, "CLOSED-CAPTIONS": E } = rn.parseMasterPlaylistMedia(s, a, o);
        p.length &&
            (p.some((e) => !e.url) ||
                !c[0].audioCodec ||
                c[0].attrs.AUDIO ||
                (this.hls.logger.log(
                    "[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one",
                ),
                p.unshift({
                    type: "main",
                    name: "main",
                    groupId: "main",
                    default: !1,
                    autoselect: !1,
                    forced: !1,
                    id: -1,
                    attrs: new nC({}),
                    bitrate: 0,
                    url: "",
                }))),
            i.trigger(u.MANIFEST_LOADED, {
                levels: c,
                audioTracks: p,
                subtitles: m,
                captions: E,
                contentSteering: l,
                url: a,
                stats: t,
                networkDetails: r,
                sessionData: d,
                sessionKeys: _,
                startTimeOffset: f,
                variableList: h,
            });
    }
    handleTrackOrLevelPlaylist(e, t, n, r, s) {
        let a = this.hls,
            { id: o, level: l, type: c } = n,
            d = ug(e, n),
            f = i(l) ? l : i(o) ? o : 0,
            h = uE(n),
            p = rn.parseLevelPlaylist(e.data, d, f, h, 0, this.variableList);
        if (c === _) {
            let e = { attrs: new nC({}), bitrate: 0, details: p, name: "", url: d };
            (p.requestScheduled = t.loading.start + rv(p, 0)),
                a.trigger(u.MANIFEST_LOADED, {
                    levels: [e],
                    audioTracks: [],
                    url: d,
                    stats: t,
                    networkDetails: r,
                    sessionData: null,
                    sessionKeys: null,
                    contentSteering: null,
                    startTimeOffset: null,
                    variableList: null,
                });
        }
        (t.parsing.end = performance.now()), (n.levelDetails = p), this.handlePlaylistLoaded(p, e, t, n, r, s);
    }
    handleManifestParsingError(e, t, n, r, i) {
        this.hls.trigger(u.ERROR, {
            type: o.NETWORK_ERROR,
            details: l.MANIFEST_PARSING_ERROR,
            fatal: t.type === _,
            url: e.url,
            err: n,
            error: n,
            reason: n.message,
            response: e,
            context: t,
            networkDetails: r,
            stats: i,
        });
    }
    handleNetworkError(e, t, n = !1, r, i) {
        let s = `A network ${n ? "timeout" : "error" + (r ? " (status " + r.code + ")" : "")} occurred while loading ${e.type}`;
        e.type === f
            ? (s += `: ${e.level} id: ${e.id}`)
            : (e.type === h || e.type === p) && (s += ` id: ${e.id} group-id: "${e.groupId}"`);
        let a = Error(s);
        this.hls.logger.warn(`[playlist-loader]: ${s}`);
        let c = l.UNKNOWN,
            d = !1,
            m = this.getInternalLoader(e);
        switch (e.type) {
            case _:
                (c = n ? l.MANIFEST_LOAD_TIMEOUT : l.MANIFEST_LOAD_ERROR), (d = !0);
                break;
            case f:
                (c = n ? l.LEVEL_LOAD_TIMEOUT : l.LEVEL_LOAD_ERROR), (d = !1);
                break;
            case h:
                (c = n ? l.AUDIO_TRACK_LOAD_TIMEOUT : l.AUDIO_TRACK_LOAD_ERROR), (d = !1);
                break;
            case p:
                (c = n ? l.SUBTITLE_TRACK_LOAD_TIMEOUT : l.SUBTITLE_LOAD_ERROR), (d = !1);
        }
        m && this.resetInternalLoader(e.type);
        let E = {
            type: o.NETWORK_ERROR,
            details: c,
            fatal: d,
            url: e.url,
            loader: m,
            context: e,
            error: a,
            networkDetails: t,
            stats: i,
        };
        r && (E.response = v({ url: (null == t ? void 0 : t.url) || e.url, data: void 0 }, r)),
            this.hls.trigger(u.ERROR, E);
    }
    handlePlaylistLoaded(e, t, n, r, i, s) {
        let a = this.hls,
            { type: c, level: d, levelOrTrack: E, id: g, groupId: A, deliveryDirectives: I } = r,
            T = ug(t, r),
            S = uE(r),
            y = "number" == typeof r.level && S === m ? d : void 0,
            v = e.playlistParsingError;
        if (v) {
            if ((this.hls.logger.warn(`${v} ${e.url}`), !a.config.ignorePlaylistParsingErrors))
                return void a.trigger(u.ERROR, {
                    type: o.NETWORK_ERROR,
                    details: l.LEVEL_PARSING_ERROR,
                    fatal: !1,
                    url: T,
                    error: v,
                    reason: v.message,
                    response: t,
                    context: r,
                    level: y,
                    parent: S,
                    networkDetails: i,
                    stats: n,
                });
            e.playlistParsingError = null;
        }
        if (!e.fragments.length) {
            let s = (e.playlistParsingError = Error("No Segments found in Playlist"));
            a.trigger(u.ERROR, {
                type: o.NETWORK_ERROR,
                details: l.LEVEL_EMPTY_ERROR,
                fatal: !1,
                url: T,
                error: s,
                reason: s.message,
                response: t,
                context: r,
                level: y,
                parent: S,
                networkDetails: i,
                stats: n,
            });
            return;
        }
        switch (
            (e.live &&
                s &&
                (s.getCacheAge && (e.ageHeader = s.getCacheAge() || 0),
                (!s.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)),
            c)
        ) {
            case _:
            case f:
                if (y)
                    if (E) {
                        if (E !== a.levels[y]) {
                            let e = a.levels.indexOf(E);
                            e > -1 && (y = e);
                        }
                    } else y = 0;
                a.trigger(u.LEVEL_LOADED, {
                    details: e,
                    levelInfo: E || a.levels[0],
                    level: y || 0,
                    id: g || 0,
                    stats: n,
                    networkDetails: i,
                    deliveryDirectives: I,
                    withoutMultiVariant: c === _,
                });
                break;
            case h:
                a.trigger(u.AUDIO_TRACK_LOADED, {
                    details: e,
                    track: E,
                    id: g || 0,
                    groupId: A || "",
                    stats: n,
                    networkDetails: i,
                    deliveryDirectives: I,
                });
                break;
            case p:
                a.trigger(u.SUBTITLE_TRACK_LOADED, {
                    details: e,
                    track: E,
                    id: g || 0,
                    groupId: A || "",
                    stats: n,
                    networkDetails: i,
                    deliveryDirectives: I,
                });
        }
    }
}
class uI {
    static get version() {
        return r4;
    }
    static isMSESupported() {
        return uc();
    }
    static isSupported() {
        return ud();
    }
    static getMediaSource() {
        return k();
    }
    static get Events() {
        return u;
    }
    static get MetadataSchema() {
        return iU;
    }
    static get ErrorTypes() {
        return o;
    }
    static get ErrorDetails() {
        return l;
    }
    static get DefaultConfig() {
        return uI.defaultConfig ? uI.defaultConfig : lQ;
    }
    static set DefaultConfig(e) {
        uI.defaultConfig = e;
    }
    constructor(e = {}) {
        (this.config = void 0),
            (this.userConfig = void 0),
            (this.logger = void 0),
            (this.coreComponents = void 0),
            (this.networkControllers = void 0),
            (this._emitter = new r6()),
            (this._autoLevelCapping = -1),
            (this._maxHdcpLevel = null),
            (this.abrController = void 0),
            (this.bufferController = void 0),
            (this.capLevelController = void 0),
            (this.latencyController = void 0),
            (this.levelController = void 0),
            (this.streamController = void 0),
            (this.audioStreamController = void 0),
            (this.subtititleStreamController = void 0),
            (this.audioTrackController = void 0),
            (this.subtitleTrackController = void 0),
            (this.interstitialsController = void 0),
            (this.gapController = void 0),
            (this.emeController = void 0),
            (this.cmcdController = void 0),
            (this._media = null),
            (this._url = null),
            (this._sessionId = void 0),
            (this.triggeringException = void 0),
            (this.started = !1);
        const t = (this.logger = x(e.debug || !1, "Hls instance", e.assetPlayerId)),
            n = (this.config = l0(uI.DefaultConfig, e, t));
        (this.userConfig = e), n.progressive && l2(n, t);
        const {
                abrController: r,
                bufferController: i,
                capLevelController: s,
                errorController: a,
                fpsController: o,
            } = n,
            l = new a(this),
            c = (this.abrController = new r(this)),
            d = new t6(this),
            _ = n.interstitialsController,
            f = _ ? (this.interstitialsController = new _(this, uI)) : null,
            h = (this.bufferController = new i(this, d)),
            p = (this.capLevelController = new s(this)),
            m = new o(this),
            E = new uA(this),
            g = n.contentSteeringController,
            A = g ? new g(this) : null,
            I = (this.levelController = new uo(this, A)),
            T = new us(this),
            S = new up(this.config, this.logger),
            y = (this.streamController = new uh(this, d, S)),
            v = (this.gapController = new l7(this, d));
        p.setStreamController(y), m.setStreamController(y);
        const C = [E, I, y];
        f && C.splice(1, 0, f), A && C.splice(1, 0, A), (this.networkControllers = C);
        const N = [c, h, v, p, m, T, d];
        this.audioTrackController = this.createController(n.audioTrackController, C);
        const R = n.audioStreamController;
        R && C.push((this.audioStreamController = new R(this, d, S))),
            (this.subtitleTrackController = this.createController(n.subtitleTrackController, C));
        const b = n.subtitleStreamController;
        b && C.push((this.subtititleStreamController = new b(this, d, S))),
            this.createController(n.timelineController, N),
            (S.emeController = this.emeController = this.createController(n.emeController, N)),
            (this.cmcdController = this.createController(n.cmcdController, N)),
            (this.latencyController = this.createController(ua, N)),
            (this.coreComponents = N),
            C.push(l);
        const O = l.onErrorOut;
        "function" == typeof O && this.on(u.ERROR, O, l), this.on(u.MANIFEST_LOADED, E.onManifestLoaded, E);
    }
    createController(e, t) {
        if (e) {
            let n = new e(this);
            return t && t.push(n), n;
        }
        return null;
    }
    on(e, t, n = this) {
        this._emitter.on(e, t, n);
    }
    once(e, t, n = this) {
        this._emitter.once(e, t, n);
    }
    removeAllListeners(e) {
        this._emitter.removeAllListeners(e);
    }
    off(e, t, n = this, r) {
        this._emitter.off(e, t, n, r);
    }
    listeners(e) {
        return this._emitter.listeners(e);
    }
    emit(e, t, n) {
        return this._emitter.emit(e, t, n);
    }
    trigger(e, t) {
        if (this.config.debug) return this.emit(e, e, t);
        try {
            return this.emit(e, e, t);
        } catch (t) {
            if (
                (this.logger.error(
                    "An internal error happened while handling event " +
                        e +
                        '. Error message: "' +
                        t.message +
                        '". Here is a stacktrace:',
                    t,
                ),
                !this.triggeringException)
            ) {
                this.triggeringException = !0;
                let n = e === u.ERROR;
                this.trigger(u.ERROR, {
                    type: o.OTHER_ERROR,
                    details: l.INTERNAL_EXCEPTION,
                    fatal: n,
                    event: e,
                    error: t,
                }),
                    (this.triggeringException = !1);
            }
        }
        return !1;
    }
    listenerCount(e) {
        return this._emitter.listenerCount(e);
    }
    destroy() {
        this.logger.log("destroy"),
            this.trigger(u.DESTROYING, void 0),
            this.detachMedia(),
            this.removeAllListeners(),
            (this._autoLevelCapping = -1),
            (this._url = null),
            this.networkControllers.forEach((e) => e.destroy()),
            (this.networkControllers.length = 0),
            this.coreComponents.forEach((e) => e.destroy()),
            (this.coreComponents.length = 0);
        let e = this.config;
        (e.xhrSetup = e.fetchSetup = void 0), (this.userConfig = null);
    }
    attachMedia(e) {
        if (!e || ("media" in e && !e.media)) {
            let t = Error(`attachMedia failed: invalid argument (${e})`);
            this.trigger(u.ERROR, { type: o.OTHER_ERROR, details: l.ATTACH_MEDIA_ERROR, fatal: !0, error: t });
            return;
        }
        this.logger.log("attachMedia"),
            this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
        let t = "media" in e,
            n = t ? e.media : e,
            r = t ? e : { media: n };
        (this._media = n), this.trigger(u.MEDIA_ATTACHING, r);
    }
    detachMedia() {
        this.logger.log("detachMedia"), this.trigger(u.MEDIA_DETACHING, {}), (this._media = null);
    }
    transferMedia() {
        this._media = null;
        let e = this.bufferController.transferMedia();
        return this.trigger(u.MEDIA_DETACHING, { transferMedia: e }), e;
    }
    loadSource(e) {
        this.stopLoad();
        let t = this.media,
            n = this._url,
            r = (this._url = Y.buildAbsoluteURL(self.location.href, e, { alwaysNormalize: !0 }));
        (this._autoLevelCapping = -1),
            (this._maxHdcpLevel = null),
            this.logger.log(`loadSource:${r}`),
            t && n && (n !== r || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)),
            this.trigger(u.MANIFEST_LOADING, { url: e });
    }
    get url() {
        return this._url;
    }
    get hasEnoughToStart() {
        return this.streamController.hasEnoughToStart;
    }
    get startPosition() {
        return this.streamController.startPositionValue;
    }
    startLoad(e = -1, t) {
        this.logger.log(`startLoad(${e + (t ? ", <skip seek to start>" : "")})`),
            (this.started = !0),
            this.resumeBuffering();
        for (
            let n = 0;
            n < this.networkControllers.length &&
            (this.networkControllers[n].startLoad(e, t), this.started && this.networkControllers);
            n++
        );
    }
    stopLoad() {
        this.logger.log("stopLoad"), (this.started = !1);
        for (
            let e = 0;
            e < this.networkControllers.length &&
            (this.networkControllers[e].stopLoad(), !this.started && this.networkControllers);
            e++
        );
    }
    get loadingEnabled() {
        return this.started;
    }
    get bufferingEnabled() {
        return this.streamController.bufferingEnabled;
    }
    resumeBuffering() {
        this.bufferingEnabled ||
            (this.logger.log("resume buffering"),
            this.networkControllers.forEach((e) => {
                e.resumeBuffering && e.resumeBuffering();
            }));
    }
    pauseBuffering() {
        this.bufferingEnabled &&
            (this.logger.log("pause buffering"),
            this.networkControllers.forEach((e) => {
                e.pauseBuffering && e.pauseBuffering();
            }));
    }
    get inFlightFragments() {
        let e = { [m]: this.streamController.inFlightFrag };
        return (
            this.audioStreamController && (e[E] = this.audioStreamController.inFlightFrag),
            this.subtititleStreamController && (e[g] = this.subtititleStreamController.inFlightFrag),
            e
        );
    }
    swapAudioCodec() {
        this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
    }
    recoverMediaError() {
        this.logger.log("recoverMediaError");
        let e = this._media,
            t = null == e ? void 0 : e.currentTime;
        this.detachMedia(), e && (this.attachMedia(e), t && this.startLoad(t));
    }
    removeLevel(e) {
        this.levelController.removeLevel(e);
    }
    get sessionId() {
        let e = this._sessionId;
        return e || (e = this._sessionId = oC()), e;
    }
    get levels() {
        return this.levelController.levels || [];
    }
    get latestLevelDetails() {
        return this.streamController.getLevelDetails() || null;
    }
    get loadLevelObj() {
        return this.levelController.loadLevelObj;
    }
    get currentLevel() {
        return this.streamController.currentLevel;
    }
    set currentLevel(e) {
        this.logger.log(`set currentLevel:${e}`),
            (this.levelController.manualLevel = e),
            this.streamController.immediateLevelSwitch();
    }
    get nextLevel() {
        return this.streamController.nextLevel;
    }
    set nextLevel(e) {
        this.logger.log(`set nextLevel:${e}`),
            (this.levelController.manualLevel = e),
            this.streamController.nextLevelSwitch();
    }
    get loadLevel() {
        return this.levelController.level;
    }
    set loadLevel(e) {
        this.logger.log(`set loadLevel:${e}`), (this.levelController.manualLevel = e);
    }
    get nextLoadLevel() {
        return this.levelController.nextLoadLevel;
    }
    set nextLoadLevel(e) {
        this.levelController.nextLoadLevel = e;
    }
    get firstLevel() {
        return Math.max(this.levelController.firstLevel, this.minAutoLevel);
    }
    set firstLevel(e) {
        this.logger.log(`set firstLevel:${e}`), (this.levelController.firstLevel = e);
    }
    get startLevel() {
        let e = this.levelController.startLevel;
        return -1 === e && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
    }
    set startLevel(e) {
        this.logger.log(`set startLevel:${e}`),
            -1 !== e && (e = Math.max(e, this.minAutoLevel)),
            (this.levelController.startLevel = e);
    }
    get capLevelToPlayerSize() {
        return this.config.capLevelToPlayerSize;
    }
    set capLevelToPlayerSize(e) {
        let t = !!e;
        t !== this.config.capLevelToPlayerSize &&
            (t
                ? this.capLevelController.startCapping()
                : (this.capLevelController.stopCapping(),
                  (this.autoLevelCapping = -1),
                  this.streamController.nextLevelSwitch()),
            (this.config.capLevelToPlayerSize = t));
    }
    get autoLevelCapping() {
        return this._autoLevelCapping;
    }
    get bandwidthEstimate() {
        let { bwEstimator: e } = this.abrController;
        return e ? e.getEstimate() : NaN;
    }
    set bandwidthEstimate(e) {
        this.abrController.resetEstimator(e);
    }
    get abrEwmaDefaultEstimate() {
        let { bwEstimator: e } = this.abrController;
        return e ? e.defaultEstimate : NaN;
    }
    get ttfbEstimate() {
        let { bwEstimator: e } = this.abrController;
        return e ? e.getEstimateTTFB() : NaN;
    }
    set autoLevelCapping(e) {
        this._autoLevelCapping !== e &&
            (this.logger.log(`set autoLevelCapping:${e}`),
            (this._autoLevelCapping = e),
            this.levelController.checkMaxAutoUpdated());
    }
    get maxHdcpLevel() {
        return this._maxHdcpLevel;
    }
    set maxHdcpLevel(e) {
        te(e) && this._maxHdcpLevel !== e && ((this._maxHdcpLevel = e), this.levelController.checkMaxAutoUpdated());
    }
    get autoLevelEnabled() {
        return -1 === this.levelController.manualLevel;
    }
    get manualLevel() {
        return this.levelController.manualLevel;
    }
    get minAutoLevel() {
        let {
            levels: e,
            config: { minAutoBitrate: t },
        } = this;
        if (!e) return 0;
        let n = e.length;
        for (let r = 0; r < n; r++) if (e[r].maxBitrate >= t) return r;
        return 0;
    }
    get maxAutoLevel() {
        let e,
            { levels: t, autoLevelCapping: n, maxHdcpLevel: r } = this;
        if (((e = -1 === n && null != t && t.length ? t.length - 1 : n), r))
            for (let n = e; n--; ) {
                let e = t[n].attrs["HDCP-LEVEL"];
                if (e && e <= r) return n;
            }
        return e;
    }
    get firstAutoLevel() {
        return this.abrController.firstAutoLevel;
    }
    get nextAutoLevel() {
        return this.abrController.nextAutoLevel;
    }
    set nextAutoLevel(e) {
        this.abrController.nextAutoLevel = e;
    }
    get playingDate() {
        return this.streamController.currentProgramDateTime;
    }
    get mainForwardBufferInfo() {
        return this.streamController.getMainFwdBufferInfo();
    }
    get maxBufferLength() {
        return this.streamController.maxBufferLength;
    }
    setAudioOption(e) {
        var t;
        return (null == (t = this.audioTrackController) ? void 0 : t.setAudioOption(e)) || null;
    }
    setSubtitleOption(e) {
        var t;
        return (null == (t = this.subtitleTrackController) ? void 0 : t.setSubtitleOption(e)) || null;
    }
    get allAudioTracks() {
        let e = this.audioTrackController;
        return e ? e.allAudioTracks : [];
    }
    get audioTracks() {
        let e = this.audioTrackController;
        return e ? e.audioTracks : [];
    }
    get audioTrack() {
        let e = this.audioTrackController;
        return e ? e.audioTrack : -1;
    }
    set audioTrack(e) {
        let t = this.audioTrackController;
        t && (t.audioTrack = e);
    }
    get allSubtitleTracks() {
        let e = this.subtitleTrackController;
        return e ? e.allSubtitleTracks : [];
    }
    get subtitleTracks() {
        let e = this.subtitleTrackController;
        return e ? e.subtitleTracks : [];
    }
    get subtitleTrack() {
        let e = this.subtitleTrackController;
        return e ? e.subtitleTrack : -1;
    }
    get media() {
        return this._media;
    }
    set subtitleTrack(e) {
        let t = this.subtitleTrackController;
        t && (t.subtitleTrack = e);
    }
    get subtitleDisplay() {
        let e = this.subtitleTrackController;
        return !!e && e.subtitleDisplay;
    }
    set subtitleDisplay(e) {
        let t = this.subtitleTrackController;
        t && (t.subtitleDisplay = e);
    }
    get lowLatencyMode() {
        return this.config.lowLatencyMode;
    }
    set lowLatencyMode(e) {
        this.config.lowLatencyMode = e;
    }
    get liveSyncPosition() {
        return this.latencyController.liveSyncPosition;
    }
    get latency() {
        return this.latencyController.latency;
    }
    get maxLatency() {
        return this.latencyController.maxLatency;
    }
    get targetLatency() {
        return this.latencyController.targetLatency;
    }
    set targetLatency(e) {
        this.latencyController.targetLatency = e;
    }
    get drift() {
        return this.latencyController.drift;
    }
    get forceStartLoad() {
        return this.streamController.forceStartLoad;
    }
    get pathways() {
        return this.levelController.pathways;
    }
    get pathwayPriority() {
        return this.levelController.pathwayPriority;
    }
    set pathwayPriority(e) {
        this.levelController.pathwayPriority = e;
    }
    get bufferedToEnd() {
        var e;
        return !!(null != (e = this.bufferController) && e.bufferedToEnd);
    }
    get interstitialsManager() {
        var e;
        return (null == (e = this.interstitialsController) ? void 0 : e.interstitialsManager) || null;
    }
    getMediaDecodingInfo(e, t = this.allAudioTracks) {
        return e3(e, tm(t), navigator.mediaCapabilities);
    }
}
uI.defaultConfig = void 0;
