"use strict";
let i;
n.d(t, { Ay: () => s5, sV: () => u });
let r =
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
    o =
        (((A = {}).NETWORK_ERROR = "networkError"),
        (A.MEDIA_ERROR = "mediaError"),
        (A.KEY_SYSTEM_ERROR = "keySystemError"),
        (A.MUX_ERROR = "muxError"),
        (A.OTHER_ERROR = "otherError"),
        A),
    l =
        (((I = {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
        (I.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
        (I.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
        (I.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense"),
        (I.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed"),
        (I.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed"),
        (I.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed"),
        (I.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed"),
        (I.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted"),
        (I.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError"),
        (I.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError"),
        (I.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError"),
        (I.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError"),
        (I.MANIFEST_LOAD_ERROR = "manifestLoadError"),
        (I.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
        (I.MANIFEST_PARSING_ERROR = "manifestParsingError"),
        (I.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError"),
        (I.LEVEL_EMPTY_ERROR = "levelEmptyError"),
        (I.LEVEL_LOAD_ERROR = "levelLoadError"),
        (I.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
        (I.LEVEL_PARSING_ERROR = "levelParsingError"),
        (I.LEVEL_SWITCH_ERROR = "levelSwitchError"),
        (I.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
        (I.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
        (I.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
        (I.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
        (I.FRAG_LOAD_ERROR = "fragLoadError"),
        (I.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
        (I.FRAG_DECRYPT_ERROR = "fragDecryptError"),
        (I.FRAG_PARSING_ERROR = "fragParsingError"),
        (I.FRAG_GAP = "fragGap"),
        (I.REMUX_ALLOC_ERROR = "remuxAllocError"),
        (I.KEY_LOAD_ERROR = "keyLoadError"),
        (I.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
        (I.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
        (I.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError"),
        (I.BUFFER_APPEND_ERROR = "bufferAppendError"),
        (I.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
        (I.BUFFER_STALLED_ERROR = "bufferStalledError"),
        (I.BUFFER_FULL_ERROR = "bufferFullError"),
        (I.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
        (I.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
        (I.ASSET_LIST_LOAD_ERROR = "assetListLoadError"),
        (I.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout"),
        (I.ASSET_LIST_PARSING_ERROR = "assetListParsingError"),
        (I.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError"),
        (I.INTERNAL_EXCEPTION = "internalException"),
        (I.INTERNAL_ABORTED = "aborted"),
        (I.ATTACH_MEDIA_ERROR = "attachMediaError"),
        (I.UNKNOWN = "unknown"),
        I),
    u =
        (((T = {}).MEDIA_ATTACHING = "hlsMediaAttaching"),
        (T.MEDIA_ATTACHED = "hlsMediaAttached"),
        (T.MEDIA_DETACHING = "hlsMediaDetaching"),
        (T.MEDIA_DETACHED = "hlsMediaDetached"),
        (T.MEDIA_ENDED = "hlsMediaEnded"),
        (T.STALL_RESOLVED = "hlsStallResolved"),
        (T.BUFFER_RESET = "hlsBufferReset"),
        (T.BUFFER_CODECS = "hlsBufferCodecs"),
        (T.BUFFER_CREATED = "hlsBufferCreated"),
        (T.BUFFER_APPENDING = "hlsBufferAppending"),
        (T.BUFFER_APPENDED = "hlsBufferAppended"),
        (T.BUFFER_EOS = "hlsBufferEos"),
        (T.BUFFERED_TO_END = "hlsBufferedToEnd"),
        (T.BUFFER_FLUSHING = "hlsBufferFlushing"),
        (T.BUFFER_FLUSHED = "hlsBufferFlushed"),
        (T.MANIFEST_LOADING = "hlsManifestLoading"),
        (T.MANIFEST_LOADED = "hlsManifestLoaded"),
        (T.MANIFEST_PARSED = "hlsManifestParsed"),
        (T.LEVEL_SWITCHING = "hlsLevelSwitching"),
        (T.LEVEL_SWITCHED = "hlsLevelSwitched"),
        (T.LEVEL_LOADING = "hlsLevelLoading"),
        (T.LEVEL_LOADED = "hlsLevelLoaded"),
        (T.LEVEL_UPDATED = "hlsLevelUpdated"),
        (T.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
        (T.LEVELS_UPDATED = "hlsLevelsUpdated"),
        (T.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
        (T.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
        (T.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
        (T.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
        (T.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
        (T.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated"),
        (T.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
        (T.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
        (T.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
        (T.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
        (T.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
        (T.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated"),
        (T.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
        (T.CUES_PARSED = "hlsCuesParsed"),
        (T.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
        (T.INIT_PTS_FOUND = "hlsInitPtsFound"),
        (T.FRAG_LOADING = "hlsFragLoading"),
        (T.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
        (T.FRAG_LOADED = "hlsFragLoaded"),
        (T.FRAG_DECRYPTED = "hlsFragDecrypted"),
        (T.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
        (T.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
        (T.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
        (T.FRAG_PARSED = "hlsFragParsed"),
        (T.FRAG_BUFFERED = "hlsFragBuffered"),
        (T.FRAG_CHANGED = "hlsFragChanged"),
        (T.FPS_DROP = "hlsFpsDrop"),
        (T.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
        (T.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated"),
        (T.ERROR = "hlsError"),
        (T.DESTROYING = "hlsDestroying"),
        (T.KEY_LOADING = "hlsKeyLoading"),
        (T.KEY_LOADED = "hlsKeyLoaded"),
        (T.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
        (T.BACK_BUFFER_REACHED = "hlsBackBufferReached"),
        (T.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded"),
        (T.ASSET_LIST_LOADING = "hlsAssetListLoading"),
        (T.ASSET_LIST_LOADED = "hlsAssetListLoaded"),
        (T.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated"),
        (T.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary"),
        (T.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated"),
        (T.INTERSTITIAL_STARTED = "hlsInterstitialStarted"),
        (T.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted"),
        (T.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded"),
        (T.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError"),
        (T.INTERSTITIAL_ENDED = "hlsInterstitialEnded"),
        (T.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed"),
        (T.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached"),
        (T.EVENT_CUE_ENTER = "hlsEventCueEnter"),
        T);
var c,
    d,
    _,
    h,
    f,
    p,
    E,
    m,
    g,
    A,
    I,
    T,
    S,
    y,
    N = "manifest",
    v = "level",
    C = "audioTrack",
    R = "subtitleTrack",
    O = "main",
    b = "audio",
    D = "subtitle";
class L {
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
class w {
    constructor(e, t, n, i = 100) {
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
            (this.slow_ = new L(e)),
            (this.fast_ = new L(t)),
            (this.defaultTTFB_ = i),
            (this.ttfb_ = new L(e));
    }
    update(e, t) {
        let { slow_: n, fast_: i, ttfb_: r } = this;
        n.halfLife !== e && (this.slow_ = new L(e, n.getEstimate(), n.getTotalWeight())),
            i.halfLife !== t && (this.fast_ = new L(t, i.getEstimate(), i.getTotalWeight())),
            r.halfLife !== e && (this.ttfb_ = new L(e, r.getEstimate(), r.getTotalWeight()));
    }
    sample(e, t) {
        let n = (e = Math.max(e, this.minDelayMs_)) / 1e3,
            i = (8 * t) / n;
        this.fast_.sample(n, i), this.slow_.sample(n, i);
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
function M() {
    return (M = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
          }).apply(null, arguments);
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? P(Object(n), !0).forEach(function (t) {
                  var i, r;
                  (i = t),
                      (r = n[t]),
                      (i = (function (e) {
                          var t = (function (e, t) {
                              if ("object" != typeof e || !e) return e;
                              var n = e[Symbol.toPrimitive];
                              if (void 0 !== n) {
                                  var i = n.call(e, t);
                                  if ("object" != typeof i) return i;
                                  throw TypeError("@@toPrimitive must return a primitive value.");
                              }
                              return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == typeof t ? t : t + "";
                      })(i)) in e
                          ? Object.defineProperty(e, i, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                          : (e[i] = r);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : P(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
class k {
    constructor(e, t) {
        (this.trace = void 0),
            (this.debug = void 0),
            (this.log = void 0),
            (this.warn = void 0),
            (this.info = void 0),
            (this.error = void 0);
        const n = `[${e}]:`;
        (this.trace = U),
            (this.debug = t.debug.bind(null, n)),
            (this.log = t.log.bind(null, n)),
            (this.warn = t.warn.bind(null, n)),
            (this.info = t.info.bind(null, n)),
            (this.error = t.error.bind(null, n));
    }
}
let U = function () {},
    G = { trace: U, debug: U, log: U, warn: U, info: U, error: U };
function F() {
    return M({}, G);
}
function V(e, t, n) {
    let i;
    return t[e] ? t[e].bind(t) : (i = self.console[e]) ? i.bind(self.console, `${n ? "[" + n + "] " : ""}[${e}] >`) : U;
}
let B = F();
function H(e = !0) {
    if (!("u" < typeof self))
        return ((e || !self.MediaSource) && self.ManagedMediaSource) || self.MediaSource || self.WebKitMediaSource;
}
function j(e, t) {
    let n = Object.keys(e),
        i = Object.keys(t),
        r = n.length,
        s = i.length;
    return !r || !s || (r === s && !n.some((e) => -1 === i.indexOf(e)));
}
function Y(e, t = !1) {
    let n, i;
    if ("u" > typeof TextDecoder) {
        let n = new TextDecoder("utf-8").decode(e);
        if (t) {
            let e = n.indexOf("\0");
            return -1 !== e ? n.substring(0, e) : n;
        }
        return n.replace(/\0/g, "");
    }
    let r = e.length,
        s = "",
        a = 0;
    for (; a < r && (0 !== (n = e[a++]) || !t); )
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
                    s += String.fromCharCode(((31 & n) << 6) | (63 & (i = e[a++])));
                    break;
                case 14:
                    s += String.fromCharCode(((15 & n) << 12) | ((63 & (i = e[a++])) << 6) | (63 & e[a++]));
            }
    return s;
}
function W(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
        let i = e[n].toString(16);
        i.length < 2 && (i = "0" + i), (t += i);
    }
    return t;
}
function K(e) {
    return Uint8Array.from(
        e
            .replace(/^0x/, "")
            .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
            .replace(/ +$/, "")
            .split(" "),
    ).buffer;
}
var $ = { exports: {} },
    z = S
        ? $.exports
        : ((S = 1),
          (c =
              /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/),
          (d = /^(?=([^\/?#]*))\1([^]*)$/),
          (_ = /(?:\/|^)\.(?=\/)/g),
          (h = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
          ($.exports = f =
              {
                  buildAbsoluteURL: function (e, t, n) {
                      if (((n = n || {}), (e = e.trim()), !(t = t.trim()))) {
                          if (!n.alwaysNormalize) return e;
                          var i = f.parseURL(e);
                          if (!i) throw Error("Error trying to parse base URL.");
                          return (i.path = f.normalizePath(i.path)), f.buildURLFromParts(i);
                      }
                      var r = f.parseURL(t);
                      if (!r) throw Error("Error trying to parse relative URL.");
                      if (r.scheme)
                          return n.alwaysNormalize ? ((r.path = f.normalizePath(r.path)), f.buildURLFromParts(r)) : t;
                      var s = f.parseURL(e);
                      if (!s) throw Error("Error trying to parse base URL.");
                      if (!s.netLoc && s.path && "/" !== s.path[0]) {
                          var a = d.exec(s.path);
                          (s.netLoc = a[1]), (s.path = a[2]);
                      }
                      s.netLoc && !s.path && (s.path = "/");
                      var o = {
                          scheme: s.scheme,
                          netLoc: r.netLoc,
                          path: null,
                          params: r.params,
                          query: r.query,
                          fragment: r.fragment,
                      };
                      if (!r.netLoc && ((o.netLoc = s.netLoc), "/" !== r.path[0]))
                          if (r.path) {
                              var l = s.path,
                                  u = l.substring(0, l.lastIndexOf("/") + 1) + r.path;
                              o.path = f.normalizePath(u);
                          } else
                              (o.path = s.path), !r.params && ((o.params = s.params), r.query || (o.query = s.query));
                      return (
                          null === o.path && (o.path = n.alwaysNormalize ? f.normalizePath(r.path) : r.path),
                          f.buildURLFromParts(o)
                      );
                  },
                  parseURL: function (e) {
                      var t = c.exec(e);
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
                          e = e.split("").reverse().join("").replace(_, "");
                          e.length !== (e = e.replace(h, "")).length;
                      );
                      return e.split("").reverse().join("");
                  },
                  buildURLFromParts: function (e) {
                      return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
                  },
              }),
          $.exports);
class q {
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
var X = "audio",
    Z = "video",
    Q = "audiovideo";
class J {
    constructor(e) {
        (this._byteRange = null),
            (this._url = null),
            (this._stats = null),
            (this._streams = null),
            (this.base = void 0),
            (this.relurl = void 0),
            "string" == typeof e && (e = { url: e }),
            (this.base = e),
            (function (e, t) {
                let n = (function e(t, n) {
                    let i = Object.getPrototypeOf(t);
                    if (i) {
                        let t = Object.getOwnPropertyDescriptor(i, n);
                        return t || e(i, n);
                    }
                })(e, t);
                n && ((n.enumerable = !0), Object.defineProperty(e, t, n));
            })(this, "stats");
    }
    setByteRange(e, t) {
        let n,
            i = e.split("@", 2);
        (n = 1 === i.length ? (null == t ? void 0 : t.byteRangeEndOffset) || 0 : parseInt(i[1])),
            (this._byteRange = [n, parseInt(i[0]) + n]);
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
        return null === this._streams && (this._streams = { [X]: null, [Z]: null, [Q]: null }), this._streams;
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
        return null === this._stats && (this._stats = new q()), this._stats;
    }
    set stats(e) {
        this._stats = e;
    }
    get url() {
        return (
            !this._url &&
                this.baseurl &&
                this.relurl &&
                (this._url = z.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })),
            this._url || ""
        );
    }
    set url(e) {
        this._url = e;
    }
    clearElementaryStreamInfo() {
        let { elementaryStreams: e } = this;
        (e[X] = null), (e[Z] = null), (e[Q] = null);
    }
}
function ee(e) {
    return "initSegment" !== e.sn;
}
class et extends J {
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
            if (r(e) && r(t)) return t - e;
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
        let e = r(this.duration) ? this.duration : 0;
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
        if (!r(e)) {
            this._programDateTime = this.rawProgramDateTime = null;
            return;
        }
        this._programDateTime = e;
    }
    get ref() {
        return ee(this)
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
    setElementaryStreamInfo(e, t, n, i, r, s = !1) {
        let { elementaryStreams: a } = this,
            o = a[e];
        if (!o) {
            a[e] = { startPTS: t, endPTS: n, startDTS: i, endDTS: r, partial: s };
            return;
        }
        (o.startPTS = Math.min(o.startPTS, t)),
            (o.endPTS = Math.max(o.endPTS, n)),
            (o.startDTS = Math.min(o.startDTS, i)),
            (o.endDTS = Math.max(o.endDTS, r));
    }
}
class en extends J {
    constructor(e, t, n, i, r) {
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
            (this.index = i);
        const s = e.enumeratedString("BYTERANGE");
        s && this.setByteRange(s, r), r && (this.fragOffset = r.fragOffset + r.duration);
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
let ei = [].push,
    er = { video: 1, audio: 2, id3: 3, text: 4 };
function es(e) {
    return String.fromCharCode.apply(null, e);
}
function ea(e, t) {
    let n = (e[t] << 8) | e[t + 1];
    return n < 0 ? 65536 + n : n;
}
function eo(e, t) {
    let n = eu(e, t);
    return n < 0 ? 0x100000000 + n : n;
}
function el(e, t) {
    let n = eo(e, t);
    return (n *= 0x100000000), (n += eo(e, t + 4));
}
function eu(e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
}
function ec(e, t) {
    let n = [];
    if (!t.length) return n;
    let i = e.byteLength;
    for (let r = 0; r < i; ) {
        let s = eo(e, r),
            a = es(e.subarray(r + 4, r + 8)),
            o = s > 1 ? r + s : i;
        if (a === t[0])
            if (1 === t.length) n.push(e.subarray(r + 8, o));
            else {
                let i = ec(e.subarray(r + 8, o), t.slice(1));
                i.length && ei.apply(n, i);
            }
        r = o;
    }
    return n;
}
function ed(e) {
    let t = [],
        n = ec(e, ["moov", "trak"]);
    for (let e = 0; e < n.length; e++) {
        let i = n[e],
            r = ec(i, ["tkhd"])[0];
        if (r) {
            let e = r[0],
                n = eo(r, 0 === e ? 12 : 20),
                s = ec(i, ["mdia", "mdhd"])[0];
            if (s) {
                e = s[0];
                let r = eo(s, 0 === e ? 12 : 20),
                    a = ec(i, ["mdia", "hdlr"])[0];
                if (a) {
                    let e = es(a.subarray(8, 12)),
                        s = { soun: X, vide: Z }[e],
                        o = (function (e) {
                            let t,
                                n = e.subarray(8),
                                i = n.subarray(86),
                                r = es(n.subarray(4, 8)),
                                s = r,
                                a = "enca" === r || "encv" === r;
                            if (a) {
                                let e = ec(n, [r])[0].subarray("enca" === r ? 28 : 78);
                                ec(e, ["sinf"]).forEach((e) => {
                                    let t = ec(e, ["schm"])[0];
                                    if (t) {
                                        let n = es(t.subarray(4, 8));
                                        if ("cbcs" === n || "cenc" === n) {
                                            let t = ec(e, ["frma"])[0];
                                            t && (s = es(t));
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
                                    let e = ec(i, ["avcC"])[0];
                                    e &&
                                        e.length > 3 &&
                                        ((s += "." + ef(e[1]) + ef(e[2]) + ef(e[3])),
                                        (t = e_("avc1" === o ? "dva1" : "dvav", i)));
                                    break;
                                }
                                case "mp4a": {
                                    let e = ec(n, [r])[0],
                                        t = ec(e.subarray(28), ["esds"])[0];
                                    if (t && t.length > 7) {
                                        let e = 4;
                                        if (3 !== t[e++]) break;
                                        e = eh(t, e) + 2;
                                        let n = t[e++];
                                        if ((128 & n && (e += 2), 64 & n && (e += t[e++]), 4 !== t[e++])) break;
                                        e = eh(t, e);
                                        let i = t[e++];
                                        if (64 === i) s += "." + ef(i);
                                        else break;
                                        if (((e += 12), 5 !== t[e++])) break;
                                        e = eh(t, e);
                                        let r = t[e++],
                                            a = (248 & r) >> 3;
                                        31 === a && (a += 1 + ((7 & r) << 3) + ((224 & t[e]) >> 5)), (s += "." + a);
                                    }
                                    break;
                                }
                                case "hvc1":
                                case "hev1": {
                                    let e = ec(i, ["hvcC"])[0];
                                    if (e && e.length > 12) {
                                        let t = e[1],
                                            n = ["", "A", "B", "C"][t >> 6],
                                            i = eo(e, 2),
                                            r = e[12],
                                            a = e.subarray(6, 12);
                                        (s += "." + n + (31 & t)),
                                            (s +=
                                                "." +
                                                (function (e) {
                                                    let t = 0;
                                                    for (let n = 0; n < 32; n++) t |= ((e >> n) & 1) << (31 - n);
                                                    return t >>> 0;
                                                })(i)
                                                    .toString(16)
                                                    .toUpperCase()),
                                            (s += "." + ((32 & t) >> 5 ? "H" : "L") + r);
                                        let o = "";
                                        for (let e = a.length; e--; ) {
                                            let t = a[e];
                                            (t || o) && (o = "." + t.toString(16).toUpperCase() + o);
                                        }
                                        s += o;
                                    }
                                    t = e_("hev1" == o ? "dvhe" : "dvh1", i);
                                    break;
                                }
                                case "dvh1":
                                case "dvhe":
                                case "dvav":
                                case "dva1":
                                case "dav1":
                                    s = e_(s, i) || s;
                                    break;
                                case "vp09": {
                                    let e = ec(i, ["vpcC"])[0];
                                    if (e && e.length > 6) {
                                        let t = e[4],
                                            n = e[5],
                                            i = (e[6] >> 4) & 15;
                                        s += "." + ep(t) + "." + ep(n) + "." + ep(i);
                                    }
                                    break;
                                }
                                case "av01": {
                                    let e = ec(i, ["av1C"])[0];
                                    if (e && e.length > 2) {
                                        let n = e[1] >>> 5,
                                            r = 31 & e[1],
                                            a = e[2] >>> 7 ? "H" : "M",
                                            o = (64 & e[2]) >> 6,
                                            l = (32 & e[2]) >> 5,
                                            u = (16 & e[2]) >> 4,
                                            c = (8 & e[2]) >> 3,
                                            d = (4 & e[2]) >> 2,
                                            _ = 3 & e[2];
                                        (s +=
                                            "." +
                                            n +
                                            "." +
                                            ep(r) +
                                            a +
                                            "." +
                                            ep(2 === n && o ? (l ? 12 : 10) : o ? 10 : 8) +
                                            "." +
                                            u +
                                            "." +
                                            c +
                                            d +
                                            _ +
                                            "." +
                                            ep(1) +
                                            "." +
                                            ep(1) +
                                            "." +
                                            ep(1) +
                                            ".0"),
                                            (t = e_("dav1", i));
                                    }
                                }
                            }
                            return { codec: s, encrypted: a, supplemental: t };
                        })(ec(i, ["mdia", "minf", "stbl", "stsd"])[0]);
                    s
                        ? ((t[n] = { timescale: r, type: s, stsd: o }), (t[s] = x({ timescale: r, id: n }, o)))
                        : (t[n] = { timescale: r, type: e, stsd: o });
                }
            }
        }
    }
    return (
        ec(e, ["moov", "mvex", "trex"]).forEach((e) => {
            let n = t[eo(e, 4)];
            n && (n.default = { duration: eo(e, 12), flags: eo(e, 20) });
        }),
        t
    );
}
function e_(e, t) {
    let n = ec(t, ["dvvC"]),
        i = n.length ? n[0] : ec(t, ["dvcC"])[0];
    if (i) {
        let t = (i[2] >> 1) & 127,
            n = ((i[2] << 5) & 32) | ((i[3] >> 3) & 31);
        return e + "." + ep(t) + "." + ep(n);
    }
}
function eh(e, t) {
    let n = t + 5;
    for (; 128 & e[t++] && t < n; );
    return t;
}
function ef(e) {
    return ("0" + e.toString(16).toUpperCase()).slice(-2);
}
function ep(e) {
    return (e < 10 ? "0" : "") + e;
}
function eE(e) {
    let t = ec(e, ["schm"])[0];
    if (t) {
        let n = es(t.subarray(4, 8));
        if ("cbcs" === n || "cenc" === n) return ec(e, ["schi", "tenc"])[0];
    }
    return null;
}
function em(e, t) {
    let n = new Uint8Array(e.length + t.length);
    return n.set(e), n.set(t, e.length), n;
}
function eg(e, t) {
    let n = [],
        i = t.samples,
        r = t.timescale,
        s = t.id,
        a = !1;
    return (
        ec(i, ["moof"]).map((o) => {
            let l = o.byteOffset - 8;
            ec(o, ["traf"]).map((o) => {
                let u = ec(o, ["tfdt"]).map((e) => {
                    let t = e[0],
                        n = eo(e, 4);
                    return 1 === t && ((n *= 0x100000000), (n += eo(e, 8))), n / r;
                })[0];
                return (
                    void 0 !== u && (e = u),
                    ec(o, ["tfhd"]).map((u) => {
                        let c = eo(u, 4),
                            d = 0xffffff & eo(u, 0),
                            _ = 0,
                            h = 0,
                            f = 8;
                        c === s &&
                            ((1 & d) != 0 && (f += 8),
                            (2 & d) != 0 && (f += 4),
                            (8 & d) != 0 && ((_ = eo(u, f)), (f += 4)),
                            (16 & d) != 0 && ((h = eo(u, f)), (f += 4)),
                            (32 & d) != 0 && (f += 4),
                            "video" === t.type && (a = eA(t.codec)),
                            ec(o, ["trun"]).map((s) => {
                                let o = s[0],
                                    u = 0xffffff & eo(s, 0),
                                    c = 0,
                                    d = (256 & u) != 0,
                                    f = 0,
                                    p = (512 & u) != 0,
                                    E = 0,
                                    m = (1024 & u) != 0,
                                    g = (2048 & u) != 0,
                                    A = 0,
                                    I = eo(s, 4),
                                    T = 8;
                                (1 & u) != 0 && ((c = eo(s, T)), (T += 4)), (4 & u) != 0 && (T += 4);
                                let S = c + l;
                                for (let l = 0; l < I; l++) {
                                    if (
                                        (d ? ((f = eo(s, T)), (T += 4)) : (f = _),
                                        p ? ((E = eo(s, T)), (T += 4)) : (E = h),
                                        m && (T += 4),
                                        g && ((A = 0 === o ? eo(s, T) : eu(s, T)), (T += 4)),
                                        t.type === Z)
                                    ) {
                                        let t = 0;
                                        for (; t < E; ) {
                                            let s = eo(i, S);
                                            (S += 4),
                                                (function (e, t) {
                                                    if (!e) return 6 == (31 & t);
                                                    {
                                                        let e = (t >> 1) & 63;
                                                        return 39 === e || 40 === e;
                                                    }
                                                })(a, i[S]) && eI(i.subarray(S, S + s), a ? 2 : 1, e + A / r, n),
                                                (S += s),
                                                (t += s + 4);
                                        }
                                    }
                                    e += f / r;
                                }
                            }));
                    })
                );
            });
        }),
        n
    );
}
function eA(e) {
    if (!e) return !1;
    let t = e.substring(0, 4);
    return "hvc1" === t || "hev1" === t || "dvh1" === t || "dvhe" === t;
}
function eI(e, t, n, i) {
    let r,
        s = eT(e);
    r = 0 + t;
    let a = 0,
        o = 0,
        l = 0;
    for (; r < s.length; ) {
        a = 0;
        do {
            if (r >= s.length) break;
            a += l = s[r++];
        } while (255 === l);
        o = 0;
        do {
            if (r >= s.length) break;
            o += l = s[r++];
        } while (255 === l);
        let e = s.length - r,
            t = r;
        if (o < e) r += o;
        else if (o > e) {
            B.error(`Malformed SEI payload. ${o} is too small, only ${e} bytes left to parse.`);
            break;
        }
        if (4 === a) {
            if (181 === s[t++]) {
                let e = ea(s, t);
                if (((t += 2), 49 === e)) {
                    let e = eo(s, t);
                    if (((t += 4), 0x47413934 === e)) {
                        let e = s[t++];
                        if (3 === e) {
                            let r = s[t++],
                                o = 31 & r,
                                l = 64 & r,
                                u = l ? 2 + 3 * o : 0,
                                c = new Uint8Array(u);
                            if (l) {
                                c[0] = r;
                                for (let e = 1; e < u; e++) c[e] = s[t++];
                            }
                            i.push({ type: e, payloadType: a, pts: n, bytes: c });
                        }
                    }
                }
            }
        } else if (5 === a && o > 16) {
            let e = [];
            for (let n = 0; n < 16; n++) {
                let i = s[t++].toString(16);
                e.push(1 == i.length ? "0" + i : i), (3 === n || 5 === n || 7 === n || 9 === n) && e.push("-");
            }
            let r = o - 16,
                l = new Uint8Array(r);
            for (let e = 0; e < r; e++) l[e] = s[t++];
            i.push({ payloadType: a, pts: n, uuid: e.join(""), userData: Y(l), userDataBytes: l });
        }
    }
}
function eT(e) {
    let t = e.byteLength,
        n = [],
        i = 1;
    for (; i < t - 2; ) 0 === e[i] && 0 === e[i + 1] && 3 === e[i + 2] ? (n.push(i + 2), (i += 2)) : i++;
    if (0 === n.length) return e;
    let r = t - n.length,
        s = new Uint8Array(r),
        a = 0;
    for (i = 0; i < r; a++, i++) a === n[0] && (a++, n.shift()), (s[i] = e[a]);
    return s;
}
let eS = {
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
function ey(e, t) {
    let n = eS[t];
    return !!n && !!n[e.slice(0, 4)];
}
function eN(e, t, n = !0) {
    return !e.split(",").some((e) => !ev(e, t, n));
}
function ev(e, t, n = !0) {
    var i;
    let r = H(n);
    return null != (i = null == r ? void 0 : r.isTypeSupported(eC(e, t))) && i;
}
function eC(e, t) {
    return `${t}/mp4;codecs=${e}`;
}
function eR(e) {
    if (e) {
        let t = e.substring(0, 4);
        return eS.video[t];
    }
    return 2;
}
function eO(e) {
    let t = /\(Windows.+Firefox\//i.test(navigator.userAgent);
    return e.split(",").reduce((e, n) => {
        let i = t && eA(n) ? 9 : eS.video[n];
        return i ? (2 * i + e) / (e ? 3 : 2) : (eS.audio[n] + e) / (e ? 2 : 1);
    }, 0);
}
let eb = {},
    eD = /flac|opus|mp4a\.40\.34/i;
function eL(e, t = !0) {
    return e.replace(eD, (e) =>
        (function (e, t = !0) {
            if (eb[e]) return eb[e];
            let n = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"], "mp4a.40.34": ["mp3"] }[e];
            for (let r = 0; r < n.length; r++) {
                var i;
                if (ev(n[r], "audio", t)) return (eb[e] = n[r]), n[r];
                if ("mp3" === n[r] && null != (i = H(t)) && i.isTypeSupported("audio/mpeg")) return "";
            }
            return e;
        })(e.toLowerCase(), t),
    );
}
function ew(e, t) {
    if (
        e &&
        (e.length > 4 || -1 !== ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(e)) &&
        (eM(e, "audio") || eM(e, "video"))
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
function eM(e, t) {
    return ey(e, t) && ev(e, t);
}
function eP(e) {
    let t = H(e) || { isTypeSupported: () => !1 };
    return {
        mpeg: t.isTypeSupported("audio/mpeg"),
        mp3: t.isTypeSupported('audio/mp4; codecs="mp3"'),
        ac3: t.isTypeSupported('audio/mp4; codecs="ac-3"'),
    };
}
function ex(e) {
    return e.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
let ek = { supported: !1, smooth: !1, powerEfficient: !1 },
    eU = {
        supported: !0,
        configurations: [],
        decodingInfoResults: [{ supported: !0, powerEfficient: !0, smooth: !0 }],
    };
function eG(e, t) {
    return { supported: !1, configurations: t, decodingInfoResults: [ek], error: e };
}
function eF(e, t, n, i = {}) {
    var r, s, a, o, l, u;
    let c,
        d,
        _,
        h,
        f,
        p,
        E,
        m,
        g = e.videoCodec;
    if ((!g && !e.audioCodec) || !n) return Promise.resolve(eU);
    let A = [],
        I =
            ((c = null == (s = (r = e).videoCodec) ? void 0 : s.split(",")),
            (d = eV(r)),
            (_ = r.width || 640),
            (h = r.height || 480),
            (f = r.frameRate || 30),
            (p = r.videoRange.toLowerCase()),
            c
                ? c.map((e) => {
                      let t = {
                          contentType: eC(
                              (function (e) {
                                  if (e.startsWith("av01.")) {
                                      let t = e.split("."),
                                          n = ["0", "111", "01", "01", "01", "0"];
                                      for (let e = t.length; e > 4 && e < 10; e++) t[e] = n[e - 4];
                                      return t.join(".");
                                  }
                                  return e;
                              })(e),
                              "video",
                          ),
                          width: _,
                          height: h,
                          bitrate: d,
                          framerate: f,
                      };
                      return "sdr" !== p && (t.transferFunction = p), t;
                  })
                : []),
        T = I.length,
        S =
            ((a = e),
            (o = t),
            (l = T > 0),
            (E = null == (u = a.audioCodec) ? void 0 : u.split(",")),
            (m = eV(a)),
            E && a.audioGroups
                ? a.audioGroups.reduce((e, t) => {
                      var n;
                      let i = t ? (null == (n = o.groups[t]) ? void 0 : n.tracks) : null;
                      return i
                          ? i.reduce((e, n) => {
                                if (n.groupId === t) {
                                    let t = parseFloat(n.channels || "");
                                    E.forEach((n) => {
                                        let i = {
                                            contentType: eC(n, "audio"),
                                            bitrate: l
                                                ? (function (e, t) {
                                                      if (t <= 1) return 1;
                                                      let n = 128e3;
                                                      return (
                                                          "ec-3" === e ? (n = 768e3) : "ac-3" === e && (n = 64e4),
                                                          Math.min(t / 2, n)
                                                      );
                                                  })(n, m)
                                                : m,
                                        };
                                        t && (i.channels = "" + t), e.push(i);
                                    });
                                }
                                return e;
                            }, e)
                          : e;
                  }, [])
                : []),
        y = S.length;
    for (let e = T || +y || 1; e--; ) {
        let t = { type: "media-source" };
        if ((T && (t.video = I[e % T]), y)) {
            t.audio = S[e % y];
            let n = t.audio.bitrate;
            t.video && n && (t.video.bitrate -= n);
        }
        A.push(t);
    }
    if (g) {
        let e = navigator.userAgent;
        if (g.split(",").some((e) => eA(e)) && /\(Windows.+Firefox\//i.test(navigator.userAgent))
            return Promise.resolve(
                eG(
                    Error(
                        `Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${e})`,
                    ),
                    A,
                ),
            );
    }
    return Promise.all(
        A.map((e) => {
            let t = (function (e) {
                let t = "",
                    { audio: n, video: i } = e;
                if (i) {
                    let e = ex(i.contentType);
                    t += `${e}_r${i.height}x${i.width}f${Math.ceil(i.framerate)}${i.transferFunction || "sd"}_${Math.ceil(i.bitrate / 1e5)}`;
                }
                if (n) {
                    let e = ex(n.contentType);
                    t += `${i ? "_" : ""}${e}_c${n.channels}`;
                }
                return t;
            })(e);
            return i[t] || (i[t] = n.decodingInfo(e));
        }),
    )
        .then((e) => ({ supported: !e.some((e) => !e.supported), configurations: A, decodingInfoResults: e }))
        .catch((e) => ({ supported: !1, configurations: A, decodingInfoResults: [], error: e }));
}
function eV(e) {
    return 1e3 * Math.ceil(Math.max(0.9 * e.bitrate, e.averageBitrate) / 1e3) || 1;
}
let eB = ["NONE", "TYPE-0", "TYPE-1", null],
    eH = ["SDR", "PQ", "HLG"];
function ej(e) {
    let { canSkipUntil: t, canSkipDateRanges: n, age: i } = e;
    return t && i < t / 2 ? (n ? "v2" : "YES") : "";
}
class eY {
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
class eW {
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
        return eK(this._audioGroups, e);
    }
    hasSubtitleGroup(e) {
        return eK(this._subtitleGroups, e);
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
function eK(e, t) {
    return !!t && !!e && -1 !== e.indexOf(t);
}
let e$ = (e, t) => {
    let n;
    return JSON.stringify(
        e,
        ((n = new WeakSet()),
        (e, i) => {
            if ((t && (i = t(e, i)), "object" == typeof i && null !== i)) {
                if (n.has(i)) return;
                n.add(i);
            }
            return i;
        }),
    );
};
function ez(e, t) {
    B.log(`[abr] start candidates with "${e}" ignored because ${t}`);
}
function eq(e) {
    return e.reduce(
        (e, t) => {
            let n = e.groups[t.groupId];
            n || (n = e.groups[t.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: !1, hasAutoSelect: !1 }),
                n.tracks.push(t);
            let i = t.channels || "2";
            return (
                (n.channels[i] = (n.channels[i] || 0) + 1),
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
function eX(e) {
    if (!e) return e;
    let { lang: t, assocLang: n, characteristics: i, channels: r, audioCodec: s } = e;
    return { lang: t, assocLang: n, characteristics: i, channels: r, audioCodec: s };
}
function eZ(e, t, n) {
    if ("attrs" in e) {
        let n = t.indexOf(e);
        if (-1 !== n) return n;
    }
    for (let i = 0; i < t.length; i++) if (eQ(e, t[i], n)) return i;
    return -1;
}
function eQ(e, t, n) {
    let { groupId: i, name: r, lang: s, assocLang: a, default: o } = e,
        l = e.forced;
    return (
        (void 0 === i || t.groupId === i) &&
        (void 0 === r || t.name === r) &&
        (void 0 === s ||
            (function (e, t = "--") {
                return e.length === t.length ? e === t : e.startsWith(t) || t.startsWith(e);
            })(s, t.lang)) &&
        (void 0 === s || t.assocLang === a) &&
        (void 0 === o || t.default === o) &&
        (void 0 === l || t.forced === l) &&
        (!("characteristics" in e) ||
            (function (e, t = "") {
                let n = e.split(","),
                    i = t.split(",");
                return n.length === i.length && !n.some((e) => -1 === i.indexOf(e));
            })(e.characteristics || "", t.characteristics)) &&
        (void 0 === n || n(e, t))
    );
}
function eJ(e, t) {
    let { audioCodec: n, channels: i } = e;
    return (
        (void 0 === n || (t.audioCodec || "").substring(0, 4) === n.substring(0, 4)) &&
        (void 0 === i || i === (t.channels || "2"))
    );
}
function e0(e, t, n) {
    for (let i = t; i > -1; i--) if (n(e[i])) return i;
    for (let i = t + 1; i < e.length; i++) if (n(e[i])) return i;
    return -1;
}
function e1(e, t) {
    var n;
    return !!e && e !== (null == (n = t.loadLevelObj) ? void 0 : n.uri);
}
let e2 = function (e, t) {
    let n = 0,
        i = e.length - 1,
        r = null,
        s = null;
    for (; n <= i; ) {
        let a = t((s = e[(r = ((n + i) / 2) | 0)]));
        if (a > 0) n = r + 1;
        else {
            if (!(a < 0)) return s;
            i = r - 1;
        }
    }
    return null;
};
function e3(e, t, n = 0, i = 0, r = 0.005) {
    let s = null;
    if (e) {
        s = t[1 + e.sn - t[0].sn] || null;
        let i = e.endDTS - n;
        i > 0 && i < 15e-7 && (n += 15e-7),
            s && e.level !== s.level && s.end <= e.end && (s = t[2 + e.sn - t[0].sn] || null);
    } else 0 === n && 0 === t[0].start && (s = t[0]);
    if (
        s &&
        (((!e || e.level === s.level) && 0 === e6(n, i, s)) ||
            (function (e, t, n) {
                if (t && 0 === t.start && t.level < e.level && (t.endPTS || 0) > 0) {
                    let i = t.tagList.reduce((e, t) => ("INF" === t[0] && (e += parseFloat(t[1])), e), n);
                    return e.start <= i;
                }
                return !1;
            })(s, e, Math.min(r, i)))
    )
        return s;
    let a = e2(t, e6.bind(null, n, i));
    return a && (a !== e || !s) ? a : s;
}
function e6(e = 0, t = 0, n) {
    if (n.start <= e && n.start + n.duration > e) return 0;
    let i = Math.min(t, n.duration + (n.deltaPTS ? n.deltaPTS : 0));
    return n.start + n.duration - i <= e ? 1 : n.start - i > e && n.start ? -1 : 0;
}
function e4(e, t, n) {
    if (e && e.startCC <= t && e.endCC >= t) {
        let i,
            r = e.fragments,
            { fragmentHint: s } = e;
        return (
            s && (r = r.concat(s)),
            e2(r, (e) => (e.cc < t ? 1 : e.cc > t ? -1 : ((i = e), e.end <= n) ? 1 : e.start > n ? -1 : 0)),
            i || null
        );
    }
    return null;
}
function e5(e) {
    switch (e.details) {
        case l.FRAG_LOAD_TIMEOUT:
        case l.KEY_LOAD_TIMEOUT:
        case l.LEVEL_LOAD_TIMEOUT:
        case l.MANIFEST_LOAD_TIMEOUT:
            return !0;
    }
    return !1;
}
function e7(e) {
    return e.details.startsWith("key");
}
function e8(e) {
    return e7(e) && !!e.frag && !e.frag.decryptdata;
}
function e9(e, t) {
    let n = e5(t);
    return e.default[`${n ? "timeout" : "error"}Retry`];
}
function te(e, t) {
    return Math.min(("linear" === e.backoff ? 1 : Math.pow(2, t)) * e.retryDelayMs, e.maxRetryDelayMs);
}
function tt(e) {
    return x(x({}, e), { errorRetry: null, timeoutRetry: null });
}
function tn(e, t, n, i) {
    var r;
    if (!e) return !1;
    let s = null == i ? void 0 : i.code,
        a = t < e.maxNumRetry && (ti((r = s)) || (!!r && (r < 400 || r > 499)) || !!n);
    return e.shouldRetry ? e.shouldRetry(e, t, n, i, a) : a;
}
function ti(e) {
    return 0 === e && !1 === navigator.onLine;
}
function tr(e) {
    let t = { action: 0, flags: 0 };
    return e && (t.resolved = !0), t;
}
var ts = "NOT_LOADED",
    ta = "APPENDING",
    to = "PARTIAL";
class tl {
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
                let i = n[t];
                if (!i) break;
                if (i.start <= e && e <= i.end && i.loaded) return i;
            }
        return this.getBufferedFrag(e, t);
    }
    getBufferedFrag(e, t) {
        return this.getFragAtPos(e, t, !0);
    }
    getFragAtPos(e, t, n) {
        let { fragments: i } = this,
            r = Object.keys(i);
        for (let s = r.length; s--; ) {
            let a = i[r[s]];
            if ((null == a ? void 0 : a.body.type) === t && (!n || a.buffered)) {
                let t = a.body;
                if (t.start <= e && e <= t.end) return t;
            }
        }
        return null;
    }
    detectEvictedFragments(e, t, n, i, r) {
        this.timeRanges && (this.timeRanges[e] = t);
        let s = (null == i ? void 0 : i.fragment.sn) || -1;
        Object.keys(this.fragments).forEach((i) => {
            let a = this.fragments[i];
            if (!a || s >= a.body.sn) return;
            if (!a.buffered && (!a.loaded || r)) {
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
            i = tc(n),
            r = this.fragments[i];
        if (!r || (r.buffered && n.gap)) return;
        let s = !n.relurl;
        Object.keys(t).forEach((i) => {
            let a = n.elementaryStreams[i];
            if (!a) return;
            let o = t[i],
                l = s || !0 === a.partial;
            r.range[i] = this.getBufferedTimes(n, e.part, l, o);
        }),
            (r.loaded = null),
            Object.keys(r.range).length
                ? ((r.buffered = !0),
                  (r.body.endList = n.endList || r.body.endList) && (this.endListFragments[r.body.type] = r),
                  tu(r) || this.removeParts(n.sn - 1, n.type))
                : this.removeFragment(r.body);
    }
    removeParts(e, t) {
        let n = this.activePartLists[t];
        n && (this.activePartLists[t] = td(n, (t) => t.fragment.sn >= e));
    }
    fragBuffered(e, t) {
        let n = tc(e),
            i = this.fragments[n];
        !i &&
            t &&
            ((i = this.fragments[n] =
                { body: e, appendedPTS: null, loaded: null, buffered: !1, range: Object.create(null) }),
            e.gap && (this.hasGaps = !0)),
            i && ((i.loaded = null), (i.buffered = !0));
    }
    getBufferedTimes(e, t, n, i) {
        let r = { time: [], partial: n },
            s = e.start,
            a = e.end,
            o = e.minEndPTS || a,
            l = e.maxStartPTS || s;
        for (let e = 0; e < i.length; e++) {
            let t = i.start(e) - this.bufferPadding,
                n = i.end(e) + this.bufferPadding;
            if (l >= t && o <= n) {
                r.time.push({ startPTS: Math.max(s, i.start(e)), endPTS: Math.min(a, i.end(e)) });
                break;
            }
            if (s < n && a > t) {
                let t = Math.max(s, i.start(e)),
                    n = Math.min(a, i.end(e));
                n > t && ((r.partial = !0), r.time.push({ startPTS: t, endPTS: n }));
            } else if (a <= t) break;
        }
        return r;
    }
    getPartialFragment(e) {
        let t,
            n,
            i,
            r = null,
            s = 0,
            { bufferPadding: a, fragments: o } = this;
        return (
            Object.keys(o).forEach((l) => {
                let u = o[l];
                u &&
                    tu(u) &&
                    ((n = u.body.start - a),
                    (i = u.body.end + a),
                    e >= n && e <= i && s <= (t = Math.min(e - n, i - e)) && ((r = u.body), (s = t)));
            }),
            r
        );
    }
    isEndListAppended(e) {
        let t = this.endListFragments[e];
        return void 0 !== t && (t.buffered || tu(t));
    }
    getState(e) {
        let t = tc(e),
            n = this.fragments[t];
        if (n)
            if (!n.buffered) return ta;
            else if (tu(n)) return to;
            else return "OK";
        return ts;
    }
    isTimeBuffered(e, t, n) {
        let i, r;
        for (let s = 0; s < n.length; s++) {
            if (((i = n.start(s) - this.bufferPadding), (r = n.end(s) + this.bufferPadding), e >= i && t <= r))
                return !0;
            if (t <= i) break;
        }
        return !1;
    }
    onManifestLoading() {
        this.removeAllFragments();
    }
    onFragLoaded(e, t) {
        if ("initSegment" === t.frag.sn || t.frag.bitrateTest) return;
        let n = t.frag,
            i = t.part ? null : t,
            r = tc(n);
        this.fragments[r] = { body: n, appendedPTS: null, loaded: i, buffered: !1, range: Object.create(null) };
    }
    onBufferAppended(e, t) {
        let { frag: n, part: i, timeRanges: r, type: s } = t;
        if ("initSegment" === n.sn) return;
        let a = n.type;
        if (i) {
            let e = this.activePartLists[a];
            e || (this.activePartLists[a] = e = []), e.push(i);
        }
        this.timeRanges = r;
        let o = r[s];
        this.detectEvictedFragments(s, o, a, i);
    }
    onFragBuffered(e, t) {
        this.detectPartialFragments(t);
    }
    hasFragment(e) {
        let t = tc(e);
        return !!this.fragments[t];
    }
    hasFragments(e) {
        let { fragments: t } = this,
            n = Object.keys(t);
        if (!e) return n.length > 0;
        for (let i = n.length; i--; ) {
            let r = t[n[i]];
            if ((null == r ? void 0 : r.body.type) === e) return !0;
        }
        return !1;
    }
    hasParts(e) {
        var t;
        return !!(null != (t = this.activePartLists[e]) && t.length);
    }
    removeFragmentsInRange(e, t, n, i, r) {
        (!i || this.hasGaps) &&
            Object.keys(this.fragments).forEach((s) => {
                let a = this.fragments[s];
                if (!a) return;
                let o = a.body;
                o.type === n &&
                    (!i || o.gap) &&
                    o.start < t &&
                    o.end > e &&
                    (a.buffered || r) &&
                    this.removeFragment(o);
            });
    }
    removeFragment(e) {
        let t = tc(e);
        e.clearElementaryStreamInfo();
        let n = this.activePartLists[e.type];
        if (n) {
            let t = e.sn;
            this.activePartLists[e.type] = td(n, (e) => e.fragment.sn !== t);
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
function tu(e) {
    var t, n, i;
    return (
        e.buffered &&
        !!(
            e.body.gap ||
            (null != (t = e.range.video) && t.partial) ||
            (null != (n = e.range.audio) && n.partial) ||
            (null != (i = e.range.audiovideo) && i.partial)
        )
    );
}
function tc(e) {
    return `${e.type}_${e.level}_${e.sn}`;
}
function td(e, t) {
    return e.filter((e) => {
        let n = t(e);
        return n || e.clearElementaryStreamInfo(), n;
    });
}
class t_ {
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
            case 0:
                return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e);
            case 1:
                return this.subtle.decrypt({ name: "AES-CTR", counter: this.aesIV, length: 64 }, t, e);
            default:
                throw Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
        }
    }
}
class th {
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
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = this.invSubMix,
            l = o[0],
            u = o[1],
            c = o[2],
            d = o[3],
            _ = new Uint32Array(256),
            h = 0,
            f = 0,
            p = 0;
        for (p = 0; p < 256; p++) p < 128 ? (_[p] = p << 1) : (_[p] = (p << 1) ^ 283);
        for (p = 0; p < 256; p++) {
            let n = f ^ (f << 1) ^ (f << 2) ^ (f << 3) ^ (f << 4);
            (n = (n >>> 8) ^ (255 & n) ^ 99), (e[h] = n), (t[n] = h);
            let o = _[h],
                p = _[o],
                E = _[p],
                m = (257 * _[n]) ^ (0x1010100 * n);
            (i[h] = (m << 24) | (m >>> 8)),
                (r[h] = (m << 16) | (m >>> 16)),
                (s[h] = (m << 8) | (m >>> 24)),
                (a[h] = m),
                (m = (0x1010101 * E) ^ (65537 * p) ^ (257 * o) ^ (0x1010100 * h)),
                (l[n] = (m << 24) | (m >>> 8)),
                (u[n] = (m << 16) | (m >>> 16)),
                (c[n] = (m << 8) | (m >>> 24)),
                (d[n] = m),
                h ? ((h = o ^ _[_[_[E ^ o]]]), (f ^= _[_[f]])) : (h = f = 1);
        }
    }
    expandKey(e) {
        let t,
            n,
            i,
            r,
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
            h = this.rcon,
            f = this.invSubMix,
            p = f[0],
            E = f[1],
            m = f[2],
            g = f[3];
        for (t = 0; t < u; t++) {
            if (t < l) {
                i = c[t] = s[t];
                continue;
            }
            (r = i),
                t % l == 0
                    ? (r =
                          ((_[(r = (r << 8) | (r >>> 24)) >>> 24] << 24) |
                              (_[(r >>> 16) & 255] << 16) |
                              (_[(r >>> 8) & 255] << 8) |
                              _[255 & r]) ^
                          (h[(t / l) | 0] << 24))
                    : l > 6 &&
                      t % l == 4 &&
                      (r = (_[r >>> 24] << 24) | (_[(r >>> 16) & 255] << 16) | (_[(r >>> 8) & 255] << 8) | _[255 & r]),
                (c[t] = i = (c[t - l] ^ r) >>> 0);
        }
        for (n = 0; n < u; n++)
            (t = u - n),
                (r = 3 & n ? c[t] : c[t - 4]),
                n < 4 || t <= 4
                    ? (d[n] = r)
                    : (d[n] = p[_[r >>> 24]] ^ E[_[(r >>> 16) & 255]] ^ m[_[(r >>> 8) & 255]] ^ g[_[255 & r]]),
                (d[n] = d[n] >>> 0);
    }
    networkToHostOrderSwap(e) {
        return (e << 24) | ((65280 & e) << 8) | ((0xff0000 & e) >> 8) | (e >>> 24);
    }
    decrypt(e, t, n) {
        let i,
            r,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            _,
            h,
            f,
            p,
            E,
            m = this.keySize + 6,
            g = this.invKeySchedule,
            A = this.invSBox,
            I = this.invSubMix,
            T = I[0],
            S = I[1],
            y = I[2],
            N = I[3],
            v = this.uint8ArrayToUint32Array_(n),
            C = v[0],
            R = v[1],
            O = v[2],
            b = v[3],
            D = new Int32Array(e),
            L = new Int32Array(D.length),
            w = this.networkToHostOrderSwap;
        for (; t < D.length; ) {
            for (
                E = 1,
                    d = w(D[t]),
                    _ = w(D[t + 1]),
                    h = w(D[t + 2]),
                    f = w(D[t + 3]),
                    o = d ^ g[0],
                    l = f ^ g[1],
                    u = h ^ g[2],
                    c = _ ^ g[3],
                    p = 4;
                E < m;
                E++
            )
                (i = T[o >>> 24] ^ S[(l >> 16) & 255] ^ y[(u >> 8) & 255] ^ N[255 & c] ^ g[p]),
                    (r = T[l >>> 24] ^ S[(u >> 16) & 255] ^ y[(c >> 8) & 255] ^ N[255 & o] ^ g[p + 1]),
                    (s = T[u >>> 24] ^ S[(c >> 16) & 255] ^ y[(o >> 8) & 255] ^ N[255 & l] ^ g[p + 2]),
                    (a = T[c >>> 24] ^ S[(o >> 16) & 255] ^ y[(l >> 8) & 255] ^ N[255 & u] ^ g[p + 3]),
                    (o = i),
                    (l = r),
                    (u = s),
                    (c = a),
                    (p += 4);
            (i = (A[o >>> 24] << 24) ^ (A[(l >> 16) & 255] << 16) ^ (A[(u >> 8) & 255] << 8) ^ A[255 & c] ^ g[p]),
                (r =
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
                (L[t] = w(i ^ C)),
                (L[t + 1] = w(a ^ R)),
                (L[t + 2] = w(s ^ O)),
                (L[t + 3] = w(r ^ b)),
                (C = d),
                (R = _),
                (O = h),
                (b = f),
                (t += 4);
        }
        return L.buffer;
    }
}
class tf {
    constructor(e, t, n) {
        (this.subtle = void 0),
            (this.key = void 0),
            (this.aesMode = void 0),
            (this.subtle = e),
            (this.key = t),
            (this.aesMode = n);
    }
    expandKey() {
        let e = (function (e) {
            switch (e) {
                case 0:
                    return "AES-CBC";
                case 1:
                    return "AES-CTR";
                default:
                    throw Error(`[FastAESKey] invalid aes mode ${e}`);
            }
        })(this.aesMode);
        return this.subtle.importKey("raw", this.key, { name: e }, !1, ["encrypt", "decrypt"]);
    }
}
class tp {
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
        if ((this.reset(), this.removePKCS7Padding)) {
            let e, t;
            return (t = (e = n.byteLength) && new DataView(n.buffer).getUint8(e - 1)) ? n.slice(0, e - t) : n;
        }
        return n;
    }
    reset() {
        (this.currentResult = null),
            (this.currentIV = null),
            (this.remainderData = null),
            this.softwareDecrypter && (this.softwareDecrypter = null);
    }
    decrypt(e, t, n, i) {
        return this.useSoftware
            ? new Promise((r, s) => {
                  let a = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
                  this.softwareDecrypt(a, t, n, i);
                  let o = this.flush();
                  o ? r(o.buffer) : s(Error("[softwareDecrypt] Failed to decrypt data"));
              })
            : this.webCryptoDecrypt(new Uint8Array(e), t, n, i);
    }
    softwareDecrypt(e, t, n, i) {
        let { currentIV: r, currentResult: s, remainderData: a } = this;
        if (0 !== i || 16 !== t.byteLength) return B.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
        this.logOnce("JS AES decrypt"), a && ((e = em(a, e)), (this.remainderData = null));
        let o = this.getValidChunk(e);
        if (!o.length) return null;
        r && (n = r);
        let l = this.softwareDecrypter;
        return (l || (l = this.softwareDecrypter = new th()),
        l.expandKey(t),
        (this.currentResult = l.decrypt(o.buffer, 0, n)),
        (this.currentIV = o.slice(-16).buffer),
        s)
            ? s
            : null;
    }
    webCryptoDecrypt(e, t, n, i) {
        if (this.key !== t || !this.fastAesKey) {
            if (!this.subtle) return Promise.resolve(this.onWebCryptoError(e, t, n, i));
            (this.key = t), (this.fastAesKey = new tf(this.subtle, t, i));
        }
        return this.fastAesKey
            .expandKey()
            .then((t) =>
                this.subtle
                    ? (this.logOnce("WebCrypto AES decrypt"),
                      new t_(this.subtle, new Uint8Array(n), i).decrypt(e.buffer, t))
                    : Promise.reject(Error("web crypto not initialized")),
            )
            .catch(
                (r) => (
                    B.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`),
                    this.onWebCryptoError(e, t, n, i)
                ),
            );
    }
    onWebCryptoError(e, t, n, i) {
        let r = this.enableSoftwareAES;
        if (r) {
            (this.useSoftware = !0), (this.logEnabled = !0), this.softwareDecrypt(e, t, n, i);
            let r = this.flush();
            if (r) return r.buffer;
        }
        throw Error("WebCrypto" + (r ? " and softwareDecrypt" : "") + ": failed to decrypt data");
    }
    getValidChunk(e) {
        let t = e,
            n = e.length - (e.length % 16);
        return n !== e.length && ((t = e.slice(0, n)), (this.remainderData = e.slice(n))), t;
    }
    logOnce(e) {
        this.logEnabled && (B.log(`[decrypter]: ${e}`), (this.logEnabled = !1));
    }
}
class tE {
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
                new tA({
                    type: o.NETWORK_ERROR,
                    details: l.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: e,
                    error: Error(`Fragment does not have a ${n ? "part list" : "url"}`),
                    networkDetails: null,
                }),
            );
        this.abort();
        let i = this.config,
            r = i.fLoader,
            s = i.loader;
        return new Promise((a, u) => {
            if ((this.loader && this.loader.destroy(), e.gap))
                if (e.tagList.some((e) => "GAP" === e[0])) return void u(tg(e));
                else e.gap = !1;
            let c = (this.loader = r ? new r(i) : new s(i)),
                d = tm(e);
            e.loader = c;
            let _ = tt(i.fragLoadPolicy.default),
                h = {
                    loadPolicy: _,
                    timeout: _.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                    highWaterMark: "initSegment" === e.sn ? 1 / 0 : 131072,
                };
            e.stats = c.stats;
            let f = {
                onSuccess: (t, n, i, r) => {
                    this.resetLoader(e, c);
                    let s = t.data;
                    i.resetIV &&
                        e.decryptdata &&
                        ((e.decryptdata.iv = new Uint8Array(s.slice(0, 16))), (s = s.slice(16))),
                        a({ frag: e, part: null, payload: s, networkDetails: r });
                },
                onError: (t, i, r, s) => {
                    this.resetLoader(e, c),
                        u(
                            new tA({
                                type: o.NETWORK_ERROR,
                                details: l.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: e,
                                response: x({ url: n, data: void 0 }, t),
                                error: Error(`HTTP Error ${t.code} ${t.text}`),
                                networkDetails: r,
                                stats: s,
                            }),
                        );
                },
                onAbort: (t, n, i) => {
                    this.resetLoader(e, c),
                        u(
                            new tA({
                                type: o.NETWORK_ERROR,
                                details: l.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: e,
                                error: Error("Aborted"),
                                networkDetails: i,
                                stats: t,
                            }),
                        );
                },
                onTimeout: (t, n, i) => {
                    this.resetLoader(e, c),
                        u(
                            new tA({
                                type: o.NETWORK_ERROR,
                                details: l.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: e,
                                error: Error(`Timeout after ${h.timeout}ms`),
                                networkDetails: i,
                                stats: t,
                            }),
                        );
                },
            };
            t && (f.onProgress = (n, i, r, s) => t({ frag: e, part: null, payload: r, networkDetails: s })),
                c.load(d, h, f);
        });
    }
    loadPart(e, t, n) {
        this.abort();
        let i = this.config,
            r = i.fLoader,
            s = i.loader;
        return new Promise((a, u) => {
            if ((this.loader && this.loader.destroy(), e.gap || t.gap)) return void u(tg(e, t));
            let c = (this.loader = r ? new r(i) : new s(i)),
                d = tm(e, t);
            e.loader = c;
            let _ = tt(i.fragLoadPolicy.default),
                h = {
                    loadPolicy: _,
                    timeout: _.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                    highWaterMark: 131072,
                };
            (t.stats = c.stats),
                c.load(d, h, {
                    onSuccess: (i, r, s, o) => {
                        this.resetLoader(e, c), this.updateStatsFromPart(e, t);
                        let l = { frag: e, part: t, payload: i.data, networkDetails: o };
                        n(l), a(l);
                    },
                    onError: (n, i, r, s) => {
                        this.resetLoader(e, c),
                            u(
                                new tA({
                                    type: o.NETWORK_ERROR,
                                    details: l.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    response: x({ url: d.url, data: void 0 }, n),
                                    error: Error(`HTTP Error ${n.code} ${n.text}`),
                                    networkDetails: r,
                                    stats: s,
                                }),
                            );
                    },
                    onAbort: (n, i, r) => {
                        (e.stats.aborted = t.stats.aborted),
                            this.resetLoader(e, c),
                            u(
                                new tA({
                                    type: o.NETWORK_ERROR,
                                    details: l.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error("Aborted"),
                                    networkDetails: r,
                                    stats: n,
                                }),
                            );
                    },
                    onTimeout: (n, i, r) => {
                        this.resetLoader(e, c),
                            u(
                                new tA({
                                    type: o.NETWORK_ERROR,
                                    details: l.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error(`Timeout after ${h.timeout}ms`),
                                    networkDetails: r,
                                    stats: n,
                                }),
                            );
                    },
                });
        });
    }
    updateStatsFromPart(e, t) {
        let n = e.stats,
            i = t.stats,
            r = i.total;
        if (((n.loaded += i.loaded), r)) {
            let i = Math.round(e.duration / t.duration),
                s = Math.min(Math.round(n.loaded / r), i),
                a = (i - s) * Math.round(n.loaded / s);
            n.total = n.loaded + a;
        } else n.total = Math.max(n.loaded, n.total);
        let s = n.loading,
            a = i.loading;
        s.start ? (s.first += a.first - a.start) : ((s.start = a.start), (s.first = a.first)), (s.end = a.end);
    }
    resetLoader(e, t) {
        (e.loader = null),
            this.loader === t && (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
            t.destroy();
    }
}
function tm(e, t = null) {
    let n = t || e,
        i = { frag: e, part: t, responseType: "arraybuffer", url: n.url, headers: {}, rangeStart: 0, rangeEnd: 0 },
        s = n.byteRangeStartOffset,
        a = n.byteRangeEndOffset;
    if (r(s) && r(a)) {
        var o, l;
        let t = s,
            n = a;
        if (
            "initSegment" === e.sn &&
            ("AES-128" === (l = null == (o = e.decryptdata) ? void 0 : o.method) || "AES-256" === l)
        ) {
            let e = a - s;
            e % 16 && (n = a + (16 - (e % 16))), 0 !== s && ((i.resetIV = !0), (t = s - 16));
        }
        (i.rangeStart = t), (i.rangeEnd = n);
    }
    return i;
}
function tg(e, t) {
    let n = Error(`GAP ${e.gap ? "tag" : "attribute"} found`),
        i = { type: o.MEDIA_ERROR, details: l.FRAG_GAP, fatal: !1, frag: e, error: n, networkDetails: null };
    return t && (i.part = t), ((t || e).stats.aborted = !0), new tA(i);
}
class tA extends Error {
    constructor(e) {
        super(e.error.message), (this.data = void 0), (this.data = e);
    }
}
class tI extends k {
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
class tT {
    constructor(e, t, n, i = 0, r = -1, s = !1) {
        (this.level = void 0),
            (this.sn = void 0),
            (this.part = void 0),
            (this.id = void 0),
            (this.size = void 0),
            (this.partial = void 0),
            (this.transmuxing = tS()),
            (this.buffering = { audio: tS(), video: tS(), audiovideo: tS() }),
            (this.level = e),
            (this.sn = t),
            (this.id = n),
            (this.size = i),
            (this.part = r),
            (this.partial = s);
    }
}
function tS() {
    return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
}
let ty = { length: 0, start: () => 0, end: () => 0 };
class tN {
    static isBuffered(e, t) {
        if (e) {
            let n = tN.getBuffered(e);
            for (let e = n.length; e--; ) if (t >= n.start(e) && t <= n.end(e)) return !0;
        }
        return !1;
    }
    static bufferedRanges(e) {
        if (e) {
            let t = tN.getBuffered(e);
            return tN.timeRangesToArray(t);
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
            let i = tN.bufferedRanges(e);
            if (i.length) return tN.bufferedInfo(i, t, n);
        }
        return { len: 0, start: t, end: t, bufferedIndex: -1 };
    }
    static bufferedInfo(e, t, n) {
        let i;
        (t = Math.max(0, t)), e.length > 1 && e.sort((e, t) => e.start - t.start || t.end - e.end);
        let r = -1,
            s = [];
        if (n)
            for (let i = 0; i < e.length; i++) {
                t >= e[i].start && t <= e[i].end && (r = i);
                let a = s.length;
                if (a) {
                    let t = s[a - 1].end;
                    e[i].start - t < n ? e[i].end > t && (s[a - 1].end = e[i].end) : s.push(e[i]);
                } else s.push(e[i]);
            }
        else s = e;
        let a = 0,
            o = t,
            l = t;
        for (let e = 0; e < s.length; e++) {
            let u = s[e].start,
                c = s[e].end;
            if ((-1 === r && t >= u && t <= c && (r = e), t + n >= u && t < c)) (o = u), (a = (l = c) - t);
            else if (t + n < u) {
                i = u;
                break;
            }
        }
        return { len: a, start: o || 0, end: l || 0, nextStart: i, buffered: e, bufferedIndex: r };
    }
    static getBuffered(e) {
        try {
            return e.buffered || ty;
        } catch (e) {
            return B.log("failed to get media.buffered", e), ty;
        }
    }
}
let tv = /\{\$([a-zA-Z0-9-_]+)\}/g;
function tC(e, t) {
    if (null !== e.variableList || e.hasVariableRefs) {
        let n = e.variableList;
        return t.replace(tv, (t) => {
            let i = t.substring(2, t.length - 1),
                r = null == n ? void 0 : n[i];
            return void 0 === r
                ? (e.playlistParsingError ||
                      (e.playlistParsingError = Error(
                          `Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`,
                      )),
                  t)
                : r;
        });
    }
    return t;
}
function tR(e, t, n) {
    let i,
        r,
        s = e.variableList;
    if ((s || (e.variableList = s = {}), "QUERYPARAM" in t)) {
        i = t.QUERYPARAM;
        try {
            let e = new self.URL(n).searchParams;
            if (e.has(i)) r = e.get(i);
            else throw Error(`"${i}" does not match any query parameter in URI: "${n}"`);
        } catch (t) {
            e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE QUERYPARAM: ${t.message}`));
        }
    } else (i = t.NAME), (r = t.VALUE);
    i in s
        ? e.playlistParsingError ||
          (e.playlistParsingError = Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`))
        : (s[i] = r || "");
}
let tO = /^(\d+)x(\d+)$/,
    tb = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class tD {
    constructor(e, t) {
        "string" == typeof e && (e = tD.parseAttrList(e, t)), M(this, e);
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
        let t = tO.exec(this[e]);
        if (null !== t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };
    }
    static parseAttrList(e, t) {
        let n,
            i = {};
        for (tb.lastIndex = 0; null !== (n = tb.exec(e)); ) {
            let r = n[1].trim(),
                s = n[2],
                a = 0 === s.indexOf('"') && s.lastIndexOf('"') === s.length - 1,
                o = !1;
            if (a) s = s.slice(1, -1);
            else
                switch (r) {
                    case "IV":
                    case "SCTE35-CMD":
                    case "SCTE35-IN":
                    case "SCTE35-OUT":
                        o = !0;
                }
            if (t && (a || o)) s = tC(t, s);
            else if (!o && !a)
                switch (r) {
                    case "CLOSED-CAPTIONS":
                        if ("NONE" === s) break;
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
                        B.warn(`${e}: attribute ${r} is missing quotes`);
                }
            i[r] = s;
        }
        return i;
    }
}
class tL {
    constructor(e, t, n = 0) {
        var i;
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
            (this.tagOrder = null != (i = null == t ? void 0 : t.tagOrder) ? i : n),
            t)
        ) {
            const n = t.attr;
            for (const t in n)
                if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== n[t]) {
                    B.warn(`DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`),
                        (this._badValueForSameId = t);
                    break;
                }
            e = M(new tD({}), n, e);
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
            r(e.getTime()) && (this._endDate = e);
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
            ? (B.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN)
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
            if (r(e)) return e;
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
        return "com.apple.hls.interstitial" === this.class;
    }
    get isValid() {
        return (
            !!this.id &&
            !this._badValueForSameId &&
            r(this.startDate.getTime()) &&
            (null === this.duration || this.duration >= 0) &&
            (!this.endOnNext || !!this.class) &&
            (!this.attr.CUE || (!this.cue.pre && !this.cue.post) || this.cue.pre !== this.cue.post) &&
            (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr)
        );
    }
}
class tw {
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
        return !!this.fragments.length && r(this.fragments[this.fragments.length - 1].programDateTime);
    }
    get levelTargetDuration() {
        return this.averagetargetduration || this.targetduration || 10;
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
function tM(e, t) {
    return e.length === t.length && !e.some((e, n) => e !== t[n]);
}
function tP(e, t) {
    return (!e && !t) || (!!e && !!t && tM(e, t));
}
function tx(e) {
    return "AES-128" === e || "AES-256" === e || "AES-256-CTR" === e;
}
function tk(e) {
    switch (e) {
        case "AES-128":
        case "AES-256":
            return 0;
        case "AES-256-CTR":
            return 1;
        default:
            throw Error(`invalid full segment method ${e}`);
    }
}
function tU(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
function tG(e) {
    return Uint8Array.from(unescape(encodeURIComponent(e)), (e) => e.charCodeAt(0));
}
function tF(e) {
    let t = function (e, t, n) {
        let i = e[t];
        (e[t] = e[n]), (e[n] = i);
    };
    t(e, 0, 3), t(e, 1, 2), t(e, 4, 5), t(e, 6, 7);
}
let tV = "u" > typeof self ? self : void 0;
var tB = "org.w3.clearkey",
    tH = "com.apple.fps",
    tj = "com.microsoft.playready",
    tY = "com.widevine.alpha",
    tW = "org.w3.clearkey",
    tK = "com.apple.streamingkeydelivery",
    t$ = "com.microsoft.playready",
    tz = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
function tq(e) {
    switch (e) {
        case tK:
            return tH;
        case t$:
            return tj;
        case tz:
            return tY;
        case tW:
            return tB;
    }
}
function tX(e) {
    switch (e) {
        case tH:
            return tK;
        case tj:
            return t$;
        case tY:
            return tz;
        case tB:
            return tW;
    }
}
function tZ(e) {
    let { drmSystems: t, widevineLicenseUrl: n } = e,
        i = t ? [tH, tY, tj, tB].filter((e) => !!t[e]) : [];
    return !i[tY] && n && i.push(tY), i;
}
let tQ =
        null != tV && null != (p = tV.navigator) && p.requestMediaKeySystemAccess
            ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
            : null,
    tJ = {};
class t0 {
    static clearKeyUriToKeyIdMap() {
        tJ = {};
    }
    static setKeyIdForUri(e, t) {
        tJ[e] = t;
    }
    constructor(e, t, n, i = [1], r = null, s) {
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
            (this.keyFormatVersions = i),
            (this.iv = r),
            (this.encrypted = !!e && "NONE" !== e),
            (this.isCommonEncryption = this.encrypted && !tx(e)),
            null != s && s.startsWith("0x") && (this.keyId = new Uint8Array(K(s)));
    }
    matches(e) {
        return (
            e.uri === this.uri &&
            e.method === this.method &&
            e.encrypted === this.encrypted &&
            e.keyFormat === this.keyFormat &&
            tM(e.keyFormatVersions, this.keyFormatVersions) &&
            tP(e.iv, this.iv) &&
            tP(e.keyId, this.keyId)
        );
    }
    isSupported() {
        if (this.method) {
            if (tx(this.method) || "NONE" === this.method) return !0;
            if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
            switch (this.keyFormat) {
                case tK:
                case tz:
                case t$:
                case tW:
                    return -1 !== ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
            }
        }
        return !1;
    }
    getDecryptData(e) {
        if (!this.encrypted || !this.uri) return null;
        if (tx(this.method)) {
            let t = this.iv;
            return (
                t ||
                    ("number" != typeof e &&
                        (B.warn(
                            `missing IV for initialization segment with method="${this.method}" - compliance issue`,
                        ),
                        (e = 0)),
                    (t = (function (e) {
                        let t = new Uint8Array(16);
                        for (let n = 12; n < 16; n++) t[n] = (e >> (8 * (15 - n))) & 255;
                        return t;
                    })(e))),
                new t0(this.method, this.uri, "identity", this.keyFormatVersions, t)
            );
        }
        if (this.pssh && this.keyId) return this;
        let t = (function (e) {
            let t = e.split(":"),
                n = null;
            if ("data" === t[0] && 2 === t.length) {
                let e = t[1].split(";"),
                    i = e[e.length - 1].split(",");
                if (2 === i.length) {
                    let t = "base64" === i[0],
                        r = i[1];
                    if (t) e.splice(-1, 1), (n = tU(r));
                    else {
                        let e, t;
                        (e = tG(r).subarray(0, 16)), (t = new Uint8Array(16)).set(e, 16 - e.length), (n = t);
                    }
                }
            }
            return n;
        })(this.uri);
        if (t)
            switch (this.keyFormat) {
                case tz:
                    if (((this.pssh = t), !this.keyId)) {
                        let e = (function (e) {
                            let t = [];
                            if (e instanceof ArrayBuffer) {
                                let n = e.byteLength,
                                    i = 0;
                                for (; i + 32 < n; ) {
                                    let n = (function (e) {
                                        let t = e.getUint32(0),
                                            n = e.byteOffset,
                                            i = e.byteLength;
                                        if (i < t) return { offset: n, size: i };
                                        if (0x70737368 !== e.getUint32(4)) return { offset: n, size: t };
                                        let r = e.getUint32(8) >>> 24;
                                        if (0 !== r && 1 !== r) return { offset: n, size: t };
                                        let s = e.buffer,
                                            a = W(new Uint8Array(s, n + 12, 16)),
                                            o = null,
                                            l = 0;
                                        if (0 === r) l = 28;
                                        else {
                                            let r = e.getUint32(28);
                                            if (!r || i < 32 + 16 * r) return { offset: n, size: t };
                                            o = [];
                                            for (let e = 0; e < r; e++) o.push(new Uint8Array(s, n + 32 + 16 * e, 16));
                                            l = 32 + 16 * r;
                                        }
                                        if (!l) return { offset: n, size: t };
                                        let u = e.getUint32(l);
                                        return t - 32 < u
                                            ? { offset: n, size: t }
                                            : {
                                                  version: r,
                                                  systemId: a,
                                                  kids: o,
                                                  data: new Uint8Array(s, n + l + 4, u),
                                                  offset: n,
                                                  size: t,
                                              };
                                    })(new DataView(e, i));
                                    t.push(n), (i += n.size);
                                }
                            }
                            return t;
                        })(t.buffer);
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
                case t$: {
                    let e = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                    (this.pssh = (function (e, t) {
                        let n, i;
                        if (16 !== e.byteLength) throw RangeError("Invalid system id");
                        (n = new Uint8Array()), (i = new Uint8Array());
                        let r = new Uint8Array(4);
                        return (
                            t.byteLength > 0 && new DataView(r.buffer).setUint32(0, t.byteLength, !1),
                            (function (e, ...t) {
                                let n = t.length,
                                    i = 8,
                                    r = n;
                                for (; r--; ) i += t[r].byteLength;
                                let s = new Uint8Array(i);
                                for (
                                    s[0] = (i >> 24) & 255,
                                        s[1] = (i >> 16) & 255,
                                        s[2] = (i >> 8) & 255,
                                        s[3] = 255 & i,
                                        s.set(e, 4),
                                        r = 0,
                                        i = 8;
                                    r < n;
                                    r++
                                )
                                    s.set(t[r], i), (i += t[r].byteLength);
                                return s;
                            })([112, 115, 115, 104], new Uint8Array([0, 0, 0, 0]), e, i, n, r, t)
                        );
                    })(e, t)),
                        (this.keyId = (function (e) {
                            let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
                                n = String.fromCharCode.apply(null, Array.from(t)),
                                i = n.substring(n.indexOf("<"), n.length),
                                r = new DOMParser().parseFromString(i, "text/xml").getElementsByTagName("KID")[0];
                            if (r) {
                                let e = r.childNodes[0] ? r.childNodes[0].nodeValue : r.getAttribute("VALUE");
                                if (e) {
                                    let t = tU(e).subarray(0, 16);
                                    return tF(t), t;
                                }
                            }
                            return null;
                        })(t));
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
            let e = tJ[this.uri];
            if (!e) {
                let t = Object.keys(tJ).length % Number.MAX_SAFE_INTEGER;
                new DataView((e = new Uint8Array(16)).buffer, 12, 4).setUint32(0, t), t0.setKeyIdForUri(this.uri, e);
            }
            this.keyId = e;
        }
        return this;
    }
}
let t1 =
        /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
    t2 = /#EXT-X-MEDIA:(.*)/g,
    t3 = /^#EXT(?:INF|-X-TARGETDURATION):/m,
    t6 = RegExp(
        [/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"),
        "g",
    ),
    t4 = new RegExp(
        [
            /#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/
                .source,
            /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,
            /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,
            /(#)([^:]*):(.*)/.source,
            /(#)(.*)(?:.*)\r?\n?/.source,
        ].join("|"),
    );
class t5 {
    static findGroup(e, t) {
        for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (i.id === t) return i;
        }
    }
    static resolve(e, t) {
        return z.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });
    }
    static isMediaPlaylist(e) {
        return t3.test(e);
    }
    static parseMasterPlaylist(e, t) {
        var n;
        let i,
            r = {
                contentSteering: null,
                levels: [],
                playlistParsingError: null,
                sessionData: null,
                sessionKeys: null,
                startTimeOffset: null,
                variableList: null,
                hasVariableRefs: tv.test(e),
            },
            s = [];
        if (((t1.lastIndex = 0), !e.startsWith("#EXTM3U")))
            return (r.playlistParsingError = Error("no EXTM3U delimiter")), r;
        for (; null != (i = t1.exec(e)); )
            if (i[1]) {
                let e = new tD(i[1], r),
                    a = tC(r, i[2]),
                    o = {
                        attrs: e,
                        bitrate: e.decimalInteger("BANDWIDTH") || e.decimalInteger("AVERAGE-BANDWIDTH"),
                        name: e.NAME,
                        url: t5.resolve(a, t),
                    },
                    l = e.decimalResolution("RESOLUTION");
                l && ((o.width = l.width), (o.height = l.height)), ne(e.CODECS, o);
                let u = e["SUPPLEMENTAL-CODECS"];
                u && ((o.supplemental = {}), ne(u, o.supplemental)),
                    (null != (n = o.unknownCodecs) && n.length) || s.push(o),
                    r.levels.push(o);
            } else if (i[3]) {
                let e = i[3],
                    n = i[4];
                switch (e) {
                    case "SESSION-DATA": {
                        let e = new tD(n, r),
                            t = e["DATA-ID"];
                        t && (null === r.sessionData && (r.sessionData = {}), (r.sessionData[t] = e));
                        break;
                    }
                    case "SESSION-KEY": {
                        let e = t8(n, t, r);
                        e.encrypted && e.isSupported()
                            ? (null === r.sessionKeys && (r.sessionKeys = []), r.sessionKeys.push(e))
                            : B.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${n}"`);
                        break;
                    }
                    case "DEFINE":
                        {
                            let e = new tD(n, r);
                            tR(r, e, t);
                        }
                        break;
                    case "CONTENT-STEERING": {
                        let e = new tD(n, r);
                        r.contentSteering = { uri: t5.resolve(e["SERVER-URI"], t), pathwayId: e["PATHWAY-ID"] || "." };
                        break;
                    }
                    case "START":
                        r.startTimeOffset = t9(n);
                }
            }
        let a = s.length > 0 && s.length < r.levels.length;
        return (
            (r.levels = a ? s : r.levels),
            0 === r.levels.length && (r.playlistParsingError = Error("no levels found in manifest")),
            r
        );
    }
    static parseMasterPlaylistMedia(e, t, n) {
        let i,
            r = {},
            s = n.levels,
            a = {
                AUDIO: s.map((e) => ({ id: e.attrs.AUDIO, audioCodec: e.audioCodec })),
                SUBTITLES: s.map((e) => ({ id: e.attrs.SUBTITLES, textCodec: e.textCodec })),
                "CLOSED-CAPTIONS": [],
            },
            o = 0;
        for (t2.lastIndex = 0; null !== (i = t2.exec(e)); ) {
            let e = new tD(i[1], n),
                s = e.TYPE;
            if (s) {
                let n = a[s],
                    i = r[s] || [];
                r[s] = i;
                let l = e.LANGUAGE,
                    u = e["ASSOC-LANGUAGE"],
                    c = e.CHANNELS,
                    d = e.CHARACTERISTICS,
                    _ = e["INSTREAM-ID"],
                    h = {
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
                        url: e.URI ? t5.resolve(e.URI, t) : "",
                    };
                if (
                    (u && (h.assocLang = u),
                    c && (h.channels = c),
                    d && (h.characteristics = d),
                    _ && (h.instreamId = _),
                    null != n && n.length)
                ) {
                    let e = t5.findGroup(n, h.groupId) || n[0];
                    nt(h, e, "audioCodec"), nt(h, e, "textCodec");
                }
                i.push(h);
            }
        }
        return r;
    }
    static parseLevelPlaylist(e, t, n, i, s, a) {
        var o;
        let l,
            u,
            c,
            d,
            _ = { url: t },
            h = new tw(t),
            f = h.fragments,
            p = [],
            E = null,
            m = 0,
            g = 0,
            A = 0,
            I = 0,
            T = 0,
            S = null,
            y = new et(i, _),
            N = -1,
            v = !1,
            C = null;
        if (
            ((t6.lastIndex = 0),
            (h.m3u8 = e),
            (h.hasVariableRefs = tv.test(e)),
            (null == (o = t6.exec(e)) ? void 0 : o[0]) !== "#EXTM3U")
        )
            return (h.playlistParsingError = Error("Missing format identifier #EXTM3U")), h;
        for (; null !== (l = t6.exec(e)); ) {
            v &&
                ((v = !1),
                ((y = new et(i, _)).playlistOffset = A),
                y.setStart(A),
                (y.sn = m),
                (y.cc = I),
                T && (y.bitrate = T),
                (y.level = n),
                E &&
                    ((y.initSegment = E),
                    E.rawProgramDateTime &&
                        ((y.rawProgramDateTime = E.rawProgramDateTime), (E.rawProgramDateTime = null)),
                    C && (y.setByteRange(C), (C = null))));
            let e = l[1];
            if (e) {
                y.duration = parseFloat(e);
                let t = (" " + l[2]).slice(1);
                (y.title = t || null), y.tagList.push(t ? ["INF", e, t] : ["INF", e]);
            } else if (l[3]) {
                if (r(y.duration)) {
                    (y.playlistOffset = A),
                        y.setStart(A),
                        c && nr(y, c, h),
                        (y.sn = m),
                        (y.level = n),
                        (y.cc = I),
                        f.push(y);
                    let e = (" " + l[3]).slice(1);
                    (y.relurl = tC(h, e)), nn(y, S, p), (S = y), (A += y.duration), m++, (g = 0), (v = !0);
                }
            } else {
                if (!(l = l[0].match(t4))) {
                    B.warn("No matches on slow regex match for level playlist!");
                    continue;
                }
                for (u = 1; u < l.length && void 0 === l[u]; u++);
                let e = (" " + l[u]).slice(1),
                    s = (" " + l[u + 1]).slice(1),
                    o = l[u + 2] ? (" " + l[u + 2]).slice(1) : null;
                switch (e) {
                    case "BYTERANGE":
                        S ? y.setByteRange(s, S) : y.setByteRange(s);
                        break;
                    case "PROGRAM-DATE-TIME":
                        (y.rawProgramDateTime = s),
                            y.tagList.push(["PROGRAM-DATE-TIME", s]),
                            -1 === N && (N = f.length);
                        break;
                    case "PLAYLIST-TYPE":
                        h.type && ns(h, e, l), (h.type = s.toUpperCase());
                        break;
                    case "MEDIA-SEQUENCE":
                        0 !== h.startSN ? ns(h, e, l) : f.length > 0 && na(h, e, l), (m = h.startSN = parseInt(s));
                        break;
                    case "SKIP": {
                        h.skippedSegments && ns(h, e, l);
                        let t = new tD(s, h),
                            n = t.decimalInteger("SKIPPED-SEGMENTS");
                        if (r(n)) {
                            h.skippedSegments += n;
                            for (let e = n; e--; ) f.push(null);
                            m += n;
                        }
                        let i = t.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                        i &&
                            (h.recentlyRemovedDateranges = (h.recentlyRemovedDateranges || []).concat(i.split("	")));
                        break;
                    }
                    case "TARGETDURATION":
                        0 !== h.targetduration && ns(h, e, l), (h.targetduration = Math.max(parseInt(s), 1));
                        break;
                    case "VERSION":
                        null !== h.version && ns(h, e, l), (h.version = parseInt(s));
                        break;
                    case "INDEPENDENT-SEGMENTS":
                        break;
                    case "ENDLIST":
                        h.live || ns(h, e, l), (h.live = !1);
                        break;
                    case "#":
                        (s || o) && y.tagList.push(o ? [s, o] : [s]);
                        break;
                    case "DISCONTINUITY":
                        I++, y.tagList.push(["DIS"]);
                        break;
                    case "GAP":
                        (y.gap = !0), y.tagList.push([e]);
                        break;
                    case "BITRATE":
                        y.tagList.push([e, s]), r((T = 1e3 * parseInt(s))) ? (y.bitrate = T) : (T = 0);
                        break;
                    case "DATERANGE": {
                        let e = new tD(s, h),
                            t = new tL(e, h.dateRanges[e.ID], h.dateRangeTagCount);
                        h.dateRangeTagCount++,
                            t.isValid || h.skippedSegments
                                ? (h.dateRanges[t.id] = t)
                                : B.warn(`Ignoring invalid DATERANGE tag: "${s}"`),
                            y.tagList.push(["EXT-X-DATERANGE", s]);
                        break;
                    }
                    case "DEFINE":
                        {
                            let e = new tD(s, h);
                            "IMPORT" in e
                                ? (function (e, t, n) {
                                      let i = t.IMPORT;
                                      if (n && i in n) {
                                          let t = e.variableList;
                                          t || (e.variableList = t = {}), (t[i] = n[i]);
                                      } else
                                          e.playlistParsingError ||
                                              (e.playlistParsingError = Error(
                                                  `EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${i}"`,
                                              ));
                                  })(h, e, a)
                                : tR(h, e, t);
                        }
                        break;
                    case "DISCONTINUITY-SEQUENCE":
                        0 !== h.startCC ? ns(h, e, l) : f.length > 0 && na(h, e, l), (h.startCC = I = parseInt(s));
                        break;
                    case "KEY": {
                        let e = t8(s, t, h);
                        if (e.isSupported()) {
                            if ("NONE" === e.method) {
                                c = void 0;
                                break;
                            }
                            c || (c = {});
                            let t = c[e.keyFormat];
                            (null != t && t.matches(e)) || (t && (c = M({}, c)), (c[e.keyFormat] = e));
                        } else B.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${s}"`);
                        break;
                    }
                    case "START":
                        h.startTimeOffset = t9(s);
                        break;
                    case "MAP": {
                        let e = new tD(s, h);
                        if (y.duration) {
                            let t = new et(i, _);
                            ni(t, e, n, c),
                                (E = t),
                                (y.initSegment = E),
                                E.rawProgramDateTime &&
                                    !y.rawProgramDateTime &&
                                    (y.rawProgramDateTime = E.rawProgramDateTime);
                        } else {
                            let t = y.byteRangeEndOffset;
                            if (t) {
                                let e = y.byteRangeStartOffset;
                                C = `${t - e}@${e}`;
                            } else C = null;
                            ni(y, e, n, c), (E = y), (v = !0);
                        }
                        E.cc = I;
                        break;
                    }
                    case "SERVER-CONTROL":
                        d && ns(h, e, l),
                            (h.canBlockReload = (d = new tD(s)).bool("CAN-BLOCK-RELOAD")),
                            (h.canSkipUntil = d.optionalFloat("CAN-SKIP-UNTIL", 0)),
                            (h.canSkipDateRanges = h.canSkipUntil > 0 && d.bool("CAN-SKIP-DATERANGES")),
                            (h.partHoldBack = d.optionalFloat("PART-HOLD-BACK", 0)),
                            (h.holdBack = d.optionalFloat("HOLD-BACK", 0));
                        break;
                    case "PART-INF":
                        h.partTarget && ns(h, e, l), (h.partTarget = new tD(s).decimalFloatingPoint("PART-TARGET"));
                        break;
                    case "PART": {
                        let e = h.partList;
                        e || (e = h.partList = []);
                        let t = g > 0 ? e[e.length - 1] : void 0,
                            n = g++,
                            i = new en(new tD(s, h), y, _, n, t);
                        e.push(i), (y.duration += i.duration);
                        break;
                    }
                    case "PRELOAD-HINT": {
                        let e = new tD(s, h);
                        h.preloadHint = e;
                        break;
                    }
                    case "RENDITION-REPORT": {
                        let e = new tD(s, h);
                        (h.renditionReports = h.renditionReports || []), h.renditionReports.push(e);
                        break;
                    }
                    default:
                        B.warn(`line parsed but not handled: ${l}`);
                }
            }
        }
        S && !S.relurl
            ? (f.pop(), (A -= S.duration), h.partList && (h.fragmentHint = S))
            : h.partList && (nn(y, S, p), (y.cc = I), (h.fragmentHint = y), c && nr(y, c, h)),
            h.targetduration || (h.playlistParsingError = Error("Missing Target Duration"));
        let R = f.length,
            O = f[0],
            b = f[R - 1];
        if ((A += h.skippedSegments * h.targetduration) > 0 && R && b) {
            h.averagetargetduration = A / R;
            let e = b.sn;
            (h.endSN = "initSegment" !== e ? e : 0),
                h.live || (b.endList = !0),
                N > 0 &&
                    ((function (e, t) {
                        let n = e[t];
                        for (let i = t; i--; ) {
                            let t = e[i];
                            if (!t) return;
                            (t.programDateTime = n.programDateTime - 1e3 * t.duration), (n = t);
                        }
                    })(f, N),
                    O && p.unshift(O));
        }
        return (
            h.fragmentHint && (A += h.fragmentHint.duration),
            (h.totalduration = A),
            p.length && h.dateRangeTagCount && O && t7(p, h),
            (h.endCC = I),
            h
        );
    }
}
function t7(e, t) {
    let n = e.length;
    if (!n)
        if (!t.hasProgramDateTime) return;
        else {
            let i = t.fragments[t.fragments.length - 1];
            e.push(i), n++;
        }
    let i = e[n - 1],
        r = t.live ? 1 / 0 : t.totalduration,
        s = Object.keys(t.dateRanges);
    for (let o = s.length; o--; ) {
        let l = t.dateRanges[s[o]],
            u = l.startDate.getTime();
        l.tagAnchor = i.ref;
        for (let i = n; i--; ) {
            var a;
            if ((null == (a = e[i]) ? void 0 : a.sn) < t.startSN) break;
            let n = (function (e, t, n, i, r) {
                let s = n[i];
                if (s) {
                    let o = s.programDateTime;
                    if (t >= o || 0 === i) {
                        var a;
                        if (t <= o + 1e3 * (((null == (a = n[i + 1]) ? void 0 : a.start) || r) - s.start)) {
                            let r = n[i].sn - e.startSN;
                            if (r < 0) return -1;
                            let s = e.fragments;
                            if (s.length > n.length) {
                                let a = (n[i + 1] || s[s.length - 1]).sn - e.startSN;
                                for (let e = a; e > r; e--) {
                                    let n = s[e].programDateTime;
                                    if (t >= n && t < n + 1e3 * s[e].duration) return e;
                                }
                            }
                            return r;
                        }
                    }
                }
                return -1;
            })(t, u, e, i, r);
            if (-1 !== n) {
                l.tagAnchor = t.fragments[n].ref;
                break;
            }
        }
    }
}
function t8(e, t, n) {
    var i, r;
    let s = new tD(e, n),
        a = null != (i = s.METHOD) ? i : "",
        o = s.URI,
        l = s.hexadecimalInteger("IV"),
        u = s.KEYFORMATVERSIONS,
        c = null != (r = s.KEYFORMAT) ? r : "identity";
    return (
        o && s.IV && !l && B.error(`Invalid IV: ${s.IV}`),
        new t0(a, o ? t5.resolve(o, t) : "", c, (u || "1").split("/").map(Number).filter(Number.isFinite), l, s.KEYID)
    );
}
function t9(e) {
    let t = new tD(e).decimalFloatingPoint("TIME-OFFSET");
    return r(t) ? t : null;
}
function ne(e, t) {
    let n = (e || "").split(/[ ,]+/).filter((e) => e);
    ["video", "audio", "text"].forEach((e) => {
        let i = n.filter((t) => ey(t, e));
        i.length &&
            ((t[`${e}Codec`] = i.map((e) => e.split("/")[0]).join(",")), (n = n.filter((e) => -1 === i.indexOf(e))));
    }),
        (t.unknownCodecs = n);
}
function nt(e, t, n) {
    let i = t[n];
    i && (e[n] = i);
}
function nn(e, t, n) {
    e.rawProgramDateTime ? n.push(e) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime);
}
function ni(e, t, n, i) {
    (e.relurl = t.URI),
        t.BYTERANGE && e.setByteRange(t.BYTERANGE),
        (e.level = n),
        (e.sn = "initSegment"),
        i && (e.levelkeys = i),
        (e.initSegment = null);
}
function nr(e, t, n) {
    e.levelkeys = t;
    let { encryptedFragments: i } = n;
    (!i.length || i[i.length - 1].levelkeys !== t) && Object.keys(t).some((e) => t[e].isCommonEncryption) && i.push(e);
}
function ns(e, t, n) {
    e.playlistParsingError = Error(`#EXT-X-${t} must not appear more than once (${n[0]})`);
}
function na(e, t, n) {
    e.playlistParsingError = Error(`#EXT-X-${t} must appear before the first Media Segment (${n[0]})`);
}
function no(e, t) {
    let n = t.startPTS;
    if (r(n)) {
        let i,
            r = 0;
        t.sn > e.sn ? ((r = n - e.start), (i = e)) : ((r = e.start - n), (i = t)), i.duration !== r && i.setDuration(r);
    } else
        t.sn > e.sn
            ? e.cc === t.cc && e.minEndPTS
                ? t.setStart(e.start + (e.minEndPTS - e.start))
                : t.setStart(e.start + e.duration)
            : t.setStart(Math.max(e.start - t.duration, 0));
}
function nl(e, t, n, i, s, a, o) {
    let l;
    i - n <= 0 && (o.warn("Fragment should have a positive duration", t), (i = n + t.duration), (a = s + t.duration));
    let u = n,
        c = i,
        d = t.startPTS,
        _ = t.endPTS;
    if (r(d)) {
        let l = Math.abs(d - n);
        e && l > e.totalduration
            ? o.warn(`media timestamps and playlist times differ by ${l}s for level ${t.level} ${e.url}`)
            : r(t.deltaPTS)
              ? (t.deltaPTS = Math.max(l, t.deltaPTS))
              : (t.deltaPTS = l),
            (u = Math.max(n, d)),
            (n = Math.min(n, d)),
            (s = void 0 !== t.startDTS ? Math.min(s, t.startDTS) : s),
            (c = Math.min(i, _)),
            (i = Math.max(i, _)),
            (a = void 0 !== t.endDTS ? Math.max(a, t.endDTS) : a);
    }
    let h = n - t.start;
    0 !== t.start && t.setStart(n),
        t.setDuration(i - t.start),
        (t.startPTS = n),
        (t.maxStartPTS = u),
        (t.startDTS = s),
        (t.endPTS = i),
        (t.minEndPTS = c),
        (t.endDTS = a);
    let f = t.sn;
    if (!e || f < e.startSN || f > e.endSN) return 0;
    let p = f - e.startSN,
        E = e.fragments;
    for (E[p] = t, l = p; l > 0; l--) no(E[l], E[l - 1]);
    for (l = p; l < E.length - 1; l++) no(E[l], E[l + 1]);
    return e.fragmentHint && no(E[E.length - 1], e.fragmentHint), (e.PTSKnown = e.alignedSliding = !0), h;
}
function nu(e, t, n, i, r) {
    return Error(`${e} ${r.url}
Playlist starting @${t.startSN}
${t.m3u8}

Playlist starting @${n.startSN}
${n.m3u8}`);
}
function nc(e, t, n = !0) {
    let i = t.startSN + t.skippedSegments - e.startSN,
        r = e.fragments,
        s = i >= 0,
        a = 0;
    if (s && i < r.length) a = r[i].start;
    else if (s && t.startSN === e.endSN + 1) a = e.fragmentEnd;
    else if (s && n) a = e.fragmentStart + i * t.levelTargetDuration;
    else {
        if (t.skippedSegments || 0 !== t.fragmentStart) return;
        a = e.fragmentStart;
    }
    nd(t, a);
}
function nd(e, t) {
    if (t) {
        let n = e.fragments;
        for (let i = e.skippedSegments; i < n.length; i++) n[i].addStart(t);
        e.fragmentHint && e.fragmentHint.addStart(t);
    }
}
function n_(e, t = 1 / 0) {
    let n = 1e3 * e.targetduration;
    if (e.updated) {
        let i = e.fragments;
        if (i.length && 4 * n > t) {
            let e = 1e3 * i[i.length - 1].duration;
            e < n && (n = e);
        }
    } else n /= 2;
    return Math.round(n);
}
function nh(e, t, n) {
    if (!e) return null;
    let i = e.fragments[t - e.startSN];
    return i || ((i = e.fragmentHint) && i.sn === t) ? i : t < e.startSN && n && n.sn === t ? n : null;
}
function nf(e, t, n) {
    return e ? np(e.partList, t, n) : null;
}
function np(e, t, n) {
    if (e)
        for (let i = e.length; i--; ) {
            let r = e[i];
            if (r.index === n && r.fragment.sn === t) return r;
        }
    return null;
}
function nE(e) {
    e.forEach((e, t) => {
        var n;
        null == (n = e.details) ||
            n.fragments.forEach((e) => {
                (e.level = t), e.initSegment && (e.initSegment.level = t);
            });
    });
}
function nm(e) {
    return e.replace(/\?[^?]*$/, "");
}
function ng(e, t) {
    for (let i = 0, r = e.length; i < r; i++) {
        var n;
        if ((null == (n = e[i]) ? void 0 : n.cc) === t) return e[i];
    }
    return null;
}
function nA(e, t) {
    let n = e.start + t;
    (e.startPTS = n), e.setStart(n), (e.endPTS = n + e.duration);
}
function nI(e, t) {
    let n = t.fragments;
    for (let t = 0, i = n.length; t < i; t++) nA(n[t], e);
    t.fragmentHint && nA(t.fragmentHint, e), (t.alignedSliding = !0);
}
function nT(e, t) {
    if ((!t || !(e.startCC < t.endCC) || !(e.endCC > t.startCC)) && 1) return;
    let n = Math.min(t.endCC, e.endCC),
        i = ng(t.fragments, n),
        r = ng(e.fragments, n);
    i && r && (B.log(`Aligning playlist at start of dicontinuity sequence ${n}`), nI(i.start - r.start, e));
}
function nS(e, t) {
    let n, i;
    if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
    let r = e.fragments,
        s = t.fragments;
    if (!r.length || !s.length) return;
    let a = Math.min(t.endCC, e.endCC);
    t.startCC < a && e.startCC < a && ((n = ng(s, a)), (i = ng(r, a))),
        (n && i) || (i = ng(r, (n = s[Math.floor(s.length / 2)]).cc) || r[Math.floor(r.length / 2)]);
    let o = n.programDateTime,
        l = i.programDateTime;
    o && l && nI((l - o) / 1e3 - (i.start - n.start), e);
}
function ny(e, t, n) {
    nN(e, t, n), e.addEventListener(t, n);
}
function nN(e, t, n) {
    e.removeEventListener(t, n);
}
let nv = function (e) {
        let t = "",
            n = e.length;
        for (let i = 0; i < n; i++) t += `[${e.start(i).toFixed(3)}-${e.end(i).toFixed(3)}]`;
        return t;
    },
    nC = "STOPPED",
    nR = "IDLE",
    nO = "KEY_LOADING",
    nb = "FRAG_LOADING",
    nD = "FRAG_LOADING_WAITING_RETRY",
    nL = "WAITING_TRACK",
    nw = "PARSING",
    nM = "PARSED",
    nP = "ENDED",
    nx = "ERROR",
    nk = "WAITING_INIT_PTS",
    nU = "WAITING_LEVEL";
class nG extends tI {
    constructor(e, t, n, i, s) {
        super(i, e.logger),
            (this.hls = void 0),
            (this.fragPrevious = null),
            (this.fragCurrent = null),
            (this.fragmentTracker = void 0),
            (this.transmuxer = null),
            (this._state = nC),
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
                let { config: e, fragCurrent: t, media: n, mediaBuffer: i, state: s } = this,
                    a = n ? n.currentTime : 0,
                    o = tN.bufferInfo(i || n, a, e.maxBufferHole),
                    l = !o.len;
                if (
                    (this.log(
                        `Media seeking to ${r(a) ? a.toFixed(3) : a}, state: ${s}, ${l ? "out of" : "in"} buffer`,
                    ),
                    this.state === nP)
                )
                    this.resetLoadingState();
                else if (t) {
                    let n = e.maxFragLookUpTolerance,
                        i = t.start - n,
                        r = t.start + t.duration + n;
                    if (l || r < o.start || i > o.end) {
                        let e = a > r;
                        (a < i || e) &&
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
                    l && this.state === nR && this.tickImmediate();
            }),
            (this.onMediaEnded = () => {
                this.log("setting startPosition to 0 because media ended"),
                    (this.startPosition = this.lastCurrentTime = 0);
            }),
            (this.playlistType = s),
            (this.hls = e),
            (this.fragmentLoader = new tE(e.config)),
            (this.keyLoader = n),
            (this.fragmentTracker = t),
            (this.config = e.config),
            (this.decrypter = new tp(e.config));
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
        if (this.state === nC) return;
        this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
        let e = this.fragCurrent;
        null != e && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
            this.resetTransmuxer(),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.clearInterval(),
            this.clearNextTick(),
            (this.state = nC);
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
            i = this.config.timelineOffset || 0;
        if (n <= i) return !1;
        let r = e.buffered;
        this.config.maxBufferHole && r && r.length > 1 && (e = tN.bufferedInfo(r, e.start, 0));
        let s = e.nextStart;
        if ((s && s > i && s < t.edge) || this.media.currentTime < e.start) return !1;
        let a = t.partList;
        if (null != a && a.length) {
            let e = a[a.length - 1];
            return tN.isBuffered(this.media, e.start + e.duration / 2);
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
        ny(n, "seeking", this.onMediaSeeking), ny(n, "ended", this.onMediaEnded);
        let i = this.config;
        this.levels && i.autoStartLoad && this.state === nC && this.startLoad(i.startPosition);
    }
    onMediaDetaching(e, t) {
        let n = !!t.transferMedia,
            i = this.media;
        if (null !== i) {
            if (
                (i.ended &&
                    (this.log("MSE detaching and video ended, reset startPosition"),
                    (this.startPosition = this.lastCurrentTime = 0)),
                nN(i, "seeking", this.onMediaSeeking),
                nN(i, "ended", this.onMediaEnded),
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
        (this.state = nC),
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
        let i = (e) => {
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
        this._doFragLoad(e, t, n, i)
            .then((e) => {
                if (!e) return;
                let t = this.state,
                    n = e.frag;
                if (this.fragContextChanged(n)) {
                    (t !== nb && (this.fragCurrent || t !== nw)) ||
                        (this.fragmentTracker.removeFragment(n), (this.state = nR));
                    return;
                }
                "payload" in e &&
                    (this.log(`Loaded ${n.type} sn: ${n.sn} of ${this.playlistLabel()} ${n.level}`),
                    this.hls.trigger(u.FRAG_LOADED, e)),
                    this._handleFragmentLoadComplete(e);
            })
            .catch((t) => {
                this.state !== nC &&
                    this.state !== nx &&
                    (this.warn(`Frag error: ${(null == t ? void 0 : t.message) || t}`), this.resetFragmentLoading(e));
            });
    }
    clearTrackerIfNeeded(e) {
        var t;
        let { fragmentTracker: n } = this;
        if (n.getState(e) === ta) {
            let t = e.type,
                i = this.getFwdBufferInfo(this.mediaBuffer, t),
                r = Math.max(e.duration, i ? i.len : this.config.maxBufferLength),
                s = this.backtrackFragment;
            (1 == (s ? e.sn - s.sn : 0) || this.reduceMaxBufferLength(r, e.duration)) && n.removeFragment(e);
        } else
            (null == (t = this.mediaBuffer) ? void 0 : t.buffered.length) === 0
                ? n.removeAllFragments()
                : n.hasParts(e.type) &&
                  (n.detectPartialFragments({ frag: e, part: null, stats: e.stats, id: e.type }),
                  n.getState(e) === to && n.removeFragment(e));
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
        e - t && this.hls.trigger(u.BUFFER_FLUSHING, { startOffset: e, endOffset: t, type: n });
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
                    { frag: n, payload: i } = e,
                    r = n.decryptdata;
                if (i && i.byteLength > 0 && null != r && r.key && r.iv && tx(r.method)) {
                    let s = self.performance.now();
                    return this.decrypter
                        .decrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer, tk(r.method))
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
                        .then((i) => {
                            let r = self.performance.now();
                            return (
                                t.trigger(u.FRAG_DECRYPTED, { frag: n, payload: i, stats: { tstart: s, tdecrypt: r } }),
                                (e.payload = i),
                                this.completeInitSegmentLoad(e)
                            );
                        });
                }
                return this.completeInitSegmentLoad(e);
            })
            .catch((t) => {
                this.state !== nC && this.state !== nx && (this.warn(t), this.resetFragmentLoading(e));
            });
    }
    completeInitSegmentLoad(e) {
        let { levels: t } = this;
        if (!t) throw Error("init load aborted, missing levels");
        let n = e.frag.stats;
        this.state !== nC && (this.state = nR),
            (e.frag.data = new Uint8Array(e.payload)),
            (n.parsing.start = n.buffering.start = self.performance.now()),
            (n.parsing.end = n.buffering.end = self.performance.now()),
            this.tick();
    }
    unhandledEncryptionError(e, t) {
        var n, i;
        let r = e.tracks;
        if (
            r &&
            !t.encrypted &&
            ((null != (n = r.audio) && n.encrypted) || (null != (i = r.video) && i.encrypted)) &&
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
                `Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${n ? nv(tN.getBuffered(n)) : "(detached)"})`,
            ),
            ee(e))
        ) {
            var i;
            if (e.type !== D) {
                let t = e.elementaryStreams;
                if (!Object.keys(t).some((e) => !!t[e])) {
                    this.state = nR;
                    return;
                }
            }
            let t = null == (i = this.levels) ? void 0 : i[e.level];
            null != t &&
                t.fragmentError &&
                (this.log(`Resetting level fragment error count of ${t.fragmentError} on frag buffered`),
                (t.fragmentError = 0));
        }
        this.state = nR;
    }
    _handleFragmentLoadComplete(e) {
        let { transmuxer: t } = this;
        if (!t) return;
        let { frag: n, part: i, partsLoaded: r } = e,
            s = !r || 0 === r.length || r.some((e) => !e),
            a = new tT(n.level, n.sn, n.stats.chunkCount + 1, 0, i ? i.index : -1, !s);
        t.flush(a);
    }
    _handleFragmentLoadProgress(e) {}
    _doFragLoad(e, t, n = null, i) {
        var s, a;
        let o;
        this.fragCurrent = e;
        let l = t.details;
        if (!this.levels || !l) throw Error(`frag load aborted, missing level${l ? "" : " detail"}s`);
        let c = null;
        if (e.encrypted && !(null != (s = e.decryptdata) && s.key)) {
            if (
                (this.log(`Loading key for ${e.sn} of [${l.startSN}-${l.endSN}], ${this.playlistLabel()} ${e.level}`),
                (this.state = nO),
                (this.fragCurrent = e),
                (c = this.keyLoader.load(e).then((e) => {
                    if (!this.fragContextChanged(e.frag))
                        return this.hls.trigger(u.KEY_LOADED, e), this.state === nO && (this.state = nR), e;
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
        if (ee(e) && (!d || e.sn !== d.sn)) {
            let n = this.shouldLoadParts(t.details, e.end);
            n !== this.loadingParts &&
                (this.log(`LL-Part loading ${n ? "ON" : "OFF"} loading sn ${null == d ? void 0 : d.sn}->${e.sn}`),
                (this.loadingParts = n));
        }
        if (((n = Math.max(e.start, n || 0)), this.loadingParts && ee(e))) {
            let r = l.partList;
            if (r && i) {
                n > l.fragmentEnd && l.fragmentHint && (e = l.fragmentHint);
                let s = this.getNextPart(r, e, n);
                if (s > -1) {
                    let a,
                        o = r[s];
                    return ((e = this.fragCurrent = o.fragment),
                    this.log(
                        `Loading ${e.type} sn: ${e.sn} part: ${o.index} (${s}/${r.length - 1}) of ${this.fragInfo(e, !1, o)}) cc: ${e.cc} [${l.startSN}-${l.endSN}], target: ${parseFloat(n.toFixed(3))}`,
                    ),
                    (this.nextLoadPosition = o.start + o.duration),
                    (this.state = nb),
                    (a = c
                        ? c
                              .then((n) =>
                                  !n || this.fragContextChanged(n.frag) ? null : this.doFragPartsLoad(e, o, t, i),
                              )
                              .catch((e) => this.handleFragLoadError(e))
                        : this.doFragPartsLoad(e, o, t, i).catch((e) => this.handleFragLoadError(e))),
                    this.hls.trigger(u.FRAG_LOADING, { frag: e, part: o, targetBufferTime: n }),
                    null === this.fragCurrent)
                        ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING parts"))
                        : a;
                }
                if (!e.url || this.loadedEndOfParts(r, n)) return Promise.resolve(null);
            }
        }
        if (ee(e) && this.loadingParts)
            this.log(
                `LL-Part loading OFF after next part miss @${n.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${null == ((a = l.partList)) ? void 0 : a.filter((e) => e.loaded).map((e) => `[${e.start}-${e.end}]`)}`,
            ),
                (this.loadingParts = !1);
        else if (!e.url) return Promise.resolve(null);
        this.log(
            `Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + l.startSN + "-" + l.endSN + "]"}, target: ${parseFloat(n.toFixed(3))}`,
        ),
            r(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
            (this.state = nb);
        let _ = this.config.progressive;
        return ((o =
            _ && c
                ? c
                      .then((t) => (!t || this.fragContextChanged(t.frag) ? null : this.fragmentLoader.load(e, i)))
                      .catch((e) => this.handleFragLoadError(e))
                : Promise.all([this.fragmentLoader.load(e, _ ? i : void 0), c])
                      .then(([e]) => (!_ && i && i(e), e))
                      .catch((e) => this.handleFragLoadError(e))),
        this.hls.trigger(u.FRAG_LOADING, { frag: e, targetBufferTime: n }),
        null === this.fragCurrent)
            ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING"))
            : o;
    }
    doFragPartsLoad(e, t, n, i) {
        return new Promise((r, s) => {
            var a;
            let o = [],
                l = null == (a = n.details) ? void 0 : a.partList,
                c = (t) => {
                    this.fragmentLoader
                        .loadPart(e, t, i)
                        .then((i) => {
                            o[t.index] = i;
                            let s = i.part;
                            this.hls.trigger(u.FRAG_LOADED, i);
                            let a = nf(n.details, e.sn, t.index + 1) || np(l, e.sn, t.index + 1);
                            if (!a) return r({ frag: e, part: s, partsLoaded: o });
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
        if (!t || this.state !== nw) {
            this.fragCurrent || this.state === nC || this.state === nx || (this.state = nR);
            return;
        }
        let { frag: n, part: i, level: r } = t,
            s = self.performance.now();
        (n.stats.parsing.end = s), i && (i.stats.parsing.end = s);
        let a = this.getLevelDetails(),
            o = (a && n.sn > a.endSN) || this.shouldLoadParts(a, n.end);
        o !== this.loadingParts &&
            (this.log(`LL-Part loading ${o ? "ON" : "OFF"} after parsing segment ending @${n.end.toFixed(2)}`),
            (this.loadingParts = o)),
            this.updateLevelTiming(n, i, r, e.partial);
    }
    shouldLoadParts(e, t) {
        if (this.config.lowLatencyMode) {
            if (!e) return this.loadingParts;
            if (e.partList) {
                var n, i;
                let r = e.partList[0];
                if (r.fragment.type === D) return !1;
                if (
                    t >= r.end + ((null == (n = e.fragmentHint) ? void 0 : n.duration) || 0) &&
                    (this.hls.hasEnoughToStart
                        ? (null == (i = this.media) ? void 0 : i.currentTime) || this.lastCurrentTime
                        : this.getLoadPosition()) >
                        r.start - r.fragment.duration
                )
                    return !0;
            }
        }
        return !1;
    }
    getCurrentContext(e) {
        let { levels: t, fragCurrent: n } = this,
            { level: i, sn: r, part: s } = e;
        if (!(null != t && t[i]))
            return (
                this.warn(
                    `Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${i}. The current chunk will not be buffered.`,
                ),
                null
            );
        let a = t[i],
            o = a.details,
            l = s > -1 ? nf(o, r, s) : null,
            u = l ? l.fragment : nh(o, r, n);
        return u ? (n && n !== u && (u.stats = n.stats), { frag: u, part: l, level: a }) : null;
    }
    bufferFragmentData(e, t, n, i, r) {
        if (this.state !== nw) return;
        let { data1: s, data2: a } = e,
            o = s;
        if ((a && (o = em(s, a)), !o.length)) return;
        let l = this.initPTS[t.cc],
            c = l ? -l.baseTime / l.timescale : void 0,
            d = { type: e.type, frag: t, part: n, chunkMeta: i, offset: c, parent: t.type, data: o };
        if ((this.hls.trigger(u.BUFFER_APPENDING, d), e.dropped && e.independent && !n)) {
            if (r) return;
            this.flushBufferGap(t);
        }
    }
    flushBufferGap(e) {
        let t = this.media;
        if (!t) return;
        if (!tN.isBuffered(t, t.currentTime)) return void this.flushMainBuffer(0, e.start);
        let n = t.currentTime,
            i = tN.bufferInfo(t, n, 0),
            r = e.duration,
            s = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * r),
            a = Math.max(Math.min(e.start - s, i.end - s), n + s);
        e.start - a > s && this.flushMainBuffer(a, e.start);
    }
    getFwdBufferInfo(e, t) {
        var n;
        let i = this.getLoadPosition();
        if (!r(i)) return null;
        let s = this.lastCurrentTime > i || (null != (n = this.media) && n.paused) ? 0 : this.config.maxBufferHole;
        return this.getFwdBufferInfoAtPos(e, i, t, s);
    }
    getFwdBufferInfoAtPos(e, t, n, i) {
        let r = tN.bufferInfo(e, t, i);
        if (0 === r.len && void 0 !== r.nextStart) {
            let s = this.fragmentTracker.getBufferedFrag(t, n);
            if (s && (r.nextStart <= s.end || s.gap)) {
                let n = Math.max(Math.min(r.nextStart, s.end) - t, i);
                return tN.bufferInfo(e, t, n);
            }
        }
        return r;
    }
    getMaxBufferLength(e) {
        let { config: t } = this;
        return Math.min(
            e ? Math.max((8 * t.maxBufferSize) / e, t.maxBufferLength) : t.maxBufferLength,
            t.maxMaxBufferLength,
        );
    }
    reduceMaxBufferLength(e, t) {
        let n = this.config,
            i = Math.max(Math.min(e - t, n.maxBufferLength), t),
            r = Math.max(e - 3 * t, n.maxMaxBufferLength / 2, i);
        return r >= i && ((n.maxMaxBufferLength = r), this.warn(`Reduce max buffer length to ${r}s`), !0);
    }
    getAppendedFrag(e, t = O) {
        let n = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null;
        return n && "fragment" in n ? n.fragment : n;
    }
    getNextFragment(e, t) {
        let n = t.fragments,
            i = n.length;
        if (!i) return null;
        let { config: r } = this,
            s = n[0].start,
            a = r.lowLatencyMode && !!t.partList,
            o = null;
        if (t.live) {
            let n = r.initialLiveManifestSize;
            if (i < n) return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${n})`), null;
            if ((!t.PTSKnown && !this.startFragRequested && -1 === this.startPosition) || e < s) {
                var l;
                a &&
                    !this.loadingParts &&
                    (this.log("LL-Part loading ON for initial live fragment"), (this.loadingParts = !0)),
                    (o = this.getInitialLiveFragment(t));
                let n = this.hls.startPosition,
                    i = this.hls.liveSyncPosition,
                    r = o ? (-1 !== n && n >= s ? n : i) || o.start : e;
                this.log(
                    `Setting startPosition to ${r} to match start frag at live edge. mainStart: ${n} liveSyncPosition: ${i} frag.start: ${null == ((l = o)) ? void 0 : l.start}`,
                ),
                    (this.startPosition = this.nextLoadPosition = r);
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
        return ("OK" === n || (n === to && !!e.gap)) && this.nextLoadPosition > t;
    }
    getNextFragmentLoopLoading(e, t, n, i, r) {
        let s = null;
        if (e.gap && (s = this.getNextFragment(this.nextLoadPosition, t)) && !s.gap && n.nextStart) {
            let e = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, n.nextStart, i, 0);
            if (null !== e && n.len + e.len >= r) {
                let e = s.sn;
                return (
                    this.loopSn !== e &&
                        (this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e}`), (this.loopSn = e)),
                    null
                );
            }
        }
        return (this.loopSn = void 0), s;
    }
    get primaryPrefetch() {
        if (nF(this.config)) {
            var e;
            if (null == (e = this.hls.interstitialsManager) || null == (e = e.playingItem) ? void 0 : e.event)
                return !0;
        }
        return !1;
    }
    filterReplacedPrimary(e, t) {
        if (!e) return e;
        if (nF(this.config) && e.type !== D) {
            let n = this.hls.interstitialsManager,
                i = null == n ? void 0 : n.bufferingItem;
            if (i) {
                let n = i.event;
                if (n) {
                    if (n.appendInPlace || Math.abs(e.start - i.start) > 1 || 0 === i.start) return null;
                } else if (
                    (e.end <= i.start && (null == t ? void 0 : t.live) === !1) ||
                    (e.start > i.end && i.nextEvent && (i.nextEvent.appendInPlace || e.start - i.end > 1))
                )
                    return null;
            }
            let r = null == n ? void 0 : n.playerQueue;
            if (r)
                for (let t = r.length; t--; ) {
                    let n = r[t].interstitial;
                    if (n.appendInPlace && e.start >= n.startTime && e.end <= n.resumeTime) return null;
                }
        }
        return e;
    }
    mapToInitFragWhenRequired(e) {
        return null == e || !e.initSegment || e.initSegment.data || this.bitrateTest ? e : e.initSegment;
    }
    getNextPart(e, t, n) {
        let i = -1,
            r = !1,
            s = !0;
        for (let a = 0, o = e.length; a < o; a++) {
            let o = e[a];
            if (((s = s && !o.independent), i > -1 && n < o.start)) break;
            let l = o.loaded;
            l
                ? (i = -1)
                : (r || ((o.independent || s) && o.fragment === t)) &&
                  (o.fragment !== t && this.warn(`Need buffer at ${n} but next unloaded part starts at ${o.start}`),
                  (i = a)),
                (r = l);
        }
        return i;
    }
    loadedEndOfParts(e, t) {
        let n;
        for (let i = e.length; i-- && (n = e[i]).loaded; ) if (t > n.start) return !0;
        return !1;
    }
    getInitialLiveFragment(e) {
        let t = e.fragments,
            n = this.fragPrevious,
            i = null;
        if (n) {
            if (
                (e.hasProgramDateTime &&
                    (this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),
                    (i = (function (e, t, n) {
                        if (
                            null === t ||
                            !Array.isArray(e) ||
                            !e.length ||
                            !r(t) ||
                            t < (e[0].programDateTime || 0) ||
                            t >= (e[e.length - 1].endProgramDateTime || 0)
                        )
                            return null;
                        for (let i = 0; i < e.length; ++i) {
                            let r = e[i];
                            if (
                                (function (e, t, n) {
                                    let i = 1e3 * Math.min(t, n.duration + (n.deltaPTS ? n.deltaPTS : 0));
                                    return (n.endProgramDateTime || 0) - i > e;
                                })(t, n, r)
                            )
                                return r;
                        }
                        return null;
                    })(t, n.endProgramDateTime, this.config.maxFragLookUpTolerance))),
                !i)
            ) {
                let r = n.sn + 1;
                if (r >= e.startSN && r <= e.endSN) {
                    let s = t[r - e.startSN];
                    n.cc === s.cc &&
                        ((i = s), this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
                }
                !i &&
                    (i = e4(e, n.cc, n.end)) &&
                    this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`);
            }
        } else {
            let t = this.hls.liveSyncPosition;
            null !== t && (i = this.getFragmentAtPosition(t, this.bitrateTest ? e.fragmentEnd : e.edge, e));
        }
        return i;
    }
    getFragmentAtPosition(e, t, n) {
        let i,
            { config: r } = this,
            { fragPrevious: s } = this,
            { fragments: a, endSN: o } = n,
            { fragmentHint: l } = n,
            { maxFragLookUpTolerance: u } = r,
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
            i = e3(s, a, e, n);
        } else i = a[a.length - 1];
        if (i) {
            let e = i.sn - n.startSN,
                t = this.fragmentTracker.getState(i);
            if (
                (("OK" === t || (t === to && i.gap)) && (s = i),
                s && i.sn === s.sn && (!d || c[0].fragment.sn > i.sn || !n.live) && i.level === s.level)
            ) {
                let t = a[e + 1];
                i = i.sn < o && "OK" !== this.fragmentTracker.getState(t) ? t : null;
            }
        }
        return i;
    }
    alignPlaylists(e, t, n) {
        let i = e.fragments.length;
        if (!i) return this.warn("No fragments in live playlist"), 0;
        let s = e.fragmentStart,
            a = !t,
            o = e.alignedSliding && r(s);
        if (a || (!o && !s)) {
            n && (nT(e, n), e.alignedSliding || nS(e, n), e.alignedSliding || e.skippedSegments || nc(n, e, !1));
            let r = e.fragmentStart;
            return (
                this.log(
                    `Live playlist sliding: ${r.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${i}`,
                ),
                r
            );
        }
        return s;
    }
    waitForCdnTuneIn(e) {
        return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget);
    }
    setStartPosition(e, t) {
        let n = this.startPosition;
        n < t && (n = -1);
        let i = this.timelineOffset;
        if (-1 === n) {
            let s = null !== this.startTimeOffset,
                a = s ? this.startTimeOffset : e.startTimeOffset;
            null !== a && r(a)
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
                (this.lastCurrentTime = n + i);
        }
        this.nextLoadPosition = n + i;
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
            ee(e) &&
            e.stats.aborted &&
            (this.log(
                `Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`,
            ),
            this.resetFragmentLoading(e));
    }
    resetFragmentLoading(e) {
        (this.fragCurrent && (this.fragContextChanged(e) || this.state === nD)) || (this.state = nR);
    }
    onFragmentOrKeyLoadError(e, t) {
        var n, i, r;
        if (t.chunkMeta && !t.frag) {
            let e = this.getCurrentContext(t.chunkMeta);
            e && (t.frag = e.frag);
        }
        let s = t.frag;
        if (!s || s.type !== e || !this.levels) return;
        if (this.fragContextChanged(s))
            return void this.warn(
                `Frag load error must match current frag to retry ${s.url} > ${null == ((i = this.fragCurrent)) ? void 0 : i.url}`,
            );
        let a = t.details === l.FRAG_GAP;
        a && this.fragmentTracker.fragBuffered(s, !0);
        let o = t.errorAction;
        if (!o) {
            this.state = nx;
            return;
        }
        let { action: u, flags: c, retryCount: d = 0, retryConfig: _ } = o,
            h = !!_,
            f = h && 5 === u,
            p = h && !o.resolved && 1 === c,
            E = null == (n = this.hls.latestLevelDetails) ? void 0 : n.live;
        if (!f && p && ee(s) && !s.endList && E && !e8(t))
            this.resetFragmentErrors(e), this.treatAsGap(s), (o.resolved = !0);
        else if ((f || p) && d < _.maxNumRetry) {
            let n = ti(null == (r = t.response) ? void 0 : r.code),
                i = te(_, d);
            if (
                (this.resetStartWhenNotLoaded(),
                (this.retryDate = self.performance.now() + i),
                (this.state = nD),
                (o.resolved = !0),
                n)
            ) {
                this.log("Waiting for connection (offline)"), (this.retryDate = 1 / 0), (t.reason = "offline");
                return;
            }
            this.warn(
                `Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${d + 1}/${_.maxNumRetry} in ${i}ms`,
            );
        } else if (_) {
            if ((this.resetFragmentErrors(e), !(d < _.maxNumRetry)))
                return void this.warn(`${t.details} reached or exceeded max retry (${d})`);
            a || 3 === u || (o.resolved = !0);
        } else 2 === u ? (this.state = nU) : (this.state = nx);
        this.tickImmediate();
    }
    checkRetryDate() {
        let e = self.performance.now(),
            t = this.retryDate,
            n = t === 1 / 0;
        (!t || e >= t || (n && !ti(0))) &&
            (n && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), (this.state = nR));
    }
    reduceLengthAndFlushBuffer(e) {
        if (this.state === nw || this.state === nM) {
            let t = e.frag,
                n = e.parent,
                i = this.getFwdBufferInfo(this.mediaBuffer, n),
                r = i && i.len > 0.5;
            r && this.reduceMaxBufferLength(i.len, (null == t ? void 0 : t.duration) || 10);
            let s = !r;
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
        e === b && (this.fragCurrent = null),
            this.hls.hasEnoughToStart || (this.startFragRequested = !1),
            this.state !== nC && (this.state = nR);
    }
    afterBufferFlushed(e, t, n) {
        if (!e) return;
        let i = tN.getBuffered(e);
        this.fragmentTracker.detectEvictedFragments(t, i, n), this.state === nP && this.resetLoadingState();
    }
    resetLoadingState() {
        this.log("Reset loading state"),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.state !== nC && (this.state = nR);
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
    updateLevelTiming(e, t, n, i) {
        let r = n.details;
        if (!r) return void this.warn("level.details undefined");
        if (
            !Object.keys(e.elementaryStreams).reduce((t, s) => {
                let a = e.elementaryStreams[s];
                if (a) {
                    let o = a.endPTS - a.startPTS;
                    if (o <= 0)
                        return this.warn(`Could not parse fragment ${e.sn} ${s} duration reliably (${o})`), t || !1;
                    let l = i ? 0 : nl(r, e, a.startPTS, a.endPTS, a.startDTS, a.endDTS, this);
                    return (
                        this.hls.trigger(u.LEVEL_PTS_UPDATED, {
                            details: r,
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
        (this.state = nM),
            this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`),
            this.hls.trigger(u.FRAG_PARSED, { frag: e, part: t });
    }
    playlistLabel() {
        return this.playlistType === O ? "level" : "track";
    }
    fragInfo(e, t = !0, n) {
        var i, r;
        return `${this.playlistLabel()} ${e.level} (${n ? "part" : "frag"}:[${(null != (i = t && !n ? e.startPTS : (n || e).start) ? i : NaN).toFixed(3)}-${(null != (r = t && !n ? e.endPTS : (n || e).end) ? r : NaN).toFixed(3)}]${n && "main" === e.type ? "INDEPENDENT=" + (n.independent ? "YES" : "NO") : ""}`;
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
function nF(e) {
    return !!e.interstitialsController && !1 !== e.enableInterstitialPlayback;
}
class nV {
    constructor() {
        (this.chunks = []), (this.dataLength = 0);
    }
    push(e) {
        this.chunks.push(e), (this.dataLength += e.length);
    }
    flush() {
        let e,
            { chunks: t, dataLength: n } = this;
        return t.length
            ? ((e =
                  1 === t.length
                      ? t[0]
                      : (function (e, t) {
                            let n = new Uint8Array(t),
                                i = 0;
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                n.set(r, i), (i += r.length);
                            }
                            return n;
                        })(t, n)),
              this.reset(),
              e)
            : new Uint8Array(0);
    }
    reset() {
        (this.chunks.length = 0), (this.dataLength = 0);
    }
}
var nB = { exports: {} },
    nH = (y ||
        ((y = 1),
        !(function (e) {
            var t = Object.prototype.hasOwnProperty,
                n = "~";
            function i() {}
            function r(e, t, n) {
                (this.fn = e), (this.context = t), (this.once = n || !1);
            }
            function s(e, t, i, s, a) {
                if ("function" != typeof i) throw TypeError("The listener must be a function");
                var o = new r(i, s || e, a),
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
                0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
            }
            function o() {
                (this._events = new i()), (this._eventsCount = 0);
            }
            Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
                (o.prototype.eventNames = function () {
                    var e,
                        i,
                        r = [];
                    if (0 === this._eventsCount) return r;
                    for (i in (e = this._events)) t.call(e, i) && r.push(n ? i.slice(1) : i);
                    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
                }),
                (o.prototype.listeners = function (e) {
                    var t = n ? n + e : e,
                        i = this._events[t];
                    if (!i) return [];
                    if (i.fn) return [i.fn];
                    for (var r = 0, s = i.length, a = Array(s); r < s; r++) a[r] = i[r].fn;
                    return a;
                }),
                (o.prototype.listenerCount = function (e) {
                    var t = n ? n + e : e,
                        i = this._events[t];
                    return i ? (i.fn ? 1 : i.length) : 0;
                }),
                (o.prototype.emit = function (e, t, i, r, s, a) {
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
                                return c.fn.call(c.context, t, i), !0;
                            case 4:
                                return c.fn.call(c.context, t, i, r), !0;
                            case 5:
                                return c.fn.call(c.context, t, i, r, s), !0;
                            case 6:
                                return c.fn.call(c.context, t, i, r, s, a), !0;
                        }
                        for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                        c.fn.apply(c.context, l);
                    } else {
                        var _,
                            h = c.length;
                        for (u = 0; u < h; u++)
                            switch ((c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d)) {
                                case 1:
                                    c[u].fn.call(c[u].context);
                                    break;
                                case 2:
                                    c[u].fn.call(c[u].context, t);
                                    break;
                                case 3:
                                    c[u].fn.call(c[u].context, t, i);
                                    break;
                                case 4:
                                    c[u].fn.call(c[u].context, t, i, r);
                                    break;
                                default:
                                    if (!l) for (_ = 1, l = Array(d - 1); _ < d; _++) l[_ - 1] = arguments[_];
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
                (o.prototype.removeListener = function (e, t, i, r) {
                    var s = n ? n + e : e;
                    if (!this._events[s]) return this;
                    if (!t) return a(this, s), this;
                    var o = this._events[s];
                    if (o.fn) o.fn !== t || (r && !o.once) || (i && o.context !== i) || a(this, s);
                    else {
                        for (var l = 0, u = [], c = o.length; l < c; l++)
                            (o[l].fn !== t || (r && !o[l].once) || (i && o[l].context !== i)) && u.push(o[l]);
                        u.length ? (this._events[s] = 1 === u.length ? u[0] : u) : a(this, s);
                    }
                    return this;
                }),
                (o.prototype.removeAllListeners = function (e) {
                    var t;
                    return (
                        e
                            ? ((t = n ? n + e : e), this._events[t] && a(this, t))
                            : ((this._events = new i()), (this._eventsCount = 0)),
                        this
                    );
                }),
                (o.prototype.off = o.prototype.removeListener),
                (o.prototype.addListener = o.prototype.on),
                (o.prefixed = n),
                (o.EventEmitter = o),
                (e.exports = o);
        })(nB)),
    (E = nB.exports) && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default"))
        ? E.default
        : E;
let nj = "1.6.12",
    nY = {};
function nW(e, t) {
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
function nK(e, t) {
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
function n$(e, t) {
    return ((127 & e[t]) << 21) | ((127 & e[t + 1]) << 14) | ((127 & e[t + 2]) << 7) | (127 & e[t + 3]);
}
function nz(e, t) {
    let n = t,
        i = 0;
    for (; nK(e, t); ) (i += 10), (i += n$(e, t + 6)), nW(e, t + 10) && (i += 10), (t += i);
    if (i > 0) return e.subarray(n, n + i);
}
function nq(e, t) {
    return 255 === e[t] && (246 & e[t + 1]) == 240;
}
function nX(e, t) {
    return 1 & e[t + 1] ? 7 : 9;
}
function nZ(e, t) {
    return ((3 & e[t + 3]) << 11) | (e[t + 4] << 3) | ((224 & e[t + 5]) >>> 5);
}
function nQ(e, t) {
    return t + 1 < e.length && nq(e, t);
}
function nJ(e, t, n, i, r) {
    if (!e.samplerate) {
        let s = (function (e, t, n, i) {
            let r = t[n + 2],
                s = (r >> 2) & 15;
            if (s > 12) {
                let t = Error(`invalid ADTS sampling index:${s}`);
                e.emit(u.ERROR, u.ERROR, {
                    type: o.MEDIA_ERROR,
                    details: l.FRAG_PARSING_ERROR,
                    fatal: !0,
                    error: t,
                    reason: t.message,
                });
                return;
            }
            let a = ((r >> 6) & 3) + 1,
                c = ((t[n + 3] >> 6) & 3) | ((1 & r) << 2),
                d = "mp4a.40." + a,
                _ = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][s],
                h = s;
            (5 === a || 29 === a) && (h -= 3);
            let f = [(a << 3) | ((14 & h) >> 1), ((1 & h) << 7) | (c << 3)];
            return (
                B.log(
                    `manifest codec:${i}, parsed codec:${d}, channels:${c}, rate:${_} (ADTS object type:${a} sampling index:${s})`,
                ),
                { config: f, samplerate: _, channelCount: c, codec: d, parsedCodec: d, manifestCodec: i }
            );
        })(t, n, i, r);
        s && M(e, s);
    }
}
function n0(e, t, n, i, r) {
    let s,
        a = i + r * (9216e4 / e.samplerate),
        o = (function (e, t) {
            let n = nX(e, t);
            if (t + n <= e.length) {
                let i = nZ(e, t) - n;
                if (i > 0) return { headerLength: n, frameLength: i };
            }
        })(t, n);
    if (o) {
        let { frameLength: i, headerLength: r } = o,
            l = r + i,
            u = Math.max(0, n + l - t.length);
        u ? (s = new Uint8Array(l - r)).set(t.subarray(n + r, t.length), 0) : (s = t.subarray(n + r, n + l));
        let c = { unit: s, pts: a };
        return u || e.samples.push(c), { sample: c, length: l, missing: u };
    }
    let l = t.length - n;
    return (
        (s = new Uint8Array(l)).set(t.subarray(n, t.length), 0), { sample: { unit: s, pts: a }, length: l, missing: -1 }
    );
}
function n1(e, t = 0, n = 1 / 0) {
    var i, r, s, a, o, l;
    let u, c, d, _, h, f;
    return (
        (i = e),
        (r = t),
        (s = n),
        (a = Uint8Array),
        (u = (o = i) instanceof ArrayBuffer ? o : o.buffer),
        (c = 1),
        "BYTES_PER_ELEMENT" in a && (c = a.BYTES_PER_ELEMENT),
        (_ =
            ((d =
                (l = i) && l.buffer instanceof ArrayBuffer && void 0 !== l.byteLength && void 0 !== l.byteOffset
                    ? i.byteOffset
                    : 0) +
                i.byteLength) /
            c),
        (f = Math.floor(Math.min((h = Math.floor(Math.max(0, Math.min((d + r) / c, _)))) + Math.max(s, 0), _))),
        new a(u, h, f - h)
    );
}
function n2(e) {
    let t = 0,
        n = [];
    for (; nK(e, t); ) {
        let i = n$(e, t + 6);
        (e[t + 5] >> 6) & 1 && (t += 10);
        let r = (t += 10) + i;
        for (; t + 10 < r; ) {
            let i = (function (e) {
                    let t = String.fromCharCode(e[0], e[1], e[2], e[3]),
                        n = n$(e, 4);
                    return { type: t, size: n, data: e.subarray(10, 10 + n) };
                })(e.subarray(t)),
                r = (function (e) {
                    if ("PRIV" === e.type) {
                        if (e.size < 2) return;
                        let t = Y(e.data, !0),
                            n = new Uint8Array(e.data.subarray(t.length + 1));
                        return { key: e.type, info: t, data: n.buffer };
                    }
                    if ("W" === e.type[0]) {
                        if ("WXXX" === e.type) {
                            if (e.size < 2) return;
                            let t = 1,
                                n = Y(e.data.subarray(t), !0);
                            t += n.length + 1;
                            let i = Y(e.data.subarray(t));
                            return { key: e.type, info: n, data: i };
                        }
                        let t = Y(e.data);
                        return { key: e.type, info: "", data: t };
                    }
                    if ("APIC" === e.type)
                        return (function (e) {
                            let t,
                                n = { key: e.type, description: "", data: "", mimeType: null, pictureType: null };
                            if (e.size < 2) return;
                            if (3 !== e.data[0])
                                return void console.log("Ignore frame with unrecognized character encoding");
                            let i = e.data.subarray(1).indexOf(0);
                            if (-1 === i) return;
                            let r = Y(n1(e.data, 1, i)),
                                s = e.data[2 + i],
                                a = e.data.subarray(3 + i).indexOf(0);
                            if (-1 === a) return;
                            let o = Y(n1(e.data, 3 + i, a));
                            if ("--\x3e" === r) t = Y(n1(e.data, 4 + i + a));
                            else {
                                var l;
                                t =
                                    (l = e.data.subarray(4 + i + a)) instanceof ArrayBuffer
                                        ? l
                                        : 0 == l.byteOffset && l.byteLength == l.buffer.byteLength
                                          ? l.buffer
                                          : new Uint8Array(l).buffer;
                            }
                            return (n.mimeType = r), (n.pictureType = s), (n.description = o), (n.data = t), n;
                        })(e);
                    if (e.size < 2) return;
                    if ("TXXX" === e.type) {
                        let t = 1,
                            n = Y(e.data.subarray(t), !0);
                        t += n.length + 1;
                        let i = Y(e.data.subarray(t));
                        return { key: e.type, info: n, data: i };
                    }
                    let t = Y(e.data.subarray(1));
                    return { key: e.type, info: "", data: t };
                })(i);
            r && n.push(r), (t += i.size + 10);
        }
        nW(e, t) && (t += 10);
    }
    return n;
}
function n3(e) {
    return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info;
}
function n6(e) {
    let t = n2(e);
    for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (n3(n))
            return (function (e) {
                if (8 === e.data.byteLength) {
                    let t = new Uint8Array(e.data),
                        n = 1 & t[3],
                        i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                    return (i /= 45), n && (i += 47721858.84), Math.round(i);
                }
            })(n);
    }
}
let n4 =
    (((m = {}).audioId3 = "org.id3"),
    (m.dateRange = "com.apple.quicktime.HLS"),
    (m.emsg = "https://aomedia.org/emsg/ID3"),
    (m.misbklv = "urn:misb:KLV:bin:1910.1"),
    m);
function n5(e = "", t = 9e4) {
    return { type: e, id: -1, pid: -1, inputTimeScale: t, sequenceNumber: -1, samples: [], dropped: 0 };
}
class n7 {
    constructor() {
        (this._audioTrack = void 0),
            (this._id3Track = void 0),
            (this.frameIndex = 0),
            (this.cachedData = null),
            (this.basePTS = null),
            (this.initPTS = null),
            (this.lastPTS = null);
    }
    resetInitSegment(e, t, n, i) {
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
        this.cachedData && ((e = em(this.cachedData, e)), (this.cachedData = null));
        let i = nz(e, 0),
            s = i ? i.length : 0,
            a = this._audioTrack,
            o = this._id3Track,
            l = i ? n6(i) : void 0,
            u = e.length;
        for (
            (null === this.basePTS || (0 === this.frameIndex && r(l))) &&
                ((this.basePTS = n8(l, t, this.initPTS)), (this.lastPTS = this.basePTS)),
                null === this.lastPTS && (this.lastPTS = this.basePTS),
                i &&
                    i.length > 0 &&
                    o.samples.push({
                        pts: this.lastPTS,
                        dts: this.lastPTS,
                        data: i,
                        type: n4.audioId3,
                        duration: 1 / 0,
                    });
            s < u;
        ) {
            if (this.canParse(e, s)) {
                let t = this.appendFrame(a, e, s);
                t ? (this.frameIndex++, (this.lastPTS = t.sample.pts), (s += t.length), (n = s)) : (s = u);
            } else {
                var c, d;
                nK((c = e), (d = s)) && n$(c, d + 6) + 10 <= c.length - d
                    ? ((i = nz(e, s)),
                      o.samples.push({
                          pts: this.lastPTS,
                          dts: this.lastPTS,
                          data: i,
                          type: n4.audioId3,
                          duration: 1 / 0,
                      }),
                      (s += i.length),
                      (n = s))
                    : s++;
            }
            if (s === u && n !== u) {
                let t = e.slice(n);
                this.cachedData ? (this.cachedData = em(this.cachedData, t)) : (this.cachedData = t);
            }
        }
        return { audioTrack: a, videoTrack: n5(), id3Track: o, textTrack: n5() };
    }
    demuxSampleAes(e, t, n) {
        return Promise.reject(Error(`[${this}] This demuxer does not support Sample-AES decryption`));
    }
    flush(e) {
        let t = this.cachedData;
        return (
            t && ((this.cachedData = null), this.demux(t, 0)),
            { audioTrack: this._audioTrack, videoTrack: n5(), id3Track: this._id3Track, textTrack: n5() }
        );
    }
    destroy() {
        (this.cachedData = null), (this._audioTrack = this._id3Track = void 0);
    }
}
let n8 = (e, t, n) => (r(e) ? 90 * e : 9e4 * t + (n ? (9e4 * n.baseTime) / n.timescale : 0)),
    n9 = null,
    ie = [
        32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192,
        224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112,
        128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
    ],
    it = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
    ii = [
        [0, 72, 144, 12],
        [0, 0, 0, 0],
        [0, 72, 144, 12],
        [0, 144, 144, 12],
    ],
    ir = [0, 1, 1, 4];
function is(e, t, n, i, r) {
    if (n + 24 > t.length) return;
    let s = ia(t, n);
    if (s && n + s.frameLength <= t.length) {
        let a = i + r * ((9e4 * s.samplesPerFrame) / s.sampleRate),
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
function ia(e, t) {
    let n = (e[t + 1] >> 3) & 3,
        i = (e[t + 1] >> 1) & 3,
        r = (e[t + 2] >> 4) & 15,
        s = (e[t + 2] >> 2) & 3;
    if (1 !== n && 0 !== r && 15 !== r && 3 !== s) {
        let a = (e[t + 2] >> 1) & 1,
            o = e[t + 3] >> 6,
            l = 1e3 * ie[14 * (3 === n ? 3 - i : 3 === i ? 3 : 4) + r - 1],
            u = it[3 * (3 === n ? 0 : 2 === n ? 1 : 2) + s],
            c = ii[n][i],
            d = ir[i],
            _ = Math.floor((c * l) / u + a) * d;
        if (null === n9) {
            let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            n9 = e ? parseInt(e[1]) : 0;
        }
        return (
            n9 && n9 <= 87 && 2 === i && l >= 224e3 && 0 === o && (e[t + 3] = 128 | e[t + 3]),
            { sampleRate: u, channelCount: 3 === o ? 1 : 2, frameLength: _, samplesPerFrame: 8 * c * d }
        );
    }
}
function io(e, t) {
    return 255 === e[t] && (224 & e[t + 1]) == 224 && (6 & e[t + 1]) != 0;
}
function il(e, t) {
    return t + 1 < e.length && io(e, t);
}
function iu(e, t) {
    if (t + 1 < e.length && io(e, t)) {
        let n = ia(e, t),
            i = 4;
        null != n && n.frameLength && (i = n.frameLength);
        let r = t + i;
        return r === e.length || il(e, r);
    }
    return !1;
}
let ic = (e, t) => {
    let n = 0,
        i = 5;
    t += 5;
    let r = new Uint32Array(1),
        s = new Uint32Array(1),
        a = new Uint8Array(1);
    for (; i > 0; ) {
        a[0] = e[t];
        let o = Math.min(i, 8),
            l = 8 - o;
        (s[0] = (0xff000000 >>> (24 + l)) << l),
            (r[0] = (a[0] & s[0]) >> l),
            (n = n ? (n << o) | r[0] : r[0]),
            (t += 1),
            (i -= o);
    }
    return n;
};
function id(e, t, n, i, r) {
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
        h = t[n + 5] >> 3,
        f = 7 & t[n + 5],
        p = new Uint8Array([
            (s << 6) | (h << 1) | (f >> 2),
            ((3 & f) << 6) | (u << 3) | (d << 2) | (o >> 4),
            (o << 4) & 224,
        ]),
        E = t.subarray(n, n + l);
    return (
        (e.config = p),
        (e.channelCount = _),
        (e.samplerate = a),
        e.samples.push({ unit: E, pts: i + (1536 / a) * 9e4 * r }),
        l
    );
}
let i_ = /\/emsg[-/]ID3/i;
function ih(e, t) {
    return r(e.presentationTime) ? e.presentationTime / e.timeScale : t + e.presentationTimeDelta / e.timeScale;
}
class ip {
    constructor(e, t, n) {
        (this.keyData = void 0),
            (this.decrypter = void 0),
            (this.keyData = n),
            (this.decrypter = new tp(t, { removePKCS7Padding: !1 }));
    }
    decryptBuffer(e) {
        return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, 0);
    }
    decryptAacSample(e, t, n) {
        let i = e[t].unit;
        if (i.length <= 16) return;
        let r = i.subarray(16, i.length - (i.length % 16)),
            s = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
        this.decryptBuffer(s)
            .then((r) => {
                let s = new Uint8Array(r);
                i.set(s, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, n);
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
        for (let i = 32; i < e.length - 16; i += 160, n += 16) t.set(e.subarray(i, i + 16), n);
        return t;
    }
    getAvcDecryptedUnit(e, t) {
        let n = new Uint8Array(t),
            i = 0;
        for (let t = 32; t < e.length - 16; t += 160, i += 16) e.set(n.subarray(i, i + 16), t);
        return e;
    }
    decryptAvcSample(e, t, n, i, r) {
        let s = eT(r.data),
            a = this.getAvcEncryptedData(s);
        this.decryptBuffer(a.buffer)
            .then((a) => {
                (r.data = this.getAvcDecryptedUnit(s, a)),
                    this.decrypter.isSync() || this.decryptAvcSamples(e, t, n + 1, i);
            })
            .catch(i);
    }
    decryptAvcSamples(e, t, n, i) {
        if (e instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
        for (; ; t++, n = 0) {
            if (t >= e.length) return void i();
            let r = e[t].units;
            for (; !(n >= r.length); n++) {
                let s = r[n];
                if (
                    !(s.data.length <= 48) &&
                    (1 === s.type || 5 === s.type) &&
                    (this.decryptAvcSample(e, t, n, i, s), !this.decrypter.isSync())
                )
                    return;
            }
        }
    }
}
class iE {
    constructor() {
        this.VideoSample = null;
    }
    createVideoSample(e, t, n) {
        return { key: e, frame: !1, pts: t, dts: n, units: [], length: 0 };
    }
    getLastNalUnit(e) {
        var t;
        let n,
            i = this.VideoSample;
        if (((i && 0 !== i.units.length) || (i = e[e.length - 1]), null != (t = i) && t.units)) {
            let e = i.units;
            n = e[e.length - 1];
        }
        return n;
    }
    pushAccessUnit(e, t) {
        if (e.units.length && e.frame) {
            if (void 0 === e.pts) {
                let n = t.samples,
                    i = n.length;
                if (!i) return void t.dropped++;
                {
                    let t = n[i - 1];
                    (e.pts = t.pts), (e.dts = t.dts);
                }
            }
            t.samples.push(e);
        }
    }
    parseNALu(e, t, n) {
        let i,
            r,
            s,
            a = t.byteLength,
            o = e.naluState || 0,
            l = o,
            u = [],
            c = 0,
            d = -1,
            _ = 0;
        for (-1 === o && ((d = 0), (_ = this.getNALuType(t, 0)), (o = 0), (c = 1)); c < a; ) {
            if (((i = t[c++]), !o)) {
                o = +!i;
                continue;
            }
            if (1 === o) {
                o = 2 * !i;
                continue;
            }
            if (i)
                if (1 === i) {
                    if (((r = c - o - 1), d >= 0)) {
                        let e = { data: t.subarray(d, r), type: _ };
                        u.push(e);
                    } else {
                        let n = this.getLastNalUnit(e.samples);
                        n &&
                            (l && c <= 4 - l && n.state && (n.data = n.data.subarray(0, n.data.byteLength - l)),
                            r > 0 && ((n.data = em(n.data, t.subarray(0, r))), (n.state = 0)));
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
            n && (n.data = em(n.data, t));
        }
        return (e.naluState = o), u;
    }
}
class im {
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
            i = new Uint8Array(4),
            r = Math.min(4, t);
        if (0 === r) throw Error("no bytes available");
        i.set(e.subarray(n, n + r)),
            (this.word = new DataView(i.buffer).getUint32(0)),
            (this.bitsAvailable = 8 * r),
            (this.bytesAvailable -= r);
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
            (e > 32 && B.error("Cannot read more than 32 bits at a time"),
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
class ig extends iE {
    parsePES(e, t, n, i) {
        let r,
            s = this.parseNALu(e, n.data, i),
            a = this.VideoSample,
            o = !1;
        (n.data = null),
            a &&
                s.length &&
                !e.audFound &&
                (this.pushAccessUnit(a, e), (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts))),
            s.forEach((i) => {
                var s, l, u, c, d;
                switch (i.type) {
                    case 1: {
                        let t = !1;
                        r = !0;
                        let s = i.data;
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
                        (r = !0),
                            null != (s = a) &&
                                s.frame &&
                                !a.key &&
                                (this.pushAccessUnit(a, e), (a = this.VideoSample = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0),
                            (a.frame = !0);
                        break;
                    case 6:
                        (r = !0), eI(i.data, 1, n.pts, t.samples);
                        break;
                    case 7: {
                        (r = !0), (o = !0);
                        let t = i.data,
                            n = this.readSPS(t);
                        if (
                            !e.sps ||
                            e.width !== n.width ||
                            e.height !== n.height ||
                            (null == (c = e.pixelRatio) ? void 0 : c[0]) !== n.pixelRatio[0] ||
                            (null == (d = e.pixelRatio) ? void 0 : d[1]) !== n.pixelRatio[1]
                        ) {
                            (e.width = n.width), (e.height = n.height), (e.pixelRatio = n.pixelRatio), (e.sps = [t]);
                            let i = t.subarray(1, 4),
                                r = "avc1.";
                            for (let e = 0; e < 3; e++) {
                                let t = i[e].toString(16);
                                t.length < 2 && (t = "0" + t), (r += t);
                            }
                            e.codec = r;
                        }
                        break;
                    }
                    case 8:
                        (r = !0), (e.pps = [i.data]);
                        break;
                    case 9:
                        (r = !0),
                            (e.audFound = !0),
                            null != (l = a) && l.frame && (this.pushAccessUnit(a, e), (a = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts));
                        break;
                    case 12:
                        r = !0;
                        break;
                    default:
                        r = !1;
                }
                a && r && a.units.push(i);
            }),
            i && a && (this.pushAccessUnit(a, e), (this.VideoSample = null));
    }
    getNALuType(e, t) {
        return 31 & e[t];
    }
    readSliceType(e) {
        let t = new im(e);
        return t.readUByte(), t.readUEG(), t.readUEG();
    }
    skipScalingList(e, t) {
        let n = 8,
            i = 8;
        for (let r = 0; r < e; r++) 0 !== i && (i = (n + t.readEG() + 256) % 256), (n = 0 === i ? n : i);
    }
    readSPS(e) {
        let t,
            n,
            i,
            r = new im(e),
            s = 0,
            a = 0,
            o = 0,
            l = 0,
            u = r.readUByte.bind(r),
            c = r.readBits.bind(r),
            d = r.readUEG.bind(r),
            _ = r.readBoolean.bind(r),
            h = r.skipBits.bind(r),
            f = r.skipEG.bind(r),
            p = r.skipUEG.bind(r),
            E = this.skipScalingList.bind(this);
        u();
        let m = u();
        if (
            (c(5),
            h(3),
            u(),
            p(),
            100 === m ||
                110 === m ||
                122 === m ||
                244 === m ||
                44 === m ||
                83 === m ||
                86 === m ||
                118 === m ||
                128 === m)
        ) {
            let e = d();
            if ((3 === e && h(1), p(), p(), h(1), _()))
                for (i = 0, n = 3 !== e ? 8 : 12; i < n; i++) _() && E(i < 6 ? 16 : 64, r);
        }
        p();
        let g = d();
        if (0 === g) d();
        else if (1 === g) for (h(1), f(), f(), t = d(), i = 0; i < t; i++) f();
        p(), h(1);
        let A = d(),
            I = d(),
            T = c(1);
        0 === T && h(1), h(1), _() && ((s = d()), (a = d()), (o = d()), (l = d()));
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
class iA extends iE {
    constructor(...e) {
        super(...e), (this.initVPS = null);
    }
    parsePES(e, t, n, i) {
        let r,
            s = this.parseNALu(e, n.data, i),
            a = this.VideoSample,
            o = !1;
        (n.data = null),
            a &&
                s.length &&
                !e.audFound &&
                (this.pushAccessUnit(a, e), (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts))),
            s.forEach((i) => {
                var s, l, u;
                switch (i.type) {
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
                            (r = !0);
                        break;
                    case 16:
                    case 17:
                    case 18:
                    case 21:
                        (r = !0),
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
                        (r = !0),
                            null != (s = a) &&
                                s.frame &&
                                !a.key &&
                                (this.pushAccessUnit(a, e), (a = this.VideoSample = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0),
                            (a.frame = !0);
                        break;
                    case 39:
                        (r = !0), eI(i.data, 2, n.pts, t.samples);
                        break;
                    case 32:
                        (r = !0),
                            e.vps ||
                                ("object" != typeof e.params && (e.params = {}),
                                (e.params = M(e.params, this.readVPS(i.data))),
                                (this.initVPS = i.data)),
                            (e.vps = [i.data]);
                        break;
                    case 33:
                        if (
                            ((r = !0),
                            (o = !0),
                            void 0 === e.vps ||
                                e.vps[0] === this.initVPS ||
                                void 0 === e.sps ||
                                this.matchSPS(e.sps[0], i.data) ||
                                ((this.initVPS = e.vps[0]), (e.sps = e.pps = void 0)),
                            !e.sps)
                        ) {
                            let t = this.readSPS(i.data);
                            for (let n in ((e.width = t.width),
                            (e.height = t.height),
                            (e.pixelRatio = t.pixelRatio),
                            (e.codec = t.codecString),
                            (e.sps = []),
                            "object" != typeof e.params && (e.params = {}),
                            t.params))
                                e.params[n] = t.params[n];
                        }
                        this.pushParameterSet(e.sps, i.data, e.vps),
                            a || (a = this.VideoSample = this.createVideoSample(!0, n.pts, n.dts)),
                            (a.key = !0);
                        break;
                    case 34:
                        if (((r = !0), "object" == typeof e.params)) {
                            if (!e.pps) {
                                e.pps = [];
                                let t = this.readPPS(i.data);
                                for (let n in t) e.params[n] = t[n];
                            }
                            this.pushParameterSet(e.pps, i.data, e.vps);
                        }
                        break;
                    case 35:
                        (r = !0),
                            (e.audFound = !0),
                            null != (l = a) && l.frame && (this.pushAccessUnit(a, e), (a = null)),
                            a || (a = this.VideoSample = this.createVideoSample(!1, n.pts, n.dts));
                        break;
                    default:
                        r = !1;
                }
                a && r && a.units.push(i);
            }),
            i && a && (this.pushAccessUnit(a, e), (this.VideoSample = null));
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
        for (let i = 0; i < e.byteLength; i++)
            (!(i >= 2) || 3 !== e[i] || 0 !== e[i - 1] || 0 !== e[i - 2]) && ((t[n] = e[i]), n++);
        return new Uint8Array(t.buffer, 0, n);
    }
    pushAccessUnit(e, t) {
        super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
    }
    readVPS(e) {
        let t = new im(e);
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
        let t = new im(this.ebsp2rbsp(e));
        t.readUByte(), t.readUByte(), t.readBits(4);
        let n = t.readBits(3);
        t.readBoolean();
        let i = t.readBits(2),
            r = t.readBoolean(),
            s = t.readBits(5),
            a = t.readUByte(),
            o = t.readUByte(),
            l = t.readUByte(),
            u = t.readUByte(),
            c = t.readUByte(),
            d = t.readUByte(),
            _ = t.readUByte(),
            h = t.readUByte(),
            f = t.readUByte(),
            p = t.readUByte(),
            E = t.readUByte(),
            m = [],
            g = [];
        for (let e = 0; e < n; e++) m.push(t.readBoolean()), g.push(t.readBoolean());
        if (n > 0) for (let e = n; e < 8; e++) t.readBits(2);
        for (let e = 0; e < n; e++)
            m[e] &&
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
            N = 0,
            v = 0,
            C = 0;
        S && ((y += t.readUEG()), (N += t.readUEG()), (v += t.readUEG()), (C += t.readUEG()));
        let R = t.readUEG(),
            O = t.readUEG(),
            b = t.readUEG(),
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
                        i = !1;
                    e || (i = t.readBoolean()), (e || i) && n++;
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
                for (let e = 0; e < b + 4; e++) t.readBits(1);
                t.readBits(1);
            }
        }
        let M = 0,
            P = 1,
            x = 1,
            k = !0,
            U = 1,
            G = 0;
        t.readBoolean(), t.readBoolean();
        if (t.readBoolean()) {
            if (t.readBoolean()) {
                let e = t.readUByte();
                e > 0 && e < 16
                    ? ((P = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1]),
                      (x = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]))
                    : 255 === e && ((P = t.readBits(16)), (x = t.readBits(16)));
            }
            if (
                (t.readBoolean() && t.readBoolean(),
                t.readBoolean() &&
                    (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())),
                t.readBoolean() && (t.readUEG(), t.readUEG()),
                t.readBoolean(),
                t.readBoolean(),
                t.readBoolean(),
                t.readBoolean() && (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()),
                t.readBoolean() &&
                    ((U = t.readBits(32)), (G = t.readBits(32)), t.readBoolean() && t.readUEG(), t.readBoolean()))
            ) {
                let e = t.readBoolean(),
                    i = t.readBoolean(),
                    r = !1;
                (e || i) &&
                    ((r = t.readBoolean()) && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)),
                    t.readBits(4),
                    t.readBits(4),
                    r && t.readBits(4),
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
                            t.readUEG(), t.readUEG(), r && (t.readUEG(), t.readUEG()), t.skipBits(1);
                    if (i)
                        for (let e = 0; e < a; e++)
                            t.readUEG(), t.readUEG(), r && (t.readUEG(), t.readUEG()), t.skipBits(1);
                }
            }
            t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), (M = t.readUEG()));
        }
        let F = I,
            V = T;
        if (S) {
            let e = 1,
                t = 1;
            1 === A ? (e = t = 2) : 2 == A && (e = 2), (F = I - e * N - e * y), (V = T - t * C - t * v);
        }
        let B = i ? ["A", "B", "C"][i] : "",
            H = (a << 24) | (o << 16) | (l << 8) | u,
            j = 0;
        for (let e = 0; e < 32; e++) j = (j | (((H >> e) & 1) << (31 - e))) >>> 0;
        let Y = j.toString(16);
        return (
            1 === s && "2" === Y && (Y = "6"),
            {
                codecString: `hvc1.${B}${s}.${Y}.${r ? "H" : "L"}${E}.B0`,
                params: {
                    general_tier_flag: r,
                    general_profile_idc: s,
                    general_profile_space: i,
                    general_profile_compatibility_flags: [a, o, l, u],
                    general_constraint_indicator_flags: [c, d, _, h, f, p],
                    general_level_idc: E,
                    bit_depth: R + 8,
                    bit_depth_luma_minus8: R,
                    bit_depth_chroma_minus8: O,
                    min_spatial_segmentation_idc: M,
                    chroma_format_idc: A,
                    frame_rate: { fixed: k, fps: G / U },
                },
                width: F,
                height: V,
                pixelRatio: [P, x],
            }
        );
    }
    readPPS(e) {
        let t = new im(this.ebsp2rbsp(e));
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
            i = t.readBoolean(),
            r = 1;
        return i && n ? (r = 0) : i ? (r = 3) : n && (r = 2), { parallelismType: r };
    }
    matchSPS(e, t) {
        return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
    }
}
class iI {
    constructor(e, t, n, i) {
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
            (this.logger = i),
            (this.videoParser = null);
    }
    static probe(e, t) {
        let n = iI.syncOffset(e);
        return n > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${n}`), -1 !== n;
    }
    static syncOffset(e) {
        let t = e.length,
            n = Math.min(940, t - 188) + 1,
            i = 0;
        for (; i < n; ) {
            let r = !1,
                s = -1,
                a = 0;
            for (let o = i; o < t; o += 188)
                if (71 === e[o] && (t - o == 188 || 71 === e[o + 188])) {
                    if (
                        (a++,
                        -1 === s && 0 !== (s = o) && (n = Math.min(s + 18612, e.length - 188) + 1),
                        r || (r = 0 === iT(e, o)),
                        r && a > 1 && ((0 === s && a > 2) || o + 188 > n))
                    )
                        return s;
                } else if (a) return -1;
                else break;
            i++;
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
    resetInitSegment(e, t, n, i) {
        (this.pmtParsed = !1),
            (this._pmtId = -1),
            (this._videoTrack = iI.createTrack("video")),
            (this._videoTrack.duration = i),
            (this._audioTrack = iI.createTrack("audio", i)),
            (this._id3Track = iI.createTrack("id3")),
            (this._txtTrack = iI.createTrack("text")),
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
    demux(e, t, n = !1, i = !1) {
        let r;
        n || (this.sampleAes = null);
        let s = this._videoTrack,
            a = this._audioTrack,
            o = this._id3Track,
            l = this._txtTrack,
            u = s.pid,
            c = s.pesData,
            d = a.pid,
            _ = o.pid,
            h = a.pesData,
            f = o.pesData,
            p = null,
            E = this.pmtParsed,
            m = this._pmtId,
            g = e.length;
        if (
            (this.remainderData && ((g = (e = em(this.remainderData, e)).length), (this.remainderData = null)),
            g < 188 && !i)
        )
            return (this.remainderData = e), { audioTrack: a, videoTrack: s, id3Track: o, textTrack: l };
        let A = Math.max(0, iI.syncOffset(e));
        (g -= (g - A) % 188) < e.byteLength &&
            !i &&
            (this.remainderData = new Uint8Array(e.buffer, g, e.buffer.byteLength - g));
        let I = 0;
        for (let t = A; t < g; t += 188)
            if (71 === e[t]) {
                let i,
                    g = !!(64 & e[t + 1]),
                    I = iT(e, t);
                if ((48 & e[t + 3]) >> 4 > 1) {
                    if ((i = t + 5 + e[t + 4]) === t + 188) continue;
                } else i = t + 4;
                switch (I) {
                    case u:
                        g &&
                            (c &&
                                (r = iN(c, this.logger)) &&
                                (this.readyVideoParser(s.segmentCodec),
                                null !== this.videoParser && this.videoParser.parsePES(s, l, r, !1)),
                            (c = { data: [], size: 0 })),
                            c && (c.data.push(e.subarray(i, t + 188)), (c.size += t + 188 - i));
                        break;
                    case d:
                        if (g) {
                            if (h && (r = iN(h, this.logger)))
                                switch (a.segmentCodec) {
                                    case "aac":
                                        this.parseAACPES(a, r);
                                        break;
                                    case "mp3":
                                        this.parseMPEGPES(a, r);
                                        break;
                                    case "ac3":
                                        this.parseAC3PES(a, r);
                                }
                            h = { data: [], size: 0 };
                        }
                        h && (h.data.push(e.subarray(i, t + 188)), (h.size += t + 188 - i));
                        break;
                    case _:
                        g && (f && (r = iN(f, this.logger)) && this.parseID3PES(o, r), (f = { data: [], size: 0 })),
                            f && (f.data.push(e.subarray(i, t + 188)), (f.size += t + 188 - i));
                        break;
                    case 0:
                        var T, S;
                        g && (i += e[i] + 1), (m = this._pmtId = ((31 & (T = e)[(S = i) + 10]) << 8) | T[S + 11]);
                        break;
                    case m: {
                        g && (i += e[i] + 1);
                        let r = (function (e, t, n, i, r, s) {
                            let a = {
                                    audioPid: -1,
                                    videoPid: -1,
                                    id3Pid: -1,
                                    segmentVideoCodec: "avc",
                                    segmentAudioCodec: "aac",
                                },
                                o = ((15 & e[t + 1]) << 8) | e[t + 2],
                                l = t + 3 + o - 4,
                                u = ((15 & e[t + 10]) << 8) | e[t + 11];
                            for (t += 12 + u; t < l; ) {
                                let o = iT(e, t),
                                    l = ((15 & e[t + 3]) << 8) | e[t + 4];
                                switch (e[t]) {
                                    case 207:
                                        if (!i) {
                                            iy("ADTS AAC", s);
                                            break;
                                        }
                                    case 15:
                                        -1 === a.audioPid && (a.audioPid = o);
                                        break;
                                    case 21:
                                        -1 === a.id3Pid && (a.id3Pid = o);
                                        break;
                                    case 219:
                                        if (!i) {
                                            iy("H.264", s);
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
                                        if (!i) {
                                            iy("AC-3", s);
                                            break;
                                        }
                                    case 129:
                                        n.ac3
                                            ? -1 === a.audioPid && ((a.audioPid = o), (a.segmentAudioCodec = "ac3"))
                                            : s.log("AC-3 audio found, not supported in this browser");
                                        break;
                                    case 6:
                                        if (-1 === a.audioPid && l > 0) {
                                            let i = t + 5,
                                                r = l;
                                            for (; r > 2; ) {
                                                106 === e[i] &&
                                                    (!0 !== n.ac3
                                                        ? s.log(
                                                              "AC-3 audio found, not supported in this browser for now",
                                                          )
                                                        : ((a.audioPid = o), (a.segmentAudioCodec = "ac3")));
                                                let t = e[i + 1] + 2;
                                                (i += t), (r -= t);
                                            }
                                        }
                                        break;
                                    case 194:
                                    case 135:
                                        return iS(r, Error("Unsupported EC-3 in M2TS found"), void 0, s), a;
                                    case 36:
                                        -1 === a.videoPid &&
                                            ((a.videoPid = o),
                                            (a.segmentVideoCodec = "hevc"),
                                            s.log("HEVC in M2TS found"));
                                }
                                t += l + 5;
                            }
                            return a;
                        })(e, i, this.typeSupported, n, this.observer, this.logger);
                        (u = r.videoPid) > 0 && ((s.pid = u), (s.segmentCodec = r.segmentVideoCodec)),
                            (d = r.audioPid) > 0 && ((a.pid = d), (a.segmentCodec = r.segmentAudioCodec)),
                            (_ = r.id3Pid) > 0 && (o.pid = _),
                            null === p ||
                                E ||
                                (this.logger.warn(
                                    `MPEG-TS PMT found at ${t} after unknown PID '${p}'. Backtracking to sync byte @${A} to parse all TS packets.`,
                                ),
                                (p = null),
                                (t = A - 188)),
                            (E = this.pmtParsed = !0);
                        break;
                    }
                    case 17:
                    case 8191:
                        break;
                    default:
                        p = I;
                }
            } else I++;
        I > 0 && iS(this.observer, Error(`Found ${I} TS packet/s that do not start with 0x47`), void 0, this.logger),
            (s.pesData = c),
            (a.pesData = h),
            (o.pesData = f);
        let y = { audioTrack: a, videoTrack: s, id3Track: o, textTrack: l };
        return i && this.extractRemainingSamples(y), y;
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
            { audioTrack: n, videoTrack: i, id3Track: r, textTrack: s } = e,
            a = i.pesData,
            o = n.pesData,
            l = r.pesData;
        if (
            (a && (t = iN(a, this.logger))
                ? (this.readyVideoParser(i.segmentCodec),
                  null !== this.videoParser && (this.videoParser.parsePES(i, s, t, !0), (i.pesData = null)))
                : (i.pesData = a),
            o && (t = iN(o, this.logger)))
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
        l && (t = iN(l, this.logger)) ? (this.parseID3PES(r, t), (r.pesData = null)) : (r.pesData = l);
    }
    demuxSampleAes(e, t, n) {
        let i = this.demux(e, n, !0, !this.config.progressive),
            r = (this.sampleAes = new ip(this.observer, this.config, t));
        return this.decrypt(i, r);
    }
    readyVideoParser(e) {
        null === this.videoParser &&
            ("avc" === e ? (this.videoParser = new ig()) : "hevc" === e && (this.videoParser = new iA()));
    }
    decrypt(e, t) {
        return new Promise((n) => {
            let { audioTrack: i, videoTrack: r } = e;
            i.samples && "aac" === i.segmentCodec
                ? t.decryptAacSamples(i.samples, 0, () => {
                      r.samples
                          ? t.decryptAvcSamples(r.samples, 0, 0, () => {
                                n(e);
                            })
                          : n(e);
                  })
                : r.samples &&
                  t.decryptAvcSamples(r.samples, 0, 0, () => {
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
            i,
            r,
            s,
            a = 0,
            o = this.aacOverFlow,
            l = t.data;
        if (o) {
            this.aacOverFlow = null;
            let t = o.missing,
                n = o.sample.unit.byteLength;
            -1 === t
                ? (l = em(o.sample.unit, l))
                : (o.sample.unit.set(l.subarray(0, t), n - t), e.samples.push(o.sample), (a = o.missing));
        }
        for (n = a, i = l.length; n < i - 1 && !nQ(l, n); n++);
        if (n !== a) {
            let e,
                t = n < i - 1;
            if (
                ((e = t ? `AAC PES did not start with ADTS header,offset:${n}` : "No ADTS header found in AAC PES"),
                iS(this.observer, Error(e), t, this.logger),
                !t)
            )
                return;
        }
        if ((nJ(e, this.observer, l, n, this.audioCodec), void 0 !== t.pts)) r = t.pts;
        else {
            if (!o) return void this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
            let t = 9216e4 / e.samplerate;
            r = o.sample.pts + t;
        }
        let u = 0;
        for (; n < i; ) {
            if (((s = n0(e, l, n, r, u)), (n += s.length), s.missing)) {
                this.aacOverFlow = s;
                break;
            }
            for (u++; n < i - 1 && !nQ(l, n); n++);
        }
    }
    parseMPEGPES(e, t) {
        let n = t.data,
            i = n.length,
            r = 0,
            s = 0,
            a = t.pts;
        if (void 0 === a) return void this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
        for (; s < i; )
            if (il(n, s)) {
                let t = is(e, n, s, a, r);
                if (t) (s += t.length), r++;
                else break;
            } else s++;
    }
    parseAC3PES(e, t) {
        {
            let n,
                i = t.data,
                r = t.pts;
            if (void 0 === r) return void this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
            let s = i.length,
                a = 0,
                o = 0;
            for (; o < s && (n = id(e, i, o, r, a++)) > 0; ) o += n;
        }
    }
    parseID3PES(e, t) {
        if (void 0 === t.pts) return void this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
        let n = M({}, t, { type: this._videoTrack ? n4.emsg : n4.audioId3, duration: 1 / 0 });
        e.samples.push(n);
    }
}
function iT(e, t) {
    return ((31 & e[t + 1]) << 8) + e[t + 2];
}
function iS(e, t, n, i) {
    i.warn(`parsing error: ${t.message}`),
        e.emit(u.ERROR, u.ERROR, {
            type: o.MEDIA_ERROR,
            details: l.FRAG_PARSING_ERROR,
            fatal: !1,
            levelRetry: n,
            error: t,
            reason: t.message,
        });
}
function iy(e, t) {
    t.log(`${e} with AES-128-CBC encryption found in unencrypted stream`);
}
function iN(e, t) {
    let n,
        i,
        r,
        s,
        a,
        o = 0,
        l = e.data;
    if (!e || 0 === e.size) return null;
    for (; l[0].length < 19 && l.length > 1; ) (l[0] = em(l[0], l[1])), l.splice(1, 1);
    if (1 === ((n = l[0])[0] << 16) + (n[1] << 8) + n[2]) {
        if ((i = (n[4] << 8) + n[5]) && i > e.size - 6) return null;
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
        let c = (r = n[8]) + 9;
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
        return i && (i -= r + 3), { data: d, pts: s, dts: a, len: i };
    }
    return null;
}
class iv {
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
class iC {
    static init() {
        let e;
        for (e in ((iC.types = {
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
        iC.types))
            iC.types.hasOwnProperty(e) &&
                (iC.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
        iC.HDLR_TYPES = {
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
        (iC.STTS = iC.STSC = iC.STCO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (iC.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (iC.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
            (iC.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (iC.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
        let n = new Uint8Array([105, 115, 111, 109]),
            i = new Uint8Array([97, 118, 99, 49]),
            r = new Uint8Array([0, 0, 0, 1]);
        (iC.FTYP = iC.box(iC.types.ftyp, n, r, n, i)), (iC.DINF = iC.box(iC.types.dinf, iC.box(iC.types.dref, t)));
    }
    static box(e, ...t) {
        let n = 8,
            i = t.length,
            r = i;
        for (; i--; ) n += t[i].byteLength;
        let s = new Uint8Array(n);
        for (
            s[0] = (n >> 24) & 255,
                s[1] = (n >> 16) & 255,
                s[2] = (n >> 8) & 255,
                s[3] = 255 & n,
                s.set(e, 4),
                i = 0,
                n = 8;
            i < r;
            i++
        )
            s.set(t[i], n), (n += t[i].byteLength);
        return s;
    }
    static hdlr(e) {
        return iC.box(iC.types.hdlr, iC.HDLR_TYPES[e]);
    }
    static mdat(e) {
        return iC.box(iC.types.mdat, e);
    }
    static mdhd(e, t) {
        let n = Math.floor((t *= e) / 0x100000000),
            i = Math.floor(t % 0x100000000);
        return iC.box(
            iC.types.mdhd,
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
                i >> 24,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
                85,
                196,
                0,
                0,
            ]),
        );
    }
    static mdia(e) {
        return iC.box(iC.types.mdia, iC.mdhd(e.timescale || 0, e.duration || 0), iC.hdlr(e.type), iC.minf(e));
    }
    static mfhd(e) {
        return iC.box(iC.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e]));
    }
    static minf(e) {
        return "audio" === e.type
            ? iC.box(iC.types.minf, iC.box(iC.types.smhd, iC.SMHD), iC.DINF, iC.stbl(e))
            : iC.box(iC.types.minf, iC.box(iC.types.vmhd, iC.VMHD), iC.DINF, iC.stbl(e));
    }
    static moof(e, t, n) {
        return iC.box(iC.types.moof, iC.mfhd(e), iC.traf(n, t));
    }
    static moov(e) {
        let t = e.length,
            n = [];
        for (; t--; ) n[t] = iC.trak(e[t]);
        return iC.box.apply(
            null,
            [iC.types.moov, iC.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(n).concat(iC.mvex(e)),
        );
    }
    static mvex(e) {
        let t = e.length,
            n = [];
        for (; t--; ) n[t] = iC.trex(e[t]);
        return iC.box.apply(null, [iC.types.mvex, ...n]);
    }
    static mvhd(e, t) {
        let n = Math.floor((t *= e) / 0x100000000),
            i = Math.floor(t % 0x100000000),
            r = new Uint8Array([
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
                i >> 24,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
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
        return iC.box(iC.types.mvhd, r);
    }
    static sdtp(e) {
        let t,
            n,
            i = e.samples || [],
            r = new Uint8Array(4 + i.length);
        for (t = 0; t < i.length; t++)
            (n = i[t].flags), (r[t + 4] = (n.dependsOn << 4) | (n.isDependedOn << 2) | n.hasRedundancy);
        return iC.box(iC.types.sdtp, r);
    }
    static stbl(e) {
        return iC.box(
            iC.types.stbl,
            iC.stsd(e),
            iC.box(iC.types.stts, iC.STTS),
            iC.box(iC.types.stsc, iC.STSC),
            iC.box(iC.types.stsz, iC.STSZ),
            iC.box(iC.types.stco, iC.STCO),
        );
    }
    static avc1(e) {
        let t,
            n,
            i,
            r = [],
            s = [];
        for (t = 0; t < e.sps.length; t++)
            (i = (n = e.sps[t]).byteLength),
                r.push((i >>> 8) & 255),
                r.push(255 & i),
                (r = r.concat(Array.prototype.slice.call(n)));
        for (t = 0; t < e.pps.length; t++)
            (i = (n = e.pps[t]).byteLength),
                s.push((i >>> 8) & 255),
                s.push(255 & i),
                (s = s.concat(Array.prototype.slice.call(n)));
        let a = iC.box(
                iC.types.avcC,
                new Uint8Array(
                    [1, r[3], r[4], r[5], 255, 224 | e.sps.length].concat(r).concat([e.pps.length]).concat(s),
                ),
            ),
            o = e.width,
            l = e.height,
            u = e.pixelRatio[0],
            c = e.pixelRatio[1];
        return iC.box(
            iC.types.avc1,
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
            iC.box(iC.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
            iC.box(
                iC.types.pasp,
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
        return iC.box(iC.types.mp4a, iC.audioStsd(e), iC.box(iC.types.esds, iC.esds(e)));
    }
    static mp3(e) {
        return iC.box(iC.types[".mp3"], iC.audioStsd(e));
    }
    static ac3(e) {
        return iC.box(iC.types["ac-3"], iC.audioStsd(e), iC.box(iC.types.dac3, e.config));
    }
    static stsd(e) {
        let { segmentCodec: t } = e;
        if ("audio" === e.type) {
            if ("aac" === t) return iC.box(iC.types.stsd, iC.STSD, iC.mp4a(e));
            if ("ac3" === t && e.config) return iC.box(iC.types.stsd, iC.STSD, iC.ac3(e));
            if ("mp3" === t && "mp3" === e.codec) return iC.box(iC.types.stsd, iC.STSD, iC.mp3(e));
        } else if (e.pps && e.sps) {
            if ("avc" === t) return iC.box(iC.types.stsd, iC.STSD, iC.avc1(e));
            if ("hevc" === t && e.vps) return iC.box(iC.types.stsd, iC.STSD, iC.hvc1(e));
        } else throw Error("video track missing pps or sps");
        throw Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
    }
    static tkhd(e) {
        let t = e.id,
            n = (e.duration || 0) * (e.timescale || 0),
            i = e.width || 0,
            r = e.height || 0,
            s = Math.floor(n / 0x100000000),
            a = Math.floor(n % 0x100000000);
        return iC.box(
            iC.types.tkhd,
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
                (i >> 8) & 255,
                255 & i,
                0,
                0,
                (r >> 8) & 255,
                255 & r,
                0,
                0,
            ]),
        );
    }
    static traf(e, t) {
        let n = iC.sdtp(e),
            i = e.id,
            r = Math.floor(t / 0x100000000),
            s = Math.floor(t % 0x100000000);
        return iC.box(
            iC.types.traf,
            iC.box(iC.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, (i >> 16) & 255, (i >> 8) & 255, 255 & i])),
            iC.box(
                iC.types.tfdt,
                new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    r >> 24,
                    (r >> 16) & 255,
                    (r >> 8) & 255,
                    255 & r,
                    s >> 24,
                    (s >> 16) & 255,
                    (s >> 8) & 255,
                    255 & s,
                ]),
            ),
            iC.trun(e, n.length + 16 + 20 + 8 + 16 + 8 + 8),
            n,
        );
    }
    static trak(e) {
        return (e.duration = e.duration || 0xffffffff), iC.box(iC.types.trak, iC.tkhd(e), iC.mdia(e));
    }
    static trex(e) {
        let t = e.id;
        return iC.box(
            iC.types.trex,
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
            i,
            r,
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
            (r = (i = l[n]).duration),
                (s = i.size),
                (a = i.flags),
                (o = i.cts),
                d.set(
                    [
                        (r >>> 24) & 255,
                        (r >>> 16) & 255,
                        (r >>> 8) & 255,
                        255 & r,
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
        return iC.box(iC.types.trun, d);
    }
    static initSegment(e) {
        iC.types || iC.init();
        let t = iC.moov(e);
        return em(iC.FTYP, t);
    }
    static hvc1(e) {
        let t = e.params,
            n = [e.vps, e.sps, e.pps],
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
                3 | (t.temporal_id_nested << 2) | (t.num_temporal_layers << 3) | (64 * !!t.frame_rate.fixed),
                n.length,
            ]),
            r = i.length;
        for (let e = 0; e < n.length; e += 1) {
            r += 3;
            for (let t = 0; t < n[e].length; t += 1) r += 2 + n[e][t].length;
        }
        let s = new Uint8Array(r);
        s.set(i, 0), (r = i.length);
        let a = n.length - 1;
        for (let e = 0; e < n.length; e += 1) {
            s.set(new Uint8Array([(32 + e) | (128 * (e === a)), 0, n[e].length]), r), (r += 3);
            for (let t = 0; t < n[e].length; t += 1)
                s.set(new Uint8Array([n[e][t].length >> 8, 255 & n[e][t].length]), r),
                    (r += 2),
                    s.set(n[e][t], r),
                    (r += n[e][t].length);
        }
        let o = iC.box(iC.types.hvcC, s),
            l = e.width,
            u = e.height,
            c = e.pixelRatio[0],
            d = e.pixelRatio[1];
        return iC.box(
            iC.types.hvc1,
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
                (l >> 8) & 255,
                255 & l,
                (u >> 8) & 255,
                255 & u,
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
            o,
            iC.box(iC.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
            iC.box(
                iC.types.pasp,
                new Uint8Array([
                    c >> 24,
                    (c >> 16) & 255,
                    (c >> 8) & 255,
                    255 & c,
                    d >> 24,
                    (d >> 16) & 255,
                    (d >> 8) & 255,
                    255 & d,
                ]),
            ),
        );
    }
}
function iR(e, t, n = 1, i = !1) {
    let r = e * t * n;
    return i ? Math.round(r) : r;
}
function iO(e, t = !1) {
    return iR(e, 1e3, 11111111111111112e-21, t);
}
(iC.types = void 0),
    (iC.HDLR_TYPES = void 0),
    (iC.STTS = void 0),
    (iC.STSC = void 0),
    (iC.STCO = void 0),
    (iC.STSZ = void 0),
    (iC.VMHD = void 0),
    (iC.SMHD = void 0),
    (iC.STSD = void 0),
    (iC.FTYP = void 0),
    (iC.DINF = void 0);
let ib = null,
    iD = null;
function iL(e, t, n, i) {
    return {
        duration: t,
        size: n,
        cts: i,
        flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: e ? 2 : 1, isNonSync: +!e },
    };
}
class iw extends k {
    constructor(e, t, n, i) {
        if (
            (super("mp4-remuxer", i),
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
            null === ib)
        ) {
            const e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            ib = e ? parseInt(e[1]) : 0;
        }
        if (null === iD) {
            const e = navigator.userAgent.match(/Safari\/(\d+)/i);
            iD = e ? parseInt(e[1]) : 0;
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
            i = e.reduce((e, i) => {
                let r = i.pts,
                    s = r - e;
                return (s < -0x100000000 && ((t = !0), (s = (r = iM(r, n)) - e)), s > 0) ? e : r;
            }, n);
        return t && this.debug("PTS rollover detected"), i;
    }
    remux(e, t, n, i, r, s, a, o) {
        let l,
            u,
            c,
            d,
            _,
            h,
            f = r,
            p = r,
            E = e.pid > -1,
            m = t.pid > -1,
            g = t.samples.length,
            A = e.samples.length > 0,
            I = (a && g > 0) || g > 1;
        if (((!E || A) && (!m || I)) || this.ISGenerated || a) {
            let n;
            if (this.ISGenerated) {
                var T, S, y, N;
                let e = this.videoTrackConfig;
                ((e &&
                    (t.width !== e.width ||
                        t.height !== e.height ||
                        (null == (T = t.pixelRatio) ? void 0 : T[0]) !== (null == (S = e.pixelRatio) ? void 0 : S[0]) ||
                        (null == (y = t.pixelRatio) ? void 0 : y[1]) !==
                            (null == (N = e.pixelRatio) ? void 0 : N[1]))) ||
                    (!e && I) ||
                    (null === this.nextAudioTs && A)) &&
                    this.resetInitSegment();
            }
            this.ISGenerated || (c = this.generateIS(e, t, r, s));
            let i = this.isVideoContiguous,
                a = -1;
            if (
                I &&
                ((a = (function (e) {
                    for (let t = 0; t < e.length; t++) if (e[t].key) return t;
                    return -1;
                })(t.samples)),
                !i && this.config.forceKeyFrameOnDiscontinuity)
            )
                if (((h = !0), a > 0)) {
                    this.warn(`Dropped ${a} out of ${g} video samples due to a missing keyframe`);
                    let e = this.getVideoStartPts(t.samples);
                    (t.samples = t.samples.slice(a)),
                        (t.dropped += a),
                        (p += (t.samples[0].pts - e) / t.inputTimeScale),
                        (n = p);
                } else -1 === a && (this.warn(`No keyframe found out of ${g} video samples`), (h = !1));
            if (this.ISGenerated) {
                if (A && I) {
                    let n = this.getVideoStartPts(t.samples),
                        i = (iM(e.samples[0].pts, n) - n) / t.inputTimeScale;
                    (f += Math.max(0, i)), (p += Math.max(0, -i));
                }
                if (A) {
                    if (
                        (e.samplerate ||
                            (this.warn("regenerate InitSegment as audio detected"), (c = this.generateIS(e, t, r, s))),
                        (u = this.remuxAudio(e, f, this.isAudioContiguous, s, m || I || o === b ? p : void 0)),
                        I)
                    ) {
                        let n = u ? u.endPTS - u.startPTS : 0;
                        t.inputTimeScale ||
                            (this.warn("regenerate InitSegment as video detected"), (c = this.generateIS(e, t, r, s))),
                            (l = this.remuxVideo(t, p, i, n));
                    }
                } else I && (l = this.remuxVideo(t, p, i, 0));
                l && ((l.firstKeyFrame = a), (l.independent = -1 !== a), (l.firstKeyFramePTS = n));
            }
        }
        return (
            this.ISGenerated &&
                this._initPTS &&
                this._initDTS &&
                (n.samples.length && (_ = iP(n, r, this._initPTS, this._initDTS)),
                i.samples.length && (d = ix(i, r, this._initPTS))),
            { audio: u, video: l, initSegment: c, independent: h, text: d, id3: _ }
        );
    }
    generateIS(e, t, n, i) {
        let r,
            s,
            a,
            o = e.samples,
            l = t.samples,
            u = this.typeSupported,
            c = {},
            d = this._initPTS,
            _ = !d || i,
            h = "audio/mp4",
            f = -1;
        if ((_ && (r = s = 1 / 0), e.config && o.length)) {
            switch (((e.timescale = e.samplerate), e.segmentCodec)) {
                case "mp3":
                    u.mpeg ? ((h = "audio/mpeg"), (e.codec = "")) : u.mp3 && (e.codec = "mp3");
                    break;
                case "ac3":
                    e.codec = "ac-3";
            }
            (c.audio = {
                id: "audio",
                container: h,
                codec: e.codec,
                initSegment: "mp3" === e.segmentCodec && u.mpeg ? new Uint8Array(0) : iC.initSegment([e]),
                metadata: { channelCount: e.channelCount },
            }),
                _ &&
                    ((f = e.id),
                    (a = e.inputTimeScale),
                    d && a === d.timescale ? (_ = !1) : (r = s = o[0].pts - Math.round(a * n)));
        }
        if (t.sps && t.pps && l.length) {
            if (
                ((t.timescale = t.inputTimeScale),
                (c.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: t.codec,
                    initSegment: iC.initSegment([t]),
                    metadata: { width: t.width, height: t.height },
                }),
                _)
            )
                if (((f = t.id), (a = t.inputTimeScale), d && a === d.timescale)) _ = !1;
                else {
                    let e = this.getVideoStartPts(l),
                        t = Math.round(a * n);
                    (s = Math.min(s, iM(l[0].dts, e) - t)), (r = Math.min(r, e - t));
                }
            this.videoTrackConfig = { width: t.width, height: t.height, pixelRatio: t.pixelRatio };
        }
        if (Object.keys(c).length)
            return (
                (this.ISGenerated = !0),
                _
                    ? (d &&
                          this.warn(
                              `Timestamps at playlist time: ${i ? "" : "~"}${n} ${r / a} != initPTS: ${d.baseTime / d.timescale} (${d.baseTime}/${d.timescale}) trackId: ${d.trackId}`,
                          ),
                      this.log(`Found initPTS at playlist time: ${n} offset: ${r / a} (${r}/${a}) trackId: ${f}`),
                      (this._initPTS = { baseTime: r, timescale: a, trackId: f }),
                      (this._initDTS = { baseTime: s, timescale: a, trackId: f }))
                    : (r = a = void 0),
                { tracks: c, initPTS: r, timescale: a, trackId: f }
            );
    }
    remuxVideo(e, t, n, i) {
        let r,
            s,
            a,
            c = e.inputTimeScale,
            d = e.samples,
            _ = [],
            h = d.length,
            f = this._initPTS,
            p = (f.baseTime * c) / f.timescale,
            E = this.nextVideoTs,
            m = 8,
            g = this.videoSampleDuration,
            A = 1 / 0,
            I = -1 / 0,
            T = !1;
        if (!n || null === E) {
            let e = p + t * c,
                i = d[0].pts - iM(d[0].dts, d[0].pts);
            ib && null !== E && 15e3 > Math.abs(e - i - (E + p)) ? (n = !0) : (E = e - i - p);
        }
        let S = E + p;
        for (let e = 0; e < h; e++) {
            let t = d[e];
            (t.pts = iM(t.pts, S)), (t.dts = iM(t.dts, S)), t.dts < d[e > 0 ? e - 1 : e].dts && (T = !0);
        }
        T &&
            d.sort(function (e, t) {
                let n = e.dts - t.dts,
                    i = e.pts - t.pts;
                return n || i;
            }),
            (r = d[0].dts);
        let y = (s = d[d.length - 1].dts) - r,
            N = y ? Math.round(y / (h - 1)) : g || e.inputTimeScale / 30;
        if (n) {
            let n = r - S,
                i = n > N,
                s = n < -1;
            if (
                (i || s) &&
                (i
                    ? this.warn(
                          `${(e.segmentCodec || "").toUpperCase()}: ${iO(n, !0)} ms (${n}dts) hole between fragments detected at ${t.toFixed(3)}`,
                      )
                    : this.warn(
                          `${(e.segmentCodec || "").toUpperCase()}: ${iO(-n, !0)} ms (${n}dts) overlapping between fragments detected at ${t.toFixed(3)}`,
                      ),
                !s || S >= d[0].pts || ib)
            ) {
                r = S;
                let e = d[0].pts - n;
                if (i) (d[0].dts = r), (d[0].pts = e);
                else {
                    let t = !0;
                    for (let i = 0; i < d.length && (!(d[i].dts > e) || !t); i++) {
                        let e = d[i].pts;
                        if (((d[i].dts -= n), (d[i].pts -= n), i < d.length - 1)) {
                            let n = d[i + 1].pts;
                            t = n <= d[i].pts == n <= e;
                        }
                    }
                }
                this.log(`Video: Initial PTS/DTS adjusted: ${iO(e, !0)}/${iO(r, !0)}, delta: ${iO(n, !0)} ms`);
            }
        }
        let v = 0,
            C = 0,
            R = (r = Math.max(0, r));
        for (let e = 0; e < h; e++) {
            let t = d[e],
                n = t.units,
                i = n.length,
                r = 0;
            for (let e = 0; e < i; e++) r += n[e].data.length;
            (C += r),
                (v += i),
                (t.length = r),
                t.dts < R ? ((t.dts = R), (R += (N / 4) | 0 || 1)) : (R = t.dts),
                (A = Math.min(t.pts, A)),
                (I = Math.max(t.pts, I));
        }
        s = d[h - 1].dts;
        let O = C + 4 * v + 8;
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
        let b = new DataView(a.buffer);
        b.setUint32(0, O), a.set(iC.types.mdat, 4);
        let D = !1,
            L = 1 / 0,
            w = 1 / 0,
            P = -1 / 0,
            x = -1 / 0;
        for (let e = 0; e < h; e++) {
            let t,
                n = d[e],
                r = n.units,
                s = 0;
            for (let e = 0, t = r.length; e < t; e++) {
                let t = r[e],
                    n = t.data,
                    i = t.data.byteLength;
                b.setUint32(m, i), (m += 4), a.set(n, m), (m += i), (s += 4 + i);
            }
            if (e < h - 1) (g = d[e + 1].dts - n.dts), (t = d[e + 1].pts - n.pts);
            else {
                let r = this.config,
                    s = e > 0 ? n.dts - d[e - 1].dts : N;
                if (((t = e > 0 ? n.pts - d[e - 1].pts : N), r.stretchShortVideoTrack && null !== this.nextAudioTs)) {
                    let e = Math.floor(r.maxBufferHole * c),
                        t = (i ? A + i * c : this.nextAudioTs + p) - n.pts;
                    t > e
                        ? ((g = t - s) < 0 ? (g = s) : (D = !0),
                          this.log(
                              `It is approximately ${t / 90} ms to the next segment; using duration ${g / 90} ms for the last video frame.`,
                          ))
                        : (g = s);
                } else g = s;
            }
            let o = Math.round(n.pts - n.dts);
            (L = Math.min(L, g)),
                (P = Math.max(P, g)),
                (w = Math.min(w, t)),
                (x = Math.max(x, t)),
                _.push(iL(n.key, g, s, o));
        }
        if (_.length) {
            if (ib) {
                if (ib < 70) {
                    let e = _[0].flags;
                    (e.dependsOn = 2), (e.isNonSync = 0);
                }
            } else if (iD && x - w < P - L && N / P < 0.025 && 0 === _[0].cts) {
                this.warn(
                    "Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.",
                );
                let e = r;
                for (let t = 0, n = _.length; t < n; t++) {
                    let i = e + _[t].duration,
                        r = e + _[t].cts;
                    if (t < n - 1) {
                        let e = i + _[t + 1].cts;
                        _[t].duration = e - r;
                    } else _[t].duration = t ? _[t - 1].duration : N;
                    (_[t].cts = 0), (e = i);
                }
            }
        }
        let k = s + (g = D || !g ? N : g);
        (this.nextVideoTs = E = k - p), (this.videoSampleDuration = g), (this.isVideoContiguous = !0);
        let U = {
            data1: iC.moof(e.sequenceNumber++, r, M(e, { samples: _ })),
            data2: a,
            startPTS: (A - p) / c,
            endPTS: (I + g - p) / c,
            startDTS: (r - p) / c,
            endDTS: E / c,
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
                return 1152;
            case "ac3":
                return 1536;
            default:
                return 1024;
        }
    }
    remuxAudio(e, t, n, i, r) {
        let s,
            a = e.inputTimeScale,
            c = e.samplerate ? e.samplerate : a,
            d = a / c,
            _ = this.getSamplesPerFrame(e),
            h = _ * d,
            f = this._initPTS,
            p = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
            E = [],
            m = void 0 !== r,
            g = e.samples,
            A = 8 * !p,
            I = this.nextAudioTs || -1,
            T = (f.baseTime * a) / f.timescale,
            S = T + t * a;
        if (
            ((this.isAudioContiguous = n =
                n ||
                (g.length &&
                    I > 0 &&
                    ((i && 9e3 > Math.abs(S - (I + T))) || Math.abs(iM(g[0].pts, S) - (I + T)) < 20 * h))),
            g.forEach(function (e) {
                e.pts = iM(e.pts, S);
            }),
            !n || I < 0)
        ) {
            if (!(g = g.filter((e) => e.pts >= 0)).length) return;
            I = 0 === r ? 0 : i && !m ? Math.max(0, S - T) : g[0].pts - T;
        }
        if ("aac" === e.segmentCodec) {
            let t = this.config.maxAudioFramesDrift;
            for (let n = 0, i = I + T; n < g.length; n++) {
                let r = g[n],
                    s = r.pts,
                    o = s - i,
                    l = Math.abs((1e3 * o) / a);
                if (o <= -t * h && m)
                    0 === n &&
                        (this.warn(
                            `Audio frame @ ${(s / a).toFixed(3)}s overlaps marker by ${Math.round((1e3 * o) / a)} ms.`,
                        ),
                        (this.nextAudioTs = I = s - T),
                        (i = s));
                else if (o >= t * h && l < 1e4 && m) {
                    let t = Math.round(o / h);
                    for (i = s - t * h; i < 0 && t && h; ) t--, (i += h);
                    0 === n && (this.nextAudioTs = I = i - T),
                        this.warn(
                            `Injecting ${t} audio frames @ ${((i - T) / a).toFixed(3)}s due to ${Math.round((1e3 * o) / a)} ms gap.`,
                        );
                    for (let s = 0; s < t; s++) {
                        let t = iv.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
                        t ||
                            (this.log(
                                "Unable to get silent frame for given audio codec; duplicating last frame instead.",
                            ),
                            (t = r.unit.subarray())),
                            g.splice(n, 0, { unit: t, pts: i }),
                            (i += h),
                            n++;
                    }
                }
                (r.pts = i), (i += h);
            }
        }
        let y = null,
            N = null,
            v = 0,
            C = g.length;
        for (; C--; ) v += g[C].unit.byteLength;
        for (let t = 0, i = g.length; t < i; t++) {
            let i = g[t],
                r = i.unit,
                a = i.pts;
            if (null !== N) E[t - 1].duration = Math.round((a - N) / d);
            else {
                if ((n && "aac" === e.segmentCodec && (a = I + T), (y = a), !(v > 0))) return;
                v += A;
                try {
                    s = new Uint8Array(v);
                } catch (e) {
                    this.observer.emit(u.ERROR, u.ERROR, {
                        type: o.MUX_ERROR,
                        details: l.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        error: e,
                        bytes: v,
                        reason: `fail allocating audio mdat ${v}`,
                    });
                    return;
                }
                p || (new DataView(s.buffer).setUint32(0, v), s.set(iC.types.mdat, 4));
            }
            s.set(r, A);
            let c = r.byteLength;
            (A += c), E.push(iL(!0, _, c, 0)), (N = a);
        }
        let R = E.length;
        if (!R) return;
        let O = E[E.length - 1];
        (I = N - T), (this.nextAudioTs = I + d * O.duration);
        let b = p ? new Uint8Array(0) : iC.moof(e.sequenceNumber++, y / d, M({}, e, { samples: E }));
        e.samples = [];
        let D = (y - T) / a,
            L = I / a,
            w = {
                data1: b,
                data2: s,
                startPTS: D,
                endPTS: L,
                startDTS: D,
                endDTS: L,
                type: "audio",
                hasAudio: !0,
                hasVideo: !1,
                nb: R,
            };
        return (this.isAudioContiguous = !0), w;
    }
}
function iM(e, t) {
    let n;
    if (null === t) return e;
    for (n = t < e ? -0x200000000 : 0x200000000; Math.abs(e - t) > 0x100000000; ) e += n;
    return e;
}
function iP(e, t, n, i) {
    let r = e.samples.length;
    if (!r) return;
    let s = e.inputTimeScale;
    for (let a = 0; a < r; a++) {
        let r = e.samples[a];
        (r.pts = iM(r.pts - (n.baseTime * s) / n.timescale, t * s) / s),
            (r.dts = iM(r.dts - (i.baseTime * s) / i.timescale, t * s) / s);
    }
    let a = e.samples;
    return (e.samples = []), { samples: a };
}
function ix(e, t, n) {
    let i = e.samples.length;
    if (!i) return;
    let r = e.inputTimeScale;
    for (let s = 0; s < i; s++) {
        let i = e.samples[s];
        i.pts = iM(i.pts - (n.baseTime * r) / n.timescale, t * r) / r;
    }
    e.samples.sort((e, t) => e.pts - t.pts);
    let s = e.samples;
    return (e.samples = []), { samples: s };
}
function ik(e, t, n = !1) {
    return (null == e ? void 0 : e.start) !== void 0 ? (e.start + (n ? e.duration : 0)) / e.timescale : t;
}
function iU(e, t, n) {
    let i = e.codec;
    return i && i.length > 4
        ? i
        : t === X
          ? "ec-3" === i || "ac-3" === i || "alac" === i
              ? i
              : "fLaC" === i || "Opus" === i
                ? eL(i, !1)
                : (n.warn(`Unhandled audio codec "${i}" in mp4 MAP`), i || "mp4a")
          : (n.warn(`Unhandled video codec "${i}" in mp4 MAP`), i || "avc1");
}
try {
    i = self.performance.now.bind(self.performance);
} catch (e) {
    i = Date.now;
}
let iG = [
    {
        demux: class {
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
            resetInitSegment(e, t, n, i) {
                let r = (this.videoTrack = n5("video", 1)),
                    s = (this.audioTrack = n5("audio", 1)),
                    a = (this.txtTrack = n5("text", 1));
                if (((this.id3Track = n5("id3", 1)), (this.timeOffset = 0), !(null != e && e.byteLength))) return;
                let o = ed(e);
                if (o.video) {
                    let { id: e, timescale: t, codec: n, supplemental: i } = o.video;
                    (r.id = e), (r.timescale = a.timescale = t), (r.codec = n), (r.supplemental = i);
                }
                if (o.audio) {
                    let { id: e, timescale: t, codec: n } = o.audio;
                    (s.id = e), (s.timescale = t), (s.codec = n);
                }
                (a.id = er.text), (r.sampleDuration = 0), (r.duration = s.duration = i);
            }
            resetContiguity() {
                this.remainderData = null;
            }
            static probe(e) {
                let t = e.byteLength;
                for (let n = 0; n < t; ) {
                    let i = eo(e, n);
                    if (i > 8 && 109 === e[n + 4] && 111 === e[n + 5] && 111 === e[n + 6] && 102 === e[n + 7])
                        return !0;
                    n = i > 1 ? n + i : t;
                }
                return !1;
            }
            demux(e, t) {
                this.timeOffset = t;
                let n = e,
                    i = this.videoTrack,
                    r = this.txtTrack;
                if (this.config.progressive) {
                    this.remainderData && (n = em(this.remainderData, e));
                    let t = (function (e) {
                        let t = { valid: null, remainder: null },
                            n = ec(e, ["moof"]);
                        if (n.length < 2) return (t.remainder = e), t;
                        let i = n[n.length - 1];
                        return (t.valid = e.slice(0, i.byteOffset - 8)), (t.remainder = e.slice(i.byteOffset - 8)), t;
                    })(n);
                    (this.remainderData = t.remainder), (i.samples = t.valid || new Uint8Array());
                } else i.samples = n;
                let s = this.extractID3Track(i, t);
                return (
                    (r.samples = eg(t, i)),
                    { videoTrack: i, audioTrack: this.audioTrack, id3Track: s, textTrack: this.txtTrack }
                );
            }
            flush() {
                let e = this.timeOffset,
                    t = this.videoTrack,
                    n = this.txtTrack;
                (t.samples = this.remainderData || new Uint8Array()), (this.remainderData = null);
                let i = this.extractID3Track(t, this.timeOffset);
                return (n.samples = eg(e, t)), { videoTrack: t, audioTrack: n5(), id3Track: i, textTrack: n5() };
            }
            extractID3Track(e, t) {
                let n = this.id3Track;
                if (e.samples.length) {
                    let i = ec(e.samples, ["emsg"]);
                    i &&
                        i.forEach((e) => {
                            let i = (function (e) {
                                let t = e[0],
                                    n = "",
                                    i = "",
                                    r = 0,
                                    a = 0,
                                    o = 0,
                                    l = 0,
                                    u = 0,
                                    c = 0;
                                if (0 === t) {
                                    for (; "\0" !== es(e.subarray(c, c + 1)); )
                                        (n += es(e.subarray(c, c + 1))), (c += 1);
                                    for (n += es(e.subarray(c, c + 1)), c += 1; "\0" !== es(e.subarray(c, c + 1)); )
                                        (i += es(e.subarray(c, c + 1))), (c += 1);
                                    (i += es(e.subarray(c, c + 1))),
                                        (c += 1),
                                        (r = eo(e, 12)),
                                        (a = eo(e, 16)),
                                        (l = eo(e, 20)),
                                        (u = eo(e, 24)),
                                        (c = 28);
                                } else if (1 === t) {
                                    (c += 4), (r = eo(e, c));
                                    let t = eo(e, (c += 4)),
                                        a = eo(e, (c += 4));
                                    for (
                                        c += 4,
                                            s((o = 0x100000000 * t + a)) ||
                                                ((o = Number.MAX_SAFE_INTEGER),
                                                B.warn(
                                                    "Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box",
                                                )),
                                            l = eo(e, c),
                                            c += 4,
                                            u = eo(e, c),
                                            c += 4;
                                        "\0" !== es(e.subarray(c, c + 1));
                                    )
                                        (n += es(e.subarray(c, c + 1))), (c += 1);
                                    for (n += es(e.subarray(c, c + 1)), c += 1; "\0" !== es(e.subarray(c, c + 1)); )
                                        (i += es(e.subarray(c, c + 1))), (c += 1);
                                    (i += es(e.subarray(c, c + 1))), (c += 1);
                                }
                                return {
                                    schemeIdUri: n,
                                    value: i,
                                    timeScale: r,
                                    presentationTime: o,
                                    presentationTimeDelta: a,
                                    eventDuration: l,
                                    id: u,
                                    payload: e.subarray(c, e.byteLength),
                                };
                            })(e);
                            if (i_.test(i.schemeIdUri)) {
                                let e = ih(i, t),
                                    r = 0xffffffff === i.eventDuration ? 1 / 0 : i.eventDuration / i.timeScale;
                                r <= 0.001 && (r = 1 / 0);
                                let s = i.payload;
                                n.samples.push({
                                    data: s,
                                    len: s.byteLength,
                                    dts: e,
                                    pts: e,
                                    type: n4.emsg,
                                    duration: r,
                                });
                            } else if (
                                this.config.enableEmsgKLVMetadata &&
                                i.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")
                            ) {
                                let e = ih(i, t);
                                n.samples.push({
                                    data: i.payload,
                                    len: i.payload.byteLength,
                                    dts: e,
                                    pts: e,
                                    type: n4.misbklv,
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
        },
        remux: class extends k {
            constructor(e, t, n, i) {
                super("passthrough-remuxer", i),
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
            resetInitSegment(e, t, n, i) {
                (this.audioCodec = t),
                    (this.videoCodec = n),
                    this.generateInitSegment(e, i),
                    (this.emitInitSegment = !0);
            }
            generateInitSegment(e, t) {
                let { audioCodec: n, videoCodec: i } = this;
                if (!(null != e && e.byteLength)) {
                    (this.initTracks = void 0), (this.initData = void 0);
                    return;
                }
                let { audio: r, video: s } = (this.initData = ed(e));
                if (t)
                    !(function (e, t) {
                        if (!e || !t) return;
                        let n = t.keyId;
                        n &&
                            t.isCommonEncryption &&
                            ec(e, ["moov", "trak"]).forEach((e) => {
                                let t = ec(e, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8),
                                    i = ec(t, ["enca"]),
                                    r = i.length > 0;
                                r || (i = ec(t, ["encv"])),
                                    i.forEach((e) => {
                                        ec(r ? e.subarray(28) : e.subarray(78), ["sinf"]).forEach((e) => {
                                            let t = eE(e);
                                            if (t) {
                                                let e = t.subarray(8, 24);
                                                e.some((e) => 0 !== e) ||
                                                    (B.log(
                                                        `[eme] Patching keyId in 'enc${r ? "a" : "v"}>sinf>>tenc' box: ${W(e)} -> ${W(n)}`,
                                                    ),
                                                    t.set(n, 8));
                                            }
                                        });
                                    });
                            });
                    })(e, t);
                else {
                    let e = r || s;
                    null != e &&
                        e.encrypted &&
                        this.warn(`Init segment with encrypted track with has no key ("${e.codec}")!`);
                }
                r && (n = iU(r, X, this)), s && (i = iU(s, Z, this));
                let a = {};
                r && s
                    ? (a.audiovideo = {
                          container: "video/mp4",
                          codec: n + "," + i,
                          supplemental: s.supplemental,
                          encrypted: s.encrypted,
                          initSegment: e,
                          id: "main",
                      })
                    : r
                      ? (a.audio = {
                            container: "audio/mp4",
                            codec: n,
                            encrypted: r.encrypted,
                            initSegment: e,
                            id: "audio",
                        })
                      : s
                        ? (a.video = {
                              container: "video/mp4",
                              codec: i,
                              supplemental: s.supplemental,
                              encrypted: s.encrypted,
                              initSegment: e,
                              id: "main",
                          })
                        : this.warn("initSegment does not contain moov or trak boxes."),
                    (this.initTracks = a);
            }
            remux(e, t, n, i, s, a) {
                var o, l;
                let { initPTS: u, lastEndTime: c } = this,
                    d = { audio: void 0, video: void 0, text: i, id3: n, initSegment: void 0 };
                r(c) || (c = this.lastEndTime = s || 0);
                let _ = t.samples;
                if (!_.length) return d;
                let h = { initPTS: void 0, timescale: void 0, trackId: void 0 },
                    f = this.initData;
                if (
                    ((null != (o = f) && o.length) || (this.generateInitSegment(_), (f = this.initData)),
                    !(null != (l = f) && l.length))
                )
                    return this.warn("Failed to generate initSegment."), d;
                this.emitInitSegment && ((h.tracks = this.initTracks), (this.emitInitSegment = !1));
                let p = (function (e, t, n) {
                        let i = {},
                            s = ec(e, ["moof", "traf"]);
                        for (let e = 0; e < s.length; e++) {
                            let a = s[e],
                                o = ec(a, ["tfhd"])[0],
                                l = eo(o, 4),
                                u = t[l];
                            if (!u) continue;
                            i[l] ||
                                (i[l] = {
                                    start: NaN,
                                    duration: 0,
                                    sampleCount: 0,
                                    timescale: u.timescale,
                                    type: u.type,
                                });
                            let c = i[l],
                                d = ec(a, ["tfdt"])[0];
                            if (d) {
                                let e = d[0],
                                    t = eo(d, 4);
                                1 === e &&
                                    (0xffffffff === t
                                        ? n.warn(
                                              "[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time",
                                          )
                                        : ((t *= 0x100000000), (t += eo(d, 8)))),
                                    r(t) && (!r(c.start) || t < c.start) && (c.start = t);
                            }
                            let _ = u.default,
                                h = eo(o, 0) | (null == _ ? void 0 : _.flags),
                                f = (null == _ ? void 0 : _.duration) || 0;
                            8 & h && (f = 2 & h ? eo(o, 12) : eo(o, 8));
                            let p = ec(a, ["trun"]),
                                E = c.start || 0,
                                m = 0,
                                g = f;
                            for (let e = 0; e < p.length; e++) {
                                let t = p[e],
                                    n = eo(t, 4),
                                    i = c.sampleCount;
                                c.sampleCount += n;
                                let r = 1 & t[3],
                                    s = 4 & t[3],
                                    a = 1 & t[2],
                                    o = 2 & t[2],
                                    l = 4 & t[2],
                                    u = 8 & t[2],
                                    d = 8,
                                    _ = n;
                                for (
                                    r && (d += 4),
                                        s &&
                                            n &&
                                            (1 & t[d + 1] || void 0 !== c.keyFrameIndex || (c.keyFrameIndex = i),
                                            (d += 4),
                                            a ? ((g = eo(t, d)), (d += 4)) : (g = f),
                                            o && (d += 4),
                                            u && (d += 4),
                                            (E += g),
                                            (m += g),
                                            _--);
                                    _--;
                                )
                                    a ? ((g = eo(t, d)), (d += 4)) : (g = f),
                                        o && (d += 4),
                                        l &&
                                            (1 & t[d + 1] ||
                                                void 0 !== c.keyFrameIndex ||
                                                ((c.keyFrameIndex = c.sampleCount - (_ + 1)), (c.keyFrameStart = E)),
                                            (d += 4)),
                                        u && (d += 4),
                                        (E += g),
                                        (m += g);
                                !m && f && (m += f * n);
                            }
                            c.duration += m;
                        }
                        if (!Object.keys(i).some((e) => i[e].duration)) {
                            let t = 1 / 0,
                                n = 0,
                                s = ec(e, ["sidx"]);
                            for (let e = 0; e < s.length; e++) {
                                let i = (function (e) {
                                    let t = [],
                                        n = e[0],
                                        i = 8,
                                        r = eo(e, 8);
                                    i += 4;
                                    let s = 0,
                                        a = 0;
                                    0 === n
                                        ? ((s = eo(e, i)), (a = eo(e, i + 4)), (i += 8))
                                        : ((s = el(e, i)), (a = el(e, i + 8)), (i += 16)),
                                        (i += 2);
                                    let o = e.length + a,
                                        l = ea(e, i);
                                    i += 2;
                                    for (let n = 0; n < l; n++) {
                                        let n = i,
                                            s = eo(e, n);
                                        n += 4;
                                        let a = 0x7fffffff & s;
                                        if (1 == (0x80000000 & s) >>> 31)
                                            return B.warn("SIDX has hierarchical references (not supported)"), null;
                                        let l = eo(e, n);
                                        (n += 4),
                                            t.push({
                                                referenceSize: a,
                                                subsegmentDuration: l,
                                                info: { duration: l / r, start: o, end: o + a - 1 },
                                            }),
                                            (o += a),
                                            (n += 4),
                                            (i = n);
                                    }
                                    return {
                                        earliestPresentationTime: s,
                                        timescale: r,
                                        version: n,
                                        referencesCount: l,
                                        references: t,
                                    };
                                })(s[e]);
                                if (null != i && i.references) {
                                    t = Math.min(t, i.earliestPresentationTime / i.timescale);
                                    let e = i.references.reduce((e, t) => e + t.info.duration || 0, 0);
                                    n = Math.max(n, e + i.earliestPresentationTime / i.timescale);
                                }
                            }
                            n &&
                                r(n) &&
                                Object.keys(i).forEach((e) => {
                                    i[e].duration || (i[e].duration = n * i[e].timescale - i[e].start);
                                });
                        }
                        return i;
                    })(_, f, this),
                    E = f.audio ? p[f.audio.id] : null,
                    m = f.video ? p[f.video.id] : null,
                    g = ik(m, 1 / 0),
                    A = ik(E, 1 / 0),
                    I = ik(m, 0, !0),
                    T = ik(E, 0, !0),
                    S = s,
                    y = 0,
                    N = E && (!m || (!u && A < g) || (u && u.trackId === f.audio.id)),
                    v = N ? E : m;
                if (v) {
                    let e = v.timescale,
                        t = v.start - s * e,
                        n = N ? f.audio.id : f.video.id;
                    (S = v.start / e),
                        (y = N ? T - A : I - g),
                        (a || !u) &&
                            ((function (e, t, n, i) {
                                if (null === e) return !0;
                                let r = Math.max(i, 1);
                                return Math.abs(t - e.baseTime / e.timescale - n) > r;
                            })(u, S, s, y) ||
                                e !== u.timescale) &&
                            (u &&
                                this.warn(
                                    `Timestamps at playlist time: ${a ? "" : "~"}${s} ${t / e} != initPTS: ${u.baseTime / u.timescale} (${u.baseTime}/${u.timescale}) trackId: ${u.trackId}`,
                                ),
                            this.log(`Found initPTS at playlist time: ${s} offset: ${S - s} (${t}/${e}) trackId: ${n}`),
                            (u = null),
                            (h.initPTS = t),
                            (h.timescale = e),
                            (h.trackId = n));
                } else this.warn(`No audio or video samples found for initPTS at playlist time: ${s}`);
                u
                    ? ((h.initPTS = u.baseTime), (h.timescale = u.timescale), (h.trackId = u.trackId))
                    : ((h.timescale && void 0 !== h.trackId && void 0 !== h.initPTS) ||
                          (this.warn("Could not set initPTS"), (h.initPTS = S), (h.timescale = 1), (h.trackId = -1)),
                      (this.initPTS = u = { baseTime: h.initPTS, timescale: h.timescale, trackId: h.trackId }));
                let C = S - u.baseTime / u.timescale,
                    R = C + y;
                y > 0
                    ? (this.lastEndTime = R)
                    : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                let O = !!f.audio,
                    b = !!f.video,
                    D = "";
                O && (D += "audio"), b && (D += "video");
                let L = {
                    data1: _,
                    startPTS: C,
                    startDTS: C,
                    endPTS: R,
                    endDTS: R,
                    type: D,
                    hasAudio: O,
                    hasVideo: b,
                    nb: 1,
                    dropped: 0,
                    encrypted: (!!f.audio && f.audio.encrypted) || (!!f.video && f.video.encrypted),
                };
                (d.audio = O && !b ? L : void 0), (d.video = b ? L : void 0);
                let w = null == m ? void 0 : m.sampleCount;
                if (w) {
                    let e = m.keyFrameIndex,
                        t = -1 !== e;
                    (L.nb = w),
                        (L.dropped = 0 === e || this.isVideoContiguous ? 0 : t ? e : w),
                        (L.independent = t),
                        (L.firstKeyFrame = e),
                        t && m.keyFrameStart && (L.firstKeyFramePTS = (m.keyFrameStart - u.baseTime) / u.timescale),
                        this.isVideoContiguous || (d.independent = t),
                        this.isVideoContiguous || (this.isVideoContiguous = t),
                        L.dropped &&
                            this.warn(
                                `fmp4 does not start with IDR: firstIDR ${e}/${w} dropped: ${L.dropped} start: ${L.firstKeyFramePTS || "NA"}`,
                            );
                }
                return (d.initSegment = h), (d.id3 = iP(n, s, u, u)), i.samples.length && (d.text = ix(i, s, u)), d;
            }
        },
    },
    { demux: iI, remux: iw },
    {
        demux: class extends n7 {
            constructor(e, t) {
                super(), (this.observer = void 0), (this.config = void 0), (this.observer = e), (this.config = t);
            }
            resetInitSegment(e, t, n, i) {
                super.resetInitSegment(e, t, n, i),
                    (this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 2,
                        pid: -1,
                        sequenceNumber: 0,
                        segmentCodec: "aac",
                        samples: [],
                        manifestCodec: t,
                        duration: i,
                        inputTimeScale: 9e4,
                        dropped: 0,
                    });
            }
            static probe(e, t) {
                if (!e) return !1;
                let n = nz(e, 0),
                    i = (null == n ? void 0 : n.length) || 0;
                if (iu(e, i)) return !1;
                for (let n = e.length; i < n; i++)
                    if (
                        (function (e, t) {
                            if (nQ(e, t)) {
                                let n = nX(e, t);
                                if (t + n >= e.length) return !1;
                                let i = nZ(e, t);
                                if (i <= n) return !1;
                                let r = t + i;
                                return r === e.length || nQ(e, r);
                            }
                            return !1;
                        })(e, i)
                    )
                        return t.log("ADTS sync word found !"), !0;
                return !1;
            }
            canParse(e, t) {
                return t + 5 < e.length && nq(e, t) && nZ(e, t) <= e.length - t;
            }
            appendFrame(e, t, n) {
                nJ(e, this.observer, t, n, e.manifestCodec);
                let i = n0(e, t, n, this.basePTS, this.frameIndex);
                if (i && 0 === i.missing) return i;
            }
        },
        remux: iw,
    },
    {
        demux: class extends n7 {
            resetInitSegment(e, t, n, i) {
                super.resetInitSegment(e, t, n, i),
                    (this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: 2,
                        pid: -1,
                        sequenceNumber: 0,
                        segmentCodec: "mp3",
                        samples: [],
                        manifestCodec: t,
                        duration: i,
                        inputTimeScale: 9e4,
                        dropped: 0,
                    });
            }
            static probe(e) {
                if (!e) return !1;
                let t = nz(e, 0),
                    n = (null == t ? void 0 : t.length) || 0;
                if (t && 11 === e[n] && 119 === e[n + 1] && void 0 !== n6(t) && 16 >= ic(e, n)) return !1;
                for (let t = e.length; n < t; n++) if (iu(e, n)) return B.log("MPEG Audio sync word found !"), !0;
                return !1;
            }
            canParse(e, t) {
                return io(e, t) && 4 <= e.length - t;
            }
            appendFrame(e, t, n) {
                if (null !== this.basePTS) return is(e, t, n, this.basePTS, this.frameIndex);
            }
        },
        remux: iw,
    },
];
iG.splice(2, 0, {
    demux: class extends n7 {
        constructor(e) {
            super(), (this.observer = void 0), (this.observer = e);
        }
        resetInitSegment(e, t, n, i) {
            super.resetInitSegment(e, t, n, i),
                (this._audioTrack = {
                    container: "audio/ac-3",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: "ac3",
                    samples: [],
                    manifestCodec: t,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0,
                });
        }
        canParse(e, t) {
            return t + 64 < e.length;
        }
        appendFrame(e, t, n) {
            let i = id(e, t, n, this.basePTS, this.frameIndex);
            if (-1 !== i) return { sample: e.samples[e.samples.length - 1], length: i, missing: 0 };
        }
        static probe(e) {
            if (!e) return !1;
            let t = nz(e, 0);
            if (!t) return !1;
            let n = t.length;
            return !!(11 === e[n] && 119 === e[n + 1] && void 0 !== n6(t) && 16 > ic(e, n));
        }
    },
    remux: iw,
});
class iF {
    constructor(e, t, n, i, r, s) {
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
            (this.id = r),
            (this.logger = s);
    }
    configure(e) {
        (this.transmuxConfig = e), this.decrypter && this.decrypter.reset();
    }
    push(e, t, n, r) {
        var s, a;
        let c,
            d = n.transmuxing;
        d.executeStart = i();
        let _ = new Uint8Array(e),
            { currentTransmuxState: h, transmuxConfig: f } = this;
        r && (this.currentTransmuxState = r);
        let {
                contiguous: p,
                discontinuity: E,
                trackSwitch: m,
                accurateTimeOffset: g,
                timeOffset: A,
                initSegmentChange: I,
            } = r || h,
            { audioCodec: T, videoCodec: S, defaultInitPts: y, duration: N, initSegmentData: v } = f,
            C =
                ((s = _),
                (a = t),
                (c = null),
                s.byteLength > 0 &&
                    (null == a ? void 0 : a.key) != null &&
                    null !== a.iv &&
                    null != a.method &&
                    (c = a),
                c);
        if (C && tx(C.method)) {
            let e = this.getDecrypter(),
                t = tk(C.method);
            if (!e.isSync())
                return (
                    (this.asyncResult = !0),
                    (this.decryptionPromise = e.webCryptoDecrypt(_, C.key.buffer, C.iv.buffer, t).then((e) => {
                        let t = this.push(e, null, n);
                        return (this.decryptionPromise = null), t;
                    })),
                    this.decryptionPromise
                );
            {
                let r = e.softwareDecrypt(_, C.key.buffer, C.iv.buffer, t);
                if (n.part > -1) {
                    let t = e.flush();
                    r = t ? t.buffer : t;
                }
                if (!r) return (d.executeEnd = i()), iV(n);
                _ = new Uint8Array(r);
            }
        }
        let R = this.needsProbing(E, m);
        if (R) {
            let e = this.configureTransmuxer(_);
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
                    (d.executeEnd = i()),
                    iV(n)
                );
        }
        (E || m || I || R) && this.resetInitSegment(v, T, S, N, t),
            (E || I || R) && this.resetInitialTimestamp(y),
            p || this.resetContiguity();
        let O = this.transmux(_, C, A, g, n);
        this.asyncResult = iB(O);
        let b = this.currentTransmuxState;
        return (b.contiguous = !0), (b.discontinuity = !1), (b.trackSwitch = !1), (d.executeEnd = i()), O;
    }
    flush(e) {
        let t = e.transmuxing;
        t.executeStart = i();
        let { decrypter: n, currentTransmuxState: r, decryptionPromise: s } = this;
        if (s) return (this.asyncResult = !0), s.then(() => this.flush(e));
        let a = [],
            { timeOffset: o } = r;
        if (n) {
            let t = n.flush();
            t && a.push(this.push(t.buffer, null, e));
        }
        let { demuxer: l, remuxer: u } = this;
        if (!l || !u) {
            t.executeEnd = i();
            let n = [iV(e)];
            return this.asyncResult ? Promise.resolve(n) : n;
        }
        let c = l.flush(o);
        return iB(c)
            ? ((this.asyncResult = !0), c.then((t) => (this.flushRemux(a, t, e), a)))
            : (this.flushRemux(a, c, e), this.asyncResult)
              ? Promise.resolve(a)
              : a;
    }
    flushRemux(e, t, n) {
        let { audioTrack: r, videoTrack: s, id3Track: a, textTrack: o } = t,
            { accurateTimeOffset: l, timeOffset: u } = this.currentTransmuxState;
        this.logger.log(
            `[transmuxer.ts]: Flushed ${this.id} sn: ${n.sn}${n.part > -1 ? " part: " + n.part : ""} of ${this.id === O ? "level" : "track"} ${n.level}`,
        );
        let c = this.remuxer.remux(r, s, a, o, u, l, !0, this.id);
        e.push({ remuxResult: c, chunkMeta: n }), (n.transmuxing.executeEnd = i());
    }
    resetInitialTimestamp(e) {
        let { demuxer: t, remuxer: n } = this;
        t && n && (t.resetTimeStamp(e), n.resetTimeStamp(e));
    }
    resetContiguity() {
        let { demuxer: e, remuxer: t } = this;
        e && t && (e.resetContiguity(), t.resetNextTimestamp());
    }
    resetInitSegment(e, t, n, i, r) {
        let { demuxer: s, remuxer: a } = this;
        s && a && (s.resetInitSegment(e, t, n, i), a.resetInitSegment(e, t, n, r));
    }
    destroy() {
        this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
            this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
    }
    transmux(e, t, n, i, r) {
        return t && "SAMPLE-AES" === t.method
            ? this.transmuxSampleAes(e, t, n, i, r)
            : this.transmuxUnencrypted(e, n, i, r);
    }
    transmuxUnencrypted(e, t, n, i) {
        let {
            audioTrack: r,
            videoTrack: s,
            id3Track: a,
            textTrack: o,
        } = this.demuxer.demux(e, t, !1, !this.config.progressive);
        return { remuxResult: this.remuxer.remux(r, s, a, o, t, n, !1, this.id), chunkMeta: i };
    }
    transmuxSampleAes(e, t, n, i, r) {
        return this.demuxer
            .demuxSampleAes(e, t, n)
            .then((e) => ({
                remuxResult: this.remuxer.remux(e.audioTrack, e.videoTrack, e.id3Track, e.textTrack, n, i, !1, this.id),
                chunkMeta: r,
            }));
    }
    configureTransmuxer(e) {
        let t,
            { config: n, observer: i, typeSupported: r } = this;
        for (let n = 0, i = iG.length; n < i; n++) {
            var s;
            if (null != (s = iG[n].demux) && s.probe(e, this.logger)) {
                t = iG[n];
                break;
            }
        }
        if (!t) return Error("Failed to find demuxer by probing fragment data");
        let a = this.demuxer,
            o = this.remuxer,
            l = t.remux,
            u = t.demux;
        (o && o instanceof l) || (this.remuxer = new l(i, n, r, this.logger)),
            (a && a instanceof u) || ((this.demuxer = new u(i, n, r, this.logger)), (this.probe = u.probe));
    }
    needsProbing(e, t) {
        return !this.demuxer || !this.remuxer || e || t;
    }
    getDecrypter() {
        let e = this.decrypter;
        return e || (e = this.decrypter = new tp(this.config)), e;
    }
}
let iV = (e) => ({ remuxResult: {}, chunkMeta: e });
function iB(e) {
    return "then" in e && e.then instanceof Function;
}
class iH {
    constructor(e, t, n, i, r) {
        (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initSegmentData = void 0),
            (this.duration = void 0),
            (this.defaultInitPts = void 0),
            (this.audioCodec = e),
            (this.videoCodec = t),
            (this.initSegmentData = n),
            (this.duration = i),
            (this.defaultInitPts = r || null);
    }
}
class ij {
    constructor(e, t, n, i, r, s) {
        (this.discontinuity = void 0),
            (this.contiguous = void 0),
            (this.accurateTimeOffset = void 0),
            (this.trackSwitch = void 0),
            (this.timeOffset = void 0),
            (this.initSegmentChange = void 0),
            (this.discontinuity = e),
            (this.contiguous = t),
            (this.accurateTimeOffset = n),
            (this.trackSwitch = i),
            (this.timeOffset = r),
            (this.initSegmentChange = s);
    }
}
let iY = 0;
class iW {
    constructor(e, t, n, i) {
        (this.error = null),
            (this.hls = void 0),
            (this.id = void 0),
            (this.instanceNo = iY++),
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
                            var i;
                            let e = null == (i = this.workerContext) ? void 0 : i.objectURL;
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
        const r = e.config;
        (this.hls = e),
            (this.id = t),
            (this.useWorker = !!r.enableWorker),
            (this.onTransmuxComplete = n),
            (this.onFlush = i);
        const s = (e, t) => {
            ((t = t || {}).frag = this.frag || void 0),
                e === u.ERROR && ((t.parent = this.id), (t.part = this.part), (this.error = t.error)),
                this.hls.trigger(e, t);
        };
        (this.observer = new nH()), this.observer.on(u.FRAG_DECRYPTED, s), this.observer.on(u.ERROR, s);
        const a = eP(r.preferManagedMediaSource);
        if (this.useWorker && "u" > typeof Worker) {
            const n = this.hls.logger;
            if (r.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__) {
                try {
                    r.workerPath
                        ? (n.log(`loading Web Worker ${r.workerPath} for "${t}"`),
                          (this.workerContext = (function (e) {
                              let t = nY[e];
                              if (t) return t.clientCount++, t;
                              let n = new self.URL(e, self.location.href).href,
                                  i = { worker: new self.Worker(n), scriptURL: n, clientCount: 1 };
                              return (nY[e] = i), i;
                          })(r.workerPath)))
                        : (n.log(`injecting Web Worker for "${t}"`),
                          (this.workerContext = (function () {
                              let e = nY[nj];
                              if (e) return e.clientCount++, e;
                              let t = new self.Blob(
                                      [
                                          `var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`,
                                      ],
                                      { type: "text/javascript" },
                                  ),
                                  n = self.URL.createObjectURL(t),
                                  i = { worker: new self.Worker(n), objectURL: n, clientCount: 1 };
                              return (nY[nj] = i), i;
                          })()));
                    const { worker: e } = this.workerContext;
                    e.addEventListener("message", this.onWorkerMessage),
                        e.addEventListener("error", this.onWorkerError),
                        e.postMessage({
                            instanceNo: this.instanceNo,
                            cmd: "init",
                            typeSupported: a,
                            id: t,
                            config: e$(r),
                        });
                } catch (i) {
                    n.warn(`Error setting up "${t}" Web Worker, fallback to inline`, i),
                        this.terminateWorker(),
                        (this.error = null),
                        (this.transmuxer = new iF(this.observer, a, r, "", t, e.logger));
                }
                return;
            }
        }
        this.transmuxer = new iF(this.observer, a, r, "", t, e.logger);
    }
    reset() {
        if (((this.frag = null), (this.part = null), this.workerContext)) {
            let e = this.instanceNo;
            this.instanceNo = iY++;
            let t = this.hls.config,
                n = eP(t.preferManagedMediaSource);
            this.workerContext.worker.postMessage({
                instanceNo: this.instanceNo,
                cmd: "reset",
                resetNo: e,
                typeSupported: n,
                id: this.id,
                config: e$(t),
            });
        }
    }
    terminateWorker() {
        if (this.workerContext) {
            let { worker: e } = this.workerContext;
            (this.workerContext = null),
                e.removeEventListener("message", this.onWorkerMessage),
                e.removeEventListener("error", this.onWorkerError),
                (function (e) {
                    let t = nY[e || nj];
                    if (t && 1 == t.clientCount--) {
                        let { worker: n, objectURL: i } = t;
                        delete nY[e || nj], i && self.URL.revokeObjectURL(i), n.terminate();
                    }
                })(this.hls.config.workerPath);
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
    push(e, t, n, i, r, s, a, o, l, u) {
        var c, d;
        l.transmuxing.start = self.performance.now();
        let { instanceNo: _, transmuxer: h } = this,
            f = s ? s.start : r.start,
            p = r.decryptdata,
            E = this.frag,
            m = !(E && r.cc === E.cc),
            g = !(E && l.level === E.level),
            A = E ? l.sn - E.sn : -1,
            I = this.part ? l.part - this.part.index : -1,
            T = 0 === A && l.id > 1 && l.id === (null == E ? void 0 : E.stats.chunkCount),
            S = !g && (1 === A || (0 === A && (1 === I || (T && I <= 0)))),
            y = self.performance.now();
        (g || A || 0 === r.stats.parsing.start) && (r.stats.parsing.start = y),
            s && (I || !S) && (s.stats.parsing.start = y);
        let N = !(
                E && (null == (c = r.initSegment) ? void 0 : c.url) === (null == (d = E.initSegment) ? void 0 : d.url)
            ),
            v = new ij(m, S, o, g, f, N);
        if (!S || m || N) {
            this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${l.sn}${l.part > -1 ? " part: " + l.part : ""} ${this.id === O ? "level" : "track"}: ${l.level} id: ${l.id}
        discontinuity: ${m}
        trackSwitch: ${g}
        contiguous: ${S}
        accurateTimeOffset: ${o}
        timeOffset: ${f}
        initSegmentChange: ${N}`);
            let e = new iH(n, i, t, a, u);
            this.configureTransmuxer(e);
        }
        if (((this.frag = r), (this.part = s), this.workerContext))
            this.workerContext.worker.postMessage(
                { instanceNo: _, cmd: "demux", data: e, decryptdata: p, chunkMeta: l, state: v },
                e instanceof ArrayBuffer ? [e] : [],
            );
        else if (h) {
            let t = h.push(e, p, l, v);
            iB(t)
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
            iB(t)
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
class iK extends k {
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
        let i = null == t ? void 0 : t.renditionReports;
        if (i) {
            let r = -1;
            for (let n = 0; n < i.length; n++) {
                let s,
                    a = i[n];
                try {
                    s = new self.URL(a.URI, t.url).href;
                } catch (e) {
                    this.warn(`Could not construct new URL for Rendition Report: ${e}`), (s = a.URI || "");
                }
                if (s === e) {
                    r = n;
                    break;
                }
                s === e.substring(0, s.length) && (r = n);
            }
            if (-1 !== r) {
                let e = i[r],
                    s = parseInt(e["LAST-MSN"]) || t.lastPartSn,
                    a = parseInt(e["LAST-PART"]) || t.lastPartIndex;
                if (this.hls.config.lowLatencyMode) {
                    let e = Math.min(t.age - t.partTarget, t.targetduration);
                    a >= 0 && e > t.partTarget && (a += 1);
                }
                return new eY(s, a >= 0 ? a : void 0, n && ej(n));
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
        let { details: i, stats: s } = t,
            a = self.performance.now(),
            c = s.loading.first ? Math.max(0, a - s.loading.first) : 0;
        i.advancedDateTime = Date.now() - c;
        let d = this.hls.config.timelineOffset;
        if (d !== i.appliedTimelineOffset) {
            let e = Math.max(d || 0, 0);
            (i.appliedTimelineOffset = e),
                i.fragments.forEach((t) => {
                    t.setStart(t.playlistOffset + e);
                });
        }
        if (i.live || (null != n && n.live)) {
            let d,
                h,
                f,
                p = "levelInfo" in t ? t.levelInfo : t.track;
            if ((i.reloaded(n), n && i.fragments.length > 0)) {
                !(function (e, t, n) {
                    let i;
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
                        (function (e, t, n) {
                            let i = t.skippedSegments,
                                r = Math.max(e.startSN, t.startSN) - t.startSN,
                                s = +!!e.fragmentHint + (i ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN,
                                a = t.startSN - e.startSN,
                                o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
                                l = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
                            for (let d = r; d <= s; d++) {
                                let r = l[a + d],
                                    s = o[d];
                                if ((i && !s && r && (s = t.fragments[d] = r), r && s)) {
                                    var u, c;
                                    n(r, s, d, o);
                                    let i = r.relurl,
                                        a = s.relurl;
                                    if (i && (u = i) !== (c = a) && c && nm(u) !== nm(c)) {
                                        t.playlistParsingError = nu(`media sequence mismatch ${s.sn}:`, e, t, r, s);
                                        return;
                                    }
                                    if (r.cc !== s.cc) {
                                        t.playlistParsingError = nu(
                                            `discontinuity sequence mismatch (${r.cc}!=${s.cc})`,
                                            e,
                                            t,
                                            r,
                                            s,
                                        );
                                        return;
                                    }
                                }
                            }
                        })(e, t, (e, n, a, o) => {
                            if ((!t.startCC || t.skippedSegments) && n.cc !== e.cc) {
                                let i = e.cc - n.cc;
                                for (let e = a; e < o.length; e++) o[e].cc += i;
                                t.endCC = o[o.length - 1].cc;
                            }
                            r(e.startPTS) &&
                                r(e.endPTS) &&
                                (n.setStart((n.startPTS = e.startPTS)),
                                (n.startDTS = e.startDTS),
                                (n.maxStartPTS = e.maxStartPTS),
                                (n.endPTS = e.endPTS),
                                (n.endDTS = e.endDTS),
                                (n.minEndPTS = e.minEndPTS),
                                n.setDuration(e.endPTS - e.startPTS),
                                n.duration && (i = n),
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
                                    (!e.initSegment ||
                                        e.initSegment.relurl === (null == (t = s) ? void 0 : t.relurl)) &&
                                    (e.initSegment = s);
                            }),
                        t.skippedSegments)
                    ) {
                        if (((t.deltaUpdateFailed = o.some((e) => !e)), t.deltaUpdateFailed)) {
                            n.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                            for (let e = t.skippedSegments; e--; ) o.shift();
                            t.startSN = o[0].sn;
                        } else {
                            t.canSkipDateRanges &&
                                (t.dateRanges = (function (e, t, n) {
                                    let { dateRanges: i, recentlyRemovedDateranges: r } = t,
                                        s = M({}, e);
                                    r &&
                                        r.forEach((e) => {
                                            delete s[e];
                                        });
                                    let a = Object.keys(s).length;
                                    return a
                                        ? (Object.keys(i).forEach((e) => {
                                              let t = s[e],
                                                  r = new tL(i[e].attr, t);
                                              r.isValid
                                                  ? ((s[e] = r), t || (r.tagOrder += a))
                                                  : n.warn(
                                                        `Ignoring invalid Playlist Delta Update DATERANGE tag: "${e$(i[e].attr)}"`,
                                                    );
                                          }),
                                          s)
                                        : i;
                                })(e.dateRanges, t, n));
                            let i = e.fragments.filter((e) => e.rawProgramDateTime);
                            if (e.hasProgramDateTime && !t.hasProgramDateTime)
                                for (let e = 1; e < l.length; e++)
                                    null === l[e].programDateTime && nn(l[e], l[e - 1], i);
                            t7(i, t);
                        }
                        t.endCC = o[o.length - 1].cc;
                    }
                    if (!t.startCC) {
                        var u;
                        let n = nh(e, t.startSN - 1);
                        t.startCC = null != (u = null == n ? void 0 : n.cc) ? u : o[0].cc;
                    }
                    (function (e, t, n) {
                        if (e && t) {
                            let i = 0;
                            for (let r = 0, s = e.length; r <= s; r++) {
                                let s = e[r],
                                    a = t[r + i];
                                s && a && s.index === a.index && s.fragment.sn === a.fragment.sn ? n(s, a) : i--;
                            }
                        }
                    })(e.partList, t.partList, (e, t) => {
                        (t.elementaryStreams = e.elementaryStreams), (t.stats = e.stats);
                    }),
                        i ? nl(t, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS, n) : nc(e, t),
                        o.length && (t.totalduration = t.edge - o[0].start),
                        (t.driftStartTime = e.driftStartTime),
                        (t.driftStart = e.driftStart);
                    let c = t.advancedDateTime;
                    if (t.advanced && c) {
                        let e = t.edge;
                        t.driftStart || ((t.driftStartTime = c), (t.driftStart = e)),
                            (t.driftEndTime = c),
                            (t.driftEnd = e);
                    } else
                        (t.driftEndTime = e.driftEndTime),
                            (t.driftEnd = e.driftEnd),
                            (t.advancedDateTime = e.advancedDateTime);
                    -1 === t.requestScheduled && (t.requestScheduled = e.requestScheduled);
                })(n, i, this);
                let e = i.playlistParsingError;
                if (e) {
                    this.warn(e);
                    let n = this.hls;
                    if (!n.config.ignorePlaylistParsingErrors) {
                        var _;
                        let { networkDetails: r } = t;
                        n.trigger(u.ERROR, {
                            type: o.NETWORK_ERROR,
                            details: l.LEVEL_PARSING_ERROR,
                            fatal: !1,
                            url: i.url,
                            error: e,
                            reason: e.message,
                            level: t.level || void 0,
                            parent: null == (_ = i.fragments[0]) ? void 0 : _.type,
                            networkDetails: r,
                            stats: s,
                        });
                        return;
                    }
                    i.playlistParsingError = null;
                }
            }
            -1 === i.requestScheduled && (i.requestScheduled = s.loading.start);
            let E = this.hls.mainForwardBufferInfo,
                m = E ? E.end - E.len : 0,
                g = (i.edge - m) * 1e3,
                A = n_(i, g);
            if (
                (i.requestScheduled + A < a ? (i.requestScheduled = a) : (i.requestScheduled += A),
                this.log(
                    `live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`,
                ),
                !this.canLoad || !i.live)
            )
                return;
            if (i.canBlockReload && i.endSN && i.advanced) {
                let e = this.hls.config.lowLatencyMode,
                    r = i.lastPartSn,
                    s = i.endSN,
                    o = i.lastPartIndex,
                    l = r === s;
                -1 !== o
                    ? l
                        ? ((h = s + 1), (f = e ? 0 : o))
                        : ((h = r), (f = e ? o + 1 : i.maxPartIndex))
                    : (h = s + 1);
                let u = i.age,
                    c = u + i.ageHeader,
                    _ = Math.min(c - i.partTarget, 1.5 * i.targetduration);
                if (_ > 0) {
                    if (c > 3 * i.targetduration)
                        this.log(`Playlist last advanced ${u.toFixed(2)}s ago. Omitting segment and part directives.`),
                            (h = void 0),
                            (f = void 0);
                    else if (null != n && n.tuneInGoal && c - i.partTarget > n.tuneInGoal)
                        this.warn(
                            `CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${_} with playlist age: ${i.age}`,
                        ),
                            (_ = 0);
                    else {
                        let e = Math.floor(_ / i.targetduration);
                        (h += e),
                            void 0 !== f && (f += Math.round((_ % i.targetduration) / i.partTarget)),
                            this.log(
                                `CDN Tune-in age: ${i.ageHeader}s last advanced ${u.toFixed(2)}s goal: ${_} skip sn ${e} to part ${f}`,
                            );
                    }
                    i.tuneInGoal = _;
                }
                if (((d = this.getDeliveryDirectives(i, t.deliveryDirectives, h, f)), e || !l)) {
                    (i.requestScheduled = a), this.loadingPlaylist(p, d);
                    return;
                }
            } else
                (i.canBlockReload || i.canSkipUntil) && (d = this.getDeliveryDirectives(i, t.deliveryDirectives, h, f));
            d &&
                void 0 !== h &&
                i.canBlockReload &&
                (i.requestScheduled = s.loading.first + Math.max(A - 2 * c, A / 2)),
                this.scheduleLoading(p, d, i);
        } else this.clearTimer();
    }
    scheduleLoading(e, t, n) {
        let i = n || e.details;
        if (!i) return void this.loadingPlaylist(e, t);
        let r = self.performance.now(),
            s = i.requestScheduled;
        if (r >= s) return void this.loadingPlaylist(e, t);
        let a = s - r;
        this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(a)} ms`),
            this.clearTimer(),
            (this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), a));
    }
    getDeliveryDirectives(e, t, n, i) {
        let r = ej(e);
        return null != t && t.skip && e.deltaUpdateFailed && ((n = t.msn), (i = t.part), (r = "")), new eY(n, i, r);
    }
    checkRetry(e) {
        let t = e.details,
            n = e5(e),
            i = e.errorAction,
            { action: r, retryCount: s = 0, retryConfig: a } = i || {},
            o = !!i && !!a && (5 === r || (!i.resolved && 2 === r));
        if (o) {
            var l;
            if (s >= a.maxNumRetry) return !1;
            if (n && null != (l = e.context) && l.deliveryDirectives)
                this.warn(
                    `Retrying playlist loading ${s + 1}/${a.maxNumRetry} after "${t}" without delivery-directives`,
                ),
                    this.loadPlaylist();
            else {
                let e = te(a, s);
                this.clearTimer(),
                    (this.timer = self.setTimeout(() => this.loadPlaylist(), e)),
                    this.warn(`Retrying playlist loading ${s + 1}/${a.maxNumRetry} after "${t}" in ${e}ms`);
            }
            (e.levelRetry = !0), (i.resolved = !0);
        }
        return o;
    }
}
function i$(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!iz(e[n].attrs, t[n].attrs)) return !1;
    return !0;
}
function iz(e, t, n) {
    let i = e["STABLE-RENDITION-ID"];
    return i && !n
        ? i === t["STABLE-RENDITION-ID"]
        : !(n || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some(
              (n) => e[n] !== t[n],
          );
}
function iq(e, t) {
    return (
        t.label.toLowerCase() === e.name.toLowerCase() &&
        (!t.language || t.language.toLowerCase() === (e.lang || "").toLowerCase())
    );
}
class iX {
    constructor(e) {
        (this.tracks = void 0), (this.queues = { video: [], audio: [], audiovideo: [] }), (this.tracks = e);
    }
    destroy() {
        this.tracks = this.queues = null;
    }
    append(e, t, n) {
        if (null === this.queues || null === this.tracks) return;
        let i = this.queues[t];
        i.push(e), 1 !== i.length || n || this.executeNext(t);
    }
    appendBlocker(e) {
        return new Promise((t) => {
            this.append(
                { label: "async-blocker", execute: t, onStart: () => {}, onComplete: () => {}, onError: () => {} },
                e,
            );
        });
    }
    prependBlocker(e) {
        return new Promise((t) => {
            this.queues &&
                this.queues[e].unshift({
                    label: "async-blocker-prepend",
                    execute: t,
                    onStart: () => {},
                    onComplete: () => {},
                    onError: () => {},
                });
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
            let i = t[0];
            try {
                i.execute();
            } catch (r) {
                var n;
                if ((i.onError(r), null === this.queues || null === this.tracks)) return;
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
            i = null == n ? void 0 : n.buffer;
        return i
            ? `SourceBuffer${i.updating ? " updating" : ""}${n.ended ? " ended" : ""}${n.ending ? " ending" : ""}`
            : "none";
    }
    listOps(e) {
        var t;
        return (null == (t = this.queues) ? void 0 : t[e].map((e) => e.label).join(", ")) || "";
    }
}
let iZ = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,
    iQ = "HlsJsTrackRemovedError";
class iJ extends Error {
    constructor(e) {
        super(e), (this.name = iQ);
    }
}
function i0(e) {
    let t = e.querySelectorAll("source");
    [].slice.call(t).forEach((t) => {
        e.removeChild(t);
    });
}
function i1(e) {
    return +("audio" === e);
}
class i2 {
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
        this.timer && r(this.autoLevelCapping) && this.detectPlayerSize();
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
        return (this.clientRect = null), i2.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight);
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
        let i = (e, t) => !t || e.width !== t.width || e.height !== t.height,
            r = e.length - 1,
            s = Math.max(t, n);
        for (let t = 0; t < e.length; t += 1) {
            let n = e[t];
            if ((n.width >= s || n.height >= s) && i(n, e[t + 1])) {
                r = t;
                break;
            }
        }
        return r;
    }
}
class i3 {
    constructor(e, t) {
        Array.isArray(e) && (e = e.map((e) => (e instanceof i3 ? e : new i3(e)))), (this.value = e), (this.params = t);
    }
}
function i6(e, t, n) {
    return Error(
        `failed to serialize "${Array.isArray(e) ? JSON.stringify(e) : e instanceof Map ? "Map{}" : e instanceof Set ? "Set{}" : "object" == typeof e ? JSON.stringify(e) : String(e)}" as ${t}`,
        { cause: n },
    );
}
class i4 {
    constructor(e) {
        this.description = e;
    }
}
let i5 = "Bare Item";
function i7(e) {
    if (e < -0x38d7ea4c67fff || 0x38d7ea4c67fff < e) throw i6(e, "Integer");
    return e.toString();
}
let i8 = /[\x00-\x1f\x7f]+/;
function i9(e) {
    let t = e.description || e.toString().slice(7, -1);
    if (!1 === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t)) throw i6(t, "Token");
    return t;
}
function re(e) {
    switch (typeof e) {
        case "number":
            if (!r(e)) throw i6(e, i5);
            if (Number.isInteger(e)) return i7(e);
            let t = (function e(t, n) {
                if (t < 0) return -e(-t, n);
                let i = Math.pow(10, n);
                if (!(Math.abs(((t * i) % 1) - 0.5) < Number.EPSILON)) return Math.round(t * i) / i;
                {
                    let e = Math.floor(t * i);
                    return (e % 2 == 0 ? e : e + 1) / i;
                }
            })(e, 3);
            if (Math.floor(Math.abs(t)).toString().length > 12) throw i6(e, "Decimal");
            let n = t.toString();
            return n.includes(".") ? n : `${n}.0`;
        case "string":
            if (i8.test(e)) throw i6(e, "String");
            return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
        case "symbol":
            return i9(e);
        case "boolean":
            if ("boolean" != typeof e) throw i6(e, "Boolean");
            return e ? "?1" : "?0";
        case "object":
            if (e instanceof Date) return `@${i7(e.getTime() / 1e3)}`;
            if (e instanceof Uint8Array) {
                if (!1 === ArrayBuffer.isView(e)) throw i6(e, "Byte Sequence");
                return `:${btoa(String.fromCharCode(...e))}:`;
            }
            if (e instanceof i4) return i9(e);
        default:
            throw i6(e, i5);
    }
}
function rt(e) {
    if (!1 === /^[a-z*][a-z0-9\-_.*]*$/.test(e)) throw i6(e, "Key");
    return e;
}
function rn(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map(([e, t]) => (!0 === t ? `;${rt(e)}` : `;${rt(e)}=${re(t)}`))
              .join("");
}
function ri(e) {
    return e instanceof i3 ? `${re(e.value)}${rn(e.params)}` : re(e);
}
function rr(e, t) {
    return (function (e, t = { whitespace: !0 }) {
        if ("object" != typeof e || null == e) throw i6(e, "Dict");
        let n = e instanceof Map ? e.entries() : Object.entries(e),
            i = (null == t ? void 0 : t.whitespace) ? " " : "";
        return Array.from(n)
            .map(([e, t]) => {
                t instanceof i3 == !1 && (t = new i3(t));
                let n = rt(e);
                if (!0 === t.value) n += rn(t.params);
                else if (((n += "="), Array.isArray(t.value))) {
                    var i;
                    n += ((i = t), `(${i.value.map(ri).join(" ")})${rn(i.params)}`);
                } else n += ri(t);
                return n;
            })
            .join(`,${i}`);
    })(e, t);
}
let rs = "CMCD-Object",
    ra = "CMCD-Request",
    ro = "CMCD-Session",
    rl = "CMCD-Status",
    ru = {
        br: rs,
        ab: rs,
        d: rs,
        ot: rs,
        tb: rs,
        tpb: rs,
        lb: rs,
        tab: rs,
        lab: rs,
        url: rs,
        pb: ra,
        bl: ra,
        tbl: ra,
        dl: ra,
        ltc: ra,
        mtp: ra,
        nor: ra,
        nrr: ra,
        rc: ra,
        sn: ra,
        sta: ra,
        su: ra,
        ttfb: ra,
        ttfbb: ra,
        ttlb: ra,
        cmsdd: ra,
        cmsds: ra,
        smrt: ra,
        df: ra,
        cs: ra,
        ts: ra,
        cid: ro,
        pr: ro,
        sf: ro,
        sid: ro,
        st: ro,
        v: ro,
        msd: ro,
        bs: rl,
        bsd: rl,
        cdn: rl,
        rtp: rl,
        bg: rl,
        pt: rl,
        ec: rl,
        e: rl,
    },
    rc = "event",
    rd = (e) => Math.round(e),
    r_ = (e, t) =>
        Array.isArray(e)
            ? e.map((e) => r_(e, t))
            : e instanceof i3 && "string" == typeof e.value
              ? new i3(r_(e.value, t), e.params)
              : (t.baseUrl &&
                    (e = (function (e, t) {
                        let n = new URL(e),
                            i = new URL(t);
                        if (n.origin !== i.origin) return e;
                        let r = n.pathname.split("/").slice(1),
                            s = i.pathname.split("/").slice(1, -1);
                        for (; r[0] === s[0]; ) r.shift(), s.shift();
                        for (; s.length; ) s.shift(), r.unshift("..");
                        return r.join("/") + n.search + n.hash;
                    })(e, t.baseUrl)),
                1 === t.version ? encodeURIComponent(e) : e),
    rh = (e) => 100 * rd(e / 100),
    rf = {
        br: rd,
        d: rd,
        bl: rh,
        dl: rh,
        mtp: rh,
        nor: (e, t) => {
            let n = e;
            return (
                t.version >= 2 &&
                    (e instanceof i3 && "string" == typeof e.value
                        ? (n = new i3([e]))
                        : "string" == typeof e && (n = [e])),
                r_(n, t)
            );
        },
        rtp: rh,
        tb: rd,
    },
    rp = "request",
    rE = "response",
    rm = [
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
    rg = ["e"],
    rA = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function rI(e) {
    return rA.test(e);
}
let rT = ["d", "dl", "nor", "ot", "rtp", "su"],
    rS = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"],
    ry = [
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
function rN(e) {
    return ry.includes(e) || rI(e);
}
let rv = {
    [rE]: function (e) {
        return rm.includes(e) || rT.includes(e) || rS.includes(e) || rI(e);
    },
    [rc]: function (e) {
        return rm.includes(e) || rg.includes(e) || rI(e);
    },
    [rp]: function (e) {
        return rm.includes(e) || rT.includes(e) || rI(e);
    },
};
function rC(e, t = {}) {
    let n = {};
    if (null == e || "object" != typeof e) return n;
    let i = t.version || e.v || 1,
        s = t.reportingMode || rp,
        a = 1 === i ? rN : rv[s],
        o = Object.keys(e).filter(a),
        l = t.filter;
    "function" == typeof l && (o = o.filter(l));
    let u = s === rE || s === rc;
    u && !o.includes("ts") && o.push("ts"), i > 1 && !o.includes("v") && o.push("v");
    let c = M({}, rf, t.formatters),
        d = { version: i, reportingMode: s, baseUrl: t.baseUrl };
    return (
        o.sort().forEach((t) => {
            var s;
            let a = e[t],
                o = c[t];
            if (("function" == typeof o && (a = o(a, d)), "v" === t))
                if (1 === i) return;
                else a = i;
            ("pr" != t || 1 !== a) &&
                (u && "ts" === t && !r(a) && (a = Date.now()),
                ("number" == typeof (s = a) ? r(s) : null != s && "" !== s && !1 !== s) &&
                    (["ot", "sf", "st", "e", "sta"].includes(t) && "string" == typeof a && (a = new i4(a)),
                    (n[t] = a)));
        }),
        n
    );
}
let rR = /CMCD=[^&#]+/;
function rO(e, t, n, i) {
    e &&
        Object.keys(t).forEach((r) => {
            let s = e
                .filter((e) => e.groupId === r)
                .map((e) => {
                    let s = M({}, e);
                    return (
                        (s.details = void 0),
                        (s.attrs = new tD(s.attrs)),
                        (s.url = s.attrs.URI = rb(e.url, e.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", n)),
                        (s.groupId = s.attrs["GROUP-ID"] = t[r]),
                        (s.attrs["PATHWAY-ID"] = i),
                        s
                    );
                });
            e.push(...s);
        });
}
function rb(e, t, n, i) {
    let r,
        { HOST: s, PARAMS: a, [n]: o } = i;
    t && (r = null == o ? void 0 : o[t]) && (e = r);
    let l = new self.URL(e);
    return (
        s && !r && (l.host = s),
        a &&
            Object.keys(a)
                .sort()
                .forEach((e) => {
                    e && l.searchParams.set(e, a[e]);
                }),
        l.href
    );
}
class rD extends k {
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
            (this.setMediaKeysQueue = rD.CDMCleanupPromise ? [rD.CDMCleanupPromise] : []),
            (this.bannedKeyIds = {}),
            (this.onMediaEncrypted = (e) => {
                let { initDataType: t, initData: n } = e,
                    i = `"${e.type}" event: init data type: "${t}"`;
                if ((this.debug(i), null !== n)) {
                    if (!this.keyFormatPromise) {
                        let e = Object.keys(this.keySystemAccessPromises);
                        e.length || (e = tZ(this.config));
                        let t = e.map(tX).filter((e) => !!e);
                        this.keyFormatPromise = this.getKeyFormatPromise(t);
                    }
                    this.keyFormatPromise
                        .then((r) => {
                            let s,
                                a = tq(r);
                            if ("sinf" !== t || a !== tH)
                                return void this.log(
                                    `Ignoring "${e.type}" event with init data type: "${t}" for selected key-system ${a}`,
                                );
                            try {
                                let e = es(new Uint8Array(n)),
                                    t = tU(JSON.parse(e).sinf),
                                    i = eE(t);
                                if (!i) throw Error("'schm' box missing or not cbcs/cenc with schi > tenc");
                                s = new Uint8Array(i.subarray(8, 24));
                            } catch (e) {
                                this.warn(`${i} Failed to parse sinf: ${e}`);
                                return;
                            }
                            let o = W(s),
                                { keyIdToKeySessionPromise: l, mediaKeySessions: u } = this,
                                c = l[o];
                            for (let e = 0; e < u.length; e++) {
                                let i = u[e],
                                    r = i.decryptdata;
                                if (!r.keyId) continue;
                                let a = W(r.keyId);
                                if (tM(s, r.keyId) || -1 !== r.uri.replace(/-/g, "").indexOf(o)) {
                                    if (!(c = l[a])) continue;
                                    if (r.pssh) break;
                                    delete l[a],
                                        (r.pssh = new Uint8Array(n)),
                                        (r.keyId = s),
                                        (c = l[o] =
                                            c.then(() =>
                                                this.generateRequestWithPreferredKeySession(
                                                    i,
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
            i = null == t ? void 0 : t[e];
        return i ? i.licenseUrl : e === tY && n ? n : void 0;
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
            i = t.map((e) => e.audioCodec).filter(n),
            r = t.map((e) => e.videoCodec).filter(n);
        return (
            i.length + r.length === 0 && r.push("avc1.42e01e"),
            new Promise((t, n) => {
                let s = (e) => {
                    let a = e.shift();
                    this.getMediaKeysPromise(a, i, r)
                        .then((e) => t({ keySystem: a, mediaKeys: e }))
                        .catch((t) => {
                            e.length
                                ? s(e)
                                : t instanceof rw
                                  ? n(t)
                                  : n(
                                        new rw(
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
                null === tQ &&
                    "http:" === self.location.protocol &&
                    (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),
                Promise.reject(Error(e))
            );
        }
        return n(e, t);
    }
    getMediaKeysPromise(e, t, n) {
        var i;
        let r = (function (e, t, n, i) {
                var r, s, a, o;
                let l;
                switch (e) {
                    case tH:
                        l = ["cenc", "sinf"];
                        break;
                    case tY:
                    case tj:
                        l = ["cenc"];
                        break;
                    case tB:
                        l = ["cenc", "keyids"];
                        break;
                    default:
                        throw Error(`Unknown key-system: ${e}`);
                }
                return (
                    (r = l),
                    (s = t),
                    (a = n),
                    [
                        {
                            initDataTypes: r,
                            persistentState: (o = i).persistentState || "optional",
                            distinctiveIdentifier: o.distinctiveIdentifier || "optional",
                            sessionTypes: o.sessionTypes || [o.sessionType || "temporary"],
                            audioCapabilities: s.map((e) => ({
                                contentType: `audio/mp4; codecs=${e}`,
                                robustness: o.audioRobustness || "",
                                encryptionScheme: o.audioEncryptionScheme || null,
                            })),
                            videoCapabilities: a.map((e) => ({
                                contentType: `video/mp4; codecs=${e}`,
                                robustness: o.videoRobustness || "",
                                encryptionScheme: o.videoEncryptionScheme || null,
                            })),
                        },
                    ]
                );
            })(e, t, n, this.config.drmSystemOptions || {}),
            s = this.keySystemAccessPromises[e],
            a = null == (i = s) ? void 0 : i.keySystemAccess;
        if (!a) {
            this.log(`Requesting encrypted media "${e}" key-system access with config: ${e$(r)}`),
                (a = this.requestMediaKeySystemAccess(e, r));
            let t = (s = this.keySystemAccessPromises[e] = { keySystemAccess: a });
            return (
                a.catch((t) => {
                    this.log(`Failed to obtain access to key-system "${e}": ${t}`);
                }),
                a.then((n) => {
                    this.log(`Access for key-system "${n.keySystem}" obtained`);
                    let i = this.fetchServerCertificate(e);
                    this.log(`Create media-keys for "${e}"`);
                    let r = (t.mediaKeys = n
                        .createMediaKeys()
                        .then(
                            (n) => (
                                this.log(`Media-keys created for "${e}"`),
                                (t.hasMediaKeys = !0),
                                i.then((t) => (t ? this.setMediaKeysServerCertificate(n, e, t) : n))
                            ),
                        ));
                    return (
                        r.catch((t) => {
                            this.error(`Failed to create media-keys for "${e}"}: ${t}`);
                        }),
                        r
                    );
                })
            );
        }
        return a.then(() => s.mediaKeys);
    }
    createMediaKeySessionContext({ decryptdata: e, keySystem: t, mediaKeys: n }) {
        this.log(`Creating key-system session "${t}" keyId: ${W(e.keyId || [])} keyUri: ${e.uri}`);
        let i = n.createSession(),
            r = { decryptdata: e, keySystem: t, mediaKeys: n, mediaKeysSession: i, keyStatus: "status-pending" };
        return this.mediaKeySessions.push(r), r;
    }
    renewKeySession(e) {
        let t = e.decryptdata;
        if (t.pssh) {
            let n = this.createMediaKeySessionContext(e),
                i = rL(t);
            this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(
                n,
                "cenc",
                t.pssh.buffer,
                "expired",
            );
        } else this.warn("Could not renew expired session. Missing pssh initData.");
        this.removeSession(e);
    }
    updateKeySession(e, t) {
        let n = e.mediaKeysSession;
        return (
            this.log(`Updating key-session "${n.sessionId}" for keyId ${W(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`),
            n.update(t)
        );
    }
    getSelectedKeySystemFormats() {
        return Object.keys(this.keySystemAccessPromises)
            .map((e) => ({ keySystem: e, hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys }))
            .filter(({ hasMediaKeys: e }) => !!e)
            .map(({ keySystem: e }) => tX(e))
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
                    let i = tX(e);
                    i ? t(i) : n(Error(`Unable to find format for key-system "${e}"`));
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
        let t = tZ(this.config),
            n = e.map(tq).filter((e) => !!e && -1 !== t.indexOf(e));
        return this.selectKeySystem(n);
    }
    getKeyStatus(e) {
        let { mediaKeySessions: t } = this;
        for (let r = 0; r < t.length; r++) {
            var n, i;
            let s =
                ((n = e),
                (i = t[r]),
                n.keyId && i.mediaKeysSession.keyStatuses.has(n.keyId)
                    ? i.mediaKeysSession.keyStatuses.get(n.keyId)
                    : n.matches(i.decryptdata)
                      ? i.keyStatus
                      : void 0);
            if (s) return s;
        }
    }
    loadKey(e) {
        let t = e.keyInfo.decryptdata,
            n = rL(t),
            i = this.bannedKeyIds[n];
        if (i || "internal-error" === this.getKeyStatus(t)) {
            let n = rM(i || "internal-error", t);
            return this.handleError(n, e.frag), Promise.reject(n);
        }
        let r = `(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
        this.log(`Starting session for key ${r}`);
        let s = this.keyIdToKeySessionPromise[n];
        if (!s) {
            let i = this.getKeySystemForKeyPromise(t)
                .then(
                    ({ keySystem: n, mediaKeys: i }) => (
                        this.throwIfDestroyed(),
                        this.log(
                            `Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`,
                        ),
                        this.attemptSetMediaKeys(n, i).then(
                            () => (
                                this.throwIfDestroyed(),
                                this.createMediaKeySessionContext({ keySystem: n, mediaKeys: i, decryptdata: t })
                            ),
                        )
                    ),
                )
                .then((e) => {
                    let n = t.pssh ? t.pssh.buffer : null;
                    return this.generateRequestWithPreferredKeySession(e, "cenc", n, "playlist-key");
                });
            return i.catch((t) => this.handleError(t, e.frag)), (this.keyIdToKeySessionPromise[n] = i), i;
        }
        return (
            s.catch((n) => {
                if (n instanceof rw) {
                    let i = x({}, n.data);
                    "internal-error" === this.getKeyStatus(t) && (i.decryptdata = t);
                    let r = new rw(i, n.message);
                    this.handleError(r, e.frag);
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
            if (e instanceof rw) {
                t && (e.data.frag = t);
                let n = e.data.decryptdata;
                this.error(`${e.message}${n ? ` (${W(n.keyId || [])})` : ""}`), this.hls.trigger(u.ERROR, e.data);
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
        let t = rL(e),
            n = this.keyIdToKeySessionPromise[t];
        if (!n) {
            let t = tq(e.keyFormat),
                n = t ? [t] : tZ(this.config);
            return this.attemptKeySystemAccess(n);
        }
        return n;
    }
    getKeySystemSelectionPromise(e) {
        if ((e.length || (e = tZ(this.config)), 0 === e.length))
            throw new rw(
                { type: o.KEY_SYSTEM_ERROR, details: l.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: !0 },
                `Missing key-system license configuration options ${e$({ drmSystems: this.config.drmSystems })}`,
            );
        return this.attemptKeySystemAccess(e);
    }
    attemptSetMediaKeys(e, t) {
        if (this.mediaKeys === t) return Promise.resolve();
        let n = this.setMediaKeysQueue.slice();
        this.log(`Setting media-keys for "${e}"`);
        let i = Promise.all(n).then(() => {
            if (!this.media)
                throw ((this.mediaKeys = null), Error("Attempted to set mediaKeys without media element attached"));
            return this.media.setMediaKeys(t);
        });
        return (
            (this.mediaKeys = t),
            this.setMediaKeysQueue.push(i),
            i.then(() => {
                this.log(`Media-keys set for "${e}"`),
                    n.push(i),
                    (this.setMediaKeysQueue = this.setMediaKeysQueue.filter((e) => -1 === n.indexOf(e)));
            })
        );
    }
    generateRequestWithPreferredKeySession(e, t, n, i) {
        var r;
        let s = null == (r = this.config.drmSystems) || null == (r = r[e.keySystem]) ? void 0 : r.generateRequest;
        if (s)
            try {
                let i = s.call(this.hls, t, n, e);
                if (!i) throw Error("Invalid response from configured generateRequest filter");
                (t = i.initDataType),
                    (n = i.initData ? i.initData : null),
                    (e.decryptdata.pssh = n ? new Uint8Array(n) : null);
            } catch (e) {
                if ((this.warn(e.message), this.hls && this.hls.config.debug)) throw e;
            }
        if (null === n) return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
        let a = rL(e.decryptdata),
            u = e.decryptdata.uri;
        this.log(
            `Generating key-session request for "${i}" keyId: ${a} URI: ${u} (init data type: ${t} length: ${n.byteLength})`,
        );
        let c = new nH(),
            d = (e._onmessage = (t) => {
                let n = e.mediaKeysSession;
                if (!n) return void c.emit("error", Error("invalid state"));
                let { messageType: i, message: r } = t;
                this.log(`"${i}" message event for session "${n.sessionId}" message size: ${r.byteLength}`),
                    "license-request" === i || "license-renewal" === i
                        ? this.renewLicense(e, r).catch((e) => {
                              c.eventNames().length ? c.emit("error", e) : this.handleError(e);
                          })
                        : "license-release" === i
                          ? e.keySystem === tH &&
                            this.updateKeySession(e, tG("acknowledged"))
                                .then(() => this.removeSession(e))
                                .catch((e) => this.handleError(e))
                          : this.warn(`unhandled media key message type "${i}"`);
            }),
            _ = (e, t) => {
                let n;
                (t.keyStatus = e),
                    e.startsWith("usable")
                        ? c.emit("resolved")
                        : "internal-error" === e || "output-restricted" === e || "output-downscaled" === e
                          ? (n = rM(e, t.decryptdata))
                          : "expired" === e
                            ? (n = Error(`key expired (keyId: ${a})`))
                            : "released" === e
                              ? (n = Error("key released"))
                              : "status-pending" === e || this.warn(`unhandled key status change "${e}" (keyId: ${a})`),
                    n && (c.eventNames().length ? c.emit("error", n) : this.handleError(n));
            },
            h = (e._onkeystatuseschange = (t) => {
                if (!e.mediaKeysSession) return void c.emit("error", Error("invalid state"));
                let n = this.getKeyStatuses(e);
                if (!Object.keys(n).some((e) => "status-pending" !== n[e])) return;
                if ("expired" === n[a]) {
                    this.log(`Expired key ${e$(n)} in key-session "${e.mediaKeysSession.sessionId}"`),
                        this.renewKeySession(e);
                    return;
                }
                let i = n[a];
                if (i) _(i, e);
                else {
                    var r;
                    e.keyStatusTimeouts || (e.keyStatusTimeouts = {}),
                        (r = e.keyStatusTimeouts)[a] ||
                            (r[a] = self.setTimeout(() => {
                                if (!e.mediaKeysSession || !this.mediaKeys) return;
                                let t = this.getKeyStatus(e.decryptdata);
                                if (t && "status-pending" !== t)
                                    return (
                                        this.log(
                                            `No status for keyId ${a} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${t} from other session.`,
                                        ),
                                        _(t, e)
                                    );
                                this.log(
                                    `key status for ${a} in key-session "${e.mediaKeysSession.sessionId}" timed out after 0ms`,
                                ),
                                    _((i = "internal-error"), e);
                            }, 0)),
                        this.log(`No status for keyId ${a} (${e$(n)}).`);
                }
            });
        ny(e.mediaKeysSession, "message", d), ny(e.mediaKeysSession, "keystatuseschange", h);
        let f = new Promise((e, t) => {
            c.on("error", t), c.on("resolved", e);
        });
        return e.mediaKeysSession
            .generateRequest(t, n)
            .then(() => {
                this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${a} URI: ${u}`);
            })
            .catch((t) => {
                throw new rw(
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
            .then(() => f)
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
            e.mediaKeysSession.keyStatuses.forEach((n, i) => {
                if ("string" == typeof i && "object" == typeof n) {
                    let e = i;
                    (i = n), (n = e);
                }
                let r = "buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i);
                e.keySystem === tj && 16 === r.length && tF(r);
                let s = W(r);
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
            i = this.getServerCertificateUrl(e);
        return i
            ? (this.log(`Fetching server certificate for "${e}"`),
              new Promise((r, s) => {
                  let a = { responseType: "arraybuffer", url: i },
                      u = t.certLoadPolicy.default,
                      c = { loadPolicy: u, timeout: u.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
                  n.load(a, c, {
                      onSuccess: (e, t, n, i) => {
                          r(e.data);
                      },
                      onError: (t, n, r, u) => {
                          s(
                              new rw(
                                  {
                                      type: o.KEY_SYSTEM_ERROR,
                                      details: l.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                      fatal: !0,
                                      networkDetails: r,
                                      response: x({ url: a.url, data: void 0 }, t),
                                  },
                                  `"${e}" certificate request failed (${i}). Status: ${t.code} (${t.text})`,
                              ),
                          );
                      },
                      onTimeout: (t, n, r) => {
                          s(
                              new rw(
                                  {
                                      type: o.KEY_SYSTEM_ERROR,
                                      details: l.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                      fatal: !0,
                                      networkDetails: r,
                                      response: { url: a.url, data: void 0 },
                                  },
                                  `"${e}" certificate request timed out (${i})`,
                              ),
                          );
                      },
                      onAbort: (e, t, n) => {
                          s(Error("aborted"));
                      },
                  });
              }))
            : Promise.resolve();
    }
    setMediaKeysServerCertificate(e, t, n) {
        return new Promise((i, r) => {
            e.setServerCertificate(n)
                .then((r) => {
                    this.log(
                        `setServerCertificate ${r ? "success" : "not supported by CDM"} (${n.byteLength}) on "${t}"`,
                    ),
                        i(e);
                })
                .catch((e) => {
                    r(
                        new rw(
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
                throw new rw(
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
        let i = new DOMParser().parseFromString(n, "application/xml"),
            r = i.querySelectorAll("HttpHeader");
        if (r.length > 0) {
            let t;
            for (let n = 0, i = r.length; n < i; n++) {
                var s, a;
                let i = null == (s = (t = r[n]).querySelector("name")) ? void 0 : s.textContent,
                    o = null == (a = t.querySelector("value")) ? void 0 : a.textContent;
                i && o && e.setRequestHeader(i, o);
            }
        }
        let o = i.querySelector("Challenge"),
            l = null == o ? void 0 : o.textContent;
        if (!l) throw Error("Cannot find <Challenge> in key message");
        return tG(atob(l));
    }
    setupLicenseXHR(e, t, n, i) {
        let r = this.config.licenseXhrSetup;
        return r
            ? Promise.resolve()
                  .then(() => {
                      if (!n.decryptdata) throw Error("Key removed");
                      return r.call(this.hls, e, t, n, i);
                  })
                  .catch((s) => {
                      if (!n.decryptdata) throw s;
                      return e.open("POST", t, !0), r.call(this.hls, e, t, n, i);
                  })
                  .then((n) => (e.readyState || e.open("POST", t, !0), { xhr: e, licenseChallenge: n || i }))
            : (e.open("POST", t, !0), Promise.resolve({ xhr: e, licenseChallenge: i }));
    }
    requestLicense(e, t) {
        let n = this.config.keyLoadPolicy.default;
        return new Promise((i, r) => {
            let s = this.getLicenseServerUrlOrThrow(e.keySystem);
            this.log(`Sending license request to URL: ${s}`);
            let a = new XMLHttpRequest();
            (a.responseType = "arraybuffer"),
                (a.onreadystatechange = () => {
                    if (!this.hls || !e.mediaKeysSession) return r(Error("invalid state"));
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
                            i(t);
                        } else {
                            let u = n.errorRetry,
                                c = u ? u.maxNumRetry : 0;
                            if (
                                (this._requestLicenseFailureCount++,
                                this._requestLicenseFailureCount > c || (a.status >= 400 && a.status < 500))
                            )
                                r(
                                    new rw(
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
                                    this.requestLicense(e, t).then(i, r);
                            }
                        }
                }),
                e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(),
                (e.licenseXhr = a),
                this.setupLicenseXHR(a, s, e, t)
                    .then(({ xhr: t, licenseChallenge: n }) => {
                        e.keySystem == tj && (n = this.unpackPlayReadyKeyMessage(t, n)), t.send(n);
                    })
                    .catch(r);
        });
    }
    onDestroying() {
        this.unregisterListeners(), this._clear();
    }
    onMediaAttached(e, t) {
        if (!this.config.emeEnabled) return;
        let n = t.media;
        (this.media = n), ny(n, "encrypted", this.onMediaEncrypted), ny(n, "waitingforkey", this.onWaitingForKey);
    }
    onMediaDetached() {
        let e = this.media;
        e &&
            (nN(e, "encrypted", this.onMediaEncrypted),
            nN(e, "waitingforkey", this.onWaitingForKey),
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
        (this.mediaKeySessions = []), (this.mediaKeys = null), t0.clearKeyUriToKeyIdMap();
        let i = n.length;
        rD.CDMCleanupPromise = Promise.all(
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
                i && this.log("finished closing key sessions and clearing media keys");
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
        let { mediaKeysSession: t, licenseXhr: n, decryptdata: i } = e;
        if (t) {
            var r;
            this.log(
                `Remove licenses and keys and close session "${t.sessionId}" keyId: ${W((null == i ? void 0 : i.keyId) || [])}`,
            ),
                e._onmessage && (t.removeEventListener("message", e._onmessage), (e._onmessage = void 0)),
                e._onkeystatuseschange &&
                    (t.removeEventListener("keystatuseschange", e._onkeystatuseschange),
                    (e._onkeystatuseschange = void 0)),
                n && n.readyState !== XMLHttpRequest.DONE && n.abort(),
                (e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0);
            let s = this.mediaKeySessions.indexOf(e);
            s > -1 && this.mediaKeySessions.splice(s, 1);
            let { keyStatusTimeouts: a } = e;
            a && Object.keys(a).forEach((e) => self.clearTimeout(a[e]));
            let { drmSystemOptions: c } = this.config;
            return (
                c &&
                ("persistent-license" === c.sessionType ||
                    (null != (r = c.sessionTypes) && r.some((e) => "persistent-license" === e)))
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
function rL(e) {
    if (!e) throw Error("Could not read keyId of undefined decryptdata");
    if (null === e.keyId) throw Error("keyId is null");
    return W(e.keyId);
}
rD.CDMCleanupPromise = void 0;
class rw extends Error {
    constructor(e, t) {
        super(t), (this.data = void 0), e.error || (e.error = Error(t)), (this.data = e), (e.err = e.error);
    }
}
function rM(e, t) {
    let n = "output-restricted" === e,
        i = n ? l.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : l.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
    return new rw(
        { type: o.KEY_SYSTEM_ERROR, details: i, fatal: !1, decryptdata: t },
        n ? "HDCP level output restricted" : `key status changed to "${e}"`,
    );
}
function rP(e, t) {
    let n;
    try {
        n = new Event("addtrack");
    } catch (e) {
        (n = document.createEvent("Event")).initEvent("addtrack", !1, !1);
    }
    (n.track = e), t.dispatchEvent(n);
}
function rx(e, t) {
    let n = e.mode;
    if (("disabled" === n && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)))
        try {
            if ((e.addCue(t), !e.cues.getCueById(t.id))) throw Error(`addCue is failed for: ${t}`);
        } catch (n) {
            B.debug(`[texttrack-utils]: ${n}`);
            try {
                let n = new self.TextTrackCue(t.startTime, t.endTime, t.text);
                (n.id = t.id), e.addCue(n);
            } catch (e) {
                B.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e}`);
            }
        }
    "disabled" === n && (e.mode = n);
}
function rk(e, t) {
    let n = e.mode;
    if (("disabled" === n && (e.mode = "hidden"), e.cues))
        for (let n = e.cues.length; n--; ) t && e.cues[n].removeEventListener("enter", t), e.removeCue(e.cues[n]);
    "disabled" === n && (e.mode = n);
}
function rU(e, t, n, i) {
    let r = e.mode;
    if (("disabled" === r && (e.mode = "hidden"), e.cues && e.cues.length > 0)) {
        let r = (function (e, t, n) {
            let i = [],
                r = (function (e, t) {
                    let n;
                    if (t <= e[0].startTime) return 0;
                    let i = e.length - 1;
                    if (t > e[i].endTime) return -1;
                    let r = 0,
                        s = i;
                    for (; r <= s; )
                        if (t < e[(n = Math.floor((s + r) / 2))].startTime) s = n - 1;
                        else {
                            if (!(t > e[n].startTime) || !(r < i)) return n;
                            r = n + 1;
                        }
                    return e[r].startTime - t < t - e[s].startTime ? r : s;
                })(e, t);
            if (r > -1)
                for (let s = r, a = e.length; s < a; s++) {
                    let r = e[s];
                    if (r.startTime >= t && r.endTime <= n) i.push(r);
                    else if (r.startTime > n) break;
                }
            return i;
        })(e.cues, t, n);
        for (let t = 0; t < r.length; t++) (!i || i(r[t])) && e.removeCue(r[t]);
    }
    "disabled" === r && (e.mode = r);
}
function rG(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        ("subtitles" === i.kind || "captions" === i.kind) && i.label && t.push(e[n]);
    }
    return t;
}
function rF(e) {
    let t = 5381,
        n = e.length;
    for (; n; ) t = (33 * t) ^ e.charCodeAt(--n);
    return (t >>> 0).toString();
}
let rV = (((g = {})[(g.Point = 0)] = "Point"), (g[(g.Range = 1)] = "Range"), g);
class rB {
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
            if (t) return rH(e, t);
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
                n = rH(t, e);
            return t - n < 0.1;
        }
        return !1;
    }
    get resumptionOffset() {
        let e = this.resumeOffset,
            t = r(e) ? e : this.duration;
        return this.cumulativeDuration + t;
    }
    get resumeTime() {
        let e = this.startOffset + this.resumptionOffset;
        if (this.snapOptions.in) {
            let t = this.resumeAnchor;
            if (t) return rH(e, t);
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
                        (this.resumeOffset && this.duration && 0.025 > Math.abs(this.resumeOffset - this.duration)))
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
        return "RANGE" === this.dateRange.attr["X-TIMELINE-OCCUPIES"] ? rV.Range : rV.Point;
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
        var e;
        return (
            (e = this),
            `["${e.identifier}" ${e.cue.pre ? "<pre>" : e.cue.post ? "<post>" : ""}${e.timelineStart.toFixed(2)}-${e.resumeTime.toFixed(2)}]`
        );
    }
}
function rH(e, t) {
    return e - t.start < t.duration / 2 && !(0.025 > Math.abs(e - (t.start + t.duration)))
        ? t.start
        : t.start + t.duration;
}
function rj(e, t, n) {
    let i = new self.URL(e, n);
    return "data:" !== i.protocol && i.searchParams.set("_HLS_primary_id", t), i;
}
function rY(e, t) {
    for (; null != (n = e.assetList[++t]) && n.error; ) var n;
    return t;
}
function rW(e) {
    let t = e.timelineStart,
        n = e.duration || 0;
    return `["${e.identifier}" ${t.toFixed(2)}-${(t + n).toFixed(2)}]`;
}
class rK {
    constructor(e, t, n, i) {
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
        const r = (this.hls = new e(t));
        (this.interstitial = n), (this.assetItem = i);
        const s = () => {
            this.hasDetails = !0;
        };
        r.once(u.LEVEL_LOADED, s),
            r.once(u.AUDIO_TRACK_LOADED, s),
            r.once(u.SUBTITLE_TRACK_LOADED, s),
            r.on(u.MEDIA_ATTACHING, (e, { media: t }) => {
                this.removeMediaListeners(),
                    (this.mediaAttached = t),
                    this.interstitial.playoutLimit &&
                        (t.addEventListener("timeupdate", this.checkPlayout),
                        this.appendInPlace &&
                            r.on(u.BUFFER_APPENDED, () => {
                                let e = this.bufferedEnd;
                                this.reachedPlayout(e) &&
                                    ((this._bufferedEosTime = e), r.trigger(u.BUFFERED_TO_END, void 0));
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
                    t = rj(t, e.config.primarySessionId || "").href;
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
            i = this.timelineOffset,
            r = tN.bufferInfo(e, i, 0);
        return this.getAssetTime(r.end) >= n - 0.02;
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
        let t = tN.bufferInfo(e, e.currentTime, 0.001);
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
        var i;
        null == (i = this.hls) || i.on(e, t);
    }
    once(e, t, n) {
        var i;
        null == (i = this.hls) || i.once(e, t);
    }
    off(e, t, n) {
        var i;
        null == (i = this.hls) || i.off(e, t);
    }
    toString() {
        var e;
        return `HlsAssetPlayer: ${rW(this.assetItem)} ${null == ((e = this.hls)) ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
    }
}
class r$ extends k {
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
            ? this.events.reduce((n, i) => (e <= i.startOffset && t > i.startOffset ? (delete i.error, n + 1) : n), 0)
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
        let i = this.items;
        if (i)
            for (
                i[n] || (void 0 === t && (t = e.start), (n = this.findItemIndexAtTime(t)));
                n >= 0 && null != (r = i[n]) && r.event;
            ) {
                var r;
                n--;
            }
        return n;
    }
    findItemIndexAtTime(e, t) {
        let n = this.items;
        if (n)
            for (let i = 0; i < n.length; i++) {
                let r = n[i];
                if ((t && "primary" !== t && (r = r[t]), e === r.start || (e > r.start && e < r.end))) return i;
            }
        return -1;
    }
    findJumpRestrictedIndex(e, t) {
        let n = this.items;
        if (n)
            for (let i = e; i <= t && n[i]; i++) {
                let e = n[i].event;
                if (null != e && e.restrictions.jump && !e.appendInPlace) return i;
            }
        return -1;
    }
    findEventIndex(e) {
        let t = this.items;
        if (t)
            for (let i = t.length; i--; ) {
                var n;
                if ((null == (n = t[i].event) ? void 0 : n.identifier) === e) return i;
            }
        return -1;
    }
    findAssetIndex(e, t) {
        let n = e.assetList,
            i = n.length;
        if (i > 1)
            for (let e = 0; e < i; e++) {
                let r = n[e];
                if (!r.error) {
                    let n = r.timelineStart;
                    if (t === n || (t > n && (t < n + (r.duration || 0) || e === i - 1))) return e;
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
            { dateRanges: i } = n,
            r = this.events,
            s = this.parseDateRanges(i, { url: n.url }, t),
            a = Object.keys(i),
            o = r ? r.filter((e) => !a.includes(e.identifier)) : [];
        s.length &&
            s.sort((e, t) => {
                let n = e.cue.pre,
                    i = e.cue.post,
                    r = t.cue.pre,
                    s = t.cue.post;
                if (n && !r) return -1;
                if ((r && !n) || (i && !s)) return 1;
                if (s && !i) return -1;
                if (!n && !r && !i && !s) {
                    let n = e.startTime,
                        i = t.startTime;
                    if (n !== i) return n - i;
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
        let i = this.events || [];
        if (i.length || t.length || this.length < 2) {
            let r = this.items,
                s = this.parseSchedule(i, e);
            (n ||
                t.length ||
                (null == r ? void 0 : r.length) !== s.length ||
                s.some(
                    (e, t) =>
                        Math.abs(e.playout.start - r[t].playout.start) > 0.005 ||
                        Math.abs(e.playout.end - r[t].playout.end) > 0.005,
                )) &&
                ((this.items = s), this.onScheduleUpdate(t, r));
        }
    }
    parseDateRanges(e, t, n) {
        let i = [],
            r = Object.keys(e);
        for (let s = 0; s < r.length; s++) {
            let a = r[s],
                o = e[a];
            if (o.isInterstitial) {
                let e = this.eventMap[a];
                e ? e.setDateRange(o) : ((e = new rB(o, t)), (this.eventMap[a] = e), !1 === n && (e.appendInPlace = n)),
                    i.push(e);
            }
        }
        return i;
    }
    parseSchedule(e, t) {
        let n = [],
            i = t.main.details,
            r = i.live ? 1 / 0 : i.edge,
            s = 0;
        if ((e = e.filter((e) => !e.error && !(e.cue.once && e.hasPlayed))).length) {
            this.resolveOffsets(e, t);
            let i = 0,
                o = 0;
            if (
                (e.forEach((t, a) => {
                    let l = t.cue.pre,
                        u = t.cue.post,
                        c = e[a - 1] || null,
                        d = t.appendInPlace,
                        _ = u ? r : t.startOffset,
                        h = t.duration,
                        f = t.timelineOccupancy === rV.Range ? h : 0,
                        p = t.resumptionOffset,
                        E = (null == c ? void 0 : c.startTime) === _,
                        m = _ + t.cumulativeDuration,
                        g = d ? m + h : _ + p;
                    if (l || (!u && _ <= 0)) {
                        let e = o;
                        (o += f), (t.timelineStart = m);
                        let i = s;
                        (s += h),
                            n.push({
                                event: t,
                                start: m,
                                end: g,
                                playout: { start: i, end: s },
                                integrated: { start: e, end: o },
                            });
                    } else {
                        if (!(_ <= r)) return;
                        if (!E) {
                            let r = _ - i;
                            if (r > 0.033) {
                                let l = i,
                                    u = o;
                                o += r;
                                let c = s;
                                s += r;
                                let d = {
                                    previousEvent: e[a - 1] || null,
                                    nextEvent: t,
                                    start: l,
                                    end: l + r,
                                    playout: { start: c, end: s },
                                    integrated: { start: u, end: o },
                                };
                                n.push(d);
                            } else r > 0 && c && ((c.cumulativeDuration += r), (n[n.length - 1].end = _));
                        }
                        u && (g = m), (t.timelineStart = m);
                        let l = o;
                        o += f;
                        let d = s;
                        (s += h),
                            n.push({
                                event: t,
                                start: m,
                                end: g,
                                playout: { start: d, end: s },
                                integrated: { start: l, end: o },
                            });
                    }
                    let A = t.resumeTime;
                    i = u || A > r ? r : A;
                }),
                i < r)
            ) {
                var a;
                let e = i,
                    t = o,
                    l = r - i;
                o += l;
                let u = s;
                (s += l),
                    n.push({
                        previousEvent: (null == (a = n[n.length - 1]) ? void 0 : a.event) || null,
                        nextEvent: null,
                        start: i,
                        end: e + l,
                        playout: { start: u, end: s },
                        integrated: { start: t, end: o },
                    });
            }
            this.setDurations(r, s, o);
        } else
            n.push({
                previousEvent: null,
                nextEvent: null,
                start: 0,
                end: r,
                playout: { start: 0, end: r },
                integrated: { start: 0, end: r },
            }),
                this.setDurations(r, r, r);
        return n;
    }
    setDurations(e, t, n) {
        this.durations = { primary: e, playout: t, integrated: n };
    }
    resolveOffsets(e, t) {
        let n = t.main.details,
            i = n.live ? 1 / 0 : n.edge,
            s = 0,
            a = -1;
        e.forEach((o, l) => {
            let u = o.cue.pre,
                c = o.cue.post,
                d = u ? 0 : c ? i : o.startTime;
            this.updateAssetDurations(o),
                a === d ? (o.cumulativeDuration = s) : ((s = 0), (a = d)),
                !c &&
                    o.snapOptions.in &&
                    (o.resumeAnchor = e3(null, n.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0),
                o.appendInPlace &&
                    !o.appendInPlaceStarted &&
                    (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)),
                !o.appendInPlace &&
                    l + 1 < e.length &&
                    e[l + 1].startTime - e[l].resumeTime < 0.033 &&
                    ((e[l + 1].appendInPlace = !1),
                    e[l + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`));
            let _ = r(o.resumeOffset) ? o.resumeOffset : o.duration;
            s += _;
        });
    }
    primaryCanResumeInPlaceAt(e, t) {
        let n = e.resumeTime,
            i = e.startTime + e.resumptionOffset;
        return Math.abs(n - i) > 0.025
            ? (this.log(`"${e.identifier}" resumption ${n} not aligned with estimated timeline end ${i}`), !1)
            : !Object.keys(t).some((i) => {
                  let r = t[i].details,
                      s = r.edge;
                  if (n >= s) return this.log(`"${e.identifier}" resumption ${n} past ${i} playlist end ${s}`), !1;
                  let a = e3(null, r.fragments, n);
                  if (!a)
                      return (
                          this.log(
                              `"${e.identifier}" resumption ${n} does not align with any fragments in ${i} playlist (${r.fragStart}-${r.fragmentEnd})`,
                          ),
                          !0
                      );
                  let o = 0.175 * ("audio" === i);
                  return (
                      !(Math.abs(a.start - n) < 0.025 + o || Math.abs(a.end - n) < 0.025 + o) &&
                      (this.log(
                          `"${e.identifier}" resumption ${n} not aligned with ${i} fragment bounds (${a.start}-${a.end} sn: ${a.sn} cc: ${a.cc})`,
                      ),
                      !0)
                  );
              });
    }
    updateAssetDurations(e) {
        if (!e.assetListLoaded) return;
        let t = e.timelineStart,
            n = 0,
            i = !1,
            r = !1;
        for (let s = 0; s < e.assetList.length; s++) {
            let a = e.assetList[s],
                o = t + n;
            (a.startOffset = n),
                (a.timelineStart = o),
                i || (i = null === a.duration),
                r || (r = !!a.error),
                (n += a.error ? 0 : a.duration || 0);
        }
        i && !r ? (e.duration = Math.max(n, e.duration)) : (e.duration = n);
    }
    removeEvent(e) {
        e.reset(), delete this.eventMap[e.identifier];
    }
}
function rz(e) {
    return `[${e.event ? '"' + e.event.identifier + '"' : "primary"}: ${e.start.toFixed(2)}-${e.end.toFixed(2)}]`;
}
class rq {
    constructor(e) {
        (this.hls = void 0), (this.hls = e);
    }
    destroy() {
        this.hls = null;
    }
    loadAssetList(e, t) {
        let n,
            i = e.assetListUrl;
        try {
            n = rj(i, this.hls.sessionId, e.baseUrl);
        } catch (n) {
            let t = this.assignAssetListError(e, l.ASSET_LIST_LOAD_ERROR, n, i);
            this.hls.trigger(u.ERROR, t);
            return;
        }
        t && "data:" !== n.protocol && n.searchParams.set("_HLS_start_offset", "" + t);
        let r = this.hls.config,
            s = new r.loader(r),
            a = { responseType: "json", url: n.href },
            o = r.interstitialAssetListLoadPolicy.default,
            c = { loadPolicy: o, timeout: o.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
        return (
            s.load(a, c, {
                onSuccess: (t, n, i, r) => {
                    let s = t.data;
                    if (!Array.isArray(null == s ? void 0 : s.ASSETS)) {
                        let t = this.assignAssetListError(
                            e,
                            l.ASSET_LIST_PARSING_ERROR,
                            Error("Invalid interstitial asset list"),
                            i.url,
                            n,
                            r,
                        );
                        this.hls.trigger(u.ERROR, t);
                        return;
                    }
                    (e.assetListResponse = s),
                        this.hls.trigger(u.ASSET_LIST_LOADED, { event: e, assetListResponse: s, networkDetails: r });
                },
                onError: (t, n, i, r) => {
                    let s = this.assignAssetListError(
                        e,
                        l.ASSET_LIST_LOAD_ERROR,
                        Error(`Error loading X-ASSET-LIST: HTTP status ${t.code} ${t.text} (${n.url})`),
                        n.url,
                        r,
                        i,
                    );
                    this.hls.trigger(u.ERROR, s);
                },
                onTimeout: (t, n, i) => {
                    let r = this.assignAssetListError(
                        e,
                        l.ASSET_LIST_LOAD_TIMEOUT,
                        Error(`Timeout loading X-ASSET-LIST (${n.url})`),
                        n.url,
                        t,
                        i,
                    );
                    this.hls.trigger(u.ERROR, r);
                },
            }),
            this.hls.trigger(u.ASSET_LIST_LOADING, { event: e }),
            s
        );
    }
    assignAssetListError(e, t, n, i, r, s) {
        return (
            (e.error = n),
            {
                type: o.NETWORK_ERROR,
                details: t,
                fatal: !1,
                interstitial: e,
                url: i,
                error: n,
                networkDetails: s,
                stats: r,
            }
        );
    }
}
function rX(e) {
    null == e || e.play().catch(() => {});
}
function rZ(e, t) {
    return `[${e}] Advancing timeline position to ${t}`;
}
class rQ {
    constructor(e) {
        this.buffered = void 0;
        const t = (t, n, i) => {
            if ((n >>>= 0) > i - 1)
                throw new DOMException(
                    `Failed to execute '${t}' on 'TimeRanges': The index provided (${n}) is greater than the maximum bound (${i})`,
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
let rJ = {
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
    r0 = (e) => String.fromCharCode(rJ[e] || e),
    r1 = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
    r2 = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
    r3 = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
    r6 = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
    r4 = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class r5 {
    constructor() {
        (this.time = null), (this.verboseLevel = 0);
    }
    log(e, t) {
        if (this.verboseLevel >= e) {
            let n = "function" == typeof t ? t() : t;
            B.log(`${this.time} [${e}] ${n}`);
        }
    }
}
let r7 = function (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push(e[n].toString(16));
    return t;
};
class r8 {
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
            let i = t[n];
            e.hasOwnProperty(i) && (this[i] = e[i]);
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
class r9 {
    constructor() {
        (this.uchar = " "), (this.penState = new r8());
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
class se {
    constructor(e) {
        (this.chars = []),
            (this.pos = 0),
            (this.currPenState = new r8()),
            (this.cueStartTime = null),
            (this.logger = void 0);
        for (let e = 0; e < 100; e++) this.chars.push(new r9());
        this.logger = e;
    }
    equals(e) {
        for (let t = 0; t < 100; t++) if (!this.chars[t].equals(e.chars[t])) return !1;
        return !0;
    }
    copy(e) {
        for (let t = 0; t < 100; t++) this.chars[t].copy(e.chars[t]);
    }
    isEmpty() {
        let e = !0;
        for (let t = 0; t < 100; t++)
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
                : this.pos > 100 && (this.logger.log(3, "Too large cursor position " + this.pos), (this.pos = 100));
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
        let t = r0(e);
        this.pos >= 100
            ? this.logger.log(
                  0,
                  () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!",
              )
            : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1));
    }
    clearFromPos(e) {
        let t;
        for (t = e; t < 100; t++) this.chars[t].reset();
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
        for (let n = 0; n < 100; n++) {
            let i = this.chars[n].uchar;
            " " !== i && (t = !1), e.push(i);
        }
        return t ? "" : e.join("");
    }
    setPenStyles(e) {
        this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
    }
}
class st {
    constructor(e) {
        (this.rows = []),
            (this.currRow = 14),
            (this.nrRollUpRows = null),
            (this.lastOutputScreen = null),
            (this.logger = void 0);
        for (let t = 0; t < 15; t++) this.rows.push(new se(e));
        this.logger = e;
    }
    reset() {
        for (let e = 0; e < 15; e++) this.rows[e].clear();
        this.currRow = 14;
    }
    equals(e) {
        let t = !0;
        for (let n = 0; n < 15; n++)
            if (!this.rows[n].equals(e.rows[n])) {
                t = !1;
                break;
            }
        return t;
    }
    copy(e) {
        for (let t = 0; t < 15; t++) this.rows[t].copy(e.rows[t]);
    }
    isEmpty() {
        let e = !0;
        for (let t = 0; t < 15; t++)
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
        this.logger.log(2, () => "pacData = " + e$(e));
        let t = e.row - 1;
        if (
            (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
            this.nrRollUpRows && this.currRow !== t)
        ) {
            for (let e = 0; e < 15; e++) this.rows[e].clear();
            let e = this.currRow + 1 - this.nrRollUpRows,
                n = this.lastOutputScreen;
            if (n) {
                let i = n.rows[e].cueStartTime,
                    r = this.logger.time;
                if (null !== i && null !== r && i < r)
                    for (let i = 0; i < this.nrRollUpRows; i++)
                        this.rows[t - this.nrRollUpRows + i + 1].copy(n.rows[e + i]);
            }
        }
        this.currRow = t;
        let n = this.rows[this.currRow];
        if (null !== e.indent) {
            let t = Math.max(e.indent - 1, 0);
            n.setCursor(e.indent), (e.color = n.chars[t].penState.foreground);
        }
        let i = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };
        this.setPen(i);
    }
    setBkgData(e) {
        this.logger.log(2, () => "bkgData = " + e$(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
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
            i = -1;
        for (let n = 0; n < 15; n++) {
            let r = this.rows[n].getTextString();
            r && ((i = n + 1), e ? t.push("Row " + i + ": '" + r + "'") : t.push(r.trim()));
        }
        return t.length > 0 && (n = e ? "[" + t.join(" | ") + "]" : t.join("\n")), n;
    }
    getTextAndFormat() {
        return this.rows;
    }
}
class sn {
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
            (this.displayedMemory = new st(n)),
            (this.nonDisplayedMemory = new st(n)),
            (this.lastOutputScreen = new st(n)),
            (this.currRollUpRow = this.displayedMemory.rows[14]),
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
            (this.currRollUpRow = this.displayedMemory.rows[14]),
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
        ((t.underline = e % 2 == 1), (t.italics = e >= 46), t.italics)
            ? (t.foreground = "white")
            : (t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][Math.floor(e / 2) - 16]),
            this.logger.log(2, "MIDROW: " + e$(t)),
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
class si {
    constructor(e, t, n) {
        (this.channels = void 0),
            (this.currentChannel = 0),
            (this.cmdHistory = { a: null, b: null }),
            (this.logger = void 0);
        const i = (this.logger = new r5());
        this.channels = [null, new sn(e, t, i), new sn(e + 1, n, i)];
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
            var n, i, r, s, a, o, l, u;
            let c = 127 & t[e],
                d = 127 & t[e + 1],
                _ = !1,
                h = null;
            if (0 === c && 0 === d) continue;
            this.logger.log(3, () => "[" + r7([t[e], t[e + 1]]) + "] -> (" + r7([c, d]) + ")");
            let f = this.cmdHistory;
            if (c >= 16 && c <= 31) {
                if (((n = c), (i = d), (r = f).a === n && r.b === i)) {
                    ((s = f).a = null),
                        (s.b = null),
                        this.logger.log(3, () => "Repeated command (" + r7([c, d]) + ") is dropped");
                    continue;
                }
                (a = c),
                    (o = d),
                    ((l = this.cmdHistory).a = a),
                    (l.b = o),
                    (_ = this.parseCmd(c, d)) || (_ = this.parseMidrow(c, d)),
                    _ || (_ = this.parsePAC(c, d)),
                    _ || (_ = this.parseBackgroundAttributes(c, d));
            } else {
                ((u = f).a = null), (u.b = null);
            }
            if (!_ && (h = this.parseChars(c, d))) {
                let e = this.currentChannel;
                e && e > 0 ? this.channels[e].insertChars(h) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
            }
            _ ||
                h ||
                this.logger.log(
                    2,
                    () => "Couldn't parse cleaned data " + r7([c, d]) + " orig: " + r7([t[e], t[e + 1]]),
                );
        }
    }
    parseCmd(e, t) {
        if (
            !(
                ((20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47) ||
                ((23 === e || 31 === e) && t >= 33 && t <= 35)
            )
        )
            return !1;
        let n = 20 === e || 21 === e || 23 === e ? 1 : 2,
            i = this.channels[n];
        return (
            20 === e || 21 === e || 28 === e || 29 === e
                ? 32 === t
                    ? i.ccRCL()
                    : 33 === t
                      ? i.ccBS()
                      : 34 === t
                        ? i.ccAOF()
                        : 35 === t
                          ? i.ccAON()
                          : 36 === t
                            ? i.ccDER()
                            : 37 === t
                              ? i.ccRU(2)
                              : 38 === t
                                ? i.ccRU(3)
                                : 39 === t
                                  ? i.ccRU(4)
                                  : 40 === t
                                    ? i.ccFON()
                                    : 41 === t
                                      ? i.ccRDC()
                                      : 42 === t
                                        ? i.ccTR()
                                        : 43 === t
                                          ? i.ccRTD()
                                          : 44 === t
                                            ? i.ccEDM()
                                            : 45 === t
                                              ? i.ccCR()
                                              : 46 === t
                                                ? i.ccENM()
                                                : 47 === t && i.ccEOC()
                : i.ccTO(t - 32),
            (this.currentChannel = n),
            !0
        );
    }
    parseMidrow(e, t) {
        let n = 0;
        if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
            if ((n = 17 === e ? 1 : 2) !== this.currentChannel)
                return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
            let i = this.channels[n];
            return !!i && (i.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + r7([e, t]) + ")"), !0);
        }
        return !1;
    }
    parsePAC(e, t) {
        let n,
            i = ((e >= 17 && e <= 23) || (e >= 25 && e <= 31)) && t >= 64 && t <= 127,
            r = (16 === e || 24 === e) && t >= 64 && t <= 95;
        if (!(i || r)) return !1;
        let s = e <= 23 ? 1 : 2;
        n = t >= 64 && t <= 95 ? (1 === s ? r1[e] : r3[e]) : 1 === s ? r2[e] : r6[e];
        let a = this.channels[s];
        return !!a && (a.setPAC(this.interpretPAC(n, t)), (this.currentChannel = s), !0);
    }
    interpretPAC(e, t) {
        let n,
            i = { color: null, italics: !1, indent: null, underline: !1, row: e };
        return (
            (i.underline = (1 & (n = t > 95 ? t - 96 : t - 64)) == 1),
            n <= 13
                ? (i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(n / 2)])
                : n <= 15
                  ? ((i.italics = !0), (i.color = "white"))
                  : (i.indent = 4 * Math.floor((n - 16) / 2)),
            i
        );
    }
    parseChars(e, t) {
        let n,
            i = null,
            r = null;
        if ((e >= 25 ? ((n = 2), (r = e - 8)) : ((n = 1), (r = e)), r >= 17 && r <= 19)) {
            let e;
            (e = 17 === r ? t + 80 : 18 === r ? t + 112 : t + 144),
                this.logger.log(2, () => "Special char '" + r0(e) + "' in channel " + n),
                (i = [e]);
        } else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
        return i && this.logger.log(3, () => "Char codes =  " + r7(i).join(",")), i;
    }
    parseBackgroundAttributes(e, t) {
        if (!(((16 === e || 24 === e) && t >= 32 && t <= 47) || ((23 === e || 31 === e) && t >= 45 && t <= 47)))
            return !1;
        let n = {};
        return (
            16 === e || 24 === e
                ? ((n.background = r4[Math.floor((t - 32) / 2)]), t % 2 == 1 && (n.background = n.background + "_semi"))
                : 45 === t
                  ? (n.background = "transparent")
                  : ((n.foreground = "black"), 47 === t && (n.underline = !0)),
            this.channels[e <= 23 ? 1 : 2].setBkgData(n),
            !0
        );
    }
    reset() {
        var e;
        for (let e = 0; e < Object.keys(this.channels).length; e++) {
            let t = this.channels[e];
            t && t.reset();
        }
        ((e = this.cmdHistory).a = null), (e.b = null);
    }
    cueSplitAtTime(e) {
        for (let t = 0; t < this.channels.length; t++) {
            let n = this.channels[t];
            n && n.cueSplitAtTime(e);
        }
    }
}
var sr = (function () {
    if (null != tV && tV.VTTCue) return self.VTTCue;
    let e = ["", "lr", "rl"],
        t = ["start", "middle", "end", "left", "right"];
    function n(e, t) {
        if ("string" != typeof t || !Array.isArray(e)) return !1;
        let n = t.toLowerCase();
        return !!~e.indexOf(n) && n;
    }
    function i(e) {
        let t = 1;
        for (; t < arguments.length; t++) {
            let n = arguments[t];
            for (let t in n) e[t] = n[t];
        }
        return e;
    }
    function r(r, s, a) {
        let o = { enumerable: !0 };
        this.hasBeenReset = !1;
        let l = "",
            u = !1,
            c = r,
            d = s,
            _ = a,
            h = null,
            f = "",
            p = !0,
            E = "auto",
            m = "start",
            g = 50,
            A = "middle",
            I = 50,
            T = "middle";
        Object.defineProperty(
            this,
            "id",
            i({}, o, {
                get: function () {
                    return l;
                },
                set: function (e) {
                    l = "" + e;
                },
            }),
        ),
            Object.defineProperty(
                this,
                "pauseOnExit",
                i({}, o, {
                    get: function () {
                        return u;
                    },
                    set: function (e) {
                        u = !!e;
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "startTime",
                i({}, o, {
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
                this,
                "endTime",
                i({}, o, {
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
                this,
                "text",
                i({}, o, {
                    get: function () {
                        return _;
                    },
                    set: function (e) {
                        (_ = "" + e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "region",
                i({}, o, {
                    get: function () {
                        return h;
                    },
                    set: function (e) {
                        (h = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "vertical",
                i({}, o, {
                    get: function () {
                        return f;
                    },
                    set: function (t) {
                        let i = n(e, t);
                        if (!1 === i) throw SyntaxError("An invalid or illegal string was specified.");
                        (f = i), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "snapToLines",
                i({}, o, {
                    get: function () {
                        return p;
                    },
                    set: function (e) {
                        (p = !!e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "line",
                i({}, o, {
                    get: function () {
                        return E;
                    },
                    set: function (e) {
                        if ("number" != typeof e && "auto" !== e)
                            throw SyntaxError("An invalid number or illegal string was specified.");
                        (E = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "lineAlign",
                i({}, o, {
                    get: function () {
                        return m;
                    },
                    set: function (e) {
                        let i = n(t, e);
                        if (!i) throw SyntaxError("An invalid or illegal string was specified.");
                        (m = i), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "position",
                i({}, o, {
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
                this,
                "positionAlign",
                i({}, o, {
                    get: function () {
                        return A;
                    },
                    set: function (e) {
                        let i = n(t, e);
                        if (!i) throw SyntaxError("An invalid or illegal string was specified.");
                        (A = i), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "size",
                i({}, o, {
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
                this,
                "align",
                i({}, o, {
                    get: function () {
                        return T;
                    },
                    set: function (e) {
                        let i = n(t, e);
                        if (!i) throw SyntaxError("An invalid or illegal string was specified.");
                        (T = i), (this.hasBeenReset = !0);
                    },
                }),
            ),
            (this.displayState = void 0);
    }
    return (
        (r.prototype.getCueAsHTML = function () {
            return self.WebVTT.convertCueToDOMTree(self, this.text);
        }),
        r
    );
})();
class ss {
    decode(e, t) {
        if (!e) return "";
        if ("string" != typeof e) throw Error("Error - expected string data.");
        return decodeURIComponent(encodeURIComponent(e));
    }
}
function sa(e) {
    function t(e, t, n, i) {
        return (0 | e) * 3600 + (0 | t) * 60 + (0 | n) + parseFloat(i || 0);
    }
    let n = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
    return n ? (parseFloat(n[2]) > 59 ? t(n[2], n[3], 0, n[4]) : t(n[1], n[2], n[3], n[4])) : null;
}
class so {
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
        for (let i = 0; i < n.length; ++i)
            if (t === n[i]) {
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
function sl(e, t, n, i) {
    let r = i ? e.split(i) : [e];
    for (let e in r) {
        if ("string" != typeof r[e]) continue;
        let i = r[e].split(n);
        if (2 === i.length) t(i[0], i[1]);
    }
}
let su = new sr(0, 0, ""),
    sc = "middle" === su.align ? "middle" : "center";
function sd(e) {
    return e.replace(/<br(?: \/)?>/gi, "\n");
}
class s_ {
    constructor() {
        (this.state = "INITIAL"),
            (this.buffer = ""),
            (this.decoder = new ss()),
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
            for (e = sd(e); n < e.length && "\r" !== e[n] && "\n" !== e[n]; ) ++n;
            let i = e.slice(0, n);
            return "\r" === e[n] && ++n, "\n" === e[n] && ++n, (t.buffer = e.slice(n)), i;
        }
        e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
        try {
            let e = "";
            if ("INITIAL" === t.state) {
                if (!/\r\n|\n/.test(t.buffer)) return this;
                let i = (e = n()).match(/^(\xef\xbb\xbf)?WEBVTT([ \t].*)?$/);
                if (!(null != i && i[0])) throw Error("Malformed WebVTT signature.");
                t.state = "HEADER";
            }
            let r = !1;
            for (; t.buffer && /\r\n|\n/.test(t.buffer); )
                switch ((r ? (r = !1) : (e = n()), t.state)) {
                    case "HEADER":
                        if (/:/.test(e)) {
                            var i;
                            (i = e), sl(i, function (e, t) {}, /:/);
                        } else e || (t.state = "ID");
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
                        if (((t.cue = new sr(0, 0, "")), (t.state = "CUE"), -1 === e.indexOf("--\x3e"))) {
                            t.cue.id = e;
                            continue;
                        }
                    case "CUE":
                        if (!t.cue) {
                            t.state = "BADCUE";
                            continue;
                        }
                        try {
                            !(function (e, t, n) {
                                var i;
                                let r,
                                    s,
                                    a,
                                    o = e;
                                function l() {
                                    let t = sa(e);
                                    if (null === t) throw Error("Malformed timestamp: " + o);
                                    return (e = e.replace(/^[^\sa-zA-Z-]+/, "")), t;
                                }
                                function u() {
                                    e = e.replace(/^\s+/, "");
                                }
                                if ((u(), (t.startTime = l()), u(), "--\x3e" !== e.slice(0, 3)))
                                    throw Error(
                                        "Malformed time stamp (time stamps must be separated by '--\x3e'): " + o,
                                    );
                                (e = e.slice(3)),
                                    u(),
                                    (t.endTime = l()),
                                    u(),
                                    (i = e),
                                    (r = new so()),
                                    sl(
                                        i,
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
                                                        2 === i.length &&
                                                            r.alt("lineAlign", i[1], ["start", sc, "end"]);
                                                    break;
                                                case "position":
                                                    (i = t.split(",")),
                                                        r.percent(e, i[0]),
                                                        2 === i.length &&
                                                            r.alt("positionAlign", i[1], [
                                                                "start",
                                                                sc,
                                                                "end",
                                                                "line-left",
                                                                "line-right",
                                                                "auto",
                                                            ]);
                                                    break;
                                                case "size":
                                                    r.percent(e, t);
                                                    break;
                                                case "align":
                                                    r.alt(e, t, ["start", sc, "end", "left", "right"]);
                                            }
                                        },
                                        /:/,
                                        /\s/,
                                    ),
                                    (t.region = r.get("region", null)),
                                    (t.vertical = r.get("vertical", "")),
                                    "auto" === (s = r.get("line", "auto")) && -1 === su.line && (s = -1),
                                    (t.line = s),
                                    (t.lineAlign = r.get("lineAlign", "start")),
                                    (t.snapToLines = r.get("snapToLines", !0)),
                                    (t.size = r.get("size", 100)),
                                    (t.align = r.get("align", sc)),
                                    "auto" === (a = r.get("position", "auto")) &&
                                        50 === su.position &&
                                        (a =
                                            "start" === t.align || "left" === t.align
                                                ? 0
                                                : "end" === t.align || "right" === t.align
                                                  ? 100
                                                  : 50),
                                    (t.position = a);
                            })(e, t.cue, t.regionList);
                        } catch (e) {
                            (t.cue = null), (t.state = "BADCUE");
                            continue;
                        }
                        t.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        {
                            let n = -1 !== e.indexOf("--\x3e");
                            if (!e || (n && (r = !0))) {
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
        try {
            if (
                ((this.cue || "HEADER" === this.state) && ((this.buffer += "\n\n"), this.parse()),
                "INITIAL" === this.state || "BADWEBVTT" === this.state)
            )
                throw Error("Malformed WebVTT signature.");
        } catch (e) {
            this.onparsingerror && this.onparsingerror(e);
        }
        return this.onflush && this.onflush(), this;
    }
}
let sh = /\r\n|\n\r|\n|\r/g,
    sf = function (e, t, n = 0) {
        return e.slice(n, n + t.length) === t;
    },
    sp = function (e) {
        let t = parseInt(e.slice(-3)),
            n = parseInt(e.slice(-6, -4)),
            i = parseInt(e.slice(-9, -7)),
            s = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
        if (!r(t) || !r(n) || !r(i) || !r(s)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
        return (t += 1e3 * n), (t += 6e4 * i), (t += 36e5 * s);
    };
function sE(e, t, n) {
    return rF(e.toString()) + rF(t.toString()) + rF(n);
}
let sm = function (e, t, n) {
        let i = e[t],
            r = e[i.prevCC];
        if (!r || (!r.new && i.new)) {
            (e.ccOffset = e.presentationOffset = i.start), (i.new = !1);
            return;
        }
        for (; null != (s = r) && s.new; ) {
            var s;
            (e.ccOffset += i.start - r.start), (i.new = !1), (r = e[(i = r).prevCC]);
        }
        e.presentationOffset = n;
    },
    sg = "stpp.ttml.im1t",
    sA = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
    sI = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
    sT = { left: "start", center: "center", right: "end", start: "start", end: "end" };
function sS(e, t, n, i) {
    let r = ec(new Uint8Array(e), ["mdat"]);
    if (0 === r.length) return void i(Error("Could not parse IMSC1 mdat"));
    let s = r.map((e) => Y(e)),
        a = (function (e, t = 1, n = !1) {
            return iR(e, 1, 1 / t, n);
        })(t.baseTime, t.timescale);
    try {
        s.forEach((e) =>
            n(
                (function (e, t) {
                    let n = new DOMParser().parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
                    if (!n) throw Error("Invalid ttml");
                    let i = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 },
                        r = Object.keys(i).reduce((e, t) => ((e[t] = n.getAttribute(`ttp:${t}`) || i[t]), e), {}),
                        s = "preserve" !== n.getAttribute("xml:space"),
                        a = sN(sy(n, "styling", "style")),
                        o = sN(sy(n, "layout", "region")),
                        l = sy(n, "body", "[begin]");
                    return [].map
                        .call(l, (e) => {
                            var n, i, l;
                            let u,
                                c,
                                d,
                                _ = (function e(t, n) {
                                    return [].slice.call(t.childNodes).reduce((t, i, r) => {
                                        var s;
                                        return "br" === i.nodeName && r
                                            ? t + "\n"
                                            : null != (s = i.childNodes) && s.length
                                              ? e(i, n)
                                              : n
                                                ? t + i.textContent.trim().replace(/\s+/g, " ")
                                                : t + i.textContent;
                                    }, "");
                                })(e, s);
                            if (!_ || !e.hasAttribute("begin")) return null;
                            let h = sR(e.getAttribute("begin"), r),
                                f = sR(e.getAttribute("dur"), r),
                                p = sR(e.getAttribute("end"), r);
                            if (null === h) throw sC(e);
                            if (null === p) {
                                if (null === f) throw sC(e);
                                p = h + f;
                            }
                            let E = new sr(h - t, p - t, _);
                            E.id = sE(E.startTime, E.endTime, E.text);
                            let m =
                                    ((n = o[e.getAttribute("region")]),
                                    (i = a[e.getAttribute("style")]),
                                    (l = a),
                                    (u = "http://www.w3.org/ns/ttml#styling"),
                                    (c = null),
                                    (d = null != n && n.hasAttribute("style") ? n.getAttribute("style") : null) &&
                                        l.hasOwnProperty(d) &&
                                        (c = l[d]),
                                    [
                                        "displayAlign",
                                        "textAlign",
                                        "color",
                                        "backgroundColor",
                                        "fontSize",
                                        "fontFamily",
                                    ].reduce((e, t) => {
                                        let r = sv(i, u, t) || sv(n, u, t) || sv(c, u, t);
                                        return r && (e[t] = r), e;
                                    }, {})),
                                { textAlign: g } = m;
                            if (g) {
                                let e = sT[g];
                                e && (E.lineAlign = e), (E.align = g);
                            }
                            return M(E, m), E;
                        })
                        .filter((e) => null !== e);
                })(e, a),
            ),
        );
    } catch (e) {
        i(e);
    }
}
function sy(e, t, n) {
    let i = e.getElementsByTagName(t)[0];
    return i ? [].slice.call(i.querySelectorAll(n)) : [];
}
function sN(e) {
    return e.reduce((e, t) => {
        let n = t.getAttribute("xml:id");
        return n && (e[n] = t), e;
    }, {});
}
function sv(e, t, n) {
    return e && e.hasAttributeNS(t, n) ? e.getAttributeNS(t, n) : null;
}
function sC(e) {
    return Error(`Could not parse ttml timestamp ${e}`);
}
function sR(e, t) {
    var n, i;
    let r, s;
    if (!e) return null;
    let a = sa(e);
    return (
        null === a &&
            (sA.test(e)
                ? ((n = e),
                  (i = t),
                  (s = (0 | (r = sA.exec(n))[4]) + (0 | r[5]) / i.subFrameRate),
                  (a = (0 | r[1]) * 3600 + (0 | r[2]) * 60 + (0 | r[3]) + s / i.frameRate))
                : sI.test(e) &&
                  (a = (function (e, t) {
                      let n = sI.exec(e),
                          i = Number(n[1]);
                      switch (n[2]) {
                          case "h":
                              return 3600 * i;
                          case "m":
                              return 60 * i;
                          case "ms":
                              return 1e3 * i;
                          case "f":
                              return i / t.frameRate;
                          case "t":
                              return i / t.tickRate;
                      }
                      return i;
                  })(e, t))),
        a
    );
}
class sO {
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
function sb(e) {
    return e.characteristics &&
        /transcribes-spoken-dialog/gi.test(e.characteristics) &&
        /describes-music-and-sound/gi.test(e.characteristics)
        ? "captions"
        : "subtitles";
}
function sD(e, t) {
    return !!e && e.kind === sb(t) && iq(t, e);
}
function sL() {
    return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !0 } };
}
let sw = /\s/,
    sM = {
        newCue(e, t, n, i) {
            let r,
                s,
                a,
                o,
                l,
                u = [],
                c = self.VTTCue || self.TextTrackCue;
            for (let _ = 0; _ < i.rows.length; _++)
                if (((r = i.rows[_]), (a = !0), (o = 0), (l = ""), !r.isEmpty())) {
                    var d;
                    for (let e = 0; e < r.chars.length; e++)
                        sw.test(r.chars[e].uchar) && a ? o++ : ((l += r.chars[e].uchar), (a = !1));
                    (r.cueStartTime = t), t === n && (n += 1e-4), o >= 16 ? o-- : o++;
                    let i = sd(l.trim()),
                        h = sE(t, n, i);
                    (null != e && null != (d = e.cues) && d.getCueById(h)) ||
                        (((s = new c(t, n, i)).id = h),
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
                    u.forEach((t) => rx(e, t))),
                u
            );
        },
    },
    sP = /(\d+)-(\d+)\/(\d+)/;
class sx {
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
            (this.fetchSetup = e.fetchSetup || sk),
            (this.controller = new self.AbortController()),
            (this.stats = new q());
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
        var i;
        let s,
            a = this.stats;
        if (a.loading.start) throw Error("Loader can only be used once.");
        a.loading.start = self.performance.now();
        let o =
                ((i = e),
                (s = {
                    method: "GET",
                    mode: "cors",
                    credentials: "same-origin",
                    signal: this.controller.signal,
                    headers: new self.Headers(M({}, i.headers)),
                }),
                i.rangeEnd && s.headers.set("Range", "bytes=" + i.rangeStart + "-" + String(i.rangeEnd - 1)),
                s),
            l = "arraybuffer" === e.responseType,
            u = l ? "byteLength" : "length",
            { maxTimeToFirstByteMs: c, maxLoadTimeMs: d } = t.loadPolicy;
        (this.context = e),
            (this.config = t),
            (this.callbacks = n),
            (this.request = this.fetchSetup(e, o)),
            self.clearTimeout(this.requestTimeout),
            (t.timeout = c && r(c) ? c : d),
            (this.requestTimeout = self.setTimeout(() => {
                this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(a, e, this.response));
            }, t.timeout)),
            (iB(this.request) ? this.request.then(self.fetch) : self.fetch(this.request))
                .then((n) => {
                    var i;
                    this.response = this.loader = n;
                    let s = Math.max(self.performance.now(), a.loading.start);
                    if (
                        (self.clearTimeout(this.requestTimeout),
                        (t.timeout = d),
                        (this.requestTimeout = self.setTimeout(
                            () => {
                                this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(a, e, this.response));
                            },
                            d - (s - a.loading.start),
                        )),
                        !n.ok)
                    ) {
                        let { status: e, statusText: t } = n;
                        throw new sU(t || "fetch, bad network response", e, n);
                    }
                    (a.loading.first = s),
                        (a.total =
                            (function (e) {
                                let t = e.get("Content-Range");
                                if (t) {
                                    let e = (function (e) {
                                        let t = sP.exec(e);
                                        if (t) return parseInt(t[2]) - parseInt(t[1]) + 1;
                                    })(t);
                                    if (r(e)) return e;
                                }
                                let n = e.get("Content-Length");
                                if (n) return parseInt(n);
                            })(n.headers) || a.total);
                    let o = null == (i = this.callbacks) ? void 0 : i.onProgress;
                    return o && r(t.highWaterMark)
                        ? this.loadProgressively(n, a, e, t.highWaterMark, o)
                        : l
                          ? n.arrayBuffer()
                          : "json" === e.responseType
                            ? n.json()
                            : n.text();
                })
                .then((n) => {
                    var i, s;
                    let o = this.response;
                    if (!o) throw Error("loader destroyed");
                    self.clearTimeout(this.requestTimeout),
                        (a.loading.end = Math.max(self.performance.now(), a.loading.first));
                    let l = n[u];
                    l && (a.loaded = a.total = l);
                    let c = { url: o.url, data: n, code: o.status },
                        d = null == (i = this.callbacks) ? void 0 : i.onProgress;
                    d && !r(t.highWaterMark) && d(a, e, n, o), null == (s = this.callbacks) || s.onSuccess(c, a, e, o);
                })
                .catch((t) => {
                    var n;
                    if ((self.clearTimeout(this.requestTimeout), a.aborted)) return;
                    let i = (t && t.code) || 0,
                        r = t ? t.message : null;
                    null == (n = this.callbacks) || n.onError({ code: i, text: r }, e, t ? t.details : null, a);
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
    loadProgressively(e, t, n, i = 0, r) {
        let s = new nV(),
            a = e.body.getReader(),
            o = () =>
                a
                    .read()
                    .then((a) => {
                        if (a.done)
                            return s.dataLength && r(t, n, s.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
                        let l = a.value,
                            u = l.length;
                        return (
                            (t.loaded += u),
                            u < i || s.dataLength
                                ? (s.push(l), s.dataLength >= i && r(t, n, s.flush().buffer, e))
                                : r(t, n, l.buffer, e),
                            o()
                        );
                    })
                    .catch(() => Promise.reject());
        return o();
    }
}
function sk(e, t) {
    return new self.Request(e.url, t);
}
class sU extends Error {
    constructor(e, t, n) {
        super(e), (this.code = void 0), (this.details = void 0), (this.code = t), (this.details = n);
    }
}
let sG = /^age:\s*[\d.]+\s*$/im;
class sF {
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
            (this.stats = new q()),
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
            i = this.stats;
        (i.loading.first = 0), (i.loaded = 0), (i.aborted = !1);
        let r = this.xhrSetup;
        r
            ? Promise.resolve()
                  .then(() => {
                      if (this.loader === n && !this.stats.aborted) return r(n, t.url);
                  })
                  .catch((e) => {
                      if (this.loader === n && !this.stats.aborted) return n.open("GET", t.url, !0), r(n, t.url);
                  })
                  .then(() => {
                      this.loader !== n || this.stats.aborted || this.openAndSendXhr(n, t, e);
                  })
                  .catch((e) => {
                      var r;
                      null == (r = this.callbacks) || r.onError({ code: n.status, text: e.message }, t, n, i);
                  })
            : this.openAndSendXhr(n, t, e);
    }
    openAndSendXhr(e, t, n) {
        e.readyState || e.open("GET", t.url, !0);
        let i = t.headers,
            { maxTimeToFirstByteMs: s, maxLoadTimeMs: a } = n.loadPolicy;
        if (i) for (let t in i) e.setRequestHeader(t, i[t]);
        t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
            (e.onreadystatechange = this.readystatechange.bind(this)),
            (e.onprogress = this.loadprogress.bind(this)),
            (e.responseType = t.responseType),
            self.clearTimeout(this.requestTimeout),
            (n.timeout = s && r(s) ? s : a),
            (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.timeout)),
            e.send();
    }
    readystatechange() {
        let { context: e, loader: t, stats: n } = this;
        if (!e || !t) return;
        let i = t.readyState,
            r = this.config;
        if (
            !n.aborted &&
            i >= 2 &&
            (0 === n.loading.first &&
                ((n.loading.first = Math.max(self.performance.now(), n.loading.start)),
                r.timeout !== r.loadPolicy.maxLoadTimeMs &&
                    (self.clearTimeout(this.requestTimeout),
                    (r.timeout = r.loadPolicy.maxLoadTimeMs),
                    (this.requestTimeout = self.setTimeout(
                        this.loadtimeout.bind(this),
                        r.loadPolicy.maxLoadTimeMs - (n.loading.first - n.loading.start),
                    )))),
            4 === i)
        ) {
            var s, a, o;
            self.clearTimeout(this.requestTimeout), (t.onreadystatechange = null), (t.onprogress = null);
            let i = t.status,
                l = "text" === t.responseType ? t.responseText : null;
            if (i >= 200 && i < 300) {
                let r = null != l ? l : t.response;
                if (null != r) {
                    (n.loading.end = Math.max(self.performance.now(), n.loading.first)),
                        (n.loaded = n.total = "arraybuffer" === t.responseType ? r.byteLength : r.length),
                        (n.bwEstimate = (8e3 * n.total) / (n.loading.end - n.loading.first));
                    let o = null == (s = this.callbacks) ? void 0 : s.onProgress;
                    o && o(n, e, r, t);
                    let l = { url: t.responseURL, data: r, code: i };
                    null == (a = this.callbacks) || a.onSuccess(l, n, e, t);
                    return;
                }
            }
            let u = r.loadPolicy.errorRetry;
            tn(u, n.retry, !1, { url: e.url, data: void 0, code: i })
                ? this.retry(u)
                : (B.error(`${i} while loading ${e.url}`),
                  null == (o = this.callbacks) || o.onError({ code: i, text: t.statusText }, e, t, n));
        }
    }
    loadtimeout() {
        if (!this.config) return;
        let e = this.config.loadPolicy.timeoutRetry;
        if (tn(e, this.stats.retry, !0)) this.retry(e);
        else {
            var t;
            B.warn(`timeout while loading ${null == ((t = this.context)) ? void 0 : t.url}`);
            let e = this.callbacks;
            e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader));
        }
    }
    retry(e) {
        let { context: t, stats: n } = this;
        (this.retryDelay = te(e, n.retry)),
            n.retry++,
            B.warn(
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
        if (this.loader && sG.test(this.loader.getAllResponseHeaders())) {
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
let sV = x(
    x(
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
            loader: sF,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: class extends k {
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
                                { fragCurrent: i, partCurrent: s, hls: a } = this,
                                { autoLevelEnabled: o, media: l } = a;
                            if (!i || !l) return;
                            let c = performance.now(),
                                d = s ? s.stats : i.stats,
                                _ = s ? s.duration : i.duration,
                                h = c - d.loading.start,
                                f = a.minAutoLevel,
                                p = i.level,
                                E = this._nextAutoLevel;
                            if (d.aborted || (d.loaded && d.loaded === d.total) || p <= f) {
                                this.clearTimer(), (this._nextAutoLevel = -1);
                                return;
                            }
                            if (!o) return;
                            let m = E > -1 && E !== p,
                                g = !!e || m;
                            if (!g && (l.paused || !l.playbackRate || !l.readyState)) return;
                            let A = a.mainForwardBufferInfo;
                            if (!g && null === A) return;
                            let I = this.bwEstimator.getEstimateTTFB(),
                                T = Math.abs(l.playbackRate);
                            if (h <= Math.max(I, (_ / (2 * T)) * 1e3)) return;
                            let S = A ? A.len / T : 0,
                                y = d.loading.first ? d.loading.first - d.loading.start : -1,
                                N = d.loaded && y > -1,
                                v = this.getBwEstimate(),
                                C = a.levels,
                                R = C[p],
                                O = Math.max(d.loaded, Math.round((_ * (i.bitrate || R.averageBitrate)) / 8)),
                                b = N ? h - y : h;
                            b < 1 && N && (b = Math.min(h, (8 * d.loaded) / v));
                            let D = N ? (1e3 * d.loaded) / b : 0,
                                L = I / 1e3,
                                w = D ? (O - d.loaded) / D : (8 * O) / v + L;
                            if (w <= S) return;
                            let M = D ? 8 * D : v,
                                P =
                                    (null == (t = (null == e ? void 0 : e.details) || this.hls.latestLevelDetails)
                                        ? void 0
                                        : t.live) === !0,
                                x = this.hls.config.abrBandWidthUpFactor,
                                k = 1 / 0;
                            for (n = p - 1; n > f; n--) {
                                let e = C[n].maxBitrate,
                                    t = !C[n].details || P;
                                if ((k = this.getTimeToLoadFrag(L, M, _ * e, t)) < Math.min(S, _ + L)) break;
                            }
                            if (k >= w || k > 10 * _) return;
                            N ? this.bwEstimator.sample(h - Math.min(I, y), d.loaded) : this.bwEstimator.sampleTTFB(h);
                            let U = C[n].maxBitrate;
                            this.getBwEstimate() * x > U && this.resetEstimator(U);
                            let G = this.findBestLevel(U, f, n, 0, S, 1, 1);
                            G > -1 && (n = G),
                                this.warn(`Fragment ${i.sn}${s ? " part " + s.index : ""} of level ${p} is loading too slowly;
      Fragment duration: ${i.duration.toFixed(3)}
      Time to underbuffer: ${S.toFixed(3)} s
      Estimated load time for current fragment: ${w.toFixed(3)} s
      Estimated load time for down switch fragment: ${k.toFixed(3)} s
      TTFB estimate: ${0 | y} ms
      Current BW estimate: ${r(v) ? 0 | v : "Unknown"} bps
      New BW estimate: ${0 | this.getBwEstimate()} bps
      Switching to level ${n} @ ${0 | U} bps`),
                                (a.nextLoadLevel = a.nextAutoLevel = n),
                                this.clearTimer();
                            let F = () => {
                                if ((this.clearTimer(), this.fragCurrent === i && this.hls.loadLevel === n && n > 0)) {
                                    let e = this.getStarvationDelay();
                                    if (
                                        (this.warn(`Aborting inflight request ${n > 0 ? "and switching down" : ""}
      Fragment duration: ${i.duration.toFixed(3)} s
      Time to underbuffer: ${e.toFixed(3)} s`),
                                        i.abortRequests(),
                                        (this.fragCurrent = this.partCurrent = null),
                                        n > f)
                                    ) {
                                        let t = this.findBestLevel(this.hls.levels[f].bitrate, f, n, 0, e, 1, 1);
                                        -1 === t && (t = f),
                                            (this.hls.nextLoadLevel = this.hls.nextAutoLevel = t),
                                            this.resetEstimator(this.hls.levels[t].bitrate);
                                    }
                                }
                            };
                            m || w > 2 * k ? F() : (this.timer = self.setInterval(F, 1e3 * k)),
                                a.trigger(u.FRAG_LOAD_EMERGENCY_ABORTED, { frag: i, part: s, stats: d });
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
                    return new w(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
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
                    this.lastLoadedFragLevel > -1 &&
                        this.fragCurrent &&
                        (this.lastLoadedFragLevel = this.fragCurrent.level),
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
                            var i;
                            (this.fragCurrent = n), (this.partCurrent = null != (i = t.part) ? i : null);
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
                                    { fragCurrent: n, partCurrent: i } = this;
                                if (e && n && e.sn === n.sn && e.level === n.level) {
                                    let t = performance.now(),
                                        n = i ? i.stats : e.stats,
                                        r = t - n.loading.start,
                                        s = n.loading.first ? n.loading.first - n.loading.start : -1;
                                    if (n.loaded && s > -1) {
                                        let e = this.bwEstimator.getEstimateTTFB();
                                        this.bwEstimator.sample(r - Math.min(e, s), n.loaded);
                                    } else this.bwEstimator.sampleTTFB(r);
                                }
                            }
                        }
                }
                getTimeToLoadFrag(e, t, n, i) {
                    let r = i ? e + this.lastLevelLoadSec : 0;
                    return e + n / t + r;
                }
                onLevelLoaded(e, t) {
                    let n = this.hls.config,
                        { loading: i } = t.stats,
                        s = i.end - i.first;
                    r(s) && (this.lastLevelLoadSec = s / 1e3),
                        t.details.live
                            ? this.bwEstimator.update(n.abrEwmaSlowLive, n.abrEwmaFastLive)
                            : this.bwEstimator.update(n.abrEwmaSlowVoD, n.abrEwmaFastVoD),
                        this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
                }
                onFragLoaded(e, { frag: t, part: n }) {
                    let i = n ? n.stats : t.stats;
                    if (
                        (t.type === O && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start),
                        !this.ignoreFragment(t))
                    ) {
                        if (
                            (this.clearTimer(),
                            t.level === this._nextAutoLevel && (this._nextAutoLevel = -1),
                            (this.firstSelection = -1),
                            this.hls.config.abrMaxWithRealBitrate)
                        ) {
                            let e = n ? n.duration : t.duration,
                                r = this.hls.levels[t.level],
                                s = (r.loaded ? r.loaded.bytes : 0) + i.loaded,
                                a = (r.loaded ? r.loaded.duration : 0) + e;
                            (r.loaded = { bytes: s, duration: a }), (r.realBitrate = Math.round((8 * s) / a));
                        }
                        if (t.bitrateTest) {
                            let e = { stats: i, frag: t, part: n, id: t.type };
                            this.onFragBuffered(u.FRAG_BUFFERED, e), (t.bitrateTest = !1);
                        } else this.lastLoadedFragLevel = t.level;
                    }
                }
                onFragBuffered(e, t) {
                    let { frag: n, part: i } = t,
                        r = null != i && i.stats.loaded ? i.stats : n.stats;
                    if (r.aborted || this.ignoreFragment(n)) return;
                    let s =
                        r.parsing.end -
                        r.loading.start -
                        Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
                    this.bwEstimator.sample(s, r.loaded),
                        (r.bwEstimate = this.getBwEstimate()),
                        n.bitrateTest ? (this.bitrateTestDelay = s / 1e3) : (this.bitrateTestDelay = 0);
                }
                ignoreFragment(e) {
                    return e.type !== O || "initSegment" === e.sn;
                }
                clearTimer() {
                    this.timer > -1 && (self.clearInterval(this.timer), (this.timer = -1));
                }
                get firstAutoLevel() {
                    let { maxAutoLevel: e, minAutoLevel: t } = this.hls,
                        n = this.getBwEstimate(),
                        i = this.hls.config.maxStarvationDelay,
                        r = this.findBestLevel(n, t, e, 0, i, 1, 1);
                    if (r > -1) return r;
                    let s = this.hls.firstLevel,
                        a = Math.min(Math.max(s, t), e);
                    return (
                        this.warn(
                            `Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${a}`,
                        ),
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
                    let i = t && n ? this.getNextABRAutoLevel() : this.firstAutoLevel;
                    if (-1 !== e) {
                        let t = this.hls.levels;
                        if (t.length > Math.max(e, i) && t[e].loadError <= t[i].loadError) return e;
                    }
                    return (this._nextAutoLevel = i), (this.nextAutoLevelKey = this.getAutoLevelKey()), i;
                }
                getAutoLevelKey() {
                    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
                }
                getNextABRAutoLevel() {
                    let { fragCurrent: e, partCurrent: t, hls: n } = this;
                    if (n.levels.length <= 1) return n.loadLevel;
                    let { maxAutoLevel: i, config: r, minAutoLevel: s } = n,
                        a = t ? t.duration : e ? e.duration : 0,
                        o = this.getBwEstimate(),
                        l = this.getStarvationDelay(),
                        u = r.abrBandWidthFactor,
                        c = r.abrBandWidthUpFactor;
                    if (l) {
                        let e = this.findBestLevel(o, s, i, l, 0, u, c);
                        if (e >= 0) return (this.rebufferNotice = -1), e;
                    }
                    let d = a ? Math.min(a, r.maxStarvationDelay) : r.maxStarvationDelay;
                    if (!l) {
                        let e = this.bitrateTestDelay;
                        e &&
                            ((d = (a ? Math.min(a, r.maxLoadingDelay) : r.maxLoadingDelay) - e),
                            this.info(
                                `bitrate test took ${Math.round(1e3 * e)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * d)} ms`,
                            ),
                            (u = c = 1));
                    }
                    let _ = this.findBestLevel(o, s, i, l, d, u, c);
                    if (
                        (this.rebufferNotice !== _ &&
                            ((this.rebufferNotice = _),
                            this.info(`${l ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${_}`)),
                        _ > -1)
                    )
                        return _;
                    let h = n.levels[s],
                        f = n.loadLevelObj;
                    return f && (null == h ? void 0 : h.bitrate) < f.bitrate ? s : n.loadLevel;
                }
                getStarvationDelay() {
                    let e = this.hls,
                        t = e.media;
                    if (!t) return 1 / 0;
                    let n = t && 0 !== t.playbackRate ? Math.abs(t.playbackRate) : 1,
                        i = e.mainForwardBufferInfo;
                    return (i ? i.len : 0) / n;
                }
                getBwEstimate() {
                    return this.bwEstimator.canEstimate()
                        ? this.bwEstimator.getEstimate()
                        : this.hls.config.abrEwmaDefaultEstimate;
                }
                findBestLevel(e, t, n, i, s, a, o) {
                    var l, u;
                    let c,
                        d = i + s,
                        _ = this.lastLoadedFragLevel,
                        h = -1 === _ ? this.hls.firstLevel : _,
                        { fragCurrent: f, partCurrent: p } = this,
                        { levels: E, allAudioTracks: m, loadLevel: g, config: A } = this.hls;
                    if (1 === E.length) return 0;
                    let I = E[h],
                        T = !!(null != (l = this.hls.latestLevelDetails) && l.live),
                        S = -1 === g || -1 === _,
                        y = "SDR",
                        N = (null == I ? void 0 : I.frameRate) || 0,
                        { audioPreference: v, videoPreference: C } = A,
                        R = this.audioTracksByGroup || (this.audioTracksByGroup = eq(m)),
                        O = -1;
                    if (S) {
                        if (-1 !== this.firstSelection) return this.firstSelection;
                        let i = (function (e, t, n, i, s) {
                                let a = Object.keys(e),
                                    o = null == i ? void 0 : i.channels,
                                    l = null == i ? void 0 : i.audioCodec,
                                    u = null == s ? void 0 : s.videoCodec,
                                    c = o && 2 === parseInt(o),
                                    d = !1,
                                    _ = !1,
                                    h = 1 / 0,
                                    f = 1 / 0,
                                    p = 1 / 0,
                                    E = 1 / 0,
                                    m = 0,
                                    g = [],
                                    { preferHDR: A, allowedVideoRanges: I } = (function (e, t) {
                                        let n = !1,
                                            i = [];
                                        if ((e && ((n = "SDR" !== e), (i = [e])), t)) {
                                            let e =
                                                "SDR" !== (i = t.allowedVideoRanges || eH.slice(0)).join("") &&
                                                !t.videoCodec;
                                            (n =
                                                void 0 !== t.preferHDR
                                                    ? t.preferHDR
                                                    : e &&
                                                      (function () {
                                                          if ("function" == typeof matchMedia) {
                                                              let e = matchMedia("(dynamic-range: high)"),
                                                                  t = matchMedia("bad query");
                                                              if (e.media !== t.media) return !0 === e.matches;
                                                          }
                                                          return !1;
                                                      })()) || (i = ["SDR"]);
                                        }
                                        return { preferHDR: n, allowedVideoRanges: i };
                                    })(t, s);
                                for (let t = a.length; t--; ) {
                                    let n = e[a[t]];
                                    d || (d = n.channels[2] > 0),
                                        (h = Math.min(h, n.minHeight)),
                                        (f = Math.min(f, n.minFramerate)),
                                        (p = Math.min(p, n.minBitrate)),
                                        I.filter((e) => n.videoRanges[e] > 0).length > 0 && (_ = !0);
                                }
                                (h = r(h) ? h : 0), (f = r(f) ? f : 0);
                                let T = Math.max(1080, h),
                                    S = Math.max(30, f);
                                (n = Math.max((p = r(p) ? p : n), n)), _ || (t = void 0);
                                let y = a.length > 1;
                                return {
                                    codecSet: a.reduce(
                                        (t, i) => {
                                            let r = e[i];
                                            if (i === t) return t;
                                            if (((g = _ ? I.filter((e) => r.videoRanges[e] > 0) : []), y)) {
                                                if (r.minBitrate > n)
                                                    return (
                                                        ez(
                                                            i,
                                                            `min bitrate of ${r.minBitrate} > current estimate of ${n}`,
                                                        ),
                                                        t
                                                    );
                                                if (!r.hasDefaultAudio)
                                                    return (
                                                        ez(i, "no renditions with default or auto-select sound found"),
                                                        t
                                                    );
                                                if (l && i.indexOf(l.substring(0, 4)) % 5 != 0)
                                                    return ez(i, `audio codec preference "${l}" not found`), t;
                                                if (o && !c) {
                                                    if (!r.channels[o])
                                                        return (
                                                            ez(
                                                                i,
                                                                `no renditions with ${o} channel sound found (channels options: ${Object.keys(r.channels)})`,
                                                            ),
                                                            t
                                                        );
                                                } else if ((!l || c) && d && 0 === r.channels["2"])
                                                    return ez(i, "no renditions with stereo sound found"), t;
                                                if (r.minHeight > T)
                                                    return (
                                                        ez(i, `min resolution of ${r.minHeight} > maximum of ${T}`), t
                                                    );
                                                if (r.minFramerate > S)
                                                    return (
                                                        ez(i, `min framerate of ${r.minFramerate} > maximum of ${S}`), t
                                                    );
                                                if (!g.some((e) => r.videoRanges[e] > 0))
                                                    return ez(i, `no variants with VIDEO-RANGE of ${e$(g)} found`), t;
                                                if (u && i.indexOf(u.substring(0, 4)) % 5 != 0)
                                                    return ez(i, `video codec preference "${u}" not found`), t;
                                                if (r.maxScore < m)
                                                    return (
                                                        ez(i, `max score of ${r.maxScore} < selected max of ${m}`), t
                                                    );
                                            }
                                            return t && (eO(i) >= eO(t) || r.fragmentError > e[t].fragmentError)
                                                ? t
                                                : ((E = r.minIndex), (m = r.maxScore), i);
                                        },
                                        void 0,
                                    ),
                                    videoRanges: g,
                                    preferHDR: A,
                                    minFramerate: f,
                                    minBitrate: p,
                                    minIndex: E,
                                };
                            })(
                                this.codecTiers ||
                                    (this.codecTiers = E.slice(t, n + 1).reduce((e, t, n) => {
                                        if (!t.codecSet) return e;
                                        let i = t.audioGroups,
                                            r = e[t.codecSet];
                                        r ||
                                            (e[t.codecSet] = r =
                                                {
                                                    minBitrate: 1 / 0,
                                                    minHeight: 1 / 0,
                                                    minFramerate: 1 / 0,
                                                    minIndex: n,
                                                    maxScore: 0,
                                                    videoRanges: { SDR: 0 },
                                                    channels: { 2: 0 },
                                                    hasDefaultAudio: !i,
                                                    fragmentError: 0,
                                                }),
                                            (r.minBitrate = Math.min(r.minBitrate, t.bitrate));
                                        let s = Math.min(t.height, t.width);
                                        return (
                                            (r.minHeight = Math.min(r.minHeight, s)),
                                            (r.minFramerate = Math.min(r.minFramerate, t.frameRate)),
                                            (r.minIndex = Math.min(r.minIndex, n)),
                                            (r.maxScore = Math.max(r.maxScore, t.score)),
                                            (r.fragmentError += t.fragmentError),
                                            (r.videoRanges[t.videoRange] = (r.videoRanges[t.videoRange] || 0) + 1),
                                            i &&
                                                i.forEach((e) => {
                                                    if (!e) return;
                                                    let t = R.groups[e];
                                                    t &&
                                                        ((r.hasDefaultAudio =
                                                            r.hasDefaultAudio || R.hasDefaultAudio
                                                                ? t.hasDefault
                                                                : t.hasAutoSelect ||
                                                                  (!R.hasDefaultAudio && !R.hasAutoSelectAudio)),
                                                        Object.keys(t.channels).forEach((e) => {
                                                            r.channels[e] = (r.channels[e] || 0) + t.channels[e];
                                                        }));
                                                }),
                                            e
                                        );
                                    }, {})),
                                y,
                                e,
                                v,
                                C,
                            ),
                            {
                                codecSet: s,
                                videoRanges: a,
                                minFramerate: o,
                                minBitrate: l,
                                minIndex: u,
                                preferHDR: d,
                            } = i;
                        (O = u),
                            (c = s),
                            (y = d ? a[a.length - 1] : a[0]),
                            (N = o),
                            (e = Math.max(e, l)),
                            this.log(`picked start tier ${e$(i)}`);
                    } else (c = null == I ? void 0 : I.codecSet), (y = null == I ? void 0 : I.videoRange);
                    let b = p ? p.duration : f ? f.duration : 0,
                        D = this.bwEstimator.getEstimateTTFB() / 1e3,
                        L = [];
                    for (let l = n; l >= t; l--) {
                        let t,
                            f = E[l],
                            m = l > h;
                        if (!f) continue;
                        if (A.useMediaCapabilities && !f.supportedResult && !f.supportedPromise) {
                            let t = navigator.mediaCapabilities;
                            "function" == typeof (null == t ? void 0 : t.decodingInfo) &&
                            (function (e, t, n, i, s, a) {
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
                                                              let i = t.groups[n];
                                                              if (!i) throw Error(`Audio track group ${n} not found`);
                                                              Object.keys(i.channels).forEach((t) => {
                                                                  e[t] = (e[t] || 0) + i.channels[t];
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
                                        (o.split(",").some((e) => eA(e)) ||
                                            (e.width > 1920 && e.height > 1088) ||
                                            (e.height > 1920 && e.width > 1088) ||
                                            e.frameRate > Math.max(i, 30) ||
                                            ("SDR" !== e.videoRange && e.videoRange !== n) ||
                                            e.bitrate > Math.max(s, 8e6))) ||
                                    (!!_ && r(d) && Object.keys(_).some((e) => parseInt(e) > d))
                                );
                            })(f, R, y, N, e, v)
                                ? ((f.supportedPromise = eF(f, R, t, this.supportedCache)),
                                  f.supportedPromise
                                      .then((e) => {
                                          if (!this.hls) return;
                                          f.supportedResult = e;
                                          let t = this.hls.levels,
                                              n = t.indexOf(f);
                                          e.error
                                              ? this.warn(
                                                    `MediaCapabilities decodingInfo error: "${e.error}" for level ${n} ${e$(e)}`,
                                                )
                                              : e.supported
                                                ? e.decodingInfoResults.some(
                                                      (e) => !1 === e.smooth || !1 === e.powerEfficient,
                                                  ) &&
                                                  this.log(
                                                      `MediaCapabilities decodingInfo for level ${n} not smooth or powerEfficient: ${e$(e)}`,
                                                  )
                                                : (this.warn(
                                                      `Unsupported MediaCapabilities decodingInfo result for level ${n} ${e$(e)}`,
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
                                : (f.supportedResult = eU);
                        }
                        if (
                            ((c && f.codecSet !== c) ||
                                (y && f.videoRange !== y) ||
                                (m && N > f.frameRate) ||
                                (!m && N > 0 && N < f.frameRate) ||
                                (null != (u = f.supportedResult) &&
                                    null != (u = u.decodingInfoResults) &&
                                    u.some((e) => !1 === e.smooth))) &&
                            (!S || l !== O)
                        ) {
                            L.push(l);
                            continue;
                        }
                        let I = f.details,
                            C =
                                (p
                                    ? null == I
                                        ? void 0
                                        : I.partTarget
                                    : null == I
                                      ? void 0
                                      : I.averagetargetduration) || b;
                        t = m ? o * e : a * e;
                        let w = b && i >= 2 * b && 0 === s ? f.averageBitrate : f.maxBitrate,
                            M = this.getTimeToLoadFrag(D, t, w * C, void 0 === I);
                        if (
                            t >= w &&
                            (l === _ || (0 === f.loadError && 0 === f.fragmentError)) &&
                            (M <= D || !r(M) || (T && !this.bitrateTestDelay) || M < d)
                        ) {
                            let e = this.forcedAutoLevel;
                            return (
                                l !== g &&
                                    (-1 === e || e !== g) &&
                                    (L.length &&
                                        this.trace(
                                            `Skipped level(s) ${L.join(",")} of ${n} max with CODECS and VIDEO-RANGE:"${E[L[0]].codecs}" ${E[L[0]].videoRange}; not compatible with "${c}" ${y}`,
                                        ),
                                    this.info(
                                        `switch candidate:${h}->${l} adjustedbw(${Math.round(t)})-bitrate=${Math.round(t - w)} ttfb:${D.toFixed(1)} avgDuration:${C.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${M.toFixed(1)} firstSelection:${S} codecSet:${f.codecSet} videoRange:${f.videoRange} hls.loadLevel:${g}`,
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
            },
            bufferController: class extends k {
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
                            e !== t &&
                                this.error(`Media element src was set while attaching MediaSource (${t} > ${e})`);
                        }),
                        (this.hls = e),
                        (this.fragmentTracker = t),
                        (this.appendSource = (function (e) {
                            return "u" > typeof self && e === self.ManagedMediaSource;
                        })(H(e.config.preferManagedMediaSource))),
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
                    let i = this.transferData;
                    return (
                        !this.sourceBufferCount && i && i.mediaSource === t
                            ? M(n, i.tracks)
                            : this.sourceBuffers.forEach((e) => {
                                  let [t] = e;
                                  t && ((n[t] = M({}, this.tracks[t])), this.removeBuffer(t)), (e[0] = e[1] = null);
                              }),
                        { media: e, mediaSource: t, tracks: n }
                    );
                }
                initTracks() {
                    (this.sourceBuffers = [
                        [null, null],
                        [null, null],
                    ]),
                        (this.tracks = {}),
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
                    let i = 2;
                    ((!t.audio || t.video) && t.altAudio) || (i = 1),
                        (this.bufferCodecEventsTotal = i),
                        this.log(`${i} bufferCodec event(s) expected.`),
                        null != (n = this.transferData) &&
                            n.mediaSource &&
                            this.sourceBufferCount &&
                            i &&
                            this.bufferCreated();
                }
                onMediaAttaching(e, t) {
                    let n = (this.media = t.media);
                    this.transferData = this.overrides = void 0;
                    let i = H(this.appendSource);
                    if (i) {
                        let e = !!t.mediaSource;
                        (e || t.overrides) && ((this.transferData = t), (this.overrides = t.overrides));
                        let a = (this.mediaSource = t.mediaSource || new i());
                        if ((this.assignMediaSource(a), e)) (this._objectUrl = n.src), this.attachTransferred();
                        else {
                            let e = (this._objectUrl = self.URL.createObjectURL(a));
                            if (this.appendSource)
                                try {
                                    var r, s;
                                    let t;
                                    n.removeAttribute("src");
                                    let i = self.ManagedMediaSource;
                                    (n.disableRemotePlayback = n.disableRemotePlayback || (i && a instanceof i)),
                                        i0(n),
                                        (r = n),
                                        (s = e),
                                        ((t = self.document.createElement("source")).type = "video/mp4"),
                                        (t.src = s),
                                        r.appendChild(t),
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
                        i = t.tracks,
                        r = i ? Object.keys(i) : null,
                        s = r ? r.length : 0,
                        a = () => {
                            Promise.resolve().then(() => {
                                this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
                            });
                        };
                    if (i && r && s) {
                        if (!this.tracksReady) {
                            (this.hls.config.startFragPrefetch = !0),
                                this.log("attachTransferred: waiting for SourceBuffer track info");
                            return;
                        }
                        if (
                            (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${e$(n, (e, t) => ("initSegment" === e ? void 0 : t))};
transfer tracks: ${e$(i, (e, t) => ("initSegment" === e ? void 0 : t))}}`),
                            !j(i, n))
                        ) {
                            (t.mediaSource = null), (t.tracks = void 0);
                            let r = e.currentTime,
                                s = this.details,
                                a = Math.max(r, (null == s ? void 0 : s.fragments[0].start) || 0);
                            return a - r > 1
                                ? void this.log(
                                      `attachTransferred: waiting for playback to reach new tracks start time ${r} -> ${a}`,
                                  )
                                : (this.warn(
                                      `attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(i)}"->"${Object.keys(n)}") start time: ${a} currentTime: ${r}`,
                                  ),
                                  this.onMediaDetaching(u.MEDIA_DETACHING, {}),
                                  this.onMediaAttaching(u.MEDIA_ATTACHING, t),
                                  void (e.currentTime = a));
                        }
                        (this.transferData = void 0),
                            r.forEach((e) => {
                                let t = i[e];
                                if (t) {
                                    let n = t.buffer;
                                    if (n) {
                                        let i = this.fragmentTracker,
                                            r = t.id;
                                        if (i.hasFragments(r) || i.hasParts(r)) {
                                            let t = tN.getBuffered(n);
                                            i.detectEvictedFragments(e, t, r, null, !0);
                                        }
                                        let s = i1(e),
                                            a = [e, n];
                                        (this.sourceBuffers[s] = a),
                                            n.updating && this.operationQueue && this.operationQueue.prependBlocker(e),
                                            this.trackSourceBuffer(e, t);
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
                    let { media: i, mediaSource: r, _objectUrl: s } = this;
                    if (r) {
                        if ((this.log(`media source ${n ? "transferring" : "detaching"}`), n))
                            this.sourceBuffers.forEach(([e]) => {
                                e && this.removeBuffer(e);
                            }),
                                this.resetQueue();
                        else {
                            if (this.mediaSourceOpenOrEnded) {
                                let e = "open" === r.readyState;
                                try {
                                    let t = r.sourceBuffers;
                                    for (let n = t.length; n--; ) e && t[n].abort(), r.removeSourceBuffer(t[n]);
                                    e && r.endOfStream();
                                } catch (e) {
                                    this.warn(`onMediaDetaching: ${e.message} while calling endOfStream`);
                                }
                            }
                            this.sourceBufferCount && this.onBufferReset();
                        }
                        r.removeEventListener("sourceopen", this._onMediaSourceOpen),
                            r.removeEventListener("sourceended", this._onMediaSourceEnded),
                            r.removeEventListener("sourceclose", this._onMediaSourceClose),
                            this.appendSource &&
                                (r.removeEventListener("startstreaming", this._onStartStreaming),
                                r.removeEventListener("endstreaming", this._onEndStreaming)),
                            (this.mediaSource = null),
                            (this._objectUrl = null);
                    }
                    i &&
                        (i.removeEventListener("emptied", this._onMediaEmptied),
                        n ||
                            (s && self.URL.revokeObjectURL(s),
                            this.mediaSrc === s
                                ? (i.removeAttribute("src"), this.appendSource && i0(i), i.load())
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
                    let i = null == (t = this.tracks[e]) ? void 0 : t.buffer;
                    if ((this.removeBuffer(e), i))
                        try {
                            null != (n = this.mediaSource) &&
                                n.sourceBuffers.length &&
                                this.mediaSource.removeSourceBuffer(i);
                        } catch (t) {
                            this.warn(`onBufferReset ${e}`, t);
                        }
                    delete this.tracks[e];
                }
                removeBuffer(e) {
                    this.removeBufferListeners(e), (this.sourceBuffers[i1(e)] = [null, null]);
                    let t = this.tracks[e];
                    t && (t.buffer = void 0);
                }
                resetQueue() {
                    this.operationQueue && this.operationQueue.destroy(), (this.operationQueue = new iX(this.tracks));
                }
                onBufferCodecs(e, t) {
                    var n;
                    let i = this.tracks,
                        r = Object.keys(t);
                    this.log(`BUFFER_CODECS: "${r}" (current SB count ${this.sourceBufferCount})`);
                    let s =
                            ("audiovideo" in t && (i.audio || i.video)) ||
                            (i.audiovideo && ("audio" in t || "video" in t)),
                        a = !s && this.sourceBufferCount && this.media && r.some((e) => !i[e]);
                    s || a
                        ? this.warn(`Unsupported transition between "${Object.keys(i)}" and "${r}" SourceBuffers`)
                        : (r.forEach((e) => {
                              var n, r;
                              let { id: s, codec: a, levelCodec: o, container: l, metadata: u, supplemental: c } = t[e],
                                  d = i[e],
                                  _ = null == (n = this.transferData) || null == (n = n.tracks) ? void 0 : n[e],
                                  h = null != _ && _.buffer ? _ : d,
                                  f = (null == h ? void 0 : h.pendingCodec) || (null == h ? void 0 : h.codec),
                                  p = null == h ? void 0 : h.levelCodec;
                              d ||
                                  (d = i[e] =
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
                              let E = ew(f, p),
                                  m = null == E ? void 0 : E.replace(iZ, "$1"),
                                  g = ew(a, o),
                                  A = null == (r = g) ? void 0 : r.replace(iZ, "$1");
                              g &&
                                  E &&
                                  m !== A &&
                                  ("audio" === e.slice(0, 5) && (g = eL(g, this.appendSource)),
                                  this.log(`switching codec ${f} to ${g}`),
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
                        return (
                            (e[t] = { id: n.id, container: n.container, codec: n.codec, levelCodec: n.levelCodec }), e
                        );
                    }, {});
                }
                appendChangeType(e, t, n) {
                    let i = `${t};codecs=${n}`,
                        r = {
                            label: `change-type=${i}`,
                            execute: () => {
                                let r = this.tracks[e];
                                if (r) {
                                    let s = r.buffer;
                                    null != s &&
                                        s.changeType &&
                                        (this.log(`changing ${e} sourceBuffer type to ${i}`),
                                        s.changeType(i),
                                        (r.codec = n),
                                        (r.container = t));
                                }
                                this.shiftAndExecuteNext(e);
                            },
                            onStart: () => {},
                            onComplete: () => {},
                            onError: (t) => {
                                this.warn(`Failed to change ${e} SourceBuffer type`, t);
                            },
                        };
                    this.append(r, e, this.isPending(this.tracks[e]));
                }
                blockAudio(e) {
                    var t;
                    let n = e.start,
                        i = n + 0.05 * e.duration;
                    if ((null == (t = this.fragmentTracker.getAppendedFrag(n, O)) ? void 0 : t.gap) === !0) return;
                    let r = {
                        label: "block-audio",
                        execute: () => {
                            var e;
                            let t = this.tracks.video;
                            (this.lastVideoAppendEnd > i ||
                                (null != t && t.buffer && tN.isBuffered(t.buffer, i)) ||
                                (null == (e = this.fragmentTracker.getAppendedFrag(i, O)) ? void 0 : e.gap) === !0) &&
                                ((this.blockedAudioAppend = null), this.shiftAndExecuteNext("audio"));
                        },
                        onStart: () => {},
                        onComplete: () => {},
                        onError: (e) => {
                            this.warn("Error executing block-audio operation", e);
                        },
                    };
                    (this.blockedAudioAppend = { op: r, frag: e }), this.append(r, "audio", !0);
                }
                unblockAudio() {
                    let { blockedAudioAppend: e, operationQueue: t } = this;
                    e && t && ((this.blockedAudioAppend = null), t.unblockAudio(e.op));
                }
                onBufferAppending(e, t) {
                    let { tracks: n } = this,
                        { data: i, type: s, parent: a, frag: c, part: d, chunkMeta: _, offset: h } = t,
                        f = _.buffering[s],
                        { sn: p, cc: E } = c,
                        m = self.performance.now();
                    f.start = m;
                    let g = c.stats.buffering,
                        A = d ? d.stats.buffering : null;
                    0 === g.start && (g.start = m), A && 0 === A.start && (A.start = m);
                    let I = n.audio,
                        T = !1;
                    "audio" === s &&
                        (null == I ? void 0 : I.container) === "audio/mpeg" &&
                        ((T = !this.lastMpegAudioChunk || 1 === _.id || this.lastMpegAudioChunk.sn !== _.sn),
                        (this.lastMpegAudioChunk = _));
                    let S = n.video,
                        y = null == S ? void 0 : S.buffer;
                    if (y && "initSegment" !== p) {
                        let e = d || c,
                            t = this.blockedAudioAppend;
                        if ("audio" !== s || "main" === a || this.blockedAudioAppend || S.ending || S.ended) {
                            if ("video" === s) {
                                let n = e.end;
                                if (t) {
                                    let e = t.frag.start;
                                    (n > e || n < this.lastVideoAppendEnd || tN.isBuffered(y, e)) &&
                                        this.unblockAudio();
                                }
                                this.lastVideoAppendEnd = n;
                            }
                        } else {
                            let t = e.start + 0.05 * e.duration,
                                n = y.buffered,
                                i = this.currentOp("video");
                            ((n.length || i) && (i || tN.isBuffered(y, t) || !(this.lastVideoAppendEnd < t))) ||
                                this.blockAudio(e);
                        }
                    }
                    let N = (d || c).start,
                        v = {
                            label: `append-${s}`,
                            execute: () => {
                                var e;
                                f.executeStart = self.performance.now();
                                let t = null == (e = this.tracks[s]) ? void 0 : e.buffer;
                                t &&
                                    (T
                                        ? this.updateTimestampOffset(t, N, 0.1, s, p, E)
                                        : void 0 !== h && r(h) && this.updateTimestampOffset(t, h, 1e-6, s, p, E)),
                                    this.appendExecutor(i, s);
                            },
                            onStart: () => {},
                            onComplete: () => {
                                let e = self.performance.now();
                                (f.executeEnd = f.end = e),
                                    0 === g.first && (g.first = e),
                                    A && 0 === A.first && (A.first = e);
                                let t = {};
                                this.sourceBuffers.forEach(([e, n]) => {
                                    e && (t[e] = tN.getBuffered(n));
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
                                    i = null == (t = this.media) ? void 0 : t.error;
                                if (
                                    e.code === DOMException.QUOTA_EXCEEDED_ERR ||
                                    "QuotaExceededError" == e.name ||
                                    "quota" in e
                                )
                                    n.details = l.BUFFER_FULL_ERROR;
                                else if (e.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !i)
                                    n.errorAction = tr(!0);
                                else if (e.name === iQ && 0 === this.sourceBufferCount) n.errorAction = tr(!0);
                                else {
                                    let e = ++this.appendErrors[s];
                                    this.warn(
                                        `Failed ${e}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${s}" sourceBuffer (${i || "no media error"})`,
                                    ),
                                        (e >= this.hls.config.appendErrorMaxRetry || i) && (n.fatal = !0);
                                }
                                this.hls.trigger(u.ERROR, n);
                            },
                        };
                    this.log(
                        `queuing "${s}" append sn: ${p}${d ? " p: " + d.index : ""} of ${c.type === O ? "level" : "track"} ${c.level} cc: ${E}`,
                    ),
                        this.append(v, s, this.isPending(this.tracks[s]));
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
                            onError: (i) => {
                                this.warn(`Failed to remove ${t}-${n} from "${e}" SourceBuffer`, i);
                            },
                        }
                    );
                }
                onBufferFlushing(e, t) {
                    let { type: n, startOffset: i, endOffset: r } = t;
                    n
                        ? this.append(this.getFlushOp(n, i, r), n)
                        : this.sourceBuffers.forEach(([e]) => {
                              e && this.append(this.getFlushOp(e, i, r), e);
                          });
                }
                onFragParsed(e, t) {
                    let { frag: n, part: i } = t,
                        r = [],
                        s = i ? i.elementaryStreams : n.elementaryStreams;
                    s[Q] ? r.push("audiovideo") : (s[X] && r.push("audio"), s[Z] && r.push("video"));
                    let a = () => {
                        let e = self.performance.now();
                        (n.stats.buffering.end = e), i && (i.stats.buffering.end = e);
                        let t = i ? i.stats : n.stats;
                        this.hls.trigger(u.FRAG_BUFFERED, { frag: n, part: i, stats: t, id: n.type });
                    };
                    0 === r.length &&
                        this.warn(
                            `Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`,
                        ),
                        this.blockBuffers(a, r).catch((e) => {
                            this.warn(`Fragment buffered callback ${e}`),
                                this.stepOperationQueue(this.sourceBufferTypes);
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
                    let i = (null == (n = this.overrides) ? void 0 : n.endOfStream) !== !1;
                    this.sourceBufferCount > 0 &&
                    !this.sourceBuffers.some(([e]) => {
                        var t;
                        return e && !(null != (t = this.tracks[e]) && t.ended);
                    })
                        ? i
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
                        r(e) && e !== t.frag.level && this.resetAppendErrors();
                    }
                }
                resetAppendErrors() {
                    this.appendErrors = { audio: 0, video: 0, audiovideo: 0 };
                }
                trimBuffers() {
                    let { hls: e, details: t, media: n } = this;
                    if (!n || null === t || !this.sourceBufferCount) return;
                    let i = e.config,
                        s = n.currentTime,
                        a = t.levelTargetDuration,
                        o = t.live && null !== i.liveBackBufferLength ? i.liveBackBufferLength : i.backBufferLength;
                    if (r(o) && o >= 0) {
                        let e = Math.max(o, a),
                            t = Math.floor(s / a) * a - e;
                        this.flushBackBuffer(s, a, t);
                    }
                    let l = i.frontBufferFlushThreshold;
                    if (r(l) && l > 0) {
                        let e = Math.max(Math.max(i.maxBufferLength, l), a),
                            t = Math.floor(s / a) * a + e;
                        this.flushFrontBuffer(s, a, t);
                    }
                }
                flushBackBuffer(e, t, n) {
                    this.sourceBuffers.forEach(([e, t]) => {
                        if (t) {
                            let r = tN.getBuffered(t);
                            if (r.length > 0 && n > r.start(0)) {
                                var i;
                                this.hls.trigger(u.BACK_BUFFER_REACHED, { bufferEnd: n });
                                let t = this.tracks[e];
                                if (null != (i = this.details) && i.live)
                                    this.hls.trigger(u.LIVE_BACK_BUFFER_REACHED, { bufferEnd: n });
                                else if (null != t && t.ended)
                                    return void this.log(
                                        `Cannot flush ${e} back buffer while SourceBuffer is in ended state`,
                                    );
                                this.hls.trigger(u.BUFFER_FLUSHING, { startOffset: 0, endOffset: n, type: e });
                            }
                        }
                    });
                }
                flushFrontBuffer(e, t, n) {
                    this.sourceBuffers.forEach(([t, i]) => {
                        if (i) {
                            let r = tN.getBuffered(i),
                                s = r.length;
                            if (s < 2) return;
                            let a = r.start(s - 1),
                                o = r.end(s - 1);
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
                    let i = t.edge;
                    if (t.live && this.hls.config.liveDurationInfinity) {
                        if (t.fragments.length && n.setLiveSeekableRange) {
                            let e = Math.max(0, t.fragmentStart),
                                n = Math.max(e, i);
                            return { duration: 1 / 0, start: e, end: n };
                        }
                        return { duration: 1 / 0 };
                    }
                    let s = null == (e = this.overrides) ? void 0 : e.duration;
                    if (s) return r(s) ? { duration: s } : null;
                    let a = this.media.duration;
                    return (i > (r(n.duration) ? n.duration : 0) && i > a) || !r(a) ? { duration: i } : null;
                }
                updateMediaSource({ duration: e, start: t, end: n }) {
                    let i = this.mediaSource;
                    this.media &&
                        i &&
                        "open" === i.readyState &&
                        (i.duration !== e &&
                            (r(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), (i.duration = e)),
                        void 0 !== t &&
                            void 0 !== n &&
                            (this.log(
                                `MediaSource duration is set to ${i.duration}. Setting seekable range to ${t}-${n}.`,
                            ),
                            i.setLiveSeekableRange(t, n)));
                }
                get tracksReady() {
                    let e = this.pendingTrackCount;
                    return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
                }
                checkPendingTracks() {
                    let { bufferCodecEventsTotal: e, pendingTrackCount: t, tracks: n } = this;
                    if (
                        (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${e$(n)}`),
                        this.tracksReady)
                    ) {
                        var i;
                        let e = null == (i = this.transferData) ? void 0 : i.tracks;
                        e && Object.keys(e).length ? this.attachTransferred() : this.createSourceBuffers();
                    }
                }
                bufferCreated() {
                    if (this.sourceBufferCount) {
                        let e = {};
                        this.sourceBuffers.forEach(([t, n]) => {
                            if (t) {
                                let i = this.tracks[t];
                                e[t] = {
                                    buffer: n,
                                    container: i.container,
                                    codec: i.codec,
                                    supplemental: i.supplemental,
                                    levelCodec: i.levelCodec,
                                    id: i.id,
                                    metadata: i.metadata,
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
                    for (let r in e) {
                        let s = e[r];
                        if (this.isPending(s)) {
                            let e = this.getTrackCodec(s, r),
                                a = `${s.container};codecs=${e}`;
                            (s.codec = e),
                                this.log(`creating sourceBuffer(${a})${this.currentOp(r) ? " Queued" : ""} ${e$(s)}`);
                            try {
                                let e = n.addSourceBuffer(a),
                                    i = i1(r),
                                    o = [r, e];
                                (t[i] = o), (s.buffer = e);
                            } catch (e) {
                                var i;
                                this.error(`error while trying to add sourceBuffer: ${e.message}`),
                                    this.shiftAndExecuteNext(r),
                                    null == (i = this.operationQueue) || i.removeBlockers(),
                                    delete this.tracks[r],
                                    this.hls.trigger(u.ERROR, {
                                        type: o.MEDIA_ERROR,
                                        details: l.BUFFER_ADD_CODEC_ERROR,
                                        fatal: !1,
                                        error: e,
                                        sourceBufferName: r,
                                        mimeType: a,
                                        parent: s.id,
                                    });
                                return;
                            }
                            this.trackSourceBuffer(r, s);
                        }
                    }
                    this.bufferCreated();
                }
                getTrackCodec(e, t) {
                    let n = e.supplemental,
                        i = e.codec;
                    n &&
                        ("video" === t || "audiovideo" === t) &&
                        eN(n, "video") &&
                        (i = (function (e, t) {
                            let n = [];
                            if (e) {
                                let t = e.split(",");
                                for (let e = 0; e < t.length; e++) ey(t[e], "video") || n.push(t[e]);
                            }
                            return t && n.push(t), n.join(",");
                        })(i, n));
                    let r = ew(i, e.levelCodec);
                    return r ? ("audio" === t.slice(0, 5) ? eL(r, this.appendSource) : r) : "";
                }
                trackSourceBuffer(e, t) {
                    let n = t.buffer;
                    if (!n) return;
                    let i = this.getTrackCodec(t, e);
                    (this.tracks[e] = {
                        buffer: n,
                        codec: i,
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
                        (null == (e = this.media) || null == (t = e.querySelector) ? void 0 : t.call(e, "source")) ||
                        this.media;
                    return null == n ? void 0 : n.src;
                }
                onSBUpdateStart(e) {
                    let t = this.currentOp(e);
                    t && t.onStart();
                }
                onSBUpdateEnd(e) {
                    var t;
                    if ((null == (t = this.mediaSource) ? void 0 : t.readyState) === "closed")
                        return void this.resetBuffer(e);
                    let n = this.currentOp(e);
                    n && (n.onComplete(), this.shiftAndExecuteNext(e));
                }
                onSBUpdateError(e, t) {
                    var n;
                    let i = Error(
                        `${e} SourceBuffer error. MediaSource readyState: ${null == ((n = this.mediaSource)) ? void 0 : n.readyState}`,
                    );
                    this.error(`${i}`, t),
                        this.hls.trigger(u.ERROR, {
                            type: o.MEDIA_ERROR,
                            details: l.BUFFER_APPENDING_ERROR,
                            sourceBufferName: e,
                            error: i,
                            fatal: !1,
                        });
                    let r = this.currentOp(e);
                    r && r.onError(i);
                }
                updateTimestampOffset(e, t, n, i, r, s) {
                    Math.abs(t - e.timestampOffset) >= n &&
                        (this.log(`Updating ${i} SourceBuffer timestampOffset to ${t} (sn: ${r} cc: ${s})`),
                        (e.timestampOffset = t));
                }
                removeExecutor(e, t, n) {
                    let { media: i, mediaSource: s } = this,
                        a = this.tracks[e],
                        o = null == a ? void 0 : a.buffer;
                    if (!i || !s || !o) {
                        this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),
                            this.shiftAndExecuteNext(e);
                        return;
                    }
                    let l = r(i.duration) ? i.duration : 1 / 0,
                        u = r(s.duration) ? s.duration : 1 / 0,
                        c = Math.max(0, t),
                        d = Math.min(n, l, u);
                    d > c && (!a.ending || a.ended)
                        ? ((a.ended = !1), this.log(`Removing [${c},${d}] from the ${e} SourceBuffer`), o.remove(c, d))
                        : this.shiftAndExecuteNext(e);
                }
                appendExecutor(e, t) {
                    let n = this.tracks[t],
                        i = null == n ? void 0 : n.buffer;
                    if (!i) throw new iJ(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
                    (n.ending = !1), (n.ended = !1), i.appendBuffer(e);
                }
                blockUntilOpen(e) {
                    if (this.isUpdating() || this.isQueued())
                        this.blockBuffers(e).catch((e) => {
                            this.warn(`SourceBuffer blocked callback ${e}`),
                                this.stepOperationQueue(this.sourceBufferTypes);
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
                        return (
                            this.log("Blocking operation requested, but no SourceBuffers exist"),
                            Promise.resolve().then(e)
                        );
                    let { operationQueue: n } = this,
                        i = t.map((e) => this.appendBlocker(e));
                    return (
                        t.length > 1 && this.blockedAudioAppend && this.unblockAudio(),
                        Promise.all(i).then((t) => {
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
                    let i = this.tracks[e];
                    if (!i) return;
                    let r = i.buffer;
                    if (!r) return;
                    let s = n.bind(this, e);
                    i.listeners.push({ event: t, listener: s }), r.addEventListener(t, s);
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
            },
            capLevelController: i2,
            errorController: class extends k {
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
                    return (null == e ? void 0 : e.type) === O ? e.level : this.getVariantIndex();
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
                        let i = e.audioGroups;
                        if (i)
                            return this.hls.allAudioTracks
                                .filter((e) => i.indexOf(e.groupId) >= 0)
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
                    var n, i, r;
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
                                t.errorAction = tr();
                                return;
                            }
                        case l.FRAG_GAP:
                        case l.FRAG_DECRYPT_ERROR:
                            (t.errorAction = this.getFragRetryOrSwitchAction(t)), (t.errorAction.action = 2);
                            return;
                        case l.LEVEL_EMPTY_ERROR:
                        case l.LEVEL_PARSING_ERROR:
                            {
                                let e = t.parent === O ? t.level : s.loadLevel;
                                t.details === l.LEVEL_EMPTY_ERROR &&
                                null != (i = t.context) &&
                                null != (i = i.levelDetails) &&
                                i.live
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
                                    ((a.type === C && e.hasAudioGroup(a.groupId)) ||
                                        (a.type === R && e.hasSubtitleGroup(a.groupId))) &&
                                    ((t.errorAction = this.getPlaylistRetryOrSwitchAction(t, s.loadLevel)),
                                    (t.errorAction.action = 2),
                                    (t.errorAction.flags = 1));
                            }
                            return;
                        case l.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                            t.errorAction = { action: 2, flags: 2 };
                            return;
                        case l.KEY_SYSTEM_SESSION_UPDATE_FAILED:
                        case l.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
                        case l.KEY_SYSTEM_NO_SESSION:
                            t.errorAction = { action: 2, flags: 4 };
                            return;
                        case l.BUFFER_ADD_CODEC_ERROR:
                        case l.REMUX_ALLOC_ERROR:
                        case l.BUFFER_APPEND_ERROR:
                            t.errorAction ||
                                (t.errorAction = this.getLevelSwitchAction(t, null != (r = t.level) ? r : s.loadLevel));
                            return;
                        case l.INTERNAL_EXCEPTION:
                        case l.BUFFER_APPENDING_ERROR:
                        case l.BUFFER_FULL_ERROR:
                        case l.LEVEL_SWITCH_ERROR:
                        case l.BUFFER_STALLED_ERROR:
                        case l.BUFFER_SEEK_OVER_HOLE:
                        case l.BUFFER_NUDGE_ON_STALL:
                            t.errorAction = tr();
                            return;
                    }
                    t.type === o.KEY_SYSTEM_ERROR && ((t.levelRetry = !1), (t.errorAction = tr()));
                }
                getPlaylistRetryOrSwitchAction(e, t) {
                    let n = e9(this.hls.config.playlistLoadPolicy, e),
                        i = this.playlistError++;
                    if (tn(n, i, e5(e), e.response)) return { action: 5, flags: 0, retryConfig: n, retryCount: i };
                    let r = this.getLevelSwitchAction(e, t);
                    return n && ((r.retryConfig = n), (r.retryCount = i)), r;
                }
                getFragRetryOrSwitchAction(e) {
                    let t = this.hls,
                        n = this.getVariantLevelIndex(e.frag),
                        i = t.levels[n],
                        { fragLoadPolicy: r, keyLoadPolicy: s } = t.config,
                        a = e9(e7(e) ? s : r, e),
                        o = t.levels.reduce((e, t) => e + t.fragmentError, 0);
                    if (i && (e.details !== l.FRAG_GAP && i.fragmentError++, !e8(e)) && tn(a, o, e5(e), e.response))
                        return { action: 5, flags: 0, retryConfig: a, retryCount: o };
                    let u = this.getLevelSwitchAction(e, n);
                    return a && ((u.retryConfig = a), (u.retryCount = o)), u;
                }
                getLevelSwitchAction(e, t) {
                    let n = this.hls;
                    null == t && (t = n.loadLevel);
                    let i = this.hls.levels[t];
                    if (i) {
                        var r, s, a, o;
                        let t = e.details;
                        i.loadError++, t === l.BUFFER_APPEND_ERROR && i.fragmentError++;
                        let u = -1,
                            { levels: c, loadLevel: d, minAutoLevel: _, maxAutoLevel: h } = n;
                        n.autoLevelEnabled || n.config.preserveManualLevelOnError || (n.loadLevel = -1);
                        let f = null == (r = e.frag) ? void 0 : r.type,
                            p =
                                ((f === b && t === l.FRAG_PARSING_ERROR) ||
                                    ("audio" === e.sourceBufferName &&
                                        (t === l.BUFFER_ADD_CODEC_ERROR || t === l.BUFFER_APPEND_ERROR))) &&
                                c.some(({ audioCodec: e }) => i.audioCodec !== e),
                            E =
                                "video" === e.sourceBufferName &&
                                (t === l.BUFFER_ADD_CODEC_ERROR || t === l.BUFFER_APPEND_ERROR) &&
                                c.some(({ codecSet: e, audioCodec: t }) => i.codecSet !== e && i.audioCodec === t),
                            { type: m, groupId: g } = null != (s = e.context) ? s : {};
                        for (let n = c.length; n--; ) {
                            let r = (n + d) % c.length;
                            if (r !== d && r >= _ && r <= h && 0 === c[r].loadError) {
                                let n = c[r];
                                if (t === l.FRAG_GAP && f === O && e.frag) {
                                    let t = c[r].details;
                                    if (t) {
                                        let n = e3(e.frag, t.fragments, e.frag.start);
                                        if (null != n && n.gap) continue;
                                    }
                                } else if ((m === C && n.hasAudioGroup(g)) || (m === R && n.hasSubtitleGroup(g)))
                                    continue;
                                else if (
                                    (f === b && null != (a = i.audioGroups) && a.some((e) => n.hasAudioGroup(e))) ||
                                    (f === D &&
                                        null != (o = i.subtitleGroups) &&
                                        o.some((e) => n.hasSubtitleGroup(e))) ||
                                    (p && i.audioCodec === n.audioCodec) ||
                                    (E && i.codecSet === n.codecSet) ||
                                    (!p && i.codecSet !== n.codecSet)
                                )
                                    continue;
                                u = r;
                                break;
                            }
                        }
                        if (u > -1 && n.loadLevel !== u)
                            return (
                                (e.levelRetry = !0), (this.playlistError = 0), { action: 2, flags: 0, nextAutoLevel: u }
                            );
                    }
                    return { action: 2, flags: 1 };
                }
                onErrorOut(e, t) {
                    var n;
                    switch (null == (n = t.errorAction) ? void 0 : n.action) {
                        case 0:
                            break;
                        case 2:
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
                    let { flags: i } = n,
                        r = n.nextAutoLevel;
                    switch (i) {
                        case 0:
                            this.switchLevel(e, r);
                            break;
                        case 2: {
                            let i = this.getVariantLevelIndex(e.frag),
                                r = t.levels[i],
                                s = null == r ? void 0 : r.attrs["HDCP-LEVEL"];
                            if (((n.hdcpLevel = s), "NONE" === s))
                                this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
                            else if (s) {
                                (t.maxHdcpLevel = eB[eB.indexOf(s) - 1]),
                                    (n.resolved = !0),
                                    this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
                                break;
                            }
                        }
                        case 4: {
                            let t = e.decryptdata;
                            if (t) {
                                let i = this.hls.levels,
                                    r = i.length;
                                for (let n = r; n--; )
                                    if (this.variantHasKey(i[n], t)) {
                                        var s, a;
                                        this.log(
                                            `Banned key found in level ${n} (${i[n].bitrate}bps) or audio group "${null == ((s = i[n].audioGroups)) ? void 0 : s.join(",")}" (${null == ((a = e.frag)) ? void 0 : a.type} fragment) ${W(t.keyId || [])}`,
                                        ),
                                            i[n].fragmentError++,
                                            i[n].loadError++,
                                            this.log(`Removing level ${n} with key error (${e.error})`),
                                            this.hls.removeLevel(n);
                                    }
                                let o = e.frag;
                                if (this.hls.levels.length < r) n.resolved = !0;
                                else if (o && o.type !== O) {
                                    let e = o.decryptdata;
                                    e && !t.matches(e) && (n.resolved = !0);
                                }
                            }
                        }
                    }
                    n.resolved || this.switchLevel(e, r);
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
                        let t = ex(e.mimeType),
                            n = this.hls.levels;
                        for (let i = n.length; i--; )
                            n[i][`${e.sourceBufferName}Codec`] === t &&
                                (this.log(`Removing level ${i} for ${e.details} ("${t}" not supported)`),
                                this.hls.removeLevel(i));
                    }
                }
            },
            fpsController: class {
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
                            e &&
                                "function" == typeof e.getVideoPlaybackQuality &&
                                (this.isVideoPlaybackQualityAvailable = !0),
                            self.clearInterval(this.timer),
                            (this.timer = self.setInterval(
                                this.checkFPSInterval.bind(this),
                                n.fpsDroppedMonitoringPeriod,
                            ));
                    }
                }
                onMediaDetaching() {
                    this.media = null;
                }
                checkFPS(e, t, n) {
                    let i = performance.now();
                    if (t) {
                        if (this.lastTime) {
                            let e = i - this.lastTime,
                                r = n - this.lastDroppedFrames,
                                s = t - this.lastDecodedFrames,
                                a = (1e3 * r) / e,
                                o = this.hls;
                            if (
                                (o.trigger(u.FPS_DROP, { currentDropped: r, currentDecoded: s, totalDroppedFrames: n }),
                                a > 0 && r > o.config.fpsDroppedMonitoringThreshold * s)
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
                        (this.lastTime = i), (this.lastDroppedFrames = n), (this.lastDecodedFrames = t);
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
            },
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
            requestMediaKeySystemAccessFunc: tQ,
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
        {
            cueHandler: sM,
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
        },
    ),
    {},
    {
        subtitleStreamController: class extends nG {
            constructor(e, t, n) {
                super(e, t, n, "subtitle-stream-controller", D),
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
                    (this.state = nR),
                    this.setInterval(500),
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
                    { frag: i, success: r } = t;
                if ((this.fragContextChanged(i) || (ee(i) && (this.fragPrevious = i), (this.state = nR)), !r)) return;
                let s = this.tracksBuffered[this.currentTrackId];
                if (!s) return;
                let a = i.start;
                for (let e = 0; e < s.length; e++)
                    if (a >= s[e].start && a <= s[e].end) {
                        n = s[e];
                        break;
                    }
                let o = i.start + i.duration;
                n ? (n.end = o) : ((n = { start: a, end: o }), s.push(n)),
                    this.fragmentTracker.fragBuffered(i),
                    this.fragBufferedComplete(i, null),
                    this.media && this.tick();
            }
            onBufferFlushing(e, t) {
                let { startOffset: n, endOffset: i } = t;
                if (0 === n && i !== 1 / 0) {
                    let e = i - 1;
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
                        this.fragmentTracker.removeFragmentsInRange(n, e, D);
                }
            }
            onError(e, t) {
                let n = t.frag;
                (null == n ? void 0 : n.type) === D &&
                    (t.details === l.FRAG_GAP && this.fragmentTracker.fragBuffered(n, !0),
                    this.fragCurrent && this.fragCurrent.abortRequests(),
                    this.state !== nC && (this.state = nR));
            }
            onSubtitleTracksUpdated(e, { subtitleTracks: t }) {
                if (this.levels && i$(this.levels, t)) {
                    this.levels = t.map((e) => new eW(e));
                    return;
                }
                (this.tracksBuffered = []),
                    (this.levels = t.map((e) => {
                        let t = new eW(e);
                        return (this.tracksBuffered[t.id] = []), t;
                    })),
                    this.fragmentTracker.removeFragmentsInRange(0, 1 / 0, D),
                    (this.fragPrevious = null),
                    (this.mediaBuffer = null);
            }
            onSubtitleTrackSwitch(e, t) {
                var n;
                if (
                    ((this.currentTrackId = t.id),
                    !(null != (n = this.levels) && n.length) || -1 === this.currentTrackId)
                )
                    return void this.clearInterval();
                let i = this.levels[this.currentTrackId];
                null != i && i.details ? (this.mediaBuffer = this.mediaBufferTimeRanges) : (this.mediaBuffer = null),
                    i && this.state !== nC && this.setInterval(500);
            }
            onSubtitleTrackLoaded(e, t) {
                var n, i;
                let { currentTrackId: r, levels: s } = this,
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
                                  null == (i = this.levelLastLoaded) ? void 0 : i.details,
                              )) &&
                          t &&
                          nd(a, (c = t.start))
                        : a.hasProgramDateTime && e.hasProgramDateTime
                          ? (nS(a, e), (c = a.fragmentStart))
                          : t && nd(a, (c = t.start)),
                        e && !this.startFragRequested && this.setStartPosition(e, c);
                }
                (l.details = a),
                    (this.levelLastLoaded = l),
                    o === r &&
                        (this.hls.trigger(u.SUBTITLE_TRACK_UPDATED, { details: a, id: o, groupId: t.groupId }),
                        this.tick(),
                        a.live &&
                            !this.fragCurrent &&
                            this.media &&
                            this.state === nR &&
                            (e3(null, a.fragments, this.media.currentTime, 0) ||
                                (this.warn("Subtitle playlist not aligned with playback"), (l.details = void 0))));
            }
            _handleFragmentLoadComplete(e) {
                let { frag: t, payload: n } = e,
                    i = t.decryptdata,
                    r = this.hls;
                if (
                    !this.fragContextChanged(t) &&
                    n &&
                    n.byteLength > 0 &&
                    null != i &&
                    i.key &&
                    i.iv &&
                    tx(i.method)
                ) {
                    let e = performance.now();
                    this.decrypter
                        .decrypt(new Uint8Array(n), i.key.buffer, i.iv.buffer, tk(i.method))
                        .catch((e) => {
                            throw (
                                (r.trigger(u.ERROR, {
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
                            let i = performance.now();
                            r.trigger(u.FRAG_DECRYPTED, { frag: t, payload: n, stats: { tstart: e, tdecrypt: i } });
                        })
                        .catch((e) => {
                            this.warn(`${e.name}: ${e.message}`), (this.state = nR);
                        });
                }
            }
            doTick() {
                if (!this.media) {
                    this.state = nR;
                    return;
                }
                if (this.state === nR) {
                    let { currentTrackId: e, levels: t } = this,
                        n = null == t ? void 0 : t[e];
                    if (!n || !t.length || !n.details || this.waitForLive(n)) return;
                    let { config: i } = this,
                        r = this.getLoadPosition(),
                        { end: s, len: a } = tN.bufferedInfo(
                            this.tracksBuffered[this.currentTrackId] || [],
                            r,
                            i.maxBufferHole,
                        ),
                        o = n.details;
                    if (a > this.hls.maxBufferLength + o.levelTargetDuration) return;
                    let l = o.fragments,
                        u = l.length,
                        c = o.edge,
                        d = null,
                        _ = this.fragPrevious;
                    if (s < c) {
                        let e = i.maxFragLookUpTolerance;
                        (d = e3(_, l, Math.max(l[0].start, s), s > c - e ? 0 : e)) ||
                            !_ ||
                            !(_.start < l[0].start) ||
                            (d = l[0]);
                    } else d = l[u - 1];
                    if (!(d = this.filterReplacedPrimary(d, n.details))) return;
                    let h = l[d.sn - o.startSN - 1];
                    if (
                        (h && h.cc === d.cc && this.fragmentTracker.getState(h) === ts && (d = h),
                        this.fragmentTracker.getState(d) === ts)
                    ) {
                        let e = this.mapToInitFragWhenRequired(d);
                        e && this.loadFragment(e, n, s);
                    }
                }
            }
            loadFragment(e, t, n) {
                ee(e) ? super.loadFragment(e, t, n) : this._loadInitSegment(e, t);
            }
            get mediaBufferTimeRanges() {
                return new rQ(this.tracksBuffered[this.currentTrackId] || []);
            }
        },
        subtitleTrackController: class extends iK {
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
                            t = rG(this.media.textTracks);
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
                let i = !!t.transferMedia;
                self.clearInterval(this.subtitlePollingInterval),
                    this.useTextTrackPolling || n.textTracks.removeEventListener("change", this.asyncPollTrackChange),
                    this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
                    (this.subtitleTrack = -1),
                    (this.media = null),
                    i ||
                        rG(n.textTracks).forEach((e) => {
                            rk(e);
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
                let { id: n, groupId: i, details: r } = t,
                    s = this.tracksInGroup[n];
                if (!s || s.groupId !== i)
                    return void this.warn(
                        `Subtitle track with id:${n} and group:${i} not found in active group ${null == s ? void 0 : s.groupId}`,
                    );
                let a = s.details;
                (s.details = t.details),
                    this.log(
                        `Subtitle track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`,
                    ),
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
                    i = this.groupIds,
                    r = this.currentTrack;
                if (
                    !n ||
                    (null == i ? void 0 : i.length) !== (null == n ? void 0 : n.length) ||
                    (null != n && n.some((e) => (null == i ? void 0 : i.indexOf(e)) === -1))
                ) {
                    (this.groupIds = n), (this.trackId = -1), (this.currentTrack = null);
                    let e = this.tracks.filter((e) => !n || -1 !== n.indexOf(e.groupId));
                    if (e.length)
                        this.selectDefaultTrack && !e.some((e) => e.default) && (this.selectDefaultTrack = !1),
                            e.forEach((e, t) => {
                                e.id = t;
                            });
                    else if (!r && !this.tracksInGroup.length) return;
                    this.tracksInGroup = e;
                    let t = this.hls.config.subtitlePreference;
                    if (!r && t) {
                        this.selectDefaultTrack = !1;
                        let n = eZ(t, e);
                        if (n > -1) r = e[n];
                        else {
                            let e = eZ(t, this.tracks);
                            r = this.tracks[e];
                        }
                    }
                    let i = this.findTrackId(r);
                    -1 === i && r && (i = this.findTrackId(null)),
                        this.log(
                            `Updating subtitle tracks, ${e.length} track(s) found in "${null == n ? void 0 : n.join(",")}" group-id`,
                        ),
                        this.hls.trigger(u.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: e }),
                        -1 !== i && -1 === this.trackId && this.setSubtitleTrack(i);
                }
            }
            findTrackId(e) {
                let t = this.tracksInGroup,
                    n = this.selectDefaultTrack;
                for (let i = 0; i < t.length; i++) {
                    let r = t[i];
                    if ((!n || r.default) && (n || e) && (!e || eQ(r, e))) return i;
                }
                if (e) {
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (iz(e.attrs, i.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return n;
                    }
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (iz(e.attrs, i.attrs, ["LANGUAGE"])) return n;
                    }
                }
                return -1;
            }
            findTrackForTextTrack(e) {
                if (e) {
                    let t = this.tracksInGroup;
                    for (let n = 0; n < t.length; n++) if (iq(t[n], e)) return n;
                }
                return -1;
            }
            onError(e, t) {
                !t.fatal &&
                    t.context &&
                    (t.context.type !== R ||
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
                        if (n && eQ(e, n)) return n;
                        let i = eZ(e, this.tracksInGroup);
                        if (i > -1) {
                            let e = this.tracksInGroup[i];
                            return this.setSubtitleTrack(i), e;
                        }
                        {
                            if (n) return null;
                            let i = eZ(e, t);
                            if (i > -1) return t[i];
                        }
                    }
                }
                return null;
            }
            loadPlaylist(e) {
                super.loadPlaylist(),
                    this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e);
            }
            loadingPlaylist(e, t) {
                super.loadingPlaylist(e, t);
                let n = e.id,
                    i = e.groupId,
                    r = this.getUrlWithDirectives(e.url, t),
                    s = e.details,
                    a = null == s ? void 0 : s.age;
                this.log(
                    `Loading subtitle ${n} "${e.name}" lang:${e.lang} group:${i}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${a && s.live ? " age " + a.toFixed(1) + (s.type ? " " + s.type : "") : ""} ${r}`,
                ),
                    this.hls.trigger(u.SUBTITLE_TRACK_LOADING, {
                        url: r,
                        id: n,
                        groupId: i,
                        deliveryDirectives: t || null,
                        track: e,
                    });
            }
            toggleTrackModes() {
                let e,
                    { media: t } = this;
                if (!t) return;
                let n = rG(t.textTracks),
                    i = this.currentTrack;
                if (
                    (i &&
                        ((e = n.filter((e) => iq(i, e))[0]) ||
                            this.warn(
                                `Unable to find subtitle TextTrack with name "${i.name}" and language "${i.lang}"`,
                            )),
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
                if (e < -1 || e >= t.length || !r(e)) return void this.warn(`Invalid subtitle track id: ${e}`);
                this.selectDefaultTrack = !1;
                let n = this.currentTrack,
                    i = t[e] || null;
                if (((this.trackId = e), (this.currentTrack = i), this.toggleTrackModes(), !i))
                    return void this.hls.trigger(u.SUBTITLE_TRACK_SWITCH, { id: e });
                let s = !!i.details && !i.details.live;
                if (e === this.trackId && i === n && s) return;
                this.log(
                    `Switching to subtitle-track ${e}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ""),
                );
                let { id: a, groupId: o = "", name: l, type: c, url: d } = i;
                this.hls.trigger(u.SUBTITLE_TRACK_SWITCH, { id: a, groupId: o, name: l, type: c, url: d });
                let _ = this.switchParams(i.url, null == n ? void 0 : n.details, i.details);
                this.loadPlaylist(_);
            }
        },
        timelineController: class {
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
                    (this.vttCCs = sL()),
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
                let e = new sO(this, "textTrack1"),
                    t = new sO(this, "textTrack2"),
                    n = new sO(this, "textTrack3"),
                    i = new sO(this, "textTrack4");
                (this.cea608Parser1 = new si(1, e, t)), (this.cea608Parser2 = new si(3, n, i));
            }
            addCues(e, t, n, i, r) {
                let s = !1;
                for (let e = r.length; e--; ) {
                    var a, o;
                    let i = r[e],
                        l = ((a = i[0]), (o = i[1]), Math.min(o, n) - Math.max(a, t));
                    if (l >= 0 && ((i[0] = Math.min(i[0], t)), (i[1] = Math.max(i[1], n)), (s = !0), l / (n - t) > 0.5))
                        return;
                }
                if ((s || r.push([t, n]), this.config.renderTextTracksNatively)) {
                    let r = this.captionsTracks[e];
                    this.Cues.newCue(r, t, n, i);
                } else {
                    let r = this.Cues.newCue(null, t, n, i);
                    this.hls.trigger(u.CUES_PARSED, { type: "captions", cues: r, track: e });
                }
            }
            onInitPtsFound(e, { frag: t, id: n, initPTS: i, timescale: r, trackId: s }) {
                let { unparsedVttFrags: a } = this;
                n === O && (this.initPTS[t.cc] = { baseTime: i, timescale: r, trackId: s }),
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
                    for (let i = 0; i < n.textTracks.length; i++) {
                        let r = n.textTracks[i];
                        if (
                            sD(r, {
                                name: e,
                                lang: t,
                                characteristics: "transcribes-spoken-dialog,describes-music-and-sound",
                            })
                        )
                            return r;
                    }
                return null;
            }
            createCaptionsTrack(e) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
            }
            createNativeTrack(e) {
                if (this.captionsTracks[e]) return;
                let { captionsProperties: t, captionsTracks: n, media: i } = this,
                    { label: r, languageCode: s } = t[e],
                    a = this.getExistingTrack(r, s);
                if (a) (n[e] = a), rk(n[e]), rP(n[e], i);
                else {
                    let t = this.createTextTrack("captions", r, s);
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
                (this.nonNativeCaptionsTracks[e] = n),
                    this.hls.trigger(u.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [n] });
            }
            createTextTrack(e, t, n) {
                let i = this.media;
                if (i) return i.addTextTrack(e, t, n);
            }
            onMediaAttaching(e, t) {
                (this.media = t.media), t.mediaSource || this._cleanTracks();
            }
            onMediaDetaching(e, t) {
                let n = !!t.transferMedia;
                if (((this.media = null), n)) return;
                let { captionsTracks: i } = this;
                Object.keys(i).forEach((e) => {
                    rk(i[e]), delete i[e];
                }),
                    (this.nonNativeCaptionsTracks = {});
            }
            onManifestLoading() {
                (this.lastCc = -1),
                    (this.lastSn = -1),
                    (this.lastPartIndex = -1),
                    (this.prevCC = -1),
                    (this.vttCCs = sL()),
                    this._cleanTracks(),
                    (this.tracks = []),
                    (this.captionsTracks = {}),
                    (this.nonNativeCaptionsTracks = {}),
                    (this.textTracks = []),
                    (this.unparsedVttFrags = []),
                    (this.initPTS = []),
                    this.cea608Parser1 &&
                        this.cea608Parser2 &&
                        (this.cea608Parser1.reset(), this.cea608Parser2.reset());
            }
            _cleanTracks() {
                let { media: e } = this;
                if (!e) return;
                let t = e.textTracks;
                if (t) for (let e = 0; e < t.length; e++) rk(t[e]);
            }
            onSubtitleTracksUpdated(e, t) {
                let n = t.subtitleTracks || [],
                    i = n.some((e) => e.textCodec === sg);
                if (this.config.enableWebVTT || (i && this.config.enableIMSC1)) {
                    if (i$(this.tracks, n)) {
                        this.tracks = n;
                        return;
                    }
                    if (((this.textTracks = []), (this.tracks = n), this.config.renderTextTracksNatively)) {
                        let e = this.media,
                            t = e ? rG(e.textTracks) : null;
                        if (
                            (this.tracks.forEach((e, n) => {
                                let i;
                                if (t) {
                                    let n = null;
                                    for (let i = 0; i < t.length; i++)
                                        if (t[i] && sD(t[i], e)) {
                                            (n = t[i]), (t[i] = null);
                                            break;
                                        }
                                    n && (i = n);
                                }
                                if (i) rk(i);
                                else {
                                    let t = sb(e);
                                    (i = this.createTextTrack(t, e.name, e.lang)) && (i.mode = "disabled");
                                }
                                i && this.textTracks.push(i);
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
                            i = this.captionsProperties[n];
                        i && ((i.label = e.name), e.lang && (i.languageCode = e.lang), (i.media = e));
                    });
            }
            closedCaptionsForLevel(e) {
                let t = this.hls.levels[e.level];
                return null == t ? void 0 : t.attrs["CLOSED-CAPTIONS"];
            }
            onFragLoading(e, t) {
                if (this.enabled && t.frag.type === O) {
                    var n, i;
                    let { cea608Parser1: e, cea608Parser2: r, lastSn: s } = this,
                        { cc: a, sn: o } = t.frag,
                        l = null != (n = null == (i = t.part) ? void 0 : i.index) ? n : -1;
                    e &&
                        r &&
                        (o !== s + 1 || (o === s && l !== this.lastPartIndex + 1) || a !== this.lastCc) &&
                        (e.reset(), r.reset()),
                        (this.lastCc = a),
                        (this.lastSn = o),
                        (this.lastPartIndex = l);
                }
            }
            onFragLoaded(e, t) {
                let { frag: n, payload: i } = t;
                if (n.type === D)
                    if (i.byteLength) {
                        let e = n.decryptdata,
                            r = "stats" in t;
                        if (null == e || !e.encrypted || r) {
                            let e = this.tracks[n.level],
                                r = this.vttCCs;
                            r[n.cc] ||
                                ((r[n.cc] = { start: n.start, prevCC: this.prevCC, new: !0 }), (this.prevCC = n.cc)),
                                e && e.textCodec === sg ? this._parseIMSC1(n, i) : this._parseVTTs(t);
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
                sS(
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
                var t, n, i, r, s, a, o, l;
                let c,
                    d,
                    _,
                    h,
                    f,
                    p,
                    E,
                    m,
                    g,
                    { frag: A, payload: I } = e,
                    { initPTS: T, unparsedVttFrags: S } = this,
                    y = T.length - 1;
                if (!T[A.cc] && -1 === y) return void S.push(e);
                let N = this.hls;
                (n = null != (t = A.initSegment) && t.data ? em(A.initSegment.data, new Uint8Array(I)).buffer : I),
                    (i = this.initPTS[A.cc]),
                    (r = this.vttCCs),
                    (s = A.cc),
                    (a = A.start),
                    (o = (e) => {
                        this._appendCues(e, A.level), N.trigger(u.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: A });
                    }),
                    (l = (t) => {
                        let n = "Missing initPTS for VTT MPEGTS" === t.message;
                        n ? S.push(e) : this._fallbackToIMSC1(A, I),
                            N.logger.log(`Failed to parse VTT cue: ${t}`),
                            (n && y > A.cc) || N.trigger(u.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: A, error: t });
                    }),
                    (d = new s_()),
                    (_ = Y(new Uint8Array(n)).trim().replace(sh, "\n").split("\n")),
                    (h = []),
                    (f = i
                        ? (function (e, t = 1) {
                              return iR(e, 9e4, 1 / t);
                          })(i.baseTime, i.timescale)
                        : 0),
                    (p = "00:00.000"),
                    (E = 0),
                    (m = 0),
                    (g = !0),
                    (d.oncue = function (e) {
                        let t = r[s],
                            n = r.ccOffset,
                            o = (E - f) / 9e4;
                        if ((null != t && t.new && (void 0 !== m ? (n = r.ccOffset = t.start) : sm(r, s, o)), o)) {
                            if (!i) {
                                c = Error("Missing initPTS for VTT MPEGTS");
                                return;
                            }
                            n = o - r.presentationOffset;
                        }
                        let l = e.endTime - e.startTime,
                            u = iM((e.startTime + n - m) * 9e4, 9e4 * a) / 9e4;
                        (e.startTime = Math.max(u, 0)), (e.endTime = Math.max(u + l, 0));
                        let d = e.text.trim();
                        (e.text = decodeURIComponent(encodeURIComponent(d))),
                            e.id || (e.id = sE(e.startTime, e.endTime, d)),
                            e.endTime > 0 && h.push(e);
                    }),
                    (d.onparsingerror = function (e) {
                        c = e;
                    }),
                    (d.onflush = function () {
                        c ? l(c) : o(h);
                    }),
                    _.forEach((e) => {
                        if (g)
                            if (sf(e, "X-TIMESTAMP-MAP=")) {
                                (g = !1),
                                    e
                                        .slice(16)
                                        .split(",")
                                        .forEach((e) => {
                                            sf(e, "LOCAL:")
                                                ? (p = e.slice(6))
                                                : sf(e, "MPEGTS:") && (E = parseInt(e.slice(7)));
                                        });
                                try {
                                    m = sp(p) / 1e3;
                                } catch (e) {
                                    c = e;
                                }
                                return;
                            } else "" === e && (g = !1);
                        d.parse(e + "\n");
                    }),
                    d.flush();
            }
            _fallbackToIMSC1(e, t) {
                let n = this.tracks[e.level];
                n.textCodec ||
                    sS(
                        t,
                        this.initPTS[e.cc],
                        () => {
                            (n.textCodec = sg), this._parseIMSC1(e, t);
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
                    e.forEach((e) => rx(n, e));
                } else {
                    let i = this.tracks[t];
                    if (!i) return;
                    let r = i.default ? "default" : "subtitles" + t;
                    n.trigger(u.CUES_PARSED, { type: "subtitles", cues: e, track: r });
                }
            }
            onFragDecrypted(e, t) {
                let { frag: n } = t;
                n.type === D && this.onFragLoaded(u.FRAG_LOADED, t);
            }
            onSubtitleTracksCleared() {
                (this.tracks = []), (this.captionsTracks = {});
            }
            onFragParsingUserdata(e, t) {
                if (!this.enabled || !this.config.enableCEA708Captions) return;
                let { frag: n, samples: i } = t;
                if (n.type !== O || "NONE" !== this.closedCaptionsForLevel(n))
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e].bytes;
                        if (t) {
                            this.cea608Parser1 || this.initCea608Parsers();
                            let n = this.extractCea608Data(t);
                            this.cea608Parser1.addData(i[e].pts, n[0]), this.cea608Parser2.addData(i[e].pts, n[1]);
                        }
                    }
            }
            onBufferFlushing(e, { startOffset: t, endOffset: n, endOffsetSubtitles: i, type: r }) {
                let { media: s } = this;
                if (s && !(s.currentTime < n)) {
                    if (!r || "video" === r) {
                        let { captionsTracks: e } = this;
                        Object.keys(e).forEach((i) => rU(e[i], t, n));
                    }
                    if (this.config.renderTextTracksNatively && 0 === t && void 0 !== i) {
                        let { textTracks: e } = this;
                        Object.keys(e).forEach((n) => rU(e[n], t, i));
                    }
                }
            }
            extractCea608Data(e) {
                let t = [[], []],
                    n = 31 & e[0],
                    i = 2;
                for (let r = 0; r < n; r++) {
                    let n = e[i++],
                        r = 127 & e[i++],
                        s = 127 & e[i++];
                    if ((0 !== r || 0 !== s) && (4 & n) != 0) {
                        let e = 3 & n;
                        (0 === e || 1 === e) && (t[e].push(r), t[e].push(s));
                    }
                }
                return t;
            }
        },
        audioStreamController: class extends nG {
            constructor(e, t, n) {
                super(e, t, n, "audio-stream-controller", b),
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
            onInitPtsFound(e, { frag: t, id: n, initPTS: i, timescale: r, trackId: s }) {
                if (n === O) {
                    let e = t.cc,
                        n = this.fragCurrent;
                    if (
                        ((this.initPTS[e] = { baseTime: i, timescale: r, trackId: s }),
                        this.log(`InitPTS for cc: ${e} found from main: ${i / r} (${i}/${r}) trackId: ${s}`),
                        (this.mainAnchor = t),
                        this.state === nk)
                    ) {
                        let n = this.waitingData;
                        ((n || this.loadingParts) && (!n || n.frag.cc === e)) ||
                            this.syncWithAnchor(t, null == n ? void 0 : n.frag);
                    } else
                        !this.hls.hasEnoughToStart && n && n.cc !== e
                            ? (n.abortRequests(), this.syncWithAnchor(t, n))
                            : this.state === nR && this.tick();
                }
            }
            getLoadPosition() {
                return !this.startFragRequested && this.nextLoadPosition >= 0
                    ? this.nextLoadPosition
                    : super.getLoadPosition();
            }
            syncWithAnchor(e, t) {
                var n;
                let i = (null == (n = this.mainFragLoading) ? void 0 : n.frag) || null;
                if (t && (null == i ? void 0 : i.cc) === t.cc) return;
                let r = (i || e).cc,
                    s = e4(this.getLevelDetails(), r, this.getLoadPosition());
                s &&
                    (this.log(`Syncing with main frag at ${s.start} cc ${s.cc}`),
                    (this.startFragRequested = !1),
                    (this.nextLoadPosition = s.start),
                    this.resetLoadingState(),
                    this.state === nR && this.doTickIdle());
            }
            startLoad(e, t) {
                if (!this.levels) {
                    (this.startPosition = e), (this.state = nC);
                    return;
                }
                let n = this.lastCurrentTime;
                this.stopLoad(),
                    this.setInterval(100),
                    n > 0 && -1 === e
                        ? (this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`),
                          (e = n),
                          (this.state = nR))
                        : (this.state = nL),
                    (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
                    (this.startPosition = t ? -1 : e),
                    this.tick();
            }
            doTick() {
                switch (this.state) {
                    case nR:
                        this.doTickIdle();
                        break;
                    case nL: {
                        let { levels: e, trackId: t } = this,
                            n = null == e ? void 0 : e[t],
                            i = null == n ? void 0 : n.details;
                        if (i && !this.waitForLive(n)) {
                            if (this.waitForCdnTuneIn(i)) break;
                            this.state = nk;
                        }
                        break;
                    }
                    case nD:
                        this.checkRetryDate();
                        break;
                    case nk: {
                        let e = this.waitingData;
                        if (e) {
                            let { frag: t, part: n, cache: i, complete: r } = e,
                                s = this.mainAnchor;
                            if (void 0 !== this.initPTS[t.cc]) {
                                (this.waitingData = null), (this.state = nb);
                                let e = { frag: t, part: n, payload: i.flush().buffer, networkDetails: null };
                                this._handleFragmentLoadProgress(e), r && super._handleFragmentLoadComplete(e);
                            } else s && s.cc !== e.frag.cc && this.syncWithAnchor(s, e.frag);
                        } else this.state = nR;
                    }
                }
                this.onTickEnd();
            }
            resetLoadingState() {
                let e = this.waitingData;
                e && (this.fragmentTracker.removeFragment(e.frag), (this.waitingData = null)),
                    super.resetLoadingState();
            }
            onTickEnd() {
                let { media: e } = this;
                null != e && e.readyState && (this.lastCurrentTime = e.currentTime);
            }
            doTickIdle() {
                var e;
                let { hls: t, levels: n, media: i, trackId: r } = this,
                    s = t.config;
                if (
                    !this.buffering ||
                    (!i && !this.primaryPrefetch && (this.startFragRequested || !s.startFragPrefetch)) ||
                    !(null != n && n[r])
                )
                    return;
                let a = n[r],
                    o = a.details;
                if (!o || this.waitForLive(a) || this.waitForCdnTuneIn(o)) {
                    (this.state = nL), (this.startFragRequested = !1);
                    return;
                }
                let l = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.bufferFlushed && l && ((this.bufferFlushed = !1), this.afterBufferFlushed(l, X, b));
                let c = this.getFwdBufferInfo(l, b);
                if (null === c) return;
                if (!this.switchingTrack && this._streamEnded(c, o)) {
                    t.trigger(u.BUFFER_EOS, { type: "audio" }), (this.state = nP);
                    return;
                }
                let d = c.len,
                    _ = t.maxBufferLength,
                    h = o.fragments,
                    f = h[0].start,
                    p = this.getLoadPosition(),
                    E = this.flushing ? p : c.end;
                if (
                    (this.switchingTrack &&
                        i &&
                        o.PTSKnown &&
                        p < f &&
                        (c.end > f || c.nextStart) &&
                        (this.log("Alt audio track ahead of main track, seek to start of alt audio track"),
                        (i.currentTime = f + 0.05)),
                    d >= _ && !this.switchingTrack && E < h[h.length - 1].start)
                )
                    return;
                let m = this.getNextFragment(E, o);
                if ((m && this.isLoopLoading(m, E) && (m = this.getNextFragmentLoopLoading(m, o, c, O, _)), !m)) {
                    this.bufferFlushed = !0;
                    return;
                }
                let g = (null == (e = this.mainFragLoading) ? void 0 : e.frag) || null;
                if (
                    !this.audioOnly &&
                    this.startFragRequested &&
                    g &&
                    ee(m) &&
                    !m.endList &&
                    (!o.live || (!this.loadingParts && E < this.hls.liveSyncPosition)) &&
                    ("OK" === this.fragmentTracker.getState(g) && (this.mainFragLoading = g = null), g && ee(g))
                ) {
                    if (m.start > g.end) {
                        let e = this.fragmentTracker.getFragAtPos(E, O);
                        e && e.end > g.end && ((g = e), (this.mainFragLoading = { frag: e, targetBufferTime: null }));
                    }
                    if (m.start > g.end) return;
                }
                this.loadFragment(m, a, E);
            }
            onMediaDetaching(e, t) {
                (this.bufferFlushed = this.flushing = !1), super.onMediaDetaching(e, t);
            }
            onAudioTracksUpdated(e, { audioTracks: t }) {
                this.resetTransmuxer(), (this.levels = t.map((e) => new eW(e)));
            }
            onAudioTrackSwitching(e, t) {
                let n = !!t.url;
                this.trackId = t.id;
                let { fragCurrent: i } = this;
                i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)),
                    this.resetLoadingState(),
                    n
                        ? ((this.switchingTrack = t),
                          this.flushAudioIfNeeded(t),
                          this.state !== nC && (this.setInterval(100), (this.state = nR), this.tick()))
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
                var n, i;
                let { levels: r } = this,
                    { details: s, id: a, groupId: o, track: l } = t;
                if (!r) return void this.warn(`Audio tracks reset while loading track ${a} "${l.name}" of "${o}"`);
                let c = this.mainDetails;
                if (!c || s.endCC > c.endCC || c.expired) {
                    (this.cachedTrackLoadedData = t), this.state !== nC && (this.state = nL);
                    return;
                }
                (this.cachedTrackLoadedData = null),
                    this.log(
                        `Audio track ${a} "${l.name}" of "${o}" loaded [${s.startSN},${s.endSN}]${s.lastPartSn ? `[part-${s.lastPartSn}-${s.lastPartIndex}]` : ""},duration:${s.totalduration}`,
                    );
                let d = r[a],
                    _ = 0;
                if (s.live || (null != (n = d.details) && n.live)) {
                    if ((this.checkLiveUpdate(s), s.deltaUpdateFailed)) return;
                    d.details &&
                        (_ = this.alignPlaylists(
                            s,
                            d.details,
                            null == (i = this.levelLastLoaded) ? void 0 : i.details,
                        )),
                        s.alignedSliding || (nT(s, c), s.alignedSliding || nS(s, c), (_ = s.fragmentStart));
                }
                (d.details = s),
                    (this.levelLastLoaded = d),
                    this.startFragRequested || this.setStartPosition(c, _),
                    this.hls.trigger(u.AUDIO_TRACK_UPDATED, { details: s, id: a, groupId: t.groupId }),
                    this.state !== nL || this.waitForCdnTuneIn(s) || (this.state = nR),
                    this.tick();
            }
            _handleFragmentLoadProgress(e) {
                var t;
                let n = e.frag,
                    { part: i, payload: r } = e,
                    { config: s, trackId: a, levels: o } = this;
                if (!o)
                    return void this.warn(
                        `Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`,
                    );
                let l = o[a];
                if (!l) return void this.warn("Audio track is undefined on fragment load progress");
                let u = l.details;
                if (!u) {
                    this.warn("Audio track details undefined on fragment load progress"),
                        this.removeUnbufferedFrags(n.start);
                    return;
                }
                let c = s.defaultAudioCodec || l.audioCodec || "mp4a.40.2",
                    d = this.transmuxer;
                d ||
                    (d = this.transmuxer =
                        new iW(
                            this.hls,
                            b,
                            this._handleTransmuxComplete.bind(this),
                            this._handleTransmuxerFlush.bind(this),
                        ));
                let _ = this.initPTS[n.cc],
                    h = null == (t = n.initSegment) ? void 0 : t.data;
                if (void 0 !== _) {
                    let e = i ? i.index : -1,
                        t = new tT(n.level, n.sn, n.stats.chunkCount, r.byteLength, e, -1 !== e);
                    d.push(r, h, c, "", n, i, u.totalduration, !1, t, _);
                } else {
                    this.log(
                        `Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${u.startSN} ,${u.endSN}],track ${a}`,
                    );
                    let { cache: e } = (this.waitingData = this.waitingData || {
                        frag: n,
                        part: i,
                        cache: new nV(),
                        complete: !1,
                    });
                    e.push(new Uint8Array(r)), this.state !== nC && (this.state = nk);
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
                    t.frag.type === O &&
                    ee(t.frag) &&
                    ((this.mainFragLoading = t), this.state === nR && this.tick());
            }
            onFragBuffered(e, t) {
                let { frag: n, part: i } = t;
                if (n.type !== b) {
                    this.audioOnly ||
                        n.type !== O ||
                        n.elementaryStreams.video ||
                        n.elementaryStreams.audiovideo ||
                        ((this.audioOnly = !0), (this.mainFragLoading = null));
                    return;
                }
                if (this.fragContextChanged(n))
                    return void this.warn(
                        `Fragment ${n.sn}${i ? " p: " + i.index : ""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`,
                    );
                if (ee(n)) {
                    this.fragPrevious = n;
                    let e = this.switchingTrack;
                    e &&
                        ((this.bufferedTrack = e),
                        (this.switchingTrack = null),
                        this.hls.trigger(u.AUDIO_TRACK_SWITCHED, x({}, e)));
                }
                this.fragBufferedComplete(n, i), this.media && this.tick();
            }
            onError(e, t) {
                var n;
                if (t.fatal) {
                    this.state = nx;
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
                        this.onFragmentOrKeyLoadError(b, t);
                        break;
                    case l.AUDIO_TRACK_LOAD_ERROR:
                    case l.AUDIO_TRACK_LOAD_TIMEOUT:
                    case l.LEVEL_PARSING_ERROR:
                        t.levelRetry ||
                            this.state !== nL ||
                            (null == (n = t.context) ? void 0 : n.type) !== C ||
                            (this.state = nR);
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
                t !== Z && (this.flushing = !0);
            }
            onBufferFlushed(e, { type: t }) {
                if (t !== Z) {
                    (this.flushing = !1), (this.bufferFlushed = !0), this.state === nP && (this.state = nR);
                    let e = this.mediaBuffer || this.media;
                    e && (this.afterBufferFlushed(e, t, b), this.tick());
                }
            }
            _handleTransmuxComplete(e) {
                var t;
                let n = "audio",
                    { hls: i } = this,
                    { remuxResult: r, chunkMeta: s } = e,
                    a = this.getCurrentContext(s);
                if (!a) return void this.resetWhenMissingContext(s);
                let { frag: o, part: l, level: c } = a,
                    { details: d } = c,
                    { audio: _, text: h, id3: f, initSegment: p } = r;
                if (this.fragContextChanged(o) || !d) return void this.fragmentTracker.removeFragment(o);
                if (
                    ((this.state = nw),
                    this.switchingTrack && _ && this.completeAudioSwitch(this.switchingTrack),
                    null != p && p.tracks)
                ) {
                    let e = o.initSegment || o;
                    if (this.unhandledEncryptionError(p, o)) return;
                    this._bufferInitSegment(c, p.tracks, e, s),
                        i.trigger(u.FRAG_PARSING_INIT_SEGMENT, { frag: e, id: n, tracks: p.tracks });
                }
                if (_) {
                    let { startPTS: e, endPTS: t, startDTS: n, endDTS: i } = _;
                    l && (l.elementaryStreams[X] = { startPTS: e, endPTS: t, startDTS: n, endDTS: i }),
                        o.setElementaryStreamInfo(X, e, t, n, i),
                        this.bufferFragmentData(_, o, l, s);
                }
                if (null != f && null != (t = f.samples) && t.length) {
                    let e = M({ id: n, frag: o, details: d }, f);
                    i.trigger(u.FRAG_PARSING_METADATA, e);
                }
                if (h) {
                    let e = M({ id: n, frag: o, details: d }, h);
                    i.trigger(u.FRAG_PARSING_USERDATA, e);
                }
            }
            _bufferInitSegment(e, t, n, i) {
                if (this.state !== nw || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
                    return;
                let r = t.audio;
                r.id = b;
                let s = e.audioCodec;
                this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${s}/${r.codec}]`),
                    s && 1 === s.split(",").length && (r.levelCodec = s),
                    this.hls.trigger(u.BUFFER_CODECS, t);
                let a = r.initSegment;
                if (null != a && a.byteLength) {
                    let e = { type: "audio", frag: n, part: null, chunkMeta: i, parent: n.type, data: a };
                    this.hls.trigger(u.BUFFER_APPENDING, e);
                }
                this.tickImmediate();
            }
            loadFragment(e, t, n) {
                let i = this.fragmentTracker.getState(e);
                if (this.switchingTrack || i === ts || i === to) {
                    var r;
                    if (ee(e))
                        if (null != (r = t.details) && r.live && !this.initPTS[e.cc]) {
                            this.log(
                                `Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`,
                            ),
                                (this.state = nk);
                            let n = this.mainDetails;
                            n && n.fragmentStart !== t.details.fragmentStart && nS(t.details, n);
                        } else super.loadFragment(e, t, n);
                    else this._loadInitSegment(e, t);
                } else this.clearTrackerIfNeeded(e);
            }
            flushAudioIfNeeded(e) {
                if (this.media && this.bufferedTrack) {
                    let {
                        name: t,
                        lang: n,
                        assocLang: i,
                        characteristics: r,
                        audioCodec: s,
                        channels: a,
                    } = this.bufferedTrack;
                    eQ({ name: t, lang: n, assocLang: i, characteristics: r, audioCodec: s, channels: a }, e, eJ) ||
                        (e1(e.url, this.hls)
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
                    t.trigger(u.AUDIO_TRACK_SWITCHED, x({}, e));
            }
        },
        audioTrackController: class extends iK {
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
                let { id: n, groupId: i, details: r } = t,
                    s = this.tracksInGroup[n];
                if (!s || s.groupId !== i)
                    return void this.warn(
                        `Audio track with id:${n} and group:${i} not found in active group ${null == s ? void 0 : s.groupId}`,
                    );
                let a = s.details;
                (s.details = t.details),
                    this.log(`Audio track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),
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
                    i = this.groupIds,
                    r = this.currentTrack;
                if (
                    !n ||
                    (null == i ? void 0 : i.length) !== (null == n ? void 0 : n.length) ||
                    (null != n && n.some((e) => (null == i ? void 0 : i.indexOf(e)) === -1))
                ) {
                    (this.groupIds = n), (this.trackId = -1), (this.currentTrack = null);
                    let e = this.tracks.filter((e) => !n || -1 !== n.indexOf(e.groupId));
                    if (e.length)
                        this.selectDefaultTrack && !e.some((e) => e.default) && (this.selectDefaultTrack = !1),
                            e.forEach((e, t) => {
                                e.id = t;
                            });
                    else if (!r && !this.tracksInGroup.length) return;
                    this.tracksInGroup = e;
                    let t = this.hls.config.audioPreference;
                    if (!r && t) {
                        let n = eZ(t, e, eJ);
                        if (n > -1) r = e[n];
                        else {
                            let e = eZ(t, this.tracks);
                            r = this.tracks[e];
                        }
                    }
                    let i = this.findTrackId(r);
                    -1 === i && r && (i = this.findTrackId(null)),
                        this.log(
                            `Updating audio tracks, ${e.length} track(s) found in group(s): ${null == n ? void 0 : n.join(",")}`,
                        ),
                        this.hls.trigger(u.AUDIO_TRACKS_UPDATED, { audioTracks: e });
                    let a = this.trackId;
                    if (-1 !== i && -1 === a) this.setAudioTrack(i);
                    else if (e.length && -1 === a) {
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
                    (t.context.type !== C ||
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
                    let r = this.allAudioTracks;
                    if (((this.selectDefaultTrack = !1), r.length)) {
                        let s = this.currentTrack;
                        if (s && eQ(e, s, eJ)) return s;
                        let a = eZ(e, this.tracksInGroup, eJ);
                        if (a > -1) {
                            let e = this.tracksInGroup[a];
                            return this.setAudioTrack(a), e;
                        }
                        if (s) {
                            var n, i;
                            let s,
                                a,
                                o,
                                l,
                                u,
                                c,
                                d = t.loadLevel;
                            -1 === d && (d = t.firstAutoLevel);
                            let _ =
                                ((n = t.levels),
                                (s = n[(i = d)]),
                                (a = n.reduce((e, t, n) => {
                                    let i = t.uri;
                                    return (e[i] || (e[i] = [])).push(n), e;
                                }, {})[s.uri]).length > 1 && (i = Math.max.apply(Math, a)),
                                (o = s.videoRange),
                                (l = s.frameRate),
                                (u = s.codecSet.substring(0, 4)),
                                (c = e0(n, i, (t) => {
                                    if (t.videoRange !== o || t.frameRate !== l || t.codecSet.substring(0, 4) !== u)
                                        return !1;
                                    let n = t.audioGroups;
                                    return (
                                        eZ(
                                            e,
                                            r.filter((e) => !n || -1 !== n.indexOf(e.groupId)),
                                            eJ,
                                        ) > -1
                                    );
                                })) > -1
                                    ? c
                                    : e0(n, i, (t) => {
                                          let n = t.audioGroups;
                                          return (
                                              eZ(
                                                  e,
                                                  r.filter((e) => !n || -1 !== n.indexOf(e.groupId)),
                                                  eJ,
                                              ) > -1
                                          );
                                      }));
                            if (-1 === _) return null;
                            t.nextLoadLevel = _;
                        }
                        if (e.channels || e.audioCodec) {
                            let t = eZ(e, r);
                            if (t > -1) return r[t];
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
                    i = t[e],
                    r = i.details && !i.details.live;
                if (
                    (e === this.trackId && i === n && r) ||
                    (this.log(
                        `Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`,
                    ),
                    (this.trackId = e),
                    (this.currentTrack = i),
                    this.hls.trigger(u.AUDIO_TRACK_SWITCHING, x({}, i)),
                    r)
                )
                    return;
                let s = this.switchParams(i.url, null == n ? void 0 : n.details, i.details);
                this.loadPlaylist(s);
            }
            findTrackId(e) {
                let t = this.tracksInGroup;
                for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    if ((!this.selectDefaultTrack || i.default) && (!e || eQ(e, i, eJ))) return n;
                }
                if (e) {
                    let { name: n, lang: i, assocLang: r, characteristics: s, audioCodec: a, channels: o } = e;
                    for (let e = 0; e < t.length; e++)
                        if (
                            eQ(
                                { name: n, lang: i, assocLang: r, characteristics: s, audioCodec: a, channels: o },
                                t[e],
                                eJ,
                            )
                        )
                            return e;
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (iz(e.attrs, i.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return n;
                    }
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (iz(e.attrs, i.attrs, ["LANGUAGE"])) return n;
                    }
                }
                return -1;
            }
            loadPlaylist(e) {
                super.loadPlaylist();
                let t = this.currentTrack;
                this.shouldLoadPlaylist(t) && e1(t.url, this.hls) && this.scheduleLoading(t, e);
            }
            loadingPlaylist(e, t) {
                super.loadingPlaylist(e, t);
                let n = e.id,
                    i = e.groupId,
                    r = this.getUrlWithDirectives(e.url, t),
                    s = e.details,
                    a = null == s ? void 0 : s.age;
                this.log(
                    `Loading audio-track ${n} "${e.name}" lang:${e.lang} group:${i}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${a && s.live ? " age " + a.toFixed(1) + (s.type ? " " + s.type : "") : ""} ${r}`,
                ),
                    this.hls.trigger(u.AUDIO_TRACK_LOADING, {
                        url: r,
                        id: n,
                        groupId: i,
                        deliveryDirectives: t || null,
                        track: e,
                    });
            }
        },
        emeController: rD,
        cmcdController: class {
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
                            this.apply(e, { ot: "m", su: !this.initialized });
                        } catch (e) {
                            this.hls.logger.warn("Could not generate manifest CMCD data.", e);
                        }
                    }),
                    (this.applyFragmentData = (e) => {
                        try {
                            let { frag: t, part: n } = e,
                                i = this.hls.levels[t.level],
                                r = this.getObjectType(t),
                                s = { d: 1e3 * (n || t).duration, ot: r };
                            ("v" === r || "a" === r || "av" == r) &&
                                ((s.br = i.bitrate / 1e3),
                                (s.tb = this.getTopBandwidth(r) / 1e3),
                                (s.bl = this.getBufferLength(r)));
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
                var n, i;
                (this.audioBuffer = null == (n = t.tracks.audio) ? void 0 : n.buffer),
                    (this.videoBuffer = null == (i = t.tracks.video) ? void 0 : i.buffer);
            }
            createData() {
                var e;
                return {
                    v: 1,
                    sf: "h",
                    sid: this.sid,
                    cid: this.cid,
                    pr: null == (e = this.media) ? void 0 : e.playbackRate,
                    mtp: this.hls.bandwidthEstimate / 1e3,
                };
            }
            apply(e, t = {}) {
                M(t, this.createData());
                let n = "i" === t.ot || "v" === t.ot || "av" === t.ot;
                this.starved && n && ((t.bs = !0), (t.su = !0), (this.starved = !1)),
                    null == t.su && (t.su = this.buffering);
                let { includeKeys: i } = this;
                i && (t = Object.keys(t).reduce((e, n) => (i.includes(n) && (e[n] = t[n]), e), {}));
                let r = { baseUrl: e.url };
                if (this.useHeaders) {
                    var s;
                    e.headers || (e.headers = {}),
                        (s = e.headers),
                        M(
                            s,
                            (function (e, t = {}) {
                                let n = {};
                                return e
                                    ? Object.entries(
                                          (function (e, t) {
                                              let n = {};
                                              if (!e) return n;
                                              let i = Object.keys(e),
                                                  r = t
                                                      ? Object.keys(t).reduce((e, n) => {
                                                            var i;
                                                            return (
                                                                null == (i = t[n]) || i.forEach((t) => (e[t] = n)), e
                                                            );
                                                        }, {})
                                                      : {};
                                              return i.reduce((t, n) => {
                                                  var i;
                                                  let s = ru[n] || r[n] || ra;
                                                  return ((null != (i = t[s]) ? i : (t[s] = {}))[n] = e[n]), t;
                                              }, n);
                                          })(rC(e, t), null == t ? void 0 : t.customHeaderMap),
                                      ).reduce((e, [t, n]) => {
                                          let i = rr(n, { whitespace: !1 });
                                          return i && (e[t] = i), e;
                                      }, n)
                                    : n;
                            })(t, r),
                        );
                } else
                    e.url = (function (e, t, n) {
                        let i = (function (e, t = {}) {
                            if (!e) return "";
                            let n = (function (e, t = {}) {
                                return e
                                    ? encodeURIComponent(
                                          (function (e, t = {}) {
                                              return e ? rr(rC(e, t), { whitespace: !1 }) : "";
                                          })(e, t),
                                      )
                                    : "";
                            })(e, t);
                            return `CMCD=${n}`;
                        })(t, n);
                        if (!i) return e;
                        if (rR.test(e)) return e.replace(rR, i);
                        let r = e.includes("?") ? "&" : "?";
                        return `${e}${r}${i}`;
                    })(e.url, t, r);
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
                let { index: n, fragment: i } = e,
                    r = null == (t = this.hls.levels[i.level]) || null == (t = t.details) ? void 0 : t.partList;
                if (r) {
                    let { sn: e } = i;
                    for (let t = r.length - 1; t >= 0; t--) {
                        let i = r[t];
                        if (i.index === n && i.fragment.sn === e) return r[t + 1];
                    }
                }
            }
            getObjectType(e) {
                let { type: t } = e;
                return "subtitle" === t
                    ? "tt"
                    : "initSegment" === e.sn
                      ? "i"
                      : "audio" === t
                        ? "a"
                        : "main" === t
                          ? this.hls.audioTracks.length
                              ? "v"
                              : "av"
                          : void 0;
            }
            getTopBandwidth(e) {
                let t,
                    n = 0,
                    i = this.hls;
                if ("a" === e) t = i.audioTracks;
                else {
                    let e = i.maxAutoLevel,
                        n = e > -1 ? e + 1 : i.levels.length;
                    t = i.levels.slice(0, n);
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
                    n = "a" === e ? this.audioBuffer : this.videoBuffer;
                return n && t ? 1e3 * tN.bufferInfo(n, t.currentTime, this.config.maxBufferHole).len : NaN;
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
                    load(e, n, i) {
                        t(e), this.loader.load(e, n, i);
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
                    load(e, n, i) {
                        t(e), this.loader.load(e, n, i);
                    }
                };
            }
        },
        contentSteeringController: class extends k {
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
                return (this.levels || []).reduce(
                    (e, t) => (-1 === e.indexOf(t.pathwayId) && e.push(t.pathwayId), e),
                    [],
                );
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
                if ((null == n ? void 0 : n.action) === 2 && 1 === n.flags) {
                    let e = this.levels,
                        i = this._pathwayPriority,
                        r = this.pathwayId;
                    if (t.context) {
                        let { groupId: n, pathwayId: i, type: s } = t.context;
                        n && e ? (r = this.getPathwayForGroupId(n, s, r)) : i && (r = i);
                    }
                    r in this.penalizedPathways || (this.penalizedPathways[r] = performance.now()),
                        !i && e && (i = this.pathways()),
                        i && i.length > 1 && (this.updatePathwayPriority(i), (n.resolved = this.pathwayId !== r)),
                        t.details !== l.BUFFER_APPEND_ERROR || t.fatal
                            ? n.resolved ||
                              this.warn(
                                  `Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${r} levels: ${e ? e.length : e} priorities: ${e$(i)} penalized: ${e$(this.penalizedPathways)}`,
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
                    t.length !== e.length &&
                        this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),
                    t
                );
            }
            getLevelsForPathway(e) {
                return null === this.levels ? [] : this.levels.filter((t) => e === t.pathwayId);
            }
            updatePathwayPriority(e) {
                let t;
                this._pathwayPriority = e;
                let n = this.penalizedPathways,
                    i = performance.now();
                Object.keys(n).forEach((e) => {
                    i - n[e] > 3e5 && delete n[e];
                });
                for (let i = 0; i < e.length; i++) {
                    let r = e[i];
                    if (r in n) continue;
                    if (r === this.pathwayId) return;
                    let s = this.hls.nextLoadLevel,
                        a = this.hls.levels[s];
                    if ((t = this.getLevelsForPathway(r)).length > 0) {
                        this.log(`Setting Pathway to "${r}"`),
                            (this.pathwayId = r),
                            nE(t),
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
                let i = this.getLevelsForPathway(n).concat(this.levels || []);
                for (let n = 0; n < i.length; n++)
                    if ((t === C && i[n].hasAudioGroup(e)) || (t === R && i[n].hasSubtitleGroup(e)))
                        return i[n].pathwayId;
                return n;
            }
            clonePathways(e) {
                let t = this.levels;
                if (!t) return;
                let n = {},
                    i = {};
                e.forEach((e) => {
                    let { ID: r, "BASE-ID": s, "URI-REPLACEMENT": a } = e;
                    if (t.some((e) => e.pathwayId === r)) return;
                    let o = this.getLevelsForPathway(s).map((e) => {
                        let t = new tD(e.attrs);
                        t["PATHWAY-ID"] = r;
                        let s = t.AUDIO && `${t.AUDIO}_clone_${r}`,
                            o = t.SUBTITLES && `${t.SUBTITLES}_clone_${r}`;
                        s && ((n[t.AUDIO] = s), (t.AUDIO = s)), o && ((i[t.SUBTITLES] = o), (t.SUBTITLES = o));
                        let l = rb(e.uri, t["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", a),
                            u = new eW({
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
                                u.addGroupId("audio", `${e.audioGroups[t]}_clone_${r}`);
                        if (e.subtitleGroups)
                            for (let t = 1; t < e.subtitleGroups.length; t++)
                                u.addGroupId("text", `${e.subtitleGroups[t]}_clone_${r}`);
                        return u;
                    });
                    t.push(...o), rO(this.audioTracks, n, a, r), rO(this.subtitleTracks, i, a, r);
                });
            }
            loadSteeringManifest(e) {
                let t,
                    n = this.hls.config,
                    i = n.loader;
                this.loader && this.loader.destroy(), (this.loader = new i(n));
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
                let r = { responseType: "json", url: t.href },
                    s = n.steeringManifestLoadPolicy.default,
                    a = s.errorRetry || s.timeoutRetry || {},
                    o = {
                        loadPolicy: s,
                        timeout: s.maxLoadTimeMs,
                        maxRetry: a.maxNumRetry || 0,
                        retryDelay: a.retryDelayMs || 0,
                        maxRetryDelay: a.maxRetryDelayMs || 0,
                    };
                this.log(`Requesting steering manifest: ${t}`),
                    this.loader.load(r, o, {
                        onSuccess: (e, n, i, r) => {
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
                            this.scheduleRefresh(this.uri || i.url), o && this.clonePathways(o);
                            let c = { steeringManifest: s, url: t.toString() };
                            this.hls.trigger(u.STEERING_MANIFEST_LOADED, c), l && this.updatePathwayPriority(l);
                        },
                        onError: (e, t, n, i) => {
                            if (
                                (this.log(`Error loading steering manifest: ${e.code} ${e.text} (${t.url})`),
                                this.stopLoad(),
                                410 === e.code)
                            ) {
                                (this.enabled = !1), this.log(`Steering manifest ${t.url} no longer available`);
                                return;
                            }
                            let r = 1e3 * this.timeToLoad;
                            if (429 === e.code) {
                                let e = this.loader;
                                if ("function" == typeof (null == e ? void 0 : e.getResponseHeader)) {
                                    let t = e.getResponseHeader("Retry-After");
                                    t && (r = 1e3 * parseFloat(t));
                                }
                                this.log(`Steering manifest ${t.url} rate limited`);
                                return;
                            }
                            this.scheduleRefresh(this.uri || t.url, r);
                        },
                        onTimeout: (e, t, n) => {
                            this.log(`Timeout loading steering manifest (${t.url})`),
                                this.scheduleRefresh(this.uri || t.url);
                        },
                    });
            }
            scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
                this.clearTimeout(),
                    (this.reloadTimer = self.setTimeout(() => {
                        var t;
                        let n = null == (t = this.hls) ? void 0 : t.media;
                        n && !n.ended ? this.loadSteeringManifest(e) : this.scheduleRefresh(e, 1e3 * this.timeToLoad);
                    }, t));
            }
        },
        interstitialsController: class extends k {
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
                        let i = n - this.timelinePos;
                        if (Math.abs(i) < 1 / 7056e5) return;
                        let r = i <= -0.01;
                        (this.timelinePos = n), (this.bufferedPos = n);
                        let s = this.playingItem;
                        if (!s) return void this.checkBuffer();
                        if (
                            (r && this.schedule.resetErrorsInRange(n, n - i) && this.updateSchedule(!0),
                            this.checkBuffer(),
                            (r && n < s.start) || n >= s.end)
                        ) {
                            let t = this.findItemIndex(s),
                                i = this.schedule.findItemIndexAtTime(n);
                            if (
                                (-1 === i &&
                                    ((i = t + (r ? -1 : 1)),
                                    this.log(
                                        `seeked ${r ? "back " : ""}to position not covered by schedule ${n} (resolving from ${t} to ${i})`,
                                    )),
                                !this.isInterstitial(s) &&
                                    null != (e = this.media) &&
                                    e.paused &&
                                    (this.shouldPlay = !1),
                                !r && i > t)
                            ) {
                                let e = this.schedule.findJumpRestrictedIndex(t + 1, i);
                                if (e > t) return void this.setSchedulePosition(e);
                            }
                            this.setSchedulePosition(i);
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
                        ((r && n < o) || n >= o + l) &&
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
                        let i = this.playingItem,
                            r = n.events || [],
                            s = n.items || [],
                            a = n.durations,
                            o = e.map((e) => e.identifier),
                            l = !!(r.length || o.length);
                        (l || t) &&
                            this.log(`INTERSTITIALS_UPDATED (${r.length}): ${r}
Schedule: ${s.map((e) => rz(e))} pos: ${this.timelinePos}`),
                            o.length && this.log(`Removed events ${o}`);
                        let c = null,
                            d = null;
                        i &&
                            ((c = this.updateItem(i, this.timelinePos)),
                            this.itemsMatch(i, c)
                                ? (this.playingItem = c)
                                : (this.waitingItem = this.endedItem = null)),
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
                                        } catch (i) {
                                            Math.abs(n) > 0.025 &&
                                                this.warn(`${i} ("${e.assetId}" ${e.timelineOffset}->${t})`);
                                        }
                                }
                            }),
                            l || t)
                        ) {
                            if (
                                (this.hls.trigger(u.INTERSTITIALS_UPDATED, {
                                    events: r.slice(0),
                                    schedule: s.slice(0),
                                    durations: a,
                                    removedIds: o,
                                }),
                                this.isInterstitial(i) && o.includes(i.event.identifier))
                            ) {
                                this.warn(`Interstitial "${i.event.identifier}" removed while playing`),
                                    this.primaryFallback(i.event);
                                return;
                            }
                            i && this.trimInPlace(c, i), _ && d !== c && this.trimInPlace(d, _), this.checkBuffer();
                        }
                    }),
                    (this.hls = e),
                    (this.HlsPlayerClass = t),
                    (this.assetListLoader = new rq(e)),
                    (this.schedule = new r$(this.onScheduleUpdate, e.logger)),
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
                nN(e, "play", this.onPlay),
                    nN(e, "pause", this.onPause),
                    nN(e, "seeking", this.onSeeking),
                    nN(e, "timeupdate", this.onTimeupdate);
            }
            onMediaAttaching(e, t) {
                let n = (this.media = t.media);
                ny(n, "seeking", this.onSeeking),
                    ny(n, "timeupdate", this.onTimeupdate),
                    ny(n, "play", this.onPlay),
                    ny(n, "pause", this.onPause);
            }
            onMediaAttached(e, t) {
                let n = this.effectivePlayingItem,
                    i = this.detachedData;
                if (((this.detachedData = null), null === n)) this.checkStart();
                else if (!i) {
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
                    i = this.media;
                if (((this.media = null), !n && (i && this.removeMediaListeners(i), this.detachedData))) {
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
                    t = (t) => (t ? e.getAssetPlayer(t.identifier) : t),
                    n = (n, r, s, a, o) => {
                        if (n) {
                            let l = n[r].start,
                                u = n.event;
                            if (u) {
                                if ("playout" === r || u.timelineOccupancy !== rV.Point) {
                                    let e = t(s);
                                    (null == e ? void 0 : e.interstitial) === u &&
                                        (l += e.assetItem.startOffset + e[o]);
                                }
                            } else l += ("bufferedPos" === a ? i() : e[a]) - n.start;
                            return l;
                        }
                        return 0;
                    },
                    i = () => {
                        let t = e.bufferedPos;
                        return t === Number.MAX_VALUE ? r("primary") : Math.max(t, 0);
                    },
                    r = (t) => {
                        var n, i;
                        return null != (n = e.primaryDetails) && n.live
                            ? e.primaryDetails.edge
                            : (null == (i = e.schedule) ? void 0 : i.durations[t]) || 0;
                    },
                    s = (i, r) => {
                        var s, a;
                        let o = e.effectivePlayingItem;
                        if ((null != o && null != (s = o.event) && s.restrictions.skip) || !e.schedule) return;
                        e.log(`seek to ${i} "${r}"`);
                        let l = e.effectivePlayingItem,
                            u = e.schedule.findItemIndexAtTime(i, r),
                            c = null == (a = e.schedule.items) ? void 0 : a[u],
                            d = e.getBufferingPlayer(),
                            _ = null == d ? void 0 : d.interstitial,
                            h = null == _ ? void 0 : _.appendInPlace,
                            f = l && e.itemsMatch(l, c);
                        if (l && (h || f)) {
                            let s = t(e.playingAsset),
                                a = (null == s ? void 0 : s.media) || e.primaryMedia;
                            if (a) {
                                let t =
                                        "primary" === r
                                            ? a.currentTime
                                            : n(l, r, e.playingAsset, "timelinePos", "currentTime"),
                                    o = i - t,
                                    u = (h ? t : a.currentTime) + o;
                                if (u >= 0 && (!s || h || u <= s.duration)) {
                                    a.currentTime = u;
                                    return;
                                }
                            }
                        }
                        if (c) {
                            let t = i;
                            if ("primary" !== r) {
                                let e = i - c[r].start;
                                t = c.start + e;
                            }
                            let n = !e.isInterstitial(c);
                            if ((!e.isInterstitial(l) || l.event.appendInPlace) && (n || c.event.appendInPlace)) {
                                let n = e.media || (h ? (null == d ? void 0 : d.media) : null);
                                n && (n.currentTime = t);
                            } else if (l) {
                                let s = e.findItemIndex(l);
                                if (u > s) {
                                    let t = e.schedule.findJumpRestrictedIndex(s + 1, u);
                                    if (t > s) return void e.setSchedulePosition(t);
                                }
                                let a = 0;
                                if (n) (e.timelinePos = t), e.checkBuffer();
                                else {
                                    let e = c.event.assetList,
                                        t = i - (c[r] || c).start;
                                    for (let n = e.length; n--; ) {
                                        let i = e[n];
                                        if (i.duration && t >= i.startOffset && t < i.startOffset + i.duration) {
                                            a = n;
                                            break;
                                        }
                                    }
                                }
                                e.setSchedulePosition(u, a);
                            }
                        }
                    },
                    a = () => {
                        let t = e.effectivePlayingItem;
                        if (e.isInterstitial(t)) return t;
                        let n = e.bufferingItem || e.waitingItem;
                        return e.isInterstitial(n) ? n : null;
                    },
                    o = {
                        get bufferedEnd() {
                            let t = e.bufferingItem || e.waitingItem,
                                i = e.bufferingItem;
                            if (i && i === t) {
                                var l;
                                return (
                                    n(i, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - i.playout.start ||
                                    (null == (l = e.bufferingAsset) ? void 0 : l.startOffset) ||
                                    0
                                );
                            }
                            return 0;
                        },
                        get currentTime() {
                            let t = a(),
                                i = e.effectivePlayingItem;
                            if (i && i === t)
                                return (
                                    n(i, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") -
                                    i.playout.start
                                );
                            return 0;
                        },
                        set currentTime(time) {
                            let t = a(),
                                n = e.effectivePlayingItem;
                            n && n === t && s(time + n.playout.start, "playout");
                        },
                        get duration() {
                            let e = a();
                            if (e) return e.playout.end - e.playout.start;
                            return 0;
                        },
                        get assetPlayers() {
                            var u;
                            let t = null == (u = a()) ? void 0 : u.event.assetList;
                            if (t) return t.map((t) => e.getAssetPlayer(t.identifier));
                            return [];
                        },
                        get playingIndex() {
                            var c;
                            let t = null == (c = a()) ? void 0 : c.event;
                            if (t && e.effectivePlayingAsset) return t.findAssetIndex(e.effectivePlayingAsset);
                            return -1;
                        },
                        get scheduleItem() {
                            return a();
                        },
                    };
                return (this.manager = {
                    get events() {
                        var d;
                        return (null == (d = e.schedule) || null == (d = d.events) ? void 0 : d.slice(0)) || [];
                    },
                    get schedule() {
                        var _;
                        return (null == (_ = e.schedule) || null == (_ = _.items) ? void 0 : _.slice(0)) || [];
                    },
                    get interstitialPlayer() {
                        if (a()) return o;
                        return null;
                    },
                    get playerQueue() {
                        return e.playerQueue.slice(0);
                    },
                    get bufferingAsset() {
                        return e.bufferingAsset;
                    },
                    get bufferingItem() {
                        return e.bufferingItem || e.waitingItem;
                    },
                    get bufferingIndex() {
                        let t = e.bufferingItem || e.waitingItem;
                        return e.findItemIndex(t);
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
                            return i();
                        },
                        get currentTime() {
                            let t = e.timelinePos;
                            return t > 0 ? t : 0;
                        },
                        set currentTime(time) {
                            s(time, "primary");
                        },
                        get duration() {
                            return r("primary");
                        },
                        get seekableStart() {
                            var h;
                            return (null == (h = e.primaryDetails) ? void 0 : h.fragmentStart) || 0;
                        },
                    },
                    integrated: {
                        get bufferedEnd() {
                            return n(
                                e.bufferingItem || e.waitingItem,
                                "integrated",
                                e.bufferingAsset,
                                "bufferedPos",
                                "bufferedEnd",
                            );
                        },
                        get currentTime() {
                            return n(
                                e.effectivePlayingItem,
                                "integrated",
                                e.effectivePlayingAsset,
                                "timelinePos",
                                "currentTime",
                            );
                        },
                        set currentTime(time) {
                            s(time, "integrated");
                        },
                        get duration() {
                            return r("integrated");
                        },
                        get seekableStart() {
                            var f;
                            return ((t, n) => {
                                var i, r;
                                if (0 !== t && "primary" !== n && null != (i = e.schedule) && i.length) {
                                    let i = e.schedule.findItemIndexAtTime(t),
                                        s = null == (r = e.schedule.items) ? void 0 : r[i];
                                    if (s) return t + (s[n].start - s.start);
                                }
                                return t;
                            })((null == (f = e.primaryDetails) ? void 0 : f.fragmentStart) || 0, "integrated");
                        },
                    },
                    skip: () => {
                        let t = e.effectivePlayingItem,
                            n = null == t ? void 0 : t.event;
                        if (n && !n.restrictions.skip) {
                            let i = e.findItemIndex(t);
                            n.appendInPlace
                                ? s(t.playout.start + t.event.duration + 0.001, "playout")
                                : e.advanceAfterAssetEnded(n, i, 1 / 0);
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
                let i = this.media;
                !i &&
                    null != (e = this.bufferingItem) &&
                    null != (e = e.event) &&
                    e.appendInPlace &&
                    (i = this.primaryMedia);
                let s = null == (t = i) ? void 0 : t.currentTime;
                if (void 0 !== s && r(s)) return s;
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
                    i = e.media;
                if (n && i === this.primaryMedia) {
                    if (
                        ((this.bufferingAsset = null),
                        (!t || (this.isInterstitial(t) && !t.event.appendInPlace)) && t && i)
                    ) {
                        this.detachedData = { media: i };
                        return;
                    }
                    let n = e.transferMedia();
                    this.log(`transfer MediaSource from ${e} ${e$(n)}`), (this.detachedData = n);
                } else t && i && (this.shouldPlay || (this.shouldPlay = !i.paused));
            }
            transferMediaTo(e, t) {
                var n, i;
                let r;
                if (e.media === t) return;
                let s = null,
                    a = this.hls,
                    o = e !== a,
                    l = o && e.interstitial.appendInPlace,
                    u = null == (n = this.detachedData) ? void 0 : n.mediaSource;
                if (a.media) l && ((s = a.transferMedia()), (this.detachedData = s)), (r = "Primary");
                else if (u) {
                    let e = this.getBufferingPlayer();
                    e ? ((s = e.transferMedia()), (r = `${e}`)) : (r = "detached MediaSource");
                } else r = "detached media";
                if (!s) {
                    if (u) (s = this.detachedData), this.log(`using detachedData: MediaSource ${e$(s)}`);
                    else if (!this.detachedData || a.media === t) {
                        let e = this.playerQueue;
                        e.length > 1 &&
                            e.forEach((e) => {
                                if (o && e.interstitial.appendInPlace !== l) {
                                    let t = e.interstitial;
                                    this.clearInterstitial(e.interstitial, null),
                                        (t.appendInPlace = !1),
                                        t.appendInPlace &&
                                            this.warn(`Could not change append strategy for queued assets ${t}`);
                                }
                            }),
                            this.hls.detachMedia(),
                            (this.detachedData = { media: t });
                    }
                }
                let c = s && "mediaSource" in s && (null == (i = s.mediaSource) ? void 0 : i.readyState) !== "closed",
                    d = c && s ? s : t;
                this.log(
                    `${c ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${r} (media.currentTime: ${t.currentTime})`,
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
                    i = this.effectivePlayingItem;
                if (-1 === n) {
                    let n = this.hls.startPosition;
                    if ((this.log(rZ("checkStart", n)), (this.timelinePos = n), t.length && t[0].cue.pre)) {
                        let n = e.findEventIndex(t[0].identifier);
                        this.setSchedulePosition(n);
                    } else if (n >= 0 || !this.primaryLive) {
                        let t = (this.timelinePos = n > 0 ? n : 0),
                            i = e.findItemIndexAtTime(t);
                        this.setSchedulePosition(i);
                    }
                } else if (i && !this.playingItem) {
                    let t = e.findItemIndex(i);
                    this.setSchedulePosition(t);
                }
            }
            advanceAssetBuffering(e, t) {
                let n = e.event,
                    i = n.findAssetIndex(t),
                    r = rY(n, i);
                if (n.isAssetPastPlayoutLimit(r)) {
                    if (this.schedule) {
                        var s;
                        let t = null == (s = this.schedule.items) ? void 0 : s[this.findItemIndex(e) + 1];
                        t && this.bufferedToItem(t);
                    }
                } else this.bufferedToEvent(e, r);
            }
            advanceAfterAssetEnded(e, t, n) {
                let i = rY(e, n);
                if (e.isAssetPastPlayoutLimit(i)) {
                    if (this.schedule) {
                        let n = this.schedule.items;
                        if (n) {
                            let i = t + 1;
                            if (i >= n.length) return void this.setSchedulePosition(-1);
                            let r = e.resumeTime;
                            this.timelinePos < r &&
                                (this.log(rZ("advanceAfterAssetEnded", r)),
                                (this.timelinePos = r),
                                e.appendInPlace && this.advanceInPlace(r),
                                this.checkBuffer(this.bufferedPos < r)),
                                this.setSchedulePosition(i);
                        }
                    }
                } else {
                    if (e.appendInPlace) {
                        let t = e.assetList[i];
                        t && this.advanceInPlace(t.timelineStart);
                    }
                    this.setSchedulePosition(t, i);
                }
            }
            setScheduleToAssetAtTime(e, t) {
                let n = this.schedule;
                if (!n) return;
                let i = t.parentIdentifier,
                    r = n.getEvent(i);
                if (r) {
                    let t = n.findEventIndex(i),
                        s = n.findAssetIndex(r, e);
                    this.advanceAfterAssetEnded(r, t, s - 1);
                }
            }
            setSchedulePosition(e, t) {
                var n, i, r;
                let s = null == (n = this.schedule) ? void 0 : n.items;
                if (!s || this.playbackDisabled) return;
                let a = e >= 0 ? s[e] : null;
                this.log(`setSchedulePosition ${e}, ${t} (${a ? rz(a) : a}) pos: ${this.timelinePos}`);
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
                            (this.log(`INTERSTITIAL_ASSET_ENDED ${t + 1}/${n.assetList.length} ${rW(c)}`),
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
                            _.media && !(null != (i = this.detachedData) && i.mediaSource) && _.detachMedia();
                    }
                    if (
                        !this.eventItemsMatch(o, a) &&
                        ((this.endedItem = o),
                        (this.playingItem = null),
                        this.log(`INTERSTITIAL_ENDED ${n} ${rz(o)}`),
                        (n.hasPlayed = !0),
                        this.hls.trigger(u.INTERSTITIAL_ENDED, { event: n, schedule: s.slice(0), scheduleIndex: e }),
                        n.cue.once)
                    ) {
                        this.updateSchedule();
                        let e = null == (r = this.schedule) ? void 0 : r.items;
                        if (a && e) {
                            let n = this.findItemIndex(a);
                            this.advanceSchedule(n, e, t, o, l);
                        }
                        return;
                    }
                }
                this.advanceSchedule(e, s, t, o, l);
            }
            advanceSchedule(e, t, n, i, r) {
                let s = this.schedule;
                if (!s) return;
                let a = t[e] || null,
                    o = this.primaryMedia,
                    l = this.playerQueue;
                if (
                    (l.length &&
                        l.forEach((t) => {
                            let n = t.interstitial,
                                i = s.findEventIndex(n.identifier);
                            (i < e || i > e + 1) && this.clearInterstitial(n, a);
                        }),
                    this.isInterstitial(a))
                ) {
                    this.timelinePos = Math.min(Math.max(this.timelinePos, a.start), a.end);
                    let r = a.event;
                    if (void 0 === n) {
                        n = s.findAssetIndex(r, this.timelinePos);
                        let t = rY(r, n - 1);
                        if (r.isAssetPastPlayoutLimit(t) || (r.appendInPlace && this.timelinePos === a.end))
                            return void this.advanceAfterAssetEnded(r, e, n);
                        n = t;
                    }
                    let l = this.waitingItem;
                    this.assetsBuffered(a, o) || this.setBufferingItem(a);
                    let c = this.preloadAssets(r, n);
                    if (
                        (this.eventItemsMatch(a, l || i) ||
                            ((this.waitingItem = a),
                            this.log(`INTERSTITIAL_STARTED ${rz(a)} ${r.appendInPlace ? "append in place" : ""}`),
                            this.hls.trigger(u.INTERSTITIAL_STARTED, {
                                event: r,
                                schedule: t.slice(0),
                                scheduleIndex: e,
                            })),
                        !r.assetListLoaded)
                    )
                        return void this.log(`Waiting for ASSET-LIST to complete loading ${r}`);
                    if ((r.assetListLoader && (r.assetListLoader.destroy(), (r.assetListLoader = void 0)), !o))
                        return void this.log(`Waiting for attachMedia to start Interstitial ${r}`);
                    (this.waitingItem = this.endedItem = null), (this.playingItem = a);
                    let d = r.assetList[n];
                    if (!d) return void this.advanceAfterAssetEnded(r, e, n || 0);
                    if ((c || (c = this.getAssetPlayer(d.identifier)), null === c || c.destroyed)) {
                        let e = r.assetList.length;
                        this.warn(`asset ${n + 1}/${e} player destroyed ${r}`),
                            (c = this.createAssetPlayer(r, d, n)).loadSource();
                    }
                    if (!this.eventItemsMatch(a, this.bufferingItem) && r.appendInPlace && this.isAssetBuffered(d))
                        return;
                    this.startAssetPlayer(c, n, t, e, o), this.shouldPlay && rX(c.media);
                } else
                    a
                        ? (this.resumePrimary(a, e, i), this.shouldPlay && rX(this.hls.media))
                        : r &&
                          this.isInterstitial(i) &&
                          ((this.endedItem = null),
                          (this.playingItem = i),
                          i.event.appendInPlace || this.attachPrimary(s.durations.primary, null));
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
                var i, r;
                if (
                    ((this.playingItem = e),
                    (this.playingAsset = this.endedAsset = null),
                    (this.waitingItem = this.endedItem = null),
                    this.bufferedToItem(e),
                    this.log(`resuming ${rz(e)}`),
                    !(null != (i = this.detachedData) && i.mediaSource))
                ) {
                    let n = this.timelinePos;
                    (n < e.start || n >= e.end) &&
                        ((n = this.getPrimaryResumption(e, t)),
                        this.log(rZ("resumePrimary", n)),
                        (this.timelinePos = n)),
                        this.attachPrimary(n, e);
                }
                if (!n) return;
                let s = null == (r = this.schedule) ? void 0 : r.items;
                s &&
                    (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${rz(e)}`),
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
                    : tN.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >=
                          e.timelineStart + (e.duration || 0);
            }
            attachPrimary(e, t, n) {
                t ? this.setBufferingItem(t) : (this.bufferingItem = this.playingItem), (this.bufferingAsset = null);
                let i = this.primaryMedia;
                if (!i) return;
                let r = this.hls;
                r.media ? this.checkBuffer() : (this.transferMediaTo(r, i), n && this.startLoadingPrimaryAt(e, n)),
                    n || (this.log(rZ("attachPrimary", e)), (this.timelinePos = e), this.startLoadingPrimaryAt(e, n));
            }
            startLoadingPrimaryAt(e, t) {
                var n;
                let i = this.hls;
                !i.loadingEnabled ||
                !i.media ||
                Math.abs(((null == (n = i.mainForwardBufferInfo) ? void 0 : n.start) || i.media.currentTime) - e) > 0.5
                    ? i.startLoad(e, t)
                    : i.bufferingEnabled || i.resumeBuffering();
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
                let i = x(x({}, this.mediaSelection || this.altSelection), {}, { main: n });
                (this.mediaSelection = i),
                    this.schedule.parseInterstitialDateRanges(i, this.hls.config.interstitialAppendInPlace),
                    !this.effectivePlayingItem && this.schedule.items && this.checkStart();
            }
            onAudioTrackUpdated(e, t) {
                let n = this.hls.audioTracks[t.id],
                    i = this.mediaSelection;
                if (!i) {
                    this.altSelection = x(x({}, this.altSelection), {}, { audio: n });
                    return;
                }
                let r = x(x({}, i), {}, { audio: n });
                this.mediaSelection = r;
            }
            onSubtitleTrackUpdated(e, t) {
                let n = this.hls.subtitleTracks[t.id],
                    i = this.mediaSelection;
                if (!i) {
                    this.altSelection = x(x({}, this.altSelection), {}, { subtitles: n });
                    return;
                }
                let r = x(x({}, i), {}, { subtitles: n });
                this.mediaSelection = r;
            }
            onAudioTrackSwitching(e, t) {
                let n = eX(t);
                this.playerQueue.forEach(({ hls: e }) => e && (e.setAudioOption(t) || e.setAudioOption(n)));
            }
            onSubtitleTrackSwitch(e, t) {
                let n = eX(t);
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
                        let i = t[e];
                        if (i.cue.post) {
                            var n;
                            let e = this.schedule.findEventIndex(i.identifier),
                                t = null == (n = this.schedule.items) ? void 0 : n[e];
                            this.isInterstitial(t) &&
                                this.eventItemsMatch(t, this.bufferingItem) &&
                                this.bufferedToItem(t, 0);
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
                let i = null == (n = this.schedule) ? void 0 : n.items;
                return (e && i && i[this.findItemIndex(e, t)]) || null;
            }
            trimInPlace(e, t) {
                if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > 0.25) {
                    e.event.assetList.forEach((t, n) => {
                        e.event.isAssetPastPlayoutLimit(n) && this.clearAssetPlayer(t.identifier, null);
                    });
                    let n = e.end + 0.25,
                        i = tN.bufferInfo(this.primaryMedia, n, 0);
                    (i.end > n || (i.nextStart || 0) > n) &&
                        (this.log(`trim buffered interstitial ${rz(e)} (was ${rz(t)})`),
                        this.attachPrimary(n, null, !0),
                        this.flushFrontBuffer(n));
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
                let i = tN.bufferInfo(this.primaryMedia, this.timelinePos, 0);
                e && (this.bufferedPos = this.timelinePos), e || (e = i.len < 1), this.updateBufferedPos(i.end, n, e);
            }
            updateBufferedPos(e, t, n) {
                let i = this.schedule,
                    r = this.bufferingItem;
                if (this.bufferedPos > e || !i) return;
                if (1 === t.length && this.itemsMatch(t[0], r)) {
                    this.bufferedPos = e;
                    return;
                }
                let s = this.playingItem,
                    a = this.findItemIndex(s),
                    o = i.findItemIndexAtTime(e);
                if (this.bufferedPos < e) {
                    var l;
                    let n = this.findItemIndex(r),
                        i = Math.min(n + 1, t.length - 1),
                        s = t[i];
                    if (
                        (((-1 === o && r && e >= r.end) ||
                            (null != (l = s.event) && l.appendInPlace && e + 0.01 >= s.start)) &&
                            (o = i),
                        this.isInterstitial(r))
                    ) {
                        let e = r.event;
                        if ((i - a > 1 && !1 === e.appendInPlace) || (0 === e.assetList.length && e.assetListLoader))
                            return;
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
                        !this.itemsMatch(s, r) &&
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
                    let { items: i, events: r } = n;
                    if (!i || !r) return t;
                    let s = this.isInterstitial(e),
                        a = this.getBufferingPlayer();
                    (this.bufferingItem = e), (this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos)));
                    let o = a ? a.remaining : t ? t.end - this.timelinePos : 0;
                    if (
                        (this.log(
                            `INTERSTITIALS_BUFFERED_TO_BOUNDARY ${rz(e)}` + (t ? ` (${o.toFixed(2)} remaining)` : ""),
                        ),
                        !this.playbackDisabled)
                    )
                        if (s) {
                            let t = n.findAssetIndex(e.event, this.bufferedPos);
                            e.event.assetList.forEach((e, n) => {
                                let i = this.getAssetPlayer(e.identifier);
                                i && (n === t && i.loadSource(), i.resumeBuffering());
                            });
                        } else this.hls.resumeBuffering(), this.playerQueue.forEach((e) => e.pauseBuffering());
                    this.hls.trigger(u.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
                        events: r.slice(0),
                        schedule: i.slice(0),
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
                        t && t.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e);
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
                    i = 0 === n.assetList.length && !n.assetListLoader,
                    r = n.cue.once;
                if (i || !r) {
                    let e = this.preloadAssets(n, t);
                    if (null != e && e.interstitial.appendInPlace) {
                        let t = this.primaryMedia;
                        t && this.bufferAssetPlayer(e, t);
                    }
                }
            }
            preloadAssets(e, t) {
                let n = e.assetUrl,
                    i = e.assetList.length,
                    r = 0 === i && !e.assetListLoader,
                    s = e.cue.once;
                if (r) {
                    let r,
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
                        e > 0 && (r = Math.round(1e3 * e) / 1e3);
                    }
                    if (
                        (this.log(
                            `Load interstitial asset ${t + 1}/${n ? 1 : i} ${e}${r ? ` live-start: ${o} start-offset: ${r}` : ""}`,
                        ),
                        n)
                    )
                        return this.createAsset(e, 0, 0, s, e.duration, n);
                    let l = this.assetListLoader.loadAssetList(e, r);
                    l && (e.assetListLoader = l);
                } else if (!s && i) {
                    for (let n = t; n < i; n++) {
                        let t = e.assetList[n],
                            i = this.getAssetPlayerQueueIndex(t.identifier);
                        (-1 === i || this.playerQueue[i].destroyed) && !t.error && this.createAssetPlayer(e, t, n);
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
            createAsset(e, t, n, i, r, s) {
                let a = {
                    parentIdentifier: e.identifier,
                    identifier: `${e.identifier}-${t + 1}-${rF(s)}`,
                    duration: r,
                    startOffset: n,
                    timelineStart: i,
                    uri: s,
                };
                return this.createAssetPlayer(e, a, t);
            }
            createAssetPlayer(e, t, n) {
                let i = this.hls,
                    r = i.userConfig,
                    s = r.videoPreference,
                    a = i.loadLevelObj || i.levels[i.currentLevel];
                (s || a) &&
                    ((s = M({}, s)),
                    a.videoCodec && (s.videoCodec = a.videoCodec),
                    a.videoRange && (s.allowedVideoRanges = [a.videoRange]));
                let c = i.audioTracks[i.audioTrack],
                    d = i.subtitleTracks[i.subtitleTrack],
                    _ = 0;
                if (this.primaryLive || e.appendInPlace) {
                    let e = this.timelinePos - t.timelineStart;
                    if (e > 1) {
                        let n = t.duration;
                        n && e < n && (_ = e);
                    }
                }
                let h = t.identifier,
                    f = x(
                        x({}, r),
                        {},
                        {
                            maxMaxBufferLength: Math.min(180, i.config.maxMaxBufferLength),
                            autoStartLoad: !0,
                            startFragPrefetch: !0,
                            primarySessionId: i.sessionId,
                            assetPlayerId: h,
                            abrEwmaDefaultEstimate: i.bandwidthEstimate,
                            interstitialsController: void 0,
                            startPosition: _,
                            liveDurationInfinity: !1,
                            testBandwidth: !1,
                            videoPreference: s,
                            audioPreference: c || r.audioPreference,
                            subtitlePreference: d || r.subtitlePreference,
                        },
                    );
                e.appendInPlace &&
                    ((e.appendInPlaceStarted = !0), t.timelineStart && (f.timelineOffset = t.timelineStart));
                let p = f.cmcd;
                null != p && p.sessionId && p.contentId && (f.cmcd = M({}, p, { contentId: rF(t.uri) })),
                    this.getAssetPlayer(h) && this.warn(`Duplicate date range identifier ${e} and asset ${h}`);
                let E = new rK(this.HlsPlayerClass, f, e, t);
                this.playerQueue.push(E), (e.assetList[n] = t);
                let m = !0,
                    g = (i) => {
                        if (i.live) {
                            var r;
                            let t = Error(`Interstitials MUST be VOD assets ${e}`),
                                i = {
                                    fatal: !0,
                                    type: o.OTHER_ERROR,
                                    details: l.INTERSTITIAL_ASSET_ITEM_ERROR,
                                    error: t,
                                },
                                s = (null == (r = this.schedule) ? void 0 : r.findEventIndex(e.identifier)) || -1;
                            this.handleAssetItemError(i, e, s, n, t.message);
                            return;
                        }
                        let s = i.edge - i.fragmentStart,
                            a = t.duration;
                        (m || null === a || s > a) &&
                            ((m = !1),
                            this.log(`Interstitial asset "${h}" duration change ${a} > ${s}`),
                            (t.duration = s),
                            this.updateSchedule());
                    };
                E.on(u.LEVEL_UPDATED, (e, { details: t }) => g(t)),
                    E.on(u.LEVEL_PTS_UPDATED, (e, { details: t }) => g(t)),
                    E.on(u.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
                let A = (e, t) => {
                    let n = this.getAssetPlayer(h);
                    if (n && t.tracks) {
                        n.off(u.BUFFER_CODECS, A), (n.tracks = t.tracks);
                        let e = this.primaryMedia;
                        this.bufferingAsset === n.assetItem && e && !n.media && this.bufferAssetPlayer(n, e);
                    }
                };
                E.on(u.BUFFER_CODECS, A);
                let I = () => {
                    var n;
                    let i = this.getAssetPlayer(h);
                    if ((this.log(`buffered to end of asset ${i}`), !i || !this.schedule)) return;
                    let r = this.schedule.findEventIndex(e.identifier),
                        s = null == (n = this.schedule.items) ? void 0 : n[r];
                    this.isInterstitial(s) && this.advanceAssetBuffering(s, t);
                };
                E.on(u.BUFFERED_TO_END, I);
                let T = (t) => () => {
                    if (!this.getAssetPlayer(h) || !this.schedule) return;
                    this.shouldPlay = !0;
                    let n = this.schedule.findEventIndex(e.identifier);
                    this.advanceAfterAssetEnded(e, n, t);
                };
                return (
                    E.once(u.MEDIA_ENDED, T(n)),
                    E.once(u.PLAYOUT_LIMIT_REACHED, T(1 / 0)),
                    E.on(u.ERROR, (t, i) => {
                        if (!this.schedule) return;
                        let r = this.getAssetPlayer(h);
                        i.details === l.BUFFER_STALLED_ERROR
                            ? null != r && r.appendInPlace
                                ? this.handleInPlaceStall(e)
                                : (this.onTimeupdate(), this.checkBuffer(!0))
                            : this.handleAssetItemError(
                                  i,
                                  e,
                                  this.schedule.findEventIndex(e.identifier),
                                  n,
                                  `Asset player error ${i.error} ${e}`,
                              );
                    }),
                    E.on(u.DESTROYING, () => {
                        if (!this.getAssetPlayer(h) || !this.schedule) return;
                        let t = Error(`Asset player destroyed unexpectedly ${h}`),
                            i = { fatal: !0, type: o.OTHER_ERROR, details: l.INTERSTITIAL_ASSET_ITEM_ERROR, error: t };
                        this.handleAssetItemError(i, e, this.schedule.findEventIndex(e.identifier), n, t.message);
                    }),
                    this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${rW(t)}`),
                    this.hls.trigger(u.INTERSTITIAL_ASSET_PLAYER_CREATED, {
                        asset: t,
                        assetListIndex: n,
                        event: e,
                        player: E,
                    }),
                    E
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
                    this.log(`clear ${e} toSegment: ${t ? rz(t) : t}`),
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
            startAssetPlayer(e, t, n, i, r) {
                let { interstitial: s, assetItem: a, assetId: o } = e,
                    l = s.assetList.length,
                    c = this.playingAsset;
                (this.endedAsset = null),
                    (this.playingAsset = a),
                    (c && c.identifier === o) ||
                        (c && (this.clearAssetPlayer(c.identifier, n[i]), delete c.error),
                        this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${l} ${rW(a)}`),
                        this.hls.trigger(u.INTERSTITIAL_ASSET_STARTED, {
                            asset: a,
                            assetListIndex: t,
                            event: s,
                            schedule: n.slice(0),
                            scheduleIndex: i,
                            player: e,
                        })),
                    this.bufferAssetPlayer(e, r);
            }
            bufferAssetPlayer(e, t) {
                var n, i;
                if (!this.schedule) return;
                let { interstitial: r, assetItem: s } = e,
                    a = this.schedule.findEventIndex(r.identifier),
                    u = null == (n = this.schedule.items) ? void 0 : n[a];
                if (!u) return;
                e.loadSource(), this.setBufferingItem(u), (this.bufferingAsset = s);
                let c = this.getBufferingPlayer();
                if (c === e) return;
                let d = r.appendInPlace;
                if (d && (null == c ? void 0 : c.interstitial.appendInPlace) === !1) return;
                let _ =
                    (null == c ? void 0 : c.tracks) ||
                    (null == (i = this.detachedData) ? void 0 : i.tracks) ||
                    this.requiredTracks;
                if (d && s !== this.playingAsset) {
                    if (!e.tracks) return void this.log(`Waiting for track info before buffering ${e}`);
                    if (_ && !j(_, e.tracks)) {
                        let t = Error(
                                `Asset ${rW(s)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(_)}')`,
                            ),
                            n = { fatal: !0, type: o.OTHER_ERROR, details: l.INTERSTITIAL_ASSET_ITEM_ERROR, error: t },
                            i = r.findAssetIndex(s);
                        this.handleAssetItemError(n, r, a, i, t.message);
                        return;
                    }
                }
                this.transferMediaTo(e, t);
            }
            handleInPlaceStall(e) {
                let t = this.schedule,
                    n = this.primaryMedia;
                if (!t || !n) return;
                let i = n.currentTime,
                    r = t.findAssetIndex(e, i),
                    s = e.assetList[r];
                if (s) {
                    let a = this.getAssetPlayer(s.identifier);
                    if (a) {
                        let o = a.currentTime || i - s.timelineStart,
                            l = a.duration - o;
                        if (
                            (this.warn(`Stalled at ${o} of ${o + l} in ${a} ${e} (media.currentTime: ${i})`),
                            o && (l / n.playbackRate < 0.5 || a.bufferedInPlaceToEnd(n)) && a.hls)
                        ) {
                            let n = t.findEventIndex(e.identifier);
                            this.advanceAfterAssetEnded(e, n, r);
                        }
                    }
                }
            }
            advanceInPlace(e) {
                let t = this.primaryMedia;
                t && t.currentTime < e && (t.currentTime = e);
            }
            handleAssetItemError(e, t, n, i, r) {
                if (e.details === l.BUFFER_STALLED_ERROR) return;
                let s = t.assetList[i] || null;
                if ((this.warn(`INTERSTITIAL_ASSET_ERROR ${s ? rW(s) : s} ${e.error}`), !this.schedule)) return;
                let a = (null == s ? void 0 : s.identifier) || "",
                    o = this.getAssetPlayerQueueIndex(a),
                    c = this.playerQueue[o] || null,
                    d = this.schedule.items,
                    _ = M({}, e, {
                        fatal: !1,
                        errorAction: tr(!0),
                        asset: s,
                        assetListIndex: i,
                        event: t,
                        schedule: d,
                        scheduleIndex: n,
                        player: c,
                    });
                if ((this.hls.trigger(u.INTERSTITIAL_ASSET_ERROR, _), !e.fatal)) return;
                let h = this.playingAsset,
                    f = this.bufferingAsset,
                    p = Error(r);
                if ((s && (this.clearAssetPlayer(a, null), (s.error = p)), t.assetList.some((e) => !e.error)))
                    for (let e = i; e < t.assetList.length; e++) this.resetAssetPlayer(t.assetList[e].identifier);
                else t.error = p;
                this.updateSchedule(!0),
                    t.error
                        ? this.primaryFallback(t)
                        : h && h.identifier === a
                          ? this.advanceAfterAssetEnded(t, n, i)
                          : f &&
                            f.identifier === a &&
                            this.isInterstitial(this.bufferingItem) &&
                            this.advanceAssetBuffering(this.bufferingItem, f);
            }
            primaryFallback(e) {
                let t = e.timelineStart,
                    n = this.effectivePlayingItem;
                if (n) {
                    this.log(
                        `Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${rz(n)} error: ${e.error}`,
                    );
                    let i = this.timelinePos;
                    -1 === i && (i = this.hls.startPosition);
                    let r = this.updateItem(n, i);
                    if (
                        (this.itemsMatch(n, r) && this.clearInterstitial(e, null),
                        e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t)),
                        !this.schedule)
                    )
                        return;
                    let s = this.schedule.findItemIndexAtTime(i);
                    this.setSchedulePosition(s);
                } else this.checkStart();
            }
            onAssetListLoaded(e, t) {
                var n, i, r;
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
                let h = null == (i = this.bufferingItem) ? void 0 : i.event;
                if (_) {
                    let e = this.schedule.findEventIndex(a),
                        t = null == (r = this.schedule.items) ? void 0 : r[e];
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
                } else if ((null == h ? void 0 : h.identifier) === a) {
                    let e = s.assetList[0];
                    if (e) {
                        let t = this.getAssetPlayer(e.identifier);
                        if (h.appendInPlace) {
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
                            if (this.isInterstitial(e) && e.event.appendInPlace)
                                return void this.handleInPlaceStall(e.event);
                            this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`),
                                this.onTimeupdate(),
                                this.checkBuffer(!0);
                        }
                    }
            }
        },
    },
);
class sB extends tI {
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
        this.setInterval(100), (this.mediaSource = t.mediaSource);
        let n = (this.media = t.media);
        ny(n, "playing", this.onMediaPlaying), ny(n, "waiting", this.onMediaWaiting), ny(n, "ended", this.onMediaEnded);
    }
    onMediaDetaching(e, t) {
        this.clearInterval();
        let { media: n } = this;
        n &&
            (nN(n, "playing", this.onMediaPlaying),
            nN(n, "waiting", this.onMediaWaiting),
            nN(n, "ended", this.onMediaEnded),
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
        var n, i, r;
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
        if (!tN.getBuffered(a).length) {
            this.nudgeRetry = 0;
            return;
        }
        let _ = tN.bufferInfo(a, e, 0),
            h = _.nextStart || 0,
            f = this.fragmentTracker;
        if (o && f && this.hls) {
            let t = sH(this.hls.inFlightFragments, e),
                n = _.len > 2,
                i = !h || t || (h - e > 2 && !f.getPartialFragment(e));
            if (n || i) return;
            this.moved = !1;
        }
        let p = null == (i = this.hls) ? void 0 : i.latestLevelDetails;
        if (!this.moved && null !== this.stalled && f) {
            if (!(_.len > 0) && !h) return;
            let t = Math.max(h, _.start || 0) - e,
                n = null != p && p.live ? 2 * p.targetduration : 2,
                i = sY(e, f);
            if (t > 0 && (t <= n || i)) {
                a.paused || this._trySkipBufferHole(i);
                return;
            }
        }
        let E = s.detectStallWithCurrentTimeMs,
            m = self.performance.now(),
            g = this.waiting,
            A = this.stalled;
        if (null === A)
            if (g > 0 && m - g < E) A = this.stalled = g;
            else {
                this.stalled = m;
                return;
            }
        let I = m - A;
        if (!o && (I >= E || g) && this.hls) {
            if (
                (null == (r = this.mediaSource) ? void 0 : r.readyState) === "ended" &&
                !(null != p && p.live) &&
                1 > Math.abs(e - ((null == p ? void 0 : p.edge) || 0))
            ) {
                if (this.ended) return;
                (this.ended = e || 1), this.hls.trigger(u.MEDIA_ENDED, { stalled: !0 });
                return;
            }
            if ((this._reportStall(_), !this.media || !this.hls)) return;
        }
        let T = tN.bufferInfo(a, e, s.maxBufferHole);
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
        let i = this.buffered.video;
        if (
            this.hls &&
            this.media &&
            this.fragmentTracker &&
            null != (n = this.buffered.audio) &&
            n.length &&
            i &&
            i.length > 1 &&
            e > i.end(0)
        ) {
            let n = tN.bufferedInfo(tN.timeRangesToArray(this.buffered.audio), e, 0);
            if (n.len > 1 && t >= n.start) {
                let n = tN.timeRangesToArray(i),
                    r = tN.bufferedInfo(n, t, 0).bufferedIndex;
                if (r > -1 && r < n.length - 1) {
                    let t = tN.bufferedInfo(n, e, 0).bufferedIndex,
                        i = n[r].end,
                        s = n[r + 1].start;
                    if ((-1 === t || t > r) && s - i < 1 && e - i < 2) {
                        let n = Error(
                            `nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${i} -> ${s} buffered index: ${t}`,
                        );
                        this.warn(n.message), (this.media.currentTime += 1e-6);
                        let r = sY(e, this.fragmentTracker);
                        r && "fragment" in r ? (r = r.fragment) : r || (r = void 0);
                        let a = tN.bufferInfo(this.media, e, 0);
                        this.hls.trigger(u.ERROR, {
                            type: o.MEDIA_ERROR,
                            details: l.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: n,
                            reason: n.message,
                            frag: r,
                            buffer: a.len,
                            bufferInfo: a,
                        });
                    }
                }
            }
        }
    }
    _tryFixBufferStall(e, t, n) {
        var i, r;
        let { fragmentTracker: s, media: a } = this,
            o = null == (i = this.hls) ? void 0 : i.config;
        if (!a || !s || !o) return;
        let l = null == (r = this.hls) ? void 0 : r.latestLevelDetails,
            u = sY(n, s);
        if ((u || (null != l && l.live && n < l.fragmentStart)) && (this._trySkipBufferHole(u) || !this.media)) return;
        let c = e.buffered,
            d = this.adjacentTraversal(e, n);
        ((c && c.length > 1 && e.len > o.maxBufferHole) || (e.nextStart && (e.nextStart - n < o.maxBufferHole || d))) &&
            (t > 1e3 * o.highBufferWatchdogPeriod || this.waiting) &&
            (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
    }
    adjacentTraversal(e, t) {
        let n = this.fragmentTracker,
            i = e.nextStart;
        if (n && i) {
            let e = n.getFragAtPos(t, O),
                r = n.getFragAtPos(i, O);
            if (e && r) return r.sn - e.sn < 2;
        }
        return !1;
    }
    _reportStall(e) {
        let { hls: t, media: n, stallReported: i, stalled: r } = this;
        if (!i && null !== r && n && t) {
            this.stallReported = !0;
            let i = Error(`Playback stalling at @${n.currentTime} due to low buffer (${e$(e)})`);
            this.warn(i.message),
                t.trigger(u.ERROR, {
                    type: o.MEDIA_ERROR,
                    details: l.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    error: i,
                    buffer: e.len,
                    bufferInfo: e,
                    stalled: { start: r },
                });
        }
    }
    _trySkipBufferHole(e) {
        var t, n;
        let { fragmentTracker: i, media: r } = this,
            s = null == (t = this.hls) ? void 0 : t.config;
        if (!r || !i || !s) return 0;
        let a = r.currentTime,
            c = tN.bufferInfo(r, a, 0),
            d = a < c.start ? c.start : c.nextStart;
        if (d && this.hls) {
            let t = c.len <= s.maxBufferHole,
                _ = c.len > 0 && c.len < 1 && r.readyState < 3,
                h = d - a;
            if (h > 0 && (t || _)) {
                if (h > s.maxBufferHole) {
                    let t = !1;
                    if (0 === a) {
                        let e = i.getAppendedFrag(0, O);
                        e && d < e.end && (t = !0);
                    }
                    if (!t && e) {
                        if (!(null != (n = this.hls.loadLevelObj) && n.details) || sH(this.hls.inFlightFragments, d))
                            return 0;
                        let t = !1,
                            r = e.end;
                        for (; r < d; ) {
                            let e = sY(r, i);
                            if (e) r += e.duration;
                            else {
                                t = !0;
                                break;
                            }
                        }
                        if (t) return 0;
                    }
                }
                let t = Math.max(d + 0.05, a + 0.1);
                if (
                    (this.warn(`skipping hole, adjusting currentTime from ${a} to ${t}`),
                    (this.moved = !0),
                    (r.currentTime = t),
                    !(null != e && e.gap))
                ) {
                    let n = Error(`fragment loaded with buffer holes, seeking from ${a} to ${t}`),
                        i = {
                            type: o.MEDIA_ERROR,
                            details: l.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: n,
                            reason: n.message,
                            buffer: c.len,
                            bufferInfo: c,
                        };
                    e && ("fragment" in e ? (i.part = e) : (i.frag = e)), this.hls.trigger(u.ERROR, i);
                }
                return t;
            }
        }
        return 0;
    }
    _tryNudgeBuffer(e) {
        let { hls: t, media: n, nudgeRetry: i } = this,
            r = null == t ? void 0 : t.config;
        if (!n || !r) return 0;
        let s = n.currentTime;
        if ((this.nudgeRetry++, i < r.nudgeMaxRetry)) {
            let a = s + (i + 1) * r.nudgeOffset,
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
            let n = Error(`Playhead still not moving while enough data buffered @${s} after ${r.nudgeMaxRetry} nudges`);
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
function sH(e, t) {
    let n = sj(e.main);
    if (n && n.start <= t) return n;
    let i = sj(e.audio);
    return i && i.start <= t ? i : null;
}
function sj(e) {
    if (!e) return null;
    switch (e.state) {
        case nR:
        case nC:
        case nP:
        case nx:
            return null;
    }
    return e.frag;
}
function sY(e, t) {
    return t.getAppendedFrag(e, O) || t.getPartialFragment(e);
}
function sW() {
    if ("u" > typeof self) return self.VTTCue || self.TextTrackCue;
}
function sK(e, t, n, i, r) {
    let s = new e(t, n, "");
    try {
        (s.value = i), r && (s.type = r);
    } catch (a) {
        s = new e(t, n, e$(r ? x({ type: r }, i) : i));
    }
    return s;
}
let s$ = (() => {
    let e = sW();
    try {
        e && new e(0, 1 / 0, "");
    } catch (e) {
        return Number.MAX_VALUE;
    }
    return 1 / 0;
})();
class sz {
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
                (this.id3Track && (this.removeCues && rk(this.id3Track, this.onEventCueEnter), (this.id3Track = null)),
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
                if ("metadata" === n.kind && "id3" === n.label) return rP(n, this.media), n;
            }
            return this.media.addTextTrack("metadata", "id3");
        }
    }
    onFragParsingMetadata(e, t) {
        if (!this.media || !this.hls) return;
        let { enableEmsgMetadataCues: n, enableID3MetadataCues: i } = this.hls.config;
        if (!n && !i) return;
        let { samples: r } = t;
        this.id3Track || (this.id3Track = this.createTrack(this.media));
        let s = sW();
        if (s)
            for (let e = 0; e < r.length; e++) {
                let t = r[e].type;
                if ((t === n4.emsg && !n) || !i) continue;
                let a = n2(r[e].data),
                    o = r[e].pts,
                    l = o + r[e].duration;
                l > s$ && (l = s$), l - o <= 0 && (l = o + 0.25);
                for (let e = 0; e < a.length; e++) {
                    let n = a[e];
                    if (!n3(n)) {
                        this.updateId3CueEnds(o, t);
                        let e = sK(s, o, l, n, t);
                        e && this.id3Track.addCue(e);
                    }
                }
            }
    }
    updateId3CueEnds(e, t) {
        var n;
        let i = null == (n = this.id3Track) ? void 0 : n.cues;
        if (i)
            for (let n = i.length; n--; ) {
                let r = i[n];
                r.type === t && r.startTime < e && r.endTime === s$ && (r.endTime = e);
            }
    }
    onBufferFlushing(e, { startOffset: t, endOffset: n, type: i }) {
        let { id3Track: r, hls: s } = this;
        if (!s) return;
        let {
            config: { enableEmsgMetadataCues: a, enableID3MetadataCues: o },
        } = s;
        r &&
            (a || o) &&
            rU(
                r,
                t,
                n,
                "audio" === i
                    ? (e) => e.type === n4.audioId3 && o
                    : "video" === i
                      ? (e) => e.type === n4.emsg && a
                      : (e) => (e.type === n4.audioId3 && o) || (e.type === n4.emsg && a),
            );
    }
    onLevelUpdated(e, { details: t }) {
        this.updateDateRangeCues(t, !0);
    }
    onLevelPtsUpdated(e, t) {
        Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
    }
    updateDateRangeCues(e, t) {
        var n, i;
        if (!this.hls || !this.media) return;
        let {
            assetPlayerId: s,
            timelineOffset: a,
            enableDateRangeMetadataCues: o,
            interstitialsController: l,
        } = this.hls.config;
        if (!o) return;
        let u = sW();
        if (s && a && !l) {
            let { fragmentStart: t, fragmentEnd: n } = e,
                i = this.assetCue;
            i
                ? ((i.startTime = t), (i.endTime = n))
                : u &&
                  (i = this.assetCue =
                      sK(u, t, n, { assetPlayerId: this.hls.config.assetPlayerId }, "hlsjs.interstitial.asset")) &&
                  ((i.id = s),
                  this.id3Track || (this.id3Track = this.createTrack(this.media)),
                  this.id3Track.addCue(i),
                  i.addEventListener("enter", this.onEventCueEnter));
        }
        if (!e.hasProgramDateTime) return;
        let { id3Track: c } = this,
            { dateRanges: d } = e,
            _ = Object.keys(d),
            h = this.dateRangeCuesAppended;
        if (c && t)
            if (null != (n = c.cues) && n.length) {
                let e = Object.keys(h).filter((e) => !_.includes(e));
                for (let t = e.length; t--; ) {
                    let n = e[t],
                        r = null == (i = h[n]) ? void 0 : i.cues;
                    delete h[n],
                        r &&
                            Object.keys(r).forEach((e) => {
                                let t = r[e];
                                if (t) {
                                    t.removeEventListener("enter", this.onEventCueEnter);
                                    try {
                                        c.removeCue(t);
                                    } catch (e) {}
                                }
                            });
                }
            } else h = this.dateRangeCuesAppended = {};
        let f = e.fragments[e.fragments.length - 1];
        if (0 !== _.length && r(null == f ? void 0 : f.programDateTime)) {
            this.id3Track || (this.id3Track = this.createTrack(this.media));
            for (let e = 0; e < _.length; e++) {
                let t = _[e],
                    n = d[t],
                    i = n.startTime,
                    r = h[t],
                    s = (null == r ? void 0 : r.cues) || {},
                    a = (null == r ? void 0 : r.durationKnown) || !1,
                    o = s$,
                    { duration: c, endDate: f } = n;
                if (f && null !== c) (o = i + c), (a = !0);
                else if (n.endOnNext && !a) {
                    let e = _.reduce((e, t) => {
                        if (t !== n.id) {
                            let i = d[t];
                            if (i.class === n.class && i.startDate > n.startDate && (!e || n.startDate < e.startDate))
                                return i;
                        }
                        return e;
                    }, null);
                    e && ((o = e.startTime), (a = !0));
                }
                let p = Object.keys(n.attr);
                for (let e = 0; e < p.length; e++) {
                    let c = p[e];
                    if (
                        "ID" === c ||
                        "CLASS" === c ||
                        "CUE" === c ||
                        "START-DATE" === c ||
                        "DURATION" === c ||
                        "END-DATE" === c ||
                        "END-ON-NEXT" === c
                    )
                        continue;
                    let d = s[c];
                    if (d)
                        a && !(null != r && r.durationKnown)
                            ? (d.endTime = o)
                            : Math.abs(d.startTime - i) > 0.01 && ((d.startTime = i), (d.endTime = o));
                    else if (u) {
                        let e = n.attr[c];
                        ("SCTE35-OUT" === c || "SCTE35-IN" === c || "SCTE35-CMD" === c) && (e = K(e));
                        let r = sK(u, i, o, { key: c, data: e }, n4.dateRange);
                        r &&
                            ((r.id = t),
                            this.id3Track.addCue(r),
                            (s[c] = r),
                            l &&
                                ("X-ASSET-LIST" === c || "X-ASSET-URL" === c) &&
                                r.addEventListener("enter", this.onEventCueEnter));
                    }
                }
                h[t] = { cues: s, dateRange: n, durationKnown: a };
            }
        }
    }
}
class sq {
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
                let { lowLatencyMode: i, maxLiveSyncPlaybackRate: r } = this.config;
                if (!i || 1 === r || !t.live) return;
                let s = this.targetLatency;
                if (null === s) return;
                let a = n - s;
                if (a < Math.min(this.maxLatency, s + t.targetduration) && a > 0.05 && this.forwardBufferLength > 1) {
                    let t = Math.min(
                        Math.min(2, Math.max(1, r)),
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
        let { holdBack: t, partHoldBack: n, targetduration: i } = e,
            { liveSyncDuration: r, liveSyncDurationCount: s, lowLatencyMode: a } = this.config,
            o = this.hls.userConfig,
            l = (a && n) || t;
        return (
            (this._targetLatencyUpdated || o.liveSyncDuration || o.liveSyncDurationCount || 0 === l) &&
                (l = void 0 !== r ? r : s * i),
            l + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, i)
        );
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
        let i = n.edge,
            r = e - t - this.edgeStalled;
        return Math.min(
            Math.max(i - n.totalduration, r),
            i - ((this.config.lowLatencyMode && n.partTarget) || n.targetduration),
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
        var n, i;
        e.playbackRate !== t &&
            (null == (n = this.hls) ||
                n.logger.debug(
                    `[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${null == ((i = this.targetLatency)) ? void 0 : i.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`,
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
class sX extends iK {
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
            i = [],
            r = {},
            s = {},
            a = !1,
            o = !1,
            l = !1;
        t.levels.forEach((e) => {
            let t = e.attrs,
                { audioCodec: u, videoCodec: c } = e;
            u && (e.audioCodec = u = eL(u, n) || void 0),
                c &&
                    (c = e.videoCodec =
                        (function (e) {
                            let t = e.split(",");
                            for (let e = 0; e < t.length; e++) {
                                let n = t[e].split(".");
                                n.length > 2 &&
                                    "avc1" === n[0] &&
                                    (t[e] =
                                        `avc1.${parseInt(n[1]).toString(16)}${("000" + parseInt(n[2]).toString(16)).slice(-4)}`);
                            }
                            return t.join(",");
                        })(c));
            let { width: d, height: _, unknownCodecs: h } = e,
                f = (null == h ? void 0 : h.length) || 0;
            if (
                (a || (a = !!(d && _)),
                o || (o = !!c),
                l || (l = !!u),
                f || (u && !this.isAudioSupported(u)) || (c && !this.isVideoSupported(c)))
            )
                return void this.log(`Some or all CODECS not supported "${t.CODECS}"`);
            let { CODECS: p, "FRAME-RATE": E, "HDCP-LEVEL": m, "PATHWAY-ID": g, RESOLUTION: A, "VIDEO-RANGE": I } = t,
                T = `${g || "."}-`,
                S = `${T}${e.bitrate}-${A}-${E}-${p}-${I}-${m}`;
            if (r[S])
                if (r[S].uri === e.url || e.attrs["PATHWAY-ID"])
                    r[S].addGroupId("audio", t.AUDIO), r[S].addGroupId("text", t.SUBTITLES);
                else {
                    let t = (s[S] += 1);
                    e.attrs["PATHWAY-ID"] = Array(t + 1).join(".");
                    let n = this.createLevel(e);
                    (r[S] = n), i.push(n);
                }
            else {
                let t = this.createLevel(e);
                (r[S] = t), (s[S] = 1), i.push(t);
            }
        }),
            this.filterAndSortMediaOptions(i, t, a, o, l);
    }
    createLevel(e) {
        let t = new eW(e),
            n = e.supplemental;
        if (null != n && n.videoCodec && !this.isVideoSupported(n.videoCodec)) {
            let e = Error(`SUPPLEMENTAL-CODECS not supported "${n.videoCodec}"`);
            this.log(e.message), (t.supportedResult = eG(e, []));
        }
        return t;
    }
    isAudioSupported(e) {
        return eN(e, "audio", this.hls.config.preferManagedMediaSource);
    }
    isVideoSupported(e) {
        return eN(e, "video", this.hls.config.preferManagedMediaSource);
    }
    filterAndSortMediaOptions(e, t, n, i, r) {
        var s, a;
        let c = [],
            d = [],
            _ = e,
            h = (null == (s = t.stats) ? void 0 : s.parsing) || {};
        if (
            ((n || i) &&
                r &&
                (_ = _.filter(({ videoCodec: e, videoRange: t, width: n, height: i }) => {
                    var r;
                    return (!!e || !!(n && i)) && !!(r = t) && eH.indexOf(r) > -1;
                })),
            0 === _.length)
        ) {
            Promise.resolve().then(() => {
                if (this.hls) {
                    let e = "no level with compatible codecs found in manifest",
                        n = e;
                    t.levels.length &&
                        ((n = `one or more CODECS in variant not supported: ${e$(t.levels.map((e) => e.attrs.CODECS).filter((e, t, n) => n.indexOf(e) === t))}`),
                        this.warn(n),
                        (e += ` (${n})`));
                    let i = Error(e);
                    this.hls.trigger(u.ERROR, {
                        type: o.MEDIA_ERROR,
                        details: l.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: t.url,
                        error: i,
                        reason: n,
                    });
                }
            }),
                (h.end = performance.now());
            return;
        }
        t.audioTracks && sZ((c = t.audioTracks.filter((e) => !e.audioCodec || this.isAudioSupported(e.audioCodec)))),
            t.subtitles && sZ((d = t.subtitles));
        let f = _.slice(0);
        _.sort((e, t) => {
            if (e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"])
                return (e.attrs["HDCP-LEVEL"] || "") > (t.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
            if (n && e.height !== t.height) return e.height - t.height;
            if (e.frameRate !== t.frameRate) return e.frameRate - t.frameRate;
            if (e.videoRange !== t.videoRange) return eH.indexOf(e.videoRange) - eH.indexOf(t.videoRange);
            if (e.videoCodec !== t.videoCodec) {
                let n = eR(e.videoCodec),
                    i = eR(t.videoCodec);
                if (n !== i) return i - n;
            }
            if (e.uri === t.uri && e.codecSet !== t.codecSet) {
                let n = eO(e.codecSet),
                    i = eO(t.codecSet);
                if (n !== i) return i - n;
            }
            return e.averageBitrate !== t.averageBitrate ? e.averageBitrate - t.averageBitrate : 0;
        });
        let p = f[0];
        if (this.steering && (_ = this.steering.filterParsedLevels(_)).length !== f.length) {
            for (let e = 0; e < f.length; e++)
                if (f[e].pathwayId === _[0].pathwayId) {
                    p = f[e];
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
        let E = r && !i,
            m = this.hls.config,
            g = !!(m.audioStreamController && m.audioTrackController),
            A = {
                levels: _,
                audioTracks: c,
                subtitleTracks: d,
                sessionData: t.sessionData,
                sessionKeys: t.sessionKeys,
                firstLevel: this._firstLevel,
                stats: t.stats,
                audio: r,
                video: i,
                altAudio: g && !E && c.some((e) => !!e.url),
            };
        (h.end = performance.now()), this.hls.trigger(u.MANIFEST_PARSED, A);
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
                i = e < 0;
            if (
                (this.hls.trigger(u.ERROR, {
                    type: o.OTHER_ERROR,
                    details: l.LEVEL_SWITCH_ERROR,
                    level: e,
                    fatal: i,
                    error: n,
                    reason: n.message,
                }),
                i)
            )
                return;
            e = Math.min(e, t.length - 1);
        }
        let n = this.currentLevelIndex,
            i = this.currentLevel,
            r = i ? i.attrs["PATHWAY-ID"] : void 0,
            s = t[e],
            a = s.attrs["PATHWAY-ID"];
        if (((this.currentLevelIndex = e), (this.currentLevel = s), n === e && i && r === a)) return;
        this.log(
            `Switching to level ${e} (${s.height ? s.height + "p " : ""}${s.videoRange ? s.videoRange + " " : ""}${s.codecSet ? s.codecSet + " " : ""}@${s.bitrate})${a ? " with Pathway " + a : ""} from level ${n}${r ? " with Pathway " + r : ""}`,
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
            let e = this.switchParams(s.uri, null == i ? void 0 : i.details, d);
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
        !t.fatal && t.context && t.context.type === v && t.context.level === this.level && this.checkRetry(t);
    }
    onFragBuffered(e, { frag: t }) {
        if (void 0 !== t && t.type === O) {
            let e = t.elementaryStreams;
            if (!Object.keys(e).some((t) => !!e[t])) return;
            let n = this._levels[t.level];
            null != n &&
                n.loadError &&
                (this.log(`Resetting level error count of ${n.loadError} on frag buffered`), (n.loadError = 0));
        }
    }
    onLevelLoaded(e, t) {
        var n, i;
        let { level: r, details: s } = t,
            a = t.levelInfo;
        if (!a) {
            this.warn(`Invalid level index ${r}`),
                null != (i = t.deliveryDirectives) && i.skip && (s.deltaUpdateFailed = !0);
            return;
        }
        if (a === this.currentLevel || t.withoutMultiVariant) {
            0 === a.fragmentError && (a.loadError = 0);
            let e = a.details;
            e === t.details && e.advanced && (e = void 0), this.playlistLoaded(r, t, e);
        } else null != (n = t.deliveryDirectives) && n.skip && (s.deltaUpdateFailed = !0);
    }
    loadPlaylist(e) {
        super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
    }
    loadingPlaylist(e, t) {
        super.loadingPlaylist(e, t);
        let n = this.getUrlWithDirectives(e.uri, t),
            i = this.currentLevelIndex,
            r = e.attrs["PATHWAY-ID"],
            s = e.details,
            a = null == s ? void 0 : s.age;
        this.log(
            `Loading level index ${i}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${r ? " Pathway " + r : ""}${a && s.live ? " age " + a.toFixed(1) + (s.type ? " " + s.type : "") : ""} ${n}`,
        ),
            this.hls.trigger(u.LEVEL_LOADING, {
                url: n,
                level: i,
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
        nE(n),
            (this._levels = n),
            this.currentLevelIndex > -1 &&
                null != (t = this.currentLevel) &&
                t.details &&
                (this.currentLevelIndex = this.currentLevel.details.fragments[0].level),
            this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
        let i = n.length - 1;
        (this._firstLevel = Math.min(this._firstLevel, i)),
            this._startLevel && (this._startLevel = Math.min(this._startLevel, i)),
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
function sZ(e) {
    let t = {};
    e.forEach((e) => {
        let n = e.groupId || "";
        (e.id = t[n] = t[n] || 0), t[n]++;
    });
}
function sQ() {
    return self.SourceBuffer || self.WebKitSourceBuffer;
}
function sJ() {
    if (!H()) return !1;
    let e = sQ();
    return (
        !e || (e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove)
    );
}
class s0 extends nG {
    constructor(e, t, n) {
        super(e, t, n, "stream-controller", O),
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
                if (null === t || !r(t) || (this.log(`Media seeked to ${t.toFixed(3)}`), !this.getBufferedFrag(t)))
                    return;
                let n = this.getFwdBufferInfoAtPos(e, t, O, 0);
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
            let { lastCurrentTime: n, hls: i } = this;
            if ((this.stopLoad(), this.setInterval(100), (this.level = -1), !this.startFragRequested)) {
                let e = i.startLevel;
                -1 === e &&
                    (i.config.testBandwidth && this.levels.length > 1
                        ? ((e = 0), (this.bitrateTest = !0))
                        : (e = i.firstAutoLevel)),
                    (i.nextLoadLevel = e),
                    (this.level = i.loadLevel),
                    (this._hasEnoughToStart = !!t);
            }
            n > 0 &&
                -1 === e &&
                !t &&
                (this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`), (e = n)),
                (this.state = nR),
                (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
                (this.startPosition = t ? -1 : e),
                this.tick();
        } else (this._forceStartLoad = !0), (this.state = nC);
    }
    stopLoad() {
        (this._forceStartLoad = !1), super.stopLoad();
    }
    doTick() {
        switch (this.state) {
            case nU: {
                let { levels: e, level: t } = this,
                    n = null == e ? void 0 : e[t],
                    i = null == n ? void 0 : n.details;
                if (!i || (i.live && (this.levelLastLoaded !== n || this.waitForLive(n))))
                    this.hls.nextLoadLevel !== this.level && (this.state = nR);
                else {
                    if (this.waitForCdnTuneIn(i)) break;
                    this.state = nR;
                }
                break;
            }
            case nD:
                this.checkRetryDate();
        }
        this.state === nR && this.doTickIdle(), this.onTickEnd();
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
        let { hls: e, levelLastLoaded: t, levels: n, media: i } = this;
        if (
            null === t ||
            (!i && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch)) ||
            (this.altAudio && this.audioOnly)
        )
            return;
        let r = this.buffering ? e.nextLoadLevel : e.loadLevel;
        if (!(null != n && n[r])) return;
        let s = n[r],
            a = this.getMainFwdBufferInfo();
        if (null === a) return;
        let o = this.getLevelDetails();
        if (o && this._streamEnded(a, o)) {
            let e = {};
            2 === this.altAudio && (e.type = "video"), this.hls.trigger(u.BUFFER_EOS, e), (this.state = nP);
            return;
        }
        if (!this.buffering) return;
        e.loadLevel !== r && -1 === e.manualLevel && this.log(`Adapting to level ${r} from level ${this.level}`),
            (this.level = e.nextLoadLevel = r);
        let l = s.details;
        if (!l || this.state === nU || this.waitForLive(s)) {
            (this.level = r), (this.state = nU), (this.startFragRequested = !1);
            return;
        }
        let c = a.len,
            d = this.getMaxBufferLength(s.maxBitrate);
        if (c >= d) return;
        this.backtrackFragment && this.backtrackFragment.start > a.end && (this.backtrackFragment = null);
        let _ = this.backtrackFragment ? this.backtrackFragment.start : a.end,
            h = this.getNextFragment(_, l);
        if (this.couldBacktrack && !this.fragPrevious && h && ee(h) && "OK" !== this.fragmentTracker.getState(h)) {
            var f;
            let e = (null != (f = this.backtrackFragment) ? f : h).sn - l.startSN,
                t = l.fragments[e - 1];
            t && h.cc === t.cc && ((h = t), this.fragmentTracker.removeFragment(t));
        } else this.backtrackFragment && a.len && (this.backtrackFragment = null);
        if (h && this.isLoopLoading(h, _)) {
            if (!h.gap) {
                let e = this.audioOnly && !this.altAudio ? X : Z,
                    t = (e === Z ? this.videoBuffer : this.mediaBuffer) || this.media;
                t && this.afterBufferFlushed(t, e, O);
            }
            h = this.getNextFragmentLoopLoading(h, l, a, O, d);
        }
        h &&
            (!h.initSegment || h.initSegment.data || this.bitrateTest || (h = h.initSegment),
            this.loadFragment(h, s, _));
    }
    loadFragment(e, t, n) {
        let i = this.fragmentTracker.getState(e);
        i === ts || i === to
            ? ee(e)
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
        return this.fragmentTracker.getBufferedFrag(e, O);
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
                i = this.getAppendedFrag(t.currentTime);
            i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
            let r = this.getLevelDetails();
            if (null != r && r.live) {
                let e = this.getMainFwdBufferInfo();
                if (!e || e.len < 2 * r.targetduration) return;
            }
            if (!t.paused && e) {
                let t = e[this.hls.nextLoadLevel],
                    i = this.fragLastKbps;
                n = i && this.fragCurrent ? (this.fragCurrent.duration * t.maxBitrate) / (1e3 * i) + 1 : 0;
            } else n = 0;
            let s = this.getBufferedFrag(t.currentTime + n);
            if (s) {
                let e = this.followingBufferedFrag(s);
                if (e) {
                    this.abortCurrentFrag();
                    let t = e.maxStartPTS ? e.maxStartPTS : e.start,
                        n = e.duration,
                        i = Math.max(
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
                    this.flushMainBuffer(i, 1 / 0);
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
            case nO:
            case nb:
            case nD:
            case nw:
            case nM:
                this.state = nR;
        }
        this.nextLoadPosition = this.getLoadPosition();
    }
    flushMainBuffer(e, t) {
        super.flushMainBuffer(e, t, 2 === this.altAudio ? "video" : null);
    }
    onMediaAttached(e, t) {
        super.onMediaAttached(e, t);
        let n = t.media;
        ny(n, "playing", this.onMediaPlaying), ny(n, "seeked", this.onMediaSeeked);
    }
    onMediaDetaching(e, t) {
        let { media: n } = this;
        n && (nN(n, "playing", this.onMediaPlaying), nN(n, "seeked", this.onMediaSeeked)),
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
        var n;
        let i,
            r = !1,
            s = !1;
        for (let e = 0; e < t.levels.length; e++) {
            let n = t.levels[e].audioCodec;
            n && ((r = r || -1 !== n.indexOf("mp4a.40.2")), (s = s || -1 !== n.indexOf("mp4a.40.5")));
        }
        (this.audioCodecSwitch =
            r && s && "function" != typeof (null == (i = sQ()) || null == (n = i.prototype) ? void 0 : n.changeType)),
            this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
            (this.levels = t.levels),
            (this.startFragRequested = !1);
    }
    onLevelLoading(e, t) {
        let { levels: n } = this;
        if (!n || this.state !== nR) return;
        let i = t.levelInfo;
        (!i.details ||
            (i.details.live && (this.levelLastLoaded !== i || i.details.expired)) ||
            this.waitForCdnTuneIn(i.details)) &&
            (this.state = nU);
    }
    onLevelLoaded(e, t) {
        var n, i;
        let { levels: r, startFragRequested: s } = this,
            a = t.level,
            o = t.details,
            l = o.totalduration;
        if (!r) return void this.warn(`Levels were reset while loading level ${a}`);
        this.log(
            `Level ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${l}`,
        );
        let c = t.levelInfo,
            d = this.fragCurrent;
        d && (this.state === nb || this.state === nD) && d.level !== t.level && d.loader && this.abortCurrentFrag();
        let _ = 0;
        if (o.live || (null != (n = c.details) && n.live)) {
            if ((this.checkLiveUpdate(o), o.deltaUpdateFailed)) return;
            _ = this.alignPlaylists(o, c.details, null == (i = this.levelLastLoaded) ? void 0 : i.details);
        }
        if (
            ((c.details = o),
            (this.levelLastLoaded = c),
            s || this.setStartPosition(o, _),
            this.hls.trigger(u.LEVEL_UPDATED, { details: o, level: a }),
            this.state === nU)
        ) {
            if (this.waitForCdnTuneIn(o)) return;
            this.state = nR;
        }
        s && o.live && this.synchronizeToLiveEdge(o), this.tick();
    }
    synchronizeToLiveEdge(e) {
        let { config: t, media: n } = this;
        if (!n) return;
        let i = this.hls.liveSyncPosition,
            r = this.getLoadPosition(),
            s = e.fragmentStart,
            a = e.edge,
            o = r >= s - t.maxFragLookUpTolerance && r <= a;
        if (null !== i && n.duration > i && (r < i || !o)) {
            let s =
                void 0 !== t.liveMaxLatencyDuration
                    ? t.liveMaxLatencyDuration
                    : t.liveMaxLatencyDurationCount * e.targetduration;
            if (
                ((!o && n.readyState < 4) || r < a - s) &&
                (this._hasEnoughToStart || (this.nextLoadPosition = i), n.readyState)
            )
                if (
                    (this.warn(
                        `Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${a}, reset currentTime to : ${i.toFixed(3)}`,
                    ),
                    "buffered" === this.config.liveSyncMode)
                ) {
                    var l;
                    let e = tN.bufferInfo(n, i, 0);
                    if (!(null != (l = e.buffered) && l.length) || e.start <= r) {
                        n.currentTime = i;
                        return;
                    }
                    let { nextStart: t } = tN.bufferedInfo(e.buffered, r, 0);
                    t && (n.currentTime = t);
                } else n.currentTime = i;
        }
    }
    _handleFragmentLoadProgress(e) {
        var t;
        let n = e.frag,
            { part: i, payload: r } = e,
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
                new iW(this.hls, O, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this))),
            h = i ? i.index : -1,
            f = new tT(n.level, n.sn, n.stats.chunkCount, r.byteLength, h, -1 !== h),
            p = this.initPTS[n.cc];
        _.push(r, c, d, l, n, i, o.totalduration, u, f, p);
    }
    onAudioTrackSwitching(e, t) {
        let n = this.hls,
            i = 2 === this.altAudio;
        if (e1(t.url, n)) this.altAudio = 1;
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
            if (i) {
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
        let n = e1(t.url, this.hls);
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
            i,
            r = t.tracks,
            s = !1;
        for (let e in r) {
            let t = r[e];
            if ("main" === t.id) {
                if (((i = e), (n = t), "video" === e)) {
                    let t = r[e];
                    t && (this.videoBuffer = t.buffer);
                }
            } else s = !0;
        }
        s && n
            ? (this.log(`Alternate track found, use ${i}.buffered to schedule main fragment loading`),
              (this.mediaBuffer = n.buffer))
            : (this.mediaBuffer = this.media);
    }
    onFragBuffered(e, t) {
        let { frag: n, part: i } = t,
            r = n.type === O;
        if (r) {
            if (this.fragContextChanged(n)) {
                this.warn(
                    `Fragment ${n.sn}${i ? " p: " + i.index : ""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}`,
                ),
                    this.state === nM && (this.state = nR);
                return;
            }
            let e = i ? i.stats : n.stats;
            (this.fragLastKbps = Math.round((8 * e.total) / (e.buffering.end - e.loading.first))),
                ee(n) && (this.fragPrevious = n),
                this.fragBufferedComplete(n, i);
        }
        let s = this.media;
        s &&
            (!this._hasEnoughToStart &&
                tN.getBuffered(s).length &&
                ((this._hasEnoughToStart = !0), this.seekToStartPos()),
            r && this.tick());
    }
    get hasEnoughToStart() {
        return this._hasEnoughToStart;
    }
    onError(e, t) {
        var n;
        if (t.fatal) {
            this.state = nx;
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
                this.onFragmentOrKeyLoadError(O, t);
                break;
            case l.LEVEL_LOAD_ERROR:
            case l.LEVEL_LOAD_TIMEOUT:
            case l.LEVEL_PARSING_ERROR:
                t.levelRetry ||
                    this.state !== nU ||
                    (null == (n = t.context) ? void 0 : n.type) !== v ||
                    (this.state = nR);
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
        (this.state = nR),
            this._hasEnoughToStart || ((this.startFragRequested = !1), (this.nextLoadPosition = this.lastCurrentTime)),
            this.tickImmediate();
    }
    onBufferFlushed(e, { type: t }) {
        if (t !== X || !this.altAudio) {
            let e = (t === Z ? this.videoBuffer : this.mediaBuffer) || this.media;
            e && (this.afterBufferFlushed(e, t, O), this.tick());
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
            let i = this.timelineOffset;
            i && n && (n += i);
            let r = this.getLevelDetails(),
                s = tN.getBuffered(e),
                a = s.length ? s.start(0) : 0,
                o = a - n,
                l = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
            (this.config.startOnSegmentBoundary ||
                (o > 0 && (o < l || (this.loadingParts && o < 2 * ((null == r ? void 0 : r.partTarget) || 0))))) &&
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
                        i = null == e ? void 0 : e.frag;
                    if (!i || this.fragContextChanged(i)) return;
                    (t.fragmentError = 0), (this.state = nR), (this.startFragRequested = !1), (this.bitrateTest = !1);
                    let r = i.stats;
                    (r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now()),
                        n.trigger(u.FRAG_LOADED, e),
                        (i.bitrateTest = !1);
                })
                .catch((t) => {
                    this.state !== nC && this.state !== nx && (this.warn(t), this.resetFragmentLoading(e));
                });
    }
    _handleTransmuxComplete(e) {
        let t = this.playlistType,
            { hls: n } = this,
            { remuxResult: i, chunkMeta: s } = e,
            a = this.getCurrentContext(s);
        if (!a) return void this.resetWhenMissingContext(s);
        let { frag: o, part: l, level: c } = a,
            { video: d, text: _, id3: h, initSegment: f } = i,
            { details: p } = c,
            E = this.altAudio ? void 0 : i.audio;
        if (this.fragContextChanged(o)) return void this.fragmentTracker.removeFragment(o);
        if (((this.state = nw), f)) {
            let e = f.tracks;
            if (e) {
                let i = o.initSegment || o;
                if (this.unhandledEncryptionError(f, o)) return;
                this._bufferInitSegment(c, e, i, s),
                    n.trigger(u.FRAG_PARSING_INIT_SEGMENT, { frag: i, id: t, tracks: e });
            }
            let i = f.initPTS,
                a = f.timescale,
                l = this.initPTS[o.cc];
            if (r(i) && (!l || l.baseTime !== i || l.timescale !== a)) {
                let e = f.trackId;
                (this.initPTS[o.cc] = { baseTime: i, timescale: a, trackId: e }),
                    n.trigger(u.INIT_PTS_FOUND, { frag: o, id: t, initPTS: i, timescale: a, trackId: e });
            }
        }
        if (d && p) {
            E && "audiovideo" === d.type && this.logMuxedErr(o);
            let e = p.fragments[o.sn - 1 - p.startSN],
                t = o.sn === p.startSN,
                n = !e || o.cc > e.cc;
            if (!1 !== i.independent) {
                let { startPTS: e, endPTS: i, startDTS: r, endDTS: a } = d;
                if (l) l.elementaryStreams[d.type] = { startPTS: e, endPTS: i, startDTS: r, endDTS: a };
                else if (
                    (d.firstKeyFrame && d.independent && 1 === s.id && !n && (this.couldBacktrack = !0),
                    d.dropped && d.independent)
                ) {
                    let r = this.getMainFwdBufferInfo(),
                        s = (r ? r.end : this.getLoadPosition()) + this.config.maxBufferHole,
                        l = d.firstKeyFramePTS ? d.firstKeyFramePTS : e;
                    if (!t && s < l - this.config.maxBufferHole && !n) return void this.backtrack(o);
                    n && (o.gap = !0), o.setElementaryStreamInfo(d.type, o.start, i, o.start, a, !0);
                } else t && e - (p.appliedTimelineOffset || 0) > 2 && (o.gap = !0);
                o.setElementaryStreamInfo(d.type, e, i, r, a),
                    this.backtrackFragment && (this.backtrackFragment = o),
                    this.bufferFragmentData(d, o, l, s, t || n);
            } else {
                if (!t && !n) return void this.backtrack(o);
                o.gap = !0;
            }
        }
        if (E) {
            let { startPTS: e, endPTS: t, startDTS: n, endDTS: i } = E;
            l && (l.elementaryStreams[X] = { startPTS: e, endPTS: t, startDTS: n, endDTS: i }),
                o.setElementaryStreamInfo(X, e, t, n, i),
                this.bufferFragmentData(E, o, l, s);
        }
        if (p && null != h && h.samples.length) {
            let e = { id: t, frag: o, details: p, samples: h.samples };
            n.trigger(u.FRAG_PARSING_METADATA, e);
        }
        if (p && _) {
            let e = { id: t, frag: o, details: p, samples: _.samples };
            n.trigger(u.FRAG_PARSING_USERDATA, e);
        }
    }
    logMuxedErr(e) {
        this.warn(`${ee(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
    }
    _bufferInitSegment(e, t, n, i) {
        if (this.state !== nw) return;
        (this.audioOnly = !!t.audio && !t.video),
            this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(n));
        let { audio: r, video: s, audiovideo: a } = t;
        if (r) {
            let n = e.audioCodec,
                i = ew(r.codec, n);
            "mp4a" === i && (i = "mp4a.40.5");
            let s = navigator.userAgent.toLowerCase();
            if (this.audioCodecSwitch) {
                i && (i = -1 !== i.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
                let e = r.metadata;
                e &&
                    "channelCount" in e &&
                    1 !== (e.channelCount || 1) &&
                    -1 === s.indexOf("firefox") &&
                    (i = "mp4a.40.5");
            }
            i &&
                -1 !== i.indexOf("mp4a.40.5") &&
                -1 !== s.indexOf("android") &&
                "audio/mpeg" !== r.container &&
                ((i = "mp4a.40.2"), this.log(`Android: force audio codec to ${i}`)),
                n && n !== i && this.log(`Swapping manifest audio codec "${n}" for "${i}"`),
                (r.levelCodec = i),
                (r.id = O),
                this.log(
                    `Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${i || ""}/${n || ""}/${r.codec}]`,
                ),
                delete t.audiovideo;
        }
        if (s) {
            (s.levelCodec = e.videoCodec), (s.id = O);
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
                let r = t[e].initSegment;
                null != r &&
                    r.byteLength &&
                    this.hls.trigger(u.BUFFER_APPENDING, {
                        type: e,
                        data: r,
                        frag: n,
                        part: null,
                        chunkMeta: i,
                        parent: n.type,
                    });
            });
        }
        this.tickImmediate();
    }
    getMainFwdBufferInfo() {
        let e = this.mediaBuffer && 2 === this.altAudio ? this.mediaBuffer : this.media;
        return this.getFwdBufferInfo(e, O);
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
            (this.state = nR);
    }
    checkFragmentChanged() {
        let e = this.media,
            t = null;
        if (e && e.readyState > 1 && !1 === e.seeking) {
            let n = e.currentTime;
            if (
                (tN.isBuffered(e, n)
                    ? (t = this.getAppendedFrag(n))
                    : tN.isBuffered(e, n + 0.1) && (t = this.getAppendedFrag(n + 0.1)),
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
        return r(t) ? this.getAppendedFrag(t) : null;
    }
    get currentProgramDateTime() {
        var e;
        let t = (null == (e = this.media) ? void 0 : e.currentTime) || this.lastCurrentTime;
        if (r(t)) {
            let e = this.getLevelDetails(),
                n = this.currentFrag || (e ? e3(null, e.fragments, t) : null);
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
class s1 extends k {
    constructor(e, t) {
        super("key-loader", t),
            (this.config = void 0),
            (this.keyIdToKeyInfo = {}),
            (this.emeController = null),
            (this.config = e);
    }
    abort(e) {
        for (let n in this.keyIdToKeyInfo) {
            let i = this.keyIdToKeyInfo[n].loader;
            if (i) {
                var t;
                if (e && e !== (null == (t = i.context) ? void 0 : t.frag.type)) return;
                i.abort();
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
    createKeyLoadError(e, t = l.KEY_LOAD_ERROR, n, i, r) {
        return new tA({
            type: o.NETWORK_ERROR,
            details: t,
            fatal: !1,
            frag: e,
            response: r,
            error: n,
            networkDetails: i,
        });
    }
    loadClear(e, t, n) {
        if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
            if (t.length)
                for (let i = 0, r = t.length; i < r; i++) {
                    let s = t[i];
                    if ((e.cc <= s.cc && (!ee(e) || !ee(s) || e.sn < s.sn)) || (!n && i == r - 1))
                        return this.emeController.selectKeySystemFormat(s).then((e) => {
                            if (!this.emeController) return;
                            s.setKeyFormat(e);
                            let t = tq(e);
                            if (t) return this.emeController.getKeySystemAccess([t]);
                        });
                }
            if (this.config.requireKeySystemAccessOnStart) {
                let e = tZ(this.config);
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
        var n, i;
        t && e.setKeyFormat(t);
        let r = e.decryptdata;
        if (!r) {
            let n = Error(
                t
                    ? `Expected frag.decryptdata to be defined after setting format ${t}`
                    : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`,
            );
            return Promise.reject(this.createKeyLoadError(e, l.KEY_LOAD_ERROR, n));
        }
        let s = r.uri;
        if (!s) return Promise.reject(this.createKeyLoadError(e, l.KEY_LOAD_ERROR, Error(`Invalid key URI: "${s}"`)));
        let a = s2(r),
            o = this.keyIdToKeyInfo[a];
        if (null != (n = o) && n.decryptdata.key)
            return (r.key = o.decryptdata.key), Promise.resolve({ frag: e, keyInfo: o });
        if (this.emeController && null != (i = o) && i.keyLoadPromise)
            switch (this.emeController.getKeyStatus(o.decryptdata)) {
                case "usable":
                case "usable-in-future":
                    return o.keyLoadPromise.then((t) => {
                        let { keyInfo: n } = t;
                        return (r.key = n.decryptdata.key), { frag: e, keyInfo: n };
                    });
            }
        switch (
            (this.log(
                `${this.keyIdToKeyInfo[a] ? "Rel" : "L"}oading${r.keyId ? " keyId: " + W(r.keyId) : ""} URI: ${r.uri} from ${e.type} ${e.level}`,
            ),
            (o = this.keyIdToKeyInfo[a] =
                { decryptdata: r, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }),
            r.method)
        ) {
            case "SAMPLE-AES":
            case "SAMPLE-AES-CENC":
            case "SAMPLE-AES-CTR":
                if ("identity" === r.keyFormat) return this.loadKeyHTTP(o, e);
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
                        Error(`Key supplied with unsupported METHOD: "${r.method}"`),
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
            i = new n.loader(n);
        return (
            (t.keyLoader = e.loader = i),
            (e.keyLoadPromise = new Promise((r, s) => {
                let a = { keyInfo: e, frag: t, responseType: "arraybuffer", url: e.decryptdata.uri },
                    o = n.keyLoadPolicy.default,
                    u = { loadPolicy: o, timeout: o.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
                i.load(a, u, {
                    onSuccess: (e, t, n, i) => {
                        let { frag: a, keyInfo: o } = n,
                            u = s2(o.decryptdata);
                        if (!a.decryptdata || o !== this.keyIdToKeyInfo[u])
                            return s(
                                this.createKeyLoadError(
                                    a,
                                    l.KEY_LOAD_ERROR,
                                    Error("after key load, decryptdata unset or changed"),
                                    i,
                                ),
                            );
                        (o.decryptdata.key = a.decryptdata.key = new Uint8Array(e.data)),
                            (a.keyLoader = null),
                            (o.loader = null),
                            r({ frag: a, keyInfo: o });
                    },
                    onError: (e, n, i, r) => {
                        this.resetLoader(n),
                            s(
                                this.createKeyLoadError(
                                    t,
                                    l.KEY_LOAD_ERROR,
                                    Error(`HTTP Error ${e.code} loading key ${e.text}`),
                                    i,
                                    x({ url: a.url, data: void 0 }, e),
                                ),
                            );
                    },
                    onTimeout: (e, n, i) => {
                        this.resetLoader(n),
                            s(this.createKeyLoadError(t, l.KEY_LOAD_TIMEOUT, Error("key loading timed out"), i));
                    },
                    onAbort: (e, n, i) => {
                        this.resetLoader(n),
                            s(this.createKeyLoadError(t, l.INTERNAL_ABORTED, Error("key loading aborted"), i));
                    },
                });
            }))
        );
    }
    resetLoader(e) {
        let { frag: t, keyInfo: n, url: i } = e,
            r = n.loader;
        t.keyLoader === r && ((t.keyLoader = null), (n.loader = null));
        let s = s2(n.decryptdata) || i;
        delete this.keyIdToKeyInfo[s], r && r.destroy();
    }
}
function s2(e) {
    if (e.keyFormat !== tK) {
        let t = e.keyId;
        if (t) return W(t);
    }
    return e.uri;
}
function s3(e) {
    let { type: t } = e;
    switch (t) {
        case C:
            return b;
        case R:
            return D;
        default:
            return O;
    }
}
function s6(e, t) {
    let n = e.url;
    return (void 0 === n || 0 === n.indexOf("data:")) && (n = t.url), n;
}
class s4 {
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
            i = t.loader,
            r = new (n || i)(t);
        return (this.loaders[e.type] = r), r;
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
                type: N,
                url: n,
                deliveryDirectives: null,
                levelOrTrack: null,
            });
    }
    onLevelLoading(e, t) {
        let { id: n, level: i, pathwayId: r, url: s, deliveryDirectives: a, levelInfo: o } = t;
        this.load({
            id: n,
            level: i,
            pathwayId: r,
            responseType: "text",
            type: v,
            url: s,
            deliveryDirectives: a,
            levelOrTrack: o,
        });
    }
    onAudioTrackLoading(e, t) {
        let { id: n, groupId: i, url: r, deliveryDirectives: s, track: a } = t;
        this.load({
            id: n,
            groupId: i,
            level: null,
            responseType: "text",
            type: C,
            url: r,
            deliveryDirectives: s,
            levelOrTrack: a,
        });
    }
    onSubtitleTrackLoading(e, t) {
        let { id: n, groupId: i, url: r, deliveryDirectives: s, track: a } = t;
        this.load({
            id: n,
            groupId: i,
            level: null,
            responseType: "text",
            type: R,
            url: r,
            deliveryDirectives: s,
            levelOrTrack: a,
        });
    }
    onLevelsUpdated(e, t) {
        let n = this.loaders[v];
        if (n) {
            let e = n.context;
            e && !t.levels.some((t) => t === e.levelOrTrack) && (n.abort(), delete this.loaders[v]);
        }
    }
    load(e) {
        var t;
        let n,
            i = this.hls.config,
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
                e.type === N
                    ? i.manifestLoadPolicy.default
                    : M({}, i.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null })),
            (s = this.createInternalLoader(e)),
            r(null == (t = e.deliveryDirectives) ? void 0 : t.part))
        ) {
            let t;
            if (
                (e.type === v && null !== e.level
                    ? (t = this.hls.levels[e.level].details)
                    : e.type === C && null !== e.id
                      ? (t = this.hls.audioTracks[e.id].details)
                      : e.type === R && null !== e.id && (t = this.hls.subtitleTracks[e.id].details),
                t)
            ) {
                let e = t.partTarget,
                    i = t.targetduration;
                if (e && i) {
                    let t = 1e3 * Math.max(3 * e, 0.8 * i);
                    n = M({}, n, {
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
            };
        s.load(e, o, {
            onSuccess: (e, t, n, i) => {
                let r = this.getInternalLoader(n);
                this.resetInternalLoader(n.type);
                let s = e.data;
                (t.parsing.start = performance.now()),
                    t5.isMediaPlaylist(s) || n.type !== N
                        ? this.handleTrackOrLevelPlaylist(e, t, n, i || null, r)
                        : this.handleMasterPlaylist(e, t, n, i);
            },
            onError: (e, t, n, i) => {
                this.handleNetworkError(t, n, !1, e, i);
            },
            onTimeout: (e, t, n) => {
                this.handleNetworkError(t, n, !0, void 0, e);
            },
        });
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
    handleMasterPlaylist(e, t, n, i) {
        let r = this.hls,
            s = e.data,
            a = s6(e, n),
            o = t5.parseMasterPlaylist(s, a);
        if (o.playlistParsingError) {
            (t.parsing.end = performance.now()), this.handleManifestParsingError(e, n, o.playlistParsingError, i, t);
            return;
        }
        let { contentSteering: l, levels: c, sessionData: d, sessionKeys: _, startTimeOffset: h, variableList: f } = o;
        (this.variableList = f),
            c.forEach((e) => {
                let { unknownCodecs: t } = e;
                if (t) {
                    let { preferManagedMediaSource: n } = this.hls.config,
                        { audioCodec: i, videoCodec: r } = e;
                    for (let s = t.length; s--; ) {
                        let a = t[s];
                        eN(a, "audio", n)
                            ? ((e.audioCodec = i = i ? `${i},${a}` : a),
                              (eS.audio[i.substring(0, 4)] = 2),
                              t.splice(s, 1))
                            : eN(a, "video", n) &&
                              ((e.videoCodec = r = r ? `${r},${a}` : a),
                              (eS.video[r.substring(0, 4)] = 2),
                              t.splice(s, 1));
                    }
                }
            });
        let { AUDIO: p = [], SUBTITLES: E, "CLOSED-CAPTIONS": m } = t5.parseMasterPlaylistMedia(s, a, o);
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
                    attrs: new tD({}),
                    bitrate: 0,
                    url: "",
                }))),
            r.trigger(u.MANIFEST_LOADED, {
                levels: c,
                audioTracks: p,
                subtitles: E,
                captions: m,
                contentSteering: l,
                url: a,
                stats: t,
                networkDetails: i,
                sessionData: d,
                sessionKeys: _,
                startTimeOffset: h,
                variableList: f,
            });
    }
    handleTrackOrLevelPlaylist(e, t, n, i, s) {
        let a = this.hls,
            { id: o, level: l, type: c } = n,
            d = s6(e, n),
            _ = r(l) ? l : r(o) ? o : 0,
            h = s3(n),
            f = t5.parseLevelPlaylist(e.data, d, _, h, 0, this.variableList);
        if (c === N) {
            let e = { attrs: new tD({}), bitrate: 0, details: f, name: "", url: d };
            (f.requestScheduled = t.loading.start + n_(f, 0)),
                a.trigger(u.MANIFEST_LOADED, {
                    levels: [e],
                    audioTracks: [],
                    url: d,
                    stats: t,
                    networkDetails: i,
                    sessionData: null,
                    sessionKeys: null,
                    contentSteering: null,
                    startTimeOffset: null,
                    variableList: null,
                });
        }
        (t.parsing.end = performance.now()), (n.levelDetails = f), this.handlePlaylistLoaded(f, e, t, n, i, s);
    }
    handleManifestParsingError(e, t, n, i, r) {
        this.hls.trigger(u.ERROR, {
            type: o.NETWORK_ERROR,
            details: l.MANIFEST_PARSING_ERROR,
            fatal: t.type === N,
            url: e.url,
            err: n,
            error: n,
            reason: n.message,
            response: e,
            context: t,
            networkDetails: i,
            stats: r,
        });
    }
    handleNetworkError(e, t, n = !1, i, r) {
        let s = `A network ${n ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")} occurred while loading ${e.type}`;
        e.type === v
            ? (s += `: ${e.level} id: ${e.id}`)
            : (e.type === C || e.type === R) && (s += ` id: ${e.id} group-id: "${e.groupId}"`);
        let a = Error(s);
        this.hls.logger.warn(`[playlist-loader]: ${s}`);
        let c = l.UNKNOWN,
            d = !1,
            _ = this.getInternalLoader(e);
        switch (e.type) {
            case N:
                (c = n ? l.MANIFEST_LOAD_TIMEOUT : l.MANIFEST_LOAD_ERROR), (d = !0);
                break;
            case v:
                (c = n ? l.LEVEL_LOAD_TIMEOUT : l.LEVEL_LOAD_ERROR), (d = !1);
                break;
            case C:
                (c = n ? l.AUDIO_TRACK_LOAD_TIMEOUT : l.AUDIO_TRACK_LOAD_ERROR), (d = !1);
                break;
            case R:
                (c = n ? l.SUBTITLE_TRACK_LOAD_TIMEOUT : l.SUBTITLE_LOAD_ERROR), (d = !1);
        }
        _ && this.resetInternalLoader(e.type);
        let h = {
            type: o.NETWORK_ERROR,
            details: c,
            fatal: d,
            url: e.url,
            loader: _,
            context: e,
            error: a,
            networkDetails: t,
            stats: r,
        };
        i && (h.response = x({ url: (null == t ? void 0 : t.url) || e.url, data: void 0 }, i)),
            this.hls.trigger(u.ERROR, h);
    }
    handlePlaylistLoaded(e, t, n, i, r, s) {
        let a = this.hls,
            { type: c, level: d, levelOrTrack: _, id: h, groupId: f, deliveryDirectives: p } = i,
            E = s6(t, i),
            m = s3(i),
            g = "number" == typeof i.level && m === O ? d : void 0,
            A = e.playlistParsingError;
        if (A) {
            if ((this.hls.logger.warn(`${A} ${e.url}`), !a.config.ignorePlaylistParsingErrors))
                return void a.trigger(u.ERROR, {
                    type: o.NETWORK_ERROR,
                    details: l.LEVEL_PARSING_ERROR,
                    fatal: !1,
                    url: E,
                    error: A,
                    reason: A.message,
                    response: t,
                    context: i,
                    level: g,
                    parent: m,
                    networkDetails: r,
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
                url: E,
                error: s,
                reason: s.message,
                response: t,
                context: i,
                level: g,
                parent: m,
                networkDetails: r,
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
            case N:
            case v:
                if (g)
                    if (_) {
                        if (_ !== a.levels[g]) {
                            let e = a.levels.indexOf(_);
                            e > -1 && (g = e);
                        }
                    } else g = 0;
                a.trigger(u.LEVEL_LOADED, {
                    details: e,
                    levelInfo: _ || a.levels[0],
                    level: g || 0,
                    id: h || 0,
                    stats: n,
                    networkDetails: r,
                    deliveryDirectives: p,
                    withoutMultiVariant: c === N,
                });
                break;
            case C:
                a.trigger(u.AUDIO_TRACK_LOADED, {
                    details: e,
                    track: _,
                    id: h || 0,
                    groupId: f || "",
                    stats: n,
                    networkDetails: r,
                    deliveryDirectives: p,
                });
                break;
            case R:
                a.trigger(u.SUBTITLE_TRACK_LOADED, {
                    details: e,
                    track: _,
                    id: h || 0,
                    groupId: f || "",
                    stats: n,
                    networkDetails: r,
                    deliveryDirectives: p,
                });
        }
    }
}
class s5 {
    static get version() {
        return nj;
    }
    static isMSESupported() {
        return sJ();
    }
    static isSupported() {
        if (!sJ()) return !1;
        let e = H();
        return (
            "function" == typeof (null == e ? void 0 : e.isTypeSupported) &&
            (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((t) =>
                e.isTypeSupported(eC(t, "video")),
            ) ||
                ["mp4a.40.2", "fLaC"].some((t) => e.isTypeSupported(eC(t, "audio"))))
        );
    }
    static getMediaSource() {
        return H();
    }
    static get Events() {
        return u;
    }
    static get MetadataSchema() {
        return n4;
    }
    static get ErrorTypes() {
        return o;
    }
    static get ErrorDetails() {
        return l;
    }
    static get DefaultConfig() {
        return s5.defaultConfig ? s5.defaultConfig : sV;
    }
    static set DefaultConfig(e) {
        s5.defaultConfig = e;
    }
    constructor(e = {}) {
        (this.config = void 0),
            (this.userConfig = void 0),
            (this.logger = void 0),
            (this.coreComponents = void 0),
            (this.networkControllers = void 0),
            (this._emitter = new nH()),
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
        const t = (this.logger = (function (e, t, n) {
                let i = F();
                if (("object" == typeof console && !0 === e) || "object" == typeof e) {
                    let r = ["debug", "log", "info", "warn", "error"];
                    r.forEach((t) => {
                        i[t] = V(t, e, n);
                    });
                    try {
                        i.log(`Debug logs enabled for "${t}" in hls.js version 1.6.12`);
                    } catch (e) {
                        return F();
                    }
                    r.forEach((t) => {
                        B[t] = V(t, e);
                    });
                } else M(B, i);
                return i;
            })(e.debug || !1, "Hls instance", e.assetPlayerId)),
            n = (this.config = (function (e, t, n) {
                if (
                    (t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) &&
                    (t.liveSyncDuration || t.liveMaxLatencyDuration)
                )
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
                    throw Error(
                        'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"',
                    );
                let i = (function e(t) {
                        return t && "object" == typeof t
                            ? Array.isArray(t)
                                ? t.map(e)
                                : Object.keys(t).reduce((n, i) => ((n[i] = e(t[i])), n), {})
                            : t;
                    })(e),
                    r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
                return (
                    ["manifest", "level", "frag"].forEach((e) => {
                        let s = `${"level" === e ? "playlist" : e}LoadPolicy`,
                            a = void 0 === t[s],
                            o = [];
                        r.forEach((n) => {
                            let r = `${e}Loading${n}`,
                                l = t[r];
                            if (void 0 !== l && a) {
                                o.push(r);
                                let e = i[s].default;
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
                                n.warn(
                                    `hls.js config: "${o.join('", "')}" setting(s) are deprecated, use "${s}": ${e$(t[s])}`,
                                );
                    }),
                    x(x({}, i), t)
                );
            })(s5.DefaultConfig, e, t));
        (this.userConfig = e),
            n.progressive &&
                (function (e, t) {
                    let n = e.loader;
                    n !== sx && n !== sF
                        ? (t.log("[config]: Custom loader detected, cannot enable progressive streaming"),
                          (e.progressive = !1))
                        : (function () {
                              if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                                  try {
                                      return new self.ReadableStream({}), !0;
                                  } catch (e) {}
                              return !1;
                          })() &&
                          ((e.loader = sx),
                          (e.progressive = !0),
                          (e.enableSoftwareAES = !0),
                          t.log("[config]: Progressive streaming enabled, using FetchLoader"));
                })(n, t);
        const {
                abrController: i,
                bufferController: r,
                capLevelController: s,
                errorController: a,
                fpsController: o,
            } = n,
            l = new a(this),
            c = (this.abrController = new i(this)),
            d = new tl(this),
            _ = n.interstitialsController,
            h = _ ? (this.interstitialsController = new _(this, s5)) : null,
            f = (this.bufferController = new r(this, d)),
            p = (this.capLevelController = new s(this)),
            E = new o(this),
            m = new s4(this),
            g = n.contentSteeringController,
            A = g ? new g(this) : null,
            I = (this.levelController = new sX(this, A)),
            T = new sz(this),
            S = new s1(this.config, this.logger),
            y = (this.streamController = new s0(this, d, S)),
            N = (this.gapController = new sB(this, d));
        p.setStreamController(y), E.setStreamController(y);
        const v = [m, I, y];
        h && v.splice(1, 0, h), A && v.splice(1, 0, A), (this.networkControllers = v);
        const C = [c, f, N, p, E, T, d];
        this.audioTrackController = this.createController(n.audioTrackController, v);
        const R = n.audioStreamController;
        R && v.push((this.audioStreamController = new R(this, d, S))),
            (this.subtitleTrackController = this.createController(n.subtitleTrackController, v));
        const O = n.subtitleStreamController;
        O && v.push((this.subtititleStreamController = new O(this, d, S))),
            this.createController(n.timelineController, C),
            (S.emeController = this.emeController = this.createController(n.emeController, C)),
            (this.cmcdController = this.createController(n.cmcdController, C)),
            (this.latencyController = this.createController(sq, C)),
            (this.coreComponents = C),
            v.push(l);
        const b = l.onErrorOut;
        "function" == typeof b && this.on(u.ERROR, b, l), this.on(u.MANIFEST_LOADED, m.onManifestLoaded, m);
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
    off(e, t, n = this, i) {
        this._emitter.off(e, t, n, i);
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
            i = t ? e : { media: n };
        (this._media = n), this.trigger(u.MEDIA_ATTACHING, i);
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
            i = (this._url = z.buildAbsoluteURL(self.location.href, e, { alwaysNormalize: !0 }));
        (this._autoLevelCapping = -1),
            (this._maxHdcpLevel = null),
            this.logger.log(`loadSource:${i}`),
            t && n && (n !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)),
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
        let e = { [O]: this.streamController.inFlightFrag };
        return (
            this.audioStreamController && (e[b] = this.audioStreamController.inFlightFrag),
            this.subtititleStreamController && (e[D] = this.subtititleStreamController.inFlightFrag),
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
        return (
            e ||
                (e = this._sessionId =
                    (function () {
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
                    })()),
            e
        );
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
        eB.indexOf(e) > -1 &&
            this._maxHdcpLevel !== e &&
            ((this._maxHdcpLevel = e), this.levelController.checkMaxAutoUpdated());
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
        for (let i = 0; i < n; i++) if (e[i].maxBitrate >= t) return i;
        return 0;
    }
    get maxAutoLevel() {
        let e,
            { levels: t, autoLevelCapping: n, maxHdcpLevel: i } = this;
        if (((e = -1 === n && null != t && t.length ? t.length - 1 : n), i))
            for (let n = e; n--; ) {
                let e = t[n].attrs["HDCP-LEVEL"];
                if (e && e <= i) return n;
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
        return eF(e, eq(t), navigator.mediaCapabilities);
    }
}
s5.defaultConfig = void 0;
