n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(513431),
    o = n(481060),
    c = n(239091),
    d = n(454585),
    u = n(984370),
    h = n(981631),
    p = n(388032),
    m = n(946587);
function f(e, t, n) {
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
function g(e) {
    return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class C extends l.Component {
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(u.Z.Divider, {}),
                      (0, i.jsxs)('div', {
                          className: a()(m.topic, m.expandable),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, i.jsx)(o.Clickable, {
                                  onClick: this.handleClick,
                                  'aria-label': p.intl.string(p.t.mKwsSk),
                                  className: m.topicClickTarget
                              }),
                              null == e.linkedLobby || t
                                  ? d.Z.parseTopic(e.topic, !0, {
                                        channelId: e.id,
                                        allowLinks: !0
                                    })
                                  : p.intl.string(p.t.XJVlf3)
                          ]
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            f(this, '_mouseDown', !1),
            f(this, '_mouseUp', !1),
            f(this, 'handleOpenTopic', (e) => {
                let t = e.target;
                if ((0, s.k)(t)) {
                    if (g(t)) return;
                    let e = t.parentNode;
                    if ((0, s.k)(e) && g(e)) return;
                }
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('65631').then(n.bind(n, 10722));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            ...this.props
                        });
                });
            }),
            f(this, 'onMouseDown', () => {
                this._mouseDown = !0;
            }),
            f(this, 'onMouseMove', () => {
                this._mouseDown && (this._mouseDown = !1);
            }),
            f(this, 'onMouseUp', (e) => {
                this._mouseDown && e.button !== h.AeJ.SECONDARY && this.handleOpenTopic(e), (this._mouseUp = !0), (this._mouseDown = !1);
            }),
            f(this, 'handleContextMenu', (e) => {
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
            f(this, 'handleClick', (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            });
    }
}
t.Z = C;
