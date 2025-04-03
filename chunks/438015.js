n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(13245),
    o = n(593481),
    l = n(981631);
function a(e, t, n) {
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
class c extends r.Component {
    getStyle() {
        let e,
            t,
            n,
            i,
            {
                props: { position: r, zIndex: s }
            } = this;
        switch (r) {
            case l._vf.TOP_LEFT:
            case l._vf.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (r) {
            case l._vf.BOTTOM_LEFT:
            case l._vf.BOTTOM_RIGHT:
                n = 0;
                break;
            default:
                i = 0;
        }
        return {
            left: e,
            right: t,
            bottom: n,
            top: i,
            zIndex: s
        };
    }
    render() {
        var e, t;
        let {
                props: {
                    locked: n,
                    notification: {
                        props: { renderFooter: r, onNotificationShow: s, onDismissClick: l, onNotificationClick: c, onConfirmClick: u, onCancelClick: d }
                    }
                }
            } = this,
            h = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(this.props.notification.props, ['renderFooter', 'onNotificationShow', 'onDismissClick', 'onNotificationClick', 'onConfirmClick', 'onCancelClick']);
        return (0, i.jsx)(
            o.ZP,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            a(e, t, n[t]);
                        });
                }
                return e;
            })({}, h)),
            (t = t =
                {
                    locked: n,
                    onNotificationShow: this.handleNotificationShow,
                    onDismissClick: null != l ? this.handleDismissClick : void 0,
                    onNotificationClick: null != c ? this.handleNotificationClick : null,
                    onConfirmClick: null != u ? this.handleConfirmClick : null,
                    onCancelClick: null != d ? this.handleCancelClick : null,
                    renderFooter: this.renderFooter,
                    expand: !n
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
    constructor(...e) {
        super(...e),
            a(this, 'handleNotificationShow', () => {
                let {
                    id: e,
                    props: { onNotificationShow: t }
                } = this.props.notification;
                t(e);
            }),
            a(this, 'handleDismissClick', (e) => {
                let {
                    id: t,
                    props: { onDismissClick: n }
                } = this.props.notification;
                s.Z.updateNotificationStatus(t), null == n || n(e, t);
            }),
            a(this, 'handleNotificationClick', (e) => {
                let {
                    id: t,
                    props: { onNotificationClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            a(this, 'handleConfirmClick', (e) => {
                let {
                    id: t,
                    props: { onConfirmClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            a(this, 'handleCancelClick', (e) => {
                let {
                    id: t,
                    props: { onCancelClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            a(this, 'renderFooter', (e) => {
                let {
                        id: t,
                        props: { renderFooter: n }
                    } = this.props.notification,
                    i = this.props.locked;
                return null != n ? n(e, t, i) : null;
            });
    }
}
let u = c;
