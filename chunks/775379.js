r.d(t, { S: () => l }), r(47120);
var n = r(192379);
class l extends n.PureComponent {
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, t) {
        console.error('ErrorBoundary caught an error', e, t);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
    constructor(...e) {
        var t, r;
        super(...e),
            (r = { error: null }),
            (t = 'state') in this
                ? Object.defineProperty(this, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = r);
    }
}
