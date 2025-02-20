n.d(t, { T: () => a });
var r = n(526120),
    i = n(563534),
    l = n(734893),
    s = n(931261);
async function a(e, t) {
    if (null == e || !(0, s.s)(e)) return;
    let n = i.Z.getSettings(e);
    return (n === i.P && (await (0, r.cP)(e), (n = i.Z.getSettings(e))), n === i.P || null == n) ? void 0 : null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t) ? l.j.TODO : null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t) ? l.j.RESOURCE : void 0;
}
