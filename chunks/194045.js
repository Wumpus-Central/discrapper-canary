n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(73153),
    l = n(626584),
    s = n(450510),
    o = n(891540),
    d = n(734057),
    c = n(430452),
    u = n(309010),
    A = n(532624),
    h = n(518647),
    _ = n(796774),
    m = n(209932),
    p = n(123973),
    g = n(102597),
    E = n(904054),
    f = n(857179),
    I = n(652215),
    C = n(731854);
let N = new l.A("SoundboardManager");
class T extends h.A {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                a.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                );
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                a.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                );
    }
    _stopAndClearSounds = () => {
        c.A.supports(C.O5.SAMPLE_PLAYBACK) &&
            c.A.getMediaEngine().eachConnection((e) => {
                e.stopAllSamplesLocalPlayback();
            }),
            this.playingSoundsWeb.forEach((e) => {
                e.pause(), (e.src = "");
            }),
            (this.playingSoundsWeb = new Map());
    };
    _playSound = (() => {
        var e = this;
        return async function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = null != r && u.A.getVoiceChannelId() === r;
            if ((null == r || a) && !c.A.isDeaf() && !m.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, g.A)(t),
                        soundVolume: (0, E.A)(n),
                        reportSoundStartedPlaying: () => (0, _.dZ)(t, i),
                    };
                    c.A.supports(C.O5.SAMPLE_PLAYBACK) ? await (0, f.o)(r) : await (0, f.G)(r, e.playingSoundsWeb);
                } catch (e) {
                    N.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, _.g0)(t, i);
                }
        };
    })();
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, _.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let a = d.A.getChannel(t),
            l = A.Ay.getKeybindForAction(I.hCu.SOUNDBOARD_HOLD);
        null != a &&
            (0, p.A)(a) &&
            null != l &&
            o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, r.mMO)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, keybind: l, channel: a });
            });
    };
}
let S = new T();
