r.d(t, { S: () => l }), r(388685);
var n = r(73800);
class l extends n.PureComponent {
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, t) {
        console.error("ErrorBoundary caught an error", e, t);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
    constructor(...e) {
        super(...e),
            (function (e, t, r) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = r);
            })(this, "state", { error: null });
    }
}
