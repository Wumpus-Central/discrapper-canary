o.d(e, { SV: () => a });
var n = o(647438);
let r = (0, n.createContext)(null),
    i = {
        didCatch: !1,
        error: null,
    };
class a extends n.Component {
    constructor(t) {
        super(t), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = i);
    }
    static getDerivedStateFromError(t) {
        return {
            didCatch: !0,
            error: t,
        };
    }
    resetErrorBoundary() {
        let { error: t } = this.state;
        if (null !== t) {
            for (var e, o, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            null == (e = (o = this.props).onReset) ||
                e.call(o, {
                    args: r,
                    reason: "imperative-api",
                }),
                this.setState(i);
        }
    }
    componentDidCatch(t, e) {
        var o, n;
        null == (o = (n = this.props).onError) || o.call(n, t, e);
    }
    componentDidUpdate(t, e) {
        let { didCatch: o } = this.state,
            { resetKeys: n } = this.props;
        if (
            o &&
            null !== e.error &&
            (function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t.length !== e.length || t.some((t, o) => !Object.is(t, e[o]));
            })(t.resetKeys, n)
        ) {
            var r, a;
            null == (r = (a = this.props).onReset) ||
                r.call(a, {
                    next: n,
                    prev: t.resetKeys,
                    reason: "keys",
                }),
                this.setState(i);
        }
    }
    render() {
        let { children: t, fallbackRender: e, FallbackComponent: o, fallback: i } = this.props,
            { didCatch: a, error: s } = this.state,
            l = t;
        if (a) {
            let t = {
                error: s,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if ("function" == typeof e) l = e(t);
            else if (o) l = (0, n.createElement)(o, t);
            else if (void 0 !== i) l = i;
            else throw s;
        }
        return (0, n.createElement)(
            r.Provider,
            {
                value: {
                    didCatch: a,
                    error: s,
                    resetErrorBoundary: this.resetErrorBoundary,
                },
            },
            l,
        );
    }
}
