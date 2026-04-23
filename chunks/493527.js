"use strict";
n.d(t, { A: () => u });
var i = n(110259),
    s = n(562465),
    r = n(73153),
    l = n(198982),
    a = n(954571),
    o = n(499785),
    c = n(652215),
    d = n(985018);
let u = {
    resetSuggestions: () => r.h.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        r.h.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
        try {
            let n = await s.Bo.get({
                url: c.Rsh.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            if (n.ok && n.body?.username != null)
                return r.h.dispatch({
                    type: "UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS",
                    suggestion: n.body,
                    source: e,
                });
        } catch (e) {
            return;
        }
    },
    async attemptUsername(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? d.intl.string(d.t.z7c4bP)
                    : e.includes("..")
                      ? d.intl.string(d.t["C7G+gr"])
                      : e.length < 2 || e.length > 32
                        ? d.intl.formatToPlainString(d.t.IpijXA, { maxNum: 32, minNum: 2 })
                        : void 0;
        if (null != u)
            return (
                a.default.track(c.HAw.POMELO_ERRORS, { reason: u, username_error: !0, location: t, one_click_flow: s }),
                r.h.dispatch({ type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", username: e, error: u })
            );
        try {
            let l = await o.A.post({
                url: n ? c.Rsh.POMELO_ATTEMPT_UNAUTHED : c.Rsh.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                    event: i.NetworkActionNames.POMELO_ATTEMPT,
                    properties: { requested_username: e },
                },
                rejectWithError: !1,
            });
            l.body.taken &&
                a.default.track(c.HAw.POMELO_ERRORS, {
                    reason: "already_taken",
                    username_error: !0,
                    location: t,
                    one_click_flow: s,
                }),
                r.h.dispatch({ type: "UNIQUE_USERNAME_ATTEMPT_SUCCESS", username: e, taken: l.body.taken });
        } catch (o) {
            let n = new l.LG(o),
                i = n.getAnyErrorMessage() ?? void 0;
            a.default.track(c.HAw.POMELO_ERRORS, { reason: i, username_error: !0, location: t, one_click_flow: s }),
                r.h.dispatch({
                    username: e,
                    type: "UNIQUE_USERNAME_ATTEMPT_FAILURE",
                    error: null != n.status && n.status < 500 && 401 !== n.status ? i : void 0,
                    statusCode: n.status,
                    retryAfter: n.retryAfter,
                });
        }
    },
};
