n.d(t, { M8: () => o, gk: () => r, zi: () => l });
var i = n(228366);
function r(e, t) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
}
function o(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId: e });
}
function l(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
}
