n.d(a, { default: () => k });
var l = n(255367),
    o = n(120356),
    c = n.n(o),
    i = n(481060),
    t = n(835473),
    r = n(933557),
    s = n(471445),
    d = n(454585),
    p = n(63063),
    h = n(981631),
    m = n(388032),
    b = n(374747),
    x = n(73433);
function k(e) {
    var a;
    let { channel: n, onClose: o, guild: k, transitionState: N } = e,
        u = (0, s.KS)(n, k),
        j = (0, r.ZP)(n, !1),
        y = (0, t.q)(null == (a = n.linkedLobby) ? void 0 : a.application_id);
    return (0, l.jsxs)(i.Y0X, {
        transitionState: N,
        'aria-label': m.intl.string(m.t.X8jMDg),
        className: b.modal,
        parentComponent: 'ChannelTopicModal',
        children: [
            (0, l.jsxs)(i.xBx, {
                className: b.modalHeader,
                separator: !1,
                children: [
                    (0, l.jsxs)('div', {
                        className: b.header,
                        children: [
                            null != u &&
                                (0, l.jsx)(u, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: b.channelIcon
                                }),
                            (0, l.jsx)(i.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: j
                            })
                        ]
                    }),
                    (0, l.jsx)(i.olH, { onClick: o })
                ]
            }),
            (0, l.jsxs)(i.hzk, {
                children: [
                    (0, l.jsx)(i.Text, {
                        selectable: !0,
                        variant: 'text-md/normal',
                        className: c()(b.content, x.markup),
                        children: d.Z.parseTopic(n.topic, !0, { channelId: n.id })
                    }),
                    null != y
                        ? (0, l.jsxs)('div', {
                              className: b.linkedLobbyNotice,
                              children: [
                                  (0, l.jsx)(i.DuK, { className: b.linkedLobbyApplicationIcon }),
                                  (0, l.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: m.intl.format(m.t.Ud5rys, {
                                          applicationName: y.name,
                                          helpdeskArticle: p.Z.getArticleURL(h.BhN.LINKED_LOBBIES),
                                          separatorHook: (e, a) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: b.linkedLobbyNoticeSeparator,
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
