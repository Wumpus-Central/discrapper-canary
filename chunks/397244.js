"use strict";
n.d(t, { A: () => a });
var r = n(652215),
    i = n(818348);
function a(e) {
    let { activities: t, status: n, applicationStream: a, voiceChannel: s } = e;
    if (n === i.cl.OFFLINE || n === i.cl.INVISIBLE) return !1;
    let o = t?.filter((e) => e.type !== r.$pd.HANG_STATUS || null != s);
    return null != a || null != s || (o?.length ?? 0) > 0;
}
