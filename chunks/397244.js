"use strict";
n.d(t, { A: () => s });
var r = n(652215),
    i = n(818348);
function s(e) {
    let { activities: t, status: n, applicationStream: s, voiceChannel: a } = e;
    if (n === i.cl.OFFLINE || n === i.cl.INVISIBLE) return !1;
    let o = t?.filter((e) => e.type !== r.$pd.HANG_STATUS);
    return null != s || null != a || (o?.length ?? 0) > 0;
}
