"use strict";
n.d(t, { A: () => s });
var l = n(702841),
    i = n(287809);
function s(e) {
    return (0, l.bG)(
        [i.default],
        () => null != e && e.isDM() && 1 === e.recipients.length && i.default.getUser(e.recipients[0])?.bot === !0,
    );
}
