"use strict";
n.d(t, { Ay: () => d, K2: () => l, Kr: () => c, Lx: () => u, yc: () => o });
var r = n(499867),
    i = n(265690),
    s = n(121894),
    a = n(506774);
n(876230);
let o = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
var l = (function (e) {
        return (
            (e.UNKNOWN = "UNKNOWN"),
            (e.NOT_STARTED = "NOT_STARTED"),
            (e.IN_PROGRESS = "IN_PROGRESS"),
            (e.COMPLETED = "COMPLETED"),
            e
        );
    })({}),
    u = (function (e) {
        return (e.NONE = "NONE"), (e.FETCHING = "FETCHING"), (e.SUCCESS = "SUCCESS"), (e.FAILURE = "FAILURE"), e;
    })({});
let c = (0, i.h)()(
        (0, r.Zr)(
            (e, t) => ({
                volume: 0.3,
                muted: !1,
                transcriptEnabled: !1,
                captionEnabled: !1,
                videoProgress: {},
                transcript: null,
                setVolume: (t) => {
                    (0, s.r)(() => e({ volume: t }));
                },
                setMuted: (t) => {
                    (0, s.r)(() => e({ muted: t }));
                },
                setVideoProgress: (n, r, i) => {
                    let a = Math.max(t().videoProgress[n]?.maxTimestampSec ?? 0, Math.floor(r));
                    (0, s.r)(() =>
                        e({
                            videoProgress: {
                                ...t().videoProgress,
                                [n]: { timestampSec: r, duration: i, maxTimestampSec: a },
                            },
                        }),
                    );
                },
                setTranscriptEnabled: (t) => {
                    (0, s.r)(() => e({ transcriptEnabled: t }));
                },
                setCaptionEnabled: (t) => {
                    (0, s.r)(() => e({ captionEnabled: t }));
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
                    (0, s.r)(() => {
                        let { [n]: r, ...i } = t().videoProgress;
                        e({ videoProgress: i });
                    });
                },
                clearState: () => {
                    (0, s.r)(() => {
                        e({ videoProgress: {} });
                    });
                },
                setTranscriptAsset: (t) => {
                    (0, s.r)(() => {
                        e({ transcript: t });
                    });
                },
            }),
            {
                name: "videoQuestUIState",
                storage: (0, r.KU)(() => ({
                    getItem: (e) => a.w.get(e) ?? null,
                    setItem: (e, t) => a.w.set(e, t),
                    removeItem: (e) => a.w.remove(e),
                })),
                partialize: (e) => ({ volume: e.volume, muted: e.muted, videoProgress: e.videoProgress }),
                version: 0,
            },
        ),
    ),
    d = c;
