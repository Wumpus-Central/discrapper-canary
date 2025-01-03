n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(6025),
    l = n(433355),
    a = n(626135),
    s = n(585483),
    o = n(545724),
    c = n(426051),
    d = n(981631);
function u(e) {
    let { index: t, className: n, channel: u, user: h, hasSingleMessageRequest: m } = e;
    return (0, i.jsx)(o.Z, {
        index: t,
        className: n,
        isFocused: !1,
        channel: u,
        user: h,
        onClick: (e) => {
            e.stopPropagation(),
                r.Z.openPrivateChannelAsSidebar({
                    channelId: u.id,
                    baseChannelId: l.uZ,
                    hasSingleMessageRequest: m
                }),
                a.default.track(d.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: u.id,
                    other_user_id: h.id
                }),
                setTimeout(() => {
                    s.S.dispatch(d.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: u.id });
                }, 0);
        },
        children: (e) =>
            (0, i.jsx)(c.Z, {
                active: e,
                user: h,
                channel: u
            })
    });
}
