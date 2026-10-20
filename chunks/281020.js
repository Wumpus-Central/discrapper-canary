n.d(t, { gk: () => r, zi: () => l });
var i = n(73153);
function r(e, t) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
}
function l(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
}
