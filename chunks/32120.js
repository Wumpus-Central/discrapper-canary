n.d(t, {
    A: () => h,
}),
    n(747238);
var r = n(110259),
    i = n(562465),
    s = n(73153),
    l = n(198982),
    a = n(954571),
    o = n(499785),
    c = n(916882),
    u = n(652215);
n(574454);
var d = n(985018);
let h = {
    resetSuggestions: () =>
        s.h.dispatch({
            type: "POMELO_SUGGESTIONS_RESET",
        }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        s.h.dispatch({
            type: "POMELO_SUGGESTIONS_RESET",
        });
        try {
            var n;
            let r = await i.Bo.get({
                url: u.Rsh.POMELO_SUGGESTIONS_UNAUTHED,
                query:
                    null == e
                        ? void 0
                        : {
                              global_name: e,
                          },
                timeout: t,
                rejectWithError: !0,
                failImmediatelyWhenRateLimited: !0,
            });
            if (r.ok && (null == (n = r.body) ? void 0 : n.username) != null)
                return s.h.dispatch({
                    type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                    suggestion: r.body,
                    source: e,
                });
        } catch (e) {
            return;
        }
    },
    async fetchSuggestions(e) {
        if ((0, c.E)())
            try {
                var t;
                s.h.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !0,
                });
                let n = await i.Bo.get({
                    url: u.Rsh.POMELO_SUGGESTIONS,
                    timeout: e,
                    rejectWithError: !0,
                });
                if (n.ok && (null == (t = n.body) ? void 0 : t.username) != null)
                    return s.h.dispatch({
                        type: "POMELO_SUGGESTIONS_SUCCESS",
                        suggestion: n.body,
                    });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            h =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? d.intl.string(d.t.z7c4bP)
                    : e.includes("..")
                      ? d.intl.string(d.t["C7G+gr"])
                      : e.length < 2 || e.length > 32
                        ? d.intl.formatToPlainString(d.t.IpijXA, {
                              maxNum: 32,
                              minNum: 2,
                          })
                        : void 0;
        if (null != h)
            return (
                a.default.track(u.HAw.POMELO_ERRORS, {
                    reason: h,
                    username_error: !0,
                    location: n,
                    one_click_flow: c,
                }),
                s.h.dispatch({
                    type: "POMELO_ATTEMPT_FAILURE",
                    username: e,
                    error: h,
                })
            );
        try {
            let t = await o.A.post({
                url: i ? u.Rsh.POMELO_ATTEMPT_UNAUTHED : u.Rsh.POMELO_ATTEMPT,
                body: {
                    username: e,
                },
                trackedActionData: {
                    event: r.NetworkActionNames.POMELO_ATTEMPT,
                    properties: {
                        requested_username: e,
                    },
                },
                rejectWithError: !1,
            });
            t.body.taken &&
                a.default.track(u.HAw.POMELO_ERRORS, {
                    reason: "already_taken",
                    username_error: !0,
                    location: n,
                    one_click_flow: c,
                }),
                s.h.dispatch({
                    type: "POMELO_ATTEMPT_SUCCESS",
                    username: e,
                    taken: t.body.taken,
                });
        } catch (o) {
            let r = new l.LG(o),
                i = null != (t = r.getAnyErrorMessage()) ? t : void 0;
            a.default.track(u.HAw.POMELO_ERRORS, {
                reason: i,
                username_error: !0,
                location: n,
                one_click_flow: c,
            }),
                s.h.dispatch({
                    username: e,
                    type: "POMELO_ATTEMPT_FAILURE",
                    error: null != r.status && r.status < 500 && 401 !== r.status ? i : void 0,
                    statusCode: r.status,
                    retryAfter: r.retryAfter,
                });
        }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.A.post({
                body: e,
                url: u.Rsh.POMELO_CREATE,
                trackedActionData: {
                    event: r.NetworkActionNames.POMELO_CREATE,
                    properties: {
                        one_click_flow: t,
                    },
                },
                rejectWithError: !1,
            });
        return (
            s.h.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: n.body,
            }),
            n.body
        );
    },
};
