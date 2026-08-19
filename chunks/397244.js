"use strict";
n.d(t, { A: () => s });
var l = n(652215),
    i = n(818348);
function s(e) {
    let { activities: t, status: n, applicationStream: s, voiceChannel: r } = e;
    if (n === i.cl.OFFLINE || n === i.cl.INVISIBLE) return !1;
    let a = t?.filter((e) => e.type !== l.$pd.HANG_STATUS);
    return null != s || null != r || (a?.length ?? 0) > 0;
}
