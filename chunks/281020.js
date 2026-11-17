var i = n(73153);
n.d(
    e,
    {},
    {
        gk: function (t, e) {
            i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: t, accountLinkCallbacks: e });
        },
        zi: function (t) {
            i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: t });
        },
    },
);
