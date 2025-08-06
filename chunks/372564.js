(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(374470),
    l = n(481060),
    c = n(239091),
    u = n(454585),
    d = n(984370),
    f = n(981631),
    _ = n(388032),
    p = n(916560),
    h = n(73433);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    return e.matches('a') || 'highlight' === e.className || e.className.includes('mention');
}
class O extends i.Component {
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsx)(d.Z.Divider, {}),
                      (0, r.jsxs)('div', {
                          className: a()(p.topic, p.expandable, h.markup),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, r.jsx)(l.P3F, {
                                  onClick: this.handleClick,
                                  'aria-label': _.intl.string(_.t.mKwsSk),
                                  className: p.topicClickTarget
                              }),
                              null == e.linkedLobby || t ? u.Z.parseTopic(e.topic, !0, { channelId: e.id }) : _.intl.string(_.t.XJVlf3)
                          ]
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        (super(...e),
            m(this, '_mouseDown', !1),
            m(this, '_mouseUp', !1),
            m(this, 'handleOpenTopic', (e) => {
                let t = e.target;
                if ((0, s.k)(t)) {
                    if (y(t)) return;
                    let e = t.parentNode;
                    if ((0, s.k)(e) && y(e)) return;
                }
                (0, l.ZDy)(async () => {
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
                (this._mouseDown && e.button !== f.AeJ.SECONDARY && this.handleOpenTopic(e), (this._mouseUp = !0), (this._mouseDown = !1));
            }),
            m(this, 'handleContextMenu', (e) => {
                let { channel: t, guild: i } = this.props;
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('66549'), n.e('25548'), n.e('2686'), n.e('49049'), n.e('62856'), n.e('12097'), n.e('46154'), n.e('91315'), n.e('16459'), n.e('49152'), n.e('24783'), n.e('26735')]).then(n.bind(n, 439635));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                channel: t,
                                guild: i,
                                includeTopic: !0
                            })
                        );
                });
            }),
            m(this, 'handleClick', (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            }));
    }
}
let v = O;
