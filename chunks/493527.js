var n = i(613412),
    s = i(620632),
    r = i(73153),
    a = i(627784),
    o = i(129230),
    u = i(499785),
    g = i(652215),
    l = i(792996);
i.d(
    t,
    {},
    {
        A: {
            resetSuggestions: () => r.h.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" }),
            async fetchSuggestionsRegistration(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                r.h.dispatch({ type: "UNIQUE_USERNAME_SUGGESTIONS_RESET" });
                try {
                    let i = await s.Bo.get({
                        url: g.Rsh.POMELO_SUGGESTIONS_UNAUTHED,
                        query: null == e ? void 0 : { global_name: e },
                        timeout: t,
                        rejectWithError: !0,
                        failImmediatelyWhenRateLimited: !0,
                    });
                    if (i.body?.username != null)
                        return r.h.dispatch({
                            type: "UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS",
                            suggestion: i.body,
                            source: e,
                        });
                } catch (e) {
                    return;
                }
            },
            async attemptUsername(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    E =
                        !1 === /^[A-Za-z0-9_.]*$/.test(e)
                            ? l.intl.string(l.t.z7c4bP)
                            : e.includes("..")
                              ? l.intl.string(l.t["C7G+gr"])
                              : e.length < 2 || e.length > 32
                                ? l.intl.formatToPlainString(l.t.IpijXA, { maxNum: 32, minNum: 2 })
                                : void 0;
                if (null != E)
                    return (
                        o.default.track(g.HAw.POMELO_ERRORS, {
                            reason: E,
                            username_error: !0,
                            location: t,
                            one_click_flow: s,
                        }),
                        r.h.dispatch({ type: "UNIQUE_USERNAME_ATTEMPT_FAILURE", username: e, error: E })
                    );
                try {
                    let a = await u.A.post({
                        url: i ? g.Rsh.POMELO_ATTEMPT_UNAUTHED : g.Rsh.POMELO_ATTEMPT,
                        body: { username: e },
                        trackedActionData: {
                            event: n.NetworkActionNames.POMELO_ATTEMPT,
                            properties: { requested_username: e },
                        },
                        rejectWithError: !1,
                    });
                    (a.body.taken &&
                        o.default.track(g.HAw.POMELO_ERRORS, {
                            reason: "already_taken",
                            username_error: !0,
                            location: t,
                            one_click_flow: s,
                        }),
                        r.h.dispatch({ type: "UNIQUE_USERNAME_ATTEMPT_SUCCESS", username: e, taken: a.body.taken }));
                } catch (u) {
                    let i = new a.LG(u),
                        n = i.getAnyErrorMessage() ?? void 0;
                    (o.default.track(g.HAw.POMELO_ERRORS, {
                        reason: n,
                        username_error: !0,
                        location: t,
                        one_click_flow: s,
                    }),
                        r.h.dispatch({
                            username: e,
                            type: "UNIQUE_USERNAME_ATTEMPT_FAILURE",
                            error: null != i.status && i.status < 500 && 401 !== i.status ? n : void 0,
                            statusCode: i.status,
                            retryAfter: i.retryAfter,
                        }));
                }
            },
        },
    },
);
