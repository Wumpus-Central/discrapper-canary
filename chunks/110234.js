var l = n(51082),
    i = n(806931);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = null,
                r = null,
                s = null,
                a = !1,
                o = !1;
            switch (e.type) {
                case i.lp.ACTIVITY:
                    break;
                case i.lp.USER:
                    ((n = e.streamId), (s = e.voiceState), (a = e.speaking), (o = e.ringing));
                    break;
                case i.lp.STREAM:
                    ((n = e.streamId), (r = e.stream));
            }
            return {
                streamId: n,
                stream: r,
                speaking: a,
                ringing: o,
                muted: s?.isVoiceMuted() ?? !1,
                deafen: s?.isVoiceDeafened() ?? !1,
                mirror: e.type === i.lp.USER && e.user.id === t,
                hasVideo: (0, l.Ay)(e),
            };
        },
    },
);
