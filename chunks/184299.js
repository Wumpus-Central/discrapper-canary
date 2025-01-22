r.d(n, {
    iF: function () {
        return a;
    },
    iw: function () {
        return i;
    },
    km: function () {
        return d;
    }
});
var i,
    a,
    o = r(877124),
    s = r(65400),
    l = r(731965),
    u = r(433517);
let c = 0.3;
!(function (e) {
    (e.UNKNOWN = 'UNKNOWN'), (e.NOT_STARTED = 'NOT_STARTED'), (e.IN_PROGRESS = 'IN_PROGRESS'), (e.COMPLETED = 'COMPLETED');
})(i || (i = {})),
    !(function (e) {
        (e.NONE = 'NONE'), (e.FETCHING = 'FETCHING'), (e.SUCCESS = 'SUCCESS'), (e.FAILURE = 'FAILURE');
    })(a || (a = {}));
let d = (0, s.F)()(
    (0, o.tJ)(
        (e, n) => ({
            volume: c,
            muted: !1,
            transcriptEnabled: !1,
            captionEnabled: !1,
            fullScreenEnabled: !1,
            videoProgress: {},
            transcript: null,
            setVolume: (n) => {
                (0, l.j)(() => e({ volume: n }));
            },
            setMuted: (n) => {
                (0, l.j)(() => e({ muted: n }));
            },
            setVideoProgress: (r, i, a) => {
                var o, s;
                let u = Math.max(null !== (s = null === (o = n().videoProgress[r]) || void 0 === o ? void 0 : o.maxTimestampSec) && void 0 !== s ? s : 0, Math.floor(i));
                (0, l.j)(() =>
                    e({
                        videoProgress: {
                            ...n().videoProgress,
                            [r]: {
                                timestampSec: i,
                                duration: a,
                                maxTimestampSec: u
                            }
                        }
                    })
                );
            },
            setTranscriptEnabled: (n) => {
                (0, l.j)(() => e({ transcriptEnabled: n }));
            },
            setCaptionEnabled: (n) => {
                (0, l.j)(() => e({ captionEnabled: n }));
            },
            setFullScreenEnabled: (n) => {
                (0, l.j)(() => e({ fullScreenEnabled: n }));
            },
            getVideoProgress: (e) => n().videoProgress[e],
            getVideoProgressState: (e) => {
                let r = n().videoProgress[e];
                return null == r ? 'UNKNOWN' : 0 === r.timestampSec ? 'NOT_STARTED' : r.timestampSec >= r.duration ? 'COMPLETED' : 'IN_PROGRESS';
            },
            resetQuest: (r) => {
                (0, l.j)(() => {
                    let { [r]: i, ...a } = n().videoProgress;
                    e({ videoProgress: a });
                });
            },
            setTranscriptAsset: (n) => {
                (0, l.j)(() => {
                    e({ transcript: n });
                });
            }
        }),
        {
            name: 'videoQuestUIState',
            storage: (0, o.FL)(() => ({
                getItem: (e) => {
                    var n;
                    return null !== (n = u.K.get(e)) && void 0 !== n ? n : null;
                },
                setItem: (e, n) => u.K.set(e, n),
                removeItem: (e) => u.K.remove(e)
            })),
            partialize: (e) => ({
                volume: e.volume,
                muted: e.muted,
                videoProgress: e.videoProgress
            }),
            version: 0
        }
    )
);
n.ZP = d;
