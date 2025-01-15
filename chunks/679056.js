n(47120);
var i,
    a = n(200651),
    r = n(192379),
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
class s extends (i = r.Component) {
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let { pauseOnHover: e, disable: t } = this.props,
            n = this.state.hovered && e;
        !t && !n && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, t) {
        let n,
            i,
            a,
            r,
            { props: o } = this;
        let l = ((n = o), (i = this.state), !n.disable && !(i.hovered && n.pauseOnHover));
        let s = ((a = e), (r = t), !a.disable && !(r.hovered && a.pauseOnHover));
        (l && !s) || e.interval !== o.interval ? this.startTimer() : !l && s && this.stopTimer();
    }
    startTimer() {
        let { interval: e, onInterval: t, disable: n } = this.props;
        if (!n)
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
        return (0, a.jsx)('div', {
            ...i,
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            l(this, 'timer', new o.Xp()),
            l(this, 'state', { hovered: !1 }),
            l(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            l(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
l(s, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (t.Z = s);
