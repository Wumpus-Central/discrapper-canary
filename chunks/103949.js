n.d(t, {
    A: () => d,
});
var r = n(179771),
    i = n(73153),
    l = n(859703),
    a = n(792620),
    s = n(954571),
    o = n(636401),
    c = n(90924),
    u = n(652215);
let d = {
    [u.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: r.F.IDENTIFY,
        handler(e) {
            var t, n, r;
            let {
                socket: i,
                args: { quest_id: s },
            } = e;
            (0, c.lG)(i.transport);
            let d = (0, c.D2)(i.application),
                p = l.A.getQuest(s),
                f = (0, a.TP)(p);
            if (null == p || null == f || f !== d)
                throw new o.A(
                    {
                        errorCode: u.Lw6.INVALID_COMMAND,
                    },
                    "Quest not found: ".concat(s),
                );
            return {
                quest_id: s,
                is_enrolled: (null == (n = p.userStatus) ? void 0 : n.enrolledAt) != null,
                enrolled_at: null != (t = null == (r = p.userStatus) ? void 0 : r.enrolledAt) ? t : null,
            };
        },
    },
    [u.e$_.QUEST_START_TIMER]: {
        scope: r.F.IDENTIFY,
        handler(e) {
            var t;
            let {
                socket: n,
                args: { quest_id: r },
            } = e;
            (0, c.lG)(n.transport);
            let d = (0, c.D2)(n.application),
                p = l.A.getQuest(r),
                f = (0, a.vS)(p);
            if (null == p || null == f || f !== d)
                throw new o.A(
                    {
                        errorCode: u.Lw6.INVALID_COMMAND,
                    },
                    "Quest not found: ".concat(r),
                );
            if ((null == (t = p.userStatus) ? void 0 : t.enrolledAt) == null)
                throw new o.A(
                    {
                        errorCode: u.Lw6.INVALID_COMMAND,
                    },
                    "User is not enrolled in quest",
                );
            return (
                s.default.track(u.HAw.RPC_QUEST_START_TIMER_CALLED, {
                    application_id: d,
                    quest_id: r,
                }),
                i.h.dispatch({
                    type: "QUEST_APPLICATION_START_TIMER",
                    questId: r,
                    applicationId: d,
                }),
                {
                    success: !0,
                }
            );
        },
    },
};
