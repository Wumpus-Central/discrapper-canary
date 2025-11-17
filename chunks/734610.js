u.d(t, { SV: () => o });
var r = u(473749);
let n = (0, r.createContext)(null),
    f = {
        didCatch: !1,
        error: null,
    };
class o extends r.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = f);
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
            for (var t, u, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            null == (t = (u = this.props).onReset) ||
                t.call(u, {
                    args: n,
                    reason: "imperative-api",
                }),
                this.setState(f);
        }
    }
    componentDidCatch(e, t) {
        var u, r;
        null == (u = (r = this.props).onError) || u.call(r, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: u } = this.state,
            { resetKeys: r } = this.props;
        if (
            u &&
            null !== t.error &&
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, u) => !Object.is(e, t[u]));
            })(e.resetKeys, r)
        ) {
            var n, o;
            null == (n = (o = this.props).onReset) ||
                n.call(o, {
                    next: r,
                    prev: e.resetKeys,
                    reason: "keys",
                }),
                this.setState(f);
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: u, fallback: f } = this.props,
            { didCatch: o, error: i } = this.state,
            s = e;
        if (o) {
            let e = {
                error: i,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if ("function" == typeof t) s = t(e);
            else if (u) s = (0, r.createElement)(u, e);
            else if (void 0 !== f) s = f;
            else throw i;
        }
        return (0, r.createElement)(
            n.Provider,
            {
                value: {
                    didCatch: o,
                    error: i,
                    resetErrorBoundary: this.resetErrorBoundary,
                },
            },
            s,
        );
    }
}
