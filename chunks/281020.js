var n = i(73153);
i.d(
    t,
    {},
    {
        gk: function (e, t) {
            n.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
        },
        zi: function (e) {
            n.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
        },
    },
);
