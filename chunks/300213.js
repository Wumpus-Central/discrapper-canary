n.d(t, {
    m: function () {
        return c;
    }
}),
    n(192379);
var i = n(442837);
n(565799), n(431328), n(501655);
var r = n(427679),
    l = n(517334);
n(199902);
var a = n(592125);
n(496675), n(938475);
var s = n(151864);
n(497656);
var o = n(554747);
function c(e) {
    var t;
    let n = (0, l.ZP)(e),
        c = a.Z.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
        d = (0, i.e7)([r.Z], () => r.Z.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
        u = (0, o.k5)(e),
        { isStageNoticeHidden: h, isEventNoticeHidden: m } = (0, i.cj)(
            [s.Z],
            () => ({
                isStageNoticeHidden: s.Z.isLiveChannelNoticeHidden({ stageId: null == d ? void 0 : d.id }),
                isEventNoticeHidden: s.Z.isLiveChannelNoticeHidden({ eventId: null == u ? void 0 : u.id })
            }),
            [d, u]
        );
    if (null != u) return null != d ? !h : !m;
    return null != d && !h;
}
n(765305), n(231338);
