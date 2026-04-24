"use strict";
n.d(t, { Ay: () => E, K2: () => _, Kr: () => c, Lx: () => u, yc: () => d });
var i,
    r,
    s = n(499867),
    a = n(265690),
    o = n(121894);
n(876230);
var l = n(932607);
let d = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
var _ =
        (((i = {}).UNKNOWN = "UNKNOWN"),
        (i.NOT_STARTED = "NOT_STARTED"),
        (i.IN_PROGRESS = "IN_PROGRESS"),
        (i.COMPLETED = "COMPLETED"),
        i),
    u = (((r = {}).NONE = "NONE"), (r.FETCHING = "FETCHING"), (r.SUCCESS = "SUCCESS"), (r.FAILURE = "FAILURE"), r);
let c = (0, a.h)()(
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
                setVideoProgress: (n, i, r) => {
                    let s = Math.max(t().videoProgress[n]?.maxTimestampSec ?? 0, i);
                    (0, o.r)(() =>
                        e({
                            videoProgress: {
                                ...t().videoProgress,
                                [n]: { timestampSec: i, duration: r, maxTimestampSec: s },
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
                        let { [n]: i, ...r } = t().videoProgress;
                        e({ videoProgress: r });
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
    E = c;
