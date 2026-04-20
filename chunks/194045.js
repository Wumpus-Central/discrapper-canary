n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(73153),
    r = n(626584),
    s = n(450510),
    o = n(891540),
    d = n(594061),
    c = n(734057),
    u = n(430452),
    A = n(309010),
    h = n(532624),
    _ = n(518647),
    m = n(796774),
    g = n(209932),
    p = n(123973),
    E = n(102597),
    I = n(904054),
    f = n(857179),
    C = n(652215),
    T = n(731854);
let N = new r.A("SoundboardManager");
class S extends _.A {
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
        u.Ay.supports(T.O5.SAMPLE_PLAYBACK) &&
            u.Ay.getMediaEngine().eachConnection((e) => {
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
                l = arguments.length > 3 ? arguments[3] : void 0,
                a = null != l && A.A.getVoiceChannelId() === l;
            if ((null == l || a) && !u.Ay.isDeaf() && !g.A.isLocalSoundboardMuted(i))
                try {
                    let l = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, E.A)(t),
                        soundVolume: (0, I.A)(n),
                        reportSoundStartedPlaying: () => (0, m.dZ)(t, i),
                    };
                    u.Ay.supports(T.O5.SAMPLE_PLAYBACK) ? await (0, f.o)(l) : await (0, f.G)(l, e.playingSoundsWeb);
                } catch (e) {
                    N.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, m.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === C.S7L.RTC_CONNECTED && (d.bW.loadIfNecessary(), (0, m.E7)({ disableAnalytics: !0 }));
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, m.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let a = c.A.getChannel(t),
            r = h.Ay.getKeybindForAction(C.hCu.SOUNDBOARD_HOLD);
        null != a &&
            (0, p.Ay)(a) &&
            null != r &&
            o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, l.mMO)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, keybind: r, channel: a });
            });
    };
}
let x = new S();
