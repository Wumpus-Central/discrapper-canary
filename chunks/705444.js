n.d(t, { Z: () => c });
var r = n(243814),
    i = n(570140),
    l = n(569984),
    a = n(996106),
    o = n(914946),
    s = n(981631);
let c = {
    [s.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t, n, r;
            let {
                socket: i,
                args: { quest_id: c },
            } = e;
            (0, o.bu)(i.transport);
            let u = (0, o._f)(i.application),
                d = l.Z.getQuest(c);
            if (null == d || d.config.application.id !== u)
                throw new a.Z({ errorCode: s.lTL.INVALID_COMMAND }, "Quest not found: ".concat(c));
            return {
                quest_id: c,
                is_enrolled: (null == (t = d.userStatus) ? void 0 : t.enrolledAt) != null,
                enrolled_at: null != (r = null == (n = d.userStatus) ? void 0 : n.enrolledAt) ? r : null,
            };
        },
    },
    [s.Etm.QUEST_START_TIMER]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t;
            let {
                socket: n,
                args: { quest_id: r },
            } = e;
            (0, o.bu)(n.transport);
            let c = (0, o._f)(n.application),
                u = l.Z.getQuest(r);
            if (null == u || u.config.application.id !== c)
                throw new a.Z({ errorCode: s.lTL.INVALID_COMMAND }, "Quest not found: ".concat(r));
            if ((null == (t = u.userStatus) ? void 0 : t.enrolledAt) == null)
                throw new a.Z({ errorCode: s.lTL.INVALID_COMMAND }, "User is not enrolled in quest");
            return (
                i.Z.dispatch({
                    type: "QUEST_APPLICATION_START_TIMER",
                    questId: r,
                    applicationId: c,
                }),
                { success: !0 }
            );
        },
    },
};
