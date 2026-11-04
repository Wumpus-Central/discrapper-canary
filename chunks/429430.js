var i = n(611599),
    r = n(935172),
    a = n(731854);
let s = new i.Vy("ConnectionEventFramerateReducer");
n.d(
    t,
    {},
    {
        A: class {
            connection;
            sinkWants;
            framerateReductionTimeout;
            constructor(e, t) {
                ((this.connection = e),
                    (this.sinkWants = t),
                    s.enableNativeLogger(!0),
                    e.on(r.y.Speaking, this.handleSpeaking),
                    e.on(r.y.Mute, this.handleSelfMute),
                    this.initialize());
            }
            initialize() {
                this.userSpeakingChange(!0);
            }
            handleSpeaking = (e, t) => {
                e === this.connection.userId && this.userSpeakingChange(t === a.ME.NONE);
            };
            handleSelfMute = (e) => {
                this.connection.hasDesktopSource() ||
                    (this.destroyFramerateScaleFactorTimers(),
                    (this.sinkWants.isMuted = e),
                    this.updateRemoteWantsFramerate());
            };
            userSpeakingChange(e) {
                if (!this.connection.hasDesktopSource()) {
                    if ((this.destroyFramerateScaleFactorTimers(), !e)) {
                        this.sinkWants.isMuted && ((this.sinkWants.isMuted = !1), this.updateRemoteWantsFramerate());
                        return;
                    }
                    this.framerateReductionTimeout = setTimeout(() => {
                        this.connection.destroyed ||
                            (s.info("BaseConnection.userSpeakingChange: Reduced framerate after 15000 ms."),
                            (this.framerateReductionTimeout = void 0),
                            (this.sinkWants.isMuted = !0),
                            this.updateRemoteWantsFramerate());
                    }, 15e3);
                }
            }
            destroyFramerateScaleFactorTimers() {
                "number" == typeof this.framerateReductionTimeout &&
                    (clearTimeout(this.framerateReductionTimeout), (this.framerateReductionTimeout = void 0));
            }
            updateRemoteWantsFramerate() {
                this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"]);
            }
            destroy() {
                this.destroyFramerateScaleFactorTimers();
            }
        },
    },
);
