n.d(t, { Z: () => _ });
var i = n(544891),
    l = n(710845),
    a = n(569471),
    r = n(346479),
    s = n(592125),
    o = n(375954),
    c = n(306680),
    d = n(594174),
    u = n(709054),
    m = n(981631);
let h = new l.Z('markUnread');
async function _(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let l = o.Z.getMessages(e),
        _ = l
            .toArray()
            .filter((e) => 0 > u.default.compare(e.id, t))
            .sort((e, t) => u.default.compare(e.id, t.id))
            .reverse()[0],
        p = null == _ ? u.default.atPreviousMillisecond(t) : _.id,
        g = 0;
    l.forAll((e) => {
        u.default.compare(e.id, p) > 0 && (0, c.Ex)(e, n) && g++;
    });
    let f = s.Z.getChannel(e);
    null != f && f.isThread() && (f.isArchivedThread() && (await r.Z.unarchiveThread(f, !1)), a.Z.hasJoined(e) || (await r.Z.joinThread(f, 'Mark Unread'))),
        h.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        i.tn.post({
            url: m.ANM.MESSAGE_ACK(e, p),
            body: {
                manual: !0,
                mention_count: g
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
}
