n.d(t, { Z: () => h });
var r = n(594190),
    i = n(569545),
    o = n(199902),
    a = n(314897),
    s = n(158776),
    l = n(19780),
    c = n(979651),
    u = n(709054),
    d = n(356659),
    f = n(981631),
    _ = n(388032);
function p(e) {
    var t, n;
    if (null != e) {
        let { ownerId: t } = i.my(e);
        if (t !== a.default.getId()) {
            let e = s.Z.getActivities(t).find((e) => e.type === f.IIU.PLAYING);
            return {
                sourceName: null == e ? void 0 : e.name,
                sourceApplicationId: null == e ? void 0 : e.application_id
            };
        }
    }
    let l = o.Z.getStreamerActiveStreamMetadata(),
        c = null == l ? void 0 : l.pid,
        u = null != l ? (null != c ? r.ZP.getGameForPID(c) : null) : r.ZP.getVisibleGame();
    return {
        sourceName: null != (t = null == l ? void 0 : l.sourceName) ? t : null == u ? void 0 : u.name,
        sourceApplicationId: null != (n = null == l ? void 0 : l.id) ? n : null == u ? void 0 : u.id
    };
}
function h(e) {
    let { sourceName: t, sourceApplicationId: n } = p(e),
        r = l.Z.getChannelId(),
        i = [a.default.getId()];
    return (
        null != r && (i = Object.keys(c.Z.getVoiceStatesForChannel(r))),
        {
            id: u.default.fromTimestamp(Date.now()),
            version: d.Bg,
            applicationName: null != t ? t : _.NW.string(_.t.qtSJxc),
            applicationId: n,
            users: i,
            clipMethod: 'manual',
            length: 0,
            thumbnail: ''
        }
    );
}
