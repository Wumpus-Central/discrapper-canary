n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
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
    f = n(22382),
    _ = n(747071),
    E = n(49230),
    I = n(981631),
    C = n(65154);
function v(e, t, n) {
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
class N extends h.Z {
    _initialize() {
        super._initialize(), !__OVERLAY__ && l.Z.subscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
    }
    _terminate() {
        super._terminate(), !__OVERLAY__ && l.Z.unsubscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            v(this, 'playingSoundsWeb', new Map()),
            v(this, '_stopAndClearSounds', () => {
                c.Z.supports(C.AN.SAMPLE_PLAYBACK) &&
                    c.Z.getMediaEngine().eachConnection((e) => {
                        e.stopAllSamplesLocalPlayback();
                    }),
                    this.playingSoundsWeb.forEach((e) => {
                        e.pause(), (e.src = '');
                    }),
                    (this.playingSoundsWeb = new Map());
            }),
            v(this, '_playSound', async function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    l = null != r && d.Z.getVoiceChannelId() === r;
                if ((null == r || l) && !c.Z.isDeaf() && !p.Z.isLocalSoundboardMuted(i))
                    try {
                        let r = {
                            soundKey: ''.concat(i, '-').concat(e),
                            soundURL: (0, f.Z)(e),
                            soundVolume: (0, _.Z)(n),
                            reportSoundStartedPlaying: () => (0, m.xR)(e, i)
                        };
                        c.Z.supports(C.AN.SAMPLE_PLAYBACK) ? await (0, E.$)(r) : await (0, E.h)(r, t.playingSoundsWeb);
                    } finally {
                        (0, m.R)(e, i);
                    }
            }),
            v(this, '_handleOverlaySoundboardSoundsFetchRequest', () => {
                (0, m.w)();
            }),
            v(this, '_handleOpenEducationModal', (e, t) => {
                if (null == e) return;
                let l = o.Z.getChannel(t),
                    c = u.Z.getKeybindForAction(I.kg4.SOUNDBOARD_HOLD);
                null != l &&
                    (0, g.Z)(l) &&
                    null != c &&
                    s.Z.hasHotspot(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
                    (0, r.openModalLazy)(async () => {
                        let { default: t } = await n.e('69208').then(n.bind(n, 490166));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                guildId: e,
                                keybind: c,
                                channel: l
                            });
                    });
            });
    }
}
t.Z = new N();
