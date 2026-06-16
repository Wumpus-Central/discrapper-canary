let r;
i.d(t, { Ay: () => a8, sV: () => h });
let s =
        Number.isFinite ||
        function (e) {
            return "number" == typeof e && isFinite(e);
        },
    a =
        Number.isSafeInteger ||
        function (e) {
            return "number" == typeof e && Math.abs(e) <= n;
        },
    n = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
    l =
        (((E = {}).NETWORK_ERROR = "networkError"),
        (E.MEDIA_ERROR = "mediaError"),
        (E.KEY_SYSTEM_ERROR = "keySystemError"),
        (E.MUX_ERROR = "muxError"),
        (E.OTHER_ERROR = "otherError"),
        E),
    o =
        (((T = {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
        (T.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
        (T.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
        (T.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense"),
        (T.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed"),
        (T.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed"),
        (T.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed"),
        (T.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed"),
        (T.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted"),
        (T.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError"),
        (T.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError"),
        (T.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError"),
        (T.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError"),
        (T.MANIFEST_LOAD_ERROR = "manifestLoadError"),
        (T.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
        (T.MANIFEST_PARSING_ERROR = "manifestParsingError"),
        (T.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError"),
        (T.LEVEL_EMPTY_ERROR = "levelEmptyError"),
        (T.LEVEL_LOAD_ERROR = "levelLoadError"),
        (T.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
        (T.LEVEL_PARSING_ERROR = "levelParsingError"),
        (T.LEVEL_SWITCH_ERROR = "levelSwitchError"),
        (T.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
        (T.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
        (T.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
        (T.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
        (T.FRAG_LOAD_ERROR = "fragLoadError"),
        (T.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
        (T.FRAG_DECRYPT_ERROR = "fragDecryptError"),
        (T.FRAG_PARSING_ERROR = "fragParsingError"),
        (T.FRAG_GAP = "fragGap"),
        (T.REMUX_ALLOC_ERROR = "remuxAllocError"),
        (T.KEY_LOAD_ERROR = "keyLoadError"),
        (T.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
        (T.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
        (T.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError"),
        (T.BUFFER_APPEND_ERROR = "bufferAppendError"),
        (T.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
        (T.BUFFER_STALLED_ERROR = "bufferStalledError"),
        (T.BUFFER_FULL_ERROR = "bufferFullError"),
        (T.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
        (T.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
        (T.ASSET_LIST_LOAD_ERROR = "assetListLoadError"),
        (T.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout"),
        (T.ASSET_LIST_PARSING_ERROR = "assetListParsingError"),
        (T.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError"),
        (T.INTERNAL_EXCEPTION = "internalException"),
        (T.INTERNAL_ABORTED = "aborted"),
        (T.ATTACH_MEDIA_ERROR = "attachMediaError"),
        (T.UNKNOWN = "unknown"),
        T),
    h =
        (((S = {}).MEDIA_ATTACHING = "hlsMediaAttaching"),
        (S.MEDIA_ATTACHED = "hlsMediaAttached"),
        (S.MEDIA_DETACHING = "hlsMediaDetaching"),
        (S.MEDIA_DETACHED = "hlsMediaDetached"),
        (S.MEDIA_ENDED = "hlsMediaEnded"),
        (S.STALL_RESOLVED = "hlsStallResolved"),
        (S.BUFFER_RESET = "hlsBufferReset"),
        (S.BUFFER_CODECS = "hlsBufferCodecs"),
        (S.BUFFER_CREATED = "hlsBufferCreated"),
        (S.BUFFER_APPENDING = "hlsBufferAppending"),
        (S.BUFFER_APPENDED = "hlsBufferAppended"),
        (S.BUFFER_EOS = "hlsBufferEos"),
        (S.BUFFERED_TO_END = "hlsBufferedToEnd"),
        (S.BUFFER_FLUSHING = "hlsBufferFlushing"),
        (S.BUFFER_FLUSHED = "hlsBufferFlushed"),
        (S.MANIFEST_LOADING = "hlsManifestLoading"),
        (S.MANIFEST_LOADED = "hlsManifestLoaded"),
        (S.MANIFEST_PARSED = "hlsManifestParsed"),
        (S.LEVEL_SWITCHING = "hlsLevelSwitching"),
        (S.LEVEL_SWITCHED = "hlsLevelSwitched"),
        (S.LEVEL_LOADING = "hlsLevelLoading"),
        (S.LEVEL_LOADED = "hlsLevelLoaded"),
        (S.LEVEL_UPDATED = "hlsLevelUpdated"),
        (S.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
        (S.LEVELS_UPDATED = "hlsLevelsUpdated"),
        (S.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
        (S.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
        (S.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
        (S.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
        (S.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
        (S.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated"),
        (S.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
        (S.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
        (S.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
        (S.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
        (S.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
        (S.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated"),
        (S.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
        (S.CUES_PARSED = "hlsCuesParsed"),
        (S.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
        (S.INIT_PTS_FOUND = "hlsInitPtsFound"),
        (S.FRAG_LOADING = "hlsFragLoading"),
        (S.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
        (S.FRAG_LOADED = "hlsFragLoaded"),
        (S.FRAG_DECRYPTED = "hlsFragDecrypted"),
        (S.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
        (S.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
        (S.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
        (S.FRAG_PARSED = "hlsFragParsed"),
        (S.FRAG_BUFFERED = "hlsFragBuffered"),
        (S.FRAG_CHANGED = "hlsFragChanged"),
        (S.FPS_DROP = "hlsFpsDrop"),
        (S.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
        (S.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated"),
        (S.ERROR = "hlsError"),
        (S.DESTROYING = "hlsDestroying"),
        (S.KEY_LOADING = "hlsKeyLoading"),
        (S.KEY_LOADED = "hlsKeyLoaded"),
        (S.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
        (S.BACK_BUFFER_REACHED = "hlsBackBufferReached"),
        (S.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded"),
        (S.ASSET_LIST_LOADING = "hlsAssetListLoading"),
        (S.ASSET_LIST_LOADED = "hlsAssetListLoaded"),
        (S.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated"),
        (S.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary"),
        (S.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated"),
        (S.INTERSTITIAL_STARTED = "hlsInterstitialStarted"),
        (S.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted"),
        (S.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded"),
        (S.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError"),
        (S.INTERSTITIAL_ENDED = "hlsInterstitialEnded"),
        (S.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed"),
        (S.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached"),
        (S.EVENT_CUE_ENTER = "hlsEventCueEnter"),
        S);
var d,
    u,
    f,
    c,
    g,
    m,
    p,
    y,
    v,
    E,
    T,
    S,
    A,
    L,
    R = "manifest",
    b = "level",
    I = "audioTrack",
    k = "subtitleTrack",
    D = "main",
    _ = "audio",
    P = "subtitle";
class C {
    constructor(e, t = 0, i = 0) {
        (this.halfLife = void 0),
            (this.alpha_ = void 0),
            (this.estimate_ = void 0),
            (this.totalWeight_ = void 0),
            (this.halfLife = e),
            (this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0),
            (this.estimate_ = t),
            (this.totalWeight_ = i);
    }
    sample(e, t) {
        let i = Math.pow(this.alpha_, e);
        (this.estimate_ = t * (1 - i) + i * this.estimate_), (this.totalWeight_ += e);
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
    constructor(e, t, i, r = 100) {
        (this.defaultEstimate_ = void 0),
            (this.minWeight_ = void 0),
            (this.minDelayMs_ = void 0),
            (this.slow_ = void 0),
            (this.fast_ = void 0),
            (this.defaultTTFB_ = void 0),
            (this.ttfb_ = void 0),
            (this.defaultEstimate_ = i),
            (this.minWeight_ = 0.001),
            (this.minDelayMs_ = 50),
            (this.slow_ = new C(e)),
            (this.fast_ = new C(t)),
            (this.defaultTTFB_ = r),
            (this.ttfb_ = new C(e));
    }
    update(e, t) {
        let { slow_: i, fast_: r, ttfb_: s } = this;
        i.halfLife !== e && (this.slow_ = new C(e, i.getEstimate(), i.getTotalWeight())),
            r.halfLife !== t && (this.fast_ = new C(t, r.getEstimate(), r.getTotalWeight())),
            s.halfLife !== e && (this.ttfb_ = new C(e, s.getEstimate(), s.getTotalWeight()));
    }
    sample(e, t) {
        let i = (e = Math.max(e, this.minDelayMs_)) / 1e3,
            r = (8 * t) / i;
        this.fast_.sample(i, r), this.slow_.sample(i, r);
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
function x() {
    return (x = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var r in i) ({}).hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
          }).apply(null, arguments);
}
function M(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? M(Object(i), !0).forEach(function (t) {
                  var r, s;
                  (r = t),
                      (s = i[t]),
                      (r = (function (e) {
                          var t = (function (e, t) {
                              if ("object" != typeof e || !e) return e;
                              var i = e[Symbol.toPrimitive];
                              if (void 0 !== i) {
                                  var r = i.call(e, t);
                                  if ("object" != typeof r) return r;
                                  throw TypeError("@@toPrimitive must return a primitive value.");
                              }
                              return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == typeof t ? t : t + "";
                      })(r)) in e
                          ? Object.defineProperty(e, r, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (e[r] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : M(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                });
    }
    return e;
}
class F {
    constructor(e, t) {
        (this.trace = void 0),
            (this.debug = void 0),
            (this.log = void 0),
            (this.warn = void 0),
            (this.info = void 0),
            (this.error = void 0);
        const i = `[${e}]:`;
        (this.trace = $),
            (this.debug = t.debug.bind(null, i)),
            (this.log = t.log.bind(null, i)),
            (this.warn = t.warn.bind(null, i)),
            (this.info = t.info.bind(null, i)),
            (this.error = t.error.bind(null, i));
    }
}
let $ = function () {},
    U = { trace: $, debug: $, log: $, warn: $, info: $, error: $ };
function B() {
    return x({}, U);
}
function N(e, t, i) {
    let r;
    return t[e] ? t[e].bind(t) : (r = self.console[e]) ? r.bind(self.console, `${i ? "[" + i + "] " : ""}[${e}] >`) : $;
}
let G = B();
function K(e = !0) {
    if (!("u" < typeof self))
        return ((e || !self.MediaSource) && self.ManagedMediaSource) || self.MediaSource || self.WebKitMediaSource;
}
function H(e, t) {
    let i = Object.keys(e),
        r = Object.keys(t),
        s = i.length,
        a = r.length;
    return !s || !a || (s === a && !i.some((e) => -1 === r.indexOf(e)));
}
function V(e, t = !1) {
    let i, r;
    if ("u" > typeof TextDecoder) {
        let i = new TextDecoder("utf-8").decode(e);
        if (t) {
            let e = i.indexOf("\0");
            return -1 !== e ? i.substring(0, e) : i;
        }
        return i.replace(/\0/g, "");
    }
    let s = e.length,
        a = "",
        n = 0;
    for (; n < s && (0 !== (i = e[n++]) || !t); )
        if (0 !== i && 3 !== i)
            switch (i >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    a += String.fromCharCode(i);
                    break;
                case 12:
                case 13:
                    a += String.fromCharCode(((31 & i) << 6) | (63 & (r = e[n++])));
                    break;
                case 14:
                    a += String.fromCharCode(((15 & i) << 12) | ((63 & (r = e[n++])) << 6) | (63 & e[n++]));
            }
    return a;
}
function Y(e) {
    let t = "";
    for (let i = 0; i < e.length; i++) {
        let r = e[i].toString(16);
        r.length < 2 && (r = "0" + r), (t += r);
    }
    return t;
}
function W(e) {
    return Uint8Array.from(
        e
            .replace(/^0x/, "")
            .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
            .replace(/ +$/, "")
            .split(" "),
    ).buffer;
}
var j = { exports: {} },
    q = A
        ? j.exports
        : ((A = 1),
          (d =
              /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/),
          (u = /^(?=([^\/?#]*))\1([^]*)$/),
          (f = /(?:\/|^)\.(?=\/)/g),
          (c = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
          (j.exports = g =
              {
                  buildAbsoluteURL: function (e, t, i) {
                      if (((i = i || {}), (e = e.trim()), !(t = t.trim()))) {
                          if (!i.alwaysNormalize) return e;
                          var r = g.parseURL(e);
                          if (!r) throw Error("Error trying to parse base URL.");
                          return (r.path = g.normalizePath(r.path)), g.buildURLFromParts(r);
                      }
                      var s = g.parseURL(t);
                      if (!s) throw Error("Error trying to parse relative URL.");
                      if (s.scheme)
                          return i.alwaysNormalize ? ((s.path = g.normalizePath(s.path)), g.buildURLFromParts(s)) : t;
                      var a = g.parseURL(e);
                      if (!a) throw Error("Error trying to parse base URL.");
                      if (!a.netLoc && a.path && "/" !== a.path[0]) {
                          var n = u.exec(a.path);
                          (a.netLoc = n[1]), (a.path = n[2]);
                      }
                      a.netLoc && !a.path && (a.path = "/");
                      var l = {
                          scheme: a.scheme,
                          netLoc: s.netLoc,
                          path: null,
                          params: s.params,
                          query: s.query,
                          fragment: s.fragment,
                      };
                      if (!s.netLoc && ((l.netLoc = a.netLoc), "/" !== s.path[0]))
                          if (s.path) {
                              var o = a.path,
                                  h = o.substring(0, o.lastIndexOf("/") + 1) + s.path;
                              l.path = g.normalizePath(h);
                          } else
                              (l.path = a.path), !s.params && ((l.params = a.params), s.query || (l.query = a.query));
                      return (
                          null === l.path && (l.path = i.alwaysNormalize ? g.normalizePath(s.path) : s.path),
                          g.buildURLFromParts(l)
                      );
                  },
                  parseURL: function (e) {
                      var t = d.exec(e);
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
                          e = e.split("").reverse().join("").replace(f, "");
                          e.length !== (e = e.replace(c, "")).length;
                      );
                      return e.split("").reverse().join("");
                  },
                  buildURLFromParts: function (e) {
                      return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
                  },
              }),
          j.exports);
class X {
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
var Q = "audio",
    z = "video",
    Z = "audiovideo";
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
                let i = (function e(t, i) {
                    let r = Object.getPrototypeOf(t);
                    if (r) {
                        let t = Object.getOwnPropertyDescriptor(r, i);
                        return t || e(r, i);
                    }
                })(e, t);
                i && ((i.enumerable = !0), Object.defineProperty(e, t, i));
            })(this, "stats");
    }
    setByteRange(e, t) {
        let i,
            r = e.split("@", 2);
        (i = 1 === r.length ? (null == t ? void 0 : t.byteRangeEndOffset) || 0 : parseInt(r[1])),
            (this._byteRange = [i, parseInt(r[0]) + i]);
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
        return null === this._streams && (this._streams = { [Q]: null, [z]: null, [Z]: null }), this._streams;
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
        return null === this._stats && (this._stats = new X()), this._stats;
    }
    set stats(e) {
        this._stats = e;
    }
    get url() {
        return (
            !this._url &&
                this.baseurl &&
                this.relurl &&
                (this._url = q.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })),
            this._url || ""
        );
    }
    set url(e) {
        this._url = e;
    }
    clearElementaryStreamInfo() {
        let { elementaryStreams: e } = this;
        (e[Q] = null), (e[z] = null), (e[Z] = null);
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
            if (s(e) && s(t)) return t - e;
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
        let e = s(this.duration) ? this.duration : 0;
        return this.programDateTime + 1e3 * e;
    }
    get encrypted() {
        var e, t;
        if (null != (e = this._decryptdata) && e.encrypted) return !0;
        if (this.levelkeys) {
            let e = Object.keys(this.levelkeys),
                i = e.length;
            if (i > 1 || (1 === i && null != (t = this.levelkeys[e[0]]) && t.encrypted)) return !0;
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
        if (!s(e)) {
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
    setElementaryStreamInfo(e, t, i, r, s, a = !1) {
        let { elementaryStreams: n } = this,
            l = n[e];
        if (!l) {
            n[e] = { startPTS: t, endPTS: i, startDTS: r, endDTS: s, partial: a };
            return;
        }
        (l.startPTS = Math.min(l.startPTS, t)),
            (l.endPTS = Math.max(l.endPTS, i)),
            (l.startDTS = Math.min(l.startDTS, r)),
            (l.endDTS = Math.max(l.endDTS, s));
    }
}
class ei extends J {
    constructor(e, t, i, r, s) {
        super(i),
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
        const a = e.enumeratedString("BYTERANGE");
        a && this.setByteRange(a, s), s && (this.fragOffset = s.fragOffset + s.duration);
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
let er = [].push,
    es = { video: 1, audio: 2, id3: 3, text: 4 };
function ea(e) {
    return String.fromCharCode.apply(null, e);
}
function en(e, t) {
    let i = (e[t] << 8) | e[t + 1];
    return i < 0 ? 65536 + i : i;
}
function el(e, t) {
    let i = eh(e, t);
    return i < 0 ? 0x100000000 + i : i;
}
function eo(e, t) {
    let i = el(e, t);
    return (i *= 0x100000000), (i += el(e, t + 4));
}
function eh(e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
}
function ed(e, t) {
    let i = [];
    if (!t.length) return i;
    let r = e.byteLength;
    for (let s = 0; s < r; ) {
        let a = el(e, s),
            n = ea(e.subarray(s + 4, s + 8)),
            l = a > 1 ? s + a : r;
        if (n === t[0])
            if (1 === t.length) i.push(e.subarray(s + 8, l));
            else {
                let r = ed(e.subarray(s + 8, l), t.slice(1));
                r.length && er.apply(i, r);
            }
        s = l;
    }
    return i;
}
function eu(e) {
    let t = [],
        i = ed(e, ["moov", "trak"]);
    for (let e = 0; e < i.length; e++) {
        let r = i[e],
            s = ed(r, ["tkhd"])[0];
        if (s) {
            let e = s[0],
                i = el(s, 0 === e ? 12 : 20),
                a = ed(r, ["mdia", "mdhd"])[0];
            if (a) {
                e = a[0];
                let s = el(a, 0 === e ? 12 : 20),
                    n = ed(r, ["mdia", "hdlr"])[0];
                if (n) {
                    let e = ea(n.subarray(8, 12)),
                        a = { soun: Q, vide: z }[e],
                        l = (function (e) {
                            let t,
                                i = e.subarray(8),
                                r = i.subarray(86),
                                s = ea(i.subarray(4, 8)),
                                a = s,
                                n = "enca" === s || "encv" === s;
                            if (n) {
                                let e = ed(i, [s])[0].subarray("enca" === s ? 28 : 78);
                                ed(e, ["sinf"]).forEach((e) => {
                                    let t = ed(e, ["schm"])[0];
                                    if (t) {
                                        let i = ea(t.subarray(4, 8));
                                        if ("cbcs" === i || "cenc" === i) {
                                            let t = ed(e, ["frma"])[0];
                                            t && (a = ea(t));
                                        }
                                    }
                                });
                            }
                            let l = a;
                            switch (a) {
                                case "avc1":
                                case "avc2":
                                case "avc3":
                                case "avc4": {
                                    let e = ed(r, ["avcC"])[0];
                                    e &&
                                        e.length > 3 &&
                                        ((a += "." + eg(e[1]) + eg(e[2]) + eg(e[3])),
                                        (t = ef("avc1" === l ? "dva1" : "dvav", r)));
                                    break;
                                }
                                case "mp4a": {
                                    let e = ed(i, [s])[0],
                                        t = ed(e.subarray(28), ["esds"])[0];
                                    if (t && t.length > 7) {
                                        let e = 4;
                                        if (3 !== t[e++]) break;
                                        e = ec(t, e) + 2;
                                        let i = t[e++];
                                        if ((128 & i && (e += 2), 64 & i && (e += t[e++]), 4 !== t[e++])) break;
                                        e = ec(t, e);
                                        let r = t[e++];
                                        if (64 === r) a += "." + eg(r);
                                        else break;
                                        if (((e += 12), 5 !== t[e++])) break;
                                        e = ec(t, e);
                                        let s = t[e++],
                                            n = (248 & s) >> 3;
                                        31 === n && (n += 1 + ((7 & s) << 3) + ((224 & t[e]) >> 5)), (a += "." + n);
                                    }
                                    break;
                                }
                                case "hvc1":
                                case "hev1": {
                                    let e = ed(r, ["hvcC"])[0];
                                    if (e && e.length > 12) {
                                        let t = e[1],
                                            i = ["", "A", "B", "C"][t >> 6],
                                            r = el(e, 2),
                                            s = e[12],
                                            n = e.subarray(6, 12);
                                        (a += "." + i + (31 & t)),
                                            (a +=
                                                "." +
                                                (function (e) {
                                                    let t = 0;
                                                    for (let i = 0; i < 32; i++) t |= ((e >> i) & 1) << (31 - i);
                                                    return t >>> 0;
                                                })(r)
                                                    .toString(16)
                                                    .toUpperCase()),
                                            (a += "." + ((32 & t) >> 5 ? "H" : "L") + s);
                                        let l = "";
                                        for (let e = n.length; e--; ) {
                                            let t = n[e];
                                            (t || l) && (l = "." + t.toString(16).toUpperCase() + l);
                                        }
                                        a += l;
                                    }
                                    t = ef("hev1" == l ? "dvhe" : "dvh1", r);
                                    break;
                                }
                                case "dvh1":
                                case "dvhe":
                                case "dvav":
                                case "dva1":
                                case "dav1":
                                    a = ef(a, r) || a;
                                    break;
                                case "vp09": {
                                    let e = ed(r, ["vpcC"])[0];
                                    if (e && e.length > 6) {
                                        let t = e[4],
                                            i = e[5],
                                            r = (e[6] >> 4) & 15;
                                        a += "." + em(t) + "." + em(i) + "." + em(r);
                                    }
                                    break;
                                }
                                case "av01": {
                                    let e = ed(r, ["av1C"])[0];
                                    if (e && e.length > 2) {
                                        let i = e[1] >>> 5,
                                            s = 31 & e[1],
                                            n = e[2] >>> 7 ? "H" : "M",
                                            l = (64 & e[2]) >> 6,
                                            o = (32 & e[2]) >> 5,
                                            h = (16 & e[2]) >> 4,
                                            d = (8 & e[2]) >> 3,
                                            u = (4 & e[2]) >> 2,
                                            f = 3 & e[2];
                                        (a +=
                                            "." +
                                            i +
                                            "." +
                                            em(s) +
                                            n +
                                            "." +
                                            em(2 === i && l ? (o ? 12 : 10) : l ? 10 : 8) +
                                            "." +
                                            h +
                                            "." +
                                            d +
                                            u +
                                            f +
                                            "." +
                                            em(1) +
                                            "." +
                                            em(1) +
                                            "." +
                                            em(1) +
                                            ".0"),
                                            (t = ef("dav1", r));
                                    }
                                }
                            }
                            return { codec: a, encrypted: n, supplemental: t };
                        })(ed(r, ["mdia", "minf", "stbl", "stsd"])[0]);
                    a
                        ? ((t[i] = { timescale: s, type: a, stsd: l }), (t[a] = O({ timescale: s, id: i }, l)))
                        : (t[i] = { timescale: s, type: e, stsd: l });
                }
            }
        }
    }
    return (
        ed(e, ["moov", "mvex", "trex"]).forEach((e) => {
            let i = t[el(e, 4)];
            i && (i.default = { duration: el(e, 12), flags: el(e, 20) });
        }),
        t
    );
}
function ef(e, t) {
    let i = ed(t, ["dvvC"]),
        r = i.length ? i[0] : ed(t, ["dvcC"])[0];
    if (r) {
        let t = (r[2] >> 1) & 127,
            i = ((r[2] << 5) & 32) | ((r[3] >> 3) & 31);
        return e + "." + em(t) + "." + em(i);
    }
}
function ec(e, t) {
    let i = t + 5;
    for (; 128 & e[t++] && t < i; );
    return t;
}
function eg(e) {
    return ("0" + e.toString(16).toUpperCase()).slice(-2);
}
function em(e) {
    return (e < 10 ? "0" : "") + e;
}
function ep(e) {
    let t = ed(e, ["schm"])[0];
    if (t) {
        let i = ea(t.subarray(4, 8));
        if ("cbcs" === i || "cenc" === i) return ed(e, ["schi", "tenc"])[0];
    }
    return null;
}
function ey(e, t) {
    let i = new Uint8Array(e.length + t.length);
    return i.set(e), i.set(t, e.length), i;
}
function ev(e, t) {
    let i = [],
        r = t.samples,
        s = t.timescale,
        a = t.id,
        n = !1;
    return (
        ed(r, ["moof"]).map((l) => {
            let o = l.byteOffset - 8;
            ed(l, ["traf"]).map((l) => {
                let h = ed(l, ["tfdt"]).map((e) => {
                    let t = e[0],
                        i = el(e, 4);
                    return 1 === t && ((i *= 0x100000000), (i += el(e, 8))), i / s;
                })[0];
                return (
                    void 0 !== h && (e = h),
                    ed(l, ["tfhd"]).map((h) => {
                        let d = el(h, 4),
                            u = 0xffffff & el(h, 0),
                            f = 0,
                            c = 0,
                            g = 8;
                        d === a &&
                            ((1 & u) != 0 && (g += 8),
                            (2 & u) != 0 && (g += 4),
                            (8 & u) != 0 && ((f = el(h, g)), (g += 4)),
                            (16 & u) != 0 && ((c = el(h, g)), (g += 4)),
                            (32 & u) != 0 && (g += 4),
                            "video" === t.type && (n = eE(t.codec)),
                            ed(l, ["trun"]).map((a) => {
                                let l = a[0],
                                    h = 0xffffff & el(a, 0),
                                    d = 0,
                                    u = (256 & h) != 0,
                                    g = 0,
                                    m = (512 & h) != 0,
                                    p = 0,
                                    y = (1024 & h) != 0,
                                    v = (2048 & h) != 0,
                                    E = 0,
                                    T = el(a, 4),
                                    S = 8;
                                (1 & h) != 0 && ((d = el(a, S)), (S += 4)), (4 & h) != 0 && (S += 4);
                                let A = d + o;
                                for (let o = 0; o < T; o++) {
                                    if (
                                        (u ? ((g = el(a, S)), (S += 4)) : (g = f),
                                        m ? ((p = el(a, S)), (S += 4)) : (p = c),
                                        y && (S += 4),
                                        v && ((E = 0 === l ? el(a, S) : eh(a, S)), (S += 4)),
                                        t.type === z)
                                    ) {
                                        let t = 0;
                                        for (; t < p; ) {
                                            let a = el(r, A);
                                            (A += 4),
                                                (function (e, t) {
                                                    if (!e) return 6 == (31 & t);
                                                    {
                                                        let e = (t >> 1) & 63;
                                                        return 39 === e || 40 === e;
                                                    }
                                                })(n, r[A]) && eT(r.subarray(A, A + a), n ? 2 : 1, e + E / s, i),
                                                (A += a),
                                                (t += a + 4);
                                        }
                                    }
                                    e += g / s;
                                }
                            }));
                    })
                );
            });
        }),
        i
    );
}
function eE(e) {
    if (!e) return !1;
    let t = e.substring(0, 4);
    return "hvc1" === t || "hev1" === t || "dvh1" === t || "dvhe" === t;
}
function eT(e, t, i, r) {
    let s,
        a = eS(e);
    s = 0 + t;
    let n = 0,
        l = 0,
        o = 0;
    for (; s < a.length; ) {
        n = 0;
        do {
            if (s >= a.length) break;
            n += o = a[s++];
        } while (255 === o);
        l = 0;
        do {
            if (s >= a.length) break;
            l += o = a[s++];
        } while (255 === o);
        let e = a.length - s,
            t = s;
        if (l < e) s += l;
        else if (l > e) {
            G.error(`Malformed SEI payload. ${l} is too small, only ${e} bytes left to parse.`);
            break;
        }
        if (4 === n) {
            if (181 === a[t++]) {
                let e = en(a, t);
                if (((t += 2), 49 === e)) {
                    let e = el(a, t);
                    if (((t += 4), 0x47413934 === e)) {
                        let e = a[t++];
                        if (3 === e) {
                            let s = a[t++],
                                l = 31 & s,
                                o = 64 & s,
                                h = o ? 2 + 3 * l : 0,
                                d = new Uint8Array(h);
                            if (o) {
                                d[0] = s;
                                for (let e = 1; e < h; e++) d[e] = a[t++];
                            }
                            r.push({ type: e, payloadType: n, pts: i, bytes: d });
                        }
                    }
                }
            }
        } else if (5 === n && l > 16) {
            let e = [];
            for (let i = 0; i < 16; i++) {
                let r = a[t++].toString(16);
                e.push(1 == r.length ? "0" + r : r), (3 === i || 5 === i || 7 === i || 9 === i) && e.push("-");
            }
            let s = l - 16,
                o = new Uint8Array(s);
            for (let e = 0; e < s; e++) o[e] = a[t++];
            r.push({ payloadType: n, pts: i, uuid: e.join(""), userData: V(o), userDataBytes: o });
        }
    }
}
function eS(e) {
    let t = e.byteLength,
        i = [],
        r = 1;
    for (; r < t - 2; ) 0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2] ? (i.push(r + 2), (r += 2)) : r++;
    if (0 === i.length) return e;
    let s = t - i.length,
        a = new Uint8Array(s),
        n = 0;
    for (r = 0; r < s; n++, r++) n === i[0] && (n++, i.shift()), (a[r] = e[n]);
    return a;
}
let eA = {
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
function eL(e, t) {
    let i = eA[t];
    return !!i && !!i[e.slice(0, 4)];
}
function eR(e, t, i = !0) {
    return !e.split(",").some((e) => !eb(e, t, i));
}
function eb(e, t, i = !0) {
    var r;
    let s = K(i);
    return null != (r = null == s ? void 0 : s.isTypeSupported(eI(e, t))) && r;
}
function eI(e, t) {
    return `${t}/mp4;codecs=${e}`;
}
function ek(e) {
    if (e) {
        let t = e.substring(0, 4);
        return eA.video[t];
    }
    return 2;
}
function eD(e) {
    let t = /\(Windows.+Firefox\//i.test(navigator.userAgent);
    return e.split(",").reduce((e, i) => {
        let r = t && eE(i) ? 9 : eA.video[i];
        return r ? (2 * r + e) / (e ? 3 : 2) : (eA.audio[i] + e) / (e ? 2 : 1);
    }, 0);
}
let e_ = {},
    eP = /flac|opus|mp4a\.40\.34/i;
function eC(e, t = !0) {
    return e.replace(eP, (e) =>
        (function (e, t = !0) {
            if (e_[e]) return e_[e];
            let i = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"], "mp4a.40.34": ["mp3"] }[e];
            for (let s = 0; s < i.length; s++) {
                var r;
                if (eb(i[s], "audio", t)) return (e_[e] = i[s]), i[s];
                if ("mp3" === i[s] && null != (r = K(t)) && r.isTypeSupported("audio/mpeg")) return "";
            }
            return e;
        })(e.toLowerCase(), t),
    );
}
function ew(e, t) {
    if (
        e &&
        (e.length > 4 || -1 !== ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(e)) &&
        (ex(e, "audio") || ex(e, "video"))
    )
        return e;
    if (t) {
        let i = t.split(",");
        if (i.length > 1) {
            if (e) {
                for (let t = i.length; t--; ) if (i[t].substring(0, 4) === e.substring(0, 4)) return i[t];
            }
            return i[0];
        }
    }
    return t || e;
}
function ex(e, t) {
    return eL(e, t) && eb(e, t);
}
function eM(e) {
    let t = K(e) || { isTypeSupported: () => !1 };
    return {
        mpeg: t.isTypeSupported("audio/mpeg"),
        mp3: t.isTypeSupported('audio/mp4; codecs="mp3"'),
        ac3: t.isTypeSupported('audio/mp4; codecs="ac-3"'),
    };
}
function eO(e) {
    return e.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
let eF = { supported: !1, smooth: !1, powerEfficient: !1 },
    e$ = {
        supported: !0,
        configurations: [],
        decodingInfoResults: [{ supported: !0, powerEfficient: !0, smooth: !0 }],
    };
function eU(e, t) {
    return { supported: !1, configurations: t, decodingInfoResults: [eF], error: e };
}
function eB(e, t, i, r = {}) {
    var s, a, n, l, o, h;
    let d,
        u,
        f,
        c,
        g,
        m,
        p,
        y,
        v = e.videoCodec;
    if ((!v && !e.audioCodec) || !i) return Promise.resolve(e$);
    let E = [],
        T =
            ((d = null == (a = (s = e).videoCodec) ? void 0 : a.split(",")),
            (u = eN(s)),
            (f = s.width || 640),
            (c = s.height || 480),
            (g = s.frameRate || 30),
            (m = s.videoRange.toLowerCase()),
            d
                ? d.map((e) => {
                      let t = {
                          contentType: eI(
                              (function (e) {
                                  if (e.startsWith("av01.")) {
                                      let t = e.split("."),
                                          i = ["0", "111", "01", "01", "01", "0"];
                                      for (let e = t.length; e > 4 && e < 10; e++) t[e] = i[e - 4];
                                      return t.join(".");
                                  }
                                  return e;
                              })(e),
                              "video",
                          ),
                          width: f,
                          height: c,
                          bitrate: u,
                          framerate: g,
                      };
                      return "sdr" !== m && (t.transferFunction = m), t;
                  })
                : []),
        S = T.length,
        A =
            ((n = e),
            (l = t),
            (o = S > 0),
            (p = null == (h = n.audioCodec) ? void 0 : h.split(",")),
            (y = eN(n)),
            p && n.audioGroups
                ? n.audioGroups.reduce((e, t) => {
                      var i;
                      let r = t ? (null == (i = l.groups[t]) ? void 0 : i.tracks) : null;
                      return r
                          ? r.reduce((e, i) => {
                                if (i.groupId === t) {
                                    let t = parseFloat(i.channels || "");
                                    p.forEach((i) => {
                                        let r = {
                                            contentType: eI(i, "audio"),
                                            bitrate: o
                                                ? (function (e, t) {
                                                      if (t <= 1) return 1;
                                                      let i = 128e3;
                                                      return (
                                                          "ec-3" === e ? (i = 768e3) : "ac-3" === e && (i = 64e4),
                                                          Math.min(t / 2, i)
                                                      );
                                                  })(i, y)
                                                : y,
                                        };
                                        t && (r.channels = "" + t), e.push(r);
                                    });
                                }
                                return e;
                            }, e)
                          : e;
                  }, [])
                : []),
        L = A.length;
    for (let e = S || +L || 1; e--; ) {
        let t = { type: "media-source" };
        if ((S && (t.video = T[e % S]), L)) {
            t.audio = A[e % L];
            let i = t.audio.bitrate;
            t.video && i && (t.video.bitrate -= i);
        }
        E.push(t);
    }
    if (v) {
        let e = navigator.userAgent;
        if (v.split(",").some((e) => eE(e)) && /\(Windows.+Firefox\//i.test(navigator.userAgent))
            return Promise.resolve(
                eU(
                    Error(
                        `Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${e})`,
                    ),
                    E,
                ),
            );
    }
    return Promise.all(
        E.map((e) => {
            let t = (function (e) {
                let t = "",
                    { audio: i, video: r } = e;
                if (r) {
                    let e = eO(r.contentType);
                    t += `${e}_r${r.height}x${r.width}f${Math.ceil(r.framerate)}${r.transferFunction || "sd"}_${Math.ceil(r.bitrate / 1e5)}`;
                }
                if (i) {
                    let e = eO(i.contentType);
                    t += `${r ? "_" : ""}${e}_c${i.channels}`;
                }
                return t;
            })(e);
            return r[t] || (r[t] = i.decodingInfo(e));
        }),
    )
        .then((e) => ({ supported: !e.some((e) => !e.supported), configurations: E, decodingInfoResults: e }))
        .catch((e) => ({ supported: !1, configurations: E, decodingInfoResults: [], error: e }));
}
function eN(e) {
    return 1e3 * Math.ceil(Math.max(0.9 * e.bitrate, e.averageBitrate) / 1e3) || 1;
}
let eG = ["NONE", "TYPE-0", "TYPE-1", null],
    eK = ["SDR", "PQ", "HLG"];
function eH(e) {
    let { canSkipUntil: t, canSkipDateRanges: i, age: r } = e;
    return t && r < t / 2 ? (i ? "v2" : "YES") : "";
}
class eV {
    constructor(e, t, i) {
        (this.msn = void 0),
            (this.part = void 0),
            (this.skip = void 0),
            (this.msn = e),
            (this.part = t),
            (this.skip = i);
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
class eY {
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
            const i = null == (t = e.supplemental) ? void 0 : t.videoCodec;
            i && i !== e.videoCodec && (this.codecSet += `,${i.substring(0, 4)}`);
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
        return eW(this._audioGroups, e);
    }
    hasSubtitleGroup(e) {
        return eW(this._subtitleGroups, e);
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
function eW(e, t) {
    return !!t && !!e && -1 !== e.indexOf(t);
}
let ej = (e, t) => {
    let i;
    return JSON.stringify(
        e,
        ((i = new WeakSet()),
        (e, r) => {
            if ((t && (r = t(e, r)), "object" == typeof r && null !== r)) {
                if (i.has(r)) return;
                i.add(r);
            }
            return r;
        }),
    );
};
function eq(e, t) {
    G.log(`[abr] start candidates with "${e}" ignored because ${t}`);
}
function eX(e) {
    return e.reduce(
        (e, t) => {
            let i = e.groups[t.groupId];
            i || (i = e.groups[t.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: !1, hasAutoSelect: !1 }),
                i.tracks.push(t);
            let r = t.channels || "2";
            return (
                (i.channels[r] = (i.channels[r] || 0) + 1),
                (i.hasDefault = i.hasDefault || t.default),
                (i.hasAutoSelect = i.hasAutoSelect || t.autoselect),
                i.hasDefault && (e.hasDefaultAudio = !0),
                i.hasAutoSelect && (e.hasAutoSelectAudio = !0),
                e
            );
        },
        { hasDefaultAudio: !1, hasAutoSelectAudio: !1, groups: {} },
    );
}
function eQ(e) {
    if (!e) return e;
    let { lang: t, assocLang: i, characteristics: r, channels: s, audioCodec: a } = e;
    return { lang: t, assocLang: i, characteristics: r, channels: s, audioCodec: a };
}
function ez(e, t, i) {
    if ("attrs" in e) {
        let i = t.indexOf(e);
        if (-1 !== i) return i;
    }
    for (let r = 0; r < t.length; r++) if (eZ(e, t[r], i)) return r;
    return -1;
}
function eZ(e, t, i) {
    let { groupId: r, name: s, lang: a, assocLang: n, default: l } = e,
        o = e.forced;
    return (
        (void 0 === r || t.groupId === r) &&
        (void 0 === s || t.name === s) &&
        (void 0 === a ||
            (function (e, t = "--") {
                return e.length === t.length ? e === t : e.startsWith(t) || t.startsWith(e);
            })(a, t.lang)) &&
        (void 0 === a || t.assocLang === n) &&
        (void 0 === l || t.default === l) &&
        (void 0 === o || t.forced === o) &&
        (!("characteristics" in e) ||
            (function (e, t = "") {
                let i = e.split(","),
                    r = t.split(",");
                return i.length === r.length && !i.some((e) => -1 === r.indexOf(e));
            })(e.characteristics || "", t.characteristics)) &&
        (void 0 === i || i(e, t))
    );
}
function eJ(e, t) {
    let { audioCodec: i, channels: r } = e;
    return (
        (void 0 === i || (t.audioCodec || "").substring(0, 4) === i.substring(0, 4)) &&
        (void 0 === r || r === (t.channels || "2"))
    );
}
function e0(e, t, i) {
    for (let r = t; r > -1; r--) if (i(e[r])) return r;
    for (let r = t + 1; r < e.length; r++) if (i(e[r])) return r;
    return -1;
}
function e1(e, t) {
    var i;
    return !!e && e !== (null == (i = t.loadLevelObj) ? void 0 : i.uri);
}
let e2 = function (e, t) {
    let i = 0,
        r = e.length - 1,
        s = null,
        a = null;
    for (; i <= r; ) {
        let n = t((a = e[(s = ((i + r) / 2) | 0)]));
        if (n > 0) i = s + 1;
        else {
            if (!(n < 0)) return a;
            r = s - 1;
        }
    }
    return null;
};
function e3(e, t, i = 0, r = 0, s = 0.005) {
    let a = null;
    if (e) {
        a = t[1 + e.sn - t[0].sn] || null;
        let r = e.endDTS - i;
        r > 0 && r < 15e-7 && (i += 15e-7),
            a && e.level !== a.level && a.end <= e.end && (a = t[2 + e.sn - t[0].sn] || null);
    } else 0 === i && 0 === t[0].start && (a = t[0]);
    if (
        a &&
        (((!e || e.level === a.level) && 0 === e4(i, r, a)) ||
            (function (e, t, i) {
                if (t && 0 === t.start && t.level < e.level && (t.endPTS || 0) > 0) {
                    let r = t.tagList.reduce((e, t) => ("INF" === t[0] && (e += parseFloat(t[1])), e), i);
                    return e.start <= r;
                }
                return !1;
            })(a, e, Math.min(s, r)))
    )
        return a;
    let n = e2(t, e4.bind(null, i, r));
    return n && (n !== e || !a) ? n : a;
}
function e4(e = 0, t = 0, i) {
    if (i.start <= e && i.start + i.duration > e) return 0;
    let r = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
    return i.start + i.duration - r <= e ? 1 : i.start - r > e && i.start ? -1 : 0;
}
function e5(e, t, i) {
    if (e && e.startCC <= t && e.endCC >= t) {
        let r,
            s = e.fragments,
            { fragmentHint: a } = e;
        return (
            a && (s = s.concat(a)),
            e2(s, (e) => (e.cc < t ? 1 : e.cc > t ? -1 : ((r = e), e.end <= i) ? 1 : e.start > i ? -1 : 0)),
            r || null
        );
    }
    return null;
}
function e8(e) {
    switch (e.details) {
        case o.FRAG_LOAD_TIMEOUT:
        case o.KEY_LOAD_TIMEOUT:
        case o.LEVEL_LOAD_TIMEOUT:
        case o.MANIFEST_LOAD_TIMEOUT:
            return !0;
    }
    return !1;
}
function e6(e) {
    return e.details.startsWith("key");
}
function e9(e) {
    return e6(e) && !!e.frag && !e.frag.decryptdata;
}
function e7(e, t) {
    let i = e8(t);
    return e.default[`${i ? "timeout" : "error"}Retry`];
}
function te(e, t) {
    return Math.min(("linear" === e.backoff ? 1 : Math.pow(2, t)) * e.retryDelayMs, e.maxRetryDelayMs);
}
function tt(e) {
    return O(O({}, e), { errorRetry: null, timeoutRetry: null });
}
function ti(e, t, i, r) {
    var s;
    if (!e) return !1;
    let a = null == r ? void 0 : r.code,
        n = t < e.maxNumRetry && (tr((s = a)) || (!!s && (s < 400 || s > 499)) || !!i);
    return e.shouldRetry ? e.shouldRetry(e, t, i, r, n) : n;
}
function tr(e) {
    return 0 === e && !1 === navigator.onLine;
}
function ts(e) {
    let t = { action: 0, flags: 0 };
    return e && (t.resolved = !0), t;
}
var ta = "NOT_LOADED",
    tn = "APPENDING",
    tl = "PARTIAL";
class to {
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
            (e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(h.BUFFER_APPENDED, this.onBufferAppended, this),
            e.on(h.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(h.FRAG_LOADED, this.onFragLoaded, this));
    }
    _unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(h.BUFFER_APPENDED, this.onBufferAppended, this),
            e.off(h.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(h.FRAG_LOADED, this.onFragLoaded, this));
    }
    destroy() {
        this._unregisterListeners(),
            (this.hls = this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null);
    }
    getAppendedFrag(e, t) {
        let i = this.activePartLists[t];
        if (i)
            for (let t = i.length; t--; ) {
                let r = i[t];
                if (!r) break;
                if (r.start <= e && e <= r.end && r.loaded) return r;
            }
        return this.getBufferedFrag(e, t);
    }
    getBufferedFrag(e, t) {
        return this.getFragAtPos(e, t, !0);
    }
    getFragAtPos(e, t, i) {
        let { fragments: r } = this,
            s = Object.keys(r);
        for (let a = s.length; a--; ) {
            let n = r[s[a]];
            if ((null == n ? void 0 : n.body.type) === t && (!i || n.buffered)) {
                let t = n.body;
                if (t.start <= e && e <= t.end) return t;
            }
        }
        return null;
    }
    detectEvictedFragments(e, t, i, r, s) {
        this.timeRanges && (this.timeRanges[e] = t);
        let a = (null == r ? void 0 : r.fragment.sn) || -1;
        Object.keys(this.fragments).forEach((r) => {
            let n = this.fragments[r];
            if (!n || a >= n.body.sn) return;
            if (!n.buffered && (!n.loaded || s)) {
                n.body.type === i && this.removeFragment(n.body);
                return;
            }
            let l = n.range[e];
            if (l) {
                if (0 === l.time.length) return void this.removeFragment(n.body);
                l.time.some((e) => {
                    let i = !this.isTimeBuffered(e.startPTS, e.endPTS, t);
                    return i && this.removeFragment(n.body), i;
                });
            }
        });
    }
    detectPartialFragments(e) {
        let t = this.timeRanges;
        if (!t || "initSegment" === e.frag.sn) return;
        let i = e.frag,
            r = td(i),
            s = this.fragments[r];
        if (!s || (s.buffered && i.gap)) return;
        let a = !i.relurl;
        Object.keys(t).forEach((r) => {
            let n = i.elementaryStreams[r];
            if (!n) return;
            let l = t[r],
                o = a || !0 === n.partial;
            s.range[r] = this.getBufferedTimes(i, e.part, o, l);
        }),
            (s.loaded = null),
            Object.keys(s.range).length
                ? ((s.buffered = !0),
                  (s.body.endList = i.endList || s.body.endList) && (this.endListFragments[s.body.type] = s),
                  th(s) || this.removeParts(i.sn - 1, i.type))
                : this.removeFragment(s.body);
    }
    removeParts(e, t) {
        let i = this.activePartLists[t];
        i && (this.activePartLists[t] = tu(i, (t) => t.fragment.sn >= e));
    }
    fragBuffered(e, t) {
        let i = td(e),
            r = this.fragments[i];
        !r &&
            t &&
            ((r = this.fragments[i] =
                { body: e, appendedPTS: null, loaded: null, buffered: !1, range: Object.create(null) }),
            e.gap && (this.hasGaps = !0)),
            r && ((r.loaded = null), (r.buffered = !0));
    }
    getBufferedTimes(e, t, i, r) {
        let s = { time: [], partial: i },
            a = e.start,
            n = e.end,
            l = e.minEndPTS || n,
            o = e.maxStartPTS || a;
        for (let e = 0; e < r.length; e++) {
            let t = r.start(e) - this.bufferPadding,
                i = r.end(e) + this.bufferPadding;
            if (o >= t && l <= i) {
                s.time.push({ startPTS: Math.max(a, r.start(e)), endPTS: Math.min(n, r.end(e)) });
                break;
            }
            if (a < i && n > t) {
                let t = Math.max(a, r.start(e)),
                    i = Math.min(n, r.end(e));
                i > t && ((s.partial = !0), s.time.push({ startPTS: t, endPTS: i }));
            } else if (n <= t) break;
        }
        return s;
    }
    getPartialFragment(e) {
        let t,
            i,
            r,
            s = null,
            a = 0,
            { bufferPadding: n, fragments: l } = this;
        return (
            Object.keys(l).forEach((o) => {
                let h = l[o];
                h &&
                    th(h) &&
                    ((i = h.body.start - n),
                    (r = h.body.end + n),
                    e >= i && e <= r && a <= (t = Math.min(e - i, r - e)) && ((s = h.body), (a = t)));
            }),
            s
        );
    }
    isEndListAppended(e) {
        let t = this.endListFragments[e];
        return void 0 !== t && (t.buffered || th(t));
    }
    getState(e) {
        let t = td(e),
            i = this.fragments[t];
        if (i)
            if (!i.buffered) return tn;
            else if (th(i)) return tl;
            else return "OK";
        return ta;
    }
    isTimeBuffered(e, t, i) {
        let r, s;
        for (let a = 0; a < i.length; a++) {
            if (((r = i.start(a) - this.bufferPadding), (s = i.end(a) + this.bufferPadding), e >= r && t <= s))
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
        let i = t.frag,
            r = t.part ? null : t,
            s = td(i);
        this.fragments[s] = { body: i, appendedPTS: null, loaded: r, buffered: !1, range: Object.create(null) };
    }
    onBufferAppended(e, t) {
        let { frag: i, part: r, timeRanges: s, type: a } = t;
        if ("initSegment" === i.sn) return;
        let n = i.type;
        if (r) {
            let e = this.activePartLists[n];
            e || (this.activePartLists[n] = e = []), e.push(r);
        }
        this.timeRanges = s;
        let l = s[a];
        this.detectEvictedFragments(a, l, n, r);
    }
    onFragBuffered(e, t) {
        this.detectPartialFragments(t);
    }
    hasFragment(e) {
        let t = td(e);
        return !!this.fragments[t];
    }
    hasFragments(e) {
        let { fragments: t } = this,
            i = Object.keys(t);
        if (!e) return i.length > 0;
        for (let r = i.length; r--; ) {
            let s = t[i[r]];
            if ((null == s ? void 0 : s.body.type) === e) return !0;
        }
        return !1;
    }
    hasParts(e) {
        var t;
        return !!(null != (t = this.activePartLists[e]) && t.length);
    }
    removeFragmentsInRange(e, t, i, r, s) {
        (!r || this.hasGaps) &&
            Object.keys(this.fragments).forEach((a) => {
                let n = this.fragments[a];
                if (!n) return;
                let l = n.body;
                l.type === i &&
                    (!r || l.gap) &&
                    l.start < t &&
                    l.end > e &&
                    (n.buffered || s) &&
                    this.removeFragment(l);
            });
    }
    removeFragment(e) {
        let t = td(e);
        e.clearElementaryStreamInfo();
        let i = this.activePartLists[e.type];
        if (i) {
            let t = e.sn;
            this.activePartLists[e.type] = tu(i, (e) => e.fragment.sn !== t);
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
function th(e) {
    var t, i, r;
    return (
        e.buffered &&
        !!(
            e.body.gap ||
            (null != (t = e.range.video) && t.partial) ||
            (null != (i = e.range.audio) && i.partial) ||
            (null != (r = e.range.audiovideo) && r.partial)
        )
    );
}
function td(e) {
    return `${e.type}_${e.level}_${e.sn}`;
}
function tu(e, t) {
    return e.filter((e) => {
        let i = t(e);
        return i || e.clearElementaryStreamInfo(), i;
    });
}
class tf {
    constructor(e, t, i) {
        (this.subtle = void 0),
            (this.aesIV = void 0),
            (this.aesMode = void 0),
            (this.subtle = e),
            (this.aesIV = t),
            (this.aesMode = i);
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
class tc {
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
            i = new Uint32Array(4);
        for (let e = 0; e < 4; e++) i[e] = t.getUint32(4 * e);
        return i;
    }
    initTable() {
        let e = this.sBox,
            t = this.invSBox,
            i = this.subMix,
            r = i[0],
            s = i[1],
            a = i[2],
            n = i[3],
            l = this.invSubMix,
            o = l[0],
            h = l[1],
            d = l[2],
            u = l[3],
            f = new Uint32Array(256),
            c = 0,
            g = 0,
            m = 0;
        for (m = 0; m < 256; m++) m < 128 ? (f[m] = m << 1) : (f[m] = (m << 1) ^ 283);
        for (m = 0; m < 256; m++) {
            let i = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4);
            (i = (i >>> 8) ^ (255 & i) ^ 99), (e[c] = i), (t[i] = c);
            let l = f[c],
                m = f[l],
                p = f[m],
                y = (257 * f[i]) ^ (0x1010100 * i);
            (r[c] = (y << 24) | (y >>> 8)),
                (s[c] = (y << 16) | (y >>> 16)),
                (a[c] = (y << 8) | (y >>> 24)),
                (n[c] = y),
                (y = (0x1010101 * p) ^ (65537 * m) ^ (257 * l) ^ (0x1010100 * c)),
                (o[i] = (y << 24) | (y >>> 8)),
                (h[i] = (y << 16) | (y >>> 16)),
                (d[i] = (y << 8) | (y >>> 24)),
                (u[i] = y),
                c ? ((c = l ^ f[f[f[p ^ l]]]), (g ^= f[f[g]])) : (c = g = 1);
        }
    }
    expandKey(e) {
        let t,
            i,
            r,
            s,
            a = this.uint8ArrayToUint32Array_(e),
            n = !0,
            l = 0;
        for (; l < a.length && n; ) (n = a[l] === this.key[l]), l++;
        if (n) return;
        this.key = a;
        let o = (this.keySize = a.length);
        if (4 !== o && 6 !== o && 8 !== o) throw Error("Invalid aes key size=" + o);
        let h = (this.ksRows = (o + 6 + 1) * 4),
            d = (this.keySchedule = new Uint32Array(h)),
            u = (this.invKeySchedule = new Uint32Array(h)),
            f = this.sBox,
            c = this.rcon,
            g = this.invSubMix,
            m = g[0],
            p = g[1],
            y = g[2],
            v = g[3];
        for (t = 0; t < h; t++) {
            if (t < o) {
                r = d[t] = a[t];
                continue;
            }
            (s = r),
                t % o == 0
                    ? (s =
                          ((f[(s = (s << 8) | (s >>> 24)) >>> 24] << 24) |
                              (f[(s >>> 16) & 255] << 16) |
                              (f[(s >>> 8) & 255] << 8) |
                              f[255 & s]) ^
                          (c[(t / o) | 0] << 24))
                    : o > 6 &&
                      t % o == 4 &&
                      (s = (f[s >>> 24] << 24) | (f[(s >>> 16) & 255] << 16) | (f[(s >>> 8) & 255] << 8) | f[255 & s]),
                (d[t] = r = (d[t - o] ^ s) >>> 0);
        }
        for (i = 0; i < h; i++)
            (t = h - i),
                (s = 3 & i ? d[t] : d[t - 4]),
                i < 4 || t <= 4
                    ? (u[i] = s)
                    : (u[i] = m[f[s >>> 24]] ^ p[f[(s >>> 16) & 255]] ^ y[f[(s >>> 8) & 255]] ^ v[f[255 & s]]),
                (u[i] = u[i] >>> 0);
    }
    networkToHostOrderSwap(e) {
        return (e << 24) | ((65280 & e) << 8) | ((0xff0000 & e) >> 8) | (e >>> 24);
    }
    decrypt(e, t, i) {
        let r,
            s,
            a,
            n,
            l,
            o,
            h,
            d,
            u,
            f,
            c,
            g,
            m,
            p,
            y = this.keySize + 6,
            v = this.invKeySchedule,
            E = this.invSBox,
            T = this.invSubMix,
            S = T[0],
            A = T[1],
            L = T[2],
            R = T[3],
            b = this.uint8ArrayToUint32Array_(i),
            I = b[0],
            k = b[1],
            D = b[2],
            _ = b[3],
            P = new Int32Array(e),
            C = new Int32Array(P.length),
            w = this.networkToHostOrderSwap;
        for (; t < P.length; ) {
            for (
                p = 1,
                    u = w(P[t]),
                    f = w(P[t + 1]),
                    c = w(P[t + 2]),
                    g = w(P[t + 3]),
                    l = u ^ v[0],
                    o = g ^ v[1],
                    h = c ^ v[2],
                    d = f ^ v[3],
                    m = 4;
                p < y;
                p++
            )
                (r = S[l >>> 24] ^ A[(o >> 16) & 255] ^ L[(h >> 8) & 255] ^ R[255 & d] ^ v[m]),
                    (s = S[o >>> 24] ^ A[(h >> 16) & 255] ^ L[(d >> 8) & 255] ^ R[255 & l] ^ v[m + 1]),
                    (a = S[h >>> 24] ^ A[(d >> 16) & 255] ^ L[(l >> 8) & 255] ^ R[255 & o] ^ v[m + 2]),
                    (n = S[d >>> 24] ^ A[(l >> 16) & 255] ^ L[(o >> 8) & 255] ^ R[255 & h] ^ v[m + 3]),
                    (l = r),
                    (o = s),
                    (h = a),
                    (d = n),
                    (m += 4);
            (r = (E[l >>> 24] << 24) ^ (E[(o >> 16) & 255] << 16) ^ (E[(h >> 8) & 255] << 8) ^ E[255 & d] ^ v[m]),
                (s =
                    (E[o >>> 24] << 24) ^
                    (E[(h >> 16) & 255] << 16) ^
                    (E[(d >> 8) & 255] << 8) ^
                    E[255 & l] ^
                    v[m + 1]),
                (a =
                    (E[h >>> 24] << 24) ^
                    (E[(d >> 16) & 255] << 16) ^
                    (E[(l >> 8) & 255] << 8) ^
                    E[255 & o] ^
                    v[m + 2]),
                (n =
                    (E[d >>> 24] << 24) ^
                    (E[(l >> 16) & 255] << 16) ^
                    (E[(o >> 8) & 255] << 8) ^
                    E[255 & h] ^
                    v[m + 3]),
                (C[t] = w(r ^ I)),
                (C[t + 1] = w(n ^ k)),
                (C[t + 2] = w(a ^ D)),
                (C[t + 3] = w(s ^ _)),
                (I = u),
                (k = f),
                (D = c),
                (_ = g),
                (t += 4);
        }
        return C.buffer;
    }
}
class tg {
    constructor(e, t, i) {
        (this.subtle = void 0),
            (this.key = void 0),
            (this.aesMode = void 0),
            (this.subtle = e),
            (this.key = t),
            (this.aesMode = i);
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
class tm {
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
        let i = new Uint8Array(e);
        if ((this.reset(), this.removePKCS7Padding)) {
            let e, t;
            return (t = (e = i.byteLength) && new DataView(i.buffer).getUint8(e - 1)) ? i.slice(0, e - t) : i;
        }
        return i;
    }
    reset() {
        (this.currentResult = null),
            (this.currentIV = null),
            (this.remainderData = null),
            this.softwareDecrypter && (this.softwareDecrypter = null);
    }
    decrypt(e, t, i, r) {
        return this.useSoftware
            ? new Promise((s, a) => {
                  let n = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
                  this.softwareDecrypt(n, t, i, r);
                  let l = this.flush();
                  l ? s(l.buffer) : a(Error("[softwareDecrypt] Failed to decrypt data"));
              })
            : this.webCryptoDecrypt(new Uint8Array(e), t, i, r);
    }
    softwareDecrypt(e, t, i, r) {
        let { currentIV: s, currentResult: a, remainderData: n } = this;
        if (0 !== r || 16 !== t.byteLength) return G.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
        this.logOnce("JS AES decrypt"), n && ((e = ey(n, e)), (this.remainderData = null));
        let l = this.getValidChunk(e);
        if (!l.length) return null;
        s && (i = s);
        let o = this.softwareDecrypter;
        return (o || (o = this.softwareDecrypter = new tc()),
        o.expandKey(t),
        (this.currentResult = o.decrypt(l.buffer, 0, i)),
        (this.currentIV = l.slice(-16).buffer),
        a)
            ? a
            : null;
    }
    webCryptoDecrypt(e, t, i, r) {
        if (this.key !== t || !this.fastAesKey) {
            if (!this.subtle) return Promise.resolve(this.onWebCryptoError(e, t, i, r));
            (this.key = t), (this.fastAesKey = new tg(this.subtle, t, r));
        }
        return this.fastAesKey
            .expandKey()
            .then((t) =>
                this.subtle
                    ? (this.logOnce("WebCrypto AES decrypt"),
                      new tf(this.subtle, new Uint8Array(i), r).decrypt(e.buffer, t))
                    : Promise.reject(Error("web crypto not initialized")),
            )
            .catch(
                (s) => (
                    G.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`),
                    this.onWebCryptoError(e, t, i, r)
                ),
            );
    }
    onWebCryptoError(e, t, i, r) {
        let s = this.enableSoftwareAES;
        if (s) {
            (this.useSoftware = !0), (this.logEnabled = !0), this.softwareDecrypt(e, t, i, r);
            let s = this.flush();
            if (s) return s.buffer;
        }
        throw Error("WebCrypto" + (s ? " and softwareDecrypt" : "") + ": failed to decrypt data");
    }
    getValidChunk(e) {
        let t = e,
            i = e.length - (e.length % 16);
        return i !== e.length && ((t = e.slice(0, i)), (this.remainderData = e.slice(i))), t;
    }
    logOnce(e) {
        this.logEnabled && (G.log(`[decrypter]: ${e}`), (this.logEnabled = !1));
    }
}
class tp {
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
        let i = e.url;
        if (!i)
            return Promise.reject(
                new tE({
                    type: l.NETWORK_ERROR,
                    details: o.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: e,
                    error: Error(`Fragment does not have a ${i ? "part list" : "url"}`),
                    networkDetails: null,
                }),
            );
        this.abort();
        let r = this.config,
            s = r.fLoader,
            a = r.loader;
        return new Promise((n, h) => {
            if ((this.loader && this.loader.destroy(), e.gap))
                if (e.tagList.some((e) => "GAP" === e[0])) return void h(tv(e));
                else e.gap = !1;
            let d = (this.loader = s ? new s(r) : new a(r)),
                u = ty(e);
            e.loader = d;
            let f = tt(r.fragLoadPolicy.default),
                c = {
                    loadPolicy: f,
                    timeout: f.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                    highWaterMark: "initSegment" === e.sn ? 1 / 0 : 131072,
                };
            e.stats = d.stats;
            let g = {
                onSuccess: (t, i, r, s) => {
                    this.resetLoader(e, d);
                    let a = t.data;
                    r.resetIV &&
                        e.decryptdata &&
                        ((e.decryptdata.iv = new Uint8Array(a.slice(0, 16))), (a = a.slice(16))),
                        n({ frag: e, part: null, payload: a, networkDetails: s });
                },
                onError: (t, r, s, a) => {
                    this.resetLoader(e, d),
                        h(
                            new tE({
                                type: l.NETWORK_ERROR,
                                details: o.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: e,
                                response: O({ url: i, data: void 0 }, t),
                                error: Error(`HTTP Error ${t.code} ${t.text}`),
                                networkDetails: s,
                                stats: a,
                            }),
                        );
                },
                onAbort: (t, i, r) => {
                    this.resetLoader(e, d),
                        h(
                            new tE({
                                type: l.NETWORK_ERROR,
                                details: o.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: e,
                                error: Error("Aborted"),
                                networkDetails: r,
                                stats: t,
                            }),
                        );
                },
                onTimeout: (t, i, r) => {
                    this.resetLoader(e, d),
                        h(
                            new tE({
                                type: l.NETWORK_ERROR,
                                details: o.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: e,
                                error: Error(`Timeout after ${c.timeout}ms`),
                                networkDetails: r,
                                stats: t,
                            }),
                        );
                },
            };
            t && (g.onProgress = (i, r, s, a) => t({ frag: e, part: null, payload: s, networkDetails: a })),
                d.load(u, c, g);
        });
    }
    loadPart(e, t, i) {
        this.abort();
        let r = this.config,
            s = r.fLoader,
            a = r.loader;
        return new Promise((n, h) => {
            if ((this.loader && this.loader.destroy(), e.gap || t.gap)) return void h(tv(e, t));
            let d = (this.loader = s ? new s(r) : new a(r)),
                u = ty(e, t);
            e.loader = d;
            let f = tt(r.fragLoadPolicy.default),
                c = {
                    loadPolicy: f,
                    timeout: f.maxLoadTimeMs,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: 0,
                    highWaterMark: 131072,
                };
            (t.stats = d.stats),
                d.load(u, c, {
                    onSuccess: (r, s, a, l) => {
                        this.resetLoader(e, d), this.updateStatsFromPart(e, t);
                        let o = { frag: e, part: t, payload: r.data, networkDetails: l };
                        i(o), n(o);
                    },
                    onError: (i, r, s, a) => {
                        this.resetLoader(e, d),
                            h(
                                new tE({
                                    type: l.NETWORK_ERROR,
                                    details: o.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    response: O({ url: u.url, data: void 0 }, i),
                                    error: Error(`HTTP Error ${i.code} ${i.text}`),
                                    networkDetails: s,
                                    stats: a,
                                }),
                            );
                    },
                    onAbort: (i, r, s) => {
                        (e.stats.aborted = t.stats.aborted),
                            this.resetLoader(e, d),
                            h(
                                new tE({
                                    type: l.NETWORK_ERROR,
                                    details: o.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error("Aborted"),
                                    networkDetails: s,
                                    stats: i,
                                }),
                            );
                    },
                    onTimeout: (i, r, s) => {
                        this.resetLoader(e, d),
                            h(
                                new tE({
                                    type: l.NETWORK_ERROR,
                                    details: o.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: e,
                                    part: t,
                                    error: Error(`Timeout after ${c.timeout}ms`),
                                    networkDetails: s,
                                    stats: i,
                                }),
                            );
                    },
                });
        });
    }
    updateStatsFromPart(e, t) {
        let i = e.stats,
            r = t.stats,
            s = r.total;
        if (((i.loaded += r.loaded), s)) {
            let r = Math.round(e.duration / t.duration),
                a = Math.min(Math.round(i.loaded / s), r),
                n = (r - a) * Math.round(i.loaded / a);
            i.total = i.loaded + n;
        } else i.total = Math.max(i.loaded, i.total);
        let a = i.loading,
            n = r.loading;
        a.start ? (a.first += n.first - n.start) : ((a.start = n.start), (a.first = n.first)), (a.end = n.end);
    }
    resetLoader(e, t) {
        (e.loader = null),
            this.loader === t && (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
            t.destroy();
    }
}
function ty(e, t = null) {
    let i = t || e,
        r = { frag: e, part: t, responseType: "arraybuffer", url: i.url, headers: {}, rangeStart: 0, rangeEnd: 0 },
        a = i.byteRangeStartOffset,
        n = i.byteRangeEndOffset;
    if (s(a) && s(n)) {
        var l, o;
        let t = a,
            i = n;
        if (
            "initSegment" === e.sn &&
            ("AES-128" === (o = null == (l = e.decryptdata) ? void 0 : l.method) || "AES-256" === o)
        ) {
            let e = n - a;
            e % 16 && (i = n + (16 - (e % 16))), 0 !== a && ((r.resetIV = !0), (t = a - 16));
        }
        (r.rangeStart = t), (r.rangeEnd = i);
    }
    return r;
}
function tv(e, t) {
    let i = Error(`GAP ${e.gap ? "tag" : "attribute"} found`),
        r = { type: l.MEDIA_ERROR, details: o.FRAG_GAP, fatal: !1, frag: e, error: i, networkDetails: null };
    return t && (r.part = t), ((t || e).stats.aborted = !0), new tE(r);
}
class tE extends Error {
    constructor(e) {
        super(e.error.message), (this.data = void 0), (this.data = e);
    }
}
class tT extends F {
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
class tS {
    constructor(e, t, i, r = 0, s = -1, a = !1) {
        (this.level = void 0),
            (this.sn = void 0),
            (this.part = void 0),
            (this.id = void 0),
            (this.size = void 0),
            (this.partial = void 0),
            (this.transmuxing = tA()),
            (this.buffering = { audio: tA(), video: tA(), audiovideo: tA() }),
            (this.level = e),
            (this.sn = t),
            (this.id = i),
            (this.size = r),
            (this.part = s),
            (this.partial = a);
    }
}
function tA() {
    return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
}
let tL = { length: 0, start: () => 0, end: () => 0 };
class tR {
    static isBuffered(e, t) {
        if (e) {
            let i = tR.getBuffered(e);
            for (let e = i.length; e--; ) if (t >= i.start(e) && t <= i.end(e)) return !0;
        }
        return !1;
    }
    static bufferedRanges(e) {
        if (e) {
            let t = tR.getBuffered(e);
            return tR.timeRangesToArray(t);
        }
        return [];
    }
    static timeRangesToArray(e) {
        let t = [];
        for (let i = 0; i < e.length; i++) t.push({ start: e.start(i), end: e.end(i) });
        return t;
    }
    static bufferInfo(e, t, i) {
        if (e) {
            let r = tR.bufferedRanges(e);
            if (r.length) return tR.bufferedInfo(r, t, i);
        }
        return { len: 0, start: t, end: t, bufferedIndex: -1 };
    }
    static bufferedInfo(e, t, i) {
        let r;
        (t = Math.max(0, t)), e.length > 1 && e.sort((e, t) => e.start - t.start || t.end - e.end);
        let s = -1,
            a = [];
        if (i)
            for (let r = 0; r < e.length; r++) {
                t >= e[r].start && t <= e[r].end && (s = r);
                let n = a.length;
                if (n) {
                    let t = a[n - 1].end;
                    e[r].start - t < i ? e[r].end > t && (a[n - 1].end = e[r].end) : a.push(e[r]);
                } else a.push(e[r]);
            }
        else a = e;
        let n = 0,
            l = t,
            o = t;
        for (let e = 0; e < a.length; e++) {
            let h = a[e].start,
                d = a[e].end;
            if ((-1 === s && t >= h && t <= d && (s = e), t + i >= h && t < d)) (l = h), (n = (o = d) - t);
            else if (t + i < h) {
                r = h;
                break;
            }
        }
        return { len: n, start: l || 0, end: o || 0, nextStart: r, buffered: e, bufferedIndex: s };
    }
    static getBuffered(e) {
        try {
            return e.buffered || tL;
        } catch (e) {
            return G.log("failed to get media.buffered", e), tL;
        }
    }
}
let tb = /\{\$([a-zA-Z0-9-_]+)\}/g;
function tI(e, t) {
    if (null !== e.variableList || e.hasVariableRefs) {
        let i = e.variableList;
        return t.replace(tb, (t) => {
            let r = t.substring(2, t.length - 1),
                s = null == i ? void 0 : i[r];
            return void 0 === s
                ? (e.playlistParsingError ||
                      (e.playlistParsingError = Error(
                          `Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r}"`,
                      )),
                  t)
                : s;
        });
    }
    return t;
}
function tk(e, t, i) {
    let r,
        s,
        a = e.variableList;
    if ((a || (e.variableList = a = {}), "QUERYPARAM" in t)) {
        r = t.QUERYPARAM;
        try {
            let e = new self.URL(i).searchParams;
            if (e.has(r)) s = e.get(r);
            else throw Error(`"${r}" does not match any query parameter in URI: "${i}"`);
        } catch (t) {
            e.playlistParsingError || (e.playlistParsingError = Error(`EXT-X-DEFINE QUERYPARAM: ${t.message}`));
        }
    } else (r = t.NAME), (s = t.VALUE);
    r in a
        ? e.playlistParsingError ||
          (e.playlistParsingError = Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${r}"`))
        : (a[r] = s || "");
}
let tD = /^(\d+)x(\d+)$/,
    t_ = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class tP {
    constructor(e, t) {
        "string" == typeof e && (e = tP.parseAttrList(e, t)), x(this, e);
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
                i = new Uint8Array((t = (1 & t.length ? "0" : "") + t).length / 2);
            for (let e = 0; e < t.length / 2; e++) i[e] = parseInt(t.slice(2 * e, 2 * e + 2), 16);
            return i;
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
        let i = this[e];
        return i ? parseFloat(i) : t;
    }
    enumeratedString(e) {
        return this[e];
    }
    enumeratedStringList(e, t) {
        let i = this[e];
        return (i ? i.split(/[ ,]+/) : []).reduce((e, t) => ((e[t.toLowerCase()] = !0), e), t);
    }
    bool(e) {
        return "YES" === this[e];
    }
    decimalResolution(e) {
        let t = tD.exec(this[e]);
        if (null !== t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };
    }
    static parseAttrList(e, t) {
        let i,
            r = {};
        for (t_.lastIndex = 0; null !== (i = t_.exec(e)); ) {
            let s = i[1].trim(),
                a = i[2],
                n = 0 === a.indexOf('"') && a.lastIndexOf('"') === a.length - 1,
                l = !1;
            if (n) a = a.slice(1, -1);
            else
                switch (s) {
                    case "IV":
                    case "SCTE35-CMD":
                    case "SCTE35-IN":
                    case "SCTE35-OUT":
                        l = !0;
                }
            if (t && (n || l)) a = tI(t, a);
            else if (!l && !n)
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
                        G.warn(`${e}: attribute ${s} is missing quotes`);
                }
            r[s] = a;
        }
        return r;
    }
}
class tC {
    constructor(e, t, i = 0) {
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
            (this.tagOrder = null != (r = null == t ? void 0 : t.tagOrder) ? r : i),
            t)
        ) {
            const i = t.attr;
            for (const t in i)
                if (Object.prototype.hasOwnProperty.call(e, t) && e[t] !== i[t]) {
                    G.warn(`DATERANGE tag attribute: "${t}" does not match for tags with ID: "${e.ID}"`),
                        (this._badValueForSameId = t);
                    break;
                }
            e = x(new tP({}), i, e);
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
            s(e.getTime()) && (this._endDate = e);
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
            ? (G.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN)
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
            if (s(e)) return e;
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
            s(this.startDate.getTime()) &&
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
            i = this.lastPartIndex - e.lastPartIndex;
        (this.updated = this.endSN !== e.endSN || !!i || !!t || !this.live),
            (this.advanced = this.endSN > e.endSN || t > 0 || (0 === t && i > 0)),
            this.updated || this.advanced ? (this.misses = Math.floor(0.6 * e.misses)) : (this.misses = e.misses + 1);
    }
    hasKey(e) {
        return this.encryptedFragments.some((t) => {
            let i = t.decryptdata;
            return i || (t.setKeyFormat(e.keyFormat), (i = t.decryptdata)), !!i && e.matches(i);
        });
    }
    get hasProgramDateTime() {
        return !!this.fragments.length && s(this.fragments[this.fragments.length - 1].programDateTime);
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
                for (let i = e.length; i--; ) if (e[i].index > t) return e[i].index;
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
function tx(e, t) {
    return e.length === t.length && !e.some((e, i) => e !== t[i]);
}
function tM(e, t) {
    return (!e && !t) || (!!e && !!t && tx(e, t));
}
function tO(e) {
    return "AES-128" === e || "AES-256" === e || "AES-256-CTR" === e;
}
function tF(e) {
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
function t$(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
function tU(e) {
    return Uint8Array.from(unescape(encodeURIComponent(e)), (e) => e.charCodeAt(0));
}
function tB(e) {
    let t = function (e, t, i) {
        let r = e[t];
        (e[t] = e[i]), (e[i] = r);
    };
    t(e, 0, 3), t(e, 1, 2), t(e, 4, 5), t(e, 6, 7);
}
let tN = "u" > typeof self ? self : void 0;
var tG = "org.w3.clearkey",
    tK = "com.apple.fps",
    tH = "com.microsoft.playready",
    tV = "com.widevine.alpha",
    tY = "org.w3.clearkey",
    tW = "com.apple.streamingkeydelivery",
    tj = "com.microsoft.playready",
    tq = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
function tX(e) {
    switch (e) {
        case tW:
            return tK;
        case tj:
            return tH;
        case tq:
            return tV;
        case tY:
            return tG;
    }
}
function tQ(e) {
    switch (e) {
        case tK:
            return tW;
        case tH:
            return tj;
        case tV:
            return tq;
        case tG:
            return tY;
    }
}
function tz(e) {
    let { drmSystems: t, widevineLicenseUrl: i } = e,
        r = t ? [tK, tV, tH, tG].filter((e) => !!t[e]) : [];
    return !r[tV] && i && r.push(tV), r;
}
let tZ =
        null != tN && null != (m = tN.navigator) && m.requestMediaKeySystemAccess
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
    constructor(e, t, i, r = [1], s = null, a) {
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
            (this.keyFormat = i),
            (this.keyFormatVersions = r),
            (this.iv = s),
            (this.encrypted = !!e && "NONE" !== e),
            (this.isCommonEncryption = this.encrypted && !tO(e)),
            null != a && a.startsWith("0x") && (this.keyId = new Uint8Array(W(a)));
    }
    matches(e) {
        return (
            e.uri === this.uri &&
            e.method === this.method &&
            e.encrypted === this.encrypted &&
            e.keyFormat === this.keyFormat &&
            tx(e.keyFormatVersions, this.keyFormatVersions) &&
            tM(e.iv, this.iv) &&
            tM(e.keyId, this.keyId)
        );
    }
    isSupported() {
        if (this.method) {
            if (tO(this.method) || "NONE" === this.method) return !0;
            if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
            switch (this.keyFormat) {
                case tW:
                case tq:
                case tj:
                case tY:
                    return -1 !== ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
            }
        }
        return !1;
    }
    getDecryptData(e) {
        if (!this.encrypted || !this.uri) return null;
        if (tO(this.method)) {
            let t = this.iv;
            return (
                t ||
                    ("number" != typeof e &&
                        (G.warn(
                            `missing IV for initialization segment with method="${this.method}" - compliance issue`,
                        ),
                        (e = 0)),
                    (t = (function (e) {
                        let t = new Uint8Array(16);
                        for (let i = 12; i < 16; i++) t[i] = (e >> (8 * (15 - i))) & 255;
                        return t;
                    })(e))),
                new t0(this.method, this.uri, "identity", this.keyFormatVersions, t)
            );
        }
        if (this.pssh && this.keyId) return this;
        let t = (function (e) {
            let t = e.split(":"),
                i = null;
            if ("data" === t[0] && 2 === t.length) {
                let e = t[1].split(";"),
                    r = e[e.length - 1].split(",");
                if (2 === r.length) {
                    let t = "base64" === r[0],
                        s = r[1];
                    if (t) e.splice(-1, 1), (i = t$(s));
                    else {
                        let e, t;
                        (e = tU(s).subarray(0, 16)), (t = new Uint8Array(16)).set(e, 16 - e.length), (i = t);
                    }
                }
            }
            return i;
        })(this.uri);
        if (t)
            switch (this.keyFormat) {
                case tq:
                    if (((this.pssh = t), !this.keyId)) {
                        let e = (function (e) {
                            let t = [];
                            if (e instanceof ArrayBuffer) {
                                let i = e.byteLength,
                                    r = 0;
                                for (; r + 32 < i; ) {
                                    let i = (function (e) {
                                        let t = e.getUint32(0),
                                            i = e.byteOffset,
                                            r = e.byteLength;
                                        if (r < t) return { offset: i, size: r };
                                        if (0x70737368 !== e.getUint32(4)) return { offset: i, size: t };
                                        let s = e.getUint32(8) >>> 24;
                                        if (0 !== s && 1 !== s) return { offset: i, size: t };
                                        let a = e.buffer,
                                            n = Y(new Uint8Array(a, i + 12, 16)),
                                            l = null,
                                            o = 0;
                                        if (0 === s) o = 28;
                                        else {
                                            let s = e.getUint32(28);
                                            if (!s || r < 32 + 16 * s) return { offset: i, size: t };
                                            l = [];
                                            for (let e = 0; e < s; e++) l.push(new Uint8Array(a, i + 32 + 16 * e, 16));
                                            o = 32 + 16 * s;
                                        }
                                        if (!o) return { offset: i, size: t };
                                        let h = e.getUint32(o);
                                        return t - 32 < h
                                            ? { offset: i, size: t }
                                            : {
                                                  version: s,
                                                  systemId: n,
                                                  kids: l,
                                                  data: new Uint8Array(a, i + o + 4, h),
                                                  offset: i,
                                                  size: t,
                                              };
                                    })(new DataView(e, r));
                                    t.push(i), (r += i.size);
                                }
                            }
                            return t;
                        })(t.buffer);
                        if (e.length) {
                            var i;
                            let t = e[0];
                            this.keyId = null != (i = t.kids) && i.length ? t.kids[0] : null;
                        }
                    }
                    if (!this.keyId) {
                        let e = t.length - 22;
                        this.keyId = t.subarray(e, e + 16);
                    }
                    break;
                case tj: {
                    let e = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                    (this.pssh = (function (e, t) {
                        let i, r;
                        if (16 !== e.byteLength) throw RangeError("Invalid system id");
                        (i = new Uint8Array()), (r = new Uint8Array());
                        let s = new Uint8Array(4);
                        return (
                            t.byteLength > 0 && new DataView(s.buffer).setUint32(0, t.byteLength, !1),
                            (function (e, ...t) {
                                let i = t.length,
                                    r = 8,
                                    s = i;
                                for (; s--; ) r += t[s].byteLength;
                                let a = new Uint8Array(r);
                                for (
                                    a[0] = (r >> 24) & 255,
                                        a[1] = (r >> 16) & 255,
                                        a[2] = (r >> 8) & 255,
                                        a[3] = 255 & r,
                                        a.set(e, 4),
                                        s = 0,
                                        r = 8;
                                    s < i;
                                    s++
                                )
                                    a.set(t[s], r), (r += t[s].byteLength);
                                return a;
                            })([112, 115, 115, 104], new Uint8Array([0, 0, 0, 0]), e, r, i, s, t)
                        );
                    })(e, t)),
                        (this.keyId = (function (e) {
                            let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
                                i = String.fromCharCode.apply(null, Array.from(t)),
                                r = i.substring(i.indexOf("<"), i.length),
                                s = new DOMParser().parseFromString(r, "text/xml").getElementsByTagName("KID")[0];
                            if (s) {
                                let e = s.childNodes[0] ? s.childNodes[0].nodeValue : s.getAttribute("VALUE");
                                if (e) {
                                    let t = t$(e).subarray(0, 16);
                                    return tB(t), t;
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
    t4 = RegExp(
        [/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"),
        "g",
    ),
    t5 = new RegExp(
        [
            /#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/
                .source,
            /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,
            /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,
            /(#)([^:]*):(.*)/.source,
            /(#)(.*)(?:.*)\r?\n?/.source,
        ].join("|"),
    );
class t8 {
    static findGroup(e, t) {
        for (let i = 0; i < e.length; i++) {
            let r = e[i];
            if (r.id === t) return r;
        }
    }
    static resolve(e, t) {
        return q.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });
    }
    static isMediaPlaylist(e) {
        return t3.test(e);
    }
    static parseMasterPlaylist(e, t) {
        var i;
        let r,
            s = {
                contentSteering: null,
                levels: [],
                playlistParsingError: null,
                sessionData: null,
                sessionKeys: null,
                startTimeOffset: null,
                variableList: null,
                hasVariableRefs: tb.test(e),
            },
            a = [];
        if (((t1.lastIndex = 0), !e.startsWith("#EXTM3U")))
            return (s.playlistParsingError = Error("no EXTM3U delimiter")), s;
        for (; null != (r = t1.exec(e)); )
            if (r[1]) {
                let e = new tP(r[1], s),
                    n = tI(s, r[2]),
                    l = {
                        attrs: e,
                        bitrate: e.decimalInteger("BANDWIDTH") || e.decimalInteger("AVERAGE-BANDWIDTH"),
                        name: e.NAME,
                        url: t8.resolve(n, t),
                    },
                    o = e.decimalResolution("RESOLUTION");
                o && ((l.width = o.width), (l.height = o.height)), ie(e.CODECS, l);
                let h = e["SUPPLEMENTAL-CODECS"];
                h && ((l.supplemental = {}), ie(h, l.supplemental)),
                    (null != (i = l.unknownCodecs) && i.length) || a.push(l),
                    s.levels.push(l);
            } else if (r[3]) {
                let e = r[3],
                    i = r[4];
                switch (e) {
                    case "SESSION-DATA": {
                        let e = new tP(i, s),
                            t = e["DATA-ID"];
                        t && (null === s.sessionData && (s.sessionData = {}), (s.sessionData[t] = e));
                        break;
                    }
                    case "SESSION-KEY": {
                        let e = t9(i, t, s);
                        e.encrypted && e.isSupported()
                            ? (null === s.sessionKeys && (s.sessionKeys = []), s.sessionKeys.push(e))
                            : G.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${i}"`);
                        break;
                    }
                    case "DEFINE":
                        {
                            let e = new tP(i, s);
                            tk(s, e, t);
                        }
                        break;
                    case "CONTENT-STEERING": {
                        let e = new tP(i, s);
                        s.contentSteering = { uri: t8.resolve(e["SERVER-URI"], t), pathwayId: e["PATHWAY-ID"] || "." };
                        break;
                    }
                    case "START":
                        s.startTimeOffset = t7(i);
                }
            }
        let n = a.length > 0 && a.length < s.levels.length;
        return (
            (s.levels = n ? a : s.levels),
            0 === s.levels.length && (s.playlistParsingError = Error("no levels found in manifest")),
            s
        );
    }
    static parseMasterPlaylistMedia(e, t, i) {
        let r,
            s = {},
            a = i.levels,
            n = {
                AUDIO: a.map((e) => ({ id: e.attrs.AUDIO, audioCodec: e.audioCodec })),
                SUBTITLES: a.map((e) => ({ id: e.attrs.SUBTITLES, textCodec: e.textCodec })),
                "CLOSED-CAPTIONS": [],
            },
            l = 0;
        for (t2.lastIndex = 0; null !== (r = t2.exec(e)); ) {
            let e = new tP(r[1], i),
                a = e.TYPE;
            if (a) {
                let i = n[a],
                    r = s[a] || [];
                s[a] = r;
                let o = e.LANGUAGE,
                    h = e["ASSOC-LANGUAGE"],
                    d = e.CHANNELS,
                    u = e.CHARACTERISTICS,
                    f = e["INSTREAM-ID"],
                    c = {
                        attrs: e,
                        bitrate: 0,
                        id: l++,
                        groupId: e["GROUP-ID"] || "",
                        name: e.NAME || o || "",
                        type: a,
                        default: e.bool("DEFAULT"),
                        autoselect: e.bool("AUTOSELECT"),
                        forced: e.bool("FORCED"),
                        lang: o,
                        url: e.URI ? t8.resolve(e.URI, t) : "",
                    };
                if (
                    (h && (c.assocLang = h),
                    d && (c.channels = d),
                    u && (c.characteristics = u),
                    f && (c.instreamId = f),
                    null != i && i.length)
                ) {
                    let e = t8.findGroup(i, c.groupId) || i[0];
                    it(c, e, "audioCodec"), it(c, e, "textCodec");
                }
                r.push(c);
            }
        }
        return s;
    }
    static parseLevelPlaylist(e, t, i, r, a, n) {
        var l;
        let o,
            h,
            d,
            u,
            f = { url: t },
            c = new tw(t),
            g = c.fragments,
            m = [],
            p = null,
            y = 0,
            v = 0,
            E = 0,
            T = 0,
            S = 0,
            A = null,
            L = new et(r, f),
            R = -1,
            b = !1,
            I = null;
        if (
            ((t4.lastIndex = 0),
            (c.m3u8 = e),
            (c.hasVariableRefs = tb.test(e)),
            (null == (l = t4.exec(e)) ? void 0 : l[0]) !== "#EXTM3U")
        )
            return (c.playlistParsingError = Error("Missing format identifier #EXTM3U")), c;
        for (; null !== (o = t4.exec(e)); ) {
            b &&
                ((b = !1),
                ((L = new et(r, f)).playlistOffset = E),
                L.setStart(E),
                (L.sn = y),
                (L.cc = T),
                S && (L.bitrate = S),
                (L.level = i),
                p &&
                    ((L.initSegment = p),
                    p.rawProgramDateTime &&
                        ((L.rawProgramDateTime = p.rawProgramDateTime), (p.rawProgramDateTime = null)),
                    I && (L.setByteRange(I), (I = null))));
            let e = o[1];
            if (e) {
                L.duration = parseFloat(e);
                let t = (" " + o[2]).slice(1);
                (L.title = t || null), L.tagList.push(t ? ["INF", e, t] : ["INF", e]);
            } else if (o[3]) {
                if (s(L.duration)) {
                    (L.playlistOffset = E),
                        L.setStart(E),
                        d && is(L, d, c),
                        (L.sn = y),
                        (L.level = i),
                        (L.cc = T),
                        g.push(L);
                    let e = (" " + o[3]).slice(1);
                    (L.relurl = tI(c, e)), ii(L, A, m), (A = L), (E += L.duration), y++, (v = 0), (b = !0);
                }
            } else {
                if (!(o = o[0].match(t5))) {
                    G.warn("No matches on slow regex match for level playlist!");
                    continue;
                }
                for (h = 1; h < o.length && void 0 === o[h]; h++);
                let e = (" " + o[h]).slice(1),
                    a = (" " + o[h + 1]).slice(1),
                    l = o[h + 2] ? (" " + o[h + 2]).slice(1) : null;
                switch (e) {
                    case "BYTERANGE":
                        A ? L.setByteRange(a, A) : L.setByteRange(a);
                        break;
                    case "PROGRAM-DATE-TIME":
                        (L.rawProgramDateTime = a),
                            L.tagList.push(["PROGRAM-DATE-TIME", a]),
                            -1 === R && (R = g.length);
                        break;
                    case "PLAYLIST-TYPE":
                        c.type && ia(c, e, o), (c.type = a.toUpperCase());
                        break;
                    case "MEDIA-SEQUENCE":
                        0 !== c.startSN ? ia(c, e, o) : g.length > 0 && il(c, e, o), (y = c.startSN = parseInt(a));
                        break;
                    case "SKIP": {
                        c.skippedSegments && ia(c, e, o);
                        let t = new tP(a, c),
                            i = t.decimalInteger("SKIPPED-SEGMENTS");
                        if (s(i)) {
                            c.skippedSegments += i;
                            for (let e = i; e--; ) g.push(null);
                            y += i;
                        }
                        let r = t.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                        r &&
                            (c.recentlyRemovedDateranges = (c.recentlyRemovedDateranges || []).concat(r.split("	")));
                        break;
                    }
                    case "TARGETDURATION":
                        0 !== c.targetduration && ia(c, e, o), (c.targetduration = Math.max(parseInt(a), 1));
                        break;
                    case "VERSION":
                        null !== c.version && ia(c, e, o), (c.version = parseInt(a));
                        break;
                    case "INDEPENDENT-SEGMENTS":
                        break;
                    case "ENDLIST":
                        c.live || ia(c, e, o), (c.live = !1);
                        break;
                    case "#":
                        (a || l) && L.tagList.push(l ? [a, l] : [a]);
                        break;
                    case "DISCONTINUITY":
                        T++, L.tagList.push(["DIS"]);
                        break;
                    case "GAP":
                        (L.gap = !0), L.tagList.push([e]);
                        break;
                    case "BITRATE":
                        L.tagList.push([e, a]), s((S = 1e3 * parseInt(a))) ? (L.bitrate = S) : (S = 0);
                        break;
                    case "DATERANGE": {
                        let e = new tP(a, c),
                            t = new tC(e, c.dateRanges[e.ID], c.dateRangeTagCount);
                        c.dateRangeTagCount++,
                            t.isValid || c.skippedSegments
                                ? (c.dateRanges[t.id] = t)
                                : G.warn(`Ignoring invalid DATERANGE tag: "${a}"`),
                            L.tagList.push(["EXT-X-DATERANGE", a]);
                        break;
                    }
                    case "DEFINE":
                        {
                            let e = new tP(a, c);
                            "IMPORT" in e
                                ? (function (e, t, i) {
                                      let r = t.IMPORT;
                                      if (i && r in i) {
                                          let t = e.variableList;
                                          t || (e.variableList = t = {}), (t[r] = i[r]);
                                      } else
                                          e.playlistParsingError ||
                                              (e.playlistParsingError = Error(
                                                  `EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${r}"`,
                                              ));
                                  })(c, e, n)
                                : tk(c, e, t);
                        }
                        break;
                    case "DISCONTINUITY-SEQUENCE":
                        0 !== c.startCC ? ia(c, e, o) : g.length > 0 && il(c, e, o), (c.startCC = T = parseInt(a));
                        break;
                    case "KEY": {
                        let e = t9(a, t, c);
                        if (e.isSupported()) {
                            if ("NONE" === e.method) {
                                d = void 0;
                                break;
                            }
                            d || (d = {});
                            let t = d[e.keyFormat];
                            (null != t && t.matches(e)) || (t && (d = x({}, d)), (d[e.keyFormat] = e));
                        } else G.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${a}"`);
                        break;
                    }
                    case "START":
                        c.startTimeOffset = t7(a);
                        break;
                    case "MAP": {
                        let e = new tP(a, c);
                        if (L.duration) {
                            let t = new et(r, f);
                            ir(t, e, i, d),
                                (p = t),
                                (L.initSegment = p),
                                p.rawProgramDateTime &&
                                    !L.rawProgramDateTime &&
                                    (L.rawProgramDateTime = p.rawProgramDateTime);
                        } else {
                            let t = L.byteRangeEndOffset;
                            if (t) {
                                let e = L.byteRangeStartOffset;
                                I = `${t - e}@${e}`;
                            } else I = null;
                            ir(L, e, i, d), (p = L), (b = !0);
                        }
                        p.cc = T;
                        break;
                    }
                    case "SERVER-CONTROL":
                        u && ia(c, e, o),
                            (c.canBlockReload = (u = new tP(a)).bool("CAN-BLOCK-RELOAD")),
                            (c.canSkipUntil = u.optionalFloat("CAN-SKIP-UNTIL", 0)),
                            (c.canSkipDateRanges = c.canSkipUntil > 0 && u.bool("CAN-SKIP-DATERANGES")),
                            (c.partHoldBack = u.optionalFloat("PART-HOLD-BACK", 0)),
                            (c.holdBack = u.optionalFloat("HOLD-BACK", 0));
                        break;
                    case "PART-INF":
                        c.partTarget && ia(c, e, o), (c.partTarget = new tP(a).decimalFloatingPoint("PART-TARGET"));
                        break;
                    case "PART": {
                        let e = c.partList;
                        e || (e = c.partList = []);
                        let t = v > 0 ? e[e.length - 1] : void 0,
                            i = v++,
                            r = new ei(new tP(a, c), L, f, i, t);
                        e.push(r), (L.duration += r.duration);
                        break;
                    }
                    case "PRELOAD-HINT": {
                        let e = new tP(a, c);
                        c.preloadHint = e;
                        break;
                    }
                    case "RENDITION-REPORT": {
                        let e = new tP(a, c);
                        (c.renditionReports = c.renditionReports || []), c.renditionReports.push(e);
                        break;
                    }
                    default:
                        G.warn(`line parsed but not handled: ${o}`);
                }
            }
        }
        A && !A.relurl
            ? (g.pop(), (E -= A.duration), c.partList && (c.fragmentHint = A))
            : c.partList && (ii(L, A, m), (L.cc = T), (c.fragmentHint = L), d && is(L, d, c)),
            c.targetduration || (c.playlistParsingError = Error("Missing Target Duration"));
        let k = g.length,
            D = g[0],
            _ = g[k - 1];
        if ((E += c.skippedSegments * c.targetduration) > 0 && k && _) {
            c.averagetargetduration = E / k;
            let e = _.sn;
            (c.endSN = "initSegment" !== e ? e : 0),
                c.live || (_.endList = !0),
                R > 0 &&
                    ((function (e, t) {
                        let i = e[t];
                        for (let r = t; r--; ) {
                            let t = e[r];
                            if (!t) return;
                            (t.programDateTime = i.programDateTime - 1e3 * t.duration), (i = t);
                        }
                    })(g, R),
                    D && m.unshift(D));
        }
        return (
            c.fragmentHint && (E += c.fragmentHint.duration),
            (c.totalduration = E),
            m.length && c.dateRangeTagCount && D && t6(m, c),
            (c.endCC = T),
            c
        );
    }
}
function t6(e, t) {
    let i = e.length;
    if (!i)
        if (!t.hasProgramDateTime) return;
        else {
            let r = t.fragments[t.fragments.length - 1];
            e.push(r), i++;
        }
    let r = e[i - 1],
        s = t.live ? 1 / 0 : t.totalduration,
        a = Object.keys(t.dateRanges);
    for (let l = a.length; l--; ) {
        let o = t.dateRanges[a[l]],
            h = o.startDate.getTime();
        o.tagAnchor = r.ref;
        for (let r = i; r--; ) {
            var n;
            if ((null == (n = e[r]) ? void 0 : n.sn) < t.startSN) break;
            let i = (function (e, t, i, r, s) {
                let a = i[r];
                if (a) {
                    let l = a.programDateTime;
                    if (t >= l || 0 === r) {
                        var n;
                        if (t <= l + 1e3 * (((null == (n = i[r + 1]) ? void 0 : n.start) || s) - a.start)) {
                            let s = i[r].sn - e.startSN;
                            if (s < 0) return -1;
                            let a = e.fragments;
                            if (a.length > i.length) {
                                let n = (i[r + 1] || a[a.length - 1]).sn - e.startSN;
                                for (let e = n; e > s; e--) {
                                    let i = a[e].programDateTime;
                                    if (t >= i && t < i + 1e3 * a[e].duration) return e;
                                }
                            }
                            return s;
                        }
                    }
                }
                return -1;
            })(t, h, e, r, s);
            if (-1 !== i) {
                o.tagAnchor = t.fragments[i].ref;
                break;
            }
        }
    }
}
function t9(e, t, i) {
    var r, s;
    let a = new tP(e, i),
        n = null != (r = a.METHOD) ? r : "",
        l = a.URI,
        o = a.hexadecimalInteger("IV"),
        h = a.KEYFORMATVERSIONS,
        d = null != (s = a.KEYFORMAT) ? s : "identity";
    return (
        l && a.IV && !o && G.error(`Invalid IV: ${a.IV}`),
        new t0(n, l ? t8.resolve(l, t) : "", d, (h || "1").split("/").map(Number).filter(Number.isFinite), o, a.KEYID)
    );
}
function t7(e) {
    let t = new tP(e).decimalFloatingPoint("TIME-OFFSET");
    return s(t) ? t : null;
}
function ie(e, t) {
    let i = (e || "").split(/[ ,]+/).filter((e) => e);
    ["video", "audio", "text"].forEach((e) => {
        let r = i.filter((t) => eL(t, e));
        r.length &&
            ((t[`${e}Codec`] = r.map((e) => e.split("/")[0]).join(",")), (i = i.filter((e) => -1 === r.indexOf(e))));
    }),
        (t.unknownCodecs = i);
}
function it(e, t, i) {
    let r = t[i];
    r && (e[i] = r);
}
function ii(e, t, i) {
    e.rawProgramDateTime ? i.push(e) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime);
}
function ir(e, t, i, r) {
    (e.relurl = t.URI),
        t.BYTERANGE && e.setByteRange(t.BYTERANGE),
        (e.level = i),
        (e.sn = "initSegment"),
        r && (e.levelkeys = r),
        (e.initSegment = null);
}
function is(e, t, i) {
    e.levelkeys = t;
    let { encryptedFragments: r } = i;
    (!r.length || r[r.length - 1].levelkeys !== t) && Object.keys(t).some((e) => t[e].isCommonEncryption) && r.push(e);
}
function ia(e, t, i) {
    e.playlistParsingError = Error(`#EXT-X-${t} must not appear more than once (${i[0]})`);
}
function il(e, t, i) {
    e.playlistParsingError = Error(`#EXT-X-${t} must appear before the first Media Segment (${i[0]})`);
}
function io(e, t) {
    let i = t.startPTS;
    if (s(i)) {
        let r,
            s = 0;
        t.sn > e.sn ? ((s = i - e.start), (r = e)) : ((s = e.start - i), (r = t)), r.duration !== s && r.setDuration(s);
    } else
        t.sn > e.sn
            ? e.cc === t.cc && e.minEndPTS
                ? t.setStart(e.start + (e.minEndPTS - e.start))
                : t.setStart(e.start + e.duration)
            : t.setStart(Math.max(e.start - t.duration, 0));
}
function ih(e, t, i, r, a, n, l) {
    let o;
    r - i <= 0 && (l.warn("Fragment should have a positive duration", t), (r = i + t.duration), (n = a + t.duration));
    let h = i,
        d = r,
        u = t.startPTS,
        f = t.endPTS;
    if (s(u)) {
        let o = Math.abs(u - i);
        e && o > e.totalduration
            ? l.warn(`media timestamps and playlist times differ by ${o}s for level ${t.level} ${e.url}`)
            : s(t.deltaPTS)
              ? (t.deltaPTS = Math.max(o, t.deltaPTS))
              : (t.deltaPTS = o),
            (h = Math.max(i, u)),
            (i = Math.min(i, u)),
            (a = void 0 !== t.startDTS ? Math.min(a, t.startDTS) : a),
            (d = Math.min(r, f)),
            (r = Math.max(r, f)),
            (n = void 0 !== t.endDTS ? Math.max(n, t.endDTS) : n);
    }
    let c = i - t.start;
    0 !== t.start && t.setStart(i),
        t.setDuration(r - t.start),
        (t.startPTS = i),
        (t.maxStartPTS = h),
        (t.startDTS = a),
        (t.endPTS = r),
        (t.minEndPTS = d),
        (t.endDTS = n);
    let g = t.sn;
    if (!e || g < e.startSN || g > e.endSN) return 0;
    let m = g - e.startSN,
        p = e.fragments;
    for (p[m] = t, o = m; o > 0; o--) io(p[o], p[o - 1]);
    for (o = m; o < p.length - 1; o++) io(p[o], p[o + 1]);
    return e.fragmentHint && io(p[p.length - 1], e.fragmentHint), (e.PTSKnown = e.alignedSliding = !0), c;
}
function id(e, t, i, r, s) {
    return Error(`${e} ${s.url}
Playlist starting @${t.startSN}
${t.m3u8}

Playlist starting @${i.startSN}
${i.m3u8}`);
}
function iu(e, t, i = !0) {
    let r = t.startSN + t.skippedSegments - e.startSN,
        s = e.fragments,
        a = r >= 0,
        n = 0;
    if (a && r < s.length) n = s[r].start;
    else if (a && t.startSN === e.endSN + 1) n = e.fragmentEnd;
    else if (a && i) n = e.fragmentStart + r * t.levelTargetDuration;
    else {
        if (t.skippedSegments || 0 !== t.fragmentStart) return;
        n = e.fragmentStart;
    }
    ic(t, n);
}
function ic(e, t) {
    if (t) {
        let i = e.fragments;
        for (let r = e.skippedSegments; r < i.length; r++) i[r].addStart(t);
        e.fragmentHint && e.fragmentHint.addStart(t);
    }
}
function ig(e, t = 1 / 0) {
    let i = 1e3 * e.targetduration;
    if (e.updated) {
        let r = e.fragments;
        if (r.length && 4 * i > t) {
            let e = 1e3 * r[r.length - 1].duration;
            e < i && (i = e);
        }
    } else i /= 2;
    return Math.round(i);
}
function im(e, t, i) {
    if (!e) return null;
    let r = e.fragments[t - e.startSN];
    return r || ((r = e.fragmentHint) && r.sn === t) ? r : t < e.startSN && i && i.sn === t ? i : null;
}
function ip(e, t, i) {
    return e ? iy(e.partList, t, i) : null;
}
function iy(e, t, i) {
    if (e)
        for (let r = e.length; r--; ) {
            let s = e[r];
            if (s.index === i && s.fragment.sn === t) return s;
        }
    return null;
}
function iv(e) {
    e.forEach((e, t) => {
        var i;
        null == (i = e.details) ||
            i.fragments.forEach((e) => {
                (e.level = t), e.initSegment && (e.initSegment.level = t);
            });
    });
}
function iE(e) {
    return e.replace(/\?[^?]*$/, "");
}
function iT(e, t) {
    for (let r = 0, s = e.length; r < s; r++) {
        var i;
        if ((null == (i = e[r]) ? void 0 : i.cc) === t) return e[r];
    }
    return null;
}
function iS(e, t) {
    let i = e.start + t;
    (e.startPTS = i), e.setStart(i), (e.endPTS = i + e.duration);
}
function iA(e, t) {
    let i = t.fragments;
    for (let t = 0, r = i.length; t < r; t++) iS(i[t], e);
    t.fragmentHint && iS(t.fragmentHint, e), (t.alignedSliding = !0);
}
function iL(e, t) {
    if ((!t || !(e.startCC < t.endCC) || !(e.endCC > t.startCC)) && 1) return;
    let i = Math.min(t.endCC, e.endCC),
        r = iT(t.fragments, i),
        s = iT(e.fragments, i);
    r && s && (G.log(`Aligning playlist at start of dicontinuity sequence ${i}`), iA(r.start - s.start, e));
}
function iR(e, t) {
    let i, r;
    if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
    let s = e.fragments,
        a = t.fragments;
    if (!s.length || !a.length) return;
    let n = Math.min(t.endCC, e.endCC);
    t.startCC < n && e.startCC < n && ((i = iT(a, n)), (r = iT(s, n))),
        (i && r) || (r = iT(s, (i = a[Math.floor(a.length / 2)]).cc) || s[Math.floor(s.length / 2)]);
    let l = i.programDateTime,
        o = r.programDateTime;
    l && o && iA((o - l) / 1e3 - (r.start - i.start), e);
}
function ib(e, t, i) {
    iI(e, t, i), e.addEventListener(t, i);
}
function iI(e, t, i) {
    e.removeEventListener(t, i);
}
let ik = function (e) {
        let t = "",
            i = e.length;
        for (let r = 0; r < i; r++) t += `[${e.start(r).toFixed(3)}-${e.end(r).toFixed(3)}]`;
        return t;
    },
    iD = "STOPPED",
    i_ = "IDLE",
    iP = "KEY_LOADING",
    iC = "FRAG_LOADING",
    iw = "FRAG_LOADING_WAITING_RETRY",
    ix = "WAITING_TRACK",
    iM = "PARSING",
    iO = "PARSED",
    iF = "ENDED",
    i$ = "ERROR",
    iU = "WAITING_INIT_PTS",
    iB = "WAITING_LEVEL";
class iN extends tT {
    constructor(e, t, i, r, a) {
        super(r, e.logger),
            (this.hls = void 0),
            (this.fragPrevious = null),
            (this.fragCurrent = null),
            (this.fragmentTracker = void 0),
            (this.transmuxer = null),
            (this._state = iD),
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
                let { config: e, fragCurrent: t, media: i, mediaBuffer: r, state: a } = this,
                    n = i ? i.currentTime : 0,
                    l = tR.bufferInfo(r || i, n, e.maxBufferHole),
                    o = !l.len;
                if (
                    (this.log(
                        `Media seeking to ${s(n) ? n.toFixed(3) : n}, state: ${a}, ${o ? "out of" : "in"} buffer`,
                    ),
                    this.state === iF)
                )
                    this.resetLoadingState();
                else if (t) {
                    let i = e.maxFragLookUpTolerance,
                        r = t.start - i,
                        s = t.start + t.duration + i;
                    if (o || s < l.start || r > l.end) {
                        let e = n > s;
                        (n < r || e) &&
                            (e &&
                                t.loader &&
                                (this.log(`Cancelling fragment load for seek (sn: ${t.sn})`),
                                t.abortRequests(),
                                this.resetLoadingState()),
                            (this.fragPrevious = null));
                    }
                }
                if (
                    i &&
                    (this.fragmentTracker.removeFragmentsInRange(n, 1 / 0, this.playlistType, !0),
                    n > this.lastCurrentTime && (this.lastCurrentTime = n),
                    !this.loadingParts)
                ) {
                    let e = Math.max(l.end, n),
                        t = this.shouldLoadParts(this.getLevelDetails(), e);
                    t &&
                        (this.log(`LL-Part loading ON after seeking to ${n.toFixed(2)} with buffer @${e.toFixed(2)}`),
                        (this.loadingParts = t));
                }
                !this.hls.hasEnoughToStart &&
                    (this.log(
                        `Setting ${o ? "startPosition" : "nextLoadPosition"} to ${n} for seek without enough to start`,
                    ),
                    (this.nextLoadPosition = n),
                    o && (this.startPosition = n)),
                    o && this.state === i_ && this.tickImmediate();
            }),
            (this.onMediaEnded = () => {
                this.log("setting startPosition to 0 because media ended"),
                    (this.startPosition = this.lastCurrentTime = 0);
            }),
            (this.playlistType = a),
            (this.hls = e),
            (this.fragmentLoader = new tp(e.config)),
            (this.keyLoader = i),
            (this.fragmentTracker = t),
            (this.config = e.config),
            (this.decrypter = new tm(e.config));
    }
    registerListeners() {
        let { hls: e } = this;
        e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(h.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(h.ERROR, this.onError, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(h.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(h.ERROR, this.onError, this);
    }
    doTick() {
        this.onTickEnd();
    }
    onTickEnd() {}
    startLoad(e) {}
    stopLoad() {
        if (this.state === iD) return;
        this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
        let e = this.fragCurrent;
        null != e && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)),
            this.resetTransmuxer(),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.clearInterval(),
            this.clearNextTick(),
            (this.state = iD);
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
        let i = e.end || 0,
            r = this.config.timelineOffset || 0;
        if (i <= r) return !1;
        let s = e.buffered;
        this.config.maxBufferHole && s && s.length > 1 && (e = tR.bufferedInfo(s, e.start, 0));
        let a = e.nextStart;
        if ((a && a > r && a < t.edge) || this.media.currentTime < e.start) return !1;
        let n = t.partList;
        if (null != n && n.length) {
            let e = n[n.length - 1];
            return tR.isBuffered(this.media, e.start + e.duration / 2);
        }
        let l = t.fragments[t.fragments.length - 1].type;
        return this.fragmentTracker.isEndListAppended(l);
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
        let i = (this.media = this.mediaBuffer = t.media);
        ib(i, "seeking", this.onMediaSeeking), ib(i, "ended", this.onMediaEnded);
        let r = this.config;
        this.levels && r.autoStartLoad && this.state === iD && this.startLoad(r.startPosition);
    }
    onMediaDetaching(e, t) {
        let i = !!t.transferMedia,
            r = this.media;
        if (null !== r) {
            if (
                (r.ended &&
                    (this.log("MSE detaching and video ended, reset startPosition"),
                    (this.startPosition = this.lastCurrentTime = 0)),
                iI(r, "seeking", this.onMediaSeeking),
                iI(r, "ended", this.onMediaEnded),
                this.keyLoader && !i && this.keyLoader.detach(),
                (this.media = this.mediaBuffer = null),
                (this.loopSn = void 0),
                i)
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
        (this.state = iD),
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
    loadFragment(e, t, i) {
        (this.startFragRequested = !0), this._loadFragForPlayback(e, t, i);
    }
    _loadFragForPlayback(e, t, i) {
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
        this._doFragLoad(e, t, i, r)
            .then((e) => {
                if (!e) return;
                let t = this.state,
                    i = e.frag;
                if (this.fragContextChanged(i)) {
                    (t !== iC && (this.fragCurrent || t !== iM)) ||
                        (this.fragmentTracker.removeFragment(i), (this.state = i_));
                    return;
                }
                "payload" in e &&
                    (this.log(`Loaded ${i.type} sn: ${i.sn} of ${this.playlistLabel()} ${i.level}`),
                    this.hls.trigger(h.FRAG_LOADED, e)),
                    this._handleFragmentLoadComplete(e);
            })
            .catch((t) => {
                this.state !== iD &&
                    this.state !== i$ &&
                    (this.warn(`Frag error: ${(null == t ? void 0 : t.message) || t}`), this.resetFragmentLoading(e));
            });
    }
    clearTrackerIfNeeded(e) {
        var t;
        let { fragmentTracker: i } = this;
        if (i.getState(e) === tn) {
            let t = e.type,
                r = this.getFwdBufferInfo(this.mediaBuffer, t),
                s = Math.max(e.duration, r ? r.len : this.config.maxBufferLength),
                a = this.backtrackFragment;
            (1 == (a ? e.sn - a.sn : 0) || this.reduceMaxBufferLength(s, e.duration)) && i.removeFragment(e);
        } else
            (null == (t = this.mediaBuffer) ? void 0 : t.buffered.length) === 0
                ? i.removeAllFragments()
                : i.hasParts(e.type) &&
                  (i.detectPartialFragments({ frag: e, part: null, stats: e.stats, id: e.type }),
                  i.getState(e) === tl && i.removeFragment(e));
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
    flushMainBuffer(e, t, i = null) {
        e - t && this.hls.trigger(h.BUFFER_FLUSHING, { startOffset: e, endOffset: t, type: i });
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
                    { frag: i, payload: r } = e,
                    s = i.decryptdata;
                if (r && r.byteLength > 0 && null != s && s.key && s.iv && tO(s.method)) {
                    let a = self.performance.now();
                    return this.decrypter
                        .decrypt(new Uint8Array(r), s.key.buffer, s.iv.buffer, tF(s.method))
                        .catch((e) => {
                            throw (
                                (t.trigger(h.ERROR, {
                                    type: l.MEDIA_ERROR,
                                    details: o.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: e,
                                    reason: e.message,
                                    frag: i,
                                }),
                                e)
                            );
                        })
                        .then((r) => {
                            let s = self.performance.now();
                            return (
                                t.trigger(h.FRAG_DECRYPTED, { frag: i, payload: r, stats: { tstart: a, tdecrypt: s } }),
                                (e.payload = r),
                                this.completeInitSegmentLoad(e)
                            );
                        });
                }
                return this.completeInitSegmentLoad(e);
            })
            .catch((t) => {
                this.state !== iD && this.state !== i$ && (this.warn(t), this.resetFragmentLoading(e));
            });
    }
    completeInitSegmentLoad(e) {
        let { levels: t } = this;
        if (!t) throw Error("init load aborted, missing levels");
        let i = e.frag.stats;
        this.state !== iD && (this.state = i_),
            (e.frag.data = new Uint8Array(e.payload)),
            (i.parsing.start = i.buffering.start = self.performance.now()),
            (i.parsing.end = i.buffering.end = self.performance.now()),
            this.tick();
    }
    unhandledEncryptionError(e, t) {
        var i, r;
        let s = e.tracks;
        if (
            s &&
            !t.encrypted &&
            ((null != (i = s.audio) && i.encrypted) || (null != (r = s.video) && r.encrypted)) &&
            (!this.config.emeEnabled || !this.keyLoader.emeController)
        ) {
            let e = this.media,
                i = Error(
                    `Encrypted track with no key in ${this.fragInfo(t)} (media ${e ? "attached mediaKeys: " + e.mediaKeys : "detached"})`,
                );
            return (
                this.warn(i.message),
                !!e &&
                    !e.mediaKeys &&
                    (this.hls.trigger(h.ERROR, {
                        type: l.KEY_SYSTEM_ERROR,
                        details: o.KEY_SYSTEM_NO_KEYS,
                        fatal: !1,
                        error: i,
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
        let i = this.mediaBuffer ? this.mediaBuffer : this.media;
        if (
            (this.log(
                `Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${i ? ik(tR.getBuffered(i)) : "(detached)"})`,
            ),
            ee(e))
        ) {
            var r;
            if (e.type !== P) {
                let t = e.elementaryStreams;
                if (!Object.keys(t).some((e) => !!t[e])) {
                    this.state = i_;
                    return;
                }
            }
            let t = null == (r = this.levels) ? void 0 : r[e.level];
            null != t &&
                t.fragmentError &&
                (this.log(`Resetting level fragment error count of ${t.fragmentError} on frag buffered`),
                (t.fragmentError = 0));
        }
        this.state = i_;
    }
    _handleFragmentLoadComplete(e) {
        let { transmuxer: t } = this;
        if (!t) return;
        let { frag: i, part: r, partsLoaded: s } = e,
            a = !s || 0 === s.length || s.some((e) => !e),
            n = new tS(i.level, i.sn, i.stats.chunkCount + 1, 0, r ? r.index : -1, !a);
        t.flush(n);
    }
    _handleFragmentLoadProgress(e) {}
    _doFragLoad(e, t, i = null, r) {
        var a, n;
        let l;
        this.fragCurrent = e;
        let o = t.details;
        if (!this.levels || !o) throw Error(`frag load aborted, missing level${o ? "" : " detail"}s`);
        let d = null;
        if (e.encrypted && !(null != (a = e.decryptdata) && a.key)) {
            if (
                (this.log(`Loading key for ${e.sn} of [${o.startSN}-${o.endSN}], ${this.playlistLabel()} ${e.level}`),
                (this.state = iP),
                (this.fragCurrent = e),
                (d = this.keyLoader.load(e).then((e) => {
                    if (!this.fragContextChanged(e.frag))
                        return this.hls.trigger(h.KEY_LOADED, e), this.state === iP && (this.state = i_), e;
                })),
                this.hls.trigger(h.KEY_LOADING, { frag: e }),
                null === this.fragCurrent)
            )
                return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
        } else
            !e.encrypted &&
                (d = this.keyLoader.loadClear(e, o.encryptedFragments, this.startFragRequested)) &&
                this.log("[eme] blocking frag load until media-keys acquired");
        let u = this.fragPrevious;
        if (ee(e) && (!u || e.sn !== u.sn)) {
            let i = this.shouldLoadParts(t.details, e.end);
            i !== this.loadingParts &&
                (this.log(`LL-Part loading ${i ? "ON" : "OFF"} loading sn ${null == u ? void 0 : u.sn}->${e.sn}`),
                (this.loadingParts = i));
        }
        if (((i = Math.max(e.start, i || 0)), this.loadingParts && ee(e))) {
            let s = o.partList;
            if (s && r) {
                i > o.fragmentEnd && o.fragmentHint && (e = o.fragmentHint);
                let a = this.getNextPart(s, e, i);
                if (a > -1) {
                    let n,
                        l = s[a];
                    return ((e = this.fragCurrent = l.fragment),
                    this.log(
                        `Loading ${e.type} sn: ${e.sn} part: ${l.index} (${a}/${s.length - 1}) of ${this.fragInfo(e, !1, l)}) cc: ${e.cc} [${o.startSN}-${o.endSN}], target: ${parseFloat(i.toFixed(3))}`,
                    ),
                    (this.nextLoadPosition = l.start + l.duration),
                    (this.state = iC),
                    (n = d
                        ? d
                              .then((i) =>
                                  !i || this.fragContextChanged(i.frag) ? null : this.doFragPartsLoad(e, l, t, r),
                              )
                              .catch((e) => this.handleFragLoadError(e))
                        : this.doFragPartsLoad(e, l, t, r).catch((e) => this.handleFragLoadError(e))),
                    this.hls.trigger(h.FRAG_LOADING, { frag: e, part: l, targetBufferTime: i }),
                    null === this.fragCurrent)
                        ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING parts"))
                        : n;
                }
                if (!e.url || this.loadedEndOfParts(s, i)) return Promise.resolve(null);
            }
        }
        if (ee(e) && this.loadingParts)
            this.log(
                `LL-Part loading OFF after next part miss @${i.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${null == ((n = o.partList)) ? void 0 : n.filter((e) => e.loaded).map((e) => `[${e.start}-${e.end}]`)}`,
            ),
                (this.loadingParts = !1);
        else if (!e.url) return Promise.resolve(null);
        this.log(
            `Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + o.startSN + "-" + o.endSN + "]"}, target: ${parseFloat(i.toFixed(3))}`,
        ),
            s(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
            (this.state = iC);
        let f = this.config.progressive;
        return ((l =
            f && d
                ? d
                      .then((t) => (!t || this.fragContextChanged(t.frag) ? null : this.fragmentLoader.load(e, r)))
                      .catch((e) => this.handleFragLoadError(e))
                : Promise.all([this.fragmentLoader.load(e, f ? r : void 0), d])
                      .then(([e]) => (!f && r && r(e), e))
                      .catch((e) => this.handleFragLoadError(e))),
        this.hls.trigger(h.FRAG_LOADING, { frag: e, targetBufferTime: i }),
        null === this.fragCurrent)
            ? Promise.reject(Error("frag load aborted, context changed in FRAG_LOADING"))
            : l;
    }
    doFragPartsLoad(e, t, i, r) {
        return new Promise((s, a) => {
            var n;
            let l = [],
                o = null == (n = i.details) ? void 0 : n.partList,
                d = (t) => {
                    this.fragmentLoader
                        .loadPart(e, t, r)
                        .then((r) => {
                            l[t.index] = r;
                            let a = r.part;
                            this.hls.trigger(h.FRAG_LOADED, r);
                            let n = ip(i.details, e.sn, t.index + 1) || iy(o, e.sn, t.index + 1);
                            if (!n) return s({ frag: e, part: a, partsLoaded: l });
                            d(n);
                        })
                        .catch(a);
                };
            d(t);
        });
    }
    handleFragLoadError(e) {
        if ("data" in e) {
            let t = e.data;
            t.frag && t.details === o.INTERNAL_ABORTED
                ? this.handleFragLoadAborted(t.frag, t.part)
                : t.frag && t.type === l.KEY_SYSTEM_ERROR
                  ? (t.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag))
                  : this.hls.trigger(h.ERROR, t);
        } else
            this.hls.trigger(h.ERROR, {
                type: l.OTHER_ERROR,
                details: o.INTERNAL_EXCEPTION,
                err: e,
                error: e,
                fatal: !0,
            });
        return null;
    }
    _handleTransmuxerFlush(e) {
        let t = this.getCurrentContext(e);
        if (!t || this.state !== iM) {
            this.fragCurrent || this.state === iD || this.state === i$ || (this.state = i_);
            return;
        }
        let { frag: i, part: r, level: s } = t,
            a = self.performance.now();
        (i.stats.parsing.end = a), r && (r.stats.parsing.end = a);
        let n = this.getLevelDetails(),
            l = (n && i.sn > n.endSN) || this.shouldLoadParts(n, i.end);
        l !== this.loadingParts &&
            (this.log(`LL-Part loading ${l ? "ON" : "OFF"} after parsing segment ending @${i.end.toFixed(2)}`),
            (this.loadingParts = l)),
            this.updateLevelTiming(i, r, s, e.partial);
    }
    shouldLoadParts(e, t) {
        if (this.config.lowLatencyMode) {
            if (!e) return this.loadingParts;
            if (e.partList) {
                var i, r;
                let s = e.partList[0];
                if (s.fragment.type === P) return !1;
                if (
                    t >= s.end + ((null == (i = e.fragmentHint) ? void 0 : i.duration) || 0) &&
                    (this.hls.hasEnoughToStart
                        ? (null == (r = this.media) ? void 0 : r.currentTime) || this.lastCurrentTime
                        : this.getLoadPosition()) >
                        s.start - s.fragment.duration
                )
                    return !0;
            }
        }
        return !1;
    }
    getCurrentContext(e) {
        let { levels: t, fragCurrent: i } = this,
            { level: r, sn: s, part: a } = e;
        if (!(null != t && t[r]))
            return (
                this.warn(
                    `Levels object was unset while buffering fragment ${s} of ${this.playlistLabel()} ${r}. The current chunk will not be buffered.`,
                ),
                null
            );
        let n = t[r],
            l = n.details,
            o = a > -1 ? ip(l, s, a) : null,
            h = o ? o.fragment : im(l, s, i);
        return h ? (i && i !== h && (h.stats = i.stats), { frag: h, part: o, level: n }) : null;
    }
    bufferFragmentData(e, t, i, r, s) {
        if (this.state !== iM) return;
        let { data1: a, data2: n } = e,
            l = a;
        if ((n && (l = ey(a, n)), !l.length)) return;
        let o = this.initPTS[t.cc],
            d = o ? -o.baseTime / o.timescale : void 0,
            u = { type: e.type, frag: t, part: i, chunkMeta: r, offset: d, parent: t.type, data: l };
        if ((this.hls.trigger(h.BUFFER_APPENDING, u), e.dropped && e.independent && !i)) {
            if (s) return;
            this.flushBufferGap(t);
        }
    }
    flushBufferGap(e) {
        let t = this.media;
        if (!t) return;
        if (!tR.isBuffered(t, t.currentTime)) return void this.flushMainBuffer(0, e.start);
        let i = t.currentTime,
            r = tR.bufferInfo(t, i, 0),
            s = e.duration,
            a = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * s),
            n = Math.max(Math.min(e.start - a, r.end - a), i + a);
        e.start - n > a && this.flushMainBuffer(n, e.start);
    }
    getFwdBufferInfo(e, t) {
        var i;
        let r = this.getLoadPosition();
        if (!s(r)) return null;
        let a = this.lastCurrentTime > r || (null != (i = this.media) && i.paused) ? 0 : this.config.maxBufferHole;
        return this.getFwdBufferInfoAtPos(e, r, t, a);
    }
    getFwdBufferInfoAtPos(e, t, i, r) {
        let s = tR.bufferInfo(e, t, r);
        if (0 === s.len && void 0 !== s.nextStart) {
            let a = this.fragmentTracker.getBufferedFrag(t, i);
            if (a && (s.nextStart <= a.end || a.gap)) {
                let i = Math.max(Math.min(s.nextStart, a.end) - t, r);
                return tR.bufferInfo(e, t, i);
            }
        }
        return s;
    }
    getMaxBufferLength(e) {
        let { config: t } = this;
        return Math.min(
            e ? Math.max((8 * t.maxBufferSize) / e, t.maxBufferLength) : t.maxBufferLength,
            t.maxMaxBufferLength,
        );
    }
    reduceMaxBufferLength(e, t) {
        let i = this.config,
            r = Math.max(Math.min(e - t, i.maxBufferLength), t),
            s = Math.max(e - 3 * t, i.maxMaxBufferLength / 2, r);
        return s >= r && ((i.maxMaxBufferLength = s), this.warn(`Reduce max buffer length to ${s}s`), !0);
    }
    getAppendedFrag(e, t = D) {
        let i = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null;
        return i && "fragment" in i ? i.fragment : i;
    }
    getNextFragment(e, t) {
        let i = t.fragments,
            r = i.length;
        if (!r) return null;
        let { config: s } = this,
            a = i[0].start,
            n = s.lowLatencyMode && !!t.partList,
            l = null;
        if (t.live) {
            let i = s.initialLiveManifestSize;
            if (r < i) return this.warn(`Not enough fragments to start playback (have: ${r}, need: ${i})`), null;
            if ((!t.PTSKnown && !this.startFragRequested && -1 === this.startPosition) || e < a) {
                var o;
                n &&
                    !this.loadingParts &&
                    (this.log("LL-Part loading ON for initial live fragment"), (this.loadingParts = !0)),
                    (l = this.getInitialLiveFragment(t));
                let i = this.hls.startPosition,
                    r = this.hls.liveSyncPosition,
                    s = l ? (-1 !== i && i >= a ? i : r) || l.start : e;
                this.log(
                    `Setting startPosition to ${s} to match start frag at live edge. mainStart: ${i} liveSyncPosition: ${r} frag.start: ${null == ((o = l)) ? void 0 : o.start}`,
                ),
                    (this.startPosition = this.nextLoadPosition = s);
            }
        } else e <= a && (l = i[0]);
        if (!l) {
            let i = this.loadingParts ? t.partEnd : t.fragmentEnd;
            l = this.getFragmentAtPosition(e, i, t);
        }
        let h = this.filterReplacedPrimary(l, t);
        if (!h && l) {
            let e = l.sn - t.startSN;
            h = this.filterReplacedPrimary(i[e + 1] || null, t);
        }
        return this.mapToInitFragWhenRequired(h);
    }
    isLoopLoading(e, t) {
        let i = this.fragmentTracker.getState(e);
        return ("OK" === i || (i === tl && !!e.gap)) && this.nextLoadPosition > t;
    }
    getNextFragmentLoopLoading(e, t, i, r, s) {
        let a = null;
        if (e.gap && (a = this.getNextFragment(this.nextLoadPosition, t)) && !a.gap && i.nextStart) {
            let e = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i.nextStart, r, 0);
            if (null !== e && i.len + e.len >= s) {
                let e = a.sn;
                return (
                    this.loopSn !== e &&
                        (this.log(`buffer full after gaps in "${r}" playlist starting at sn: ${e}`), (this.loopSn = e)),
                    null
                );
            }
        }
        return (this.loopSn = void 0), a;
    }
    get primaryPrefetch() {
        if (iG(this.config)) {
            var e;
            if (null == (e = this.hls.interstitialsManager) || null == (e = e.playingItem) ? void 0 : e.event)
                return !0;
        }
        return !1;
    }
    filterReplacedPrimary(e, t) {
        if (!e) return e;
        if (iG(this.config) && e.type !== P) {
            let i = this.hls.interstitialsManager,
                r = null == i ? void 0 : i.bufferingItem;
            if (r) {
                let i = r.event;
                if (i) {
                    if (i.appendInPlace || Math.abs(e.start - r.start) > 1 || 0 === r.start) return null;
                } else if (
                    (e.end <= r.start && (null == t ? void 0 : t.live) === !1) ||
                    (e.start > r.end && r.nextEvent && (r.nextEvent.appendInPlace || e.start - r.end > 1))
                )
                    return null;
            }
            let s = null == i ? void 0 : i.playerQueue;
            if (s)
                for (let t = s.length; t--; ) {
                    let i = s[t].interstitial;
                    if (i.appendInPlace && e.start >= i.startTime && e.end <= i.resumeTime) return null;
                }
        }
        return e;
    }
    mapToInitFragWhenRequired(e) {
        return null == e || !e.initSegment || e.initSegment.data || this.bitrateTest ? e : e.initSegment;
    }
    getNextPart(e, t, i) {
        let r = -1,
            s = !1,
            a = !0;
        for (let n = 0, l = e.length; n < l; n++) {
            let l = e[n];
            if (((a = a && !l.independent), r > -1 && i < l.start)) break;
            let o = l.loaded;
            o
                ? (r = -1)
                : (s || ((l.independent || a) && l.fragment === t)) &&
                  (l.fragment !== t && this.warn(`Need buffer at ${i} but next unloaded part starts at ${l.start}`),
                  (r = n)),
                (s = o);
        }
        return r;
    }
    loadedEndOfParts(e, t) {
        let i;
        for (let r = e.length; r-- && (i = e[r]).loaded; ) if (t > i.start) return !0;
        return !1;
    }
    getInitialLiveFragment(e) {
        let t = e.fragments,
            i = this.fragPrevious,
            r = null;
        if (i) {
            if (
                (e.hasProgramDateTime &&
                    (this.log(`Live playlist, switching playlist, load frag with same PDT: ${i.programDateTime}`),
                    (r = (function (e, t, i) {
                        if (
                            null === t ||
                            !Array.isArray(e) ||
                            !e.length ||
                            !s(t) ||
                            t < (e[0].programDateTime || 0) ||
                            t >= (e[e.length - 1].endProgramDateTime || 0)
                        )
                            return null;
                        for (let r = 0; r < e.length; ++r) {
                            let s = e[r];
                            if (
                                (function (e, t, i) {
                                    let r = 1e3 * Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                                    return (i.endProgramDateTime || 0) - r > e;
                                })(t, i, s)
                            )
                                return s;
                        }
                        return null;
                    })(t, i.endProgramDateTime, this.config.maxFragLookUpTolerance))),
                !r)
            ) {
                let s = i.sn + 1;
                if (s >= e.startSN && s <= e.endSN) {
                    let a = t[s - e.startSN];
                    i.cc === a.cc &&
                        ((r = a), this.log(`Live playlist, switching playlist, load frag with next SN: ${r.sn}`));
                }
                !r &&
                    (r = e5(e, i.cc, i.end)) &&
                    this.log(`Live playlist, switching playlist, load frag with same CC: ${r.sn}`);
            }
        } else {
            let t = this.hls.liveSyncPosition;
            null !== t && (r = this.getFragmentAtPosition(t, this.bitrateTest ? e.fragmentEnd : e.edge, e));
        }
        return r;
    }
    getFragmentAtPosition(e, t, i) {
        let r,
            { config: s } = this,
            { fragPrevious: a } = this,
            { fragments: n, endSN: l } = i,
            { fragmentHint: o } = i,
            { maxFragLookUpTolerance: h } = s,
            d = i.partList,
            u = !!(this.loadingParts && null != d && d.length && o);
        if (
            (u && !this.bitrateTest && d[d.length - 1].fragment.sn === o.sn && ((n = n.concat(o)), (l = o.sn)), e < t)
        ) {
            var f;
            let i =
                e < this.lastCurrentTime ||
                e > t - h ||
                (null != (f = this.media) && f.paused) ||
                !this.startFragRequested
                    ? 0
                    : h;
            r = e3(a, n, e, i);
        } else r = n[n.length - 1];
        if (r) {
            let e = r.sn - i.startSN,
                t = this.fragmentTracker.getState(r);
            if (
                (("OK" === t || (t === tl && r.gap)) && (a = r),
                a && r.sn === a.sn && (!u || d[0].fragment.sn > r.sn || !i.live) && r.level === a.level)
            ) {
                let t = n[e + 1];
                r = r.sn < l && "OK" !== this.fragmentTracker.getState(t) ? t : null;
            }
        }
        return r;
    }
    alignPlaylists(e, t, i) {
        let r = e.fragments.length;
        if (!r) return this.warn("No fragments in live playlist"), 0;
        let a = e.fragmentStart,
            n = !t,
            l = e.alignedSliding && s(a);
        if (n || (!l && !a)) {
            i && (iL(e, i), e.alignedSliding || iR(e, i), e.alignedSliding || e.skippedSegments || iu(i, e, !1));
            let s = e.fragmentStart;
            return (
                this.log(
                    `Live playlist sliding: ${s.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${r}`,
                ),
                s
            );
        }
        return a;
    }
    waitForCdnTuneIn(e) {
        return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget);
    }
    setStartPosition(e, t) {
        let i = this.startPosition;
        i < t && (i = -1);
        let r = this.timelineOffset;
        if (-1 === i) {
            let a = null !== this.startTimeOffset,
                n = a ? this.startTimeOffset : e.startTimeOffset;
            null !== n && s(n)
                ? ((i = t + n),
                  n < 0 && (i += e.edge),
                  (i = Math.min(Math.max(t, i), t + e.totalduration)),
                  this.log(
                      `Setting startPosition to ${i} for start time offset ${n} found in ${a ? "multivariant" : "media"} playlist`,
                  ),
                  (this.startPosition = i))
                : e.live
                  ? ((i = this.hls.liveSyncPosition || t),
                    this.log(`Setting startPosition to -1 to start at live edge ${i}`),
                    (this.startPosition = -1))
                  : (this.log("setting startPosition to 0 by default"), (this.startPosition = i = 0)),
                (this.lastCurrentTime = i + r);
        }
        this.nextLoadPosition = i + r;
    }
    getLoadPosition() {
        var e;
        let { media: t } = this,
            i = 0;
        return (
            null != (e = this.hls) && e.hasEnoughToStart && t
                ? (i = t.currentTime)
                : this.nextLoadPosition >= 0 && (i = this.nextLoadPosition),
            i
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
        (this.fragCurrent && (this.fragContextChanged(e) || this.state === iw)) || (this.state = i_);
    }
    onFragmentOrKeyLoadError(e, t) {
        var i, r, s;
        if (t.chunkMeta && !t.frag) {
            let e = this.getCurrentContext(t.chunkMeta);
            e && (t.frag = e.frag);
        }
        let a = t.frag;
        if (!a || a.type !== e || !this.levels) return;
        if (this.fragContextChanged(a))
            return void this.warn(
                `Frag load error must match current frag to retry ${a.url} > ${null == ((r = this.fragCurrent)) ? void 0 : r.url}`,
            );
        let n = t.details === o.FRAG_GAP;
        n && this.fragmentTracker.fragBuffered(a, !0);
        let l = t.errorAction;
        if (!l) {
            this.state = i$;
            return;
        }
        let { action: h, flags: d, retryCount: u = 0, retryConfig: f } = l,
            c = !!f,
            g = c && 5 === h,
            m = c && !l.resolved && 1 === d,
            p = null == (i = this.hls.latestLevelDetails) ? void 0 : i.live;
        if (!g && m && ee(a) && !a.endList && p && !e9(t))
            this.resetFragmentErrors(e), this.treatAsGap(a), (l.resolved = !0);
        else if ((g || m) && u < f.maxNumRetry) {
            let i = tr(null == (s = t.response) ? void 0 : s.code),
                r = te(f, u);
            if (
                (this.resetStartWhenNotLoaded(),
                (this.retryDate = self.performance.now() + r),
                (this.state = iw),
                (l.resolved = !0),
                i)
            ) {
                this.log("Waiting for connection (offline)"), (this.retryDate = 1 / 0), (t.reason = "offline");
                return;
            }
            this.warn(
                `Fragment ${a.sn} of ${e} ${a.level} errored with ${t.details}, retrying loading ${u + 1}/${f.maxNumRetry} in ${r}ms`,
            );
        } else if (f) {
            if ((this.resetFragmentErrors(e), !(u < f.maxNumRetry)))
                return void this.warn(`${t.details} reached or exceeded max retry (${u})`);
            n || 3 === h || (l.resolved = !0);
        } else 2 === h ? (this.state = iB) : (this.state = i$);
        this.tickImmediate();
    }
    checkRetryDate() {
        let e = self.performance.now(),
            t = this.retryDate,
            i = t === 1 / 0;
        (!t || e >= t || (i && !tr(0))) &&
            (i && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), (this.state = i_));
    }
    reduceLengthAndFlushBuffer(e) {
        if (this.state === iM || this.state === iO) {
            let t = e.frag,
                i = e.parent,
                r = this.getFwdBufferInfo(this.mediaBuffer, i),
                s = r && r.len > 0.5;
            s && this.reduceMaxBufferLength(r.len, (null == t ? void 0 : t.duration) || 10);
            let a = !s;
            return (
                a &&
                    this.warn(
                        `Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${i} buffer`,
                    ),
                t && (this.fragmentTracker.removeFragment(t), (this.nextLoadPosition = t.start)),
                this.resetLoadingState(),
                a
            );
        }
        return !1;
    }
    resetFragmentErrors(e) {
        e === _ && (this.fragCurrent = null),
            this.hls.hasEnoughToStart || (this.startFragRequested = !1),
            this.state !== iD && (this.state = i_);
    }
    afterBufferFlushed(e, t, i) {
        if (!e) return;
        let r = tR.getBuffered(e);
        this.fragmentTracker.detectEvictedFragments(t, r, i), this.state === iF && this.resetLoadingState();
    }
    resetLoadingState() {
        this.log("Reset loading state"),
            (this.fragCurrent = null),
            (this.fragPrevious = null),
            this.state !== iD && (this.state = i_);
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
    updateLevelTiming(e, t, i, r) {
        let s = i.details;
        if (!s) return void this.warn("level.details undefined");
        if (
            !Object.keys(e.elementaryStreams).reduce((t, a) => {
                let n = e.elementaryStreams[a];
                if (n) {
                    let l = n.endPTS - n.startPTS;
                    if (l <= 0)
                        return this.warn(`Could not parse fragment ${e.sn} ${a} duration reliably (${l})`), t || !1;
                    let o = r ? 0 : ih(s, e, n.startPTS, n.endPTS, n.startDTS, n.endDTS, this);
                    return (
                        this.hls.trigger(h.LEVEL_PTS_UPDATED, {
                            details: s,
                            level: i,
                            drift: o,
                            type: a,
                            frag: e,
                            start: n.startPTS,
                            end: n.endPTS,
                        }),
                        !0
                    );
                }
                return t;
            }, !1)
        ) {
            var a;
            if (
                (0 === i.fragmentError && this.treatAsGap(e, i),
                (null == (a = this.transmuxer) ? void 0 : a.error) === null)
            ) {
                let t = Error(
                    `Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`,
                );
                if (
                    (this.warn(t.message),
                    this.hls.trigger(h.ERROR, {
                        type: l.MEDIA_ERROR,
                        details: o.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: t,
                        frag: e,
                        reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${i.url}"`,
                    }),
                    !this.hls)
                )
                    return;
                this.resetTransmuxer();
            }
        }
        (this.state = iO),
            this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`),
            this.hls.trigger(h.FRAG_PARSED, { frag: e, part: t });
    }
    playlistLabel() {
        return this.playlistType === D ? "level" : "track";
    }
    fragInfo(e, t = !0, i) {
        var r, s;
        return `${this.playlistLabel()} ${e.level} (${i ? "part" : "frag"}:[${(null != (r = t && !i ? e.startPTS : (i || e).start) ? r : NaN).toFixed(3)}-${(null != (s = t && !i ? e.endPTS : (i || e).end) ? s : NaN).toFixed(3)}]${i && "main" === e.type ? "INDEPENDENT=" + (i.independent ? "YES" : "NO") : ""}`;
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
function iG(e) {
    return !!e.interstitialsController && !1 !== e.enableInterstitialPlayback;
}
class iK {
    constructor() {
        (this.chunks = []), (this.dataLength = 0);
    }
    push(e) {
        this.chunks.push(e), (this.dataLength += e.length);
    }
    flush() {
        let e,
            { chunks: t, dataLength: i } = this;
        return t.length
            ? ((e =
                  1 === t.length
                      ? t[0]
                      : (function (e, t) {
                            let i = new Uint8Array(t),
                                r = 0;
                            for (let t = 0; t < e.length; t++) {
                                let s = e[t];
                                i.set(s, r), (r += s.length);
                            }
                            return i;
                        })(t, i)),
              this.reset(),
              e)
            : new Uint8Array(0);
    }
    reset() {
        (this.chunks.length = 0), (this.dataLength = 0);
    }
}
var iH = { exports: {} },
    iV = (L ||
        ((L = 1),
        !(function (e) {
            var t = Object.prototype.hasOwnProperty,
                i = "~";
            function r() {}
            function s(e, t, i) {
                (this.fn = e), (this.context = t), (this.once = i || !1);
            }
            function a(e, t, r, a, n) {
                if ("function" != typeof r) throw TypeError("The listener must be a function");
                var l = new s(r, a || e, n),
                    o = i ? i + t : t;
                return (
                    e._events[o]
                        ? e._events[o].fn
                            ? (e._events[o] = [e._events[o], l])
                            : e._events[o].push(l)
                        : ((e._events[o] = l), e._eventsCount++),
                    e
                );
            }
            function n(e, t) {
                0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
            }
            function l() {
                (this._events = new r()), (this._eventsCount = 0);
            }
            Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (i = !1)),
                (l.prototype.eventNames = function () {
                    var e,
                        r,
                        s = [];
                    if (0 === this._eventsCount) return s;
                    for (r in (e = this._events)) t.call(e, r) && s.push(i ? r.slice(1) : r);
                    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s;
                }),
                (l.prototype.listeners = function (e) {
                    var t = i ? i + e : e,
                        r = this._events[t];
                    if (!r) return [];
                    if (r.fn) return [r.fn];
                    for (var s = 0, a = r.length, n = Array(a); s < a; s++) n[s] = r[s].fn;
                    return n;
                }),
                (l.prototype.listenerCount = function (e) {
                    var t = i ? i + e : e,
                        r = this._events[t];
                    return r ? (r.fn ? 1 : r.length) : 0;
                }),
                (l.prototype.emit = function (e, t, r, s, a, n) {
                    var l = i ? i + e : e;
                    if (!this._events[l]) return !1;
                    var o,
                        h,
                        d = this._events[l],
                        u = arguments.length;
                    if (d.fn) {
                        switch ((d.once && this.removeListener(e, d.fn, void 0, !0), u)) {
                            case 1:
                                return d.fn.call(d.context), !0;
                            case 2:
                                return d.fn.call(d.context, t), !0;
                            case 3:
                                return d.fn.call(d.context, t, r), !0;
                            case 4:
                                return d.fn.call(d.context, t, r, s), !0;
                            case 5:
                                return d.fn.call(d.context, t, r, s, a), !0;
                            case 6:
                                return d.fn.call(d.context, t, r, s, a, n), !0;
                        }
                        for (h = 1, o = Array(u - 1); h < u; h++) o[h - 1] = arguments[h];
                        d.fn.apply(d.context, o);
                    } else {
                        var f,
                            c = d.length;
                        for (h = 0; h < c; h++)
                            switch ((d[h].once && this.removeListener(e, d[h].fn, void 0, !0), u)) {
                                case 1:
                                    d[h].fn.call(d[h].context);
                                    break;
                                case 2:
                                    d[h].fn.call(d[h].context, t);
                                    break;
                                case 3:
                                    d[h].fn.call(d[h].context, t, r);
                                    break;
                                case 4:
                                    d[h].fn.call(d[h].context, t, r, s);
                                    break;
                                default:
                                    if (!o) for (f = 1, o = Array(u - 1); f < u; f++) o[f - 1] = arguments[f];
                                    d[h].fn.apply(d[h].context, o);
                            }
                    }
                    return !0;
                }),
                (l.prototype.on = function (e, t, i) {
                    return a(this, e, t, i, !1);
                }),
                (l.prototype.once = function (e, t, i) {
                    return a(this, e, t, i, !0);
                }),
                (l.prototype.removeListener = function (e, t, r, s) {
                    var a = i ? i + e : e;
                    if (!this._events[a]) return this;
                    if (!t) return n(this, a), this;
                    var l = this._events[a];
                    if (l.fn) l.fn !== t || (s && !l.once) || (r && l.context !== r) || n(this, a);
                    else {
                        for (var o = 0, h = [], d = l.length; o < d; o++)
                            (l[o].fn !== t || (s && !l[o].once) || (r && l[o].context !== r)) && h.push(l[o]);
                        h.length ? (this._events[a] = 1 === h.length ? h[0] : h) : n(this, a);
                    }
                    return this;
                }),
                (l.prototype.removeAllListeners = function (e) {
                    var t;
                    return (
                        e
                            ? ((t = i ? i + e : e), this._events[t] && n(this, t))
                            : ((this._events = new r()), (this._eventsCount = 0)),
                        this
                    );
                }),
                (l.prototype.off = l.prototype.removeListener),
                (l.prototype.addListener = l.prototype.on),
                (l.prefixed = i),
                (l.EventEmitter = l),
                (e.exports = l);
        })(iH)),
    (p = iH.exports) && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default"))
        ? p.default
        : p;
let iY = "1.6.12",
    iW = {};
function ij(e, t) {
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
function iq(e, t) {
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
function iX(e, t) {
    return ((127 & e[t]) << 21) | ((127 & e[t + 1]) << 14) | ((127 & e[t + 2]) << 7) | (127 & e[t + 3]);
}
function iQ(e, t) {
    let i = t,
        r = 0;
    for (; iq(e, t); ) (r += 10), (r += iX(e, t + 6)), ij(e, t + 10) && (r += 10), (t += r);
    if (r > 0) return e.subarray(i, i + r);
}
function iz(e, t) {
    return 255 === e[t] && (246 & e[t + 1]) == 240;
}
function iZ(e, t) {
    return 1 & e[t + 1] ? 7 : 9;
}
function iJ(e, t) {
    return ((3 & e[t + 3]) << 11) | (e[t + 4] << 3) | ((224 & e[t + 5]) >>> 5);
}
function i0(e, t) {
    return t + 1 < e.length && iz(e, t);
}
function i1(e, t, i, r, s) {
    if (!e.samplerate) {
        let a = (function (e, t, i, r) {
            let s = t[i + 2],
                a = (s >> 2) & 15;
            if (a > 12) {
                let t = Error(`invalid ADTS sampling index:${a}`);
                e.emit(h.ERROR, h.ERROR, {
                    type: l.MEDIA_ERROR,
                    details: o.FRAG_PARSING_ERROR,
                    fatal: !0,
                    error: t,
                    reason: t.message,
                });
                return;
            }
            let n = ((s >> 6) & 3) + 1,
                d = ((t[i + 3] >> 6) & 3) | ((1 & s) << 2),
                u = "mp4a.40." + n,
                f = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][a],
                c = a;
            (5 === n || 29 === n) && (c -= 3);
            let g = [(n << 3) | ((14 & c) >> 1), ((1 & c) << 7) | (d << 3)];
            return (
                G.log(
                    `manifest codec:${r}, parsed codec:${u}, channels:${d}, rate:${f} (ADTS object type:${n} sampling index:${a})`,
                ),
                { config: g, samplerate: f, channelCount: d, codec: u, parsedCodec: u, manifestCodec: r }
            );
        })(t, i, r, s);
        a && x(e, a);
    }
}
function i2(e, t, i, r, s) {
    let a,
        n = r + s * (9216e4 / e.samplerate),
        l = (function (e, t) {
            let i = iZ(e, t);
            if (t + i <= e.length) {
                let r = iJ(e, t) - i;
                if (r > 0) return { headerLength: i, frameLength: r };
            }
        })(t, i);
    if (l) {
        let { frameLength: r, headerLength: s } = l,
            o = s + r,
            h = Math.max(0, i + o - t.length);
        h ? (a = new Uint8Array(o - s)).set(t.subarray(i + s, t.length), 0) : (a = t.subarray(i + s, i + o));
        let d = { unit: a, pts: n };
        return h || e.samples.push(d), { sample: d, length: o, missing: h };
    }
    let o = t.length - i;
    return (
        (a = new Uint8Array(o)).set(t.subarray(i, t.length), 0), { sample: { unit: a, pts: n }, length: o, missing: -1 }
    );
}
function i3(e, t = 0, i = 1 / 0) {
    var r, s, a, n, l, o;
    let h, d, u, f, c, g;
    return (
        (r = e),
        (s = t),
        (a = i),
        (n = Uint8Array),
        (h = (l = r) instanceof ArrayBuffer ? l : l.buffer),
        (d = 1),
        "BYTES_PER_ELEMENT" in n && (d = n.BYTES_PER_ELEMENT),
        (f =
            ((u =
                (o = r) && o.buffer instanceof ArrayBuffer && void 0 !== o.byteLength && void 0 !== o.byteOffset
                    ? r.byteOffset
                    : 0) +
                r.byteLength) /
            d),
        (g = Math.floor(Math.min((c = Math.floor(Math.max(0, Math.min((u + s) / d, f)))) + Math.max(a, 0), f))),
        new n(h, c, g - c)
    );
}
function i4(e) {
    let t = 0,
        i = [];
    for (; iq(e, t); ) {
        let r = iX(e, t + 6);
        (e[t + 5] >> 6) & 1 && (t += 10);
        let s = (t += 10) + r;
        for (; t + 10 < s; ) {
            let r = (function (e) {
                    let t = String.fromCharCode(e[0], e[1], e[2], e[3]),
                        i = iX(e, 4);
                    return { type: t, size: i, data: e.subarray(10, 10 + i) };
                })(e.subarray(t)),
                s = (function (e) {
                    if ("PRIV" === e.type) {
                        if (e.size < 2) return;
                        let t = V(e.data, !0),
                            i = new Uint8Array(e.data.subarray(t.length + 1));
                        return { key: e.type, info: t, data: i.buffer };
                    }
                    if ("W" === e.type[0]) {
                        if ("WXXX" === e.type) {
                            if (e.size < 2) return;
                            let t = 1,
                                i = V(e.data.subarray(t), !0);
                            t += i.length + 1;
                            let r = V(e.data.subarray(t));
                            return { key: e.type, info: i, data: r };
                        }
                        let t = V(e.data);
                        return { key: e.type, info: "", data: t };
                    }
                    if ("APIC" === e.type)
                        return (function (e) {
                            let t,
                                i = { key: e.type, description: "", data: "", mimeType: null, pictureType: null };
                            if (e.size < 2) return;
                            if (3 !== e.data[0])
                                return void console.log("Ignore frame with unrecognized character encoding");
                            let r = e.data.subarray(1).indexOf(0);
                            if (-1 === r) return;
                            let s = V(i3(e.data, 1, r)),
                                a = e.data[2 + r],
                                n = e.data.subarray(3 + r).indexOf(0);
                            if (-1 === n) return;
                            let l = V(i3(e.data, 3 + r, n));
                            if ("--\x3e" === s) t = V(i3(e.data, 4 + r + n));
                            else {
                                var o;
                                t =
                                    (o = e.data.subarray(4 + r + n)) instanceof ArrayBuffer
                                        ? o
                                        : 0 == o.byteOffset && o.byteLength == o.buffer.byteLength
                                          ? o.buffer
                                          : new Uint8Array(o).buffer;
                            }
                            return (i.mimeType = s), (i.pictureType = a), (i.description = l), (i.data = t), i;
                        })(e);
                    if (e.size < 2) return;
                    if ("TXXX" === e.type) {
                        let t = 1,
                            i = V(e.data.subarray(t), !0);
                        t += i.length + 1;
                        let r = V(e.data.subarray(t));
                        return { key: e.type, info: i, data: r };
                    }
                    let t = V(e.data.subarray(1));
                    return { key: e.type, info: "", data: t };
                })(r);
            s && i.push(s), (t += r.size + 10);
        }
        ij(e, t) && (t += 10);
    }
    return i;
}
function i5(e) {
    return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info;
}
function i8(e) {
    let t = i4(e);
    for (let e = 0; e < t.length; e++) {
        let i = t[e];
        if (i5(i))
            return (function (e) {
                if (8 === e.data.byteLength) {
                    let t = new Uint8Array(e.data),
                        i = 1 & t[3],
                        r = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                    return (r /= 45), i && (r += 47721858.84), Math.round(r);
                }
            })(i);
    }
}
let i6 =
    (((y = {}).audioId3 = "org.id3"),
    (y.dateRange = "com.apple.quicktime.HLS"),
    (y.emsg = "https://aomedia.org/emsg/ID3"),
    (y.misbklv = "urn:misb:KLV:bin:1910.1"),
    y);
function i9(e = "", t = 9e4) {
    return { type: e, id: -1, pid: -1, inputTimeScale: t, sequenceNumber: -1, samples: [], dropped: 0 };
}
class i7 {
    constructor() {
        (this._audioTrack = void 0),
            (this._id3Track = void 0),
            (this.frameIndex = 0),
            (this.cachedData = null),
            (this.basePTS = null),
            (this.initPTS = null),
            (this.lastPTS = null);
    }
    resetInitSegment(e, t, i, r) {
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
    appendFrame(e, t, i) {}
    demux(e, t) {
        let i;
        this.cachedData && ((e = ey(this.cachedData, e)), (this.cachedData = null));
        let r = iQ(e, 0),
            a = r ? r.length : 0,
            n = this._audioTrack,
            l = this._id3Track,
            o = r ? i8(r) : void 0,
            h = e.length;
        for (
            (null === this.basePTS || (0 === this.frameIndex && s(o))) &&
                ((this.basePTS = re(o, t, this.initPTS)), (this.lastPTS = this.basePTS)),
                null === this.lastPTS && (this.lastPTS = this.basePTS),
                r &&
                    r.length > 0 &&
                    l.samples.push({
                        pts: this.lastPTS,
                        dts: this.lastPTS,
                        data: r,
                        type: i6.audioId3,
                        duration: 1 / 0,
                    });
            a < h;
        ) {
            if (this.canParse(e, a)) {
                let t = this.appendFrame(n, e, a);
                t ? (this.frameIndex++, (this.lastPTS = t.sample.pts), (a += t.length), (i = a)) : (a = h);
            } else {
                var d, u;
                iq((d = e), (u = a)) && iX(d, u + 6) + 10 <= d.length - u
                    ? ((r = iQ(e, a)),
                      l.samples.push({
                          pts: this.lastPTS,
                          dts: this.lastPTS,
                          data: r,
                          type: i6.audioId3,
                          duration: 1 / 0,
                      }),
                      (a += r.length),
                      (i = a))
                    : a++;
            }
            if (a === h && i !== h) {
                let t = e.slice(i);
                this.cachedData ? (this.cachedData = ey(this.cachedData, t)) : (this.cachedData = t);
            }
        }
        return { audioTrack: n, videoTrack: i9(), id3Track: l, textTrack: i9() };
    }
    demuxSampleAes(e, t, i) {
        return Promise.reject(Error(`[${this}] This demuxer does not support Sample-AES decryption`));
    }
    flush(e) {
        let t = this.cachedData;
        return (
            t && ((this.cachedData = null), this.demux(t, 0)),
            { audioTrack: this._audioTrack, videoTrack: i9(), id3Track: this._id3Track, textTrack: i9() }
        );
    }
    destroy() {
        (this.cachedData = null), (this._audioTrack = this._id3Track = void 0);
    }
}
let re = (e, t, i) => (s(e) ? 90 * e : 9e4 * t + (i ? (9e4 * i.baseTime) / i.timescale : 0)),
    rt = null,
    ri = [
        32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192,
        224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112,
        128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
    ],
    rr = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
    rs = [
        [0, 72, 144, 12],
        [0, 0, 0, 0],
        [0, 72, 144, 12],
        [0, 144, 144, 12],
    ],
    ra = [0, 1, 1, 4];
function rn(e, t, i, r, s) {
    if (i + 24 > t.length) return;
    let a = rl(t, i);
    if (a && i + a.frameLength <= t.length) {
        let n = r + s * ((9e4 * a.samplesPerFrame) / a.sampleRate),
            l = { unit: t.subarray(i, i + a.frameLength), pts: n, dts: n };
        return (
            (e.config = []),
            (e.channelCount = a.channelCount),
            (e.samplerate = a.sampleRate),
            e.samples.push(l),
            { sample: l, length: a.frameLength, missing: 0 }
        );
    }
}
function rl(e, t) {
    let i = (e[t + 1] >> 3) & 3,
        r = (e[t + 1] >> 1) & 3,
        s = (e[t + 2] >> 4) & 15,
        a = (e[t + 2] >> 2) & 3;
    if (1 !== i && 0 !== s && 15 !== s && 3 !== a) {
        let n = (e[t + 2] >> 1) & 1,
            l = e[t + 3] >> 6,
            o = 1e3 * ri[14 * (3 === i ? 3 - r : 3 === r ? 3 : 4) + s - 1],
            h = rr[3 * (3 === i ? 0 : 2 === i ? 1 : 2) + a],
            d = rs[i][r],
            u = ra[r],
            f = Math.floor((d * o) / h + n) * u;
        if (null === rt) {
            let e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            rt = e ? parseInt(e[1]) : 0;
        }
        return (
            rt && rt <= 87 && 2 === r && o >= 224e3 && 0 === l && (e[t + 3] = 128 | e[t + 3]),
            { sampleRate: h, channelCount: 3 === l ? 1 : 2, frameLength: f, samplesPerFrame: 8 * d * u }
        );
    }
}
function ro(e, t) {
    return 255 === e[t] && (224 & e[t + 1]) == 224 && (6 & e[t + 1]) != 0;
}
function rh(e, t) {
    return t + 1 < e.length && ro(e, t);
}
function rd(e, t) {
    if (t + 1 < e.length && ro(e, t)) {
        let i = rl(e, t),
            r = 4;
        null != i && i.frameLength && (r = i.frameLength);
        let s = t + r;
        return s === e.length || rh(e, s);
    }
    return !1;
}
let ru = (e, t) => {
    let i = 0,
        r = 5;
    t += 5;
    let s = new Uint32Array(1),
        a = new Uint32Array(1),
        n = new Uint8Array(1);
    for (; r > 0; ) {
        n[0] = e[t];
        let l = Math.min(r, 8),
            o = 8 - l;
        (a[0] = (0xff000000 >>> (24 + o)) << o),
            (s[0] = (n[0] & a[0]) >> o),
            (i = i ? (i << l) | s[0] : s[0]),
            (t += 1),
            (r -= l);
    }
    return i;
};
function rf(e, t, i, r, s) {
    if (i + 8 > t.length || 11 !== t[i] || 119 !== t[i + 1]) return -1;
    let a = t[i + 4] >> 6;
    if (a >= 3) return -1;
    let n = [48e3, 44100, 32e3][a],
        l = 63 & t[i + 4],
        o =
            2 *
            [
                64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122,
                168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243,
                336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418,
                576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835,
                1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253,
                1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920,
            ][3 * l + a];
    if (i + o > t.length) return -1;
    let h = t[i + 6] >> 5,
        d = 0;
    2 === h ? (d += 2) : (1 & h && 1 !== h && (d += 2), 4 & h && (d += 2));
    let u = (((t[i + 6] << 8) | t[i + 7]) >> (12 - d)) & 1,
        f = [2, 1, 2, 3, 3, 4, 4, 5][h] + u,
        c = t[i + 5] >> 3,
        g = 7 & t[i + 5],
        m = new Uint8Array([
            (a << 6) | (c << 1) | (g >> 2),
            ((3 & g) << 6) | (h << 3) | (u << 2) | (l >> 4),
            (l << 4) & 224,
        ]),
        p = t.subarray(i, i + o);
    return (
        (e.config = m),
        (e.channelCount = f),
        (e.samplerate = n),
        e.samples.push({ unit: p, pts: r + (1536 / n) * 9e4 * s }),
        o
    );
}
let rc = /\/emsg[-/]ID3/i;
function rg(e, t) {
    return s(e.presentationTime) ? e.presentationTime / e.timeScale : t + e.presentationTimeDelta / e.timeScale;
}
class rm {
    constructor(e, t, i) {
        (this.keyData = void 0),
            (this.decrypter = void 0),
            (this.keyData = i),
            (this.decrypter = new tm(t, { removePKCS7Padding: !1 }));
    }
    decryptBuffer(e) {
        return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, 0);
    }
    decryptAacSample(e, t, i) {
        let r = e[t].unit;
        if (r.length <= 16) return;
        let s = r.subarray(16, r.length - (r.length % 16)),
            a = s.buffer.slice(s.byteOffset, s.byteOffset + s.length);
        this.decryptBuffer(a)
            .then((s) => {
                let a = new Uint8Array(s);
                r.set(a, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, i);
            })
            .catch(i);
    }
    decryptAacSamples(e, t, i) {
        for (; ; t++) {
            if (t >= e.length) return void i();
            if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, i), !this.decrypter.isSync())) return;
        }
    }
    getAvcEncryptedData(e) {
        let t = new Int8Array(16 * Math.floor((e.length - 48) / 160) + 16),
            i = 0;
        for (let r = 32; r < e.length - 16; r += 160, i += 16) t.set(e.subarray(r, r + 16), i);
        return t;
    }
    getAvcDecryptedUnit(e, t) {
        let i = new Uint8Array(t),
            r = 0;
        for (let t = 32; t < e.length - 16; t += 160, r += 16) e.set(i.subarray(r, r + 16), t);
        return e;
    }
    decryptAvcSample(e, t, i, r, s) {
        let a = eS(s.data),
            n = this.getAvcEncryptedData(a);
        this.decryptBuffer(n.buffer)
            .then((n) => {
                (s.data = this.getAvcDecryptedUnit(a, n)),
                    this.decrypter.isSync() || this.decryptAvcSamples(e, t, i + 1, r);
            })
            .catch(r);
    }
    decryptAvcSamples(e, t, i, r) {
        if (e instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
        for (; ; t++, i = 0) {
            if (t >= e.length) return void r();
            let s = e[t].units;
            for (; !(i >= s.length); i++) {
                let a = s[i];
                if (
                    !(a.data.length <= 48) &&
                    (1 === a.type || 5 === a.type) &&
                    (this.decryptAvcSample(e, t, i, r, a), !this.decrypter.isSync())
                )
                    return;
            }
        }
    }
}
class rp {
    constructor() {
        this.VideoSample = null;
    }
    createVideoSample(e, t, i) {
        return { key: e, frame: !1, pts: t, dts: i, units: [], length: 0 };
    }
    getLastNalUnit(e) {
        var t;
        let i,
            r = this.VideoSample;
        if (((r && 0 !== r.units.length) || (r = e[e.length - 1]), null != (t = r) && t.units)) {
            let e = r.units;
            i = e[e.length - 1];
        }
        return i;
    }
    pushAccessUnit(e, t) {
        if (e.units.length && e.frame) {
            if (void 0 === e.pts) {
                let i = t.samples,
                    r = i.length;
                if (!r) return void t.dropped++;
                {
                    let t = i[r - 1];
                    (e.pts = t.pts), (e.dts = t.dts);
                }
            }
            t.samples.push(e);
        }
    }
    parseNALu(e, t, i) {
        let r,
            s,
            a,
            n = t.byteLength,
            l = e.naluState || 0,
            o = l,
            h = [],
            d = 0,
            u = -1,
            f = 0;
        for (-1 === l && ((u = 0), (f = this.getNALuType(t, 0)), (l = 0), (d = 1)); d < n; ) {
            if (((r = t[d++]), !l)) {
                l = +!r;
                continue;
            }
            if (1 === l) {
                l = 2 * !r;
                continue;
            }
            if (r)
                if (1 === r) {
                    if (((s = d - l - 1), u >= 0)) {
                        let e = { data: t.subarray(u, s), type: f };
                        h.push(e);
                    } else {
                        let i = this.getLastNalUnit(e.samples);
                        i &&
                            (o && d <= 4 - o && i.state && (i.data = i.data.subarray(0, i.data.byteLength - o)),
                            s > 0 && ((i.data = ey(i.data, t.subarray(0, s))), (i.state = 0)));
                    }
                    d < n ? ((a = this.getNALuType(t, d)), (u = d), (f = a), (l = 0)) : (l = -1);
                } else l = 0;
            else l = 3;
        }
        if (u >= 0 && l >= 0) {
            let e = { data: t.subarray(u, n), type: f, state: l };
            h.push(e);
        }
        if (0 === h.length) {
            let i = this.getLastNalUnit(e.samples);
            i && (i.data = ey(i.data, t));
        }
        return (e.naluState = l), h;
    }
}
class ry {
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
            i = e.byteLength - t,
            r = new Uint8Array(4),
            s = Math.min(4, t);
        if (0 === s) throw Error("no bytes available");
        r.set(e.subarray(i, i + s)),
            (this.word = new DataView(r.buffer).getUint32(0)),
            (this.bitsAvailable = 8 * s),
            (this.bytesAvailable -= s);
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
            i = this.word >>> (32 - t);
        if (
            (e > 32 && G.error("Cannot read more than 32 bits at a time"),
            (this.bitsAvailable -= t),
            this.bitsAvailable > 0)
        )
            this.word <<= t;
        else if (this.bytesAvailable > 0) this.loadWord();
        else throw Error("no bits available");
        return (t = e - t) > 0 && this.bitsAvailable ? (i << t) | this.readBits(t) : i;
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
class rv extends rp {
    parsePES(e, t, i, r) {
        let s,
            a = this.parseNALu(e, i.data, r),
            n = this.VideoSample,
            l = !1;
        (i.data = null),
            n &&
                a.length &&
                !e.audFound &&
                (this.pushAccessUnit(n, e), (n = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts))),
            a.forEach((r) => {
                var a, o, h, d, u;
                switch (r.type) {
                    case 1: {
                        let t = !1;
                        s = !0;
                        let a = r.data;
                        if (l && a.length > 4) {
                            let e = this.readSliceType(a);
                            (2 === e || 4 === e || 7 === e || 9 === e) && (t = !0);
                        }
                        t &&
                            null != (h = n) &&
                            h.frame &&
                            !n.key &&
                            (this.pushAccessUnit(n, e), (n = this.VideoSample = null)),
                            n || (n = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts)),
                            (n.frame = !0),
                            (n.key = t);
                        break;
                    }
                    case 5:
                        (s = !0),
                            null != (a = n) &&
                                a.frame &&
                                !n.key &&
                                (this.pushAccessUnit(n, e), (n = this.VideoSample = null)),
                            n || (n = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts)),
                            (n.key = !0),
                            (n.frame = !0);
                        break;
                    case 6:
                        (s = !0), eT(r.data, 1, i.pts, t.samples);
                        break;
                    case 7: {
                        (s = !0), (l = !0);
                        let t = r.data,
                            i = this.readSPS(t);
                        if (
                            !e.sps ||
                            e.width !== i.width ||
                            e.height !== i.height ||
                            (null == (d = e.pixelRatio) ? void 0 : d[0]) !== i.pixelRatio[0] ||
                            (null == (u = e.pixelRatio) ? void 0 : u[1]) !== i.pixelRatio[1]
                        ) {
                            (e.width = i.width), (e.height = i.height), (e.pixelRatio = i.pixelRatio), (e.sps = [t]);
                            let r = t.subarray(1, 4),
                                s = "avc1.";
                            for (let e = 0; e < 3; e++) {
                                let t = r[e].toString(16);
                                t.length < 2 && (t = "0" + t), (s += t);
                            }
                            e.codec = s;
                        }
                        break;
                    }
                    case 8:
                        (s = !0), (e.pps = [r.data]);
                        break;
                    case 9:
                        (s = !0),
                            (e.audFound = !0),
                            null != (o = n) && o.frame && (this.pushAccessUnit(n, e), (n = null)),
                            n || (n = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts));
                        break;
                    case 12:
                        s = !0;
                        break;
                    default:
                        s = !1;
                }
                n && s && n.units.push(r);
            }),
            r && n && (this.pushAccessUnit(n, e), (this.VideoSample = null));
    }
    getNALuType(e, t) {
        return 31 & e[t];
    }
    readSliceType(e) {
        let t = new ry(e);
        return t.readUByte(), t.readUEG(), t.readUEG();
    }
    skipScalingList(e, t) {
        let i = 8,
            r = 8;
        for (let s = 0; s < e; s++) 0 !== r && (r = (i + t.readEG() + 256) % 256), (i = 0 === r ? i : r);
    }
    readSPS(e) {
        let t,
            i,
            r,
            s = new ry(e),
            a = 0,
            n = 0,
            l = 0,
            o = 0,
            h = s.readUByte.bind(s),
            d = s.readBits.bind(s),
            u = s.readUEG.bind(s),
            f = s.readBoolean.bind(s),
            c = s.skipBits.bind(s),
            g = s.skipEG.bind(s),
            m = s.skipUEG.bind(s),
            p = this.skipScalingList.bind(this);
        h();
        let y = h();
        if (
            (d(5),
            c(3),
            h(),
            m(),
            100 === y ||
                110 === y ||
                122 === y ||
                244 === y ||
                44 === y ||
                83 === y ||
                86 === y ||
                118 === y ||
                128 === y)
        ) {
            let e = u();
            if ((3 === e && c(1), m(), m(), c(1), f()))
                for (r = 0, i = 3 !== e ? 8 : 12; r < i; r++) f() && p(r < 6 ? 16 : 64, s);
        }
        m();
        let v = u();
        if (0 === v) u();
        else if (1 === v) for (c(1), g(), g(), t = u(), r = 0; r < t; r++) g();
        m(), c(1);
        let E = u(),
            T = u(),
            S = d(1);
        0 === S && c(1), c(1), f() && ((a = u()), (n = u()), (l = u()), (o = u()));
        let A = [1, 1];
        if (f() && f())
            switch (h()) {
                case 1:
                    A = [1, 1];
                    break;
                case 2:
                    A = [12, 11];
                    break;
                case 3:
                    A = [10, 11];
                    break;
                case 4:
                    A = [16, 11];
                    break;
                case 5:
                    A = [40, 33];
                    break;
                case 6:
                    A = [24, 11];
                    break;
                case 7:
                    A = [20, 11];
                    break;
                case 8:
                    A = [32, 11];
                    break;
                case 9:
                    A = [80, 33];
                    break;
                case 10:
                    A = [18, 11];
                    break;
                case 11:
                    A = [15, 11];
                    break;
                case 12:
                    A = [64, 33];
                    break;
                case 13:
                    A = [160, 99];
                    break;
                case 14:
                    A = [4, 3];
                    break;
                case 15:
                    A = [3, 2];
                    break;
                case 16:
                    A = [2, 1];
                    break;
                case 255:
                    A = [(h() << 8) | h(), (h() << 8) | h()];
            }
        return {
            width: Math.ceil((E + 1) * 16 - 2 * a - 2 * n),
            height: (2 - S) * (T + 1) * 16 - (S ? 2 : 4) * (l + o),
            pixelRatio: A,
        };
    }
}
class rE extends rp {
    constructor(...e) {
        super(...e), (this.initVPS = null);
    }
    parsePES(e, t, i, r) {
        let s,
            a = this.parseNALu(e, i.data, r),
            n = this.VideoSample,
            l = !1;
        (i.data = null),
            n &&
                a.length &&
                !e.audFound &&
                (this.pushAccessUnit(n, e), (n = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts))),
            a.forEach((r) => {
                var a, o, h;
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
                        n || (n = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts)),
                            (n.frame = !0),
                            (s = !0);
                        break;
                    case 16:
                    case 17:
                    case 18:
                    case 21:
                        (s = !0),
                            l &&
                                null != (h = n) &&
                                h.frame &&
                                !n.key &&
                                (this.pushAccessUnit(n, e), (n = this.VideoSample = null)),
                            n || (n = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts)),
                            (n.key = !0),
                            (n.frame = !0);
                        break;
                    case 19:
                    case 20:
                        (s = !0),
                            null != (a = n) &&
                                a.frame &&
                                !n.key &&
                                (this.pushAccessUnit(n, e), (n = this.VideoSample = null)),
                            n || (n = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts)),
                            (n.key = !0),
                            (n.frame = !0);
                        break;
                    case 39:
                        (s = !0), eT(r.data, 2, i.pts, t.samples);
                        break;
                    case 32:
                        (s = !0),
                            e.vps ||
                                ("object" != typeof e.params && (e.params = {}),
                                (e.params = x(e.params, this.readVPS(r.data))),
                                (this.initVPS = r.data)),
                            (e.vps = [r.data]);
                        break;
                    case 33:
                        if (
                            ((s = !0),
                            (l = !0),
                            void 0 === e.vps ||
                                e.vps[0] === this.initVPS ||
                                void 0 === e.sps ||
                                this.matchSPS(e.sps[0], r.data) ||
                                ((this.initVPS = e.vps[0]), (e.sps = e.pps = void 0)),
                            !e.sps)
                        ) {
                            let t = this.readSPS(r.data);
                            for (let i in ((e.width = t.width),
                            (e.height = t.height),
                            (e.pixelRatio = t.pixelRatio),
                            (e.codec = t.codecString),
                            (e.sps = []),
                            "object" != typeof e.params && (e.params = {}),
                            t.params))
                                e.params[i] = t.params[i];
                        }
                        this.pushParameterSet(e.sps, r.data, e.vps),
                            n || (n = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts)),
                            (n.key = !0);
                        break;
                    case 34:
                        if (((s = !0), "object" == typeof e.params)) {
                            if (!e.pps) {
                                e.pps = [];
                                let t = this.readPPS(r.data);
                                for (let i in t) e.params[i] = t[i];
                            }
                            this.pushParameterSet(e.pps, r.data, e.vps);
                        }
                        break;
                    case 35:
                        (s = !0),
                            (e.audFound = !0),
                            null != (o = n) && o.frame && (this.pushAccessUnit(n, e), (n = null)),
                            n || (n = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts));
                        break;
                    default:
                        s = !1;
                }
                n && s && n.units.push(r);
            }),
            r && n && (this.pushAccessUnit(n, e), (this.VideoSample = null));
    }
    pushParameterSet(e, t, i) {
        ((!i || i[0] !== this.initVPS) && (i || e.length)) || e.push(t);
    }
    getNALuType(e, t) {
        return (126 & e[t]) >>> 1;
    }
    ebsp2rbsp(e) {
        let t = new Uint8Array(e.byteLength),
            i = 0;
        for (let r = 0; r < e.byteLength; r++)
            (!(r >= 2) || 3 !== e[r] || 0 !== e[r - 1] || 0 !== e[r - 2]) && ((t[i] = e[r]), i++);
        return new Uint8Array(t.buffer, 0, i);
    }
    pushAccessUnit(e, t) {
        super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
    }
    readVPS(e) {
        let t = new ry(e);
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
        let t = new ry(this.ebsp2rbsp(e));
        t.readUByte(), t.readUByte(), t.readBits(4);
        let i = t.readBits(3);
        t.readBoolean();
        let r = t.readBits(2),
            s = t.readBoolean(),
            a = t.readBits(5),
            n = t.readUByte(),
            l = t.readUByte(),
            o = t.readUByte(),
            h = t.readUByte(),
            d = t.readUByte(),
            u = t.readUByte(),
            f = t.readUByte(),
            c = t.readUByte(),
            g = t.readUByte(),
            m = t.readUByte(),
            p = t.readUByte(),
            y = [],
            v = [];
        for (let e = 0; e < i; e++) y.push(t.readBoolean()), v.push(t.readBoolean());
        if (i > 0) for (let e = i; e < 8; e++) t.readBits(2);
        for (let e = 0; e < i; e++)
            y[e] &&
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
                v[e] && t.readUByte();
        t.readUEG();
        let E = t.readUEG();
        3 == E && t.skipBits(1);
        let T = t.readUEG(),
            S = t.readUEG(),
            A = t.readBoolean(),
            L = 0,
            R = 0,
            b = 0,
            I = 0;
        A && ((L += t.readUEG()), (R += t.readUEG()), (b += t.readUEG()), (I += t.readUEG()));
        let k = t.readUEG(),
            D = t.readUEG(),
            _ = t.readUEG(),
            P = t.readBoolean();
        for (let e = P ? 0 : i; e <= i; e++) t.skipUEG(), t.skipUEG(), t.skipUEG();
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
                for (let i = 0; i < (3 === e ? 2 : 6); i++)
                    if (t.readBoolean()) {
                        let i = Math.min(64, 1 << (4 + (e << 1)));
                        e > 1 && t.readEG();
                        for (let e = 0; e < i; e++) t.readEG();
                    } else t.readUEG();
        t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
        let C = t.readUEG(),
            w = 0;
        for (let e = 0; e < C; e++) {
            let i = !1;
            if ((0 !== e && (i = t.readBoolean()), i)) {
                e === C && t.readUEG(), t.readBoolean(), t.readUEG();
                let i = 0;
                for (let e = 0; e <= w; e++) {
                    let e = t.readBoolean(),
                        r = !1;
                    e || (r = t.readBoolean()), (e || r) && i++;
                }
                w = i;
            } else {
                let e = t.readUEG(),
                    i = t.readUEG();
                w = e + i;
                for (let i = 0; i < e; i++) t.readUEG(), t.readBoolean();
                for (let e = 0; e < i; e++) t.readUEG(), t.readBoolean();
            }
        }
        if (t.readBoolean()) {
            let e = t.readUEG();
            for (let i = 0; i < e; i++) {
                for (let e = 0; e < _ + 4; e++) t.readBits(1);
                t.readBits(1);
            }
        }
        let x = 0,
            M = 1,
            O = 1,
            F = !0,
            $ = 1,
            U = 0;
        t.readBoolean(), t.readBoolean();
        if (t.readBoolean()) {
            if (t.readBoolean()) {
                let e = t.readUByte();
                e > 0 && e < 16
                    ? ((M = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][e - 1]),
                      (O = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][e - 1]))
                    : 255 === e && ((M = t.readBits(16)), (O = t.readBits(16)));
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
                    (($ = t.readBits(32)), (U = t.readBits(32)), t.readBoolean() && t.readUEG(), t.readBoolean()))
            ) {
                let e = t.readBoolean(),
                    r = t.readBoolean(),
                    s = !1;
                (e || r) &&
                    ((s = t.readBoolean()) && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)),
                    t.readBits(4),
                    t.readBits(4),
                    s && t.readBits(4),
                    t.readBits(5),
                    t.readBits(5),
                    t.readBits(5));
                for (let a = 0; a <= i; a++) {
                    let i = (F = t.readBoolean()) || t.readBoolean(),
                        a = !1;
                    i ? t.readEG() : (a = t.readBoolean());
                    let n = a ? 1 : t.readUEG() + 1;
                    if (e)
                        for (let e = 0; e < n; e++)
                            t.readUEG(), t.readUEG(), s && (t.readUEG(), t.readUEG()), t.skipBits(1);
                    if (r)
                        for (let e = 0; e < n; e++)
                            t.readUEG(), t.readUEG(), s && (t.readUEG(), t.readUEG()), t.skipBits(1);
                }
            }
            t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), (x = t.readUEG()));
        }
        let B = T,
            N = S;
        if (A) {
            let e = 1,
                t = 1;
            1 === E ? (e = t = 2) : 2 == E && (e = 2), (B = T - e * R - e * L), (N = S - t * I - t * b);
        }
        let G = r ? ["A", "B", "C"][r] : "",
            K = (n << 24) | (l << 16) | (o << 8) | h,
            H = 0;
        for (let e = 0; e < 32; e++) H = (H | (((K >> e) & 1) << (31 - e))) >>> 0;
        let V = H.toString(16);
        return (
            1 === a && "2" === V && (V = "6"),
            {
                codecString: `hvc1.${G}${a}.${V}.${s ? "H" : "L"}${p}.B0`,
                params: {
                    general_tier_flag: s,
                    general_profile_idc: a,
                    general_profile_space: r,
                    general_profile_compatibility_flags: [n, l, o, h],
                    general_constraint_indicator_flags: [d, u, f, c, g, m],
                    general_level_idc: p,
                    bit_depth: k + 8,
                    bit_depth_luma_minus8: k,
                    bit_depth_chroma_minus8: D,
                    min_spatial_segmentation_idc: x,
                    chroma_format_idc: E,
                    frame_rate: { fixed: F, fps: U / $ },
                },
                width: B,
                height: N,
                pixelRatio: [M, O],
            }
        );
    }
    readPPS(e) {
        let t = new ry(this.ebsp2rbsp(e));
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
        let i = t.readBoolean(),
            r = t.readBoolean(),
            s = 1;
        return r && i ? (s = 0) : r ? (s = 3) : i && (s = 2), { parallelismType: s };
    }
    matchSPS(e, t) {
        return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
    }
}
class rT {
    constructor(e, t, i, r) {
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
            (this.typeSupported = i),
            (this.logger = r),
            (this.videoParser = null);
    }
    static probe(e, t) {
        let i = rT.syncOffset(e);
        return i > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${i}`), -1 !== i;
    }
    static syncOffset(e) {
        let t = e.length,
            i = Math.min(940, t - 188) + 1,
            r = 0;
        for (; r < i; ) {
            let s = !1,
                a = -1,
                n = 0;
            for (let l = r; l < t; l += 188)
                if (71 === e[l] && (t - l == 188 || 71 === e[l + 188])) {
                    if (
                        (n++,
                        -1 === a && 0 !== (a = l) && (i = Math.min(a + 18612, e.length - 188) + 1),
                        s || (s = 0 === rS(e, l)),
                        s && n > 1 && ((0 === a && n > 2) || l + 188 > i))
                    )
                        return a;
                } else if (n) return -1;
                else break;
            r++;
        }
        return -1;
    }
    static createTrack(e, t) {
        return {
            container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
            type: e,
            id: es[e],
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: 0,
            samples: [],
            dropped: 0,
            duration: "audio" === e ? t : void 0,
        };
    }
    resetInitSegment(e, t, i, r) {
        (this.pmtParsed = !1),
            (this._pmtId = -1),
            (this._videoTrack = rT.createTrack("video")),
            (this._videoTrack.duration = r),
            (this._audioTrack = rT.createTrack("audio", r)),
            (this._id3Track = rT.createTrack("id3")),
            (this._txtTrack = rT.createTrack("text")),
            (this._audioTrack.segmentCodec = "aac"),
            (this.videoParser = null),
            (this.aacOverFlow = null),
            (this.remainderData = null),
            (this.audioCodec = t),
            (this.videoCodec = i);
    }
    resetTimeStamp() {}
    resetContiguity() {
        let { _audioTrack: e, _videoTrack: t, _id3Track: i } = this;
        e && (e.pesData = null),
            t && (t.pesData = null),
            i && (i.pesData = null),
            (this.aacOverFlow = null),
            (this.remainderData = null);
    }
    demux(e, t, i = !1, r = !1) {
        let s;
        i || (this.sampleAes = null);
        let a = this._videoTrack,
            n = this._audioTrack,
            l = this._id3Track,
            o = this._txtTrack,
            h = a.pid,
            d = a.pesData,
            u = n.pid,
            f = l.pid,
            c = n.pesData,
            g = l.pesData,
            m = null,
            p = this.pmtParsed,
            y = this._pmtId,
            v = e.length;
        if (
            (this.remainderData && ((v = (e = ey(this.remainderData, e)).length), (this.remainderData = null)),
            v < 188 && !r)
        )
            return (this.remainderData = e), { audioTrack: n, videoTrack: a, id3Track: l, textTrack: o };
        let E = Math.max(0, rT.syncOffset(e));
        (v -= (v - E) % 188) < e.byteLength &&
            !r &&
            (this.remainderData = new Uint8Array(e.buffer, v, e.buffer.byteLength - v));
        let T = 0;
        for (let t = E; t < v; t += 188)
            if (71 === e[t]) {
                let r,
                    v = !!(64 & e[t + 1]),
                    T = rS(e, t);
                if ((48 & e[t + 3]) >> 4 > 1) {
                    if ((r = t + 5 + e[t + 4]) === t + 188) continue;
                } else r = t + 4;
                switch (T) {
                    case h:
                        v &&
                            (d &&
                                (s = rR(d, this.logger)) &&
                                (this.readyVideoParser(a.segmentCodec),
                                null !== this.videoParser && this.videoParser.parsePES(a, o, s, !1)),
                            (d = { data: [], size: 0 })),
                            d && (d.data.push(e.subarray(r, t + 188)), (d.size += t + 188 - r));
                        break;
                    case u:
                        if (v) {
                            if (c && (s = rR(c, this.logger)))
                                switch (n.segmentCodec) {
                                    case "aac":
                                        this.parseAACPES(n, s);
                                        break;
                                    case "mp3":
                                        this.parseMPEGPES(n, s);
                                        break;
                                    case "ac3":
                                        this.parseAC3PES(n, s);
                                }
                            c = { data: [], size: 0 };
                        }
                        c && (c.data.push(e.subarray(r, t + 188)), (c.size += t + 188 - r));
                        break;
                    case f:
                        v && (g && (s = rR(g, this.logger)) && this.parseID3PES(l, s), (g = { data: [], size: 0 })),
                            g && (g.data.push(e.subarray(r, t + 188)), (g.size += t + 188 - r));
                        break;
                    case 0:
                        var S, A;
                        v && (r += e[r] + 1), (y = this._pmtId = ((31 & (S = e)[(A = r) + 10]) << 8) | S[A + 11]);
                        break;
                    case y: {
                        v && (r += e[r] + 1);
                        let s = (function (e, t, i, r, s, a) {
                            let n = {
                                    audioPid: -1,
                                    videoPid: -1,
                                    id3Pid: -1,
                                    segmentVideoCodec: "avc",
                                    segmentAudioCodec: "aac",
                                },
                                l = ((15 & e[t + 1]) << 8) | e[t + 2],
                                o = t + 3 + l - 4,
                                h = ((15 & e[t + 10]) << 8) | e[t + 11];
                            for (t += 12 + h; t < o; ) {
                                let l = rS(e, t),
                                    o = ((15 & e[t + 3]) << 8) | e[t + 4];
                                switch (e[t]) {
                                    case 207:
                                        if (!r) {
                                            rL("ADTS AAC", a);
                                            break;
                                        }
                                    case 15:
                                        -1 === n.audioPid && (n.audioPid = l);
                                        break;
                                    case 21:
                                        -1 === n.id3Pid && (n.id3Pid = l);
                                        break;
                                    case 219:
                                        if (!r) {
                                            rL("H.264", a);
                                            break;
                                        }
                                    case 27:
                                        -1 === n.videoPid && (n.videoPid = l);
                                        break;
                                    case 3:
                                    case 4:
                                        i.mpeg || i.mp3
                                            ? -1 === n.audioPid && ((n.audioPid = l), (n.segmentAudioCodec = "mp3"))
                                            : a.log("MPEG audio found, not supported in this browser");
                                        break;
                                    case 193:
                                        if (!r) {
                                            rL("AC-3", a);
                                            break;
                                        }
                                    case 129:
                                        i.ac3
                                            ? -1 === n.audioPid && ((n.audioPid = l), (n.segmentAudioCodec = "ac3"))
                                            : a.log("AC-3 audio found, not supported in this browser");
                                        break;
                                    case 6:
                                        if (-1 === n.audioPid && o > 0) {
                                            let r = t + 5,
                                                s = o;
                                            for (; s > 2; ) {
                                                106 === e[r] &&
                                                    (!0 !== i.ac3
                                                        ? a.log(
                                                              "AC-3 audio found, not supported in this browser for now",
                                                          )
                                                        : ((n.audioPid = l), (n.segmentAudioCodec = "ac3")));
                                                let t = e[r + 1] + 2;
                                                (r += t), (s -= t);
                                            }
                                        }
                                        break;
                                    case 194:
                                    case 135:
                                        return rA(s, Error("Unsupported EC-3 in M2TS found"), void 0, a), n;
                                    case 36:
                                        -1 === n.videoPid &&
                                            ((n.videoPid = l),
                                            (n.segmentVideoCodec = "hevc"),
                                            a.log("HEVC in M2TS found"));
                                }
                                t += o + 5;
                            }
                            return n;
                        })(e, r, this.typeSupported, i, this.observer, this.logger);
                        (h = s.videoPid) > 0 && ((a.pid = h), (a.segmentCodec = s.segmentVideoCodec)),
                            (u = s.audioPid) > 0 && ((n.pid = u), (n.segmentCodec = s.segmentAudioCodec)),
                            (f = s.id3Pid) > 0 && (l.pid = f),
                            null === m ||
                                p ||
                                (this.logger.warn(
                                    `MPEG-TS PMT found at ${t} after unknown PID '${m}'. Backtracking to sync byte @${E} to parse all TS packets.`,
                                ),
                                (m = null),
                                (t = E - 188)),
                            (p = this.pmtParsed = !0);
                        break;
                    }
                    case 17:
                    case 8191:
                        break;
                    default:
                        m = T;
                }
            } else T++;
        T > 0 && rA(this.observer, Error(`Found ${T} TS packet/s that do not start with 0x47`), void 0, this.logger),
            (a.pesData = d),
            (n.pesData = c),
            (l.pesData = g);
        let L = { audioTrack: n, videoTrack: a, id3Track: l, textTrack: o };
        return r && this.extractRemainingSamples(L), L;
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
            { audioTrack: i, videoTrack: r, id3Track: s, textTrack: a } = e,
            n = r.pesData,
            l = i.pesData,
            o = s.pesData;
        if (
            (n && (t = rR(n, this.logger))
                ? (this.readyVideoParser(r.segmentCodec),
                  null !== this.videoParser && (this.videoParser.parsePES(r, a, t, !0), (r.pesData = null)))
                : (r.pesData = n),
            l && (t = rR(l, this.logger)))
        ) {
            switch (i.segmentCodec) {
                case "aac":
                    this.parseAACPES(i, t);
                    break;
                case "mp3":
                    this.parseMPEGPES(i, t);
                    break;
                case "ac3":
                    this.parseAC3PES(i, t);
            }
            i.pesData = null;
        } else
            null != l && l.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"),
                (i.pesData = l);
        o && (t = rR(o, this.logger)) ? (this.parseID3PES(s, t), (s.pesData = null)) : (s.pesData = o);
    }
    demuxSampleAes(e, t, i) {
        let r = this.demux(e, i, !0, !this.config.progressive),
            s = (this.sampleAes = new rm(this.observer, this.config, t));
        return this.decrypt(r, s);
    }
    readyVideoParser(e) {
        null === this.videoParser &&
            ("avc" === e ? (this.videoParser = new rv()) : "hevc" === e && (this.videoParser = new rE()));
    }
    decrypt(e, t) {
        return new Promise((i) => {
            let { audioTrack: r, videoTrack: s } = e;
            r.samples && "aac" === r.segmentCodec
                ? t.decryptAacSamples(r.samples, 0, () => {
                      s.samples
                          ? t.decryptAvcSamples(s.samples, 0, 0, () => {
                                i(e);
                            })
                          : i(e);
                  })
                : s.samples &&
                  t.decryptAvcSamples(s.samples, 0, 0, () => {
                      i(e);
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
        let i,
            r,
            s,
            a,
            n = 0,
            l = this.aacOverFlow,
            o = t.data;
        if (l) {
            this.aacOverFlow = null;
            let t = l.missing,
                i = l.sample.unit.byteLength;
            -1 === t
                ? (o = ey(l.sample.unit, o))
                : (l.sample.unit.set(o.subarray(0, t), i - t), e.samples.push(l.sample), (n = l.missing));
        }
        for (i = n, r = o.length; i < r - 1 && !i0(o, i); i++);
        if (i !== n) {
            let e,
                t = i < r - 1;
            if (
                ((e = t ? `AAC PES did not start with ADTS header,offset:${i}` : "No ADTS header found in AAC PES"),
                rA(this.observer, Error(e), t, this.logger),
                !t)
            )
                return;
        }
        if ((i1(e, this.observer, o, i, this.audioCodec), void 0 !== t.pts)) s = t.pts;
        else {
            if (!l) return void this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
            let t = 9216e4 / e.samplerate;
            s = l.sample.pts + t;
        }
        let h = 0;
        for (; i < r; ) {
            if (((a = i2(e, o, i, s, h)), (i += a.length), a.missing)) {
                this.aacOverFlow = a;
                break;
            }
            for (h++; i < r - 1 && !i0(o, i); i++);
        }
    }
    parseMPEGPES(e, t) {
        let i = t.data,
            r = i.length,
            s = 0,
            a = 0,
            n = t.pts;
        if (void 0 === n) return void this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
        for (; a < r; )
            if (rh(i, a)) {
                let t = rn(e, i, a, n, s);
                if (t) (a += t.length), s++;
                else break;
            } else a++;
    }
    parseAC3PES(e, t) {
        {
            let i,
                r = t.data,
                s = t.pts;
            if (void 0 === s) return void this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
            let a = r.length,
                n = 0,
                l = 0;
            for (; l < a && (i = rf(e, r, l, s, n++)) > 0; ) l += i;
        }
    }
    parseID3PES(e, t) {
        if (void 0 === t.pts) return void this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
        let i = x({}, t, { type: this._videoTrack ? i6.emsg : i6.audioId3, duration: 1 / 0 });
        e.samples.push(i);
    }
}
function rS(e, t) {
    return ((31 & e[t + 1]) << 8) + e[t + 2];
}
function rA(e, t, i, r) {
    r.warn(`parsing error: ${t.message}`),
        e.emit(h.ERROR, h.ERROR, {
            type: l.MEDIA_ERROR,
            details: o.FRAG_PARSING_ERROR,
            fatal: !1,
            levelRetry: i,
            error: t,
            reason: t.message,
        });
}
function rL(e, t) {
    t.log(`${e} with AES-128-CBC encryption found in unencrypted stream`);
}
function rR(e, t) {
    let i,
        r,
        s,
        a,
        n,
        l = 0,
        o = e.data;
    if (!e || 0 === e.size) return null;
    for (; o[0].length < 19 && o.length > 1; ) (o[0] = ey(o[0], o[1])), o.splice(1, 1);
    if (1 === ((i = o[0])[0] << 16) + (i[1] << 8) + i[2]) {
        if ((r = (i[4] << 8) + i[5]) && r > e.size - 6) return null;
        let h = i[7];
        192 & h &&
            ((a =
                (14 & i[9]) * 0x20000000 +
                (255 & i[10]) * 4194304 +
                (254 & i[11]) * 16384 +
                (255 & i[12]) * 128 +
                (254 & i[13]) / 2),
            64 & h
                ? a -
                      (n =
                          (14 & i[14]) * 0x20000000 +
                          (255 & i[15]) * 4194304 +
                          (254 & i[16]) * 16384 +
                          (255 & i[17]) * 128 +
                          (254 & i[18]) / 2) >
                      54e5 && (t.warn(`${Math.round((a - n) / 9e4)}s delta between PTS and DTS, align them`), (a = n))
                : (n = a));
        let d = (s = i[8]) + 9;
        if (e.size <= d) return null;
        e.size -= d;
        let u = new Uint8Array(e.size);
        for (let e = 0, t = o.length; e < t; e++) {
            let t = (i = o[e]).byteLength;
            if (d)
                if (d > t) {
                    d -= t;
                    continue;
                } else (i = i.subarray(d)), (t -= d), (d = 0);
            u.set(i, l), (l += t);
        }
        return r && (r -= s + 3), { data: u, pts: a, dts: n, len: r };
    }
    return null;
}
class rb {
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
class rI {
    static init() {
        let e;
        for (e in ((rI.types = {
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
        rI.types))
            rI.types.hasOwnProperty(e) &&
                (rI.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
        rI.HDLR_TYPES = {
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
        (rI.STTS = rI.STSC = rI.STCO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (rI.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (rI.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
            (rI.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (rI.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
        let i = new Uint8Array([105, 115, 111, 109]),
            r = new Uint8Array([97, 118, 99, 49]),
            s = new Uint8Array([0, 0, 0, 1]);
        (rI.FTYP = rI.box(rI.types.ftyp, i, s, i, r)), (rI.DINF = rI.box(rI.types.dinf, rI.box(rI.types.dref, t)));
    }
    static box(e, ...t) {
        let i = 8,
            r = t.length,
            s = r;
        for (; r--; ) i += t[r].byteLength;
        let a = new Uint8Array(i);
        for (
            a[0] = (i >> 24) & 255,
                a[1] = (i >> 16) & 255,
                a[2] = (i >> 8) & 255,
                a[3] = 255 & i,
                a.set(e, 4),
                r = 0,
                i = 8;
            r < s;
            r++
        )
            a.set(t[r], i), (i += t[r].byteLength);
        return a;
    }
    static hdlr(e) {
        return rI.box(rI.types.hdlr, rI.HDLR_TYPES[e]);
    }
    static mdat(e) {
        return rI.box(rI.types.mdat, e);
    }
    static mdhd(e, t) {
        let i = Math.floor((t *= e) / 0x100000000),
            r = Math.floor(t % 0x100000000);
        return rI.box(
            rI.types.mdhd,
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
                i >> 24,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
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
        return rI.box(rI.types.mdia, rI.mdhd(e.timescale || 0, e.duration || 0), rI.hdlr(e.type), rI.minf(e));
    }
    static mfhd(e) {
        return rI.box(rI.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e]));
    }
    static minf(e) {
        return "audio" === e.type
            ? rI.box(rI.types.minf, rI.box(rI.types.smhd, rI.SMHD), rI.DINF, rI.stbl(e))
            : rI.box(rI.types.minf, rI.box(rI.types.vmhd, rI.VMHD), rI.DINF, rI.stbl(e));
    }
    static moof(e, t, i) {
        return rI.box(rI.types.moof, rI.mfhd(e), rI.traf(i, t));
    }
    static moov(e) {
        let t = e.length,
            i = [];
        for (; t--; ) i[t] = rI.trak(e[t]);
        return rI.box.apply(
            null,
            [rI.types.moov, rI.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(i).concat(rI.mvex(e)),
        );
    }
    static mvex(e) {
        let t = e.length,
            i = [];
        for (; t--; ) i[t] = rI.trex(e[t]);
        return rI.box.apply(null, [rI.types.mvex, ...i]);
    }
    static mvhd(e, t) {
        let i = Math.floor((t *= e) / 0x100000000),
            r = Math.floor(t % 0x100000000),
            s = new Uint8Array([
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
                i >> 24,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
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
        return rI.box(rI.types.mvhd, s);
    }
    static sdtp(e) {
        let t,
            i,
            r = e.samples || [],
            s = new Uint8Array(4 + r.length);
        for (t = 0; t < r.length; t++)
            (i = r[t].flags), (s[t + 4] = (i.dependsOn << 4) | (i.isDependedOn << 2) | i.hasRedundancy);
        return rI.box(rI.types.sdtp, s);
    }
    static stbl(e) {
        return rI.box(
            rI.types.stbl,
            rI.stsd(e),
            rI.box(rI.types.stts, rI.STTS),
            rI.box(rI.types.stsc, rI.STSC),
            rI.box(rI.types.stsz, rI.STSZ),
            rI.box(rI.types.stco, rI.STCO),
        );
    }
    static avc1(e) {
        let t,
            i,
            r,
            s = [],
            a = [];
        for (t = 0; t < e.sps.length; t++)
            (r = (i = e.sps[t]).byteLength),
                s.push((r >>> 8) & 255),
                s.push(255 & r),
                (s = s.concat(Array.prototype.slice.call(i)));
        for (t = 0; t < e.pps.length; t++)
            (r = (i = e.pps[t]).byteLength),
                a.push((r >>> 8) & 255),
                a.push(255 & r),
                (a = a.concat(Array.prototype.slice.call(i)));
        let n = rI.box(
                rI.types.avcC,
                new Uint8Array(
                    [1, s[3], s[4], s[5], 255, 224 | e.sps.length].concat(s).concat([e.pps.length]).concat(a),
                ),
            ),
            l = e.width,
            o = e.height,
            h = e.pixelRatio[0],
            d = e.pixelRatio[1];
        return rI.box(
            rI.types.avc1,
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
                (o >> 8) & 255,
                255 & o,
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
            n,
            rI.box(rI.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
            rI.box(
                rI.types.pasp,
                new Uint8Array([
                    h >> 24,
                    (h >> 16) & 255,
                    (h >> 8) & 255,
                    255 & h,
                    d >> 24,
                    (d >> 16) & 255,
                    (d >> 8) & 255,
                    255 & d,
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
        return rI.box(rI.types.mp4a, rI.audioStsd(e), rI.box(rI.types.esds, rI.esds(e)));
    }
    static mp3(e) {
        return rI.box(rI.types[".mp3"], rI.audioStsd(e));
    }
    static ac3(e) {
        return rI.box(rI.types["ac-3"], rI.audioStsd(e), rI.box(rI.types.dac3, e.config));
    }
    static stsd(e) {
        let { segmentCodec: t } = e;
        if ("audio" === e.type) {
            if ("aac" === t) return rI.box(rI.types.stsd, rI.STSD, rI.mp4a(e));
            if ("ac3" === t && e.config) return rI.box(rI.types.stsd, rI.STSD, rI.ac3(e));
            if ("mp3" === t && "mp3" === e.codec) return rI.box(rI.types.stsd, rI.STSD, rI.mp3(e));
        } else if (e.pps && e.sps) {
            if ("avc" === t) return rI.box(rI.types.stsd, rI.STSD, rI.avc1(e));
            if ("hevc" === t && e.vps) return rI.box(rI.types.stsd, rI.STSD, rI.hvc1(e));
        } else throw Error("video track missing pps or sps");
        throw Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
    }
    static tkhd(e) {
        let t = e.id,
            i = (e.duration || 0) * (e.timescale || 0),
            r = e.width || 0,
            s = e.height || 0,
            a = Math.floor(i / 0x100000000),
            n = Math.floor(i % 0x100000000);
        return rI.box(
            rI.types.tkhd,
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
                a >> 24,
                (a >> 16) & 255,
                (a >> 8) & 255,
                255 & a,
                n >> 24,
                (n >> 16) & 255,
                (n >> 8) & 255,
                255 & n,
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
                (s >> 8) & 255,
                255 & s,
                0,
                0,
            ]),
        );
    }
    static traf(e, t) {
        let i = rI.sdtp(e),
            r = e.id,
            s = Math.floor(t / 0x100000000),
            a = Math.floor(t % 0x100000000);
        return rI.box(
            rI.types.traf,
            rI.box(rI.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, (r >> 16) & 255, (r >> 8) & 255, 255 & r])),
            rI.box(
                rI.types.tfdt,
                new Uint8Array([
                    1,
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
                ]),
            ),
            rI.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8),
            i,
        );
    }
    static trak(e) {
        return (e.duration = e.duration || 0xffffffff), rI.box(rI.types.trak, rI.tkhd(e), rI.mdia(e));
    }
    static trex(e) {
        let t = e.id;
        return rI.box(
            rI.types.trex,
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
        let i,
            r,
            s,
            a,
            n,
            l,
            o = e.samples || [],
            h = o.length,
            d = 12 + 16 * h,
            u = new Uint8Array(d);
        for (
            t += 8 + d,
                u.set(
                    [
                        +("video" === e.type),
                        0,
                        15,
                        1,
                        (h >>> 24) & 255,
                        (h >>> 16) & 255,
                        (h >>> 8) & 255,
                        255 & h,
                        (t >>> 24) & 255,
                        (t >>> 16) & 255,
                        (t >>> 8) & 255,
                        255 & t,
                    ],
                    0,
                ),
                i = 0;
            i < h;
            i++
        )
            (s = (r = o[i]).duration),
                (a = r.size),
                (n = r.flags),
                (l = r.cts),
                u.set(
                    [
                        (s >>> 24) & 255,
                        (s >>> 16) & 255,
                        (s >>> 8) & 255,
                        255 & s,
                        (a >>> 24) & 255,
                        (a >>> 16) & 255,
                        (a >>> 8) & 255,
                        255 & a,
                        (n.isLeading << 2) | n.dependsOn,
                        (n.isDependedOn << 6) | (n.hasRedundancy << 4) | (n.paddingValue << 1) | n.isNonSync,
                        61440 & n.degradPrio,
                        15 & n.degradPrio,
                        (l >>> 24) & 255,
                        (l >>> 16) & 255,
                        (l >>> 8) & 255,
                        255 & l,
                    ],
                    12 + 16 * i,
                );
        return rI.box(rI.types.trun, u);
    }
    static initSegment(e) {
        rI.types || rI.init();
        let t = rI.moov(e);
        return ey(rI.FTYP, t);
    }
    static hvc1(e) {
        let t = e.params,
            i = [e.vps, e.sps, e.pps],
            r = new Uint8Array([
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
                i.length,
            ]),
            s = r.length;
        for (let e = 0; e < i.length; e += 1) {
            s += 3;
            for (let t = 0; t < i[e].length; t += 1) s += 2 + i[e][t].length;
        }
        let a = new Uint8Array(s);
        a.set(r, 0), (s = r.length);
        let n = i.length - 1;
        for (let e = 0; e < i.length; e += 1) {
            a.set(new Uint8Array([(32 + e) | (128 * (e === n)), 0, i[e].length]), s), (s += 3);
            for (let t = 0; t < i[e].length; t += 1)
                a.set(new Uint8Array([i[e][t].length >> 8, 255 & i[e][t].length]), s),
                    (s += 2),
                    a.set(i[e][t], s),
                    (s += i[e][t].length);
        }
        let l = rI.box(rI.types.hvcC, a),
            o = e.width,
            h = e.height,
            d = e.pixelRatio[0],
            u = e.pixelRatio[1];
        return rI.box(
            rI.types.hvc1,
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
                (h >> 8) & 255,
                255 & h,
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
            rI.box(rI.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
            rI.box(
                rI.types.pasp,
                new Uint8Array([
                    d >> 24,
                    (d >> 16) & 255,
                    (d >> 8) & 255,
                    255 & d,
                    u >> 24,
                    (u >> 16) & 255,
                    (u >> 8) & 255,
                    255 & u,
                ]),
            ),
        );
    }
}
function rk(e, t, i = 1, r = !1) {
    let s = e * t * i;
    return r ? Math.round(s) : s;
}
function rD(e, t = !1) {
    return rk(e, 1e3, 11111111111111112e-21, t);
}
(rI.types = void 0),
    (rI.HDLR_TYPES = void 0),
    (rI.STTS = void 0),
    (rI.STSC = void 0),
    (rI.STCO = void 0),
    (rI.STSZ = void 0),
    (rI.VMHD = void 0),
    (rI.SMHD = void 0),
    (rI.STSD = void 0),
    (rI.FTYP = void 0),
    (rI.DINF = void 0);
let r_ = null,
    rP = null;
function rC(e, t, i, r) {
    return {
        duration: t,
        size: i,
        cts: r,
        flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: e ? 2 : 1, isNonSync: +!e },
    };
}
class rw extends F {
    constructor(e, t, i, r) {
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
            (this.typeSupported = i),
            (this.ISGenerated = !1),
            null === r_)
        ) {
            const e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            r_ = e ? parseInt(e[1]) : 0;
        }
        if (null === rP) {
            const e = navigator.userAgent.match(/Safari\/(\d+)/i);
            rP = e ? parseInt(e[1]) : 0;
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
            i = e[0].pts,
            r = e.reduce((e, r) => {
                let s = r.pts,
                    a = s - e;
                return (a < -0x100000000 && ((t = !0), (a = (s = rx(s, i)) - e)), a > 0) ? e : s;
            }, i);
        return t && this.debug("PTS rollover detected"), r;
    }
    remux(e, t, i, r, s, a, n, l) {
        let o,
            h,
            d,
            u,
            f,
            c,
            g = s,
            m = s,
            p = e.pid > -1,
            y = t.pid > -1,
            v = t.samples.length,
            E = e.samples.length > 0,
            T = (n && v > 0) || v > 1;
        if (((!p || E) && (!y || T)) || this.ISGenerated || n) {
            let i;
            if (this.ISGenerated) {
                var S, A, L, R;
                let e = this.videoTrackConfig;
                ((e &&
                    (t.width !== e.width ||
                        t.height !== e.height ||
                        (null == (S = t.pixelRatio) ? void 0 : S[0]) !== (null == (A = e.pixelRatio) ? void 0 : A[0]) ||
                        (null == (L = t.pixelRatio) ? void 0 : L[1]) !==
                            (null == (R = e.pixelRatio) ? void 0 : R[1]))) ||
                    (!e && T) ||
                    (null === this.nextAudioTs && E)) &&
                    this.resetInitSegment();
            }
            this.ISGenerated || (d = this.generateIS(e, t, s, a));
            let r = this.isVideoContiguous,
                n = -1;
            if (
                T &&
                ((n = (function (e) {
                    for (let t = 0; t < e.length; t++) if (e[t].key) return t;
                    return -1;
                })(t.samples)),
                !r && this.config.forceKeyFrameOnDiscontinuity)
            )
                if (((c = !0), n > 0)) {
                    this.warn(`Dropped ${n} out of ${v} video samples due to a missing keyframe`);
                    let e = this.getVideoStartPts(t.samples);
                    (t.samples = t.samples.slice(n)),
                        (t.dropped += n),
                        (m += (t.samples[0].pts - e) / t.inputTimeScale),
                        (i = m);
                } else -1 === n && (this.warn(`No keyframe found out of ${v} video samples`), (c = !1));
            if (this.ISGenerated) {
                if (E && T) {
                    let i = this.getVideoStartPts(t.samples),
                        r = (rx(e.samples[0].pts, i) - i) / t.inputTimeScale;
                    (g += Math.max(0, r)), (m += Math.max(0, -r));
                }
                if (E) {
                    if (
                        (e.samplerate ||
                            (this.warn("regenerate InitSegment as audio detected"), (d = this.generateIS(e, t, s, a))),
                        (h = this.remuxAudio(e, g, this.isAudioContiguous, a, y || T || l === _ ? m : void 0)),
                        T)
                    ) {
                        let i = h ? h.endPTS - h.startPTS : 0;
                        t.inputTimeScale ||
                            (this.warn("regenerate InitSegment as video detected"), (d = this.generateIS(e, t, s, a))),
                            (o = this.remuxVideo(t, m, r, i));
                    }
                } else T && (o = this.remuxVideo(t, m, r, 0));
                o && ((o.firstKeyFrame = n), (o.independent = -1 !== n), (o.firstKeyFramePTS = i));
            }
        }
        return (
            this.ISGenerated &&
                this._initPTS &&
                this._initDTS &&
                (i.samples.length && (f = rM(i, s, this._initPTS, this._initDTS)),
                r.samples.length && (u = rO(r, s, this._initPTS))),
            { audio: h, video: o, initSegment: d, independent: c, text: u, id3: f }
        );
    }
    generateIS(e, t, i, r) {
        let s,
            a,
            n,
            l = e.samples,
            o = t.samples,
            h = this.typeSupported,
            d = {},
            u = this._initPTS,
            f = !u || r,
            c = "audio/mp4",
            g = -1;
        if ((f && (s = a = 1 / 0), e.config && l.length)) {
            switch (((e.timescale = e.samplerate), e.segmentCodec)) {
                case "mp3":
                    h.mpeg ? ((c = "audio/mpeg"), (e.codec = "")) : h.mp3 && (e.codec = "mp3");
                    break;
                case "ac3":
                    e.codec = "ac-3";
            }
            (d.audio = {
                id: "audio",
                container: c,
                codec: e.codec,
                initSegment: "mp3" === e.segmentCodec && h.mpeg ? new Uint8Array(0) : rI.initSegment([e]),
                metadata: { channelCount: e.channelCount },
            }),
                f &&
                    ((g = e.id),
                    (n = e.inputTimeScale),
                    u && n === u.timescale ? (f = !1) : (s = a = l[0].pts - Math.round(n * i)));
        }
        if (t.sps && t.pps && o.length) {
            if (
                ((t.timescale = t.inputTimeScale),
                (d.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: t.codec,
                    initSegment: rI.initSegment([t]),
                    metadata: { width: t.width, height: t.height },
                }),
                f)
            )
                if (((g = t.id), (n = t.inputTimeScale), u && n === u.timescale)) f = !1;
                else {
                    let e = this.getVideoStartPts(o),
                        t = Math.round(n * i);
                    (a = Math.min(a, rx(o[0].dts, e) - t)), (s = Math.min(s, e - t));
                }
            this.videoTrackConfig = { width: t.width, height: t.height, pixelRatio: t.pixelRatio };
        }
        if (Object.keys(d).length)
            return (
                (this.ISGenerated = !0),
                f
                    ? (u &&
                          this.warn(
                              `Timestamps at playlist time: ${r ? "" : "~"}${i} ${s / n} != initPTS: ${u.baseTime / u.timescale} (${u.baseTime}/${u.timescale}) trackId: ${u.trackId}`,
                          ),
                      this.log(`Found initPTS at playlist time: ${i} offset: ${s / n} (${s}/${n}) trackId: ${g}`),
                      (this._initPTS = { baseTime: s, timescale: n, trackId: g }),
                      (this._initDTS = { baseTime: a, timescale: n, trackId: g }))
                    : (s = n = void 0),
                { tracks: d, initPTS: s, timescale: n, trackId: g }
            );
    }
    remuxVideo(e, t, i, r) {
        let s,
            a,
            n,
            d = e.inputTimeScale,
            u = e.samples,
            f = [],
            c = u.length,
            g = this._initPTS,
            m = (g.baseTime * d) / g.timescale,
            p = this.nextVideoTs,
            y = 8,
            v = this.videoSampleDuration,
            E = 1 / 0,
            T = -1 / 0,
            S = !1;
        if (!i || null === p) {
            let e = m + t * d,
                r = u[0].pts - rx(u[0].dts, u[0].pts);
            r_ && null !== p && 15e3 > Math.abs(e - r - (p + m)) ? (i = !0) : (p = e - r - m);
        }
        let A = p + m;
        for (let e = 0; e < c; e++) {
            let t = u[e];
            (t.pts = rx(t.pts, A)), (t.dts = rx(t.dts, A)), t.dts < u[e > 0 ? e - 1 : e].dts && (S = !0);
        }
        S &&
            u.sort(function (e, t) {
                let i = e.dts - t.dts,
                    r = e.pts - t.pts;
                return i || r;
            }),
            (s = u[0].dts);
        let L = (a = u[u.length - 1].dts) - s,
            R = L ? Math.round(L / (c - 1)) : v || e.inputTimeScale / 30;
        if (i) {
            let i = s - A,
                r = i > R,
                a = i < -1;
            if (
                (r || a) &&
                (r
                    ? this.warn(
                          `${(e.segmentCodec || "").toUpperCase()}: ${rD(i, !0)} ms (${i}dts) hole between fragments detected at ${t.toFixed(3)}`,
                      )
                    : this.warn(
                          `${(e.segmentCodec || "").toUpperCase()}: ${rD(-i, !0)} ms (${i}dts) overlapping between fragments detected at ${t.toFixed(3)}`,
                      ),
                !a || A >= u[0].pts || r_)
            ) {
                s = A;
                let e = u[0].pts - i;
                if (r) (u[0].dts = s), (u[0].pts = e);
                else {
                    let t = !0;
                    for (let r = 0; r < u.length && (!(u[r].dts > e) || !t); r++) {
                        let e = u[r].pts;
                        if (((u[r].dts -= i), (u[r].pts -= i), r < u.length - 1)) {
                            let i = u[r + 1].pts;
                            t = i <= u[r].pts == i <= e;
                        }
                    }
                }
                this.log(`Video: Initial PTS/DTS adjusted: ${rD(e, !0)}/${rD(s, !0)}, delta: ${rD(i, !0)} ms`);
            }
        }
        let b = 0,
            I = 0,
            k = (s = Math.max(0, s));
        for (let e = 0; e < c; e++) {
            let t = u[e],
                i = t.units,
                r = i.length,
                s = 0;
            for (let e = 0; e < r; e++) s += i[e].data.length;
            (I += s),
                (b += r),
                (t.length = s),
                t.dts < k ? ((t.dts = k), (k += (R / 4) | 0 || 1)) : (k = t.dts),
                (E = Math.min(t.pts, E)),
                (T = Math.max(t.pts, T));
        }
        a = u[c - 1].dts;
        let D = I + 4 * b + 8;
        try {
            n = new Uint8Array(D);
        } catch (e) {
            this.observer.emit(h.ERROR, h.ERROR, {
                type: l.MUX_ERROR,
                details: o.REMUX_ALLOC_ERROR,
                fatal: !1,
                error: e,
                bytes: D,
                reason: `fail allocating video mdat ${D}`,
            });
            return;
        }
        let _ = new DataView(n.buffer);
        _.setUint32(0, D), n.set(rI.types.mdat, 4);
        let P = !1,
            C = 1 / 0,
            w = 1 / 0,
            M = -1 / 0,
            O = -1 / 0;
        for (let e = 0; e < c; e++) {
            let t,
                i = u[e],
                s = i.units,
                a = 0;
            for (let e = 0, t = s.length; e < t; e++) {
                let t = s[e],
                    i = t.data,
                    r = t.data.byteLength;
                _.setUint32(y, r), (y += 4), n.set(i, y), (y += r), (a += 4 + r);
            }
            if (e < c - 1) (v = u[e + 1].dts - i.dts), (t = u[e + 1].pts - i.pts);
            else {
                let s = this.config,
                    a = e > 0 ? i.dts - u[e - 1].dts : R;
                if (((t = e > 0 ? i.pts - u[e - 1].pts : R), s.stretchShortVideoTrack && null !== this.nextAudioTs)) {
                    let e = Math.floor(s.maxBufferHole * d),
                        t = (r ? E + r * d : this.nextAudioTs + m) - i.pts;
                    t > e
                        ? ((v = t - a) < 0 ? (v = a) : (P = !0),
                          this.log(
                              `It is approximately ${t / 90} ms to the next segment; using duration ${v / 90} ms for the last video frame.`,
                          ))
                        : (v = a);
                } else v = a;
            }
            let l = Math.round(i.pts - i.dts);
            (C = Math.min(C, v)),
                (M = Math.max(M, v)),
                (w = Math.min(w, t)),
                (O = Math.max(O, t)),
                f.push(rC(i.key, v, a, l));
        }
        if (f.length) {
            if (r_) {
                if (r_ < 70) {
                    let e = f[0].flags;
                    (e.dependsOn = 2), (e.isNonSync = 0);
                }
            } else if (rP && O - w < M - C && R / M < 0.025 && 0 === f[0].cts) {
                this.warn(
                    "Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.",
                );
                let e = s;
                for (let t = 0, i = f.length; t < i; t++) {
                    let r = e + f[t].duration,
                        s = e + f[t].cts;
                    if (t < i - 1) {
                        let e = r + f[t + 1].cts;
                        f[t].duration = e - s;
                    } else f[t].duration = t ? f[t - 1].duration : R;
                    (f[t].cts = 0), (e = r);
                }
            }
        }
        let F = a + (v = P || !v ? R : v);
        (this.nextVideoTs = p = F - m), (this.videoSampleDuration = v), (this.isVideoContiguous = !0);
        let $ = {
            data1: rI.moof(e.sequenceNumber++, s, x(e, { samples: f })),
            data2: n,
            startPTS: (E - m) / d,
            endPTS: (T + v - m) / d,
            startDTS: (s - m) / d,
            endDTS: p / d,
            type: "video",
            hasAudio: !1,
            hasVideo: !0,
            nb: f.length,
            dropped: e.dropped,
        };
        return (e.samples = []), (e.dropped = 0), $;
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
    remuxAudio(e, t, i, r, s) {
        let a,
            n = e.inputTimeScale,
            d = e.samplerate ? e.samplerate : n,
            u = n / d,
            f = this.getSamplesPerFrame(e),
            c = f * u,
            g = this._initPTS,
            m = "mp3" === e.segmentCodec && this.typeSupported.mpeg,
            p = [],
            y = void 0 !== s,
            v = e.samples,
            E = 8 * !m,
            T = this.nextAudioTs || -1,
            S = (g.baseTime * n) / g.timescale,
            A = S + t * n;
        if (
            ((this.isAudioContiguous = i =
                i ||
                (v.length &&
                    T > 0 &&
                    ((r && 9e3 > Math.abs(A - (T + S))) || Math.abs(rx(v[0].pts, A) - (T + S)) < 20 * c))),
            v.forEach(function (e) {
                e.pts = rx(e.pts, A);
            }),
            !i || T < 0)
        ) {
            if (!(v = v.filter((e) => e.pts >= 0)).length) return;
            T = 0 === s ? 0 : r && !y ? Math.max(0, A - S) : v[0].pts - S;
        }
        if ("aac" === e.segmentCodec) {
            let t = this.config.maxAudioFramesDrift;
            for (let i = 0, r = T + S; i < v.length; i++) {
                let s = v[i],
                    a = s.pts,
                    l = a - r,
                    o = Math.abs((1e3 * l) / n);
                if (l <= -t * c && y)
                    0 === i &&
                        (this.warn(
                            `Audio frame @ ${(a / n).toFixed(3)}s overlaps marker by ${Math.round((1e3 * l) / n)} ms.`,
                        ),
                        (this.nextAudioTs = T = a - S),
                        (r = a));
                else if (l >= t * c && o < 1e4 && y) {
                    let t = Math.round(l / c);
                    for (r = a - t * c; r < 0 && t && c; ) t--, (r += c);
                    0 === i && (this.nextAudioTs = T = r - S),
                        this.warn(
                            `Injecting ${t} audio frames @ ${((r - S) / n).toFixed(3)}s due to ${Math.round((1e3 * l) / n)} ms gap.`,
                        );
                    for (let a = 0; a < t; a++) {
                        let t = rb.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
                        t ||
                            (this.log(
                                "Unable to get silent frame for given audio codec; duplicating last frame instead.",
                            ),
                            (t = s.unit.subarray())),
                            v.splice(i, 0, { unit: t, pts: r }),
                            (r += c),
                            i++;
                    }
                }
                (s.pts = r), (r += c);
            }
        }
        let L = null,
            R = null,
            b = 0,
            I = v.length;
        for (; I--; ) b += v[I].unit.byteLength;
        for (let t = 0, r = v.length; t < r; t++) {
            let r = v[t],
                s = r.unit,
                n = r.pts;
            if (null !== R) p[t - 1].duration = Math.round((n - R) / u);
            else {
                if ((i && "aac" === e.segmentCodec && (n = T + S), (L = n), !(b > 0))) return;
                b += E;
                try {
                    a = new Uint8Array(b);
                } catch (e) {
                    this.observer.emit(h.ERROR, h.ERROR, {
                        type: l.MUX_ERROR,
                        details: o.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        error: e,
                        bytes: b,
                        reason: `fail allocating audio mdat ${b}`,
                    });
                    return;
                }
                m || (new DataView(a.buffer).setUint32(0, b), a.set(rI.types.mdat, 4));
            }
            a.set(s, E);
            let d = s.byteLength;
            (E += d), p.push(rC(!0, f, d, 0)), (R = n);
        }
        let k = p.length;
        if (!k) return;
        let D = p[p.length - 1];
        (T = R - S), (this.nextAudioTs = T + u * D.duration);
        let _ = m ? new Uint8Array(0) : rI.moof(e.sequenceNumber++, L / u, x({}, e, { samples: p }));
        e.samples = [];
        let P = (L - S) / n,
            C = T / n,
            w = {
                data1: _,
                data2: a,
                startPTS: P,
                endPTS: C,
                startDTS: P,
                endDTS: C,
                type: "audio",
                hasAudio: !0,
                hasVideo: !1,
                nb: k,
            };
        return (this.isAudioContiguous = !0), w;
    }
}
function rx(e, t) {
    let i;
    if (null === t) return e;
    for (i = t < e ? -0x200000000 : 0x200000000; Math.abs(e - t) > 0x100000000; ) e += i;
    return e;
}
function rM(e, t, i, r) {
    let s = e.samples.length;
    if (!s) return;
    let a = e.inputTimeScale;
    for (let n = 0; n < s; n++) {
        let s = e.samples[n];
        (s.pts = rx(s.pts - (i.baseTime * a) / i.timescale, t * a) / a),
            (s.dts = rx(s.dts - (r.baseTime * a) / r.timescale, t * a) / a);
    }
    let n = e.samples;
    return (e.samples = []), { samples: n };
}
function rO(e, t, i) {
    let r = e.samples.length;
    if (!r) return;
    let s = e.inputTimeScale;
    for (let a = 0; a < r; a++) {
        let r = e.samples[a];
        r.pts = rx(r.pts - (i.baseTime * s) / i.timescale, t * s) / s;
    }
    e.samples.sort((e, t) => e.pts - t.pts);
    let a = e.samples;
    return (e.samples = []), { samples: a };
}
function rF(e, t, i = !1) {
    return (null == e ? void 0 : e.start) !== void 0 ? (e.start + (i ? e.duration : 0)) / e.timescale : t;
}
function r$(e, t, i) {
    let r = e.codec;
    return r && r.length > 4
        ? r
        : t === Q
          ? "ec-3" === r || "ac-3" === r || "alac" === r
              ? r
              : "fLaC" === r || "Opus" === r
                ? eC(r, !1)
                : (i.warn(`Unhandled audio codec "${r}" in mp4 MAP`), r || "mp4a")
          : (i.warn(`Unhandled video codec "${r}" in mp4 MAP`), r || "avc1");
}
try {
    r = self.performance.now.bind(self.performance);
} catch (e) {
    r = Date.now;
}
let rU = [
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
            resetInitSegment(e, t, i, r) {
                let s = (this.videoTrack = i9("video", 1)),
                    a = (this.audioTrack = i9("audio", 1)),
                    n = (this.txtTrack = i9("text", 1));
                if (((this.id3Track = i9("id3", 1)), (this.timeOffset = 0), !(null != e && e.byteLength))) return;
                let l = eu(e);
                if (l.video) {
                    let { id: e, timescale: t, codec: i, supplemental: r } = l.video;
                    (s.id = e), (s.timescale = n.timescale = t), (s.codec = i), (s.supplemental = r);
                }
                if (l.audio) {
                    let { id: e, timescale: t, codec: i } = l.audio;
                    (a.id = e), (a.timescale = t), (a.codec = i);
                }
                (n.id = es.text), (s.sampleDuration = 0), (s.duration = a.duration = r);
            }
            resetContiguity() {
                this.remainderData = null;
            }
            static probe(e) {
                let t = e.byteLength;
                for (let i = 0; i < t; ) {
                    let r = el(e, i);
                    if (r > 8 && 109 === e[i + 4] && 111 === e[i + 5] && 111 === e[i + 6] && 102 === e[i + 7])
                        return !0;
                    i = r > 1 ? i + r : t;
                }
                return !1;
            }
            demux(e, t) {
                this.timeOffset = t;
                let i = e,
                    r = this.videoTrack,
                    s = this.txtTrack;
                if (this.config.progressive) {
                    this.remainderData && (i = ey(this.remainderData, e));
                    let t = (function (e) {
                        let t = { valid: null, remainder: null },
                            i = ed(e, ["moof"]);
                        if (i.length < 2) return (t.remainder = e), t;
                        let r = i[i.length - 1];
                        return (t.valid = e.slice(0, r.byteOffset - 8)), (t.remainder = e.slice(r.byteOffset - 8)), t;
                    })(i);
                    (this.remainderData = t.remainder), (r.samples = t.valid || new Uint8Array());
                } else r.samples = i;
                let a = this.extractID3Track(r, t);
                return (
                    (s.samples = ev(t, r)),
                    { videoTrack: r, audioTrack: this.audioTrack, id3Track: a, textTrack: this.txtTrack }
                );
            }
            flush() {
                let e = this.timeOffset,
                    t = this.videoTrack,
                    i = this.txtTrack;
                (t.samples = this.remainderData || new Uint8Array()), (this.remainderData = null);
                let r = this.extractID3Track(t, this.timeOffset);
                return (i.samples = ev(e, t)), { videoTrack: t, audioTrack: i9(), id3Track: r, textTrack: i9() };
            }
            extractID3Track(e, t) {
                let i = this.id3Track;
                if (e.samples.length) {
                    let r = ed(e.samples, ["emsg"]);
                    r &&
                        r.forEach((e) => {
                            let r = (function (e) {
                                let t = e[0],
                                    i = "",
                                    r = "",
                                    s = 0,
                                    n = 0,
                                    l = 0,
                                    o = 0,
                                    h = 0,
                                    d = 0;
                                if (0 === t) {
                                    for (; "\0" !== ea(e.subarray(d, d + 1)); )
                                        (i += ea(e.subarray(d, d + 1))), (d += 1);
                                    for (i += ea(e.subarray(d, d + 1)), d += 1; "\0" !== ea(e.subarray(d, d + 1)); )
                                        (r += ea(e.subarray(d, d + 1))), (d += 1);
                                    (r += ea(e.subarray(d, d + 1))),
                                        (d += 1),
                                        (s = el(e, 12)),
                                        (n = el(e, 16)),
                                        (o = el(e, 20)),
                                        (h = el(e, 24)),
                                        (d = 28);
                                } else if (1 === t) {
                                    (d += 4), (s = el(e, d));
                                    let t = el(e, (d += 4)),
                                        n = el(e, (d += 4));
                                    for (
                                        d += 4,
                                            a((l = 0x100000000 * t + n)) ||
                                                ((l = Number.MAX_SAFE_INTEGER),
                                                G.warn(
                                                    "Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box",
                                                )),
                                            o = el(e, d),
                                            d += 4,
                                            h = el(e, d),
                                            d += 4;
                                        "\0" !== ea(e.subarray(d, d + 1));
                                    )
                                        (i += ea(e.subarray(d, d + 1))), (d += 1);
                                    for (i += ea(e.subarray(d, d + 1)), d += 1; "\0" !== ea(e.subarray(d, d + 1)); )
                                        (r += ea(e.subarray(d, d + 1))), (d += 1);
                                    (r += ea(e.subarray(d, d + 1))), (d += 1);
                                }
                                return {
                                    schemeIdUri: i,
                                    value: r,
                                    timeScale: s,
                                    presentationTime: l,
                                    presentationTimeDelta: n,
                                    eventDuration: o,
                                    id: h,
                                    payload: e.subarray(d, e.byteLength),
                                };
                            })(e);
                            if (rc.test(r.schemeIdUri)) {
                                let e = rg(r, t),
                                    s = 0xffffffff === r.eventDuration ? 1 / 0 : r.eventDuration / r.timeScale;
                                s <= 0.001 && (s = 1 / 0);
                                let a = r.payload;
                                i.samples.push({
                                    data: a,
                                    len: a.byteLength,
                                    dts: e,
                                    pts: e,
                                    type: i6.emsg,
                                    duration: s,
                                });
                            } else if (
                                this.config.enableEmsgKLVMetadata &&
                                r.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")
                            ) {
                                let e = rg(r, t);
                                i.samples.push({
                                    data: r.payload,
                                    len: r.payload.byteLength,
                                    dts: e,
                                    pts: e,
                                    type: i6.misbklv,
                                    duration: 1 / 0,
                                });
                            }
                        });
                }
                return i;
            }
            demuxSampleAes(e, t, i) {
                return Promise.reject(Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
            }
            destroy() {
                (this.config = null),
                    (this.remainderData = null),
                    (this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0);
            }
        },
        remux: class extends F {
            constructor(e, t, i, r) {
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
            resetInitSegment(e, t, i, r) {
                (this.audioCodec = t),
                    (this.videoCodec = i),
                    this.generateInitSegment(e, r),
                    (this.emitInitSegment = !0);
            }
            generateInitSegment(e, t) {
                let { audioCodec: i, videoCodec: r } = this;
                if (!(null != e && e.byteLength)) {
                    (this.initTracks = void 0), (this.initData = void 0);
                    return;
                }
                let { audio: s, video: a } = (this.initData = eu(e));
                if (t)
                    !(function (e, t) {
                        if (!e || !t) return;
                        let i = t.keyId;
                        i &&
                            t.isCommonEncryption &&
                            ed(e, ["moov", "trak"]).forEach((e) => {
                                let t = ed(e, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8),
                                    r = ed(t, ["enca"]),
                                    s = r.length > 0;
                                s || (r = ed(t, ["encv"])),
                                    r.forEach((e) => {
                                        ed(s ? e.subarray(28) : e.subarray(78), ["sinf"]).forEach((e) => {
                                            let t = ep(e);
                                            if (t) {
                                                let e = t.subarray(8, 24);
                                                e.some((e) => 0 !== e) ||
                                                    (G.log(
                                                        `[eme] Patching keyId in 'enc${s ? "a" : "v"}>sinf>>tenc' box: ${Y(e)} -> ${Y(i)}`,
                                                    ),
                                                    t.set(i, 8));
                                            }
                                        });
                                    });
                            });
                    })(e, t);
                else {
                    let e = s || a;
                    null != e &&
                        e.encrypted &&
                        this.warn(`Init segment with encrypted track with has no key ("${e.codec}")!`);
                }
                s && (i = r$(s, Q, this)), a && (r = r$(a, z, this));
                let n = {};
                s && a
                    ? (n.audiovideo = {
                          container: "video/mp4",
                          codec: i + "," + r,
                          supplemental: a.supplemental,
                          encrypted: a.encrypted,
                          initSegment: e,
                          id: "main",
                      })
                    : s
                      ? (n.audio = {
                            container: "audio/mp4",
                            codec: i,
                            encrypted: s.encrypted,
                            initSegment: e,
                            id: "audio",
                        })
                      : a
                        ? (n.video = {
                              container: "video/mp4",
                              codec: r,
                              supplemental: a.supplemental,
                              encrypted: a.encrypted,
                              initSegment: e,
                              id: "main",
                          })
                        : this.warn("initSegment does not contain moov or trak boxes."),
                    (this.initTracks = n);
            }
            remux(e, t, i, r, a, n) {
                var l, o;
                let { initPTS: h, lastEndTime: d } = this,
                    u = { audio: void 0, video: void 0, text: r, id3: i, initSegment: void 0 };
                s(d) || (d = this.lastEndTime = a || 0);
                let f = t.samples;
                if (!f.length) return u;
                let c = { initPTS: void 0, timescale: void 0, trackId: void 0 },
                    g = this.initData;
                if (
                    ((null != (l = g) && l.length) || (this.generateInitSegment(f), (g = this.initData)),
                    !(null != (o = g) && o.length))
                )
                    return this.warn("Failed to generate initSegment."), u;
                this.emitInitSegment && ((c.tracks = this.initTracks), (this.emitInitSegment = !1));
                let m = (function (e, t, i) {
                        let r = {},
                            a = ed(e, ["moof", "traf"]);
                        for (let e = 0; e < a.length; e++) {
                            let n = a[e],
                                l = ed(n, ["tfhd"])[0],
                                o = el(l, 4),
                                h = t[o];
                            if (!h) continue;
                            r[o] ||
                                (r[o] = {
                                    start: NaN,
                                    duration: 0,
                                    sampleCount: 0,
                                    timescale: h.timescale,
                                    type: h.type,
                                });
                            let d = r[o],
                                u = ed(n, ["tfdt"])[0];
                            if (u) {
                                let e = u[0],
                                    t = el(u, 4);
                                1 === e &&
                                    (0xffffffff === t
                                        ? i.warn(
                                              "[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time",
                                          )
                                        : ((t *= 0x100000000), (t += el(u, 8)))),
                                    s(t) && (!s(d.start) || t < d.start) && (d.start = t);
                            }
                            let f = h.default,
                                c = el(l, 0) | (null == f ? void 0 : f.flags),
                                g = (null == f ? void 0 : f.duration) || 0;
                            8 & c && (g = 2 & c ? el(l, 12) : el(l, 8));
                            let m = ed(n, ["trun"]),
                                p = d.start || 0,
                                y = 0,
                                v = g;
                            for (let e = 0; e < m.length; e++) {
                                let t = m[e],
                                    i = el(t, 4),
                                    r = d.sampleCount;
                                d.sampleCount += i;
                                let s = 1 & t[3],
                                    a = 4 & t[3],
                                    n = 1 & t[2],
                                    l = 2 & t[2],
                                    o = 4 & t[2],
                                    h = 8 & t[2],
                                    u = 8,
                                    f = i;
                                for (
                                    s && (u += 4),
                                        a &&
                                            i &&
                                            (1 & t[u + 1] || void 0 !== d.keyFrameIndex || (d.keyFrameIndex = r),
                                            (u += 4),
                                            n ? ((v = el(t, u)), (u += 4)) : (v = g),
                                            l && (u += 4),
                                            h && (u += 4),
                                            (p += v),
                                            (y += v),
                                            f--);
                                    f--;
                                )
                                    n ? ((v = el(t, u)), (u += 4)) : (v = g),
                                        l && (u += 4),
                                        o &&
                                            (1 & t[u + 1] ||
                                                void 0 !== d.keyFrameIndex ||
                                                ((d.keyFrameIndex = d.sampleCount - (f + 1)), (d.keyFrameStart = p)),
                                            (u += 4)),
                                        h && (u += 4),
                                        (p += v),
                                        (y += v);
                                !y && g && (y += g * i);
                            }
                            d.duration += y;
                        }
                        if (!Object.keys(r).some((e) => r[e].duration)) {
                            let t = 1 / 0,
                                i = 0,
                                a = ed(e, ["sidx"]);
                            for (let e = 0; e < a.length; e++) {
                                let r = (function (e) {
                                    let t = [],
                                        i = e[0],
                                        r = 8,
                                        s = el(e, 8);
                                    r += 4;
                                    let a = 0,
                                        n = 0;
                                    0 === i
                                        ? ((a = el(e, r)), (n = el(e, r + 4)), (r += 8))
                                        : ((a = eo(e, r)), (n = eo(e, r + 8)), (r += 16)),
                                        (r += 2);
                                    let l = e.length + n,
                                        o = en(e, r);
                                    r += 2;
                                    for (let i = 0; i < o; i++) {
                                        let i = r,
                                            a = el(e, i);
                                        i += 4;
                                        let n = 0x7fffffff & a;
                                        if (1 == (0x80000000 & a) >>> 31)
                                            return G.warn("SIDX has hierarchical references (not supported)"), null;
                                        let o = el(e, i);
                                        (i += 4),
                                            t.push({
                                                referenceSize: n,
                                                subsegmentDuration: o,
                                                info: { duration: o / s, start: l, end: l + n - 1 },
                                            }),
                                            (l += n),
                                            (i += 4),
                                            (r = i);
                                    }
                                    return {
                                        earliestPresentationTime: a,
                                        timescale: s,
                                        version: i,
                                        referencesCount: o,
                                        references: t,
                                    };
                                })(a[e]);
                                if (null != r && r.references) {
                                    t = Math.min(t, r.earliestPresentationTime / r.timescale);
                                    let e = r.references.reduce((e, t) => e + t.info.duration || 0, 0);
                                    i = Math.max(i, e + r.earliestPresentationTime / r.timescale);
                                }
                            }
                            i &&
                                s(i) &&
                                Object.keys(r).forEach((e) => {
                                    r[e].duration || (r[e].duration = i * r[e].timescale - r[e].start);
                                });
                        }
                        return r;
                    })(f, g, this),
                    p = g.audio ? m[g.audio.id] : null,
                    y = g.video ? m[g.video.id] : null,
                    v = rF(y, 1 / 0),
                    E = rF(p, 1 / 0),
                    T = rF(y, 0, !0),
                    S = rF(p, 0, !0),
                    A = a,
                    L = 0,
                    R = p && (!y || (!h && E < v) || (h && h.trackId === g.audio.id)),
                    b = R ? p : y;
                if (b) {
                    let e = b.timescale,
                        t = b.start - a * e,
                        i = R ? g.audio.id : g.video.id;
                    (A = b.start / e),
                        (L = R ? S - E : T - v),
                        (n || !h) &&
                            ((function (e, t, i, r) {
                                if (null === e) return !0;
                                let s = Math.max(r, 1);
                                return Math.abs(t - e.baseTime / e.timescale - i) > s;
                            })(h, A, a, L) ||
                                e !== h.timescale) &&
                            (h &&
                                this.warn(
                                    `Timestamps at playlist time: ${n ? "" : "~"}${a} ${t / e} != initPTS: ${h.baseTime / h.timescale} (${h.baseTime}/${h.timescale}) trackId: ${h.trackId}`,
                                ),
                            this.log(`Found initPTS at playlist time: ${a} offset: ${A - a} (${t}/${e}) trackId: ${i}`),
                            (h = null),
                            (c.initPTS = t),
                            (c.timescale = e),
                            (c.trackId = i));
                } else this.warn(`No audio or video samples found for initPTS at playlist time: ${a}`);
                h
                    ? ((c.initPTS = h.baseTime), (c.timescale = h.timescale), (c.trackId = h.trackId))
                    : ((c.timescale && void 0 !== c.trackId && void 0 !== c.initPTS) ||
                          (this.warn("Could not set initPTS"), (c.initPTS = A), (c.timescale = 1), (c.trackId = -1)),
                      (this.initPTS = h = { baseTime: c.initPTS, timescale: c.timescale, trackId: c.trackId }));
                let I = A - h.baseTime / h.timescale,
                    k = I + L;
                L > 0
                    ? (this.lastEndTime = k)
                    : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                let D = !!g.audio,
                    _ = !!g.video,
                    P = "";
                D && (P += "audio"), _ && (P += "video");
                let C = {
                    data1: f,
                    startPTS: I,
                    startDTS: I,
                    endPTS: k,
                    endDTS: k,
                    type: P,
                    hasAudio: D,
                    hasVideo: _,
                    nb: 1,
                    dropped: 0,
                    encrypted: (!!g.audio && g.audio.encrypted) || (!!g.video && g.video.encrypted),
                };
                (u.audio = D && !_ ? C : void 0), (u.video = _ ? C : void 0);
                let w = null == y ? void 0 : y.sampleCount;
                if (w) {
                    let e = y.keyFrameIndex,
                        t = -1 !== e;
                    (C.nb = w),
                        (C.dropped = 0 === e || this.isVideoContiguous ? 0 : t ? e : w),
                        (C.independent = t),
                        (C.firstKeyFrame = e),
                        t && y.keyFrameStart && (C.firstKeyFramePTS = (y.keyFrameStart - h.baseTime) / h.timescale),
                        this.isVideoContiguous || (u.independent = t),
                        this.isVideoContiguous || (this.isVideoContiguous = t),
                        C.dropped &&
                            this.warn(
                                `fmp4 does not start with IDR: firstIDR ${e}/${w} dropped: ${C.dropped} start: ${C.firstKeyFramePTS || "NA"}`,
                            );
                }
                return (u.initSegment = c), (u.id3 = rM(i, a, h, h)), r.samples.length && (u.text = rO(r, a, h)), u;
            }
        },
    },
    { demux: rT, remux: rw },
    {
        demux: class extends i7 {
            constructor(e, t) {
                super(), (this.observer = void 0), (this.config = void 0), (this.observer = e), (this.config = t);
            }
            resetInitSegment(e, t, i, r) {
                super.resetInitSegment(e, t, i, r),
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
                let i = iQ(e, 0),
                    r = (null == i ? void 0 : i.length) || 0;
                if (rd(e, r)) return !1;
                for (let i = e.length; r < i; r++)
                    if (
                        (function (e, t) {
                            if (i0(e, t)) {
                                let i = iZ(e, t);
                                if (t + i >= e.length) return !1;
                                let r = iJ(e, t);
                                if (r <= i) return !1;
                                let s = t + r;
                                return s === e.length || i0(e, s);
                            }
                            return !1;
                        })(e, r)
                    )
                        return t.log("ADTS sync word found !"), !0;
                return !1;
            }
            canParse(e, t) {
                return t + 5 < e.length && iz(e, t) && iJ(e, t) <= e.length - t;
            }
            appendFrame(e, t, i) {
                i1(e, this.observer, t, i, e.manifestCodec);
                let r = i2(e, t, i, this.basePTS, this.frameIndex);
                if (r && 0 === r.missing) return r;
            }
        },
        remux: rw,
    },
    {
        demux: class extends i7 {
            resetInitSegment(e, t, i, r) {
                super.resetInitSegment(e, t, i, r),
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
                let t = iQ(e, 0),
                    i = (null == t ? void 0 : t.length) || 0;
                if (t && 11 === e[i] && 119 === e[i + 1] && void 0 !== i8(t) && 16 >= ru(e, i)) return !1;
                for (let t = e.length; i < t; i++) if (rd(e, i)) return G.log("MPEG Audio sync word found !"), !0;
                return !1;
            }
            canParse(e, t) {
                return ro(e, t) && 4 <= e.length - t;
            }
            appendFrame(e, t, i) {
                if (null !== this.basePTS) return rn(e, t, i, this.basePTS, this.frameIndex);
            }
        },
        remux: rw,
    },
];
rU.splice(2, 0, {
    demux: class extends i7 {
        constructor(e) {
            super(), (this.observer = void 0), (this.observer = e);
        }
        resetInitSegment(e, t, i, r) {
            super.resetInitSegment(e, t, i, r),
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
        appendFrame(e, t, i) {
            let r = rf(e, t, i, this.basePTS, this.frameIndex);
            if (-1 !== r) return { sample: e.samples[e.samples.length - 1], length: r, missing: 0 };
        }
        static probe(e) {
            if (!e) return !1;
            let t = iQ(e, 0);
            if (!t) return !1;
            let i = t.length;
            return !!(11 === e[i] && 119 === e[i + 1] && void 0 !== i8(t) && 16 > ru(e, i));
        }
    },
    remux: rw,
});
class rB {
    constructor(e, t, i, r, s, a) {
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
            (this.config = i),
            (this.id = s),
            (this.logger = a);
    }
    configure(e) {
        (this.transmuxConfig = e), this.decrypter && this.decrypter.reset();
    }
    push(e, t, i, s) {
        var a, n;
        let d,
            u = i.transmuxing;
        u.executeStart = r();
        let f = new Uint8Array(e),
            { currentTransmuxState: c, transmuxConfig: g } = this;
        s && (this.currentTransmuxState = s);
        let {
                contiguous: m,
                discontinuity: p,
                trackSwitch: y,
                accurateTimeOffset: v,
                timeOffset: E,
                initSegmentChange: T,
            } = s || c,
            { audioCodec: S, videoCodec: A, defaultInitPts: L, duration: R, initSegmentData: b } = g,
            I =
                ((a = f),
                (n = t),
                (d = null),
                a.byteLength > 0 &&
                    (null == n ? void 0 : n.key) != null &&
                    null !== n.iv &&
                    null != n.method &&
                    (d = n),
                d);
        if (I && tO(I.method)) {
            let e = this.getDecrypter(),
                t = tF(I.method);
            if (!e.isSync())
                return (
                    (this.asyncResult = !0),
                    (this.decryptionPromise = e.webCryptoDecrypt(f, I.key.buffer, I.iv.buffer, t).then((e) => {
                        let t = this.push(e, null, i);
                        return (this.decryptionPromise = null), t;
                    })),
                    this.decryptionPromise
                );
            {
                let s = e.softwareDecrypt(f, I.key.buffer, I.iv.buffer, t);
                if (i.part > -1) {
                    let t = e.flush();
                    s = t ? t.buffer : t;
                }
                if (!s) return (u.executeEnd = r()), rN(i);
                f = new Uint8Array(s);
            }
        }
        let k = this.needsProbing(p, y);
        if (k) {
            let e = this.configureTransmuxer(f);
            if (e)
                return (
                    this.logger.warn(`[transmuxer] ${e.message}`),
                    this.observer.emit(h.ERROR, h.ERROR, {
                        type: l.MEDIA_ERROR,
                        details: o.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: e,
                        reason: e.message,
                    }),
                    (u.executeEnd = r()),
                    rN(i)
                );
        }
        (p || y || T || k) && this.resetInitSegment(b, S, A, R, t),
            (p || T || k) && this.resetInitialTimestamp(L),
            m || this.resetContiguity();
        let D = this.transmux(f, I, E, v, i);
        this.asyncResult = rG(D);
        let _ = this.currentTransmuxState;
        return (_.contiguous = !0), (_.discontinuity = !1), (_.trackSwitch = !1), (u.executeEnd = r()), D;
    }
    flush(e) {
        let t = e.transmuxing;
        t.executeStart = r();
        let { decrypter: i, currentTransmuxState: s, decryptionPromise: a } = this;
        if (a) return (this.asyncResult = !0), a.then(() => this.flush(e));
        let n = [],
            { timeOffset: l } = s;
        if (i) {
            let t = i.flush();
            t && n.push(this.push(t.buffer, null, e));
        }
        let { demuxer: o, remuxer: h } = this;
        if (!o || !h) {
            t.executeEnd = r();
            let i = [rN(e)];
            return this.asyncResult ? Promise.resolve(i) : i;
        }
        let d = o.flush(l);
        return rG(d)
            ? ((this.asyncResult = !0), d.then((t) => (this.flushRemux(n, t, e), n)))
            : (this.flushRemux(n, d, e), this.asyncResult)
              ? Promise.resolve(n)
              : n;
    }
    flushRemux(e, t, i) {
        let { audioTrack: s, videoTrack: a, id3Track: n, textTrack: l } = t,
            { accurateTimeOffset: o, timeOffset: h } = this.currentTransmuxState;
        this.logger.log(
            `[transmuxer.ts]: Flushed ${this.id} sn: ${i.sn}${i.part > -1 ? " part: " + i.part : ""} of ${this.id === D ? "level" : "track"} ${i.level}`,
        );
        let d = this.remuxer.remux(s, a, n, l, h, o, !0, this.id);
        e.push({ remuxResult: d, chunkMeta: i }), (i.transmuxing.executeEnd = r());
    }
    resetInitialTimestamp(e) {
        let { demuxer: t, remuxer: i } = this;
        t && i && (t.resetTimeStamp(e), i.resetTimeStamp(e));
    }
    resetContiguity() {
        let { demuxer: e, remuxer: t } = this;
        e && t && (e.resetContiguity(), t.resetNextTimestamp());
    }
    resetInitSegment(e, t, i, r, s) {
        let { demuxer: a, remuxer: n } = this;
        a && n && (a.resetInitSegment(e, t, i, r), n.resetInitSegment(e, t, i, s));
    }
    destroy() {
        this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
            this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
    }
    transmux(e, t, i, r, s) {
        return t && "SAMPLE-AES" === t.method
            ? this.transmuxSampleAes(e, t, i, r, s)
            : this.transmuxUnencrypted(e, i, r, s);
    }
    transmuxUnencrypted(e, t, i, r) {
        let {
            audioTrack: s,
            videoTrack: a,
            id3Track: n,
            textTrack: l,
        } = this.demuxer.demux(e, t, !1, !this.config.progressive);
        return { remuxResult: this.remuxer.remux(s, a, n, l, t, i, !1, this.id), chunkMeta: r };
    }
    transmuxSampleAes(e, t, i, r, s) {
        return this.demuxer
            .demuxSampleAes(e, t, i)
            .then((e) => ({
                remuxResult: this.remuxer.remux(e.audioTrack, e.videoTrack, e.id3Track, e.textTrack, i, r, !1, this.id),
                chunkMeta: s,
            }));
    }
    configureTransmuxer(e) {
        let t,
            { config: i, observer: r, typeSupported: s } = this;
        for (let i = 0, r = rU.length; i < r; i++) {
            var a;
            if (null != (a = rU[i].demux) && a.probe(e, this.logger)) {
                t = rU[i];
                break;
            }
        }
        if (!t) return Error("Failed to find demuxer by probing fragment data");
        let n = this.demuxer,
            l = this.remuxer,
            o = t.remux,
            h = t.demux;
        (l && l instanceof o) || (this.remuxer = new o(r, i, s, this.logger)),
            (n && n instanceof h) || ((this.demuxer = new h(r, i, s, this.logger)), (this.probe = h.probe));
    }
    needsProbing(e, t) {
        return !this.demuxer || !this.remuxer || e || t;
    }
    getDecrypter() {
        let e = this.decrypter;
        return e || (e = this.decrypter = new tm(this.config)), e;
    }
}
let rN = (e) => ({ remuxResult: {}, chunkMeta: e });
function rG(e) {
    return "then" in e && e.then instanceof Function;
}
class rK {
    constructor(e, t, i, r, s) {
        (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initSegmentData = void 0),
            (this.duration = void 0),
            (this.defaultInitPts = void 0),
            (this.audioCodec = e),
            (this.videoCodec = t),
            (this.initSegmentData = i),
            (this.duration = r),
            (this.defaultInitPts = s || null);
    }
}
class rH {
    constructor(e, t, i, r, s, a) {
        (this.discontinuity = void 0),
            (this.contiguous = void 0),
            (this.accurateTimeOffset = void 0),
            (this.trackSwitch = void 0),
            (this.timeOffset = void 0),
            (this.initSegmentChange = void 0),
            (this.discontinuity = e),
            (this.contiguous = t),
            (this.accurateTimeOffset = i),
            (this.trackSwitch = r),
            (this.timeOffset = s),
            (this.initSegmentChange = a);
    }
}
let rV = 0;
class rY {
    constructor(e, t, i, r) {
        (this.error = null),
            (this.hls = void 0),
            (this.id = void 0),
            (this.instanceNo = rV++),
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
                    i = this.hls;
                if (i && null != t && t.event && t.instanceNo === this.instanceNo)
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
                            i.logger[t.data.logType] && i.logger[t.data.logType](t.data.message);
                            break;
                        default:
                            (t.data = t.data || {}),
                                (t.data.frag = this.frag),
                                (t.data.part = this.part),
                                (t.data.id = this.id),
                                i.trigger(t.event, t.data);
                    }
            }),
            (this.onWorkerError = (e) => {
                if (!this.hls) return;
                let t = Error(`${e.message}  (${e.filename}:${e.lineno})`);
                (this.hls.config.enableWorker = !1),
                    this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`),
                    this.hls.trigger(h.ERROR, {
                        type: l.OTHER_ERROR,
                        details: o.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: "demuxerWorker",
                        error: t,
                    });
            });
        const s = e.config;
        (this.hls = e),
            (this.id = t),
            (this.useWorker = !!s.enableWorker),
            (this.onTransmuxComplete = i),
            (this.onFlush = r);
        const a = (e, t) => {
            ((t = t || {}).frag = this.frag || void 0),
                e === h.ERROR && ((t.parent = this.id), (t.part = this.part), (this.error = t.error)),
                this.hls.trigger(e, t);
        };
        (this.observer = new iV()), this.observer.on(h.FRAG_DECRYPTED, a), this.observer.on(h.ERROR, a);
        const n = eM(s.preferManagedMediaSource);
        if (this.useWorker && "u" > typeof Worker) {
            const i = this.hls.logger;
            if (s.workerPath || "function" == typeof __HLS_WORKER_BUNDLE__) {
                try {
                    s.workerPath
                        ? (i.log(`loading Web Worker ${s.workerPath} for "${t}"`),
                          (this.workerContext = (function (e) {
                              let t = iW[e];
                              if (t) return t.clientCount++, t;
                              let i = new self.URL(e, self.location.href).href,
                                  r = { worker: new self.Worker(i), scriptURL: i, clientCount: 1 };
                              return (iW[e] = r), r;
                          })(s.workerPath)))
                        : (i.log(`injecting Web Worker for "${t}"`),
                          (this.workerContext = (function () {
                              let e = iW[iY];
                              if (e) return e.clientCount++, e;
                              let t = new self.Blob(
                                      [
                                          `var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`,
                                      ],
                                      { type: "text/javascript" },
                                  ),
                                  i = self.URL.createObjectURL(t),
                                  r = { worker: new self.Worker(i), objectURL: i, clientCount: 1 };
                              return (iW[iY] = r), r;
                          })()));
                    const { worker: e } = this.workerContext;
                    e.addEventListener("message", this.onWorkerMessage),
                        e.addEventListener("error", this.onWorkerError),
                        e.postMessage({
                            instanceNo: this.instanceNo,
                            cmd: "init",
                            typeSupported: n,
                            id: t,
                            config: ej(s),
                        });
                } catch (r) {
                    i.warn(`Error setting up "${t}" Web Worker, fallback to inline`, r),
                        this.terminateWorker(),
                        (this.error = null),
                        (this.transmuxer = new rB(this.observer, n, s, "", t, e.logger));
                }
                return;
            }
        }
        this.transmuxer = new rB(this.observer, n, s, "", t, e.logger);
    }
    reset() {
        if (((this.frag = null), (this.part = null), this.workerContext)) {
            let e = this.instanceNo;
            this.instanceNo = rV++;
            let t = this.hls.config,
                i = eM(t.preferManagedMediaSource);
            this.workerContext.worker.postMessage({
                instanceNo: this.instanceNo,
                cmd: "reset",
                resetNo: e,
                typeSupported: i,
                id: this.id,
                config: ej(t),
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
                    let t = iW[e || iY];
                    if (t && 1 == t.clientCount--) {
                        let { worker: i, objectURL: r } = t;
                        delete iW[e || iY], r && self.URL.revokeObjectURL(r), i.terminate();
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
    push(e, t, i, r, s, a, n, l, o, h) {
        var d, u;
        o.transmuxing.start = self.performance.now();
        let { instanceNo: f, transmuxer: c } = this,
            g = a ? a.start : s.start,
            m = s.decryptdata,
            p = this.frag,
            y = !(p && s.cc === p.cc),
            v = !(p && o.level === p.level),
            E = p ? o.sn - p.sn : -1,
            T = this.part ? o.part - this.part.index : -1,
            S = 0 === E && o.id > 1 && o.id === (null == p ? void 0 : p.stats.chunkCount),
            A = !v && (1 === E || (0 === E && (1 === T || (S && T <= 0)))),
            L = self.performance.now();
        (v || E || 0 === s.stats.parsing.start) && (s.stats.parsing.start = L),
            a && (T || !A) && (a.stats.parsing.start = L);
        let R = !(
                p && (null == (d = s.initSegment) ? void 0 : d.url) === (null == (u = p.initSegment) ? void 0 : u.url)
            ),
            b = new rH(y, A, l, v, g, R);
        if (!A || y || R) {
            this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${s.type} sn: ${o.sn}${o.part > -1 ? " part: " + o.part : ""} ${this.id === D ? "level" : "track"}: ${o.level} id: ${o.id}
        discontinuity: ${y}
        trackSwitch: ${v}
        contiguous: ${A}
        accurateTimeOffset: ${l}
        timeOffset: ${g}
        initSegmentChange: ${R}`);
            let e = new rK(i, r, t, n, h);
            this.configureTransmuxer(e);
        }
        if (((this.frag = s), (this.part = a), this.workerContext))
            this.workerContext.worker.postMessage(
                { instanceNo: f, cmd: "demux", data: e, decryptdata: m, chunkMeta: o, state: b },
                e instanceof ArrayBuffer ? [e] : [],
            );
        else if (c) {
            let t = c.push(e, m, o, b);
            rG(t)
                ? t
                      .then((e) => {
                          this.handleTransmuxComplete(e);
                      })
                      .catch((e) => {
                          this.transmuxerError(e, o, "transmuxer-interface push error");
                      })
                : this.handleTransmuxComplete(t);
        }
    }
    flush(e) {
        e.transmuxing.start = self.performance.now();
        let { instanceNo: t, transmuxer: i } = this;
        if (this.workerContext) this.workerContext.worker.postMessage({ instanceNo: t, cmd: "flush", chunkMeta: e });
        else if (i) {
            let t = i.flush(e);
            rG(t)
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
    transmuxerError(e, t, i) {
        this.hls &&
            ((this.error = e),
            this.hls.trigger(h.ERROR, {
                type: l.MEDIA_ERROR,
                details: o.FRAG_PARSING_ERROR,
                chunkMeta: t,
                frag: this.frag || void 0,
                part: this.part || void 0,
                fatal: !1,
                error: e,
                err: e,
                reason: i,
            }));
    }
    handleFlushResult(e, t) {
        e.forEach((e) => {
            this.handleTransmuxComplete(e);
        }),
            this.onFlush(t);
    }
    configureTransmuxer(e) {
        let { instanceNo: t, transmuxer: i } = this;
        this.workerContext
            ? this.workerContext.worker.postMessage({ instanceNo: t, cmd: "configure", config: e })
            : i && i.configure(e);
    }
    handleTransmuxComplete(e) {
        (e.chunkMeta.transmuxing.end = self.performance.now()), this.onTransmuxComplete(e);
    }
}
class rW extends F {
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
    switchParams(e, t, i) {
        let r = null == t ? void 0 : t.renditionReports;
        if (r) {
            let s = -1;
            for (let i = 0; i < r.length; i++) {
                let a,
                    n = r[i];
                try {
                    a = new self.URL(n.URI, t.url).href;
                } catch (e) {
                    this.warn(`Could not construct new URL for Rendition Report: ${e}`), (a = n.URI || "");
                }
                if (a === e) {
                    s = i;
                    break;
                }
                a === e.substring(0, a.length) && (s = i);
            }
            if (-1 !== s) {
                let e = r[s],
                    a = parseInt(e["LAST-MSN"]) || t.lastPartSn,
                    n = parseInt(e["LAST-PART"]) || t.lastPartIndex;
                if (this.hls.config.lowLatencyMode) {
                    let e = Math.min(t.age - t.partTarget, t.targetduration);
                    n >= 0 && e > t.partTarget && (n += 1);
                }
                return new eV(a, n >= 0 ? n : void 0, i && eH(i));
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
    playlistLoaded(e, t, i) {
        let { details: r, stats: a } = t,
            n = self.performance.now(),
            d = a.loading.first ? Math.max(0, n - a.loading.first) : 0;
        r.advancedDateTime = Date.now() - d;
        let u = this.hls.config.timelineOffset;
        if (u !== r.appliedTimelineOffset) {
            let e = Math.max(u || 0, 0);
            (r.appliedTimelineOffset = e),
                r.fragments.forEach((t) => {
                    t.setStart(t.playlistOffset + e);
                });
        }
        if (r.live || (null != i && i.live)) {
            let u,
                c,
                g,
                m = "levelInfo" in t ? t.levelInfo : t.track;
            if ((r.reloaded(i), i && r.fragments.length > 0)) {
                !(function (e, t, i) {
                    let r;
                    if (e === t) return;
                    let a = null,
                        n = e.fragments;
                    for (let e = n.length - 1; e >= 0; e--) {
                        let t = n[e].initSegment;
                        if (t) {
                            a = t;
                            break;
                        }
                    }
                    e.fragmentHint && delete e.fragmentHint.endPTS,
                        (function (e, t, i) {
                            let r = t.skippedSegments,
                                s = Math.max(e.startSN, t.startSN) - t.startSN,
                                a = +!!e.fragmentHint + (r ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN,
                                n = t.startSN - e.startSN,
                                l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
                                o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
                            for (let u = s; u <= a; u++) {
                                let s = o[n + u],
                                    a = l[u];
                                if ((r && !a && s && (a = t.fragments[u] = s), s && a)) {
                                    var h, d;
                                    i(s, a, u, l);
                                    let r = s.relurl,
                                        n = a.relurl;
                                    if (r && (h = r) !== (d = n) && d && iE(h) !== iE(d)) {
                                        t.playlistParsingError = id(`media sequence mismatch ${a.sn}:`, e, t, s, a);
                                        return;
                                    }
                                    if (s.cc !== a.cc) {
                                        t.playlistParsingError = id(
                                            `discontinuity sequence mismatch (${s.cc}!=${a.cc})`,
                                            e,
                                            t,
                                            s,
                                            a,
                                        );
                                        return;
                                    }
                                }
                            }
                        })(e, t, (e, i, n, l) => {
                            if ((!t.startCC || t.skippedSegments) && i.cc !== e.cc) {
                                let r = e.cc - i.cc;
                                for (let e = n; e < l.length; e++) l[e].cc += r;
                                t.endCC = l[l.length - 1].cc;
                            }
                            s(e.startPTS) &&
                                s(e.endPTS) &&
                                (i.setStart((i.startPTS = e.startPTS)),
                                (i.startDTS = e.startDTS),
                                (i.maxStartPTS = e.maxStartPTS),
                                (i.endPTS = e.endPTS),
                                (i.endDTS = e.endDTS),
                                (i.minEndPTS = e.minEndPTS),
                                i.setDuration(e.endPTS - e.startPTS),
                                i.duration && (r = i),
                                (t.PTSKnown = t.alignedSliding = !0)),
                                e.hasStreams && (i.elementaryStreams = e.elementaryStreams),
                                (i.loader = e.loader),
                                e.hasStats && (i.stats = e.stats),
                                e.initSegment && ((i.initSegment = e.initSegment), (a = e.initSegment));
                        });
                    let l = t.fragments,
                        o = t.fragmentHint ? l.concat(t.fragmentHint) : l;
                    if (
                        (a &&
                            o.forEach((e) => {
                                var t;
                                e &&
                                    (!e.initSegment ||
                                        e.initSegment.relurl === (null == (t = a) ? void 0 : t.relurl)) &&
                                    (e.initSegment = a);
                            }),
                        t.skippedSegments)
                    ) {
                        if (((t.deltaUpdateFailed = l.some((e) => !e)), t.deltaUpdateFailed)) {
                            i.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                            for (let e = t.skippedSegments; e--; ) l.shift();
                            t.startSN = l[0].sn;
                        } else {
                            t.canSkipDateRanges &&
                                (t.dateRanges = (function (e, t, i) {
                                    let { dateRanges: r, recentlyRemovedDateranges: s } = t,
                                        a = x({}, e);
                                    s &&
                                        s.forEach((e) => {
                                            delete a[e];
                                        });
                                    let n = Object.keys(a).length;
                                    return n
                                        ? (Object.keys(r).forEach((e) => {
                                              let t = a[e],
                                                  s = new tC(r[e].attr, t);
                                              s.isValid
                                                  ? ((a[e] = s), t || (s.tagOrder += n))
                                                  : i.warn(
                                                        `Ignoring invalid Playlist Delta Update DATERANGE tag: "${ej(r[e].attr)}"`,
                                                    );
                                          }),
                                          a)
                                        : r;
                                })(e.dateRanges, t, i));
                            let r = e.fragments.filter((e) => e.rawProgramDateTime);
                            if (e.hasProgramDateTime && !t.hasProgramDateTime)
                                for (let e = 1; e < o.length; e++)
                                    null === o[e].programDateTime && ii(o[e], o[e - 1], r);
                            t6(r, t);
                        }
                        t.endCC = l[l.length - 1].cc;
                    }
                    if (!t.startCC) {
                        var h;
                        let i = im(e, t.startSN - 1);
                        t.startCC = null != (h = null == i ? void 0 : i.cc) ? h : l[0].cc;
                    }
                    (function (e, t, i) {
                        if (e && t) {
                            let r = 0;
                            for (let s = 0, a = e.length; s <= a; s++) {
                                let a = e[s],
                                    n = t[s + r];
                                a && n && a.index === n.index && a.fragment.sn === n.fragment.sn ? i(a, n) : r--;
                            }
                        }
                    })(e.partList, t.partList, (e, t) => {
                        (t.elementaryStreams = e.elementaryStreams), (t.stats = e.stats);
                    }),
                        r ? ih(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS, i) : iu(e, t),
                        l.length && (t.totalduration = t.edge - l[0].start),
                        (t.driftStartTime = e.driftStartTime),
                        (t.driftStart = e.driftStart);
                    let d = t.advancedDateTime;
                    if (t.advanced && d) {
                        let e = t.edge;
                        t.driftStart || ((t.driftStartTime = d), (t.driftStart = e)),
                            (t.driftEndTime = d),
                            (t.driftEnd = e);
                    } else
                        (t.driftEndTime = e.driftEndTime),
                            (t.driftEnd = e.driftEnd),
                            (t.advancedDateTime = e.advancedDateTime);
                    -1 === t.requestScheduled && (t.requestScheduled = e.requestScheduled);
                })(i, r, this);
                let e = r.playlistParsingError;
                if (e) {
                    this.warn(e);
                    let i = this.hls;
                    if (!i.config.ignorePlaylistParsingErrors) {
                        var f;
                        let { networkDetails: s } = t;
                        i.trigger(h.ERROR, {
                            type: l.NETWORK_ERROR,
                            details: o.LEVEL_PARSING_ERROR,
                            fatal: !1,
                            url: r.url,
                            error: e,
                            reason: e.message,
                            level: t.level || void 0,
                            parent: null == (f = r.fragments[0]) ? void 0 : f.type,
                            networkDetails: s,
                            stats: a,
                        });
                        return;
                    }
                    r.playlistParsingError = null;
                }
            }
            -1 === r.requestScheduled && (r.requestScheduled = a.loading.start);
            let p = this.hls.mainForwardBufferInfo,
                y = p ? p.end - p.len : 0,
                v = (r.edge - y) * 1e3,
                E = ig(r, v);
            if (
                (r.requestScheduled + E < n ? (r.requestScheduled = n) : (r.requestScheduled += E),
                this.log(
                    `live playlist ${e} ${r.advanced ? "REFRESHED " + r.lastPartSn + "-" + r.lastPartIndex : r.updated ? "UPDATED" : "MISSED"}`,
                ),
                !this.canLoad || !r.live)
            )
                return;
            if (r.canBlockReload && r.endSN && r.advanced) {
                let e = this.hls.config.lowLatencyMode,
                    s = r.lastPartSn,
                    a = r.endSN,
                    l = r.lastPartIndex,
                    o = s === a;
                -1 !== l
                    ? o
                        ? ((c = a + 1), (g = e ? 0 : l))
                        : ((c = s), (g = e ? l + 1 : r.maxPartIndex))
                    : (c = a + 1);
                let h = r.age,
                    d = h + r.ageHeader,
                    f = Math.min(d - r.partTarget, 1.5 * r.targetduration);
                if (f > 0) {
                    if (d > 3 * r.targetduration)
                        this.log(`Playlist last advanced ${h.toFixed(2)}s ago. Omitting segment and part directives.`),
                            (c = void 0),
                            (g = void 0);
                    else if (null != i && i.tuneInGoal && d - r.partTarget > i.tuneInGoal)
                        this.warn(
                            `CDN Tune-in goal increased from: ${i.tuneInGoal} to: ${f} with playlist age: ${r.age}`,
                        ),
                            (f = 0);
                    else {
                        let e = Math.floor(f / r.targetduration);
                        (c += e),
                            void 0 !== g && (g += Math.round((f % r.targetduration) / r.partTarget)),
                            this.log(
                                `CDN Tune-in age: ${r.ageHeader}s last advanced ${h.toFixed(2)}s goal: ${f} skip sn ${e} to part ${g}`,
                            );
                    }
                    r.tuneInGoal = f;
                }
                if (((u = this.getDeliveryDirectives(r, t.deliveryDirectives, c, g)), e || !o)) {
                    (r.requestScheduled = n), this.loadingPlaylist(m, u);
                    return;
                }
            } else
                (r.canBlockReload || r.canSkipUntil) && (u = this.getDeliveryDirectives(r, t.deliveryDirectives, c, g));
            u &&
                void 0 !== c &&
                r.canBlockReload &&
                (r.requestScheduled = a.loading.first + Math.max(E - 2 * d, E / 2)),
                this.scheduleLoading(m, u, r);
        } else this.clearTimer();
    }
    scheduleLoading(e, t, i) {
        let r = i || e.details;
        if (!r) return void this.loadingPlaylist(e, t);
        let s = self.performance.now(),
            a = r.requestScheduled;
        if (s >= a) return void this.loadingPlaylist(e, t);
        let n = a - s;
        this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(n)} ms`),
            this.clearTimer(),
            (this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), n));
    }
    getDeliveryDirectives(e, t, i, r) {
        let s = eH(e);
        return null != t && t.skip && e.deltaUpdateFailed && ((i = t.msn), (r = t.part), (s = "")), new eV(i, r, s);
    }
    checkRetry(e) {
        let t = e.details,
            i = e8(e),
            r = e.errorAction,
            { action: s, retryCount: a = 0, retryConfig: n } = r || {},
            l = !!r && !!n && (5 === s || (!r.resolved && 2 === s));
        if (l) {
            var o;
            if (a >= n.maxNumRetry) return !1;
            if (i && null != (o = e.context) && o.deliveryDirectives)
                this.warn(
                    `Retrying playlist loading ${a + 1}/${n.maxNumRetry} after "${t}" without delivery-directives`,
                ),
                    this.loadPlaylist();
            else {
                let e = te(n, a);
                this.clearTimer(),
                    (this.timer = self.setTimeout(() => this.loadPlaylist(), e)),
                    this.warn(`Retrying playlist loading ${a + 1}/${n.maxNumRetry} after "${t}" in ${e}ms`);
            }
            (e.levelRetry = !0), (r.resolved = !0);
        }
        return l;
    }
}
function rj(e, t) {
    if (e.length !== t.length) return !1;
    for (let i = 0; i < e.length; i++) if (!rq(e[i].attrs, t[i].attrs)) return !1;
    return !0;
}
function rq(e, t, i) {
    let r = e["STABLE-RENDITION-ID"];
    return r && !i
        ? r === t["STABLE-RENDITION-ID"]
        : !(i || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some(
              (i) => e[i] !== t[i],
          );
}
function rX(e, t) {
    return (
        t.label.toLowerCase() === e.name.toLowerCase() &&
        (!t.language || t.language.toLowerCase() === (e.lang || "").toLowerCase())
    );
}
class rQ {
    constructor(e) {
        (this.tracks = void 0), (this.queues = { video: [], audio: [], audiovideo: [] }), (this.tracks = e);
    }
    destroy() {
        this.tracks = this.queues = null;
    }
    append(e, t, i) {
        if (null === this.queues || null === this.tracks) return;
        let r = this.queues[t];
        r.push(e), 1 !== r.length || i || this.executeNext(t);
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
                let i = null == (t = e[0]) ? void 0 : t.label;
                ("async-blocker" === i || "async-blocker-prepend" === i) && (e[0].execute(), e.splice(0, 1));
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
            } catch (s) {
                var i;
                if ((r.onError(s), null === this.queues || null === this.tracks)) return;
                let t = null == (i = this.tracks[e]) ? void 0 : i.buffer;
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
        var t, i;
        return (null != (t = this.queues) && t[e]) || (null != (i = this.tracks) && i[e])
            ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}`
            : "";
    }
    listSbInfo(e) {
        var t;
        let i = null == (t = this.tracks) ? void 0 : t[e],
            r = null == i ? void 0 : i.buffer;
        return r
            ? `SourceBuffer${r.updating ? " updating" : ""}${i.ended ? " ended" : ""}${i.ending ? " ending" : ""}`
            : "none";
    }
    listOps(e) {
        var t;
        return (null == (t = this.queues) ? void 0 : t[e].map((e) => e.label).join(", ")) || "";
    }
}
let rz = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,
    rZ = "HlsJsTrackRemovedError";
class rJ extends Error {
    constructor(e) {
        super(e), (this.name = rZ);
    }
}
function r0(e) {
    let t = e.querySelectorAll("source");
    [].slice.call(t).forEach((t) => {
        e.removeChild(t);
    });
}
function r1(e) {
    return +("audio" === e);
}
class r2 {
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
        e.on(h.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
            e.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(h.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(h.BUFFER_CODECS, this.onBufferCodecs, this),
            e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    unregisterListener() {
        let { hls: e } = this;
        e.off(h.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
            e.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(h.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(h.BUFFER_CODECS, this.onBufferCodecs, this),
            e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this);
    }
    onFpsDropLevelCapping(e, t) {
        let i = this.hls.levels[t.droppedLevel];
        this.isLevelAllowed(i) && this.restrictedLevels.push({ bitrate: i.bitrate, height: i.height, width: i.width });
    }
    onMediaAttaching(e, t) {
        (this.media = t.media instanceof HTMLVideoElement ? t.media : null),
            (this.clientRect = null),
            this.timer && this.hls.levels.length && this.detectPlayerSize();
    }
    onManifestParsed(e, t) {
        let i = this.hls;
        (this.restrictedLevels = []),
            (this.firstLevel = t.firstLevel),
            i.config.capLevelToPlayerSize && t.video && this.startCapping();
    }
    onLevelsUpdated(e, t) {
        this.timer && s(this.autoLevelCapping) && this.detectPlayerSize();
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
                    i = this.getMaxLevel(e.length - 1);
                i !== this.autoLevelCapping &&
                    t.logger.log(
                        `Setting autoLevelCapping to ${i}: ${e[i].height}p@${e[i].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`,
                    ),
                    (t.autoLevelCapping = i),
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
        let i = t.filter((t, i) => this.isLevelAllowed(t) && i <= e);
        return (this.clientRect = null), r2.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight);
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
            let i = e.getBoundingClientRect();
            (t.width = i.width),
                (t.height = i.height),
                t.width ||
                    t.height ||
                    ((t.width = i.right - i.left || e.width || 0), (t.height = i.bottom - i.top || e.height || 0));
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
    static getMaxLevelByMediaSize(e, t, i) {
        if (!(null != e && e.length)) return -1;
        let r = (e, t) => !t || e.width !== t.width || e.height !== t.height,
            s = e.length - 1,
            a = Math.max(t, i);
        for (let t = 0; t < e.length; t += 1) {
            let i = e[t];
            if ((i.width >= a || i.height >= a) && r(i, e[t + 1])) {
                s = t;
                break;
            }
        }
        return s;
    }
}
class r3 {
    constructor(e, t) {
        Array.isArray(e) && (e = e.map((e) => (e instanceof r3 ? e : new r3(e)))), (this.value = e), (this.params = t);
    }
}
function r4(e, t, i) {
    return Error(
        `failed to serialize "${Array.isArray(e) ? JSON.stringify(e) : e instanceof Map ? "Map{}" : e instanceof Set ? "Set{}" : "object" == typeof e ? JSON.stringify(e) : String(e)}" as ${t}`,
        { cause: i },
    );
}
class r5 {
    constructor(e) {
        this.description = e;
    }
}
let r8 = "Bare Item";
function r6(e) {
    if (e < -0x38d7ea4c67fff || 0x38d7ea4c67fff < e) throw r4(e, "Integer");
    return e.toString();
}
let r9 = /[\x00-\x1f\x7f]+/;
function r7(e) {
    let t = e.description || e.toString().slice(7, -1);
    if (!1 === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t)) throw r4(t, "Token");
    return t;
}
function se(e) {
    switch (typeof e) {
        case "number":
            if (!s(e)) throw r4(e, r8);
            if (Number.isInteger(e)) return r6(e);
            let t = (function e(t, i) {
                if (t < 0) return -e(-t, i);
                let r = Math.pow(10, i);
                if (!(Math.abs(((t * r) % 1) - 0.5) < Number.EPSILON)) return Math.round(t * r) / r;
                {
                    let e = Math.floor(t * r);
                    return (e % 2 == 0 ? e : e + 1) / r;
                }
            })(e, 3);
            if (Math.floor(Math.abs(t)).toString().length > 12) throw r4(e, "Decimal");
            let i = t.toString();
            return i.includes(".") ? i : `${i}.0`;
        case "string":
            if (r9.test(e)) throw r4(e, "String");
            return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
        case "symbol":
            return r7(e);
        case "boolean":
            if ("boolean" != typeof e) throw r4(e, "Boolean");
            return e ? "?1" : "?0";
        case "object":
            if (e instanceof Date) return `@${r6(e.getTime() / 1e3)}`;
            if (e instanceof Uint8Array) {
                if (!1 === ArrayBuffer.isView(e)) throw r4(e, "Byte Sequence");
                return `:${btoa(String.fromCharCode(...e))}:`;
            }
            if (e instanceof r5) return r7(e);
        default:
            throw r4(e, r8);
    }
}
function st(e) {
    if (!1 === /^[a-z*][a-z0-9\-_.*]*$/.test(e)) throw r4(e, "Key");
    return e;
}
function si(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map(([e, t]) => (!0 === t ? `;${st(e)}` : `;${st(e)}=${se(t)}`))
              .join("");
}
function sr(e) {
    return e instanceof r3 ? `${se(e.value)}${si(e.params)}` : se(e);
}
function ss(e, t) {
    return (function (e, t = { whitespace: !0 }) {
        if ("object" != typeof e || null == e) throw r4(e, "Dict");
        let i = e instanceof Map ? e.entries() : Object.entries(e),
            r = (null == t ? void 0 : t.whitespace) ? " " : "";
        return Array.from(i)
            .map(([e, t]) => {
                t instanceof r3 == !1 && (t = new r3(t));
                let i = st(e);
                if (!0 === t.value) i += si(t.params);
                else if (((i += "="), Array.isArray(t.value))) {
                    var r;
                    i += ((r = t), `(${r.value.map(sr).join(" ")})${si(r.params)}`);
                } else i += sr(t);
                return i;
            })
            .join(`,${r}`);
    })(e, t);
}
let sa = "CMCD-Object",
    sn = "CMCD-Request",
    sl = "CMCD-Session",
    so = "CMCD-Status",
    sh = {
        br: sa,
        ab: sa,
        d: sa,
        ot: sa,
        tb: sa,
        tpb: sa,
        lb: sa,
        tab: sa,
        lab: sa,
        url: sa,
        pb: sn,
        bl: sn,
        tbl: sn,
        dl: sn,
        ltc: sn,
        mtp: sn,
        nor: sn,
        nrr: sn,
        rc: sn,
        sn: sn,
        sta: sn,
        su: sn,
        ttfb: sn,
        ttfbb: sn,
        ttlb: sn,
        cmsdd: sn,
        cmsds: sn,
        smrt: sn,
        df: sn,
        cs: sn,
        ts: sn,
        cid: sl,
        pr: sl,
        sf: sl,
        sid: sl,
        st: sl,
        v: sl,
        msd: sl,
        bs: so,
        bsd: so,
        cdn: so,
        rtp: so,
        bg: so,
        pt: so,
        ec: so,
        e: so,
    },
    sd = "event",
    su = (e) => Math.round(e),
    sf = (e, t) =>
        Array.isArray(e)
            ? e.map((e) => sf(e, t))
            : e instanceof r3 && "string" == typeof e.value
              ? new r3(sf(e.value, t), e.params)
              : (t.baseUrl &&
                    (e = (function (e, t) {
                        let i = new URL(e),
                            r = new URL(t);
                        if (i.origin !== r.origin) return e;
                        let s = i.pathname.split("/").slice(1),
                            a = r.pathname.split("/").slice(1, -1);
                        for (; s[0] === a[0]; ) s.shift(), a.shift();
                        for (; a.length; ) a.shift(), s.unshift("..");
                        return s.join("/") + i.search + i.hash;
                    })(e, t.baseUrl)),
                1 === t.version ? encodeURIComponent(e) : e),
    sc = (e) => 100 * su(e / 100),
    sg = {
        br: su,
        d: su,
        bl: sc,
        dl: sc,
        mtp: sc,
        nor: (e, t) => {
            let i = e;
            return (
                t.version >= 2 &&
                    (e instanceof r3 && "string" == typeof e.value
                        ? (i = new r3([e]))
                        : "string" == typeof e && (i = [e])),
                sf(i, t)
            );
        },
        rtp: sc,
        tb: su,
    },
    sm = "request",
    sp = "response",
    sy = [
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
    sv = ["e"],
    sE = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function sT(e) {
    return sE.test(e);
}
let sS = ["d", "dl", "nor", "ot", "rtp", "su"],
    sA = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"],
    sL = [
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
function sR(e) {
    return sL.includes(e) || sT(e);
}
let sb = {
    [sp]: function (e) {
        return sy.includes(e) || sS.includes(e) || sA.includes(e) || sT(e);
    },
    [sd]: function (e) {
        return sy.includes(e) || sv.includes(e) || sT(e);
    },
    [sm]: function (e) {
        return sy.includes(e) || sS.includes(e) || sT(e);
    },
};
function sI(e, t = {}) {
    let i = {};
    if (null == e || "object" != typeof e) return i;
    let r = t.version || e.v || 1,
        a = t.reportingMode || sm,
        n = 1 === r ? sR : sb[a],
        l = Object.keys(e).filter(n),
        o = t.filter;
    "function" == typeof o && (l = l.filter(o));
    let h = a === sp || a === sd;
    h && !l.includes("ts") && l.push("ts"), r > 1 && !l.includes("v") && l.push("v");
    let d = x({}, sg, t.formatters),
        u = { version: r, reportingMode: a, baseUrl: t.baseUrl };
    return (
        l.sort().forEach((t) => {
            var a;
            let n = e[t],
                l = d[t];
            if (("function" == typeof l && (n = l(n, u)), "v" === t))
                if (1 === r) return;
                else n = r;
            ("pr" != t || 1 !== n) &&
                (h && "ts" === t && !s(n) && (n = Date.now()),
                ("number" == typeof (a = n) ? s(a) : null != a && "" !== a && !1 !== a) &&
                    (["ot", "sf", "st", "e", "sta"].includes(t) && "string" == typeof n && (n = new r5(n)),
                    (i[t] = n)));
        }),
        i
    );
}
let sk = /CMCD=[^&#]+/;
function sD(e, t, i, r) {
    e &&
        Object.keys(t).forEach((s) => {
            let a = e
                .filter((e) => e.groupId === s)
                .map((e) => {
                    let a = x({}, e);
                    return (
                        (a.details = void 0),
                        (a.attrs = new tP(a.attrs)),
                        (a.url = a.attrs.URI = s_(e.url, e.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", i)),
                        (a.groupId = a.attrs["GROUP-ID"] = t[s]),
                        (a.attrs["PATHWAY-ID"] = r),
                        a
                    );
                });
            e.push(...a);
        });
}
function s_(e, t, i, r) {
    let s,
        { HOST: a, PARAMS: n, [i]: l } = r;
    t && (s = null == l ? void 0 : l[t]) && (e = s);
    let o = new self.URL(e);
    return (
        a && !s && (o.host = a),
        n &&
            Object.keys(n)
                .sort()
                .forEach((e) => {
                    e && o.searchParams.set(e, n[e]);
                }),
        o.href
    );
}
class sP extends F {
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
            (this.setMediaKeysQueue = sP.CDMCleanupPromise ? [sP.CDMCleanupPromise] : []),
            (this.bannedKeyIds = {}),
            (this.onMediaEncrypted = (e) => {
                let { initDataType: t, initData: i } = e,
                    r = `"${e.type}" event: init data type: "${t}"`;
                if ((this.debug(r), null !== i)) {
                    if (!this.keyFormatPromise) {
                        let e = Object.keys(this.keySystemAccessPromises);
                        e.length || (e = tz(this.config));
                        let t = e.map(tQ).filter((e) => !!e);
                        this.keyFormatPromise = this.getKeyFormatPromise(t);
                    }
                    this.keyFormatPromise
                        .then((s) => {
                            let a,
                                n = tX(s);
                            if ("sinf" !== t || n !== tK)
                                return void this.log(
                                    `Ignoring "${e.type}" event with init data type: "${t}" for selected key-system ${n}`,
                                );
                            try {
                                let e = ea(new Uint8Array(i)),
                                    t = t$(JSON.parse(e).sinf),
                                    r = ep(t);
                                if (!r) throw Error("'schm' box missing or not cbcs/cenc with schi > tenc");
                                a = new Uint8Array(r.subarray(8, 24));
                            } catch (e) {
                                this.warn(`${r} Failed to parse sinf: ${e}`);
                                return;
                            }
                            let l = Y(a),
                                { keyIdToKeySessionPromise: o, mediaKeySessions: h } = this,
                                d = o[l];
                            for (let e = 0; e < h.length; e++) {
                                let r = h[e],
                                    s = r.decryptdata;
                                if (!s.keyId) continue;
                                let n = Y(s.keyId);
                                if (tx(a, s.keyId) || -1 !== s.uri.replace(/-/g, "").indexOf(l)) {
                                    if (!(d = o[n])) continue;
                                    if (s.pssh) break;
                                    delete o[n],
                                        (s.pssh = new Uint8Array(i)),
                                        (s.keyId = a),
                                        (d = o[l] =
                                            d.then(() =>
                                                this.generateRequestWithPreferredKeySession(
                                                    r,
                                                    t,
                                                    i,
                                                    "encrypted-event-key-match",
                                                ),
                                            )).catch((e) => this.handleError(e));
                                    break;
                                }
                            }
                            d ||
                                this.handleError(
                                    Error(`Key ID ${l} not encountered in playlist. Key-system sessions ${h.length}.`),
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
        this.hls.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.on(h.MEDIA_DETACHED, this.onMediaDetached, this),
            this.hls.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.on(h.MANIFEST_LOADED, this.onManifestLoaded, this),
            this.hls.on(h.DESTROYING, this.onDestroying, this);
    }
    unregisterListeners() {
        this.hls.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            this.hls.off(h.MEDIA_DETACHED, this.onMediaDetached, this),
            this.hls.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            this.hls.off(h.MANIFEST_LOADED, this.onManifestLoaded, this),
            this.hls.off(h.DESTROYING, this.onDestroying, this);
    }
    getLicenseServerUrl(e) {
        let { drmSystems: t, widevineLicenseUrl: i } = this.config,
            r = null == t ? void 0 : t[e];
        return r ? r.licenseUrl : e === tV && i ? i : void 0;
    }
    getLicenseServerUrlOrThrow(e) {
        let t = this.getLicenseServerUrl(e);
        if (void 0 === t) throw Error(`no license server URL configured for key-system "${e}"`);
        return t;
    }
    getServerCertificateUrl(e) {
        let { drmSystems: t } = this.config,
            i = null == t ? void 0 : t[e];
        if (i) return i.serverCertificateUrl;
        this.log(`No Server Certificate in config.drmSystems["${e}"]`);
    }
    attemptKeySystemAccess(e) {
        let t = this.hls.levels,
            i = (e, t, i) => !!e && i.indexOf(e) === t,
            r = t.map((e) => e.audioCodec).filter(i),
            s = t.map((e) => e.videoCodec).filter(i);
        return (
            r.length + s.length === 0 && s.push("avc1.42e01e"),
            new Promise((t, i) => {
                let a = (e) => {
                    let n = e.shift();
                    this.getMediaKeysPromise(n, r, s)
                        .then((e) => t({ keySystem: n, mediaKeys: e }))
                        .catch((t) => {
                            e.length
                                ? a(e)
                                : t instanceof sw
                                  ? i(t)
                                  : i(
                                        new sw(
                                            {
                                                type: l.KEY_SYSTEM_ERROR,
                                                details: o.KEY_SYSTEM_NO_ACCESS,
                                                error: t,
                                                fatal: !0,
                                            },
                                            t.message,
                                        ),
                                    );
                        });
                };
                a(e);
            })
        );
    }
    requestMediaKeySystemAccess(e, t) {
        let { requestMediaKeySystemAccessFunc: i } = this.config;
        if ("function" != typeof i) {
            let e = `Configured requestMediaKeySystemAccess is not a function ${i}`;
            return (
                null === tZ &&
                    "http:" === self.location.protocol &&
                    (e = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),
                Promise.reject(Error(e))
            );
        }
        return i(e, t);
    }
    getMediaKeysPromise(e, t, i) {
        var r;
        let s = (function (e, t, i, r) {
                var s, a, n, l;
                let o;
                switch (e) {
                    case tK:
                        o = ["cenc", "sinf"];
                        break;
                    case tV:
                    case tH:
                        o = ["cenc"];
                        break;
                    case tG:
                        o = ["cenc", "keyids"];
                        break;
                    default:
                        throw Error(`Unknown key-system: ${e}`);
                }
                return (
                    (s = o),
                    (a = t),
                    (n = i),
                    [
                        {
                            initDataTypes: s,
                            persistentState: (l = r).persistentState || "optional",
                            distinctiveIdentifier: l.distinctiveIdentifier || "optional",
                            sessionTypes: l.sessionTypes || [l.sessionType || "temporary"],
                            audioCapabilities: a.map((e) => ({
                                contentType: `audio/mp4; codecs=${e}`,
                                robustness: l.audioRobustness || "",
                                encryptionScheme: l.audioEncryptionScheme || null,
                            })),
                            videoCapabilities: n.map((e) => ({
                                contentType: `video/mp4; codecs=${e}`,
                                robustness: l.videoRobustness || "",
                                encryptionScheme: l.videoEncryptionScheme || null,
                            })),
                        },
                    ]
                );
            })(e, t, i, this.config.drmSystemOptions || {}),
            a = this.keySystemAccessPromises[e],
            n = null == (r = a) ? void 0 : r.keySystemAccess;
        if (!n) {
            this.log(`Requesting encrypted media "${e}" key-system access with config: ${ej(s)}`),
                (n = this.requestMediaKeySystemAccess(e, s));
            let t = (a = this.keySystemAccessPromises[e] = { keySystemAccess: n });
            return (
                n.catch((t) => {
                    this.log(`Failed to obtain access to key-system "${e}": ${t}`);
                }),
                n.then((i) => {
                    this.log(`Access for key-system "${i.keySystem}" obtained`);
                    let r = this.fetchServerCertificate(e);
                    this.log(`Create media-keys for "${e}"`);
                    let s = (t.mediaKeys = i
                        .createMediaKeys()
                        .then(
                            (i) => (
                                this.log(`Media-keys created for "${e}"`),
                                (t.hasMediaKeys = !0),
                                r.then((t) => (t ? this.setMediaKeysServerCertificate(i, e, t) : i))
                            ),
                        ));
                    return (
                        s.catch((t) => {
                            this.error(`Failed to create media-keys for "${e}"}: ${t}`);
                        }),
                        s
                    );
                })
            );
        }
        return n.then(() => a.mediaKeys);
    }
    createMediaKeySessionContext({ decryptdata: e, keySystem: t, mediaKeys: i }) {
        this.log(`Creating key-system session "${t}" keyId: ${Y(e.keyId || [])} keyUri: ${e.uri}`);
        let r = i.createSession(),
            s = { decryptdata: e, keySystem: t, mediaKeys: i, mediaKeysSession: r, keyStatus: "status-pending" };
        return this.mediaKeySessions.push(s), s;
    }
    renewKeySession(e) {
        let t = e.decryptdata;
        if (t.pssh) {
            let i = this.createMediaKeySessionContext(e),
                r = sC(t);
            this.keyIdToKeySessionPromise[r] = this.generateRequestWithPreferredKeySession(
                i,
                "cenc",
                t.pssh.buffer,
                "expired",
            );
        } else this.warn("Could not renew expired session. Missing pssh initData.");
        this.removeSession(e);
    }
    updateKeySession(e, t) {
        let i = e.mediaKeysSession;
        return (
            this.log(`Updating key-session "${i.sessionId}" for keyId ${Y(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`),
            i.update(t)
        );
    }
    getSelectedKeySystemFormats() {
        return Object.keys(this.keySystemAccessPromises)
            .map((e) => ({ keySystem: e, hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys }))
            .filter(({ hasMediaKeys: e }) => !!e)
            .map(({ keySystem: e }) => tQ(e))
            .filter((e) => !!e);
    }
    getKeySystemAccess(e) {
        return this.getKeySystemSelectionPromise(e).then(({ keySystem: e, mediaKeys: t }) =>
            this.attemptSetMediaKeys(e, t),
        );
    }
    selectKeySystem(e) {
        return new Promise((t, i) => {
            this.getKeySystemSelectionPromise(e)
                .then(({ keySystem: e }) => {
                    let r = tQ(e);
                    r ? t(r) : i(Error(`Unable to find format for key-system "${e}"`));
                })
                .catch(i);
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
        let t = tz(this.config),
            i = e.map(tX).filter((e) => !!e && -1 !== t.indexOf(e));
        return this.selectKeySystem(i);
    }
    getKeyStatus(e) {
        let { mediaKeySessions: t } = this;
        for (let s = 0; s < t.length; s++) {
            var i, r;
            let a =
                ((i = e),
                (r = t[s]),
                i.keyId && r.mediaKeysSession.keyStatuses.has(i.keyId)
                    ? r.mediaKeysSession.keyStatuses.get(i.keyId)
                    : i.matches(r.decryptdata)
                      ? r.keyStatus
                      : void 0);
            if (a) return a;
        }
    }
    loadKey(e) {
        let t = e.keyInfo.decryptdata,
            i = sC(t),
            r = this.bannedKeyIds[i];
        if (r || "internal-error" === this.getKeyStatus(t)) {
            let i = sx(r || "internal-error", t);
            return this.handleError(i, e.frag), Promise.reject(i);
        }
        let s = `(keyId: ${i} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
        this.log(`Starting session for key ${s}`);
        let a = this.keyIdToKeySessionPromise[i];
        if (!a) {
            let r = this.getKeySystemForKeyPromise(t)
                .then(
                    ({ keySystem: i, mediaKeys: r }) => (
                        this.throwIfDestroyed(),
                        this.log(
                            `Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${s}`,
                        ),
                        this.attemptSetMediaKeys(i, r).then(
                            () => (
                                this.throwIfDestroyed(),
                                this.createMediaKeySessionContext({ keySystem: i, mediaKeys: r, decryptdata: t })
                            ),
                        )
                    ),
                )
                .then((e) => {
                    let i = t.pssh ? t.pssh.buffer : null;
                    return this.generateRequestWithPreferredKeySession(e, "cenc", i, "playlist-key");
                });
            return r.catch((t) => this.handleError(t, e.frag)), (this.keyIdToKeySessionPromise[i] = r), r;
        }
        return (
            a.catch((i) => {
                if (i instanceof sw) {
                    let r = O({}, i.data);
                    "internal-error" === this.getKeyStatus(t) && (r.decryptdata = t);
                    let s = new sw(r, i.message);
                    this.handleError(s, e.frag);
                }
            }),
            a
        );
    }
    throwIfDestroyed(e = "Invalid state") {
        if (!this.hls) throw Error("invalid state");
    }
    handleError(e, t) {
        if (this.hls)
            if (e instanceof sw) {
                t && (e.data.frag = t);
                let i = e.data.decryptdata;
                this.error(`${e.message}${i ? ` (${Y(i.keyId || [])})` : ""}`), this.hls.trigger(h.ERROR, e.data);
            } else
                this.error(e.message),
                    this.hls.trigger(h.ERROR, {
                        type: l.KEY_SYSTEM_ERROR,
                        details: o.KEY_SYSTEM_NO_KEYS,
                        error: e,
                        fatal: !0,
                    });
    }
    getKeySystemForKeyPromise(e) {
        let t = sC(e),
            i = this.keyIdToKeySessionPromise[t];
        if (!i) {
            let t = tX(e.keyFormat),
                i = t ? [t] : tz(this.config);
            return this.attemptKeySystemAccess(i);
        }
        return i;
    }
    getKeySystemSelectionPromise(e) {
        if ((e.length || (e = tz(this.config)), 0 === e.length))
            throw new sw(
                { type: l.KEY_SYSTEM_ERROR, details: o.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: !0 },
                `Missing key-system license configuration options ${ej({ drmSystems: this.config.drmSystems })}`,
            );
        return this.attemptKeySystemAccess(e);
    }
    attemptSetMediaKeys(e, t) {
        if (this.mediaKeys === t) return Promise.resolve();
        let i = this.setMediaKeysQueue.slice();
        this.log(`Setting media-keys for "${e}"`);
        let r = Promise.all(i).then(() => {
            if (!this.media)
                throw ((this.mediaKeys = null), Error("Attempted to set mediaKeys without media element attached"));
            return this.media.setMediaKeys(t);
        });
        return (
            (this.mediaKeys = t),
            this.setMediaKeysQueue.push(r),
            r.then(() => {
                this.log(`Media-keys set for "${e}"`),
                    i.push(r),
                    (this.setMediaKeysQueue = this.setMediaKeysQueue.filter((e) => -1 === i.indexOf(e)));
            })
        );
    }
    generateRequestWithPreferredKeySession(e, t, i, r) {
        var s;
        let a = null == (s = this.config.drmSystems) || null == (s = s[e.keySystem]) ? void 0 : s.generateRequest;
        if (a)
            try {
                let r = a.call(this.hls, t, i, e);
                if (!r) throw Error("Invalid response from configured generateRequest filter");
                (t = r.initDataType),
                    (i = r.initData ? r.initData : null),
                    (e.decryptdata.pssh = i ? new Uint8Array(i) : null);
            } catch (e) {
                if ((this.warn(e.message), this.hls && this.hls.config.debug)) throw e;
            }
        if (null === i) return this.log(`Skipping key-session request for "${r}" (no initData)`), Promise.resolve(e);
        let n = sC(e.decryptdata),
            h = e.decryptdata.uri;
        this.log(
            `Generating key-session request for "${r}" keyId: ${n} URI: ${h} (init data type: ${t} length: ${i.byteLength})`,
        );
        let d = new iV(),
            u = (e._onmessage = (t) => {
                let i = e.mediaKeysSession;
                if (!i) return void d.emit("error", Error("invalid state"));
                let { messageType: r, message: s } = t;
                this.log(`"${r}" message event for session "${i.sessionId}" message size: ${s.byteLength}`),
                    "license-request" === r || "license-renewal" === r
                        ? this.renewLicense(e, s).catch((e) => {
                              d.eventNames().length ? d.emit("error", e) : this.handleError(e);
                          })
                        : "license-release" === r
                          ? e.keySystem === tK &&
                            this.updateKeySession(e, tU("acknowledged"))
                                .then(() => this.removeSession(e))
                                .catch((e) => this.handleError(e))
                          : this.warn(`unhandled media key message type "${r}"`);
            }),
            f = (e, t) => {
                let i;
                (t.keyStatus = e),
                    e.startsWith("usable")
                        ? d.emit("resolved")
                        : "internal-error" === e || "output-restricted" === e || "output-downscaled" === e
                          ? (i = sx(e, t.decryptdata))
                          : "expired" === e
                            ? (i = Error(`key expired (keyId: ${n})`))
                            : "released" === e
                              ? (i = Error("key released"))
                              : "status-pending" === e || this.warn(`unhandled key status change "${e}" (keyId: ${n})`),
                    i && (d.eventNames().length ? d.emit("error", i) : this.handleError(i));
            },
            c = (e._onkeystatuseschange = (t) => {
                if (!e.mediaKeysSession) return void d.emit("error", Error("invalid state"));
                let i = this.getKeyStatuses(e);
                if (!Object.keys(i).some((e) => "status-pending" !== i[e])) return;
                if ("expired" === i[n]) {
                    this.log(`Expired key ${ej(i)} in key-session "${e.mediaKeysSession.sessionId}"`),
                        this.renewKeySession(e);
                    return;
                }
                let r = i[n];
                if (r) f(r, e);
                else {
                    var s;
                    e.keyStatusTimeouts || (e.keyStatusTimeouts = {}),
                        (s = e.keyStatusTimeouts)[n] ||
                            (s[n] = self.setTimeout(() => {
                                if (!e.mediaKeysSession || !this.mediaKeys) return;
                                let t = this.getKeyStatus(e.decryptdata);
                                if (t && "status-pending" !== t)
                                    return (
                                        this.log(
                                            `No status for keyId ${n} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${t} from other session.`,
                                        ),
                                        f(t, e)
                                    );
                                this.log(
                                    `key status for ${n} in key-session "${e.mediaKeysSession.sessionId}" timed out after 0ms`,
                                ),
                                    f((r = "internal-error"), e);
                            }, 0)),
                        this.log(`No status for keyId ${n} (${ej(i)}).`);
                }
            });
        ib(e.mediaKeysSession, "message", u), ib(e.mediaKeysSession, "keystatuseschange", c);
        let g = new Promise((e, t) => {
            d.on("error", t), d.on("resolved", e);
        });
        return e.mediaKeysSession
            .generateRequest(t, i)
            .then(() => {
                this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${n} URI: ${h}`);
            })
            .catch((t) => {
                throw new sw(
                    {
                        type: l.KEY_SYSTEM_ERROR,
                        details: o.KEY_SYSTEM_NO_SESSION,
                        error: t,
                        decryptdata: e.decryptdata,
                        fatal: !1,
                    },
                    `Error generating key-session request: ${t}`,
                );
            })
            .then(() => g)
            .catch(
                (t) => (
                    d.removeAllListeners(),
                    this.removeSession(e).then(() => {
                        throw t;
                    })
                ),
            )
            .then(() => (d.removeAllListeners(), e));
    }
    getKeyStatuses(e) {
        let t = {};
        return (
            e.mediaKeysSession.keyStatuses.forEach((i, r) => {
                if ("string" == typeof r && "object" == typeof i) {
                    let e = r;
                    (r = i), (i = e);
                }
                let s = "buffer" in r ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : new Uint8Array(r);
                e.keySystem === tH && 16 === s.length && tB(s);
                let a = Y(s);
                "internal-error" === i && (this.bannedKeyIds[a] = i),
                    this.log(
                        `key status change "${i}" for keyStatuses keyId: ${a} key-session "${e.mediaKeysSession.sessionId}"`,
                    ),
                    (t[a] = i);
            }),
            t
        );
    }
    fetchServerCertificate(e) {
        let t = this.config,
            i = new t.loader(t),
            r = this.getServerCertificateUrl(e);
        return r
            ? (this.log(`Fetching server certificate for "${e}"`),
              new Promise((s, a) => {
                  let n = { responseType: "arraybuffer", url: r },
                      h = t.certLoadPolicy.default,
                      d = { loadPolicy: h, timeout: h.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
                  i.load(n, d, {
                      onSuccess: (e, t, i, r) => {
                          s(e.data);
                      },
                      onError: (t, i, s, h) => {
                          a(
                              new sw(
                                  {
                                      type: l.KEY_SYSTEM_ERROR,
                                      details: o.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                      fatal: !0,
                                      networkDetails: s,
                                      response: O({ url: n.url, data: void 0 }, t),
                                  },
                                  `"${e}" certificate request failed (${r}). Status: ${t.code} (${t.text})`,
                              ),
                          );
                      },
                      onTimeout: (t, i, s) => {
                          a(
                              new sw(
                                  {
                                      type: l.KEY_SYSTEM_ERROR,
                                      details: o.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                      fatal: !0,
                                      networkDetails: s,
                                      response: { url: n.url, data: void 0 },
                                  },
                                  `"${e}" certificate request timed out (${r})`,
                              ),
                          );
                      },
                      onAbort: (e, t, i) => {
                          a(Error("aborted"));
                      },
                  });
              }))
            : Promise.resolve();
    }
    setMediaKeysServerCertificate(e, t, i) {
        return new Promise((r, s) => {
            e.setServerCertificate(i)
                .then((s) => {
                    this.log(
                        `setServerCertificate ${s ? "success" : "not supported by CDM"} (${i.byteLength}) on "${t}"`,
                    ),
                        r(e);
                })
                .catch((e) => {
                    s(
                        new sw(
                            {
                                type: l.KEY_SYSTEM_ERROR,
                                details: o.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
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
                throw new sw(
                    {
                        type: l.KEY_SYSTEM_ERROR,
                        details: o.KEY_SYSTEM_SESSION_UPDATE_FAILED,
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
        let i = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
        if (!i.includes("PlayReadyKeyMessage")) return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
        let r = new DOMParser().parseFromString(i, "application/xml"),
            s = r.querySelectorAll("HttpHeader");
        if (s.length > 0) {
            let t;
            for (let i = 0, r = s.length; i < r; i++) {
                var a, n;
                let r = null == (a = (t = s[i]).querySelector("name")) ? void 0 : a.textContent,
                    l = null == (n = t.querySelector("value")) ? void 0 : n.textContent;
                r && l && e.setRequestHeader(r, l);
            }
        }
        let l = r.querySelector("Challenge"),
            o = null == l ? void 0 : l.textContent;
        if (!o) throw Error("Cannot find <Challenge> in key message");
        return tU(atob(o));
    }
    setupLicenseXHR(e, t, i, r) {
        let s = this.config.licenseXhrSetup;
        return s
            ? Promise.resolve()
                  .then(() => {
                      if (!i.decryptdata) throw Error("Key removed");
                      return s.call(this.hls, e, t, i, r);
                  })
                  .catch((a) => {
                      if (!i.decryptdata) throw a;
                      return e.open("POST", t, !0), s.call(this.hls, e, t, i, r);
                  })
                  .then((i) => (e.readyState || e.open("POST", t, !0), { xhr: e, licenseChallenge: i || r }))
            : (e.open("POST", t, !0), Promise.resolve({ xhr: e, licenseChallenge: r }));
    }
    requestLicense(e, t) {
        let i = this.config.keyLoadPolicy.default;
        return new Promise((r, s) => {
            let a = this.getLicenseServerUrlOrThrow(e.keySystem);
            this.log(`Sending license request to URL: ${a}`);
            let n = new XMLHttpRequest();
            (n.responseType = "arraybuffer"),
                (n.onreadystatechange = () => {
                    if (!this.hls || !e.mediaKeysSession) return s(Error("invalid state"));
                    if (4 === n.readyState)
                        if (200 === n.status) {
                            this._requestLicenseFailureCount = 0;
                            let t = n.response;
                            this.log(`License received ${t instanceof ArrayBuffer ? t.byteLength : t}`);
                            let i = this.config.licenseResponseCallback;
                            if (i)
                                try {
                                    t = i.call(this.hls, n, a, e);
                                } catch (e) {
                                    this.error(e);
                                }
                            r(t);
                        } else {
                            let h = i.errorRetry,
                                d = h ? h.maxNumRetry : 0;
                            if (
                                (this._requestLicenseFailureCount++,
                                this._requestLicenseFailureCount > d || (n.status >= 400 && n.status < 500))
                            )
                                s(
                                    new sw(
                                        {
                                            type: l.KEY_SYSTEM_ERROR,
                                            details: o.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            decryptdata: e.decryptdata,
                                            fatal: !0,
                                            networkDetails: n,
                                            response: { url: a, data: void 0, code: n.status, text: n.statusText },
                                        },
                                        `License Request XHR failed (${a}). Status: ${n.status} (${n.statusText})`,
                                    ),
                                );
                            else {
                                let i = d - this._requestLicenseFailureCount + 1;
                                this.warn(`Retrying license request, ${i} attempts left`),
                                    this.requestLicense(e, t).then(r, s);
                            }
                        }
                }),
                e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(),
                (e.licenseXhr = n),
                this.setupLicenseXHR(n, a, e, t)
                    .then(({ xhr: t, licenseChallenge: i }) => {
                        e.keySystem == tH && (i = this.unpackPlayReadyKeyMessage(t, i)), t.send(i);
                    })
                    .catch(s);
        });
    }
    onDestroying() {
        this.unregisterListeners(), this._clear();
    }
    onMediaAttached(e, t) {
        if (!this.config.emeEnabled) return;
        let i = t.media;
        (this.media = i), ib(i, "encrypted", this.onMediaEncrypted), ib(i, "waitingforkey", this.onWaitingForKey);
    }
    onMediaDetached() {
        let e = this.media;
        e &&
            (iI(e, "encrypted", this.onMediaEncrypted),
            iI(e, "waitingforkey", this.onWaitingForKey),
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
            i = this.mediaKeySessions.slice();
        (this.mediaKeySessions = []), (this.mediaKeys = null), t0.clearKeyUriToKeyIdMap();
        let r = i.length;
        sP.CDMCleanupPromise = Promise.all(
            i
                .map((e) => this.removeSession(e))
                .concat(
                    (null == t || null == (e = t.setMediaKeys(null))
                        ? void 0
                        : e.catch((e) => {
                              this.log(`Could not clear media keys: ${e}`),
                                  this.hls &&
                                      this.hls.trigger(h.ERROR, {
                                          type: l.OTHER_ERROR,
                                          details: o.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
                                          fatal: !1,
                                          error: Error(`Could not clear media keys: ${e}`),
                                      });
                          })) || Promise.resolve(),
                ),
        )
            .catch((e) => {
                this.log(`Could not close sessions and clear media keys: ${e}`),
                    this.hls &&
                        this.hls.trigger(h.ERROR, {
                            type: l.OTHER_ERROR,
                            details: o.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
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
        let { mediaKeysSession: t, licenseXhr: i, decryptdata: r } = e;
        if (t) {
            var s;
            this.log(
                `Remove licenses and keys and close session "${t.sessionId}" keyId: ${Y((null == r ? void 0 : r.keyId) || [])}`,
            ),
                e._onmessage && (t.removeEventListener("message", e._onmessage), (e._onmessage = void 0)),
                e._onkeystatuseschange &&
                    (t.removeEventListener("keystatuseschange", e._onkeystatuseschange),
                    (e._onkeystatuseschange = void 0)),
                i && i.readyState !== XMLHttpRequest.DONE && i.abort(),
                (e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0);
            let a = this.mediaKeySessions.indexOf(e);
            a > -1 && this.mediaKeySessions.splice(a, 1);
            let { keyStatusTimeouts: n } = e;
            n && Object.keys(n).forEach((e) => self.clearTimeout(n[e]));
            let { drmSystemOptions: d } = this.config;
            return (
                d &&
                ("persistent-license" === d.sessionType ||
                    (null != (s = d.sessionTypes) && s.some((e) => "persistent-license" === e)))
                    ? new Promise((e, i) => {
                          self.setTimeout(() => i(Error("MediaKeySession.remove() timeout")), 8e3),
                              t.remove().then(e).catch(i);
                      })
                    : Promise.resolve()
            )
                .catch((e) => {
                    this.log(`Could not remove session: ${e}`),
                        this.hls &&
                            this.hls.trigger(h.ERROR, {
                                type: l.OTHER_ERROR,
                                details: o.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
                                fatal: !1,
                                error: Error(`Could not remove session: ${e}`),
                            });
                })
                .then(() => t.close())
                .catch((e) => {
                    this.log(`Could not close session: ${e}`),
                        this.hls &&
                            this.hls.trigger(h.ERROR, {
                                type: l.OTHER_ERROR,
                                details: o.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
                                fatal: !1,
                                error: Error(`Could not close session: ${e}`),
                            });
                });
        }
        return Promise.resolve();
    }
}
function sC(e) {
    if (!e) throw Error("Could not read keyId of undefined decryptdata");
    if (null === e.keyId) throw Error("keyId is null");
    return Y(e.keyId);
}
sP.CDMCleanupPromise = void 0;
class sw extends Error {
    constructor(e, t) {
        super(t), (this.data = void 0), e.error || (e.error = Error(t)), (this.data = e), (e.err = e.error);
    }
}
function sx(e, t) {
    let i = "output-restricted" === e,
        r = i ? o.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : o.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
    return new sw(
        { type: l.KEY_SYSTEM_ERROR, details: r, fatal: !1, decryptdata: t },
        i ? "HDCP level output restricted" : `key status changed to "${e}"`,
    );
}
function sM(e, t) {
    let i;
    try {
        i = new Event("addtrack");
    } catch (e) {
        (i = document.createEvent("Event")).initEvent("addtrack", !1, !1);
    }
    (i.track = e), t.dispatchEvent(i);
}
function sO(e, t) {
    let i = e.mode;
    if (("disabled" === i && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)))
        try {
            if ((e.addCue(t), !e.cues.getCueById(t.id))) throw Error(`addCue is failed for: ${t}`);
        } catch (i) {
            G.debug(`[texttrack-utils]: ${i}`);
            try {
                let i = new self.TextTrackCue(t.startTime, t.endTime, t.text);
                (i.id = t.id), e.addCue(i);
            } catch (e) {
                G.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${e}`);
            }
        }
    "disabled" === i && (e.mode = i);
}
function sF(e, t) {
    let i = e.mode;
    if (("disabled" === i && (e.mode = "hidden"), e.cues))
        for (let i = e.cues.length; i--; ) t && e.cues[i].removeEventListener("enter", t), e.removeCue(e.cues[i]);
    "disabled" === i && (e.mode = i);
}
function s$(e, t, i, r) {
    let s = e.mode;
    if (("disabled" === s && (e.mode = "hidden"), e.cues && e.cues.length > 0)) {
        let s = (function (e, t, i) {
            let r = [],
                s = (function (e, t) {
                    let i;
                    if (t <= e[0].startTime) return 0;
                    let r = e.length - 1;
                    if (t > e[r].endTime) return -1;
                    let s = 0,
                        a = r;
                    for (; s <= a; )
                        if (t < e[(i = Math.floor((a + s) / 2))].startTime) a = i - 1;
                        else {
                            if (!(t > e[i].startTime) || !(s < r)) return i;
                            s = i + 1;
                        }
                    return e[s].startTime - t < t - e[a].startTime ? s : a;
                })(e, t);
            if (s > -1)
                for (let a = s, n = e.length; a < n; a++) {
                    let s = e[a];
                    if (s.startTime >= t && s.endTime <= i) r.push(s);
                    else if (s.startTime > i) break;
                }
            return r;
        })(e.cues, t, i);
        for (let t = 0; t < s.length; t++) (!r || r(s[t])) && e.removeCue(s[t]);
    }
    "disabled" === s && (e.mode = s);
}
function sU(e) {
    let t = [];
    for (let i = 0; i < e.length; i++) {
        let r = e[i];
        ("subtitles" === r.kind || "captions" === r.kind) && r.label && t.push(e[i]);
    }
    return t;
}
function sB(e) {
    let t = 5381,
        i = e.length;
    for (; i; ) t = (33 * t) ^ e.charCodeAt(--i);
    return (t >>> 0).toString();
}
let sN = (((v = {})[(v.Point = 0)] = "Point"), (v[(v.Range = 1)] = "Range"), v);
class sG {
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
        let i = this.playoutLimit;
        return (
            !(e <= 0 || isNaN(i)) && (0 === i || ((null == (t = this.assetList[e]) ? void 0 : t.startOffset) || 0) > i)
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
            if (t) return sK(e, t);
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
                i = sK(t, e);
            return t - i < 0.1;
        }
        return !1;
    }
    get resumptionOffset() {
        let e = this.resumeOffset,
            t = s(e) ? e : this.duration;
        return this.cumulativeDuration + t;
    }
    get resumeTime() {
        let e = this.startOffset + this.resumptionOffset;
        if (this.snapOptions.in) {
            let t = this.resumeAnchor;
            if (t) return sK(e, t);
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
        return "RANGE" === this.dateRange.attr["X-TIMELINE-OCCUPIES"] ? sN.Range : sN.Point;
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
function sK(e, t) {
    return e - t.start < t.duration / 2 && !(0.025 > Math.abs(e - (t.start + t.duration)))
        ? t.start
        : t.start + t.duration;
}
function sH(e, t, i) {
    let r = new self.URL(e, i);
    return "data:" !== r.protocol && r.searchParams.set("_HLS_primary_id", t), r;
}
function sV(e, t) {
    for (; null != (i = e.assetList[++t]) && i.error; ) var i;
    return t;
}
function sY(e) {
    let t = e.timelineStart,
        i = e.duration || 0;
    return `["${e.identifier}" ${t.toFixed(2)}-${(t + i).toFixed(2)}]`;
}
class sW {
    constructor(e, t, i, r) {
        (this.hls = void 0),
            (this.interstitial = void 0),
            (this.assetItem = void 0),
            (this.tracks = null),
            (this.hasDetails = !1),
            (this.mediaAttached = null),
            (this._currentTime = void 0),
            (this._bufferedEosTime = void 0),
            (this.checkPlayout = () => {
                this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(h.PLAYOUT_LIMIT_REACHED, {});
            });
        const s = (this.hls = new e(t));
        (this.interstitial = i), (this.assetItem = r);
        const a = () => {
            this.hasDetails = !0;
        };
        s.once(h.LEVEL_LOADED, a),
            s.once(h.AUDIO_TRACK_LOADED, a),
            s.once(h.SUBTITLE_TRACK_LOADED, a),
            s.on(h.MEDIA_ATTACHING, (e, { media: t }) => {
                this.removeMediaListeners(),
                    (this.mediaAttached = t),
                    this.interstitial.playoutLimit &&
                        (t.addEventListener("timeupdate", this.checkPlayout),
                        this.appendInPlace &&
                            s.on(h.BUFFER_APPENDED, () => {
                                let e = this.bufferedEnd;
                                this.reachedPlayout(e) &&
                                    ((this._bufferedEosTime = e), s.trigger(h.BUFFERED_TO_END, void 0));
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
                    t = sH(t, e.config.primarySessionId || "").href;
                } catch (e) {}
                e.loadSource(t);
            }
    }
    bufferedInPlaceToEnd(e) {
        var t;
        if (!this.appendInPlace) return !1;
        if (null != (t = this.hls) && t.bufferedToEnd) return !0;
        if (!e) return !1;
        let i = Math.min(this._bufferedEosTime || 1 / 0, this.duration),
            r = this.timelineOffset,
            s = tR.bufferInfo(e, r, 0);
        return this.getAssetTime(s.end) >= i - 0.02;
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
        let t = tR.bufferInfo(e, e.currentTime, 0.001);
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
            let i = t - this.startOffset;
            if (i > 0 && i < e) return i;
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
    on(e, t, i) {
        var r;
        null == (r = this.hls) || r.on(e, t);
    }
    once(e, t, i) {
        var r;
        null == (r = this.hls) || r.once(e, t);
    }
    off(e, t, i) {
        var r;
        null == (r = this.hls) || r.off(e, t);
    }
    toString() {
        var e;
        return `HlsAssetPlayer: ${sY(this.assetItem)} ${null == ((e = this.hls)) ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
    }
}
class sj extends F {
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
            ? this.events.reduce((i, r) => (e <= r.startOffset && t > r.startOffset ? (delete r.error, i + 1) : i), 0)
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
        let i = -1;
        e.nextEvent
            ? (i = this.findEventIndex(e.nextEvent.identifier) - 1)
            : e.previousEvent && (i = this.findEventIndex(e.previousEvent.identifier) + 1);
        let r = this.items;
        if (r)
            for (
                r[i] || (void 0 === t && (t = e.start), (i = this.findItemIndexAtTime(t)));
                i >= 0 && null != (s = r[i]) && s.event;
            ) {
                var s;
                i--;
            }
        return i;
    }
    findItemIndexAtTime(e, t) {
        let i = this.items;
        if (i)
            for (let r = 0; r < i.length; r++) {
                let s = i[r];
                if ((t && "primary" !== t && (s = s[t]), e === s.start || (e > s.start && e < s.end))) return r;
            }
        return -1;
    }
    findJumpRestrictedIndex(e, t) {
        let i = this.items;
        if (i)
            for (let r = e; r <= t && i[r]; r++) {
                let e = i[r].event;
                if (null != e && e.restrictions.jump && !e.appendInPlace) return r;
            }
        return -1;
    }
    findEventIndex(e) {
        let t = this.items;
        if (t)
            for (let r = t.length; r--; ) {
                var i;
                if ((null == (i = t[r].event) ? void 0 : i.identifier) === e) return r;
            }
        return -1;
    }
    findAssetIndex(e, t) {
        let i = e.assetList,
            r = i.length;
        if (r > 1)
            for (let e = 0; e < r; e++) {
                let s = i[e];
                if (!s.error) {
                    let i = s.timelineStart;
                    if (t === i || (t > i && (t < i + (s.duration || 0) || e === r - 1))) return e;
                }
            }
        return 0;
    }
    get assetIdAtEnd() {
        var e;
        let t = null == (e = this.items) || null == (e = e[this.length - 1]) ? void 0 : e.event;
        if (t) {
            let e = t.assetList,
                i = e[e.length - 1];
            if (i) return i.identifier;
        }
        return null;
    }
    parseInterstitialDateRanges(e, t) {
        let i = e.main.details,
            { dateRanges: r } = i,
            s = this.events,
            a = this.parseDateRanges(r, { url: i.url }, t),
            n = Object.keys(r),
            l = s ? s.filter((e) => !n.includes(e.identifier)) : [];
        a.length &&
            a.sort((e, t) => {
                let i = e.cue.pre,
                    r = e.cue.post,
                    s = t.cue.pre,
                    a = t.cue.post;
                if (i && !s) return -1;
                if ((s && !i) || (r && !a)) return 1;
                if (a && !r) return -1;
                if (!i && !s && !r && !a) {
                    let i = e.startTime,
                        r = t.startTime;
                    if (i !== r) return i - r;
                }
                return e.dateRange.tagOrder - t.dateRange.tagOrder;
            }),
            (this.events = a),
            l.forEach((e) => {
                this.removeEvent(e);
            }),
            this.updateSchedule(e, l);
    }
    updateSchedule(e, t = [], i = !1) {
        let r = this.events || [];
        if (r.length || t.length || this.length < 2) {
            let s = this.items,
                a = this.parseSchedule(r, e);
            (i ||
                t.length ||
                (null == s ? void 0 : s.length) !== a.length ||
                a.some(
                    (e, t) =>
                        Math.abs(e.playout.start - s[t].playout.start) > 0.005 ||
                        Math.abs(e.playout.end - s[t].playout.end) > 0.005,
                )) &&
                ((this.items = a), this.onScheduleUpdate(t, s));
        }
    }
    parseDateRanges(e, t, i) {
        let r = [],
            s = Object.keys(e);
        for (let a = 0; a < s.length; a++) {
            let n = s[a],
                l = e[n];
            if (l.isInterstitial) {
                let e = this.eventMap[n];
                e ? e.setDateRange(l) : ((e = new sG(l, t)), (this.eventMap[n] = e), !1 === i && (e.appendInPlace = i)),
                    r.push(e);
            }
        }
        return r;
    }
    parseSchedule(e, t) {
        let i = [],
            r = t.main.details,
            s = r.live ? 1 / 0 : r.edge,
            a = 0;
        if ((e = e.filter((e) => !e.error && !(e.cue.once && e.hasPlayed))).length) {
            this.resolveOffsets(e, t);
            let r = 0,
                l = 0;
            if (
                (e.forEach((t, n) => {
                    let o = t.cue.pre,
                        h = t.cue.post,
                        d = e[n - 1] || null,
                        u = t.appendInPlace,
                        f = h ? s : t.startOffset,
                        c = t.duration,
                        g = t.timelineOccupancy === sN.Range ? c : 0,
                        m = t.resumptionOffset,
                        p = (null == d ? void 0 : d.startTime) === f,
                        y = f + t.cumulativeDuration,
                        v = u ? y + c : f + m;
                    if (o || (!h && f <= 0)) {
                        let e = l;
                        (l += g), (t.timelineStart = y);
                        let r = a;
                        (a += c),
                            i.push({
                                event: t,
                                start: y,
                                end: v,
                                playout: { start: r, end: a },
                                integrated: { start: e, end: l },
                            });
                    } else {
                        if (!(f <= s)) return;
                        if (!p) {
                            let s = f - r;
                            if (s > 0.033) {
                                let o = r,
                                    h = l;
                                l += s;
                                let d = a;
                                a += s;
                                let u = {
                                    previousEvent: e[n - 1] || null,
                                    nextEvent: t,
                                    start: o,
                                    end: o + s,
                                    playout: { start: d, end: a },
                                    integrated: { start: h, end: l },
                                };
                                i.push(u);
                            } else s > 0 && d && ((d.cumulativeDuration += s), (i[i.length - 1].end = f));
                        }
                        h && (v = y), (t.timelineStart = y);
                        let o = l;
                        l += g;
                        let u = a;
                        (a += c),
                            i.push({
                                event: t,
                                start: y,
                                end: v,
                                playout: { start: u, end: a },
                                integrated: { start: o, end: l },
                            });
                    }
                    let E = t.resumeTime;
                    r = h || E > s ? s : E;
                }),
                r < s)
            ) {
                var n;
                let e = r,
                    t = l,
                    o = s - r;
                l += o;
                let h = a;
                (a += o),
                    i.push({
                        previousEvent: (null == (n = i[i.length - 1]) ? void 0 : n.event) || null,
                        nextEvent: null,
                        start: r,
                        end: e + o,
                        playout: { start: h, end: a },
                        integrated: { start: t, end: l },
                    });
            }
            this.setDurations(s, a, l);
        } else
            i.push({
                previousEvent: null,
                nextEvent: null,
                start: 0,
                end: s,
                playout: { start: 0, end: s },
                integrated: { start: 0, end: s },
            }),
                this.setDurations(s, s, s);
        return i;
    }
    setDurations(e, t, i) {
        this.durations = { primary: e, playout: t, integrated: i };
    }
    resolveOffsets(e, t) {
        let i = t.main.details,
            r = i.live ? 1 / 0 : i.edge,
            a = 0,
            n = -1;
        e.forEach((l, o) => {
            let h = l.cue.pre,
                d = l.cue.post,
                u = h ? 0 : d ? r : l.startTime;
            this.updateAssetDurations(l),
                n === u ? (l.cumulativeDuration = a) : ((a = 0), (n = u)),
                !d &&
                    l.snapOptions.in &&
                    (l.resumeAnchor = e3(null, i.fragments, l.startOffset + l.resumptionOffset, 0, 0) || void 0),
                l.appendInPlace &&
                    !l.appendInPlaceStarted &&
                    (this.primaryCanResumeInPlaceAt(l, t) || (l.appendInPlace = !1)),
                !l.appendInPlace &&
                    o + 1 < e.length &&
                    e[o + 1].startTime - e[o].resumeTime < 0.033 &&
                    ((e[o + 1].appendInPlace = !1),
                    e[o + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${l}`));
            let f = s(l.resumeOffset) ? l.resumeOffset : l.duration;
            a += f;
        });
    }
    primaryCanResumeInPlaceAt(e, t) {
        let i = e.resumeTime,
            r = e.startTime + e.resumptionOffset;
        return Math.abs(i - r) > 0.025
            ? (this.log(`"${e.identifier}" resumption ${i} not aligned with estimated timeline end ${r}`), !1)
            : !Object.keys(t).some((r) => {
                  let s = t[r].details,
                      a = s.edge;
                  if (i >= a) return this.log(`"${e.identifier}" resumption ${i} past ${r} playlist end ${a}`), !1;
                  let n = e3(null, s.fragments, i);
                  if (!n)
                      return (
                          this.log(
                              `"${e.identifier}" resumption ${i} does not align with any fragments in ${r} playlist (${s.fragStart}-${s.fragmentEnd})`,
                          ),
                          !0
                      );
                  let l = 0.175 * ("audio" === r);
                  return (
                      !(Math.abs(n.start - i) < 0.025 + l || Math.abs(n.end - i) < 0.025 + l) &&
                      (this.log(
                          `"${e.identifier}" resumption ${i} not aligned with ${r} fragment bounds (${n.start}-${n.end} sn: ${n.sn} cc: ${n.cc})`,
                      ),
                      !0)
                  );
              });
    }
    updateAssetDurations(e) {
        if (!e.assetListLoaded) return;
        let t = e.timelineStart,
            i = 0,
            r = !1,
            s = !1;
        for (let a = 0; a < e.assetList.length; a++) {
            let n = e.assetList[a],
                l = t + i;
            (n.startOffset = i),
                (n.timelineStart = l),
                r || (r = null === n.duration),
                s || (s = !!n.error),
                (i += n.error ? 0 : n.duration || 0);
        }
        r && !s ? (e.duration = Math.max(i, e.duration)) : (e.duration = i);
    }
    removeEvent(e) {
        e.reset(), delete this.eventMap[e.identifier];
    }
}
function sq(e) {
    return `[${e.event ? '"' + e.event.identifier + '"' : "primary"}: ${e.start.toFixed(2)}-${e.end.toFixed(2)}]`;
}
class sX {
    constructor(e) {
        (this.hls = void 0), (this.hls = e);
    }
    destroy() {
        this.hls = null;
    }
    loadAssetList(e, t) {
        let i,
            r = e.assetListUrl;
        try {
            i = sH(r, this.hls.sessionId, e.baseUrl);
        } catch (i) {
            let t = this.assignAssetListError(e, o.ASSET_LIST_LOAD_ERROR, i, r);
            this.hls.trigger(h.ERROR, t);
            return;
        }
        t && "data:" !== i.protocol && i.searchParams.set("_HLS_start_offset", "" + t);
        let s = this.hls.config,
            a = new s.loader(s),
            n = { responseType: "json", url: i.href },
            l = s.interstitialAssetListLoadPolicy.default,
            d = { loadPolicy: l, timeout: l.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
        return (
            a.load(n, d, {
                onSuccess: (t, i, r, s) => {
                    let a = t.data;
                    if (!Array.isArray(null == a ? void 0 : a.ASSETS)) {
                        let t = this.assignAssetListError(
                            e,
                            o.ASSET_LIST_PARSING_ERROR,
                            Error("Invalid interstitial asset list"),
                            r.url,
                            i,
                            s,
                        );
                        this.hls.trigger(h.ERROR, t);
                        return;
                    }
                    (e.assetListResponse = a),
                        this.hls.trigger(h.ASSET_LIST_LOADED, { event: e, assetListResponse: a, networkDetails: s });
                },
                onError: (t, i, r, s) => {
                    let a = this.assignAssetListError(
                        e,
                        o.ASSET_LIST_LOAD_ERROR,
                        Error(`Error loading X-ASSET-LIST: HTTP status ${t.code} ${t.text} (${i.url})`),
                        i.url,
                        s,
                        r,
                    );
                    this.hls.trigger(h.ERROR, a);
                },
                onTimeout: (t, i, r) => {
                    let s = this.assignAssetListError(
                        e,
                        o.ASSET_LIST_LOAD_TIMEOUT,
                        Error(`Timeout loading X-ASSET-LIST (${i.url})`),
                        i.url,
                        t,
                        r,
                    );
                    this.hls.trigger(h.ERROR, s);
                },
            }),
            this.hls.trigger(h.ASSET_LIST_LOADING, { event: e }),
            a
        );
    }
    assignAssetListError(e, t, i, r, s, a) {
        return (
            (e.error = i),
            {
                type: l.NETWORK_ERROR,
                details: t,
                fatal: !1,
                interstitial: e,
                url: r,
                error: i,
                networkDetails: a,
                stats: s,
            }
        );
    }
}
function sQ(e) {
    null == e || e.play().catch(() => {});
}
function sz(e, t) {
    return `[${e}] Advancing timeline position to ${t}`;
}
class sZ {
    constructor(e) {
        this.buffered = void 0;
        const t = (t, i, r) => {
            if ((i >>>= 0) > r - 1)
                throw new DOMException(
                    `Failed to execute '${t}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`,
                );
            return e[i][t];
        };
        this.buffered = {
            get length() {
                return e.length;
            },
            end: (i) => t("end", i, e.length),
            start: (i) => t("start", i, e.length),
        };
    }
}
let sJ = {
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
    s0 = (e) => String.fromCharCode(sJ[e] || e),
    s1 = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
    s2 = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
    s3 = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
    s4 = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
    s5 = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class s8 {
    constructor() {
        (this.time = null), (this.verboseLevel = 0);
    }
    log(e, t) {
        if (this.verboseLevel >= e) {
            let i = "function" == typeof t ? t() : t;
            G.log(`${this.time} [${e}] ${i}`);
        }
    }
}
let s6 = function (e) {
    let t = [];
    for (let i = 0; i < e.length; i++) t.push(e[i].toString(16));
    return t;
};
class s9 {
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
        for (let i = 0; i < t.length; i++) {
            let r = t[i];
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
class s7 {
    constructor() {
        (this.uchar = " "), (this.penState = new s9());
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
class ae {
    constructor(e) {
        (this.chars = []),
            (this.pos = 0),
            (this.currPenState = new s9()),
            (this.cueStartTime = null),
            (this.logger = void 0);
        for (let e = 0; e < 100; e++) this.chars.push(new s7());
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
        let t = s0(e);
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
        for (let i = 0; i < 100; i++) {
            let r = this.chars[i].uchar;
            " " !== r && (t = !1), e.push(r);
        }
        return t ? "" : e.join("");
    }
    setPenStyles(e) {
        this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
    }
}
class at {
    constructor(e) {
        (this.rows = []),
            (this.currRow = 14),
            (this.nrRollUpRows = null),
            (this.lastOutputScreen = null),
            (this.logger = void 0);
        for (let t = 0; t < 15; t++) this.rows.push(new ae(e));
        this.logger = e;
    }
    reset() {
        for (let e = 0; e < 15; e++) this.rows[e].clear();
        this.currRow = 14;
    }
    equals(e) {
        let t = !0;
        for (let i = 0; i < 15; i++)
            if (!this.rows[i].equals(e.rows[i])) {
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
        this.logger.log(2, () => "pacData = " + ej(e));
        let t = e.row - 1;
        if (
            (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
            this.nrRollUpRows && this.currRow !== t)
        ) {
            for (let e = 0; e < 15; e++) this.rows[e].clear();
            let e = this.currRow + 1 - this.nrRollUpRows,
                i = this.lastOutputScreen;
            if (i) {
                let r = i.rows[e].cueStartTime,
                    s = this.logger.time;
                if (null !== r && null !== s && r < s)
                    for (let r = 0; r < this.nrRollUpRows; r++)
                        this.rows[t - this.nrRollUpRows + r + 1].copy(i.rows[e + r]);
            }
        }
        this.currRow = t;
        let i = this.rows[this.currRow];
        if (null !== e.indent) {
            let t = Math.max(e.indent - 1, 0);
            i.setCursor(e.indent), (e.color = i.chars[t].penState.foreground);
        }
        let r = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };
        this.setPen(r);
    }
    setBkgData(e) {
        this.logger.log(2, () => "bkgData = " + ej(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
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
            i = "",
            r = -1;
        for (let i = 0; i < 15; i++) {
            let s = this.rows[i].getTextString();
            s && ((r = i + 1), e ? t.push("Row " + r + ": '" + s + "'") : t.push(s.trim()));
        }
        return t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")), i;
    }
    getTextAndFormat() {
        return this.rows;
    }
}
class ai {
    constructor(e, t, i) {
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
            (this.displayedMemory = new at(i)),
            (this.nonDisplayedMemory = new at(i)),
            (this.lastOutputScreen = new at(i)),
            (this.currRollUpRow = this.displayedMemory.rows[14]),
            (this.writeScreen = this.displayedMemory),
            (this.mode = null),
            (this.cueStartTime = null),
            (this.logger = i);
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
            this.logger.log(2, "MIDROW: " + ej(t)),
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
class ar {
    constructor(e, t, i) {
        (this.channels = void 0),
            (this.currentChannel = 0),
            (this.cmdHistory = { a: null, b: null }),
            (this.logger = void 0);
        const r = (this.logger = new s8());
        this.channels = [null, new ai(e, t, r), new ai(e + 1, i, r)];
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
            var i, r, s, a, n, l, o, h;
            let d = 127 & t[e],
                u = 127 & t[e + 1],
                f = !1,
                c = null;
            if (0 === d && 0 === u) continue;
            this.logger.log(3, () => "[" + s6([t[e], t[e + 1]]) + "] -> (" + s6([d, u]) + ")");
            let g = this.cmdHistory;
            if (d >= 16 && d <= 31) {
                if (((i = d), (r = u), (s = g).a === i && s.b === r)) {
                    ((a = g).a = null),
                        (a.b = null),
                        this.logger.log(3, () => "Repeated command (" + s6([d, u]) + ") is dropped");
                    continue;
                }
                (n = d),
                    (l = u),
                    ((o = this.cmdHistory).a = n),
                    (o.b = l),
                    (f = this.parseCmd(d, u)) || (f = this.parseMidrow(d, u)),
                    f || (f = this.parsePAC(d, u)),
                    f || (f = this.parseBackgroundAttributes(d, u));
            } else {
                ((h = g).a = null), (h.b = null);
            }
            if (!f && (c = this.parseChars(d, u))) {
                let e = this.currentChannel;
                e && e > 0 ? this.channels[e].insertChars(c) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
            }
            f ||
                c ||
                this.logger.log(
                    2,
                    () => "Couldn't parse cleaned data " + s6([d, u]) + " orig: " + s6([t[e], t[e + 1]]),
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
        let i = 20 === e || 21 === e || 23 === e ? 1 : 2,
            r = this.channels[i];
        return (
            20 === e || 21 === e || 28 === e || 29 === e
                ? 32 === t
                    ? r.ccRCL()
                    : 33 === t
                      ? r.ccBS()
                      : 34 === t
                        ? r.ccAOF()
                        : 35 === t
                          ? r.ccAON()
                          : 36 === t
                            ? r.ccDER()
                            : 37 === t
                              ? r.ccRU(2)
                              : 38 === t
                                ? r.ccRU(3)
                                : 39 === t
                                  ? r.ccRU(4)
                                  : 40 === t
                                    ? r.ccFON()
                                    : 41 === t
                                      ? r.ccRDC()
                                      : 42 === t
                                        ? r.ccTR()
                                        : 43 === t
                                          ? r.ccRTD()
                                          : 44 === t
                                            ? r.ccEDM()
                                            : 45 === t
                                              ? r.ccCR()
                                              : 46 === t
                                                ? r.ccENM()
                                                : 47 === t && r.ccEOC()
                : r.ccTO(t - 32),
            (this.currentChannel = i),
            !0
        );
    }
    parseMidrow(e, t) {
        let i = 0;
        if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
            if ((i = 17 === e ? 1 : 2) !== this.currentChannel)
                return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
            let r = this.channels[i];
            return !!r && (r.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + s6([e, t]) + ")"), !0);
        }
        return !1;
    }
    parsePAC(e, t) {
        let i,
            r = ((e >= 17 && e <= 23) || (e >= 25 && e <= 31)) && t >= 64 && t <= 127,
            s = (16 === e || 24 === e) && t >= 64 && t <= 95;
        if (!(r || s)) return !1;
        let a = e <= 23 ? 1 : 2;
        i = t >= 64 && t <= 95 ? (1 === a ? s1[e] : s3[e]) : 1 === a ? s2[e] : s4[e];
        let n = this.channels[a];
        return !!n && (n.setPAC(this.interpretPAC(i, t)), (this.currentChannel = a), !0);
    }
    interpretPAC(e, t) {
        let i,
            r = { color: null, italics: !1, indent: null, underline: !1, row: e };
        return (
            (r.underline = (1 & (i = t > 95 ? t - 96 : t - 64)) == 1),
            i <= 13
                ? (r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)])
                : i <= 15
                  ? ((r.italics = !0), (r.color = "white"))
                  : (r.indent = 4 * Math.floor((i - 16) / 2)),
            r
        );
    }
    parseChars(e, t) {
        let i,
            r = null,
            s = null;
        if ((e >= 25 ? ((i = 2), (s = e - 8)) : ((i = 1), (s = e)), s >= 17 && s <= 19)) {
            let e;
            (e = 17 === s ? t + 80 : 18 === s ? t + 112 : t + 144),
                this.logger.log(2, () => "Special char '" + s0(e) + "' in channel " + i),
                (r = [e]);
        } else e >= 32 && e <= 127 && (r = 0 === t ? [e] : [e, t]);
        return r && this.logger.log(3, () => "Char codes =  " + s6(r).join(",")), r;
    }
    parseBackgroundAttributes(e, t) {
        if (!(((16 === e || 24 === e) && t >= 32 && t <= 47) || ((23 === e || 31 === e) && t >= 45 && t <= 47)))
            return !1;
        let i = {};
        return (
            16 === e || 24 === e
                ? ((i.background = s5[Math.floor((t - 32) / 2)]), t % 2 == 1 && (i.background = i.background + "_semi"))
                : 45 === t
                  ? (i.background = "transparent")
                  : ((i.foreground = "black"), 47 === t && (i.underline = !0)),
            this.channels[e <= 23 ? 1 : 2].setBkgData(i),
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
            let i = this.channels[t];
            i && i.cueSplitAtTime(e);
        }
    }
}
var as = (function () {
    if (null != tN && tN.VTTCue) return self.VTTCue;
    let e = ["", "lr", "rl"],
        t = ["start", "middle", "end", "left", "right"];
    function i(e, t) {
        if ("string" != typeof t || !Array.isArray(e)) return !1;
        let i = t.toLowerCase();
        return !!~e.indexOf(i) && i;
    }
    function r(e) {
        let t = 1;
        for (; t < arguments.length; t++) {
            let i = arguments[t];
            for (let t in i) e[t] = i[t];
        }
        return e;
    }
    function s(s, a, n) {
        let l = { enumerable: !0 };
        this.hasBeenReset = !1;
        let o = "",
            h = !1,
            d = s,
            u = a,
            f = n,
            c = null,
            g = "",
            m = !0,
            p = "auto",
            y = "start",
            v = 50,
            E = "middle",
            T = 50,
            S = "middle";
        Object.defineProperty(
            this,
            "id",
            r({}, l, {
                get: function () {
                    return o;
                },
                set: function (e) {
                    o = "" + e;
                },
            }),
        ),
            Object.defineProperty(
                this,
                "pauseOnExit",
                r({}, l, {
                    get: function () {
                        return h;
                    },
                    set: function (e) {
                        h = !!e;
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "startTime",
                r({}, l, {
                    get: function () {
                        return d;
                    },
                    set: function (e) {
                        if ("number" != typeof e) throw TypeError("Start time must be set to a number.");
                        (d = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "endTime",
                r({}, l, {
                    get: function () {
                        return u;
                    },
                    set: function (e) {
                        if ("number" != typeof e) throw TypeError("End time must be set to a number.");
                        (u = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "text",
                r({}, l, {
                    get: function () {
                        return f;
                    },
                    set: function (e) {
                        (f = "" + e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "region",
                r({}, l, {
                    get: function () {
                        return c;
                    },
                    set: function (e) {
                        (c = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "vertical",
                r({}, l, {
                    get: function () {
                        return g;
                    },
                    set: function (t) {
                        let r = i(e, t);
                        if (!1 === r) throw SyntaxError("An invalid or illegal string was specified.");
                        (g = r), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "snapToLines",
                r({}, l, {
                    get: function () {
                        return m;
                    },
                    set: function (e) {
                        (m = !!e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "line",
                r({}, l, {
                    get: function () {
                        return p;
                    },
                    set: function (e) {
                        if ("number" != typeof e && "auto" !== e)
                            throw SyntaxError("An invalid number or illegal string was specified.");
                        (p = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "lineAlign",
                r({}, l, {
                    get: function () {
                        return y;
                    },
                    set: function (e) {
                        let r = i(t, e);
                        if (!r) throw SyntaxError("An invalid or illegal string was specified.");
                        (y = r), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "position",
                r({}, l, {
                    get: function () {
                        return v;
                    },
                    set: function (e) {
                        if (e < 0 || e > 100) throw Error("Position must be between 0 and 100.");
                        (v = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "positionAlign",
                r({}, l, {
                    get: function () {
                        return E;
                    },
                    set: function (e) {
                        let r = i(t, e);
                        if (!r) throw SyntaxError("An invalid or illegal string was specified.");
                        (E = r), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "size",
                r({}, l, {
                    get: function () {
                        return T;
                    },
                    set: function (e) {
                        if (e < 0 || e > 100) throw Error("Size must be between 0 and 100.");
                        (T = e), (this.hasBeenReset = !0);
                    },
                }),
            ),
            Object.defineProperty(
                this,
                "align",
                r({}, l, {
                    get: function () {
                        return S;
                    },
                    set: function (e) {
                        let r = i(t, e);
                        if (!r) throw SyntaxError("An invalid or illegal string was specified.");
                        (S = r), (this.hasBeenReset = !0);
                    },
                }),
            ),
            (this.displayState = void 0);
    }
    return (
        (s.prototype.getCueAsHTML = function () {
            return self.WebVTT.convertCueToDOMTree(self, this.text);
        }),
        s
    );
})();
class aa {
    decode(e, t) {
        if (!e) return "";
        if ("string" != typeof e) throw Error("Error - expected string data.");
        return decodeURIComponent(encodeURIComponent(e));
    }
}
function an(e) {
    function t(e, t, i, r) {
        return (0 | e) * 3600 + (0 | t) * 60 + (0 | i) + parseFloat(r || 0);
    }
    let i = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
    return i ? (parseFloat(i[2]) > 59 ? t(i[2], i[3], 0, i[4]) : t(i[1], i[2], i[3], i[4])) : null;
}
class al {
    constructor() {
        this.values = Object.create(null);
    }
    set(e, t) {
        this.get(e) || "" === t || (this.values[e] = t);
    }
    get(e, t, i) {
        return i ? (this.has(e) ? this.values[e] : t[i]) : this.has(e) ? this.values[e] : t;
    }
    has(e) {
        return e in this.values;
    }
    alt(e, t, i) {
        for (let r = 0; r < i.length; ++r)
            if (t === i[r]) {
                this.set(e, t);
                break;
            }
    }
    integer(e, t) {
        /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
    }
    percent(e, t) {
        if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
            let i = parseFloat(t);
            if (i >= 0 && i <= 100) return this.set(e, i), !0;
        }
        return !1;
    }
}
function ao(e, t, i, r) {
    let s = r ? e.split(r) : [e];
    for (let e in s) {
        if ("string" != typeof s[e]) continue;
        let r = s[e].split(i);
        if (2 === r.length) t(r[0], r[1]);
    }
}
let ah = new as(0, 0, ""),
    ad = "middle" === ah.align ? "middle" : "center";
function au(e) {
    return e.replace(/<br(?: \/)?>/gi, "\n");
}
class af {
    constructor() {
        (this.state = "INITIAL"),
            (this.buffer = ""),
            (this.decoder = new aa()),
            (this.regionList = []),
            (this.cue = null),
            (this.oncue = void 0),
            (this.onparsingerror = void 0),
            (this.onflush = void 0);
    }
    parse(e) {
        let t = this;
        function i() {
            let e = t.buffer,
                i = 0;
            for (e = au(e); i < e.length && "\r" !== e[i] && "\n" !== e[i]; ) ++i;
            let r = e.slice(0, i);
            return "\r" === e[i] && ++i, "\n" === e[i] && ++i, (t.buffer = e.slice(i)), r;
        }
        e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
        try {
            let e = "";
            if ("INITIAL" === t.state) {
                if (!/\r\n|\n/.test(t.buffer)) return this;
                let r = (e = i()).match(/^(\xef\xbb\xbf)?WEBVTT([ \t].*)?$/);
                if (!(null != r && r[0])) throw Error("Malformed WebVTT signature.");
                t.state = "HEADER";
            }
            let s = !1;
            for (; t.buffer && /\r\n|\n/.test(t.buffer); )
                switch ((s ? (s = !1) : (e = i()), t.state)) {
                    case "HEADER":
                        if (/:/.test(e)) {
                            var r;
                            (r = e), ao(r, function (e, t) {}, /:/);
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
                        if (((t.cue = new as(0, 0, "")), (t.state = "CUE"), -1 === e.indexOf("--\x3e"))) {
                            t.cue.id = e;
                            continue;
                        }
                    case "CUE":
                        if (!t.cue) {
                            t.state = "BADCUE";
                            continue;
                        }
                        try {
                            !(function (e, t, i) {
                                var r;
                                let s,
                                    a,
                                    n,
                                    l = e;
                                function o() {
                                    let t = an(e);
                                    if (null === t) throw Error("Malformed timestamp: " + l);
                                    return (e = e.replace(/^[^\sa-zA-Z-]+/, "")), t;
                                }
                                function h() {
                                    e = e.replace(/^\s+/, "");
                                }
                                if ((h(), (t.startTime = o()), h(), "--\x3e" !== e.slice(0, 3)))
                                    throw Error(
                                        "Malformed time stamp (time stamps must be separated by '--\x3e'): " + l,
                                    );
                                (e = e.slice(3)),
                                    h(),
                                    (t.endTime = o()),
                                    h(),
                                    (r = e),
                                    (s = new al()),
                                    ao(
                                        r,
                                        function (e, t) {
                                            let r;
                                            switch (e) {
                                                case "region":
                                                    for (let r = i.length - 1; r >= 0; r--)
                                                        if (i[r].id === t) {
                                                            s.set(e, i[r].region);
                                                            break;
                                                        }
                                                    break;
                                                case "vertical":
                                                    s.alt(e, t, ["rl", "lr"]);
                                                    break;
                                                case "line":
                                                    (r = t.split(",")),
                                                        s.integer(e, r[0]),
                                                        s.percent(e, r[0]) && s.set("snapToLines", !1),
                                                        s.alt(e, r[0], ["auto"]),
                                                        2 === r.length &&
                                                            s.alt("lineAlign", r[1], ["start", ad, "end"]);
                                                    break;
                                                case "position":
                                                    (r = t.split(",")),
                                                        s.percent(e, r[0]),
                                                        2 === r.length &&
                                                            s.alt("positionAlign", r[1], [
                                                                "start",
                                                                ad,
                                                                "end",
                                                                "line-left",
                                                                "line-right",
                                                                "auto",
                                                            ]);
                                                    break;
                                                case "size":
                                                    s.percent(e, t);
                                                    break;
                                                case "align":
                                                    s.alt(e, t, ["start", ad, "end", "left", "right"]);
                                            }
                                        },
                                        /:/,
                                        /\s/,
                                    ),
                                    (t.region = s.get("region", null)),
                                    (t.vertical = s.get("vertical", "")),
                                    "auto" === (a = s.get("line", "auto")) && -1 === ah.line && (a = -1),
                                    (t.line = a),
                                    (t.lineAlign = s.get("lineAlign", "start")),
                                    (t.snapToLines = s.get("snapToLines", !0)),
                                    (t.size = s.get("size", 100)),
                                    (t.align = s.get("align", ad)),
                                    "auto" === (n = s.get("position", "auto")) &&
                                        50 === ah.position &&
                                        (n =
                                            "start" === t.align || "left" === t.align
                                                ? 0
                                                : "end" === t.align || "right" === t.align
                                                  ? 100
                                                  : 50),
                                    (t.position = n);
                            })(e, t.cue, t.regionList);
                        } catch (e) {
                            (t.cue = null), (t.state = "BADCUE");
                            continue;
                        }
                        t.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        {
                            let i = -1 !== e.indexOf("--\x3e");
                            if (!e || (i && (s = !0))) {
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
let ac = /\r\n|\n\r|\n|\r/g,
    ag = function (e, t, i = 0) {
        return e.slice(i, i + t.length) === t;
    },
    am = function (e) {
        let t = parseInt(e.slice(-3)),
            i = parseInt(e.slice(-6, -4)),
            r = parseInt(e.slice(-9, -7)),
            a = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
        if (!s(t) || !s(i) || !s(r) || !s(a)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
        return (t += 1e3 * i), (t += 6e4 * r), (t += 36e5 * a);
    };
function ap(e, t, i) {
    return sB(e.toString()) + sB(t.toString()) + sB(i);
}
let ay = function (e, t, i) {
        let r = e[t],
            s = e[r.prevCC];
        if (!s || (!s.new && r.new)) {
            (e.ccOffset = e.presentationOffset = r.start), (r.new = !1);
            return;
        }
        for (; null != (a = s) && a.new; ) {
            var a;
            (e.ccOffset += r.start - s.start), (r.new = !1), (s = e[(r = s).prevCC]);
        }
        e.presentationOffset = i;
    },
    av = "stpp.ttml.im1t",
    aE = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
    aT = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
    aS = { left: "start", center: "center", right: "end", start: "start", end: "end" };
function aA(e, t, i, r) {
    let s = ed(new Uint8Array(e), ["mdat"]);
    if (0 === s.length) return void r(Error("Could not parse IMSC1 mdat"));
    let a = s.map((e) => V(e)),
        n = (function (e, t = 1, i = !1) {
            return rk(e, 1, 1 / t, i);
        })(t.baseTime, t.timescale);
    try {
        a.forEach((e) =>
            i(
                (function (e, t) {
                    let i = new DOMParser().parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
                    if (!i) throw Error("Invalid ttml");
                    let r = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 },
                        s = Object.keys(r).reduce((e, t) => ((e[t] = i.getAttribute(`ttp:${t}`) || r[t]), e), {}),
                        a = "preserve" !== i.getAttribute("xml:space"),
                        n = aR(aL(i, "styling", "style")),
                        l = aR(aL(i, "layout", "region")),
                        o = aL(i, "body", "[begin]");
                    return [].map
                        .call(o, (e) => {
                            var i, r, o;
                            let h,
                                d,
                                u,
                                f = (function e(t, i) {
                                    return [].slice.call(t.childNodes).reduce((t, r, s) => {
                                        var a;
                                        return "br" === r.nodeName && s
                                            ? t + "\n"
                                            : null != (a = r.childNodes) && a.length
                                              ? e(r, i)
                                              : i
                                                ? t + r.textContent.trim().replace(/\s+/g, " ")
                                                : t + r.textContent;
                                    }, "");
                                })(e, a);
                            if (!f || !e.hasAttribute("begin")) return null;
                            let c = ak(e.getAttribute("begin"), s),
                                g = ak(e.getAttribute("dur"), s),
                                m = ak(e.getAttribute("end"), s);
                            if (null === c) throw aI(e);
                            if (null === m) {
                                if (null === g) throw aI(e);
                                m = c + g;
                            }
                            let p = new as(c - t, m - t, f);
                            p.id = ap(p.startTime, p.endTime, p.text);
                            let y =
                                    ((i = l[e.getAttribute("region")]),
                                    (r = n[e.getAttribute("style")]),
                                    (o = n),
                                    (h = "http://www.w3.org/ns/ttml#styling"),
                                    (d = null),
                                    (u = null != i && i.hasAttribute("style") ? i.getAttribute("style") : null) &&
                                        o.hasOwnProperty(u) &&
                                        (d = o[u]),
                                    [
                                        "displayAlign",
                                        "textAlign",
                                        "color",
                                        "backgroundColor",
                                        "fontSize",
                                        "fontFamily",
                                    ].reduce((e, t) => {
                                        let s = ab(r, h, t) || ab(i, h, t) || ab(d, h, t);
                                        return s && (e[t] = s), e;
                                    }, {})),
                                { textAlign: v } = y;
                            if (v) {
                                let e = aS[v];
                                e && (p.lineAlign = e), (p.align = v);
                            }
                            return x(p, y), p;
                        })
                        .filter((e) => null !== e);
                })(e, n),
            ),
        );
    } catch (e) {
        r(e);
    }
}
function aL(e, t, i) {
    let r = e.getElementsByTagName(t)[0];
    return r ? [].slice.call(r.querySelectorAll(i)) : [];
}
function aR(e) {
    return e.reduce((e, t) => {
        let i = t.getAttribute("xml:id");
        return i && (e[i] = t), e;
    }, {});
}
function ab(e, t, i) {
    return e && e.hasAttributeNS(t, i) ? e.getAttributeNS(t, i) : null;
}
function aI(e) {
    return Error(`Could not parse ttml timestamp ${e}`);
}
function ak(e, t) {
    var i, r;
    let s, a;
    if (!e) return null;
    let n = an(e);
    return (
        null === n &&
            (aE.test(e)
                ? ((i = e),
                  (r = t),
                  (a = (0 | (s = aE.exec(i))[4]) + (0 | s[5]) / r.subFrameRate),
                  (n = (0 | s[1]) * 3600 + (0 | s[2]) * 60 + (0 | s[3]) + a / r.frameRate))
                : aT.test(e) &&
                  (n = (function (e, t) {
                      let i = aT.exec(e),
                          r = Number(i[1]);
                      switch (i[2]) {
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
                  })(e, t))),
        n
    );
}
class aD {
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
    newCue(e, t, i) {
        (null === this.startTime || this.startTime > e) && (this.startTime = e),
            (this.endTime = t),
            (this.screen = i),
            this.timelineController.createCaptionsTrack(this.trackName);
    }
    reset() {
        (this.cueRanges = []), (this.startTime = null);
    }
}
function a_(e) {
    return e.characteristics &&
        /transcribes-spoken-dialog/gi.test(e.characteristics) &&
        /describes-music-and-sound/gi.test(e.characteristics)
        ? "captions"
        : "subtitles";
}
function aP(e, t) {
    return !!e && e.kind === a_(t) && rX(t, e);
}
function aC() {
    return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !0 } };
}
let aw = /\s/,
    ax = {
        newCue(e, t, i, r) {
            let s,
                a,
                n,
                l,
                o,
                h = [],
                d = self.VTTCue || self.TextTrackCue;
            for (let f = 0; f < r.rows.length; f++)
                if (((s = r.rows[f]), (n = !0), (l = 0), (o = ""), !s.isEmpty())) {
                    var u;
                    for (let e = 0; e < s.chars.length; e++)
                        aw.test(s.chars[e].uchar) && n ? l++ : ((o += s.chars[e].uchar), (n = !1));
                    (s.cueStartTime = t), t === i && (i += 1e-4), l >= 16 ? l-- : l++;
                    let r = au(o.trim()),
                        c = ap(t, i, r);
                    (null != e && null != (u = e.cues) && u.getCueById(c)) ||
                        (((a = new d(t, i, r)).id = c),
                        (a.line = f + 1),
                        (a.align = "left"),
                        (a.position = 10 + Math.min(80, 10 * Math.floor((8 * l) / 32))),
                        h.push(a));
                }
            return (
                e &&
                    h.length &&
                    (h.sort((e, t) =>
                        "auto" === e.line || "auto" === t.line
                            ? 0
                            : e.line > 8 && t.line > 8
                              ? t.line - e.line
                              : e.line - t.line,
                    ),
                    h.forEach((t) => sO(e, t))),
                h
            );
        },
    },
    aM = /(\d+)-(\d+)\/(\d+)/;
class aO {
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
            (this.fetchSetup = e.fetchSetup || aF),
            (this.controller = new self.AbortController()),
            (this.stats = new X());
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
    load(e, t, i) {
        var r;
        let a,
            n = this.stats;
        if (n.loading.start) throw Error("Loader can only be used once.");
        n.loading.start = self.performance.now();
        let l =
                ((r = e),
                (a = {
                    method: "GET",
                    mode: "cors",
                    credentials: "same-origin",
                    signal: this.controller.signal,
                    headers: new self.Headers(x({}, r.headers)),
                }),
                r.rangeEnd && a.headers.set("Range", "bytes=" + r.rangeStart + "-" + String(r.rangeEnd - 1)),
                a),
            o = "arraybuffer" === e.responseType,
            h = o ? "byteLength" : "length",
            { maxTimeToFirstByteMs: d, maxLoadTimeMs: u } = t.loadPolicy;
        (this.context = e),
            (this.config = t),
            (this.callbacks = i),
            (this.request = this.fetchSetup(e, l)),
            self.clearTimeout(this.requestTimeout),
            (t.timeout = d && s(d) ? d : u),
            (this.requestTimeout = self.setTimeout(() => {
                this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(n, e, this.response));
            }, t.timeout)),
            (rG(this.request) ? this.request.then(self.fetch) : self.fetch(this.request))
                .then((i) => {
                    var r;
                    this.response = this.loader = i;
                    let a = Math.max(self.performance.now(), n.loading.start);
                    if (
                        (self.clearTimeout(this.requestTimeout),
                        (t.timeout = u),
                        (this.requestTimeout = self.setTimeout(
                            () => {
                                this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(n, e, this.response));
                            },
                            u - (a - n.loading.start),
                        )),
                        !i.ok)
                    ) {
                        let { status: e, statusText: t } = i;
                        throw new a$(t || "fetch, bad network response", e, i);
                    }
                    (n.loading.first = a),
                        (n.total =
                            (function (e) {
                                let t = e.get("Content-Range");
                                if (t) {
                                    let e = (function (e) {
                                        let t = aM.exec(e);
                                        if (t) return parseInt(t[2]) - parseInt(t[1]) + 1;
                                    })(t);
                                    if (s(e)) return e;
                                }
                                let i = e.get("Content-Length");
                                if (i) return parseInt(i);
                            })(i.headers) || n.total);
                    let l = null == (r = this.callbacks) ? void 0 : r.onProgress;
                    return l && s(t.highWaterMark)
                        ? this.loadProgressively(i, n, e, t.highWaterMark, l)
                        : o
                          ? i.arrayBuffer()
                          : "json" === e.responseType
                            ? i.json()
                            : i.text();
                })
                .then((i) => {
                    var r, a;
                    let l = this.response;
                    if (!l) throw Error("loader destroyed");
                    self.clearTimeout(this.requestTimeout),
                        (n.loading.end = Math.max(self.performance.now(), n.loading.first));
                    let o = i[h];
                    o && (n.loaded = n.total = o);
                    let d = { url: l.url, data: i, code: l.status },
                        u = null == (r = this.callbacks) ? void 0 : r.onProgress;
                    u && !s(t.highWaterMark) && u(n, e, i, l), null == (a = this.callbacks) || a.onSuccess(d, n, e, l);
                })
                .catch((t) => {
                    var i;
                    if ((self.clearTimeout(this.requestTimeout), n.aborted)) return;
                    let r = (t && t.code) || 0,
                        s = t ? t.message : null;
                    null == (i = this.callbacks) || i.onError({ code: r, text: s }, e, t ? t.details : null, n);
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
    loadProgressively(e, t, i, r = 0, s) {
        let a = new iK(),
            n = e.body.getReader(),
            l = () =>
                n
                    .read()
                    .then((n) => {
                        if (n.done)
                            return a.dataLength && s(t, i, a.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
                        let o = n.value,
                            h = o.length;
                        return (
                            (t.loaded += h),
                            h < r || a.dataLength
                                ? (a.push(o), a.dataLength >= r && s(t, i, a.flush().buffer, e))
                                : s(t, i, o.buffer, e),
                            l()
                        );
                    })
                    .catch(() => Promise.reject());
        return l();
    }
}
function aF(e, t) {
    return new self.Request(e.url, t);
}
class a$ extends Error {
    constructor(e, t, i) {
        super(e), (this.code = void 0), (this.details = void 0), (this.code = t), (this.details = i);
    }
}
let aU = /^age:\s*[\d.]+\s*$/im;
class aB {
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
            (this.stats = new X()),
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
    load(e, t, i) {
        if (this.stats.loading.start) throw Error("Loader can only be used once.");
        (this.stats.loading.start = self.performance.now()),
            (this.context = e),
            (this.config = t),
            (this.callbacks = i),
            this.loadInternal();
    }
    loadInternal() {
        let { config: e, context: t } = this;
        if (!e || !t) return;
        let i = (this.loader = new self.XMLHttpRequest()),
            r = this.stats;
        (r.loading.first = 0), (r.loaded = 0), (r.aborted = !1);
        let s = this.xhrSetup;
        s
            ? Promise.resolve()
                  .then(() => {
                      if (this.loader === i && !this.stats.aborted) return s(i, t.url);
                  })
                  .catch((e) => {
                      if (this.loader === i && !this.stats.aborted) return i.open("GET", t.url, !0), s(i, t.url);
                  })
                  .then(() => {
                      this.loader !== i || this.stats.aborted || this.openAndSendXhr(i, t, e);
                  })
                  .catch((e) => {
                      var s;
                      null == (s = this.callbacks) || s.onError({ code: i.status, text: e.message }, t, i, r);
                  })
            : this.openAndSendXhr(i, t, e);
    }
    openAndSendXhr(e, t, i) {
        e.readyState || e.open("GET", t.url, !0);
        let r = t.headers,
            { maxTimeToFirstByteMs: a, maxLoadTimeMs: n } = i.loadPolicy;
        if (r) for (let t in r) e.setRequestHeader(t, r[t]);
        t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
            (e.onreadystatechange = this.readystatechange.bind(this)),
            (e.onprogress = this.loadprogress.bind(this)),
            (e.responseType = t.responseType),
            self.clearTimeout(this.requestTimeout),
            (i.timeout = a && s(a) ? a : n),
            (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i.timeout)),
            e.send();
    }
    readystatechange() {
        let { context: e, loader: t, stats: i } = this;
        if (!e || !t) return;
        let r = t.readyState,
            s = this.config;
        if (
            !i.aborted &&
            r >= 2 &&
            (0 === i.loading.first &&
                ((i.loading.first = Math.max(self.performance.now(), i.loading.start)),
                s.timeout !== s.loadPolicy.maxLoadTimeMs &&
                    (self.clearTimeout(this.requestTimeout),
                    (s.timeout = s.loadPolicy.maxLoadTimeMs),
                    (this.requestTimeout = self.setTimeout(
                        this.loadtimeout.bind(this),
                        s.loadPolicy.maxLoadTimeMs - (i.loading.first - i.loading.start),
                    )))),
            4 === r)
        ) {
            var a, n, l;
            self.clearTimeout(this.requestTimeout), (t.onreadystatechange = null), (t.onprogress = null);
            let r = t.status,
                o = "text" === t.responseType ? t.responseText : null;
            if (r >= 200 && r < 300) {
                let s = null != o ? o : t.response;
                if (null != s) {
                    (i.loading.end = Math.max(self.performance.now(), i.loading.first)),
                        (i.loaded = i.total = "arraybuffer" === t.responseType ? s.byteLength : s.length),
                        (i.bwEstimate = (8e3 * i.total) / (i.loading.end - i.loading.first));
                    let l = null == (a = this.callbacks) ? void 0 : a.onProgress;
                    l && l(i, e, s, t);
                    let o = { url: t.responseURL, data: s, code: r };
                    null == (n = this.callbacks) || n.onSuccess(o, i, e, t);
                    return;
                }
            }
            let h = s.loadPolicy.errorRetry;
            ti(h, i.retry, !1, { url: e.url, data: void 0, code: r })
                ? this.retry(h)
                : (G.error(`${r} while loading ${e.url}`),
                  null == (l = this.callbacks) || l.onError({ code: r, text: t.statusText }, e, t, i));
        }
    }
    loadtimeout() {
        if (!this.config) return;
        let e = this.config.loadPolicy.timeoutRetry;
        if (ti(e, this.stats.retry, !0)) this.retry(e);
        else {
            var t;
            G.warn(`timeout while loading ${null == ((t = this.context)) ? void 0 : t.url}`);
            let e = this.callbacks;
            e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader));
        }
    }
    retry(e) {
        let { context: t, stats: i } = this;
        (this.retryDelay = te(e, i.retry)),
            i.retry++,
            G.warn(
                `${status ? "HTTP Status " + status : "Timeout"} while loading ${null == t ? void 0 : t.url}, retrying ${i.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`,
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
        if (this.loader && aU.test(this.loader.getAllResponseHeaders())) {
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
let aN = O(
    O(
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
            loader: aB,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: class extends F {
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
                            let i,
                                { fragCurrent: r, partCurrent: a, hls: n } = this,
                                { autoLevelEnabled: l, media: o } = n;
                            if (!r || !o) return;
                            let d = performance.now(),
                                u = a ? a.stats : r.stats,
                                f = a ? a.duration : r.duration,
                                c = d - u.loading.start,
                                g = n.minAutoLevel,
                                m = r.level,
                                p = this._nextAutoLevel;
                            if (u.aborted || (u.loaded && u.loaded === u.total) || m <= g) {
                                this.clearTimer(), (this._nextAutoLevel = -1);
                                return;
                            }
                            if (!l) return;
                            let y = p > -1 && p !== m,
                                v = !!e || y;
                            if (!v && (o.paused || !o.playbackRate || !o.readyState)) return;
                            let E = n.mainForwardBufferInfo;
                            if (!v && null === E) return;
                            let T = this.bwEstimator.getEstimateTTFB(),
                                S = Math.abs(o.playbackRate);
                            if (c <= Math.max(T, (f / (2 * S)) * 1e3)) return;
                            let A = E ? E.len / S : 0,
                                L = u.loading.first ? u.loading.first - u.loading.start : -1,
                                R = u.loaded && L > -1,
                                b = this.getBwEstimate(),
                                I = n.levels,
                                k = I[m],
                                D = Math.max(u.loaded, Math.round((f * (r.bitrate || k.averageBitrate)) / 8)),
                                _ = R ? c - L : c;
                            _ < 1 && R && (_ = Math.min(c, (8 * u.loaded) / b));
                            let P = R ? (1e3 * u.loaded) / _ : 0,
                                C = T / 1e3,
                                w = P ? (D - u.loaded) / P : (8 * D) / b + C;
                            if (w <= A) return;
                            let x = P ? 8 * P : b,
                                M =
                                    (null == (t = (null == e ? void 0 : e.details) || this.hls.latestLevelDetails)
                                        ? void 0
                                        : t.live) === !0,
                                O = this.hls.config.abrBandWidthUpFactor,
                                F = 1 / 0;
                            for (i = m - 1; i > g; i--) {
                                let e = I[i].maxBitrate,
                                    t = !I[i].details || M;
                                if ((F = this.getTimeToLoadFrag(C, x, f * e, t)) < Math.min(A, f + C)) break;
                            }
                            if (F >= w || F > 10 * f) return;
                            R ? this.bwEstimator.sample(c - Math.min(T, L), u.loaded) : this.bwEstimator.sampleTTFB(c);
                            let $ = I[i].maxBitrate;
                            this.getBwEstimate() * O > $ && this.resetEstimator($);
                            let U = this.findBestLevel($, g, i, 0, A, 1, 1);
                            U > -1 && (i = U),
                                this.warn(`Fragment ${r.sn}${a ? " part " + a.index : ""} of level ${m} is loading too slowly;
      Fragment duration: ${r.duration.toFixed(3)}
      Time to underbuffer: ${A.toFixed(3)} s
      Estimated load time for current fragment: ${w.toFixed(3)} s
      Estimated load time for down switch fragment: ${F.toFixed(3)} s
      TTFB estimate: ${0 | L} ms
      Current BW estimate: ${s(b) ? 0 | b : "Unknown"} bps
      New BW estimate: ${0 | this.getBwEstimate()} bps
      Switching to level ${i} @ ${0 | $} bps`),
                                (n.nextLoadLevel = n.nextAutoLevel = i),
                                this.clearTimer();
                            let B = () => {
                                if ((this.clearTimer(), this.fragCurrent === r && this.hls.loadLevel === i && i > 0)) {
                                    let e = this.getStarvationDelay();
                                    if (
                                        (this.warn(`Aborting inflight request ${i > 0 ? "and switching down" : ""}
      Fragment duration: ${r.duration.toFixed(3)} s
      Time to underbuffer: ${e.toFixed(3)} s`),
                                        r.abortRequests(),
                                        (this.fragCurrent = this.partCurrent = null),
                                        i > g)
                                    ) {
                                        let t = this.findBestLevel(this.hls.levels[g].bitrate, g, i, 0, e, 1, 1);
                                        -1 === t && (t = g),
                                            (this.hls.nextLoadLevel = this.hls.nextAutoLevel = t),
                                            this.resetEstimator(this.hls.levels[t].bitrate);
                                    }
                                }
                            };
                            y || w > 2 * F ? B() : (this.timer = self.setInterval(B, 1e3 * F)),
                                n.trigger(h.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, part: a, stats: u });
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
                    e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                        e.on(h.FRAG_LOADING, this.onFragLoading, this),
                        e.on(h.FRAG_LOADED, this.onFragLoaded, this),
                        e.on(h.FRAG_BUFFERED, this.onFragBuffered, this),
                        e.on(h.LEVEL_SWITCHING, this.onLevelSwitching, this),
                        e.on(h.LEVEL_LOADED, this.onLevelLoaded, this),
                        e.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
                        e.on(h.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this),
                        e.on(h.ERROR, this.onError, this);
                }
                unregisterListeners() {
                    let { hls: e } = this;
                    e &&
                        (e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                        e.off(h.FRAG_LOADING, this.onFragLoading, this),
                        e.off(h.FRAG_LOADED, this.onFragLoaded, this),
                        e.off(h.FRAG_BUFFERED, this.onFragBuffered, this),
                        e.off(h.LEVEL_SWITCHING, this.onLevelSwitching, this),
                        e.off(h.LEVEL_LOADED, this.onLevelLoaded, this),
                        e.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
                        e.off(h.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this),
                        e.off(h.ERROR, this.onError, this));
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
                    let i = t.frag;
                    if (!this.ignoreFragment(i)) {
                        if (!i.bitrateTest) {
                            var r;
                            (this.fragCurrent = i), (this.partCurrent = null != (r = t.part) ? r : null);
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
                            case o.BUFFER_ADD_CODEC_ERROR:
                            case o.BUFFER_APPEND_ERROR:
                                (this.lastLoadedFragLevel = -1), (this.firstSelection = -1);
                                break;
                            case o.FRAG_LOAD_TIMEOUT: {
                                let e = t.frag,
                                    { fragCurrent: i, partCurrent: r } = this;
                                if (e && i && e.sn === i.sn && e.level === i.level) {
                                    let t = performance.now(),
                                        i = r ? r.stats : e.stats,
                                        s = t - i.loading.start,
                                        a = i.loading.first ? i.loading.first - i.loading.start : -1;
                                    if (i.loaded && a > -1) {
                                        let e = this.bwEstimator.getEstimateTTFB();
                                        this.bwEstimator.sample(s - Math.min(e, a), i.loaded);
                                    } else this.bwEstimator.sampleTTFB(s);
                                }
                            }
                        }
                }
                getTimeToLoadFrag(e, t, i, r) {
                    let s = r ? e + this.lastLevelLoadSec : 0;
                    return e + i / t + s;
                }
                onLevelLoaded(e, t) {
                    let i = this.hls.config,
                        { loading: r } = t.stats,
                        a = r.end - r.first;
                    s(a) && (this.lastLevelLoadSec = a / 1e3),
                        t.details.live
                            ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive)
                            : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD),
                        this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
                }
                onFragLoaded(e, { frag: t, part: i }) {
                    let r = i ? i.stats : t.stats;
                    if (
                        (t.type === D && this.bwEstimator.sampleTTFB(r.loading.first - r.loading.start),
                        !this.ignoreFragment(t))
                    ) {
                        if (
                            (this.clearTimer(),
                            t.level === this._nextAutoLevel && (this._nextAutoLevel = -1),
                            (this.firstSelection = -1),
                            this.hls.config.abrMaxWithRealBitrate)
                        ) {
                            let e = i ? i.duration : t.duration,
                                s = this.hls.levels[t.level],
                                a = (s.loaded ? s.loaded.bytes : 0) + r.loaded,
                                n = (s.loaded ? s.loaded.duration : 0) + e;
                            (s.loaded = { bytes: a, duration: n }), (s.realBitrate = Math.round((8 * a) / n));
                        }
                        if (t.bitrateTest) {
                            let e = { stats: r, frag: t, part: i, id: t.type };
                            this.onFragBuffered(h.FRAG_BUFFERED, e), (t.bitrateTest = !1);
                        } else this.lastLoadedFragLevel = t.level;
                    }
                }
                onFragBuffered(e, t) {
                    let { frag: i, part: r } = t,
                        s = null != r && r.stats.loaded ? r.stats : i.stats;
                    if (s.aborted || this.ignoreFragment(i)) return;
                    let a =
                        s.parsing.end -
                        s.loading.start -
                        Math.min(s.loading.first - s.loading.start, this.bwEstimator.getEstimateTTFB());
                    this.bwEstimator.sample(a, s.loaded),
                        (s.bwEstimate = this.getBwEstimate()),
                        i.bitrateTest ? (this.bitrateTestDelay = a / 1e3) : (this.bitrateTestDelay = 0);
                }
                ignoreFragment(e) {
                    return e.type !== D || "initSegment" === e.sn;
                }
                clearTimer() {
                    this.timer > -1 && (self.clearInterval(this.timer), (this.timer = -1));
                }
                get firstAutoLevel() {
                    let { maxAutoLevel: e, minAutoLevel: t } = this.hls,
                        i = this.getBwEstimate(),
                        r = this.hls.config.maxStarvationDelay,
                        s = this.findBestLevel(i, t, e, 0, r, 1, 1);
                    if (s > -1) return s;
                    let a = this.hls.firstLevel,
                        n = Math.min(Math.max(a, t), e);
                    return (
                        this.warn(
                            `Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${n}`,
                        ),
                        n
                    );
                }
                get forcedAutoLevel() {
                    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
                }
                get nextAutoLevel() {
                    let e = this.forcedAutoLevel,
                        t = this.bwEstimator.canEstimate(),
                        i = this.lastLoadedFragLevel > -1;
                    if (-1 !== e && (!t || !i || this.nextAutoLevelKey === this.getAutoLevelKey())) return e;
                    let r = t && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
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
                    let { fragCurrent: e, partCurrent: t, hls: i } = this;
                    if (i.levels.length <= 1) return i.loadLevel;
                    let { maxAutoLevel: r, config: s, minAutoLevel: a } = i,
                        n = t ? t.duration : e ? e.duration : 0,
                        l = this.getBwEstimate(),
                        o = this.getStarvationDelay(),
                        h = s.abrBandWidthFactor,
                        d = s.abrBandWidthUpFactor;
                    if (o) {
                        let e = this.findBestLevel(l, a, r, o, 0, h, d);
                        if (e >= 0) return (this.rebufferNotice = -1), e;
                    }
                    let u = n ? Math.min(n, s.maxStarvationDelay) : s.maxStarvationDelay;
                    if (!o) {
                        let e = this.bitrateTestDelay;
                        e &&
                            ((u = (n ? Math.min(n, s.maxLoadingDelay) : s.maxLoadingDelay) - e),
                            this.info(
                                `bitrate test took ${Math.round(1e3 * e)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * u)} ms`,
                            ),
                            (h = d = 1));
                    }
                    let f = this.findBestLevel(l, a, r, o, u, h, d);
                    if (
                        (this.rebufferNotice !== f &&
                            ((this.rebufferNotice = f),
                            this.info(`${o ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`)),
                        f > -1)
                    )
                        return f;
                    let c = i.levels[a],
                        g = i.loadLevelObj;
                    return g && (null == c ? void 0 : c.bitrate) < g.bitrate ? a : i.loadLevel;
                }
                getStarvationDelay() {
                    let e = this.hls,
                        t = e.media;
                    if (!t) return 1 / 0;
                    let i = t && 0 !== t.playbackRate ? Math.abs(t.playbackRate) : 1,
                        r = e.mainForwardBufferInfo;
                    return (r ? r.len : 0) / i;
                }
                getBwEstimate() {
                    return this.bwEstimator.canEstimate()
                        ? this.bwEstimator.getEstimate()
                        : this.hls.config.abrEwmaDefaultEstimate;
                }
                findBestLevel(e, t, i, r, a, n, l) {
                    var o, h;
                    let d,
                        u = r + a,
                        f = this.lastLoadedFragLevel,
                        c = -1 === f ? this.hls.firstLevel : f,
                        { fragCurrent: g, partCurrent: m } = this,
                        { levels: p, allAudioTracks: y, loadLevel: v, config: E } = this.hls;
                    if (1 === p.length) return 0;
                    let T = p[c],
                        S = !!(null != (o = this.hls.latestLevelDetails) && o.live),
                        A = -1 === v || -1 === f,
                        L = "SDR",
                        R = (null == T ? void 0 : T.frameRate) || 0,
                        { audioPreference: b, videoPreference: I } = E,
                        k = this.audioTracksByGroup || (this.audioTracksByGroup = eX(y)),
                        D = -1;
                    if (A) {
                        if (-1 !== this.firstSelection) return this.firstSelection;
                        let r = (function (e, t, i, r, a) {
                                let n = Object.keys(e),
                                    l = null == r ? void 0 : r.channels,
                                    o = null == r ? void 0 : r.audioCodec,
                                    h = null == a ? void 0 : a.videoCodec,
                                    d = l && 2 === parseInt(l),
                                    u = !1,
                                    f = !1,
                                    c = 1 / 0,
                                    g = 1 / 0,
                                    m = 1 / 0,
                                    p = 1 / 0,
                                    y = 0,
                                    v = [],
                                    { preferHDR: E, allowedVideoRanges: T } = (function (e, t) {
                                        let i = !1,
                                            r = [];
                                        if ((e && ((i = "SDR" !== e), (r = [e])), t)) {
                                            let e =
                                                "SDR" !== (r = t.allowedVideoRanges || eK.slice(0)).join("") &&
                                                !t.videoCodec;
                                            (i =
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
                                                      })()) || (r = ["SDR"]);
                                        }
                                        return { preferHDR: i, allowedVideoRanges: r };
                                    })(t, a);
                                for (let t = n.length; t--; ) {
                                    let i = e[n[t]];
                                    u || (u = i.channels[2] > 0),
                                        (c = Math.min(c, i.minHeight)),
                                        (g = Math.min(g, i.minFramerate)),
                                        (m = Math.min(m, i.minBitrate)),
                                        T.filter((e) => i.videoRanges[e] > 0).length > 0 && (f = !0);
                                }
                                (c = s(c) ? c : 0), (g = s(g) ? g : 0);
                                let S = Math.max(1080, c),
                                    A = Math.max(30, g);
                                (i = Math.max((m = s(m) ? m : i), i)), f || (t = void 0);
                                let L = n.length > 1;
                                return {
                                    codecSet: n.reduce(
                                        (t, r) => {
                                            let s = e[r];
                                            if (r === t) return t;
                                            if (((v = f ? T.filter((e) => s.videoRanges[e] > 0) : []), L)) {
                                                if (s.minBitrate > i)
                                                    return (
                                                        eq(
                                                            r,
                                                            `min bitrate of ${s.minBitrate} > current estimate of ${i}`,
                                                        ),
                                                        t
                                                    );
                                                if (!s.hasDefaultAudio)
                                                    return (
                                                        eq(r, "no renditions with default or auto-select sound found"),
                                                        t
                                                    );
                                                if (o && r.indexOf(o.substring(0, 4)) % 5 != 0)
                                                    return eq(r, `audio codec preference "${o}" not found`), t;
                                                if (l && !d) {
                                                    if (!s.channels[l])
                                                        return (
                                                            eq(
                                                                r,
                                                                `no renditions with ${l} channel sound found (channels options: ${Object.keys(s.channels)})`,
                                                            ),
                                                            t
                                                        );
                                                } else if ((!o || d) && u && 0 === s.channels["2"])
                                                    return eq(r, "no renditions with stereo sound found"), t;
                                                if (s.minHeight > S)
                                                    return (
                                                        eq(r, `min resolution of ${s.minHeight} > maximum of ${S}`), t
                                                    );
                                                if (s.minFramerate > A)
                                                    return (
                                                        eq(r, `min framerate of ${s.minFramerate} > maximum of ${A}`), t
                                                    );
                                                if (!v.some((e) => s.videoRanges[e] > 0))
                                                    return eq(r, `no variants with VIDEO-RANGE of ${ej(v)} found`), t;
                                                if (h && r.indexOf(h.substring(0, 4)) % 5 != 0)
                                                    return eq(r, `video codec preference "${h}" not found`), t;
                                                if (s.maxScore < y)
                                                    return (
                                                        eq(r, `max score of ${s.maxScore} < selected max of ${y}`), t
                                                    );
                                            }
                                            return t && (eD(r) >= eD(t) || s.fragmentError > e[t].fragmentError)
                                                ? t
                                                : ((p = s.minIndex), (y = s.maxScore), r);
                                        },
                                        void 0,
                                    ),
                                    videoRanges: v,
                                    preferHDR: E,
                                    minFramerate: g,
                                    minBitrate: m,
                                    minIndex: p,
                                };
                            })(
                                this.codecTiers ||
                                    (this.codecTiers = p.slice(t, i + 1).reduce((e, t, i) => {
                                        if (!t.codecSet) return e;
                                        let r = t.audioGroups,
                                            s = e[t.codecSet];
                                        s ||
                                            (e[t.codecSet] = s =
                                                {
                                                    minBitrate: 1 / 0,
                                                    minHeight: 1 / 0,
                                                    minFramerate: 1 / 0,
                                                    minIndex: i,
                                                    maxScore: 0,
                                                    videoRanges: { SDR: 0 },
                                                    channels: { 2: 0 },
                                                    hasDefaultAudio: !r,
                                                    fragmentError: 0,
                                                }),
                                            (s.minBitrate = Math.min(s.minBitrate, t.bitrate));
                                        let a = Math.min(t.height, t.width);
                                        return (
                                            (s.minHeight = Math.min(s.minHeight, a)),
                                            (s.minFramerate = Math.min(s.minFramerate, t.frameRate)),
                                            (s.minIndex = Math.min(s.minIndex, i)),
                                            (s.maxScore = Math.max(s.maxScore, t.score)),
                                            (s.fragmentError += t.fragmentError),
                                            (s.videoRanges[t.videoRange] = (s.videoRanges[t.videoRange] || 0) + 1),
                                            r &&
                                                r.forEach((e) => {
                                                    if (!e) return;
                                                    let t = k.groups[e];
                                                    t &&
                                                        ((s.hasDefaultAudio =
                                                            s.hasDefaultAudio || k.hasDefaultAudio
                                                                ? t.hasDefault
                                                                : t.hasAutoSelect ||
                                                                  (!k.hasDefaultAudio && !k.hasAutoSelectAudio)),
                                                        Object.keys(t.channels).forEach((e) => {
                                                            s.channels[e] = (s.channels[e] || 0) + t.channels[e];
                                                        }));
                                                }),
                                            e
                                        );
                                    }, {})),
                                L,
                                e,
                                b,
                                I,
                            ),
                            {
                                codecSet: a,
                                videoRanges: n,
                                minFramerate: l,
                                minBitrate: o,
                                minIndex: h,
                                preferHDR: u,
                            } = r;
                        (D = h),
                            (d = a),
                            (L = u ? n[n.length - 1] : n[0]),
                            (R = l),
                            (e = Math.max(e, o)),
                            this.log(`picked start tier ${ej(r)}`);
                    } else (d = null == T ? void 0 : T.codecSet), (L = null == T ? void 0 : T.videoRange);
                    let _ = m ? m.duration : g ? g.duration : 0,
                        P = this.bwEstimator.getEstimateTTFB() / 1e3,
                        C = [];
                    for (let o = i; o >= t; o--) {
                        let t,
                            g = p[o],
                            y = o > c;
                        if (!g) continue;
                        if (E.useMediaCapabilities && !g.supportedResult && !g.supportedPromise) {
                            let t = navigator.mediaCapabilities;
                            "function" == typeof (null == t ? void 0 : t.decodingInfo) &&
                            (function (e, t, i, r, a, n) {
                                let l = e.videoCodec,
                                    o = e.audioCodec ? e.audioGroups : null,
                                    h = null == n ? void 0 : n.audioCodec,
                                    d = null == n ? void 0 : n.channels,
                                    u = d ? parseInt(d) : h ? 1 / 0 : 2,
                                    f = null;
                                if (null != o && o.length)
                                    try {
                                        f =
                                            1 === o.length && o[0]
                                                ? t.groups[o[0]].channels
                                                : o.reduce(
                                                      (e, i) => {
                                                          if (i) {
                                                              let r = t.groups[i];
                                                              if (!r) throw Error(`Audio track group ${i} not found`);
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
                                    (void 0 !== l &&
                                        (l.split(",").some((e) => eE(e)) ||
                                            (e.width > 1920 && e.height > 1088) ||
                                            (e.height > 1920 && e.width > 1088) ||
                                            e.frameRate > Math.max(r, 30) ||
                                            ("SDR" !== e.videoRange && e.videoRange !== i) ||
                                            e.bitrate > Math.max(a, 8e6))) ||
                                    (!!f && s(u) && Object.keys(f).some((e) => parseInt(e) > u))
                                );
                            })(g, k, L, R, e, b)
                                ? ((g.supportedPromise = eB(g, k, t, this.supportedCache)),
                                  g.supportedPromise
                                      .then((e) => {
                                          if (!this.hls) return;
                                          g.supportedResult = e;
                                          let t = this.hls.levels,
                                              i = t.indexOf(g);
                                          e.error
                                              ? this.warn(
                                                    `MediaCapabilities decodingInfo error: "${e.error}" for level ${i} ${ej(e)}`,
                                                )
                                              : e.supported
                                                ? e.decodingInfoResults.some(
                                                      (e) => !1 === e.smooth || !1 === e.powerEfficient,
                                                  ) &&
                                                  this.log(
                                                      `MediaCapabilities decodingInfo for level ${i} not smooth or powerEfficient: ${ej(e)}`,
                                                  )
                                                : (this.warn(
                                                      `Unsupported MediaCapabilities decodingInfo result for level ${i} ${ej(e)}`,
                                                  ),
                                                  i > -1 &&
                                                      t.length > 1 &&
                                                      (this.log(`Removing unsupported level ${i}`),
                                                      this.hls.removeLevel(i),
                                                      -1 === this.hls.loadLevel && (this.hls.nextLoadLevel = 0)));
                                      })
                                      .catch((e) => {
                                          this.warn(`Error handling MediaCapabilities decodingInfo: ${e}`);
                                      }))
                                : (g.supportedResult = e$);
                        }
                        if (
                            ((d && g.codecSet !== d) ||
                                (L && g.videoRange !== L) ||
                                (y && R > g.frameRate) ||
                                (!y && R > 0 && R < g.frameRate) ||
                                (null != (h = g.supportedResult) &&
                                    null != (h = h.decodingInfoResults) &&
                                    h.some((e) => !1 === e.smooth))) &&
                            (!A || o !== D)
                        ) {
                            C.push(o);
                            continue;
                        }
                        let T = g.details,
                            I =
                                (m
                                    ? null == T
                                        ? void 0
                                        : T.partTarget
                                    : null == T
                                      ? void 0
                                      : T.averagetargetduration) || _;
                        t = y ? l * e : n * e;
                        let w = _ && r >= 2 * _ && 0 === a ? g.averageBitrate : g.maxBitrate,
                            x = this.getTimeToLoadFrag(P, t, w * I, void 0 === T);
                        if (
                            t >= w &&
                            (o === f || (0 === g.loadError && 0 === g.fragmentError)) &&
                            (x <= P || !s(x) || (S && !this.bitrateTestDelay) || x < u)
                        ) {
                            let e = this.forcedAutoLevel;
                            return (
                                o !== v &&
                                    (-1 === e || e !== v) &&
                                    (C.length &&
                                        this.trace(
                                            `Skipped level(s) ${C.join(",")} of ${i} max with CODECS and VIDEO-RANGE:"${p[C[0]].codecs}" ${p[C[0]].videoRange}; not compatible with "${d}" ${L}`,
                                        ),
                                    this.info(
                                        `switch candidate:${c}->${o} adjustedbw(${Math.round(t)})-bitrate=${Math.round(t - w)} ttfb:${P.toFixed(1)} avgDuration:${I.toFixed(1)} maxFetchDuration:${u.toFixed(1)} fetchDuration:${x.toFixed(1)} firstSelection:${A} codecSet:${g.codecSet} videoRange:${g.videoRange} hls.loadLevel:${v}`,
                                    )),
                                A && (this.firstSelection = o),
                                o
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
                    let { maxAutoLevel: t, minAutoLevel: i } = this.hls;
                    return Math.min(Math.max(e, i), t);
                }
            },
            bufferController: class extends F {
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
                            let { media: t, mediaSource: i } = this;
                            e && this.log("Media source opened"),
                                t &&
                                    i &&
                                    (i.removeEventListener("sourceopen", this._onMediaSourceOpen),
                                    t.removeEventListener("emptied", this._onMediaEmptied),
                                    this.updateDuration(),
                                    this.hls.trigger(h.MEDIA_ATTACHED, { media: t, mediaSource: i }),
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
                        })(K(e.config.preferManagedMediaSource))),
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
                    e.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                        e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                        e.on(h.MANIFEST_PARSED, this.onManifestParsed, this),
                        e.on(h.BUFFER_RESET, this.onBufferReset, this),
                        e.on(h.BUFFER_APPENDING, this.onBufferAppending, this),
                        e.on(h.BUFFER_CODECS, this.onBufferCodecs, this),
                        e.on(h.BUFFER_EOS, this.onBufferEos, this),
                        e.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
                        e.on(h.LEVEL_UPDATED, this.onLevelUpdated, this),
                        e.on(h.FRAG_PARSED, this.onFragParsed, this),
                        e.on(h.FRAG_CHANGED, this.onFragChanged, this),
                        e.on(h.ERROR, this.onError, this);
                }
                unregisterListeners() {
                    let { hls: e } = this;
                    e.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                        e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                        e.off(h.MANIFEST_PARSED, this.onManifestParsed, this),
                        e.off(h.BUFFER_RESET, this.onBufferReset, this),
                        e.off(h.BUFFER_APPENDING, this.onBufferAppending, this),
                        e.off(h.BUFFER_CODECS, this.onBufferCodecs, this),
                        e.off(h.BUFFER_EOS, this.onBufferEos, this),
                        e.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
                        e.off(h.LEVEL_UPDATED, this.onLevelUpdated, this),
                        e.off(h.FRAG_PARSED, this.onFragParsed, this),
                        e.off(h.FRAG_CHANGED, this.onFragChanged, this),
                        e.off(h.ERROR, this.onError, this);
                }
                transferMedia() {
                    let { media: e, mediaSource: t } = this;
                    if (!e) return null;
                    let i = {};
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
                            ? x(i, r.tracks)
                            : this.sourceBuffers.forEach((e) => {
                                  let [t] = e;
                                  t && ((i[t] = x({}, this.tracks[t])), this.removeBuffer(t)), (e[0] = e[1] = null);
                              }),
                        { media: e, mediaSource: t, tracks: i }
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
                    var i;
                    let r = 2;
                    ((!t.audio || t.video) && t.altAudio) || (r = 1),
                        (this.bufferCodecEventsTotal = r),
                        this.log(`${r} bufferCodec event(s) expected.`),
                        null != (i = this.transferData) &&
                            i.mediaSource &&
                            this.sourceBufferCount &&
                            r &&
                            this.bufferCreated();
                }
                onMediaAttaching(e, t) {
                    let i = (this.media = t.media);
                    this.transferData = this.overrides = void 0;
                    let r = K(this.appendSource);
                    if (r) {
                        let e = !!t.mediaSource;
                        (e || t.overrides) && ((this.transferData = t), (this.overrides = t.overrides));
                        let n = (this.mediaSource = t.mediaSource || new r());
                        if ((this.assignMediaSource(n), e)) (this._objectUrl = i.src), this.attachTransferred();
                        else {
                            let e = (this._objectUrl = self.URL.createObjectURL(n));
                            if (this.appendSource)
                                try {
                                    var s, a;
                                    let t;
                                    i.removeAttribute("src");
                                    let r = self.ManagedMediaSource;
                                    (i.disableRemotePlayback = i.disableRemotePlayback || (r && n instanceof r)),
                                        r0(i),
                                        (s = i),
                                        (a = e),
                                        ((t = self.document.createElement("source")).type = "video/mp4"),
                                        (t.src = a),
                                        s.appendChild(t),
                                        i.load();
                                } catch (t) {
                                    i.src = e;
                                }
                            else i.src = e;
                        }
                        i.addEventListener("emptied", this._onMediaEmptied);
                    }
                }
                assignMediaSource(e) {
                    var t, i;
                    this.log(
                        `${(null == (t = this.transferData) ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${null == ((i = e.constructor)) ? void 0 : i.name}`,
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
                    let i = this.tracks,
                        r = t.tracks,
                        s = r ? Object.keys(r) : null,
                        a = s ? s.length : 0,
                        n = () => {
                            Promise.resolve().then(() => {
                                this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
                            });
                        };
                    if (r && s && a) {
                        if (!this.tracksReady) {
                            (this.hls.config.startFragPrefetch = !0),
                                this.log("attachTransferred: waiting for SourceBuffer track info");
                            return;
                        }
                        if (
                            (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${ej(i, (e, t) => ("initSegment" === e ? void 0 : t))};
transfer tracks: ${ej(r, (e, t) => ("initSegment" === e ? void 0 : t))}}`),
                            !H(r, i))
                        ) {
                            (t.mediaSource = null), (t.tracks = void 0);
                            let s = e.currentTime,
                                a = this.details,
                                n = Math.max(s, (null == a ? void 0 : a.fragments[0].start) || 0);
                            return n - s > 1
                                ? void this.log(
                                      `attachTransferred: waiting for playback to reach new tracks start time ${s} -> ${n}`,
                                  )
                                : (this.warn(
                                      `attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(r)}"->"${Object.keys(i)}") start time: ${n} currentTime: ${s}`,
                                  ),
                                  this.onMediaDetaching(h.MEDIA_DETACHING, {}),
                                  this.onMediaAttaching(h.MEDIA_ATTACHING, t),
                                  void (e.currentTime = n));
                        }
                        (this.transferData = void 0),
                            s.forEach((e) => {
                                let t = r[e];
                                if (t) {
                                    let i = t.buffer;
                                    if (i) {
                                        let r = this.fragmentTracker,
                                            s = t.id;
                                        if (r.hasFragments(s) || r.hasParts(s)) {
                                            let t = tR.getBuffered(i);
                                            r.detectEvictedFragments(e, t, s, null, !0);
                                        }
                                        let a = r1(e),
                                            n = [e, i];
                                        (this.sourceBuffers[a] = n),
                                            i.updating && this.operationQueue && this.operationQueue.prependBlocker(e),
                                            this.trackSourceBuffer(e, t);
                                    }
                                }
                            }),
                            n(),
                            this.bufferCreated();
                    } else this.log("attachTransferred: MediaSource w/o SourceBuffers"), n();
                }
                get mediaSourceOpenOrEnded() {
                    var e;
                    let t = null == (e = this.mediaSource) ? void 0 : e.readyState;
                    return "open" === t || "ended" === t;
                }
                onMediaDetaching(e, t) {
                    let i = !!t.transferMedia;
                    this.transferData = this.overrides = void 0;
                    let { media: r, mediaSource: s, _objectUrl: a } = this;
                    if (s) {
                        if ((this.log(`media source ${i ? "transferring" : "detaching"}`), i))
                            this.sourceBuffers.forEach(([e]) => {
                                e && this.removeBuffer(e);
                            }),
                                this.resetQueue();
                        else {
                            if (this.mediaSourceOpenOrEnded) {
                                let e = "open" === s.readyState;
                                try {
                                    let t = s.sourceBuffers;
                                    for (let i = t.length; i--; ) e && t[i].abort(), s.removeSourceBuffer(t[i]);
                                    e && s.endOfStream();
                                } catch (e) {
                                    this.warn(`onMediaDetaching: ${e.message} while calling endOfStream`);
                                }
                            }
                            this.sourceBufferCount && this.onBufferReset();
                        }
                        s.removeEventListener("sourceopen", this._onMediaSourceOpen),
                            s.removeEventListener("sourceended", this._onMediaSourceEnded),
                            s.removeEventListener("sourceclose", this._onMediaSourceClose),
                            this.appendSource &&
                                (s.removeEventListener("startstreaming", this._onStartStreaming),
                                s.removeEventListener("endstreaming", this._onEndStreaming)),
                            (this.mediaSource = null),
                            (this._objectUrl = null);
                    }
                    r &&
                        (r.removeEventListener("emptied", this._onMediaEmptied),
                        i ||
                            (a && self.URL.revokeObjectURL(a),
                            this.mediaSrc === a
                                ? (r.removeAttribute("src"), this.appendSource && r0(r), r.load())
                                : this.warn("media|source.src was changed by a third party - skip cleanup")),
                        (this.media = null)),
                        this.hls.trigger(h.MEDIA_DETACHED, t);
                }
                onBufferReset() {
                    this.sourceBuffers.forEach(([e]) => {
                        e && this.resetBuffer(e);
                    }),
                        this.initTracks();
                }
                resetBuffer(e) {
                    var t, i;
                    let r = null == (t = this.tracks[e]) ? void 0 : t.buffer;
                    if ((this.removeBuffer(e), r))
                        try {
                            null != (i = this.mediaSource) &&
                                i.sourceBuffers.length &&
                                this.mediaSource.removeSourceBuffer(r);
                        } catch (t) {
                            this.warn(`onBufferReset ${e}`, t);
                        }
                    delete this.tracks[e];
                }
                removeBuffer(e) {
                    this.removeBufferListeners(e), (this.sourceBuffers[r1(e)] = [null, null]);
                    let t = this.tracks[e];
                    t && (t.buffer = void 0);
                }
                resetQueue() {
                    this.operationQueue && this.operationQueue.destroy(), (this.operationQueue = new rQ(this.tracks));
                }
                onBufferCodecs(e, t) {
                    var i;
                    let r = this.tracks,
                        s = Object.keys(t);
                    this.log(`BUFFER_CODECS: "${s}" (current SB count ${this.sourceBufferCount})`);
                    let a =
                            ("audiovideo" in t && (r.audio || r.video)) ||
                            (r.audiovideo && ("audio" in t || "video" in t)),
                        n = !a && this.sourceBufferCount && this.media && s.some((e) => !r[e]);
                    a || n
                        ? this.warn(`Unsupported transition between "${Object.keys(r)}" and "${s}" SourceBuffers`)
                        : (s.forEach((e) => {
                              var i, s;
                              let { id: a, codec: n, levelCodec: l, container: o, metadata: h, supplemental: d } = t[e],
                                  u = r[e],
                                  f = null == (i = this.transferData) || null == (i = i.tracks) ? void 0 : i[e],
                                  c = null != f && f.buffer ? f : u,
                                  g = (null == c ? void 0 : c.pendingCodec) || (null == c ? void 0 : c.codec),
                                  m = null == c ? void 0 : c.levelCodec;
                              u ||
                                  (u = r[e] =
                                      {
                                          buffer: void 0,
                                          listeners: [],
                                          codec: n,
                                          supplemental: d,
                                          container: o,
                                          levelCodec: l,
                                          metadata: h,
                                          id: a,
                                      });
                              let p = ew(g, m),
                                  y = null == p ? void 0 : p.replace(rz, "$1"),
                                  v = ew(n, l),
                                  E = null == (s = v) ? void 0 : s.replace(rz, "$1");
                              v &&
                                  p &&
                                  y !== E &&
                                  ("audio" === e.slice(0, 5) && (v = eC(v, this.appendSource)),
                                  this.log(`switching codec ${g} to ${v}`),
                                  v !== (u.pendingCodec || u.codec) && (u.pendingCodec = v),
                                  (u.container = o),
                                  this.appendChangeType(e, o, v));
                          }),
                          (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks),
                          !this.sourceBufferCount &&
                              (!(this.bufferCodecEventsTotal > 1) ||
                                  this.tracks.video ||
                                  t.video ||
                                  (null == (i = t.audio) ? void 0 : i.id) !== "main" ||
                                  (this.log("Main audio-only"), (this.bufferCodecEventsTotal = 1)),
                              this.mediaSourceOpenOrEnded && this.checkPendingTracks()));
                }
                get sourceBufferTracks() {
                    return Object.keys(this.tracks).reduce((e, t) => {
                        let i = this.tracks[t];
                        return (
                            (e[t] = { id: i.id, container: i.container, codec: i.codec, levelCodec: i.levelCodec }), e
                        );
                    }, {});
                }
                appendChangeType(e, t, i) {
                    let r = `${t};codecs=${i}`,
                        s = {
                            label: `change-type=${r}`,
                            execute: () => {
                                let s = this.tracks[e];
                                if (s) {
                                    let a = s.buffer;
                                    null != a &&
                                        a.changeType &&
                                        (this.log(`changing ${e} sourceBuffer type to ${r}`),
                                        a.changeType(r),
                                        (s.codec = i),
                                        (s.container = t));
                                }
                                this.shiftAndExecuteNext(e);
                            },
                            onStart: () => {},
                            onComplete: () => {},
                            onError: (t) => {
                                this.warn(`Failed to change ${e} SourceBuffer type`, t);
                            },
                        };
                    this.append(s, e, this.isPending(this.tracks[e]));
                }
                blockAudio(e) {
                    var t;
                    let i = e.start,
                        r = i + 0.05 * e.duration;
                    if ((null == (t = this.fragmentTracker.getAppendedFrag(i, D)) ? void 0 : t.gap) === !0) return;
                    let s = {
                        label: "block-audio",
                        execute: () => {
                            var e;
                            let t = this.tracks.video;
                            (this.lastVideoAppendEnd > r ||
                                (null != t && t.buffer && tR.isBuffered(t.buffer, r)) ||
                                (null == (e = this.fragmentTracker.getAppendedFrag(r, D)) ? void 0 : e.gap) === !0) &&
                                ((this.blockedAudioAppend = null), this.shiftAndExecuteNext("audio"));
                        },
                        onStart: () => {},
                        onComplete: () => {},
                        onError: (e) => {
                            this.warn("Error executing block-audio operation", e);
                        },
                    };
                    (this.blockedAudioAppend = { op: s, frag: e }), this.append(s, "audio", !0);
                }
                unblockAudio() {
                    let { blockedAudioAppend: e, operationQueue: t } = this;
                    e && t && ((this.blockedAudioAppend = null), t.unblockAudio(e.op));
                }
                onBufferAppending(e, t) {
                    let { tracks: i } = this,
                        { data: r, type: a, parent: n, frag: d, part: u, chunkMeta: f, offset: c } = t,
                        g = f.buffering[a],
                        { sn: m, cc: p } = d,
                        y = self.performance.now();
                    g.start = y;
                    let v = d.stats.buffering,
                        E = u ? u.stats.buffering : null;
                    0 === v.start && (v.start = y), E && 0 === E.start && (E.start = y);
                    let T = i.audio,
                        S = !1;
                    "audio" === a &&
                        (null == T ? void 0 : T.container) === "audio/mpeg" &&
                        ((S = !this.lastMpegAudioChunk || 1 === f.id || this.lastMpegAudioChunk.sn !== f.sn),
                        (this.lastMpegAudioChunk = f));
                    let A = i.video,
                        L = null == A ? void 0 : A.buffer;
                    if (L && "initSegment" !== m) {
                        let e = u || d,
                            t = this.blockedAudioAppend;
                        if ("audio" !== a || "main" === n || this.blockedAudioAppend || A.ending || A.ended) {
                            if ("video" === a) {
                                let i = e.end;
                                if (t) {
                                    let e = t.frag.start;
                                    (i > e || i < this.lastVideoAppendEnd || tR.isBuffered(L, e)) &&
                                        this.unblockAudio();
                                }
                                this.lastVideoAppendEnd = i;
                            }
                        } else {
                            let t = e.start + 0.05 * e.duration,
                                i = L.buffered,
                                r = this.currentOp("video");
                            ((i.length || r) && (r || tR.isBuffered(L, t) || !(this.lastVideoAppendEnd < t))) ||
                                this.blockAudio(e);
                        }
                    }
                    let R = (u || d).start,
                        b = {
                            label: `append-${a}`,
                            execute: () => {
                                var e;
                                g.executeStart = self.performance.now();
                                let t = null == (e = this.tracks[a]) ? void 0 : e.buffer;
                                t &&
                                    (S
                                        ? this.updateTimestampOffset(t, R, 0.1, a, m, p)
                                        : void 0 !== c && s(c) && this.updateTimestampOffset(t, c, 1e-6, a, m, p)),
                                    this.appendExecutor(r, a);
                            },
                            onStart: () => {},
                            onComplete: () => {
                                let e = self.performance.now();
                                (g.executeEnd = g.end = e),
                                    0 === v.first && (v.first = e),
                                    E && 0 === E.first && (E.first = e);
                                let t = {};
                                this.sourceBuffers.forEach(([e, i]) => {
                                    e && (t[e] = tR.getBuffered(i));
                                }),
                                    (this.appendErrors[a] = 0),
                                    "audio" === a || "video" === a
                                        ? (this.appendErrors.audiovideo = 0)
                                        : ((this.appendErrors.audio = 0), (this.appendErrors.video = 0)),
                                    this.hls.trigger(h.BUFFER_APPENDED, {
                                        type: a,
                                        frag: d,
                                        part: u,
                                        chunkMeta: f,
                                        parent: d.type,
                                        timeRanges: t,
                                    });
                            },
                            onError: (e) => {
                                var t;
                                let i = {
                                        type: l.MEDIA_ERROR,
                                        parent: d.type,
                                        details: o.BUFFER_APPEND_ERROR,
                                        sourceBufferName: a,
                                        frag: d,
                                        part: u,
                                        chunkMeta: f,
                                        error: e,
                                        err: e,
                                        fatal: !1,
                                    },
                                    r = null == (t = this.media) ? void 0 : t.error;
                                if (
                                    e.code === DOMException.QUOTA_EXCEEDED_ERR ||
                                    "QuotaExceededError" == e.name ||
                                    "quota" in e
                                )
                                    i.details = o.BUFFER_FULL_ERROR;
                                else if (e.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !r)
                                    i.errorAction = ts(!0);
                                else if (e.name === rZ && 0 === this.sourceBufferCount) i.errorAction = ts(!0);
                                else {
                                    let e = ++this.appendErrors[a];
                                    this.warn(
                                        `Failed ${e}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer (${r || "no media error"})`,
                                    ),
                                        (e >= this.hls.config.appendErrorMaxRetry || r) && (i.fatal = !0);
                                }
                                this.hls.trigger(h.ERROR, i);
                            },
                        };
                    this.log(
                        `queuing "${a}" append sn: ${m}${u ? " p: " + u.index : ""} of ${d.type === D ? "level" : "track"} ${d.level} cc: ${p}`,
                    ),
                        this.append(b, a, this.isPending(this.tracks[a]));
                }
                getFlushOp(e, t, i) {
                    return (
                        this.log(`queuing "${e}" remove ${t}-${i}`),
                        {
                            label: "remove",
                            execute: () => {
                                this.removeExecutor(e, t, i);
                            },
                            onStart: () => {},
                            onComplete: () => {
                                this.hls.trigger(h.BUFFER_FLUSHED, { type: e });
                            },
                            onError: (r) => {
                                this.warn(`Failed to remove ${t}-${i} from "${e}" SourceBuffer`, r);
                            },
                        }
                    );
                }
                onBufferFlushing(e, t) {
                    let { type: i, startOffset: r, endOffset: s } = t;
                    i
                        ? this.append(this.getFlushOp(i, r, s), i)
                        : this.sourceBuffers.forEach(([e]) => {
                              e && this.append(this.getFlushOp(e, r, s), e);
                          });
                }
                onFragParsed(e, t) {
                    let { frag: i, part: r } = t,
                        s = [],
                        a = r ? r.elementaryStreams : i.elementaryStreams;
                    a[Z] ? s.push("audiovideo") : (a[Q] && s.push("audio"), a[z] && s.push("video"));
                    let n = () => {
                        let e = self.performance.now();
                        (i.stats.buffering.end = e), r && (r.stats.buffering.end = e);
                        let t = r ? r.stats : i.stats;
                        this.hls.trigger(h.FRAG_BUFFERED, { frag: i, part: r, stats: t, id: i.type });
                    };
                    0 === s.length &&
                        this.warn(
                            `Fragments must have at least one ElementaryStreamType set. type: ${i.type} level: ${i.level} sn: ${i.sn}`,
                        ),
                        this.blockBuffers(n, s).catch((e) => {
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
                    var i;
                    this.sourceBuffers.forEach(([e]) => {
                        if (e) {
                            let i = this.tracks[e];
                            (!t.type || t.type === e) &&
                                ((i.ending = !0), i.ended || ((i.ended = !0), this.log(`${e} buffer reached EOS`)));
                        }
                    });
                    let r = (null == (i = this.overrides) ? void 0 : i.endOfStream) !== !1;
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
                                      this.hls.trigger(h.BUFFERED_TO_END, void 0);
                              }))
                            : (this.tracksEnded(), this.hls.trigger(h.BUFFERED_TO_END, void 0))
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
                    if (t.details === o.BUFFER_APPEND_ERROR && t.frag) {
                        var i;
                        let e = null == (i = t.errorAction) ? void 0 : i.nextAutoLevel;
                        s(e) && e !== t.frag.level && this.resetAppendErrors();
                    }
                }
                resetAppendErrors() {
                    this.appendErrors = { audio: 0, video: 0, audiovideo: 0 };
                }
                trimBuffers() {
                    let { hls: e, details: t, media: i } = this;
                    if (!i || null === t || !this.sourceBufferCount) return;
                    let r = e.config,
                        a = i.currentTime,
                        n = t.levelTargetDuration,
                        l = t.live && null !== r.liveBackBufferLength ? r.liveBackBufferLength : r.backBufferLength;
                    if (s(l) && l >= 0) {
                        let e = Math.max(l, n),
                            t = Math.floor(a / n) * n - e;
                        this.flushBackBuffer(a, n, t);
                    }
                    let o = r.frontBufferFlushThreshold;
                    if (s(o) && o > 0) {
                        let e = Math.max(Math.max(r.maxBufferLength, o), n),
                            t = Math.floor(a / n) * n + e;
                        this.flushFrontBuffer(a, n, t);
                    }
                }
                flushBackBuffer(e, t, i) {
                    this.sourceBuffers.forEach(([e, t]) => {
                        if (t) {
                            let s = tR.getBuffered(t);
                            if (s.length > 0 && i > s.start(0)) {
                                var r;
                                this.hls.trigger(h.BACK_BUFFER_REACHED, { bufferEnd: i });
                                let t = this.tracks[e];
                                if (null != (r = this.details) && r.live)
                                    this.hls.trigger(h.LIVE_BACK_BUFFER_REACHED, { bufferEnd: i });
                                else if (null != t && t.ended)
                                    return void this.log(
                                        `Cannot flush ${e} back buffer while SourceBuffer is in ended state`,
                                    );
                                this.hls.trigger(h.BUFFER_FLUSHING, { startOffset: 0, endOffset: i, type: e });
                            }
                        }
                    });
                }
                flushFrontBuffer(e, t, i) {
                    this.sourceBuffers.forEach(([t, r]) => {
                        if (r) {
                            let s = tR.getBuffered(r),
                                a = s.length;
                            if (a < 2) return;
                            let n = s.start(a - 1),
                                l = s.end(a - 1);
                            i > n ||
                                (e >= n && e <= l) ||
                                this.hls.trigger(h.BUFFER_FLUSHING, { startOffset: n, endOffset: 1 / 0, type: t });
                        }
                    });
                }
                getDurationAndRange() {
                    var e;
                    let { details: t, mediaSource: i } = this;
                    if (!t || !this.media || (null == i ? void 0 : i.readyState) !== "open") return null;
                    let r = t.edge;
                    if (t.live && this.hls.config.liveDurationInfinity) {
                        if (t.fragments.length && i.setLiveSeekableRange) {
                            let e = Math.max(0, t.fragmentStart),
                                i = Math.max(e, r);
                            return { duration: 1 / 0, start: e, end: i };
                        }
                        return { duration: 1 / 0 };
                    }
                    let a = null == (e = this.overrides) ? void 0 : e.duration;
                    if (a) return s(a) ? { duration: a } : null;
                    let n = this.media.duration;
                    return (r > (s(i.duration) ? i.duration : 0) && r > n) || !s(n) ? { duration: r } : null;
                }
                updateMediaSource({ duration: e, start: t, end: i }) {
                    let r = this.mediaSource;
                    this.media &&
                        r &&
                        "open" === r.readyState &&
                        (r.duration !== e &&
                            (s(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), (r.duration = e)),
                        void 0 !== t &&
                            void 0 !== i &&
                            (this.log(
                                `MediaSource duration is set to ${r.duration}. Setting seekable range to ${t}-${i}.`,
                            ),
                            r.setLiveSeekableRange(t, i)));
                }
                get tracksReady() {
                    let e = this.pendingTrackCount;
                    return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
                }
                checkPendingTracks() {
                    let { bufferCodecEventsTotal: e, pendingTrackCount: t, tracks: i } = this;
                    if (
                        (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${ej(i)}`),
                        this.tracksReady)
                    ) {
                        var r;
                        let e = null == (r = this.transferData) ? void 0 : r.tracks;
                        e && Object.keys(e).length ? this.attachTransferred() : this.createSourceBuffers();
                    }
                }
                bufferCreated() {
                    if (this.sourceBufferCount) {
                        let e = {};
                        this.sourceBuffers.forEach(([t, i]) => {
                            if (t) {
                                let r = this.tracks[t];
                                e[t] = {
                                    buffer: i,
                                    container: r.container,
                                    codec: r.codec,
                                    supplemental: r.supplemental,
                                    levelCodec: r.levelCodec,
                                    id: r.id,
                                    metadata: r.metadata,
                                };
                            }
                        }),
                            this.hls.trigger(h.BUFFER_CREATED, { tracks: e }),
                            this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`),
                            this.sourceBuffers.forEach(([e]) => {
                                this.executeNext(e);
                            });
                    } else {
                        let e = Error("could not create source buffer for media codec(s)");
                        this.hls.trigger(h.ERROR, {
                            type: l.MEDIA_ERROR,
                            details: o.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            error: e,
                            reason: e.message,
                        });
                    }
                }
                createSourceBuffers() {
                    let { tracks: e, sourceBuffers: t, mediaSource: i } = this;
                    if (!i) throw Error("createSourceBuffers called when mediaSource was null");
                    for (let s in e) {
                        let a = e[s];
                        if (this.isPending(a)) {
                            let e = this.getTrackCodec(a, s),
                                n = `${a.container};codecs=${e}`;
                            (a.codec = e),
                                this.log(`creating sourceBuffer(${n})${this.currentOp(s) ? " Queued" : ""} ${ej(a)}`);
                            try {
                                let e = i.addSourceBuffer(n),
                                    r = r1(s),
                                    l = [s, e];
                                (t[r] = l), (a.buffer = e);
                            } catch (e) {
                                var r;
                                this.error(`error while trying to add sourceBuffer: ${e.message}`),
                                    this.shiftAndExecuteNext(s),
                                    null == (r = this.operationQueue) || r.removeBlockers(),
                                    delete this.tracks[s],
                                    this.hls.trigger(h.ERROR, {
                                        type: l.MEDIA_ERROR,
                                        details: o.BUFFER_ADD_CODEC_ERROR,
                                        fatal: !1,
                                        error: e,
                                        sourceBufferName: s,
                                        mimeType: n,
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
                    let i = e.supplemental,
                        r = e.codec;
                    i &&
                        ("video" === t || "audiovideo" === t) &&
                        eR(i, "video") &&
                        (r = (function (e, t) {
                            let i = [];
                            if (e) {
                                let t = e.split(",");
                                for (let e = 0; e < t.length; e++) eL(t[e], "video") || i.push(t[e]);
                            }
                            return t && i.push(t), i.join(",");
                        })(r, i));
                    let s = ew(r, e.levelCodec);
                    return s ? ("audio" === t.slice(0, 5) ? eC(s, this.appendSource) : s) : "";
                }
                trackSourceBuffer(e, t) {
                    let i = t.buffer;
                    if (!i) return;
                    let r = this.getTrackCodec(t, e);
                    (this.tracks[e] = {
                        buffer: i,
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
                                let i = t.removedRanges;
                                null != i && i.length && this.hls.trigger(h.BUFFER_FLUSHED, { type: e });
                            });
                }
                get mediaSrc() {
                    var e, t;
                    let i =
                        (null == (e = this.media) || null == (t = e.querySelector) ? void 0 : t.call(e, "source")) ||
                        this.media;
                    return null == i ? void 0 : i.src;
                }
                onSBUpdateStart(e) {
                    let t = this.currentOp(e);
                    t && t.onStart();
                }
                onSBUpdateEnd(e) {
                    var t;
                    if ((null == (t = this.mediaSource) ? void 0 : t.readyState) === "closed")
                        return void this.resetBuffer(e);
                    let i = this.currentOp(e);
                    i && (i.onComplete(), this.shiftAndExecuteNext(e));
                }
                onSBUpdateError(e, t) {
                    var i;
                    let r = Error(
                        `${e} SourceBuffer error. MediaSource readyState: ${null == ((i = this.mediaSource)) ? void 0 : i.readyState}`,
                    );
                    this.error(`${r}`, t),
                        this.hls.trigger(h.ERROR, {
                            type: l.MEDIA_ERROR,
                            details: o.BUFFER_APPENDING_ERROR,
                            sourceBufferName: e,
                            error: r,
                            fatal: !1,
                        });
                    let s = this.currentOp(e);
                    s && s.onError(r);
                }
                updateTimestampOffset(e, t, i, r, s, a) {
                    Math.abs(t - e.timestampOffset) >= i &&
                        (this.log(`Updating ${r} SourceBuffer timestampOffset to ${t} (sn: ${s} cc: ${a})`),
                        (e.timestampOffset = t));
                }
                removeExecutor(e, t, i) {
                    let { media: r, mediaSource: a } = this,
                        n = this.tracks[e],
                        l = null == n ? void 0 : n.buffer;
                    if (!r || !a || !l) {
                        this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),
                            this.shiftAndExecuteNext(e);
                        return;
                    }
                    let o = s(r.duration) ? r.duration : 1 / 0,
                        h = s(a.duration) ? a.duration : 1 / 0,
                        d = Math.max(0, t),
                        u = Math.min(i, o, h);
                    u > d && (!n.ending || n.ended)
                        ? ((n.ended = !1), this.log(`Removing [${d},${u}] from the ${e} SourceBuffer`), l.remove(d, u))
                        : this.shiftAndExecuteNext(e);
                }
                appendExecutor(e, t) {
                    let i = this.tracks[t],
                        r = null == i ? void 0 : i.buffer;
                    if (!r) throw new rJ(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
                    (i.ending = !1), (i.ended = !1), r.appendBuffer(e);
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
                    let { operationQueue: i } = this,
                        r = t.map((e) => this.appendBlocker(e));
                    return (
                        t.length > 1 && this.blockedAudioAppend && this.unblockAudio(),
                        Promise.all(r).then((t) => {
                            i === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes));
                        })
                    );
                }
                stepOperationQueue(e) {
                    e.forEach((e) => {
                        var t;
                        let i = null == (t = this.tracks[e]) ? void 0 : t.buffer;
                        i && !i.updating && this.shiftAndExecuteNext(e);
                    });
                }
                append(e, t, i) {
                    this.operationQueue && this.operationQueue.append(e, t, i);
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
                addBufferListener(e, t, i) {
                    let r = this.tracks[e];
                    if (!r) return;
                    let s = r.buffer;
                    if (!s) return;
                    let a = i.bind(this, e);
                    r.listeners.push({ event: t, listener: a }), s.addEventListener(t, a);
                }
                removeBufferListeners(e) {
                    let t = this.tracks[e];
                    if (!t) return;
                    let i = t.buffer;
                    i &&
                        (t.listeners.forEach((e) => {
                            i.removeEventListener(e.event, e.listener);
                        }),
                        (t.listeners.length = 0));
                }
            },
            capLevelController: r2,
            errorController: class extends F {
                constructor(e) {
                    super("error-controller", e.logger),
                        (this.hls = void 0),
                        (this.playlistError = 0),
                        (this.hls = e),
                        this.registerListeners();
                }
                registerListeners() {
                    let e = this.hls;
                    e.on(h.ERROR, this.onError, this),
                        e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                        e.on(h.LEVEL_UPDATED, this.onLevelUpdated, this);
                }
                unregisterListeners() {
                    let e = this.hls;
                    e &&
                        (e.off(h.ERROR, this.onError, this),
                        e.off(h.ERROR, this.onErrorOut, this),
                        e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                        e.off(h.LEVEL_UPDATED, this.onLevelUpdated, this));
                }
                destroy() {
                    this.unregisterListeners(), (this.hls = null);
                }
                startLoad(e) {}
                stopLoad() {
                    this.playlistError = 0;
                }
                getVariantLevelIndex(e) {
                    return (null == e ? void 0 : e.type) === D ? e.level : this.getVariantIndex();
                }
                getVariantIndex() {
                    var e;
                    let t = this.hls,
                        i = t.currentLevel;
                    return (null != (e = t.loadLevelObj) && e.details) || -1 === i ? t.loadLevel : i;
                }
                variantHasKey(e, t) {
                    if (e) {
                        var i;
                        if (null != (i = e.details) && i.hasKey(t)) return !0;
                        let r = e.audioGroups;
                        if (r)
                            return this.hls.allAudioTracks
                                .filter((e) => r.indexOf(e.groupId) >= 0)
                                .some((e) => {
                                    var i;
                                    return null == (i = e.details) ? void 0 : i.hasKey(t);
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
                    var i, r, s;
                    if (t.fatal) return;
                    let a = this.hls,
                        n = t.context;
                    switch (t.details) {
                        case o.FRAG_LOAD_ERROR:
                        case o.FRAG_LOAD_TIMEOUT:
                        case o.KEY_LOAD_ERROR:
                        case o.KEY_LOAD_TIMEOUT:
                            t.errorAction = this.getFragRetryOrSwitchAction(t);
                            return;
                        case o.FRAG_PARSING_ERROR:
                            if (null != (i = t.frag) && i.gap) {
                                t.errorAction = ts();
                                return;
                            }
                        case o.FRAG_GAP:
                        case o.FRAG_DECRYPT_ERROR:
                            (t.errorAction = this.getFragRetryOrSwitchAction(t)), (t.errorAction.action = 2);
                            return;
                        case o.LEVEL_EMPTY_ERROR:
                        case o.LEVEL_PARSING_ERROR:
                            {
                                let e = t.parent === D ? t.level : a.loadLevel;
                                t.details === o.LEVEL_EMPTY_ERROR &&
                                null != (r = t.context) &&
                                null != (r = r.levelDetails) &&
                                r.live
                                    ? (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, e))
                                    : ((t.levelRetry = !1), (t.errorAction = this.getLevelSwitchAction(t, e)));
                            }
                            return;
                        case o.LEVEL_LOAD_ERROR:
                        case o.LEVEL_LOAD_TIMEOUT:
                            "number" == typeof (null == n ? void 0 : n.level) &&
                                (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.level));
                            return;
                        case o.AUDIO_TRACK_LOAD_ERROR:
                        case o.AUDIO_TRACK_LOAD_TIMEOUT:
                        case o.SUBTITLE_LOAD_ERROR:
                        case o.SUBTITLE_TRACK_LOAD_TIMEOUT:
                            if (n) {
                                let e = a.loadLevelObj;
                                e &&
                                    ((n.type === I && e.hasAudioGroup(n.groupId)) ||
                                        (n.type === k && e.hasSubtitleGroup(n.groupId))) &&
                                    ((t.errorAction = this.getPlaylistRetryOrSwitchAction(t, a.loadLevel)),
                                    (t.errorAction.action = 2),
                                    (t.errorAction.flags = 1));
                            }
                            return;
                        case o.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                            t.errorAction = { action: 2, flags: 2 };
                            return;
                        case o.KEY_SYSTEM_SESSION_UPDATE_FAILED:
                        case o.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
                        case o.KEY_SYSTEM_NO_SESSION:
                            t.errorAction = { action: 2, flags: 4 };
                            return;
                        case o.BUFFER_ADD_CODEC_ERROR:
                        case o.REMUX_ALLOC_ERROR:
                        case o.BUFFER_APPEND_ERROR:
                            t.errorAction ||
                                (t.errorAction = this.getLevelSwitchAction(t, null != (s = t.level) ? s : a.loadLevel));
                            return;
                        case o.INTERNAL_EXCEPTION:
                        case o.BUFFER_APPENDING_ERROR:
                        case o.BUFFER_FULL_ERROR:
                        case o.LEVEL_SWITCH_ERROR:
                        case o.BUFFER_STALLED_ERROR:
                        case o.BUFFER_SEEK_OVER_HOLE:
                        case o.BUFFER_NUDGE_ON_STALL:
                            t.errorAction = ts();
                            return;
                    }
                    t.type === l.KEY_SYSTEM_ERROR && ((t.levelRetry = !1), (t.errorAction = ts()));
                }
                getPlaylistRetryOrSwitchAction(e, t) {
                    let i = e7(this.hls.config.playlistLoadPolicy, e),
                        r = this.playlistError++;
                    if (ti(i, r, e8(e), e.response)) return { action: 5, flags: 0, retryConfig: i, retryCount: r };
                    let s = this.getLevelSwitchAction(e, t);
                    return i && ((s.retryConfig = i), (s.retryCount = r)), s;
                }
                getFragRetryOrSwitchAction(e) {
                    let t = this.hls,
                        i = this.getVariantLevelIndex(e.frag),
                        r = t.levels[i],
                        { fragLoadPolicy: s, keyLoadPolicy: a } = t.config,
                        n = e7(e6(e) ? a : s, e),
                        l = t.levels.reduce((e, t) => e + t.fragmentError, 0);
                    if (r && (e.details !== o.FRAG_GAP && r.fragmentError++, !e9(e)) && ti(n, l, e8(e), e.response))
                        return { action: 5, flags: 0, retryConfig: n, retryCount: l };
                    let h = this.getLevelSwitchAction(e, i);
                    return n && ((h.retryConfig = n), (h.retryCount = l)), h;
                }
                getLevelSwitchAction(e, t) {
                    let i = this.hls;
                    null == t && (t = i.loadLevel);
                    let r = this.hls.levels[t];
                    if (r) {
                        var s, a, n, l;
                        let t = e.details;
                        r.loadError++, t === o.BUFFER_APPEND_ERROR && r.fragmentError++;
                        let h = -1,
                            { levels: d, loadLevel: u, minAutoLevel: f, maxAutoLevel: c } = i;
                        i.autoLevelEnabled || i.config.preserveManualLevelOnError || (i.loadLevel = -1);
                        let g = null == (s = e.frag) ? void 0 : s.type,
                            m =
                                ((g === _ && t === o.FRAG_PARSING_ERROR) ||
                                    ("audio" === e.sourceBufferName &&
                                        (t === o.BUFFER_ADD_CODEC_ERROR || t === o.BUFFER_APPEND_ERROR))) &&
                                d.some(({ audioCodec: e }) => r.audioCodec !== e),
                            p =
                                "video" === e.sourceBufferName &&
                                (t === o.BUFFER_ADD_CODEC_ERROR || t === o.BUFFER_APPEND_ERROR) &&
                                d.some(({ codecSet: e, audioCodec: t }) => r.codecSet !== e && r.audioCodec === t),
                            { type: y, groupId: v } = null != (a = e.context) ? a : {};
                        for (let i = d.length; i--; ) {
                            let s = (i + u) % d.length;
                            if (s !== u && s >= f && s <= c && 0 === d[s].loadError) {
                                let i = d[s];
                                if (t === o.FRAG_GAP && g === D && e.frag) {
                                    let t = d[s].details;
                                    if (t) {
                                        let i = e3(e.frag, t.fragments, e.frag.start);
                                        if (null != i && i.gap) continue;
                                    }
                                } else if ((y === I && i.hasAudioGroup(v)) || (y === k && i.hasSubtitleGroup(v)))
                                    continue;
                                else if (
                                    (g === _ && null != (n = r.audioGroups) && n.some((e) => i.hasAudioGroup(e))) ||
                                    (g === P &&
                                        null != (l = r.subtitleGroups) &&
                                        l.some((e) => i.hasSubtitleGroup(e))) ||
                                    (m && r.audioCodec === i.audioCodec) ||
                                    (p && r.codecSet === i.codecSet) ||
                                    (!m && r.codecSet !== i.codecSet)
                                )
                                    continue;
                                h = s;
                                break;
                            }
                        }
                        if (h > -1 && i.loadLevel !== h)
                            return (
                                (e.levelRetry = !0), (this.playlistError = 0), { action: 2, flags: 0, nextAutoLevel: h }
                            );
                    }
                    return { action: 2, flags: 1 };
                }
                onErrorOut(e, t) {
                    var i;
                    switch (null == (i = t.errorAction) ? void 0 : i.action) {
                        case 0:
                            break;
                        case 2:
                            this.sendAlternateToPenaltyBox(t),
                                t.errorAction.resolved || t.details === o.FRAG_GAP
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
                        i = e.errorAction;
                    if (!i) return;
                    let { flags: r } = i,
                        s = i.nextAutoLevel;
                    switch (r) {
                        case 0:
                            this.switchLevel(e, s);
                            break;
                        case 2: {
                            let r = this.getVariantLevelIndex(e.frag),
                                s = t.levels[r],
                                a = null == s ? void 0 : s.attrs["HDCP-LEVEL"];
                            if (((i.hdcpLevel = a), "NONE" === a))
                                this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
                            else if (a) {
                                (t.maxHdcpLevel = eG[eG.indexOf(a) - 1]),
                                    (i.resolved = !0),
                                    this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
                                break;
                            }
                        }
                        case 4: {
                            let t = e.decryptdata;
                            if (t) {
                                let r = this.hls.levels,
                                    s = r.length;
                                for (let i = s; i--; )
                                    if (this.variantHasKey(r[i], t)) {
                                        var a, n;
                                        this.log(
                                            `Banned key found in level ${i} (${r[i].bitrate}bps) or audio group "${null == ((a = r[i].audioGroups)) ? void 0 : a.join(",")}" (${null == ((n = e.frag)) ? void 0 : n.type} fragment) ${Y(t.keyId || [])}`,
                                        ),
                                            r[i].fragmentError++,
                                            r[i].loadError++,
                                            this.log(`Removing level ${i} with key error (${e.error})`),
                                            this.hls.removeLevel(i);
                                    }
                                let l = e.frag;
                                if (this.hls.levels.length < s) i.resolved = !0;
                                else if (l && l.type !== D) {
                                    let e = l.decryptdata;
                                    e && !t.matches(e) && (i.resolved = !0);
                                }
                            }
                        }
                    }
                    i.resolved || this.switchLevel(e, s);
                }
                switchLevel(e, t) {
                    if (
                        void 0 !== t &&
                        e.errorAction &&
                        (this.warn(`switching to level ${t} after ${e.details}`),
                        (this.hls.nextAutoLevel = t),
                        (e.errorAction.resolved = !0),
                        (this.hls.nextLoadLevel = this.hls.nextAutoLevel),
                        e.details === o.BUFFER_ADD_CODEC_ERROR && e.mimeType && "audiovideo" !== e.sourceBufferName)
                    ) {
                        let t = eO(e.mimeType),
                            i = this.hls.levels;
                        for (let r = i.length; r--; )
                            i[r][`${e.sourceBufferName}Codec`] === t &&
                                (this.log(`Removing level ${r} for ${e.details} ("${t}" not supported)`),
                                this.hls.removeLevel(r));
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
                    this.hls.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        this.hls.on(h.MEDIA_DETACHING, this.onMediaDetaching, this);
                }
                unregisterListeners() {
                    this.hls.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        this.hls.off(h.MEDIA_DETACHING, this.onMediaDetaching, this);
                }
                destroy() {
                    this.timer && clearInterval(this.timer),
                        this.unregisterListeners(),
                        (this.isVideoPlaybackQualityAvailable = !1),
                        (this.media = null);
                }
                onMediaAttaching(e, t) {
                    let i = this.hls.config;
                    if (i.capLevelOnFPSDrop) {
                        let e = t.media instanceof self.HTMLVideoElement ? t.media : null;
                        (this.media = e),
                            e &&
                                "function" == typeof e.getVideoPlaybackQuality &&
                                (this.isVideoPlaybackQualityAvailable = !0),
                            self.clearInterval(this.timer),
                            (this.timer = self.setInterval(
                                this.checkFPSInterval.bind(this),
                                i.fpsDroppedMonitoringPeriod,
                            ));
                    }
                }
                onMediaDetaching() {
                    this.media = null;
                }
                checkFPS(e, t, i) {
                    let r = performance.now();
                    if (t) {
                        if (this.lastTime) {
                            let e = r - this.lastTime,
                                s = i - this.lastDroppedFrames,
                                a = t - this.lastDecodedFrames,
                                n = (1e3 * s) / e,
                                l = this.hls;
                            if (
                                (l.trigger(h.FPS_DROP, { currentDropped: s, currentDecoded: a, totalDroppedFrames: i }),
                                n > 0 && s > l.config.fpsDroppedMonitoringThreshold * a)
                            ) {
                                let e = l.currentLevel;
                                l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + e),
                                    e > 0 &&
                                        (-1 === l.autoLevelCapping || l.autoLevelCapping >= e) &&
                                        ((e -= 1),
                                        l.trigger(h.FPS_DROP_LEVEL_CAPPING, { level: e, droppedLevel: l.currentLevel }),
                                        (l.autoLevelCapping = e),
                                        this.streamController.nextLevelSwitch());
                            }
                        }
                        (this.lastTime = r), (this.lastDroppedFrames = i), (this.lastDecodedFrames = t);
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
            requestMediaKeySystemAccessFunc: tZ,
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
            cueHandler: ax,
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
        subtitleStreamController: class extends iN {
            constructor(e, t, i) {
                super(e, t, i, "subtitle-stream-controller", P),
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
                e.on(h.LEVEL_LOADED, this.onLevelLoaded, this),
                    e.on(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                    e.on(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                    e.on(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    e.on(h.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                    e.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }
            unregisterListeners() {
                super.unregisterListeners();
                let { hls: e } = this;
                e.off(h.LEVEL_LOADED, this.onLevelLoaded, this),
                    e.off(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                    e.off(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                    e.off(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    e.off(h.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                    e.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }
            startLoad(e, t) {
                this.stopLoad(),
                    (this.state = i_),
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
                let i,
                    { frag: r, success: s } = t;
                if ((this.fragContextChanged(r) || (ee(r) && (this.fragPrevious = r), (this.state = i_)), !s)) return;
                let a = this.tracksBuffered[this.currentTrackId];
                if (!a) return;
                let n = r.start;
                for (let e = 0; e < a.length; e++)
                    if (n >= a[e].start && n <= a[e].end) {
                        i = a[e];
                        break;
                    }
                let l = r.start + r.duration;
                i ? (i.end = l) : ((i = { start: n, end: l }), a.push(i)),
                    this.fragmentTracker.fragBuffered(r),
                    this.fragBufferedComplete(r, null),
                    this.media && this.tick();
            }
            onBufferFlushing(e, t) {
                let { startOffset: i, endOffset: r } = t;
                if (0 === i && r !== 1 / 0) {
                    let e = r - 1;
                    if (e <= 0) return;
                    (t.endOffsetSubtitles = Math.max(0, e)),
                        this.tracksBuffered.forEach((t) => {
                            for (let i = 0; i < t.length; ) {
                                if (t[i].end <= e) {
                                    t.shift();
                                    continue;
                                }
                                if (t[i].start < e) t[i].start = e;
                                else break;
                                i++;
                            }
                        }),
                        this.fragmentTracker.removeFragmentsInRange(i, e, P);
                }
            }
            onError(e, t) {
                let i = t.frag;
                (null == i ? void 0 : i.type) === P &&
                    (t.details === o.FRAG_GAP && this.fragmentTracker.fragBuffered(i, !0),
                    this.fragCurrent && this.fragCurrent.abortRequests(),
                    this.state !== iD && (this.state = i_));
            }
            onSubtitleTracksUpdated(e, { subtitleTracks: t }) {
                if (this.levels && rj(this.levels, t)) {
                    this.levels = t.map((e) => new eY(e));
                    return;
                }
                (this.tracksBuffered = []),
                    (this.levels = t.map((e) => {
                        let t = new eY(e);
                        return (this.tracksBuffered[t.id] = []), t;
                    })),
                    this.fragmentTracker.removeFragmentsInRange(0, 1 / 0, P),
                    (this.fragPrevious = null),
                    (this.mediaBuffer = null);
            }
            onSubtitleTrackSwitch(e, t) {
                var i;
                if (
                    ((this.currentTrackId = t.id),
                    !(null != (i = this.levels) && i.length) || -1 === this.currentTrackId)
                )
                    return void this.clearInterval();
                let r = this.levels[this.currentTrackId];
                null != r && r.details ? (this.mediaBuffer = this.mediaBufferTimeRanges) : (this.mediaBuffer = null),
                    r && this.state !== iD && this.setInterval(500);
            }
            onSubtitleTrackLoaded(e, t) {
                var i, r;
                let { currentTrackId: s, levels: a } = this,
                    { details: n, id: l } = t;
                if (!a) return void this.warn(`Subtitle tracks were reset while loading level ${l}`);
                let o = a[l];
                if (l >= a.length || !o) return;
                this.log(
                    `Subtitle track ${l} loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""},duration:${n.totalduration}`,
                ),
                    (this.mediaBuffer = this.mediaBufferTimeRanges);
                let d = 0;
                if (n.live || (null != (i = o.details) && i.live)) {
                    if (n.deltaUpdateFailed) return;
                    let e = this.mainDetails;
                    if (!e) {
                        this.startFragRequested = !1;
                        return;
                    }
                    let t = e.fragments[0];
                    o.details
                        ? 0 ===
                              (d = this.alignPlaylists(
                                  n,
                                  o.details,
                                  null == (r = this.levelLastLoaded) ? void 0 : r.details,
                              )) &&
                          t &&
                          ic(n, (d = t.start))
                        : n.hasProgramDateTime && e.hasProgramDateTime
                          ? (iR(n, e), (d = n.fragmentStart))
                          : t && ic(n, (d = t.start)),
                        e && !this.startFragRequested && this.setStartPosition(e, d);
                }
                (o.details = n),
                    (this.levelLastLoaded = o),
                    l === s &&
                        (this.hls.trigger(h.SUBTITLE_TRACK_UPDATED, { details: n, id: l, groupId: t.groupId }),
                        this.tick(),
                        n.live &&
                            !this.fragCurrent &&
                            this.media &&
                            this.state === i_ &&
                            (e3(null, n.fragments, this.media.currentTime, 0) ||
                                (this.warn("Subtitle playlist not aligned with playback"), (o.details = void 0))));
            }
            _handleFragmentLoadComplete(e) {
                let { frag: t, payload: i } = e,
                    r = t.decryptdata,
                    s = this.hls;
                if (
                    !this.fragContextChanged(t) &&
                    i &&
                    i.byteLength > 0 &&
                    null != r &&
                    r.key &&
                    r.iv &&
                    tO(r.method)
                ) {
                    let e = performance.now();
                    this.decrypter
                        .decrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer, tF(r.method))
                        .catch((e) => {
                            throw (
                                (s.trigger(h.ERROR, {
                                    type: l.MEDIA_ERROR,
                                    details: o.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: e,
                                    reason: e.message,
                                    frag: t,
                                }),
                                e)
                            );
                        })
                        .then((i) => {
                            let r = performance.now();
                            s.trigger(h.FRAG_DECRYPTED, { frag: t, payload: i, stats: { tstart: e, tdecrypt: r } });
                        })
                        .catch((e) => {
                            this.warn(`${e.name}: ${e.message}`), (this.state = i_);
                        });
                }
            }
            doTick() {
                if (!this.media) {
                    this.state = i_;
                    return;
                }
                if (this.state === i_) {
                    let { currentTrackId: e, levels: t } = this,
                        i = null == t ? void 0 : t[e];
                    if (!i || !t.length || !i.details || this.waitForLive(i)) return;
                    let { config: r } = this,
                        s = this.getLoadPosition(),
                        { end: a, len: n } = tR.bufferedInfo(
                            this.tracksBuffered[this.currentTrackId] || [],
                            s,
                            r.maxBufferHole,
                        ),
                        l = i.details;
                    if (n > this.hls.maxBufferLength + l.levelTargetDuration) return;
                    let o = l.fragments,
                        h = o.length,
                        d = l.edge,
                        u = null,
                        f = this.fragPrevious;
                    if (a < d) {
                        let e = r.maxFragLookUpTolerance;
                        (u = e3(f, o, Math.max(o[0].start, a), a > d - e ? 0 : e)) ||
                            !f ||
                            !(f.start < o[0].start) ||
                            (u = o[0]);
                    } else u = o[h - 1];
                    if (!(u = this.filterReplacedPrimary(u, i.details))) return;
                    let c = o[u.sn - l.startSN - 1];
                    if (
                        (c && c.cc === u.cc && this.fragmentTracker.getState(c) === ta && (u = c),
                        this.fragmentTracker.getState(u) === ta)
                    ) {
                        let e = this.mapToInitFragWhenRequired(u);
                        e && this.loadFragment(e, i, a);
                    }
                }
            }
            loadFragment(e, t, i) {
                ee(e) ? super.loadFragment(e, t, i) : this._loadInitSegment(e, t);
            }
            get mediaBufferTimeRanges() {
                return new sZ(this.tracksBuffered[this.currentTrackId] || []);
            }
        },
        subtitleTrackController: class extends rW {
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
                            t = sU(this.media.textTracks);
                        for (let i = 0; i < t.length; i++)
                            if ("hidden" === t[i].mode) e = t[i];
                            else if ("showing" === t[i].mode) {
                                e = t[i];
                                break;
                            }
                        let i = this.findTrackForTextTrack(e);
                        this.subtitleTrack !== i && this.setSubtitleTrack(i);
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
                e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.on(h.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.on(h.LEVEL_LOADING, this.onLevelLoading, this),
                    e.on(h.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    e.on(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    e.on(h.ERROR, this.onError, this);
            }
            unregisterListeners() {
                let { hls: e } = this;
                e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.off(h.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.off(h.LEVEL_LOADING, this.onLevelLoading, this),
                    e.off(h.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    e.off(h.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                    e.off(h.ERROR, this.onError, this);
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
                let i = this.media;
                if (!i) return;
                let r = !!t.transferMedia;
                self.clearInterval(this.subtitlePollingInterval),
                    this.useTextTrackPolling || i.textTracks.removeEventListener("change", this.asyncPollTrackChange),
                    this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
                    (this.subtitleTrack = -1),
                    (this.media = null),
                    r ||
                        sU(i.textTracks).forEach((e) => {
                            sF(e);
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
                let { id: i, groupId: r, details: s } = t,
                    a = this.tracksInGroup[i];
                if (!a || a.groupId !== r)
                    return void this.warn(
                        `Subtitle track with id:${i} and group:${r} not found in active group ${null == a ? void 0 : a.groupId}`,
                    );
                let n = a.details;
                (a.details = t.details),
                    this.log(
                        `Subtitle track ${i} "${a.name}" lang:${a.lang} group:${r} loaded [${s.startSN}-${s.endSN}]`,
                    ),
                    i === this.trackId && this.playlistLoaded(i, t, n);
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
                let i = t.subtitleGroups || null,
                    r = this.groupIds,
                    s = this.currentTrack;
                if (
                    !i ||
                    (null == r ? void 0 : r.length) !== (null == i ? void 0 : i.length) ||
                    (null != i && i.some((e) => (null == r ? void 0 : r.indexOf(e)) === -1))
                ) {
                    (this.groupIds = i), (this.trackId = -1), (this.currentTrack = null);
                    let e = this.tracks.filter((e) => !i || -1 !== i.indexOf(e.groupId));
                    if (e.length)
                        this.selectDefaultTrack && !e.some((e) => e.default) && (this.selectDefaultTrack = !1),
                            e.forEach((e, t) => {
                                e.id = t;
                            });
                    else if (!s && !this.tracksInGroup.length) return;
                    this.tracksInGroup = e;
                    let t = this.hls.config.subtitlePreference;
                    if (!s && t) {
                        this.selectDefaultTrack = !1;
                        let i = ez(t, e);
                        if (i > -1) s = e[i];
                        else {
                            let e = ez(t, this.tracks);
                            s = this.tracks[e];
                        }
                    }
                    let r = this.findTrackId(s);
                    -1 === r && s && (r = this.findTrackId(null)),
                        this.log(
                            `Updating subtitle tracks, ${e.length} track(s) found in "${null == i ? void 0 : i.join(",")}" group-id`,
                        ),
                        this.hls.trigger(h.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: e }),
                        -1 !== r && -1 === this.trackId && this.setSubtitleTrack(r);
                }
            }
            findTrackId(e) {
                let t = this.tracksInGroup,
                    i = this.selectDefaultTrack;
                for (let r = 0; r < t.length; r++) {
                    let s = t[r];
                    if ((!i || s.default) && (i || e) && (!e || eZ(s, e))) return r;
                }
                if (e) {
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (rq(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return i;
                    }
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (rq(e.attrs, r.attrs, ["LANGUAGE"])) return i;
                    }
                }
                return -1;
            }
            findTrackForTextTrack(e) {
                if (e) {
                    let t = this.tracksInGroup;
                    for (let i = 0; i < t.length; i++) if (rX(t[i], e)) return i;
                }
                return -1;
            }
            onError(e, t) {
                !t.fatal &&
                    t.context &&
                    (t.context.type !== k ||
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
                        let i = this.currentTrack;
                        if (i && eZ(e, i)) return i;
                        let r = ez(e, this.tracksInGroup);
                        if (r > -1) {
                            let e = this.tracksInGroup[r];
                            return this.setSubtitleTrack(r), e;
                        }
                        {
                            if (i) return null;
                            let r = ez(e, t);
                            if (r > -1) return t[r];
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
                let i = e.id,
                    r = e.groupId,
                    s = this.getUrlWithDirectives(e.url, t),
                    a = e.details,
                    n = null == a ? void 0 : a.age;
                this.log(
                    `Loading subtitle ${i} "${e.name}" lang:${e.lang} group:${r}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${n && a.live ? " age " + n.toFixed(1) + (a.type ? " " + a.type : "") : ""} ${s}`,
                ),
                    this.hls.trigger(h.SUBTITLE_TRACK_LOADING, {
                        url: s,
                        id: i,
                        groupId: r,
                        deliveryDirectives: t || null,
                        track: e,
                    });
            }
            toggleTrackModes() {
                let e,
                    { media: t } = this;
                if (!t) return;
                let i = sU(t.textTracks),
                    r = this.currentTrack;
                if (
                    (r &&
                        ((e = i.filter((e) => rX(r, e))[0]) ||
                            this.warn(
                                `Unable to find subtitle TextTrack with name "${r.name}" and language "${r.lang}"`,
                            )),
                    [].slice.call(i).forEach((t) => {
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
                if (e < -1 || e >= t.length || !s(e)) return void this.warn(`Invalid subtitle track id: ${e}`);
                this.selectDefaultTrack = !1;
                let i = this.currentTrack,
                    r = t[e] || null;
                if (((this.trackId = e), (this.currentTrack = r), this.toggleTrackModes(), !r))
                    return void this.hls.trigger(h.SUBTITLE_TRACK_SWITCH, { id: e });
                let a = !!r.details && !r.details.live;
                if (e === this.trackId && r === i && a) return;
                this.log(
                    `Switching to subtitle-track ${e}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : ""),
                );
                let { id: n, groupId: l = "", name: o, type: d, url: u } = r;
                this.hls.trigger(h.SUBTITLE_TRACK_SWITCH, { id: n, groupId: l, name: o, type: d, url: u });
                let f = this.switchParams(r.url, null == i ? void 0 : i.details, r.details);
                this.loadPlaylist(f);
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
                    (this.vttCCs = aC()),
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
                    e.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.on(h.MANIFEST_LOADED, this.onManifestLoaded, this),
                    e.on(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                    e.on(h.FRAG_LOADING, this.onFragLoading, this),
                    e.on(h.FRAG_LOADED, this.onFragLoaded, this),
                    e.on(h.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                    e.on(h.FRAG_DECRYPTED, this.onFragDecrypted, this),
                    e.on(h.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    e.on(h.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                    e.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }
            destroy() {
                let { hls: e } = this;
                e.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.off(h.MANIFEST_LOADED, this.onManifestLoaded, this),
                    e.off(h.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                    e.off(h.FRAG_LOADING, this.onFragLoading, this),
                    e.off(h.FRAG_LOADED, this.onFragLoaded, this),
                    e.off(h.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                    e.off(h.FRAG_DECRYPTED, this.onFragDecrypted, this),
                    e.off(h.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    e.off(h.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                    e.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    (this.hls = this.config = this.media = null),
                    (this.cea608Parser1 = this.cea608Parser2 = void 0);
            }
            initCea608Parsers() {
                let e = new aD(this, "textTrack1"),
                    t = new aD(this, "textTrack2"),
                    i = new aD(this, "textTrack3"),
                    r = new aD(this, "textTrack4");
                (this.cea608Parser1 = new ar(1, e, t)), (this.cea608Parser2 = new ar(3, i, r));
            }
            addCues(e, t, i, r, s) {
                let a = !1;
                for (let e = s.length; e--; ) {
                    var n, l;
                    let r = s[e],
                        o = ((n = r[0]), (l = r[1]), Math.min(l, i) - Math.max(n, t));
                    if (o >= 0 && ((r[0] = Math.min(r[0], t)), (r[1] = Math.max(r[1], i)), (a = !0), o / (i - t) > 0.5))
                        return;
                }
                if ((a || s.push([t, i]), this.config.renderTextTracksNatively)) {
                    let s = this.captionsTracks[e];
                    this.Cues.newCue(s, t, i, r);
                } else {
                    let s = this.Cues.newCue(null, t, i, r);
                    this.hls.trigger(h.CUES_PARSED, { type: "captions", cues: s, track: e });
                }
            }
            onInitPtsFound(e, { frag: t, id: i, initPTS: r, timescale: s, trackId: a }) {
                let { unparsedVttFrags: n } = this;
                i === D && (this.initPTS[t.cc] = { baseTime: r, timescale: s, trackId: a }),
                    n.length &&
                        ((this.unparsedVttFrags = []),
                        n.forEach((e) => {
                            this.initPTS[e.frag.cc]
                                ? this.onFragLoaded(h.FRAG_LOADED, e)
                                : this.hls.trigger(h.SUBTITLE_FRAG_PROCESSED, {
                                      success: !1,
                                      frag: e.frag,
                                      error: Error("Subtitle discontinuity domain does not match main"),
                                  });
                        }));
            }
            getExistingTrack(e, t) {
                let { media: i } = this;
                if (i)
                    for (let r = 0; r < i.textTracks.length; r++) {
                        let s = i.textTracks[r];
                        if (
                            aP(s, {
                                name: e,
                                lang: t,
                                characteristics: "transcribes-spoken-dialog,describes-music-and-sound",
                            })
                        )
                            return s;
                    }
                return null;
            }
            createCaptionsTrack(e) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
            }
            createNativeTrack(e) {
                if (this.captionsTracks[e]) return;
                let { captionsProperties: t, captionsTracks: i, media: r } = this,
                    { label: s, languageCode: a } = t[e],
                    n = this.getExistingTrack(s, a);
                if (n) (i[e] = n), sF(i[e]), sM(i[e], r);
                else {
                    let t = this.createTextTrack("captions", s, a);
                    t && ((t[e] = !0), (i[e] = t));
                }
            }
            createNonNativeTrack(e) {
                if (this.nonNativeCaptionsTracks[e]) return;
                let t = this.captionsProperties[e];
                if (!t) return;
                let i = {
                    _id: e,
                    label: t.label,
                    kind: "captions",
                    default: !!t.media && !!t.media.default,
                    closedCaptions: t.media,
                };
                (this.nonNativeCaptionsTracks[e] = i),
                    this.hls.trigger(h.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [i] });
            }
            createTextTrack(e, t, i) {
                let r = this.media;
                if (r) return r.addTextTrack(e, t, i);
            }
            onMediaAttaching(e, t) {
                (this.media = t.media), t.mediaSource || this._cleanTracks();
            }
            onMediaDetaching(e, t) {
                let i = !!t.transferMedia;
                if (((this.media = null), i)) return;
                let { captionsTracks: r } = this;
                Object.keys(r).forEach((e) => {
                    sF(r[e]), delete r[e];
                }),
                    (this.nonNativeCaptionsTracks = {});
            }
            onManifestLoading() {
                (this.lastCc = -1),
                    (this.lastSn = -1),
                    (this.lastPartIndex = -1),
                    (this.prevCC = -1),
                    (this.vttCCs = aC()),
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
                if (t) for (let e = 0; e < t.length; e++) sF(t[e]);
            }
            onSubtitleTracksUpdated(e, t) {
                let i = t.subtitleTracks || [],
                    r = i.some((e) => e.textCodec === av);
                if (this.config.enableWebVTT || (r && this.config.enableIMSC1)) {
                    if (rj(this.tracks, i)) {
                        this.tracks = i;
                        return;
                    }
                    if (((this.textTracks = []), (this.tracks = i), this.config.renderTextTracksNatively)) {
                        let e = this.media,
                            t = e ? sU(e.textTracks) : null;
                        if (
                            (this.tracks.forEach((e, i) => {
                                let r;
                                if (t) {
                                    let i = null;
                                    for (let r = 0; r < t.length; r++)
                                        if (t[r] && aP(t[r], e)) {
                                            (i = t[r]), (t[r] = null);
                                            break;
                                        }
                                    i && (r = i);
                                }
                                if (r) sF(r);
                                else {
                                    let t = a_(e);
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
                        this.hls.trigger(h.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: e });
                    }
                }
            }
            onManifestLoaded(e, t) {
                this.config.enableCEA708Captions &&
                    t.captions &&
                    t.captions.forEach((e) => {
                        let t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
                        if (!t) return;
                        let i = `textTrack${t[1]}`,
                            r = this.captionsProperties[i];
                        r && ((r.label = e.name), e.lang && (r.languageCode = e.lang), (r.media = e));
                    });
            }
            closedCaptionsForLevel(e) {
                let t = this.hls.levels[e.level];
                return null == t ? void 0 : t.attrs["CLOSED-CAPTIONS"];
            }
            onFragLoading(e, t) {
                if (this.enabled && t.frag.type === D) {
                    var i, r;
                    let { cea608Parser1: e, cea608Parser2: s, lastSn: a } = this,
                        { cc: n, sn: l } = t.frag,
                        o = null != (i = null == (r = t.part) ? void 0 : r.index) ? i : -1;
                    e &&
                        s &&
                        (l !== a + 1 || (l === a && o !== this.lastPartIndex + 1) || n !== this.lastCc) &&
                        (e.reset(), s.reset()),
                        (this.lastCc = n),
                        (this.lastSn = l),
                        (this.lastPartIndex = o);
                }
            }
            onFragLoaded(e, t) {
                let { frag: i, payload: r } = t;
                if (i.type === P)
                    if (r.byteLength) {
                        let e = i.decryptdata,
                            s = "stats" in t;
                        if (null == e || !e.encrypted || s) {
                            let e = this.tracks[i.level],
                                s = this.vttCCs;
                            s[i.cc] ||
                                ((s[i.cc] = { start: i.start, prevCC: this.prevCC, new: !0 }), (this.prevCC = i.cc)),
                                e && e.textCodec === av ? this._parseIMSC1(i, r) : this._parseVTTs(t);
                        }
                    } else
                        this.hls.trigger(h.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: i,
                            error: Error("Empty subtitle payload"),
                        });
            }
            _parseIMSC1(e, t) {
                let i = this.hls;
                aA(
                    t,
                    this.initPTS[e.cc],
                    (t) => {
                        this._appendCues(t, e.level), i.trigger(h.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e });
                    },
                    (t) => {
                        i.logger.log(`Failed to parse IMSC1: ${t}`),
                            i.trigger(h.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e, error: t });
                    },
                );
            }
            _parseVTTs(e) {
                var t, i, r, s, a, n, l, o;
                let d,
                    u,
                    f,
                    c,
                    g,
                    m,
                    p,
                    y,
                    v,
                    { frag: E, payload: T } = e,
                    { initPTS: S, unparsedVttFrags: A } = this,
                    L = S.length - 1;
                if (!S[E.cc] && -1 === L) return void A.push(e);
                let R = this.hls;
                (i = null != (t = E.initSegment) && t.data ? ey(E.initSegment.data, new Uint8Array(T)).buffer : T),
                    (r = this.initPTS[E.cc]),
                    (s = this.vttCCs),
                    (a = E.cc),
                    (n = E.start),
                    (l = (e) => {
                        this._appendCues(e, E.level), R.trigger(h.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: E });
                    }),
                    (o = (t) => {
                        let i = "Missing initPTS for VTT MPEGTS" === t.message;
                        i ? A.push(e) : this._fallbackToIMSC1(E, T),
                            R.logger.log(`Failed to parse VTT cue: ${t}`),
                            (i && L > E.cc) || R.trigger(h.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: E, error: t });
                    }),
                    (u = new af()),
                    (f = V(new Uint8Array(i)).trim().replace(ac, "\n").split("\n")),
                    (c = []),
                    (g = r
                        ? (function (e, t = 1) {
                              return rk(e, 9e4, 1 / t);
                          })(r.baseTime, r.timescale)
                        : 0),
                    (m = "00:00.000"),
                    (p = 0),
                    (y = 0),
                    (v = !0),
                    (u.oncue = function (e) {
                        let t = s[a],
                            i = s.ccOffset,
                            l = (p - g) / 9e4;
                        if ((null != t && t.new && (void 0 !== y ? (i = s.ccOffset = t.start) : ay(s, a, l)), l)) {
                            if (!r) {
                                d = Error("Missing initPTS for VTT MPEGTS");
                                return;
                            }
                            i = l - s.presentationOffset;
                        }
                        let o = e.endTime - e.startTime,
                            h = rx((e.startTime + i - y) * 9e4, 9e4 * n) / 9e4;
                        (e.startTime = Math.max(h, 0)), (e.endTime = Math.max(h + o, 0));
                        let u = e.text.trim();
                        (e.text = decodeURIComponent(encodeURIComponent(u))),
                            e.id || (e.id = ap(e.startTime, e.endTime, u)),
                            e.endTime > 0 && c.push(e);
                    }),
                    (u.onparsingerror = function (e) {
                        d = e;
                    }),
                    (u.onflush = function () {
                        d ? o(d) : l(c);
                    }),
                    f.forEach((e) => {
                        if (v)
                            if (ag(e, "X-TIMESTAMP-MAP=")) {
                                (v = !1),
                                    e
                                        .slice(16)
                                        .split(",")
                                        .forEach((e) => {
                                            ag(e, "LOCAL:")
                                                ? (m = e.slice(6))
                                                : ag(e, "MPEGTS:") && (p = parseInt(e.slice(7)));
                                        });
                                try {
                                    y = am(m) / 1e3;
                                } catch (e) {
                                    d = e;
                                }
                                return;
                            } else "" === e && (v = !1);
                        u.parse(e + "\n");
                    }),
                    u.flush();
            }
            _fallbackToIMSC1(e, t) {
                let i = this.tracks[e.level];
                i.textCodec ||
                    aA(
                        t,
                        this.initPTS[e.cc],
                        () => {
                            (i.textCodec = av), this._parseIMSC1(e, t);
                        },
                        () => {
                            i.textCodec = "wvtt";
                        },
                    );
            }
            _appendCues(e, t) {
                let i = this.hls;
                if (this.config.renderTextTracksNatively) {
                    let i = this.textTracks[t];
                    if (!i || "disabled" === i.mode) return;
                    e.forEach((e) => sO(i, e));
                } else {
                    let r = this.tracks[t];
                    if (!r) return;
                    let s = r.default ? "default" : "subtitles" + t;
                    i.trigger(h.CUES_PARSED, { type: "subtitles", cues: e, track: s });
                }
            }
            onFragDecrypted(e, t) {
                let { frag: i } = t;
                i.type === P && this.onFragLoaded(h.FRAG_LOADED, t);
            }
            onSubtitleTracksCleared() {
                (this.tracks = []), (this.captionsTracks = {});
            }
            onFragParsingUserdata(e, t) {
                if (!this.enabled || !this.config.enableCEA708Captions) return;
                let { frag: i, samples: r } = t;
                if (i.type !== D || "NONE" !== this.closedCaptionsForLevel(i))
                    for (let e = 0; e < r.length; e++) {
                        let t = r[e].bytes;
                        if (t) {
                            this.cea608Parser1 || this.initCea608Parsers();
                            let i = this.extractCea608Data(t);
                            this.cea608Parser1.addData(r[e].pts, i[0]), this.cea608Parser2.addData(r[e].pts, i[1]);
                        }
                    }
            }
            onBufferFlushing(e, { startOffset: t, endOffset: i, endOffsetSubtitles: r, type: s }) {
                let { media: a } = this;
                if (a && !(a.currentTime < i)) {
                    if (!s || "video" === s) {
                        let { captionsTracks: e } = this;
                        Object.keys(e).forEach((r) => s$(e[r], t, i));
                    }
                    if (this.config.renderTextTracksNatively && 0 === t && void 0 !== r) {
                        let { textTracks: e } = this;
                        Object.keys(e).forEach((i) => s$(e[i], t, r));
                    }
                }
            }
            extractCea608Data(e) {
                let t = [[], []],
                    i = 31 & e[0],
                    r = 2;
                for (let s = 0; s < i; s++) {
                    let i = e[r++],
                        s = 127 & e[r++],
                        a = 127 & e[r++];
                    if ((0 !== s || 0 !== a) && (4 & i) != 0) {
                        let e = 3 & i;
                        (0 === e || 1 === e) && (t[e].push(s), t[e].push(a));
                    }
                }
                return t;
            }
        },
        audioStreamController: class extends iN {
            constructor(e, t, i) {
                super(e, t, i, "audio-stream-controller", _),
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
                e.on(h.LEVEL_LOADED, this.onLevelLoaded, this),
                    e.on(h.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                    e.on(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    e.on(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    e.on(h.BUFFER_RESET, this.onBufferReset, this),
                    e.on(h.BUFFER_CREATED, this.onBufferCreated, this),
                    e.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    e.on(h.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    e.on(h.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    e.on(h.FRAG_LOADING, this.onFragLoading, this),
                    e.on(h.FRAG_BUFFERED, this.onFragBuffered, this);
            }
            unregisterListeners() {
                let { hls: e } = this;
                e &&
                    (super.unregisterListeners(),
                    e.off(h.LEVEL_LOADED, this.onLevelLoaded, this),
                    e.off(h.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                    e.off(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    e.off(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    e.off(h.BUFFER_RESET, this.onBufferReset, this),
                    e.off(h.BUFFER_CREATED, this.onBufferCreated, this),
                    e.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    e.off(h.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    e.off(h.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    e.off(h.FRAG_LOADING, this.onFragLoading, this),
                    e.off(h.FRAG_BUFFERED, this.onFragBuffered, this));
            }
            onInitPtsFound(e, { frag: t, id: i, initPTS: r, timescale: s, trackId: a }) {
                if (i === D) {
                    let e = t.cc,
                        i = this.fragCurrent;
                    if (
                        ((this.initPTS[e] = { baseTime: r, timescale: s, trackId: a }),
                        this.log(`InitPTS for cc: ${e} found from main: ${r / s} (${r}/${s}) trackId: ${a}`),
                        (this.mainAnchor = t),
                        this.state === iU)
                    ) {
                        let i = this.waitingData;
                        ((i || this.loadingParts) && (!i || i.frag.cc === e)) ||
                            this.syncWithAnchor(t, null == i ? void 0 : i.frag);
                    } else
                        !this.hls.hasEnoughToStart && i && i.cc !== e
                            ? (i.abortRequests(), this.syncWithAnchor(t, i))
                            : this.state === i_ && this.tick();
                }
            }
            getLoadPosition() {
                return !this.startFragRequested && this.nextLoadPosition >= 0
                    ? this.nextLoadPosition
                    : super.getLoadPosition();
            }
            syncWithAnchor(e, t) {
                var i;
                let r = (null == (i = this.mainFragLoading) ? void 0 : i.frag) || null;
                if (t && (null == r ? void 0 : r.cc) === t.cc) return;
                let s = (r || e).cc,
                    a = e5(this.getLevelDetails(), s, this.getLoadPosition());
                a &&
                    (this.log(`Syncing with main frag at ${a.start} cc ${a.cc}`),
                    (this.startFragRequested = !1),
                    (this.nextLoadPosition = a.start),
                    this.resetLoadingState(),
                    this.state === i_ && this.doTickIdle());
            }
            startLoad(e, t) {
                if (!this.levels) {
                    (this.startPosition = e), (this.state = iD);
                    return;
                }
                let i = this.lastCurrentTime;
                this.stopLoad(),
                    this.setInterval(100),
                    i > 0 && -1 === e
                        ? (this.log(`Override startPosition with lastCurrentTime @${i.toFixed(3)}`),
                          (e = i),
                          (this.state = i_))
                        : (this.state = ix),
                    (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
                    (this.startPosition = t ? -1 : e),
                    this.tick();
            }
            doTick() {
                switch (this.state) {
                    case i_:
                        this.doTickIdle();
                        break;
                    case ix: {
                        let { levels: e, trackId: t } = this,
                            i = null == e ? void 0 : e[t],
                            r = null == i ? void 0 : i.details;
                        if (r && !this.waitForLive(i)) {
                            if (this.waitForCdnTuneIn(r)) break;
                            this.state = iU;
                        }
                        break;
                    }
                    case iw:
                        this.checkRetryDate();
                        break;
                    case iU: {
                        let e = this.waitingData;
                        if (e) {
                            let { frag: t, part: i, cache: r, complete: s } = e,
                                a = this.mainAnchor;
                            if (void 0 !== this.initPTS[t.cc]) {
                                (this.waitingData = null), (this.state = iC);
                                let e = { frag: t, part: i, payload: r.flush().buffer, networkDetails: null };
                                this._handleFragmentLoadProgress(e), s && super._handleFragmentLoadComplete(e);
                            } else a && a.cc !== e.frag.cc && this.syncWithAnchor(a, e.frag);
                        } else this.state = i_;
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
                let { hls: t, levels: i, media: r, trackId: s } = this,
                    a = t.config;
                if (
                    !this.buffering ||
                    (!r && !this.primaryPrefetch && (this.startFragRequested || !a.startFragPrefetch)) ||
                    !(null != i && i[s])
                )
                    return;
                let n = i[s],
                    l = n.details;
                if (!l || this.waitForLive(n) || this.waitForCdnTuneIn(l)) {
                    (this.state = ix), (this.startFragRequested = !1);
                    return;
                }
                let o = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.bufferFlushed && o && ((this.bufferFlushed = !1), this.afterBufferFlushed(o, Q, _));
                let d = this.getFwdBufferInfo(o, _);
                if (null === d) return;
                if (!this.switchingTrack && this._streamEnded(d, l)) {
                    t.trigger(h.BUFFER_EOS, { type: "audio" }), (this.state = iF);
                    return;
                }
                let u = d.len,
                    f = t.maxBufferLength,
                    c = l.fragments,
                    g = c[0].start,
                    m = this.getLoadPosition(),
                    p = this.flushing ? m : d.end;
                if (
                    (this.switchingTrack &&
                        r &&
                        l.PTSKnown &&
                        m < g &&
                        (d.end > g || d.nextStart) &&
                        (this.log("Alt audio track ahead of main track, seek to start of alt audio track"),
                        (r.currentTime = g + 0.05)),
                    u >= f && !this.switchingTrack && p < c[c.length - 1].start)
                )
                    return;
                let y = this.getNextFragment(p, l);
                if ((y && this.isLoopLoading(y, p) && (y = this.getNextFragmentLoopLoading(y, l, d, D, f)), !y)) {
                    this.bufferFlushed = !0;
                    return;
                }
                let v = (null == (e = this.mainFragLoading) ? void 0 : e.frag) || null;
                if (
                    !this.audioOnly &&
                    this.startFragRequested &&
                    v &&
                    ee(y) &&
                    !y.endList &&
                    (!l.live || (!this.loadingParts && p < this.hls.liveSyncPosition)) &&
                    ("OK" === this.fragmentTracker.getState(v) && (this.mainFragLoading = v = null), v && ee(v))
                ) {
                    if (y.start > v.end) {
                        let e = this.fragmentTracker.getFragAtPos(p, D);
                        e && e.end > v.end && ((v = e), (this.mainFragLoading = { frag: e, targetBufferTime: null }));
                    }
                    if (y.start > v.end) return;
                }
                this.loadFragment(y, n, p);
            }
            onMediaDetaching(e, t) {
                (this.bufferFlushed = this.flushing = !1), super.onMediaDetaching(e, t);
            }
            onAudioTracksUpdated(e, { audioTracks: t }) {
                this.resetTransmuxer(), (this.levels = t.map((e) => new eY(e)));
            }
            onAudioTrackSwitching(e, t) {
                let i = !!t.url;
                this.trackId = t.id;
                let { fragCurrent: r } = this;
                r && (r.abortRequests(), this.removeUnbufferedFrags(r.start)),
                    this.resetLoadingState(),
                    i
                        ? ((this.switchingTrack = t),
                          this.flushAudioIfNeeded(t),
                          this.state !== iD && (this.setInterval(100), (this.state = i_), this.tick()))
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
                let i = this.cachedTrackLoadedData;
                i && ((this.cachedTrackLoadedData = null), this.onAudioTrackLoaded(h.AUDIO_TRACK_LOADED, i));
            }
            onAudioTrackLoaded(e, t) {
                var i, r;
                let { levels: s } = this,
                    { details: a, id: n, groupId: l, track: o } = t;
                if (!s) return void this.warn(`Audio tracks reset while loading track ${n} "${o.name}" of "${l}"`);
                let d = this.mainDetails;
                if (!d || a.endCC > d.endCC || d.expired) {
                    (this.cachedTrackLoadedData = t), this.state !== iD && (this.state = ix);
                    return;
                }
                (this.cachedTrackLoadedData = null),
                    this.log(
                        `Audio track ${n} "${o.name}" of "${l}" loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`,
                    );
                let u = s[n],
                    f = 0;
                if (a.live || (null != (i = u.details) && i.live)) {
                    if ((this.checkLiveUpdate(a), a.deltaUpdateFailed)) return;
                    u.details &&
                        (f = this.alignPlaylists(
                            a,
                            u.details,
                            null == (r = this.levelLastLoaded) ? void 0 : r.details,
                        )),
                        a.alignedSliding || (iL(a, d), a.alignedSliding || iR(a, d), (f = a.fragmentStart));
                }
                (u.details = a),
                    (this.levelLastLoaded = u),
                    this.startFragRequested || this.setStartPosition(d, f),
                    this.hls.trigger(h.AUDIO_TRACK_UPDATED, { details: a, id: n, groupId: t.groupId }),
                    this.state !== ix || this.waitForCdnTuneIn(a) || (this.state = i_),
                    this.tick();
            }
            _handleFragmentLoadProgress(e) {
                var t;
                let i = e.frag,
                    { part: r, payload: s } = e,
                    { config: a, trackId: n, levels: l } = this;
                if (!l)
                    return void this.warn(
                        `Audio tracks were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`,
                    );
                let o = l[n];
                if (!o) return void this.warn("Audio track is undefined on fragment load progress");
                let h = o.details;
                if (!h) {
                    this.warn("Audio track details undefined on fragment load progress"),
                        this.removeUnbufferedFrags(i.start);
                    return;
                }
                let d = a.defaultAudioCodec || o.audioCodec || "mp4a.40.2",
                    u = this.transmuxer;
                u ||
                    (u = this.transmuxer =
                        new rY(
                            this.hls,
                            _,
                            this._handleTransmuxComplete.bind(this),
                            this._handleTransmuxerFlush.bind(this),
                        ));
                let f = this.initPTS[i.cc],
                    c = null == (t = i.initSegment) ? void 0 : t.data;
                if (void 0 !== f) {
                    let e = r ? r.index : -1,
                        t = new tS(i.level, i.sn, i.stats.chunkCount, s.byteLength, e, -1 !== e);
                    u.push(s, c, d, "", i, r, h.totalduration, !1, t, f);
                } else {
                    this.log(
                        `Unknown video PTS for cc ${i.cc}, waiting for video PTS before demuxing audio frag ${i.sn} of [${h.startSN} ,${h.endSN}],track ${n}`,
                    );
                    let { cache: e } = (this.waitingData = this.waitingData || {
                        frag: i,
                        part: r,
                        cache: new iK(),
                        complete: !1,
                    });
                    e.push(new Uint8Array(s)), this.state !== iD && (this.state = iU);
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
                let i = t.tracks.audio;
                i && (this.mediaBuffer = i.buffer || null);
            }
            onFragLoading(e, t) {
                !this.audioOnly &&
                    t.frag.type === D &&
                    ee(t.frag) &&
                    ((this.mainFragLoading = t), this.state === i_ && this.tick());
            }
            onFragBuffered(e, t) {
                let { frag: i, part: r } = t;
                if (i.type !== _) {
                    this.audioOnly ||
                        i.type !== D ||
                        i.elementaryStreams.video ||
                        i.elementaryStreams.audiovideo ||
                        ((this.audioOnly = !0), (this.mainFragLoading = null));
                    return;
                }
                if (this.fragContextChanged(i))
                    return void this.warn(
                        `Fragment ${i.sn}${r ? " p: " + r.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`,
                    );
                if (ee(i)) {
                    this.fragPrevious = i;
                    let e = this.switchingTrack;
                    e &&
                        ((this.bufferedTrack = e),
                        (this.switchingTrack = null),
                        this.hls.trigger(h.AUDIO_TRACK_SWITCHED, O({}, e)));
                }
                this.fragBufferedComplete(i, r), this.media && this.tick();
            }
            onError(e, t) {
                var i;
                if (t.fatal) {
                    this.state = i$;
                    return;
                }
                switch (t.details) {
                    case o.FRAG_GAP:
                    case o.FRAG_PARSING_ERROR:
                    case o.FRAG_DECRYPT_ERROR:
                    case o.FRAG_LOAD_ERROR:
                    case o.FRAG_LOAD_TIMEOUT:
                    case o.KEY_LOAD_ERROR:
                    case o.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(_, t);
                        break;
                    case o.AUDIO_TRACK_LOAD_ERROR:
                    case o.AUDIO_TRACK_LOAD_TIMEOUT:
                    case o.LEVEL_PARSING_ERROR:
                        t.levelRetry ||
                            this.state !== ix ||
                            (null == (i = t.context) ? void 0 : i.type) !== I ||
                            (this.state = i_);
                        break;
                    case o.BUFFER_ADD_CODEC_ERROR:
                    case o.BUFFER_APPEND_ERROR:
                        if ("audio" !== t.parent) return;
                        this.reduceLengthAndFlushBuffer(t) || this.resetLoadingState();
                        break;
                    case o.BUFFER_FULL_ERROR:
                        if ("audio" !== t.parent) return;
                        this.reduceLengthAndFlushBuffer(t) &&
                            ((this.bufferedTrack = null), super.flushMainBuffer(0, 1 / 0, "audio"));
                        break;
                    case o.INTERNAL_EXCEPTION:
                        this.recoverWorkerError(t);
                }
            }
            onBufferFlushing(e, { type: t }) {
                t !== z && (this.flushing = !0);
            }
            onBufferFlushed(e, { type: t }) {
                if (t !== z) {
                    (this.flushing = !1), (this.bufferFlushed = !0), this.state === iF && (this.state = i_);
                    let e = this.mediaBuffer || this.media;
                    e && (this.afterBufferFlushed(e, t, _), this.tick());
                }
            }
            _handleTransmuxComplete(e) {
                var t;
                let i = "audio",
                    { hls: r } = this,
                    { remuxResult: s, chunkMeta: a } = e,
                    n = this.getCurrentContext(a);
                if (!n) return void this.resetWhenMissingContext(a);
                let { frag: l, part: o, level: d } = n,
                    { details: u } = d,
                    { audio: f, text: c, id3: g, initSegment: m } = s;
                if (this.fragContextChanged(l) || !u) return void this.fragmentTracker.removeFragment(l);
                if (
                    ((this.state = iM),
                    this.switchingTrack && f && this.completeAudioSwitch(this.switchingTrack),
                    null != m && m.tracks)
                ) {
                    let e = l.initSegment || l;
                    if (this.unhandledEncryptionError(m, l)) return;
                    this._bufferInitSegment(d, m.tracks, e, a),
                        r.trigger(h.FRAG_PARSING_INIT_SEGMENT, { frag: e, id: i, tracks: m.tracks });
                }
                if (f) {
                    let { startPTS: e, endPTS: t, startDTS: i, endDTS: r } = f;
                    o && (o.elementaryStreams[Q] = { startPTS: e, endPTS: t, startDTS: i, endDTS: r }),
                        l.setElementaryStreamInfo(Q, e, t, i, r),
                        this.bufferFragmentData(f, l, o, a);
                }
                if (null != g && null != (t = g.samples) && t.length) {
                    let e = x({ id: i, frag: l, details: u }, g);
                    r.trigger(h.FRAG_PARSING_METADATA, e);
                }
                if (c) {
                    let e = x({ id: i, frag: l, details: u }, c);
                    r.trigger(h.FRAG_PARSING_USERDATA, e);
                }
            }
            _bufferInitSegment(e, t, i, r) {
                if (this.state !== iM || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
                    return;
                let s = t.audio;
                s.id = _;
                let a = e.audioCodec;
                this.log(`Init audio buffer, container:${s.container}, codecs[level/parsed]=[${a}/${s.codec}]`),
                    a && 1 === a.split(",").length && (s.levelCodec = a),
                    this.hls.trigger(h.BUFFER_CODECS, t);
                let n = s.initSegment;
                if (null != n && n.byteLength) {
                    let e = { type: "audio", frag: i, part: null, chunkMeta: r, parent: i.type, data: n };
                    this.hls.trigger(h.BUFFER_APPENDING, e);
                }
                this.tickImmediate();
            }
            loadFragment(e, t, i) {
                let r = this.fragmentTracker.getState(e);
                if (this.switchingTrack || r === ta || r === tl) {
                    var s;
                    if (ee(e))
                        if (null != (s = t.details) && s.live && !this.initPTS[e.cc]) {
                            this.log(
                                `Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`,
                            ),
                                (this.state = iU);
                            let i = this.mainDetails;
                            i && i.fragmentStart !== t.details.fragmentStart && iR(t.details, i);
                        } else super.loadFragment(e, t, i);
                    else this._loadInitSegment(e, t);
                } else this.clearTrackerIfNeeded(e);
            }
            flushAudioIfNeeded(e) {
                if (this.media && this.bufferedTrack) {
                    let {
                        name: t,
                        lang: i,
                        assocLang: r,
                        characteristics: s,
                        audioCodec: a,
                        channels: n,
                    } = this.bufferedTrack;
                    eZ({ name: t, lang: i, assocLang: r, characteristics: s, audioCodec: a, channels: n }, e, eJ) ||
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
                    t.trigger(h.AUDIO_TRACK_SWITCHED, O({}, e));
            }
        },
        audioTrackController: class extends rW {
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
                e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.on(h.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.on(h.LEVEL_LOADING, this.onLevelLoading, this),
                    e.on(h.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    e.on(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    e.on(h.ERROR, this.onError, this);
            }
            unregisterListeners() {
                let { hls: e } = this;
                e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.off(h.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.off(h.LEVEL_LOADING, this.onLevelLoading, this),
                    e.off(h.LEVEL_SWITCHING, this.onLevelSwitching, this),
                    e.off(h.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                    e.off(h.ERROR, this.onError, this);
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
                let { id: i, groupId: r, details: s } = t,
                    a = this.tracksInGroup[i];
                if (!a || a.groupId !== r)
                    return void this.warn(
                        `Audio track with id:${i} and group:${r} not found in active group ${null == a ? void 0 : a.groupId}`,
                    );
                let n = a.details;
                (a.details = t.details),
                    this.log(`Audio track ${i} "${a.name}" lang:${a.lang} group:${r} loaded [${s.startSN}-${s.endSN}]`),
                    i === this.trackId && this.playlistLoaded(i, t, n);
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
                let i = t.audioGroups || null,
                    r = this.groupIds,
                    s = this.currentTrack;
                if (
                    !i ||
                    (null == r ? void 0 : r.length) !== (null == i ? void 0 : i.length) ||
                    (null != i && i.some((e) => (null == r ? void 0 : r.indexOf(e)) === -1))
                ) {
                    (this.groupIds = i), (this.trackId = -1), (this.currentTrack = null);
                    let e = this.tracks.filter((e) => !i || -1 !== i.indexOf(e.groupId));
                    if (e.length)
                        this.selectDefaultTrack && !e.some((e) => e.default) && (this.selectDefaultTrack = !1),
                            e.forEach((e, t) => {
                                e.id = t;
                            });
                    else if (!s && !this.tracksInGroup.length) return;
                    this.tracksInGroup = e;
                    let t = this.hls.config.audioPreference;
                    if (!s && t) {
                        let i = ez(t, e, eJ);
                        if (i > -1) s = e[i];
                        else {
                            let e = ez(t, this.tracks);
                            s = this.tracks[e];
                        }
                    }
                    let r = this.findTrackId(s);
                    -1 === r && s && (r = this.findTrackId(null)),
                        this.log(
                            `Updating audio tracks, ${e.length} track(s) found in group(s): ${null == i ? void 0 : i.join(",")}`,
                        ),
                        this.hls.trigger(h.AUDIO_TRACKS_UPDATED, { audioTracks: e });
                    let n = this.trackId;
                    if (-1 !== r && -1 === n) this.setAudioTrack(r);
                    else if (e.length && -1 === n) {
                        var a;
                        let t = Error(
                            `No audio track selected for current audio group-ID(s): ${null == ((a = this.groupIds)) ? void 0 : a.join(",")} track count: ${e.length}`,
                        );
                        this.warn(t.message),
                            this.hls.trigger(h.ERROR, {
                                type: l.MEDIA_ERROR,
                                details: o.AUDIO_TRACK_LOAD_ERROR,
                                fatal: !0,
                                error: t,
                            });
                    }
                }
            }
            onError(e, t) {
                !t.fatal &&
                    t.context &&
                    (t.context.type !== I ||
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
                    let s = this.allAudioTracks;
                    if (((this.selectDefaultTrack = !1), s.length)) {
                        let a = this.currentTrack;
                        if (a && eZ(e, a, eJ)) return a;
                        let n = ez(e, this.tracksInGroup, eJ);
                        if (n > -1) {
                            let e = this.tracksInGroup[n];
                            return this.setAudioTrack(n), e;
                        }
                        if (a) {
                            var i, r;
                            let a,
                                n,
                                l,
                                o,
                                h,
                                d,
                                u = t.loadLevel;
                            -1 === u && (u = t.firstAutoLevel);
                            let f =
                                ((i = t.levels),
                                (a = i[(r = u)]),
                                (n = i.reduce((e, t, i) => {
                                    let r = t.uri;
                                    return (e[r] || (e[r] = [])).push(i), e;
                                }, {})[a.uri]).length > 1 && (r = Math.max.apply(Math, n)),
                                (l = a.videoRange),
                                (o = a.frameRate),
                                (h = a.codecSet.substring(0, 4)),
                                (d = e0(i, r, (t) => {
                                    if (t.videoRange !== l || t.frameRate !== o || t.codecSet.substring(0, 4) !== h)
                                        return !1;
                                    let i = t.audioGroups;
                                    return (
                                        ez(
                                            e,
                                            s.filter((e) => !i || -1 !== i.indexOf(e.groupId)),
                                            eJ,
                                        ) > -1
                                    );
                                })) > -1
                                    ? d
                                    : e0(i, r, (t) => {
                                          let i = t.audioGroups;
                                          return (
                                              ez(
                                                  e,
                                                  s.filter((e) => !i || -1 !== i.indexOf(e.groupId)),
                                                  eJ,
                                              ) > -1
                                          );
                                      }));
                            if (-1 === f) return null;
                            t.nextLoadLevel = f;
                        }
                        if (e.channels || e.audioCodec) {
                            let t = ez(e, s);
                            if (t > -1) return s[t];
                        }
                    }
                }
                return null;
            }
            setAudioTrack(e) {
                let t = this.tracksInGroup;
                if (e < 0 || e >= t.length) return void this.warn(`Invalid audio track id: ${e}`);
                this.selectDefaultTrack = !1;
                let i = this.currentTrack,
                    r = t[e],
                    s = r.details && !r.details.live;
                if (
                    (e === this.trackId && r === i && s) ||
                    (this.log(
                        `Switching to audio-track ${e} "${r.name}" lang:${r.lang} group:${r.groupId} channels:${r.channels}`,
                    ),
                    (this.trackId = e),
                    (this.currentTrack = r),
                    this.hls.trigger(h.AUDIO_TRACK_SWITCHING, O({}, r)),
                    s)
                )
                    return;
                let a = this.switchParams(r.url, null == i ? void 0 : i.details, r.details);
                this.loadPlaylist(a);
            }
            findTrackId(e) {
                let t = this.tracksInGroup;
                for (let i = 0; i < t.length; i++) {
                    let r = t[i];
                    if ((!this.selectDefaultTrack || r.default) && (!e || eZ(e, r, eJ))) return i;
                }
                if (e) {
                    let { name: i, lang: r, assocLang: s, characteristics: a, audioCodec: n, channels: l } = e;
                    for (let e = 0; e < t.length; e++)
                        if (
                            eZ(
                                { name: i, lang: r, assocLang: s, characteristics: a, audioCodec: n, channels: l },
                                t[e],
                                eJ,
                            )
                        )
                            return e;
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (rq(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return i;
                    }
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if (rq(e.attrs, r.attrs, ["LANGUAGE"])) return i;
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
                let i = e.id,
                    r = e.groupId,
                    s = this.getUrlWithDirectives(e.url, t),
                    a = e.details,
                    n = null == a ? void 0 : a.age;
                this.log(
                    `Loading audio-track ${i} "${e.name}" lang:${e.lang} group:${r}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${n && a.live ? " age " + n.toFixed(1) + (a.type ? " " + a.type : "") : ""} ${s}`,
                ),
                    this.hls.trigger(h.AUDIO_TRACK_LOADING, {
                        url: s,
                        id: i,
                        groupId: r,
                        deliveryDirectives: t || null,
                        track: e,
                    });
            }
        },
        emeController: sP,
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
                            let { frag: t, part: i } = e,
                                r = this.hls.levels[t.level],
                                s = this.getObjectType(t),
                                a = { d: 1e3 * (i || t).duration, ot: s };
                            ("v" === s || "a" === s || "av" == s) &&
                                ((a.br = r.bitrate / 1e3),
                                (a.tb = this.getTopBandwidth(s) / 1e3),
                                (a.bl = this.getBufferLength(s)));
                            let n = i ? this.getNextPart(i) : this.getNextFrag(t);
                            null != n && n.url && n.url !== t.url && (a.nor = n.url), this.apply(e, a);
                        } catch (e) {
                            this.hls.logger.warn("Could not generate segment CMCD data.", e);
                        }
                    }),
                    (this.hls = e);
                const t = (this.config = e.config),
                    { cmcd: i } = t;
                null != i &&
                    ((t.pLoader = this.createPlaylistLoader()),
                    (t.fLoader = this.createFragmentLoader()),
                    (this.sid = i.sessionId || e.sessionId),
                    (this.cid = i.contentId),
                    (this.useHeaders = !0 === i.useHeaders),
                    (this.includeKeys = i.includeKeys),
                    this.registerListeners());
            }
            registerListeners() {
                let e = this.hls;
                e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.on(h.MEDIA_DETACHED, this.onMediaDetached, this),
                    e.on(h.BUFFER_CREATED, this.onBufferCreated, this);
            }
            unregisterListeners() {
                let e = this.hls;
                e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.off(h.MEDIA_DETACHED, this.onMediaDetached, this),
                    e.off(h.BUFFER_CREATED, this.onBufferCreated, this);
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
                var i, r;
                (this.audioBuffer = null == (i = t.tracks.audio) ? void 0 : i.buffer),
                    (this.videoBuffer = null == (r = t.tracks.video) ? void 0 : r.buffer);
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
                x(t, this.createData());
                let i = "i" === t.ot || "v" === t.ot || "av" === t.ot;
                this.starved && i && ((t.bs = !0), (t.su = !0), (this.starved = !1)),
                    null == t.su && (t.su = this.buffering);
                let { includeKeys: r } = this;
                r && (t = Object.keys(t).reduce((e, i) => (r.includes(i) && (e[i] = t[i]), e), {}));
                let s = { baseUrl: e.url };
                if (this.useHeaders) {
                    var a;
                    e.headers || (e.headers = {}),
                        (a = e.headers),
                        x(
                            a,
                            (function (e, t = {}) {
                                let i = {};
                                return e
                                    ? Object.entries(
                                          (function (e, t) {
                                              let i = {};
                                              if (!e) return i;
                                              let r = Object.keys(e),
                                                  s = t
                                                      ? Object.keys(t).reduce((e, i) => {
                                                            var r;
                                                            return (
                                                                null == (r = t[i]) || r.forEach((t) => (e[t] = i)), e
                                                            );
                                                        }, {})
                                                      : {};
                                              return r.reduce((t, i) => {
                                                  var r;
                                                  let a = sh[i] || s[i] || sn;
                                                  return ((null != (r = t[a]) ? r : (t[a] = {}))[i] = e[i]), t;
                                              }, i);
                                          })(sI(e, t), null == t ? void 0 : t.customHeaderMap),
                                      ).reduce((e, [t, i]) => {
                                          let r = ss(i, { whitespace: !1 });
                                          return r && (e[t] = r), e;
                                      }, i)
                                    : i;
                            })(t, s),
                        );
                } else
                    e.url = (function (e, t, i) {
                        let r = (function (e, t = {}) {
                            if (!e) return "";
                            let i = (function (e, t = {}) {
                                return e
                                    ? encodeURIComponent(
                                          (function (e, t = {}) {
                                              return e ? ss(sI(e, t), { whitespace: !1 }) : "";
                                          })(e, t),
                                      )
                                    : "";
                            })(e, t);
                            return `CMCD=${i}`;
                        })(t, i);
                        if (!r) return e;
                        if (sk.test(e)) return e.replace(sk, r);
                        let s = e.includes("?") ? "&" : "?";
                        return `${e}${s}${r}`;
                    })(e.url, t, s);
            }
            getNextFrag(e) {
                var t;
                let i = null == (t = this.hls.levels[e.level]) ? void 0 : t.details;
                if (i) {
                    let t = e.sn - i.startSN;
                    return i.fragments[t + 1];
                }
            }
            getNextPart(e) {
                var t;
                let { index: i, fragment: r } = e,
                    s = null == (t = this.hls.levels[r.level]) || null == (t = t.details) ? void 0 : t.partList;
                if (s) {
                    let { sn: e } = r;
                    for (let t = s.length - 1; t >= 0; t--) {
                        let r = s[t];
                        if (r.index === i && r.fragment.sn === e) return s[t + 1];
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
                    i = 0,
                    r = this.hls;
                if ("a" === e) t = r.audioTracks;
                else {
                    let e = r.maxAutoLevel,
                        i = e > -1 ? e + 1 : r.levels.length;
                    t = r.levels.slice(0, i);
                }
                return (
                    t.forEach((e) => {
                        e.bitrate > i && (i = e.bitrate);
                    }),
                    i > 0 ? i : NaN
                );
            }
            getBufferLength(e) {
                let t = this.media,
                    i = "a" === e ? this.audioBuffer : this.videoBuffer;
                return i && t ? 1e3 * tR.bufferInfo(i, t.currentTime, this.config.maxBufferHole).len : NaN;
            }
            createPlaylistLoader() {
                let { pLoader: e } = this.config,
                    t = this.applyPlaylistData,
                    i = e || this.config.loader;
                return class {
                    constructor(e) {
                        (this.loader = void 0), (this.loader = new i(e));
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
                    load(e, i, r) {
                        t(e), this.loader.load(e, i, r);
                    }
                };
            }
            createFragmentLoader() {
                let { fLoader: e } = this.config,
                    t = this.applyFragmentData,
                    i = e || this.config.loader;
                return class {
                    constructor(e) {
                        (this.loader = void 0), (this.loader = new i(e));
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
                    load(e, i, r) {
                        t(e), this.loader.load(e, i, r);
                    }
                };
            }
        },
        contentSteeringController: class extends F {
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
                e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.on(h.MANIFEST_LOADED, this.onManifestLoaded, this),
                    e.on(h.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.on(h.ERROR, this.onError, this);
            }
            unregisterListeners() {
                let e = this.hls;
                e &&
                    (e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.off(h.MANIFEST_LOADED, this.onManifestLoaded, this),
                    e.off(h.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.off(h.ERROR, this.onError, this));
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
                let { contentSteering: i } = t;
                null !== i && ((this.pathwayId = i.pathwayId), (this.uri = i.uri), this.started && this.startLoad());
            }
            onManifestParsed(e, t) {
                (this.audioTracks = t.audioTracks), (this.subtitleTracks = t.subtitleTracks);
            }
            onError(e, t) {
                let { errorAction: i } = t;
                if ((null == i ? void 0 : i.action) === 2 && 1 === i.flags) {
                    let e = this.levels,
                        r = this._pathwayPriority,
                        s = this.pathwayId;
                    if (t.context) {
                        let { groupId: i, pathwayId: r, type: a } = t.context;
                        i && e ? (s = this.getPathwayForGroupId(i, a, s)) : r && (s = r);
                    }
                    s in this.penalizedPathways || (this.penalizedPathways[s] = performance.now()),
                        !r && e && (r = this.pathways()),
                        r && r.length > 1 && (this.updatePathwayPriority(r), (i.resolved = this.pathwayId !== s)),
                        t.details !== o.BUFFER_APPEND_ERROR || t.fatal
                            ? i.resolved ||
                              this.warn(
                                  `Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${e ? e.length : e} priorities: ${ej(r)} penalized: ${ej(this.penalizedPathways)}`,
                              )
                            : (i.resolved = !0);
                }
            }
            filterParsedLevels(e) {
                this.levels = e;
                let t = this.getLevelsForPathway(this.pathwayId);
                if (0 === t.length) {
                    let i = e[0].pathwayId;
                    this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i}"`),
                        (t = this.getLevelsForPathway(i)),
                        (this.pathwayId = i);
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
                let i = this.penalizedPathways,
                    r = performance.now();
                Object.keys(i).forEach((e) => {
                    r - i[e] > 3e5 && delete i[e];
                });
                for (let r = 0; r < e.length; r++) {
                    let s = e[r];
                    if (s in i) continue;
                    if (s === this.pathwayId) return;
                    let a = this.hls.nextLoadLevel,
                        n = this.hls.levels[a];
                    if ((t = this.getLevelsForPathway(s)).length > 0) {
                        this.log(`Setting Pathway to "${s}"`),
                            (this.pathwayId = s),
                            iv(t),
                            this.hls.trigger(h.LEVELS_UPDATED, { levels: t });
                        let e = this.hls.levels[a];
                        n &&
                            e &&
                            this.levels &&
                            (e.attrs["STABLE-VARIANT-ID"] !== n.attrs["STABLE-VARIANT-ID"] &&
                                e.bitrate !== n.bitrate &&
                                this.log(`Unstable Pathways change from bitrate ${n.bitrate} to ${e.bitrate}`),
                            (this.hls.nextLoadLevel = a));
                        break;
                    }
                }
            }
            getPathwayForGroupId(e, t, i) {
                let r = this.getLevelsForPathway(i).concat(this.levels || []);
                for (let i = 0; i < r.length; i++)
                    if ((t === I && r[i].hasAudioGroup(e)) || (t === k && r[i].hasSubtitleGroup(e)))
                        return r[i].pathwayId;
                return i;
            }
            clonePathways(e) {
                let t = this.levels;
                if (!t) return;
                let i = {},
                    r = {};
                e.forEach((e) => {
                    let { ID: s, "BASE-ID": a, "URI-REPLACEMENT": n } = e;
                    if (t.some((e) => e.pathwayId === s)) return;
                    let l = this.getLevelsForPathway(a).map((e) => {
                        let t = new tP(e.attrs);
                        t["PATHWAY-ID"] = s;
                        let a = t.AUDIO && `${t.AUDIO}_clone_${s}`,
                            l = t.SUBTITLES && `${t.SUBTITLES}_clone_${s}`;
                        a && ((i[t.AUDIO] = a), (t.AUDIO = a)), l && ((r[t.SUBTITLES] = l), (t.SUBTITLES = l));
                        let o = s_(e.uri, t["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", n),
                            h = new eY({
                                attrs: t,
                                audioCodec: e.audioCodec,
                                bitrate: e.bitrate,
                                height: e.height,
                                name: e.name,
                                url: o,
                                videoCodec: e.videoCodec,
                                width: e.width,
                            });
                        if (e.audioGroups)
                            for (let t = 1; t < e.audioGroups.length; t++)
                                h.addGroupId("audio", `${e.audioGroups[t]}_clone_${s}`);
                        if (e.subtitleGroups)
                            for (let t = 1; t < e.subtitleGroups.length; t++)
                                h.addGroupId("text", `${e.subtitleGroups[t]}_clone_${s}`);
                        return h;
                    });
                    t.push(...l), sD(this.audioTracks, i, n, s), sD(this.subtitleTracks, r, n, s);
                });
            }
            loadSteeringManifest(e) {
                let t,
                    i = this.hls.config,
                    r = i.loader;
                this.loader && this.loader.destroy(), (this.loader = new r(i));
                try {
                    t = new self.URL(e);
                } catch (t) {
                    (this.enabled = !1), this.log(`Failed to parse Steering Manifest URI: ${e}`);
                    return;
                }
                if ("data:" !== t.protocol) {
                    let e = 0 | (this.hls.bandwidthEstimate || i.abrEwmaDefaultEstimate);
                    t.searchParams.set("_HLS_pathway", this.pathwayId), t.searchParams.set("_HLS_throughput", "" + e);
                }
                let s = { responseType: "json", url: t.href },
                    a = i.steeringManifestLoadPolicy.default,
                    n = a.errorRetry || a.timeoutRetry || {},
                    l = {
                        loadPolicy: a,
                        timeout: a.maxLoadTimeMs,
                        maxRetry: n.maxNumRetry || 0,
                        retryDelay: n.retryDelayMs || 0,
                        maxRetryDelay: n.maxRetryDelayMs || 0,
                    };
                this.log(`Requesting steering manifest: ${t}`),
                    this.loader.load(s, l, {
                        onSuccess: (e, i, r, s) => {
                            this.log(`Loaded steering manifest: "${t}"`);
                            let a = e.data;
                            if ((null == a ? void 0 : a.VERSION) !== 1)
                                return void this.log(`Steering VERSION ${a.VERSION} not supported!`);
                            (this.updated = performance.now()), (this.timeToLoad = a.TTL);
                            let { "RELOAD-URI": n, "PATHWAY-CLONES": l, "PATHWAY-PRIORITY": o } = a;
                            if (n)
                                try {
                                    this.uri = new self.URL(n, t).href;
                                } catch (e) {
                                    (this.enabled = !1), this.log(`Failed to parse Steering Manifest RELOAD-URI: ${n}`);
                                    return;
                                }
                            this.scheduleRefresh(this.uri || r.url), l && this.clonePathways(l);
                            let d = { steeringManifest: a, url: t.toString() };
                            this.hls.trigger(h.STEERING_MANIFEST_LOADED, d), o && this.updatePathwayPriority(o);
                        },
                        onError: (e, t, i, r) => {
                            if (
                                (this.log(`Error loading steering manifest: ${e.code} ${e.text} (${t.url})`),
                                this.stopLoad(),
                                410 === e.code)
                            ) {
                                (this.enabled = !1), this.log(`Steering manifest ${t.url} no longer available`);
                                return;
                            }
                            let s = 1e3 * this.timeToLoad;
                            if (429 === e.code) {
                                let e = this.loader;
                                if ("function" == typeof (null == e ? void 0 : e.getResponseHeader)) {
                                    let t = e.getResponseHeader("Retry-After");
                                    t && (s = 1e3 * parseFloat(t));
                                }
                                this.log(`Steering manifest ${t.url} rate limited`);
                                return;
                            }
                            this.scheduleRefresh(this.uri || t.url, s);
                        },
                        onTimeout: (e, t, i) => {
                            this.log(`Timeout loading steering manifest (${t.url})`),
                                this.scheduleRefresh(this.uri || t.url);
                        },
                    });
            }
            scheduleRefresh(e, t = 1e3 * this.timeToLoad) {
                this.clearTimeout(),
                    (this.reloadTimer = self.setTimeout(() => {
                        var t;
                        let i = null == (t = this.hls) ? void 0 : t.media;
                        i && !i.ended ? this.loadSteeringManifest(e) : this.scheduleRefresh(e, 1e3 * this.timeToLoad);
                    }, t));
            }
        },
        interstitialsController: class extends F {
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
                        let i = this.currentTime;
                        if (void 0 === i || this.playbackDisabled || !this.schedule) return;
                        let r = i - this.timelinePos;
                        if (Math.abs(r) < 1 / 7056e5) return;
                        let s = r <= -0.01;
                        (this.timelinePos = i), (this.bufferedPos = i);
                        let a = this.playingItem;
                        if (!a) return void this.checkBuffer();
                        if (
                            (s && this.schedule.resetErrorsInRange(i, i - r) && this.updateSchedule(!0),
                            this.checkBuffer(),
                            (s && i < a.start) || i >= a.end)
                        ) {
                            let t = this.findItemIndex(a),
                                r = this.schedule.findItemIndexAtTime(i);
                            if (
                                (-1 === r &&
                                    ((r = t + (s ? -1 : 1)),
                                    this.log(
                                        `seeked ${s ? "back " : ""}to position not covered by schedule ${i} (resolving from ${t} to ${r})`,
                                    )),
                                !this.isInterstitial(a) &&
                                    null != (e = this.media) &&
                                    e.paused &&
                                    (this.shouldPlay = !1),
                                !s && r > t)
                            ) {
                                let e = this.schedule.findJumpRestrictedIndex(t + 1, r);
                                if (e > t) return void this.setSchedulePosition(e);
                            }
                            this.setSchedulePosition(r);
                            return;
                        }
                        let n = this.playingAsset;
                        if (!n) {
                            if (this.playingLastItem && this.isInterstitial(a)) {
                                let e = a.event.assetList[0];
                                e &&
                                    ((this.endedItem = this.playingItem),
                                    (this.playingItem = null),
                                    this.setScheduleToAssetAtTime(i, e));
                            }
                            return;
                        }
                        let l = n.timelineStart,
                            o = n.duration || 0;
                        ((s && i < l) || i >= l + o) &&
                            (null != (t = a.event) &&
                                t.appendInPlace &&
                                (this.clearInterstitial(a.event, a), this.flushFrontBuffer(i)),
                            this.setScheduleToAssetAtTime(i, n));
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
                        let i = this.playingAsset;
                        !i || (e >= i.timelineStart + (i.duration || 0) && this.setScheduleToAssetAtTime(e, i));
                    }),
                    (this.onScheduleUpdate = (e, t) => {
                        let i = this.schedule;
                        if (!i) return;
                        let r = this.playingItem,
                            s = i.events || [],
                            a = i.items || [],
                            n = i.durations,
                            l = e.map((e) => e.identifier),
                            o = !!(s.length || l.length);
                        (o || t) &&
                            this.log(`INTERSTITIALS_UPDATED (${s.length}): ${s}
Schedule: ${a.map((e) => sq(e))} pos: ${this.timelinePos}`),
                            l.length && this.log(`Removed events ${l}`);
                        let d = null,
                            u = null;
                        r &&
                            ((d = this.updateItem(r, this.timelinePos)),
                            this.itemsMatch(r, d)
                                ? (this.playingItem = d)
                                : (this.waitingItem = this.endedItem = null)),
                            (this.waitingItem = this.updateItem(this.waitingItem)),
                            (this.endedItem = this.updateItem(this.endedItem));
                        let f = this.bufferingItem;
                        if (
                            (f &&
                                ((u = this.updateItem(f, this.bufferedPos)),
                                this.itemsMatch(f, u)
                                    ? (this.bufferingItem = u)
                                    : f.event &&
                                      ((this.bufferingItem = this.playingItem), this.clearInterstitial(f.event, null))),
                            e.forEach((e) => {
                                e.assetList.forEach((e) => {
                                    this.clearAssetPlayer(e.identifier, null);
                                });
                            }),
                            this.playerQueue.forEach((e) => {
                                if (e.interstitial.appendInPlace) {
                                    let t = e.assetItem.timelineStart,
                                        i = e.timelineOffset - t;
                                    if (i)
                                        try {
                                            e.timelineOffset = t;
                                        } catch (r) {
                                            Math.abs(i) > 0.025 &&
                                                this.warn(`${r} ("${e.assetId}" ${e.timelineOffset}->${t})`);
                                        }
                                }
                            }),
                            o || t)
                        ) {
                            if (
                                (this.hls.trigger(h.INTERSTITIALS_UPDATED, {
                                    events: s.slice(0),
                                    schedule: a.slice(0),
                                    durations: n,
                                    removedIds: l,
                                }),
                                this.isInterstitial(r) && l.includes(r.event.identifier))
                            ) {
                                this.warn(`Interstitial "${r.event.identifier}" removed while playing`),
                                    this.primaryFallback(r.event);
                                return;
                            }
                            r && this.trimInPlace(d, r), f && u !== d && this.trimInPlace(u, f), this.checkBuffer();
                        }
                    }),
                    (this.hls = e),
                    (this.HlsPlayerClass = t),
                    (this.assetListLoader = new sX(e)),
                    (this.schedule = new sj(this.onScheduleUpdate, e.logger)),
                    this.registerListeners();
            }
            registerListeners() {
                let e = this.hls;
                e &&
                    (e.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.on(h.LEVEL_UPDATED, this.onLevelUpdated, this),
                    e.on(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    e.on(h.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this),
                    e.on(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                    e.on(h.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this),
                    e.on(h.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this),
                    e.on(h.ASSET_LIST_LOADED, this.onAssetListLoaded, this),
                    e.on(h.BUFFER_APPENDED, this.onBufferAppended, this),
                    e.on(h.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    e.on(h.BUFFERED_TO_END, this.onBufferedToEnd, this),
                    e.on(h.MEDIA_ENDED, this.onMediaEnded, this),
                    e.on(h.ERROR, this.onError, this),
                    e.on(h.DESTROYING, this.onDestroying, this));
            }
            unregisterListeners() {
                let e = this.hls;
                e &&
                    (e.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
                    e.off(h.LEVEL_UPDATED, this.onLevelUpdated, this),
                    e.off(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                    e.off(h.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this),
                    e.off(h.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                    e.off(h.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this),
                    e.off(h.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this),
                    e.off(h.ASSET_LIST_LOADED, this.onAssetListLoaded, this),
                    e.off(h.BUFFER_CODECS, this.onBufferCodecs, this),
                    e.off(h.BUFFER_APPENDED, this.onBufferAppended, this),
                    e.off(h.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    e.off(h.BUFFERED_TO_END, this.onBufferedToEnd, this),
                    e.off(h.MEDIA_ENDED, this.onMediaEnded, this),
                    e.off(h.ERROR, this.onError, this),
                    e.off(h.DESTROYING, this.onDestroying, this));
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
                iI(e, "play", this.onPlay),
                    iI(e, "pause", this.onPause),
                    iI(e, "seeking", this.onSeeking),
                    iI(e, "timeupdate", this.onTimeupdate);
            }
            onMediaAttaching(e, t) {
                let i = (this.media = t.media);
                ib(i, "seeking", this.onSeeking),
                    ib(i, "timeupdate", this.onTimeupdate),
                    ib(i, "play", this.onPlay),
                    ib(i, "pause", this.onPause);
            }
            onMediaAttached(e, t) {
                let i = this.effectivePlayingItem,
                    r = this.detachedData;
                if (((this.detachedData = null), null === i)) this.checkStart();
                else if (!r) {
                    this.clearScheduleState();
                    let e = this.findItemIndex(i);
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
                let i = !!t.transferMedia,
                    r = this.media;
                if (((this.media = null), !i && (r && this.removeMediaListeners(r), this.detachedData))) {
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
                    i = (i, s, a, n, l) => {
                        if (i) {
                            let o = i[s].start,
                                h = i.event;
                            if (h) {
                                if ("playout" === s || h.timelineOccupancy !== sN.Point) {
                                    let e = t(a);
                                    (null == e ? void 0 : e.interstitial) === h &&
                                        (o += e.assetItem.startOffset + e[l]);
                                }
                            } else o += ("bufferedPos" === n ? r() : e[n]) - i.start;
                            return o;
                        }
                        return 0;
                    },
                    r = () => {
                        let t = e.bufferedPos;
                        return t === Number.MAX_VALUE ? s("primary") : Math.max(t, 0);
                    },
                    s = (t) => {
                        var i, r;
                        return null != (i = e.primaryDetails) && i.live
                            ? e.primaryDetails.edge
                            : (null == (r = e.schedule) ? void 0 : r.durations[t]) || 0;
                    },
                    a = (r, s) => {
                        var a, n;
                        let l = e.effectivePlayingItem;
                        if ((null != l && null != (a = l.event) && a.restrictions.skip) || !e.schedule) return;
                        e.log(`seek to ${r} "${s}"`);
                        let o = e.effectivePlayingItem,
                            h = e.schedule.findItemIndexAtTime(r, s),
                            d = null == (n = e.schedule.items) ? void 0 : n[h],
                            u = e.getBufferingPlayer(),
                            f = null == u ? void 0 : u.interstitial,
                            c = null == f ? void 0 : f.appendInPlace,
                            g = o && e.itemsMatch(o, d);
                        if (o && (c || g)) {
                            let a = t(e.playingAsset),
                                n = (null == a ? void 0 : a.media) || e.primaryMedia;
                            if (n) {
                                let t =
                                        "primary" === s
                                            ? n.currentTime
                                            : i(o, s, e.playingAsset, "timelinePos", "currentTime"),
                                    l = r - t,
                                    h = (c ? t : n.currentTime) + l;
                                if (h >= 0 && (!a || c || h <= a.duration)) {
                                    n.currentTime = h;
                                    return;
                                }
                            }
                        }
                        if (d) {
                            let t = r;
                            if ("primary" !== s) {
                                let e = r - d[s].start;
                                t = d.start + e;
                            }
                            let i = !e.isInterstitial(d);
                            if ((!e.isInterstitial(o) || o.event.appendInPlace) && (i || d.event.appendInPlace)) {
                                let i = e.media || (c ? (null == u ? void 0 : u.media) : null);
                                i && (i.currentTime = t);
                            } else if (o) {
                                let a = e.findItemIndex(o);
                                if (h > a) {
                                    let t = e.schedule.findJumpRestrictedIndex(a + 1, h);
                                    if (t > a) return void e.setSchedulePosition(t);
                                }
                                let n = 0;
                                if (i) (e.timelinePos = t), e.checkBuffer();
                                else {
                                    let e = d.event.assetList,
                                        t = r - (d[s] || d).start;
                                    for (let i = e.length; i--; ) {
                                        let r = e[i];
                                        if (r.duration && t >= r.startOffset && t < r.startOffset + r.duration) {
                                            n = i;
                                            break;
                                        }
                                    }
                                }
                                e.setSchedulePosition(h, n);
                            }
                        }
                    },
                    n = () => {
                        let t = e.effectivePlayingItem;
                        if (e.isInterstitial(t)) return t;
                        let i = e.bufferingItem || e.waitingItem;
                        return e.isInterstitial(i) ? i : null;
                    },
                    l = {
                        get bufferedEnd() {
                            let t = e.bufferingItem || e.waitingItem,
                                r = e.bufferingItem;
                            if (r && r === t) {
                                var o;
                                return (
                                    i(r, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - r.playout.start ||
                                    (null == (o = e.bufferingAsset) ? void 0 : o.startOffset) ||
                                    0
                                );
                            }
                            return 0;
                        },
                        get currentTime() {
                            let t = n(),
                                r = e.effectivePlayingItem;
                            if (r && r === t)
                                return (
                                    i(r, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") -
                                    r.playout.start
                                );
                            return 0;
                        },
                        set currentTime(time) {
                            let t = n(),
                                i = e.effectivePlayingItem;
                            i && i === t && a(time + i.playout.start, "playout");
                        },
                        get duration() {
                            let e = n();
                            if (e) return e.playout.end - e.playout.start;
                            return 0;
                        },
                        get assetPlayers() {
                            var h;
                            let t = null == (h = n()) ? void 0 : h.event.assetList;
                            if (t) return t.map((t) => e.getAssetPlayer(t.identifier));
                            return [];
                        },
                        get playingIndex() {
                            var d;
                            let t = null == (d = n()) ? void 0 : d.event;
                            if (t && e.effectivePlayingAsset) return t.findAssetIndex(e.effectivePlayingAsset);
                            return -1;
                        },
                        get scheduleItem() {
                            return n();
                        },
                    };
                return (this.manager = {
                    get events() {
                        var u;
                        return (null == (u = e.schedule) || null == (u = u.events) ? void 0 : u.slice(0)) || [];
                    },
                    get schedule() {
                        var f;
                        return (null == (f = e.schedule) || null == (f = f.items) ? void 0 : f.slice(0)) || [];
                    },
                    get interstitialPlayer() {
                        if (n()) return l;
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
                            return r();
                        },
                        get currentTime() {
                            let t = e.timelinePos;
                            return t > 0 ? t : 0;
                        },
                        set currentTime(time) {
                            a(time, "primary");
                        },
                        get duration() {
                            return s("primary");
                        },
                        get seekableStart() {
                            var c;
                            return (null == (c = e.primaryDetails) ? void 0 : c.fragmentStart) || 0;
                        },
                    },
                    integrated: {
                        get bufferedEnd() {
                            return i(
                                e.bufferingItem || e.waitingItem,
                                "integrated",
                                e.bufferingAsset,
                                "bufferedPos",
                                "bufferedEnd",
                            );
                        },
                        get currentTime() {
                            return i(
                                e.effectivePlayingItem,
                                "integrated",
                                e.effectivePlayingAsset,
                                "timelinePos",
                                "currentTime",
                            );
                        },
                        set currentTime(time) {
                            a(time, "integrated");
                        },
                        get duration() {
                            return s("integrated");
                        },
                        get seekableStart() {
                            var g;
                            return ((t, i) => {
                                var r, s;
                                if (0 !== t && "primary" !== i && null != (r = e.schedule) && r.length) {
                                    let r = e.schedule.findItemIndexAtTime(t),
                                        a = null == (s = e.schedule.items) ? void 0 : s[r];
                                    if (a) return t + (a[i].start - a.start);
                                }
                                return t;
                            })((null == (g = e.primaryDetails) ? void 0 : g.fragmentStart) || 0, "integrated");
                        },
                    },
                    skip: () => {
                        let t = e.effectivePlayingItem,
                            i = null == t ? void 0 : t.event;
                        if (i && !i.restrictions.skip) {
                            let r = e.findItemIndex(t);
                            i.appendInPlace
                                ? a(t.playout.start + t.event.duration + 0.001, "playout")
                                : e.advanceAfterAssetEnded(i, r, 1 / 0);
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
                    i = null == (e = this.schedule) ? void 0 : e.items;
                return !!this.playbackStarted && !!t && !!i && this.findItemIndex(t) === i.length - 1;
            }
            get playbackStarted() {
                return null !== this.effectivePlayingItem;
            }
            get currentTime() {
                var e, t;
                if (null === this.mediaSelection) return;
                let i = this.waitingItem || this.playingItem;
                if (this.isInterstitial(i) && !i.event.appendInPlace) return;
                let r = this.media;
                !r &&
                    null != (e = this.bufferingItem) &&
                    null != (e = e.event) &&
                    e.appendInPlace &&
                    (r = this.primaryMedia);
                let a = null == (t = r) ? void 0 : t.currentTime;
                if (void 0 !== a && s(a)) return a;
            }
            get primaryMedia() {
                var e;
                return this.media || (null == (e = this.detachedData) ? void 0 : e.media) || null;
            }
            isInterstitial(e) {
                return !!(null != e && e.event);
            }
            retreiveMediaSource(e, t) {
                let i = this.getAssetPlayer(e);
                i && this.transferMediaFromPlayer(i, t);
            }
            transferMediaFromPlayer(e, t) {
                let i = e.interstitial.appendInPlace,
                    r = e.media;
                if (i && r === this.primaryMedia) {
                    if (
                        ((this.bufferingAsset = null),
                        (!t || (this.isInterstitial(t) && !t.event.appendInPlace)) && t && r)
                    ) {
                        this.detachedData = { media: r };
                        return;
                    }
                    let i = e.transferMedia();
                    this.log(`transfer MediaSource from ${e} ${ej(i)}`), (this.detachedData = i);
                } else t && r && (this.shouldPlay || (this.shouldPlay = !r.paused));
            }
            transferMediaTo(e, t) {
                var i, r;
                let s;
                if (e.media === t) return;
                let a = null,
                    n = this.hls,
                    l = e !== n,
                    o = l && e.interstitial.appendInPlace,
                    h = null == (i = this.detachedData) ? void 0 : i.mediaSource;
                if (n.media) o && ((a = n.transferMedia()), (this.detachedData = a)), (s = "Primary");
                else if (h) {
                    let e = this.getBufferingPlayer();
                    e ? ((a = e.transferMedia()), (s = `${e}`)) : (s = "detached MediaSource");
                } else s = "detached media";
                if (!a) {
                    if (h) (a = this.detachedData), this.log(`using detachedData: MediaSource ${ej(a)}`);
                    else if (!this.detachedData || n.media === t) {
                        let e = this.playerQueue;
                        e.length > 1 &&
                            e.forEach((e) => {
                                if (l && e.interstitial.appendInPlace !== o) {
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
                let d = a && "mediaSource" in a && (null == (r = a.mediaSource) ? void 0 : r.readyState) !== "closed",
                    u = d && a ? a : t;
                this.log(
                    `${d ? "transfering MediaSource" : "attaching media"} to ${l ? e : "Primary"} from ${s} (media.currentTime: ${t.currentTime})`,
                );
                let f = this.schedule;
                if (u === a && f) {
                    let t = l && e.assetId === f.assetIdAtEnd;
                    u.overrides = { duration: f.duration, endOfStream: !l || t, cueRemoval: !l };
                }
                e.attachMedia(u);
            }
            onInterstitialCueEnter() {
                this.onTimeupdate();
            }
            checkStart() {
                let e = this.schedule,
                    t = null == e ? void 0 : e.events;
                if (!t || this.playbackDisabled || !this.media) return;
                -1 === this.bufferedPos && (this.bufferedPos = 0);
                let i = this.timelinePos,
                    r = this.effectivePlayingItem;
                if (-1 === i) {
                    let i = this.hls.startPosition;
                    if ((this.log(sz("checkStart", i)), (this.timelinePos = i), t.length && t[0].cue.pre)) {
                        let i = e.findEventIndex(t[0].identifier);
                        this.setSchedulePosition(i);
                    } else if (i >= 0 || !this.primaryLive) {
                        let t = (this.timelinePos = i > 0 ? i : 0),
                            r = e.findItemIndexAtTime(t);
                        this.setSchedulePosition(r);
                    }
                } else if (r && !this.playingItem) {
                    let t = e.findItemIndex(r);
                    this.setSchedulePosition(t);
                }
            }
            advanceAssetBuffering(e, t) {
                let i = e.event,
                    r = i.findAssetIndex(t),
                    s = sV(i, r);
                if (i.isAssetPastPlayoutLimit(s)) {
                    if (this.schedule) {
                        var a;
                        let t = null == (a = this.schedule.items) ? void 0 : a[this.findItemIndex(e) + 1];
                        t && this.bufferedToItem(t);
                    }
                } else this.bufferedToEvent(e, s);
            }
            advanceAfterAssetEnded(e, t, i) {
                let r = sV(e, i);
                if (e.isAssetPastPlayoutLimit(r)) {
                    if (this.schedule) {
                        let i = this.schedule.items;
                        if (i) {
                            let r = t + 1;
                            if (r >= i.length) return void this.setSchedulePosition(-1);
                            let s = e.resumeTime;
                            this.timelinePos < s &&
                                (this.log(sz("advanceAfterAssetEnded", s)),
                                (this.timelinePos = s),
                                e.appendInPlace && this.advanceInPlace(s),
                                this.checkBuffer(this.bufferedPos < s)),
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
                let i = this.schedule;
                if (!i) return;
                let r = t.parentIdentifier,
                    s = i.getEvent(r);
                if (s) {
                    let t = i.findEventIndex(r),
                        a = i.findAssetIndex(s, e);
                    this.advanceAfterAssetEnded(s, t, a - 1);
                }
            }
            setSchedulePosition(e, t) {
                var i, r, s;
                let a = null == (i = this.schedule) ? void 0 : i.items;
                if (!a || this.playbackDisabled) return;
                let n = e >= 0 ? a[e] : null;
                this.log(`setSchedulePosition ${e}, ${t} (${n ? sq(n) : n}) pos: ${this.timelinePos}`);
                let l = this.waitingItem || this.playingItem,
                    o = this.playingLastItem;
                if (this.isInterstitial(l)) {
                    let i = l.event,
                        d = this.playingAsset,
                        u = null == d ? void 0 : d.identifier,
                        f = u ? this.getAssetPlayer(u) : null;
                    if (f && u && (!this.eventItemsMatch(l, n) || (void 0 !== t && u !== i.assetList[t].identifier))) {
                        let t = i.findAssetIndex(d);
                        if (
                            (this.log(`INTERSTITIAL_ASSET_ENDED ${t + 1}/${i.assetList.length} ${sY(d)}`),
                            (this.endedAsset = d),
                            (this.playingAsset = null),
                            this.hls.trigger(h.INTERSTITIAL_ASSET_ENDED, {
                                asset: d,
                                assetListIndex: t,
                                event: i,
                                schedule: a.slice(0),
                                scheduleIndex: e,
                                player: f,
                            }),
                            l !== this.playingItem)
                        ) {
                            this.itemsMatch(l, this.playingItem) &&
                                !this.playingAsset &&
                                this.advanceAfterAssetEnded(i, this.findItemIndex(this.playingItem), t);
                            return;
                        }
                        this.retreiveMediaSource(u, n),
                            f.media && !(null != (r = this.detachedData) && r.mediaSource) && f.detachMedia();
                    }
                    if (
                        !this.eventItemsMatch(l, n) &&
                        ((this.endedItem = l),
                        (this.playingItem = null),
                        this.log(`INTERSTITIAL_ENDED ${i} ${sq(l)}`),
                        (i.hasPlayed = !0),
                        this.hls.trigger(h.INTERSTITIAL_ENDED, { event: i, schedule: a.slice(0), scheduleIndex: e }),
                        i.cue.once)
                    ) {
                        this.updateSchedule();
                        let e = null == (s = this.schedule) ? void 0 : s.items;
                        if (n && e) {
                            let i = this.findItemIndex(n);
                            this.advanceSchedule(i, e, t, l, o);
                        }
                        return;
                    }
                }
                this.advanceSchedule(e, a, t, l, o);
            }
            advanceSchedule(e, t, i, r, s) {
                let a = this.schedule;
                if (!a) return;
                let n = t[e] || null,
                    l = this.primaryMedia,
                    o = this.playerQueue;
                if (
                    (o.length &&
                        o.forEach((t) => {
                            let i = t.interstitial,
                                r = a.findEventIndex(i.identifier);
                            (r < e || r > e + 1) && this.clearInterstitial(i, n);
                        }),
                    this.isInterstitial(n))
                ) {
                    this.timelinePos = Math.min(Math.max(this.timelinePos, n.start), n.end);
                    let s = n.event;
                    if (void 0 === i) {
                        i = a.findAssetIndex(s, this.timelinePos);
                        let t = sV(s, i - 1);
                        if (s.isAssetPastPlayoutLimit(t) || (s.appendInPlace && this.timelinePos === n.end))
                            return void this.advanceAfterAssetEnded(s, e, i);
                        i = t;
                    }
                    let o = this.waitingItem;
                    this.assetsBuffered(n, l) || this.setBufferingItem(n);
                    let d = this.preloadAssets(s, i);
                    if (
                        (this.eventItemsMatch(n, o || r) ||
                            ((this.waitingItem = n),
                            this.log(`INTERSTITIAL_STARTED ${sq(n)} ${s.appendInPlace ? "append in place" : ""}`),
                            this.hls.trigger(h.INTERSTITIAL_STARTED, {
                                event: s,
                                schedule: t.slice(0),
                                scheduleIndex: e,
                            })),
                        !s.assetListLoaded)
                    )
                        return void this.log(`Waiting for ASSET-LIST to complete loading ${s}`);
                    if ((s.assetListLoader && (s.assetListLoader.destroy(), (s.assetListLoader = void 0)), !l))
                        return void this.log(`Waiting for attachMedia to start Interstitial ${s}`);
                    (this.waitingItem = this.endedItem = null), (this.playingItem = n);
                    let u = s.assetList[i];
                    if (!u) return void this.advanceAfterAssetEnded(s, e, i || 0);
                    if ((d || (d = this.getAssetPlayer(u.identifier)), null === d || d.destroyed)) {
                        let e = s.assetList.length;
                        this.warn(`asset ${i + 1}/${e} player destroyed ${s}`),
                            (d = this.createAssetPlayer(s, u, i)).loadSource();
                    }
                    if (!this.eventItemsMatch(n, this.bufferingItem) && s.appendInPlace && this.isAssetBuffered(u))
                        return;
                    this.startAssetPlayer(d, i, t, e, l), this.shouldPlay && sQ(d.media);
                } else
                    n
                        ? (this.resumePrimary(n, e, r), this.shouldPlay && sQ(this.hls.media))
                        : s &&
                          this.isInterstitial(r) &&
                          ((this.endedItem = null),
                          (this.playingItem = r),
                          r.event.appendInPlace || this.attachPrimary(a.durations.primary, null));
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
            resumePrimary(e, t, i) {
                var r, s;
                if (
                    ((this.playingItem = e),
                    (this.playingAsset = this.endedAsset = null),
                    (this.waitingItem = this.endedItem = null),
                    this.bufferedToItem(e),
                    this.log(`resuming ${sq(e)}`),
                    !(null != (r = this.detachedData) && r.mediaSource))
                ) {
                    let i = this.timelinePos;
                    (i < e.start || i >= e.end) &&
                        ((i = this.getPrimaryResumption(e, t)),
                        this.log(sz("resumePrimary", i)),
                        (this.timelinePos = i)),
                        this.attachPrimary(i, e);
                }
                if (!i) return;
                let a = null == (s = this.schedule) ? void 0 : s.items;
                a &&
                    (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${sq(e)}`),
                    this.hls.trigger(h.INTERSTITIALS_PRIMARY_RESUMED, { schedule: a.slice(0), scheduleIndex: t }),
                    this.checkBuffer());
            }
            getPrimaryResumption(e, t) {
                let i = e.start;
                if (this.primaryLive) {
                    let e = this.primaryDetails;
                    if (0 === t) return this.hls.startPosition;
                    if (e && (i < e.fragmentStart || i > e.edge)) return this.hls.liveSyncPosition || -1;
                }
                return i;
            }
            isAssetBuffered(e) {
                let t = this.getAssetPlayer(e.identifier);
                return null != t && t.hls
                    ? t.hls.bufferedToEnd
                    : tR.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >=
                          e.timelineStart + (e.duration || 0);
            }
            attachPrimary(e, t, i) {
                t ? this.setBufferingItem(t) : (this.bufferingItem = this.playingItem), (this.bufferingAsset = null);
                let r = this.primaryMedia;
                if (!r) return;
                let s = this.hls;
                s.media ? this.checkBuffer() : (this.transferMediaTo(s, r), i && this.startLoadingPrimaryAt(e, i)),
                    i || (this.log(sz("attachPrimary", e)), (this.timelinePos = e), this.startLoadingPrimaryAt(e, i));
            }
            startLoadingPrimaryAt(e, t) {
                var i;
                let r = this.hls;
                !r.loadingEnabled ||
                !r.media ||
                Math.abs(((null == (i = r.mainForwardBufferInfo) ? void 0 : i.start) || r.media.currentTime) - e) > 0.5
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
                    this.hls.off(h.BUFFER_CODECS, this.onBufferCodecs, this),
                    this.hls.on(h.BUFFER_CODECS, this.onBufferCodecs, this);
            }
            onLevelUpdated(e, t) {
                if (-1 === t.level || !this.schedule) return;
                let i = this.hls.levels[t.level];
                if (!i.details) return;
                let r = O(O({}, this.mediaSelection || this.altSelection), {}, { main: i });
                (this.mediaSelection = r),
                    this.schedule.parseInterstitialDateRanges(r, this.hls.config.interstitialAppendInPlace),
                    !this.effectivePlayingItem && this.schedule.items && this.checkStart();
            }
            onAudioTrackUpdated(e, t) {
                let i = this.hls.audioTracks[t.id],
                    r = this.mediaSelection;
                if (!r) {
                    this.altSelection = O(O({}, this.altSelection), {}, { audio: i });
                    return;
                }
                let s = O(O({}, r), {}, { audio: i });
                this.mediaSelection = s;
            }
            onSubtitleTrackUpdated(e, t) {
                let i = this.hls.subtitleTracks[t.id],
                    r = this.mediaSelection;
                if (!r) {
                    this.altSelection = O(O({}, this.altSelection), {}, { subtitles: i });
                    return;
                }
                let s = O(O({}, r), {}, { subtitles: i });
                this.mediaSelection = s;
            }
            onAudioTrackSwitching(e, t) {
                let i = eQ(t);
                this.playerQueue.forEach(({ hls: e }) => e && (e.setAudioOption(t) || e.setAudioOption(i)));
            }
            onSubtitleTrackSwitch(e, t) {
                let i = eQ(t);
                this.playerQueue.forEach(
                    ({ hls: e }) => e && (e.setSubtitleOption(t) || (-1 !== t.id && e.setSubtitleOption(i))),
                );
            }
            onBufferCodecs(e, t) {
                let i = t.tracks;
                i && (this.requiredTracks = i);
            }
            onBufferAppended(e, t) {
                this.checkBuffer();
            }
            onBufferFlushed(e, t) {
                let i = this.playingItem;
                if (i && !this.itemsMatch(i, this.bufferingItem) && !this.isInterstitial(i)) {
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
                            var i;
                            let e = this.schedule.findEventIndex(r.identifier),
                                t = null == (i = this.schedule.items) ? void 0 : i[e];
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
                var i;
                let r = null == (i = this.schedule) ? void 0 : i.items;
                return (e && r && r[this.findItemIndex(e, t)]) || null;
            }
            trimInPlace(e, t) {
                if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > 0.25) {
                    e.event.assetList.forEach((t, i) => {
                        e.event.isAssetPastPlayoutLimit(i) && this.clearAssetPlayer(t.identifier, null);
                    });
                    let i = e.end + 0.25,
                        r = tR.bufferInfo(this.primaryMedia, i, 0);
                    (r.end > i || (r.nextStart || 0) > i) &&
                        (this.log(`trim buffered interstitial ${sq(e)} (was ${sq(t)})`),
                        this.attachPrimary(i, null, !0),
                        this.flushFrontBuffer(i));
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
                var i;
                return !!t && (e === t || e.event.identifier === (null == (i = t.event) ? void 0 : i.identifier));
            }
            findItemIndex(e, t) {
                return e && this.schedule ? this.schedule.findItemIndex(e, t) : -1;
            }
            updateSchedule(e = !1) {
                var t;
                let i = this.mediaSelection;
                i && (null == (t = this.schedule) || t.updateSchedule(i, [], e));
            }
            checkBuffer(e) {
                var t;
                let i = null == (t = this.schedule) ? void 0 : t.items;
                if (!i) return;
                let r = tR.bufferInfo(this.primaryMedia, this.timelinePos, 0);
                e && (this.bufferedPos = this.timelinePos), e || (e = r.len < 1), this.updateBufferedPos(r.end, i, e);
            }
            updateBufferedPos(e, t, i) {
                let r = this.schedule,
                    s = this.bufferingItem;
                if (this.bufferedPos > e || !r) return;
                if (1 === t.length && this.itemsMatch(t[0], s)) {
                    this.bufferedPos = e;
                    return;
                }
                let a = this.playingItem,
                    n = this.findItemIndex(a),
                    l = r.findItemIndexAtTime(e);
                if (this.bufferedPos < e) {
                    var o;
                    let i = this.findItemIndex(s),
                        r = Math.min(i + 1, t.length - 1),
                        a = t[r];
                    if (
                        (((-1 === l && s && e >= s.end) ||
                            (null != (o = a.event) && o.appendInPlace && e + 0.01 >= a.start)) &&
                            (l = r),
                        this.isInterstitial(s))
                    ) {
                        let e = s.event;
                        if ((r - n > 1 && !1 === e.appendInPlace) || (0 === e.assetList.length && e.assetListLoader))
                            return;
                    }
                    if (((this.bufferedPos = e), l > i && l > n)) this.bufferedToItem(a);
                    else {
                        let t = this.primaryDetails;
                        this.primaryLive &&
                            t &&
                            e > t.edge - t.targetduration &&
                            a.start < t.edge + this.hls.config.interstitialLiveLookAhead &&
                            this.isInterstitial(a) &&
                            this.preloadAssets(a.event, 0);
                    }
                } else
                    i &&
                        a &&
                        !this.itemsMatch(a, s) &&
                        (l === n ? this.bufferedToItem(a) : l === n + 1 && this.bufferedToItem(t[l]));
            }
            assetsBuffered(e, t) {
                return (
                    0 !== e.event.assetList.length &&
                    !e.event.assetList.some((e) => {
                        let i = this.getAssetPlayer(e.identifier);
                        return !(null != i && i.bufferedInPlaceToEnd(t));
                    })
                );
            }
            setBufferingItem(e) {
                let t = this.bufferingItem,
                    i = this.schedule;
                if (!this.itemsMatch(e, t) && i) {
                    let { items: r, events: s } = i;
                    if (!r || !s) return t;
                    let a = this.isInterstitial(e),
                        n = this.getBufferingPlayer();
                    (this.bufferingItem = e), (this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos)));
                    let l = n ? n.remaining : t ? t.end - this.timelinePos : 0;
                    if (
                        (this.log(
                            `INTERSTITIALS_BUFFERED_TO_BOUNDARY ${sq(e)}` + (t ? ` (${l.toFixed(2)} remaining)` : ""),
                        ),
                        !this.playbackDisabled)
                    )
                        if (a) {
                            let t = i.findAssetIndex(e.event, this.bufferedPos);
                            e.event.assetList.forEach((e, i) => {
                                let r = this.getAssetPlayer(e.identifier);
                                r && (i === t && r.loadSource(), r.resumeBuffering());
                            });
                        } else this.hls.resumeBuffering(), this.playerQueue.forEach((e) => e.pauseBuffering());
                    this.hls.trigger(h.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
                        events: s.slice(0),
                        schedule: r.slice(0),
                        bufferingIndex: this.findItemIndex(e),
                        playingIndex: this.findItemIndex(this.playingItem),
                    });
                } else this.bufferingItem !== e && (this.bufferingItem = e);
                return t;
            }
            bufferedToItem(e, t = 0) {
                let i = this.setBufferingItem(e);
                if (!this.playbackDisabled) {
                    if (this.isInterstitial(e)) this.bufferedToEvent(e, t);
                    else if (null !== i) {
                        this.bufferingAsset = null;
                        let t = this.detachedData;
                        t && t.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e);
                    }
                }
            }
            preloadPrimary(e) {
                let t = this.findItemIndex(e),
                    i = this.getPrimaryResumption(e, t);
                this.startLoadingPrimaryAt(i);
            }
            bufferedToEvent(e, t) {
                let i = e.event,
                    r = 0 === i.assetList.length && !i.assetListLoader,
                    s = i.cue.once;
                if (r || !s) {
                    let e = this.preloadAssets(i, t);
                    if (null != e && e.interstitial.appendInPlace) {
                        let t = this.primaryMedia;
                        t && this.bufferAssetPlayer(e, t);
                    }
                }
            }
            preloadAssets(e, t) {
                let i = e.assetUrl,
                    r = e.assetList.length,
                    s = 0 === r && !e.assetListLoader,
                    a = e.cue.once;
                if (s) {
                    let s,
                        a = e.timelineStart;
                    if (e.appendInPlace) {
                        var n;
                        let t = this.playingItem;
                        this.isInterstitial(t) ||
                            (null == t || null == (n = t.nextEvent) ? void 0 : n.identifier) !== e.identifier ||
                            this.flushFrontBuffer(a + 0.25);
                    }
                    let l = 0;
                    if (
                        (!this.playingItem &&
                            this.primaryLive &&
                            -1 === (l = this.hls.startPosition) &&
                            (l = this.hls.liveSyncPosition || 0),
                        l && !(e.cue.pre || e.cue.post))
                    ) {
                        let e = l - a;
                        e > 0 && (s = Math.round(1e3 * e) / 1e3);
                    }
                    if (
                        (this.log(
                            `Load interstitial asset ${t + 1}/${i ? 1 : r} ${e}${s ? ` live-start: ${l} start-offset: ${s}` : ""}`,
                        ),
                        i)
                    )
                        return this.createAsset(e, 0, 0, a, e.duration, i);
                    let o = this.assetListLoader.loadAssetList(e, s);
                    o && (e.assetListLoader = o);
                } else if (!a && r) {
                    for (let i = t; i < r; i++) {
                        let t = e.assetList[i],
                            r = this.getAssetPlayerQueueIndex(t.identifier);
                        (-1 === r || this.playerQueue[r].destroyed) && !t.error && this.createAssetPlayer(e, t, i);
                    }
                    let i = e.assetList[t];
                    if (i) {
                        let e = this.getAssetPlayer(i.identifier);
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
                        this.hls.trigger(h.BUFFER_FLUSHING, { startOffset: e, endOffset: 1 / 0, type: t });
                    }));
            }
            getAssetPlayerQueueIndex(e) {
                let t = this.playerQueue;
                for (let i = 0; i < t.length; i++) if (e === t[i].assetId) return i;
                return -1;
            }
            getAssetPlayer(e) {
                let t = this.getAssetPlayerQueueIndex(e);
                return this.playerQueue[t] || null;
            }
            getBufferingPlayer() {
                let { playerQueue: e, primaryMedia: t } = this;
                if (t) {
                    for (let i = 0; i < e.length; i++) if (e[i].media === t) return e[i];
                }
                return null;
            }
            createAsset(e, t, i, r, s, a) {
                let n = {
                    parentIdentifier: e.identifier,
                    identifier: `${e.identifier}-${t + 1}-${sB(a)}`,
                    duration: s,
                    startOffset: i,
                    timelineStart: r,
                    uri: a,
                };
                return this.createAssetPlayer(e, n, t);
            }
            createAssetPlayer(e, t, i) {
                let r = this.hls,
                    s = r.userConfig,
                    a = s.videoPreference,
                    n = r.loadLevelObj || r.levels[r.currentLevel];
                (a || n) &&
                    ((a = x({}, a)),
                    n.videoCodec && (a.videoCodec = n.videoCodec),
                    n.videoRange && (a.allowedVideoRanges = [n.videoRange]));
                let d = r.audioTracks[r.audioTrack],
                    u = r.subtitleTracks[r.subtitleTrack],
                    f = 0;
                if (this.primaryLive || e.appendInPlace) {
                    let e = this.timelinePos - t.timelineStart;
                    if (e > 1) {
                        let i = t.duration;
                        i && e < i && (f = e);
                    }
                }
                let c = t.identifier,
                    g = O(
                        O({}, s),
                        {},
                        {
                            maxMaxBufferLength: Math.min(180, r.config.maxMaxBufferLength),
                            autoStartLoad: !0,
                            startFragPrefetch: !0,
                            primarySessionId: r.sessionId,
                            assetPlayerId: c,
                            abrEwmaDefaultEstimate: r.bandwidthEstimate,
                            interstitialsController: void 0,
                            startPosition: f,
                            liveDurationInfinity: !1,
                            testBandwidth: !1,
                            videoPreference: a,
                            audioPreference: d || s.audioPreference,
                            subtitlePreference: u || s.subtitlePreference,
                        },
                    );
                e.appendInPlace &&
                    ((e.appendInPlaceStarted = !0), t.timelineStart && (g.timelineOffset = t.timelineStart));
                let m = g.cmcd;
                null != m && m.sessionId && m.contentId && (g.cmcd = x({}, m, { contentId: sB(t.uri) })),
                    this.getAssetPlayer(c) && this.warn(`Duplicate date range identifier ${e} and asset ${c}`);
                let p = new sW(this.HlsPlayerClass, g, e, t);
                this.playerQueue.push(p), (e.assetList[i] = t);
                let y = !0,
                    v = (r) => {
                        if (r.live) {
                            var s;
                            let t = Error(`Interstitials MUST be VOD assets ${e}`),
                                r = {
                                    fatal: !0,
                                    type: l.OTHER_ERROR,
                                    details: o.INTERSTITIAL_ASSET_ITEM_ERROR,
                                    error: t,
                                },
                                a = (null == (s = this.schedule) ? void 0 : s.findEventIndex(e.identifier)) || -1;
                            this.handleAssetItemError(r, e, a, i, t.message);
                            return;
                        }
                        let a = r.edge - r.fragmentStart,
                            n = t.duration;
                        (y || null === n || a > n) &&
                            ((y = !1),
                            this.log(`Interstitial asset "${c}" duration change ${n} > ${a}`),
                            (t.duration = a),
                            this.updateSchedule());
                    };
                p.on(h.LEVEL_UPDATED, (e, { details: t }) => v(t)),
                    p.on(h.LEVEL_PTS_UPDATED, (e, { details: t }) => v(t)),
                    p.on(h.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
                let E = (e, t) => {
                    let i = this.getAssetPlayer(c);
                    if (i && t.tracks) {
                        i.off(h.BUFFER_CODECS, E), (i.tracks = t.tracks);
                        let e = this.primaryMedia;
                        this.bufferingAsset === i.assetItem && e && !i.media && this.bufferAssetPlayer(i, e);
                    }
                };
                p.on(h.BUFFER_CODECS, E);
                let T = () => {
                    var i;
                    let r = this.getAssetPlayer(c);
                    if ((this.log(`buffered to end of asset ${r}`), !r || !this.schedule)) return;
                    let s = this.schedule.findEventIndex(e.identifier),
                        a = null == (i = this.schedule.items) ? void 0 : i[s];
                    this.isInterstitial(a) && this.advanceAssetBuffering(a, t);
                };
                p.on(h.BUFFERED_TO_END, T);
                let S = (t) => () => {
                    if (!this.getAssetPlayer(c) || !this.schedule) return;
                    this.shouldPlay = !0;
                    let i = this.schedule.findEventIndex(e.identifier);
                    this.advanceAfterAssetEnded(e, i, t);
                };
                return (
                    p.once(h.MEDIA_ENDED, S(i)),
                    p.once(h.PLAYOUT_LIMIT_REACHED, S(1 / 0)),
                    p.on(h.ERROR, (t, r) => {
                        if (!this.schedule) return;
                        let s = this.getAssetPlayer(c);
                        r.details === o.BUFFER_STALLED_ERROR
                            ? null != s && s.appendInPlace
                                ? this.handleInPlaceStall(e)
                                : (this.onTimeupdate(), this.checkBuffer(!0))
                            : this.handleAssetItemError(
                                  r,
                                  e,
                                  this.schedule.findEventIndex(e.identifier),
                                  i,
                                  `Asset player error ${r.error} ${e}`,
                              );
                    }),
                    p.on(h.DESTROYING, () => {
                        if (!this.getAssetPlayer(c) || !this.schedule) return;
                        let t = Error(`Asset player destroyed unexpectedly ${c}`),
                            r = { fatal: !0, type: l.OTHER_ERROR, details: o.INTERSTITIAL_ASSET_ITEM_ERROR, error: t };
                        this.handleAssetItemError(r, e, this.schedule.findEventIndex(e.identifier), i, t.message);
                    }),
                    this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${sY(t)}`),
                    this.hls.trigger(h.INTERSTITIAL_ASSET_PLAYER_CREATED, {
                        asset: t,
                        assetListIndex: i,
                        event: e,
                        player: p,
                    }),
                    p
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
                    let i = this.playerQueue[t];
                    this.transferMediaFromPlayer(i, null), i.resetDetails();
                }
            }
            clearAssetPlayer(e, t) {
                let i = this.getAssetPlayerQueueIndex(e);
                if (-1 !== i) {
                    let e = this.playerQueue[i];
                    this.log(`clear ${e} toSegment: ${t ? sq(t) : t}`),
                        this.transferMediaFromPlayer(e, t),
                        this.playerQueue.splice(i, 1),
                        e.destroy();
                }
            }
            emptyPlayerQueue() {
                let e;
                for (; (e = this.playerQueue.pop()); ) e.destroy();
                this.playerQueue = [];
            }
            startAssetPlayer(e, t, i, r, s) {
                let { interstitial: a, assetItem: n, assetId: l } = e,
                    o = a.assetList.length,
                    d = this.playingAsset;
                (this.endedAsset = null),
                    (this.playingAsset = n),
                    (d && d.identifier === l) ||
                        (d && (this.clearAssetPlayer(d.identifier, i[r]), delete d.error),
                        this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${o} ${sY(n)}`),
                        this.hls.trigger(h.INTERSTITIAL_ASSET_STARTED, {
                            asset: n,
                            assetListIndex: t,
                            event: a,
                            schedule: i.slice(0),
                            scheduleIndex: r,
                            player: e,
                        })),
                    this.bufferAssetPlayer(e, s);
            }
            bufferAssetPlayer(e, t) {
                var i, r;
                if (!this.schedule) return;
                let { interstitial: s, assetItem: a } = e,
                    n = this.schedule.findEventIndex(s.identifier),
                    h = null == (i = this.schedule.items) ? void 0 : i[n];
                if (!h) return;
                e.loadSource(), this.setBufferingItem(h), (this.bufferingAsset = a);
                let d = this.getBufferingPlayer();
                if (d === e) return;
                let u = s.appendInPlace;
                if (u && (null == d ? void 0 : d.interstitial.appendInPlace) === !1) return;
                let f =
                    (null == d ? void 0 : d.tracks) ||
                    (null == (r = this.detachedData) ? void 0 : r.tracks) ||
                    this.requiredTracks;
                if (u && a !== this.playingAsset) {
                    if (!e.tracks) return void this.log(`Waiting for track info before buffering ${e}`);
                    if (f && !H(f, e.tracks)) {
                        let t = Error(
                                `Asset ${sY(a)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(f)}')`,
                            ),
                            i = { fatal: !0, type: l.OTHER_ERROR, details: o.INTERSTITIAL_ASSET_ITEM_ERROR, error: t },
                            r = s.findAssetIndex(a);
                        this.handleAssetItemError(i, s, n, r, t.message);
                        return;
                    }
                }
                this.transferMediaTo(e, t);
            }
            handleInPlaceStall(e) {
                let t = this.schedule,
                    i = this.primaryMedia;
                if (!t || !i) return;
                let r = i.currentTime,
                    s = t.findAssetIndex(e, r),
                    a = e.assetList[s];
                if (a) {
                    let n = this.getAssetPlayer(a.identifier);
                    if (n) {
                        let l = n.currentTime || r - a.timelineStart,
                            o = n.duration - l;
                        if (
                            (this.warn(`Stalled at ${l} of ${l + o} in ${n} ${e} (media.currentTime: ${r})`),
                            l && (o / i.playbackRate < 0.5 || n.bufferedInPlaceToEnd(i)) && n.hls)
                        ) {
                            let i = t.findEventIndex(e.identifier);
                            this.advanceAfterAssetEnded(e, i, s);
                        }
                    }
                }
            }
            advanceInPlace(e) {
                let t = this.primaryMedia;
                t && t.currentTime < e && (t.currentTime = e);
            }
            handleAssetItemError(e, t, i, r, s) {
                if (e.details === o.BUFFER_STALLED_ERROR) return;
                let a = t.assetList[r] || null;
                if ((this.warn(`INTERSTITIAL_ASSET_ERROR ${a ? sY(a) : a} ${e.error}`), !this.schedule)) return;
                let n = (null == a ? void 0 : a.identifier) || "",
                    l = this.getAssetPlayerQueueIndex(n),
                    d = this.playerQueue[l] || null,
                    u = this.schedule.items,
                    f = x({}, e, {
                        fatal: !1,
                        errorAction: ts(!0),
                        asset: a,
                        assetListIndex: r,
                        event: t,
                        schedule: u,
                        scheduleIndex: i,
                        player: d,
                    });
                if ((this.hls.trigger(h.INTERSTITIAL_ASSET_ERROR, f), !e.fatal)) return;
                let c = this.playingAsset,
                    g = this.bufferingAsset,
                    m = Error(s);
                if ((a && (this.clearAssetPlayer(n, null), (a.error = m)), t.assetList.some((e) => !e.error)))
                    for (let e = r; e < t.assetList.length; e++) this.resetAssetPlayer(t.assetList[e].identifier);
                else t.error = m;
                this.updateSchedule(!0),
                    t.error
                        ? this.primaryFallback(t)
                        : c && c.identifier === n
                          ? this.advanceAfterAssetEnded(t, i, r)
                          : g &&
                            g.identifier === n &&
                            this.isInterstitial(this.bufferingItem) &&
                            this.advanceAssetBuffering(this.bufferingItem, g);
            }
            primaryFallback(e) {
                let t = e.timelineStart,
                    i = this.effectivePlayingItem;
                if (i) {
                    this.log(
                        `Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${sq(i)} error: ${e.error}`,
                    );
                    let r = this.timelinePos;
                    -1 === r && (r = this.hls.startPosition);
                    let s = this.updateItem(i, r);
                    if (
                        (this.itemsMatch(i, s) && this.clearInterstitial(e, null),
                        e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t)),
                        !this.schedule)
                    )
                        return;
                    let a = this.schedule.findItemIndexAtTime(r);
                    this.setSchedulePosition(a);
                } else this.checkStart();
            }
            onAssetListLoaded(e, t) {
                var i, r, s;
                let a = t.event,
                    n = a.identifier,
                    l = t.assetListResponse.ASSETS;
                if (!(null != (i = this.schedule) && i.hasEvent(n))) return;
                let o = a.timelineStart,
                    h = a.duration,
                    d = 0;
                l.forEach((e, t) => {
                    let i = parseFloat(e.DURATION);
                    this.createAsset(a, t, d, o + d, i, e.URI), (d += i);
                }),
                    (a.duration = d),
                    this.log(`Loaded asset-list with duration: ${d} (was: ${h}) ${a}`);
                let u = this.waitingItem,
                    f = (null == u ? void 0 : u.event.identifier) === n;
                this.updateSchedule();
                let c = null == (r = this.bufferingItem) ? void 0 : r.event;
                if (f) {
                    let e = this.schedule.findEventIndex(n),
                        t = null == (s = this.schedule.items) ? void 0 : s[e];
                    if (t) {
                        if (
                            !this.playingItem &&
                            this.timelinePos > t.end &&
                            this.schedule.findItemIndexAtTime(this.timelinePos) !== e
                        ) {
                            (a.error = Error(`Interstitial no longer within playback range ${this.timelinePos} ${a}`)),
                                this.updateSchedule(!0),
                                this.primaryFallback(a);
                            return;
                        }
                        this.setBufferingItem(t);
                    }
                    this.setSchedulePosition(e);
                } else if ((null == c ? void 0 : c.identifier) === n) {
                    let e = a.assetList[0];
                    if (e) {
                        let t = this.getAssetPlayer(e.identifier);
                        if (c.appendInPlace) {
                            let e = this.primaryMedia;
                            t && e && this.bufferAssetPlayer(t, e);
                        } else t && t.loadSource();
                    }
                }
            }
            onError(e, t) {
                if (this.schedule)
                    switch (t.details) {
                        case o.ASSET_LIST_PARSING_ERROR:
                        case o.ASSET_LIST_LOAD_ERROR:
                        case o.ASSET_LIST_LOAD_TIMEOUT: {
                            let e = t.interstitial;
                            e && (this.updateSchedule(!0), this.primaryFallback(e));
                            break;
                        }
                        case o.BUFFER_STALLED_ERROR: {
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
class aG extends tT {
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
                        this.hls.trigger(h.MEDIA_ENDED, { stalled: !1 });
                }
            }),
            (this.hls = e),
            (this.fragmentTracker = t),
            this.registerListeners();
    }
    registerListeners() {
        let { hls: e } = this;
        e &&
            (e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(h.BUFFER_APPENDED, this.onBufferAppended, this));
    }
    unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(h.BUFFER_APPENDED, this.onBufferAppended, this));
    }
    destroy() {
        super.destroy(),
            this.unregisterListeners(),
            (this.media = this.hls = this.fragmentTracker = null),
            (this.mediaSource = void 0);
    }
    onMediaAttached(e, t) {
        this.setInterval(100), (this.mediaSource = t.mediaSource);
        let i = (this.media = t.media);
        ib(i, "playing", this.onMediaPlaying), ib(i, "waiting", this.onMediaWaiting), ib(i, "ended", this.onMediaEnded);
    }
    onMediaDetaching(e, t) {
        this.clearInterval();
        let { media: i } = this;
        i &&
            (iI(i, "playing", this.onMediaPlaying),
            iI(i, "waiting", this.onMediaWaiting),
            iI(i, "ended", this.onMediaEnded),
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
        var i, r, s;
        let a = null == (i = this.hls) ? void 0 : i.config;
        if (!a) return;
        let n = this.media;
        if (!n) return;
        let { seeking: l } = n,
            o = this.seeking && !l,
            d = !this.seeking && l,
            u = (n.paused && !l) || n.ended || 0 === n.playbackRate;
        if (((this.seeking = l), e !== t)) {
            t && (this.ended = 0),
                (this.moved = !0),
                !l && ((this.nudgeRetry = 0), a.nudgeOnVideoHole && !u && e > t && this.nudgeOnVideoHole(e, t)),
                0 === this.waiting && this.stallResolved(e);
            return;
        }
        if (d || o) {
            o && this.stallResolved(e);
            return;
        }
        if (u) {
            (this.nudgeRetry = 0),
                this.stallResolved(e),
                !this.ended &&
                    n.ended &&
                    this.hls &&
                    ((this.ended = e || 1), this.hls.trigger(h.MEDIA_ENDED, { stalled: !1 }));
            return;
        }
        if (!tR.getBuffered(n).length) {
            this.nudgeRetry = 0;
            return;
        }
        let f = tR.bufferInfo(n, e, 0),
            c = f.nextStart || 0,
            g = this.fragmentTracker;
        if (l && g && this.hls) {
            let t = aK(this.hls.inFlightFragments, e),
                i = f.len > 2,
                r = !c || t || (c - e > 2 && !g.getPartialFragment(e));
            if (i || r) return;
            this.moved = !1;
        }
        let m = null == (r = this.hls) ? void 0 : r.latestLevelDetails;
        if (!this.moved && null !== this.stalled && g) {
            if (!(f.len > 0) && !c) return;
            let t = Math.max(c, f.start || 0) - e,
                i = null != m && m.live ? 2 * m.targetduration : 2,
                r = aV(e, g);
            if (t > 0 && (t <= i || r)) {
                n.paused || this._trySkipBufferHole(r);
                return;
            }
        }
        let p = a.detectStallWithCurrentTimeMs,
            y = self.performance.now(),
            v = this.waiting,
            E = this.stalled;
        if (null === E)
            if (v > 0 && y - v < p) E = this.stalled = v;
            else {
                this.stalled = y;
                return;
            }
        let T = y - E;
        if (!l && (T >= p || v) && this.hls) {
            if (
                (null == (s = this.mediaSource) ? void 0 : s.readyState) === "ended" &&
                !(null != m && m.live) &&
                1 > Math.abs(e - ((null == m ? void 0 : m.edge) || 0))
            ) {
                if (this.ended) return;
                (this.ended = e || 1), this.hls.trigger(h.MEDIA_ENDED, { stalled: !0 });
                return;
            }
            if ((this._reportStall(f), !this.media || !this.hls)) return;
        }
        let S = tR.bufferInfo(n, e, a.maxBufferHole);
        this._tryFixBufferStall(S, T, e);
    }
    stallResolved(e) {
        let t = this.stalled;
        if (t && this.hls && ((this.stalled = null), this.stallReported)) {
            let i = self.performance.now() - t;
            this.log(`playback not stuck anymore @${e}, after ${Math.round(i)}ms`),
                (this.stallReported = !1),
                (this.waiting = 0),
                this.hls.trigger(h.STALL_RESOLVED, {});
        }
    }
    nudgeOnVideoHole(e, t) {
        var i;
        let r = this.buffered.video;
        if (
            this.hls &&
            this.media &&
            this.fragmentTracker &&
            null != (i = this.buffered.audio) &&
            i.length &&
            r &&
            r.length > 1 &&
            e > r.end(0)
        ) {
            let i = tR.bufferedInfo(tR.timeRangesToArray(this.buffered.audio), e, 0);
            if (i.len > 1 && t >= i.start) {
                let i = tR.timeRangesToArray(r),
                    s = tR.bufferedInfo(i, t, 0).bufferedIndex;
                if (s > -1 && s < i.length - 1) {
                    let t = tR.bufferedInfo(i, e, 0).bufferedIndex,
                        r = i[s].end,
                        a = i[s + 1].start;
                    if ((-1 === t || t > s) && a - r < 1 && e - r < 2) {
                        let i = Error(
                            `nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${r} -> ${a} buffered index: ${t}`,
                        );
                        this.warn(i.message), (this.media.currentTime += 1e-6);
                        let s = aV(e, this.fragmentTracker);
                        s && "fragment" in s ? (s = s.fragment) : s || (s = void 0);
                        let n = tR.bufferInfo(this.media, e, 0);
                        this.hls.trigger(h.ERROR, {
                            type: l.MEDIA_ERROR,
                            details: o.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: i,
                            reason: i.message,
                            frag: s,
                            buffer: n.len,
                            bufferInfo: n,
                        });
                    }
                }
            }
        }
    }
    _tryFixBufferStall(e, t, i) {
        var r, s;
        let { fragmentTracker: a, media: n } = this,
            l = null == (r = this.hls) ? void 0 : r.config;
        if (!n || !a || !l) return;
        let o = null == (s = this.hls) ? void 0 : s.latestLevelDetails,
            h = aV(i, a);
        if ((h || (null != o && o.live && i < o.fragmentStart)) && (this._trySkipBufferHole(h) || !this.media)) return;
        let d = e.buffered,
            u = this.adjacentTraversal(e, i);
        ((d && d.length > 1 && e.len > l.maxBufferHole) || (e.nextStart && (e.nextStart - i < l.maxBufferHole || u))) &&
            (t > 1e3 * l.highBufferWatchdogPeriod || this.waiting) &&
            (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
    }
    adjacentTraversal(e, t) {
        let i = this.fragmentTracker,
            r = e.nextStart;
        if (i && r) {
            let e = i.getFragAtPos(t, D),
                s = i.getFragAtPos(r, D);
            if (e && s) return s.sn - e.sn < 2;
        }
        return !1;
    }
    _reportStall(e) {
        let { hls: t, media: i, stallReported: r, stalled: s } = this;
        if (!r && null !== s && i && t) {
            this.stallReported = !0;
            let r = Error(`Playback stalling at @${i.currentTime} due to low buffer (${ej(e)})`);
            this.warn(r.message),
                t.trigger(h.ERROR, {
                    type: l.MEDIA_ERROR,
                    details: o.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    error: r,
                    buffer: e.len,
                    bufferInfo: e,
                    stalled: { start: s },
                });
        }
    }
    _trySkipBufferHole(e) {
        var t, i;
        let { fragmentTracker: r, media: s } = this,
            a = null == (t = this.hls) ? void 0 : t.config;
        if (!s || !r || !a) return 0;
        let n = s.currentTime,
            d = tR.bufferInfo(s, n, 0),
            u = n < d.start ? d.start : d.nextStart;
        if (u && this.hls) {
            let t = d.len <= a.maxBufferHole,
                f = d.len > 0 && d.len < 1 && s.readyState < 3,
                c = u - n;
            if (c > 0 && (t || f)) {
                if (c > a.maxBufferHole) {
                    let t = !1;
                    if (0 === n) {
                        let e = r.getAppendedFrag(0, D);
                        e && u < e.end && (t = !0);
                    }
                    if (!t && e) {
                        if (!(null != (i = this.hls.loadLevelObj) && i.details) || aK(this.hls.inFlightFragments, u))
                            return 0;
                        let t = !1,
                            s = e.end;
                        for (; s < u; ) {
                            let e = aV(s, r);
                            if (e) s += e.duration;
                            else {
                                t = !0;
                                break;
                            }
                        }
                        if (t) return 0;
                    }
                }
                let t = Math.max(u + 0.05, n + 0.1);
                if (
                    (this.warn(`skipping hole, adjusting currentTime from ${n} to ${t}`),
                    (this.moved = !0),
                    (s.currentTime = t),
                    !(null != e && e.gap))
                ) {
                    let i = Error(`fragment loaded with buffer holes, seeking from ${n} to ${t}`),
                        r = {
                            type: l.MEDIA_ERROR,
                            details: o.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            error: i,
                            reason: i.message,
                            buffer: d.len,
                            bufferInfo: d,
                        };
                    e && ("fragment" in e ? (r.part = e) : (r.frag = e)), this.hls.trigger(h.ERROR, r);
                }
                return t;
            }
        }
        return 0;
    }
    _tryNudgeBuffer(e) {
        let { hls: t, media: i, nudgeRetry: r } = this,
            s = null == t ? void 0 : t.config;
        if (!i || !s) return 0;
        let a = i.currentTime;
        if ((this.nudgeRetry++, r < s.nudgeMaxRetry)) {
            let n = a + (r + 1) * s.nudgeOffset,
                d = Error(`Nudging 'currentTime' from ${a} to ${n}`);
            this.warn(d.message),
                (i.currentTime = n),
                t.trigger(h.ERROR, {
                    type: l.MEDIA_ERROR,
                    details: o.BUFFER_NUDGE_ON_STALL,
                    error: d,
                    fatal: !1,
                    buffer: e.len,
                    bufferInfo: e,
                });
        } else {
            let i = Error(`Playhead still not moving while enough data buffered @${a} after ${s.nudgeMaxRetry} nudges`);
            this.error(i.message),
                t.trigger(h.ERROR, {
                    type: l.MEDIA_ERROR,
                    details: o.BUFFER_STALLED_ERROR,
                    error: i,
                    fatal: !0,
                    buffer: e.len,
                    bufferInfo: e,
                });
        }
    }
}
function aK(e, t) {
    let i = aH(e.main);
    if (i && i.start <= t) return i;
    let r = aH(e.audio);
    return r && r.start <= t ? r : null;
}
function aH(e) {
    if (!e) return null;
    switch (e.state) {
        case i_:
        case iD:
        case iF:
        case i$:
            return null;
    }
    return e.frag;
}
function aV(e, t) {
    return t.getAppendedFrag(e, D) || t.getPartialFragment(e);
}
function aY() {
    if ("u" > typeof self) return self.VTTCue || self.TextTrackCue;
}
function aW(e, t, i, r, s) {
    let a = new e(t, i, "");
    try {
        (a.value = r), s && (a.type = s);
    } catch (n) {
        a = new e(t, i, ej(s ? O({ type: s }, r) : r));
    }
    return a;
}
let aj = (() => {
    let e = aY();
    try {
        e && new e(0, 1 / 0, "");
    } catch (e) {
        return Number.MAX_VALUE;
    }
    return 1 / 0;
})();
class aq {
    constructor(e) {
        (this.hls = void 0),
            (this.id3Track = null),
            (this.media = null),
            (this.dateRangeCuesAppended = {}),
            (this.removeCues = !0),
            (this.assetCue = void 0),
            (this.onEventCueEnter = () => {
                this.hls && this.hls.trigger(h.EVENT_CUE_ENTER, {});
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
            (e.on(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(h.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
            e.on(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.on(h.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(h.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
    }
    _unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(h.MEDIA_ATTACHING, this.onMediaAttaching, this),
            e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(h.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
            e.off(h.BUFFER_FLUSHING, this.onBufferFlushing, this),
            e.off(h.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(h.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
    }
    onMediaAttaching(e, t) {
        var i;
        (this.media = t.media), (null == (i = t.overrides) ? void 0 : i.cueRemoval) === !1 && (this.removeCues = !1);
    }
    onMediaAttached() {
        var e;
        let t = null == (e = this.hls) ? void 0 : e.latestLevelDetails;
        t && this.updateDateRangeCues(t);
    }
    onMediaDetaching(e, t) {
        (this.media = null),
            t.transferMedia ||
                (this.id3Track && (this.removeCues && sF(this.id3Track, this.onEventCueEnter), (this.id3Track = null)),
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
                let i = e[t];
                if ("metadata" === i.kind && "id3" === i.label) return sM(i, this.media), i;
            }
            return this.media.addTextTrack("metadata", "id3");
        }
    }
    onFragParsingMetadata(e, t) {
        if (!this.media || !this.hls) return;
        let { enableEmsgMetadataCues: i, enableID3MetadataCues: r } = this.hls.config;
        if (!i && !r) return;
        let { samples: s } = t;
        this.id3Track || (this.id3Track = this.createTrack(this.media));
        let a = aY();
        if (a)
            for (let e = 0; e < s.length; e++) {
                let t = s[e].type;
                if ((t === i6.emsg && !i) || !r) continue;
                let n = i4(s[e].data),
                    l = s[e].pts,
                    o = l + s[e].duration;
                o > aj && (o = aj), o - l <= 0 && (o = l + 0.25);
                for (let e = 0; e < n.length; e++) {
                    let i = n[e];
                    if (!i5(i)) {
                        this.updateId3CueEnds(l, t);
                        let e = aW(a, l, o, i, t);
                        e && this.id3Track.addCue(e);
                    }
                }
            }
    }
    updateId3CueEnds(e, t) {
        var i;
        let r = null == (i = this.id3Track) ? void 0 : i.cues;
        if (r)
            for (let i = r.length; i--; ) {
                let s = r[i];
                s.type === t && s.startTime < e && s.endTime === aj && (s.endTime = e);
            }
    }
    onBufferFlushing(e, { startOffset: t, endOffset: i, type: r }) {
        let { id3Track: s, hls: a } = this;
        if (!a) return;
        let {
            config: { enableEmsgMetadataCues: n, enableID3MetadataCues: l },
        } = a;
        s &&
            (n || l) &&
            s$(
                s,
                t,
                i,
                "audio" === r
                    ? (e) => e.type === i6.audioId3 && l
                    : "video" === r
                      ? (e) => e.type === i6.emsg && n
                      : (e) => (e.type === i6.audioId3 && l) || (e.type === i6.emsg && n),
            );
    }
    onLevelUpdated(e, { details: t }) {
        this.updateDateRangeCues(t, !0);
    }
    onLevelPtsUpdated(e, t) {
        Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
    }
    updateDateRangeCues(e, t) {
        var i, r;
        if (!this.hls || !this.media) return;
        let {
            assetPlayerId: a,
            timelineOffset: n,
            enableDateRangeMetadataCues: l,
            interstitialsController: o,
        } = this.hls.config;
        if (!l) return;
        let h = aY();
        if (a && n && !o) {
            let { fragmentStart: t, fragmentEnd: i } = e,
                r = this.assetCue;
            r
                ? ((r.startTime = t), (r.endTime = i))
                : h &&
                  (r = this.assetCue =
                      aW(h, t, i, { assetPlayerId: this.hls.config.assetPlayerId }, "hlsjs.interstitial.asset")) &&
                  ((r.id = a),
                  this.id3Track || (this.id3Track = this.createTrack(this.media)),
                  this.id3Track.addCue(r),
                  r.addEventListener("enter", this.onEventCueEnter));
        }
        if (!e.hasProgramDateTime) return;
        let { id3Track: d } = this,
            { dateRanges: u } = e,
            f = Object.keys(u),
            c = this.dateRangeCuesAppended;
        if (d && t)
            if (null != (i = d.cues) && i.length) {
                let e = Object.keys(c).filter((e) => !f.includes(e));
                for (let t = e.length; t--; ) {
                    let i = e[t],
                        s = null == (r = c[i]) ? void 0 : r.cues;
                    delete c[i],
                        s &&
                            Object.keys(s).forEach((e) => {
                                let t = s[e];
                                if (t) {
                                    t.removeEventListener("enter", this.onEventCueEnter);
                                    try {
                                        d.removeCue(t);
                                    } catch (e) {}
                                }
                            });
                }
            } else c = this.dateRangeCuesAppended = {};
        let g = e.fragments[e.fragments.length - 1];
        if (0 !== f.length && s(null == g ? void 0 : g.programDateTime)) {
            this.id3Track || (this.id3Track = this.createTrack(this.media));
            for (let e = 0; e < f.length; e++) {
                let t = f[e],
                    i = u[t],
                    r = i.startTime,
                    s = c[t],
                    a = (null == s ? void 0 : s.cues) || {},
                    n = (null == s ? void 0 : s.durationKnown) || !1,
                    l = aj,
                    { duration: d, endDate: g } = i;
                if (g && null !== d) (l = r + d), (n = !0);
                else if (i.endOnNext && !n) {
                    let e = f.reduce((e, t) => {
                        if (t !== i.id) {
                            let r = u[t];
                            if (r.class === i.class && r.startDate > i.startDate && (!e || i.startDate < e.startDate))
                                return r;
                        }
                        return e;
                    }, null);
                    e && ((l = e.startTime), (n = !0));
                }
                let m = Object.keys(i.attr);
                for (let e = 0; e < m.length; e++) {
                    let d = m[e];
                    if (
                        "ID" === d ||
                        "CLASS" === d ||
                        "CUE" === d ||
                        "START-DATE" === d ||
                        "DURATION" === d ||
                        "END-DATE" === d ||
                        "END-ON-NEXT" === d
                    )
                        continue;
                    let u = a[d];
                    if (u)
                        n && !(null != s && s.durationKnown)
                            ? (u.endTime = l)
                            : Math.abs(u.startTime - r) > 0.01 && ((u.startTime = r), (u.endTime = l));
                    else if (h) {
                        let e = i.attr[d];
                        ("SCTE35-OUT" === d || "SCTE35-IN" === d || "SCTE35-CMD" === d) && (e = W(e));
                        let s = aW(h, r, l, { key: d, data: e }, i6.dateRange);
                        s &&
                            ((s.id = t),
                            this.id3Track.addCue(s),
                            (a[d] = s),
                            o &&
                                ("X-ASSET-LIST" === d || "X-ASSET-URL" === d) &&
                                s.addEventListener("enter", this.onEventCueEnter));
                    }
                }
                c[t] = { cues: a, dateRange: i, durationKnown: n };
            }
        }
    }
}
class aX {
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
                let i = this.computeLatency();
                if (null === i) return;
                this._latency = i;
                let { lowLatencyMode: r, maxLiveSyncPlaybackRate: s } = this.config;
                if (!r || 1 === s || !t.live) return;
                let a = this.targetLatency;
                if (null === a) return;
                let n = i - a;
                if (n < Math.min(this.maxLatency, a + t.targetduration) && n > 0.05 && this.forwardBufferLength > 1) {
                    let t = Math.min(
                        Math.min(2, Math.max(1, s)),
                        Math.max(1, Math.round((2 / (1 + Math.exp(-0.75 * n - this.edgeStalled))) * 20) / 20),
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
        let { holdBack: t, partHoldBack: i, targetduration: r } = e,
            { liveSyncDuration: s, liveSyncDurationCount: a, lowLatencyMode: n } = this.config,
            l = this.hls.userConfig,
            o = (n && i) || t;
        return (
            (this._targetLatencyUpdated || l.liveSyncDuration || l.liveSyncDurationCount || 0 === o) &&
                (o = void 0 !== s ? s : a * r),
            o + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, r)
        );
    }
    set targetLatency(e) {
        (this.stallCount = 0), (this.config.liveSyncDuration = e), (this._targetLatencyUpdated = !0);
    }
    get liveSyncPosition() {
        let e = this.estimateLiveEdge(),
            t = this.targetLatency;
        if (null === e || null === t) return null;
        let i = this.levelDetails;
        if (null === i) return null;
        let r = i.edge,
            s = e - t - this.edgeStalled;
        return Math.min(
            Math.max(r - i.totalduration, s),
            r - ((this.config.lowLatencyMode && i.partTarget) || i.targetduration),
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
        let i = e.buffered.length;
        return (i ? e.buffered.end(i - 1) : t.edge) - this.currentTime;
    }
    destroy() {
        this.unregisterListeners(), this.onMediaDetaching(), (this.hls = null);
    }
    registerListeners() {
        let { hls: e } = this;
        e &&
            (e.on(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.on(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(h.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.on(h.ERROR, this.onError, this));
    }
    unregisterListeners() {
        let { hls: e } = this;
        e &&
            (e.off(h.MEDIA_ATTACHED, this.onMediaAttached, this),
            e.off(h.MEDIA_DETACHING, this.onMediaDetaching, this),
            e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(h.LEVEL_UPDATED, this.onLevelUpdated, this),
            e.off(h.ERROR, this.onError, this));
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
        var i;
        t.details === o.BUFFER_STALLED_ERROR &&
            (this.stallCount++,
            this.hls &&
                null != (i = this.levelDetails) &&
                i.live &&
                this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
    }
    changeMediaPlaybackRate(e, t) {
        var i, r;
        e.playbackRate !== t &&
            (null == (i = this.hls) ||
                i.logger.debug(
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
class aQ extends rW {
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
        e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(h.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.on(h.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(h.FRAG_BUFFERED, this.onFragBuffered, this),
            e.on(h.ERROR, this.onError, this);
    }
    _unregisterListeners() {
        let { hls: e } = this;
        e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(h.MANIFEST_LOADED, this.onManifestLoaded, this),
            e.off(h.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(h.FRAG_BUFFERED, this.onFragBuffered, this),
            e.off(h.ERROR, this.onError, this);
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
        let i = this.hls.config.preferManagedMediaSource,
            r = [],
            s = {},
            a = {},
            n = !1,
            l = !1,
            o = !1;
        t.levels.forEach((e) => {
            let t = e.attrs,
                { audioCodec: h, videoCodec: d } = e;
            h && (e.audioCodec = h = eC(h, i) || void 0),
                d &&
                    (d = e.videoCodec =
                        (function (e) {
                            let t = e.split(",");
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e].split(".");
                                i.length > 2 &&
                                    "avc1" === i[0] &&
                                    (t[e] =
                                        `avc1.${parseInt(i[1]).toString(16)}${("000" + parseInt(i[2]).toString(16)).slice(-4)}`);
                            }
                            return t.join(",");
                        })(d));
            let { width: u, height: f, unknownCodecs: c } = e,
                g = (null == c ? void 0 : c.length) || 0;
            if (
                (n || (n = !!(u && f)),
                l || (l = !!d),
                o || (o = !!h),
                g || (h && !this.isAudioSupported(h)) || (d && !this.isVideoSupported(d)))
            )
                return void this.log(`Some or all CODECS not supported "${t.CODECS}"`);
            let { CODECS: m, "FRAME-RATE": p, "HDCP-LEVEL": y, "PATHWAY-ID": v, RESOLUTION: E, "VIDEO-RANGE": T } = t,
                S = `${v || "."}-`,
                A = `${S}${e.bitrate}-${E}-${p}-${m}-${T}-${y}`;
            if (s[A])
                if (s[A].uri === e.url || e.attrs["PATHWAY-ID"])
                    s[A].addGroupId("audio", t.AUDIO), s[A].addGroupId("text", t.SUBTITLES);
                else {
                    let t = (a[A] += 1);
                    e.attrs["PATHWAY-ID"] = Array(t + 1).join(".");
                    let i = this.createLevel(e);
                    (s[A] = i), r.push(i);
                }
            else {
                let t = this.createLevel(e);
                (s[A] = t), (a[A] = 1), r.push(t);
            }
        }),
            this.filterAndSortMediaOptions(r, t, n, l, o);
    }
    createLevel(e) {
        let t = new eY(e),
            i = e.supplemental;
        if (null != i && i.videoCodec && !this.isVideoSupported(i.videoCodec)) {
            let e = Error(`SUPPLEMENTAL-CODECS not supported "${i.videoCodec}"`);
            this.log(e.message), (t.supportedResult = eU(e, []));
        }
        return t;
    }
    isAudioSupported(e) {
        return eR(e, "audio", this.hls.config.preferManagedMediaSource);
    }
    isVideoSupported(e) {
        return eR(e, "video", this.hls.config.preferManagedMediaSource);
    }
    filterAndSortMediaOptions(e, t, i, r, s) {
        var a, n;
        let d = [],
            u = [],
            f = e,
            c = (null == (a = t.stats) ? void 0 : a.parsing) || {};
        if (
            ((i || r) &&
                s &&
                (f = f.filter(({ videoCodec: e, videoRange: t, width: i, height: r }) => {
                    var s;
                    return (!!e || !!(i && r)) && !!(s = t) && eK.indexOf(s) > -1;
                })),
            0 === f.length)
        ) {
            Promise.resolve().then(() => {
                if (this.hls) {
                    let e = "no level with compatible codecs found in manifest",
                        i = e;
                    t.levels.length &&
                        ((i = `one or more CODECS in variant not supported: ${ej(t.levels.map((e) => e.attrs.CODECS).filter((e, t, i) => i.indexOf(e) === t))}`),
                        this.warn(i),
                        (e += ` (${i})`));
                    let r = Error(e);
                    this.hls.trigger(h.ERROR, {
                        type: l.MEDIA_ERROR,
                        details: o.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: t.url,
                        error: r,
                        reason: i,
                    });
                }
            }),
                (c.end = performance.now());
            return;
        }
        t.audioTracks && az((d = t.audioTracks.filter((e) => !e.audioCodec || this.isAudioSupported(e.audioCodec)))),
            t.subtitles && az((u = t.subtitles));
        let g = f.slice(0);
        f.sort((e, t) => {
            if (e.attrs["HDCP-LEVEL"] !== t.attrs["HDCP-LEVEL"])
                return (e.attrs["HDCP-LEVEL"] || "") > (t.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
            if (i && e.height !== t.height) return e.height - t.height;
            if (e.frameRate !== t.frameRate) return e.frameRate - t.frameRate;
            if (e.videoRange !== t.videoRange) return eK.indexOf(e.videoRange) - eK.indexOf(t.videoRange);
            if (e.videoCodec !== t.videoCodec) {
                let i = ek(e.videoCodec),
                    r = ek(t.videoCodec);
                if (i !== r) return r - i;
            }
            if (e.uri === t.uri && e.codecSet !== t.codecSet) {
                let i = eD(e.codecSet),
                    r = eD(t.codecSet);
                if (i !== r) return r - i;
            }
            return e.averageBitrate !== t.averageBitrate ? e.averageBitrate - t.averageBitrate : 0;
        });
        let m = g[0];
        if (this.steering && (f = this.steering.filterParsedLevels(f)).length !== g.length) {
            for (let e = 0; e < g.length; e++)
                if (g[e].pathwayId === f[0].pathwayId) {
                    m = g[e];
                    break;
                }
        }
        this._levels = f;
        for (let e = 0; e < f.length; e++)
            if (f[e] === m) {
                this._firstLevel = e;
                let t = m.bitrate,
                    i = this.hls.bandwidthEstimate;
                if (
                    (this.log(`manifest loaded, ${f.length} level(s) found, first bitrate: ${t}`),
                    (null == (n = this.hls.userConfig) ? void 0 : n.abrEwmaDefaultEstimate) === void 0)
                ) {
                    let e = Math.min(t, this.hls.config.abrEwmaDefaultEstimateMax);
                    e > i && i === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = e);
                }
                break;
            }
        let p = s && !r,
            y = this.hls.config,
            v = !!(y.audioStreamController && y.audioTrackController),
            E = {
                levels: f,
                audioTracks: d,
                subtitleTracks: u,
                sessionData: t.sessionData,
                sessionKeys: t.sessionKeys,
                firstLevel: this._firstLevel,
                stats: t.stats,
                audio: s,
                video: r,
                altAudio: v && !p && d.some((e) => !!e.url),
            };
        (c.end = performance.now()), this.hls.trigger(h.MANIFEST_PARSED, E);
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
            let i = Error("invalid level idx"),
                r = e < 0;
            if (
                (this.hls.trigger(h.ERROR, {
                    type: l.OTHER_ERROR,
                    details: o.LEVEL_SWITCH_ERROR,
                    level: e,
                    fatal: r,
                    error: i,
                    reason: i.message,
                }),
                r)
            )
                return;
            e = Math.min(e, t.length - 1);
        }
        let i = this.currentLevelIndex,
            r = this.currentLevel,
            s = r ? r.attrs["PATHWAY-ID"] : void 0,
            a = t[e],
            n = a.attrs["PATHWAY-ID"];
        if (((this.currentLevelIndex = e), (this.currentLevel = a), i === e && r && s === n)) return;
        this.log(
            `Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${n ? " with Pathway " + n : ""} from level ${i}${s ? " with Pathway " + s : ""}`,
        );
        let d = {
            level: e,
            attrs: a.attrs,
            details: a.details,
            bitrate: a.bitrate,
            averageBitrate: a.averageBitrate,
            maxBitrate: a.maxBitrate,
            realBitrate: a.realBitrate,
            width: a.width,
            height: a.height,
            codecSet: a.codecSet,
            audioCodec: a.audioCodec,
            videoCodec: a.videoCodec,
            audioGroups: a.audioGroups,
            subtitleGroups: a.subtitleGroups,
            loaded: a.loaded,
            loadError: a.loadError,
            fragmentError: a.fragmentError,
            name: a.name,
            id: a.id,
            uri: a.uri,
            url: a.url,
            urlId: 0,
            audioGroupIds: a.audioGroupIds,
            textGroupIds: a.textGroupIds,
        };
        this.hls.trigger(h.LEVEL_SWITCHING, d);
        let u = a.details;
        if (!u || u.live) {
            let e = this.switchParams(a.uri, null == r ? void 0 : r.details, u);
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
                i = e.filter((e) => -1 !== t.indexOf(e));
            if (e.length < 1)
                return void this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
            this.steering.pathwayPriority = i;
        }
    }
    onError(e, t) {
        !t.fatal && t.context && t.context.type === b && t.context.level === this.level && this.checkRetry(t);
    }
    onFragBuffered(e, { frag: t }) {
        if (void 0 !== t && t.type === D) {
            let e = t.elementaryStreams;
            if (!Object.keys(e).some((t) => !!e[t])) return;
            let i = this._levels[t.level];
            null != i &&
                i.loadError &&
                (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), (i.loadError = 0));
        }
    }
    onLevelLoaded(e, t) {
        var i, r;
        let { level: s, details: a } = t,
            n = t.levelInfo;
        if (!n) {
            this.warn(`Invalid level index ${s}`),
                null != (r = t.deliveryDirectives) && r.skip && (a.deltaUpdateFailed = !0);
            return;
        }
        if (n === this.currentLevel || t.withoutMultiVariant) {
            0 === n.fragmentError && (n.loadError = 0);
            let e = n.details;
            e === t.details && e.advanced && (e = void 0), this.playlistLoaded(s, t, e);
        } else null != (i = t.deliveryDirectives) && i.skip && (a.deltaUpdateFailed = !0);
    }
    loadPlaylist(e) {
        super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
    }
    loadingPlaylist(e, t) {
        super.loadingPlaylist(e, t);
        let i = this.getUrlWithDirectives(e.uri, t),
            r = this.currentLevelIndex,
            s = e.attrs["PATHWAY-ID"],
            a = e.details,
            n = null == a ? void 0 : a.age;
        this.log(
            `Loading level index ${r}${(null == t ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${s ? " Pathway " + s : ""}${n && a.live ? " age " + n.toFixed(1) + (a.type ? " " + a.type : "") : ""} ${i}`,
        ),
            this.hls.trigger(h.LEVEL_LOADING, {
                url: i,
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
        let i = this._levels.filter(
            (t, i) =>
                i !== e ||
                (this.steering && this.steering.removeLevel(t),
                t === this.currentLevel &&
                    ((this.currentLevel = null),
                    (this.currentLevelIndex = -1),
                    t.details && t.details.fragments.forEach((e) => (e.level = -1))),
                !1),
        );
        iv(i),
            (this._levels = i),
            this.currentLevelIndex > -1 &&
                null != (t = this.currentLevel) &&
                t.details &&
                (this.currentLevelIndex = this.currentLevel.details.fragments[0].level),
            this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
        let r = i.length - 1;
        (this._firstLevel = Math.min(this._firstLevel, r)),
            this._startLevel && (this._startLevel = Math.min(this._startLevel, r)),
            this.hls.trigger(h.LEVELS_UPDATED, { levels: i });
    }
    onLevelsUpdated(e, { levels: t }) {
        this._levels = t;
    }
    checkMaxAutoUpdated() {
        let { autoLevelCapping: e, maxAutoLevel: t, maxHdcpLevel: i } = this.hls;
        this._maxAutoLevel !== t &&
            ((this._maxAutoLevel = t),
            this.hls.trigger(h.MAX_AUTO_LEVEL_UPDATED, {
                autoLevelCapping: e,
                levels: this.levels,
                maxAutoLevel: t,
                minAutoLevel: this.hls.minAutoLevel,
                maxHdcpLevel: i,
            }));
    }
}
function az(e) {
    let t = {};
    e.forEach((e) => {
        let i = e.groupId || "";
        (e.id = t[i] = t[i] || 0), t[i]++;
    });
}
function aZ() {
    return self.SourceBuffer || self.WebKitSourceBuffer;
}
function aJ() {
    if (!K()) return !1;
    let e = aZ();
    return (
        !e || (e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove)
    );
}
class a0 extends iN {
    constructor(e, t, i) {
        super(e, t, i, "stream-controller", D),
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
                if (null === t || !s(t) || (this.log(`Media seeked to ${t.toFixed(3)}`), !this.getBufferedFrag(t)))
                    return;
                let i = this.getFwdBufferInfoAtPos(e, t, D, 0);
                null === i || 0 === i.len
                    ? this.warn(`Main forward buffer length at ${t} on "seeked" event ${i ? i.len : "empty"})`)
                    : this.tick();
            }),
            this.registerListeners();
    }
    registerListeners() {
        super.registerListeners();
        let { hls: e } = this;
        e.on(h.MANIFEST_PARSED, this.onManifestParsed, this),
            e.on(h.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(h.LEVEL_LOADED, this.onLevelLoaded, this),
            e.on(h.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
            e.on(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.on(h.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
            e.on(h.BUFFER_CREATED, this.onBufferCreated, this),
            e.on(h.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.on(h.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    unregisterListeners() {
        super.unregisterListeners();
        let { hls: e } = this;
        e.off(h.MANIFEST_PARSED, this.onManifestParsed, this),
            e.off(h.LEVEL_LOADED, this.onLevelLoaded, this),
            e.off(h.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
            e.off(h.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
            e.off(h.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
            e.off(h.BUFFER_CREATED, this.onBufferCreated, this),
            e.off(h.BUFFER_FLUSHED, this.onBufferFlushed, this),
            e.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this),
            e.off(h.FRAG_BUFFERED, this.onFragBuffered, this);
    }
    onHandlerDestroying() {
        (this.onMediaPlaying = this.onMediaSeeked = null), this.unregisterListeners(), super.onHandlerDestroying();
    }
    startLoad(e, t) {
        if (this.levels) {
            let { lastCurrentTime: i, hls: r } = this;
            if ((this.stopLoad(), this.setInterval(100), (this.level = -1), !this.startFragRequested)) {
                let e = r.startLevel;
                -1 === e &&
                    (r.config.testBandwidth && this.levels.length > 1
                        ? ((e = 0), (this.bitrateTest = !0))
                        : (e = r.firstAutoLevel)),
                    (r.nextLoadLevel = e),
                    (this.level = r.loadLevel),
                    (this._hasEnoughToStart = !!t);
            }
            i > 0 &&
                -1 === e &&
                !t &&
                (this.log(`Override startPosition with lastCurrentTime @${i.toFixed(3)}`), (e = i)),
                (this.state = i_),
                (this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset),
                (this.startPosition = t ? -1 : e),
                this.tick();
        } else (this._forceStartLoad = !0), (this.state = iD);
    }
    stopLoad() {
        (this._forceStartLoad = !1), super.stopLoad();
    }
    doTick() {
        switch (this.state) {
            case iB: {
                let { levels: e, level: t } = this,
                    i = null == e ? void 0 : e[t],
                    r = null == i ? void 0 : i.details;
                if (!r || (r.live && (this.levelLastLoaded !== i || this.waitForLive(i))))
                    this.hls.nextLoadLevel !== this.level && (this.state = i_);
                else {
                    if (this.waitForCdnTuneIn(r)) break;
                    this.state = i_;
                }
                break;
            }
            case iw:
                this.checkRetryDate();
        }
        this.state === i_ && this.doTickIdle(), this.onTickEnd();
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
        let { hls: e, levelLastLoaded: t, levels: i, media: r } = this;
        if (
            null === t ||
            (!r && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch)) ||
            (this.altAudio && this.audioOnly)
        )
            return;
        let s = this.buffering ? e.nextLoadLevel : e.loadLevel;
        if (!(null != i && i[s])) return;
        let a = i[s],
            n = this.getMainFwdBufferInfo();
        if (null === n) return;
        let l = this.getLevelDetails();
        if (l && this._streamEnded(n, l)) {
            let e = {};
            2 === this.altAudio && (e.type = "video"), this.hls.trigger(h.BUFFER_EOS, e), (this.state = iF);
            return;
        }
        if (!this.buffering) return;
        e.loadLevel !== s && -1 === e.manualLevel && this.log(`Adapting to level ${s} from level ${this.level}`),
            (this.level = e.nextLoadLevel = s);
        let o = a.details;
        if (!o || this.state === iB || this.waitForLive(a)) {
            (this.level = s), (this.state = iB), (this.startFragRequested = !1);
            return;
        }
        let d = n.len,
            u = this.getMaxBufferLength(a.maxBitrate);
        if (d >= u) return;
        this.backtrackFragment && this.backtrackFragment.start > n.end && (this.backtrackFragment = null);
        let f = this.backtrackFragment ? this.backtrackFragment.start : n.end,
            c = this.getNextFragment(f, o);
        if (this.couldBacktrack && !this.fragPrevious && c && ee(c) && "OK" !== this.fragmentTracker.getState(c)) {
            var g;
            let e = (null != (g = this.backtrackFragment) ? g : c).sn - o.startSN,
                t = o.fragments[e - 1];
            t && c.cc === t.cc && ((c = t), this.fragmentTracker.removeFragment(t));
        } else this.backtrackFragment && n.len && (this.backtrackFragment = null);
        if (c && this.isLoopLoading(c, f)) {
            if (!c.gap) {
                let e = this.audioOnly && !this.altAudio ? Q : z,
                    t = (e === z ? this.videoBuffer : this.mediaBuffer) || this.media;
                t && this.afterBufferFlushed(t, e, D);
            }
            c = this.getNextFragmentLoopLoading(c, o, n, D, u);
        }
        c &&
            (!c.initSegment || c.initSegment.data || this.bitrateTest || (c = c.initSegment),
            this.loadFragment(c, a, f));
    }
    loadFragment(e, t, i) {
        let r = this.fragmentTracker.getState(e);
        r === ta || r === tl
            ? ee(e)
                ? this.bitrateTest
                    ? (this.log(
                          `Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`,
                      ),
                      this._loadBitrateTestFrag(e, t))
                    : super.loadFragment(e, t, i)
                : this._loadInitSegment(e, t)
            : this.clearTrackerIfNeeded(e);
    }
    getBufferedFrag(e) {
        return this.fragmentTracker.getBufferedFrag(e, D);
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
            let i,
                r = this.getAppendedFrag(t.currentTime);
            r && r.start > 1 && this.flushMainBuffer(0, r.start - 1);
            let s = this.getLevelDetails();
            if (null != s && s.live) {
                let e = this.getMainFwdBufferInfo();
                if (!e || e.len < 2 * s.targetduration) return;
            }
            if (!t.paused && e) {
                let t = e[this.hls.nextLoadLevel],
                    r = this.fragLastKbps;
                i = r && this.fragCurrent ? (this.fragCurrent.duration * t.maxBitrate) / (1e3 * r) + 1 : 0;
            } else i = 0;
            let a = this.getBufferedFrag(t.currentTime + i);
            if (a) {
                let e = this.followingBufferedFrag(a);
                if (e) {
                    this.abortCurrentFrag();
                    let t = e.maxStartPTS ? e.maxStartPTS : e.start,
                        i = e.duration,
                        r = Math.max(
                            a.end,
                            t +
                                Math.min(
                                    Math.max(
                                        i - this.config.maxFragLookUpTolerance,
                                        i * (this.couldBacktrack ? 0.5 : 0.125),
                                    ),
                                    i * (this.couldBacktrack ? 0.75 : 0.25),
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
            case iP:
            case iC:
            case iw:
            case iM:
            case iO:
                this.state = i_;
        }
        this.nextLoadPosition = this.getLoadPosition();
    }
    flushMainBuffer(e, t) {
        super.flushMainBuffer(e, t, 2 === this.altAudio ? "video" : null);
    }
    onMediaAttached(e, t) {
        super.onMediaAttached(e, t);
        let i = t.media;
        ib(i, "playing", this.onMediaPlaying), ib(i, "seeked", this.onMediaSeeked);
    }
    onMediaDetaching(e, t) {
        let { media: i } = this;
        i && (iI(i, "playing", this.onMediaPlaying), iI(i, "seeked", this.onMediaSeeked)),
            (this.videoBuffer = null),
            (this.fragPlaying = null),
            super.onMediaDetaching(e, t),
            t.transferMedia || (this._hasEnoughToStart = !1);
    }
    onManifestLoading() {
        super.onManifestLoading(),
            this.log("Trigger BUFFER_RESET"),
            this.hls.trigger(h.BUFFER_RESET, void 0),
            (this.couldBacktrack = !1),
            (this.fragLastKbps = 0),
            (this.fragPlaying = this.backtrackFragment = null),
            (this.altAudio = 0),
            (this.audioOnly = !1);
    }
    onManifestParsed(e, t) {
        var i;
        let r,
            s = !1,
            a = !1;
        for (let e = 0; e < t.levels.length; e++) {
            let i = t.levels[e].audioCodec;
            i && ((s = s || -1 !== i.indexOf("mp4a.40.2")), (a = a || -1 !== i.indexOf("mp4a.40.5")));
        }
        (this.audioCodecSwitch =
            s && a && "function" != typeof (null == (r = aZ()) || null == (i = r.prototype) ? void 0 : i.changeType)),
            this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
            (this.levels = t.levels),
            (this.startFragRequested = !1);
    }
    onLevelLoading(e, t) {
        let { levels: i } = this;
        if (!i || this.state !== i_) return;
        let r = t.levelInfo;
        (!r.details ||
            (r.details.live && (this.levelLastLoaded !== r || r.details.expired)) ||
            this.waitForCdnTuneIn(r.details)) &&
            (this.state = iB);
    }
    onLevelLoaded(e, t) {
        var i, r;
        let { levels: s, startFragRequested: a } = this,
            n = t.level,
            l = t.details,
            o = l.totalduration;
        if (!s) return void this.warn(`Levels were reset while loading level ${n}`);
        this.log(
            `Level ${n} loaded [${l.startSN},${l.endSN}]${l.lastPartSn ? `[part-${l.lastPartSn}-${l.lastPartIndex}]` : ""}, cc [${l.startCC}, ${l.endCC}] duration:${o}`,
        );
        let d = t.levelInfo,
            u = this.fragCurrent;
        u && (this.state === iC || this.state === iw) && u.level !== t.level && u.loader && this.abortCurrentFrag();
        let f = 0;
        if (l.live || (null != (i = d.details) && i.live)) {
            if ((this.checkLiveUpdate(l), l.deltaUpdateFailed)) return;
            f = this.alignPlaylists(l, d.details, null == (r = this.levelLastLoaded) ? void 0 : r.details);
        }
        if (
            ((d.details = l),
            (this.levelLastLoaded = d),
            a || this.setStartPosition(l, f),
            this.hls.trigger(h.LEVEL_UPDATED, { details: l, level: n }),
            this.state === iB)
        ) {
            if (this.waitForCdnTuneIn(l)) return;
            this.state = i_;
        }
        a && l.live && this.synchronizeToLiveEdge(l), this.tick();
    }
    synchronizeToLiveEdge(e) {
        let { config: t, media: i } = this;
        if (!i) return;
        let r = this.hls.liveSyncPosition,
            s = this.getLoadPosition(),
            a = e.fragmentStart,
            n = e.edge,
            l = s >= a - t.maxFragLookUpTolerance && s <= n;
        if (null !== r && i.duration > r && (s < r || !l)) {
            let a =
                void 0 !== t.liveMaxLatencyDuration
                    ? t.liveMaxLatencyDuration
                    : t.liveMaxLatencyDurationCount * e.targetduration;
            if (
                ((!l && i.readyState < 4) || s < n - a) &&
                (this._hasEnoughToStart || (this.nextLoadPosition = r), i.readyState)
            )
                if (
                    (this.warn(
                        `Playback: ${s.toFixed(3)} is located too far from the end of live sliding playlist: ${n}, reset currentTime to : ${r.toFixed(3)}`,
                    ),
                    "buffered" === this.config.liveSyncMode)
                ) {
                    var o;
                    let e = tR.bufferInfo(i, r, 0);
                    if (!(null != (o = e.buffered) && o.length) || e.start <= s) {
                        i.currentTime = r;
                        return;
                    }
                    let { nextStart: t } = tR.bufferedInfo(e.buffered, s, 0);
                    t && (i.currentTime = t);
                } else i.currentTime = r;
        }
    }
    _handleFragmentLoadProgress(e) {
        var t;
        let i = e.frag,
            { part: r, payload: s } = e,
            { levels: a } = this;
        if (!a)
            return void this.warn(
                `Levels were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`,
            );
        let n = a[i.level];
        if (!n) return void this.warn(`Level ${i.level} not found on progress`);
        let l = n.details;
        if (!l) {
            this.warn(`Dropping fragment ${i.sn} of level ${i.level} after level details were reset`),
                this.fragmentTracker.removeFragment(i);
            return;
        }
        let o = n.videoCodec,
            h = l.PTSKnown || !l.live,
            d = null == (t = i.initSegment) ? void 0 : t.data,
            u = this._getAudioCodec(n),
            f = (this.transmuxer =
                this.transmuxer ||
                new rY(this.hls, D, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this))),
            c = r ? r.index : -1,
            g = new tS(i.level, i.sn, i.stats.chunkCount, s.byteLength, c, -1 !== c),
            m = this.initPTS[i.cc];
        f.push(s, d, u, o, i, r, l.totalduration, h, g, m);
    }
    onAudioTrackSwitching(e, t) {
        let i = this.hls,
            r = 2 === this.altAudio;
        if (e1(t.url, i)) this.altAudio = 1;
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
                    i.once(h.BUFFER_FLUSHED, () => {
                        this.hls && this.hls.trigger(h.AUDIO_TRACK_SWITCHED, t);
                    }),
                    i.trigger(h.BUFFER_FLUSHING, { startOffset: 0, endOffset: 1 / 0, type: null });
                return;
            }
            i.trigger(h.AUDIO_TRACK_SWITCHED, t);
        }
    }
    onAudioTrackSwitched(e, t) {
        let i = e1(t.url, this.hls);
        if (i) {
            let e = this.videoBuffer;
            e &&
                this.mediaBuffer !== e &&
                (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),
                (this.mediaBuffer = e));
        }
        (this.altAudio = 2 * !!i), this.tick();
    }
    onBufferCreated(e, t) {
        let i,
            r,
            s = t.tracks,
            a = !1;
        for (let e in s) {
            let t = s[e];
            if ("main" === t.id) {
                if (((r = e), (i = t), "video" === e)) {
                    let t = s[e];
                    t && (this.videoBuffer = t.buffer);
                }
            } else a = !0;
        }
        a && i
            ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`),
              (this.mediaBuffer = i.buffer))
            : (this.mediaBuffer = this.media);
    }
    onFragBuffered(e, t) {
        let { frag: i, part: r } = t,
            s = i.type === D;
        if (s) {
            if (this.fragContextChanged(i)) {
                this.warn(
                    `Fragment ${i.sn}${r ? " p: " + r.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}`,
                ),
                    this.state === iO && (this.state = i_);
                return;
            }
            let e = r ? r.stats : i.stats;
            (this.fragLastKbps = Math.round((8 * e.total) / (e.buffering.end - e.loading.first))),
                ee(i) && (this.fragPrevious = i),
                this.fragBufferedComplete(i, r);
        }
        let a = this.media;
        a &&
            (!this._hasEnoughToStart &&
                tR.getBuffered(a).length &&
                ((this._hasEnoughToStart = !0), this.seekToStartPos()),
            s && this.tick());
    }
    get hasEnoughToStart() {
        return this._hasEnoughToStart;
    }
    onError(e, t) {
        var i;
        if (t.fatal) {
            this.state = i$;
            return;
        }
        switch (t.details) {
            case o.FRAG_GAP:
            case o.FRAG_PARSING_ERROR:
            case o.FRAG_DECRYPT_ERROR:
            case o.FRAG_LOAD_ERROR:
            case o.FRAG_LOAD_TIMEOUT:
            case o.KEY_LOAD_ERROR:
            case o.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(D, t);
                break;
            case o.LEVEL_LOAD_ERROR:
            case o.LEVEL_LOAD_TIMEOUT:
            case o.LEVEL_PARSING_ERROR:
                t.levelRetry ||
                    this.state !== iB ||
                    (null == (i = t.context) ? void 0 : i.type) !== b ||
                    (this.state = i_);
                break;
            case o.BUFFER_ADD_CODEC_ERROR:
            case o.BUFFER_APPEND_ERROR:
                if ("main" !== t.parent) return;
                this.reduceLengthAndFlushBuffer(t) && this.resetLoadingState();
                break;
            case o.BUFFER_FULL_ERROR:
                if ("main" !== t.parent) return;
                this.reduceLengthAndFlushBuffer(t) &&
                    (!this.config.interstitialsController && this.config.assetPlayerId
                        ? (this._hasEnoughToStart = !0)
                        : this.flushMainBuffer(0, 1 / 0));
                break;
            case o.INTERNAL_EXCEPTION:
                this.recoverWorkerError(t);
        }
    }
    onFragLoadEmergencyAborted() {
        (this.state = i_),
            this._hasEnoughToStart || ((this.startFragRequested = !1), (this.nextLoadPosition = this.lastCurrentTime)),
            this.tickImmediate();
    }
    onBufferFlushed(e, { type: t }) {
        if (t !== Q || !this.altAudio) {
            let e = (t === z ? this.videoBuffer : this.mediaBuffer) || this.media;
            e && (this.afterBufferFlushed(e, t, D), this.tick());
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
            i = this.startPosition;
        if (i >= 0 && t < i) {
            if (e.seeking) return void this.log(`could not seek to ${i}, already seeking at ${t}`);
            let r = this.timelineOffset;
            r && i && (i += r);
            let s = this.getLevelDetails(),
                a = tR.getBuffered(e),
                n = a.length ? a.start(0) : 0,
                l = n - i,
                o = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
            (this.config.startOnSegmentBoundary ||
                (l > 0 && (l < o || (this.loadingParts && l < 2 * ((null == s ? void 0 : s.partTarget) || 0))))) &&
                (this.log(`adjusting start position by ${l} to match buffer start`),
                (i += l),
                (this.startPosition = i)),
                t < i &&
                    (this.log(`seek to target start position ${i} from current time ${t} buffer start ${n}`),
                    (e.currentTime = i));
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
                    let { hls: i } = this,
                        r = null == e ? void 0 : e.frag;
                    if (!r || this.fragContextChanged(r)) return;
                    (t.fragmentError = 0), (this.state = i_), (this.startFragRequested = !1), (this.bitrateTest = !1);
                    let s = r.stats;
                    (s.parsing.start = s.parsing.end = s.buffering.start = s.buffering.end = self.performance.now()),
                        i.trigger(h.FRAG_LOADED, e),
                        (r.bitrateTest = !1);
                })
                .catch((t) => {
                    this.state !== iD && this.state !== i$ && (this.warn(t), this.resetFragmentLoading(e));
                });
    }
    _handleTransmuxComplete(e) {
        let t = this.playlistType,
            { hls: i } = this,
            { remuxResult: r, chunkMeta: a } = e,
            n = this.getCurrentContext(a);
        if (!n) return void this.resetWhenMissingContext(a);
        let { frag: l, part: o, level: d } = n,
            { video: u, text: f, id3: c, initSegment: g } = r,
            { details: m } = d,
            p = this.altAudio ? void 0 : r.audio;
        if (this.fragContextChanged(l)) return void this.fragmentTracker.removeFragment(l);
        if (((this.state = iM), g)) {
            let e = g.tracks;
            if (e) {
                let r = l.initSegment || l;
                if (this.unhandledEncryptionError(g, l)) return;
                this._bufferInitSegment(d, e, r, a),
                    i.trigger(h.FRAG_PARSING_INIT_SEGMENT, { frag: r, id: t, tracks: e });
            }
            let r = g.initPTS,
                n = g.timescale,
                o = this.initPTS[l.cc];
            if (s(r) && (!o || o.baseTime !== r || o.timescale !== n)) {
                let e = g.trackId;
                (this.initPTS[l.cc] = { baseTime: r, timescale: n, trackId: e }),
                    i.trigger(h.INIT_PTS_FOUND, { frag: l, id: t, initPTS: r, timescale: n, trackId: e });
            }
        }
        if (u && m) {
            p && "audiovideo" === u.type && this.logMuxedErr(l);
            let e = m.fragments[l.sn - 1 - m.startSN],
                t = l.sn === m.startSN,
                i = !e || l.cc > e.cc;
            if (!1 !== r.independent) {
                let { startPTS: e, endPTS: r, startDTS: s, endDTS: n } = u;
                if (o) o.elementaryStreams[u.type] = { startPTS: e, endPTS: r, startDTS: s, endDTS: n };
                else if (
                    (u.firstKeyFrame && u.independent && 1 === a.id && !i && (this.couldBacktrack = !0),
                    u.dropped && u.independent)
                ) {
                    let s = this.getMainFwdBufferInfo(),
                        a = (s ? s.end : this.getLoadPosition()) + this.config.maxBufferHole,
                        o = u.firstKeyFramePTS ? u.firstKeyFramePTS : e;
                    if (!t && a < o - this.config.maxBufferHole && !i) return void this.backtrack(l);
                    i && (l.gap = !0), l.setElementaryStreamInfo(u.type, l.start, r, l.start, n, !0);
                } else t && e - (m.appliedTimelineOffset || 0) > 2 && (l.gap = !0);
                l.setElementaryStreamInfo(u.type, e, r, s, n),
                    this.backtrackFragment && (this.backtrackFragment = l),
                    this.bufferFragmentData(u, l, o, a, t || i);
            } else {
                if (!t && !i) return void this.backtrack(l);
                l.gap = !0;
            }
        }
        if (p) {
            let { startPTS: e, endPTS: t, startDTS: i, endDTS: r } = p;
            o && (o.elementaryStreams[Q] = { startPTS: e, endPTS: t, startDTS: i, endDTS: r }),
                l.setElementaryStreamInfo(Q, e, t, i, r),
                this.bufferFragmentData(p, l, o, a);
        }
        if (m && null != c && c.samples.length) {
            let e = { id: t, frag: l, details: m, samples: c.samples };
            i.trigger(h.FRAG_PARSING_METADATA, e);
        }
        if (m && f) {
            let e = { id: t, frag: l, details: m, samples: f.samples };
            i.trigger(h.FRAG_PARSING_USERDATA, e);
        }
    }
    logMuxedErr(e) {
        this.warn(`${ee(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
    }
    _bufferInitSegment(e, t, i, r) {
        if (this.state !== iM) return;
        (this.audioOnly = !!t.audio && !t.video),
            this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(i));
        let { audio: s, video: a, audiovideo: n } = t;
        if (s) {
            let i = e.audioCodec,
                r = ew(s.codec, i);
            "mp4a" === r && (r = "mp4a.40.5");
            let a = navigator.userAgent.toLowerCase();
            if (this.audioCodecSwitch) {
                r && (r = -1 !== r.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
                let e = s.metadata;
                e &&
                    "channelCount" in e &&
                    1 !== (e.channelCount || 1) &&
                    -1 === a.indexOf("firefox") &&
                    (r = "mp4a.40.5");
            }
            r &&
                -1 !== r.indexOf("mp4a.40.5") &&
                -1 !== a.indexOf("android") &&
                "audio/mpeg" !== s.container &&
                ((r = "mp4a.40.2"), this.log(`Android: force audio codec to ${r}`)),
                i && i !== r && this.log(`Swapping manifest audio codec "${i}" for "${r}"`),
                (s.levelCodec = r),
                (s.id = D),
                this.log(
                    `Init audio buffer, container:${s.container}, codecs[selected/level/parsed]=[${r || ""}/${i || ""}/${s.codec}]`,
                ),
                delete t.audiovideo;
        }
        if (a) {
            (a.levelCodec = e.videoCodec), (a.id = D);
            let i = a.codec;
            if ((null == i ? void 0 : i.length) === 4)
                switch (i) {
                    case "hvc1":
                    case "hev1":
                        a.codec = "hvc1.1.6.L120.90";
                        break;
                    case "av01":
                        a.codec = "av01.0.04M.08";
                        break;
                    case "avc1":
                        a.codec = "avc1.42e01e";
                }
            this.log(
                `Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${i}]${a.codec !== i ? " parsed-corrected=" + a.codec : ""}${a.supplemental ? " supplemental=" + a.supplemental : ""}`,
            ),
                delete t.audiovideo;
        }
        n &&
            (this.log(
                `Init audiovideo buffer, container:${n.container}, codecs[level/parsed]=[${e.codecs}/${n.codec}]`,
            ),
            delete t.video,
            delete t.audio);
        let l = Object.keys(t);
        if (l.length) {
            if ((this.hls.trigger(h.BUFFER_CODECS, t), !this.hls)) return;
            l.forEach((e) => {
                let s = t[e].initSegment;
                null != s &&
                    s.byteLength &&
                    this.hls.trigger(h.BUFFER_APPENDING, {
                        type: e,
                        data: s,
                        frag: i,
                        part: null,
                        chunkMeta: r,
                        parent: i.type,
                    });
            });
        }
        this.tickImmediate();
    }
    getMainFwdBufferInfo() {
        let e = this.mediaBuffer && 2 === this.altAudio ? this.mediaBuffer : this.media;
        return this.getFwdBufferInfo(e, D);
    }
    get maxBufferLength() {
        let { levels: e, level: t } = this,
            i = null == e ? void 0 : e[t];
        return i ? this.getMaxBufferLength(i.maxBitrate) : this.config.maxBufferLength;
    }
    backtrack(e) {
        (this.couldBacktrack = !0),
            (this.backtrackFragment = e),
            this.resetTransmuxer(),
            this.flushBufferGap(e),
            this.fragmentTracker.removeFragment(e),
            (this.fragPrevious = null),
            (this.nextLoadPosition = e.start),
            (this.state = i_);
    }
    checkFragmentChanged() {
        let e = this.media,
            t = null;
        if (e && e.readyState > 1 && !1 === e.seeking) {
            let i = e.currentTime;
            if (
                (tR.isBuffered(e, i)
                    ? (t = this.getAppendedFrag(i))
                    : tR.isBuffered(e, i + 0.1) && (t = this.getAppendedFrag(i + 0.1)),
                t)
            ) {
                this.backtrackFragment = null;
                let e = this.fragPlaying,
                    i = t.level;
                (!e || t.sn !== e.sn || e.level !== i) &&
                    ((this.fragPlaying = t),
                    this.hls.trigger(h.FRAG_CHANGED, { frag: t }),
                    (e && e.level === i) || this.hls.trigger(h.LEVEL_SWITCHED, { level: i }));
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
        return s(t) ? this.getAppendedFrag(t) : null;
    }
    get currentProgramDateTime() {
        var e;
        let t = (null == (e = this.media) ? void 0 : e.currentTime) || this.lastCurrentTime;
        if (s(t)) {
            let e = this.getLevelDetails(),
                i = this.currentFrag || (e ? e3(null, e.fragments, t) : null);
            if (i) {
                let e = i.programDateTime;
                if (null !== e) return new Date(e + (t - i.start) * 1e3);
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
class a1 extends F {
    constructor(e, t) {
        super("key-loader", t),
            (this.config = void 0),
            (this.keyIdToKeyInfo = {}),
            (this.emeController = null),
            (this.config = e);
    }
    abort(e) {
        for (let i in this.keyIdToKeyInfo) {
            let r = this.keyIdToKeyInfo[i].loader;
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
    createKeyLoadError(e, t = o.KEY_LOAD_ERROR, i, r, s) {
        return new tE({
            type: l.NETWORK_ERROR,
            details: t,
            fatal: !1,
            frag: e,
            response: s,
            error: i,
            networkDetails: r,
        });
    }
    loadClear(e, t, i) {
        if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
            if (t.length)
                for (let r = 0, s = t.length; r < s; r++) {
                    let a = t[r];
                    if ((e.cc <= a.cc && (!ee(e) || !ee(a) || e.sn < a.sn)) || (!i && r == s - 1))
                        return this.emeController.selectKeySystemFormat(a).then((e) => {
                            if (!this.emeController) return;
                            a.setKeyFormat(e);
                            let t = tX(e);
                            if (t) return this.emeController.getKeySystemAccess([t]);
                        });
                }
            if (this.config.requireKeySystemAccessOnStart) {
                let e = tz(this.config);
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
        var i, r;
        t && e.setKeyFormat(t);
        let s = e.decryptdata;
        if (!s) {
            let i = Error(
                t
                    ? `Expected frag.decryptdata to be defined after setting format ${t}`
                    : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`,
            );
            return Promise.reject(this.createKeyLoadError(e, o.KEY_LOAD_ERROR, i));
        }
        let a = s.uri;
        if (!a) return Promise.reject(this.createKeyLoadError(e, o.KEY_LOAD_ERROR, Error(`Invalid key URI: "${a}"`)));
        let n = a2(s),
            l = this.keyIdToKeyInfo[n];
        if (null != (i = l) && i.decryptdata.key)
            return (s.key = l.decryptdata.key), Promise.resolve({ frag: e, keyInfo: l });
        if (this.emeController && null != (r = l) && r.keyLoadPromise)
            switch (this.emeController.getKeyStatus(l.decryptdata)) {
                case "usable":
                case "usable-in-future":
                    return l.keyLoadPromise.then((t) => {
                        let { keyInfo: i } = t;
                        return (s.key = i.decryptdata.key), { frag: e, keyInfo: i };
                    });
            }
        switch (
            (this.log(
                `${this.keyIdToKeyInfo[n] ? "Rel" : "L"}oading${s.keyId ? " keyId: " + Y(s.keyId) : ""} URI: ${s.uri} from ${e.type} ${e.level}`,
            ),
            (l = this.keyIdToKeyInfo[n] =
                { decryptdata: s, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }),
            s.method)
        ) {
            case "SAMPLE-AES":
            case "SAMPLE-AES-CENC":
            case "SAMPLE-AES-CTR":
                if ("identity" === s.keyFormat) return this.loadKeyHTTP(l, e);
                return this.loadKeyEME(l, e);
            case "AES-128":
            case "AES-256":
            case "AES-256-CTR":
                return this.loadKeyHTTP(l, e);
            default:
                return Promise.reject(
                    this.createKeyLoadError(
                        e,
                        o.KEY_LOAD_ERROR,
                        Error(`Key supplied with unsupported METHOD: "${s.method}"`),
                    ),
                );
        }
    }
    loadKeyEME(e, t) {
        let i = { frag: t, keyInfo: e };
        return this.emeController && this.config.emeEnabled
            ? (e.keyLoadPromise = this.emeController.loadKey(i).then((t) => ((e.mediaKeySessionContext = t), i))).catch(
                  (i) => {
                      throw ((e.keyLoadPromise = null), "data" in i && (i.data.frag = t), i);
                  },
              )
            : Promise.resolve(i);
    }
    loadKeyHTTP(e, t) {
        let i = this.config,
            r = new i.loader(i);
        return (
            (t.keyLoader = e.loader = r),
            (e.keyLoadPromise = new Promise((s, a) => {
                let n = { keyInfo: e, frag: t, responseType: "arraybuffer", url: e.decryptdata.uri },
                    l = i.keyLoadPolicy.default,
                    h = { loadPolicy: l, timeout: l.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 };
                r.load(n, h, {
                    onSuccess: (e, t, i, r) => {
                        let { frag: n, keyInfo: l } = i,
                            h = a2(l.decryptdata);
                        if (!n.decryptdata || l !== this.keyIdToKeyInfo[h])
                            return a(
                                this.createKeyLoadError(
                                    n,
                                    o.KEY_LOAD_ERROR,
                                    Error("after key load, decryptdata unset or changed"),
                                    r,
                                ),
                            );
                        (l.decryptdata.key = n.decryptdata.key = new Uint8Array(e.data)),
                            (n.keyLoader = null),
                            (l.loader = null),
                            s({ frag: n, keyInfo: l });
                    },
                    onError: (e, i, r, s) => {
                        this.resetLoader(i),
                            a(
                                this.createKeyLoadError(
                                    t,
                                    o.KEY_LOAD_ERROR,
                                    Error(`HTTP Error ${e.code} loading key ${e.text}`),
                                    r,
                                    O({ url: n.url, data: void 0 }, e),
                                ),
                            );
                    },
                    onTimeout: (e, i, r) => {
                        this.resetLoader(i),
                            a(this.createKeyLoadError(t, o.KEY_LOAD_TIMEOUT, Error("key loading timed out"), r));
                    },
                    onAbort: (e, i, r) => {
                        this.resetLoader(i),
                            a(this.createKeyLoadError(t, o.INTERNAL_ABORTED, Error("key loading aborted"), r));
                    },
                });
            }))
        );
    }
    resetLoader(e) {
        let { frag: t, keyInfo: i, url: r } = e,
            s = i.loader;
        t.keyLoader === s && ((t.keyLoader = null), (i.loader = null));
        let a = a2(i.decryptdata) || r;
        delete this.keyIdToKeyInfo[a], s && s.destroy();
    }
}
function a2(e) {
    if (e.keyFormat !== tW) {
        let t = e.keyId;
        if (t) return Y(t);
    }
    return e.uri;
}
function a3(e) {
    let { type: t } = e;
    switch (t) {
        case I:
            return _;
        case k:
            return P;
        default:
            return D;
    }
}
function a4(e, t) {
    let i = e.url;
    return (void 0 === i || 0 === i.indexOf("data:")) && (i = t.url), i;
}
class a5 {
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
        e.on(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.on(h.LEVEL_LOADING, this.onLevelLoading, this),
            e.on(h.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
            e.on(h.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this),
            e.on(h.LEVELS_UPDATED, this.onLevelsUpdated, this);
    }
    unregisterListeners() {
        let { hls: e } = this;
        e.off(h.MANIFEST_LOADING, this.onManifestLoading, this),
            e.off(h.LEVEL_LOADING, this.onLevelLoading, this),
            e.off(h.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
            e.off(h.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this),
            e.off(h.LEVELS_UPDATED, this.onLevelsUpdated, this);
    }
    createInternalLoader(e) {
        let t = this.hls.config,
            i = t.pLoader,
            r = t.loader,
            s = new (i || r)(t);
        return (this.loaders[e.type] = s), s;
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
        let { url: i } = t;
        (this.variableList = null),
            this.load({
                id: null,
                level: 0,
                responseType: "text",
                type: R,
                url: i,
                deliveryDirectives: null,
                levelOrTrack: null,
            });
    }
    onLevelLoading(e, t) {
        let { id: i, level: r, pathwayId: s, url: a, deliveryDirectives: n, levelInfo: l } = t;
        this.load({
            id: i,
            level: r,
            pathwayId: s,
            responseType: "text",
            type: b,
            url: a,
            deliveryDirectives: n,
            levelOrTrack: l,
        });
    }
    onAudioTrackLoading(e, t) {
        let { id: i, groupId: r, url: s, deliveryDirectives: a, track: n } = t;
        this.load({
            id: i,
            groupId: r,
            level: null,
            responseType: "text",
            type: I,
            url: s,
            deliveryDirectives: a,
            levelOrTrack: n,
        });
    }
    onSubtitleTrackLoading(e, t) {
        let { id: i, groupId: r, url: s, deliveryDirectives: a, track: n } = t;
        this.load({
            id: i,
            groupId: r,
            level: null,
            responseType: "text",
            type: k,
            url: s,
            deliveryDirectives: a,
            levelOrTrack: n,
        });
    }
    onLevelsUpdated(e, t) {
        let i = this.loaders[b];
        if (i) {
            let e = i.context;
            e && !t.levels.some((t) => t === e.levelOrTrack) && (i.abort(), delete this.loaders[b]);
        }
    }
    load(e) {
        var t;
        let i,
            r = this.hls.config,
            a = this.getInternalLoader(e);
        if (a) {
            let t = this.hls.logger,
                i = a.context;
            if (
                i &&
                i.levelOrTrack === e.levelOrTrack &&
                (i.url === e.url || (i.deliveryDirectives && !e.deliveryDirectives))
            )
                return void (i.url === e.url
                    ? t.log(`[playlist-loader]: ignore ${e.url} ongoing request`)
                    : t.log(`[playlist-loader]: ignore ${e.url} in favor of ${i.url}`));
            t.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), a.abort();
        }
        if (
            ((i =
                e.type === R
                    ? r.manifestLoadPolicy.default
                    : x({}, r.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null })),
            (a = this.createInternalLoader(e)),
            s(null == (t = e.deliveryDirectives) ? void 0 : t.part))
        ) {
            let t;
            if (
                (e.type === b && null !== e.level
                    ? (t = this.hls.levels[e.level].details)
                    : e.type === I && null !== e.id
                      ? (t = this.hls.audioTracks[e.id].details)
                      : e.type === k && null !== e.id && (t = this.hls.subtitleTracks[e.id].details),
                t)
            ) {
                let e = t.partTarget,
                    r = t.targetduration;
                if (e && r) {
                    let t = 1e3 * Math.max(3 * e, 0.8 * r);
                    i = x({}, i, {
                        maxTimeToFirstByteMs: Math.min(t, i.maxTimeToFirstByteMs),
                        maxLoadTimeMs: Math.min(t, i.maxTimeToFirstByteMs),
                    });
                }
            }
        }
        let n = i.errorRetry || i.timeoutRetry || {},
            l = {
                loadPolicy: i,
                timeout: i.maxLoadTimeMs,
                maxRetry: n.maxNumRetry || 0,
                retryDelay: n.retryDelayMs || 0,
                maxRetryDelay: n.maxRetryDelayMs || 0,
            };
        a.load(e, l, {
            onSuccess: (e, t, i, r) => {
                let s = this.getInternalLoader(i);
                this.resetInternalLoader(i.type);
                let a = e.data;
                (t.parsing.start = performance.now()),
                    t8.isMediaPlaylist(a) || i.type !== R
                        ? this.handleTrackOrLevelPlaylist(e, t, i, r || null, s)
                        : this.handleMasterPlaylist(e, t, i, r);
            },
            onError: (e, t, i, r) => {
                this.handleNetworkError(t, i, !1, e, r);
            },
            onTimeout: (e, t, i) => {
                this.handleNetworkError(t, i, !0, void 0, e);
            },
        });
    }
    checkAutostartLoad() {
        if (!this.hls) return;
        let {
            config: { autoStartLoad: e, startPosition: t },
            forceStartLoad: i,
        } = this.hls;
        (e || i) &&
            (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`),
            this.hls.startLoad(t));
    }
    handleMasterPlaylist(e, t, i, r) {
        let s = this.hls,
            a = e.data,
            n = a4(e, i),
            l = t8.parseMasterPlaylist(a, n);
        if (l.playlistParsingError) {
            (t.parsing.end = performance.now()), this.handleManifestParsingError(e, i, l.playlistParsingError, r, t);
            return;
        }
        let { contentSteering: o, levels: d, sessionData: u, sessionKeys: f, startTimeOffset: c, variableList: g } = l;
        (this.variableList = g),
            d.forEach((e) => {
                let { unknownCodecs: t } = e;
                if (t) {
                    let { preferManagedMediaSource: i } = this.hls.config,
                        { audioCodec: r, videoCodec: s } = e;
                    for (let a = t.length; a--; ) {
                        let n = t[a];
                        eR(n, "audio", i)
                            ? ((e.audioCodec = r = r ? `${r},${n}` : n),
                              (eA.audio[r.substring(0, 4)] = 2),
                              t.splice(a, 1))
                            : eR(n, "video", i) &&
                              ((e.videoCodec = s = s ? `${s},${n}` : n),
                              (eA.video[s.substring(0, 4)] = 2),
                              t.splice(a, 1));
                    }
                }
            });
        let { AUDIO: m = [], SUBTITLES: p, "CLOSED-CAPTIONS": y } = t8.parseMasterPlaylistMedia(a, n, l);
        m.length &&
            (m.some((e) => !e.url) ||
                !d[0].audioCodec ||
                d[0].attrs.AUDIO ||
                (this.hls.logger.log(
                    "[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one",
                ),
                m.unshift({
                    type: "main",
                    name: "main",
                    groupId: "main",
                    default: !1,
                    autoselect: !1,
                    forced: !1,
                    id: -1,
                    attrs: new tP({}),
                    bitrate: 0,
                    url: "",
                }))),
            s.trigger(h.MANIFEST_LOADED, {
                levels: d,
                audioTracks: m,
                subtitles: p,
                captions: y,
                contentSteering: o,
                url: n,
                stats: t,
                networkDetails: r,
                sessionData: u,
                sessionKeys: f,
                startTimeOffset: c,
                variableList: g,
            });
    }
    handleTrackOrLevelPlaylist(e, t, i, r, a) {
        let n = this.hls,
            { id: l, level: o, type: d } = i,
            u = a4(e, i),
            f = s(o) ? o : s(l) ? l : 0,
            c = a3(i),
            g = t8.parseLevelPlaylist(e.data, u, f, c, 0, this.variableList);
        if (d === R) {
            let e = { attrs: new tP({}), bitrate: 0, details: g, name: "", url: u };
            (g.requestScheduled = t.loading.start + ig(g, 0)),
                n.trigger(h.MANIFEST_LOADED, {
                    levels: [e],
                    audioTracks: [],
                    url: u,
                    stats: t,
                    networkDetails: r,
                    sessionData: null,
                    sessionKeys: null,
                    contentSteering: null,
                    startTimeOffset: null,
                    variableList: null,
                });
        }
        (t.parsing.end = performance.now()), (i.levelDetails = g), this.handlePlaylistLoaded(g, e, t, i, r, a);
    }
    handleManifestParsingError(e, t, i, r, s) {
        this.hls.trigger(h.ERROR, {
            type: l.NETWORK_ERROR,
            details: o.MANIFEST_PARSING_ERROR,
            fatal: t.type === R,
            url: e.url,
            err: i,
            error: i,
            reason: i.message,
            response: e,
            context: t,
            networkDetails: r,
            stats: s,
        });
    }
    handleNetworkError(e, t, i = !1, r, s) {
        let a = `A network ${i ? "timeout" : "error" + (r ? " (status " + r.code + ")" : "")} occurred while loading ${e.type}`;
        e.type === b
            ? (a += `: ${e.level} id: ${e.id}`)
            : (e.type === I || e.type === k) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
        let n = Error(a);
        this.hls.logger.warn(`[playlist-loader]: ${a}`);
        let d = o.UNKNOWN,
            u = !1,
            f = this.getInternalLoader(e);
        switch (e.type) {
            case R:
                (d = i ? o.MANIFEST_LOAD_TIMEOUT : o.MANIFEST_LOAD_ERROR), (u = !0);
                break;
            case b:
                (d = i ? o.LEVEL_LOAD_TIMEOUT : o.LEVEL_LOAD_ERROR), (u = !1);
                break;
            case I:
                (d = i ? o.AUDIO_TRACK_LOAD_TIMEOUT : o.AUDIO_TRACK_LOAD_ERROR), (u = !1);
                break;
            case k:
                (d = i ? o.SUBTITLE_TRACK_LOAD_TIMEOUT : o.SUBTITLE_LOAD_ERROR), (u = !1);
        }
        f && this.resetInternalLoader(e.type);
        let c = {
            type: l.NETWORK_ERROR,
            details: d,
            fatal: u,
            url: e.url,
            loader: f,
            context: e,
            error: n,
            networkDetails: t,
            stats: s,
        };
        r && (c.response = O({ url: (null == t ? void 0 : t.url) || e.url, data: void 0 }, r)),
            this.hls.trigger(h.ERROR, c);
    }
    handlePlaylistLoaded(e, t, i, r, s, a) {
        let n = this.hls,
            { type: d, level: u, levelOrTrack: f, id: c, groupId: g, deliveryDirectives: m } = r,
            p = a4(t, r),
            y = a3(r),
            v = "number" == typeof r.level && y === D ? u : void 0,
            E = e.playlistParsingError;
        if (E) {
            if ((this.hls.logger.warn(`${E} ${e.url}`), !n.config.ignorePlaylistParsingErrors))
                return void n.trigger(h.ERROR, {
                    type: l.NETWORK_ERROR,
                    details: o.LEVEL_PARSING_ERROR,
                    fatal: !1,
                    url: p,
                    error: E,
                    reason: E.message,
                    response: t,
                    context: r,
                    level: v,
                    parent: y,
                    networkDetails: s,
                    stats: i,
                });
            e.playlistParsingError = null;
        }
        if (!e.fragments.length) {
            let a = (e.playlistParsingError = Error("No Segments found in Playlist"));
            n.trigger(h.ERROR, {
                type: l.NETWORK_ERROR,
                details: o.LEVEL_EMPTY_ERROR,
                fatal: !1,
                url: p,
                error: a,
                reason: a.message,
                response: t,
                context: r,
                level: v,
                parent: y,
                networkDetails: s,
                stats: i,
            });
            return;
        }
        switch (
            (e.live &&
                a &&
                (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0),
                (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)),
            d)
        ) {
            case R:
            case b:
                if (v)
                    if (f) {
                        if (f !== n.levels[v]) {
                            let e = n.levels.indexOf(f);
                            e > -1 && (v = e);
                        }
                    } else v = 0;
                n.trigger(h.LEVEL_LOADED, {
                    details: e,
                    levelInfo: f || n.levels[0],
                    level: v || 0,
                    id: c || 0,
                    stats: i,
                    networkDetails: s,
                    deliveryDirectives: m,
                    withoutMultiVariant: d === R,
                });
                break;
            case I:
                n.trigger(h.AUDIO_TRACK_LOADED, {
                    details: e,
                    track: f,
                    id: c || 0,
                    groupId: g || "",
                    stats: i,
                    networkDetails: s,
                    deliveryDirectives: m,
                });
                break;
            case k:
                n.trigger(h.SUBTITLE_TRACK_LOADED, {
                    details: e,
                    track: f,
                    id: c || 0,
                    groupId: g || "",
                    stats: i,
                    networkDetails: s,
                    deliveryDirectives: m,
                });
        }
    }
}
class a8 {
    static get version() {
        return iY;
    }
    static isMSESupported() {
        return aJ();
    }
    static isSupported() {
        if (!aJ()) return !1;
        let e = K();
        return (
            "function" == typeof (null == e ? void 0 : e.isTypeSupported) &&
            (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((t) =>
                e.isTypeSupported(eI(t, "video")),
            ) ||
                ["mp4a.40.2", "fLaC"].some((t) => e.isTypeSupported(eI(t, "audio"))))
        );
    }
    static getMediaSource() {
        return K();
    }
    static get Events() {
        return h;
    }
    static get MetadataSchema() {
        return i6;
    }
    static get ErrorTypes() {
        return l;
    }
    static get ErrorDetails() {
        return o;
    }
    static get DefaultConfig() {
        return a8.defaultConfig ? a8.defaultConfig : aN;
    }
    static set DefaultConfig(e) {
        a8.defaultConfig = e;
    }
    constructor(e = {}) {
        (this.config = void 0),
            (this.userConfig = void 0),
            (this.logger = void 0),
            (this.coreComponents = void 0),
            (this.networkControllers = void 0),
            (this._emitter = new iV()),
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
        const t = (this.logger = (function (e, t, i) {
                let r = B();
                if (("object" == typeof console && !0 === e) || "object" == typeof e) {
                    let s = ["debug", "log", "info", "warn", "error"];
                    s.forEach((t) => {
                        r[t] = N(t, e, i);
                    });
                    try {
                        r.log(`Debug logs enabled for "${t}" in hls.js version 1.6.12`);
                    } catch (e) {
                        return B();
                    }
                    s.forEach((t) => {
                        G[t] = N(t, e);
                    });
                } else x(G, r);
                return r;
            })(e.debug || !1, "Hls instance", e.assetPlayerId)),
            i = (this.config = (function (e, t, i) {
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
                let r = (function e(t) {
                        return t && "object" == typeof t
                            ? Array.isArray(t)
                                ? t.map(e)
                                : Object.keys(t).reduce((i, r) => ((i[r] = e(t[r])), i), {})
                            : t;
                    })(e),
                    s = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
                return (
                    ["manifest", "level", "frag"].forEach((e) => {
                        let a = `${"level" === e ? "playlist" : e}LoadPolicy`,
                            n = void 0 === t[a],
                            l = [];
                        s.forEach((i) => {
                            let s = `${e}Loading${i}`,
                                o = t[s];
                            if (void 0 !== o && n) {
                                l.push(s);
                                let e = r[a].default;
                                switch (((t[a] = { default: e }), i)) {
                                    case "TimeOut":
                                        (e.maxLoadTimeMs = o), (e.maxTimeToFirstByteMs = o);
                                        break;
                                    case "MaxRetry":
                                        (e.errorRetry.maxNumRetry = o), (e.timeoutRetry.maxNumRetry = o);
                                        break;
                                    case "RetryDelay":
                                        (e.errorRetry.retryDelayMs = o), (e.timeoutRetry.retryDelayMs = o);
                                        break;
                                    case "MaxRetryTimeout":
                                        (e.errorRetry.maxRetryDelayMs = o), (e.timeoutRetry.maxRetryDelayMs = o);
                                }
                            }
                        }),
                            l.length &&
                                i.warn(
                                    `hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${a}": ${ej(t[a])}`,
                                );
                    }),
                    O(O({}, r), t)
                );
            })(a8.DefaultConfig, e, t));
        (this.userConfig = e),
            i.progressive &&
                (function (e, t) {
                    let i = e.loader;
                    i !== aO && i !== aB
                        ? (t.log("[config]: Custom loader detected, cannot enable progressive streaming"),
                          (e.progressive = !1))
                        : (function () {
                              if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                                  try {
                                      return new self.ReadableStream({}), !0;
                                  } catch (e) {}
                              return !1;
                          })() &&
                          ((e.loader = aO),
                          (e.progressive = !0),
                          (e.enableSoftwareAES = !0),
                          t.log("[config]: Progressive streaming enabled, using FetchLoader"));
                })(i, t);
        const {
                abrController: r,
                bufferController: s,
                capLevelController: a,
                errorController: n,
                fpsController: l,
            } = i,
            o = new n(this),
            d = (this.abrController = new r(this)),
            u = new to(this),
            f = i.interstitialsController,
            c = f ? (this.interstitialsController = new f(this, a8)) : null,
            g = (this.bufferController = new s(this, u)),
            m = (this.capLevelController = new a(this)),
            p = new l(this),
            y = new a5(this),
            v = i.contentSteeringController,
            E = v ? new v(this) : null,
            T = (this.levelController = new aQ(this, E)),
            S = new aq(this),
            A = new a1(this.config, this.logger),
            L = (this.streamController = new a0(this, u, A)),
            R = (this.gapController = new aG(this, u));
        m.setStreamController(L), p.setStreamController(L);
        const b = [y, T, L];
        c && b.splice(1, 0, c), E && b.splice(1, 0, E), (this.networkControllers = b);
        const I = [d, g, R, m, p, S, u];
        this.audioTrackController = this.createController(i.audioTrackController, b);
        const k = i.audioStreamController;
        k && b.push((this.audioStreamController = new k(this, u, A))),
            (this.subtitleTrackController = this.createController(i.subtitleTrackController, b));
        const D = i.subtitleStreamController;
        D && b.push((this.subtititleStreamController = new D(this, u, A))),
            this.createController(i.timelineController, I),
            (A.emeController = this.emeController = this.createController(i.emeController, I)),
            (this.cmcdController = this.createController(i.cmcdController, I)),
            (this.latencyController = this.createController(aX, I)),
            (this.coreComponents = I),
            b.push(o);
        const _ = o.onErrorOut;
        "function" == typeof _ && this.on(h.ERROR, _, o), this.on(h.MANIFEST_LOADED, y.onManifestLoaded, y);
    }
    createController(e, t) {
        if (e) {
            let i = new e(this);
            return t && t.push(i), i;
        }
        return null;
    }
    on(e, t, i = this) {
        this._emitter.on(e, t, i);
    }
    once(e, t, i = this) {
        this._emitter.once(e, t, i);
    }
    removeAllListeners(e) {
        this._emitter.removeAllListeners(e);
    }
    off(e, t, i = this, r) {
        this._emitter.off(e, t, i, r);
    }
    listeners(e) {
        return this._emitter.listeners(e);
    }
    emit(e, t, i) {
        return this._emitter.emit(e, t, i);
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
                let i = e === h.ERROR;
                this.trigger(h.ERROR, {
                    type: l.OTHER_ERROR,
                    details: o.INTERNAL_EXCEPTION,
                    fatal: i,
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
            this.trigger(h.DESTROYING, void 0),
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
            this.trigger(h.ERROR, { type: l.OTHER_ERROR, details: o.ATTACH_MEDIA_ERROR, fatal: !0, error: t });
            return;
        }
        this.logger.log("attachMedia"),
            this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
        let t = "media" in e,
            i = t ? e.media : e,
            r = t ? e : { media: i };
        (this._media = i), this.trigger(h.MEDIA_ATTACHING, r);
    }
    detachMedia() {
        this.logger.log("detachMedia"), this.trigger(h.MEDIA_DETACHING, {}), (this._media = null);
    }
    transferMedia() {
        this._media = null;
        let e = this.bufferController.transferMedia();
        return this.trigger(h.MEDIA_DETACHING, { transferMedia: e }), e;
    }
    loadSource(e) {
        this.stopLoad();
        let t = this.media,
            i = this._url,
            r = (this._url = q.buildAbsoluteURL(self.location.href, e, { alwaysNormalize: !0 }));
        (this._autoLevelCapping = -1),
            (this._maxHdcpLevel = null),
            this.logger.log(`loadSource:${r}`),
            t && i && (i !== r || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)),
            this.trigger(h.MANIFEST_LOADING, { url: e });
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
            let i = 0;
            i < this.networkControllers.length &&
            (this.networkControllers[i].startLoad(e, t), this.started && this.networkControllers);
            i++
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
        let e = { [D]: this.streamController.inFlightFrag };
        return (
            this.audioStreamController && (e[_] = this.audioStreamController.inFlightFrag),
            this.subtititleStreamController && (e[P] = this.subtititleStreamController.inFlightFrag),
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
                                    let i = ((e + 16 * Math.random()) % 16) | 0;
                                    return (e = Math.floor(e / 16)), ("x" == t ? i : (3 & i) | 8).toString(16);
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
        eG.indexOf(e) > -1 &&
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
        let i = e.length;
        for (let r = 0; r < i; r++) if (e[r].maxBitrate >= t) return r;
        return 0;
    }
    get maxAutoLevel() {
        let e,
            { levels: t, autoLevelCapping: i, maxHdcpLevel: r } = this;
        if (((e = -1 === i && null != t && t.length ? t.length - 1 : i), r))
            for (let i = e; i--; ) {
                let e = t[i].attrs["HDCP-LEVEL"];
                if (e && e <= r) return i;
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
        return eB(e, eX(t), navigator.mediaCapabilities);
    }
}
a8.defaultConfig = void 0;
