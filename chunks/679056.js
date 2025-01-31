n.d(t, { Z: () => c }), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(846519);
function s(e, t, n) {
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
class o extends (i = a.Component) {
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
        let { props: i } = this,
            l = ((n = this.state), !i.disable && !(n.hovered && i.pauseOnHover)),
            a = !e.disable && !(t.hovered && e.pauseOnHover);
        (l && !a) || e.interval !== i.interval ? this.startTimer() : !l && a && this.stopTimer();
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
        let { children: e, className: t, disable: n } = this.props,
            i = n
                ? null
                : {
                      onMouseEnter: this.handlePause,
                      onFocus: this.handlePause,
                      onMouseLeave: this.handleResume,
                      onBlur: this.handleResume
                  };
        return (0, l.jsx)('div', {
            ...i,
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            s(this, 'timer', new r.Xp()),
            s(this, 'state', { hovered: !1 }),
            s(this, 'handlePause', () => {
                this.state.hovered || this.setState({ hovered: !0 });
            }),
            s(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
s(o, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
});
let c = o;
