"use strict";
n.d(t, { A: () => h });
var i = n(110259),
    s = n(562465),
    r = n(73153),
    l = n(198982),
    a = n(954571),
    o = n(499785),
    c = n(916882),
    d = n(652215);
n(574454);
var u = n(985018);
let h = {
    resetSuggestions: () => r.h.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        r.h.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
        try {
            let n = await s.Bo.get({
                url: d.Rsh.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            if (n.ok && n.body?.username != null)
                return r.h.dispatch({ type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS", suggestion: n.body, source: e });
        } catch (e) {
            return;
        }
    },
    async fetchSuggestions(e) {
        if ((0, c.E)())
            try {
                r.h.dispatch({ type: "POMELO_SUGGESTIONS_FETCH", usernameSuggestionLoading: !0 });
                let t = await s.Bo.get({ url: d.Rsh.POMELO_SUGGESTIONS, timeout: e, rejectWithError: !0 });
                if (t.ok && t.body?.username != null)
                    return r.h.dispatch({ type: "POMELO_SUGGESTIONS_SUCCESS", suggestion: t.body });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? u.intl.string(u.t.z7c4bP)
                    : e.includes("..")
                      ? u.intl.string(u.t["C7G+gr"])
                      : e.length < 2 || e.length > 32
                        ? u.intl.formatToPlainString(u.t.IpijXA, { maxNum: 32, minNum: 2 })
                        : void 0;
        if (null != c)
            return (
                a.default.track(d.HAw.POMELO_ERRORS, { reason: c, username_error: !0, location: t, one_click_flow: s }),
                r.h.dispatch({ type: "POMELO_ATTEMPT_FAILURE", username: e, error: c })
            );
        try {
            let l = await o.A.post({
                url: n ? d.Rsh.POMELO_ATTEMPT_UNAUTHED : d.Rsh.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                    event: i.NetworkActionNames.POMELO_ATTEMPT,
                    properties: { requested_username: e },
                },
                rejectWithError: !1,
            });
            l.body.taken &&
                a.default.track(d.HAw.POMELO_ERRORS, {
                    reason: "already_taken",
                    username_error: !0,
                    location: t,
                    one_click_flow: s,
                }),
                r.h.dispatch({ type: "POMELO_ATTEMPT_SUCCESS", username: e, taken: l.body.taken });
        } catch (o) {
            let n = new l.LG(o),
                i = n.getAnyErrorMessage() ?? void 0;
            a.default.track(d.HAw.POMELO_ERRORS, { reason: i, username_error: !0, location: t, one_click_flow: s }),
                r.h.dispatch({
                    username: e,
                    type: "POMELO_ATTEMPT_FAILURE",
                    error: null != n.status && n.status < 500 && 401 !== n.status ? i : void 0,
                    statusCode: n.status,
                    retryAfter: n.retryAfter,
                });
        }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.A.post({
                body: e,
                url: d.Rsh.POMELO_CREATE,
                trackedActionData: { event: i.NetworkActionNames.POMELO_CREATE, properties: { one_click_flow: t } },
                rejectWithError: !1,
            });
        return r.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }), n.body;
    },
};
