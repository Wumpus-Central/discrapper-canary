"use strict";
n.d(t, { A: () => i });
var a = n(455207),
    r = n(943667);
function i(e) {
    return (
        !((0, a.MZ)(e) || ((0, r.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
