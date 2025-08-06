(n.d(t, { Z: () => p }), n(642613), n(583741));
var r = n(544891),
    i = n(710845),
    o = n(569471),
    a = n(346479),
    s = n(592125),
    l = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    f = n(981631);
let _ = new i.Z('markUnread');
async function p(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = l.Z.getMessages(e),
        p = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        h = null == p ? d.default.atPreviousMillisecond(t) : p.id,
        m = 0;
    i.forAll((e) => {
        d.default.compare(e.id, h) > 0 && (0, c.Ex)(e, n) && m++;
    });
    let g = s.Z.getChannel(e);
    (null != g && g.isThread() && (g.isArchivedThread() && (await a.Z.unarchiveThread(g, !1)), o.Z.hasJoined(e) || (await a.Z.joinThread(g, 'Mark Unread'))),
        _.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: f.ANM.MESSAGE_ACK(e, h),
            body: {
                manual: !0,
                mention_count: m
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }));
}
