(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(374470),
    s = n(481060),
    c = n(239091),
    u = n(454585),
    d = n(984370),
    p = n(981631),
    h = n(388032),
    f = n(916560),
    m = n(73433);
function g(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function _(e) {
    return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class y extends i.Component {
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsx)(d.Z.Divider, {}),
                      (0, r.jsxs)('div', {
                          className: o()(f.topic, f.expandable, m.markup),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, r.jsx)(s.P3F, {
                                  onClick: this.handleClick,
                                  'aria-label': h.intl.string(h.t.mKwsSk),
                                  className: f.topicClickTarget
                              }),
                              null == e.linkedLobby || t ? u.Z.parseTopic(e.topic, !0, { channelId: e.id }) : h.intl.string(h.t.XJVlf3)
                          ]
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        (super(...e),
            g(this, '_mouseDown', !1),
            g(this, '_mouseUp', !1),
            g(this, 'handleOpenTopic', (e) => {
                let t = e.target;
                if ((0, a.k)(t)) {
                    if (_(t)) return;
                    let e = t.parentNode;
                    if ((0, a.k)(e) && _(e)) return;
                }
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('65631').then(n.bind(n, 10722));
                    return (t) => (0, r.jsx)(e, b({}, t, this.props));
                });
            }),
            g(this, 'onMouseDown', () => {
                this._mouseDown = !0;
            }),
            g(this, 'onMouseMove', () => {
                this._mouseDown && (this._mouseDown = !1);
            }),
            g(this, 'onMouseUp', (e) => {
                (this._mouseDown && e.button !== p.AeJ.SECONDARY && this.handleOpenTopic(e), (this._mouseUp = !0), (this._mouseDown = !1));
            }),
            g(this, 'handleContextMenu', (e) => {
                let { channel: t, guild: i } = this.props;
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                    return (n) => {
                        var l, o;
                        return (0, r.jsx)(
                            e,
                            ((l = b({}, n)),
                            (o = o =
                                {
                                    channel: t,
                                    guild: i,
                                    includeTopic: !0
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            l)
                        );
                    };
                });
            }),
            g(this, 'handleClick', (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            }));
    }
}
let C = y;
