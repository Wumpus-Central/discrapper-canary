n.d(t, { T: () => s });
var i = n(526120),
    l = n(563534),
    r = n(734893),
    a = n(931261);
async function s(e, t) {
    if (null == e || !(0, a.s)(e)) return;
    let n = l.Z.getSettings(e);
    if ((n === l.P && (await (0, i.cP)(e), (n = l.Z.getSettings(e))), n !== l.P && null != n)) {
        if (null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t)) return r.j.TODO;
        if (null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t))
            return r.j.RESOURCE;
    }
}
