n.d(t, { Z: () => c }), n(47120);
var r,
    i = n(200651),
    a = n(192379),
    o = n(846519);
function l(e, t, n) {
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
class s extends (r = a.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let { pauseOnHover: e, disable: t } = this.props,
            n = this.state.hovered && e;
        t || n || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, t) {
        let n;
        let { props: r } = this,
            i = ((n = this.state), !r.disable && !(n.hovered && r.pauseOnHover)),
            a = !e.disable && !(t.hovered && e.pauseOnHover);
        (i && !a) || e.interval !== r.interval ? this.startTimer() : !i && a && this.stopTimer();
    }
    startTimer() {
        let { interval: e, onInterval: t, disable: n } = this.props;
        !n &&
            this.timer.start(e, () => {
                t();
            });
    }
    stopTimer() {
        this.timer.stop();
    }
    render() {
        var e, t;
        let { children: n, className: r, disable: a } = this.props,
            o = a
                ? null
                : {
                      onMouseEnter: this.handlePause,
                      onFocus: this.handlePause,
                      onMouseLeave: this.handleResume,
                      onBlur: this.handleResume
                  };
        return (0, i.jsx)(
            'div',
            ((e = (function (e) {
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
                            l(e, t, n[t]);
                        });
                }
                return e;
            })({}, o)),
            (t = t =
                {
                    className: r,
                    children: n
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
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
            l(this, 'timer', new o.Xp()),
            l(this, 'state', { hovered: !1 }),
            l(this, 'handlePause', () => {
                this.state.hovered || this.setState({ hovered: !0 });
            }),
            l(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
l(s, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
});
let c = s;
