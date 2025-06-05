n.d(a, { default: () => m });
var l = n(255367),
    o = n(481060),
    c = n(835473),
    i = n(933557),
    t = n(471445),
    r = n(454585),
    s = n(63063),
    d = n(981631),
    p = n(388032),
    h = n(374747);
function m(e) {
    var a;
    let { channel: n, onClose: m, guild: b, transitionState: x } = e,
        N = (0, t.KS)(n, b),
        k = (0, i.ZP)(n, !1),
        u = (0, c.q)(null == (a = n.linkedLobby) ? void 0 : a.application_id);
    return (0, l.jsxs)(o.Y0X, {
        transitionState: x,
        'aria-label': p.intl.string(p.t.X8jMDg),
        className: h.modal,
        parentComponent: 'ChannelTopicModal',
        children: [
            (0, l.jsxs)(o.xBx, {
                className: h.modalHeader,
                separator: !1,
                children: [
                    (0, l.jsxs)('div', {
                        className: h.header,
                        children: [
                            null != N &&
                                (0, l.jsx)(N, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: h.channelIcon
                                }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: k
                            })
                        ]
                    }),
                    (0, l.jsx)(o.olH, { onClick: m })
                ]
            }),
            (0, l.jsxs)(o.hzk, {
                children: [
                    (0, l.jsx)(o.Text, {
                        selectable: !0,
                        variant: 'text-md/normal',
                        className: h.content,
                        children: r.Z.parseTopic(n.topic, !0, { channelId: n.id })
                    }),
                    null != u
                        ? (0, l.jsxs)('div', {
                              className: h.linkedLobbyNotice,
                              children: [
                                  (0, l.jsx)(o.DuK, { className: h.linkedLobbyApplicationIcon }),
                                  (0, l.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: p.intl.format(p.t.Ud5rys, {
                                          applicationName: u.name,
                                          helpdeskArticle: s.Z.getArticleURL(d.BhN.CHANNEL_LINKED_LOBBIES),
                                          separatorHook: (e, a) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: h.linkedLobbyNoticeSeparator,
                                                      children: e
                                                  },
                                                  a
                                              )
                                      })
                                  })
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
