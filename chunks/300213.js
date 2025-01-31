n.d(t, { m: () => c }), n(192379);
var i = n(442837);
n(565799), n(431328), n(501655);
var l = n(427679),
    r = n(517334);
n(199902);
var a = n(592125);
n(496675), n(938475);
var s = n(151864);
n(497656);
var o = n(554747);
function c(e) {
    var t;
    let n = (0, r.ZP)(e),
        c = a.Z.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
        d = (0, i.e7)([l.Z], () => l.Z.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
        u = (0, o.k5)(e),
        { isStageNoticeHidden: h, isEventNoticeHidden: m } = (0, i.cj)(
            [s.Z],
            () => ({
                isStageNoticeHidden: s.Z.isLiveChannelNoticeHidden({ stageId: null == d ? void 0 : d.id }),
                isEventNoticeHidden: s.Z.isLiveChannelNoticeHidden({ eventId: null == u ? void 0 : u.id })
            }),
            [d, u]
        );
    return null != u ? (null != d ? !h : !m) : null != d && !h;
}
n(765305), n(231338);
