n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(846519);
function o(e, t, n) {
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
class s extends (i = l.Component) {
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
            l,
            { props: a } = this;
        let o = ((n = a), (i = this.state), !n.disable && !(i.hovered && n.pauseOnHover));
        let s = ((r = e), (l = t), !r.disable && !(l.hovered && r.pauseOnHover));
        (o && !s) || e.interval !== a.interval ? this.startTimer() : !o && s && this.stopTimer();
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
            o(this, 'timer', new a.Xp()),
            o(this, 'state', { hovered: !1 }),
            o(this, 'handlePause', () => {
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            o(this, 'handleResume', () => {
                this.setState({ hovered: !1 });
            });
    }
}
o(s, 'defaultProps', {
    disable: !1,
    pauseOnHover: !1
}),
    (t.Z = s);
