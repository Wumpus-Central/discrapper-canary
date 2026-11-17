var n = l(620632),
    a = l(73153),
    s = l(627784),
    i = l(856383),
    r = l(652215);
l.d(
    t,
    {},
    {
        Od: async function (e) {
            a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
            try {
                let t = await n.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
                return (
                    a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
                    null != e && e(t.body),
                    t.body
                );
            } catch (t) {
                let e = t instanceof s.LG ? t : new s.LG(t);
                (i.A.captureException(e, { tags: { app_context: "achievements" } }),
                    a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e }));
            }
        },
        Xz: async function (e) {
            a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
            try {
                let t = await n.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
                return (
                    a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }),
                    t.body
                );
            } catch (l) {
                let t = l instanceof s.LG ? l : new s.LG(l);
                (i.A.captureException(t, { tags: { app_context: "achievements" } }),
                    a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t }));
            }
        },
        eX: async function () {
            a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
            try {
                let e = await n.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: !1 });
                return (a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
            } catch (e) {
                return;
            }
        },
        pu: async function () {
            try {
                let e = await n.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: !1 });
                return (a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
            } catch (e) {
                return;
            }
        },
    },
);
