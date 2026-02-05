n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(138298),
    a = n(761640),
    l = n(954571),
    s = n(203982),
    o = n(957283),
    d = n(822082),
    c = n(825869),
    u = n(652215);
function A(e) {
    let { index: t, className: n, channel: A, user: h, hasSingleMessageRequest: _ } = e,
        { channelId: m } = (0, o.N)();
    return (0, i.jsx)(d.A, {
        index: t,
        className: n,
        isFocused: m === A.id,
        channel: A,
        user: h,
        onClick: (e) => {
            e.stopPropagation(),
                r.A.openPrivateChannelAsSidebar({ channelId: A.id, baseChannelId: a.fe, hasSingleMessageRequest: _ }),
                l.default.track(u.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: A.id,
                    other_user_id: h.id,
                }),
                setTimeout(() => {
                    s._.dispatch(u.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: A.id });
                }, 0);
        },
        children: (e) => (0, i.jsx)(c.v, { active: e, user: h, channel: A }),
    });
}
