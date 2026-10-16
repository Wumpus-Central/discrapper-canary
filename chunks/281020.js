n.d(t, { gk: () => l, zi: () => r });
var i = n(73153);
function l(e, t) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
}
function r(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
}
