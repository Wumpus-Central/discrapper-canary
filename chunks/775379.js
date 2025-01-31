l.d(n, { S: () => i }), l(47120);
var t = l(192379);
class i extends t.PureComponent {
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, n) {
        console.error('ErrorBoundary caught an error', e, n);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
    constructor(...e) {
        var n, l;
        super(...e),
            (l = { error: null }),
            (n = 'state') in this
                ? Object.defineProperty(this, n, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[n] = l);
    }
}
