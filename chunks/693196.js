n.d(t, { T: () => a });
var i = n(526120),
    r = n(563534),
    l = n(734893),
    s = n(931261);
async function a(e, t) {
    if (null == e || !(0, s.s)(e)) return;
    let n = r.Z.getSettings(e);
    if ((n === r.P && (await (0, i.cP)(e), (n = r.Z.getSettings(e))), n !== r.P && null != n)) {
        if (null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t)) return l.j.TODO;
        if (null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t)) return l.j.RESOURCE;
    }
}
