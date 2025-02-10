n.d(t, { Z: () => T }), n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(536442),
    s = n(810788),
    o = n(592125),
    c = n(131951),
    d = n(944486),
    u = n(556296),
    h = n(131468),
    m = n(208049),
    p = n(763296),
    g = n(641015),
    _ = n(22382),
    f = n(747071),
    E = n(49230),
    I = n(981631),
    C = n(65154);
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
class v extends h.Z {
    _initialize() {
        super._initialize(), __OVERLAY__ || r.Z.subscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
    }
    _terminate() {
        super._terminate(), __OVERLAY__ || r.Z.unsubscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            N(this, 'playingSoundsWeb', new Map()),
            N(this, '_stopAndClearSounds', () => {
                c.Z.supports(C.AN.SAMPLE_PLAYBACK) &&
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
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    r = null != l && d.Z.getVoiceChannelId() === l;
                if ((null == l || r) && !c.Z.isDeaf() && !p.Z.isLocalSoundboardMuted(i))
                    try {
                        let l = {
                            soundKey: ''.concat(i, '-').concat(e),
                            soundURL: (0, _.Z)(e),
                            soundVolume: (0, f.Z)(n),
                            reportSoundStartedPlaying: () => (0, m.xR)(e, i)
                        };
                        c.Z.supports(C.AN.SAMPLE_PLAYBACK) ? await (0, E.$)(l) : await (0, E.h)(l, t.playingSoundsWeb);
                    } finally {
                        (0, m.R)(e, i);
                    }
            }),
            N(this, '_handleOverlaySoundboardSoundsFetchRequest', () => {
                (0, m.w)();
            }),
            N(this, '_handleOpenEducationModal', (e, t) => {
                if (null == e) return;
                let r = o.Z.getChannel(t),
                    c = u.ZP.getKeybindForAction(I.kg4.SOUNDBOARD_HOLD);
                null != r &&
                    (0, g.Z)(r) &&
                    null != c &&
                    s.Z.hasHotspot(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
                    (0, l.ZDy)(async () => {
                        let { default: t } = await n.e('69208').then(n.bind(n, 490166));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                guildId: e,
                                keybind: c,
                                channel: r
                            });
                    });
            });
    }
}
let T = new v();
