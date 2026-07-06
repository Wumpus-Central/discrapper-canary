n.d(t, { M8: () => r, gk: () => l, zi: () => o });
var i = n(228366);
function l(e, t) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
}
function r(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId: e });
}
function o(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
}
