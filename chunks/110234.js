var l = n(51082),
    i = n(806931);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = null,
                r = null,
                a = null,
                s = !1,
                o = !1;
            switch (e.type) {
                case i.lp.ACTIVITY:
                    break;
                case i.lp.USER:
                    ((n = e.streamId), (a = e.voiceState), (s = e.speaking), (o = e.ringing));
                    break;
                case i.lp.STREAM:
                    ((n = e.streamId), (r = e.stream));
            }
            return {
                streamId: n,
                stream: r,
                speaking: s,
                ringing: o,
                muted: a?.isVoiceMuted() ?? !1,
                deafen: a?.isVoiceDeafened() ?? !1,
                mirror: e.type === i.lp.USER && e.user.id === t,
                hasVideo: (0, l.Ay)(e),
            };
        },
    },
);
