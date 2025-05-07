n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(239091),
    s = n(241559),
    a = n(982168),
    c = n(703656),
    u = n(601070),
    d = n(592125),
    h = n(430824),
    p = n(306680),
    f = n(434479),
    g = n(53425),
    m = n(981631),
    b = n(176505),
    _ = n(388032),
    y = n(776571);
function O(e) {
    let { guild: t, selectedChannelId: O, selectedVoiceChannelId: v, selectedChannel: C, channelListRow: S } = e,
        j = t.getModeratorReportChannelId(),
        E = (0, i.e7)([d.Z], () => (null == j ? null : d.Z.getChannel(j)), [j]),
        { hasUnread: x, numUnread: P } = (0, i.cj)(
            [p.ZP],
            () =>
                null == j
                    ? {
                          hasUnread: !1,
                          numUnread: 0
                      }
                    : {
                          hasUnread: p.ZP.hasUnread(j),
                          numUnread: p.ZP.getUnreadCount(j)
                      },
            [j]
        ),
        I = (0, i.e7)([u.Z], () => (null == j ? 0 : u.Z.getNewThreadCount(t.id, j)));
    if (!(0, a._5)(t.id)) return null;
    let w = P > 0 ? _.intl.format(y.default['/wHkWV'], { count: P }) : _.intl.string(y.default['kI3X9/']),
        { record: N, threadIds: Z = [], threadCount: T = 0 } = null != S ? S : {};
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.m, {
                onClick: () => {
                    var e, n;
                    return (e = t.id), !!(0, s.lv)(e) && ((0, c.uL)(m.Z5c.CHANNEL(e, null == (n = h.Z.getGuild(e)) ? void 0 : n.getModeratorReportChannelId())), !0);
                },
                id: 'report-to-mod-'.concat(t.id),
                renderIcon: (e) =>
                    (0, r.jsx)(l.U65, {
                        size: 'md',
                        color: 'currentColor',
                        className: e
                    }),
                text: w,
                selected: O === b.oC.REPORT_TO_MOD || O === j,
                onContextMenu: (e) => {
                    null != E &&
                        (0, o.jW)(e, async () => {
                            let { default: e } = await n.e('86715').then(n.bind(n, 466676));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (i = i = { channel: E }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n)
                                );
                            };
                        });
                },
                showUnread: x,
                trailing:
                    I > 0
                        ? (0, r.jsx)(l.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-brand',
                              children: _.intl.format(_.t.GkAbqa, { count: (0, l.NGo)(I) })
                          })
                        : null
            }),
            null != N && T > 0
                ? (0, r.jsx)(g.Z, {
                      withGuildIcon: !1,
                      channel: N,
                      sortedThreadIds: Z,
                      selectedChannel: C,
                      selectedVoiceChannelId: v
                  })
                : null
        ]
    });
}
