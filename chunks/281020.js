var i = n(73153);
n.d(
    t,
    {},
    {
        gk: function (e, t) {
            i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
        },
        zi: function (e) {
            i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
        },
    },
);
