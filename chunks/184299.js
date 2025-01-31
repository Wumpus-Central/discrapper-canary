n.d(t, {
    ZP: () => d,
    iF: () => u,
    iw: () => l,
    km: () => c
});
var i = n(877124),
    r = n(65400),
    a = n(731965),
    s = n(433517);
let o = 0.3;
var l = (function (e) {
        return (e.UNKNOWN = 'UNKNOWN'), (e.NOT_STARTED = 'NOT_STARTED'), (e.IN_PROGRESS = 'IN_PROGRESS'), (e.COMPLETED = 'COMPLETED'), e;
    })({}),
    u = (function (e) {
        return (e.NONE = 'NONE'), (e.FETCHING = 'FETCHING'), (e.SUCCESS = 'SUCCESS'), (e.FAILURE = 'FAILURE'), e;
    })({});
let c = (0, r.F)()(
        (0, i.tJ)(
            (e, t) => ({
                volume: o,
                muted: !1,
                transcriptEnabled: !1,
                captionEnabled: !1,
                fullScreenEnabled: !1,
                videoProgress: {},
                transcript: null,
                setVolume: (t) => {
                    (0, a.j)(() => e({ volume: t }));
                },
                setMuted: (t) => {
                    (0, a.j)(() => e({ muted: t }));
                },
                setVideoProgress: (n, i, r) => {
                    var s, o;
                    let l = Math.max(null !== (o = null === (s = t().videoProgress[n]) || void 0 === s ? void 0 : s.maxTimestampSec) && void 0 !== o ? o : 0, Math.floor(i));
                    (0, a.j)(() =>
                        e({
                            videoProgress: {
                                ...t().videoProgress,
                                [n]: {
                                    timestampSec: i,
                                    duration: r,
                                    maxTimestampSec: l
                                }
                            }
                        })
                    );
                },
                setTranscriptEnabled: (t) => {
                    (0, a.j)(() => e({ transcriptEnabled: t }));
                },
                setCaptionEnabled: (t) => {
                    (0, a.j)(() => e({ captionEnabled: t }));
                },
                setFullScreenEnabled: (t) => {
                    (0, a.j)(() => e({ fullScreenEnabled: t }));
                },
                getVideoProgress: (e) => t().videoProgress[e],
                getVideoProgressState: (e) => {
                    let n = t().videoProgress[e];
                    return null == n ? 'UNKNOWN' : 0 === n.timestampSec ? 'NOT_STARTED' : n.timestampSec >= n.duration ? 'COMPLETED' : 'IN_PROGRESS';
                },
                resetQuest: (n) => {
                    (0, a.j)(() => {
                        let { [n]: i, ...r } = t().videoProgress;
                        e({ videoProgress: r });
                    });
                },
                setTranscriptAsset: (t) => {
                    (0, a.j)(() => {
                        e({ transcript: t });
                    });
                }
            }),
            {
                name: 'videoQuestUIState',
                storage: (0, i.FL)(() => ({
                    getItem: (e) => {
                        var t;
                        return null !== (t = s.K.get(e)) && void 0 !== t ? t : null;
                    },
                    setItem: (e, t) => s.K.set(e, t),
                    removeItem: (e) => s.K.remove(e)
                })),
                partialize: (e) => ({
                    volume: e.volume,
                    muted: e.muted,
                    videoProgress: e.videoProgress
                }),
                version: 0
            }
        )
    ),
    d = c;
