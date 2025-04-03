n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(374470),
    s = n(481060),
    c = n(239091),
    u = n(454585),
    d = n(984370),
    p = n(981631),
    h = n(388032),
    f = n(916560);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function b(e) {
    return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class _ extends i.Component {
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsx)(d.Z.Divider, {}),
                      (0, r.jsxs)('div', {
                          className: o()(f.topic, f.expandable),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, r.jsx)(s.P3F, {
                                  onClick: this.handleClick,
                                  'aria-label': h.NW.string(h.t.mKwsSk),
                                  className: f.topicClickTarget
                              }),
                              null == e.linkedLobby || t ? u.Z.parseTopic(e.topic, !0, { channelId: e.id }) : h.NW.string(h.t.XJVlf3)
                          ]
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            m(this, '_mouseDown', !1),
            m(this, '_mouseUp', !1),
            m(this, 'handleOpenTopic', (e) => {
                let t = e.target;
                if ((0, a.k)(t)) {
                    if (b(t)) return;
                    let e = t.parentNode;
                    if ((0, a.k)(e) && b(e)) return;
                }
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('65631').then(n.bind(n, 10722));
                    return (t) => (0, r.jsx)(e, g({}, t, this.props));
                });
            }),
            m(this, 'onMouseDown', () => {
                this._mouseDown = !0;
            }),
            m(this, 'onMouseMove', () => {
                this._mouseDown && (this._mouseDown = !1);
            }),
            m(this, 'onMouseUp', (e) => {
                this._mouseDown && e.button !== p.AeJ.SECONDARY && this.handleOpenTopic(e), (this._mouseUp = !0), (this._mouseDown = !1);
            }),
            m(this, 'handleContextMenu', (e) => {
                let { channel: t, guild: i } = this.props;
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                    return (n) => {
                        var l, o;
                        return (0, r.jsx)(
                            e,
                            ((l = g({}, n)),
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
            m(this, 'handleClick', (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            });
    }
}
let C = _;
