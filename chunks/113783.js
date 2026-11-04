var i = n(855986),
    r = n(996439),
    a = n(63995),
    s = n(597886);
n.d(
    t,
    {},
    {
        E5: function (e, t) {
            let [n] = (0, i.bG)(
                [a.A],
                () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)],
                [e, t],
                r.D,
            );
            return n;
        },
        J2: function (e) {
            let [t] = (0, i.bG)(
                [a.A],
                () => [a.A.getMutableRequestToSpeakParticipants(e), a.A.getRequestToSpeakParticipantsVersion(e)],
                [e],
                r.D,
            );
            return t;
        },
        uy: function (e) {
            return (0, i.bG)(
                [a.A],
                () => a.A.getMutableParticipants(e, s.ip.SPEAKER).filter((e) => e.type === s.wY.VOICE).length,
                [e],
            );
        },
        zy: function (e, t) {
            return (0, i.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t]);
        },
    },
);
