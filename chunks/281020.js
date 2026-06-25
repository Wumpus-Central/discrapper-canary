"use strict";
n.d(t, { M: () => s, g: () => r });
var i = n(228366);
function r(e, t) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: e, accountLinkCallbacks: t });
}
function s(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId: e });
}
