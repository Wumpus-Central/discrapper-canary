n.d(t, { Z: () => f }), n(230036), n(978209);
var r = n(544891),
    i = n(710845),
    a = n(569471),
    l = n(346479),
    o = n(592125),
    s = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    p = n(981631);
let m = new i.Z('markUnread');
async function f(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = s.Z.getMessages(e),
        f = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        h = null == f ? d.default.atPreviousMillisecond(t) : f.id,
        g = 0;
    i.forAll((e) => {
        d.default.compare(e.id, h) > 0 && (0, c.Ex)(e, n) && g++;
    });
    let _ = o.Z.getChannel(e);
    null != _ && _.isThread() && (_.isArchivedThread() && (await l.Z.unarchiveThread(_, !1)), a.Z.hasJoined(e) || (await l.Z.joinThread(_, 'Mark Unread'))),
        m.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: p.ANM.MESSAGE_ACK(e, h),
            body: {
                manual: !0,
                mention_count: g
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
}
