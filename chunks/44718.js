"use strict";
n.d(t, { t: () => _ });
var r = n(624694),
    i = n(430452),
    a = n(383501),
    s = n(927813),
    o = n(709710),
    l = n(601900);
let u = 30,
    c = 10 * s.A.Millis.SECOND,
    d = 30,
    _ = {
        getActiveErrors: () => {
            if (
                (a.A.getRTCConnection()?.getDurationSeconds() ?? 0) < u ||
                performance.now() - i.Ay.getLastAudioInputDeviceChangeTimestamp() < c
            )
                return;
            let e =
                r.A.getConnectionStats(a.A.getRTCConnection()?.getMediaEngineConnectionId())?.stats.rtp.outbound.find(
                    (e) => "audio" === e.type,
                )?.sampleRateMismatchPercent ?? 0;
            if (Math.abs(e) > d)
                return [
                    {
                        type: o.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                        audioCaptureSampleRateMismatchPercent: e,
                        ...(0, l.jY)(),
                    },
                ];
        },
        makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
    };
