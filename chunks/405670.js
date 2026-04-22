"use strict";
n.d(t, { Ay: () => f, K2: () => d, Kr: () => _, Lx: () => c, yc: () => u });
var r,
    i,
    s = n(499867),
    a = n(265690),
    o = n(121894);
n(876230);
var l = n(932607);
let u = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
var d =
        (((r = {}).UNKNOWN = "UNKNOWN"),
        (r.NOT_STARTED = "NOT_STARTED"),
        (r.IN_PROGRESS = "IN_PROGRESS"),
        (r.COMPLETED = "COMPLETED"),
        r),
    c = (((i = {}).NONE = "NONE"), (i.FETCHING = "FETCHING"), (i.SUCCESS = "SUCCESS"), (i.FAILURE = "FAILURE"), i);
let _ = (0, a.h)()(
        (0, s.Zr)(
            (e, t) => ({
                volume: 0.3,
                muted: !1,
                transcriptEnabled: !1,
                captionEnabled: !1,
                videoProgress: {},
                transcript: null,
                setVolume: (t) => {
                    (0, o.r)(() => e({ volume: t }));
                },
                setMuted: (t) => {
                    (0, o.r)(() => e({ muted: t }));
                },
                setVideoProgress: (n, r, i) => {
                    let s = Math.max(t().videoProgress[n]?.maxTimestampSec ?? 0, Math.floor(r));
                    (0, o.r)(() =>
                        e({
                            videoProgress: {
                                ...t().videoProgress,
                                [n]: { timestampSec: r, duration: i, maxTimestampSec: s },
                            },
                        }),
                    );
                },
                setTranscriptEnabled: (t) => {
                    (0, o.r)(() => e({ transcriptEnabled: t }));
                },
                setCaptionEnabled: (t) => {
                    (0, o.r)(() => e({ captionEnabled: t }));
                },
                getVideoProgress: (e) => t().videoProgress[e],
                getVideoProgressState: (e) => {
                    let n = t().videoProgress[e];
                    return null == n
                        ? "UNKNOWN"
                        : 0 === n.timestampSec
                          ? "NOT_STARTED"
                          : n.timestampSec >= n.duration
                            ? "COMPLETED"
                            : "IN_PROGRESS";
                },
                resetQuest: (n) => {
                    (0, o.r)(() => {
                        let { [n]: r, ...i } = t().videoProgress;
                        e({ videoProgress: i });
                    });
                },
                clearState: () => {
                    (0, o.r)(() => {
                        e({ videoProgress: {} });
                    });
                },
                setTranscriptAsset: (t) => {
                    (0, o.r)(() => {
                        e({ transcript: t });
                    });
                },
            }),
            {
                name: "videoQuestUIState",
                storage: (0, s.KU)(() => l.A),
                partialize: (e) => ({ volume: e.volume, muted: e.muted, videoProgress: e.videoProgress }),
                version: 0,
            },
        ),
    ),
    f = _;
