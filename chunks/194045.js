n.d(t, {
    A: () => S,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(626584),
    s = n(450510),
    o = n(891540),
    c = n(734057),
    u = n(430452),
    d = n(309010),
    p = n(532624),
    f = n(518647),
    h = n(796774),
    A = n(209932),
    g = n(123973),
    m = n(102597),
    b = n(904054),
    _ = n(857179),
    E = n(652215),
    O = n(731854);

function y(e, t, n) {
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
let I = new a.A("SoundboardManager");
class v extends f.A {
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                l.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                );
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                l.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                );
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            y(this, "playingSoundsWeb", new Map()),
            y(this, "_stopAndClearSounds", () => {
                u.A.supports(O.O5.SAMPLE_PLAYBACK) &&
                    u.A.getMediaEngine().eachConnection((e) => {
                        e.stopAllSamplesLocalPlayback();
                    }),
                    this.playingSoundsWeb.forEach((e) => {
                        e.pause(), (e.src = "");
                    }),
                    (this.playingSoundsWeb = new Map());
            }),
            y(this, "_playSound", async function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    l = null != i && d.A.getVoiceChannelId() === i;
                if ((null == i || l) && !u.A.isDeaf() && !A.A.isLocalSoundboardMuted(r))
                    try {
                        let i = {
                            soundKey: "".concat(r, "-").concat(e),
                            soundURL: (0, m.A)(e),
                            soundVolume: (0, b.A)(n),
                            reportSoundStartedPlaying: () => (0, h.dZ)(e, r),
                        };
                        u.A.supports(O.O5.SAMPLE_PLAYBACK) ? await (0, _.o)(i) : await (0, _.G)(i, t.playingSoundsWeb);
                    } catch (e) {
                        I.warn("Error playing soundboard sound: ".concat(e.message));
                    } finally {
                        (0, h.g0)(e, r);
                    }
            }),
            y(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
                (0, h.E7)();
            }),
            y(this, "_handleOpenEducationModal", (e, t) => {
                if (null == e) return;
                let l = c.A.getChannel(t),
                    a = p.Ay.getKeybindForAction(E.hCu.SOUNDBOARD_HOLD);
                null != l &&
                    (0, g.A)(l) &&
                    null != a &&
                    o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
                    (0, i.mMO)(async () => {
                        let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                        return (n) => {
                            var i, s;
                            return (0, r.jsx)(
                                t,
                                ((i = (function (e) {
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
                                                y(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (s = s =
                                    {
                                        guildId: e,
                                        keybind: a,
                                        channel: l,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(s)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                      }),
                                i),
                            );
                        };
                    });
            });
    }
}
let S = new v();
