r.d(e, { SV: () => a });
var n = r(192379);
let i = (0, n.createContext)(null),
    o = {
        didCatch: !1,
        error: null
    };
class a extends n.Component {
    constructor(t) {
        super(t), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = o);
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
            for (var e, r, n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            null == (e = (r = this.props).onReset) ||
                e.call(r, {
                    args: i,
                    reason: 'imperative-api'
                }),
                this.setState(o);
        }
    }
    componentDidCatch(t, e) {
        var r, n;
        null == (r = (n = this.props).onError) || r.call(n, t, e);
    }
    componentDidUpdate(t, e) {
        let { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
        if (
            r &&
            null !== e.error &&
            (function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t.length !== e.length || t.some((t, r) => !Object.is(t, e[r]));
            })(t.resetKeys, n)
        ) {
            var i, a;
            null == (i = (a = this.props).onReset) ||
                i.call(a, {
                    next: n,
                    prev: t.resetKeys,
                    reason: 'keys'
                }),
                this.setState(o);
        }
    }
    render() {
        let { children: t, fallbackRender: e, FallbackComponent: r, fallback: o } = this.props,
            { didCatch: a, error: u } = this.state,
            s = t;
        if (a) {
            let t = {
                error: u,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if ((0, n.isValidElement)(o)) s = o;
            else if ('function' == typeof e) s = e(t);
            else if (r) s = (0, n.createElement)(r, t);
            else throw u;
        }
        return (0, n.createElement)(
            i.Provider,
            {
                value: {
                    didCatch: a,
                    error: u,
                    resetErrorBoundary: this.resetErrorBoundary
                }
            },
            s
        );
    }
}
