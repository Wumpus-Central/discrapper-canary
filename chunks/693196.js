n.d(t, { T: () => a });
var i = n(526120),
    l = n(563534),
    r = n(734893),
    s = n(931261);
async function a(e, t) {
    if (null == e || !(0, s.s)(e)) return;
    let n = l.Z.getSettings(e);
    if ((n === l.P && (await (0, i.cP)(e), (n = l.Z.getSettings(e))), n !== l.P && null != n)) {
        if (null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t)) return r.j.TODO;
        if (null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t)) return r.j.RESOURCE;
    }
}
