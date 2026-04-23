n.d(t, { A: () => d });
var i = n(110259),
    s = n(636537),
    r = n(228366),
    a = n(845584),
    o = n(954571),
    l = n(499785),
    u = n(652215),
    g = n(985018);
let d = {
    resetSuggestions: () => r.h.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        r.h.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
        try {
            let n = await s.Bo.get({
                url: u.Rsh.POMELO_SUGGESTIONS_UNAUTHED,
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
            d =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? g.intl.string(g.t.z7c4bP)
                    : e.includes("..")
                      ? g.intl.string(g.t["C7G+gr"])
                      : e.length < 2 || e.length > 32
                        ? g.intl.formatToPlainString(g.t.IpijXA, { maxNum: 32, minNum: 2 })
                        : void 0;
        if (null != d)
            return (
                o.default.track(u.HAw.POMELO_ERRORS, { reason: d, username_error: !0, location: t, one_click_flow: s }),
                r.h.dispatch({ type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", username: e, error: d })
            );
        try {
            let a = await l.A.post({
                url: n ? u.Rsh.POMELO_ATTEMPT_UNAUTHED : u.Rsh.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                    event: i.NetworkActionNames.POMELO_ATTEMPT,
                    properties: { requested_username: e },
                },
                rejectWithError: !1,
            });
            a.body.taken &&
                o.default.track(u.HAw.POMELO_ERRORS, {
                    reason: "already_taken",
                    username_error: !0,
                    location: t,
                    one_click_flow: s,
                }),
                r.h.dispatch({ type: "UNIQUE_USERNAME_ATTEMPT_SUCCESS", username: e, taken: a.body.taken });
        } catch (l) {
            let n = new a.LG(l),
                i = n.getAnyErrorMessage() ?? void 0;
            o.default.track(u.HAw.POMELO_ERRORS, { reason: i, username_error: !0, location: t, one_click_flow: s }),
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
