n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(6025),
    l = n(433355),
    a = n(626135),
    o = n(585483),
    s = n(545724),
    c = n(426051),
    u = n(981631);
function d(e) {
    let { index: t, className: n, channel: d, user: p, hasSingleMessageRequest: h } = e;
    return (0, r.jsx)(s.Z, {
        index: t,
        className: n,
        isFocused: !1,
        channel: d,
        user: p,
        onClick: (e) => {
            e.stopPropagation(),
                i.Z.openPrivateChannelAsSidebar({
                    channelId: d.id,
                    baseChannelId: l.uZ,
                    hasSingleMessageRequest: h
                }),
                a.default.track(u.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: d.id,
                    other_user_id: p.id
                }),
                setTimeout(() => {
                    o.S.dispatch(u.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: d.id });
                }, 0);
        },
        children: (e) =>
            (0, r.jsx)(c.Z, {
                active: e,
                user: p,
                channel: d
            })
    });
}
