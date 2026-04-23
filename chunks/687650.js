"use strict";
n.d(t, { H: () => i });
var r = n(73153);
function i(e) {
    let { image: t, file: n, uploadType: i, guildId: s, analyticsSource: a, isTryItOut: o = !1 } = e;
    r.h.dispatch({
        type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
        image: t,
        file: n,
        uploadType: i,
        guildId: s,
        analyticsSource: a,
        isTryItOut: o,
    });
}
