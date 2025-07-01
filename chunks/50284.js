(n.d(t, { Z: () => O }), n(642613), n(583741));
var r = n(544891),
    i = n(710845),
    l = n(569471),
    o = n(346479),
    a = n(592125),
    c = n(375954),
    s = n(306680),
    u = n(594174),
    d = n(709054),
    _ = n(981631);
let E = new i.Z('markUnread');
async function O(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = c.Z.getMessages(e),
        O = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        I = null == O ? d.default.atPreviousMillisecond(t) : O.id,
        T = 0;
    i.forAll((e) => {
        d.default.compare(e.id, I) > 0 && (0, s.Ex)(e, n) && T++;
    });
    let p = a.Z.getChannel(e);
    (null != p && p.isThread() && (p.isArchivedThread() && (await o.Z.unarchiveThread(p, !1)), l.Z.hasJoined(e) || (await o.Z.joinThread(p, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: _.ANM.MESSAGE_ACK(e, I),
            body: {
                manual: !0,
                mention_count: T
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }));
}
