n.d(t, { Z: () => r });
var i = n(231338);
function r(e) {
    var t;
    let { activities: n, status: r, applicationStream: a, voiceChannel: s } = e;
    return r !== i.Sk.OFFLINE && r !== i.Sk.INVISIBLE && (null != a || null != s || (null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0);
}
