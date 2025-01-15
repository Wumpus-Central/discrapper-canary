n(47120);
var i,
    r = n(200651),
    a = n(192379),
    o = n(846519);
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
class c extends (i = a.Component) {
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
            r,
            a,
            { props: o } = this;
        let s = ((n = o), (i = this.state), !n.disable && !(i.hovered && n.pauseOnHover));
        let c = ((r = e), (a = t), !r.disable && !(a.hovered && r.pauseOnHover));
        (s && !c) || e.interval !== o.interval ? this.startTimer() : !s && c && this.stopTimer();
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
        return (0, r.jsx)('div', {
            ...i,
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            s(this, 'timer', new o.Xp()),
            s(this, 'state', { hovered: !1 }),
            s(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            s(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
s(c, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (t.Z = c);
