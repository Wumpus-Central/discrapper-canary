n.d(t, { Z: () => d });
var r = n(243814),
    i = n(570140),
    l = n(509212),
    a = n(569984),
    s = n(626135),
    o = n(996106),
    c = n(914946),
    u = n(981631);
let d = {
    [u.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: r.x.IDENTIFY,
        handler(e) {
            var t, n, r;
            let {
                socket: i,
                args: { quest_id: s },
            } = e;
            (0, c.bu)(i.transport);
            let d = (0, c._f)(i.application),
                p = a.Z.getQuest(s),
                f = (0, l.nY)(p);
            if (null == p || null == f || f !== d)
                throw new o.Z({ errorCode: u.lTL.INVALID_COMMAND }, "Quest not found: ".concat(s));
            return {
                quest_id: s,
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
                p = a.Z.getQuest(r),
                f = (0, l.Mo)(p);
            if (null == p || null == f || f !== d)
                throw new o.Z({ errorCode: u.lTL.INVALID_COMMAND }, "Quest not found: ".concat(r));
            if ((null == (t = p.userStatus) ? void 0 : t.enrolledAt) == null)
                throw new o.Z({ errorCode: u.lTL.INVALID_COMMAND }, "User is not enrolled in quest");
            return (
                s.default.track(u.rMx.RPC_QUEST_START_TIMER_CALLED, {
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
