"use strict";
n.d(t, { t: () => d });
var r = n(624694),
    i = n(430452),
    s = n(383501),
    a = n(927813),
    o = n(487329),
    l = n(601900);
let u = 10 * a.A.Millis.SECOND,
    d = {
        getActiveErrors: () => {
            if (
                (s.A.getRTCConnection()?.getDurationSeconds() ?? 0) < 30 ||
                performance.now() - i.Ay.getLastAudioInputDeviceChangeTimestamp() < u
            )
                return;
            let e =
                r.A.getConnectionStats(s.A.getRTCConnection()?.getMediaEngineConnectionId())?.stats.rtp.outbound.find(
                    (e) => "audio" === e.type,
                )?.sampleRateMismatchPercent ?? 0;
            if (Math.abs(e) > 30)
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
