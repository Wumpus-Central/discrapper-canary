n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(241559),
    s = n(982168),
    a = n(703656),
    c = n(601070),
    u = n(430824),
    d = n(306680),
    h = n(434479),
    p = n(53425),
    f = n(981631),
    g = n(176505),
    m = n(388032),
    b = n(776571);
function y(e) {
    let { guild: t, selectedChannelId: n, selectedVoiceChannelId: y, selectedChannel: _, channelListRow: O } = e,
        v = t.getModeratorReportChannelId(),
        { hasUnread: C, numUnread: j } = (0, i.cj)(
            [d.ZP],
            () =>
                null == v
                    ? {
                          hasUnread: !1,
                          numUnread: 0
                      }
                    : {
                          hasUnread: d.ZP.hasUnread(v),
                          numUnread: d.ZP.getUnreadCount(v)
                      },
            [v]
        ),
        S = (0, i.e7)([c.Z], () => (null == v ? 0 : c.Z.getNewThreadCount(t.id, v)));
    if (!(0, s._5)(t.id)) return null;
    let E = j > 0 ? m.intl.format(b.default['/wHkWV'], { count: j }) : m.intl.string(b.default['kI3X9/']),
        { record: x, threadIds: I = [], threadCount: P = 0 } = null != O ? O : {};
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.m, {
                onClick: () => {
                    var e, n;
                    return (e = t.id), !!(0, o.lv)(e) && ((0, a.uL)(f.Z5c.CHANNEL(e, null == (n = u.Z.getGuild(e)) ? void 0 : n.getModeratorReportChannelId())), !0);
                },
                id: 'report-to-mod-'.concat(t.id),
                renderIcon: (e) =>
                    (0, r.jsx)(l._XJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: e
                    }),
                text: E,
                selected: n === g.oC.REPORT_TO_MOD || n === v,
                showUnread: C,
                trailing:
                    S > 0
                        ? (0, r.jsx)(l.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-brand',
                              children: m.intl.format(m.t.GkAbqa, { count: (0, l.NGo)(S) })
                          })
                        : null
            }),
            null != x && P > 0
                ? (0, r.jsx)(p.Z, {
                      withGuildIcon: !1,
                      channel: x,
                      sortedThreadIds: I,
                      selectedChannel: _,
                      selectedVoiceChannelId: y
                  })
                : null
        ]
    });
}
