n.d(t, { A: () => A });
var i = n(179771),
    r = n(73153),
    a = n(859703),
    l = n(639214),
    s = n(792620),
    o = n(954571),
    d = n(636401),
    u = n(90924),
    c = n(652215);
let A = {
    [c.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
        scope: i.F.IDENTIFY,
        handler(e) {
            let {
                socket: t,
                args: { quest_id: n },
            } = e;
            (0, u.lG)(t.transport);
            let i = (0, u.D2)(t.application),
                r = a.A.getQuest(n),
                l = (0, s.TP)(r);
            if (null == r || null == l || l !== i)
                throw new d.A({ errorCode: c.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
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
            (0, u.lG)(t.transport);
            let i = (0, u.D2)(t.application),
                l = a.A.getQuest(n),
                A = (0, s.vS)(l);
            if (null == l || null == A || A !== i)
                throw new d.A({ errorCode: c.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
            if (l.userStatus?.enrolledAt == null)
                throw new d.A({ errorCode: c.Lw6.INVALID_COMMAND }, "User is not enrolled in quest");
            return (
                o.default.track(c.HAw.RPC_QUEST_START_TIMER_CALLED, { application_id: i, quest_id: n }),
                r.h.dispatch({ type: "QUEST_APPLICATION_START_TIMER", questId: n, applicationId: i }),
                { success: !0 }
            );
        },
    },
    [c.e$_.GET_QUESTS]: {
        scope: i.F.IDENTIFY,
        handler(e) {
            let { socket: t } = e;
            (0, u.lG)(t.transport);
            let n = (0, u.D2)(t.application);
            return {
                quests: (0, l.jm)(a.A.quests, n, !0)
                    .map((e) => ({
                        quest_id: e.id,
                        enrolled_at: e.userStatus?.enrolledAt ?? null,
                        external_cta_url: e.config.ctaConfig.link,
                    }))
                    .sort((e, t) =>
                        null == e.enrolled_at && null == t.enrolled_at
                            ? 0
                            : null == e.enrolled_at
                              ? 1
                              : null == t.enrolled_at
                                ? -1
                                : new Date(e.enrolled_at).getTime() - new Date(t.enrolled_at).getTime(),
                    ),
            };
        },
    },
};
