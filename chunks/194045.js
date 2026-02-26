n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(73153),
    a = n(626584),
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
    g = n(646202),
    E = n(102597),
    I = n(904054),
    f = n(857179),
    C = n(652215),
    T = n(731854);
let N = new a.A("SoundboardManager");
class S extends h.A {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                (l.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                l.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                (l.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                l.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _stopAndClearSounds = () => {
        c.Ay.supports(T.O5.SAMPLE_PLAYBACK) &&
            c.Ay.getMediaEngine().eachConnection((e) => {
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
                l = null != r && u.A.getVoiceChannelId() === r;
            if ((null == r || l) && !c.Ay.isDeaf() && !m.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, E.A)(t),
                        soundVolume: (0, I.A)(n),
                        reportSoundStartedPlaying: () => (0, _.dZ)(t, i),
                    };
                    c.Ay.supports(T.O5.SAMPLE_PLAYBACK) ? await (0, f.o)(r) : await (0, f.G)(r, e.playingSoundsWeb);
                } catch (e) {
                    N.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, _.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === C.S7L.RTC_CONNECTED && (0, g.fN)("SoundboardManager") && (0, _.E7)({ disableAnalytics: !0 });
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, _.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let l = d.A.getChannel(t),
            a = A.Ay.getKeybindForAction(C.hCu.SOUNDBOARD_HOLD);
        null != l &&
            (0, p.Ay)(l) &&
            null != a &&
            o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, r.mMO)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, keybind: a, channel: l });
            });
    };
}
let x = new S();
