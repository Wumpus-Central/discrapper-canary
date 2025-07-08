(n.d(t, { Z: () => h }), n(642613), n(583741));
var i = n(544891),
    r = n(710845),
    l = n(569471),
    o = n(346479),
    s = n(592125),
    a = n(375954),
    c = n(306680),
    d = n(594174),
    u = n(709054),
    _ = n(981631);
let E = new r.Z('markUnread');
async function h(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let r = a.Z.getMessages(e),
        h = r
            .toArray()
            .filter((e) => 0 > u.default.compare(e.id, t))
            .sort((e, t) => u.default.compare(e.id, t.id))
            .reverse()[0],
        I = null == h ? u.default.atPreviousMillisecond(t) : h.id,
        p = 0;
    r.forAll((e) => {
        u.default.compare(e.id, I) > 0 && (0, c.Ex)(e, n) && p++;
    });
    let C = s.Z.getChannel(e);
    (null != C && C.isThread() && (C.isArchivedThread() && (await o.Z.unarchiveThread(C, !1)), l.Z.hasJoined(e) || (await o.Z.joinThread(C, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        i.tn.post({
            url: _.ANM.MESSAGE_ACK(e, I),
            body: {
                manual: !0,
                mention_count: p
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }));
}
