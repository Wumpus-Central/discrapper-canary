n.d(t, { Z: () => u });
var r = n(243814),
    i = n(570140),
    l = n(569984),
    a = n(626135),
    s = n(996106),
    o = n(914946),
    c = n(981631);
let u = {
    [c.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t, n, r;
            let {
                socket: i,
                args: { quest_id: a },
            } = e;
            (0, o.bu)(i.transport);
            let u = (0, o._f)(i.application),
                d = l.Z.getQuest(a);
            if (null == d || d.config.application.id !== u)
                throw new s.Z({ errorCode: c.lTL.INVALID_COMMAND }, "Quest not found: ".concat(a));
            return {
                quest_id: a,
                is_enrolled: (null == (t = d.userStatus) ? void 0 : t.enrolledAt) != null,
                enrolled_at: null != (r = null == (n = d.userStatus) ? void 0 : n.enrolledAt) ? r : null,
            };
        },
    },
    [c.Etm.QUEST_START_TIMER]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t;
            let {
                socket: n,
                args: { quest_id: r },
            } = e;
            (0, o.bu)(n.transport);
            let u = (0, o._f)(n.application),
                d = l.Z.getQuest(r);
            if (null == d || d.config.application.id !== u)
                throw new s.Z({ errorCode: c.lTL.INVALID_COMMAND }, "Quest not found: ".concat(r));
            if ((null == (t = d.userStatus) ? void 0 : t.enrolledAt) == null)
                throw new s.Z({ errorCode: c.lTL.INVALID_COMMAND }, "User is not enrolled in quest");
            return (
                a.default.track(c.rMx.RPC_QUEST_START_TIMER_CALLED, {
                    application_id: u,
                    quest_id: r,
                }),
                i.Z.dispatch({
                    type: "QUEST_APPLICATION_START_TIMER",
                    questId: r,
                    applicationId: u,
                }),
                { success: !0 }
            );
        },
    },
};
