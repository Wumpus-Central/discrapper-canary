n.d(t, { Z: () => O }), n(642613), n(583741);
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
        p = 0;
    i.forAll((e) => {
        d.default.compare(e.id, I) > 0 && (0, s.Ex)(e, n) && p++;
    });
    let T = a.Z.getChannel(e);
    null != T && T.isThread() && (T.isArchivedThread() && (await o.Z.unarchiveThread(T, !1)), l.Z.hasJoined(e) || (await o.Z.joinThread(T, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: _.ANM.MESSAGE_ACK(e, I),
            body: {
                manual: !0,
                mention_count: p
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
}
