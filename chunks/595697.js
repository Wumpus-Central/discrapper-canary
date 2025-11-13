t.d(n, { SV: () => u });
var r = t(647438);
let o = (0, r.createContext)(null),
    i = {
        didCatch: !1,
        error: null,
    };
class u extends r.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = i);
    }
    static getDerivedStateFromError(e) {
        return {
            didCatch: !0,
            error: e,
        };
    }
    resetErrorBoundary() {
        let { error: e } = this.state;
        if (null !== e) {
            for (var n, t, r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
            null == (n = (t = this.props).onReset) ||
                n.call(t, {
                    args: o,
                    reason: "imperative-api",
                }),
                this.setState(i);
        }
    }
    componentDidCatch(e, n) {
        var t, r;
        null == (t = (r = this.props).onError) || t.call(r, e, n);
    }
    componentDidUpdate(e, n) {
        let { didCatch: t } = this.state,
            { resetKeys: r } = this.props;
        if (
            t &&
            null !== n.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== n.length || e.some((e, t) => !Object.is(e, n[t]));
            })(e.resetKeys, r)
        ) {
            var o, u;
            null == (o = (u = this.props).onReset) ||
                o.call(u, {
                    next: r,
                    prev: e.resetKeys,
                    reason: "keys",
                }),
                this.setState(i);
        }
    }
    render() {
        let { children: e, fallbackRender: n, FallbackComponent: t, fallback: i } = this.props,
            { didCatch: u, error: c } = this.state,
            _ = e;
        if (u) {
            let e = {
                error: c,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if ("function" == typeof n) _ = n(e);
            else if (t) _ = (0, r.createElement)(t, e);
            else if (void 0 !== i) _ = i;
            else throw c;
        }
        return (0, r.createElement)(
            o.Provider,
            {
                value: {
                    didCatch: u,
                    error: c,
                    resetErrorBoundary: this.resetErrorBoundary,
                },
            },
            _,
        );
    }
}
