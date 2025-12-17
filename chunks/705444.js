n.d(t, { Z: () => d });
var r = n(243814),
    i = n(570140),
    l = n(616022),
    a = n(254579),
    o = n(626135),
    s = n(996106),
    c = n(914946),
    u = n(981631);
let d = {
    [u.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t, n, r;
            let {
                socket: i,
                args: { quest_id: o },
            } = e;
            (0, c.bu)(i.transport);
            let d = (0, c._f)(i.application),
                p = l.Z.getQuest(o),
                f = (0, a.nY)(p);
            if (null == p || null == f || f !== d)
                throw new s.Z({ errorCode: u.lTL.INVALID_COMMAND }, "Quest not found: ".concat(o));
            return {
                quest_id: o,
                is_enrolled: (null == (t = p.userStatus) ? void 0 : t.enrolledAt) != null,
                enrolled_at: null != (r = null == (n = p.userStatus) ? void 0 : n.enrolledAt) ? r : null,
            };
        },
    },
    [u.Etm.QUEST_START_TIMER]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t;
            let {
                socket: n,
                args: { quest_id: r },
            } = e;
            (0, c.bu)(n.transport);
            let d = (0, c._f)(n.application),
                p = l.Z.getQuest(r),
                f = (0, a.Mo)(p);
            if (null == p || null == f || f !== d)
                throw new s.Z({ errorCode: u.lTL.INVALID_COMMAND }, "Quest not found: ".concat(r));
            if ((null == (t = p.userStatus) ? void 0 : t.enrolledAt) == null)
                throw new s.Z({ errorCode: u.lTL.INVALID_COMMAND }, "User is not enrolled in quest");
            return (
                o.default.track(u.rMx.RPC_QUEST_START_TIMER_CALLED, {
                    application_id: d,
                    quest_id: r,
                }),
                i.Z.dispatch({
                    type: "QUEST_APPLICATION_START_TIMER",
                    questId: r,
                    applicationId: d,
                }),
                { success: !0 }
            );
        },
    },
};
