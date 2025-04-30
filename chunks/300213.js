n.d(t, { m: () => c }), n(192379);
var r = n(442837);
n(565799), n(431328), n(501655);
var i = n(427679),
    l = n(517334);
n(199902);
var a = n(592125);
n(496675), n(938475);
var o = n(151864);
n(497656);
var s = n(554747);
function c(e) {
    var t;
    let n = (0, l.ZP)(e),
        c = a.Z.getChannel(null == (t = n[0]) ? void 0 : t.id),
        u = (0, r.e7)([i.Z], () => i.Z.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
        d = (0, s.k5)(e),
        { isStageNoticeHidden: p, isEventNoticeHidden: h } = (0, r.cj)(
            [o.Z],
            () => ({
                isStageNoticeHidden: o.Z.isLiveChannelNoticeHidden({ stageId: null == u ? void 0 : u.id }),
                isEventNoticeHidden: o.Z.isLiveChannelNoticeHidden({ eventId: null == d ? void 0 : d.id })
            }),
            [u, d]
        );
    if (null != d)
        if (null != u) return !p;
        else return !h;
    return null != u && !p;
}
n(765305), n(231338);
