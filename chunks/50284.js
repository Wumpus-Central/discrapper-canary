(n.d(t, { Z: () => E }), n(642613), n(583741));
var i = n(544891),
    r = n(710845),
    l = n(569471),
    o = n(346479),
    s = n(592125),
    a = n(375954),
    c = n(306680),
    d = n(594174),
    u = n(709054),
    h = n(981631);
let _ = new r.Z('markUnread');
async function E(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let r = a.Z.getMessages(e),
        E = r
            .toArray()
            .filter((e) => 0 > u.default.compare(e.id, t))
            .sort((e, t) => u.default.compare(e.id, t.id))
            .reverse()[0],
        p = null == E ? u.default.atPreviousMillisecond(t) : E.id,
        I = 0;
    r.forAll((e) => {
        u.default.compare(e.id, p) > 0 && (0, c.Ex)(e, n) && I++;
    });
    let g = s.Z.getChannel(e);
    (null != g && g.isThread() && (g.isArchivedThread() && (await o.Z.unarchiveThread(g, !1)), l.Z.hasJoined(e) || (await o.Z.joinThread(g, 'Mark Unread'))),
        _.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        i.tn.post({
            url: h.ANM.MESSAGE_ACK(e, p),
            body: {
                manual: !0,
                mention_count: I
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }));
}
