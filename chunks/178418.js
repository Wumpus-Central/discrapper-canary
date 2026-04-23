"use strict";
i.d(t, { c: () => a });
var r = i(734057);
function a(e, t) {
    let i = r.A.getChannel(t);
    return null != i && e.bot && i.isPrivate() && null == i.rawRecipients.find((t) => t.id === e.id);
}
