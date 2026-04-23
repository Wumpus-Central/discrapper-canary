"use strict";
n.d(t, { A: () => s });
var l = n(455207),
    a = n(943667);
function s(e) {
    return (
        !((0, l.MZ)(e) || ((0, a.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
