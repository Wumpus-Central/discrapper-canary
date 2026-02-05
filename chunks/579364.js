"use strict";
function r(e) {
    return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
n.d(t, { w: () => r });
