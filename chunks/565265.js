n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(621466),
    o = n(397927),
    c = n(442433),
    u = n(46054),
    d = n(742589),
    f = n(652215),
    p = n(985018),
    h = n(980017),
    b = n(206314);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function A(e) {
    return e.matches("a") || "highlight" === e.className || e.className.includes("mention");
}
class y extends l.Component {
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, r.jsxs)(l.Fragment, {
                  children: [
                      (0, r.jsx)(d.A.Divider, {}),
                      (0, r.jsxs)("div", {
                          className: a()(h.At, h.lu, b.PT),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, r.jsx)(o.DUT, {
                                  onClick: this.handleClick,
                                  "aria-label": p.intl.string(p.t.mKwsSp),
                                  className: h.h8,
                              }),
                              null == e.linkedLobby || t
                                  ? u.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : p.intl.string(p.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            g(this, "_mouseDown", !1),
            g(this, "_mouseUp", !1),
            g(this, "handleOpenTopic", (e) => {
                let t = e.target;
                if ((0, s.vq)(t)) {
                    if (A(t)) return;
                    let e = t.parentNode;
                    if ((0, s.vq)(e) && A(e)) return;
                }
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("8939").then(n.bind(n, 181094));
                    return (t) => (0, r.jsx)(e, m({}, t, this.props));
                });
            }),
            g(this, "onMouseDown", () => {
                this._mouseDown = !0;
            }),
            g(this, "onMouseMove", () => {
                this._mouseDown && (this._mouseDown = !1);
            }),
            g(this, "onMouseUp", (e) => {
                this._mouseDown && e.button !== f.hE4.SECONDARY && this.handleOpenTopic(e),
                    (this._mouseUp = !0),
                    (this._mouseDown = !1);
            }),
            g(this, "handleContextMenu", (e) => {
                let { channel: t, guild: l } = this.props;
                (0, c.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("17425"), n.e("14237")]).then(n.bind(n, 340968));
                    return (n) => {
                        var i, a;
                        return (0, r.jsx)(
                            e,
                            ((i = m({}, n)),
                            (a = a =
                                {
                                    channel: t,
                                    guild: l,
                                    includeTopic: !0,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i),
                        );
                    };
                });
            }),
            g(this, "handleClick", (e) => {
                if (this._mouseUp) {
                    this._mouseUp = !1;
                    return;
                }
                this.handleOpenTopic(e);
            });
    }
}
let O = y;
