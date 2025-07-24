e.d(r, { SV: () => f });
var u = e(73800);
let n = (0, u.createContext)(null),
    o = {
        didCatch: !1,
        error: null
    };
class f extends u.Component {
    constructor(t) {
        (super(t), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o));
    }
    static getDerivedStateFromError(t) {
        return {
            didCatch: !0,
            error: t
        };
    }
    resetErrorBoundary() {
        let { error: t } = this.state;
        if (null !== t) {
            for (var r, e, u = arguments.length, n = Array(u), f = 0; f < u; f++) n[f] = arguments[f];
            (null == (r = (e = this.props).onReset) ||
                r.call(e, {
                    args: n,
                    reason: 'imperative-api'
                }),
                this.setState(o));
        }
    }
    componentDidCatch(t, r) {
        var e, u;
        null == (e = (u = this.props).onError) || e.call(u, t, r);
    }
    componentDidUpdate(t, r) {
        let { didCatch: e } = this.state,
            { resetKeys: u } = this.props;
        if (
            e &&
            null !== r.error &&
            (function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t.length !== r.length || t.some((t, e) => !Object.is(t, r[e]));
            })(t.resetKeys, u)
        ) {
            var n, f;
            (null == (n = (f = this.props).onReset) ||
                n.call(f, {
                    next: u,
                    prev: t.resetKeys,
                    reason: 'keys'
                }),
                this.setState(o));
        }
    }
    render() {
        let { children: t, fallbackRender: r, FallbackComponent: e, fallback: o } = this.props,
            { didCatch: f, error: i } = this.state,
            a = t;
        if (f) {
            let t = {
                error: i,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if ('function' == typeof r) a = r(t);
            else if (e) a = (0, u.createElement)(e, t);
            else if (void 0 !== o) a = o;
            else throw i;
        }
        return (0, u.createElement)(
            n.Provider,
            {
                value: {
                    didCatch: f,
                    error: i,
                    resetErrorBoundary: this.resetErrorBoundary
                }
            },
            a
        );
    }
}
