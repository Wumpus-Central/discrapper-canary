var a = l(620632),
    n = l(73153),
    s = l(627784),
    i = l(856383),
    r = l(652215);
l.d(
    t,
    {},
    {
        Od: async function (e) {
            n.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
            try {
                let t = await a.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
                return (
                    n.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
                    null != e && e(t.body),
                    t.body
                );
            } catch (t) {
                let e = t instanceof s.LG ? t : new s.LG(t);
                (i.A.captureException(e, { tags: { app_context: "achievements" } }),
                    n.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e }));
            }
        },
        Xz: async function (e) {
            n.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
            try {
                let t = await a.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
                return (
                    n.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }),
                    t.body
                );
            } catch (l) {
                let t = l instanceof s.LG ? l : new s.LG(l);
                (i.A.captureException(t, { tags: { app_context: "achievements" } }),
                    n.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t }));
            }
        },
        eX: async function () {
            n.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
            try {
                let e = await a.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: !1 });
                return (n.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
            } catch (e) {
                return;
            }
        },
        pu: async function () {
            try {
                let e = await a.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: !1 });
                return (n.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
            } catch (e) {
                return;
            }
        },
    },
);
