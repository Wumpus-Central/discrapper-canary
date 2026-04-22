"use strict";
n.d(t, { A: () => r });
var i = n(455207),
    a = n(943667);
function r(e) {
    return (
        !((0, i.MZ)(e) || ((0, a.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
