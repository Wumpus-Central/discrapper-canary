var i = n(73153),
    r = n(404885);
(n(535820),
    n.d(
        t,
        {},
        {
            B: function (e) {
                i.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
            },
            t: function (e) {
                let { omitUserIds: t, guild: n, channel: s, applicationId: o, inviteTargetType: l } = e;
                return (0, r.u)().then(() => {
                    i.h.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: t ?? new Set(),
                        guild: n,
                        channel: s,
                        applicationId: o,
                        inviteTargetType: l,
                    });
                });
            },
        },
    ));
