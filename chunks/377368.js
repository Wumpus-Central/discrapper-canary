n.d(t, { Z: () => I }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(570140),
    a = n(536442),
    s = n(810788),
    o = n(592125),
    c = n(131951),
    u = n(944486),
    d = n(556296),
    p = n(131468),
    f = n(208049),
    h = n(763296),
    g = n(641015),
    m = n(22382),
    _ = n(747071),
    b = n(49230),
    E = n(981631),
    O = n(65154);
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
class v extends p.Z {
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                l.Z.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                );
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                l.Z.unsubscribe(
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
                c.Z.supports(O.AN.SAMPLE_PLAYBACK) &&
                    c.Z.getMediaEngine().eachConnection((e) => {
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
                    l = null != i && u.Z.getVoiceChannelId() === i;
                if ((null == i || l) && !c.Z.isDeaf() && !h.Z.isLocalSoundboardMuted(r))
                    try {
                        let i = {
                            soundKey: "".concat(r, "-").concat(e),
                            soundURL: (0, m.Z)(e),
                            soundVolume: (0, _.Z)(n),
                            reportSoundStartedPlaying: () => (0, f.xR)(e, r),
                        };
                        c.Z.supports(O.AN.SAMPLE_PLAYBACK) ? await (0, b.$)(i) : await (0, b.h)(i, t.playingSoundsWeb);
                    } finally {
                        (0, f.R)(e, r);
                    }
            }),
            y(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
                (0, f.w)();
            }),
            y(this, "_handleOpenEducationModal", (e, t) => {
                if (null == e) return;
                let l = o.Z.getChannel(t),
                    c = d.ZP.getKeybindForAction(E.kg4.SOUNDBOARD_HOLD);
                null != l &&
                    (0, g.Z)(l) &&
                    null != c &&
                    s.Z.hasHotspot(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
                    (0, i.ZDy)(async () => {
                        let { default: t } = await n.e("69208").then(n.bind(n, 490166));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                              }),
                                        e
                                    );
                                })(
                                    (function (e) {
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
                                    })({}, n),
                                    {
                                        guildId: e,
                                        keybind: c,
                                        channel: l,
                                    },
                                ),
                            );
                    });
            });
    }
}
let I = new v();
