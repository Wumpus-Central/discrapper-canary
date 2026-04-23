n.d(t, { A: () => A });
var s = n(627968);
n(64700);
var l = n(138298),
    a = n(761640),
    i = n(954571),
    r = n(203982),
    c = n(957283),
    d = n(822082),
    o = n(825869),
    u = n(652215);
function A(e) {
    let { index: t, className: n, channel: A, user: h, hasSingleMessageRequest: m } = e,
        { channelId: g } = (0, c.N)();
    return (0, s.jsx)(d.A, {
        index: t,
        className: n,
        isFocused: g === A.id,
        channel: A,
        user: h,
        onClick: (e) => {
            e.stopPropagation(),
                l.A.openPrivateChannelAsSidebar({ channelId: A.id, baseChannelId: a.fe, hasSingleMessageRequest: m }),
                i.default.track(u.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: A.id,
                    other_user_id: h.id,
                }),
                setTimeout(() => {
                    r._.dispatch(u.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: A.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(o.v, { active: e, user: h, channel: A }),
    });
}
