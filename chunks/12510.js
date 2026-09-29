l.d(t, { Od: () => o, Xz: () => c, eX: () => u, pu: () => h });
var n = l(636537),
    a = l(228366),
    s = l(913122),
    i = l(38405),
    r = l(652215);
async function c(e) {
    a.h.wait(() => {
        a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
        let t = await n.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
        return (
            a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }), t.body
        );
    } catch (l) {
        let t = l instanceof s.LG ? l : new s.LG(l);
        (i.A.captureException(t, { tags: { app_context: "achievements" } }),
            a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t }));
    }
}
async function o(e) {
    a.h.wait(() => {
        a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
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
}
async function h() {
    try {
        let e = await n.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: !1 });
        return (a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
    } catch (e) {
        return;
    }
}
async function u() {
    a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
    try {
        let e = await n.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: !1 });
        return (a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
    } catch (e) {
        return;
    }
}
