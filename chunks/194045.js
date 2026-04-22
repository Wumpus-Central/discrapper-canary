n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(73153),
    l = n(626584),
    s = n(450510),
    o = n(891540),
    d = n(594061),
    u = n(734057),
    c = n(430452),
    A = n(309010),
    h = n(532624),
    _ = n(518647),
    E = n(796774),
    p = n(209932),
    m = n(123973),
    g = n(102597),
    I = n(904054),
    C = n(857179),
    f = n(652215),
    T = n(731854);
let S = new l.A("SoundboardManager");
class N extends _.A {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                (a.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                a.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                (a.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                a.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
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
                a = null != r && A.A.getVoiceChannelId() === r;
            if ((null == r || a) && !c.Ay.isDeaf() && !p.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, g.A)(t),
                        soundVolume: (0, I.A)(n),
                        reportSoundStartedPlaying: () => (0, E.dZ)(t, i),
                    };
                    c.Ay.supports(T.O5.SAMPLE_PLAYBACK) ? await (0, C.o)(r) : await (0, C.G)(r, e.playingSoundsWeb);
                } catch (e) {
                    S.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, E.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === f.S7L.RTC_CONNECTED && (d.bW.loadIfNecessary(), (0, E.E7)({ disableAnalytics: !0 }));
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, E.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let a = u.A.getChannel(t),
            l = h.Ay.getKeybindForAction(f.hCu.SOUNDBOARD_HOLD);
        null != a &&
            (0, m.Ay)(a) &&
            null != l &&
            o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, r.openModalLazy)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, keybind: l, channel: a });
            });
    };
}
let O = new N();
