n.d(t, { m: () => d }), n(192379);
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
function d(e) {
    var t;
    let n = (0, r.ZP)(e),
        d = a.Z.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
        c = (0, i.e7)([l.Z], () => l.Z.getStageInstanceByChannel(null == d ? void 0 : d.id), [d]),
        u = (0, o.k5)(e),
        { isStageNoticeHidden: h, isEventNoticeHidden: m } = (0, i.cj)(
            [s.Z],
            () => ({
                isStageNoticeHidden: s.Z.isLiveChannelNoticeHidden({ stageId: null == c ? void 0 : c.id }),
                isEventNoticeHidden: s.Z.isLiveChannelNoticeHidden({ eventId: null == u ? void 0 : u.id })
            }),
            [c, u]
        );
    return null != u ? (null != c ? !h : !m) : null != c && !h;
}
n(765305), n(231338);
