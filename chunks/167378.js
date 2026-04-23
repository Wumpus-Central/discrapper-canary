"use strict";
n.d(t, { A: () => a });
var r = n(311907),
    i = n(773669),
    s = n(985018);
function a(e) {
    let t = (0, r.bG)([i.default], () => i.default.locale.startsWith("en-"));
    return ":pizza:" === e && t ? s.intl.formatToPlainString(s.t["1knDPI"], { emojiName: e }) : e;
}
