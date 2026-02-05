n.d(t, { A: () => u });
var i = n(179771),
    r = n(73153),
    a = n(859703),
    l = n(792620),
    s = n(954571),
    o = n(636401),
    d = n(90924),
    c = n(652215);
let u = {
    [c.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: i.F.IDENTIFY,
        handler(e) {
            let {
                socket: t,
                args: { quest_id: n },
            } = e;
            (0, d.lG)(t.transport);
            let i = (0, d.D2)(t.application),
                r = a.A.getQuest(n),
                s = (0, l.TP)(r);
            if (null == r || null == s || s !== i)
                throw new o.A({ errorCode: c.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
            return {
                quest_id: n,
                is_enrolled: r.userStatus?.enrolledAt != null,
                enrolled_at: r.userStatus?.enrolledAt ?? null,
            };
        },
    },
    [c.e$_.QUEST_START_TIMER]: {
        scope: i.F.IDENTIFY,
        handler(e) {
            let {
                socket: t,
                args: { quest_id: n },
            } = e;
            (0, d.lG)(t.transport);
            let i = (0, d.D2)(t.application),
                u = a.A.getQuest(n),
                A = (0, l.vS)(u);
            if (null == u || null == A || A !== i)
                throw new o.A({ errorCode: c.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
            if (u.userStatus?.enrolledAt == null)
                throw new o.A({ errorCode: c.Lw6.INVALID_COMMAND }, "User is not enrolled in quest");
            return (
                s.default.track(c.HAw.RPC_QUEST_START_TIMER_CALLED, { application_id: i, quest_id: n }),
                r.h.dispatch({ type: "QUEST_APPLICATION_START_TIMER", questId: n, applicationId: i }),
                { success: !0 }
            );
        },
    },
};
