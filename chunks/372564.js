n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(513431),
    o = n(481060),
    c = n(239091),
    d = n(822951),
    u = n(835473),
    h = n(933557),
    p = n(471445),
    m = n(454585),
    f = n(63063),
    g = n(984370),
    C = n(981631),
    x = n(388032),
    v = n(797323);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    var t;
    let { channel: n, onClose: l, guild: r, transitionState: a } = e,
        s = (0, p.KS)(n, r),
        c = (0, h.ZP)(n, !1),
        g = (0, u.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id);
    return (0, i.jsx)(o.ModalRoot, {
        transitionState: a,
        'aria-label': x.intl.string(x.t.X8jMDg),
        children: (0, i.jsx)(o.ModalContent, {
            children: (0, i.jsxs)(d.Z, {
                selectable: !0,
                onClose: l,
                renderHeader: () =>
                    (0, i.jsxs)('div', {
                        className: v.header,
                        children: [
                            null != s &&
                                (0, i.jsx)(s, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: v.channelIcon
                                }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: c
                            })
                        ]
                    }),
                children: [
                    (0, i.jsx)(o.Text, {
                        selectable: !0,
                        variant: 'text-md/normal',
                        className: v.content,
                        children: m.Z.parseTopic(n.topic, !0, { channelId: n.id })
                    }),
                    null != g
                        ? (0, i.jsxs)('div', {
                              className: v.linkedLobbyNotice,
                              children: [
                                  (0, i.jsx)(o.RefreshIcon, { className: v.linkedLobbyApplicationIcon }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: x.intl.format(x.t.Ud5rys, {
                                          applicationName: g.name,
                                          helpdeskArticle: f.Z.getArticleURL(C.BhN.CHANNEL_LINKED_LOBBIES),
                                          separatorHook: (e, t) =>
                                              (0, i.jsx)(
                                                  'span',
                                                  {
                                                      className: v.linkedLobbyNoticeSeparator,
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                  })
                              ]
                          })
                        : null
                ]
            })
        })
    });
}
function E(e) {
    return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class b extends l.Component {
    render() {
        let { channel: e } = this.props;
        return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length
            ? null
            : (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(g.Z.Divider, {}),
                      (0, i.jsxs)('div', {
                          className: a()(v.topic, v.expandable),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, i.jsx)(o.Clickable, {
                                  onClick: this.handleClick,
                                  'aria-label': x.intl.string(x.t.mKwsSk),
                                  className: v.topicClickTarget
                              }),
                              m.Z.parseTopic(e.topic, !0, {
                                  channelId: e.id,
                                  allowLinks: !0
                              })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            _(this, '_mouseDown', !1),
            _(this, '_mouseUp', !1),
            _(this, 'handleOpenTopic', (e) => {
                let t = e.target;
                if ((0, s.k)(t)) {
                    if (E(t)) return;
                    let e = t.parentNode;
                    if ((0, s.k)(e) && E(e)) return;
                }
                (0, o.openModal)((e) =>
                    (0, i.jsx)(I, {
                        ...e,
                        ...this.props
                    })
                );
            }),
            _(this, 'onMouseDown', () => {
                this._mouseDown = !0;
            }),
            _(this, 'onMouseMove', () => {
                this._mouseDown && (this._mouseDown = !1);
            }),
            _(this, 'onMouseUp', (e) => {
                this._mouseDown && e.button !== C.AeJ.SECONDARY && this.handleOpenTopic(e), (this._mouseUp = !0), (this._mouseDown = !1);
            }),
            _(this, 'handleContextMenu', (e) => {
                let { channel: t, guild: l } = this.props;
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t,
                            guild: l,
                            includeTopic: !0
                        });
                });
            }),
            _(this, 'handleClick', (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            });
    }
}
t.Z = b;
