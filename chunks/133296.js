s.d(t, { A: () => o });
var i = s(627968),
    r = s(64700),
    a = s(451988);
class n extends r.Component {
    timer = new a.IX();
    state = { hovered: !1 };
    static defaultProps = { disable: !1, pauseOnHover: !1 };
    static getDerivedStateFromProps(e) {
        return e.disable ? { hovered: !1 } : null;
    }
    componentDidMount() {
        let { pauseOnHover: e, disable: t } = this.props,
            s = this.state.hovered && e;
        t || s || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(e, t) {
        let { props: s } = this;
        function i(e, t) {
            return !e.disable && !(t.hovered && e.pauseOnHover);
        }
        let r = i(s, this.state),
            a = i(e, t);
        (r && !a) || e.interval !== s.interval ? this.startTimer() : !r && a && this.stopTimer();
    }
    startTimer() {
        let { interval: e, onInterval: t, disable: s } = this.props;
        s ||
            this.timer.start(e, () => {
                t();
            });
    }
    stopTimer() {
        this.timer.stop();
    }
    handlePause = () => {
        this.state.hovered || this.setState({ hovered: !0 });
    };
    handleResume = () => {
        this.setState({ hovered: !1 });
    };
    render() {
        let { children: e, className: t, disable: s } = this.props,
            r = s
                ? null
                : {
                      onMouseEnter: this.handlePause,
                      onFocus: this.handlePause,
                      onMouseLeave: this.handleResume,
                      onBlur: this.handleResume,
                  };
        return (0, i.jsx)("div", { ...r, className: t, children: e });
    }
}
let o = n;
