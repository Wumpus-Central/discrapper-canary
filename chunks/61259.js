n.d(t, {
    t: () => l,
}),
    n(896048);
var r = n(64700);
class l extends r.PureComponent {
    static getDerivedStateFromError(e) {
        return {
            error: e,
        };
    }
    componentDidCatch(e, t) {
        console.error("ErrorBoundary caught an error", e, t);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "state", {
                error: null,
            });
    }
}
