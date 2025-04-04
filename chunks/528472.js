n.d(t, { Z: () => d }), n(411104), n(26686);
var r = n(626135),
    i = n(981631);
function o(e, t, n) {
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
let a = 'mp4a.40.2',
    s = 'aac',
    l = 128000,
    c = 2500000;
class u {
    static getInstance() {
        return (null === u.instance || void 0 === u.instance) && (u.instance = new u()), u.instance;
    }
    async checkCodecCapability(e, t, n, r, i) {
        try {
            var o, c, u, d;
            let f = {
                    type: 'file',
                    video: {
                        contentType: 'video/mp4;codecs='.concat(e),
                        width: n.width,
                        height: n.height,
                        bitrate: i,
                        framerate: r
                    },
                    audio: {
                        contentType: 'audio/mp4;codecs=mp4a.40.2',
                        channels: 2,
                        samplerate: 48000,
                        bitrate: l
                    }
                },
                _ = await (null == (o = navigator.mediaCapabilities) ? void 0 : o.decodingInfo(f));
            return {
                videoCodec: e,
                videoProfile: t,
                resolution: n,
                framerate: r,
                videoBitrate: i,
                audioCodec: a,
                audioProfile: s,
                audioBitrate: l,
                capability: {
                    supported: null != (c = null == _ ? void 0 : _.supported) && c,
                    smooth: null != (u = null == _ ? void 0 : _.smooth) && u,
                    powerEfficient: null != (d = null == _ ? void 0 : _.powerEfficient) && d
                }
            };
        } catch (o) {
            return {
                videoCodec: e,
                videoProfile: t,
                resolution: n,
                framerate: r,
                videoBitrate: i,
                audioCodec: a,
                audioProfile: s,
                audioBitrate: l,
                capability: {
                    supported: !1,
                    smooth: !1,
                    powerEfficient: !1
                }
            };
        }
    }
    detectCapabilities() {
        if (null !== this.capabilities && void 0 !== this.capabilities) return Promise.resolve(this.capabilities);
        if (this.isDetecting) {
            if (null === this.detectionPromise || void 0 === this.detectionPromise) throw Error('Detection promise is null while isDetecting is true');
            return this.detectionPromise;
        }
        return (
            (this.isDetecting = !0),
            (this.detectionPromise = (async () => {
                if (void 0 === navigator.mediaCapabilities)
                    return (
                        (this.hasAttemptedDetection = !0),
                        {
                            capabilities: [],
                            timestamp: performance.now()
                        }
                    );
                let e = performance.now(),
                    t = [
                        await this.checkCodecCapability(
                            'avc1.42E01E',
                            'baseline',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.4D401E',
                            'main',
                            {
                                width: 1920,
                                height: 1080
                            },
                            60,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.64001E',
                            'high',
                            {
                                width: 1920,
                                height: 1080
                            },
                            60,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.58A01E',
                            'extended',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.6E401E',
                            'high10',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.7A401E',
                            'high422',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.7C401E',
                            'high444',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.B0',
                            'main',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.2.6.L93.B0',
                            'main10',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.3.6.L93.B0',
                            'main12',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.4.6.L93.B0',
                            'main444',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.5.6.L93.B0',
                            'main44410',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.B0',
                            'main_level5',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.B0',
                            'main_level4',
                            {
                                width: 1280,
                                height: 720
                            },
                            30,
                            c / 2
                        ),
                        await this.checkCodecCapability(
                            'hvc1.2.6.L93.B0',
                            'main10_level5',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.2.6.L93.B0',
                            'main10_level4',
                            {
                                width: 1280,
                                height: 720
                            },
                            30,
                            c / 2
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.H0',
                            'main_high_tier',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.M0',
                            'main_main_tier',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.B0',
                            'main_8bit',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.B1',
                            'main_10bit',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'av01.0.04M.08',
                            'main',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'av01.1.13H.08',
                            'high',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'av01.2.13M.08',
                            'professional',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            c
                        ),
                        await this.checkCodecCapability(
                            'avc1.42E01E',
                            'baseline',
                            {
                                width: 1280,
                                height: 720
                            },
                            30,
                            c / 2
                        ),
                        await this.checkCodecCapability(
                            'hvc1.1.6.L93.B0',
                            'main',
                            {
                                width: 1280,
                                height: 720
                            },
                            30,
                            c / 2
                        ),
                        await this.checkCodecCapability(
                            'av01.0.04M.08',
                            'main',
                            {
                                width: 1280,
                                height: 720
                            },
                            30,
                            c / 2
                        ),
                        await this.checkCodecCapability(
                            'hvc1.2.6.L93.B0',
                            'main10hdr',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            2 * c
                        ),
                        await this.checkCodecCapability(
                            'av01.1.04H.08',
                            'high',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            2 * c
                        ),
                        await this.checkCodecCapability(
                            'hvc1.2.6.L93.B0',
                            'main10hdrplus',
                            {
                                width: 1920,
                                height: 1080
                            },
                            30,
                            2 * c
                        )
                    ],
                    n = performance.now() - e,
                    o = {
                        capabilities: t,
                        timestamp: performance.now()
                    };
                return (
                    r.default.track(i.rMx.MEDIA_VIDEO_CAPABILITIES_DETECTED, {
                        detection_duration_ms: n,
                        capabilities_json: JSON.stringify(t)
                    }),
                    (this.capabilities = o),
                    (this.isDetecting = !1),
                    (this.detectionPromise = null),
                    (this.hasAttemptedDetection = !0),
                    o
                );
            })()),
            this.detectionPromise
        );
    }
    async getCapabilities() {
        return this.hasAttemptedDetection && (null === this.capabilities || void 0 === this.capabilities)
            ? {
                  capabilities: [],
                  timestamp: performance.now()
              }
            : await this.detectCapabilities();
    }
    isCodecSupported(e, t) {
        var n;
        if (null === this.capabilities || void 0 === this.capabilities) return !1;
        let r = this.capabilities.capabilities.find((n) => n.videoCodec === e && n.videoProfile === t);
        return null != (n = null == r ? void 0 : r.capability.supported) && n;
    }
    constructor() {
        o(this, 'capabilities', null), o(this, 'isDetecting', !1), o(this, 'detectionPromise', null), o(this, 'hasAttemptedDetection', !1);
    }
}
o(u, 'instance', void 0);
let d = u;
