n.d(t, { SV: () => o });
var r = n(473749);
let i = (0, r.createContext)(null),
    a = {
        didCatch: !1,
        error: null,
    };
class o extends r.Component {
    constructor(e) {
        super(e), (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)), (this.state = a);
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
            for (var t, n, r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            null == (t = (n = this.props).onReset) ||
                t.call(n, {
                    args: i,
                    reason: "imperative-api",
                }),
                this.setState(a);
        }
    }
    componentDidCatch(e, t) {
        var n, r;
        null == (n = (r = this.props).onError) || n.call(r, e, t);
    }
    componentDidUpdate(e, t) {
        let { didCatch: n } = this.state,
            { resetKeys: r } = this.props;
        if (n && null !== t.error && s(e.resetKeys, r)) {
            var i, o;
            null == (i = (o = this.props).onReset) ||
                i.call(o, {
                    next: r,
                    prev: e.resetKeys,
                    reason: "keys",
                }),
                this.setState(a);
        }
    }
    render() {
        let { children: e, fallbackRender: t, FallbackComponent: n, fallback: a } = this.props,
            { didCatch: o, error: s } = this.state,
            l = e;
        if (o) {
            let e = {
                error: s,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if ("function" == typeof t) l = t(e);
            else if (n) l = (0, r.createElement)(n, e);
            else if (void 0 !== a) l = a;
            else throw s;
        }
        return (0, r.createElement)(
            i.Provider,
            {
                value: {
                    didCatch: o,
                    error: s,
                    resetErrorBoundary: this.resetErrorBoundary,
                },
            },
            l,
        );
    }
}
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
}
