l.d(t, { Od: () => c, Xz: () => r, eX: () => h, pu: () => o });
var n = l(636537),
    a = l(228366),
    s = l(913122),
    i = l(652215);
async function r(e) {
    a.h.wait(() => {
        a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
        let t = await n.Bo.post({ url: i.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
        return (
            a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }), t.body
        );
    } catch (l) {
        let t = l instanceof s.LG ? l : new s.LG(l);
        a.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t });
    }
}
async function c(e) {
    a.h.wait(() => {
        a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
    try {
        let t = await n.Bo.get({ url: i.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
        return (
            a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
            null != e && e(t.body),
            t.body
        );
    } catch (t) {
        let e = t instanceof s.LG ? t : new s.LG(t);
        a.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e });
    }
}
async function o() {
    try {
        let e = await n.Bo.get({ url: i.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: !1 });
        return (a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
    } catch (e) {
        return;
    }
}
async function h() {
    a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
    try {
        let e = await n.Bo.post({ url: i.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: !1 });
        return (a.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }), e.body);
    } catch (e) {
        return;
    }
}
