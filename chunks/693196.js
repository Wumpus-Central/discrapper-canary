e.d(n, { T: () => a });
var i = e(526120),
    l = e(563534),
    d = e(734893),
    r = e(931261);
async function a(t, n) {
    if (null == t || !(0, r.s)(t)) return;
    let e = l.Z.getSettings(t);
    if ((e === l.P && (await (0, i.cP)(t), (e = l.Z.getSettings(t))), e !== l.P && null != e)) {
        if (null != e.newMemberActions && null != e.newMemberActions.find((t) => t.channelId === n)) return d.j.TODO;
        if (null != e.resourceChannels && null != e.resourceChannels.find((t) => t.channelId === n)) return d.j.RESOURCE;
    }
}
