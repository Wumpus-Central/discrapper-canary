n.d(t, { Z: () => I }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    a = n(536442),
    o = n(810788),
    s = n(592125),
    c = n(131951),
    u = n(944486),
    d = n(556296),
    p = n(131468),
    h = n(208049),
    f = n(763296),
    g = n(641015),
    m = n(22382),
    b = n(747071),
    _ = n(49230),
    E = n(981631),
    O = n(65154);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class y extends p.Z {
    _initialize() {
        super._initialize(), __OVERLAY__ || l.Z.subscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
    }
    _terminate() {
        super._terminate(), __OVERLAY__ || l.Z.unsubscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            N(this, 'playingSoundsWeb', new Map()),
            N(this, '_stopAndClearSounds', () => {
                c.Z.supports(O.AN.SAMPLE_PLAYBACK) &&
                    c.Z.getMediaEngine().eachConnection((e) => {
                        e.stopAllSamplesLocalPlayback();
                    }),
                    this.playingSoundsWeb.forEach((e) => {
                        e.pause(), (e.src = '');
                    }),
                    (this.playingSoundsWeb = new Map());
            }),
            N(this, '_playSound', async function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    l = null != i && u.Z.getVoiceChannelId() === i;
                if ((null == i || l) && !c.Z.isDeaf() && !f.Z.isLocalSoundboardMuted(r))
                    try {
                        let i = {
                            soundKey: ''.concat(r, '-').concat(e),
                            soundURL: (0, m.Z)(e),
                            soundVolume: (0, b.Z)(n),
                            reportSoundStartedPlaying: () => (0, h.xR)(e, r)
                        };
                        c.Z.supports(O.AN.SAMPLE_PLAYBACK) ? await (0, _.$)(i) : await (0, _.h)(i, t.playingSoundsWeb);
                    } finally {
                        (0, h.R)(e, r);
                    }
            }),
            N(this, '_handleOverlaySoundboardSoundsFetchRequest', () => {
                (0, h.w)();
            }),
            N(this, '_handleOpenEducationModal', (e, t) => {
                if (null == e) return;
                let l = s.Z.getChannel(t),
                    c = d.ZP.getKeybindForAction(E.kg4.SOUNDBOARD_HOLD);
                null != l &&
                    (0, g.Z)(l) &&
                    null != c &&
                    o.Z.hasHotspot(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
                    (0, i.ZDy)(async () => {
                        let { default: t } = await n.e('69208').then(n.bind(n, 490166));
                        return (n) => {
                            var i, a;
                            return (0, r.jsx)(
                                t,
                                ((i = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                N(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (a = a =
                                    {
                                        guildId: e,
                                        keybind: c,
                                        channel: l
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                i)
                            );
                        };
                    });
            });
    }
}
let I = new y();
