"use strict";
n.d(t, { A: () => a });
var r = n(417597),
    i = n(287809);
function a(e) {
    return (0, r.bG)(
        [i.default],
        () => null != e && e.isDM() && 1 === e.recipients.length && i.default.getUser(e.recipients[0])?.bot === !0,
    );
}
