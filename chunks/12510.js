n.d(t, { Od: () => c, Xz: () => i, eX: () => h, pu: () => o });
var a = n(636537),
    l = n(228366),
    s = n(913122),
    r = n(652215);
async function i(e) {
    l.h.wait(() => {
        l.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
        let t = await a.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
        return (
            l.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }), t.body
        );
    } catch (n) {
        let t = n instanceof s.LG ? n : new s.LG(n);
        l.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t });
    }
}
async function c(e) {
    l.h.wait(() => {
        l.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
    try {
        let t = await a.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
        return (
            l.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
            null != e && e(t.body),
            t.body
        );
    } catch (t) {
        let e = t instanceof s.LG ? t : new s.LG(t);
        l.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e });
    }
}
async function o() {
    try {
        let e = await a.Bo.get({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: !1 });
        return l.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body;
    } catch (e) {
        return;
    }
}
async function h() {
    l.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
    try {
        let e = await a.Bo.post({ url: r.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: !1 });
        return l.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body;
    } catch (e) {
        return;
    }
}
