n.d(t, { T: () => l });
var i = n(526120),
    d = n(563534),
    r = n(734893),
    a = n(931261);
async function l(e, t) {
    if (null == e || !(0, a.s)(e)) return;
    let n = d.Z.getSettings(e);
    if ((n === d.P && (await (0, i.cP)(e), (n = d.Z.getSettings(e))), n !== d.P && null != n)) {
        if (null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t)) return r.j.TODO;
        if (null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t)) return r.j.RESOURCE;
    }
}
