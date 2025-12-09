n.d(t, { Z: () => a });
var r = n(981631),
    i = n(231338);
function a(e) {
    var t;
    let { activities: n, status: a, applicationStream: o, voiceChannel: s } = e;
    if (a === i.Sk.OFFLINE || a === i.Sk.INVISIBLE) return !1;
    let l = null == n ? void 0 : n.filter((e) => e.type !== r.IIU.HANG_STATUS || null != s);
    return null != o || null != s || (null != (t = null == l ? void 0 : l.length) ? t : 0) > 0;
}
